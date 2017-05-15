import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';
import * as assert from 'assert';
import * as express from 'express';
import * as _ from "lodash";

/**
 * The examples/tests below follow Bookshelf documentation chapter after chapter: http://bookshelfjs.org/
 */

/* Installation, see http://bookshelfjs.org/#installation */

var knex = Knex({
	client: 'mysql',
	connection: {
		host     : '127.0.0.1',
		user     : 'your_database_user',
		password : 'your_database_password',
		database : 'myapp_test',
		charset  : 'utf8'
	}
});

var bookshelf = Bookshelf(knex);

{
	class User extends bookshelf.Model<User> {
		get tableName() { return 'users'; }
	}

	// In a file named something like bookshelf.js
	const dbConfig: Knex.Config = {};
	var knex = Knex(dbConfig);

	// elsewhere, to use the bookshelf client:
	var bookshelf = Bookshelf(knex);

	class Post extends bookshelf.Model<Post> {
		// ...
	}
}

/* Examples, see http://bookshelfjs.org/#examples */

var bookshelf = Bookshelf(knex);

bookshelf.plugin('registry');
bookshelf.plugin(['virtuals']);

class User extends bookshelf.Model<User> {
	get tableName() { return 'users'; }
	messages(): Bookshelf.Collection<Post> {
		return this.hasMany(Post);
	}
}

class Post extends bookshelf.Model<Post> {
	get tableName() { return 'messages'; }
	tags(): Bookshelf.Collection<Tag> {
		return this.belongsToMany(Tag);
	}
}

class Tag extends bookshelf.Model<Tag> {
	get tableName() { return 'tags'; }
}

User.where<User>('id', 1).fetch({withRelated: ['posts.tags']}).then(function(user) {
  console.log(user.related('posts').toJSON());
}).catch(function(err) {
  console.error(err);
});

new User().where('id', 1).fetch({withRelated: ['posts.tags']})
.then(user => {
	const posts = user.related<Post>('posts');
	console.log(posts.toJSON());
}).catch(err => {
	console.error(err);
});

/* Plugins, see http://bookshelfjs.org/#plugins */

/* Support, see http://bookshelfjs.org/#support */

/* F.A.Q., see http://bookshelfjs.org/#faq*/

/* Associations, see http://bookshelfjs.org/#associations */

/* One-to-one, see http://bookshelfjs.org/#one-to-one */

class Book extends bookshelf.Model<Book> {
	get tableName() { return 'books'; }
	summary(): Summary {
		return this.hasOne(Summary);
	}
	pages(): Bookshelf.Collection<Page> {
		return this.hasMany(Page);
	}
	authors(): Bookshelf.Collection<Author> {
		return this.belongsToMany(Author);
	}
}

class Summary extends bookshelf.Model<Summary> {
	get tableName() { return 'summaries'; }
	book(): Book {
		return this.belongsTo(Book);
	}
}

exports.up = (knex: Knex) => {
	return knex.schema.createTable('books', table => {
		table.increments('id').primary();
		table.string('name');
	}).createTable('summaries', table => {
		table.increments('id').primary();
		table.string('details');
		table.integer('book_id').unique().references('books.id');
	});
};

exports.down = (knex: Knex) => {
	return knex.schema.dropTable('books')
		.dropTable('summaries');
};

/* One-to-many, see http://bookshelfjs.org/#one-to-many */

class Page extends bookshelf.Model<Page> {
	get tableName() { return 'pages'; }
	book(): Book {
		return this.belongsTo(Book);
	}
}

exports.up = (knex: Knex) => {
	return knex.schema.createTable('books', table => {
		table.increments('id').primary();
		table.string('name');
	}).createTable('pages', table => {
		table.increments('id').primary();
		table.string('content');
		table.integer('book_id').references('books.id')
	});
};

exports.down = (knex: Knex) => {
	return knex.schema.dropTable('books')
		.dropTable('pages');
};

/* Many-to-many, see http://bookshelfjs.org/#many-to-many */

class Author extends bookshelf.Model<Author> {
	get tableName() { return 'authors'; }
	books() {
		return this.belongsToMany(Book);
	}
}

exports.up = (knex: Knex) => {
	return knex.schema.createTable('books', table => {
		table.increments('id').primary();
		table.string('name');
	}).createTable('authors', table => {
		table.increments('id').primary();
		table.string('name');
	}).createTable('authors_books', table => {
		table.integer('author_id').references('authors.id');
		table.integer('book_id').references('books.id');
	});
};

exports.down = (knex: Knex) => {
	return knex.schema.dropTable('books')
		.dropTable('authors')
		.dropTable('authors_books');
};

/* Polymorphic, see http://bookshelfjs.org/#polymorphic */

{
	class Site extends bookshelf.Model<Site> {
	get tableName() { return 'sites'; }
		photo(): Photo {
		return this.morphOne(Photo, 'imageable');
	}
	}

	class Post extends bookshelf.Model<Post> {
		get tableName() { return 'posts'; }
		photos(): Bookshelf.Collection<Photo> {
			return this.morphMany(Photo, 'imageable');
		}
	}

	class Photo extends bookshelf.Model<Photo> {
		get tableName() { return 'photos'; }
		imageable(): Photo {
			return this.morphTo('imageable', Site, Post);
		}
	}
}

