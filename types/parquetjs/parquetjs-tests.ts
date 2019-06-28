import parquet = require('parquetjs');

let schema = new parquet.ParquetSchema({
  name: { type: 'UTF8' },
  quantity: { type: 'INT64' },
  price: { type: 'DOUBLE' },
  date: { type: 'TIMESTAMP_MILLIS' },
  in_stock: { type: 'BOOLEAN' }
});

const writeRows = async () => {
    const writer = await parquet.ParquetWriter.openFile(schema, 'fruits.parquet');
    await writer.appendRow({name: 'apples', quantity: 10, price: 2.5, date: new Date(), in_stock: true});
    await writer.appendRow({name: 'oranges', quantity: 10, price: 2.5, date: new Date(), in_stock: true});
};

const readRows = async () => {
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
