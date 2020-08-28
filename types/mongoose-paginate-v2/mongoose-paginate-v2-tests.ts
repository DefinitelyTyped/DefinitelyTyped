/**
 * Created by Linus Brolin <https://github.com/linusbrolin/>.
 */

import { Schema, model, PaginateModel, PaginateOptions, PaginateResult, Document } from 'mongoose';
import mongoosePaginate = require('mongoose-paginate-v2');
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

UserSchema.plugin(mongoosePaginate);

interface UserModel<T extends Document> extends PaginateModel<T> { }

const UserModel: UserModel<User> = model<User>('User', UserSchema) as UserModel<User>;
//#endregion

//#region Test Paginate
const router: Router = Router();

router.get('/users.json', (req: Request, res: Response) => {
    const descending = true;
    const options: PaginateOptions = {};
    options.select = 'email username';
    options.sort = { username: descending ? -1 : 1 };
    options.collation = { locale: 'en_US', strength: 1 };
    options.pagination = false;
    options.populate = '';
    options.populate = {
        path: '',
    };
    options.lean = true;
    options.leanWithId = false;
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
    options.projection = { _id: 0 };
    options.options = { batchSize: 200 };

    UserModel.paginate({}, options, (err: any, value: PaginateResult<User>) => {
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
