import * as UUID from 'uuid-1345';

var uuid:string;
var uuidBuffer:Buffer;
var uuidObject:UUID.UUID;

// sync without options

uuid = UUID.v1();
uuid = UUID.v4();
uuid = UUID.v4fast();

// sync with options
uuid = UUID.v1({encoding: 'ascii'});
uuidBuffer = UUID.v1({encoding: 'binary'});
uuidObject = UUID.v1({encoding: 'object'});

uuid = UUID.v3({namespace: uuid, name: 'http://example.com/'});
uuid = UUID.v3({encoding: 'ascii', namespace: uuidBuffer, name: 'http://example.com/'});
uuidBuffer = UUID.v3({encoding: 'binary', namespace: uuidObject, name: 'http://example.com/'});
uuidObject = UUID.v3({encoding: 'object', namespace: uuid, name: 'http://example.com/'});

uuid = UUID.v4({encoding: 'ascii'});
uuidBuffer = UUID.v4({encoding: 'binary'});
uuidObject = UUID.v4({encoding: 'object'});

uuid = UUID.v4fast({encoding: 'ascii'});
uuidBuffer = UUID.v4fast({encoding: 'binary'});
uuidObject = UUID.v4fast({encoding: 'object'});

uuid = UUID.v5({namespace: uuid, name: 'http://example.com/'});
uuid = UUID.v5({encoding: 'ascii', namespace: uuidBuffer, name: 'http://example.com/'});
uuidBuffer = UUID.v5({encoding: 'binary', namespace: uuidObject, name: 'http://example.com/'});
uuidObject = UUID.v5({encoding: 'object', namespace: uuid, name: 'http://example.com/'});

// async without options
UUID.v1((error:string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v4((error:string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v4fast((error: string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

// async with options
UUID.v1({encoding: 'ascii'}, (error: string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v1({encoding: 'binary'}, (error: string, result:Buffer) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v1({encoding: 'object'}, (error: string, result:UUID.UUID) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v1({mac: false}, (error: string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v3({namespace: uuid, name: 'http://example.com/'}, (error: string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v3({encoding: 'ascii', namespace: uuidBuffer, name: 'http://example.com/'}, (error: string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v3({encoding: 'binary', namespace: uuidObject, name: 'http://example.com/'}, (error: string, result:Buffer) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v3({encoding: 'object', namespace: uuid, name: 'http://example.com/'}, (error: string, result:UUID.UUID) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v4({encoding: 'ascii'}, (error: string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v4({encoding: 'binary'}, (error: string, result:Buffer) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v4({encoding: 'object'}, (error: string, result:UUID.UUID) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v4fast({encoding: 'ascii'}, (error: string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v4fast({encoding: 'binary'}, (error: string, result:Buffer) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v4fast({encoding: 'object'}, (error: string, result:UUID.UUID) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v5({namespace: uuid, name: 'http://example.com/'}, (error: string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v5({encoding: 'ascii', namespace: uuidBuffer, name: 'http://example.com/'}, (error: string, result:string) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v5({encoding: 'binary', namespace: uuidObject, name: 'http://example.com/'}, (error: string, result:Buffer) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

UUID.v5({encoding: 'object', namespace: uuid, name: 'http://example.com/'}, (error: string, result:UUID.UUID) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});

// namespaces for v3, v5
console.log(UUID.namespace.dns);
console.log(UUID.namespace.url);
console.log(UUID.namespace.oid);
console.log(UUID.namespace.x500);

// more API
var checkResult:{version?:number, variant:string, format:string};
checkResult = UUID.check(uuid);
uuidBuffer = UUID.parse(uuid);
uuid = UUID.stringify(uuidBuffer);

