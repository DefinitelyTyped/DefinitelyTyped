/// <reference types="amap-js-api" />
/// <reference types="amap-js-api-place-search" />

declare namespace AMap {
    enum TransferPolicy {
        /**
         * 最快捷模式
         */
        LEAST_TIME = 0,
        /**
         * 最经济模式
         */
        LEAST_FEE = 1,
        /**
         * 最少换乘模式
         */
        LEAST_TRANSFER = 2,
        /**
         * 最少步行模式
         */
        LEAST_WALK = 3,
        /**
         * 最舒适模式
         */
        MOST_COMFORT = 4,
        /**
         * 不乘地铁模式
         */
        NO_SUBWAY = 5,
    }

    namespace Transfer {
        interface EventMap {
            error: Event<"error", { info: string }>;
            complete: Event<"complete", SearchResult>;
        }
        interface Options {
            /**
             * 公交换乘的城市，支持城市名称、城市区号、电话区号，此项为必填
             */
            city: string;
            /**
             * 公交换乘策略
             */
            policy?: TransferPolicy | undefined;
            /**
             * 是否计算夜班车，默认为不计算
             */
            nightflag?: boolean | undefined;
            /**
             * 终点城市，跨城公交路径规划时为必填参数
             */
            cityd?: string | undefined;
            /**
             * 返回结果控制, 默认值: base
             * base:返回基本信息
             * all:返回全部信息
             */
            extensions?: "all" | "base" | undefined;
            /**
             * AMap.Map对象, 展现结果的地图实例
             */
            map?: Map | undefined;
            /**
             * 结果列表的HTML容器id或容器元素
             */
            panel?: string | undefined;
            /**
             * 设置是否隐藏路径规划的起始点图标
             */
            hideMarkers?: boolean | undefined;
            /**
             * 使用map属性时，绘制的规划线路是否显示描边。默认为true
             */
            isOutline?: boolean | undefined;
            /**
             * 使用map属性时，绘制的规划线路的描边颜色。默认为'white'
             */
            outlineColor?: string | undefined;
            /**
             * 用于控制在路径规划结束后，是否自动调整地图视野使绘制的路线处于视口的可见范围
             */
            autoFitView?: boolean | undefined;

