/// <reference path="../node/node.d.ts" />
/// <reference path="./atom.d.ts" />
/// <reference path="../pathwatcher/pathwatcher.d.ts" />

import path = require("path");
import _atom = require("atom");

import pathwatcher = require("pathwatcher");
var File = pathwatcher.File;

class SampleView extends _atom.ScrollView {

	editorId:string;
	file:PathWatcher.IFile;
	editor:AtomCore.IEditor;

	static deserialize(state:any):SampleView {
		return new SampleView(state);
	}

	static content():any {
		return this.div({class: 'sample native-key-bindings', tabindex: -1});
	}

	constructor(params:{editorId?:string; filePath?:string;} = {}) {
		super();

		this.editorId = params.editorId;

		if (this.editorId) {
			this.resolveEditor(this.editorId);
		} else {
			this.file = new File(params.filePath);
		}
	}

	get jq():JQuery {
		// dirty hack
		return <any>this;
	}

	serialize() {
		return {
			deserializer: 'SampleView',
			editorId: this.editorId
		};
	}

	destroy() {
		this.unsubscribe();
	}

	resolveEditor(editorId:string) {
		var resolve = ()=> {
			if (this.editor) {
				this.jq.trigger("title-changed");
			} else {
				var view = this.jq.parents('.pane').view();
				if (view) {
					view.destroyItem(this);
				}
			}
		};

		if (atom.workspace) {
			resolve();
		} else {
			atom.packages.once("activated", ()=> {
				resolve();
			});
		}
	}
}

atom.deserializers.add(SampleView);

export = SampleView;
