const GlobalLayoutConfig = {
  init() {
    GlobalLayoutConfig.setFlagDiscount();
    setTimeout(() => {
      GlobalLayoutConfig.setLoginBtnHref();
      if (window.innerWidth >= 1024) {
        GlobalLayoutConfig.bindDraggableSpike();
      }
    }, 500);
  },
  /*setSpikeIconBinds() {
    // ICON SPIKE
    var open = false;
    setTimeout(() => {
      movideskChatWidgetChangeWindowState("minimized");
      $(".icon-spike span").removeClass("active");
    }, 2000);
    $(".icon-spike").click(() => {
      if ($(".icon-spike").css("display") === "none") return;
      if (open) {
        movideskChatWidgetChangeWindowState("minimized");
        $(".icon-spike span").removeClass("active");
        open = false;
        clearInterval(openInterval);
      } else {
        if ($(".icon-spike").hasClass("dragging")) {
          $(".icon-spike").removeClass("dragging");
        } else {
          movideskChatWidgetChangeWindowState("maximized");
          $(".icon-spike span").addClass("active");
          open = true;
          var openInterval = setInterval(() => {
            $(
              "#md-app-widget > div.md-chat-widget-container.chat-mv-color.fancy-scroll.md-fade-when-visible.widget-type-chat.md-fade-to-visible > div > div.md-chat-widget-credits-container.md-fade-when-visible.md-fade-to-visible > img"
            ).css("width", "150px");
          }, 1000);
        }
      }
      $("body > div:nth-child(2)").css("display", "block !important");
      $("div:nth-child(5)").css("display", "block !important");
    });

    $(".icon-spike div").click(() => {
      $(".icon-spike").hide();
    });
    $(".icon-spike").css("display", "block");
  },*/
  /*setFlagDiscount() {
    $(".shelf-product-flag__discount").each((item, elem) => {
      const oldPrice =
        $(elem)
          .parent()
          .find(".x-shelf__content")
          .find(".x-shelf__old-price")
          .html() != undefined
          ? $(elem)
              .parent()
              .find(".x-shelf__content")
              .find(".x-shelf__old-price")
              .html()
              .replace("R$", "")
          : 0;
      const bestPrice =
        $(elem)
          .parent()
          .find(".x-shelf__content")
          .find(".x-shelf__best-price")
          .html() != undefined
          ? $(elem)
              .parent()
              .find(".x-shelf__content")
              .find(".x-shelf__best-price")
              .html()
              .replace("R$", "")
          : 0;
      if (parseFloat(bestPrice) < parseFloat(oldPrice)) {
        const discountPercentage =
          100 - (parseFloat(bestPrice) * 100) / parseFloat(oldPrice);
        $(elem).html(`<span>${parseInt(discountPercentage)}% OFF</span>`);
      } else {
        $(elem).remove();
      }
    });
  },*/

  setDiscountFlag() {
    $(".shelf-product-flag__discount").each((index, elem) => {
      const oldPriceElem = $(elem).parent().find(".x-shelf__content").find(".x-shelf__old-price");
      const bestPriceElem = $(elem).parent().find(".x-shelf__content").find(".x-shelf__best-price");
  
      const oldPrice = oldPriceElem.length 
        ? parseFloat(oldPriceElem.html().replace("R$", "").replace(".", "").replace(",", "."))
        : 0;
  
      const bestPrice = bestPriceElem.length 
        ? parseFloat(bestPriceElem.html().replace("R$", "").replace(".", "").replace(",", "."))
        : 0;
  
      // Verificar se ambos os preços são válidos e o desconto é aplicável
      if (oldPrice > 0 && bestPrice > 0 && bestPrice < oldPrice) {
        const discountPercentage = 100 - (bestPrice * 100) / oldPrice;
        $(elem).html(`<span>${parseInt(discountPercentage)}% OFF</span>`);
      } else {
        $(elem).remove();  // Remove o selo se não houver desconto
      }
    });
  },
  
  setLoginBtnHref() {
    if (
      $(".x-header-container__top-account-button").hasClass("is--logged") ==
      true
    ) {
      $(".js--login-btn").click(() => (window.location.href = "/account"));
    } else {
      $(".js--login-btn").click(() => (window.location.href = "/login"));
    }

    if ($(".x-header__login-btn").parent().hasClass("is--logged") == true) {
      $(".js--login-btn").click(() => (window.location.href = "/account"));
    } else {
      $(".js--login-btn").click(() => (window.location.href = "/login"));
    }
  },

  bindDraggableSpike() {
    const bindDraggableSpikeInterval = setInterval(() => {
      if ($(".icon-spike").draggable == undefined) {
        return true;
      } else {
        $(".icon-spike").draggable({
          start: () => {
            $(".icon-spike").addClass("dragging");
          },
        });
        clearInterval(bindDraggableSpikeInterval);
      }
    }, 1000);
  },
};

export default GlobalLayoutConfig;
