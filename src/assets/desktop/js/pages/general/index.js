import GeneralHeader from './_general__header';
import GeneralFooterSeo from './_footer__seo';
import GeneralQuickView from '../quickview';
import popupLogin from './_popup-login';
import imageSearch from './_image-search';

const init = () => {
  GeneralHeader.init();
  GeneralFooterSeo.init();
  GeneralQuickView.init();
  popupLogin.init()
  imageSearch.init()

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
