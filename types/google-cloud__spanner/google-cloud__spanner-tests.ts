import Spanner, {
	Instance,
	Database,
	SpannerDate,
	SpannerFloat64,
	SpannerInt64,
	Transaction
} from "@google-cloud/spanner";

const spanner: Spanner = new Spanner({
	projectId: "project-id"
});

const date: SpannerDate = spanner.date("06-02-1981");
const float: SpannerFloat64 = spanner.float("3.141");
const int: SpannerInt64 = spanner.int(34);

const instance = spanner.instance("my-instance");
const database = instance.database("my-database");

database.runTransaction((err, transaction) => {
	if (err) {
		// Error handling omitted.
	}

	// Run a transactional query.
	transaction.run("SELECT * FROM Singers", (err, rows) => {
		if (err) {
			// Error handling omitted.
		}

		// Queue a mutation (note that there is no callback passed to `insert`).
		transaction.insert("Singers", {
			SingerId: "Id3b",
			Name: "Joe West"
		});

		// Commit the transaction.
		transaction.commit(err => {
			if (!err) {
				// Transaction committed successfully.
			}
		});
	});
});

// For read-only transactions, use the `transaction.end()` function to
// release the transaction.
const options = {
	readOnly: true,
	strong: true
};

database.runTransaction(options, (err, transaction) => {
	if (err) {
		// Error handling omitted.
	}
	transaction.run("SELECT * FROM Singers", (err, rows) => {
		if (err) {
			// Error handling omitted.
		}

		// End the transaction. Note that no callback is provided.
		transaction.end();
	});
});

// The query to execute
const query = {
	sql: "SELECT 1"
};

// Execute a simple SQL statement
database
	.run(query)
	.then(results => {
		const rows = results[0];

		rows.forEach(row => console.log(row));
	})
	.catch(err => {
		console.error("ERROR:", err);
	});

const singersTable = database.table("Singers");
const albumsTable = database.table("Albums");

// Inserts rows into the Singers table
// Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so
// they must be converted to strings before being inserted as INT64s
singersTable
	.insert([
		{ SingerId: "1", FirstName: "Marc", LastName: "Richards" },
		{ SingerId: "2", FirstName: "Catalina", LastName: "Smith" },
		{ SingerId: "3", FirstName: "Alice", LastName: "Trentor" },
		{ SingerId: "4", FirstName: "Lea", LastName: "Martin" },
		{ SingerId: "5", FirstName: "David", LastName: "Lomond" }
	])
	.then(() => {
		// Inserts rows into the Albums table
		return albumsTable.insert([
			{ SingerId: "1", AlbumId: "1", AlbumTitle: "Total Junk" },
			{ SingerId: "1", AlbumId: "2", AlbumTitle: "Go, Go, Go" },
			{ SingerId: "2", AlbumId: "1", AlbumTitle: "Green" },
			{
				SingerId: "2",
				AlbumId: "2",
				AlbumTitle: "Forever Hold your Peace"
			},
			{ SingerId: "2", AlbumId: "3", AlbumTitle: "Terrified" }
		]);
	})
	.then(() => {
		console.log("Inserted data.");
	})
	.catch(err => {
		console.error("ERROR:", err);
	})
	.then(() => {
		// Close the database when finished.
		return database.close();
	});

database
	.run(query)
	.then(results => {
		const rows = results[0];

		rows.forEach(row => {
			const json = row.toJSON();
			console.log(
				`SingerId: ${json.SingerId}, AlbumId: ${
					json.AlbumId
				}, AlbumTitle: ${json.AlbumTitle}`
			);
		});
	})
	.catch(err => {
		console.error("ERROR:", err);
	})
	.then(() => {
		// Close the database when finished.
		return database.close();
	});

const readQuery = {
	columns: ["SingerId", "AlbumId", "AlbumTitle"],
	keySet: {
		all: true
	}
};

albumsTable.read(readQuery);

const request = ["ALTER TABLE Albums ADD COLUMN MarketingBudget INT64"];

// Creates a new index in the database
database.updateSchema(request);

const transferAmount = 200000;
const minimumAmountToTransfer = 300000;

