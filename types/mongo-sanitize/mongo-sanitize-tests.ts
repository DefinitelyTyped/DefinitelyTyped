import sanitize from "mongo-sanitize";

const objectSanitized = sanitize({ $gt: 5, a: 1 });

const arraySanitized = sanitize([1, 2, 3]);

class Clazz {
    $gt = 5;
    a = 1;
}
const classSanitized = sanitize(new Clazz());
