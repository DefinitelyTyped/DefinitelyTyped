import Controller, { inject } from '@ember/controller';

class FirstController extends Controller {
    foo = 'bar';
    @inject declare second: InstanceType<typeof SecondController>;
    @inject() declare otherSecond: InstanceType<typeof SecondController>;
    @inject('second') declare moreSecond: InstanceType<typeof SecondController>;

    queryParams = [
        'category',
        {
            searchTerm: {
                as: 'search',
            },
            subCategory: 'sub-category',
        },
    ];

    first() {
        return '';
    }
}
const SecondController = Controller.extend({
    foo: 'bar',

    second() {
        return '';
    },
});

declare module '@ember/controller' {
    interface Registry {
        first: FirstController;
        second: InstanceType<typeof SecondController>;
    }
}
