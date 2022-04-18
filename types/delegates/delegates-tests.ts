import delegates = require('delegates');

class Animal {
    getFood() {}

    settings = {
        env: 'development',
    };
}

class AnimalAPI {
    constructor() {
        delegates(this, '_animal').access('age').method('getFood').getter('options').setter('options').fluent('env');
    }

    private readonly _animal = new Animal();
}

new AnimalAPI();
