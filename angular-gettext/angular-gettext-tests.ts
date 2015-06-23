/// <reference path="angular-gettext.d.ts" />

module angular_gettext_tests {
  var gettextCatalog: angular_gettext.gettextCatalog;


  // Configuring angular-gettext
  // https://angular-gettext.rocketeer.be/dev-guide/configure/
  //Setting the language
  gettextCatalog.setCurrentLanguage('nl');

  //Highlighting untranslated strings
  gettextCatalog.debug = true;



  // Marking strings in JavaScript code as translatable. 
  // https://angular-gettext.rocketeer.be/dev-guide/annotate-js/
  var gettext = angular_gettext.gettext;
  var myString = gettext("Hello");

  //Translating directly in JavaScript.
  angular.module("myApp").controller("helloController", function (gettextCatalog) {
    var translated: string = gettextCatalog.getString("Hello");
  });

  angular.module("myApp").controller("helloController", function (gettextCatalog) {
    var myString2: string = gettextCatalog.getPlural(3, "Bird", "Birds");
  });

  var translated: string = gettextCatalog.getString("Hello {{name}}", { name: "Ruben" });


  // Setting strings manually
  // https://angular-gettext.rocketeer.be/dev-guide/manual-setstrings/

  angular.module("myApp").run(function (gettextCatalog: angular_gettext.gettextCatalog) {
    // Load the strings automatically during initialization.
    gettextCatalog.setStrings("nl", {
      "Hello": "Hallo",
      "One boat": ["Een boot", "{{$count}} boats"]
    });
  });


  // Lazy-loading languages
  // https://angular-gettext.rocketeer.be/dev-guide/lazy-loading/
  angular.module("myApp").controller("helloController", function ($scope, gettextCatalog: angular_gettext.gettextCatalog) {
    $scope.switchLanguage = function (lang: string) {
      gettextCatalog.setCurrentLanguage(lang);
      gettextCatalog.loadRemote("/languages/" + lang + ".json");
    };
  });

}