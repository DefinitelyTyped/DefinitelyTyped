import { RosterItem } from 'strophejs-plugin-roster';

// Test that RosterItem interface is correctly exported
// Pretty common for users to extend it in their own custom types
interface AugmentedRosterItem extends RosterItem {
    customField: string;
}

function onSubscribeRequest(from: string) {
  // Automatically accept and also send "inverse" subscribe request so that
  // both users will be in each other rosters with subscription="both"
  connection.roster.authorize(from);
  connection.roster.subscribe(from);
  connection.roster.unsubscribe(from);
  connection.roster.unauthorize(from);
  return true;
}

function onRosterUpdate(items: RosterItem[], updatedItem?: RosterItem): void {
  if (updatedItem && updatedItem.subscription === 'remove') {
    // This is the case where we (or another of our resources)
    // deleted a roster item using a roster set
    // and this is the server's resulting roster push.
    console.log(`Successfully removed ${updatedItem.jid} from roster`);
  }
}

const connection = new Strophe.Connection('someservice');

function onRosterAdd(stanza: Element) {
    console.log(stanza.tagName);
}

// Initial roster ask in order to become "interested resource"
connection.roster.get(() => console.log('Sent initial roster request'));
connection.roster.registerRequestCallback(onSubscribeRequest);
connection.roster.registerCallback(onRosterUpdate);

connection.roster.add('node@domain/resource', 'Contact One', ['group1'], onRosterAdd);
connection.roster.update('node@domain/resource', undefined, ['group1', 'group2']);
const contactOne: RosterItem = (connection.roster.findItem('node@domain/resource') || undefined)!;
contactOne.groups.length === 2;
connection.roster.remove(contactOne.jid);
