/// <reference path="awesomplete.d.ts" />

var input = document.getElementById("myinput");
new Awesomplete(input, {list: "#mylist"});

new Awesomplete(input, {list: document.querySelector("#mylist")});

new Awesomplete(input, {
    list: ["Ada", "Java", "JavaScript", "LOLCODE", "Node.js", "Ruby on Rails"]
});

var awesomplete = new Awesomplete(input);
awesomplete.list = ["Ada", "Java", "JavaScript", "LOLCODE", "Node.js", "Ruby on Rails"];

new Awesomplete(input, {
	list: [
		{ label: "Belarus", value: "BY" },
		{ label: "China", value: "CN" },
		{ label: "United States", value: "US" }
	]
});

// Same with arrays:
new Awesomplete(input, {
	list: [
		[ "Belarus", "BY" ],
		[ "China", "CN" ],
		[ "United States", "US" ]
	]
});

new Awesomplete('input[type="email"]', {
	list: ["aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com", "gmx.com", "googlemail.com", "google.com", "hotmail.com", "hotmail.co.uk", "mac.com", "me.com", "mail.com", "msn.com", "live.com", "sbcglobal.net", "verizon.net", "yahoo.com", "yahoo.co.uk"],
	data: function (text: string, input: any) {
		return input.slice(0, input.indexOf("@")) + "@" + text;
	},
	filter: Awesomplete.FILTER_STARTSWITH
});

new Awesomplete('input[data-multiple]', {
	filter: function(text: string, input: any) {
		return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
	},

	replace: function(text: string) {
		var before = this.input.value.match(/^.+,\s*|/)[0];
		this.input.value = before + text + ", ";
	}
});

var ajax = new XMLHttpRequest();
ajax.open("GET", "https://restcountries.eu/rest/v1/lang/fr", true);
ajax.onload = function() {
	var list = JSON.parse(ajax.responseText).map(function(i: any) { return i.name; });
	new Awesomplete(document.querySelector("#ajax-example input"),{ list: list });
};
ajax.send();