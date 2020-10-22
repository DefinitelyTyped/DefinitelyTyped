/** @jsx h */
import { h } from 'ink';
import Table from 'ink-table';

const data = [
    {
        name: 'Sosa Saunders',
        gender: 'male',
        age: 17,
        email: 'sosa.saunders@mail.com',
        phone: '+1 (809) 435-2786'
    },
    {
        name: 'Angelina Kirk',
        gender: 'female',
        age: 3,
        email: 'angelina@kirk.io',
        phone: '+1 (870) 567-3516'
    },
    {
        name: 'Bradford Rosales',
        gender: 'male',
        age: 20,
        email: 'bradfordrosales@fast.com',
        phone: '+1 (918) 573-3240'
    },
    {
        name: 'Gwen Schroeder',
        gender: 'female',
        age: 17,
        email: 'gwen@corp.xyz',
        phone: '+1 (987) 417-2062'
    },
    {
        name: 'Ellison Mann',
        gender: 'male',
        age: 5,
        email: 'ellisonmann@katakana.com',
        phone: '+1 (889) 411-2186'
    }
];

const Basic = () => (
    <Table data= { data } />
);
