import * as queryUtil from 'mysql-query-util';

queryUtil.setConnection({ host: 'localhost', user: 'root', password: '123456', database: 'mysql-crud-util' });
queryUtil.select({ tableName: 'users' }).then(res => {
    return res;
    // /
});
