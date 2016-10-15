/// <reference path="anydb-sql.d.ts" />
import anydbsql = require('anydb-sql');
import { Table, Column } from 'anydb-sql'

function do_not_run() {

    var db = anydbsql({
        url: 'postgres://user:pass@host:port/database',
        connections: { min: 2, max: 20 }
    });

    // Table Post

    interface Post {
        content: string;
        userId: string;
        date: string;
    }

    interface PostTable extends Table<Post> {
        content: Column<string>;
        userId: Column<string>;
        date: Column<string>;
    }

    var post = <PostTable>db.define<Post>({
        name: 'posts',
        columns: {
            content: {},
            userId: {},
            date: {}
        }
    });

    // Table User

    interface User {
        id: string;
        email: string;
        password: string;
        name: string;
    }

    interface UserTable extends Table<User> {
        id: Column<string>;
        email: Column<string>;
        password: Column<string>;
        name: Column<string>;
    }

    var user = <UserTable>db.define<User>({
        name: 'users',
        columns: {
            id: { primaryKey: true },
            email: {},
            password: {},
            name: {},
            date: {}
        },
        has: {
            posts: { from: 'posts', many: true },
            group: { from: 'groups'}
        }
    });

    user.select(user.name, post.content)
      .from(user.join(post).on(user.id.equals(post.userId)))
      .where(post.date.gt('123'))
      .all()
}