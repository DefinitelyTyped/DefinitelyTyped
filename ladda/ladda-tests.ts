/// <reference path="ladda.d.ts" />

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