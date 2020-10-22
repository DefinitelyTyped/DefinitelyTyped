import * as Gettext from 'gettext.js';

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

const instance: Gettext.Gettext = Gettext.i18n();

instance.loadJSON(json, 'messages');
instance.setLocale('fr');
if (instance.ngettext('There is %1 apple', 'There are %1 apples', 0) === 'Il y a %1 pomme') {
  throw new Error('Failed test');
}
