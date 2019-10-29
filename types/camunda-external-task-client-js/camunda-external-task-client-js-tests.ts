import { Client, Variables } from 'camunda-external-task-client-js';

new Client({ baseUrl: '' }); // $ExpectType Client
new Variables(); // $ExpectType Variables
new Variables().set('a', 42).getAllTyped(); // $ExpectType TypedValue[]
