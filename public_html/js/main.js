$(function () {

    /* Google Map*/
    $('#mymap').gmap3({
        map: {
            options: {
                center: [49.609314, 6.118184],
                zoom: 16,
                scrollwheel: false,
                mapMaker: false,
                mapTypeControl: false,
                panControl: false,
                zoomControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                rotateControlOptions: false,
                overviewMapControl: false,
                OverviewMapControlOptions: false,
                styles: [
                    {featureType: "poi",
                        stylers: [
                            {visibility: "off"}
                        ]
                    }, {
                        stylers: [
                            {hue: "#ef7920"},
                            {saturation: -20}
                        ]
                    }, {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [
                            {lightness: 100},
                            {visibility: "on"}
                        ]
                    }, {
                        featureType: "road",
                        elementType: "labels",
                        stylers: [
                            {visibility: "on"}
                        ]
                    }
                ]
            }
        },
        marker: {
            values: [
                {address: "16 Avenue du Dix Septembre, 2550 Luxembourg", data: "14, Avenue du X Septembre"}
            ],
            options: {
                draggable: false,
                icon: new google.maps.MarkerImage('img/logo/icon.png')
            },
            events: {
                mouseover: function (marker, event, context) {
                    var map = $(this).gmap3("get"),
                            infowindow = $(this).gmap3({get: {name: "infowindow"}});
                    if (infowindow) {
                        infowindow.open(map, marker);
                        infowindow.setContent(context.data);
                    } else {
                        $(this).gmap3({
                            infowindow: {
                                anchor: marker,
                                options: {content: context.data}
                            }
                        });
                    }
                },
                mouseout: function () {
                    var infowindow = $(this).gmap3({get: {name: "infowindow"}});
                    if (infowindow) {
                        infowindow.close();
                    }
                }
            }
        }
    });

    /*On over transistion for header*/

    $('#menu li a').mouseover(function () {
        $(this).next().animate({borderBottomColor: "#ef7920"}, '800');
    });
    $('#menu li a').mouseout(function () {
        $(this).next().animate({borderBottomColor: "#c9c9c9"}, '800');
    });

    $('.carousel').carousel();

    /*Active state for services*/

    $("div.service").click(function () {
        $(this).toggleClass("active");
        $("div.service").not(this).removeClass("active");
    });

    $("div.row.service>p").hover(function () {
        $(this).prev().toggleClass("service-active", 700);
    });

    /*Active state icon menu*/
    $("#menu1").click(function () {
        $("#menu1").toggleClass("active");
    });

    /*
     * Behavior menu minimisé
     */
    $("ul.dropdown-menu li a").click(function () {
        $(this).parent().toggleClass("active");
    });
    $("ul.dropdown-menu li a").blur(function () {
        $(this).parent().removeClass("active");
    });

    $('html').on('hidden.bs.dropdown', function () {
        $("#menu1").removeClass("active");
    });


    /*Display text*/

    function viewport() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {width: e[ a + 'Width' ], height: e[ a + 'Height' ]};
    }

    var services = $('.service');
    var content = $('div.contenu');

    $('.service').click(function () {
        if($(content).children().length > 0 ){
            
        }
        var p = $(this).children("p");
        var div = $(this).children("div");
        $(this).after("<p class=\"col-xs-12 text-center\">Ceci est un test</p>");
    });


    /* Animation for header
     var sticky = $(".sticky");
     
     
     $(function () {
     $('.sticky').data('size', 'big');
     });
     
     $(window).scroll(function () {
     var $nav = $('.sticky');
     if ($('body').scrollTop() > 0) {
     if ($nav.data('size') == 'big') {
     $('#gap').animate({height: '0px'}, 800);
     $nav.data('size', 'small').stop().animate({
     height: '52px'
     }, 600);
     $('nav').animate({marginTop: "10px", marginBottom: "10px"}, 500);
     $('#logo').animate({marginTop: "9px", marginBottom: "11px", width: "130px", height: "40px"}, 500);
     }
     } else {
     if ($nav.data('size') == 'small') {
     $nav.data('size', 'big').stop().animate({
     height: '90px'
     }, 600);
     $('nav').animate({marginTop: "25px", marginBottom: "0px"}, 500);
     $('#logo').animate({marginTop: "20px", marginBottom: "11px", width: "191px", height: "59px"}, 500);
     $('#gap').animate({height: '90px'}, 800);
     
     }
     }
     });
     */

     
      var height = $('header').height();
      
    /*Redirection menu*/
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - (height) //offsets for fixed header
                }, 1000);
                return false;
            }
        }
    });
    //Executed on page load with URL containing an anchor tag.
    if ($(location.href.split("#")[1])) {
        var target = $('#' + location.href.split("#")[1]);
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - (height) //offset height of header here too.
            }, 1000);
            return false;
        }
    }
});