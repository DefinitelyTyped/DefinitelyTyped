const res = session.execute("SELECT 42");
if (res.rows) {
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
}
