/**
 * Created by Vladimir Skirga <https://github.com/pr0n1x2>.
 */

import { Schema, model, AggregatePaginateModel, PaginateOptions, AggregatePaginateResult, Document } from 'mongoose';
import mongooseProductivePaginator = require('mongoose-productive-paginator');
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

UserSchema.plugin(mongooseProductivePaginator);

interface UserModel<T extends Document> extends AggregatePaginateModel<T> {}

const UserModel: UserModel<User> = model<User>('User', UserSchema) as UserModel<User>;
//#endregion

//#region Test Paginate
const router: Router = Router();

router.get('/users.json', (req: Request, res: Response) => {
    const options: PaginateOptions = {};
    options.pagination = false;
    options.page = 1;
    options.customLabels = {
        totalDocs: 'totalDocsCustom',
        limit: 'limitCustom',
        page: 'pageCustom',
        totalPages: 'totalPagesCustom',
        docs: 'docsCustom',
        nextPage: 'nextPageCustom',
        prevPage: 'prevPageCustom',
    };

    const conditionsPipeline = null;
    const sortPipeline = {
        $sort: {
            email: 1,
        },
    };
    const docsPipeline = {
        $project: {
            email: 1,
            username: 1,
            password: 1,
        },
    };

    UserModel.aggregatePaginate(
      conditionsPipeline,
      sortPipeline,
      docsPipeline,
      options,
      (err: any, value: AggregatePaginateResult<User>) => {
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
        console.log('docs: ');
        console.dir(value.docsCustom);
        return res.json(value);
    });
});
//#endregion