database.runTransaction((err, transaction) => {
	if (err) {
		console.error(err);
		return;
	}
	let firstBudget: number, secondBudget: number;
	const queryOne = {
		columns: [`MarketingBudget`],
		keys: [[2, 2]] // SingerId: 2, AlbumId: 2
	};

	const queryTwo = {
		columns: ["MarketingBudget"],
		keys: [[1, 1]] // SingerId: 1, AlbumId: 1
	};

	Promise.all([
		// Reads the second album's budget
		transaction.read("Albums", queryOne).then(results => {
			// Gets second album's budget
			const rows = results[0].map(row => row.toJSON());
			secondBudget = rows[0].MarketingBudget;
			console.log(`The second album's marketing budget: ${secondBudget}`);

			// Makes sure the second album's budget is sufficient
			if (secondBudget < minimumAmountToTransfer) {
				throw new Error(
					`The second album's budget (${secondBudget}) is less than the minimum required amount to transfer.`
				);
			}
		}),

		// Reads the first album's budget
		transaction.read("Albums", queryTwo).then(results => {
			// Gets first album's budget
			const rows = results[0].map(row => row.toJSON());
			firstBudget = rows[0].MarketingBudget;
			console.log(`The first album's marketing budget: ${firstBudget}`);
		})
	])
		.then(() => {
			// Transfer the budgets between the albums
			console.log(firstBudget, secondBudget);
			firstBudget += transferAmount;
			secondBudget -= transferAmount;

			console.log(firstBudget, secondBudget);

			// Update the database
			// Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so they
			// must be converted (back) to strings before being inserted as INT64s.
			transaction.update("Albums", [
				{
					SingerId: "1",
					AlbumId: "1",
					MarketingBudget: firstBudget.toString()
				},
				{
					SingerId: "2",
					AlbumId: "2",
					MarketingBudget: secondBudget.toString()
				}
			]);
		})
		.then(() => {
			// Commits the transaction and send the changes to the database
			return transaction.commit();
		})
		.then(() => {
			console.log(
				`Successfully executed read-write transaction to transfer ${transferAmount} from Album 2 to Album 1.`
			);
		})
		.catch(err => {
			console.error("ERROR:", err);
		})
		.then(() => {
			// Close the database when finished.
			return database.close();
		});
});

const schemaRequest = ["CREATE INDEX AlbumsByAlbumTitle ON Albums(AlbumTitle)"];

// Creates a new index in the database
database.updateSchema(schemaRequest);

const paramsQuery = {
	sql: `SELECT AlbumId, AlbumTitle, MarketingBudget
        FROM Albums@{FORCE_INDEX=AlbumsByAlbumTitle}
        WHERE AlbumTitle >= @startTitle AND AlbumTitle <= @endTitle`,
	params: {
		startTitle: "A",
		endTitle: "B"
	}
};

// Queries rows from the Albums table
database.run(paramsQuery);

const indexQuery = {
	columns: ["AlbumId", "AlbumTitle"],
	keySet: {
		all: true
	},
	index: "AlbumsByAlbumTitle"
};

// Reads the Albums table using an index
albumsTable.read(indexQuery);

database.runTransaction({ readOnly: true }, (err, transaction) => {
	if (err) {
		console.error(err);
		return;
	}
	const queryOne = "SELECT SingerId, AlbumId, AlbumTitle FROM Albums";

	// Read #1, using SQL
	transaction
		.run(queryOne)
		.then(results => {
			const rows = results[0];
			rows.forEach(row => {
				const json = row.toJSON();
				console.log(
					`SingerId: ${json.SingerId}, AlbumId: ${
						json.AlbumId
					}, AlbumTitle: ${json.AlbumTitle}`
				);
			});
			const queryTwo = {
				columns: ["SingerId", "AlbumId", "AlbumTitle"],
				keySet: {
					all: true
				}
			};

			// Read #2, using the `read` method. Even if changes occur
			// in-between the reads, the transaction ensures that both
			// return the same data.
			return transaction.read("Albums", queryTwo);
		})
		.then(results => {
			const rows = results[0];
			rows.forEach(row => {
				const json = row.toJSON();
				console.log(
					`SingerId: ${json.SingerId}, AlbumId: ${
						json.AlbumId
					}, AlbumTitle: ${json.AlbumTitle}`
				);
			});
			console.log("Successfully executed read-only transaction.");
			transaction.end();
		})
		.catch(err => {
			console.error("ERROR:", err);
		})
		.then(() => {
			// Close the database when finished.
			return database.close();
		});
});
