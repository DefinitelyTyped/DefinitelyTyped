import { Serializer, Deserializer, Error } from "jsonapi-serializer";

declare let firstName: string;
declare let lastName: string;

const UserSerializer = new Serializer("users", {
    id: "id",
    attributes: ["firstName", "lastName"],
    keyForAttribute: "camelCase",
    pluralizeType: false,
    job: {
        ref: 'id',
        included: false
    }
});

const users = UserSerializer.serialize({ firstName, lastName });

const UserDeserializer = new Deserializer({
    id: "id",
    keyForAttribute: "camelCase",
    pluralizeType: false,
    typeAsAttribute: true
});

UserDeserializer.deserialize(users);

new Error({
    code: "_code",
    detail: "_detail",
    id: "_id",
    links: {
        about: "_about"
    },
    source: {
        parameter: "_parameter",
        pointer: "_pointer"
    },
    status: "_status",
    title: "_title"
});
