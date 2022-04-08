const firstrecord = new GlideRecord("core_company");

const record = new GlideRecord("core_company");
record.addQuery('property', '=', firstrecord.sys_id);
record.addQuery('property2', '!=', 'somevalue');
if (record.get('somesysid')) {
    gs.info('got it');
}

const wf = new global.Workflow();

const rest = new sn_ws.RESTMessageV2();

// test merging
declare namespace servicenow {
    interface GlideRecord {
        new(type: "othertype"): OtherType;
    }

    interface OtherType extends GlideRecord {
        someproperty: string;
    }
}

const record2 = new GlideRecord("othertype");
record2.someproperty = "foo";