/* Bookshelf, see http://bookshelfjs.org/#section-Bookshelf */

/* Construction, see http://bookshelfjs.org/#Bookshelf-subsection-construction */

/* new Bookshelf(), see http://bookshelfjs.org/#Bookshelf */

/* Members, see http://bookshelfjs.org/#Bookshelf-subsection-members */

/* bookshelf.knex, see http://bookshelfjs.org/#Bookshelf-instance-knex */

/* Methods, see http://bookshelfjs.org/#Bookshelf-subsection-methods */

/* bookshelf.transaction(), see http://bookshelfjs.org/#Bookshelf-instance-transaction */

class Library extends bookshelf.Model<Library> {
	get tableName() { return 'libraries'; }

	relatedBooks(): Bookshelf.Collection<Book> {
		return <Bookshelf.Collection<Book>> this.related('books');
	}
}


// todo: update to make sure this works with BlueBird 3.0
// bookshelf.transaction(t => {
// 	return new Library({name: 'Old Books'})
// 		.save(null, {transacting: t})
// 		.tap(model => {
// 			return Promise.map([
// 				{title: 'Canterbury Tales'},
// 				{title: 'Moby Dick'},
// 				{title: 'Hamlet'}
// 			], info => {
// 				// Some validation could take place here.
// 				return new Book(info).save({'shelf_id': model.id}, {transacting: t});
// 			});
// 		});
// }).then(library => {
// 	console.log(library.done(lib => lib.relatedBooks().pluck('title')));
// }).catch(err => {
// 	console.error(err);
// });

/* Type definitions */

/* transactionCallback(), see http://bookshelfjs.org/#Bookshelf~transactionCallback */

/* Model, see http://bookshelfjs.org/#section-Model */

/* Construction, see http://bookshelfjs.org/#Model-subsection-construction */

/* new Model(), see http://bookshelfjs.org/#Model */

{
	class Book extends bookshelf.Model<Book> {
		get tableName() { return 'documents'; }

		constructor(json: Object) {
			super(json);

			this.on('saving', (model, attrs, options) => {
				options.query.where('type', '=', 'book');
			});
		}
	}

	new Book({
		title: "One Thousand and One Nights",
		author: "Scheherazade"
	});
}

/* model.initialize(), see http://bookshelfjs.org/#Model-instance-initialize */

/* Static, see http://bookshelfjs.org/#Model-subsection-static */

/* Model.collection(), see http://bookshelfjs.org/#Model-static-collection */

class Customer extends bookshelf.Model<Customer> {
	get tableName() { return 'customers'; }
}
Customer.collection().fetch().then(collection => {
	// ...
});

/* Model.count(), see http://bookshelfjs.org/#Model-static-count */

/* Model.extend(), see http://bookshelfjs.org/#Model-static-extend */

class Account extends bookshelf.Model<Account> {
	get tableName() { return 'accounts'; }
}
{
	var checkit  = require('checkit');

	//todo: make sure this works with BlueBird 3.0
	var bcrypt:any; //   = Promise.promisifyAll(require('bcrypt'));

	class Customer extends bookshelf.Model<Customer> {
		get tableName() { return 'customers'; }

		initialize() {
			this.on('saving', this.validateSave);
		}

		validateSave() {
			let rules: any;
			return checkit(rules).run(this.attributes);
		}

		account() {
			return this.belongsTo(Account);
		}

        //todo: make sure this works with BlueBird 3.0
		// static login(email: string, password: string): Promise<Customer> {
		// 	if (!email || !password) throw new Error('Email and password are both required');
		// 	return new this({email: email.toLowerCase().trim()}).fetch({require: true}).tap(customer => {
		// 		return bcrypt.compareAsync(password, customer.get('password'))
		// 			.then((res: boolean) => {
		// 				if (!res) throw new Error('Invalid password');
		// 			});
		// 	});
		// }
	}

	// const email = 'email';
	// const password = 'password';
	// Customer.login(email, password)
	// 	.then(customer => {
	// 		console.log(customer.omit('password'));
	// 	}).catch(Customer.NotFoundError, () => {
	// 		console.log({error: email + ' not found'});
	// 	}).catch(err => {
	// 		console.error(err);
	// 	});
}

/* Model.fetchAll(), see http://bookshelfjs.org/#Model-static-fetchAll */

/* Model.forge(), see http://bookshelfjs.org/#Model-static-forge */

/* Members, see http://bookshelfjs.org/#Model-subsection-members */

/* model.hasTimestamps, see http://bookshelfjs.org/#Model-instance-hasTimestamps */

/* model.idAttribute, see http://bookshelfjs.org/#Model-instance-idAttribute */

/* model.tableName, see http://bookshelfjs.org/#Model-instance-tableName */

class Television extends bookshelf.Model<Television> {
	get tableName() { return 'televisions'; }
}

