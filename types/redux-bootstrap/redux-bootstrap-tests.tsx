import bootstrap from "redux-bootstrap";

let routes: JSX.Element = null;

let result = bootstrap({
    container: "root",
    initialState: {},
    middlewares: [],
    reducers: {
        reposReducer: (previousState: any, action: any): any => { return null; },
        usersReducer: (previousState: any, action: any): any => { return null; }
    },
    routes: routes
});

console.log(result.store);
console.log(result.history);
console.log(result.root);
