
/**
 * https://github.com/webgme/webgme/wiki/GME-Blob-Storage-API
 * 
 * File-like objects/artifacts 
 * (which are neither a meta archetype model, nor an instance model) 
 * are stored separately from the WebGME meta-models and models. 
 * An example of such an artifact would be a resource 
 * file that is associated with a model 
 * (e.g., data for an instance model, or a generated artifact from analyzing a model).
 * 
 * One reason for treating these objects differently is that they do not conform to the data model, 
 * and they might not be well-suited for storage in a database 
 * (the Blob is suited to handle binary objects of any size and structure).
 */

/// <reference path="./index.d.ts" />
/// <reference path="../node/index.d.ts" />
/// <reference path="../bluebird/bluebird-2.0.d.ts" />
/// <reference path="./text.d.ts" />

import PluginBase = require("plugin/PluginBase");
import MetaDataStr = require("text!metadata.json");

import Promise = require("bluebird");
/** 
 * The following items are not created directly by the
 * plugin driver.
 *
 * self is an instance of the PluginBase class.
 */
let self = new PluginBase();
let node = new Node();

interface DataModel {
    stateMachine: {
        name: string,
        initialState: string | null,
        finalStates: any[], states: any[]
    }
};

/**
 * https://github.com/webgme/webgme/wiki/GME-Blob-Storage-API#usage
 */
function test_client_using_a_blob() {

    class SamplePlugin extends PluginBase {
        pluginMetadata: any;
        private dataModel: DataModel;

        constructor() {
            super();
            this.pluginMetadata = JSON.parse(MetaDataStr);
        }

        extractDataModel(): DataModel {
            return { stateMachine: { name: "dm", initialState: null, finalStates: [], states: [] } };
        }

        public main(mainHandler: Core.ResultCallback): void {
            let artifact: Core.Artifact;

            Promise
                .try(() => {
                    return this.extractDataModel();
                })
                .then((dataModel) => {
                    var dataModelStr = JSON.stringify(dataModel, null, 4);
                    this.dataModel = dataModel;

                    this.logger.info('Extracted dataModel', dataModelStr);

                    return self.blobClient.putFile('dataModel.json', dataModelStr);
                })
                .then((jsonFileHash) => {
                    // Add link from result to this file.
                    self.result.addArtifact(jsonFileHash);

                    // Create a complex artifact, with links to multiple files.
                    artifact = self.blobClient.createArtifact('simulator');

                    let programJS = "some javascript file";
                    self.logger.info('program.js', programJS);

                    return artifact.addFilesAsSoftLinks({
                        'program.js': programJS,
                        'index.html': this.pluginMetadata
                    });
                })
        }
    }
}

/**
 * Add the remaining tests.
 */

