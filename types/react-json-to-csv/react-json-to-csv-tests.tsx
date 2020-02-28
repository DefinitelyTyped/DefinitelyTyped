import * as React from 'react';
import CsvDownload from './index';

const mockData = {
    test: 'data',
};

const AComponent: React.FC = () => {
    return <CsvDownload data={mockData} />;
};

const BComponent: React.FC = () => {
    return <CsvDownload data={mockData} filename="string" />;
};

const CComponent: React.FC = () => {
    return (
        <CsvDownload data={mockData} filename="string">
            Test
        </CsvDownload>
    );
};
