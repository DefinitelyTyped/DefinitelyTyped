export interface DicItem extends Record<string, any> {
    label?: string;
    value?: any;
    display?: boolean;
    disabled?: boolean;
    children?: DicItem[];
}

export interface DicProps {
    /** 选项标签为选项对象的某个属性值 */
    label?: string;
    /** 选项的值为选项对象的某个属性值 */
    value?: string;
    /** 选项的子选项为选项对象的某个属性值 */
    children?: string;
    /** 选项的禁用为选项对象的某个属性值 */
    disabled?: string;
    /** 选项返回结构的层级(例如data.data) */
    res?: string;
}
