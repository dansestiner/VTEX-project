import CacheSelectors from "./__cache-selectors";

const El = CacheSelectors.vtex;
const Methods = {
  init() {
    Methods.vtexIdEvents();
    Methods.closeLoginModal();
    Methods.removeHelperComplement();
    Methods.addCachedWishlistItems();

    $(document).on("ajaxStop", () => Methods.removeHelperComplement);
  },

  removeHelperComplement() {
    El.helperComplement.remove();
  },

  closeLoginModal() {
    $(document).on("click", ".vtexIdUI-close", (ev) =>
      Sestini.closeMenus(true)
    );
  },

  vtexIdEvents() {
    $(window).on("started.vtexid", (ev) => {
      Sestini.body.addClass("has--loader");
      Sestini.overlay.addClass("is--active");
    });

    $(window).on("closed.vtexid", (ev) => Sestini.closeMenus(true));
    $(window).on("rendered.vtexid", (ev) =>
      Sestini.body.removeClass("has--loader")
    );
    $(window).on("authenticatedUser.vtexid", (ev) => {});
    $(window).on("guestUser.vtexid", (ev) => {});
  },

  addCachedWishlistItems() {
    const userData = Methods.getUserData(dataLayer);
    if (userData.visitorLoginState) {
      const wishlistItem = window.sessionStorage.getItem("wishlistItem");
      const wishlistURL = window.sessionStorage.getItem("wishlistURL");
      if (wishlistItem) {
        fetch(
          `https://sestinidocs.com.br/links/sestini/ecomm-api/save-product-wishlist.php?email=${userData.visitorContactInfo[0]}&productId=${wishlistItem}`
        );
        window.sessionStorage.removeItem("wishlistItem");
        window.sessionStorage.removeItem("wishlistURL");
        if (wishlistURL) window.location.href = wishlistURL;
      }
    }
  },

  getUserData(dataLayer) {
    for (let i = 0; i < dataLayer.length; i++) {
      if (dataLayer[i].visitorContactInfo) {
        if (dataLayer[i].visitorContactInfo.length > 0) {
          return dataLayer[i];
        }
      }
    }
    return [];
  },
};

export default {
  init: Methods.init,
};
