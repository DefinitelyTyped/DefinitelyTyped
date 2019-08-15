import * as JSPath from 'jspath';

// tslint:disable:object-literal-key-quotes

JSPath.apply(
    '.automobiles{.maker === "Honda" && .year > 2009}.model',
    {
        "automobiles" : [
            { "maker" : "Nissan", "model" : "Teana", "year" : 2011 },
            { "maker" : "Honda", "model" : "Jazz", "year" : 2010 },
            { "maker" : "Honda", "model" : "Civic", "year" : 2007 },
            { "maker" : "Toyota", "model" : "Yaris", "year" : 2008 },
            { "maker" : "Honda", "model" : "Accord", "year" : 2011 }
        ],
        "motorcycles" : [{ "maker" : "Honda", "model" : "ST1300", "year" : 2012 }]
    }
);

const doc = {
    "books" : [
        {
            "id"     : 1,
            "title"  : "Clean Code",
            "author" : { "name" : "Robert C. Martin" },
            "price"  : 17.96
        },
        {
            "id"     : 2,
            "title"  : "Maintainable JavaScript",
            "author" : { "name" : "Nicholas C. Zakas" },
            "price"  : 10
        },
        {
            "id"     : 3,
            "title"  : "Agile Software Development",
            "author" : { "name" : "Robert C. Martin" },
            "price"  : 20
        },
        {
            "id"     : 4,
            "title"  : "JavaScript: The Good Parts",
            "author" : { "name" : "Douglas Crockford" },
            "price"  : 15.67
        }
    ]
};

JSPath.apply('.books.author', doc);

JSPath.apply('.books.author.name', doc);

JSPath.apply('.books..name', doc);

JSPath.apply('.books{.author.name === "Robert C. Martin"}.title', doc);

JSPath.apply('.books{.price < 17}.title', doc);

const path = '.books{.author.name === $author}.title';

JSPath.apply(path, doc, { author : 'Nicholas C. Zakas' });

JSPath.apply(path, doc, { author : ['Robert C. Martin', 'Douglas Crockford'] });
