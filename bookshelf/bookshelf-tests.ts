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


// Examples, see http://bookshelfjs.org/#examples

var bookshelf = Bookshelf(knex);

bookshelf.plugin('registry');
bookshelf.plugin(['virtuals']);

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
	const posts = user.related<Posts>('posts');
	console.log(posts.toJSON());
}).catch(err => {
	console.error(err);
});


// Associations, see http://bookshelfjs.org/#associations

// One-to-one, see http://bookshelfjs.org/#one-to-one

class Book extends bookshelf.Model<Book> {
	get tableName() { return 'books'; }
	summary() {
		return this.hasOne(Summary);
	}
	pages() {
		return this.hasMany(Page);
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

exports.up = function(knex: Knex) {
	return knex.schema.createTable('books', function(table) {
		table.increments('id').primary();
		table.string('name');
	}).createTable('summaries', function(table) {
		table.increments('id').primary();
		table.string('details');
		table.integer('book_id').unique().references('books.id');
	});
};

exports.down = function(knex: Knex) {
	return knex.schema.dropTable('books')
		.dropTable('summaries');
};

// One-to-many, see http://bookshelfjs.org/#one-to-many

class Page extends bookshelf.Model<Page> {
	get tableName() { return 'pages'; }
	book() {
		return this.belongsTo(Book);
	}
}

exports.up = function(knex: Knex) {
	return knex.schema.createTable('books', function(table) {
		table.increments('id').primary();
		table.string('name');
	}).createTable('pages', function(table) {
		table.increments('id').primary();
		table.string('content');
		table.integer('book_id').references('books.id')
	});
};

exports.down = function(knex: Knex) {
	return knex.schema.dropTable('books')
		.dropTable('pages');
};

// Many-to-many, see http://bookshelfjs.org/#many-to-many

class Author extends bookshelf.Model<Author> {
	get tableName() { return 'author'; }
	books() {
		return this.belongsToMany(Book);
	}
}

exports.up = function(knex: Knex) {
	return knex.schema.createTable('books', function(table) {
		table.increments('id').primary();
		table.string('name');
	}).createTable('authors', function(table) {
		table.increments('id').primary();
		table.string('name');
	}).createTable('authors_books', function(table) {
		table.integer('author_id').references('authors.id');
		table.integer('book_id').references('books.id');
	});
};

exports.down = function(knex: Knex) {
	return knex.schema.dropTable('books')
		.dropTable('authors')
		.dropTable('authors_books');
};

// Polymorphic, see http://bookshelfjs.org/#polymorphic

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



// Other tests (not mentionned on Bookshelf website)

// fetch()
new User({id: 1}).fetch({require: true, withRelated: ['posts.tags']})
.then(user => {
	console.log(user.related<Posts>('posts').toJSON());
});

// where()
new User().where('id', '=', 1).fetch({require: true, withRelated: ['posts.tags']})
.then(user => {
	console.log(user.related<Posts>('posts').toJSON());
});

// save()
new User({name: 'Harry'}).save()
.then(user => {
	console.log(user.toJSON());
});

// destroy()
new User({id: 1}).destroy({require: true})
.then(user => {
	console.log(user.toJSON());
});

// map()
class Author2 extends bookshelf.Model<Author2> {
	get tableName() { return 'author'; }
	books() {
		return this.belongsToMany(Book);
	}
	relatedBooks() {
		return <Bookshelf.Collection<Book>> this.related<Book>('books');
	}
}
new Author2({id: 1}).fetch({require: true, withRelated: ['books']})
.then(author => {
	const books = author.relatedBooks();
	const booksJson = books.map(book => book.toJSON());
});
class Author2Output {
	constructor(bookJson: Object) {}
}
new Author2({id: 1}).fetch({require: true, withRelated: ['books']})
.then(author => {
	const books = author.relatedBooks();
	const booksOutput = books.map(book => new Author2Output(book.toJSON()));
});


// Model.NoRowsDeletedError, see http://bookshelfjs.org/#section-Model-static-NoRowsDeletedError
new User({id: 1}).destroy({require: true})
.then(user => {
	console.log(user.toJSON());
})
.catch(User.NoRowsDeletedError, () => {
	console.log('User not found');
})
.catch(error => {
	console.log('Internal error:', error);
});

// Model.NoRowsUpdatedError, see http://bookshelfjs.org/#section-Model-static-NoRowsUpdatedError
new User({id: 1}).save({}, {patch: true, require: true})
.then(user => {
	console.log(user.toJSON());
})
.catch(User.NoRowsUpdatedError, () => {
	console.log('User not updated');
})
.catch(error => {
	console.log('Internal error:', error);
});

// Model.NotFoundError, see http://bookshelfjs.org/#section-Model-static-NotFoundError
new User({id: 1}).fetch({require: true})
.then(user => {
	console.log(user.toJSON());
})
.catch(User.NotFoundError, () => {
	console.log('User not found');
})
.catch(error => {
	console.log('Internal error:', error);
});
