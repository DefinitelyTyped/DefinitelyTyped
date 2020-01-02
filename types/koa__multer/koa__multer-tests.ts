import Koa = require('koa');
import multer = require('@koa/multer');

const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        cb(null, true);
    }
});

const app = new Koa();

app.use(upload.single('avatar'));

app.use(upload.array('photos', 12));
app.use(async (ctx, next) => {
    for (const file of ctx.request.files) {
        console.info(`Received file: ${file.filename}`);
    }
    await next();
});

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]);
app.use(cpUpload);

const diskStorage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '/tmp/my-uploads');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}`);
    }
});

const diskUpload = multer({ storage: diskStorage });

const memoryStorage = multer.memoryStorage();
const memoryUpload = multer({ storage: memoryStorage });
