import State = require('markdown-it/lib/rules_core/state_core');
import helpers = require('markdown-it/lib/helpers');

declare const state: State;

helpers.parseLinkLabel(state, 0, true);
helpers.parseLinkDestination('https://github.com/markdown-it/markdown-it', 0, 3);
helpers.parseLinkTitle('https://github.com/markdown-it/markdown-it', 0, 3);
