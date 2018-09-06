function initMap() {
    var mylocation = {
        lat: 14.065706, lng: 121.287076
    }
        ;
    var contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h1 id="firstHeading" class="firstHeading" style="font-size:2rem">Maja Thai</h1>' + '<div id="bodyContent">' + '<p>Address: Alyssa Arcade Bldg, Maharlika Highway <br> San Benito, Alaminos, Laguna  <br >' + 'Phone: 0928 447 8369/ 0926 747 0879/ 0932 206 6324 <br> ' + 'Email: majathai@gmail.com </p> ' + '</div>' + '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    }
    );
    var map = new google.maps.Map(document.getElementById('map'), {
        center: mylocation, zoom: 18, styles: [{
            "featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{
                "color": "#f7f1df"
            }
            ]
        }
            , {
            "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{
                "color": "#ffffff"
            }
            ]
        }
            , {
            "featureType": "landscape.natural.terrain", "elementType": "geometry", "stylers": [{
                "visibility": "on"
            }
            ]
        }
            , {
            "featureType": "poi", "elementType": "labels", "stylers": [{
                "visibility": "on"
            }
            ]
        }
            , {
            "featureType": "poi.business", "elementType": "all", "stylers": [{
                "visibility": "on"
            }
            ]
        }
            , {
            "featureType": "poi.medical", "elementType": "geometry", "stylers": [{
                "color": "#fbd3da"
            }
            ]
        }
            , {
            "featureType": "poi.park", "elementType": "geometry", "stylers": [{
                "color": "#bde6ab"
            }
            ]
        }
            , {
            "featureType": "road", "elementType": "geometry.stroke", "stylers": [{
                "visibility": "on"
            }
            ]
        }
            , {
            "featureType": "road", "elementType": "labels", "stylers": [{
                "visibility": "on"
            }
            ]
        }
            , {
            "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{
                "color": "#ffe15f"
            }
            ]
        }
            , {
            "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{
                "color": "#efd151"
            }
            ]
        }
            , {
            "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{
                "color": "#ffffff"
            }
            ]
        }
            , {
            "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{
                "color": "black"
            }
            ]
        }
            , {
            "featureType": "transit.station.airport", "elementType": "geometry.fill", "stylers": [{
                "color": "#cfb2db"
            }
            ]
        }
            , {
            "featureType": "water", "elementType": "geometry", "stylers": [{
                "color": "#a2daf2"
            }
            ]
        }
        ]
    }
    );
    var marker = new google.maps.Marker({
        position: mylocation, map: map, title: 'Jardin de Julita'
    }
    );
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    }
    );
}