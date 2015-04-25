/// <reference path="cordovarduino.d.ts"/>

serial.requestPermission(function success() {}, function error() {});
serial.open({}, function success() {}, function error() {});
serial.write('data_string', function success() {}, function error() {});
serial.read(function success() {}, function error() {});
serial.registerReadCallback(
    function success(data:any) {
        var view = new Uint8Array(data);
        console.log(view);
    },
    function error() {
        new Error("Failed to register read callback");
    });
serial.close(function success() {}, function error() {});

var errorCallback = function (message:string) {
    alert('Error: ' + message);
};

serial.requestPermission(
    function (successMessage:string) {
        serial.open(
            {baudRate: 9600},
            function (successMessage:string) {
                serial.write(
                    '1',
                    function (successMessage:string) {
                        alert(successMessage);
                    },
                    errorCallback
                );
            },
            errorCallback
        );
    },
    errorCallback
);
