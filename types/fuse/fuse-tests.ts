

function test_fuse_find_identifiers() {
	var books = [{
		id: 1,
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald'
	}, {
		id: 2,
		title: 'The DaVinci Code',
		author: 'Dan Brown'
	}, {
		id: 3,
		title: 'Angels & Demons',
		author: 'Dan Brown'
	}];
	var options = {
		keys: ['author', 'title'],   // keys to search in
		id: 'id'                     // return a list of identifiers only
	};
	var f = new Fuse(books, options);
	var result = f.search('brwn'); // Fuzzy-search for pattern 'brwn'
}

function test_fuse_find_records() {
	var books = [{
		id: 1,
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald'
	}, {
		id: 2,
		title: 'The DaVinci Code',
		author: 'Dan Brown'
	}, {
		id: 3,
		title: 'Angels & Demons',
		author: 'Dan Brown'
	}];
	var options = {
		keys: ['author', 'title']
	};
	var f = new Fuse(books, options);
	var result = f.search('brwn');
}

function test_fuse_flat_array() {
	var books = ["Old Man's War", "The Lock Artist", "HTML5", "Right Ho Jeeves", "The Code of the Wooster", "Thank You Jeeves", "The DaVinci Code", "Angels & Demons", "The Silmarillion", "Syrup", "The Lost Symbol", "The Book of Lies", "Lamb", "Fool", "Incompetence", "Fat", "Colony", "Backwards, Red Dwarf", "The Grand Design", "The Book of Samson", "The Preservationist", "Fallen", "Monster 1959"];
	var f = new Fuse(books);
	var result = f.search('Falen');
}

function test_fuse_deep_key_search() {
	var books = [{
		id: 1,
		title: 'The Great Gatsby',
		author: {
			firstName: 'F. Scott',
			lastName: 'Fitzgerald'
		}
	}, {
		title: 'The DaVinci Code',
		author: {
			firstName: 'Dan',
			lastName: 'Brown'
		}
	}];

	var options = {
		keys: ['author.firstName']
	};
	var f = new Fuse(books, options);
	var result = f.search('brwn');
}

interface Book {
	id?: number;
	title?: string;
	author?: {firstName: string; lastName: string};
}

function test_generic_fuse() {
	var books: Book[] = [{
		id: 1,
		title: 'The Great Gatsby',
		author: {
			firstName: 'F. Scott',
			lastName: 'Fitzgerald'
		}
	}, {
		title: 'The DaVinci Code',
		author: {
			firstName: 'Dan',
			lastName: 'Brown'
		}
	}];

	var options = {
		keys: ["title", "author.firstName"]
	};
	var f = new Fuse<Book>(books, options);
	var result = f.search('brwn');
}

function test_getFn() {
	var books = [{
		id: 1,
		title: 'The Great Gatsby',
		author: {
			firstName: 'F. Scott',
			lastName: 'Fitzgerald'
		}
	}, {
		title: 'The DaVinci Code',
		author: {
			firstName: 'Dan',
			lastName: 'Brown'
		}
	}];

	var options = {
		keys: ["title", "author.firstName"],
		getFn: (obj: Book, path: string): string => {
			if (!obj) {
				return null;
			}
			return obj.author.firstName;
		}
	};
	var f = new Fuse<Book>(books, options);
}
