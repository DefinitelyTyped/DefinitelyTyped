/// <reference path="cucumber.d.ts" />

function StepSample() {
	type Callback = cucumber.CallbackStepDefinition;
	var step = <cucumber.StepDefinitions>this;
	var hook = <cucumber.Hooks>this;
	
	hook.Before(function(scenario, callback){
		scenario.isFailed() && callback.pending();
	})
	
	hook.Around(function(scenario, runScenario)  {
		scenario.isFailed() && runScenario(null, function(){
			console.log('finish tasks');
		});
	});
	
	hook.registerHandler('AfterFeatures', function (event, callback) {
		callback();
	});
	
	step.Given(/^I am on the Cucumber.js GitHub repository$/, function(callback:Callback) {
		this.visit('https://github.com/cucumber/cucumber-js', callback);
	});

	step.When(/^I go to the README file$/, function(title:string, callback:Callback) {
		callback.pending();
	});

	step.Then(/^I should see "(.*)" as the page title$/, { timeout:60*1000}, function(title:string, callback:Callback) {
		var pageTitle = this.browser.text('title');

		if (title === pageTitle) {
			callback();
		} else {
			callback(new Error("Expected to be on page with title " + title));
		}
	});
}

