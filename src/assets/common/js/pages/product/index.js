import ProductRvMain from './_rv-main';
import ProductSelectActions from './_select-actions';
import ProductBuyTogether from './_buy-together';
import ProductMethods from './_product-methods';

const init = () => {
  ProductRvMain.init();
  ProductSelectActions.init();
  ProductBuyTogether.init();
  ProductMethods.init()

  setTimeout(() => {
    if ($('.x-product__sizes').css('display') == 'none') {
      $('.x-product__label')[1].remove()
    }
  }, 2000);
  document.title = dataLayer[0].pageTitle.split('|')[0] + "| Sestini Oficial"

  //LandingpPage em produtos
  setInterval(function () {
    if($('.iframe').length == 1){
      $('.iframe button').attr('id', dataLayer[0].productReferenceId);
    };
    return false;
  }, 100);  

  $(document).on('click', '.btn-more-info', function(){
    $('#iframe').removeClass('hidden');
    resize();
  });
  
  var resize = function(){
    var frame = $('#iframe')[0];
    frame.style.height = frame.contentWindow.document.body.scrollHeight + 20 + 'px';
  }
  $('.btn-more-info').trigger('click');
};

export default {
  init,
};