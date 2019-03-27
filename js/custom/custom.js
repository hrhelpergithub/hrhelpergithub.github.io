/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :	STARTUP TEMPLATES
	Version     :	1.0
	Last Change : 	20/07/2017
	Primary Use :   STARTUP TEMPLATES

=================================================================================================================================*/
$(document).on('ready', function() {
    "use strict"; //Start of Use Strict
    var menu_bar = $('.navbar-default');
    var menu_li = $('.navbar-nav li a');
    var collapse = $('.navbar-collapse');
    var top_nav = $('#top-nav');
    var top_menu = $('.header-menu-1');



    //MENU-2 SCROLL
    if (top_nav.length) {
        var x = top_nav.offset().top;
        if (x > 50) {
            top_nav.fadeIn();
        } else {
            top_nav.fadeOut();
        }
        $(document).on('scroll', function() {
            var y = $(this).scrollTop();
            if (y > 50) {
                top_nav.fadeIn();
            } else {
                top_nav.fadeOut();
            }
        });
    }

    //RESPONSIVE MENU SHOW AND HIDE FUNCTION
    if (menu_li.length) {
        menu_li.on("click", function(event) {
            collapse.slideToggle();
        });
        $('.navbar-default .navbar-toggle').on("click", function(e) {
            collapse.slideToggle();
        });
    }

    //COUNTER
    var counter = $('.count');
    if (counter.length) {
        counter.counterUp({
            delay: 10,
            time: 1000
        });
    }

    //GALLERY POPUP
    var gallery = $('.popup-gallery');
    if (gallery.length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    }

    return false;
    // End of use strict
});
