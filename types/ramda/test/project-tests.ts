import * as R from 'ramda';

() => {
    interface Child {
        name: string;
        age: number;
        hair: string;
        grade: number;
    }

    const abby: Child = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
    const fred: Child = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
    const kids = [abby, fred];
    // $ExpectType Pick<Child, "name" | "grade">[]
    R.project(['name', 'grade'], kids); // => [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
    // $ExpectType Pick<Child, "name" | "grade">[]
    R.project(['name', 'grade'])(kids); // => [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
};
