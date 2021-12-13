/**
 * Created by Linus Brolin <https://github.com/linusbrolin/>.
 */

import { Schema, model, PaginateModel, PaginateOptions, Types } from 'mongoose';
import mongoosePaginate = require('mongoose-paginate-v2');
import { Router, Request, Response } from 'express';

//#region Test Models
interface Book {
    author: string;
    title: string;
}

interface BookMethods {
    getTitle: () => string;
}

const BookSchema = new Schema<Book, PaginateModel<Book, {}, BookMethods>, BookMethods>({
    author: String,
    title: String,
});

const BookModel = model<Book, PaginateModel<Book, {}, BookMethods>, BookMethods>('Book', BookSchema);

const book = new BookModel();
console.log(book.getTitle() === 'Oliver Twist');

interface User {
    email: string;
    username: string;
    password: string;
}

const UserSchema = new Schema({
    email: String,
    username: String,
    password: String,
});

UserSchema.plugin(mongoosePaginate);
const UserModel = model<User, PaginateModel<User>>('User', UserSchema);

//#endregion

//#region Test Paginate
const router: Router = Router();

router.get('/users.json', async (req: Request, res: Response) => {
    const descending = true;
    const options: PaginateOptions = {};
    options.select = 'email username';
    options.collation = { locale: 'en_US', strength: 1 };
    options.sort = { username: descending ? -1 : 1 };
    options.populate = '';
    options.populate = { path: '' };
    options.projection = { _id: 0 };
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
    options.pagination = false;
    options.useEstimatedCount = true;
    options.useCustomCountFn = () => Promise.resolve(1);
    options.forceCountFn = true;
    options.allowDiskUse = true;
    options.read = { pref: 'secondary', tags: [{ region: 'South' }] };
    options.options = { batchSize: 200 };

    UserModel.paginate({}, options, (err: any, value) => {
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
        const user = value.docs[0];
        console.log(user.save());
        console.log(user.email === 'user@example.com');
        return res.json(value);
    });

    const users = await UserModel.paginate({}, { lean: true, leanWithId: true });
    console.log(users.docs[0].id === new Types.ObjectId().toString());
});
//#endregion
