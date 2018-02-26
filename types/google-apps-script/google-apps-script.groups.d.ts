// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  export module Groups {
    /**
     * A group object whose members and those members' roles within the group
     *  can be queried.
     *
     *  Here's an example which shows the members of a group. Before running it,
     *  replace the email address of the group with that of one on your domain.
     *
     *        function listGroupMembers() {
     *          var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
     *          var s = group.getEmail() + ': ';
     *          var users = group.getUsers();
     *          for (var i = 0; i < users.length; i++) {
     *            var user = users[i];
     *            s = s + user.getEmail() + ", ";
     *          }
     *          Logger.log(s);
     *        }
     */
    export interface Group {
      getEmail(): string;
      getRole(email: string): Role;
      getRole(user: Base.User): Role;
      getUsers(): Base.User[];
      hasUser(email: string): boolean;
      hasUser(user: Base.User): boolean;
    }

    /**
     * This class provides access to Google Groups information. It can be used to
     *  query information such as a group's email address, or the list of groups in
     *  which the user is a direct member.
     *
     *  Here's an example that shows how many groups the current user is a member of:
     *
     *        var groups = GroupsApp.getGroups();
     *        Logger.log('You belong to ' + groups.length + ' groups.');
     */
    export interface GroupsApp {
      Role: typeof Role;
      getGroupByEmail(email: string): Group;
      getGroups(): Group[];
    }

    /**
     * Possible roles of a user within a group, such as owner or ordinary member.
     *  Users subscribed to a group have exactly one role within the context of that
     *  group.
     * See also
     *
     * Group.getRole(email)
     */
    export enum Role { OWNER, MANAGER, MEMBER, INVITED, PENDING }

  }
}

declare var GroupsApp: GoogleAppsScript.Groups.GroupsApp;
