import * as deleteEmpty from 'delete-empty';

deleteEmpty('foo').then(f => f[0].toLowerCase());
deleteEmpty('foo', (err, f) => {
    if (err) {
        err.message;
    } else {
        f[0].toLowerCase();
    }
});

deleteEmpty.sync('foo')[0].toLowerCase();
