import * as React from 'react';
import TableViewer from 'react-js-table-with-csv-dl';

const contentData = [
    {
        name: 'name',
        age: 26
    }
];

const headersData = ['name', 'age'];

const test = <TableViewer content={contentData} headers={headersData} maxHeight={1} minHeight={0} />;
