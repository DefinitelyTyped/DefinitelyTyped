/// <reference path="angular-dialog-service.d.ts" />


var options : angular.dialogservice.IDialogOptions = {};
options.animation = true;
options.backdrop = true;
options.keyboard = true;
options.backdropClass = "some-css-class";
options.windowClass = "some-css-class";
options.size = 'md';

var dialogs : angular.dialogservice.IDialogService;
dialogs.error('Error','An unknown error occurred preventing the completion of the requested action.');
dialogs.wait('Creating User','Please wait while we attempt to create user "Michael Conroy."<br><br>This should only take a moment.',50);
dialogs.notify('Something Happened','Something happened at this point in the application that I wish to let you know about');
dialogs.create('url/to/a/template','ctrlrToUse',{},{});
