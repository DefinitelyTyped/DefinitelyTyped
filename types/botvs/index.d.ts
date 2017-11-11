// Type definitions for botvs 0.1
// Project: https://www.botvs.com/
// Definitions by: acrazing <https://github.com/acrazing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import Highstock = require('highcharts/highstock');

declare global {
    namespace botvs {
        /**
         * 订单的状态
         */
        type VOrderState = object;

        /**
         * 订单的类型
         */
        type VOrderType = object;

        /**
         * 仓位的类型
         */
        type VPositionType = object;

        /**
         * K线周期
         */
        type VPeriod = object;

        /**
         * 日志类型
         */
        type VLogType = object;

        interface ChartOptions extends Highstock.Options {
            __isStock?: boolean;
        }

        interface RChart {
            add(series?: number, data?: number, index?: number): void;
            reset(): void;
        }

        interface Socket {
            write(data: string, timeout?: number): number;
            read(size?: number): Buffer | null;
            close(): void;
        }

        /**
         * 标准OHLC结构, 用来画K线和指标分析用的，由GetRecords函数返回此结构数组
         */
        interface Record {
            /**
             * 一个时间戳, 精确到毫秒，与Javascript的 new Date().getTime() 得到的结果格式一样
             */
            Time: number;
            /**
             * 开盘价
             */
            Open: number;
            /**
             * 最高价
             */
            High: number;
            /**
             * 最低价
             */
            Low: number;
            /**
             * 收盘价
             */
            Close: number;
            /**
             * 成交量
             */
            Volume: number;
        }

        /**
         * 市场深度单
         */
        interface MarketOrder {
            /**
             * 价格
             */
            Price: number;
            /**
             * 数量
             */
            Amount: number;
        }

        /**
         * 市场行情
         */
        interface Ticker {
            /**
             * 最高价
             */
            High: number;
            /**
             * 最低价
             */
            Low: number;
            /**
             * 卖一价
             */
            Sell: number;
            /**
             * 买一价
             */
            Buy: number;
            /**
             * 最后成交价
             */
            Last: number;
            /**
             * 最近成交量
             */
            Volume: number;
        }

        /**
         * 订单结构, 由GetOrder函数返回
         */
        interface Order {
            /**
             * 交易单唯一标识
             */
            Id: string;
            /**
             * 下单价格
             */
            Price: number;
            /**
             * 下单数量
             */
            Amount: number;
            /**
             * 成交数量
             */
            DealAmount: number;
            /**
             * 订单状态, 参考常量里的订单状态
             */
            Status: VOrderState;
            /**
             * 订单类型, 参考常量里的订单类型
             */
            Type: VOrderType;
        }

        /**
         * 市场深度,由GetDepth函数返回
         */
        interface Depth {
            /**
             * 卖单数组, MarketOrder数组, 按价格从低向高排序
             */
            Asks: MarketOrder[];
            /**
             * 买单数组, MarketOrder数组, 按价格从高向低排序
             */
            Bids: MarketOrder[];
        }

        /**
         * 获取所有交易历史(非自己),由GetTrades函数返回
         */
        interface Trade {
            /**
             * Id(交易所返回的此Trade的唯一Id)
             */
            Id: string;
            /**
             * 时间(Unix timestamp 毫秒)
             */
            Time: number;
            /**
             * 价格
             */
            Price: number;
            /**
             * 数量
             */
            Amount: number;
            /**
             * 订单类型, 参考常量里的订单类型
             */
            Type: VOrderType;
        }

        /**
         * 手续费结构, 由GetFee函数返回(如国外平台bitfinex买入卖出手续费跟账户交易量相关)
         */
        interface Fee {
            /**
             * 卖出手续费, 为一个浮点数, 如0.2表示0.2%的手续费
             */
            Sell: number;
            /**
             * 买入手续费, 格式同上
             */
            Buy: number;
        }

        /**
         * 账户信息, 由GetAccount函数返回
         */
        interface Account {
            /**
             * 余额(人民币或者美元, 在Poloniex交易所里BTC_ETC这样的品种, Balance就指的是BTC的数量,
             * Stocks指的是ETC数量, BTC38的ETC_BTC相当于Poloniex的BTC_ETC, 指的是以BTC计价)
             */
            Balance: number;
            /**
             * 冻结的余额
             */
            FrozenBalance: number;
            /**
             * BTC/LTC数量, 现货为当前可操作币的余额(去掉冻结的币),
             * 期货的话为合约当前可用保证金(传统期货为此属性)
             */
            Stocks: number;
            /**
             * 冻结的BTC/LTC数量(传统期货无此属性)
             */
            FrozenStocks: number;
        }

        /**
         * 期货交易中的持有仓位信息, 由GetPosition()函数返回此结构数组
         */
        interface Position {
            /**
             * 杆杠大小, 796期货有可能为5, 10, 20三个参数, OKCoin为10或者20,
             * BitVC期货和OK期货的全仓模式返回为固定的10, 因为原生API不支持
             */
            MarginLevel: number;
            /**
             * 持仓量, 796期货表示持币的数量, BitVC指持仓的总金额(100的倍数),
             * OKCoin表示合约的份数(整数且大于1)
             */
            Amount: number;
            /**
             * 可平量, 只有股票有此选项, 表示可以平仓的数量(股票为T+1)今日仓不能平
             */
            CanCover: number;
            /**
             * 仓位冻结量
             */
            FrozenAmount: number;
            /**
             * 持仓均价
             */
            Price: number;
            /**
             * 持仓浮动盈亏(数据货币单位：BTC/LTC, 传统期货单位:RMB, 股票不支持此字段,
             * 注: OKCoin期货全仓情况下指实现盈余, 并非持仓盈亏, 逐仓下指持仓盈亏)
             */
            Profit: number;
            /**
             * PD_LONG为多头仓位(CTP中用closebuy_today平仓), PD_SHORT为空头仓位(CTP用closesell_today)平仓,
             * (CTP期货中)PD_LONG_YD为咋日多头仓位(用closebuy平), PD_SHORT_YD为咋日空头仓位(用closesell平)
             */
            Type: VPositionType;
            /**
             * 商品期货为合约代码, 股票为'交易所代码_股票代码', 具体参数SetContractType的传入类型
             */
            ContractType: string;
        }

        interface AsyncJob<T> {
            wait(timeout?: number): T | null | undefined;
        }

        interface Exchange {
            /**
             * 返回交易所名称(string)
             *
             */
            GetName(): string;

            /**
             * 返回交易所自定义的标签(string)
             *
             */
            GetLabel(): string;

            /**
             * 返回交易所使用的美元的汇率, OKCoin期货返回官方提供的汇率, 该值不受SetRate影响
             *
             */
            GetUSDCNY(): number;

            /**
             * 返回交易所使用的流通货币与人民币的汇率, 返回1表示禁用汇率转换
             *
             * 汇率接口调用雅虎提供的接口, 5分钟更新一次
             * 所有函数自动经过汇率转换,如果为1指禁用汇率转换
             *
             */
            GetRate(): number;

            /**
             * 设置交易所的流通货币的汇率, 返回设置前的汇率, 设置为1指禁用汇率转换
             *
             * 比如796期货设置SetRate(6.13), 就是设定USD/EUR对CNY的汇率为6.13, 程序所有价格会自动用这个汇率计算
             * SetRate(), 如果不加参数，则恢复系统内置汇率
             * SetRate(1), 就是禁用汇率转换
             *
             */
            SetRate(rate?: number): void;

            /**
             * 设置价格与品种下单量的小数位精度, 设置后会自动截断
             *
             * exchange.SetPrecision(2, 3); // 设置价格小数位精度为2位, 品种下单量小数位精度为3位
             *
             */
            SetPrecision(PricePrecision: number, AmountPrecision: number): void;

            /**
             * 返回交易所操作的货币名称(string), 传统期货CTP返回的固定为STOCK
             *
             */
            GetCurrency(): string;

            /**
             * 返回交易所操作的基础货币名称(string), BTC_CNY就返回CNY, ETH_BTC就返回BTC
             *
             */
            GetBaseCurrency(): string;

            /**
             * 返回一个Ticker结构
             *
             */
            GetTicker(): Ticker;

            /**
             * 返回一个Depth结构
             *
             */
            GetDepth(): Depth;

            /**
             * 返回一个Trade数组, 按时间从低到高的顺序, 只支持数字货币(BTC/LTC)
             *
             */
            GetTrades(): Trade[];

            /**
             * 返回一个K线历史, K线周期在创建机器人时指定, Record数组结构
             *
             * 不加参数, 默认返回添加机器人时时指量的K线周期, 但也可以自定义K线周期
             * 支持: PERIOD_M1 指1分钟, PERIOD_M5 指5分钟, PERIOD_M15 指15分钟,
             * PERIOD_M30 指30分钟, PERIOD_H1 指1小时, PERIOD_D1 指一天
             *
             */
            GetRecords(Period?: VPeriod): Record[];

            /**
             * 返回一个Account结构, 如exchange.GetAccount(), 将返回主交易所账户信息
             *
             */
            GetAccount(): Account;

            /**
             * 下买单, Price为买单价格,Amount为数量, 返回一个订单ID
             *
             * 可以跟多余的参数做为附加消息显示到日志, 如exchange.Buy(1000,0.1, "OK", 123)
             * 支持现货(火币/BitVC/OKCoin/OKCoin国际/OKCoin期货/BTCChina/BitYes)市价单, 市价单价格指定为-1
             * exchange.Buy(1000), 指买市价1000元的币, BTCChina例外exchange.Buy(0.3)指市价买0.3个币
             *
             * @return - 订单ID
             */
            Buy(Price: number, Amount: number, ...args: any[]): string;

            /**
             * 跟Buy函数一样的调用方法和场景 {@see Exchange#Buy}
             *
             */
            Sell(Price: number, Amount: number): string;

            /**
             * 获取所有未完成的订单, 返回一个Order数组结构
             *
             */
            GetOrders(): Order[];

            /**
             * 根据订单号获取订单详情, 返回一个Order结构
             *
             */
            GetOrder(orderId: string): Order;

            /**
             * 根据订单号取消一个订单, 返回true或者false
             *
             */
            CancelOrder(orderId: string): boolean;

            /**
             * 不下单, 只记录交易信息, logType可为LOG_TYPE_BUY/LOG_TYPE_SELL/LOG_TYPE_CANCEL
             *
             */
            Log(logType: VLogType, orderId: string, price: number, amount: number): void;

            /**
             * 返回币最小交易数量
             *
             */
            GetMinStock(): number;

            /**
             * 返回一笔订单要求的最小金额(价格*数量)
             *
             * Bitstamp要求5美元(程序会根据汇率自动转换为人民币), 其它没有限制
             *
             */
            GetMinPrice(): number;

            /**
             * 返回一个Fee结构
             *
             */
            GetFee(): Fee;

            /**
             * 返回最后一次REST API请求返回的原始内容(字符串), 用户可以用来自己解析扩展信息
             *
             * 注: 模拟测试的话，会一直返回一个空字符串, 只在真实环境下有效
             * exchange.GetAccount();
             * var obj = JSON.parse(exchange.GetRawJSON());
             *
             * 传统商品期货API获取更多信息
             * exchange.GetAccount();
             * Log(exchange.GetRawJSON());//在GetAccount成功后调用, 获取更详细的账户信息, 可以用JSON.parse解析
             * 也支持GetTicker, GetDepth后的exchange.GetRawJSON(), 以及GetPosition与GetOrders,GetOrder这三个调用后的详细反馈数据
             *
             */
            GetRawJSON(): string;

            /**
             * 多线程异步支持函数, 可以把所有支持的函数的操作变成异步并发的.(只支持数字货币交易平台)
             *
             * Support: GetTicker, GetDepth, GetTrades, GetRecords, GetAccount, GetOrders, GetOrder, CancelOrder, Buy,
             * Sell, GetPosition var a = exchange.Go("GetTicker"); // GetTicker 异步多线程执行 var b =
             * exchange.Go("GetDepth"); var c = exchange.Go("Buy", 1000, 0.1); var d = exchange.Go("GetRecords",
             * PERIOD_H1);
             *
             * // 上面四种操作是并发多线程异步执行, 不会耗时, 立即返回的
             *
             * var ticker = a.wait(); // 调用wait方法等待返回异步获取ticker结果
             * var depth = b.wait(); // 返回深度, 如果获取失败也是有可能返回null的
             * var orderId = c.wait(1000); // 返回订单号, 限定1秒超时, 超时返回undefined, 此对像可以继续调用wait等待如果上次wait超时
             * // 注意: 判断undefiend要用typeof(xx) === "undefined", 因为null==undefined在JavaScript里是成立的
             *
             * var records = d.wait(); // 等待K线结果
             * var ret = d.wait(); // 这里wait了一个已经wait过且结束的异步操作, 会返回null, 并记录出错信息.
             * // Python与Javascript的区别, Python的wait返回两个参数, 第一个是异步的api返回的结果, 第二个表示是异步调用是否完成
             * ret, ok = d.wait() // ok是一定返回True的, 除非策略被停止
             * ret, ok = d.wait(100) // ok返回False, 如果等待超时, 或者wait了一个已经结束的实例
             *
             */
            Go<T>(Method: keyof Exchange, ...Args: any[]): AsyncJob<T>;

            /**
             * 调用交易所其它功能接口
             *
             * 支持所有数字货币交易所
             * exchange.IO("api", "cancel_borrow", "symbol=cny&borrow_id=123"); // no need api & sign
             * Detail: {@link https://www.botvs.com/bbs-topic/146}
             *
             * // 只支持Websocket模式(huobi, okcoin.cn, BTCC支持)与商品期货CTP协议
             *
             * exchange.IO("websocket"); // 切换行情通信协议到websocket(默认为rest), Ticker,
             * Depth会切换为websocket协议来更新, 商品期货CTP无需切换
             *
             *
             * // 切换GetTicker, GetDepth数据更新模式
             *
             * exchange.IO("mode", 0); // 立即返回模式, 如果当前还没有接收到交易所最新的行情数据推送, 就立即返回旧的行情数据,
             * 如果有新的数据就返回新的数据
             *
             * exchange.IO("mode", 1); // 缓存模式(默认模式),
             * 如果当前还没有收到交易所最新的行情数据(同上一次api获取的数据比较), 就等待接收然后再返回, 如果调用该函数之前收到了最新的行情数据,
             * 就立即返回最新的数据
             *
             * exchange.IO("mode", 2); // 强制更新模式, 进入等待一直到接收到交易所下一次的最新推送数据后返回
             *
             *
             *
             * // 如果想第一时间获取最新的行情可以切换到websocket后不Sleep的立即检测数据, GetTicker, GetDepth用缓存模式进行工作
             *
             * exchange.IO("websocket");
             *
             * while (true) {
             * Log(exchange.GetTicker());
             * }
             *
             * 传统商品期货扩展的IO功能
             * exchange.IO("status"); // 返回true证明与CTP服务器行情与数据的两台服务器都连接正常
             * exchange.IO("instruments"); // 返回交易所所有的合约列表{合约名: 详情}字典形式, 只支持实盘
             * exchange.IO("products"); // 返回交易所所有的产品列表{产品名: 详情}字典形式, 只支持实盘
             * exchange.IO("subscribed"); // 返回已订阅行情的合约, 格式同上, 只支持实盘
             * exchange.IO("settlement"); // 结算单查询, 不加第二个参数默认返回之前一个交易日的,
             * 加参数如"20170317"指返回20170317的结算单, 只支持实盘
             * exchange.IO("wait"); // 有任何品种更新行情信息时才返回, 可带第二个参数(毫秒数)指定超时,
             * 超时返回-1, 正常返回事件接收的时间(nano级), 只支持实盘
             * exchange.IO("wait_instrument"); // 有任何品种更新行情信息时才返回, 可带第二个参数(毫秒数)
             * 指定超时, 超时返回空字符串, 正常返回触发事件的品种名称, 只支持实盘
             *
             */
            IO<T = any>(Api: 'api' | 'usd' | 'cny' | 'currency' | string, ApiName?: string, Args?: string): T;

            /**
             * 获取当前持仓信息
             *
             * 返回一个Position数组, (BitVC和OKCoin)可以传入一个参数, 指定要获取的合约类型
             *
             */
            GetPosition(): Position[];

            /**
             * 设置杆杠大小
             *
             * 设置Buy(多单)或者Sell(空单)的杆杠大小, MarginLevel有5, 10, 20 三个可选参数
             * 796支持5,10,20,50三个选项, BitVC的LTC不支持20倍杠杆, OKCoin支持10倍和20倍
             * 如: exchange.SetMarginLevel(5)
             *
             */
            SetMarginLevel(MarginLevel: number): void;

            /**
             * 设置Buy或者Sell下单类型
             *
             * Direction可以取buy, closebuy, sell, closesell四个参数, 传统期货多出closebuy_today,与closesell_today, 指平今仓,
             * 默认为closebuy/closesell为平咋仓 对于CTP传统期货, 可以设置第二个参数"1"或者"2"或者"3", 分别指"投机", "套利", "套保",
             * 不设置默认为投机 股票只支持buy与closebuy,
             * 因为股票只能买跟平仓 exchange.SetMarginLevel(5); exchange.SetDirection("buy"); exchange.Buy(1000, 2);
             * exchange.SetMarginLevel(5); exchange.SetDirection("closebuy"); exchange.Sell(1000, 2);
             *
             * 期货交易中Buy, Sell, CancelOrder和现货交易的区别
             * Buy或Sell之前需要调用SetMarginLevel和SetDirection明确操作类型
             * 数字货币796的CancelOrder之前需要调用SetDirection明确订单类型
             * 如:
             * exchange.SetDirection("sell");
             * exchange.Sell(1000, 2);
             * 如:
             * exchange.SetDirection("buy");
             * exchange.CancelOrder(123);
             *
             * 数字货币BitVC期货交易中Buy, Sell, GetOrder, SetMarginLevel与796的区别
             * GetOrder里面的Amount为订单总金额, DealAmount为订单完成的金额, 不是币的个数
             * 数字货币796的CancelOrder之前需要调用SetDirection明确订单类型
             * Buy或Sell第二个参数不是币的数量而是订单的总金额(100的倍数)
             * SetMarginLevel LTC不支持20倍杠杆
             * 如:
             * exchange.SetContractType("week"); exchange.SetDirection("sell");
             * exchange.Sell(1000, 100), 就是以1000元一个币的价格开100元的空头
             *
             * 数字货币OKCoin期货交易中Buy, Sell, GetOrder, SetMarginLevel与796的区别
             * GetOrder里面的Amount为合约数(一份合约为10$), DealAmount为订单完成的合约数, 不是币的个数
             * Buy或Sell第二个参数不是币的数量而是合约的份数(整数且大于0)
             * SetMarginLevel 只支持10倍和20倍的杠杆
             * 如: 以1000元一个币的价格做空一份合约(10$的LTC或者100$的BTC):
             * exchange.SetContractType("this_week");
             * exchange.SetDirection("sell");
             * exchange.Sell(1000, 1);
             *
             */
            SetDirection(Direction: 'buy' | 'closebuy' | 'sell' | 'closesell' | 'closebuy_today' | 'closesell_today'): void;

            /**
             * 设置合约类型
             *
             * 传统的CTP期货的ContractType就是指的合约ID,  如SetContractType("au1506") 返回合约的详细信息, 如最少一次买多少, 手续费,
             * 交割时间等,
             * 主力连续合约为代码为000如MA000, 只支持回测, 不支持实盘 股票合约格式为 股票代码.(SH/SZ), SH指上交所, SZ指深交所,
             * 如000001.SZ就是指深交所的平安银行 商品期货与股票取消订阅合约,
             * 在合约名前加上"-"前缀重新调用即可, 如SetContractType("-au1506"); 成功返回true 数字货币796支持: "week", "weekcny",
             * 默认为子账户A, 要指定子账户是A还是B,
             * 在合约后加"@A"或"@B", 如: "day@A" 为日合约A子账户 BitVC有week和quarter和next_week三个可选参数, OKCoin期货有this_week,
             * next_week, quarter三个参数 exchange.SetContractType("week");
             *
             */
            SetContractType(ContractType: string): void;
        }
    }

    namespace TA {
        /**
         * 指数平滑异同平均线
         *
         * MACD(数据, 快周期, 慢周期, 信号周期), 默认参数为(12, 26, 9), 返回二维数组, 分别是[DIF, DEA, MACD]
         *
         */
        function MACD(
            Records: botvs.Record[],
            LongPeriod?: number,
            ShortPeriod?: number,
            SignalPeriod?: number,
        ): [number[], number[], number[]];

        /**
         * 随机指标
         *
         * KDJ(数据, 周期1, 周期2, 周期3), 默认参数为(9, 3, 3), 返回二维数组, 分别是[K, D, J]
         *
         */
        function KDJ(
            Records: botvs.Record[],
            FirstPeriod?: number,
            SecondPeriod?: number,
            ThirdPeriod?: number,
        ): [number[], number[], number[]];

        /**
         * 强弱指标
         *
         * RSI(数据, 周期), 默认参数为14, 返回一个一维数组
         *
         */
        function RSI(Records: botvs.Record[], Period?: number): number[];

        /**
         * 平均真实波幅
         *
         * ATR(数据, 周期), 默认参数为14, 返回一个一维数组
         *
         */
        function ATR(Records: botvs.Record[], Period?: number): number[];

        /**
         * 能量潮
         *
         * OBV(数据), 返回一个一维数组
         *
         */
        function OBV(Records: botvs.Record[]): [number[], number[]];

        /**
         * 移动平均线
         *
         * MA(数据, 周期), 默认参数为9, 返回一个一维数组
         *
         */
        function MA(Records: botvs.Record[], Period?: number): number[];

        /**
         * 指数平均数指标
         * EMA(数据, 周期), 默认参数为9, 返回一个一维数组
         *
         */
        function EMA(Records: botvs.Record[], Period?: number): number[];

        /**
         * Alligator Indicator
         *
         * Alligator(数据, 下颚周期,牙齿周期,上唇周期), 鳄鱼线指标, 默认参数为(13,8,5) 返回一个二维数组[下颚,牙齿,上唇]
         *
         */
        function Alligator(
            Records: botvs.Record[],
            JawPeriod?: number,
            TeethPeriod?: number,
            LibsPeriod?: number,
        ): [number[], number[], number[]];

        /**
         * Chaikin Money Flow
         *
         * CMF(数据, 周期), 默认周期参数为20, 返回一个一维数组
         *
         */
        function CMF(Records: botvs.Record[], Period?: number): number[];

        /**
         * 周期最高价
         *
         * Highest(数据, 周期, 属性), 返回最近周期内的最大值(不包含当前Bar),
         * 如TA.Highest(records, 30, 'High'), 如果周期为0指所有, 如属性不指定则视数据为普通数组
         *
         */
        function Highest(Records: botvs.Record[], Period?: number, Property?: keyof botvs.Record): number;

        /**
         * 周期最低价
         *
         * Lowest(数据, 周期, 属性), 同上, 求最小值
         *
         */
        function Lowest(Records: botvs.Record[], Period?: number, Property?: keyof botvs.Record): number;
    }

    namespace talib {
        /**
         * 查询指标调用格式
         *
         * Log(talib.help('MACD')); // 在回测环境下调用
         *
         */
        function help(Func: string): string;

        /**
         * Vector Trigonometric ACos (反余弦函数)
         *
         * ACOS(Records[Close]) = Array(outReal)
         *
         */
        function ACOS(Records: botvs.Record[] | number[]): number[];

        /**
         * Chaikin A/D Line (线随机指标)
         *
         * AD(Records[High,Low,Close,Volume]) = Array(outReal)
         *
         */
        function AD(Records: botvs.Record[]): number[];
        /**
         * Chaikin A/D Line (线随机指标)
         *
         * AD(Records[High,Low,Close,Volume]) = Array(outReal)
         *
         */
        function AD(High: number[], Low: number[], Close: number[], Volume: number[]): number[];

        /**
         * Chaikin A/D Oscillator (佳庆指标)
         *
         * ADOSC(Records[High,Low,Close,Volume],Fast Period = 3,Slow Period = 10) = Array(outReal)
         *
         */
        function ADOSC(Records: botvs.Record[], FastPeriod: number, SlowPeriod: number): number[];
        /**
         * Chaikin A/D Oscillator (佳庆指标)
         *
         * ADOSC(Records[High,Low,Close,Volume],Fast Period = 3,Slow Period = 10) = Array(outReal)
         *
         */
        function ADOSC(
            High: number[],
            Low: number[],
            Close: number[],
            Volume: number[],
            FastPeriod: number,
            SlowPeriod: number,
        ): number[];

        /**
         * Average Directional Movement Index (平均趋向指数)
         *
         * ADX(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function ADX(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Average Directional Movement Index (平均趋向指数)
         *
         * ADX(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function ADX(High: number[], Low: number[], Close: number[], TimePeriod: number): number[];

        /**
         * Average Directional Movement Index Rating (评估指数)
         *
         * ADXR(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function ADXR(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Average Directional Movement Index Rating (评估指数)
         *
         * ADXR(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function ADXR(High: number[], Low: number[], Close: number[], TimePeriod: number): number[];

        /**
         * Absolute Price Oscillator (绝对价格振荡指数)
         *
         * APO(Records[Close],Fast Period = 12,Slow Period = 26,MA Type = 0) = Array(outReal)
         *
         */
        function APO(
            Records: botvs.Record[] | number[],
            FastPeriod: number,
            SlowPeriod: number,
            MAType: number,
        ): number[];

        /**
         * Aroon (阿隆指标)
         *
         * AROON(Records[High,Low],Time Period = 14) = [Array(outAroonDown),Array(outAroonUp)]
         *
         */
        function AROON(Records: botvs.Record[], TimePeriod: number): [number[], number[]];
        /**
         * Aroon (阿隆指标)
         *
         * AROON(Records[High,Low],Time Period = 14) = [Array(outAroonDown),Array(outAroonUp)]
         *
         */
        function AROON(High: number[], Low: number[], TimePeriod: number): [number[], number[]];

        /**
         * Aroon Oscillator (阿隆震荡线)
         *
         * AROONOSC(Records[High,Low],Time Period = 14) = Array(outReal)
         *
         */
        function AROONOSC(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Aroon Oscillator (阿隆震荡线)
         *
         * AROONOSC(Records[High,Low],Time Period = 14) = Array(outReal)
         *
         */
        function AROONOSC(High: number[], Low: number[], TimePeriod: number): number[];

        /**
         * Vector Trigonometric ASin (反正弦函数)
         *
         * ASIN(Records[Close]) = Array(outReal)
         *
         */
        function ASIN(Records: botvs.Record[] | number[]): number[];

        /**
         * Vector Trigonometric ATan (反正切函数)
         *
         * ATAN(Records[Close]) = Array(outReal)
         *
         */
        function ATAN(Records: botvs.Record[] | number[]): number[];

        /**
         * Average True Range (平均真实波幅)
         *
         * ATR(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function ATR(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Average True Range (平均真实波幅)
         *
         * ATR(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function ATR(High: number[], Low: number[], Close: number[], TimePeriod: number): number[];

        /**
         * Average Price (平均价格)
         *
         * AVGPRICE(Records[Open,High,Low,Close]) = Array(outReal)
         *
         */
        function AVGPRICE(Records: botvs.Record[]): number[];
        /**
         * Average Price (平均价格)
         *
         * AVGPRICE(Records[Open,High,Low,Close]) = Array(outReal)
         *
         */
        function AVGPRICE(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Bollinger Bands (布林带)
         *
         * BBANDS(Records[Close],Time Period = 5,Deviations up = 2,Deviations down = 2,MA Type = 0) =
         * [Array(outRealUpperBand),Array(outRealMiddleBand),Array(outRealLowerBand)]
         *
         */
        function BBANDS(
            Records: botvs.Record[] | number[],
            TimePeriod: number,
            Deviationsup: number,
            Deviationsdown: number,
            MAType: number,
        ): [number[], number[], number[]];

        /**
         * Balance Of Power (均势指标)
         *
         * BOP(Records[Open,High,Low,Close]) = Array(outReal)
         *
         */
        function BOP(Records: botvs.Record[]): number[];
        /**
         * Balance Of Power (均势指标)
         *
         * BOP(Records[Open,High,Low,Close]) = Array(outReal)
         *
         */
        function BOP(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Commodity Channel Index (顺势指标)
         *
         * CCI(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function CCI(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Commodity Channel Index (顺势指标)
         *
         * CCI(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function CCI(High: number[], Low: number[], Close: number[], TimePeriod: number): number[];

        /**
         * Two Crows (K线图--两只乌鸦)
         *
         * CDL2CROWS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL2CROWS(Records: botvs.Record[]): number[];
        /**
         * Two Crows (K线图--两只乌鸦)
         *
         * CDL2CROWS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL2CROWS(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Three Black Crows (K线图--3只黑乌鸦)
         *
         * CDL3BLACKCROWS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3BLACKCROWS(Records: botvs.Record[]): number[];
        /**
         * Three Black Crows (K线图--3只黑乌鸦)
         *
         * CDL3BLACKCROWS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3BLACKCROWS(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Three Inside Up/Down (K线图:3内上下震荡)
         *
         * CDL3INSIDE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3INSIDE(Records: botvs.Record[]): number[];
        /**
         * Three Inside Up/Down (K线图:3内上下震荡)
         *
         * CDL3INSIDE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3INSIDE(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Three-Line Strike  (K线图:3线震荡)
         *
         * CDL3LINESTRIKE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3LINESTRIKE(Records: botvs.Record[]): number[];
        /**
         * Three-Line Strike  (K线图:3线震荡)
         *
         * CDL3LINESTRIKE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3LINESTRIKE(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Three Outside Up/Down (K线图:3外下震荡)
         *
         * CDL3OUTSIDE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3OUTSIDE(Records: botvs.Record[]): number[];
        /**
         * Three Outside Up/Down (K线图:3外下震荡)
         *
         * CDL3OUTSIDE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3OUTSIDE(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Three Stars In The South (K线图:南方三星)
         *
         * CDL3STARSINSOUTH(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3STARSINSOUTH(Records: botvs.Record[]): number[];
        /**
         * Three Stars In The South (K线图:南方三星)
         *
         * CDL3STARSINSOUTH(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3STARSINSOUTH(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Three Advancing White Soldiers (K线图:三白兵)
         *
         * CDL3WHITESOLDIERS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3WHITESOLDIERS(Records: botvs.Record[]): number[];
        /**
         * Three Advancing White Soldiers (K线图:三白兵)
         *
         * CDL3WHITESOLDIERS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDL3WHITESOLDIERS(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Abandoned Baby (K线图:弃婴)
         *
         * CDLABANDONEDBABY(Records[Open,High,Low,Close],Penetration = 0.3) = Array(outInteger)
         *
         */
        function CDLABANDONEDBABY(Records: botvs.Record[], Penetration: number): number[];
        /**
         * Abandoned Baby (K线图:弃婴)
         *
         * CDLABANDONEDBABY(Records[Open,High,Low,Close],Penetration = 0.3) = Array(outInteger)
         *
         */
        function CDLABANDONEDBABY(
            Open: number[],
            High: number[],
            Low: number[],
            Close: number[],
            Penetration: number,
        ): number[];

        /**
         * Advance Block (K线图:推进)
         *
         * CDLADVANCEBLOCK(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLADVANCEBLOCK(Records: botvs.Record[]): number[];
        /**
         * Advance Block (K线图:推进)
         *
         * CDLADVANCEBLOCK(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLADVANCEBLOCK(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Belt-hold (K线图:带住)
         *
         * CDLBELTHOLD(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLBELTHOLD(Records: botvs.Record[]): number[];
        /**
         * Belt-hold (K线图:带住)
         *
         * CDLBELTHOLD(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLBELTHOLD(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Breakaway (K线图:分离)
         *
         * CDLBREAKAWAY(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLBREAKAWAY(Records: botvs.Record[]): number[];
        /**
         * Breakaway (K线图:分离)
         *
         * CDLBREAKAWAY(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLBREAKAWAY(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Closing Marubozu (K线图:收盘光头光脚)
         *
         * CDLCLOSINGMARUBOZU(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLCLOSINGMARUBOZU(Records: botvs.Record[]): number[];
        /**
         * Closing Marubozu (K线图:收盘光头光脚)
         *
         * CDLCLOSINGMARUBOZU(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLCLOSINGMARUBOZU(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Concealing Baby Swallow (K线图:藏婴吞没形态)
         *
         * CDLCONCEALBABYSWALL(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLCONCEALBABYSWALL(Records: botvs.Record[]): number[];
        /**
         * Concealing Baby Swallow (K线图:藏婴吞没形态)
         *
         * CDLCONCEALBABYSWALL(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLCONCEALBABYSWALL(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Counterattack (K线图:反击)
         *
         * CDLCOUNTERATTACK(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLCOUNTERATTACK(Records: botvs.Record[]): number[];
        /**
         * Counterattack (K线图:反击)
         *
         * CDLCOUNTERATTACK(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLCOUNTERATTACK(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Dark Cloud Cover (K线图:乌云盖)
         *
         * CDLDARKCLOUDCOVER(Records[Open,High,Low,Close],Penetration = 0.5) = Array(outInteger)
         *
         */
        function CDLDARKCLOUDCOVER(Records: botvs.Record[], Penetration: number): number[];
        /**
         * Dark Cloud Cover (K线图:乌云盖)
         *
         * CDLDARKCLOUDCOVER(Records[Open,High,Low,Close],Penetration = 0.5) = Array(outInteger)
         *
         */
        function CDLDARKCLOUDCOVER(
            Open: number[],
            High: number[],
            Low: number[],
            Close: number[],
            Penetration: number,
        ): number[];

        /**
         * Doji (K线图:十字星 )
         *
         * CDLDOJI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLDOJI(Records: botvs.Record[]): number[];
        /**
         * Doji (K线图:十字星 )
         *
         * CDLDOJI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLDOJI(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Doji Star (K线图:十字星)
         *
         * CDLDOJISTAR(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLDOJISTAR(Records: botvs.Record[]): number[];
        /**
         * Doji Star (K线图:十字星)
         *
         * CDLDOJISTAR(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLDOJISTAR(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Dragonfly Doji (K线图:蜻蜓十字星)
         *
         * CDLDRAGONFLYDOJI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLDRAGONFLYDOJI(Records: botvs.Record[]): number[];
        /**
         * Dragonfly Doji (K线图:蜻蜓十字星)
         *
         * CDLDRAGONFLYDOJI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLDRAGONFLYDOJI(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Engulfing Pattern (K线图:吞没)
         *
         * CDLENGULFING(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLENGULFING(Records: botvs.Record[]): number[];
        /**
         * Engulfing Pattern (K线图:吞没)
         *
         * CDLENGULFING(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLENGULFING(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Evening Doji Star (K线图:黄昏十字星)
         *
         * CDLEVENINGDOJISTAR(Records[Open,High,Low,Close],Penetration = 0.3) = Array(outInteger)
         *
         */
        function CDLEVENINGDOJISTAR(Records: botvs.Record[], Penetration: number): number[];
        /**
         * Evening Doji Star (K线图:黄昏十字星)
         *
         * CDLEVENINGDOJISTAR(Records[Open,High,Low,Close],Penetration = 0.3) = Array(outInteger)
         *
         */
        function CDLEVENINGDOJISTAR(
            Open: number[],
            High: number[],
            Low: number[],
            Close: number[],
            Penetration: number,
        ): number[];

        /**
         * Evening Star (K线图:黄昏之星)
         *
         * CDLEVENINGSTAR(Records[Open,High,Low,Close],Penetration = 0.3) = Array(outInteger)
         *
         */
        function CDLEVENINGSTAR(Records: botvs.Record[], Penetration: number): number[];
        /**
         * Evening Star (K线图:黄昏之星)
         *
         * CDLEVENINGSTAR(Records[Open,High,Low,Close],Penetration = 0.3) = Array(outInteger)
         *
         */
        function CDLEVENINGSTAR(
            Open: number[],
            High: number[],
            Low: number[],
            Close: number[],
            Penetration: number,
        ): number[];

        /**
         * Up/Down-gap side-by-side white lines (K线图:上/下间隙并排的白色线条)
         *
         * CDLGAPSIDESIDEWHITE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLGAPSIDESIDEWHITE(Records: botvs.Record[]): number[];
        /**
         * Up/Down-gap side-by-side white lines (K线图:上/下间隙并排的白色线条)
         *
         * CDLGAPSIDESIDEWHITE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLGAPSIDESIDEWHITE(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Gravestone Doji (K线图:墓碑十字线)
         *
         * CDLGRAVESTONEDOJI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLGRAVESTONEDOJI(Records: botvs.Record[]): number[];
        /**
         * Gravestone Doji (K线图:墓碑十字线)
         *
         * CDLGRAVESTONEDOJI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLGRAVESTONEDOJI(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Hammer (K线图:锤)
         *
         * CDLHAMMER(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHAMMER(Records: botvs.Record[]): number[];
        /**
         * Hammer (K线图:锤)
         *
         * CDLHAMMER(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHAMMER(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Hanging Man (K线图:吊人)
         *
         * CDLHANGINGMAN(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHANGINGMAN(Records: botvs.Record[]): number[];
        /**
         * Hanging Man (K线图:吊人)
         *
         * CDLHANGINGMAN(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHANGINGMAN(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Harami Pattern (K线图:阴阳线)
         *
         * CDLHARAMI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHARAMI(Records: botvs.Record[]): number[];
        /**
         * Harami Pattern (K线图:阴阳线)
         *
         * CDLHARAMI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHARAMI(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Harami Cross Pattern (K线图:交叉阴阳线)
         *
         * CDLHARAMICROSS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHARAMICROSS(Records: botvs.Record[]): number[];
        /**
         * Harami Cross Pattern (K线图:交叉阴阳线)
         *
         * CDLHARAMICROSS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHARAMICROSS(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * High-Wave Candle (K线图:长脚十字线 )
         *
         * CDLHIGHWAVE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHIGHWAVE(Records: botvs.Record[]): number[];
        /**
         * High-Wave Candle (K线图:长脚十字线 )
         *
         * CDLHIGHWAVE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHIGHWAVE(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Hikkake Pattern (K线图:陷阱)
         *
         * CDLHIKKAKE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHIKKAKE(Records: botvs.Record[]): number[];
        /**
         * Hikkake Pattern (K线图:陷阱)
         *
         * CDLHIKKAKE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHIKKAKE(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Modified Hikkake Pattern (K线图:改良的陷阱)
         *
         * CDLHIKKAKEMOD(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHIKKAKEMOD(Records: botvs.Record[]): number[];
        /**
         * Modified Hikkake Pattern (K线图:改良的陷阱)
         *
         * CDLHIKKAKEMOD(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHIKKAKEMOD(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Homing Pigeon (K线图:信鸽)
         *
         * CDLHOMINGPIGEON(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHOMINGPIGEON(Records: botvs.Record[]): number[];
        /**
         * Homing Pigeon (K线图:信鸽)
         *
         * CDLHOMINGPIGEON(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLHOMINGPIGEON(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Identical Three Crows (K线图:相同的三只乌鸦)
         *
         * CDLIDENTICAL3CROWS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLIDENTICAL3CROWS(Records: botvs.Record[]): number[];
        /**
         * Identical Three Crows (K线图:相同的三只乌鸦)
         *
         * CDLIDENTICAL3CROWS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLIDENTICAL3CROWS(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * In-Neck Pattern (K线图:颈纹)
         *
         * CDLINNECK(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLINNECK(Records: botvs.Record[]): number[];
        /**
         * In-Neck Pattern (K线图:颈纹)
         *
         * CDLINNECK(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLINNECK(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Inverted Hammer (K线图:倒锤)
         *
         * CDLINVERTEDHAMMER(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLINVERTEDHAMMER(Records: botvs.Record[]): number[];
        /**
         * Inverted Hammer (K线图:倒锤)
         *
         * CDLINVERTEDHAMMER(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLINVERTEDHAMMER(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Kicking (K线图:踢)
         *
         * CDLKICKING(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLKICKING(Records: botvs.Record[]): number[];
        /**
         * Kicking (K线图:踢)
         *
         * CDLKICKING(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLKICKING(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Kicking - bull/bear determined by the longer marubozu (K线图:踢牛/踢熊)
         *
         * CDLKICKINGBYLENGTH(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLKICKINGBYLENGTH(Records: botvs.Record[]): number[];
        /**
         * Kicking - bull/bear determined by the longer marubozu (K线图:踢牛/踢熊)
         *
         * CDLKICKINGBYLENGTH(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLKICKINGBYLENGTH(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Ladder Bottom (K线图:梯底)
         *
         * CDLLADDERBOTTOM(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLLADDERBOTTOM(Records: botvs.Record[]): number[];
        /**
         * Ladder Bottom (K线图:梯底)
         *
         * CDLLADDERBOTTOM(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLLADDERBOTTOM(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Long Legged Doji (K线图:长腿十字线)
         *
         * CDLLONGLEGGEDDOJI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLLONGLEGGEDDOJI(Records: botvs.Record[]): number[];
        /**
         * Long Legged Doji (K线图:长腿十字线)
         *
         * CDLLONGLEGGEDDOJI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLLONGLEGGEDDOJI(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Long Line Candle (K线图:长线)
         *
         * CDLLONGLINE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLLONGLINE(Records: botvs.Record[]): number[];
        /**
         * Long Line Candle (K线图:长线)
         *
         * CDLLONGLINE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLLONGLINE(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Marubozu (K线图:光头光脚 )
         *
         * CDLMARUBOZU(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLMARUBOZU(Records: botvs.Record[]): number[];
        /**
         * Marubozu (K线图:光头光脚 )
         *
         * CDLMARUBOZU(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLMARUBOZU(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Matching Low (K线图:匹配低)
         *
         * CDLMATCHINGLOW(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLMATCHINGLOW(Records: botvs.Record[]): number[];
        /**
         * Matching Low (K线图:匹配低)
         *
         * CDLMATCHINGLOW(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLMATCHINGLOW(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Mat Hold (K线图:垫住)
         *
         * CDLMATHOLD(Records[Open,High,Low,Close],Penetration = 0.5) = Array(outInteger)
         *
         */
        function CDLMATHOLD(Records: botvs.Record[], Penetration: number): number[];
        /**
         * Mat Hold (K线图:垫住)
         *
         * CDLMATHOLD(Records[Open,High,Low,Close],Penetration = 0.5) = Array(outInteger)
         *
         */
        function CDLMATHOLD(
            Open: number[],
            High: number[],
            Low: number[],
            Close: number[],
            Penetration: number,
        ): number[];

        /**
         * Morning Doji Star (K线图:早晨十字星)
         *
         * CDLMORNINGDOJISTAR(Records[Open,High,Low,Close],Penetration = 0.3) = Array(outInteger)
         *
         */
        function CDLMORNINGDOJISTAR(Records: botvs.Record[], Penetration: number): number[];
        /**
         * Morning Doji Star (K线图:早晨十字星)
         *
         * CDLMORNINGDOJISTAR(Records[Open,High,Low,Close],Penetration = 0.3) = Array(outInteger)
         *
         */
        function CDLMORNINGDOJISTAR(
            Open: number[],
            High: number[],
            Low: number[],
            Close: number[],
            Penetration: number,
        ): number[];

        /**
         * Morning Star (K线图:晨星)
         *
         * CDLMORNINGSTAR(Records[Open,High,Low,Close],Penetration = 0.3) = Array(outInteger)
         *
         */
        function CDLMORNINGSTAR(Records: botvs.Record[], Penetration: number): number[];
        /**
         * Morning Star (K线图:晨星)
         *
         * CDLMORNINGSTAR(Records[Open,High,Low,Close],Penetration = 0.3) = Array(outInteger)
         *
         */
        function CDLMORNINGSTAR(
            Open: number[],
            High: number[],
            Low: number[],
            Close: number[],
            Penetration: number,
        ): number[];

        /**
         * On-Neck Pattern (K线图:颈型)
         *
         * CDLONNECK(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLONNECK(Records: botvs.Record[]): number[];
        /**
         * On-Neck Pattern (K线图:颈型)
         *
         * CDLONNECK(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLONNECK(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Piercing Pattern (K线图:穿孔模式)
         *
         * CDLPIERCING(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLPIERCING(Records: botvs.Record[]): number[];
        /**
         * Piercing Pattern (K线图:穿孔模式)
         *
         * CDLPIERCING(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLPIERCING(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Rickshaw Man (K线图:车夫)
         *
         * CDLRICKSHAWMAN(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLRICKSHAWMAN(Records: botvs.Record[]): number[];
        /**
         * Rickshaw Man (K线图:车夫)
         *
         * CDLRICKSHAWMAN(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLRICKSHAWMAN(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Rising/Falling Three Methods (K线图:上升/下降三法)
         *
         * CDLRISEFALL3METHODS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLRISEFALL3METHODS(Records: botvs.Record[]): number[];
        /**
         * Rising/Falling Three Methods (K线图:上升/下降三法)
         *
         * CDLRISEFALL3METHODS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLRISEFALL3METHODS(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Separating Lines (K线图:分割线)
         *
         * CDLSEPARATINGLINES(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSEPARATINGLINES(Records: botvs.Record[]): number[];
        /**
         * Separating Lines (K线图:分割线)
         *
         * CDLSEPARATINGLINES(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSEPARATINGLINES(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Shooting Star (K线图:流星)
         *
         * CDLSHOOTINGSTAR(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSHOOTINGSTAR(Records: botvs.Record[]): number[];
        /**
         * Shooting Star (K线图:流星)
         *
         * CDLSHOOTINGSTAR(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSHOOTINGSTAR(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Short Line Candle (K线图:短线)
         *
         * CDLSHORTLINE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSHORTLINE(Records: botvs.Record[]): number[];
        /**
         * Short Line Candle (K线图:短线)
         *
         * CDLSHORTLINE(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSHORTLINE(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Spinning Top (K线图:陀螺)
         *
         * CDLSPINNINGTOP(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSPINNINGTOP(Records: botvs.Record[]): number[];
        /**
         * Spinning Top (K线图:陀螺)
         *
         * CDLSPINNINGTOP(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSPINNINGTOP(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Stalled Pattern (K线图:停滞模式)
         *
         * CDLSTALLEDPATTERN(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSTALLEDPATTERN(Records: botvs.Record[]): number[];
        /**
         * Stalled Pattern (K线图:停滞模式)
         *
         * CDLSTALLEDPATTERN(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSTALLEDPATTERN(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Stick Sandwich (K线图:棍子三明治)
         *
         * CDLSTICKSANDWICH(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSTICKSANDWICH(Records: botvs.Record[]): number[];
        /**
         * Stick Sandwich (K线图:棍子三明治)
         *
         * CDLSTICKSANDWICH(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLSTICKSANDWICH(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Takuri (Dragonfly Doji with very long lower shadow) (K线图:托里)
         *
         * CDLTAKURI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLTAKURI(Records: botvs.Record[]): number[];
        /**
         * Takuri (Dragonfly Doji with very long lower shadow) (K线图:托里)
         *
         * CDLTAKURI(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLTAKURI(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Tasuki Gap (K线图:翼隙)
         *
         * CDLTASUKIGAP(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLTASUKIGAP(Records: botvs.Record[]): number[];
        /**
         * Tasuki Gap (K线图:翼隙)
         *
         * CDLTASUKIGAP(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLTASUKIGAP(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Thrusting Pattern (K线图:推模式)
         *
         * CDLTHRUSTING(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLTHRUSTING(Records: botvs.Record[]): number[];
        /**
         * Thrusting Pattern (K线图:推模式)
         *
         * CDLTHRUSTING(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLTHRUSTING(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Tristar Pattern (K线图:三星模式)
         *
         * CDLTRISTAR(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLTRISTAR(Records: botvs.Record[]): number[];
        /**
         * Tristar Pattern (K线图:三星模式)
         *
         * CDLTRISTAR(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLTRISTAR(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Unique 3 River (K线图:独特的3河)
         *
         * CDLUNIQUE3RIVER(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLUNIQUE3RIVER(Records: botvs.Record[]): number[];
        /**
         * Unique 3 River (K线图:独特的3河)
         *
         * CDLUNIQUE3RIVER(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLUNIQUE3RIVER(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Upside Gap Two Crows (K线图:双飞乌鸦)
         *
         * CDLUPSIDEGAP2CROWS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLUPSIDEGAP2CROWS(Records: botvs.Record[]): number[];
        /**
         * Upside Gap Two Crows (K线图:双飞乌鸦)
         *
         * CDLUPSIDEGAP2CROWS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLUPSIDEGAP2CROWS(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Upside/Downside Gap Three Methods (K线图:上行/下行缺口三方法)
         *
         * CDLXSIDEGAP3METHODS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLXSIDEGAP3METHODS(Records: botvs.Record[]): number[];
        /**
         * Upside/Downside Gap Three Methods (K线图:上行/下行缺口三方法)
         *
         * CDLXSIDEGAP3METHODS(Records[Open,High,Low,Close]) = Array(outInteger)
         *
         */
        function CDLXSIDEGAP3METHODS(Open: number[], High: number[], Low: number[], Close: number[]): number[];

        /**
         * Vector Ceil (取整函数)
         *
         * CEIL(Records[Close]) = Array(outReal)
         *
         */
        function CEIL(Records: botvs.Record[] | number[]): number[];

        /**
         * Chande Momentum Oscillator (钱德动量摆动指标)
         *
         * CMO(Records[Close],Time Period = 14) = Array(outReal)
         *
         */
        function CMO(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Vector Trigonometric Cos (余弦函数)
         *
         * COS(Records[Close]) = Array(outReal)
         *
         */
        function COS(Records: botvs.Record[] | number[]): number[];

        /**
         * Vector Trigonometric Cosh (双曲余弦值)
         *
         * COSH(Records[Close]) = Array(outReal)
         *
         */
        function COSH(Records: botvs.Record[] | number[]): number[];

        /**
         * Double Exponential Moving Average (双指数移动平均线)
         *
         * DEMA(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function DEMA(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Directional Movement Index (动向指数)
         *
         * DX(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function DX(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Directional Movement Index (动向指数)
         *
         * DX(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function DX(High: number[], Low: number[], Close: number[], TimePeriod: number): number[];

        /**
         * Exponential Moving Average (指数移动平均线)
         *
         * EMA(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function EMA(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Vector Arithmetic Exp (指数函数)
         *
         * EXP(Records[Close]) = Array(outReal)
         *
         */
        function EXP(Records: botvs.Record[] | number[]): number[];

        /**
         * Vector Floor (向下取整)
         *
         * FLOOR(Records[Close]) = Array(outReal)
         *
         */
        function FLOOR(Records: botvs.Record[] | number[]): number[];

        /**
         * Hilbert Transform - Dominant Cycle Period (希尔伯特变换, 主周期)
         *
         * HT_DCPERIOD(Records[Close]) = Array(outReal)
         *
         */
        function HT_DCPERIOD(Records: botvs.Record[] | number[]): number[];

        /**
         * Hilbert Transform - Dominant Cycle Phase (希尔伯特变换,主阶段)
         *
         * HT_DCPHASE(Records[Close]) = Array(outReal)
         *
         */
        function HT_DCPHASE(Records: botvs.Record[] | number[]): number[];

        /**
         * Hilbert Transform - Phasor Components (希尔伯特变换,相成分)
         *
         * HT_PHASOR(Records[Close]) = [Array(outInPhase),Array(outQuadrature)]
         *
         */
        function HT_PHASOR(Records: botvs.Record[] | number[]): [number[], number[]];

        /**
         * Hilbert Transform - SineWave (希尔伯特变换,正弦波)
         *
         * HT_SINE(Records[Close]) = [Array(outSine),Array(outLeadSine)]
         *
         */
        function HT_SINE(Records: botvs.Record[] | number[]): [number[], number[]];

        /**
         * Hilbert Transform - Instantaneous Trendline (希尔伯特变换,瞬时趋势)
         *
         * HT_TRENDLINE(Records[Close]) = Array(outReal)
         *
         */
        function HT_TRENDLINE(Records: botvs.Record[] | number[]): number[];

        /**
         * Hilbert Transform - Trend vs Cycle Mode (希尔伯特变换-趋势与周期模式)
         *
         * HT_TRENDMODE(Records[Close]) = Array(outInteger)
         *
         */
        function HT_TRENDMODE(Records: botvs.Record[] | number[]): number[];

        /**
         * Kaufman Adaptive Moving Average (适应性移动平均线)
         *
         * KAMA(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function KAMA(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Linear Regression (线性回归)
         *
         * LINEARREG(Records[Close],Time Period = 14) = Array(outReal)
         *
         */
        function LINEARREG(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Linear Regression Angle (线性回归的角度)
         *
         * LINEARREG_ANGLE(Records[Close],Time Period = 14) = Array(outReal)
         *
         */
        function LINEARREG_ANGLE(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Linear Regression Intercept (线性回归截距)
         *
         * LINEARREG_INTERCEPT(Records[Close],Time Period = 14) = Array(outReal)
         *
         */
        function LINEARREG_INTERCEPT(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Linear Regression Slope (线性回归斜率)
         *
         * LINEARREG_SLOPE(Records[Close],Time Period = 14) = Array(outReal)
         *
         */
        function LINEARREG_SLOPE(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Vector Log Natural (自然对数)
         *
         * LN(Records[Close]) = Array(outReal)
         *
         */
        function LN(Records: botvs.Record[] | number[]): number[];

        /**
         * Vector Log10 (对数函数)
         *
         * LOG10(Records[Close]) = Array(outReal)
         *
         */
        function LOG10(Records: botvs.Record[] | number[]): number[];

        /**
         * Moving average (移动平均线)
         *
         * MA(Records[Close],Time Period = 30,MA Type = 0) = Array(outReal)
         *
         */
        function MA(Records: botvs.Record[] | number[], TimePeriod: number, MAType: number): number[];

        /**
         * Moving Average Convergence/Divergence (指数平滑移动平均线)
         *
         * MACD(Records[Close],Fast Period = 12,Slow Period = 26,Signal Period = 9) =
         * [Array(outMACD),Array(outMACDSignal),Array(outMACDHist)]
         *
         */
        function MACD(
            Records: botvs.Record[] | number[],
            FastPeriod: number,
            SlowPeriod: number,
            SignalPeriod: number,
        ): [number[], number[], number[]];

        /**
         * MACD with controllable MA type (MA型可控 MACD)
         *
         * MACDEXT(Records[Close],Fast Period = 12,Fast MA = 0,Slow Period = 26,Slow MA = 0,Signal Period = 9,Signal MA
         * =
         * 0) = [Array(outMACD),Array(outMACDSignal),Array(outMACDHist)]
         *
         */
        function MACDEXT(
            Records: botvs.Record[] | number[],
            FastPeriod: number,
            FastMA: number,
            SlowPeriod: number,
            SlowMA: number,
            SignalPeriod: number,
            SignalMA: number,
        ): [number[], number[], number[]];

        /**
         * Moving Average Convergence/Divergence Fix 12/26 (移动平均收敛/发散修复12/26)
         *
         * MACDFIX(Records[Close],Signal Period = 9) = [Array(outMACD),Array(outMACDSignal),Array(outMACDHist)]
         *
         */
        function MACDFIX(Records: botvs.Record[] | number[], SignalPeriod: number): [number[], number[], number[]];

        /**
         * MESA Adaptive Moving Average (MESA 移动平均线)
         *
         * MAMA(Records[Close],Fast Limit = 0.5,Slow Limit = 0.05) = [Array(outMAMA),Array(outFAMA)]
         *
         */
        function MAMA(Records: botvs.Record[] | number[], FastLimit: number, SlowLimit: number): [number[], number[]];

        /**
         * Highest value over a specified period (最大值)
         *
         * MAX(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function MAX(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Index of highest value over a specified period (最大值索引)
         *
         * MAXINDEX(Records[Close],Time Period = 30) = Array(outInteger)
         *
         */
        function MAXINDEX(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Median Price (中位数价格)
         *
         * MEDPRICE(Records[High,Low]) = Array(outReal)
         *
         */
        function MEDPRICE(Records: botvs.Record[]): number[];
        /**
         * Median Price (中位数价格)
         *
         * MEDPRICE(Records[High,Low]) = Array(outReal)
         *
         */
        function MEDPRICE(High: number[], Low: number[]): number[];

        /**
         * Money Flow Index (货币流量指数)
         *
         * MFI(Records[High,Low,Close,Volume],Time Period = 14) = Array(outReal)
         *
         */
        function MFI(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Money Flow Index (货币流量指数)
         *
         * MFI(Records[High,Low,Close,Volume],Time Period = 14) = Array(outReal)
         *
         */
        function MFI(High: number[], Low: number[], Close: number[], Volume: number[], TimePeriod: number): number[];

        /**
         * MidPoint over period (中点)
         *
         * MIDPOINT(Records[Close],Time Period = 14) = Array(outReal)
         *
         */
        function MIDPOINT(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Midpoint Price over period (中点价格)
         *
         * MIDPRICE(Records[High,Low],Time Period = 14) = Array(outReal)
         *
         */
        function MIDPRICE(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Midpoint Price over period (中点价格)
         *
         * MIDPRICE(Records[High,Low],Time Period = 14) = Array(outReal)
         *
         */
        function MIDPRICE(High: number[], Low: number[], TimePeriod: number): number[];

        /**
         * Lowest value over a specified period (最小值)
         *
         * MIN(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function MIN(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Index of lowest value over a specified period (最小值索引)
         *
         * MININDEX(Records[Close],Time Period = 30) = Array(outInteger)
         *
         */
        function MININDEX(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Lowest and highest values over a specified period (最小最大值)
         *
         * MINMAX(Records[Close],Time Period = 30) = [Array(outMin),Array(outMax)]
         *
         */
        function MINMAX(Records: botvs.Record[] | number[], TimePeriod: number): [number[], number[]];

        /**
         * Indexes of lowest and highest values over a specified period (最小最大值索引)
         *
         * MINMAXINDEX(Records[Close],Time Period = 30) = [Array(outMinIdx),Array(outMaxIdx)]
         *
         */
        function MINMAXINDEX(Records: botvs.Record[] | number[], TimePeriod: number): [number[], number[]];

        /**
         * Minus Directional Indicator (负向指标)
         *
         * MINUS_DI(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function MINUS_DI(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Minus Directional Indicator (负向指标)
         *
         * MINUS_DI(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function MINUS_DI(High: number[], Low: number[], Close: number[], TimePeriod: number): number[];

        /**
         * Minus Directional Movement (负向运动)
         *
         * MINUS_DM(Records[High,Low],Time Period = 14) = Array(outReal)
         *
         */
        function MINUS_DM(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Minus Directional Movement (负向运动)
         *
         * MINUS_DM(Records[High,Low],Time Period = 14) = Array(outReal)
         *
         */
        function MINUS_DM(High: number[], Low: number[], TimePeriod: number): number[];

        /**
         * Momentum (动量)
         *
         * MOM(Records[Close],Time Period = 10) = Array(outReal)
         *
         */
        function MOM(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Normalized Average True Range (归一化平均值范围)
         *
         * NATR(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function NATR(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Normalized Average True Range (归一化平均值范围)
         *
         * NATR(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function NATR(High: number[], Low: number[], Close: number[], TimePeriod: number): number[];

        /**
         * On Balance Volume (能量潮)
         *
         * OBV(Records[Close],Records[Volume]) = Array(outReal)
         *
         */
        function OBV(Records: botvs.Record[]): number[];

        /**
         * On Balance Volume (能量潮)
         *
         * OBV(Records[Close],Records[Volume]) = Array(outReal)
         *
         */
        function OBV(Close: number[], Volume: number[]): number[];

        /**
         * Plus Directional Indicator (更向指示器)
         *
         * PLUS_DI(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function PLUS_DI(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Plus Directional Indicator (更向指示器)
         *
         * PLUS_DI(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function PLUS_DI(High: number[], Low: number[], Close: number[], TimePeriod: number): number[];

        /**
         * Plus Directional Movement (定向运动)
         *
         * PLUS_DM(Records[High,Low],Time Period = 14) = Array(outReal)
         *
         */
        function PLUS_DM(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Plus Directional Movement (定向运动)
         *
         * PLUS_DM(Records[High,Low],Time Period = 14) = Array(outReal)
         *
         */
        function PLUS_DM(High: number[], Low: number[], TimePeriod: number): number[];

        /**
         * Percentage Price Oscillator (价格振荡百分比)
         *
         * PPO(Records[Close],Fast Period = 12,Slow Period = 26,MA Type = 0) = Array(outReal)
         *
         */
        function PPO(
            Records: botvs.Record[] | number[],
            FastPeriod: number,
            SlowPeriod: number,
            MAType: number,
        ): number[];

        /**
         * Rate of change : ((price/prevPrice)-1)*100 (变动率指标)
         *
         * ROC(Records[Close],Time Period = 10) = Array(outReal)
         *
         */
        function ROC(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Rate of change Percentage: (price-prevPrice)/prevPrice (价格变化率)
         *
         * ROCP(Records[Close],Time Period = 10) = Array(outReal)
         *
         */
        function ROCP(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Rate of change ratio: (price/prevPrice) (价格变化率)
         *
         * ROCR(Records[Close],Time Period = 10) = Array(outReal)
         *
         */
        function ROCR(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Rate of change ratio 100 scale: (price/prevPrice)*100 (价格变化率)
         *
         * ROCR100(Records[Close],Time Period = 10) = Array(outReal)
         *
         */
        function ROCR100(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Relative Strength Index (相对强弱指标)
         *
         * RSI(Records[Close],Time Period = 14) = Array(outReal)
         *
         */
        function RSI(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Parabolic SAR (抛物线转向)
         *
         * SAR(Records[High,Low],Acceleration Factor = 0.02,AF Maximum = 0.2) = Array(outReal)
         *
         */
        function SAR(Records: botvs.Record[], AccelerationFactor: number, AFMaximum: number): number[];
        /**
         * Parabolic SAR (抛物线转向)
         *
         * SAR(Records[High,Low],Acceleration Factor = 0.02,AF Maximum = 0.2) = Array(outReal)
         *
         */
        function SAR(High: number[], Low: number[], AccelerationFactor: number, AFMaximum: number): number[];

        /**
         * Parabolic SAR - Extended (增强型抛物线转向)
         *
         * SAREXT(Records[High,Low],Start Value = 0,Offset on Reverse = 0,AF Init Long = 0.02,AF Long = 0.02,AF Max
         * Long =
         * 0.2,AF Init Short = 0.02,AF Short = 0.02,AF Max Short = 0.2) = Array(outReal)
         *
         */
        function SAREXT(
            Records: botvs.Record[],
            StartValue: number,
            OffsetonReverse: number,
            AFInitLong: number,
            AFLong: number,
            AFMaxLong: number,
            AFInitShort: number,
            AFShort: number,
            AFMaxShort: number,
        ): number[];
        /**
         * Parabolic SAR - Extended (增强型抛物线转向)
         *
         * SAREXT(Records[High,Low],Start Value = 0,Offset on Reverse = 0,AF Init Long = 0.02,AF Long = 0.02,AF Max
         * Long =
         * 0.2,AF Init Short = 0.02,AF Short = 0.02,AF Max Short = 0.2) = Array(outReal)
         *
         */
        function SAREXT(
            High: number[],
            Low: number[],
            StartValue: number,
            OffsetonReverse: number,
            AFInitLong: number,
            AFLong: number,
            AFMaxLong: number,
            AFInitShort: number,
            AFShort: number,
            AFMaxShort: number,
        ): number[];

        /**
         * Vector Trigonometric Sin (正弦值)
         *
         * SIN(Records[Close]) = Array(outReal)
         *
         */
        function SIN(Records: botvs.Record[] | number[]): number[];

        /**
         * Vector Trigonometric Sinh (双曲正弦函数)
         *
         * SINH(Records[Close]) = Array(outReal)
         *
         */
        function SINH(Records: botvs.Record[] | number[]): number[];

        /**
         * Simple Moving Average (简单移动平均)
         *
         * SMA(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function SMA(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Vector Square Root (平方根)
         *
         * SQRT(Records[Close]) = Array(outReal)
         *
         */
        function SQRT(Records: botvs.Record[] | number[]): number[];

        /**
         * Standard Deviation (标准偏差)
         *
         * STDDEV(Records[Close],Time Period = 5,Deviations = 1) = Array(outReal)
         *
         */
        function STDDEV(Records: botvs.Record[] | number[], TimePeriod: number, Deviations: number): number[];

        /**
         * Stochastic (STOCH指标)
         *
         * STOCH(Records[High,Low,Close],Fast-K Period = 5,Slow-K Period = 3,Slow-K MA = 0,Slow-D Period = 3,Slow-D MA
         * = 0)
         * = [Array(outSlowK),Array(outSlowD)]
         *
         */
        function STOCH(
            Records: botvs.Record[],
            Fast_KPeriod: number,
            Slow_KPeriod: number,
            Slow_KMA: number,
            Slow_DPeriod: number,
            Slow_DMA: number,
        ): [number[], number[]];
        /**
         * Stochastic (STOCH指标)
         *
         * STOCH(Records[High,Low,Close],Fast-K Period = 5,Slow-K Period = 3,Slow-K MA = 0,Slow-D Period = 3,Slow-D MA
         * = 0)
         * = [Array(outSlowK),Array(outSlowD)]
         *
         */
        function STOCH(
            High: number[],
            Low: number[],
            Close: number[],
            Fast_KPeriod: number,
            Slow_KPeriod: number,
            Slow_KMA: number,
            Slow_DPeriod: number,
            Slow_DMA: number,
        ): [number[], number[]];

        /**
         * Stochastic Fast (快速STOCH指标)
         *
         * STOCHF(Records[High,Low,Close],Fast-K Period = 5,Fast-D Period = 3,Fast-D MA = 0) =
         * [Array(outFastK),Array(outFastD)]
         *
         */
        function STOCHF(
            Records: botvs.Record[],
            Fast_KPeriod: number,
            Fast_DPeriod: number,
            Fast_DMA: number,
        ): [number[], number[]];
        /**
         * Stochastic Fast (快速STOCH指标)
         *
         * STOCHF(Records[High,Low,Close],Fast-K Period = 5,Fast-D Period = 3,Fast-D MA = 0) =
         * [Array(outFastK),Array(outFastD)]
         *
         */
        function STOCHF(
            High: number[],
            Low: number[],
            Close: number[],
            Fast_KPeriod: number,
            Fast_DPeriod: number,
            Fast_DMA: number,
        ): [number[], number[]];

        /**
         * Stochastic Relative Strength Index (随机强弱指数)
         *
         * STOCHRSI(Records[Close],Time Period = 14,Fast-K Period = 5,Fast-D Period = 3,Fast-D MA = 0) =
         * [Array(outFastK),Array(outFastD)]
         *
         */
        function STOCHRSI(
            Records: botvs.Record[] | number[],
            TimePeriod: number,
            Fast_KPeriod: number,
            Fast_DPeriod: number,
            Fast_DMA: number,
        ): [number[], number[]];

        /**
         * Summation (求和)
         *
         * SUM(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function SUM(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Triple Exponential Moving Average (T3) (三指数移动平均)
         *
         * T3(Records[Close],Time Period = 5,Volume Factor = 0.7) = Array(outReal)
         *
         */
        function T3(Records: botvs.Record[] | number[], TimePeriod: number, VolumeFactor: number): number[];

        /**
         * Vector Trigonometric Tan (正切)
         *
         * TAN(Records[Close]) = Array(outReal)
         *
         */
        function TAN(Records: botvs.Record[] | number[]): number[];

        /**
         * Vector Trigonometric Tanh (双曲正切函数)
         *
         * TANH(Records[Close]) = Array(outReal)
         *
         */
        function TANH(Records: botvs.Record[] | number[]): number[];

        /**
         * Triple Exponential Moving Average (三指数移动平均)
         *
         * TEMA(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function TEMA(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * True Range (真实范围)
         *
         * TRANGE(Records[High,Low,Close]) = Array(outReal)
         *
         */
        function TRANGE(Records: botvs.Record[]): number[];
        /**
         * True Range (真实范围)
         *
         * TRANGE(Records[High,Low,Close]) = Array(outReal)
         *
         */
        function TRANGE(High: number[], Low: number[], Close: number[]): number[];

        /**
         * Triangular Moving Average (三指数移动平均)
         *
         * TRIMA(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function TRIMA(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * 1-day Rate-Of-Change (ROC) of a Triple Smooth EMA (三重指数平滑平均线)
         *
         * TRIX(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function TRIX(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Time Series Forecast (时间序列预测)
         *
         * TSF(Records[Close],Time Period = 14) = Array(outReal)
         *
         */
        function TSF(Records: botvs.Record[] | number[], TimePeriod: number): number[];

        /**
         * Typical Price (典型价格)
         *
         * TYPPRICE(Records[High,Low,Close]) = Array(outReal)
         *
         */
        function TYPPRICE(Records: botvs.Record[]): number[];
        /**
         * Typical Price (典型价格)
         *
         * TYPPRICE(Records[High,Low,Close]) = Array(outReal)
         *
         */
        function TYPPRICE(High: number[], Low: number[], Close: number[]): number[];

        /**
         * Ultimate Oscillator (极限振子)
         *
         * ULTOSC(Records[High,Low,Close],First Period = 7,Second Period = 14,Third Period = 28) = Array(outReal)
         *
         */
        function ULTOSC(
            Records: botvs.Record[],
            FirstPeriod: number,
            SecondPeriod: number,
            ThirdPeriod: number,
        ): number[];
        /**
         * Ultimate Oscillator (极限振子)
         *
         * ULTOSC(Records[High,Low,Close],First Period = 7,Second Period = 14,Third Period = 28) = Array(outReal)
         *
         */
        function ULTOSC(
            High: number[],
            Low: number[],
            Close: number[],
            FirstPeriod: number,
            SecondPeriod: number,
            ThirdPeriod: number,
        ): number[];

        /**
         * Variance (变量定义)
         *
         * VAR(Records[Close],Time Period = 5,Deviations = 1) = Array(outReal)
         *
         */
        function VAR(Records: botvs.Record[] | number[], TimePeriod: number, Deviations: number): number[];

        /**
         * Weighted Close Price (加权收盘价)
         *
         * WCLPRICE(Records[High,Low,Close]) = Array(outReal)
         *
         */
        function WCLPRICE(Records: botvs.Record[]): number[];
        /**
         * Weighted Close Price (加权收盘价)
         *
         * WCLPRICE(Records[High,Low,Close]) = Array(outReal)
         *
         */
        function WCLPRICE(High: number[], Low: number[], Close: number[]): number[];

        /**
         * Williams' %R (威廉指标)
         *
         * WILLR(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function WILLR(Records: botvs.Record[], TimePeriod: number): number[];
        /**
         * Williams' %R (威廉指标)
         *
         * WILLR(Records[High,Low,Close],Time Period = 14) = Array(outReal)
         *
         */
        function WILLR(High: number[], Low: number[], Close: number[], TimePeriod: number): number[];

        /**
         * Weighted Moving Average (加权移动平均)
         *
         * WMA(Records[Close],Time Period = 30) = Array(outReal)
         *
         */
        function WMA(Records: botvs.Record[] | number[], TimePeriod: number): number[];
    }

    /**
     * 订单的状态: 未完成
     */
    const ORDER_STATE_PENDING: botvs.VOrderState;

    /**
     * 订单的状态: 已关闭
     */
    const ORDER_STATE_CLOSED: botvs.VOrderState;

    /**
     * 订单的状态: 已取消
     */
    const ORDER_STATE_CANCELED: botvs.VOrderState;

    /**
     * 订单的类型: 买单
     */
    const ORDER_TYPE_BUY: botvs.VOrderType;

    /**
     * 订单的类型: 卖单
     */
    const ORDER_TYPE_SELL: botvs.VOrderType;

    /**
     * 多头仓位(CTP中用closebuy_today平仓)
     */
    const PD_LONG: botvs.VPositionType;

    /**
     * 空头仓位(CTP用closesell_today)平仓
     */
    const PD_SHORT: botvs.VPositionType;

    /**
     * (CTP期货中)PD_LONG_YD为咋日多头仓位(用closebuy平
     */
    const PD_LONG_YD: botvs.VPositionType;

    /**
     * 咋日空头仓位(用closesell平)
     */
    const PD_SHORT_YD: botvs.VPositionType;

    /**
     * 1分钟
     */
    const PERIOD_M1: botvs.VPeriod;

    /**
     * 5分钟
     */
    const PERIOD_M5: botvs.VPeriod;

    /**
     * 15分钟
     */
    const PERIOD_M15: botvs.VPeriod;

    /**
     * 30分钟
     */
    const PERIOD_M30: botvs.VPeriod;

    /**
     * 1小时
     */
    const PERIOD_H1: botvs.VPeriod;

    /**
     * 1天
     */
    const PERIOD_D1: botvs.VPeriod;

    /**
     * 买单日志
     */
    const LOG_TYPE_BUY: botvs.VLogType;

    /**
     * 卖单日志
     */
    const LOG_TYPE_SELL: botvs.VLogType;

    /**
     * 取消日志
     */
    const LOG_TYPE_CANCEL: botvs.VLogType;

    /**
     * 默认主交易所对像, 添加交易平台时排列第一的交易所
     */
    const exchange: botvs.Exchange;

    /**
     * 交易所数组, 如果添加多个交易所, 可以访问此变量获取交易所对像
     */
    const exchanges: botvs.Exchange[];

    /**
     * 保存一条信息到日志列表
     *
     * 如果在字符串后面加上@字符则消息会进入推送队列, 推送到使用绑定的微信账号上(账户安全里绑定)(50条/小时, 1条/5秒 限制)
     * 如: Log("微信你好 !@"); 或Log("微信你好, #ff0000@");
     * Log支持打印base64编码后的图片, 以"`"开头, 以"`"结尾, 如Log("`data:image/png;base64,AAAA`")
     * Log支持直接打印Python的matplotlib.pyplot对象, 只要对象包含savefig方法就可以直接Log打印, 如:
     * import matplotlib.pyplot as plt
     * def main():
     * plt.plot([3,6,2,4,7,1])
     * Log(plt)
     *
     */
    function Log(arg: string): void;

    /**
     * 休眠函数
     *
     * 参数为毫秒数,如Sleep(1000)为休眠一秒
     *
     */
    function Sleep(Millisecond: number): void;

    /**
     * 判断是否是模拟回测
     *
     * 模拟回测状态返回true,实盘返回false
     *
     */
    function IsVirtual(): boolean;

    /**
     * 记录盈利值,这个为总盈利的值,参数类型为浮点数
     *
     */
    function LogProfit(Profit: number): void;

    /**
     * 清空所有收益日志, 可以带一个数字参数, 指定保留的条数
     *
     */
    function LogProfitReset(reserve?: number): void;

    /**
     * 清空所有日志, 可以带一个数字参数, 指定保留的条数
     *
     */
    function LogReset(reserve?: number): void;

    /**
     * 此信息不保存到日志列表里, 只更新当前机器人的状态信息, 在日志上方显示, 可多次调用, 更新状态
     *
     * * LogStatus('这是一个普通的状态提示');
     * LogStatus('这是一个红色字体的状态提示 #ff0000');
     * LogStatus('这是一个多行的状态信息\n我是第二行');
     * LogStatus支持打印base64编码后的图片, 以"`"开头, 以"`"结尾, 如LogStatus("`data:image/png;base64,AAAA`")
     * LogStatus支持直接传入Python的matplotlib.pyplot对象, 只要对象包含savefig方法就可以传入LogStatus, 如:
     * import matplotlib.pyplot as plt
     * def main():
     * plt.plot([3,6,2,4,7,1])
     * LogStatus(plt)
     * var table = {type: 'table', title: '持仓信息', cols: ['列1', '列2'], rows: [ ['abc', 'def'], ['ABC', 'support color
     * #ff0000']]}; LogStatus('`' + JSON.stringify(table)+'`'); // JSON序列化后两边加上`字符, 视为一个复杂消息格式(当前支持表格)
     * LogStatus('第一行消息\n`' + JSON.stringify(table)+'`\n第三行消息');
     * // 表格信息也可以在多行中出现 LogStatus('`' + JSON.stringify([table,
     * table])+'`'); // 支持多个表格同时显示, 将以TAB显示到一组里
     * // 也可以构造一个按钮在表格中, 策略用GetCommand接收cmd属性的内容
     * var table = {
     *  type: 'table',
     *  title: '持仓操作',
     *  cols: ['列1', '列2', 'Action'],
     *  rows: [
     *      ['abc', 'def', {'type':'button', 'cmd': 'coverAll', 'name': '平仓'}],
     *  ]
     * };
     * LogStatus('`' + JSON.stringify(table) + '`')
     * // 或者构造一单独的按钮
     * LogStatus('`' + JSON.stringify({'type':'button', 'cmd': 'coverAll', 'name': '平仓'}) + '`')
     * // 可以自定义按钮风格(bootstrap的按钮属性)
     * LogStatus('`' + JSON.stringify({'type':'button', 'class': 'btn btn-xs btn-danger', 'cmd': 'coverAll', 'name':
     * '平仓'}) + '`')
     *
     */
    function LogStatus(Msg: string): void;

    /**
     * 打开或者关闭定单和出错信息的日志记录
     *
     */
    function EnableLog(IsEnable: boolean): void;

    /**
     * 图表绘图函数
     *
     * 参数为可以JSON序列化的HighStocks的Highcharts.StockChart参数, 比原生的参数增加一个
     * __isStock属性, 如果指定__isStock: false, 则显示为普通图表
     * 返回对像可以调用add([series索引(如0), 数据])向指定索引的series添加数据, 调用reset()
     * 清空图表数据, reset可以带一个数字参数, 指定保留的条数
     * 可以调用add([series索引(如0), 数据, 此数据在series中的索引])来更改数据
     * 可以为负数, -1指最后一个, -2是倒数第二个, 如:
     * chart.add([0, 13.5, -1]), 更改series[0].data的倒数第一个点的数据
     * 支持显示多个图表, 配置时只需传入数组参数即可如: var chart = Chart([{...}, {...}, {...}]),
     * 比如图表一有两个series, 图表二有一个series, 图表三有一个series,
     * 那么add时指定0与1序列ID代表更新图表1的两个序列的数据, add时指定序列ID为2指图表2的第一个
     * series的数据, 指定序列3指的是图表3的第一个series的数据 HighStocks:
     * http://api.highcharts.com/highstock
     *
     */
    function Chart(...options: botvs.ChartOptions[]): botvs.RChart;

    /**
     * 发送邮件函数
     *
     * Mail(smtpServer, smtpUsername, smtpPassword, mailTo, title, body); ret true or false
     * Mail("smtp.163.com", "asdf@163.com", "password", "111@163.com", "title", "body")
     *
     */
    function Mail(
        smtpServer: string,
        smtpUsername: string,
        smtpPassword: string,
        mailTo: string,
        title: string,
        body: string,
    ): boolean;

    /**
     * 错误信息过滤
     *
     * 被此正则表达式匹配的错误将不上传到日志系统, 可多次调用设置多个
     * SetErrorFilter("502:|503:|tcp|character|unexpected|network|timeout|WSARecv|Connect|GetAddr|no
     * such|reset|http|received|EOF|reused");
     *
     */
    function SetErrorFilter(RegEx: string): void;

    /**
     * 返回机器人进程ID
     *
     */
    function GetPid(): number;

    /**
     * 获取最近一次出错信息,一般无需使用,因为程序会把出错信息自动上传到日志系统
     *
     */
    function GetLastError(): string;

    /**
     * 可保存的全局字典表
     *
     * KV表, 永久保存在本地文件, 每个机器人单独一个数据库, 重启或者托管者退出后一直存在
     * K必须为数字或者字符串, 不区分大小写, V可以为任何可以JSON序列化的内容
     * _G("num", 1); // 设置一个全局变量num, 值为1
     * _G("num", "ok"); // 更改一个全局变量num, 值为字符串ok
     * _G("num", null); // 删除全局变量 num
     * _G("num"); // 返回全局变量num的值
     * _G(); // 返回当前机器人的ID
     * _G(null); // 删除所有全局变量
     *
     */
    function _G<T>(K: string, V: T): void;

    /**
     * 获取交互命令(utf-8)
     *
     * 获取策略交互界面发来的命令并清空, 没有命令则返回null, 返回的命令格式为 "按钮名称:参数", 如果没有参数, 则命令就是按钮名称
     * while (true) {
     * var cmd = GetCommand();
     * if (cmd) {
     *   Log(cmd);
     * }
     * Sleep(1000);
     * }
     *
     */
    function GetCommand(): string | null;

    /**
     * 原始的Socket访问, 支持tcp, udp, tls, unix 协议
     *
     * @example
     *
     * ```
     * var client = Dial("tls://www.baidu.com:443"); // Dial支持tcp://, udp://, tls://, unix:// 协议, 可加一个参数指定超时的秒数
     * if (client) {
     *  client.write("GET / HTTP/1.1\nConnection: Closed\n\n"); // write可再跟一个数字参数指定超时, write返回成功发送的字节数
     *  while (true) {
     *      var buf = client.read();// read可再跟一个数字参数指定超时, 返回null指出错或者超时或者socket已经关闭
     *      if (!buf) {
     *          break;
     *      }
     *      Log(buf);
     *  }
     *  client.close();
     * }
     * ```
     *
     */
    function Dial(Address: string, Timeout?: number): botvs.Socket | void;

    /**
     * 网络URL访问
     *
     * HttpQuery(Url, PostData, Cookies, Headers, IsReturnHeader)
     * 获取一个Url的返回内容, 如果第二个参数PostData为字符串就以POST方式提交
     * 第二个参数PostData可以自定义方法比如HttpQuery('http://www.abc.com', {method:'PUT', data:'xx'})
     * 传递Cookie字符串需要第三个参数, 但不需要POST请将第二个参数置为null
     * 模拟测试的时候因为无法模拟访问URL, 函数就返回固定字符串 Dummy Data
     * 可以用此接口发送短信, 或者与其它API进行交互
     * HttpQuery("http://www.baidu.com/"); // Get
     * HttpQuery("http://www.163.com", "xxx"); // Post
     * HttpQuery("http://www.baidu.com/", null, "a=10; b=20", "User-Agent: Mobile\nContent-Type: text/html", true);
     * // will return {Header: HTTP Header, Body: HTML}
     *
     */
    function HttpQuery(
        Url: string,
        PostData: string | null | { method: string, data?: string },
        Cookies: string,
        Headers: string,
    ): string;
    function HttpQuery(
        Url: string,
        PostData: string | null | { method: string, data?: string },
        Cookies: string,
        Headers: string,
        IsReturnHeader: true,
    ): { Header: string, Body: string };

    /**
     * 支持 md5/sha256/sha512/sha1 的哈希计算, 只支持实盘
     *
     * 第二个参数可设置为raw/hex/base64, 分别指输出加密后的 原始内容/hex编码过的/base64编码过的
     * Log(Hash('md5', 'hex', 'hello'));
     * Log(Hash('sha512', 'base64', 'hello'));
     *
     */
    function Hash(
        Algo: 'md5' | 'sha256' | 'sha512' | 'sha1',
        OutputAlgo: 'hex' | 'base64' | 'raw',
        Data: string,
    ): string;

    /**
     * 支持 md5/sha256/sha512/sha1 的HMAC加密计算, 只支持实盘
     *
     * 第二个参数可设置为raw/hex/base64, 分别指输出加密后的 原始内容/hex编码过的/base64编码过的
     * Log(HMAC('md5', 'hex', 'hello', 'pass'));
     * Log(HMAC('sha512', 'base64', 'hello', 'pass'));
     *
     */
    function HMAC(
        Algo: 'md5' | 'sha256' | 'sha512' | 'sha1',
        OutputAlgo: 'hex' | 'base64' | 'raw',
        Data: string,
        password: string,
    ): string;

    /**
     * 返回指定时间戳(ms)字符串, 不传任何参数就返回当前时间,
     * 如_D(),或者_D(1478570053241), 默认格式为yyyy-MM-dd hh:mm:ss
     *
     */
    function _D(timestamp: string, format: string): string;

    /**
     * 格式化一个浮点函数
     *
     * @param precision Default 4
     */
    function _N(num: number, precision?: number): string;

    /**
     * 重试函数, 会一直调用指定函数到成功返回(函数返回null或者false会重试),
     * 比如_C(exchange.GetTicker), 默认重试间隔为3秒, 可以调用_CDelay函数来控制重试间隔
     * 比如_CDelay(1000), 指改变_C函数重试间隔为1秒
     *
     */
    function _C<T>(func: (...args: any[]) => T, ...args: any[]): T;

    /**
     * 比如_CDelay(1000), 指改变_C函数重试间隔为1秒, 默认为3秒
     *
     */
    function _CDelay(delay: number): void;
}
