/**
 * Created by Linus Brolin <https://github.com/linusbrolin/>.
 * Adapted to mongoose-aggregate-paginate-v2 by Alexandre Croteau <https://github.com/acrilex1>
 */

import { Schema, model, Aggregate, AggregatePaginateModel, PaginateOptions, AggregatePaginateResult, Document } from 'mongoose';
import mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');
import { Router, Request, Response } from 'express';

//#region Test Models
interface User extends Document {
    email: string;
    username: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    email: String,
    username: String,
    password: String,
});

UserSchema.plugin(mongooseAggregatePaginate);

interface UserModel<T extends Document> extends AggregatePaginateModel<T> {}

const UserModel: UserModel<User> = model<User>('User', UserSchema) as UserModel<User>;
//#endregion

//#region Test Paginate
const router: Router = Router();

declare const aggregate: Aggregate<User[]>;

router.get('/users.json', (req: Request, res: Response) => {
    const descending = true;
    const options: PaginateOptions = {};
    options.sort = { username: descending ? -1 : 1 };
    options.pagination = false;
    options.offset = 0;
    options.page = 1;
    options.limit = 10;
    options.customLabels = {
        totalDocs: 'totalDocsCustom',
        limit: 'limitCustom',
        page: 'pageCustom',
        totalPages: 'totalPagesCustom',
        docs: 'docsCustom',
        nextPage: 'nextPageCustom',
        prevPage: 'prevPageCustom',
    };

    UserModel.aggregatePaginate(aggregate, options, (err: any, value: AggregatePaginateResult<User>) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }

        console.log('totalDocs: ' + value.totalDocsCustom);
        console.log('limit: ' + value.limitCustom);
        console.log('page: ' + value.pageCustom);
        console.log('nextPage: ' + value.nextPageCustom);
        console.log('prevPage: ' + value.prevPageCustom);
        console.log('totalPages: ' + value.totalPagesCustom);
        console.log('offset: ' + value.offset);
        console.log('docs: ');
        console.dir(value.docsCustom);
        return res.json(value);
    });
});
//#endregion
