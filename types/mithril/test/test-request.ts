import {request} from 'mithril/request';

interface Result {
	id: number;
}

request<Result>({method: "GET", url: "/item"}).then(result => {
	console.log(result.id);
});

request<{a: string}>("/item", {method: "POST"}).then(result => {
	console.log(result.a);
});

request<any>({
	method: "GET",
	url: "/item",
	data: {x: "y"}
}).then(result => {
	console.log(result);
});

request<Result>({
	method: "GET",
	url: "/item",
	data: 5,
	serialize: (data: number) => "id=" + data.toString()
}).then(result => {
	console.log(result);
});

request<Result>('/item', {
	method: "GET",
	deserialize: str => JSON.parse(str) as Result
}).then(result => {
	console.log(result.id);
});

request<Result>('/id', {
	method: "GET",
	extract: xhr => ({id: Number(xhr.responseText)})
}).then(result => {
	console.log(result.id);
});

request<Result>('/item', {
	config: xhr => {
		xhr.setRequestHeader('accept', '*');
	},
	headers: {"Content-Type": "application/json"},
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
	user: "Me",
	password: "qwerty",
	withCredentials: true,
	type: Item,
	useBody: false
}).then(item => {
	console.log(item.identifier);
});
