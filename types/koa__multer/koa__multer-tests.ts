import Koa = require('koa');
import multer = require('@koa/multer');

const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        cb(null, true);
    },
});

const app = new Koa();

app.use(upload.single('avatar'));

app.use(upload.array('photos', 12));
app.use(async (ctx, next) => {
    ctx.request.files; // $ExpectType { [fieldname: string]: File[]; } | File[] | undefined || File[] | { [fieldname: string]: File[]; } | undefined
    await next();
});

const cpUpload = upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'gallery', maxCount: 8 },
]);
app.use(cpUpload);
app.use(async (ctx, next) => {
    ctx.request.files; // $ExpectType { [fieldname: string]: File[]; } | File[] | undefined || File[] | { [fieldname: string]: File[]; } | undefined
    await next();
});

const diskStorage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '/tmp/my-uploads');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}`);
    },
});

const diskUpload = multer({ storage: diskStorage });

const memoryStorage = multer.memoryStorage();
const memoryUpload = multer({ storage: memoryStorage });
