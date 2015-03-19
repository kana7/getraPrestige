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

    /*Over animation*/
    $('#menu li a').click(function () {
        $('div.menu').toggleClass('menu-active');
    });


    /*Display text*/

    $('.service').click(function(){
        
        var p=$(this).children("p");
        var div=$(this).children("div");
        $(p).toggleClass("focused",p.is(":focus"));
        $(div).toggleClass("focused",div.is(":focus"));
        $(this).after("<p class=\"col-xs-12 text-center\">Ceci est un test</p>");
    });

    /* Animation for header*/
    var sticky = $(".sticky");
    var height = $('header').height();

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
                $('#logo').animate({marginTop: "9px", marginBottom: "11px", width: "161px", height: "54px"}, 500);
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



    /*Redirection menu*/
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - (height + 30) //offsets for fixed header
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
                scrollTop: target.offset().top - (height + 30) //offset height of header here too.
            }, 1000);
            return false;
        }
    }
});