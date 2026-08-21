import * as Boom from "@hapi/boom";
import * as Avocat from "@hapipal/avocat";

const notFound: Boom.Boom = Avocat.rethrow(Boom.notFound(), { return: true });
notFound.message;
Avocat.rethrow(Boom.badImplementation(), { includeMessage: true });

try {
    Avocat.rethrow(Boom.conflict());
} catch (e) {}
