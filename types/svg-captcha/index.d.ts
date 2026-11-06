export interface CaptchaObj {
    /** 验证码文本答案 */
    text: string;
    /** SVG 字符串内容 */
    data: string;
}

export interface CreateOptions {
    /** 验证码字符数量，默认 4 */
    size?: number;
    /** 干扰线条数，默认 1 */
    noise?: number;
    /** 验证码字符颜色，默认 false */
    color?: boolean;
    /** 背景颜色，例如 '#f3f4f6' */
    background?: string;
    /** 排除易混淆字符，例如 '0o1il' */
    ignoreChars?: string;
    /** 字体大小 */
    fontSize?: number;
    /** 图片宽度 */
    width?: number;
    /** 图片高度 */
    height?: number;
}

export interface MathExprOptions {
    /** 最小数值，默认 1 */
    mathMin?: number;
    /** 最大数值，默认 9 */
    mathMax?: number;
    /** 运算符，支持 '+' '-' '*'，默认 '+' */
    mathOperator?: string;
    /** 干扰线条数 */
    noise?: number;
    /** 是否彩色 */
    color?: boolean;
    /** 背景颜色 */
    background?: string;
}

/**
 * 生成字符型验证码
 */
export function create(options?: CreateOptions): CaptchaObj;

/**
 * 生成算术表达式验证码
 */
export function createMathExpr(options?: MathExprOptions): CaptchaObj;
