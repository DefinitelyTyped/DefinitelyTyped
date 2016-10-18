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