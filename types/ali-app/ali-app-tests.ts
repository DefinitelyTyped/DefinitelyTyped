(() => {
    // https://docs.alipay.com/mini/api/ui-navigate
    my.navigateTo({
        url: 'new_page?count=100'
    });
    // test.js
    Page({
        onLoad(query: any) {
            my.alert({
                content: JSON.stringify(query),
            });
        }
    });
    my.redirectTo({
        url: 'new_page?count=100'
    });
    // 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，
    // 而 redirectTo 方法则不会。见下方示例代码

    // 此处是one页面
    my.navigateTo({
        url: 'two?pageId=10000'
    });

    // 此处是two页面
    my.navigateTo({
        url: 'one?pageId=99999'
    });

    // 在three页面内 navigateBack，将返回one页面
    my.navigateBack({
        delta: 2
    });
    my.reLaunch({
        url: '/page/index'
    });
    my.setNavigationBar({
        title: '你好',
        backgroundColor: '#108ee9',
        success() {
            my.alert({
                content: '设置成功',
            });
        },
        fail() {
            my.alert({
                content: '设置是失败',
            });
        },
    });
    my.showNavigationBarLoading();
    my.hideNavigationBarLoading();
})();

(() => {
    // https://docs.alipay.com/mini/api/ui-tabbar
    my.switchTab({
        url: '/home'
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/ui-feedback
    my.alert({
        title: '亲',
        content: '您本月的账单已出',
        buttonText: '我知道了',
        success: () => {
            my.alert({
                title: '用户点击了「我知道了」',
            });
        },
    });
    my.confirm({
        title: '温馨提示',
        content: '您是否想查询快递单号：1234567890',
        confirmButtonText: '马上查询',
        cancelButtonText: '暂不需要',
        success: (result) => {
            my.alert({
                title: `${result.confirm}`,
            });
        },
    });
    my.prompt({
        title: '标题单行',
        message: '说明当前状态、提示用户解决方案，最好不要超过两行。',
        placeholder: '给朋友留言',
        okButtonText: '确定',
        cancelButtonText: '取消',
        success: (result) => {
            my.alert({
                title: JSON.stringify(result),
            });
        },
    });
    my.showToast({
        type: 'success',
        content: '操作成功',
        duration: 3000,
        success: () => {
            my.alert({
                title: 'toast 消失了',
            });
        },
    });
    my.hideToast();
    my.showLoading({
        content: '加载中...',
        delay: 1000,
    });

    my.hideLoading();

    Page({
        onLoad() {
            my.showLoading();
            const that = this;
            setTimeout(() => {
                my.hideLoading({
                    page: that,  // 防止执行时已经切换到其它页面，page指向不准确
                });
            }, 4000);
        }
    });
    my.showNavigationBarLoading();
    my.hideNavigationBarLoading();
    my.showActionSheet({
        title: '支付宝-ActionSheet',
        items: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五'],
        badges: [
            { index: 0, type: 'none' },
            { index: 1, type: 'point' },
            { index: 2, type: 'num', text: '99' },
            { index: 3, type: 'text', text: '推荐' },
            { index: 4, type: 'more' }],
        cancelButtonText: '取消好了',
        success: (res) => {
            const btn = res.index === -1 ? '取消' : `第${res.index}个`;
            my.alert({
                title: `你点了${btn}按钮`
            });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/ui-pulldown
    Page({
        onPullDownRefresh() {
            my.stopPullDownRefresh();
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/ui-contact
    my.choosePhoneContact({
        success: (res) => {
            my.alert({
                content: `姓名：${res.name}\n号码：${res.mobile}`
            });
        }
    });
    my.chooseAlipayContact({
        count: 2,
        success: (res) => {
            my.alert({
                content: 'chooseAlipayContact response: ' + JSON.stringify(res)
            });
        },
        fail: (res) => {
            my.alert({
                content: 'chooseAlipayContact response: ' + JSON.stringify(res)
            });
        }
    });
    my.chooseContact({
        chooseType: 'multi', // 多选模式
        includeMe: true,     // 包含自己
        includeMobileContactMode: 'known', // 仅包含双向手机通讯录联系人，也即双方手机通讯录都存有对方号码的联系人
        multiChooseMax: 3,  // 最多能选择三个联系人
        multiChooseMaxTips: '超过选择的最大人数了',
        success: (res) => {
            my.alert({
                content: 'chooseContact : ' + JSON.stringify(res)
            });
        },
        fail: (res) => {
            my.alert({
                content: 'chooseContact : ' + JSON.stringify(res)
            });
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/ui-city
    my.chooseCity({
        cities: [
            {
                city: '朝阳区',
                adCode: '110105',
                spell: 'chaoyang'
            },
            {
                city: '海淀区',
                adCode: '110108',
                spell: 'haidian'
            },
            {
                city: '丰台区',
                adCode: '110106',
                spell: 'fengtai'
            },
            {
                city: '东城区',
                adCode: '110101',
                spell: 'dongcheng'
            },
            {
                city: '西城区',
                adCode: '110102',
                spell: 'xicheng'
            },
            {
                city: '房山区',
                adCode: '110111',
                spell: 'fangshan'
            }
        ],
        hotCities: [
            {
                city: '朝阳区',
                adCode: '110105'
            },
            {
                city: '海淀区',
                adCode: '110108'
            },
            {
                city: '丰台区',
                adCode: '110106'
            }
        ],
        success: (res) => {
            my.alert({
                content: `${res.city}:${res.adCode}`
            });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/ui-date
    my.datePicker({
        format: 'yyyy-MM-dd',
        currentDate: '2012-12-12',
        startDate: '2012-12-10',
        endDate: '2012-12-15',
        success: (res) => {
            my.alert({
                content: res.date,
            });
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/ui-animation
    const animation = my.createAnimation({
        transformOrigin: "top right",
        duration: 3000,
        timeFunction: "ease-in-out",
        delay: 100,
    });
    Page({
        data: {
            animationInfo: {}
        },
        onShow() {
            const animation = my.createAnimation({
                duration: 1000,
                timeFunction: 'ease-in-out',
            });

            this.animation = animation;

            animation.scale(3, 3).rotate(60).step();

            this.setData({
                animationInfo: animation.export()
            });

            setTimeout(() => {
                animation.translate(35).step();
                this.setData({
                    animationInfo: animation.export(),
                });
            }, 1500);
        },
        rotateAndScale(this: my.Page) {
            // 旋转同时放大
            this.animation.rotate(60).scale(3, 3).step();
            this.setData({
                animationInfo: this.animation.export(),
            });
        },
        rotateThenScale(this: my.Page) {
            // 先旋转后放大
            this.animation.rotate(60).step();
            this.animation.scale(3, 3).step();
            this.setData({
                animationInfo: this.animation.export(),
            });
        },
        rotateAndScaleThenTranslate(this: my.Page) {
            // 先旋转同时放大，然后平移
            this.animation.rotate(60).scale(3, 3).step();
            this.animation.translate(100, 100).step({ duration: 2000 });
            this.setData({
                animationInfo: this.animation.export()
            });
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/ui-canvas
    const ctx = my.createCanvasContext('awesomeCanvas');
    ctx.toTempFilePath({
        success() { },
    });

    ctx.setTextAlign("left");
    ctx.fillText("Hello world", 0, 100);

    ctx.setTextBaseline("top");
    ctx.fillText("Hello world", 0, 100);

    ctx.setFillStyle('blue');
    ctx.fillRect(50, 50, 100, 175);
    ctx.draw();

    ctx.setStrokeStyle('blue');
    ctx.strokeRect(50, 50, 100, 175);
    ctx.draw();

    ctx.setFillStyle('red');
    ctx.setShadow(15, 45, 45, 'yellow');
    ctx.fillRect(20, 20, 100, 175);
    ctx.draw();

    const grd = ctx.createLinearGradient(10, 10, 150, 10);
    grd.addColorStop(0, 'yellow');
    grd.addColorStop(1, 'blue');

    ctx.setFillStyle(grd);
    ctx.fillRect(20, 20, 250, 180);
    ctx.draw();

    grd.addColorStop(0, 'blue');
    grd.addColorStop(1, 'red');

    ctx.setFillStyle(grd);
    ctx.fillRect(20, 20, 250, 180);
    ctx.draw();

    grd.addColorStop(0.36, 'orange');
    grd.addColorStop(0.56, 'cyan');
    grd.addColorStop(0.63, 'yellow');
    grd.addColorStop(0.76, 'blue');
    grd.addColorStop(0.54, 'green');
    grd.addColorStop(1, 'purple');
    grd.addColorStop(0.4, 'red');

    ctx.setFillStyle(grd);
    ctx.fillRect(20, 20, 250, 180);
    ctx.draw();

    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(250, 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineWidth(10);
    ctx.moveTo(20, 35);
    ctx.lineTo(250, 30);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineWidth(20);
    ctx.moveTo(20, 50);
    ctx.lineTo(250, 55);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineWidth(25);
    ctx.moveTo(20, 80);
    ctx.lineTo(250, 85);
    ctx.stroke();

    ctx.draw();

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(150, 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineCap('round');
    ctx.setLineWidth(20);
    ctx.moveTo(20, 70);
    ctx.lineTo(250, 80);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineCap('butt');
    ctx.setLineWidth(10);
    ctx.moveTo(25, 80);
    ctx.lineTo(250, 30);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineCap('square');
    ctx.setLineWidth(10);
    ctx.moveTo(35, 47);
    ctx.lineTo(230, 120);
    ctx.stroke();

    ctx.draw();

    ctx.beginPath();
    ctx.moveTo(20, 30);
    ctx.lineTo(150, 70);
    ctx.lineTo(20, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineJoin('round');
    ctx.setLineWidth(20);
    ctx.moveTo(100, 20);
    ctx.lineTo(280, 80);
    ctx.lineTo(100, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineJoin('bevel');
    ctx.setLineWidth(20);
    ctx.moveTo(60, 25);
    ctx.lineTo(180, 80);
    ctx.lineTo(90, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineJoin('miter');
    ctx.setLineWidth(15);
    ctx.moveTo(130, 70);
    ctx.lineTo(250, 50);
    ctx.lineTo(230, 100);
    ctx.stroke();

    ctx.draw();

    ctx.beginPath();
    ctx.setLineWidth(15);
    ctx.setLineJoin('miter');
    ctx.setMiterLimit(1);
    ctx.moveTo(10, 10);
    ctx.lineTo(100, 50);
    ctx.lineTo(10, 90);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineWidth(15);
    ctx.setLineJoin('miter');
    ctx.setMiterLimit(2);
    ctx.moveTo(50, 10);
    ctx.lineTo(140, 50);
    ctx.lineTo(50, 90);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineWidth(15);
    ctx.setLineJoin('miter');
    ctx.setMiterLimit(3);
    ctx.moveTo(90, 10);
    ctx.lineTo(180, 50);
    ctx.lineTo(90, 90);
    ctx.stroke();

    ctx.draw();

    ctx.rect(20, 20, 250, 80);
    ctx.setFillStyle('blue');
    ctx.fill();
    ctx.draw();

    ctx.fillRect(20, 20, 250, 80);
    ctx.setFillStyle('blue');
    ctx.draw();

    ctx.setStrokeStyle('blue');
    ctx.strokeRect(20, 20, 250, 80);
    ctx.draw();

    ctx.setFillStyle('blue');
    ctx.fillRect(250, 10, 250, 200);
    ctx.setFillStyle('yellow');
    ctx.fillRect(0, 0, 150, 200);
    ctx.clearRect(10, 10, 150, 75);
    ctx.draw();

    ctx.moveTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.lineTo(200, 200);
    ctx.fill();
    ctx.draw();

    ctx.rect(20, 20, 110, 40);
    ctx.setFillStyle('blue');
    ctx.fill();

    ctx.beginPath();
    ctx.rect(20, 30, 150, 40);

    ctx.setFillStyle('yellow');
    ctx.fillRect(20, 80, 150, 40);

    ctx.rect(20, 150, 150, 40);

    ctx.setFillStyle('red');
    ctx.fill();
    ctx.draw();

    ctx.moveTo(20, 20);
    ctx.lineTo(150, 10);
    ctx.lineTo(150, 150);
    ctx.stroke();
    ctx.draw();

    ctx.rect(10, 10, 100, 30);
    ctx.setStrokeStyle('blue');
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(20, 50, 150, 50);

    ctx.setStrokeStyle('yellow');
    ctx.strokeRect(15, 75, 200, 35);

    ctx.rect(20, 200, 150, 30);

    ctx.setStrokeStyle('red');
    ctx.stroke();
    ctx.draw();

    ctx.rect(20, 20, 150, 50);
    ctx.setFillStyle('blue');
    ctx.fill();

    ctx.beginPath();
    ctx.rect(20, 50, 150, 40);

    ctx.setFillStyle('yellow');
    ctx.fillRect(20, 170, 150, 40);

    ctx.rect(10, 100, 100, 30);

    ctx.setFillStyle('red');
    ctx.fill();
    ctx.draw();

    ctx.moveTo(20, 20);
    ctx.lineTo(150, 20);
    ctx.lineTo(150, 150);
    ctx.closePath();
    ctx.stroke();
    ctx.draw();

    ctx.rect(20, 20, 150, 50);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(20, 50, 150, 40);

    ctx.setFillStyle('red');
    ctx.fillRect(20, 80, 120, 30);

    ctx.rect(20, 150, 150, 40);

    ctx.setFillStyle('blue');
    ctx.fill();
    ctx.draw();

    ctx.moveTo(20, 20);
    ctx.lineTo(150, 15);

    ctx.moveTo(20, 55);
    ctx.lineTo(120, 60);
    ctx.stroke();
    ctx.draw();

    ctx.moveTo(20, 20);
    ctx.rect(20, 20, 80, 30);
    ctx.lineTo(120, 80);
    ctx.stroke();
    ctx.draw();

    ctx.arc(200, 75, 50, 0, 2 * Math.PI);
    ctx.setFillStyle('#CCCCCC');
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(50, 65);
    ctx.lineTo(170, 80);
    ctx.moveTo(200, 35);
    ctx.lineTo(200, 235);
    ctx.setStrokeStyle('#AAAAAA');
    ctx.stroke();

    ctx.setFontSize(12);
    ctx.setFillStyle('yellow');
    ctx.fillText('0', 165, 78);
    ctx.fillText('0.6*PI', 96, 148);
    ctx.fillText('1*PI', 15, 57);
    ctx.fillText('1.7*PI', 94, 20);

    ctx.beginPath();
    ctx.arc(200, 85, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('blue');
    ctx.fill();

    ctx.beginPath();
    ctx.arc(200, 35, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('green');
    ctx.fill();

    ctx.beginPath();
    ctx.arc(450, 60, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('red');
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150, 35, 50, 0, 1.8 * Math.PI);
    ctx.setStrokeStyle('#666666');
    ctx.stroke();

    ctx.draw();

    ctx.beginPath();
    ctx.arc(30, 30, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('red');
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 25, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('blue');
    ctx.fill();

    ctx.beginPath();
    ctx.arc(20, 100, 2, 0, 2 * Math.PI);
    ctx.arc(200, 100, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('green');
    ctx.fill();

    ctx.setFillStyle('yellow');
    ctx.setFontSize(14);

    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(30, 100);
    ctx.lineTo(150, 75);

    ctx.moveTo(250, 30);
    ctx.lineTo(250, 80);
    ctx.lineTo(70, 75);
    ctx.setStrokeStyle('#EEEEEE');
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.bezierCurveTo(30, 150, 250, 150, 180, 20);
    ctx.setStrokeStyle('black');
    ctx.stroke();

    ctx.draw();

    ctx.beginPath();
    ctx.arc(30, 30, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('red');
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 20, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('blue');
    ctx.fill();

    ctx.beginPath();
    ctx.arc(30, 200, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('green');
    ctx.fill();

    ctx.setFillStyle('black');
    ctx.setFontSize(12);

    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(30, 150);
    ctx.lineTo(250, 30);
    ctx.setStrokeStyle('#AAAAAA');
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.quadraticCurveTo(30, 150, 250, 25);
    ctx.setStrokeStyle('black');
    ctx.stroke();

    ctx.draw();

    ctx.strokeRect(15, 15, 30, 25);
    ctx.scale(3, 3);
    ctx.strokeRect(15, 15, 30, 25);
    ctx.scale(3, 3);
    ctx.strokeRect(15, 15, 30, 25);

    ctx.draw();

    ctx.strokeRect(200, 20, 180, 150);
    ctx.rotate(30 * Math.PI / 180);
    ctx.strokeRect(200, 20, 180, 150);
    ctx.rotate(30 * Math.PI / 180);
    ctx.strokeRect(200, 20, 180, 150);

    ctx.draw();

    ctx.strokeRect(20, 20, 250, 80);
    ctx.translate(30, 30);
    ctx.strokeRect(20, 20, 250, 80);
    ctx.translate(30, 30);
    ctx.strokeRect(20, 20, 250, 80);

    ctx.draw();

    ctx.setFontSize(14);
    ctx.fillText('14', 20, 20);
    ctx.setFontSize(22);
    ctx.fillText('22', 40, 40);
    ctx.setFontSize(30);
    ctx.fillText('30', 60, 60);
    ctx.setFontSize(38);
    ctx.fillText('38', 90, 90);

    ctx.draw();

    ctx.setFontSize(42);
    ctx.fillText('Hello', 30, 30);
    ctx.fillText('alipay', 200, 200);

    ctx.draw();

    ctx.drawImage('https://img.alicdn.com/tfs/TB1GvVMj2BNTKJjy0FdXXcPpVXa-520-280.jpg', 2, 2, 250, 80);
    ctx.draw();

    ctx.setFillStyle('yellow');
    ctx.fillRect(10, 10, 150, 100);
    ctx.setGlobalAlpha(0.2);
    ctx.setFillStyle('blue');
    ctx.fillRect(50, 50, 150, 100);
    ctx.setFillStyle('red');
    ctx.fillRect(100, 100, 150, 100);

    ctx.draw();

    ctx.setLineDash([5, 15, 25]);
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(400, 100);
    ctx.stroke();

    ctx.draw();

    ctx.rotate(45 * Math.PI / 180);
    ctx.setFillStyle('red');
    ctx.fillRect(70, 0, 100, 30);

    ctx.transform(1, 1, 0, 1, 0, 0);
    ctx.setFillStyle('#000');
    ctx.fillRect(0, 0, 100, 100);

    ctx.draw();

    ctx.rotate(45 * Math.PI / 180);
    ctx.setFillStyle('red');
    ctx.fillRect(70, 0, 100, 30);

    ctx.setTransform(1, 1, 0, 1, 0, 0);
    ctx.setFillStyle('#000');
    ctx.fillRect(0, 0, 100, 100);

    ctx.draw();

    ctx.save();
    ctx.setFillStyle('red');
    ctx.fillRect(20, 20, 250, 80);

    ctx.restore();
    ctx.fillRect(60, 60, 155, 130);

    ctx.draw();

    ctx.setFillStyle('blue');
    ctx.fillRect(20, 20, 180, 80);
    ctx.draw();
    ctx.fillRect(60, 60, 250, 120);
    ctx.draw(true);

    ctx.font = 'italic bold 50px cursive';
    const { width } = ctx.measureText('hello world');
    console.log(width);
})();

(() => {
    // https://docs.alipay.com/mini/api/ui-map
    Page({
        onReady() {
            // 使用 my.createMapContext 获取 map 上下文
            this.mapCtx = my.createMapContext('userMap');
        },
        getCenterLocation(this: my.Page) {
            (this.mapCtx as my.MapContext).getCenterLocation({
                success(res) {
                    console.log(res.longitude);
                    console.log(res.latitude);
                }
            });
        },
        moveToLocation() {
            this.mapCtx.moveToLocation();
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/ui-hidekeyboard
    my.hideKeyboard();
})();

(() => {
    // https://docs.alipay.com/mini/api/scroll
    my.pageScrollTo({
        scrollTop: 100
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/selector-query
    Page({
        onReady() {
            my.createSelectorQuery()
                .select('#non-exists').boundingClientRect()
                .select('#one').boundingClientRect()
                .selectAll('.all').boundingClientRect()
                .select('#scroll').scrollOffset()
                .selectViewport().boundingClientRect()
                .selectViewport().scrollOffset().exec((ret) => {
                    console.log(JSON.stringify(ret, null, 2));
                });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/ewdxl3
    my.multiLevelSelect({
        title: 'nihao', // 级联选择标题
        list: [
            {
                name: "杭州市", // 条目名称
                subList: [
                    {
                        name: "西湖区",
                        subList: [
                            {
                                name: "古翠街道"
                            },
                            {
                                name: "文新街道"
                            }
                        ]
                    },
                    {
                        name: "上城区",
                        subList: [
                            {
                                name: "延安街道"
                            },
                            {
                                name: "龙翔桥街道"
                            }
                        ]
                    }
                ]// 级联子数据列表
            }
        ]// 级联数据列表
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/openapi-authorize
    my.getAuthCode({
        scopes: 'auth_user',
        success: (res) => {
            my.alert({
                content: res.authCode,
            });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/userinfo
    my.getAuthCode({
        scopes: 'auth_user',
        success: (res) => {
            my.getAuthUserInfo({
                success: (userInfo) => {
                    my.alert({
                        content: userInfo.nickName
                    });
                    my.alert({
                        content: userInfo.avatar
                    });
                }
            });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/openapi-pay
    my.tradePay({
        tradeNO: '201711152100110410533667792', // 调用统一收单交易创建接口（alipay.trade.create），获得返回字段支付宝交易号trade_no
        success: (res) => {
            my.alert({
                content: JSON.stringify(res),
            });
        },
        fail: (res) => {
            my.alert({
                content: JSON.stringify(res),
            });
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/pay-sign
    my.paySignCenter({
        // tslint:disable-next-line:max-line-length
        signStr: 'biz_content%3D%257B%2522access_params%2522%253A%257B%2522channel%2522%253A%2522ALIPAYAPP%2522%257D%252C%2522external_agreement_no%2522%253A%2522xidong___2317%2522%252C%2522external_logon_id%2522%253A%252213852852877%2522%252C%2522personal_product_code%2522%253A%2522GENERAL_WITHHOLDING_P%2522%252C%2522product_code%2522%253A%2522GENERAL_WITHHOLDING%2522%252C%2522sign_scene%2522%253A%2522INDUSTRY%257CCARRENTAL%2522%252C%2522third_party_type%2522%253A%2522PARTNER%2522%257D%26sign%3Df3pjBDTRftOwXWnCqAMAnkBfGTFlcMmZI8hEgmV6uREZRXVDuLsSjD8WO%252FeZ1fjDG8GqVO9t1AN7q6yCUHKX%252Bw%252FE7efXwpVDWldr4iVuXDtNd3UJDJUiRJhIm6b73czWacVzm1XIery%252F2DyKI2y08tBf5NNWuQCC3d%252FITxziTl8%253D%26timestamp%3D2017-06-27%2B14%253A44%253A00%26sign_type%3DRSA%26notify_url%3Dhttp%253A%252F%252Fapi.test.alipay.net%252Fatinterface%252Freceive_notify.htm%26charset%3DUTF-8%26app_id%3D2017060101317939%26method%3Dalipay.user.agreement.page.sign%26return_url%3Dhttp%253A%252F%252Fapi.test.alipay.net%252Fatinterface%252Freceive_notify.htm%26version%3D1.0',
        success: (res) => {
            my.alert({
                title: 'success', // alert框的标题
                content: JSON.stringify(res)
            });
        },
        fail: (res) => {
            my.alert({
                title: 'fail', // alert框的标题
                content: JSON.stringify(res)
            });
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/card-voucher-ticket
    my.openCardList();
    my.openMerchantCardList({ partnerId: '2088xxxxx' });
    // 传入passId来打开
    my.openCardDetail({ passId: "11xxxxx" });
    my.openVoucherList();
    my.openMerchantVoucherList({ partnerId: '2088xxxx' });
    // 传入passId来打开
    my.openVoucherDetail({ passId: "20170921" });

    // 传入partnerId 和 serialNumber来打开
    my.openVoucherDetail({
        partnerId: "2018xxxx",
        serialNumber: "20170921"
    });
    // 传入passId来打开
    my.openKBVoucherDetail({ passId: "20170921" });

    // 传入partnerId 和 serialNumber来打开
    my.openKBVoucherDetail({
        partnerId: "2088xxxx",
        serialNumber: "20170921"
    });
    my.openTicketList();
    my.openMerchantTicketList({ partnerId: '2088xxxx' });
    // 传入passId来打开
    my.openTicketDetail({ passId: "20170921" });

    // 传入partnerId 和 serialNumber来打开
    my.openTicketDetail({
        partnerId: "2088xxxx",
        serialNumber: "20170921"
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/add-card-auth
    my.addCardAuth({
        url: '从 openapi 接口获取到的 url',
        success: (res) => {
            my.alert({ content: '授权成功' });
        },
        fail: (res) => {
            my.alert({ content: '授权失败' });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/zm-service
    my.startZMVerify({
        bizNo: 'your-biz-no',
        success: (res) => {
            my.alert({ title: 'success:' + JSON.stringify(res) });
        },
        fail: (res) => {
            my.alert({ title: 'fail: ' + JSON.stringify(res) });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/zmcreditborrow
    my.zmCreditBorrow({
        credit_biz: "",
        out_order_no: "",
        borrow_shop_name: "",
        goods_name: "",
        product_code: "w1010100000000002858",
        rent_unit: "HOUR_YUAN",
        rent_amount: "0.10",
        deposit_amount: "0.50",
        deposit_state: "Y",
        invoke_return_url: "",
        invoke_type: "TINYAPP",
        borrow_time: "2017-04-27 10:01:01",
        expiry_time: "2017-05-27 10:01:01",
        rent_info: "2hour-free",
        success: (res) => {
            try {
                const { resultStatus, result } = res;
                switch (resultStatus) {
                    case '9000':
                        const callbackData = result.callbackData;
                        const decodedCallbackData = decodeURIComponent(callbackData);
                        const json = JSON.parse(decodedCallbackData.match(/{.*}/)!.toString());
                        const jsonStr = JSON.stringify(json, null, 4);
                        if (json.success === true || json.success === 'true') {
                            // 创建订单成功, 此时可以跳转到订单详情页面
                            my.alert({ content: '下单成功: ' + jsonStr });
                        } else {
                            // 创建订单失败, 请提示用户创建失败
                            my.alert({ content: '下单失败: ' + jsonStr });
                        }
                        // (this as any as my.Page).setData({
                        //     callbackData,
                        //     decodedCallbackData,
                        //     parsedJSON: jsonStr,
                        // });
                        break;
                    case '6001':
                        // 用户点击返回, 取消此次服务, 此时可以给提示
                        my.alert({ content: '取消' });
                        break;
                    default:
                        break;
                }
            } catch (error) {
                // 异常, 请在这里提示用户稍后重试
                my.alert({
                    content: '异常' + JSON.stringify(error, null, 4)
                });
            }
        },
        fail: (error) => {
            // 调用接口失败, 请在这里提示用户稍后重试
            my.alert({
                content: '调用失败' + JSON.stringify(error, null, 4)
            });
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/templatemessage
})();

(() => {
    // https://docs.alipay.com/mini/api/text-identification
    my.textRiskIdentification({
        content: '加我支付宝',
        type: ['keyword', '0', '1', '2', '3'],
        success: (res) => {
            my.alert({
                title: 'ok', // alert 框的标题
                content: JSON.stringify(res),
            });
        },
        fail: (res) => {
            my.alert({
                title: 'fail', // alert 框的标题
                content: JSON.stringify(res),
            });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/open-miniprogram
    my.navigateToMiniProgram({
        appId: 'xxxx',
        extraData: {
            data1: "test"
        },
        success: (res) => {
            console.log(JSON.stringify(res));
        },
        fail: (res) => {
            console.log(JSON.stringify(res));
        }
    });
    my.navigateBackMiniProgram({
        extraData: {
            data1: "test"
        },
        success: (res) => {
            console.log(JSON.stringify(res));
        },
        fail: (res) => {
            console.log(JSON.stringify(res));
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/webview-context
    Page({
        onLoad() {
            this.webViewContext = my.createWebViewContext('web-view-1');
        },
        // 接收来自H5的消息
        onMessage(e: any) {
            console.log(e); // {'sendToMiniProgram': '0'}
            // 向H5发送消息
            this.webViewContext.postMessage({ sendToWebView: '1' });
        }
    });
    // H5的js代码中需要先定义my.onMessage 用于接收来自小程序的消息。
    my.onMessage = (e) => {
        console.log(e); // {'sendToWebView': '1'}
    };
    // H5想小程序发送消息
    my.postMessage({ sendToMiniProgram: '0' });
})();

(() => {
    // https://docs.alipay.com/mini/api/media-image
    const img = null as any as HTMLImageElement;
    my.chooseImage({
        count: 2,
        success: (res) => {
            img.src = res.apFilePaths[0];
        },
    });
    my.previewImage({
        current: 2,
        urls: [
            'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
            'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
            'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg'
        ],
    });
    my.saveImage({
        url: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg'
    });
    my.compressImage({
        apFilePaths: ['https://resource/apmlcc0ed184daffc5a0d8da86b2f518cf7b.image'],
        // level: 1,
        success: (res) => {
            console.log(JSON.stringify(res));
        }
    });
    // 网络图片路径
    my.getImageInfo({
        src: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        success: (res) => {
            console.log(JSON.stringify(res));
        }
    });

    // apFilePath
    my.chooseImage({
        success: (res) => {
            my.getImageInfo({
                src: res.apFilePaths[0],
                success: (res) => {
                    console.log(JSON.stringify(res));
                }
            });
        },
    });

    // 相对路径
    my.getImageInfo({
        src: 'image/api.png',
        success: (res) => {
            console.log(JSON.stringify(res));
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/storage
    my.setStorage({
        key: 'currentCity',
        data: {
            cityName: '杭州',
            adCode: '330100',
            spell: ' hangzhou',
        },
        success() {
            my.alert({ content: '写入成功' });
        }
    });
    my.setStorageSync({
        key: 'currentCity',
        data: {
            cityName: '杭州',
            adCode: '330100',
            spell: ' hangzhou',
        }
    });
    my.getStorage({
        key: 'currentCity',
        success(res) {
            my.alert({ content: '获取成功：' + res.data.cityName });
        },
        fail(res) {
            my.alert({ content: res.errorMessage });
        }
    });
    const res = my.getStorageSync({ key: 'currentCity' });
    my.alert({
        content: JSON.stringify(res.data),
    });
    my.removeStorage({
        key: 'currentCity',
        success() {
            my.alert({ content: '删除成功' });
        }
    });
    my.removeStorageSync({
        key: 'currentCity',
    });
    my.clearStorage();
    my.clearStorageSync();
    my.getStorageInfo({
        success(res) {
            console.log(res.keys);
            console.log(res.currentSize);
            console.log(res.limitSize);
        }
    });
    const res1 = my.getStorageInfoSync();
    console.log(res1.keys);
    console.log(res1.currentSize);
    console.log(res1.limitSize);
})();

(() => {
    // https://docs.alipay.com/mini/api/file
    my.chooseImage({
        success: (res) => {
            my.saveFile({
                apFilePath: res.apFilePaths[0],
                success: (res) => {
                    console.log(JSON.stringify(res));
                },
            });
        },
    });
    my.getFileInfo({
        apFilePath: 'https://resource/apml953bb093ebd2834530196f50a4413a87.video',
        digestAlgorithm: 'sha1',
        success: (res) => {
            console.log(JSON.stringify(res));
        }
    });
    my.getSavedFileInfo({
        apFilePath: 'https://resource/apml953bb093ebd2834530196f50a4413a87.video',
        success: (res) => {
            console.log(JSON.stringify(res));
        }
    });
    my.getSavedFileList({
        success: (res) => {
            console.log(JSON.stringify(res));
        }
    });
    my.getSavedFileList({
        success: (res) => {
            my.removeSavedFile({
                apFilePath: res.fileList[0].apFilePath,
                success: (res) => {
                    console.log('remove success');
                }
            });
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/location
    my.getLocation({
        success(res) {
            my.hideLoading();
            console.log(res);
            /* that对象为Page可以设置数据刷新界面
            that.setData({
              hasLocation: true,
              location: formatLocation(res.longitude, res.latitude)
            })
            */
        },
        fail() {
            my.hideLoading();
            my.alert({ title: '定位失败' });
        },
    });
    my.openLocation({
        longitude: '121.549697',
        latitude: '31.227250',
        name: '支付宝',
        address: '杨高路地铁站',
    });
    my.chooseLocation({
        success: (res) => {
            console.log(res);
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/network
    my.httpRequest({
        url: 'http://httpbin.org/post',
        method: 'POST',
        data: {
            from: '支付宝',
            production: 'AlipayJSAPI',
        },
        dataType: 'json',
        success(res) {
            my.alert({ content: 'success' });
        },
        fail(res) {
            my.alert({ content: 'fail' });
        },
        complete(res) {
            my.hideLoading();
            my.alert({ content: 'complete' });
        }
    });
    my.uploadFile({
        url: '请使用自己服务器地址',
        fileType: 'image',
        fileName: 'file',
        filePath: '...',
        success: (res) => {
            my.alert({
                content: '上传成功'
            });
        },
    });
    my.downloadFile({
        url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
        success({ apFilePath }) {
            my.previewImage({
                urls: [apFilePath],
            });
        },
        fail(res) {
            my.alert({
                content: res.errorMessage || res.error,
            });
        },
    });
    my.connectSocket({
        url: 'test.php',
        data: {},
        header: {
            'content-type': 'application/json'
        },
        method: 'GET'
    });
    my.connectSocket({
        url: 'test.php',
    });

    my.onSocketOpen(() => {
        console.log('WebSocket 连接已打开！');
    });
    Page({
        onLoad() {
            this.callback = this.callback.bind(this);
            my.onSocketOpen(this.callback);
        },
        onUnload() {
            my.offSocketOpen(this.callback);
        },
        callback() {
        },
    });
    my.connectSocket({
        url: '开发者的服务器地址'
    });

    my.onSocketOpen(() => {
        console.log('WebSocket 连接已打开！');
    });

    my.onSocketError(() => {
        console.log('WebSocket 连接打开失败，请检查！');
    });
    Page({
        onLoad() {
            this.callback = this.callback.bind(this);
            my.onSocketError(this.callback);
        },
        onUnload() {
            my.offSocketError(this.callback);
        },
        callback() {
            my.sendSocketMessage({
                data: this.data.toSendMessage, // 需要发送的内容
                success: (res) => {
                    my.alert({ content: '数据发送！' + this.data.toSendMessage });
                },
            });
        },
    });
    my.connectSocket({
        url: '服务器地址'
    });

    my.onSocketMessage((res) => {
        console.log('收到服务器内容：' + res.data);
    });
    my.onSocketOpen(() => {
        my.closeSocket();
    });

    my.onSocketClose(() => {
        console.log('WebSocket 已关闭！');
    });
    Page({
        // onLoad() {
        onLaunch() {
            // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
            my.onSocketClose(() => {
                my.alert({ content: '连接已关闭！' });
                this.setData({
                    sendMessageAbility: false,
                    closeLinkAbility: false,
                });
            });
            // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
            my.onSocketOpen(() => {
                my.alert({ content: '连接已打开！' });
                this.setData({
                    sendMessageAbility: true,
                    closeLinkAbility: true,
                });
            });

            my.onSocketError((res) => {
                my.alert({ content: 'WebSocket 连接打开失败，请检查！' + res });
            });

            // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
            my.onSocketMessage((res) => {
                my.alert({ content: '收到数据！' + JSON.stringify(res) });
            });
        },
        connect_start() {
            my.connectSocket({
                url: '服务器地址', // 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
                success: (res) => {
                    my.showToast({
                        content: 'success', // 文字内容
                    });
                },
                fail: () => {
                    my.showToast({
                        content: 'fail', // 文字内容
                    });
                }
            });
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/can-i-use
    my.canIUse('getFileInfo');
    my.canIUse('closeSocket.object.code');
    my.canIUse('getLocation.object.type');
    my.canIUse('getSystemInfo.return.brand');
    my.canIUse('lifestyle');
    my.canIUse('button.open-type.share');
})();

(() => {
    // https://docs.alipay.com/mini/api/sdk-version
    console.log(my.SDKVersion);
})();

(() => {
    // https://docs.alipay.com/mini/api/system-info
    Page({
        data: {
            systemInfo: {}
        },
        getSystemInfoPage(this: my.Page) {
            my.getSystemInfo({
                success: (res) => {
                    this.setData({
                        systemInfo: res
                    });
                }
            });
        },
    });
    Page({
        data: {
            systemInfo: {}
        },
        getSystemInfoSyncPage(this: my.Page) {
            this.setData({
                systemInfo: my.getSystemInfoSync()
            });
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/network-status
    Page({
        data: {
            hasNetworkType: false
        },
        getNetworkType(this: my.Page) {
            my.getNetworkType({
                success: (res) => {
                    this.setData({
                        hasNetworkType: true,
                        networkType: res.networkType
                    });
                }
            });
        },
        clear(this: my.Page) {
            this.setData({
                hasNetworkType: false,
                networkType: ''
            });
        },
    });
    my.onNetworkStatusChange((res) => {
        console.log(JSON.stringify(res));
    });
    my.offNetworkStatusChange();
})();

(() => {
    // https://docs.alipay.com/mini/api/clipboard
    Page({
        data: {
            text: '3.1415926',
            copy: '',
        },

        handlePaste(this: my.Page) {
            my.getClipboard({
                success: ({ text }) => {
                    this.setData({ copy: text });
                },
            });
        },
    });
    Page({
        data: {
            text: '3.1415926',
            copy: '',
        },

        handleCopy() {
            my.setClipboard({
                text: this.data.text,
            });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/shake
    Page({
        watchShake() {
            my.watchShake({
                success() {
                    console.log('动起来了');
                    my.alert({ title: '动起来了 o.o' });
                }
            });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/vibrate
    Page({
        vibrate() {
            my.vibrate({
                success: () => {
                    my.alert({ title: '震动起来了' });
                }
            });
        },
    });
    Page({
        vibrateLong() {
            my.vibrateLong({
                success: () => {
                    my.alert({ title: '震动起来了' });
                }
            });
        },
    });
    Page({
        vibrateShort() {
            my.vibrateShort({
                success: () => {
                    my.alert({ title: '震动起来了' });
                }
            });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/macke-call
    Page({
        makePhoneCall() {
            my.makePhoneCall({ number: '95888' });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/get-server-time
    // getServerTime(){
    //     my.getServerTime({
    //         success: (res) => {
    //             my.alert({
    //                 title: res.time,
    //             });
    //         },
    //     });
    // };
})();

(() => {
    // https://docs.alipay.com/mini/api/user-capture-screen
    my.onUserCaptureScreen(() => {
        my.alert({
            content: '收到用户截屏事件'
        });
    });
    my.offUserCaptureScreen();
})();

(() => {
    // https://docs.alipay.com/mini/api/screen-brightness
    my.setKeepScreenOn({
        keepScreenOn: true,
        success: (res) => {
        },
        fail: (res) => {
        },
    });
    my.getScreenBrightness({
        success: (res) => {
            console.log(JSON.stringify(res));
        },
        fail: (res) => {
        },
    });
    my.setScreenBrightness({
        brightness: 0.5,
        success: (res) => {
            console.log(JSON.stringify(res));
        },
        fail: (res) => {
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/show-auth-guide
    my.showAuthGuide({
        authType: 'LBSSERVICE'
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/scan
    Page({
        scan() {
            my.scan({
                type: 'qr',
                success: (res) => {
                    my.alert({ title: res.code });
                },
            });
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/bluetooth-intro
    // 初始化
    my.openBluetoothAdapter({
        success: (res) => {
            console.log(res);
        }
    });
    // 注册发现事件
    my.onBluetoothDeviceFound({
        success: (res) => {
            const device = res.devices[0];
            // 连接发现的设备
            my.connectBLEDevice({
                deviceId,
                success: (res) => {
                    console.log(res);
                },
                fail: (res) => {
                },
                complete: (res) => {
                }
            });
            // 停止搜索
            my.stopBluetoothDevicesDiscovery({
                success: (res) => {
                    console.log(res);
                },
                fail: (res) => {
                },
                complete: (res) => {
                }
            });
        }
    });
    const deviceId = 'test';
    const serviceId = 'test';
    const characteristicId = 'test';
    // 注册连接事件
    my.onBLEConnectionStateChanged({
        success: (res) => {
            console.log(res);
            if (res.connected) {
                // 开始读写notify等操作
                my.notifyBLECharacteristicValueChange({
                    deviceId,
                    serviceId,
                    characteristicId,
                    success: (res) => {
                        console.log(res);
                    },
                    fail: (res) => {
                    },
                    complete: (res) => {
                    }
                });
            }
        }
    });
    // 注册接收read或notify的数据
    my.onBLECharacteristicValueChange({
        success: (res) => {
            console.log(res);
        }
    });
    // 开始搜索
    my.startBluetoothDevicesDiscovery({
        services: ['fff0'],
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });

    // 断开连接
    my.disconnectBLEDevice({
        deviceId,
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });

    // 注销事件
    my.offBluetoothDeviceFound();
    my.offBLEConnectionStateChanged();
    my.offBLECharacteristicValueChange();

    // 退出蓝牙模块
    my.closeBluetoothAdapter({
        success: (res) => {
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/bluetooth-api
    my.openBluetoothAdapter({
        success: (res) => {
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.closeBluetoothAdapter({
        success: (res) => {
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.getBluetoothAdapterState({
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.startBluetoothDevicesDiscovery({
        services: ['fff0'],
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.stopBluetoothDevicesDiscovery({
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.getBluetoothDevices({
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.getConnectedBluetoothDevices({
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    const deviceId = 'test';
    const serviceId = 'test';
    const characteristicId = 'test';
    my.connectBLEDevice({
        // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
        deviceId,
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.disconnectBLEDevice({
        deviceId,
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.writeBLECharacteristicValue({
        deviceId,
        serviceId,
        characteristicId,
        value: 'fffe',
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.readBLECharacteristicValue({
        deviceId,
        serviceId,
        characteristicId,
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.notifyBLECharacteristicValueChange({
        deviceId,
        serviceId,
        characteristicId,
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.getBLEDeviceServices({
        deviceId,
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    my.getBLEDeviceCharacteristics({
        deviceId,
        serviceId,
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });
    Page({
        onLoad() {
            this.callback = this.callback.bind(this);
            my.onBluetoothDeviceFound(this.callback);
        },
        onUnload() {
            my.offBluetoothDeviceFound(this.callback);
        },
        callback(res: any) {
            console.log(res);
        },
    });
    my.offBluetoothDeviceFound();
    Page({
        onLoad() {
            this.callback = this.callback.bind(this);
            my.onBLECharacteristicValueChange(this.callback);
        },
        onUnload() {
            my.offBLECharacteristicValueChange(this.callback);
        },
        callback(res: any) {
            console.log(res);
        },
    });
    my.offBLECharacteristicValueChange();
    my.offBLEConnectionStateChanged();
    my.offBluetoothAdapterStateChange();
})();

(() => {
    // https://docs.alipay.com/mini/api/yqleyc
    my.startBeaconDiscovery({
        uuids: ['uuid1', 'uuid2'],
        success: (res) => {
            console.log(res);
        },
        fail: () => {
        },
        complete: () => {
        }
    });

    my.stopBeaconDiscovery({
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });

    my.getBeacons({
        success: (res) => {
            console.log(res);
        },
        fail: (res) => {
        },
        complete: (res) => {
        }
    });

    my.onBeaconUpdate({
        success: (res) => {
        },
    });

    my.onBeaconServiceChange({
        success: (res) => {
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/data-safe
    Page({
        data: {
            inputValue: '',
            outputValue: '',
        },
        onInput(this: my.Page, e: any) {
            this.setData({ inputValue: e.detail.value });
        },
        onEncrypt(this: my.Page) {
            my.rsa({
                action: 'encrypt',
                // 设置公钥
                // tslint:disable-next-line:max-line-length
                key: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKmi0dUSVQ04hL6GZGPMFK8+d6\nGzulagP27qSUBYxIJfE04KT+OHVeFFb6K+8nWDea5mkmZrIgp022zZVDgdWPNM62\n3ouBwHlsfm2ekey8PpQxfXaj8lhM9t8rJlC4FEc0s8Qp7Q5/uYrowQbT9m6t7BFK\n3egOO2xOKzLpYSqfbQIDAQAB',
                text: this.data.inputValue,
                success: (result) => {
                    this.setData({ outputValue: result.text });
                },
                fail(e) {
                    my.alert({
                        content: e.errorMessage || e.error,
                    });
                },
            });
        },
        onDecrypt(this: my.Page) {
            my.rsa({
                action: 'decrypt',
                text: this.data.inputValue,
                // 设置私钥
                // tslint:disable-next-line:prefer-template
                key: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMqaLR1RJVDTiEvo\n' +
                    'ZkY8wUrz53obO6VqA/bupJQFjEgl8TTgpP44dV4UVvor7ydYN5rmaSZmsiCnTbbN\n' +
                    'lUOB1Y80zrbei4HAeWx+bZ6R7Lw+lDF9dqPyWEz23ysmULgURzSzxCntDn+5iujB\n' +
                    'BtP2bq3sEUrd6A47bE4rMulhKp9tAgMBAAECgYBjsfRLPdfn6v9hou1Y2KKg+F5K\n' +
                    'ZsY2AnIK+6l+sTAzfIAx7e0ir7OJZObb2eyn5rAOCB1r6RL0IH+MWaN+gZANNG9g\n' +
                    'pXvRgcZzFY0oqdMZDuSJjpMTj7OEUlPyoGncBfvjAg0zdt9QGAG1at9Jr3i0Xr4X\n' +
                    '6WrFhtfVlmQUY1VsoQJBAPK2Qj/ClkZNtrSDfoD0j083LcNICqFIIGkNQ+XeuTwl\n' +
                    '+Gq4USTyaTOEe68MHluiciQ+QKvRAUd4E1zeZRZ02ikCQQDVscINBPTtTJt1JfAo\n' +
                    'wRfTzA0Lvgig136xLLeQXREcgq1lzgkf+tGyUGYoy9BXsV0mOuYAT9ldja4jhJeq\n' +
                    'cEulAkEAuSJ5KjV9dyb0RIFAz5C8d8o5KAodwaRIxJkPv5nCZbT45j6t9qbJxDg8\n' +
                    'N+vghDlHI4owvl5wwVlAO8iQBy8e8QJBAJe9CVXFV0XJR/n/XnER66FxGzJjVi0f\n' +
                    '185nOlFARI5CHG5VxxT2PUCo5mHBl8ctIj+rQvalvGs515VQ6YEVDCECQE3S0AU2\n' +
                    'BKyFVNtTpPiTyRUWqig4EbSXwjXdr8iBBJDLsMpdWsq7DCwv/ToBoLg+cQ4Crc5/\n5DChU8P30EjOiEo=',
                success: (result) => {
                    this.setData({ outputValue: result.text });
                },
                fail(e) {
                    my.alert({
                        content: e.errorMessage || e.error,
                    });
                },
            });
        },
    });
})();

(() => {
    // https://docs.alipay.com/mini/api/share_app
    Page({
        onShareAppMessage() {
            return {
                title: '小程序示例',
                desc: '小程序官方示例Demo，展示已支持的接口能力及组件。',
                path: 'page/component/component-pages/view/view?param=123'
            };
        },
    });

    my.hideShareMenu();
})();

(() => {
    // https://docs.alipay.com/mini/api/report
    my.reportAnalytics('purchase', {
        status: 200,
        reason: 'ok'
    });
})();