/* Methods, see http://bookshelfjs.org/#Model-subsection-methods */

/* model.belongsTo(), see http://bookshelfjs.org/#Model-instance-belongsTo */

{
	class Book extends bookshelf.Model<Book> {
		get tableName() { return 'books'; }
		author(): Author {
			return this.belongsTo(Author);
		}
	}

	// select * from `books` where id = 1
	// select * from `authors` where id = book.author_id
	new Book().where({id: 1}).fetch({withRelated: ['author']}).then(book => {
		console.log(JSON.stringify(book.related('author')));
	});
}

/* model.belongsToMany(), see http://bookshelfjs.org/#Model-instance-belongsToMany */

{
	class Account extends bookshelf.Model<Account> {
		get tableName() { return 'accounts'; }
	}

	class User extends bookshelf.Model<User> {
		get tableName() { return 'users'; }
		allAccounts() {
			return this.belongsToMany(Account);
		}
		adminAccounts() {
			return this.belongsToMany(Account).query({where: {access: 'admin'}});
		}
		viewAccounts() {
			return this.belongsToMany(Account).query({where: {access: 'readonly'}});
		}
	}

	class Doctor extends bookshelf.Model<Doctor> {
		patients(): Bookshelf.Collection<Patient> {
			return this.belongsToMany(Patient).through<Patient>(Appointment);
		}
	}

	class Appointment extends bookshelf.Model<Appointment> {
		patient(): Patient {
			return this.belongsTo(Patient);
		}
		doctor(): Doctor {
			return this.belongsTo(Doctor);
		}
	}

	class Patient extends bookshelf.Model<Patient> {
		doctors(): Bookshelf.Collection<Doctor> {
			return this.belongsToMany(Doctor).through<Doctor>(Appointment);
		}
	}
}

/* model.clear(), see http://bookshelfjs.org/#Model-instance-clear */

/* model.clone(), see http://bookshelfjs.org/#Model-instance-clone */

/* model.count(), see http://bookshelfjs.org/#Model-instance-count */

class Duck extends bookshelf.Model<Duck> {
}
new Duck().where('color', 'blue').count('name')
	.then(count => {
		//...
	});

/* model.destroy(), see http://bookshelfjs.org/#Model-instance-destroy */
new User({id: 1})
	.destroy()
	.then(model => {
		// ...
	});

/* model.escape(), see http://bookshelfjs.org/#Model-instance-escape */

/* model.fetch(), see http://bookshelfjs.org/#Model-instance-fetch */

// select * from `books` where `ISBN-13` = '9780440180296'
new Book({'ISBN-13': '9780440180296'})
	.fetch()
	.then(model => {
		// outputs 'Slaughterhouse Five'
		console.log(model.get('title'));
	});
{
	class Edition extends bookshelf.Model<Edition> {}
	class Chapter extends bookshelf.Model<Chapter> {}
	class Genre extends bookshelf.Model<Genre> {}

	class Book extends bookshelf.Model<Book> {
		get tableName() { return 'books'; }
		editions() {
			return this.hasMany(Edition);
		}
		chapters() {
			return this.hasMany(Chapter);
		}
		genre() {
			return this.belongsTo(Genre);
		}
	}

	new Book({'ISBN-13': '9780440180296'}).fetch({
		withRelated: [
			'genre', 'editions',
			{ chapters: query => query.orderBy('chapter_number') }
		]
	}).then(book => {
		console.log(book.related('genre').toJSON());
		console.log(book.related('editions').toJSON());
		console.log(book.toJSON());
	});
}

/* model.fetchAll(), see http://bookshelfjs.org/#Model-instance-fetchAll */

{
	(new User).fetchAll({
		columns: ['id', 'name'],
		withRelated: ['posts.tags']
	}).then((user: any) => {
		console.log(user);
	})
}

/* model.format(), see http://bookshelfjs.org/#Model-instance-format */

/* model.get(), see http://bookshelfjs.org/#Model-instance-get */
const note = new bookshelf.Model();
note.get("title");

/* model.has(), see http://bookshelfjs.org/#Model-instance-has */

/* model.hasChanged(), see http://bookshelfjs.org/#Model-instance-hasChanged */

/* model.hasMany(), see http://bookshelfjs.org/#Model-instance-hasMany */

{
	class Author extends bookshelf.Model<Author> {
		get tableName() { return 'authors';	}

		books() {
			return this.hasMany(Book);
		}
	}

	// select * from `authors` where id = 1
	// select * from `books` where author_id = 1
	new Author().where({id: 1}).fetch({withRelated: ['books']}).then(author => {
		console.log(JSON.stringify(author.related('books')));
	});
}

/* model.hasOne(), see http://bookshelfjs.org/#Model-instance-hasOne */

{
	class Record extends bookshelf.Model<Record> {
		get tableName() { return 'health_records'; }
	}

	class Patient extends bookshelf.Model<Patient> {
		get tableName() { return 'patients'; }
		record(): Record {
			return this.hasOne(Record);
		}
	}

	// select * from `health_records` where `patient_id` = 1;
	const record = <Record> new Patient({id: 1}).related('record');
	record.fetch().then(model => {
		// ...
	});

	// alternatively, if you don't need the relation loaded on the patient's relations hash:
	new Patient({id: 1}).record().fetch().then(model => {
		// ...
	});
}

