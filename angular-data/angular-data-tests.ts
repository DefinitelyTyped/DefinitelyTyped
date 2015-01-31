/**
 * Created by stefansteinhart on 25.01.15.
 */

    /// <reference path="angular-data.d.ts" />

module AngularDataTests
{

    interface TestScope extends ng.IScope
    {
        me:any;
        friends:any;
    }

    interface TestResource extends ngData.DSResource
    {
        id:number;
        first: string;
        last: string;
    }

    interface TestResourceComputedProperties extends TestResource
    {
        fullName?:string;
    }


    interface TestResourceMethods extends TestResource
    {
        fullName?():string;
    }

    /**
     * Note that all test code is basically copy and pasted from angular-data examples contained in the guide.
     * see http://angular-data.pseudobry.com
     */
    class DSTests
    {

        DSTests(app:ng.IModule, DS:ngData.DS, $scope:TestScope, $timeout:ng.ITimeoutService) {

            app.controller( 'friendsCtrl', function ($scope:TestScope, $routeParams:any, User:any) {
                // it's up to your server to know how to interpret this query
                // or you can teach angular-data how to understand your servers' query language
                var query = {
                    where: {
                        friendIds: {
                            in: $routeParams.id
                        }
                    }
                };

                User.find( $routeParams.id );
                User.findAll( query );

                // My goodness this was easy
                User.bindOne( $scope, 'me', $routeParams.id );
                User.bindAll( $scope, 'friends', query );

                // Long form
                $scope.$watch( function () {
                    return User.lastModified( $routeParams.id );
                }, function () {
                    $scope.me = User.get( $routeParams.id );
                } );
                $scope.$watch( function () {
                    // Changes when anything in the User collection is modified
                    return User.lastModified();
                }, function () {
                    $scope.friends = User.filter( query );
                } );
            } );

            DS.findAll( 'user', {
                where: {
                    age: {
                        '>': 30
                    }
                }
            } ).then( function (users) {
            } );

            DS.defineResource( {
                                   name: 'post',
                                   endpoint: 'posts',
                                   idAttribute: '_id',
                                   validate: function (resourceName, attrs, cb) {
                                       if (!attrs.title)
                                       {
                                           cb( 'Title is required' );
                                       }
                                       else
                                       {
                                           cb( null, attrs );
                                       }
                                   }
                               } );

            DS.create( 'post', {author: 'Sally', title: 'Angular gotchas'} )
                .then( function (post) {
                           post; // { id: 65, author: 'Sally', title: 'Angular gotchas' }
                       } );

            DS.create( 'post', {author: 'Sally'} )
                .then( null, function (err) {
                           err; // 'Title is required'
                       } );

            // synchronous, looks only at the cache
            DS.get( 'document', 45 ); // undefined

            // asynchronous, works through an adapter
            DS.find( 'document', 45 ).then( function (document) {
                document; // { title: 'How to Cook', id: 45 }

                // document 45 has already been injected into the store at this point
                DS.get( 'document', 45 ); // { title: 'How to Cook', id: 45 }
            } );

            DS.get( 'document', 45 ); // still undefined, because the find operation has not completed yet

            var document = DS.get<any>( 'document', 45 ); // { title: 'How to Cook', id: 45 }

            document.title = 'How NOT to cook';

            DS.save( 'document', 45 ).then( function (document) {
                document; // { title: 'How NOT to Cook', id: 45 }

                // document 45 in the store has been updated
                DS.get( 'document', 45 ); // { title: 'How NOT to Cook', id: 45 }
            } );

            DS.get( 'document', 45 ); // { title: 'How to Cook', id: 45 }

            DS.bindOne( $scope, 'myDoc', 'document', 45 );

            //TODO need the resource definition return value type definitions before this can be accurately tested
            //Document.bindOne($scope, 'myDoc', 45);

            DS.destroy( 'document', 45 ).then( function (id) {
            } ); // sends DELETE request to the server

            DS.eject( 'document', 45 ); // synchronously eject document from the store

            DS.filter( 'post', {
                where: {
                    author: {
                        '==': 'John Anderson'
                    }
                },
                skip: 20,
                limit: 100
            } );

            DS.filter( 'post', {
                orderBy: [
                    [ 'author', 'DESC' ],
                    [ 'created_date', 'DESC' ]
                ]
            } );

            DS.filter( 'post', {
                where: {
                    author: {
                        'in': [ 'John', 'Sally' ]
                    }
                }
            } );

            DS.filter( 'user', {
                where: {
                    age: {
                        '>=': 15,
                        '<=': 30
                    }
                }
            } );

            DS.filter( 'post', {
                where: {
                    age: {
                        '|<': 15,
                        '|>': 30
                    }
                }
            } );

            DS.filter( 'post', {
                author: 'John'
            } );
            DS.filter( 'post', {
                where: {
                    author: 'John'
                }
            } );
            DS.filter( 'post', {
                where: {
                    author: {
                        '==': 'John'
                    }
                }
            } );

            DS.filter( 'post', {
                orderBy: 'age'
            } );
            DS.filter( 'post', {
                orderBy: [ 'age', 'ASC' ]
            } );
            DS.filter( 'post', {
                orderBy: [
                    [ 'age', 'ASC' ]
                ]
            } );

            DS.adapters.myCustomAdapter = {};

            var DSProvider:ngData.DSProvider;

            DSProvider.defaults.defaultAdapter = 'DSHttpAdapter';

            DS.defineResource( {
                                   name: 'user',
                                   defaultAdapter: 'DSLocalForageAdapter'
                               } );

            DS.update( 'post', 45,
                       {
                           author: 'Sally'
                       },
                       {
                           adapter: 'DSLocalForageAdapter'
                       } );

            DSProvider.defaults.serialize = function (resourceName, data) {
                // custom payload format
                return {
                    payload: data
                };
            };

            DS.defineResource( {
                                   name: 'user',
                                   serialize: function (resourceName, user) {
                                       return {
                                           payload: user
                                       };
                                   }
                               } );

            DSProvider.defaults.deserialize = function (resourceName, data) {
                // extract data from custom payload format
                return data ? data.payload : data;
            };

            DS.defineResource( {
                                   name: 'user',
                                   deserialize: function (resourceName, data) {
                                       return data.data.embedded;
                                   }
                               } );

            var Document = DS.defineResource( {
                                                  name: 'document',
                                                  idAttribute: '_id',
                                                  endpoint: 'documents',
                                                  baseUrl: 'https://example.com/api',

                                                  //TODO this is taken from the examples but as per the API
                                                  // documentation the validate function doesn't support this signature
                                                  // - clarify through try and error or contact library developer //
                                                  // hook for the validate step in the model lifecycle validate:
                                                  // function (attrs, cb) { if (!angular.isObject(attrs)) { cb('Must be
                                                  // an object!'); } else if (!angular.isString(attrs.title)) {
                                                  // cb('title must be a string!'); } },

                                                  // the "meta" property is reserved for developer use
                                                  // it will never be used by the API
                                                  meta: {},

                                                  // instance methods
                                                  methods: {
                                                      filename: function () {
                                                          return this.title + '.' + this.extension;
                                                      }
                                                  }
                                              } );

            DS.defineResource( {
                                   name: 'user',
                                   methods: {
                                       fullName: function () {
                                           return this.first + ' ' + this.last;
                                       }
                                   }
                               } );

            DS.inject<TestResourceMethods>( 'user', {id: 1, first: 'John', last: 'Anderson'} );

            var user = DS.get<TestResourceMethods>( 'user', 1 );

            user.fullName(); // "John Anderson"

            user.constructor; // function User() { ... }

            DS.defineResource( {
                                   name: 'user',
                                   relations: {
                                       hasMany: {
                                           comment: {
                                               localField: 'comments',
                                               foreignKey: 'userId'
                                           }
                                       },
                                       hasOne: {
                                           profile: {
                                               localField: 'profile',
                                               foreignKey: 'userId'
                                           }
                                       },
                                       belongsTo: {
                                           organization: {
                                               localKey: 'organizationId',
                                               localField: 'organization',

                                               // if you add this to a belongsTo relation
                                               // then angular-data will attempt to use
                                               // a nested url structure, e.g. /organization/15/user/4
                                               parent: true
                                           }
                                       }
                                   }
                               } );

            DS.defineResource( {
                                   name: 'organization',
                                   relations: {
                                       hasMany: {
                                           // this is an example of multiple relations
                                           // of the same type to the same resource
                                           user: [
                                               {
                                                   localField: 'users',
                                                   foreignKey: 'organizationId'
                                               },
                                               {
                                                   localField: 'owners',
                                                   foreignKey: 'organizationId'
                                               }
                                           ]
                                       }
                                   }
                               } );

            DS.defineResource( {
                                   name: 'profile',
                                   relations: {
                                       belongsTo: {
                                           user: {
                                               localField: 'user',
                                               localKey: 'userId'
                                           }
                                       }
                                   }
                               } );

            DS.defineResource( {
                                   name: 'comment',
                                   relations: {
                                       belongsTo: {
                                           user: {
                                               localField: 'user',
                                               localKey: 'userId'
                                           }
                                       }
                                   }
                               } );

            DS.defineResource( 'user', {
                computed: {
                    // each function's argument list defines the fields
                    // that the computed property depends on
                    fullName: [
                        'first', 'last', function (first:String, last:String) {
                            return first + ' ' + last;
                        }
                    ],
                    // shortand, use the array syntax above if you want
                    // you computed properties to work after you've
                    // minified your code
                    initials: function (first:String, last:String) {
                        return first.toUpperCase()[ 0 ] + '. ' + last.toUpperCase()[ 0 ] + '.';
                    }
                }
            } );

            var user2 = DS.inject<TestResourceComputedProperties>( 'user', {
                id: 1,
                first: 'John',
                last: 'Anderson'
            } );

            user2.fullName; // "John Anderson"

            user2.first = 'Fred';

            // angular-data relies on dirty-checking, so the
            // computed property hasn't been updated yet
            user2.fullName; // "John Anderson"

            DS.digest(); // or $scope.$apply()

            user2.fullName; // "Fred Anderson"

            user2.first = 'George';

            $timeout( function () {
                user2.fullName; // "George Anderson"
            } );

            user2.first = 'William';

            $scope.$apply( function () {
                user2.fullName; // "William Anderson"
            } );
        }
    }
}
