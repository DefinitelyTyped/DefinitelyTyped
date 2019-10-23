import * as _ from 'underscore';

/**
 * All code below was copied from the examples at https://github.com/alanning/meteor-roles/.
 * When necessary, code was added to make the examples work (e.g. declaring a variable
 * that was assumed to have been declared earlier)
 */

var joesUserId = '1234';
Roles.addUsersToRoles(joesUserId, ['manage-team','schedule-game'], 'manchester-united.com')
Roles.addUsersToRoles(joesUserId, ['player','goalie'], 'real-madrid.com')

Roles.userIsInRole(joesUserId, 'manage-team', 'manchester-united.com')  // => true
Roles.userIsInRole(joesUserId, 'manage-team', 'real-madrid.com')  // => false

Roles.addUsersToRoles(joesUserId, 'super-admin', Roles.GLOBAL_GROUP)

var bobsUserId = '1234';
Roles.addUsersToRoles(bobsUserId, ['manage-team','schedule-game'])
// internal representation - no groups
// user.roles = ['manage-team','schedule-game']

Roles.addUsersToRoles(joesUserId, ['manage-team','schedule-game'], 'manchester-united.com')
Roles.addUsersToRoles(joesUserId, ['player','goalie'], 'real-madrid.com')
// internal representation - groups
// NOTE: MongoDB uses periods to represent hierarchy so periods in group names
//   are converted to underscores.
//
// user.roles = {
//   'manchester-united_com': ['manage-team','schedule-game'],
//   'real-madrid_com': ['player','goalie']
// }

Meteor.roles.find({});



var users = [
    {name:"Normal User",email:"normal@example.com",roles:[]},
    {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
    {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']},
    {name:"Admin User",email:"admin@example.com",roles:['admin']}
];

_.each(users, function (user) {
    var id : string;

    id = Accounts.createUser({
        email: user.email,
        password: "apple1",
        profile: { name: user.name }
    });

    if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles, 'default-group');
    }

});



// server/publish.js

// Give authorized users access to sensitive data by group
Meteor.publish('secrets', function (group : string) {
    if (Roles.userIsInRole(this.userId, ['view-secrets','admin'], group)) {

//        return Meteor.secrets.find({group: group});

    } else {

        // user not authorized. do not publish secrets
        this.stop();
        return;

    }
});


Accounts.validateNewUser(function (user : Meteor.User) {
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['admin','manage-users'])) {
        // NOTE: This example assumes the user is not using groups.
        return true;
    }

    throw new Meteor.Error('403', "Not authorized to create new users");
});


// server/userMethods.js

Meteor.methods({
    /**
     * delete a user from a specific group
     *
     * @method deleteUser
     * @param {String} targetUserId _id of user to delete
     * @param {String} group Company to update permissions for
     */
    deleteUser: function (targetUserId : string, group : string) {
        var loggedInUser = Meteor.user()

        if (!loggedInUser ||
            !Roles.userIsInRole(loggedInUser,
                ['manage-users', 'support-staff'], group)) {
            throw new Meteor.Error('403', "Access denied")
        }

        // remove permissions for target group
        Roles.setUserRoles(targetUserId, [], group)

        // do other actions required when a user is removed...
    }
})



// server/userMethods.js

Meteor.methods({
    /**
     * update a user's permissions
     *
     * @param {Object} targetUserId Id of user to update
     * @param {Array} roles User's new permissions
     * @param {String} group Company to update permissions for
     */
    updateRoles: function (targetUserId : string, roles : string[], group : string) {
        var loggedInUser = Meteor.user()

        if (!loggedInUser ||
            !Roles.userIsInRole(loggedInUser,
                ['manage-users', 'support-staff'], group)) {
            throw new Meteor.Error('403', "Access denied")
        }

        Roles.setUserRoles(targetUserId, roles, group)
    }
})





