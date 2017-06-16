import path = require("path");
import _atom = require("atom");

import PathWatcher = require("pathwatcher");
var File = PathWatcher.File;

const jq: JQuery = $("selector");

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
				jq.trigger("title-changed");
			} else {
				var view = jq.parents('.pane').view();
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
