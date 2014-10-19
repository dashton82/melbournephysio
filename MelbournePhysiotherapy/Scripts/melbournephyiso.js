$(document).ready(function () {
    var options = {
        $AutoPlay: true,
        
    };

    var homePageSlider = $('#homePageSlider');
    if (homePageSlider.length != 0) {
        var jssor_slider1 = new $JssorSlider$('homePageSlider', options);
    }
    
    
    function initializeGoogleMap() {
        var mapCanvas = document.getElementById('googleMap');
        
        var physioLocation = new google.maps.LatLng(52.823503, -1.424381);
        var mapOptions = {
            center: physioLocation,
            zoom: 16,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        

        var map = new google.maps.Map(mapCanvas, mapOptions);
        
        var marker = new google.maps.Marker({
            position: physioLocation,
            map: map,
            title: 'Melbourne Physiotherapy and Sports Injury Clinic'
        });

    }
    if ($('#googleMap').length != 0) {
        google.maps.event.addDomListener(window, 'load', initializeGoogleMap);
    }
    

})