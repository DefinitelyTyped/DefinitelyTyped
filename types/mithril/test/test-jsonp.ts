import * as m from 'mithril'

interface Result {
	id: number
}

m.jsonp<Result>('/item').then(data => {
	console.log(data.id)
})

class User {
	id: number
	constructor (result: Result) {
		this.id = result.id
	}
}

m.jsonp<User>({
	url: '/user',
	data: {test: 'abc'},
	type: User,
	callbackName: 'getuser',
	callbackKey: 'key',
	background: true
}).then(user => {
	console.log(user.id)
})
