
/*DOCUMENT Ã CHARGER DANS LA PAGE*/

var housecare = "<div class=\"col-xs-12 traitLight orange\"></div><p class=\"ser\" style=\"clear:both;\">GETRA PRESTIGE will manage, maintain and run every aspect of your residence or office in a professional yet personal manner. The „house caretaking“ service covers all aspects of a property from the foundations to the roof and everything in between.</p><p class=\"ser\">Our technical team is at your disposal 24/7 to cover all types of problems. From alarms to burst water pipes we can be called in case of emergency. Our contact details will also be made available to all neighbours so they can contact us if something is amiss.</p><p class=\"ser\">Our technical team is at your disposal 24/7 to cover all types of problems. From alarms to burst water pipes we can be called in case of emergency. Our contact details will also be made available to all neighbours so they can contact us if something is amiss.</p><p class=\"ser\">We want our clients to be able to relax, knowing that we are regularly looking after their home to ensure it is safe and secure.</p><p class=\"ser\">All the technical details will be documented and presented to our team in order to react appropriately in case there is a problem / emergency. </p>";

var incing = "<div class=\"col-xs-12 traitLight orange\"></div><p style=\"clear:both;\"></p>";

var gardening = "<div class=\"col-xs-12 traitLight orange\"></div><p style=\"clear:both;\">Getra prestige provides gardening and landscaping services that are right for each client, from simple watering, cutting the grass to the total remodelling of a garden or the suroundings of a house</p>";

var welcome = "<div class=\"col-xs-12 traitLight orange\"></div><p style=\"clear:both;\">GETRA PRESTIGE will remove the worries of leaving the house unattended. We deliver a professional service ensuring the property is checked on regularly. Our „welcomehome“ service is designed to ensure that when our clients open the front door after a prolonged absence, they feel at home straight away. We ensure that the residence or office is warm, the fridge is restocked and fresh sheets are on the bed.</p>";
var concierge = "<div class=\"col-xs-12 traitLight orange\"></div><p style=\"clear:both;\">GETRA PRESTIGE will support you during your stay. Our „concierge“ service is there to help you with all your requests and needs you may have. Our aim is to build enduring relationships with our clients ensuring confidence and privacy while working with us.</p><p style=\"text-decoration:underline;\">Need to organise an event, make a reservation or a last minute babysitter? Call us and we will help you out.</p>";
var carte = "<div class=\"col-xs-12 traitLight orange\"></div><p style=\"clear:both;\">Whatever your needs are, we can assist you and make your life as easy and enjoyable as possible.</p><p style=\"text-decoration:underline;\">All our services can adapted to your requests and needs.</p>";

var modern = "<div class=\"col-xs-12 traitLight orange\"></div><p style=\"clear:both;\">Renovations or refurbishments lead to many problems and leave behind a huge mess. Often it is not feasible for homeowners to stay in their property while workers make noise. Our clients do not want to lose any precious time and prefer spending time doing other important things thus and charge us to control the work. We supervise all the contractors, manage the project from its inception right through to the last finsh. You will come back to your property that is fully refurbished to your specifications, tidied up and all your your furniture will be back in their rightful places.</p><p style=\"text-decoration:underline;\">Having a trained team (experts in various areas) we assure a perfect and flawless result as quick as possible. Getra Rénovation will offer services, going from mending leaks to the entire renovation of your house or apartment.</p>";

var design = "<div class=\"col-xs-12 traitLight orange\"></div><p style=\"clear:both;\">Furnishing a home can be a challenging and time-consuming job. Getra prestige is able to provide a comprehensive as well as competent interior design service for private clients as well as furnishings suitable for either the private home or investment property. </p><p style=\"text-decoration:underline;\">Do you have a precise idea what your house or apartment should look like? We will realise your vision with the help of renowned Luxembourgish interior designers.</p>";

var clean = "<div class=\"col-xs-12 traitLight orange\"></div><p style=\"clear:both;\"><strong>properties</strong></p><p>Whether we organise the regular weekly cleaning of a property or the once-a-year spring clean whilst our client is on holiday, we will take over the responsibility and <span style=\"text-decoration:underline;\">organise the cleaning of your property.</span>  As many of our clients have valuable possessions and we ensure the cleaning staff will be well briefed and thoroughly vetted before commencing work.</p><p><strong>laundry</strong></p><p>One of the most tedious household chores is doing the laundry. Whether it is sheets, towels or shirts, it seems like a never-ending chore. Getra Prestige will pick up, re-deliver and even put away our client's laundry, ensuring the best quality and care.</p>";

var mail = "<div class=\"col-xs-12 traitLight orange\"></div><p style=\"clear:both;\">This service provides a regular monitoring of their customers’ mail. Whether we are required to simply monitor the post and flag up important letters, or asked to scan or forward the mail to an alternative address, we can ensure our clients will never miss an important letter again.</p>";

var map = {"house": housecare, "icing": incing, "gardening": gardening, "welcome": welcome, "concierge": concierge, "carte": carte, "modern": modern, "design": design, "clean": clean, "mail": mail};


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


    /*Active state for services*/
    $("div.row.service>p").hover(function () {
        $(this).prev().toggleClass("service-active", 700);
    });

    /*Active state icon menu*/
    $("#menu1").click(function () {
        $("#menu1").toggleClass("active");
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

    function getDiv(width, element) {
        var index;
        var set;
        if (width < 767) {
            index = Math.ceil((($(element).index(".service")) + 1) / parseFloat(1));
            set = $('div.contenu.phone');
        } else if (width >= 767 && width < 992) {
            index = Math.ceil((($(element).index(".service")) + 1) / parseFloat(2));
            set = $('div.contenu.tab');
        } else if (width >= 992) {
            index = Math.ceil((($(element).index(".service")) + 1) / parseFloat(3));
            set = $('div.contenu.desktop');
        }
        return $(set[index - 1]);
    }

    $('#imagesServices').on('click', '.service', function () {
        $(this).toggleClass("active");
        $("div.service").not(this).removeClass("active");
        $("div.service").each(function () {
            if (!($(this).hasClass("active"))) {
                getDiv(viewport().width, $(this)).slideUp(700, function () {
                    getDiv(viewport().width, $(this)).empty();
                });
            }
        });
        if ($(this).hasClass("active")){
            getDiv(viewport().width, $(this)).hide().empty().append(map[$(this).attr("id")]).slideDown(700);
        }
    });
    

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