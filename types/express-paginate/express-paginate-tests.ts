import express from 'express';
import * as paginate from 'express-paginate';

declare function findAndCountAll(params: object): Promise<{count: number, rows: object[]}>;

const app = express();

app.use(paginate.middleware(10, 50));

app.get('/users', async (req, res, next) => {
    // req.skip should be available
    return findAndCountAll({limit: req.query.limit, offset: req.skip})
        .then(results => {
            const itemCount = results.count;
            const pageCount = Math.ceil(results.count / parseInt(req.query.limit as string, 10));
            res.render('users/all_users', {
                users: results.rows,
                pageCount,
                itemCount,
                currentPageHref: paginate.href(req)(false, req.params),
                // Instead of exposing this to the html template, we'll test this here and pass a static number
                hasNextPages: paginate.hasNextPages(req)(pageCount),
                pages: paginate.getArrayPages(req)(3, pageCount, parseInt(req.query.page as string, 10))
            });
        }).catch(next);
});
