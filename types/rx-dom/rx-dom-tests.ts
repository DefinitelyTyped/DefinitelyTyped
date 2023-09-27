import * as Rx from "rx";

// Rx and DOM should both be the same reference
// before rx-dom import, Rx will not contain the DOM namespace
// after rx-dom import, Rx will contain the DOM namespace

// this is the standard approach for importing rx + rx-dom
import { DOM as rxdom, Observable, Subject } from "rx-dom";
