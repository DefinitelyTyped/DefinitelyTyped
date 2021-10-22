import DS from 'ember-data';

// Ideally we'd have this extend Record<string, DS.Transform> since this should really only contain transforms.
// However, there are a number of existing apps where the return type is just directly registered here.
export default interface TransformRegistry {
    string: DS.StringTransform;
    boolean: DS.BooleanTransform;
    number: DS.NumberTransform;
    date: DS.DateTransform;
}
