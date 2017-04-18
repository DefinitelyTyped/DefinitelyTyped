/// <reference path='./cuikit.d.ts' />

import cuikit = require('cuikit')

// Create the application delegate
//   must extends from `NSObject`
class AppDelegate extends cuikit.NSObject {
    view : cuikit.UIView;

    constructor(){
        super();
        // Enable Objective-C coding style (Woo hoo!)
        let self = this;

        // Create a custom view
        self.view = cuikit.UIView.initWithFrame(cuikit.CGRectMake(10, 10, 10, 10));
        // with green background color
        self.view.backgroundColor = cuikit.UIColor.greenColor();
    }
    applicationDidFinishLaunchingWithOptions(
        app: cuikit.UIApplication, options: Object
    ){
        let self = this;

        // Add our custom view to the application
        app.window.addSubview(self.view);

        // Do some animations
        cuikit.UIView.animateWithDurationAnimations(2, percentage => {
            self.view.frame = cuikit.CGRectMake(
                10, 10, 10 + 10 * percentage, 10 * percentage
            );
            self.view.layoutIfNeeded();
        });
    }
}

// Launch application with our own delegate
cuikit.UIApplication.initWithDelegate(new AppDelegate());
