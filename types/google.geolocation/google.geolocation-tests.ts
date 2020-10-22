// Test files for Geolocation Definition file


//determine if the handset has client side geo location capabilities
var isInit: boolean = geo_position_js.init();
if(isInit){
   geo_position_js.getCurrentPosition(success_callback, error_callback);
} else {
   alert("Functionality not available");
}

function success_callback(position: GeolocationPosition): void {
    geo_position_js.showMap(position.coords.latitude, position.coords.longitude);
}

function error_callback(positionError: GeolocationPositionError): void {
    console.log(positionError.code);
}
