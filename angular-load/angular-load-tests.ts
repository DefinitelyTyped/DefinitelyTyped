/// <reference path="./angular-load.d.ts" />

angular.module('app',['angularLoad'])
    .run(['angularLoad',(angularLoad:angular.load.IAngularLoadService)=> {
        angularLoad.loadScript("https://ajax.googleapis.com/ajax/libs/angular_material/1.0.4/angular-material.min.js").then(
            ()=>console.log("angular material js loaded")
        );

        angularLoad.loadCss("https://ajax.googleapis.com/ajax/libs/angular_material/1.0.4/angular-material.css").then(
            ()=>console.log("angular material css loaded")
        );
    }]);
