import settings = require("electron-settings");

settings.has('foo.bar'); // $ExpectType boolean

settings.set('foo.bar', 'test'); // $ExpectType Settings
settings.set('foo.bar', 'test', {prettify: true}); // $ExpectType Settings
settings.set('foo.bar', {test: 'test'}); // $ExpectType Settings
settings.set('foo.bar', {test: 'test'}, {prettify: true}); // $ExpectType Settings

settings.setAll({foo: {bar: 'test'}}); // $ExpectType Settings
settings.setAll({foo: {bar: 'test'}}, {prettify: true}); // $ExpectType Settings

settings.get('foo.bar'); // $ExpectType JsonValue
settings.get('foo.bar', 'test'); // $ExpectType JsonValue

settings.getAll(); // $ExpectType JsonValue

settings.delete('foo.bar'); // $ExpectType Settings
settings.delete('foo.bar', {prettify: true}); // $ExpectType Settings

settings.deleteAll(); // $ExpectType Settings
settings.deleteAll({prettify: true}); // $ExpectType Settings

settings.watch('foo.bar', () => {}); // $ExpectType SettingsObserver

settings.file(); // $ExpectType string
