"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = exports.page = exports.TodoItem = exports.patch = exports.post = exports.get = exports.preflight = void 0;
// Preflight
var preflight = function (req) {
    var method = req.method, path = req.path;
    var title = "Todos \u2014 ".concat(path, " ");
    console.log("Handling ".concat(method, " ").concat(path, "..."));
    return { title: title };
};
exports.preflight = preflight;
// API Handler
// sync
var get = function (request) {
    console.log("Handling ".concat(request.path, "..."));
    var filter = request.body.filter;
    var todos = [
        { title: "todo 1", completed: false },
        { title: "todo 2", completed: true },
        { title: "todo 3" },
    ];
    var validResponse = { json: { todos: todos } };
    var invalidResponse = {
        json: { foo: "bar" },
        body: "",
    };
    return {
        session: {},
        status: 200,
        cacheControl: "public, max-age=14400",
        json: { filter: filter, todos: todos },
    };
};
exports.get = get;
// async
var post = function (req) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    json: { req: req },
                }];
        });
    });
};
exports.post = post;
// chain
exports.patch = [
    function (req) {
        return { session: __assign({ foo: "bar" }, req.session) };
    },
    function (req) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, { json: { path: req.path } }];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, { status: 302, location: "/" }];
        });
    }); },
];
// Custom Element
var TodoItem = function (_a) {
    var html = _a.html, _b = _a.state, attrs = _b.attrs, store = _b.store, instanceID = _b.instanceID, context = _b.context;
    var todoId = attrs["todo-id"];
    var completed = typeof attrs.completed === "string";
    var myHtml = html;
    typeof myHtml === "function";
    context.todoId = todoId;
    store.myCustomData;
    return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    <div class=\"flex gap-2 mb-1\">\n      <input\n        id=\"todo-", "\"\n        todo-id=\"", "\"\n        type=\"checkbox\"\n        name=\"completed\"\n        ", "\n      />\n      <slot></slot>\n    </div>\n  "], ["\n    <div class=\"flex gap-2 mb-1\">\n      <input\n        id=\"todo-", "\"\n        todo-id=\"", "\"\n        type=\"checkbox\"\n        name=\"completed\"\n        ", "\n      />\n      <slot></slot>\n    </div>\n  "])), instanceID, todoId, completed ? "checked" : "");
};
exports.TodoItem = TodoItem;
// Page Element
var page = function (_a) {
    var html = _a.html, _b = _a.state, attrs = _b.attrs, store = _b.store, instanceID = _b.instanceID, context = _b.context;
    var todoId = attrs["todo-id"];
    var completed = typeof attrs.completed === "string";
    var myHtml = html;
    typeof myHtml === "function";
    context.todoId = todoId;
    store.myCustomData;
    return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    <div class=\"flex gap-2 mb-1\">\n      <input\n        id=\"todo-", "\"\n        todo-id=\"", "\"\n        type=\"checkbox\"\n        name=\"completed\"\n        ", "\n      />\n      <slot></slot>\n    </div>\n  "], ["\n    <div class=\"flex gap-2 mb-1\">\n      <input\n        id=\"todo-", "\"\n        todo-id=\"", "\"\n        type=\"checkbox\"\n        name=\"completed\"\n        ", "\n      />\n      <slot></slot>\n    </div>\n  "])), instanceID, todoId, completed ? "checked" : "");
};
exports.page = page;
// Head Function
var Head = function (state) {
    var req = state.req, status = state.status, error = state.error, store = state.store;
    if (status > 399 && error) {
        return error;
    }
    var path = req.path;
    var title = "Todos \u2014 ".concat(path, " - ").concat(store.docTitle);
    return "\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <title>".concat(title, "</title>\n  <link rel=\"stylesheet\" href=\"/_static/styles.css\">\n</head>\n  ");
};
exports.Head = Head;
var templateObject_1, templateObject_2;
