import { merge } from 'object-mapper';

interface FlatPerson {
    name: string;
    age: number;
    mother: string;
    father: string;
}

interface Family {
    father: string;
    mother: string;
}

interface NestedPerson {
    name: string;
    age: number;
    family: Family;
}

const mapping = {
    name: 'name',
    age: 'age',
    mother: 'family.mother',
    father: 'family.father',
};

const nestedPerson: NestedPerson = {
    name: 'Jack Bauer',
    age: 29,
    family: {
        father: 'Mike',
        mother: 'Christina',
    },
};

const flatPerson: FlatPerson = {
    name: 'Value that will be replaced',
    age: -2,
    father: 'Value that will be replaced',
    mother: 'Value that will be replaced',
};

merge(nestedPerson, mapping);
merge(nestedPerson, flatPerson, mapping);
