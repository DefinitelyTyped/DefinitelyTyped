import parser = require("swagger-parser");
import { Spec as Swagger } from '../swagger-schema-official';

const swaggerMock: Swagger = {
    swagger: '',
    info: {
        title: '',
        version: ''
    },
    paths: { '': {} }
}

// Without callback which returns a promise
parser.parse("test.yaml").then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.parse("test.yaml", {}).then((file) => {
    console.log(file);
});

// With callback
parser.parse("test.yaml", {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.parse("test.yaml", (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.parse(swaggerMock).then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.parse(swaggerMock, {}).then((file) => {
    console.log(file);
});

// With callback
parser.parse(swaggerMock, {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.parse(swaggerMock, (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.dereference("test.yaml").then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.dereference("test.yaml", {}).then((file) => {
    console.log(file);
});

// With callback
parser.dereference("test.yaml", {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.dereference("test.yaml", (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.dereference(swaggerMock).then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.dereference(swaggerMock, {}).then((file) => {
    console.log(file);
});

// With callback
parser.dereference(swaggerMock, {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.dereference(swaggerMock, (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.bundle("test.yaml").then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.bundle("test.yaml", {}).then((file) => {
    console.log(file);
});

// With callback
parser.bundle("test.yaml", {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.bundle("test.yaml", (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.bundle(swaggerMock).then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.bundle(swaggerMock, {}).then((file) => {
    console.log(file);
});

// With callback
parser.bundle(swaggerMock, {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.bundle(swaggerMock, (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.resolve("test.yaml").then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.resolve("test.yaml", {}).then((file) => {
    console.log(file);
});

// With callback
parser.resolve("test.yaml", {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.resolve("test.yaml", (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.resolve(swaggerMock).then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.resolve(swaggerMock, {}).then((file) => {
    console.log(file);
});

// With callback
parser.resolve(swaggerMock, {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.resolve(swaggerMock, (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.validate("test.yaml").then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.validate("test.yaml", {}).then((file) => {
    console.log(file);
});

// With callback
parser.validate("test.yaml", {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.validate("test.yaml", (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.validate(swaggerMock).then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.validate(swaggerMock, {}).then((file) => {
    console.log(file);
});

// With callback
parser.validate(swaggerMock, {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.validate(swaggerMock, (err, file) => {
    console.log(file);
});
