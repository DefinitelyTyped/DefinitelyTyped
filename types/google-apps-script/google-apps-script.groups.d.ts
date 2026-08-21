/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
    namespace Groups {
        /**
         * A group object whose members and those members' roles within the group can be queried.
         *
         * Here's an example which shows the members of a group. Before running it, replace the email
         * address of the group with that of one on your domain.
         *
         *     function listGroupMembers() {
         *       var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
         *       var str = group.getEmail() + ': ';
         *       var users = group.getUsers();
         *       for (var i = 0; i < users.length; i++) {
         *         var user = users[i];
         *         str = str + user.getEmail() + ", ";
         *       }
         *       Logger.log(str);
         *     }
         */
        interface Group {
            getEmail(): string;
            getGroups(): Group[];
            getRole(email: string): Role;
            getRole(user: Base.User): Role;
            getRoles(users: Base.User[]): Role[];
            getUsers(): Base.User[];
            hasGroup(group: Group): boolean;
            hasGroup(email: string): boolean;
            hasUser(email: string): boolean;
            hasUser(user: Base.User): boolean;
        }
        /**
         * This class provides access to Google Groups information. It can be used to query information such
         * as a group's email address, or the list of groups in which the user is a direct member.
         *
         * Here's an example that shows how many groups the current user is a member of:
         *
         *     var groups = GroupsApp.getGroups();
         *     Logger.log('You belong to ' + groups.length + ' groups.');
         */
        interface GroupsApp {
            Role: typeof Role;
            getGroupByEmail(email: string): Group;
            getGroups(): Group[];
        }
        /**
         * Possible roles of a user within a group, such as owner or ordinary member. Users subscribed to a
         * group have exactly one role within the context of that group.
         * See also
         *
         * Group.getRole(email)
         */
        enum Role {
            OWNER,
            MANAGER,
            MEMBER,
            INVITED,
            PENDING,
        }
    }
}

declare var GroupsApp: GoogleAppsScript.Groups.GroupsApp;
