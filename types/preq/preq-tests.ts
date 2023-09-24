import preq = require("preq");

// #region preq
{
    preq("https://www.example.com").then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq("https://www.example.com", {
        query: "foo=bar",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq("https://www.example.com", {
        method: "post",
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq({
        uri: "https://www.example.com",
        method: "post",
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );
}
// #endregion

// #region preq.get
{
    preq.get("https://www.example.com").then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.get("https://www.example.com", {
        query: "foo=bar",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.get("https://www.example.com", {
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.get({
        uri: "https://www.example.com",
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );
}
// #endregion

// #region preq.head
{
    preq.head("https://www.example.com").then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.head("https://www.example.com", {
        query: "foo=bar",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.head("https://www.example.com", {
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.head({
        uri: "https://www.example.com",
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );
}
// #endregion

// #region preq.mkcol
{
    preq.mkcol("https://www.example.com").then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.mkcol("https://www.example.com", {
        query: "foo=bar",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.mkcol("https://www.example.com", {
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.mkcol({
        uri: "https://www.example.com",
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );
}
// #endregion

// #region preq.options
{
    preq.options("https://www.example.com").then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.options("https://www.example.com", {
        query: "foo=bar",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.options("https://www.example.com", {
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.options({
        uri: "https://www.example.com",
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );
}
// #endregion

// #region preq.patch
{
    preq.patch("https://www.example.com").then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.patch("https://www.example.com", {
        query: "foo=bar",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.patch("https://www.example.com", {
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.patch({
        uri: "https://www.example.com",
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );
}
// #endregion

// #region preq.post
{
    preq.post("https://www.example.com").then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.post("https://www.example.com", {
        query: "foo=bar",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.post("https://www.example.com", {
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.post({
        uri: "https://www.example.com",
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );
}
// #endregion

// #region preq.put
{
    preq.put("https://www.example.com").then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.put("https://www.example.com", {
        query: "foo=bar",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.put("https://www.example.com", {
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.put({
        uri: "https://www.example.com",
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );
}
// #endregion

// #region preq.trace
{
    preq.trace("https://www.example.com").then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.trace("https://www.example.com", {
        query: "foo=bar",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.trace("https://www.example.com", {
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );

    preq.trace({
        uri: "https://www.example.com",
        query: "foo=bar",
        body: "text=value",
        retries: 2,
        timeout: 1500,
    }).then(
        resp => {
            resp; // $ExpectType Response
        },
        error => {
            error; // $ExpectType any
        },
    );
}
// #endregion
