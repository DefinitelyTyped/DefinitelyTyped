declare namespace AMap {
    class LayerGroup<L = any> extends Layer {
        /**
         * 图层集合
         * @param layers 集合中的图层
         */
        constructor(layers: L | L[]);
        /**
         * 添加单个图层到集合中，不支持添加重复的图层
         * @param layer 图层
         */
        addLayer(layer: L | L[]): this;
        /**
         * 添加图层数组到集合中，不支持添加重复的图层
         * @param layers 图层数组
         */
        addLayers(layers: L | L[]): this;
        /**
         * 返回当前集合中所有的图层
         */
        getLayers(): L[];
        getLayer(finder: (this: null, item: L, index: number, list: L[]) => boolean): L | null;
        /**
         * 判断传入的图层实例是否在集合中
         * @param layer 目标图层
         */
        hasLayer(layer: L | ((this: null, item: L, index: number, list: L[]) => boolean)): boolean;
        /**
         * 	从集合中删除传入的图层实例
         * @param layer 图层
         */
        removeLayer(layer: L | L[]): this;
        /**
         * 从集合中删除传入的图层实例数组
         * @param layers 图层数组
         */
        removeLayers(layers: L | L[]): this;
        /**
         * 清空集合
         */
        clearLayers(): this;
        /**
         * 对集合中的图层做迭代操作
         * @param iterator 迭代回调
         * @param context 执行上下文
         */
        eachLayer<C = L>(iterator: (this: C, layer: L, index: number, list: L[]) => void, context?: C): void;

        // overwrite
        setMap(map?: Map): this;
        hide(): this;
        show(): this;
        reload(): this;
        setOptions(options: any): this;
    }
}
