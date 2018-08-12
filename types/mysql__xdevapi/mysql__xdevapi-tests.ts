import { getSession, LockContention } from '@mysql/xdevapi';

interface TestCollectionItem {
	number1: number;
	value2: string;
	numbers: number[];
}

interface TestTableRow {
	number1: number;
	value2: string;
}

/**
 * Test basic schemas
 */
getSession({host: 'localhost'}).then(session => {
	const schema = session.getSchema('Schema');

	schema.createCollection<TestCollectionItem>('TestCollection', {
		ReuseExistingObject: false
	});

	schema.existsInDatabase(); // $ExpectType Promise<boolean>

	schema.getClassName(); // $ExpectType string

	schema.getName(); // $ExpectType string

	schema.getSession(); // $ExpectType Session

	schema.getTables(); // $ExpectType Promise<Table<{}>[]>

	schema.getCollections(); // $ExpectType Promise<Collection<{}>[]>

	/**
	 * Since we know the schema works, move on to collections
	 */
	const testCollection = schema.getCollection<TestCollectionItem>('TestCollection');

	testCollection.count(); // $ExpectType Promise<number>

	testCollection.createIndex('my_index', {
		fields: [{
			field: 'number1',
			required: true,
			type: 'INT'
		}],
		type: 'INDEX'
	});

	testCollection.dropIndex('my_index'); // $ExpectType Promise<boolean>

	testCollection.existsInDatabase(); // $ExpectType Promise<boolean>

	testCollection.getName(); // $ExpectType string

	testCollection.getOne('id'); // $ExpectType TestCollectionItem

	testCollection.getSchema(); // $ExpectType Schema

	testCollection.getSession(); // $ExpectType Session

	testCollection.inspect();

	testCollection.replaceOne('_id', { number1: 1, numbers: [], value2: '' }); // $ExpectType Promise<Result>

	// CollectionFind
	{
		const finder = testCollection.find('number1 = :num'); // $ExpectType CollectionFind<TestCollectionItem>

		finder.bind('number1', 0); // $ExpectType CollectionFind<TestCollectionItem>
		finder.bind({ value2: '' }); // $ExpectType CollectionFind<TestCollectionItem>

		finder.fields('number1'); // $ExpectType CollectionFind<TestCollectionItem>

		finder.execute((item: TestCollectionItem) => {}); // $ExpectType Promise<Result>

		finder.groupBy('number1'); // $ExpectType CollectionFind<TestCollectionItem>
		finder.groupBy('number1', 'value2'); // $ExpectType CollectionFind<TestCollectionItem>
		finder.groupBy(['number1', 'value2']); // $ExpectType CollectionFind<TestCollectionItem>

		finder.having('number1 = :test'); // $ExpectType CollectionFind<TestCollectionItem>

		finder.limit(10); // $ExpectType CollectionFind<TestCollectionItem>
		finder.limit(10, 5); // $ExpectType CollectionFind<TestCollectionItem>

		finder.lockExclusive(LockContention.SKIP_LOCKED); // $ExpectType CollectionFind<TestCollectionItem>
		finder.lockShared(LockContention.DEFAULT); // $ExpectType CollectionFind<TestCollectionItem>

		finder.offset(5); // $ExpectType CollectionFind<TestCollectionItem>

		finder.sort('number1 ASC'); // $ExpectType CollectionFind<TestCollectionItem>
	}

	// CollectionModify
	{
		const modify = testCollection.modify('number1 = :num'); // $ExpectType CollectionModify<TestCollectionItem>

		modify.arrayAppend('numbers', 0); // $ExpectType CollectionModify<TestCollectionItem>

		modify.arrayInsert('numbers', 1); // $ExpectType CollectionModify<TestCollectionItem>

		modify.bind('num', 0); // $ExpectType CollectionModify<TestCollectionItem>
		modify.bind({ value2: '' }); // $ExpectType CollectionModify<TestCollectionItem>

		modify.execute(); // $ExpectType Promise<Result>

		modify.getClassName(); // $ExpectType string

		modify.limit(10); // $ExpectType CollectionModify<TestCollectionItem>
		modify.limit(10, 5); // $ExpectType CollectionModify<TestCollectionItem>

		modify.offset(5); // $ExpectType CollectionModify<TestCollectionItem>

		modify.sort('number1 ASC'); // $ExpectType CollectionModify<TestCollectionItem>

		modify.patch({ numbers: [1] }); // $ExpectType CollectionModify<TestCollectionItem>

		modify.set('number1', 1); // $ExpectType CollectionModify<TestCollectionItem>

		modify.unset(['number1', 'numbers']); // $ExpectType CollectionModify<TestCollectionItem>
	}

	// CollectionRemove
	{
		const remove = testCollection.remove('number1 = :num'); // $ExpectType CollectionRemove<TestCollectionItem>

		remove.bind('num', 1); // $ExpectType CollectionRemove<TestCollectionItem>

		remove.execute(); // $ExpectType Promise<Result>

		remove.limit(10, 5); // $ExpectType CollectionRemove<TestCollectionItem>

		remove.offset(5); // $ExpectType CollectionRemove<TestCollectionItem>

		remove.sort('number1 ASC'); // $ExpectType CollectionRemove<TestCollectionItem>
	}

	const testTableCollection = schema.getCollectionAsTable<TestTableRow>('TestCollection'); // $ExpectType Table<TestTableRow>

	testTableCollection.count(); // $ExpectType Promise<number>

	testTableCollection.exiistsInDatabase(); // $ExpectType Promise<boolean>

	testTableCollection.getName(); // $ExpectType string

	testTableCollection.getSchema(); // $ExpectType Schema

	testTableCollection.inspect();

	testTableCollection.isView(); // $ExpectType Promise<boolean>

	// TableDelete
	{
		const tableDelete = testTableCollection.delete('number1 = :num'); // $ExpectType TableDelete<TestTableRow>

		tableDelete.bind('num', 1); // $ExpectType TableDelete<TestTableRow>
		tableDelete.bind({ num: 1 }); // $ExpectType TableDelete<TestTableRow>

		tableDelete.execute(); // $ExpectType Promise<Result>

		tableDelete.limit(10, 5); // $ExpectType TableDelete<TestTableRow>

		tableDelete.offset(5); // $ExpectType TableDelete<TestTableRow>

		tableDelete.orderBy('number1'); // $ExpectType TableDelete<TestTableRow>
	}

	// TableInsert
	{
		const tableInsert = testTableCollection.insert({ number1: 1, value2: '' }); // $ExpectType TableInsert<TestTableRow>

		tableInsert.execute(); // $ExpectType Promise<Result>
	}
	{
		const tableInsert = testTableCollection.insert(['number1', 'value2']); // $ExpectType TableInsert<TestTableRow>

		tableInsert.values(['1', 'test']); // $ExpectType TableInsert<TestTableRow>
	}

	// TableSelect
	{
		const tableSelect = testTableCollection.select('number1', 'value2'); // $ExpectType TableSelect<TestTableRow>

		tableSelect.where('number1 = :num'); // $ExpectType TableSelect<TestTableRow>

		tableSelect.bind('num', 1); // $ExpectType TableSelect<TestTableRow>

		tableSelect.execute(); // $ExpectType Promise<Result>

		tableSelect.getViewDefinition(); // $ExpectType string

		tableSelect.groupBy('number1'); // $ExpectType TableSelect<TestTableRow>

		tableSelect.having('number1 > 2'); // $ExpectType TableSelect<TestTableRow>

		tableSelect.limit(10, 5); // $ExpectType TableSelect<TestTableRow>
		tableSelect.limit(10); // $ExpectType TableSelect<TestTableRow>

		tableSelect.lockExclusive(LockContention.SKIP_LOCKED); // $ExpectType TableSelect<TestTableRow>
		tableSelect.lockShared(LockContention.SKIP_LOCKED); // $ExpectType TableSelect<TestTableRow>

		tableSelect.offset(5); // $ExpectType TableSelect<TestTableRow>

		tableSelect.orderBy('number1 ASC'); // $ExpectType TableSelect<TestTableRow>

		tableSelect.sort('number1'); // $ExpectType TableSelect<TestTableRow>
	}

	// TableUpdate
	{
		const tableUpdate = testTableCollection.update('number1 = :num'); // $ExpectType TableUpdate<TestTableRow>

		tableUpdate.bind('num', 1); // $ExpectType TableUpdate<TestTableRow>

		tableUpdate.execute(); // $ExpectType Promise<Result>

		tableUpdate.getClassName(); // $ExpectType string

		tableUpdate.limit(10, 5); // $ExpectType TableUpdate<TestTableRow>

		tableUpdate.offset(5); // $ExpectType TableUpdate<TestTableRow>

		tableUpdate.orderBy('number1 ASC'); // $ExpectType TableUpdate<TestTableRow>

		tableUpdate.set('value2', 'string'); // $ExpectType TableUpdate<TestTableRow>
		tableUpdate.set('number1', 1); // $ExpectType TableUpdate<TestTableRow>
	}
});
