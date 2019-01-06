import * as mongoSanitize from 'mongo-sanitize';

const objectSanitized = mongoSanitize.sanitize({ $gt: 5, a: 1 });

const arraySanitized = mongoSanitize.sanitize([1, 2, 3]);

class Clazz {
    $gt = 5;
    a = 1;
}
const classSanitized = mongoSanitize.sanitize(new Clazz());
