/// <reference path="ladda.d.ts" />

// Automatically trigger the loading animation on click
Ladda.bind('input[type=submit]');

// Same as the above but automatically stops after two seconds
Ladda.bind('input[type=submit]', { timeout: 2000 });

// Create a new instance of ladda for the specified button
var l = Ladda.create(document.querySelector('.my-button'));

// Start loading
l.start();

// Will display a progress bar for 50% of the button width
l.setProgress(0.5);

// Stop loading
l.stop();

// Toggle between loading/not loading states
l.toggle();

// Check the current state
l.isLoading();

// Test bind
Ladda.bind('button.ladda-button', { timeout: 42, callback: btn => alert('Clicked!!!') });
Ladda.bind('button.ladda-button');
Ladda.bind(document.createElement('button'), {});
Ladda.bind(document.createElement('button'));

// Test stop all
Ladda.stopAll();

// Test create
var btnElement = document.createElement('button');
var laddaBtn = Ladda.create(btnElement);

// Test operations via chaining
laddaBtn.start().stop().toggle().setProgress(42).enable().disable().start();

// Test isLoading
console.assert(laddaBtn.isLoading() === true);
