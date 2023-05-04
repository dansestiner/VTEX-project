import Common from '../../../../common/js/pages/product';
import MainImages from './_images';
import QtyActions from './_qty-actions';
import DescriptionActions from './_description-actions';
import MainShelf from './_main-shelf';

const init = () => {
  Common.init();
  MainImages.init();
  QtyActions.init();
  DescriptionActions.init();
  MainShelf.init();
  setTimeout(() => {
    $('#_sincero_widget > section.ts-customer-questions > div > div > div > textarea').attr('placeholder', 'Digite aqui...')
    $('#_sincero_widget > section.ts-customer-questions > div > div > div > button').html('Enviar')
    if ($('.js--add-to-cart').html() == 'indisponível') {
      $('.js--add-to-cart').parent().css("max-width", '100%')
    }
  }, 2000);

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
    $('.btn-more-info').trigger('click');
    return false;
  });
  
  var resize = function(){
    var frame = $('#iframe')[0];
    frame.style.height = frame.contentWindow.document.body.scrollHeight + 50 + 'px';
  }
    
};

export default {
  init,
};
