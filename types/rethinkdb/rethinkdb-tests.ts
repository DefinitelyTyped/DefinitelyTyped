import * as r from 'rethinkdb';

function errorAndCursorCallback(err: Error, cursor: r.Cursor): void {}
function cursorCallback(cursor: r.Cursor): void {}

r.connect({ host: 'localhost', port: 28015 }, function(err: Error, conn: r.Connection) {
    console.log('HI', err, conn);

    conn.server((err, server) => {});

    const testDb = r.db('test');

    r.table('players')
        .hasFields('games_won')
        .run(conn, errorAndCursorCallback);
    r.table('players')
        .hasFields({ games_won: { championships: true } })
        .run(conn, errorAndCursorCallback);
    r.table('players')
        .filter(r.row.hasFields('games_won').not())
        .run(conn, errorAndCursorCallback);
    r.table('players')
        .filter(r.row.hasFields({ games_won: { championships: true } }).not())
        .run(conn, errorAndCursorCallback);

    r.table('players')
        .filter(
            r.row
                .hasFields('games_won')
                .not()
                .or(
                    r
                        .row('games_won')
                        .not()
                        .eq(true),
                )
                .and(true),
        )
        .run(conn, errorAndCursorCallback);

    r.table('players')
        .merge((player: r.Expression<Object>) => {
            return {
                teams: r
                    .table('games')
                    .getAll(player('teamIds'))
                    .coerceTo('array'),
            };
        })
        .run(conn, errorAndCursorCallback);

    const center = r.point(123, 456);
    r.table('geo')
        .getIntersecting(r.circle(center, 1000, { unit: 'm' }), { index: 'location' })
        .orderBy(r.row('location').distance(center, { unit: 'm' }))
        .eqJoin('external', testDb.table('other'), { index: 'external' })
        .getField('right')
        .run(conn, errorAndCursorCallback);

    testDb.tableCreate('users').run(conn, function(err, stuff) {
        const users = testDb.table('users');
        users.wait({ waitFor: 'ready_for_reads' });
        users.insert({ name: 'bob' }).run(conn, function() {});

        users.hasFields('foo_bar').run(conn, () => {});

        users
            .filter(function(doc?) {
                return doc('henry').eq('bob');
            })
            .filter(
                r
                    .row('updatedAt')
                    .default(0)
                    .lt(r.now().sub(1000)),
            )
            .between('james', 'beth')
            .limit(4)
            .run(conn, function(err, cursor) {
                cursor.toArray<string>((err, strings) => {
                    console.log(strings);
                });
            });
    });

    testDb.table('users').indexCreate('name_index', [r.row('name')]);

    r.js("'str1' + 'str2'").run(conn, function(err, value) {});
    r.uuid().run(conn, function(err, uuid) {});
    r.uuid('input value').run(conn, function(err, uuid) {});

    r.table('games')
        .changes()
        .run(conn, function(err, cursor) {
            cursor.each(console.log);
        });
});

// use promises instead of callbacks
r.connect({ host: 'localhost', port: 28015 }).then(function(conn: r.Connection) {
    console.log('HI', conn);

    conn.server().then(server => {
        console.log(server.id, server.proxy);
    });

    const testDb = r.db('test');
    testDb.wait({ timeout: 1 });

    r.table('players')
        .hasFields('games_won')
        .run(conn)
        .then(cursorCallback);
    r.table('players')
        .hasFields({ games_won: { championships: true } })
        .run(conn)
        .then(cursorCallback);
    r.table('players')
        .filter(r.row.hasFields('games_won').not())
        .run(conn)
        .then(cursorCallback);
    r.table('players')
        .filter(r.row.hasFields({ games_won: { championships: true } }).not())
        .run(conn)
        .then(cursorCallback);

    // Check pluck & without on Operation<TObjectType>
    r.table('players')
        .get('lebron_james')
        .pluck('height', 'games_won')
        .run(conn)
        .then(lebron => console.log(lebron));
    r.table('players')
        .get('lebron_james')
        .without('height', 'games_won')
        .run(conn)
        .then(lebron => console.log(lebron));

    // Check pluck & without on Sequence
    r.table('players')
        .pluck('height', 'games_won')
        .run(conn)
        .then(cursor => cursor.toArray());
    r.table('players')
        .without('height', 'games_won')
        .coerceTo('array')
        .run(conn);

    // Get all using a multi index:
    r.table('players').getAll(['forward', 'basketball'], { index: 'positionAndSport' });

    // Get all using mutliple keys:
    r.table('players')
        .getAll('lebron_james', 'roger_federer', 'serena_williams')
        .coerceTo('array')
        .run(conn);

    // Get all using multiple keys & a multi index:
    r.table('players')
        .getAll(['forward', 'basketball'], ['forward', 'hockey'], { index: 'positionAndSport' })
        .coerceTo('array')
        .run(conn);

    // Append elements to an array, see if they exist:
    r.expr([1, 2, 'a', 'b'])
        .append(true)
        .append(4)
        .append(new Date())
        .append(r.expr(23))
        .contains(4)
        .run(conn);
    r.expr([1, 2, 'a', 'b'])
        .append(true)
        .append(4)
        .append(new Date())
        .append(r.expr(23))
        .contains(4)
        .run(conn);

    // Do math on numbers and expressions:
    // What percent are basketball players?
    r.expr(100)
        .mul(
            r
                .table('players')
                .filter({ sport: 'basketball' })
                .count(),
        )
        .div(r.table('players').count())
        .add(10)
        .sub(r.expr(10))
        .mul(1, r.expr(1))
        .div(1, r.expr(1))
        .run(conn);

    // Get one specific row value:
    r.table('players')
        .get('lebron_james')('height')
        .run(conn)
        .then(console.log.bind(console));

    // Get all players' heights:
    r.table('players')('height')
        .run(conn)
        .then(cursor => cursor.toArray())
        .then(console.log.bind(console));

    // Get and get all using non-string keys:
    r.table('superbowls').get(1982).run(conn);
    r.table('superbowls').getAll(1982, 1983, 1984).run(conn);
    r.table('boringBooleans').get(true).run(conn);
    r.table('superbowls').getAll(new Date('1982-01-24'), { index: 'date' }).run(conn);

    
    testDb
        .tableCreate('users')
        .run(conn)
        .then(function() {
            const users = testDb.table('users');

            users.insert({ name: 'bob' }).run(conn, function() {});

            users
                .filter(function(doc?) {
                    return doc('henry').eq('bob');
                })
                .between('james', 'beth')
                .limit(4)
                .run(conn)
                .then((cursor: r.Cursor) => {
                    cursor.toArray().then((rows: any[]) => {
                        console.log(rows);
                    });
                });
        });
});