/* model.isNew(), see http://bookshelfjs.org/#Model-instance-isNew */

var modelA = new bookshelf.Model();
modelA.isNew(); // true

var modelB = new bookshelf.Model({id: 1});
modelB.isNew(); // false

/* model.load(), see http://bookshelfjs.org/#Model-instance-load */
class Posts extends bookshelf.Collection<Post> {}
new Posts().fetch().then(collection => {
	collection.at(0)
		.load(['author', 'content', 'comments.tags'])
		.then(model => {
			JSON.stringify(model);
		});
});
/*
{
	title: 'post title',
	author: {...},
	content: {...},
	comments: [
		{tags: [...]}, {tags: [...]}
	]
}
*/

/* model.morphMany(), see http://bookshelfjs.org/#Model-instance-morphMany */

class Photo extends bookshelf.Model<Post> {}
{
	class Post extends bookshelf.Model<Post> {
	get tableName() { return 'posts'; }
	photos() {
		return this.morphMany(Photo, 'imageable');
	}
	}
}
{
	class Post extends bookshelf.Model<Post> {
		get tableName() { return 'posts'; }
		photos() {
			return this.morphMany(Photo, 'imageable', ["ImageableType", "ImageableId"]);
		}
	}
}

/* model.morphOne(), see http://bookshelfjs.org/#Model-instance-morphOne */

{
	class Site extends bookshelf.Model<Site> {
		get tableName() { return 'sites'; }
		photo() {
			return this.morphOne(Photo, 'imageable');
		}
	}
}
{
	class Site extends bookshelf.Model<Site> {
		get tableName() { return 'sites'; }
		photo() {
			return this.morphOne(Photo, 'imageable', ["ImageableType", "ImageableId"]);
		}
	}
}

/* model.morphTo(), see http://bookshelfjs.org/#Model-instance-morphTo */

class Site extends bookshelf.Model<Site> {}
{
	class Photo extends bookshelf.Model<Photo> {
	get tableName() { return 'photos'; }
	imageable() {
		return this.morphTo('imageable', Site, Post);
	}
	}
}
{
	class Photo extends bookshelf.Model<Photo> {
		get tableName() { return 'photos'; }
		imageable() {
			return this.morphTo('imageable', ["ImageableType", "ImageableId"], Site, Post);
		}
	}
}

/* model.off(), see http://bookshelfjs.org/#Model-instance-off */

const customer = new Customer();
const ship = new bookshelf.Model();
customer.off('fetched fetching');
ship.off(); // This will remove all event listeners

/* model.on(), see http://bookshelfjs.org/#Model-instance-on */

customer.on('fetching', (model, columns) => {
	// Do something before the data is fetched from the database
});

/* model.once(), see http://bookshelfjs.org/#Model-instance-once */

/* model.orderBy(), see http://bookshelfjs.org/#Model-instance-orderBy */
{
	(new User)
		.orderBy('name', 'ASC')
		.fetchAll()
		.then((users: Bookshelf.Collection<User>) => {
			console.log(users)
		});
}

/* model.parse(), see http://bookshelfjs.org/#Model-instance-parse */

// Example of a "parse" to convert snake_case to camelCase, using `underscore.string`
customer.parse = attrs => {
	return _.reduce(<_.Dictionary<string>> attrs, (memo, val, key) => {
		(<_.Dictionary<string>> memo)[_.camelCase(key)] = val;
		return memo;
	}, {});
};

/* model.previous(), see http://bookshelfjs.org/#Model-instance-previous */

/* model.previousAttributes(), see http://bookshelfjs.org/#Model-instance-previousAttributes */

/* model.query(), see http://bookshelfjs.org/#Model-instance-query */

const model = new bookshelf.Model();
model
	.query('where', 'other_id', '=', '5')
	.fetch()
	.then(model => {
		// ...
	});

model
	.query({where: {other_id: '5'}, orWhere: {key: 'value'}})
	.fetch()
	.then(model => {
		// ...
	});

model.query(qb => {
	qb.where('other_person', 'LIKE', '%Demo').orWhere('other_id', '>', 10);
}).fetch()
	.then(model => {
		// ...
	});

let qb = model.query();
qb.where({id: 1}).select().then(resp => {
	// ...
});

/* model.refresh(), see http://bookshelfjs.org/#Model-instance-refresh */

/* model.related(), see http://bookshelfjs.org/#Model-instance-related */
class Trip extends bookshelf.Model<Trip> {}
class Trips extends bookshelf.Collection<Trip> {}
new Photo({id: 1}).fetch({
	withRelated: ['account']
}).then(photo => {
	if (photo) {
		var account = <Account> photo.related('account');
		if (account.id) {
			return (<Trips> account.related('trips')).fetch();
		}
	}
});

