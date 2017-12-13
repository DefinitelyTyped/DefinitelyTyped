import * as epilogue from 'epilogue';
import * as express from 'express';
import * as Sequelize from 'sequelize';

const database = new Sequelize({ });

epilogue.initialize({
    app: express(),
    sequelize: database
});

epilogue.initialize({
    app: express(),
    sequelize: database,
    base: ''
});

epilogue.initialize({
    app: express(),
    sequelize: database,
    base: '',
    updateMethod: ''
});

const User = database.define('User', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

epilogue.resource({
    model: User,
    endpoints: ['/users', '/users/:id']
});
