/// <reference path="webfontloader" />
import webfontloader = require("webfontloader");

var config: webfontloader.Config = {
	classes: false,
	events: false,
	loading: function() {},
  	active: function() {},
  	inactive: function() {},
  	fontloading: function(familyName:string, fvd:string) {},
  	fontactive: function(familyName:string, fvd:string) {},
  	fontinactive: function(familyName:string, fvd:string) {},
  	google: {
    	families: ['Droid Sans']
  	},
  	timeout: 2000
}
webfontloader.load(config);