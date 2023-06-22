import { request } from 'mithril/request';

interface Result {
    id: number;
}

request<Result>({ method: 'GET', url: '/item' }).then(result => {
    console.log(result.id);
});

request<{ a: string }>('/item', { method: 'POST' }).then(result => {
    console.log(result.a);
});

request<any>({
    method: 'GET',
    url: '/item',
    params: { x: 'y' },
}).then(result => {
    console.log(result);
});

request<any>({
    method: 'GET',
    url: '/item',
    body: { x: 'y' },
}).then(result => {
    console.log(result);
});

request<Result>({
    method: 'GET',
    url: '/item',
    body: '5',
    serialize: (data: number) => 'id=' + data.toString(),
}).then(result => {
    console.log(result);
});

request<Result>('/item', {
    method: 'GET',
    deserialize: str => JSON.parse(str) as Result,
}).then(result => {
    console.log(result.id);
});

request<Result>('/id', {
    method: 'GET',
    extract: xhr => ({ id: Number(xhr.responseText) }),
}).then(result => {
    console.log(result.id);
});

request<Result>('/item', {
    config: (xhr, opts) => {
        xhr.setRequestHeader('accept', '*');
        console.log(opts.background);
        return xhr;
    },
    headers: { 'Content-Type': 'application/json' },
    background: true,
}).then(result => {
    console.log(result.id);
});

class Item {
    identifier: number;
    constructor(result: Result) {
        this.identifier = result.id;
    }
}

request<Item>('/item', {
    method: 'GET',
    async: true,
    user: 'Me',
    password: 'qwerty',
    withCredentials: true,
    type: Item,
    useBody: false,
}).then(item => {
    console.log(item.identifier);
});

request<any>('/foo', { responseType: '' });
request<any>('/foo', { responseType: 'arraybuffer' });
request<any>('/foo', { responseType: 'blob' });
request<any>('/foo', { responseType: 'document' });
request<any>('/foo', { responseType: 'json' });
request<any>('/foo', { responseType: 'text' });
// @ts-expect-error
request<any>('/foo', { responseType: 'other' });
