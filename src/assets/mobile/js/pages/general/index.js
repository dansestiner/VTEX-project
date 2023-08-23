import GeneralHeader from './_header';
import GeneralSubmenu from './_submenu';
import GeneralFooter from './_footer';
import popupLogin from './_popup-login';
import imageSearch from './_image-search';

const init = () => {
  GeneralHeader.init();
  GeneralSubmenu.init();
  GeneralFooter.init();
  popupLogin.init();
  imageSearch.init();

  $(document).ready(function () {
    console.log('testtt')
    $('body').addClass('loadBestShelf');
    function bestResolutionImage() {
      $('.x-shelf__img-container .x-shelf__img-front').each(function () {
        let imageLinkFront = $(this).attr('src').replace('157-189', '500-500');
        $(this).attr('src', imageLinkFront);

        if ($(window).width() > 1025) {
          let imageLinkBack = $(this).find('.x-shelf__img-back').attr('src').replace('157-189', '500-500');
          $(this).find('.x-shelf__img-back').attr('src', imageLinkBack);
        }
      });

      $('.x-shelf__img-container .x-shelf__img-front').each(function () {
        let imageLinkFront = $(this).attr('src').replace('240-289', '500-500');
        $(this).attr('src', imageLinkFront);

        if ($(window).width() > 1025) {
          let imageLinkBack = $(this).find('.x-shelf__img-back').attr('src').replace('157-189', '500-500');
          $(this).find('.x-shelf__img-back').attr('src', imageLinkBack);
        }
      });
    }

    setInterval(function () {
      if ($('.x-shelf__img-front').length > 0) {
        bestResolutionImage();
        return false;
      }
    }, 20);


    $('.x-submenu__department__list--Por-Tamanho').addClass('open-submenu');
    $('.x-submenu__department__list--Por-tamanho').addClass('open-submenu');
    $('.x-submenu__department__heading').on('click', function () {
      $(this).toggleClass('open');
      $(this).next('.x-submenu__department__list').toggleClass('open-submenu');
    });
  });
};

export default {
  init,
};
