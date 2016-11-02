/// <reference path="jstimezonedetect.d.ts" />

import * as jstz from 'jstimezonedetect';

jstz.determine().name() === 'America/Montreal';
