import Common from '../../../../common/js/pages/product';
import MainImages from './_images';
import MainShelf from './_main-shelf';
import DescriptionActions from './_description-actions';
import BottomBuyBar from './_bottom-buy-bar';

const init = () => {
  Common.init();
  MainImages.init();
  MainShelf.init();
  DescriptionActions.init();
  BottomBuyBar.init();
  // Change label text trustvox
  setTimeout(() => {
    $('#_sincero_widget > section.ts-customer-questions > div > div > div > textarea').attr('placeholder', 'Digite aqui...')
    $('#_sincero_widget > section.ts-customer-questions > div > div > div > button').html('Enviar')
  }, 2000);

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
    setInterval(function () {
      if($('.x-shelf__img-front').length > 0){
        bestResolutionImage();
        return false;
      }
    }, 20);
  });
};

export default {
  init,
};
