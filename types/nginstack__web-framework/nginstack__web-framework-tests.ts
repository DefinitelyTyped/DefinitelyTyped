import * as Grid from '@nginstack/web-framework/lib/grid/Grid';
import * as GridField from '@nginstack/web-framework/lib/grid/GridField';

const grid = new Grid('*', 'name'); // $ExpectType Grid
const gridField = new GridField('name', 'type', null); // $ExpectType GridField

grid.classDefManager; // $ExpectType ClassDefManager
grid.classesToValidatePermissions; // $ExpectType any[]
grid.groups; // $ExpectType any
grid.toolbar; // $ExpectType { visible: boolean; }
grid.fields; // $ExpectType FieldList
grid.parent; // $ExpectType any
grid.process; // $ExpectType Process
grid.userPrefName; // $ExpectType string
grid.unselectableRecords; // $ExpectType any[]
grid.title; // $ExpectType string
grid.integerDatabaseType; // $ExpectType string
grid.selectedRecords; // $ExpectType string[]
grid.getSelectedRecords(1); // $ExpectType any[]
grid.getSelectedRecordsAtView(1); // $ExpectType any[]
grid.hasDataSet(); // $ExpectType boolean
grid.userCanExport; // $ExpectType boolean
grid.toggleKeyButtonEnabled; // $ExpectType boolean
grid.getLookupCallerField(); // $ExpectType Field
grid.autoPersist; // $ExpectType boolean
grid.onBeforeEdit; // $ExpectType Event
grid.onAfterEdit; // $ExpectType Event
grid.onBeforeInsert; // $ExpectType Event
grid.onAfterInsert; // $ExpectType Event
grid.onBeforeDelete; // $ExpectType Event
grid.onAfterDelete; // $ExpectType Event
grid.onBeforeCancel; // $ExpectType Event
grid.onAfterCancel; // $ExpectType Event
grid.onBeforePost; // $ExpectType Event
grid.onAfterPost; // $ExpectType Event
grid.onChangeView; // $ExpectType Event
grid.onBeforeScroll; // $ExpectType Event
grid.onAfterScroll; // $ExpectType Event
grid.onLocate; // $ExpectType Event
grid.onBeforeDuplicate; // $ExpectType Event
grid.onAfterDuplicate; // $ExpectType Event
grid.onShowLog; // $ExpectType Event
grid.onBeforeSelectRecord; // $ExpectType Event
grid.onAfterSelectRecord; // $ExpectType Event
grid.onDefineFields; // $ExpectType Event
grid.onBeforePrepare; // $ExpectType Event
grid.onAfterPrepare; // $ExpectType Event
grid.onBeforeExpand; // $ExpectType Event
grid.onAfterExpand; // $ExpectType Event
grid.onExport; // $ExpectType Event
grid.setFieldsProperties(['*']); // $ExpectType void
grid.getFieldsByProperty(['*']); // $ExpectType Field[]
grid.getKeyField(); // $ExpectType Field
grid.emit('*', ['*']); // $ExpectType any
grid.resetFields(); // $ExpectType void
grid.clearButtons(); // $ExpectType void
grid.name; // $ExpectType string
grid.help; // $ExpectType string | { overview: string; buttons: Record<string, string>; }
grid.refresh(true); // $ExpectType void
grid.tableViewFieldNames; // $ExpectType string
grid.formViewFieldNames; // $ExpectType string
grid.ds; // $ExpectType DataSet
grid.definitionClass; // $ExpectType number | null
grid.definitionName; // $ExpectType number | null
grid.column; // $ExpectType number
grid.breakLine; // $ExpectType boolean
grid.cssClass; // $ExpectType any
grid.width; // $ExpectType string
grid.confirmDelete; // $ExpectType boolean
grid.confirmCancel; // $ExpectType boolean
grid.confirmChange; // $ExpectType boolean
grid.canShowLog; // $ExpectType boolean
grid.canDuplicate; // $ExpectType boolean
grid.readOnly; // $ExpectType boolean
grid.canModify; // $ExpectType boolean
grid.classKey; // $ExpectType number
grid.classDefinition; // $ExpectType any
grid.maxSelectedRecords; // $ExpectType number
grid.maxRecordCount; // $ExpectType number
grid.hasTableView; // $ExpectType boolean
grid.hasFormView; // $ExpectType boolean
grid.collapsed; // $ExpectType boolean
grid.canInsert; // $ExpectType number
grid.canEdit; // $ExpectType number
grid.canDelete; // $ExpectType number
grid.canExport; // $ExpectType number
grid.dataExporter; // $ExpectType any
grid.canInvertSelection; // $ExpectType boolean
grid.automaticClearSelectedRecords; // $ExpectType boolean
grid.canPostDataSetOnEvents; // $ExpectType boolean
grid.hintFieldNames; // $ExpectType string
grid.automaticClearUnselectableRecords; // $ExpectType boolean
grid.viewMode; // $ExpectType number
grid.classKeyToValidatePermission; // $ExpectType number | DBKey
grid.selectedRecordsChanged; // $ExpectType boolean
grid.edit(); // $ExpectType void
grid.insert(); // $ExpectType void
grid.del(true); // $ExpectType void
grid.post(); // $ExpectType boolean
grid.cancel(); // $ExpectType void
grid.getFieldsAsStringList(); // $ExpectType StringList
grid.field('name'); // $ExpectType Field | ViewDefField
grid.button('name'); // $ExpectType Button
grid.visibleButtons; // $ExpectType (string | Button)[]
grid.visibleActions; // $ExpectType (string | Button)[]
grid.enabledButtons; // $ExpectType (string | Button)[]
grid.enabledActions; // $ExpectType (string | Button)[]
grid.persist(); // $ExpectType number
grid.write(); // $ExpectType void
grid.userKeyToValidatePermissions; // $ExpectType number
grid.validateFieldPermissions; // $ExpectType boolean
grid.scroll('action'); // $ExpectType void
grid.duplicateRecord(); // $ExpectType void
grid.lookup(gridField); // $ExpectType void
grid.expand('nodeValue'); // $ExpectType void
grid.colapse('nodeValue'); // $ExpectType void
grid.toggleKeyVisibility(); // $ExpectType void
grid.toggleFieldVisibility('field'); // $ExpectType void
