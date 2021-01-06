import Reef from 'reefjs';

// Turns debugging mode on
Reef.debug(true);

// Hello World
const app = new Reef('#someelement', {
    data: {
        sayHello: 'Hello world',
    },

    template: props => {
        return `<h1>${props.sayHello} from Reef!</h1>`;
    },
});

app.render();

// Nested components
const nc = new Reef('#nc', {
    data: {
        id: 'test',
    },

    template: props => {
        return `
        <div id="${props.id}">
            <p id="name1"></p>
            <p id="name2"></p>
        </div>
        `;
    },
});

const nc2 = new Reef('#name1', {
    template: () => {
        return 'My name is David!';
    },
});

const nc3 = new Reef('#name2', {
    data: {
        name: 'Jane',
    },

    template: props => {
        return `My name is ${props.name}!`;
    },
});

nc.attach([nc2, nc3]);
nc.render();

// Edit data
nc.data.name = 'Daniel!';

// Detach component
nc.detach(nc3);

// Clone Data
const copyOfData = Reef.clone(app.data);
copyOfData.sayHello = 'Welcome message';

const app2 = new Reef('#someelement2', {
    data: {
        sayHello: 'Hello world',
    },

    template: props => {
        return `<h1>${props.sayHello} from Reef!</h1>`;
    },
});

app2.render();

app2.data = copyOfData;

// Shared data
const store = new Reef.Store({
    data: {
        todos: ['Swim', 'Climb', 'Jump', 'Play'],
    },

    setters: {
        addTodo: function (props, todo) {
            props.todos.push(todo);
        },
    },

    getters: {
        total: function (props) {
            return props.todos.length;
        },
    },
});

const app3 = new Reef('#app', {
    store: store,

    template: function (props) {
        return `
			<h1>${props.heading}</h1>
			<ul>
				${props.todos
                    .map(function (todo: string) {
                        return `<li>${todo}</li>`;
                    })
                    .join('')}
			</ul>`;
    },
});

app3.render();

store.do('addTodo', 'Sleep');
store.get('total');
