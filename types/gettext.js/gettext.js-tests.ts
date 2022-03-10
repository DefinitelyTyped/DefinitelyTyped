import Gettext = require('gettext.js');

const instance = Gettext();

const json: Gettext.JsonData = {
  "": {
    language: "fr",
    "plural-forms": "nplurals=2; plural=n>1;"
  },
  Welcome: "Bienvenue",
  "There is %1 apple": [
    "Il y a %1 pomme",
    "Il y a %1 pommes"
  ]
};

instance.loadJSON(json, 'messages');
instance.setLocale('fr');
if (instance.ngettext('There is %1 apple', 'There are %1 apples', 0) !== 'Il y a 0 pomme') {
  throw new Error('Failed test');
}
if (instance.strfmt('There are %1 apples', 0) !== 'There are 0 apples') {
  throw new Error('Failed test');
}
