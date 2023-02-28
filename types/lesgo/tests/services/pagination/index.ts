import db from 'lesgo/utils/db';
import Paginator, { PaginatorObject } from 'lesgo/services/pagination/Paginator';
import LengthAwarePaginator from 'lesgo/services/pagination/LengthAwarePaginator';

const paginator = new Paginator(db, 'SELECT * FROM Users;', []); // $ExpectType Paginator
paginator.previousPage(); // $ExpectType number | false
paginator.currentPage(); // $ExpectType number
paginator.perPage(); // $ExpectType number

(async () => {
    await paginator.count(); // $ExpectType number
    await paginator.nextPage(); // $ExpectType number | false
    await paginator.firstItem(); // $ExpectType any
    await paginator.lastItem(); // $ExpectType any
    await paginator.lastPage(); // $ExpectType number
    await paginator.total(); // $ExpectType number | null
    await paginator.items(); // $ExpectType any[]
    await paginator.toObject(); // $ExpectType PaginatorObject<any>
    await paginator.executeQuery(); // $ExpectType any[]
})();

const lengthAwarePaginator = new LengthAwarePaginator(db, 'SELECT * FROM Users;', [], { total: 0 }); // $ExpectType LengthAwarePaginator
(async () => {
    await lengthAwarePaginator.total(); // $ExpectType number | null
})();
