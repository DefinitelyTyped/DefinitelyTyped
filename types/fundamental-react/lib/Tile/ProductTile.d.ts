export type ProductTileProps = {
    className?: string;
    disabled?: boolean;
} & { [x: string]: any };

export type ProductTileMediaProps = {
    /* URL of the image. */
    image: string;
    className?: string;
} & { [x: string]: any };

export type ProductTileContentProps = {
    className?: string;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    title?: string;
    titleProps?: { [x: string]: any };
} & { [x: string]: any };

declare const ProductTile: React.FunctionComponent<ProductTileProps> & {
    Content: React.FunctionComponent<ProductTileContentProps>;
    Media: React.FunctionComponent<ProductTileMediaProps>;
};

export default ProductTile;