            // internal
            showDir?: boolean | undefined;
        }
        interface SearchPoint {
            /**
             * 关键词
             */
            keyword: string;
        }
        interface SegmentCommon {
            /**
             * 此换乘段预期用时，单位：秒
             */
            time: number;
            /**
             * 此换乘段的文字描述
             */
            instruction: string;
            /**
             * 此换乘段距离
             */
            distance: number;
        }
        interface WalkStep {
            /**
             * 步行子路段描述
             */
            instruction: string;
            /**
             * 道路
             */
            road: string;
            /**
             * 步行子路段距离，单位：米
             */
            distance: number;
            /**
             * 步行子路段预计使用时间，单位：秒
             */
            time: number;
            /**
             * 步行子路段坐标集合
             */
            path: LngLat[];
            /**
             * 本步行子路段完成后动作
             */
            action: string;
            /**
             * 步行子路段完成后辅助动作，一般为到达某个公交站点或目的地时返回
             */
            assist_action: string;
        }
        interface WalkDetails {
            /**
             * 此换乘段的步行起点
             */
            origin: LngLat;
            /**
             * 此换乘段的步行终点
             */
            destination: LngLat;
            /**
             * 此换乘段坐标集合
             */
            path: LngLat[];
            /**
             * 步行子路段WalkStep列表
             */
            steps: WalkStep[];
        }
        interface WalkSegment extends SegmentCommon {
            /**
             * 换乘动作类型
             */
            transit_mode: "WALK";
            /**
             * 此换乘段导航信息
             */
            transit: WalkDetails;
        }
        interface TaxiDetails {
            /**
             * 耗时，单位：秒
             */
            time: number;
            /**
             * 该方案的总距离，单位：米
             */
            distance: number;
            /**
             * 打车起点坐标
             */
            origin: LngLat;
            /**
             * 打车终点坐标
             */
            destination: LngLat;
            /**
             * 起点名称
             */
            sname: string;
            /**
             * 终点名称
             */
            tname: string;
        }
        interface TaxiSegment extends SegmentCommon {
            /**
             * 换乘动作类型
             */
            transit_mode: "TAXI";
            /**
             * 此换乘段导航信息
             */
            transit: TaxiDetails;
        }
        interface Stop {
            /**
             * 公交站点名称
             */
            name: string;
            /**
             * 公交站点ID
             */
            id: string;
            /**
             * 站点经纬度信息
             */
            location: LngLat;
            segment?: TransitSegment | undefined;
        }
        interface TransitLine {
            /**
             * 公交路线名
             */
            name: string;
            /**
             * 公交路线ID
             */
            id: string;
            /**
             * 公交类型
             */
            type: string;
            /**
             * 公交路线首班车时间
             */
            stime: string | never[];
            /**
             * 公交路线末班车时间
             */
            etime: string | never[];
        }
        interface SubwayEntrance {
            /**
             * 地铁口名称
             */
            name: string;
            /**
             * 地铁口经纬度坐标
             */
            location: LngLat;
        }
        interface TransitDetails {
            /**
             * 此换乘段的上车站
             */
            on_station: Stop;
            /**
             * 此换乘段的下车站
             */
            off_station: Stop;
            /**
             * 此换乘段公交部分（上车站-下车站）坐标集合
             */
            path: LngLat[];
            /**
             * 途径公交站点数（不包括上车站和下车站）
             */
            via_num: number;
            /**
             * 途径公交站点集合（不包括上车站和下车站）
             */
            via_stops: Stop[];
            /**
             * 此换乘段公交路线
             */
            lines: TransitLine[];
            /**
             * 地铁站入口
             */
            entrance?: SubwayEntrance | undefined;
            /**
             * 地铁站出口
             */
            exit?: SubwayEntrance | undefined;
        }
        interface TransitSegment extends SegmentCommon {
            /**
             * 换乘动作类型
             */
            transit_mode: "SUBWAY" | "METRO_RAIL" | "BUS";
            /**
             * 此换乘段导航信息
             */
            transit: TransitDetails;
        }
        interface RailStop {
            /**
             * 上、下车站点所在城市的adcode
             */
            adcode: string;
            /**
             * 上、下车站点ID
             */
            id: string;
            /**
             * 上、下站点经纬度信息
             */
            location: LngLat;
            /**
             * 上、下车站点名称
             */
            name: string;
            /**
             * 上下车点发车时间
             */
            time: number;
            wait?: number | undefined;
            segment?: RailwaySegment | undefined;
        }
        interface Space {
            /**
             * 仓位编码，参考仓位级别表
             */
            type: string | never[];
            /**
             * 仓位费用
             */
            cost: number;
        }
        interface RailwayDetailsBase {
            /**
             * 线路id编码
             */
            id: string;
            /**
             * 线路名称
             */
            name: string;
            /**
             * 线路车次号
             */
            trip: string;
            /**
             * 线路车次类型，参考火车路线类型列表
             */
            type: string;
            /**
             * 该换乘段的行车总距离
             */
            distance: number;
            /**
             * 该线路车段耗时
             */
            time: number;
            /**
             * 火车始发站信息
             */
            departure_stop: RailStop;
            /**
             * 火车到站信息
             */
            arrival_stop: RailStop;
            /**
             * 仓位及价格信息
             */
            spaces: Space[];
        }
        interface Alter {
            /**
             * 备选方案ID
             */
            id: string;
            /**
             * 备选线路名称
             */
            name: string;
        }
        interface ViaStop {
            /**
             * 途径车站点ID
             */
            id: string;
            /**
             * 站点经纬度信息
             */
            location: LngLat;
            /**
             * 途径车站点名称
             */
            name: string;
            /**
             * 途径站点的进站时间，如大于24:00,则表示跨天
             */
            time: number;
            /**
             * 途径站点的停靠时间，单位：分钟
             */
            wait: number;
        }
        interface RailwayDetailsExt extends RailwayDetailsBase {
            /**
             * 途经站点信息
             */
            via_stops: ViaStop[];
            /**
             * 途经站点数量
             */
            via_num: number;
            /**
             * 聚合的备选方案
             */
            alters: Alter[];
        }
        type RailwayDetails = RailwayDetailsBase | RailwayDetailsExt;
        interface RailwaySegment extends SegmentCommon {
            /**
             * 换乘动作类型
             */
            transit_mode: "RAILWAY";
            /**
             * 此换乘段导航信息
             */
            transit: RailwayDetails;
        }
        type Segment = WalkSegment | TaxiSegment | TransitSegment | RailwaySegment;
        interface TransferPlan {
            /**
             * 此换乘方案价格，单位：元
             */
            cost: number;
            /**
             * 预期时间，单位：秒
             */
            time: number;
            /**
             * 是否夜间线路
             */
            nightLine: boolean;
            /**
             * 换乘路段列表，以每次换乘动结束作为分段点，将整个换乘方案分隔成若干 Segment（换乘路段）
             */
            segments: Segment[];
            /**
             * 此方案公交行驶距离，单位：米
             */
            transit_distance: number;
            /**
             * 此方案火车行驶距离，单位：米
             */
            railway_distance: number;
            /**
             * 此方案总步行距离，单位：米
             */
            walking_distance: number;
            /**
             * 此方案出租车行驶距离，单位：米
             */
            taxi_distance: number;
            /**
             * 此换乘方案全程距离，单位：米
             */
            distance: number;
            /**
             * 此换乘方案的路径坐标集合
             */
            path: LngLat[];
        }
        interface Poi {
            location: LngLat;
            name: string;
            type: "start" | "end";
        }
        interface SearchResultCommon {
            /**
             * 成功状态说明
             */
            info: string;
            /**
             * 公交换乘起点坐标
             */
            origin: LngLat;
            /**
             * 公交换乘终点坐标
             */
            destination: LngLat;
            /**
             * 出租车费用，单位：元
             */
            taxi_cost: number;
            /**
             * 换乘方案列表
             */
            plans: TransferPlan[];
        }
        interface SearchResultBase extends SearchResultCommon {
            /**
             * 公交换乘起点
             */
            start?: Poi | undefined;
            /**
             * 公交换乘终点
             */
            end?: Poi | undefined;
        }
        interface SearchResultExt extends SearchResultCommon {
            /**
             * 公交换乘起点
             */
            start: PlaceSearch.PoiExt;
            /**
             * 公交换乘终点
             */
            end: PlaceSearch.PoiExt;
            /**
             * 公交换乘起点名称
             */
            originName: string;
            /**
             * 公交换乘终点名称
             */
            destinationName: string;
        }

