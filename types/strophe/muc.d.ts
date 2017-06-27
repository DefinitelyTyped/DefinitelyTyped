// Type definitions for strophe.muc.js v1.2.0
// Project: https://github.com/metajack/strophejs-plugins
// Definitions by: Ilia Choly <https://github.com/icholy/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Strophe {

  interface Connection {
    muc: MUC.Plugin;
  }

  namespace MUC {

    interface Plugin {

      /**
       * Initialize the MUC plugin. Sets the correct connection object and
       * extends the namesace. 
       *
       * @param conn - the connection instance.
       */
      init(conn: Connection): void;

      /**
       * Join a multi-user chat room
       *
       * @param room - The multi-user chat room to join.
       * @param nick - The nickname to use in the chat room. Optional
       * @param msg_handler_cb - The function call to handle messages from the specified chat room.
       * @param pres_handler_cb - The function call back to handle presence in the chat room.
       * @param roster_cb - The function call to handle roster info in the chat room
       * @param password - The optional password to use. (password protected rooms only)
       * @param history_attrs - Optional attributes for retrieving history
       * @param extended_presence - Optional XML for extending presence 
       */
      join(
        room:               string,
        nick:               string,
        msg_handler_cb:     (stanza: Element, room: XmppRoom) => boolean,
        pres_handler_cb:    (stanza: Element, room: XmppRoom) => boolean,
        roster_cb:          (occupants: OccupantMap, room: XmppRoom) => boolean,
        password?:          string,
        history_attrs?:     any,
        extended_presence?: Element
      ): void;


      /**
       * Leave a multi-user chat room
       * 
       * @param room - The multi-user chat room to leave.
       * @param nick - The nick name used in the room.
       * @param handler_cb - Optional function to handle the successful leave.
       * @param exit_msg - optional exit message.
       * @return iqid - The unique id for the room leave.*
       */
      leave(
        room:        string,
        nick:        string,
        handler_cb?: Function,
        exit_msg?:   string
      ): string;


      /**
       * Send a message to a room.
       *
       * @param) room - The multi-user chat room name.
       * @param nick - The nick name used in the chat room.
       * @param message - The plaintext message to send to the room.
       * @param html_message - The message to send to the room with html markup.
       * @param type - "groupchat" for group chat messages o "chat" for private chat messages
       * @return msgiq - the unique id used to send the message
       */
      message(
        room:         string,
        nick:         string,
        message:      string,
        html_message: string,
        type:         "groupchat"|"chat"
      ): string;


      /**
       * Convenience Function to send a Message to all Occupants
       *
       * @param room - The multi-user chat room name.
       * @param message - The plaintext message to send to the room.
       * @param html_message - Optional message to send to the room with html markup.
       * @param msgid - Optional unique ID which will be set as the 'id' attribute of the stanza
       * @return msgiq - the unique id used to send the message
       */
      groupchat(
        room:          string,
        message:       string,
        html_message?: string,
        msgid?:        string
      ): string;


      /**
       * Send a mediated invitation.
       *
       * @param room - The multi-user chat room name.
       * @param receiver - The invitation's receiver.
       * @param reason - Optional reason for joining the room.
       * @return msgiq - the unique id used to send the invitation
       */
      invite(
        room:     string,
        receiver: string,
        reason?:  string
      ): string;


      /**
       * Send a mediated multiple invitation.
       *
       * @param room - The multi-user chat room name.
       * @param receivers - The invitation's receivers.
       * @param reason - Optional reason for joining the room.
       * @return msgiq - the unique id used to send the invitation
       */
      multipleInvites(
        room:      string,
        receivers: string[],
        reason?:   string
      ): string;


      /**
       * Send a direct invitation.
       *
       * @param room - The multi-user chat room name.
       * @param receiver - The invitation's receiver.
       * @param reason - Optional reason for joining the room.
       * @param password - Optional password for the room.
       * @return msgiq - the unique id used to send the invitation
       */
      directInvite(
        room:      string,
        receiver:  string,
        reason?:   string,
        password?: string
      ): string;


      /**
       * Queries a room for a list of occupants
       *
       * @param room - The multi-user chat room name.
       * @param success_cb - Optional function to handle the info.
       * @param error_cb - Optional function to handle an error.
       * @return id - the unique id used to send the info request
       */
      queryOccupants(
        room:        string,
        success_cb?: (stanza: Element) => any,
        error_cb?:   (error: any) => any
      ): string;


      /**
       * Start a room configuration.
       *
       * @param room - The multi-user chat room name.
       * @param handler_cb - Optional function to handle the config form.
       * @param error_cb - Optional function to handle an error.
       * @return id - the unique id used to send the configuration request
       */
      configure(
        room:        string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Cancel the room configuration
       *
       * @param room - The multi-user chat room name.
       * @return id - the unique id used to cancel the configuration.
       */
      cancelConfigure(room: string): string;


      /**
       * Save a room configuration.
       *
       * @param room - The multi-user chat room name.
       * @param config- Form Object or an array of form elements used to configure the room.
       * @param success_db - Optional function to handle success.
       * @param error_cb - Optional function to handle an error.
       * @return id - the unique id used to save the configuration.
       */
      saveConfiguration(
        room:        string,
        config:      any,
        success_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Create an instance room.
       *
       * @param room - The multi-user chat room name.
       * @param success_db - Optional function to handle success.
       * @param error_cb - Optional function to handle an error.
       * @return id - the unique id used to create the chat room.
       */
      createInstantRoom(
        room:        string,
        success_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Create a configured room.
       *
       * @param room - The multi-user chat room name.
       * @param config - the configuration. ex: {"muc#roomconfig_publicroom": "0", "muc#roomconfig_persistentroom": "1"}
       * @param success_db - Optional function to handle success.
       * @param error_cb - Optional function to handle an error.
       * @return id - the unique id used to create the chat room.
       */
      createConfiguredRoom(
        room:       string,
        config:     any,
        success_cb: Function,
        error_cb:   Function
      ): string;


      /**
       * Set the topic of the chat room.
       *
       * @param room - The multi-user chat room name.
       * @param topic - Topic message.
       */
      setTopic(room: string, topic: string): void;


      /**
       * Changes the role of a member of a MUC room.
       * The modification can only be done by a room moderator. An error will be
       * returned if the user doesn't have permission.
       *
       * @param room - The multi-user chat room name.
       * @param nick - The nick name of the user to modify.
       * @param role - The new role of the user.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      modifyRole(
        room:        string,
        nick:        string,
        role:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Kick a user.
       *
       * @param room - The multi-user chat room name.
       * @param nick - The nick name of the user to modify.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      kick(
        room:        string,
        nick:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Voice a user.
       *
       * @param room - The multi-user chat room name.
       * @param nick - The nick name of the user to modify.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      voice(
        room:        string,
        nick:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Mute a user.
       *
       * @param room - The multi-user chat room name.
       * @param nick - The nick name of the user to modify.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      mute(
        room:        string,
        nick:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Op a user.
       *
       * @param room - The multi-user chat room name.
       * @param nick - The nick name of the user to modify.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      op(
        room:        string,
        nick:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * De-Op a user.
       *
       * @param room - The multi-user chat room name.
       * @param nick - The nick name of the user to modify.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      deop(
        room:        string,
        nick:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Changes the affiliation of a member of a MUC room.
       * The modification can only be done by a room moderator. An error will be
       * returned if the user doesn't have permission.
       * Parameters:
       * @param room - The multi-user chat room name.
       * @param jid  - The jid of the user to modify.
       * @param affiliation - The new affiliation of the user.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      modifyAffiliation(
        room:        string,
        jid:         string,
        affiliation: string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Ban a user.
       *
       * @param room - The multi-user chat room name.
       * @param jid  - The jid of the user to modify.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      ban(
        room:        string,
        jid:         string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Member a user.
       *
       * @param room - The multi-user chat room name.
       * @param jid  - The jid of the user to modify.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      member(
        room:        string,
        jid:         string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Revoke a user.
       *
       * @param room - The multi-user chat room name.
       * @param jid  - The jid of the user to modify.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      revoke(
        room:        string,
        jid:         string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Owner a user.
       *
       * @param room - The multi-user chat room name.
       * @param jid  - The jid of the user to modify.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      owner(
        room:        string,
        jid:         string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Admin a user.
       *
       * @param room - The multi-user chat room name.
       * @param jid  - The jid of the user to modify.
       * @param reason - Optional reason for the change.
       * @param handler_cb - Optional callback for success
       * @param error_cb - Optional callback for error
       * @return iq - the id of the mode change request.
       */
      owner(
        room:        string,
        jid:         string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      /**
       * Change the current users nick name.
       *
       * @param room - The multi-user chat room name.
       * @param user - The new nick name.
       */
      changeNick(room: string, user: string): void;

      /**
       * Change the current users status.
       *
       * @param room - The multi-user chat room name.
       * @param user - The current nick.
       * @param show - The new show-text.
       * @param status - The new status-text.
       */
      setStatus(
        room:   string,
        user:   string,
        show:   string,
        status: string
      ): void;

      /**
       * Registering with a room.
       * @see http://xmpp.org/extensions/xep-0045.html#register
       *
       * @param room - The multi-user chat room name.
       * @param handle_cb - Function to call for room list return.
       * @param error_cb - Function to call on error.
       */
      registrationRequest(
        room:      string,
        handle_cb: Function,
        error_cb:  Function
      ): void;


      /**
       * Submits registration form.
       *
       * @param room - The multi-user chat room name.
       * @param fields - The form fields.
       * @param handle_cb - Function to call for room list return.
       * @param error_cb - Function to call on error.
       */
      submitRegistrationForm(
        room:      string,
        fields:    any,
        handle_cb: Function,
        error_cb:  Function
      ): void;

      /**
       * List all chat room available on a server.
       *
       * @param server - name of chat server.
       * @param handle_cb - Function to call for room list return.
       * @param error_cb - Function to call on error.
       */
      listRooms(
        server:    string,
        handle_cb: (stanza: Element) => any,
        error_cb:  (error: any) => any
      ): void;
    }

    interface XmppRoom {

      join(
        msg_handler_cb:  Function,
        pres_handler_cb: Function,
        roster_cb:       Function
      ): void;


      leave(
        handler_cb?: Function,
        exit_msg?:   string
      ): void;


      message(
        message:      string,
        html_message: string,
        type:         "groupchat"|"chat"
      ): string;


      groupchat(message: string, html_message?: string): string;


      invite(receiver: string, reason?: string): string;


      multipleInvites(receivers: string[], reason?: string): string;


      directInvite(receiver: string, reason?: string): string;


      configure(handler_cb: Function): string;


      cancelConfigure(): string;


      saveConfiguration(config: any): string;


      queryOccupants(success_cb: Function, error_cb: Function): void;


      setTopic(topic: string): string;


      modifyRole(
        nick:        string,
        role:        string,
        reason?:     string,
        success_cb?: Function,
        error_cb?:   Function
      ): string;


      kick(
        nick:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      voice(
        nick:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      mute(
        nick:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      op(
        nick:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      deop(
        nick:        string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      modifyAffiliation(
        jid:         string,
        affiliation: string,
        reason?:     string,
        success_cb?: Function,
        error_cb?:   Function
      ): string;


      ban(
        jid:         string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      member(
        jid:         string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      revoke(
        jid:         string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      owner(
        jid:         string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      admin(
        jid:         string,
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      changeNick(nick: string): string;


      setStatus(show: string, status: string): string;


      /**
       * Adds a handler to the MUC room.
       * Parameters:
       * @param handler_type - 'message', 'presence' or 'roster'.
       * @param handler - The handler function.
       * @return id - the id of handler.
       */
      addHandler(
        handler_type: "presence"|"message"|"roster",
        handler:      Function
      ): number;


      /**
       * Removes a handler from the MUC room.
       * This function takes ONLY ids returned by the addHandler function
       * of this room. passing handler ids returned by connection.addHandler
       * may brake things!
       *
       * @param id - the id of the handler
       */
      removeHandler(id: number): void;

    }


    interface RoomConfig {
      parse(info?: Element): any;
    }


    interface OccupantInfo {
      nick?:        string;
      affiliation?: string;
      role?:        string;
      jid?:         string;
      status?:      string;
      show?:        string
    }


    interface Occupant extends OccupantInfo {

      modifyRole(
        role:        string,
        reason?:     string,
        success_cb?: Function,
        error_cb?:   Function
      ): string;


      kick(
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      voice(
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;

      mute(
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      op(
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      deop(
        reason?:     string,
        handler_cb?: Function,
        error_cb?:   Function
      ): string;


      modifyAffiliation(
        affiliation: string,
        reason?:     string,
        success_cb?: Function,
        error_cb?:   Function
      ): string;


      ban(
        reason?:     string,
        success_cb?: Function,
        error_cb?:   Function
      ): string;


      member(
        reason?:     string,
        success_cb?: Function,
        error_cb?:   Function
      ): string;


      revoke(
        reason?:     string,
        success_cb?: Function,
        error_cb?:   Function
      ): string;


      owner(
        reason?:     string,
        success_cb?: Function,
        error_cb?:   Function
      ): string;


      admin(
        reason?:     string,
        success_cb?: Function,
        error_cb?:   Function
      ): string;

      update(data: OccupantInfo): void;
    }

    interface OccupantMap {
      [jid: string]: Occupant;
    }

  }
}

