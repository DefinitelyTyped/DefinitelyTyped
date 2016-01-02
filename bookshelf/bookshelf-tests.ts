/// <reference path="bookshelf.d.ts" />
/// <reference path="../knex/knex.d.ts" />

import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

var knex = Knex({
	client: 'sqlite3',
	connection: {
		filename: ':memory:',
	},
});

// Examples

var bookshelf = Bookshelf(knex);

class User extends bookshelf.Model<User> {
	get tableName() { return 'users'; }
	messages() : Bookshelf.Collection<Posts> {
		return this.hasMany(Posts);
	}
}

class Posts extends bookshelf.Model<Posts> {
	get tableName() { return 'messages'; }
	tags() : Bookshelf.Collection<Tag> {
		return this.belongsToMany(Tag);
	}
}

class Tag extends bookshelf.Model<Tag> {
	get tableName() { return 'tags'; }
}

new User({}).where('id', 1).fetch({withRelated: ['posts.tags']})
.then(user => {
	console.log(user.related('posts').toJSON());
}).catch(err => {
	console.error(err);
});


// Associations

class Book extends bookshelf.Model<Book> {
	get tableName() { return 'books'; }
	summary() {
		return this.hasOne(Summary);
	}
	pages() {
		return this.hasMany(Pages);
	}
	authors() {
		return this.belongsToMany(Author);
	}
}

class Summary extends bookshelf.Model<Summary> {
	get tableName() { return 'summaries'; }
	book() : Book {
		return this.belongsTo(Book);
	}
}

class Pages extends bookshelf.Model<Pages> {
	get tableName() { return 'pages'; }
	book() {
		return this.belongsTo(Book);
	}
}

class Author extends bookshelf.Model<Author> {
	get tableName() { return 'author'; }
	books() {
		return this.belongsToMany(Book);
	}
}

class Site extends bookshelf.Model<Site> {
	get tableName() { return 'sites'; }
	photo() {
		return this.morphOne(Photo, 'imageable');
	}
}

class Post extends bookshelf.Model<Post> {
	get tableName() { return 'posts'; }
	photos() {
		return this.morphMany(Photo, 'imageable');
	}
}

class Photo extends bookshelf.Model<Photo> {
	get tableName() { return 'photos'; }
	imageable() {
		return this.morphTo('imageable', Site, Post);
	}
}