/* model.resetQuery(), see http://bookshelfjs.org/#Model-instance-resetQuery */

/* model.save(), see http://bookshelfjs.org/#Model-instance-save */

new Post({name: 'New Article'}).save().then(model => {
	// ...
});
// update authors set "bio" = 'Short user bio' where "id" = 1
new Author({id: 1, first_name: 'User'})
	.save({bio: 'Short user bio'}, {patch: true})
	.then(model => {
		// ...
	});

// Save with no arguments
bookshelf.Model.forge<Author>({id: 5, firstName: "John", lastName: "Smith"}).save().then(() => {
	//...
});

// Or add attributes during save
bookshelf.Model.forge<Author>({id: 5}).save({firstName: "John", lastName: "Smith"}).then(() => {
	//...
});

// Or, if you prefer, for a single attribute
bookshelf.Model.forge<Author>({id: 5}).save('name', 'John Smith').then(() => {
	//...
});

/* model.serialize(), see http://bookshelfjs.org/#Model-instance-serialize */

var artist = new bookshelf.Model({
	firstName: "Wassily",
	lastName: "Kandinsky"
});

artist.set({birthday: "December 16, 1866"});

console.log(JSON.stringify(artist));
// {firstName: "Wassily", lastName: "Kandinsky", birthday: "December 16, 1866"}

/* model.set(), see http://bookshelfjs.org/#Model-instance-set */

customer.set({first_name: "Joe", last_name: "Customer"});
customer.set("telephone", "555-555-1212");

/* model.through(), see http://bookshelfjs.org/#Model-instance-through */

{
	class Book extends bookshelf.Model<Book> {
		get tableName() { return 'books'; }

		// Find all paragraphs associated with this book, by
		// passing through the "Chapter" model.
		paragraphs(): Paragraphs {
			return this.hasMany(Paragraph).through<Paragraph>(Chapter);
		}

		chapters(): Chapters {
			return this.hasMany(Chapter);
		}
	}

	class Chapter extends bookshelf.Model<Chapter> {
		get tableName() { return 'chapters'; }

		paragraphs(): Bookshelf.Collection<Paragraph> {
			return this.hasMany(Paragraph);
		}
	}

	class Chapters extends bookshelf.Collection<Chapter> {
	}

	class Paragraph extends bookshelf.Model<Paragraph> {
		get tableName() { return 'paragraphs'; }

		chapter(): Chapter {
			return this.belongsTo(Chapter);
		}

		// A reverse relation, where we can get the book from the chapter.
		book(): Book {
			return this.belongsTo(Book).through<Book>(Chapter);
		}
	}

	class Paragraphs extends bookshelf.Collection<Paragraph> {
	}
}

/* model.timestamp(), see http://bookshelfjs.org/#Model-instance-timestamp */

/* model.toJSON(), see http://bookshelfjs.org/#Model-instance-toJSON */

// TODO No example provided on Bookshelf website

{
	interface UserJson {
		name: string;
	}

	class User extends bookshelf.Model<User> {
		get tableName() { return 'users'; }

		toJSON(): UserJson {
			return super.toJSON();
		}

		// fetchAll(): Promise<Users> {
		// 	return super.fetchAll();
		// }
	}

	class Users extends bookshelf.Collection<User> {
		toJSON(): UserJson[] {
			return super.toJSON();
		}
	}

	new User({id: 1}).fetch().then(user => {
		const userJson = user.toJSON();
		console.log('User name:', userJson.name);
	});

	new User({name: 'John'}).fetchAll().then(users => {
		const usersJson = users.toJSON();
		console.log('First user name:', usersJson[0].name);
	});
}

/* model.trigger(), see http://bookshelfjs.org/#Model-instance-trigger */

ship.trigger('fetched');

/* model.triggerThen(), see http://bookshelfjs.org/#Model-instance-triggerThen */

/* model.unset(), see http://bookshelfjs.org/#Model-instance-unset */

/* model.where(), see http://bookshelfjs.org/#Model-instance-where */

model.where('favorite_color', '<>', 'green').fetch().then(() => {
	//...
});
// or
model.where('favorite_color', 'red').fetch().then(() => {
	//...
});
// or
model.where({favorite_color: 'red', shoe_size: 12}).fetch().then(() => {
	//...
});

/* Lodash methods, see http://bookshelfjs.org/#Model-subsection-lodash-methods */

/* invert(), see http://lodash.com/docs/#invert */

/* keys(), see http://lodash.com/docs/#keys */

/* omit(), see http://lodash.com/docs/#omit */

/* pairs(), see http://lodash.com/docs/#pairs */

/* pick(), see http://lodash.com/docs/#pick */

/* values(), see http://lodash.com/docs/#values */

/* Events, see http://bookshelfjs.org/#Model-subsection-events */

/* model.on("created"), see http://bookshelfjs.org/#Model-event-created */

/* model.on("creating"), see http://bookshelfjs.org/#Model-event-creating */

/* model.on("destroyed"), see http://bookshelfjs.org/#Model-event-destroyed */

/* model.on("destroying"), see http://bookshelfjs.org/#Model-event-destroying */

