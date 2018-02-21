export declare type AutoSizeType = 'pad' | 'fit' | 'none';
export declare type AutoSize = AutoSizeType | {
    type: AutoSizeType;
    resize?: boolean;
    contains?: 'content' | 'padding';
};
