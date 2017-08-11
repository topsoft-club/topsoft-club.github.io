$(function() {

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  setTimeout(function() { $('.page-loader-wrapper').fadeOut(); }, 50);

  $.Admin.leftSideBar.activate();
  $.Admin.navbar.activate();
});

$.Admin = {};

$.Admin.options = {
  colors: {
    red: '#F44336',
    teal: '#009688'
  },
  leftSideBar: {
    scrollColor: 'rgba(0,0,0,0.5)',
    scrollWidth: '4px',
    scrollAlwaysVisible: true,
    scrollBorderRadius: '0',
    scrollRailBorderRadius: '0'
  },
  dropdownMenu: {
    effectIn: 'fadeIn',
    effectOut: 'fadeOut'
  }
}

$.Admin.navbar = {
  activate: function() {
    var $body = $('body');
    var $overlay = $('.overlay');

    //Open left sidebar panel
    $('.bars').on('click', function() {
      $body.toggleClass('overlay-open');
      if ($body.hasClass('overlay-open')) { $overlay.fadeIn(); } else { $overlay.fadeOut(); }
    });

    //Close collapse bar on click event
    $('.nav [data-close="true"] ').on('click', function() {
      var isVisible = $('.navbar-toggle').is(':visible');
      var $navbarCollapse = $('.navbar__collapse');
      if (isVisible) {
        $navbarCollapse.slideUp(function() {
          $navbarCollapse.removeClass('in').removeAttr('style');
        });
      } else {
        $navbarCollapse.slideDown(function() {
          $navbarCollapse.toggleClass('in').removeAttr('style');
        });
      }
    });

  }
}

$.Admin.leftSideBar = {
  activate: function() {
    var obj = this;
    var $body = $('body');
    var $overlay = $('.overlay');

    //Close sidebar
    $(window).click(function(e) {
      var $target = $(e.target);

      if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent(); }

      if (!$target.hasClass('bars') && obj.isOpen() && $target.parents('#leftsidebar').length === 0) {
        if (!$target.hasClass('js-right-sidebar')) $overlay.fadeOut();
        $body.removeClass('overlay-open');
      }
    });

    $.each($('.menu-toggle.toggled'), function(i, val) {
      $(val).next().slideToggle(0);
    });

    //When page load
    $.each($('.menu .list li.active'), function(i, val) {
      var $activeAnchors = $(val).find('a:eq(0)');

      $activeAnchors.addClass('toggled');
      $activeAnchors.next().show();
    });

    //Collapse or Expand Menu
    $('.menu-toggle').on('click', function(e) {
      var $this = $(this);
      var $content = $this.next();

      if ($($this.parents('ul')[0]).hasClass('list')) {
        var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

        $.each($('.menu-toggle.toggled').not($not).next(), function(i, val) {
          if ($(val).is(':visible')) {
            $(val).prev().toggleClass('toggled');
            $(val).slideUp();
          }
        });
      }

      $this.toggleClass('toggled');
      $content.slideToggle(320);
    });

    //Set menu height
    obj.setMenuHeight();
    obj.checkStatuForResize(true);
    $(window).resize(function() {
      obj.setMenuHeight();
      obj.checkStatuForResize(false);
    });

    //Set Waves
    Waves.attach('.menu .list a', ['waves-block']);
    Waves.init();
  },
  setMenuHeight: function() {
    if (typeof $.fn.slimScroll != 'undefined') {
      var configs = $.Admin.options.leftSideBar;
      var height = ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').innerHeight()));
      var $el = $('.list');

      $el.slimScroll({ destroy: true }).height("auto");
      $el.parent().find('.slimScrollBar, .slimScrollRail').remove();

      $el.slimscroll({
        height: height + "px",
        color: configs.scrollColor,
        size: configs.scrollWidth,
        alwaysVisible: configs.scrollAlwaysVisible,
        borderRadius: configs.scrollBorderRadius,
        railBorderRadius: configs.scrollRailBorderRadius
      });
    }
  },
  checkStatuForResize: function(firstTime) {
    var $body = $('body');
    var $openCloseBar = $('.navbar .navbar__header .bars');
    var width = $body.width();

    if (firstTime) {
      $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function() {
        $(this).removeClass('no-animate').dequeue();
      });
    }

    if (width < 1170) {
      $body.addClass('ls-closed');
      $openCloseBar.fadeIn();
    } else {
      $body.removeClass('ls-closed');
      $openCloseBar.fadeOut();
    }
  },
  isOpen: function() {
    return $('body').hasClass('overlay-open');
  }
};
