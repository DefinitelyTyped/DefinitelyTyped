import { Printer } from 'ipp';

// @ts-expect-error
new Printer();

const printer = new Printer('http://printer.url');

// @ts-expect-error
printer.execute('not-a-valid-operation');

// @ts-expect-error
printer.execute('Print-Job', {
    'operation-attributes-tag': {
        'requesting-user-name': 123,
    },
});

// @ts-expect-error
printer.execute('Print-Job', {
    'not-valid-request-options': {},
});

// $ExpectType void
printer.execute('Print-Job');

// $ExpectType void
printer.execute('Print-URI');

// $ExpectType void
printer.execute('Validate-Job');

// $ExpectType void
printer.execute('Create-Job');

// $ExpectType void
printer.execute('Get-Printer-Attributes');

// $ExpectType void
printer.execute('Get-Jobs');

// $ExpectType void
printer.execute('Pause-Printer');

// $ExpectType void
printer.execute('Resume-Printer');

// $ExpectType void
printer.execute('Purge-Jobs');

// $ExpectType void
printer.execute('Send-Document');

// $ExpectType void
printer.execute('Send-URI');

// $ExpectType void
printer.execute('Cancel-Job');

// $ExpectType void
printer.execute('Release-Job');

// $ExpectType void
printer.execute('Get-Job-Attributes');

// $ExpectType void
printer.execute('Hold-Job');

// $ExpectType void
printer.execute('Restart-Job');
