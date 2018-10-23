import * as OracleDB from 'oracledb';

OracleDB.getConnection(
	{
		user: "hr",
		password: "welcome",
		connectString: "localhost/XE"
	},
	function(err, connection) {
		if (err) {
			console.error(err.message); return;
		}
		connection.execute(
			"SELECT department_id, department_name " +
			"FROM departments " +
			"WHERE manager_id < :id",
			[110],  // bind value for :id
			function(err, result) {
				if (err) {
					console.error(err.message);
				} else {
					console.log(result.rows);
					console.log(result.rows[0].department_id); // when outFormet is OBJECT
					console.log(result.metaData[0].name);
				}
				connection.release();
			}
		);
	}
);

OracleDB.getConnection(
	{
		user: "hr",
		password: "welcome",
		connectString: "localhost/XE"
	}
).then((connection: OracleDB.IConnection) => {
	return connection.execute(
		"SELECT department_id, department_name " +
		"FROM departments " +
		"WHERE manager_id < :id",
		[110]
	).then(result => {
		console.log(result.rows);
		console.log(result.rows[0].department_id); // when outFormet is OBJECT
		console.log(result.metaData[0].name);
	}).catch((err: any) => {
		console.error(err.message);
	}).then(() => {
		return connection.release();
	});
}).catch((err: any) => {
	console.error(err.message);
});