/* model.on("fetched"), see http://bookshelfjs.org/#Model-event-fetched */

/* model.on("fetching"), see http://bookshelfjs.org/#Model-event-fetching */

/* model.on("saved"), see http://bookshelfjs.org/#Model-event-saved */

/* model.on("saving"), see http://bookshelfjs.org/#Model-event-saving */

/* model.on("updated"), see http://bookshelfjs.org/#Model-event-updated */

/* model.on("updating"), see http://bookshelfjs.org/#Model-event-updating */

/* new Model.NoRowsDeletedError(), see http://bookshelfjs.org/#Model-static-NoRowsDeletedError */

// TODO No example provided on Bookshelf website

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

/* new Model.NoRowsUpdatedError(), see http://bookshelfjs.org/#Model-static-NoRowsUpdatedError */

// TODO No example provided on Bookshelf website

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

/* new Model.NotFoundError(), see http://bookshelfjs.org/#Model-static-NotFoundError */

// TODO No example provided on Bookshelf website

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

/* Collection, see http://bookshelfjs.org/#section-Collection */

/* Construction, see http://bookshelfjs.org/#Collection-subsection-construction */

/* new Collection(), see http://bookshelfjs.org/#Collection */

class Tab extends bookshelf.Model<Tab> {
}
const tab1 = new Tab();
const tab2 = new Tab();
const tab3 = new Tab();
class TabSet extends bookshelf.Collection<Tab> {
}
let tabs = new TabSet([tab1, tab2, tab3]);

/* collection.initialize(), see http://bookshelfjs.org/#Collection-instance-initialize */

/* Static, see http://bookshelfjs.org/#Collection-subsection-static */

/* Collection.extend(), see http://bookshelfjs.org/#Collection-static-extend */

/* Collection.forge(), see http://bookshelfjs.org/#Collection-static-forge */

class Accounts extends bookshelf.Collection<Account> {
	model: Account
}

var accounts = Accounts.forge<Accounts>([
	{name: 'Person1'},
	{name: 'Person2'}
]);

Promise.all(accounts.invoke('save')).then(() => {
	// collection models should now be saved...
});

/* Methods, see http://bookshelfjs.org/#Collection-subsection-methods */

/* collection.add(), see http://bookshelfjs.org/#Collection-instance-add */

const ships = new bookshelf.Collection;

ships.add([
	{name: "Flying Dutchman"},
	{name: "Black Pearl"}
]);

/* collection.at(), see http://bookshelfjs.org/#Collection-instance-at */

/* collection.attach(), see http://bookshelfjs.org/#Collection-instance-attach */

{
	class Admin extends bookshelf.Model<Admin> {
	}
	class Site extends bookshelf.Model<Site> {
		admins() {
			return this.hasMany(Admin);
		}
	}
	var admin1 = new Admin({username: 'user1', password: 'test'});
	var admin2 = new Admin({username: 'user2', password: 'test'});

	Promise.all([admin1.save(), admin2.save()])
		.then(() => {
			return Promise.all([
			new Site({id: 1}).admins().attach([admin1, admin2]),
			new Site({id: 2}).admins().attach(admin2)
		]);
	});
}

/* collection.clone(), see http://bookshelfjs.org/#Collection-instance-clone */

/* collection.count(), see http://bookshelfjs.org/#Collection-instance-count */

class Shareholder extends bookshelf.Model<Shareholder> {}
class Company extends bookshelf.Model<Company> {
	shareholders() {
		return this.hasMany(Shareholder);
	}
}

// select count(*) from shareholders where company_id = 1 and share &gt; 0.1;
Company.forge<Company>({id:1})
	.shareholders()
	.query('where', 'share', '>', '0.1')
	.count()
	.then(count => {
		assert(count === 3);
	});

/* collection.create(), see http://bookshelfjs.org/#Collection-instance-create */

class Student extends bookshelf.Model<Student> {}

function get(req: express.Request, res: express.Response) {
	// FIXME Support proposed ES Rest/Spread properties https://github.com/Microsoft/TypeScript/issues/2103
	//const { courses, ...attributes } = req.body;
	const { courses, attributes } = req.body;

	//todo: make sure this works with BlueBird 3.0
	// Student.forge<Student>(attributes).save().tap(student =>
	// 	Promise.map(courses, course => (<Bookshelf.Collection<Student>> student.related('courses')).create(course))
	// ).then(student =>
	// 	res.status(200).send(student)
	// ).catch(error =>
	// 	res.status(500).send(error.message)
	// );
}

/* collection.detach(), see http://bookshelfjs.org/#Collection-instance-detach */

/* collection.fetch(), see http://bookshelfjs.org/#Collection-instance-fetch */

/* collection.fetchOne(), see http://bookshelfjs.org/#Collection-instance-fetchOne */

{
	class Site extends bookshelf.Model<Site> {
		authors() {
			return this.hasMany(Author);
		}
	}

	// select * from authors where site_id = 1 and id = 2 limit 1;
	new Site({id: 1})
		.authors()
		.query({where: {id: 2}})
		.fetchOne()
		.then(model => {
			// ...
		});
}

