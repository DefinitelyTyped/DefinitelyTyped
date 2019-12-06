import Airtable, {
    Table,
    FieldSet,
    Attachment,
    Collaborator,
    NewFieldData,
    ExistingFieldData
} from 'airtable';

interface TestFields extends FieldSet {
    field1: string;
    attachments: Attachment[];
    booleanField: boolean;
    numberField: number;
    singleCollaborator: Collaborator;
    multiCollaborators: Collaborator[];
}

const airtable = new Airtable();

const base = airtable.base('app id');
const table = base('table name') as Table<TestFields>;

Airtable.base('airtable')('table name') as Table<TestFields>;

async () => {
    const query = table.select({
        fields: [
            'field1',
        ],
        filterByFormula: `NOT({Example Text} = '')`,
        maxRecords: 100,
        pageSize: 10,
        sort: [
            {
                field: 'field1',
            },
            {
                field: 'attachments',
                direction: 'asc',
            },
        ],
        view: 'test-view',
        cellFormat: 'json',
        timeZone: 'test-tz',
        userLocale: 'test-locale',
    });

    const rows = await query.all();
    for (const row of rows) {
        row.id; // $ExpectType string
        row.fields.field1; // $ExpectType string
        row.fields.booleanField; // $ExpectType boolean
        row.fields.numberField; // $ExpectType number
        for (const attachment of row.fields.attachments) {
            attachment.id; // $ExpectType string
            attachment.filename; // $ExpectType string
            attachment.size; // $ExpectType number
            attachment.type; // $ExpectType string
            attachment.url; // $ExpectType string
            if (attachment.thumbnails) {
              attachment.thumbnails.full.height; // $ExpectType number
              attachment.thumbnails.full.width; // $ExpectType number
              attachment.thumbnails.full.url; // $ExpectType string

              attachment.thumbnails.large.height; // $ExpectType number
              attachment.thumbnails.large.width; // $ExpectType number
              attachment.thumbnails.large.url; // $ExpectType string

              attachment.thumbnails.small.height; // $ExpectType number
              attachment.thumbnails.small.width; // $ExpectType number
              attachment.thumbnails.small.url; // $ExpectType string
            }
        }
        row.fields.singleCollaborator.id; // $ExpectType string
        row.fields.singleCollaborator.email; // $ExpectType string
        row.fields.singleCollaborator.name; // $ExpectType string
        for (const collaborator of row.fields.multiCollaborators) {
            collaborator.id; // $ExpectType string
            collaborator.email; // $ExpectType string
            collaborator.name; // $ExpectType string
        }

        row.get('field1'); // $ExpectType string
        row.get('numberField'); // $ExpectType number
        row.set('field1', 'new value');
        row.set('numberField', 1);
        await row.save(); // $ExpectType Record<TestFields>

        await row.putUpdate({ field1: 'another new value', numberField: 2 }); // $ExpectType Record<TestFields>
        await row.patchUpdate({ field1: 'more new value', numberField: 3 }); // $ExpectType Record<TestFields>
    }

    query.eachPage((records, fetchNextPage) => {
      records.forEach(r => {
        r.id; // $ExpectType string
      });

      fetchNextPage();
    });

    const results = await query.firstPage();
    results.forEach(r => {
      r.id; // $ExpectType string
    });

    const newRowData: NewFieldData<TestFields> = {
        fields: {
            field1: 'string',
            attachments: [],
            booleanField: false,
            numberField: 0,
            singleCollaborator: { email: '', id: '', name: '' },
            multiCollaborators: []
        }
    };

    const newRecord = await table.create(newRowData);

    newRecord.id;
    newRecord.fields;

    const newRecords = await table.create([newRowData, newRowData], { typecast: true });

    newRecords.forEach(r => {
        r.id;
        r.fields;
    });

    const updateRowData: Array<ExistingFieldData<TestFields>> = [{
        id: newRecord.id,
        fields: {
            booleanField: true
        }
    }];

    const updatedRecords = await table.update(updateRowData);
    updatedRecords.forEach(r => {
      r.fields.booleanField; // $ExpectType boolean
    });

    const replacedRecord = await table.replace(newRecord.id, newRowData);
    replacedRecord.fields.numberField; // $ExpectType number

    await table.destroy(newRecord.id);
    await table.destroy(newRecords.map(r => r.id));
};
