$(function () {
    $('#mymap').gmap3({
        map: {
            options: {
                center: [49.609314, 6.118184],
                zoom: 16,
                maxZoom: 20,
                minZoom: 14,
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
                icon : new google.maps.MarkerImage('img/logo/icon.png')
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
});