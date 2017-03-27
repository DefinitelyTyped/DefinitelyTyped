
import Polyglot = require("node-polyglot");

function instantiatePolyglot(): void {
	var polyglot = new Polyglot();
	var phrasedPolyglot = new Polyglot({phrases: {"hello": "Hello"}});
	var localePolyglot = new Polyglot({locale: "fr"});
	var allowMissingPolyglot = new Polyglot({
		phrases: {"hello": "Hello"},
		allowMissing: true
	});
	var onMissingKeySimplePolyglot = new Polyglot({
		phrases: {"hello": "Hello"},
		onMissingKey: (key: string): string => {
			return 'ouups!';
		}
	});
	var onMissingKeyComplexPolyglot = new Polyglot({
		phrases: {"hello": "Hello"},
		onMissingKey: (key: string, options: Polyglot.InterpolationOptions, locale: string): string => {
			return 'ouups!';
		}
	});
}

function translate(): void {
	var polyglot = new Polyglot();

	polyglot.extend({
		"hello": "Hello",
		"hello_name": "Hola, %{name}.",
		"nav": {
			"sidebar": {
				"welcome": "Welcome"
			}
		},
		"num_cars": "%{smart_count} car |||| %{smart_count} cars"
	});

	polyglot.t("hello");
	polyglot.t("hello_name");
	polyglot.t("nav.sidebar.welcome");
	polyglot.t("num_cars", {smart_count: 0});
	polyglot.t("num_cars", 0);
	polyglot.t("hello_name", {name: "Spike"});
	polyglot.t("i_like_to_write_in_language", {
		_: "I like to write in %{language}.",
		language: "Javascript"
	});

	polyglot.replace({
		"hello": "hey",
		"nav": {
			"sidebar": {
				"welcome": "Greetings"
			}
		}
	});

	polyglot.clear();

	polyglot.locale("fr");
	polyglot.locale();
}
