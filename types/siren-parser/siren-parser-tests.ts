import parseSiren from 'siren-parser';
import * as superagent from 'superagent';
import * as sirenSuperagent from 'siren-parser/superagent';
import * as chai from 'chai';
import 'siren-parser/chai';

parseSiren('{"class":["foo","bar"]}');

const siren = {
    title: 'My title',
    class: ['outer'],
    links: [{
        rel: ['self', 'crazy'],
        href: 'http://example.com'
    }, {
        rel: ['crazy'],
        href: 'http://example2.com'
    }],
    actions: [{
        name: 'fancy-action',
        href: 'http://example.com',
        title: 'A fancy action!',
        method: 'GET',
        fields: [{
            name: 'max',
            title: 'Maximum value'
        }]
    }],
    entities: [{
        class: ['inner', 'smaller'],
        rel: ['child'],
        links: [{
            rel: ['self'],
            href: 'http://example.com/child',
            title: 'Child entity'
        }]
    }],
    properties: {
        one: 1,
        two: 2,
        pi: 'is exactly three'
    }
};

const entity = parseSiren(siren);

D2L.Hypermedia.Siren.Parse(siren);

chai.expect(entity).to.have.sirenAction('fancy-action');
chai.expect(entity).to.have.a.sirenAction.with.method('GET');
chai.expect(entity).to.have.sirenLinks.with.classes('foo', 'bar');
chai.expect(entity).to.have.sirenLinks.all.with.classes('foo', 'bar');
chai.expect(entity).to.have.a.sirenEntity.with.a.sirenEntity.with.title('foo');

sirenSuperagent.perform(superagent, entity.getAction('fancy-action')!)
    .send({key: 'value'})
    .parse(sirenSuperagent.parse)
    .end((err, res) => {
        const resource = res.body;
        chai.expect(resource).to.have.sirenProperty('some-field');
    });

superagent.parse['application/vnd.siren+json'] = sirenSuperagent.parse;

// Entity
entity.rel;
entity.title;
entity.type;
entity.properties;
entity.class;
entity.actions;
entity.links;
entity.entities;

// Entity.hasXByY
entity.hasActionByName('fancy-action');
entity.hasClass('inner');
entity.hasSubEntityByRel('child');
entity.hasSubEntityByType('child');
entity.hasLinkByRel('crazy');
entity.hasProperty('three');

// Entity.getXByY
entity.getActionByName('fancy-action');
entity.getLinkByRel('self');
entity.getLinksByRel('crazy');
entity.getSubEntitiesByRel('child');
entity.getSubEntityByRel('child');
entity.getSubEntityByRel('child');
entity.getSubEntityByClass('inner');
entity.getSubEntitiesByClass('inner');

// Entity.getXByY'es
entity.getActionByClasses(['crazy', /self/]);
entity.getActionsByClasses(['crazy', /cool/]);
entity.getLinkByClasses(['crazy', /self/]);
entity.getLinksByClasses(['crazy', /cool/]);
entity.getLinkByRels(['thing1', /thing2/]);
entity.getLinksByRels(['thing1', /thing2/]);
entity.getSubEntityByClasses(['crazy', /self/]);
entity.getSubEntitiesByClasses(['crazy', /cool/]);
entity.getSubEntityByRels(['thing1', /thing2/]);
entity.getSubEntitiesByRels(['thing1', /thing2/]);

// Link
const link = entity.getLink('crazy');
if (link) {
    link.rel;
    link.href;
    link.class;
    link.title;
    link.type;

    // Link.hasClass
    link.hasClass('foo');
}

// Action
const action = entity.getActionByName('fancy-action');
if (action) {
    action.name;
    action.href;
    action.class;
    action.method;
    action.title;
    action.type;
    action.fields;

    // Action.hasXByY
    action.hasFieldByName('max');
    action.hasFieldByClass('max');
    action.hasFieldByType('max');
    action.hasClass('max');

    // Action.getXByY
    action.getFieldByName('crazy');
    action.getFieldByClass('crazy');
    action.getFieldsByClass('crazy');
    action.getFieldByClasses(['crazy', /self/]);
    action.getFieldsByClasses(['crazy', /self/]);
    action.getFieldByType('crazy');
    action.getFieldsByType('crazy');

    // Field
    const field = action.getField('max');
    if (field) {
        field.name;
        field.value;
        field.class;
        field.type;
        field.title;

        // Field.hasClass
        field.hasClass('foo');
    }
}
