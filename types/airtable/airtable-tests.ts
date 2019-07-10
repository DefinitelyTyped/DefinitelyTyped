import * as Airtable from 'airtable';

interface Row extends Airtable.FieldSet {
  field1: string;
  attachments: Airtable.Attachment[];
}

const airtable = new Airtable();

const base = airtable.base('app id');

const table = base('table name') as Airtable.Table<Row>;

async () => {
    const query = table.select();
    {
        const rows = await query.all();
        for (const row of rows) {
            row.id; // $ExpectType string
            row.fields.field1; // $ExpectType string
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
        }
    }
};
