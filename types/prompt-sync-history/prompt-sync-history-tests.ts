import promptHistory = require('prompt-sync-history');
import * as PromptSync from 'prompt-sync';

let history:PromptSync.History;

history = promptHistory();
history = promptHistory('/path/to/file');
history = promptHistory(null, 1000);
