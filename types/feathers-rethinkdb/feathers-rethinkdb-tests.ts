import feathers from '@feathersjs/feathers';
import feathersExpress, { Application } from '@feathersjs/express';
import feathersSocketIO from '@feathersjs/socketio';
import feathersRethinkDb = require('feathers-rethinkdb');
import * as rethinkdbdash from 'rethinkdbdash';
import { Operation, CreateResult, Expression, Sequence } from 'rethinkdb';
import { Service } from 'feathers-rethinkdb';

interface Message {
  text: string;
  hello: {};
}

interface ServiceTypes {
  messages: Message;
}

(async () => {
	const r: rethinkdbdash.ReqlClient = rethinkdbdash({
		host: 'host',
		port: 28015,
		db: 'db',
		user: 'username',
		password: 'password',
		timeout: 10000
	});

  	const app: Application<ServiceTypes> = feathersExpress<ServiceTypes>(feathers());
	app.use(feathersExpress.json());
	app.use(feathersExpress.urlencoded({ extended: true }));
	app.configure(feathersExpress.rest());

	const services = {
		messages: feathersRethinkDb({
			Model: r,
			name: 'messages',
			paginate: {
			default: 10,
			max: 50
			}
		}) as Service<Message>
	};

	app.use('/messages', services.messages);
	const messageService: feathersRethinkDb.Service<Message> = app.service('messages');
	const createdResult: Operation<CreateResult> = await messageService.init();
	const created: Message = await app.service('messages').create({
		text: 'Message created on server'
	});

	const expression: Expression<{}> = messageService.createFilter({});
	const sequence: Sequence = messageService.createQuery({
		$limit: 2,
		$skip: 2,
		read: false
	});
	app.configure(feathersSocketIO({}, (io: SocketIO.Server): void => {
	}));
})();
