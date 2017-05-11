import theoretically from 'jasmine-theories';

theoretically.it('should run this test', ['a', 1, {}], (testedValue: any) => {});
theoretically.xit('should not run this test', ['a', 1, {}], (testedValue: any) => {});