/* collection.findWhere(), see http://bookshelfjs.org/#Collection-instance-findWhere */

/* collection.get(), see http://bookshelfjs.org/#Collection-instance-get */

const library = new bookshelf.Collection();
const book = library.get(110);

/* collection.invokeThen(), see http://bookshelfjs.org/#Collection-instance-invokeThen */

const options = {};
const collection = new bookshelf.Collection();
collection.invokeThen('save', null, options).then(() => {
	// ... all models in the collection have been saved
});

collection.invokeThen('destroy', options).then(() => {
	// ... all models in the collection have been destroyed
});

/* collection.load(), see http://bookshelfjs.org/#Collection-instance-load */

/* collection.off(), see http://bookshelfjs.org/#Collection-instance-off */

ships.off('fetched') // Remove the 'fetched' event listener

/* collection.on(), see http://bookshelfjs.org/#Collection-instance-on */

ships.on('fetched', (collection, response) => {
	// Do something after the data has been fetched from the database
})

/* collection.once(), see http://bookshelfjs.org/#Collection-instance-once */

/* collection.orderBy(), see http://bookshelfjs.org/#Collection-instance-orderBy */
{
	User.collection()
		.orderBy('-name')
		.fetch()
		.then((users: Bookshelf.Collection<User>) => {
			console.log(users);
		})
}

/* collection.parse(), see http://bookshelfjs.org/#Collection-instance-parse */

/* collection.pluck(), see http://bookshelfjs.org/#Collection-instance-pluck */

/* collection.pop(), see http://bookshelfjs.org/#Collection-instance-pop */

/* collection.push(), see http://bookshelfjs.org/#Collection-instance-push */

/* collection.query(), see http://bookshelfjs.org/#Collection-instance-query */

{
	let qb = collection.query();
			qb.where({id: 1}).select().then(resp => {
				// ...
			});

	collection.query(qb => {
		qb.where('id', '>', 5).andWhere('first_name', '=', 'Test');
	}).fetch()
		.then(collection => {
			// ...
		});

	collection
		.query('where', 'other_id', '=', '5')
		.fetch()
		.then(collection => {
			// ...
		});
}

/* collection.reduceThen(), see http://bookshelfjs.org/#Collection-instance-reduceThen */

/* collection.remove(), see http://bookshelfjs.org/#Collection-instance-remove */

/* collection.reset(), see http://bookshelfjs.org/#Collection-instance-reset */

/* collection.resetQuery(), see http://bookshelfjs.org/#Collection-instance-resetQuery */

/* collection.serialize(), see http://bookshelfjs.org/#Collection-instance-serialize */

/* collection.set(), see http://bookshelfjs.org/#Collection-instance-set */

class BandMember extends bookshelf.Model<BandMember> {}
const eddie = new BandMember();
const alex = new BandMember();
const stone = new BandMember();
const roth = new BandMember();
const hagar = new BandMember();
var vanHalen = new bookshelf.Collection([eddie, alex, stone, roth]);
vanHalen.set([eddie, alex, stone, hagar]);

/* collection.shift(), see http://bookshelfjs.org/#Collection-instance-shift */

/* collection.slice(), see http://bookshelfjs.org/#Collection-instance-slice */

/* collection.through(), see http://bookshelfjs.org/#Collection-instance-through */

/* collection.toJSON(), see http://bookshelfjs.org/#Collection-instance-toJSON */

/* collection.trigger(), see http://bookshelfjs.org/#Collection-instance-trigger */

ships.trigger('fetched');

/* collection.triggerThen(), see http://bookshelfjs.org/#Collection-instance-triggerThen */

/* collection.unshift(), see http://bookshelfjs.org/#Collection-instance-unshift */

/* collection.updatePivot(), see http://bookshelfjs.org/#Collection-instance-updatePivot */

/* collection.where(), see http://bookshelfjs.org/#Collection-instance-where */

/* collection.withPivot(), see http://bookshelfjs.org/#Collection-instance-withPivot */

{
	class Comment extends bookshelf.Model<Comment> {}
	class Tag extends bookshelf.Model<Tag> {
		comments() {
			return this.belongsToMany(Comment).withPivot(['created_at', 'order']);
		}
	}
}

/* Lodash methods, see http://bookshelfjs.org/#Collection-subsection-lodash-methods */

/* all(), see http://lodash.com/docs/#all */

/* any(), see http://lodash.com/docs/#any */

/* chain(), see http://lodash.com/docs/#chain */

/* collect(), see http://lodash.com/docs/#collect */

/* contains(), see http://lodash.com/docs/#contains */

/* countBy(), see http://lodash.com/docs/#countBy */

/* detect(), see http://lodash.com/docs/#detect */

/* difference(), see http://lodash.com/docs/#difference */

/* drop(), see http://lodash.com/docs/#drop */

/* each(), see http://lodash.com/docs/#each */

/* every(), see http://lodash.com/docs/#every */

/* filter(), see http://lodash.com/docs/#filter */

/* find(), see http://lodash.com/docs/#find */

