/**
 * Created by Linus Brolin <https://github.com/linusbrolin/>.
 */

import {
    Schema,
    model,
    PaginateModel,
    PaginateOptions,
    PaginateResult,
    Document
} from 'mongoose';
import mongoosePaginate = require('mongoose-paginate');
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
  password: String
});

UserSchema.plugin(mongoosePaginate);

interface UserModel<T extends Document> extends PaginateModel<T> {};

let UserModel: UserModel<User> = model<User>('User', UserSchema) as UserModel<User>;
//#endregion


//#region Test Paginate
let router: Router = Router();

router.get('/users.json', function(req: Request, res: Response) {
    let descending: boolean = true;
    let options: PaginateOptions = {} as PaginateOptions;
    options.select = 'email username';
    options.sort = { 'username': (descending ? -1 : 1) };
    options.populate = '';
    options.populate = {
      path: '',
    };
    options.lean = true;
    options.leanWithId = false;
    options.offset = 0;
    options.page = 1;
    options.limit = 10;

    UserModel
    .paginate({}, options, (err: any, value: PaginateResult<User>) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }

        console.log('total: ' + value.total);
        console.log('limit: ' + value.limit);
        console.log('page: ' + value.page);
        console.log('pages: ' + value.pages);
        console.log('offset: ' + value.offset);
        console.log('docs: ');
        console.dir(value.docs);
        return res.json(value);
    });

});
//#endregion
