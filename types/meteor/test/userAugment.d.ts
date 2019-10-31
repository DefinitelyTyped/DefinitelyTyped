declare module 'meteor/meteor' {
    module Meteor {
        interface User {
            // One of the tests assigns a new property to the user so it has to be typed
            dexterity?: number;
        }
    }
}
