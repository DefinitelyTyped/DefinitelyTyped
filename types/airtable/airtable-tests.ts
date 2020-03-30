import * as Airtable from 'airtable';

interface Row extends Airtable.FieldSet {
  field1: string;
  attachments: Airtable.Attachment[];
  booleanField: boolean;
  numberField: number;
  singleCollaborator: Airtable.Collaborator;
  multiCollaborators: Airtable.Collaborator[];
}

const airtable = new Airtable();

const base = airtable.base('app id');

const table = base('table name') as Airtable.Table<Row>;

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
    {
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
        }
    }

    {
        const newRowData: Row = {
            field1: 'string',
            attachments: [],
            booleanField: false,
            numberField: 0,
            singleCollaborator: { email: '', id: '', name: '' },
            multiCollaborators: [],
        };

        const newRecord = await table.create(newRowData);

        newRecord.id;
        newRecord.fields;

        const newRecords = await table.create([newRowData, newRowData]);

        newRecords.forEach(r => {
            r.id;
            r.fields;
        });
    }
};
