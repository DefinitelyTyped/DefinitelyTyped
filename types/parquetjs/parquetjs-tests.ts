import parquet = require('parquetjs');

let schema = new parquet.ParquetSchema({
    name: { type: 'UTF8' },
    quantity: { type: 'INT64' },
    price: { type: 'DOUBLE' },
    date: { type: 'TIMESTAMP_MILLIS' },
    in_stock: { type: 'BOOLEAN' },
});

let writeRows = async () => {
    const writer = await parquet.ParquetWriter.openFile(schema, 'fruits.parquet');
    await writer.appendRow({ name: 'apples', quantity: 10, price: 2.5, date: new Date(), in_stock: true });
    await writer.appendRow({ name: 'oranges', quantity: 10, price: 2.5, date: new Date(), in_stock: true });
};

let readRows = async () => {
    const reader = await parquet.ParquetReader.openFile('fruits.parquet');

    let cursor = reader.getCursor();

    const record = await cursor.next();
    console.log(record);
    cursor = reader.getCursor(['name', 'price']);
    await reader.close();
};

schema = new parquet.ParquetSchema({
    name: { type: 'UTF8', encoding: 'PLAIN' }
});

schema = new parquet.ParquetSchema({
    age: { type: 'UINT_32', encoding: 'RLE', bitWidth: 7 }
});

schema = new parquet.ParquetSchema({
    name: { type: 'UTF8' },
    quantity: { type: 'INT64', optional: true },
});

writeRows = async () => {
    const writer = await parquet.ParquetWriter.openFile(schema, 'fruits.parquet');
    await writer.appendRow({ name: 'apples', quantity: 10 });
    await writer.appendRow({ name: 'banana' });
};

schema = new parquet.ParquetSchema({
    name: { type: 'UTF8' },
    colours: { type: 'UTF8', repeated: true },
    stock: {
      repeated: true,
      fields: {
        price: { type: 'DOUBLE' },
        quantity: { type: 'INT64' },
      }
    }
});

writeRows = async () => {
    const writer = await parquet.ParquetWriter.openFile(schema, 'fruits.parquet');

    await writer.appendRow({
        name: 'banana',
        colours: ['yellow'],
        stock: [{ price: 2.45, quantity: 16 }, { price: 2.6, quantity: 420 }],
    });

    await writer.appendRow({
        name: 'apple',
        colours: ['red', 'green'],
        stock: [{ price: 1.2, quantity: 42 }, { price: 1.3, quantity: 230 }],
    });

    await writer.close();
};

readRows = async () => {
    const reader = await parquet.ParquetReader.openFile('fruits.parquet');

    const cursor = reader.getCursor([['name'], ['stock', 'price']]);
    const record = await cursor.next();
    console.log(record);
    await reader.close();
};

const writeFile = async () => {
    const schema = new parquet.ParquetSchema({
        name: { type: 'UTF8' },
        colours: { type: 'UTF8', repeated: true },
        stock: {
            repeated: true,
            fields: {
                price: { type: 'DOUBLE' },
                quantity: { type: 'INT64' },
            }
        }
    });

    const writer = await parquet.ParquetWriter.openFile(schema, 'fruits.parquet');

    for (let i = 0; i < 100000; i++) {
        await writer.appendRow({
            name: 'banana',
            colours: ['yellow'],
            stock: [
                { price: 2.45, quantity: 16 },
                { price: 2.60, quantity: 420 }
            ]
        });
    }

    writer.setMetadata('createdBy', 'jon');
    writer.setMetadata('createdOn', new Date().toISOString());

    await writer.close();

    const reader = await parquet.ParquetReader.openFile('fruits.parquet');

    const cursor = reader.getCursor();

    console.log(cursor.metadata.key_value_metadata[0].key);
    console.log(cursor.metadata.row_groups[2].columns[3]);
};

const readSchema = () => {
    const schema = new parquet.ParquetSchema({
        name: { type: 'UTF8' },
        colours: { type: 'UTF8', repeated: true },
        stock: {
            repeated: true,
            fields: {
                price: { type: 'DOUBLE' },
            },
        },
    });

    console.log(schema.findField('name'));
    console.log(schema.findField(['stock', 'price']));
    console.log(schema.findFieldBranch('name'));
    console.log(schema.findFieldBranch(['stock', 'price']));
};
