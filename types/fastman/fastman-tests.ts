import alert from 'fastman/alertman';
import actionSheet from 'fastman/actionsheetman';
import { blankPage } from 'fastman/blankpageman';
import cascadePicker from 'fastman/cascadepickerman';
import confirm from 'fastman/confirmman';
import datetimepicker from 'fastman/datetimepickerman';
import { upload } from 'fastman/fileuploadman';
import { validate, validateExtend } from 'fastman/formvalidateman';
import { showLoading, hideLoading } from 'fastman/loadingman';
import { defaults, openModal, closeModal } from 'fastman/modalman';
import passGuard from 'fastman/passguardman';
import picker from 'fastman/pickerman';
import { initInfiniteScroll, infiniteRefresh, infiniteScrollDone } from 'fastman/scrollman-infiniteRefresh';
import { initScroller, refreshScroller, scrollTop } from 'fastman/scrollman';
import { tabEvent, tabSwitch } from 'fastman/tabman';
import { tip, closeTip } from 'fastman/tipman';
import { toast, closeToast } from 'fastman/toastman';

// for alertman test
() => alert('I am content !');
alert('I am content !', 'Hi~ FastMan');
() => alert('I am content !', _ => alert('callback success !'));
alert('I am content !', 'Hi~ SlowMan', _ => alert('callback success too !'));

// for actionsheetman test
const buttons1 = [
    {
        text: 'Please select',
        label: true
    },
    {
        text: 'Sell',
        bold: true,
        color: 'danger',
        onClick: function() {
        }
    },
    {
        text: 'Buy',
        onClick: function() {
        }
    },
    {
        text: 'Dont close',
        close: false,
        bg: 'danger',
        onClick: function() {
        }
    },
    {
        text: 'Disabled',
        close: false,
        disabled: true
    }
];
const buttons2 = [
    {
        text: 'Cancel',
    }
];
actionSheet([buttons1, buttons2]);

// for blankpageman test
() => {
    const instance = blankPage({
        title: '图标和文字根据容器相对大小而变大',
        icon: 'loadError',
        container: '#blankpage1',
        button: true,
        buttonText: '点我试试',
        fontScale: 0.7,
    });
    instance.on('blankPage:action', function(e) {
        alert('注册事件被点击！');
    });
    const instance2 = blankPage({
        title: '图标和文字根据容器相对大小而变小',
        icon: 'loadError',
        container: '#blankpage2',
        button: true,
        buttonText: '点我试试',
        fontScale: 1.2,
        iconScale: 1.2,
    });
    instance2.on('blankPage:action', function(e) {
        alert('另一个注册事件被点击！');
    });
    blankPage({
        title: '仅显示图标和文字',
        icon: 'loadError',
        container: '#blankpage3',
        button: false,
    });
    blankPage({
        title: '',
        icon: 'loadError',
        container: '#blankpage4',
        button: false,
        iconScale: 2,
    });
    blankPage({
        title: '只有文字，没有图标和按钮',
        icon: 'none',
        container: '#blankpage5',
        button: false,
        fontScale: 2.5,
    });
};

// for cascadepickerman.d test
() => {
    cascadePicker('#cascade3PickerSelect', {
        data: [
            {
                name: '广东',
                value: 's1',
                sub: [
                    {
                        name: '广州',
                        value: 's1-1',
                        sub: [
                            {
                                name: '越秀区',
                                value: 's1-1-1',
                            },
                            {
                                name: '荔湾区',
                                value: 's1-1-2',
                            },
                        ],
                    },
                    {
                        name: '深圳',
                        value: 's1-2',
                        sub: [
                            {
                                name: '福田区',
                                value: 's1-2-1',
                            }
                        ],
                    }
                ]
            },
            {
                name: '辽宁',
                value: 's2',
                sub: [
                    {
                        name: '沈阳',
                        value: 's2-1',
                        sub: [
                            {
                                name: '沈阳区',
                                value: 's2-1-1',
                            },
                            {
                                name: '皇姑区',
                                value: 's2-1-2',
                            },
                            {
                                name: '和平区',
                                value: 's2-1-3',
                            },
                        ],
                    },
                    {
                        name: '大连',
                        value: 's2-2',
                        sub: [
                            {
                                name: '西岗区',
                                value: 's2-2-1',
                            },
                            {
                                name: '中山区',
                                value: 's2-2-2',
                            },
                        ],
                    }
                ]
            },
        ],
        formatValue: function(picker, value, displayValue) {
            return displayValue;
        }
    });
    cascadePicker('#cascade2PickerSelect', {
        data: [
            {
                name: '上海',
                value: 's1',
                sub: [
                    {
                        name: '黄浦区',
                        value: 's1-1',
                    },
                    {
                        name: '静安区',
                        value: 's1-2',
                    }
                ]
            },
            {
                name: '北京',
                value: 's2',
                sub: [
                    {
                        name: '东城区',
                        value: 's2-1',
                    },
                    {
                        name: '朝阳区',
                        value: 's2-2',
                    }
                ]
            },
        ],
        formatValue: function(picker, value, displayValue) {
            return displayValue;
        }
    });
    cascadePicker('#cascadePickerSelect', {
        data: [
            {
                name: '上海',
                value: 's1',
                sub: [
                    {
                        name: '黄浦区',
                        value: 's1-1',
                    },
                    {
                        name: '静安区',
                        value: 's1-2',
                    }
                ]
            },
            {
                name: '辽宁',
                value: 's2',
                sub: [
                    {
                        name: '沈阳',
                        value: 's2-1',
                        sub: [
                            {
                                name: '沈阳区',
                                value: 's2-1-1',
                            },
                            {
                                name: '皇姑区',
                                value: 's2-1-2',
                            },
                            {
                                name: '和平区',
                                value: 's2-1-3',
                            },
                        ],
                    },
                    {
                        name: '大连',
                        value: 's2-2',
                    }
                ]
            },
        ],
        formatValue: function(picker, value, displayValue) {
            return displayValue;
        }
    });
};

