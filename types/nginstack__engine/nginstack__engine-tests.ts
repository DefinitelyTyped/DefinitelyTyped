import * as DataSet from '@nginstack/engine/lib/dataset/DataSet';
import * as Database from '@nginstack/engine/lib/database/Database';

const values = ['test1', 'test_memo1', 1, true, new Date()];

const ds = new DataSet(); // $ExpectType DataSet

ds.createField('STR', 'string', 120); // $ExpectType void

ds.createField('MEMO', 'memo'); // $ExpectType void
ds.createField('NUM', 'int64'); // $ExpectType void
ds.createField('BOOL', 'boolean'); // $ExpectType void
ds.createField('DATE', 'date'); // $ExpectType void
ds.create(); // $ExpectType void
ds.append(values); // $ExpectType void
ds.append(ds); // $ExpectType void
ds.post(); // $ExpectType void

ds.first(); // $ExpectType void
ds.next(); // $ExpectType void
ds.setField('DATE', null); // $ExpectType void
ds.prior(); // $ExpectType void

const rowId1 = ds.rowId; // $ExpectType number
ds.sqlStatement; // $ExpectType string
ds.active; // $ExpectType boolean
ds.automaticApplyUpdates; // $ExpectType boolean
ds.automaticPost; // $ExpectType boolean
ds.bookmark; // $ExpectType string
ds.dataSetId; // $ExpectType number
ds.dataSetVersion; // $ExpectType number
ds.eof; // $ExpectType boolean
ds.fieldCount; // $ExpectType number
ds.fieldDefs; // $ExpectType DataSetFieldDefs

ds.setInformedField('NUM', true); // $ExpectType void
ds.setIndex('STR'); // $ExpectType void
ds.setRange('test', 'test2'); // $ExpectType void

ds.str('STR'); // $ExpectType string
ds.str('MEMO'); // $ExpectType string
ds.str('NUM'); // $ExpectType string
ds.num('NUM'); // $ExpectType number
ds.bool('BOOL'); // $ExpectType boolean
ds.date('DATE'); // $ExpectType Date | null
ds.dbkey('NUM'); // $ExpectType DBKey | null

const dsClone = new DataSet();
dsClone.clone(ds); // $ExpectType void

const dsCopy = new DataSet();
dsCopy.copyStructure(ds); // $ExpectType void
dsCopy.create();
dsCopy.append(values);
dsCopy; // $ExpectType DataSet

ds.fieldIsNull('DATE'); // $ExpectType boolean
ds.fieldIsProtected('NUM'); // $ExpectType boolean
ds.find('test1'); // $ExpectType boolean
ds.findKey(1); // $ExpectType boolean
ds.getFieldNames(); // $ExpectType string[]
ds.gotoRowId(rowId1); // $ExpectType void
ds.empty(); // $ExpectType void

const database = new Database('host', 'db'); // $ExpectType Database
database.login('user', 'password'); // $ExpectType boolean
database.dbName; // $ExpectType string
database.serverHost; // $ExpectType string
database.dbType; // $ExpectType string
database.uniqueId; // $ExpectType string
database.date; // $ExpectType Date
database.userKey; // $ExpectType number
database.userName; // $ExpectType string
database.userLanguage; // $ExpectType number
database.workloadType; // $ExpectType string
database.trackingId; // $ExpectType string
database.referrer; // $ExpectType string
database.protocol; // $ExpectType string

database.authenticateUser('user', 'password'); // $ExpectType number
database.loginByAuthToken('token'); // $ExpectType void
database.query('SELECT * FROM iVfs'); // $ExpectType DataSet | DataSet[]
database.incVersion(); // $ExpectType number
database.applyUpdates(ds); // $ExpectType number
database.getReferences(123, 'iVfs', 50); // $ExpectType DataSet
database.tableExists('iVfs'); // $ExpectType boolean
database.columnExists('iVfs', 'iKey'); // $ExpectType boolean
database.userHasScope(456, 'scope'); // $ExpectType boolean
database.logout(); // $ExpectType void

function testMajorVersions(prior: number, current: number): boolean {
    return current > prior;
}
testMajorVersions(64, 65); // $ExpectType boolean