        type SearchResult = SearchResultBase | SearchResultExt;
        type SearchStatus = "complete" | "error" | "no_data";
    }

    class Transfer extends EventEmitter {
        /**
         * 公交换乘服务
         * @param options 构造函数选项
         */
        constructor(options: Transfer.Options);
        /**
         * 根据起点和终点坐标，进行公交换乘查询
         * @param origin 起点坐标
         * @param destination 终点坐标
         * @param callback 查询回调
         */
        search(
            origin: LocationValue,
            destination: LocationValue,
            callback?: (status: Transfer.SearchStatus, result: string | Transfer.SearchResultBase) => void,
        ): void;
        /**
         * 根据起点和终点坐标，进行公交换乘查询
         * @param path 路径名称关键字
         * @param callback 路径回调
         */
        search(
            path: [Transfer.SearchPoint, Transfer.SearchPoint],
            callback?: (status: Transfer.SearchStatus, result: string | Transfer.SearchResultExt) => void,
        ): void;
        /**
         * 设置公交换乘策略
         * @param policy 公交换乘策略
         */
        setPolicy(policy?: TransferPolicy): void;
        /**
         * 设置公交换乘查询的城市
         * @param city  城市名称、城市区号、电话区号
         */
        setCity(city?: string): void;
        /**
         * 设置公交换乘查询的城市
         * @param city  城市名称、城市区号、电话区号
         */
        setCityd(city?: string): void;
        /**
         * 设置公交路径规划出发时间
         * @param time 时间
         * @param date 日期
         */
        leaveAt(time?: string, date?: string): void;
        /**
         * 清除结果显示
         */
        clear(): void;
        /**
         * 唤起高德地图客户端公交路径规划
         * @param obj 唤起参数
         */
        searchOnAMAP(obj: {
            /**
             * 起点坐标
             */
            origin: LocationValue;
            /**
             * 起点名称
             */
            originName?: string | undefined;
            /**
             * 终点坐标
             */
            destination: LocationValue;
            /**
             * 终点名称
             */
            destinationName?: string | undefined;
        }): void;

        // internal
        open(): void;
        close(): void;
    }
}
