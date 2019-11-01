import Agilite from 'agilite';

const agilite = new Agilite({
  apiKey: '',
  apiServerUrl: '',
  teamId: ''
});

agilite.getConfig();
agilite.executeCRUDRequest(agilite.appName.MODULE_KEY_KEYWORDS, agilite.reqType.GET, {}, {});

agilite.ApiKeys.postData({});
agilite.ApiKeys.getData(['profileKey'], ['recordId'], true);
agilite.ApiKeys.putData('recordId', {});
agilite.ApiKeys.deleteData('recordId');
agilite.ApiKeys.enableApiKey('recordId');
agilite.ApiKeys.disableApiKey('recordId');
agilite.ApiKeys.generateApiKey('recordId');

agilite.Keywords.postData({});
agilite.Keywords.getData(['profileKey'], ['recordId'], true);
agilite.Keywords.putData('recordId', {});
agilite.Keywords.deleteData('recordId');
agilite.Keywords.getByProfileKey('profilekey', agilite.Keywords.sort.ASC, agilite.Keywords.outputFormat.STRING);
agilite.Keywords.getProfileKeysByGroup('groupName', 'asc');
agilite.Keywords.getLabelByValue('profileKey', 'value', 'string');
agilite.Keywords.getValueByLabel('profileKey', 'label', 'string');

agilite.Numbering.postData({});
agilite.Numbering.getData(['profileKey'], ['recordId'], true);
agilite.Numbering.putData('recordId', {});
agilite.Numbering.deleteData('recordId');
agilite.Numbering.generate('profileKey', 'string', {});
agilite.Numbering.resetCounters('recordId');

agilite.Connectors.postData({});
agilite.Connectors.getData(['profileKey'], ['recordId'], true);
agilite.Connectors.putData('recordId', {});
agilite.Connectors.deleteData('recordId');
agilite.Connectors.execute('profileKey', 'routeKey', {});

agilite.DataMappings.postData({});
agilite.DataMappings.getData(['profileKey'], ['recordId'], true);
agilite.DataMappings.putData('recordId', {});
agilite.DataMappings.deleteData('recordId');
agilite.DataMappings.execute('profileKey', {});

agilite.Templates.postData({});
agilite.Templates.getData(['profileKey'], ['recordId'], true);
agilite.Templates.putData('recordId', {});
agilite.Templates.deleteData('recordId');
agilite.Templates.execute('profileKey', {});

agilite.BPM.postData({});
agilite.BPM.getData(['profileKey'], ['recordId'], true);
agilite.BPM.putData('recordId', {});
agilite.BPM.deleteData('recordId');
agilite.BPM.registerBPMRecord('processKey', 'user');
agilite.BPM.execute('processKey', 'bpmRecordId', 'optionSelected', 'user', 'comments', {});
agilite.BPM.getRecordState(['processKey'], ['recordId'], ['stepName'], ['user'], ['relevantUser'], true, true, true, null, null);
agilite.BPM.clearHistoryData('profileKey');
agilite.BPM.getActiveSteps('processKey');
agilite.BPM.getActiveUsers('processKey');
agilite.BPM.getByProfileKey('profileKey');

agilite.Roles.postData({});
agilite.Roles.getData(['profileKey'], ['recordId'], true);
agilite.Roles.putData('recordId', {});
agilite.Roles.deleteData('recordId');
agilite.Roles.getAssignedRoles('processKey', 'recordId', ['role']);
agilite.Roles.assignRole('processKey', 'recordId', 'name', 'user', ['user']);
agilite.Roles.reAssignResponsibleUser('recordId', 'user');
agilite.Roles.changeConditionalLevels('recordId', ['level1', 'level2']);

agilite.Files.uploadFile('name', 'content', {});
agilite.Files.getFile('recordId', agilite.Files.responseType.ARRAY_BUFFER);
agilite.Files.getFileName('recordId');
agilite.Files.deleteFile('recordId');

agilite.Utils.JSToXML('data');
agilite.Utils.XMLToJS('data');
agilite.Utils.account();
agilite.Utils.dashboardReports('start', 'end');
agilite.Utils.decodeXML('data');
agilite.Utils.encodeXML('data');
agilite.Utils.exportData(['module']);
agilite.Utils.formatDateTime('dateTimeValue', 'YYYY-MM-DD');
agilite.Utils.generatePDF({});
agilite.Utils.generateUUID();
agilite.Utils.html2json('data');
agilite.Utils.importData('fileId');

agilite.TierStructures.postData({});
agilite.TierStructures.getData(['profileKey'], ['recordId'], true);
agilite.TierStructures.putData('recordId', {});
agilite.TierStructures.deleteData('recordId');
agilite.TierStructures.getTierByKey(['key'], true, true, true, 'asc', 'string');
