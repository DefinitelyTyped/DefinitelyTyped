import { jsonp } from 'mithril/request';

interface Result {
	id: number;
}

jsonp<Result>('/item').then(data => {
	console.log(data.id);
});

class User {
	id: number;
	constructor(result: Result) {
		this.id = result.id;
	}
}

jsonp<User>({
    url: '/user',
    params: { test: 'abc' },
    body: { abc: 'test' },
    type: User,
    callbackName: 'getuser',
    callbackKey: 'key',
    background: true,
}).then(user => {
    console.log(user.id);
});
