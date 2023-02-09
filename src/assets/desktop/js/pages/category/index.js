import Common from '../../../../common/js/pages/category';

const Methods = {
        init() {            
            Common.init();
            setTimeout(() => {
                Methods.setPaginationCustomization();
            }, 1000);
            window.onhashchange = function() {
                Methods.setPaginationCustomization();
            }
            $(document).ready(function() {
                $('body').addClass('loadBestShelf');
                function bestResolutionImage(){    
                    $('.x-shelf__item .x-shelf__placeloader').each(function(){
                      let imageLinkFront = $(this).find('.x-shelf__img-front').attr('src').replace('157-189', '500-500');
                      $(this).find('.x-shelf__img-front').attr('src', imageLinkFront);
                
                
                      if( $(window).width() > 1025 ){
                          let imageLinkBack = $(this).find('.x-shelf__img-back').attr('src').replace('157-189', '500-500');
                          $(this).find('.x-shelf__img-back').attr('src', imageLinkBack);
                      }        
                    });
                }
                $('.cf-pagination').on('click', function(){
                  var qtd = 0;
                  var loadBestImage = setInterval(function () {
                      bestResolutionImage()
                      qtd++;
                      if (qtd > 4) clearInterval(loadBestImage);
                  }, 1500);
                })
                $('.multi-search-checkbox').on('click', function(){
                    var qtd = 0;
                    var loadBestImage = setInterval(function () {
                        bestResolutionImage()
                        qtd++;
                        if (qtd > 4) clearInterval(loadBestImage);
                    }, 1500);
                })
                setInterval(function () {
                  if($('.x-shelf__img-front').length > 0){
                    bestResolutionImage();
                    return false;
                  }
                }, 20);  
            });
        },
        setPaginationCustomization() {
            $(`.cf-pagination__button-last`).html(`Última Página`)
            $(`.cf-pagination__button-first`).html(`Primeira Página`)
            if (dataLayer[0].categoryId) {
                fetch(`https://sestinidocs.com.br/links/sestini/ecomm-api/count-products-category.php?categoryId=${dataLayer[0].categoryId}`)
                    .then(res => res.json())
                    .then(data => {
                            if (data.result >= 16) {
                                var template = `<p id='quantity-view-product'>Você visualizou <span>${16 * window.location.href.split(`#`)[1]}</span> de <span>${data.result}</span> produtos</p>`
                        }else{
                            var template = `<p id='quantity-view-product'>Você visualizou <span>${data.result}</span> de <span>${data.result}</span> produtos</p>`
                        }                        
                        $(`#quantity-view-product`).remove()
                        $(`.cf-pagination`).before(template)
                })
            }else{
                if (parseInt(dataLayer[0].pageTitle.split(`–`)[0].trim())){
                    console.log(`https://sestinidocs.com.br/links/sestini/ecomm-api/count-products-collection.php?collectionId=${parseInt(dataLayer[0].pageTitle.split(`–`)[0].trim())}`)
                    fetch(`https://sestinidocs.com.br/links/sestini/ecomm-api/count-products-collection.php?collectionId=${parseInt(dataLayer[0].pageTitle.split(`–`)[0].trim())}`)
                        .then(res => res.json())
                        .then(data => {
                            if(data.result >= 16){
                                var template = `<p id='quantity-view-product'>Você visualizou <span>${16 * window.location.href.split(`#`)[1]}</span> de <span>${data.result}</span> produtos</p>`
                            }else{
                                var template = `<p id='quantity-view-product'>Você visualizou <span>${data.result}</span> de <span>${data.result}</span> produtos</p>`
                            }
                            $(`#quantity-view-product`).remove()
                            $(`.cf-pagination`).before(template)
                    })
                }
            }
    }
};

export default {
    init: Methods.init,
};