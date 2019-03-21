// 测试扩展wx方法
declare namespace wx {
    interface Wx {
        /**
         * add t method
         */
        test(): number;
    }
}

// $ExpectType number
wx.test();

wx.authorize({
    scope: 'scope.record',
});

// $ExpectType AppInstance<Record<string, any>> & Record<string, any>
getApp();

// $ExpectType any
getCurrentPages()[0].data;
