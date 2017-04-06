// After adding a new API, initialize it and its corresponding Q wrapper in the [initializations] section.
// Then, add the new instance of the standard api to the apis array, and the instance of the q wrapper to the qapis array in the [arrays] section.
// Verify that the new user agent names are printed when running this file.
// This just verifies that the WebApi is instantiating the APIs correctly... up to you to test that they actually work.



import webapim = require('vso-node-api/WebApi');
import basem = require('vso-node-api/ClientApiBases');
import buildm = require('vso-node-api/BuildApi');
import corem = require('vso-node-api/CoreApi');
import filecontainerm = require('vso-node-api/FileContainerApi');
import gallerym = require('vso-node-api/GalleryApi');
import gitm = require('vso-node-api/GitApi');
import taskagentm = require('vso-node-api/TaskAgentApi');
import taskm = require('vso-node-api/TaskApi');
import testm = require('vso-node-api/TestApi');
import tfvcm = require('vso-node-api/TfvcApi');
import workitemtrackingm = require('vso-node-api/WorkItemTrackingApi');

test_apis();

function test_apis() {
	var webapi: webapim.WebApi = new webapim.WebApi('http://serverfoobar.com', webapim.getBasicHandler('fooser', 'barssword'));

	var buildapi: buildm.IBuildApi = webapi.getBuildApi();
	var qbuildapi: buildm.IQBuildApi = webapi.getQBuildApi();
	var coreapi: corem.ICoreApi = webapi.getCoreApi();
	var qcoreapi: corem.IQCoreApi = webapi.getQCoreApi();
	var filecontainerapi: filecontainerm.IFileContainerApi = webapi.getFileContainerApi();
	var qfilecontainerapi: filecontainerm.IQFileContainerApi = webapi.getQFileContainerApi();
	var galleryapi: gallerym.IGalleryApi = webapi.getGalleryApi();
	var qgalleryapi: gallerym.IQGalleryApi = webapi.getQGalleryApi();
	var gitapi: gitm.IGitApi = webapi.getGitApi();
	var qgitapi: gitm.IQGitApi = webapi.getQGitApi();
	var taskapi: taskm.ITaskApi = webapi.getTaskApi();
	var qtaskapi: taskm.IQTaskApi = webapi.getQTaskApi();
	var agentapi: taskagentm.ITaskAgentApi = webapi.getTaskAgentApi();
	var qagentapi: taskagentm.IQTaskAgentApi = webapi.getQTaskAgentApi();
	var testapi: testm.ITestApi = webapi.getTestApi();
	var qtestapi: testm.IQTestApi = webapi.getQTestApi();
	var tfvcapi: tfvcm.ITfvcApi = webapi.getTfvcApi();
	var qtfvcapi: tfvcm.IQTfvcApi = webapi.getQTfvcApi();
	var witapi: workitemtrackingm.IWorkItemTrackingApi = webapi.getWorkItemTrackingApi();
	var qwitapi: workitemtrackingm.IQWorkItemTrackingApi = webapi.getQWorkItemTrackingApi();

	var apis: basem.ClientApiBase[] = [buildapi, coreapi, filecontainerapi, galleryapi, gitapi, taskapi, agentapi, testapi, tfvcapi, witapi];
	var qapis: basem.QClientApiBase[] = [qbuildapi, qcoreapi, qfilecontainerapi, qgalleryapi, qgitapi, qtaskapi, qagentapi, qtestapi, qtfvcapi, qwitapi];

	for(var api of apis) {
		console.log('API user agent name: ' + api.userAgent);
	}
	for(var qapi of qapis) {
		console.log('Q API user agent name: ' + qapi.api.userAgent);
	}
}
