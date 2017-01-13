import restful, {
    Api, MemberResponse, CollectionResponse, ResponseBody, CollectionEndpoint, MemberEndpoint,
} from 'restful.js';

class Article {
    title: string;
    body: string;
}
class Comment {
    body: string;
}
class Author {
    name: string;
}

var api: Api;

api = restful('api.example.com');

//
// Usage
//

api = restful('api.example.com')
    .header('AuthToken', 'test') // set global header
    .prefixUrl('v1')
    .protocol('https')
    .port(8080);
// resource now targets `https://api.example.com:8080/v1`


var articlesCollection = api.all('articles');  // http://api.example.com/articles
var articleMember = api.one('articles', 1);  // http://api.example.com/articles/1
var articleMember = api.one('articles', 1);  // http://api.example.com/articles/1
var commentsCollection = articleMember.all('comments');  // http://api.example.com/articles/1/comments

var articleMember = api.oneUrl('articles', 'http://custom.url/article?id=1');  // http://custom.url/article?id=1
var articlesCollection = api.allUrl('articles', 'http://custom.url/article/list');  // http://custom.url/article/list

articleMember = api.one('articles', 1);  // http://api.example.com/articles/1
articleMember.get().then((response: MemberResponse<Article>) => {
    var articleEntity = response.body();

    var article = articleEntity.data();
    console.log(article.title); // hello, world!
});

commentsCollection = articleMember.all('comments');  // http://api.example.com/articles/1/comments
commentsCollection.getAll().then((response: CollectionResponse<Comment>) => {
    var commentEntities = response.body();

    commentEntities.forEach((commentEntity: ResponseBody<Comment>) => {
        var comment = commentEntity.data();
        console.log(comment.body);
    })
});

// fetch http://api.example.com/articles/1/comments/4
articleMember = api.one('articles', 1);
let commentMember = articleMember.one('comments', 4);
commentMember.get().then((response) => {
    //
});
// equivalent to
commentsCollection = articleMember.all('comments');
commentsCollection.get(4).then((response) => {
    //
});

//
// Entity Data
//

var articleCollection = api.all('articles');  // http://api.example.com/articles

// http://api.example.com/articles/1
api.one('articles', 1).get().then((response: MemberResponse<Article>) => {
    var articleEntity = response.body();

    // if the server response was { id: 1, title: 'test', body: 'hello' }
    var article = articleEntity.data();
    article.title; // returns `test`
    article.body; // returns `hello`
    // You can also edit it
    article.title = 'test2';
    // Finally you can easily update it or delete it
    articleEntity.save(); // will perform a PUT request
    articleEntity.remove(); // will perform a DELETE request
}, (response: any) => {
    // The reponse code is not >= 200 and < 400
    throw new Error('Invalid response');
});

articleMember = api.one('articles', 1);  // http://api.example.com/articles/1
commentMember = articleMember.one('comments', 3);  // http://api.example.com/articles/1/comments/3
commentMember.get()
    .then((response: MemberResponse<Comment>) => {
        var commentEntity = response.body();

        // You can also call `all` and `one` on an entity
        return commentEntity.all('authors').getAll(); // http://api.example.com/articles/1/comments/3/authors
    }).then((response: CollectionResponse<Author>) => {
        var authorEntities = response.body();

        authorEntities.forEach((authorEntity: ResponseBody<Author>) => {
            var author = authorEntity.data();
            console.log(author.name);
        });
    });

// configure the api
api.header('AuthToken', 'test');

articlesCollection = api.all('articles');
articlesCollection.get(1); // will send the `AuthToken` header
// You can configure articlesCollection, too
articlesCollection.header('foo', 'bar');

//TODO: The line below was written in README.md but actually incorrect invocation, hence commented out
//articlesCollection.one('comments', 1).get(); // will send both the AuthToken and foo headers


// http://api.example.com/articles/1/comments/2/authors
let authorsCollection = api.one('articles', 1).one('comments', 2).all('authors');
authorsCollection.getAll().then(function(authorEntities) { /*  */ });
authorsCollection.get(1).then(function(authorEntity) { /*  */ });


//
// Interceptors
//

var resource: Api;

resource.addRequestInterceptor((data: any, headers: any, method: string, url: string) => {
    // to edit the headers, just edit the headers object

    // You always must return the data object
    return data;
});

resource.addFullRequestInterceptor(function(params, headers, data, method, url) {
    //...

    // all args had been modified
    if (resource === null) {
        return {
            params: params,
            headers: headers,
            data: data,
            method: method,
            url: url
        };
    } else {

        // just return modified arguments
        return {
            headers: headers,
            data: data
        };
    }
});

resource.addFullResponseInterceptor(function(data, headers, method, url) {
    // all args had been modified (method and url is read only)
    if (url) {
        return {
            headers: headers,
            data: data
        };
    } else {
        // just return modified arguments
        return {
            headers: headers
        };
    }
});

//
// Response methods
//

// http://api.example.com/articles/1/comments/2
commentMember = api.one('articles', 1).one('comments', 2);
commentMember.get().then(function(response) {
    let commentEntity = response.body();
    commentEntity.save();
    commentEntity.remove();
});

//
// Error Handling
//

commentMember = resource.one('articles', 1).one('comments', 2);
commentMember
    .get()
    .then(function(commentEntity) { /*  */ })
    .catch(function(err) {
        // deal with the error
    });