// for confirmman test
() => confirm('I am content !', _ => alert('you clicked ok !'));
() => confirm('I am content !', _ => alert('you clicked ok !'), _ => alert('you clicked cancel !'));
() => confirm('I am content !', 'I am title !', _ => alert('you clicked ok !'));
() => confirm('I am content !', 'I am title !', _ => alert('you clicked ok !'), _ => alert('you clicked cancel !'));

// for datetimepickerman test
() => {
    datetimepicker('#birthday', {
        value: ['1990', '01', '01']
    }, false);
};

// for fileuploadman test
const file = new File(["foo"], "foo.txt", {
    type: "text/plain",
});
upload(file, {
    quality: 0.5
});

// for formvalidateman test
() => {
    validateExtend({
        mobile: {
            required: true,
            pattern: /^0?1[3|4|5|8][0-9]\d{8}$/,
            descriptions: {
                required: '请输入手机号码',
                pattern: '您输入的手机号码格式不正确'
            }
        }
    });
    validate('#testForm', {
        conditional: {
            confirmpwd: _ => {}
        },
        descriptions: {
            username: {
                required: '请输入用户名'
            },
            password: {
                required: '请输入密码'
            },
            confirmpassword: {
                required: '请再次输入密码',
                conditional: '两次密码输入不一致'
            },
            age: {
                required: '请输入年龄',
                pattern: '您输入的年龄格式不正确'
            },
            address: {
                required: '请选择地址'
            },
            intro: {
                required: '请输入个人介绍'
            },
            sex: {
                required: '请选择性别'
            },
            favourite: {
                required: '请选择个人爱好（可多选）'
            }
        },
        valid: (e, options) => alert('验证通过 !')
    });
};

// for loadingman test
() => {
    showLoading();
    hideLoading();
};

// for modalman test
const html = $(`<div></div>`);
openModal(html);
closeModal(html);
console.log(defaults.modalContainer);

// for passguardman test
passGuard({
    keyboardType: 1,
    mixPromise: function() {
        return Promise.resolve([]);
    },
    onPressed: _ => {}
});

// for pickerman test
() => {
    picker(`#singleSelect`, {
        value: ['IronMan'],
        cols: [
            {
                textAlign: 'center',
                values: ['FastMan', 'SuperMan', 'SpiderMan', 'IronMan', 'BatMan']
            }
        ],
        onChange: function(picker, value, displayValue) {
        }
    });
    const _toolbarTemplate = '<header class="bar bar-nav">\
                            <button class="button button-link pull-left">自定义按钮</button>\
                            <button class="button button-link pull-right close-picker">关闭</button>\
                            <h1 class="title">框架选择</h1>\
                            </header>';
    picker(`#singleSelectWithToolBar`, {
        toolbarTemplate: _toolbarTemplate,
        cols: [
            {
                textAlign: 'center',
                values: ['FastMan', 'React', 'Vue', 'Angular', 'Redux', 'Flux', 'ImmutableData']
            }
        ]
    });
    const _toolbarTemplate_ = '<header class="bar bar-nav">\
                            <button class="button button-link pull-right close-picker">确定</button>\
                            <h1 class="title">请选择称呼</h1>\
                            </header>';
    picker(`#multiSelect`, {
        toolbarTemplate: _toolbarTemplate_,
        cols: [
            {
                textAlign: 'center',
                values: ['赵', '钱', '孙', '李', '周', '吴', '郑', '王'],
                displayValues: ['赵', '钱', '孙', '李', '周', '吴', '郑', '王']
            },
            {
                textAlign: 'center',
                values: ['杰伦', '近平', '大浪', '小明', '一凡', '莎莎', '宝儿']
            },
            {
                textAlign: 'center',
                values: ['先生', '小姐']
            }
        ]
    });
    picker(`#3dSelect`, {
        rotateEffect: true,
        cols: [
            {
                textAlign: 'center',
                values: ['苹果', '香蕉', '橘子', '芒果', '西瓜']
            }
        ]
    });
};

// for scrollman-infiniteRefresh test
initInfiniteScroll('#infiniteScroller');
infiniteRefresh(function(e) {
    infiniteScrollDone();
});

// for scrollman test
initScroller('#nativeScroller', {
    type: 'native'
});
refreshScroller('#fileUploadScroller');
refreshScroller();
scrollTop('#fileUploadScroller', 0);

// for tabman test
tabEvent('tab2', _ => alert('您点击了第二个选项卡 !'));
tabSwitch('tab3');

// for tipman test
() => tip({
    content: 'I will disappear after 1s !',
    stayTime: 1000
});
() => tip({
    content: 'i am red background !',
    stayTime: 1000,
    extraclass: 'redBg'
});
() => {
    const tipInstance = tip({
        content: 'I will never disappear !',
        stayTime: 99999999
    });
    closeTip(tipInstance);
};

// for toastman test
() => toast('I am msg of toast !');
() => toast('I will disappear after 5s !', 5000);
() => toast('I am red of background !', 'redBg');
() => {
    const toastInstance = toast('I will never disappear !', 99999999);
    closeToast(toastInstance);
};
