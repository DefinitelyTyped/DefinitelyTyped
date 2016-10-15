/// <reference path="resumablejs.d.ts" />

import { Resumable, ResumableFile } from 'resumablejs';

let resumable: Resumable = new Resumable({chunkSize: 123});
let resumableDefaultOpts: Resumable = new Resumable({});
resumable.addFile(null, null);
resumable.assignBrowse(document.getElementById("test"), true);
resumable.assignBrowse([document.getElementById("test")], true);
resumable.assignDrop(document.getElementById("test"));
resumable.assignDrop([document.getElementById("test")]);
resumable.unAssignDrop(document.getElementById("test"));
resumable.unAssignDrop([document.getElementById("test")]);
resumable.cancel();
let defaults: Object = resumable.defaults;
let events: any[] = resumable.events;
let files: any[] = resumable.files;
resumable.fire();
let {} = resumable.getFromUniqueIdentifier('test');
let {} = resumable.getOpt('test');
let size: number = resumable.getSize();
resumable.handleChangeEvent(null);
resumable.handleDropEvent(null);
let isUploading: boolean = resumable.isUploading();
resumable.on('test', function() {});
let opts: Object = resumable.opts;
resumable.pause();
let progress:number = resumable.progress();
resumable.removeFile(null);
let support: boolean = resumable.support;
resumable.upload();
resumable.uploadNextChunk();
let version:number = resumable.version;