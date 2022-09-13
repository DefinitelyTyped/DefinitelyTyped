import * as XML from 'pixl-xml';

const xmlstring = '<xml><users id="0">Octocat</users><users id="1">Evan</users></xml>';

interface User {
    id: string;
    _Data: string;
}

interface UserList {
    users: User[];
}

// Verify type inference from template type with constructor
const parserInstance = new XML.Parser<UserList>(xmlstring);
const usersFromParser = parserInstance.getTree().users;
usersFromParser[0].id;

// Verify type inference from template type with function
const usersFromParseFn = XML.parse(xmlstring) as UserList;
usersFromParseFn.users[0].id;

XML.stringify(usersFromParseFn);
