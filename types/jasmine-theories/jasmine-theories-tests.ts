import theoretically from 'jasmine-theories';

theoretically.it('should run this test', ['a', 1, {}], function(testedVal:any){});

theoretically.xit('should not run this test', ['a', 1, {}], function(testedVal:any){});
