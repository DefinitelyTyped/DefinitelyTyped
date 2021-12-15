import delegates from 'delegates';

class Animal {
    private _age = 0

    private _options = {}

    get options() {
        return this._options;
    }

    set options(value = {}) {
        this._options = value;
    }

    get age() {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    getFood() {}
}

class AnimalAPI {
    constructor() {
        delegates(this, '_animal')
        .access('age')
        .method('getFood')
        .getter('options')
        .setter('options')
    }

    private _animal = new Animal();
}

new AnimalAPI();
