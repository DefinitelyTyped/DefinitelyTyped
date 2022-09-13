const NewInclude = Class.create();

const grFirst = new GlideRecord('core_company');

const grSecond = new GlideRecord('core_company');
grSecond.addQuery('property', '=', grFirst.sys_id);
grSecond.addQuery('property2', '!=', 'somevalue');
if (grSecond.get('somesysid')) {
    gs.info('got it');
}

const wf = new global.Workflow();

const rest = new sn_ws.RESTMessageV2();

interface ScopedGlideRecord {
    new (tableName: 'othertype'): OtherType;
}
interface OtherType extends ScopedGlideRecord {
    someproperty: string;
}

const grOther = new GlideRecord('othertype');
grOther.someproperty = 'foo';
