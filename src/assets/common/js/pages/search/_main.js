import CacheSelector from './__cache-selectors';

const { searchedResultsNum, searchedText } = CacheSelector;

const Methods = {
  init() {
    Methods.insertSearchInfo();
    Methods.scrollToTop();

    setInterval(() => {
      Methods.setDiscountFlag();
      Methods.bindChangePage();
    }, 1000);
    const searchTerm = vtxctx.searchTerm.charAt(0).toUpperCase() + vtxctx.searchTerm.slice(1)
    document.title = searchTerm   + " | Sestini Oficial"
  },

  bindChangePage() {
    window.addEventListener('hashchange', () => {
      Methods.setDiscountFlag()
    })
  },

  /*setDiscountFlag() {
    $('.shelf-product-flag__discount').each((item, elem) => {
    $('.x-shelf__old-price').each((item, elem) => {
      const oldPrice = $(elem).parent().find('.x-shelf__content').find('.x-shelf__old-price').html() != undefined ? $(elem).parent().find('.x-shelf__content').find('.x-shelf__old-price').html().replace('R$', '') : 0
      const bestPrice = $(elem).parent().find('.x-shelf__content').find('.x-shelf__best-price').html() != undefined ? $(elem).parent().find('.x-shelf__content').find('.x-shelf__best-price').html().replace('R$', '') : 0
      if (parseFloat(bestPrice) < parseFloat(oldPrice)) {
        const discountPercentage = 100 - ((parseFloat(bestPrice) * 100) / parseFloat(oldPrice))
        $(elem).html(`<span>${parseInt(discountPercentage)}% OFF</span>`)
      } else {
        $(elem).remove()
      }
    })
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

  insertSearchInfo() {
    const term = vtxctx.searchTerm || '';
    const num = document.querySelector(
      '.searchResultsTime .resultado-busca-numero .value',
    ).innerHTML;

    [...searchedResultsNum].map((el) => {
      el.innerHTML = num;
    });

    [...searchedText].map((el) => {
      el.innerHTML = term;
    });
  },
  scrollToTop() {
    $(document).on('beforeChangePage.vtexCategoryFilter', () => {
      Sestini.smoothScrollTo(0, 0, 1000);
      Methods.setDiscountFlag()
    });
  }
}

export default {
  init: Methods.init,
};
