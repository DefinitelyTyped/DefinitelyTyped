import StorageBase, { Image, ReadOptions } from 'ghost-storage-base';
import { Request, Response, NextFunction } from 'express';

class MyCustomAdapter extends StorageBase {
    constructor() {
        super();
    }

    async exists(fileName: string, targetDir?: string) {
        return true;
    }

    async save(image: Image, targetDir?: string) {
        return 'string';
    }

    serve() {
        return (req: Request, res: Response, next: NextFunction) => next();
    }

    async delete(fileName: string, targetDir?: string) {
        return true;
    }

    async read(options: ReadOptions) {
        return Buffer.from([]);
    }
}

const image: Image = {
    path: 'tmp/123456.jpg',
    name: 'IMAGE.jpg',
    type: 'image/jpeg',
};

const storage = new MyCustomAdapter();

storage.getTargetDir('/'); // $ExpectType string
storage.getUniqueFileName(image, '/target'); // $ExpectType string
storage.getSanitizedFileName('IMAGE.jpg'); // $ExpectType string

storage.exists('tmp/123456.jpg', '/'); // $ExpectType Promise<boolean>
storage.save(image, '/'); // $ExpectType Promise<string>
storage.serve(); // $ExpectType (req: Request<ParamsDictionary, any, any, ParsedQs>, res: Response<any>, next: NextFunction) => void
storage.delete('tmp/123456.jpg', '/'); // $ExpectType Promise<boolean>
