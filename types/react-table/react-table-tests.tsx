import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTable from 'react-table';

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

type SinglePersonTable = new () => ReactTable<Person>;
const SinglePersonTable = ReactTable as SinglePersonTable;

type MultiPersonTable = new () => ReactTable<Person[]>;
const MultiPersonTable = ReactTable as MultiPersonTable;

class ObjectTestComponent extends React.Component {
    render(): JSX.Element {
        let christoph: Person = {
            firstName: 'Christoph',
            lastName: 'Spielmann',
            age: 37
        };
        let columns = [
            {
                Header: 'Name',
                accessor: (p: Person) => p.firstName + ' ' + p.lastName,
                filterable: true,
                Cell: (props: any) => <span className='number'>{props.value}</span>
            },
            {
                Header: 'Age',
                accessor: 'age',
                sortable: false,
                Footer: <a href="http://www.google.at" />
            }
        ];
        return <SinglePersonTable data={christoph} columns={columns}/>;
    }
}

class ArrayTestComponent extends React.Component {
    render(): JSX.Element {
        let christoph: Person = {
            firstName: 'Christoph',
            lastName: 'Spielmann',
            age: 37
        };
        return <MultiPersonTable data={[christoph]} columns={[]}/>;
    }
}
