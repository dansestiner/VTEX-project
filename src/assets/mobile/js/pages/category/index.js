import Common from '../../../../common/js/pages/category';
import FilterButton from './_filter-button';
import DescriptionAccordion from './_description-accordion';

const init = () => {
  Common.init();
  FilterButton.init();
  DescriptionAccordion.init();

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

};

export default {
  init,
};
