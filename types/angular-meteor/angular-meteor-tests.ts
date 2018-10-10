import * as angular from 'angular';

interface ITodo {
	_id?: string;
	name: string;
	public?: boolean;
	sticky?: boolean;
}

interface TodoAngularMeteorObject extends ITodo, angular.meteor.AngularMeteorObject<ITodo> {}

interface CustomScope extends angular.meteor.IScope {
	sticky: boolean;

	todos: angular.meteor.AngularMeteorCollection<ITodo>;
	stickyTodos: angular.meteor.AngularMeteorCollection<ITodo>;
	notAutoTodos: angular.meteor.AngularMeteorCollection<ITodo>;
	
	todo: ITodo;
	todoNotAuto: TodoAngularMeteorObject;
	todoSubscribed: TodoAngularMeteorObject;
	
	save: (todo: ITodo) => void;
	saveAll: () =>void;
	autoSave: (todo: ITodo) => void;
	remove: (todoId: string) => void;
	removeAll: () => void;
	removeAuto: (todo: ITodo) => void;
	toSticky: (todo: ITodo) => void;

	picture: any;
}

var Todos = new Mongo.Collection<ITodo>('todos');

var app = angular.module('angularMeteorTestApp');

app.controller("mainCtrl", ['$scope', '$meteor', ($scope: CustomScope, $meteor: angular.meteor.IMeteorService) => {
	// Bind all the todos to $scope.todos
	$scope.todos = $meteor.collection(Todos);
	
	$scope.sticky = true;
	// Bind all sticky todos to $scope.stickyTodos
	// Binds the query to $scope.sticky so that if it changes, Meteor will re-run the query and bind it
	// to $scope.stickyTodos
	$scope.stickyTodos = $meteor.collection<ITodo>(function(){
		return Todos.find({sticky: $scope.getReactively('sticky')});
	});
	
	// Bind without auto-save all todos to $scope.notAutoTodos
	$scope.notAutoTodos = $meteor.collection(Todos, false).subscribe("publicTodos");
	
	$scope.todoNotAuto = <TodoAngularMeteorObject>$meteor.object(Todos, 'TodoID', false);
	$scope.todoSubscribed = <TodoAngularMeteorObject>$meteor.object(Todos, 'TodoID').subscribe('todos');
	$scope.todo = $scope.todoNotAuto.getRawObject();
	$scope.todoNotAuto.reset();
	$scope.todoNotAuto.save($scope.todo).then((data) => { return data == 1; });;
	
	// todo might be an object like this {text: "Learn Angular", sticky: false}
	// or an array like this:
	// [{text: "Learn Angular", sticky: false}, {text: "Hello World", sticky: true}]
	
	$scope.save = function(todo) {
		$scope.notAutoTodos.save(todo);
	};
	
	$scope.saveAll = function() {
		$scope.notAutoTodos.save();
	};
	
	$scope.autoSave = function(todo) {
		$scope.todos.push(todo);
	};
	
	// todoId might be an string like this "WhrnEez5yBRgo4yEm"
	// or an array like this ["WhrnEez5yBRgo4yEm","gH6Fa4DXA3XxQjXNS"]
	$scope.remove = function(todoId) {
		$scope.notAutoTodos.remove(todoId);
	};
	
	$scope.removeAll = function() {
		$scope.notAutoTodos.remove();
	};
	
	$scope.removeAuto = function(todo) {
		$scope.todos.splice( $scope.todos.indexOf(todo), 1 );
	}
	
	$scope.toSticky = function(todo) {
		if (angular.isArray(todo)){
			angular.forEach(todo, function(object) {
				object.sticky = true;
			});
		} else {
			todo.sticky = true;
		}
	
		$scope.stickyTodos.save(todo);
	};
	
	var todoObject = {name:'first todo'};
	var todosArray = [{name:'second todo'}, {name:'third todo'}];
	var todoSecondObject = {name:'forth todo'};
	
	$scope.todos.save(todoObject);  // todos equals [{name:'first todo'}]
	
	$scope.todos.save(todosArray);  // todos equals [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}]
	
	$scope.todos.push(todoSecondObject);  // The scope variable equals to [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}, {name:'forth todo'}]
	                                      // but the collection still equals to [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}]
	
	$scope.todos.save();  // Now the collection also equals to [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}, {name:'forth todo'}]
	
	$scope.todos.remove('firstTodoId'); // scope and collection equals to [{name:'second todo'}, {name:'third todo'}, {name:'forth todo'}]
	
	var todoIdsArray = ['secondTodoId', 'thirdTodoId'];
	$scope.todos.remove(todoIdsArray); // removes everything matches the array of IDs both in scope and in collection
	
	$scope.todos.pop();  // removes only in scope
	
	$scope.todos.remove(); // syncs also in Meteor collection
	
	// Subscribe ->
	
	$meteor.subscribe('todos').then((subscriptionHandle) => {
		// Bind all the todos to $scope.todos
		$scope.todos = $meteor.collection(Todos);
		
		console.log($scope.todos + ' is ready');
		
		// You can use the subscription handle to stop the subscription if you want
		subscriptionHandle.stop();
	});
	
	$scope.subscribe('todos').then((subscriptionHandle) => {
		// Bind all the todos to $scope.books
		$scope.todos = $meteor.collection(Todos);
		
		console.log($scope.todos + ' is ready');
		
		// No need to stop the subscription, it will automatically close on scope destroy
	});
	
	$meteor.call<ITodo>('subscribe', $scope.todo._id, $scope.currentUser._id).then((data) => {
		// Handle success
		console.log('success subscribing', data.name);
	}, (err) => {
		// Handle error
		console.log('failed', err);
	});
	
	if (!$scope.loggingIn) {
		$meteor.waitForUser();
		
		$meteor.requireUser();
		
		$meteor.requireValidUser(user => {
			return user.username == 'admin';
		});
		
		$meteor.loginWithPassword('user', 'password').then(() => {
			console.log('Login success');
		}, err => {
			console.log('Login error - ', err);
		});
		
		$meteor.createUser({
			username:'moma',
			email:'example@gmail.com',
			password: 'Bksd@asdf',
			profile: {expertize: 'Developer'}
		}).then(() => {
			console.log('Login success');
		}, err => {
			console.log('Login error - ', err);
		});
		
		$meteor.changePassword('old', 'new232f3').then(() => {
			console.log('Change password success');
		}, err => {
			console.log('Error changing password - ', err);
		});
		
		$meteor.forgotPassword({email: 'sample@gmail.com'}).then(() => {
			console.log('Success sending forgot password email');
		}, err => {
			console.log('Error sending forgot password email - ', err);
		});
		
		$meteor.resetPassword('tokenID', 'new232f3').then(() => {
			console.log('Reset password success');
		}, err => {
			console.log('Error resetting password - ', err);
		});
		
		$meteor.verifyEmail('tokenID').then(() => {
			console.log('Success verifying password ');
		}, err => {
			console.log('Error verifying password - ', err);
		});
		
		$meteor.logout().then(() => {
			console.log('Logout success');
		}, err => {
			console.log('logout error - ', err);
		});
		
		$meteor.logoutOtherClients().then(() => {
			console.log('Logout success');
		}, err => {
			console.log('logout error - ', err);
		});
		
		var loginWithOptions = {requestPermissions: ['email']};
		
		$meteor.loginWithFacebook({requestPermissions: ['email']}).then(() => {
			console.log('Login success');
		}, err => {
			console.log('Login error - ', err);
		});
		$meteor.loginWithGithub({requestPermissions: ['email']}).then(() => {
			console.log('Login success');
		}, err => {
			console.log('Login error - ', err);
		});
		$meteor.loginWithGoogle({requestPermissions: ['email']}).then(() => {
			console.log('Login success');
		}, err => {
			console.log('Login error - ', err);
		});
		$meteor.loginWithMeetup({requestPermissions: ['email']}).then(() => {
			console.log('Login success');
		}, err => {
			console.log('Login error - ', err);
		});
		$meteor.loginWithTwitter({requestPermissions: ['email']}).then(() => {
			console.log('Login success');
		}, err => {
			console.log('Login error - ', err);
		});
		$meteor.loginWithWeibo({requestPermissions: ['email']}).then(() => {
			console.log('Login success');
		}, err => {
			console.log('Login error - ', err);
		});
	}
	
	$meteor.autorun($scope, () => { console.log("Aurorun triggered."); });
	$meteor.getCollectionByName('collectionName');
	
	// requires meteor add mdg:camera
	$meteor.getPicture().then(function(data){
		$scope['picture'] = data;
	});
	
	$meteor.session('counter').bind($scope, 'counter');
}]);
