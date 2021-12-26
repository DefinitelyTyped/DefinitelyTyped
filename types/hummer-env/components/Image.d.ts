interface Image extends HummerComponent {
    style: import('../interface/style').imageStyle;
    /**
     * this.src = "test"; // Native资源图片
     * this.src = '/sdcard/test.png'; // 绝对路径图片（手机设备路径）
     * this.src = require('../res/test.png'); // 相对路径图片（工程目录）
     * this.src = './images/test.png'; // 相对路径图片（编译产物目录）
     * this.src = 'http://xxx/test.jpg'; // 网络图片
     * this.src = '//xxx/test.jpg'; // 网络图片简写（默认加https:）
     * this.src = 'data:application/json;charset=utf-8;base64,iVBO...'; // base64图片
     */
    src: string;
    gifSrc: string;
    /**
     * gifRepeatCount must set before gifSrc
     * gif play time count default = 0
     */
    gifRepeatCount: number;

    // method
    load(src: string | import('../interface/info').imageStyle, cb: (srcType: number, isSuccess: boolean) => void): void;
}
declare const Image: {
    prototype: Image;
    new (): Image;
};
