// Configuring angular-gettext
// https://angular-gettext.rocketeer.be/dev-guide/configure/
//Setting the language
angular.module('myApp').run(function (gettextCatalog: angular.gettext.gettextCatalog) {
  gettextCatalog.setCurrentLanguage('nl');
});

//Highlighting untranslated strings
angular.module('myApp').run(function (gettextCatalog: angular.gettext.gettextCatalog) {
  gettextCatalog.debug = true;
});


// Marking strings in JavaScript code as translatable.
// https://angular-gettext.rocketeer.be/dev-guide/annotate-js/
angular.module("myApp").controller("helloController", function (gettext: angular.gettext.gettextFunction) {
  var myString = gettext("Hello");
});

//Translating directly in JavaScript.
angular.module("myApp").controller("helloController", function (gettextCatalog: angular.gettext.gettextCatalog) {
  var translated: string = gettextCatalog.getString("Hello");
});

angular.module("myApp").controller("helloController", function (gettextCatalog: angular.gettext.gettextCatalog) {
  var myString2: string = gettextCatalog.getPlural(3, "Bird", "Birds");
  var myStringWithScope: string = gettextCatalog.getPlural(4, "{{color}} Bird", "{{color}} Birds", {color: 'Blue'});
  var myStringWithContext: string = gettextCatalog.getPlural(5, "pick", "picks", null, 'noun');
});

angular.module("myApp").controller("helloController", function (gettextCatalog: angular.gettext.gettextCatalog) {
  var translated: string = gettextCatalog.getString("Hello {{name}}", { name: "Ruben" });
});

// Setting strings manually
// https://angular-gettext.rocketeer.be/dev-guide/manual-setstrings/

angular.module("myApp").run(function (gettextCatalog: angular.gettext.gettextCatalog) {
  // Load the strings automatically during initialization.
  gettextCatalog.setStrings("nl", {
    "Hello": "Hallo",
    "One boat": ["Een boot", "{{$count}} boats"]
  });
});


interface helloControllerScope extends ng.IScope {
  switchLanguage: (lang: string) => void;
}
// Lazy-loading languages
// https://angular-gettext.rocketeer.be/dev-guide/lazy-loading/
angular.module("myApp").controller("helloController", function ($scope: helloControllerScope, gettextCatalog: angular.gettext.gettextCatalog) {
  $scope.switchLanguage = function (lang: string) {
    gettextCatalog.setCurrentLanguage(lang);
    gettextCatalog.loadRemote("/languages/" + lang + ".json");
  };
});
