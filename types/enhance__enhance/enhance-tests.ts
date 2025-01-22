import type {
    EnhanceApiFn,
    EnhanceApiFnChain,
    EnhanceApiRes,
    EnhanceElemFn,
    EnhanceHeadFn,
    EnhanceHtmlFn,
    EnhancePageFn,
    EnhancePreflightFn,
} from "enhance";

// Preflight
export const preflight: EnhancePreflightFn = function(req) {
    const { method, path } = req;
    const title = `Todos — ${path} `;
    return { title };
};

interface Todo {
    title: string;
    completed?: boolean;
}

// API Handler
// sync
export const get: EnhanceApiFn = function(request) {
    const filter: string = request.body.filter as string;

    const todos: Todo[] = [
        { title: "todo 1", completed: false },
        { title: "todo 2", completed: true },
        { title: "todo 3" },
    ];

    const validResponse: EnhanceApiRes = { json: { todos } };
    // @ts-expect-error
    const invalidResponse: EnhanceApiRes = {
        json: { foo: "bar" },
        body: "",
    };

    return {
        session: {},
        status: 200,
        cacheControl: "public, max-age=14400",
        json: { filter, todos },
    };
};
// async
export const post: EnhanceApiFn = async function(req) {
    return {
        json: { req },
    };
};
// chain
export const patch: EnhanceApiFnChain = [
    (req) => {
        return { session: { foo: "bar", ...req.session } };
    },
    async (req) => {
        return { json: { path: req.path } };
    },
    async () => {
        return { status: 302, location: "/" };
    },
];

// Custom Element
export const TodoItem: EnhanceElemFn = function({
    html,
    state: { attrs, store, instanceID, context },
}) {
    const todoId = attrs["todo-id"];
    const completed = typeof attrs.completed === "string";
    const myHtml: EnhanceHtmlFn = html;
    typeof myHtml === "function";

    context.todoId = todoId;

    store.myCustomData;

    return html`
    <div class="flex gap-2 mb-1">
      <input
        id="todo-${instanceID}"
        todo-id="${todoId}"
        type="checkbox"
        name="completed"
        ${completed ? "checked" : ""}
      />
      <slot></slot>
    </div>
  `;
};

// Page Element
export const page: EnhancePageFn = function({
    html,
    state: { attrs, store, instanceID, context },
}) {
    const todoId = attrs["todo-id"];
    const completed = typeof attrs.completed === "string";
    const myHtml: EnhanceHtmlFn = html;
    typeof myHtml === "function";

    context.todoId = todoId;

    store.myCustomData;

    return html`
    <div class="flex gap-2 mb-1">
      <input
        id="todo-${instanceID}"
        todo-id="${todoId}"
        type="checkbox"
        name="completed"
        ${completed ? "checked" : ""}
      />
      <slot></slot>
    </div>
  `;
};

// Head Function
export const Head: EnhanceHeadFn = function(state) {
    const { req, status, error, store } = state;
    if (status > 399 && error) {
        return error;
    }

    const { path } = req;
    const title = `Todos — ${path} - ${store.docTitle}`;

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <link rel="stylesheet" href="/_static/styles.css">
</head>
  `;
};
