$(function() {

    // var arkansas_button = $('#arkansas');
    var central_florida_button = $('#central_florida');
    var central_texas_button = $('#central_texas');
    var great_lakes_button = $('#great_lakes');
    var michigan_button = $('#michigan');
    var mid_atlantic_button = $('#mid_atlantic');
    var mid_central_button = $('#mid_central');
    var midwest_button = $('#midwest');
    var northeast_button = $('#northeast');
    var northern_california_button = $('#northern_california');
    var oklahoma_button = $('#oklahoma');
    var rocky_mountains_button = $('#rocky_mountains');
    var wisconsin_button = $('#wisconsin');






    var mapStyle = [
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
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
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
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];






    // var arkansas_and_missouri_location =

    var central_florida_location = {lat: 28.636, lng: -81.385};
    var central_texas_location = {lat: 30.280, lng: -97.823};
    var great_lakes_location = {lat: 41.496977, lng:-88.232714};
    var michigan_location = {lat: 42.420596, lng: -83.472547};
    var mid_atlantic_location = {lat: 37.335150 , lng: -76.734674};
    var mid_central_location = {lat: 39.086625, lng: -84.505638};
    var midwest_location = {lat: 41.621519, lng: -93.756550};
    var northeast_location = {lat: 41.824139, lng: -71.409541};
    var northern_california_location = {lat: 37.454368, lng: -122.228481};
    var oklahoma_location = {lat: 36.133756, lng: -95.950065};
    var rocky_mountains_location = {lat: 39.608218, lng: -105.052298};
    var wisconsin_location = {lat: 43.031661, lng: -88.137621};



    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 4,
        styles: mapStyle,
        center: midwest_location,
        scrollwheel: false
    });
    var central_florida_marker = new google.maps.Marker({
        position: central_florida_location,
        map: map
    });

    var central_texas_marker = new google.maps.Marker({
        position: central_texas_location,
        map: map
    });

    var great_lakes_marker = new google.maps.Marker({
        position: great_lakes_location,
        map: map
    });

    var michigan_marker = new google.maps.Marker({
        position: michigan_location,
        map: map
    });

    var mid_atlantic_marker = new google.maps.Marker({
        position: mid_atlantic_location,
        map: map
    });

    var mid_central_marker = new google.maps.Marker({
        position: mid_central_location,
        map: map
    });

    var midwest_marker = new google.maps.Marker({
        position: midwest_location,
        map: map
    });


    var northeast_marker = new google.maps.Marker({
        position: northeast_location,
        map: map
    });

    var northern_california_marker = new google.maps.Marker({
        position: northern_california_location,
        map: map
    });

    var oklahoma_marker = new google.maps.Marker({
        position: oklahoma_location,
        map: map
    });

    var rocky_mountains_marker = new google.maps.Marker({
        position: rocky_mountains_location,
        map: map
    });

    var wisconsin_marker = new google.maps.Marker({
        position: wisconsin_location,
        map: map
    });


    var central_florida_info_window = new SnazzyInfoWindow({
        marker: central_florida_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Central Florida</div>' +
        '<div>874 Brightwater Circle Maitland, FL 32751 </div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });

    var central_texas_info_window = new SnazzyInfoWindow({
        marker: central_texas_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Central Texas</div>' +
        '<div>1250 S. Capital of Texas Highway Building 3, Suite 400 Austin, Texas 78746</div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });



    var great_lakes_info_window = new SnazzyInfoWindow({
        marker: great_lakes_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Great Lakes</div>' +
        '<div>25434 Prairiewood Lane Shorewood, IL 60404</div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });


    var michigan_info_window = new SnazzyInfoWindow({
        marker: michigan_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Michigan</div>' +
        '<div>18600 Northville Road Northville, MI 48168</div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });

    var mid_atlantic_info_window = new SnazzyInfoWindow({
        marker: mid_atlantic_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Mid Atlantic</div>' +
        '<div>111 Bulifants Blvd., Suite D Williamsburg, VA 23188</div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });


    var mid_central_info_window = new SnazzyInfoWindow({
        marker: mid_central_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Mid Central</div>' +
        '<div>500 Garrard Street Covington, KY 41011</div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });

    var midwest_info_window = new SnazzyInfoWindow({
        marker: midwest_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Midwest</div>' +
        '<div>2900 100th Street, Ste. 106 Urbandale, IA 50322</div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });

    var northeast_info_window = new SnazzyInfoWindow({
        marker: northeast_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Northeast</div>' +
        '<div>42 Weybosset Street, Penthouse Providence, RI 02903</div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });


    var northern_california_info_window = new SnazzyInfoWindow({
        marker: northern_california_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Northern California</div>' +
        '<div>1733 Woodside Rd, Suite 350 Redwood City, CA 94061</div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });

    var oklahoma_info_window = new SnazzyInfoWindow({
        marker: oklahoma_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Oklahoma</div>' +
        '<div>2727 East 21st St. Suite 103 Tulsa, OK 74114</div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });

    var rocky_mountains_info_window = new SnazzyInfoWindow({
        marker: rocky_mountains_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Rocky Mountains</div>' +
        '<div>5977 South Zenobia Court Littleton, CO 80123 </div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });

    var wisconsin_info_window = new SnazzyInfoWindow({
        marker: wisconsin_marker,
        placement: 'right',
        offset: {
            left: '20px'
        },
        content: '<div>Wisconsin</div>' +
                    '<div>100 N. Corporate Drive, Ste. 100 Brookfield, WI 53045</div>',
        showCloseButton: false,
        closeWhenOthersOpen: true,
        closeOnMapClick: true,
        padding: '48px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: false,
        borderRadius: '0px',
        shadow: false,
        fontColor: '#fff',
        fontSize: '15px'
    });




    central_florida_button.on('click', function () {
        central_florida_info_window.open();

    } );

    central_texas_button.on('click', function () {
        central_texas_info_window.open();

    });

    great_lakes_button.on('click', function () {
        great_lakes_info_window.open();

    });

    michigan_button.on('click', function () {
        michigan_info_window.open();

    });

    mid_atlantic_button.on('click', function () {
        mid_atlantic_info_window.open();

    });

    mid_central_button.on('click', function () {
        mid_central_info_window.open();

    });

    midwest_button.on('click', function () {
        midwest_info_window.open();

    });

    northeast_button.on('click', function () {
        northeast_info_window.open();

    });

    northern_california_button.on('click', function () {
        northern_california_info_window.open();

    });

    oklahoma_button.on('click', function () {
        oklahoma_info_window.open();

    });

    rocky_mountains_button.on('click', function () {
        rocky_mountains_info_window.open();

    });

    wisconsin_button.on('click', function () {
        wisconsin_info_window.open();

    });





});
