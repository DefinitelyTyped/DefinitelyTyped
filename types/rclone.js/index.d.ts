// Type definitions for rclone.js 0.6
// Project: https://github.com/sntran/rclone.js
// Definitions by: atifcppprogrammer <https://github.com/atifcppprogrammer>,
//                 sntran <https://github.com/sntran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import type { ChildProcess } from 'node:child_process';

type Command = (
  | 'about' // Get quota information from the remote.
  | 'authorize' // Remote authorization.
  | 'backend' // Run a backend specific command.
  | 'cat' // Concatenates any files and sends them to stdout.
  | 'check' // Checks the files in the source and destination match.
  | 'checksum' // Checks the files in the source against a SUM file.
  | 'cleanup' // Clean up the remote if possible.
  | 'config' // Enter an interactive configuration session.
  | 'config create' // Create a new remote with name, type and options.
  | 'config delete' // Delete an existing remote name.
  | 'config disconnect' // Disconnects user from remote
  | 'config dump' // Dump the config file as JSON.
  | 'config edit' // Enter an interactive configuration session.
  | 'config file' // Show path of configuration file in use.
  | 'config password' // Update password in an existing remote.
  | 'config providers' // List in JSON format all the providers and options.
  | 'config reconnect' // Re-authenticates user with remote.
  | 'config show' // Print (decrypted) config file, or the config for a single remote.
  | 'config update' // Update options in an existing remote.
  | 'config userinfo' // Prints info about logged in user of remote.
  | 'copy' // Copy files from source to dest, skipping already copied.
  | 'copyto' // Copy files from source to dest, skipping already copied.
  | 'copyurl' // Copy url content to dest.
  | 'cryptcheck' // Cryptcheck checks the integrity of a crypted remote.
  | 'cryptdecode' // Cryptdecode returns unencrypted file names.
  | 'dedupe' // Interactively find duplicate filenames and delete/rename them.
  | 'delete' // Remove the contents of path.
  | 'deletefile' // Remove a single file from remote.
  | 'genautocomplete' // Output completion script for a given shell.
  | 'genautocomplete bash' // Output bash completion script for rclone.
  | 'genautocomplete fish' // Output fish completion script for rclone.
  | 'genautocomplete zsh' // Output zsh completion script for rclone.
  | 'gendocs' // Output markdown docs for rclone to the directory supplied.
  | 'hashsum' // Produces a hashsum file for all the objects in the path.
  | 'help' // Show help for rclone commands, flags and backends.
  | 'link' // Generate public link to file/folder.
  | 'listremotes' // List all the remotes in the config file.
  | 'ls' // List the objects in the path with size and path.
  | 'lsd' // List all directories/containers/buckets in the path.
  | 'lsf' // List directories and objects in remote:path formatted for parsing.
  | 'lsjson' // List directories and objects in the path in JSON format.
  | 'lsl' // List the objects in path with modification time, size and path.
  | 'md5sum' // Produces an md5sum file for all the objects in the path.
  | 'mkdir' // Make the path if it doesn't already exist.
  | 'mount' // Mount the remote as file system on a mountpoint.
  | 'move' // Move files from source to dest.
  | 'moveto' // Move file or directory from source to dest.
  | 'ncdu' // Explore a remote with a text based user interface.
  | 'obscure' // Obscure password for use in the rclone config file.
  | 'purge' // Remove the path and all of its contents.
  | 'rc' // Run a command against a running rclone.
  | 'rcat' // Copies standard input to file on remote.
  | 'rcd' // Run rclone listening to remote control commands only.
  | 'rmdir' // Remove the path if empty.
  | 'rmdirs' // Remove empty directories under the path.
  | 'selfupdate' // Update the rclone binary.
  | 'serve' // Serve a remote over a protocol.
  | 'serve dlna' // Serve remote:path over DLNA
  | 'serve ftp' // Serve remote:path over FTP.
  | 'serve http' // Serve the remote over HTTP.
  | 'serve restic' // Serve the remote for restic's REST API.
  | 'serve sftp' // Serve the remote over SFTP.
  | 'serve webdav' // Serve remote:path over webdav.
  | 'settier' // Changes storage class/tier of objects in remote.
  | 'sha1sum' // Produces an sha1sum file for all the objects in the path.
  | 'size' // Prints the total size and number of objects in remote:path.
  | 'sync' // Make source and dest identical, modifying destination only.
  | 'test' // Run a test command.
  | 'touch' // Create new file or change file modification time.
  | 'tree' // List the contents of the remote in a tree like fashion.
  | 'version' // Show the version number.
);

type FnStringOrObjectArgs<R> = (...args: Array<string | object>) => R;
type ApiFn = FnStringOrObjectArgs<ChildProcess>;
type PromisesFn = FnStringOrObjectArgs<Promise<Buffer>>;

/**
 * Spawns a rclone process to execute with the supplied arguments.
 *
 * The last argument can also be an object with all the flags.
 *
 * Options for the child process can also be passed into this last argument,
 * and they will be picked out.
 *
 * @param args arguments for the API call.
 * @returns the rclone subprocess.
 */
declare const api: ApiFn & Record<Command, ApiFn> & {
  /** Promise-based API. */
  promises: PromisesFn & Record<Command, PromisesFn>;
};

export = api;
