import { sp } from './';
import { IListInfo } from './sp/lists';

sp.web.lists.getByTitle("list").get().then((val: IListInfo) => {
    console.log(val.Id);
}).catch()