import Combokeys = require("combokeys");

const combokeys1: Combokeys.Combokeys = new Combokeys(document.createElement('div'));
const combokeys2: Combokeys.Combokeys = new Combokeys(document.createElement('div'));

combokeys1.bind('ctrl+a', () => {});
combokeys1.bind('ctrl+z', () => {}, 'keydown');
combokeys1.bind(['ctrl+a', 'ctrl+shift+a'], () => {});
combokeys1.bind(['ctrl+a', 'ctrl+shift+a'], () => {}, 'keyup');

combokeys1.bindMultiple(['ctrl+a', 'ctrl+shift+a'], () => {});
combokeys1.bindMultiple(['ctrl+a', 'ctrl+shift+a'], () => {}, 'keyup');

const result: boolean = combokeys1.stopCallback(new Event(null), document.createElement('div'));

combokeys1.unbind('ctrl+a');
combokeys1.unbind('ctrl+a', 'keydown');
combokeys1.unbind(['ctrl+a', 'ctrl+shift+a']);
combokeys1.unbind(['ctrl+a', 'ctrl+shift+a'], 'keydown');

combokeys1.trigger('ctrl+a');
combokeys1.trigger('ctrl+a', 'keypress');

combokeys1.reset();

combokeys1.detach();

Combokeys.reset();

Combokeys.instances.forEach((combokeys: Combokeys.Combokeys) => combokeys.reset() );
