		function drawmap() {
			
			var mapoptions = {
				center: new google.maps.LatLng(37.786, -122.39),
				zoom: 10,
				styles:[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#ff6a6a"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ff6a6a"
            },
            {
                "lightness": "75"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "75"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "weight": "0.01"
            },
            {
                "hue": "#ff0028"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#80e4d8"
            },
            {
                "lightness": "25"
            },
            {
                "saturation": "-23"
            }
        ]
    }
]
			};
			
			
			var mymap = new google.maps.Map(
				document.getElementById("map1"),
				mapoptions
			);
			
			
			var myJSON = [
				{
					"lat": 37.775,
					"lng": -122.4183333,
					"description": "Billbo San Francisco Customer Service Center"
				},
                {
                    "lat": 37.3394444,
                    "lng": -121.8938889,
                    "description": "Billbo Headquarter"
                }
			];
			
			
			var markerBounds = new google.maps.LatLngBounds();
			
			
			var infowindow = new google.maps.InfoWindow();
			
			
		 	for(var counter=0; counter < myJSON.length; counter++ ) {
		 		
		 		var data = myJSON[counter];
		 		
		 		var mymarker = new google.maps.Marker({
		 			position:new google.maps.LatLng(data.lat, data.lng),
		 			title:data.title,
		 			map:mymap
		 		});
		 	
		 		(function(mymarker,data) {
					google.maps.event.addListener(
						mymarker,
						"click",
						function() {
							//inside these curlies code runs when user clicks marker
							infowindow.setContent(data.description);
							infowindow.open(mymap,mymarker);
						}
					);
		 		})(mymarker,data);
		 		
		 		markerBounds.extend(new google.maps.LatLng(data.lat, data.lng));
		 	}
		 
		 	mymap.fitBounds(markerBounds);
		}