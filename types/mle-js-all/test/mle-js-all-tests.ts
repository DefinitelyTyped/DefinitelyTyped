/**
Copyright (c) 2025, 2025, Oracle and/or its affiliates.

The Universal Permissive License (UPL), Version 1.0

Subject to the condition set forth below, permission is hereby granted to any
person obtaining a copy of this software, associated documentation and/or data
(collectively the "Software"), free of charge and under any and all copyright
rights in the Software, and any and all patent rights owned or freely
licensable by each licensor hereunder covering either (i) the unmodified
Software as contributed to or provided by such licensor, or (ii) the Larger
Works (as defined below), to deal in both

(a) the Software, and
(b) any piece of software and/or hardware listed in the lrgrwrks.txt file if
one is included with the Software (each a "Larger Work" to which the Software
is contributed by such licensors),

without restriction, including without limitation the rights to copy, create
derivative works of, display, perform, and distribute the Software and make,
use, sell, offer for sale, import, export, have made, and have sold the
Software and the Larger Work(s), and to sublicense the foregoing rights on
either these or other terms.

This license is subject to the following condition:
The above copyright notice and either this complete permission notice or at
a minimum a reference to the UPL must be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { decode as base64decode, encode as base64encode } from "mle-encode-base64";
import bindings from "mle-js-bindings";

function oracleDBTest(): number | undefined {
    oracledb.outFormat = oracledb.OUT_FORMAT_ARRAY;
    const odb = new oracledb.OracleDb(false);
    return odb.defaultConnection().execute("SELECT 42").rowsAffected;
}

function sessionTest() {
    const res = session.execute("SELECT 42");
    if (res.rows) {
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
    }
}

function sodaTest(): string {
    return soda.createCollection("myCollection").getDataGuide().createdOn;
}

function numberTest(): OracleNumber {
    return OracleNumber.pi.mul(new OracleNumber(42));
}

function blobTest(): OracleBlob {
    return OracleBlob.createTemporary(true);
}

function clobTest(): OracleClob {
    return OracleClob.createTemporary(true);
}

function dateTest(): OracleDate {
    const d1: OracleDate = OracleDate.fromString("24-OCT-19");
    const d2: OracleDate = OracleDate.sysDate();
    if (OracleDate.compare(d1, d2) > 0) {
        return d1;
    } else {
        return d2;
    }
}

function timestampTZTest(): OracleTimestampTZ {
    return OracleTimestampTZ.fromString("2020-01-09 17:01:32.341 US/Pacific");
}

function timestampTest(): OracleTimestamp {
    return OracleTimestamp.fromString("2020-01-09 17:01:32.341", "YYYY-MM-DD HH24:MI:SS.FF");
}

// tests fetch, Response, Request and Headers
async function fetchTest(): Promise<string> {
    const url = "http://www.example.com/helloWorld";

    const headers: Headers = new Headers({
        accept: "application/json",
        "Content-Type": "text/plain",
    });

    const request: Request = new Request(url, {
        headers: headers,
        method: "GET",
    });

    const result: Response = await fetch(request);
    if (result.body) {
        return result.json();
    } else {
        return "['no-body']";
    }
}

function testIntervalDayToSecond(): OracleIntervalDayToSecond {
    const i1: OracleIntervalDayToSecond = OracleIntervalDayToSecond.fromNumber(42);
    const i2: OracleIntervalDayToSecond = OracleIntervalDayToSecond.fromString("+00 02:00:13");
    return i1.add(i2);
}

function testIntervalYearToMonth(): OracleIntervalYearToMonth {
    const i1: OracleIntervalYearToMonth = OracleIntervalYearToMonth.fromNumber(7);
    const i2: OracleIntervalYearToMonth = OracleIntervalYearToMonth.fromString("+01-10");
    return i1.add(i2);
}

function testTextEncoder(): Uint8Array {
    return new TextEncoder().encode("Hello World!");
}

function testTextDecoderAndEncoder(): string {
    return new TextDecoder().decode(testTextEncoder());
}

function testJsonId(): JsonId {
    return new JsonId([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
}

function testPkg() {
    const myPkg = plsffi.resolvePackage("my_schema.my_pkg");

    // Call a procedure
    myPkg.my_proc(23, 42, "Hello World!");

    // Call a function
    const myVal = myPkg.my_function("foo", "bar");

    // Read a variable/constant
    const myVar = myPkg.my_attribute;

    // Write variable
    myPkg.my_variable = 2;
}

function testSubprograms() {
    // Resolve top-level function
    const exampleFunc = plsffi.resolveFunction("my_func");

    // Execute the PL/SQL function and use default conversion to JavaScript number
    const numberResult = exampleFunc(42);

    // Execute the PL/SQL function and convert to JavaScript OracleNumber
    const oracleNumberResult = exampleFunc.overrideReturnType(oracledb.ORACLE_NUMBER)(42);

    const exampleProcedure = plsffi.resolveProcedure("my_procedure");
    exampleProcedure(42, 23);
}

function testArgs() {
    // Resolve top-level procedure
    const myProc = plsffi.resolveProcedure("my_procedure_inout");

    // Prepare (IN) OUT parameters
    const myArg3 = plsffi.argOf("baz");
    const myArg4 = plsffi.arg();

    // Call procedure with positional arguments
    myProc("foo", "bar", myArg3, myArg4);

    // Call procedure with named arguments
    myProc({
        arg1: "foo",
        arg2: "bar",
        arg3: myArg3,
        arg4: myArg4,
    });

    // Resulting Outbind values are retrieved from .val
    console.log(myArg3.val, myArg4.val);
}

function testPlsFFI() {
    testPkg();
    testSubprograms();
    testArgs();
}

function asciiBytesToString(bytesBuffer: ArrayBuffer) {
    let charCodes = new Uint8Array(bytesBuffer);
    let result = "";

    charCodes.forEach((char) => {
        result += String.fromCharCode(char);
    });
    return result;
}

function testBase64Encoding() {
    const testInput = "hello";
    const encoded = base64encode(testInput);
    console.log("encoded: " + encoded);
    const decodedBytes = base64decode(encoded);
    console.log("decoded into an ArrayBuffer?: " + (decodedBytes instanceof ArrayBuffer));
    const stringFromBytes = asciiBytesToString(decodedBytes);
    console.log("string from decoded: " + stringFromBytes);
}

function testPlsqlTypesDoc() {
    const query = "SELECT 9007199254740992 AS n FROM dual";
    const options = { fetchInfo: { N: { type: oracledb.ORACLE_NUMBER } } };
    const result = session.execute(query, [], options);
    if (result.rows) {
        console.log(result.rows[0].N.add(new OracleNumber(7)));
    }

    const timestamp = OracleTimestamp.fromString("2012-05-19", "YYYY-MM-DD");
    console.log("Timestamp: ", timestamp);
    const interval = new OracleIntervalDayToSecond(5, 2, 33, 55, 0);
    console.log("TimeStamp + Interval: ", timestamp.addInterval(interval));
}

function testBindingsDoc() {
    const param1 = bindings.importValue("param1");
    const result = param1 + 7;
    bindings.exportValue("result", result);
    const param1AsString = bindings.importValue("param1", bindings.JSTypes.STRING);
}

function testSqlDriverDocs() {
    var rows = session.execute("SELECT EMPNO, ENAME FROM SCOTT.EMP").rows;
    if (rows) {
        for (var row of rows) {
            const empno = row.EMPNO;
            const ename = row.ENAME;
            // ...
        }
    }

    var rows = session.execute("SELECT EMPNO, ENAME FROM SCOTT.EMP", [], {
        outFormat: oracledb.OUT_FORMAT_ARRAY,
    }).rows;
    if (rows) {
        for (var row of rows) {
            const empno = row.EMPNO;
            const ename = row.ENAME;
            // ...
        }
    }

    var rows = session.execute("SELECT :bind1, :bind2, :bind3", [42, "foo", true]).rows;

    var result = session.execute("SELECT :foo, :bar", {
        foo: 42,
        bar: "foo",
    });

    var result = session.execute("SELECT :foo", {
        foo: {
            val: 42,
            dir: oracledb.BIND_IN,
            type: oracledb.NUMBER,
        },
    });

    var result = session.execute("BEGIN :a := 'foo'; :b := 42; END;", {
        a: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
        b: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
    });

    var result = session.execute("SELECT EMPNO, HIREDATE FROM SCOTT.EMP", [], {
        fetchInfo: {
            "EMPNO": { type: oracledb.STRING }, // return the number as a string
            "HIREDATE": { type: oracledb.STRING }, // return the date as a string
        },
    });

    var rs = session.execute("SELECT * FROM EMP");
    if (rs.metaData) {
        for (var md of rs.metaData) {
            var columnName = md.name;
            var columnDBType = md.dbType; // ORACLE Database Type, e.g. oracledb.DB_TYPE_NUMBER
            var columnFetchType = md.fetchType; // JavaScript Type which will be fetched, e.g. oracledb.STRING
            var isNullable = md.nullable;
            // ...
        }
    }

    try {
        var rows = session.execute("SELECT * FROM").rows;
        if (rows) {
            // never reached
            // ...
        }
    } catch (err: any) {
        return err.errorNum + " " + err.message;
    }

    var result = session.execute("insert into emp values (7999, 'Hello', 'World', 7839, '18-DEC-85', 2500, 0, 30)");
    var rowsInserted = result.rowsAffected;
}

async function mainTest() {
    oracleDBTest();
    sessionTest();
    sodaTest();
    numberTest();
    blobTest();
    clobTest();
    dateTest();
    timestampTZTest();
    timestampTest();
    fetchTest();
    testIntervalDayToSecond();
    testIntervalYearToMonth();
    testTextDecoderAndEncoder();
    testJsonId();
    testPlsFFI();
    testBase64Encoding();
    testPlsqlTypesDoc();
    testBindingsDoc();
    testSqlDriverDocs();
}

mainTest();