/* first(), see http://lodash.com/docs/#first */

/* foldl(), see http://lodash.com/docs/#foldl */

/* foldr(), see http://lodash.com/docs/#foldr */

/* forEach(), see http://lodash.com/docs/#forEach */

/* groupBy(), see http://lodash.com/docs/#groupBy */

/* head(), see http://lodash.com/docs/#head */

/* include(), see http://lodash.com/docs/#include */

/* indexOf(), see http://lodash.com/docs/#indexOf */

/* initial(), see http://lodash.com/docs/#initial */

/* inject(), see http://lodash.com/docs/#inject */

/* invoke(), see http://lodash.com/docs/#invoke */

/* isEmpty(), see http://lodash.com/docs/#isEmpty */

/* last(), see http://lodash.com/docs/#last */

/* lastIndexOf(), see http://lodash.com/docs/#lastIndexOf */

/* map(), see http://lodash.com/docs/#map */

// TODO No example provided on Bookshelf website

{
	class Author extends bookshelf.Model<Author> {
		get tableName() { return 'author'; }
		books() {
			return this.belongsToMany(Book);
		}
		relatedBooks() {
			return <Bookshelf.Collection<Book>> this.related<Book>('books');
		}
	}
	new Author({id: 1}).fetch({require: true, withRelated: ['books']})
	.then(author => {
		const books = author.relatedBooks();
		const booksJson = books.map(book => book.toJSON());
	});

	class AuthorOutput {
		constructor(bookJson: Object) {}
	}

	new Author({id: 1}).fetch({require: true, withRelated: ['books']})
	.then(author => {
		const books = author.relatedBooks();
		const booksOutput = books.map(book => new AuthorOutput(book.toJSON()));
	});
}

/* max(), see http://lodash.com/docs/#max */

/* min(), see http://lodash.com/docs/#min */

/* reduce(), see http://lodash.com/docs/#reduce */

/* reduceRight(), see http://lodash.com/docs/#reduceRight */

/* reject(), see http://lodash.com/docs/#reject */

/* rest(), see http://lodash.com/docs/#rest */

/* select(), see http://lodash.com/docs/#select */

/* shuffle(), see http://lodash.com/docs/#shuffle */

/* size(), see http://lodash.com/docs/#size */

/* some(), see http://lodash.com/docs/#some */

/* sortBy(), see http://lodash.com/docs/#sortBy */

/* tail(), see http://lodash.com/docs/#tail */

/* take(), see http://lodash.com/docs/#take */

/* toArray(), see http://lodash.com/docs/#toArray */

/* without(), see http://lodash.com/docs/#without */

/* Events, see http://bookshelfjs.org/#Collection-subsection-events */

/* collection.on("fetched"), see http://bookshelfjs.org/#Collection-event-fetched */

/* new Collection.EmptyError(), see http://bookshelfjs.org/#Collection-static-EmptyError */

// TODO No example provided on Bookshelf website

class Users extends bookshelf.Collection<User> {
}
new User({name: 'John'}).fetchAll({require: true})
.then(users => {
	console.log(users.toJSON());
})
.catch(Users.EmptyError, () => {
	console.log('No user found');
})
.catch(error => {
	console.log('Internal error:', error);
});

/* Events, see http://bookshelfjs.org/#section-Events */

/* new Events(), see http://bookshelfjs.org/#Events */

/* events.off(), see http://bookshelfjs.org/#Events-instance-off */

/* events.on(), see http://bookshelfjs.org/#Events-instance-on */

/* events.once(), see http://bookshelfjs.org/#Events-instance-once */

/* events.trigger(), see http://bookshelfjs.org/#Events-instance-trigger */

/* events.triggerThen(), see http://bookshelfjs.org/#Events-instance-triggerThen */


/* model - foreignKey and foreignKeyTarget, see http://bookshelfjs.org/#Model-instance-hasOne */

{
	class Capital extends bookshelf.Model<Capital> {
		get tableName() { return 'capitals'; }
	}

	class City extends bookshelf.Model<City> {
		get tableName() { return 'cities'; }

		country(): Country {
			return this.belongsTo(Country, 'key1', 'key2');
		}
	}

	class Language extends bookshelf.Model<Language> {
		get tableName() { return 'languages'; }

		countries(): Bookshelf.Collection<Country> {
			return this.belongsToMany(Country, 'languages_countries', 'lang_id', 'country_id');
		}
	}

	class Country extends bookshelf.Model<Country> {
		get tableName() { return 'countries'; }
		capital(): Capital {
			return this.hasOne(Capital, 'id', 'capital_id');
		}

		cities(): Bookshelf.Collection<City> {
			return this.hasMany(City, 'key2', 'key1');
		}
	}

	// select * from `health_records` where `patient_id` = 1;
	const capital = <Capital> new Country({id: 1}).related('capital');
	capital.fetch().then(model => {
		// ...
	});

	// alternatively, if you don't need the relation loaded on the patient's relations hash:
	new Country({id: 1}).capital().fetch().then(model => {
		// ...
	});
}
