import * as Rx from 'rx';
import * as DOM from 'rx-dom';

// Rx and DOM should both be the same reference
// before rx-dom import, Rx will not contain the DOM namespace
// after rx-dom import, Rx will contain the DOM namespace

// this is the standard approach for importing rx + rx-dom
import { Observable, Subject, DOM as rxdom } from 'rx-dom';
