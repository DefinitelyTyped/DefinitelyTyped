declare namespace Safie {
    /**
     * AI-Appの操作に関する機能群
     */
    namespace AIApp {
        /**
         * AI-Appアプリケーションで有効化されている機能
         */
        enum ApplicationFeature {
            /**
             * イベント出力
             */
            Event = "event",
            /**
             * オブジェクト出力
             */
            Object = "object",
            /**
             * デバイスステータス出力
             */
            DeviceStatus = "device_status",
            /**
             * メトリクス出力
             */
            Metrics = "metrics",
            /**
             * ジオメトリ設定
             */
            GeometryConfig = "geometry_config",
        }
        /**
         * AI-Appアプリケーション情報
         */
        interface Application {
            /**
             * AI-AppアプリケーションID
             */
            applicationId: number;
            /**
             * AI-Appアプリケーション名称
             */
            name: string;
            /**
             * AI-Appアプリケーションで有効化されている機能一覧
             */
            features: ApplicationFeature[];
        }
        /**
         * AI-Appアプリケーション一覧取得の結果
         */
        interface QueryApplicationsResult {
            /**
             * 返却されたAI-Appアプリケーション情報
             */
            list: Application[];
        }
        /**
         * AI-Appアプリケーション情報
         */
        interface ApplicationInfo {
            /**
             * AI-AppアプリケーションID
             */
            applicationId: number;
            /**
             * AI-Appアプリケーション名称
             */
            applicationName: string;
        }
        /**
         * AI-Appアプリケーションを利用可能なデバイスの情報
         */
        interface ApplicationDevice {
            /**
             * デバイスID
             */
            deviceId: string;
            /**
             * シリアル
             */
            serial: string;
            setting: {
                /**
                 * デバイス名
                 *
                 * 設定されていない場合、このキーは含まれません。
                 */
                name?: string;
            };
            model: {
                /**
                 * モデル名
                 */
                description: string;
            };
            status: {
                /**
                 * デバイスの映像ストリーミング状況
                 *
                 * ローカルストレージ録画機能が有効な場合は常にfalseとなります。
                 */
                videoStreaming: boolean;
                /**
                 * サーバーへの接続状況
                 */
                serverConnecting: boolean;
            };
            /**
             * デバイスの機能情報のリスト
             */
            capabilities: string[];
            /**
             * AI-Appアプリケーション情報のリスト
             */
            applications: ApplicationInfo[];
        }
        /**
         * AI-Appアプリケーション利用可能デバイス一覧取得の結果
         */
        interface QueryDevicesResult {
            /**
             * 返却された件数
             */
            count: number;
            /**
             * 返却されたリストのオフセット
             */
            offset: number;
            /**
             * 返却されたリストの総件数
             */
            total: number;
            /**
             * 次のリストの有無
             */
            hasNext: boolean;
            /**
             * 返却されたデバイス情報
             */
            list: ApplicationDevice[];
        }
        /**
         * ジオメトリ設定の種別
         */
        enum GeometryConfigType {
            /**
             * ライン（線分）
             */
            Line = "line",
            /**
             * 方向付きライン（通過方向を指定）
             */
            LineIO = "line_io",
            /**
             * エリア（多角形ジオメトリ）
             */
            Polygon = "polygon",
            /**
             * 全域
             */
            All = "all",
        }
        /**
         * ジオメトリ設定の座標
         *
         * 映像の左上を原点（0, 0）、右下を（1, 1）とする正規化座標。
         */
        interface Point {
            /**
             * x座標
             */
            x: number;
            /**
             * y座標
             */
            y: number;
        }
        /**
         * ジオメトリ設定情報
         */
        interface GeometryConfig {
            /**
             * ジオメトリ設定ID
             */
            geometryConfigId: number;
            /**
             * ジオメトリ設定の名称
             */
            name: string | null;
            /**
             * ジオメトリ設定の種別
             */
            type: GeometryConfigType;
            /**
             * ジオメトリ設定の座標リスト
             */
            points: Point[];
            /**
             * ジオメトリ設定のタグリスト
             */
            tags: string[];
            /**
             * ジオメトリ滞在時間のしきい値（ミリ秒）
             *
             * 未設定の場合はそのジオメトリに侵入したタイミングで瞬時検知されます。
             */
            duration: number | null;
            /**
             * ジオメトリと関連のあるイベント発生判定に利用されるしきい値（上限）
             */
            thresholdHigh: number | null;
            /**
             * ジオメトリと関連のあるイベント発生判定に利用されるしきい値（下限）
             */
            thresholdLow: number | null;
            /**
             * フロントで表示する際の色を表すカラーコード（#と16進数6桁の表記）
             */
            color: string | null;
        }
        /**
         * ジオメトリ設定一覧取得の結果
         */
        interface QueryGeometryConfigsResult {
            /**
             * 返却されたジオメトリ設定情報
             */
            list: GeometryConfig[];
        }
        /**
         * ジオメトリ設定作成の結果
         */
        interface CreateGeometryConfigResult {
            /**
             * 作成されたジオメトリ設定のID
             */
            geometryConfigId: number;
        }
        /**
         * 通知手段
         */
        enum NotificationMethod {
            /**
             * メール通知
             */
            Mail = "mail",
            /**
             * Webhook通知
             */
            Webhook = "webhook",
            /**
             * モバイルプッシュ通知
             */
            MobilePush = "mobile_push",
            /**
             * ブラウザプッシュ通知
             */
            WebPush = "web_push",
        }
        /**
         * 曜日
         */
        enum DayOfWeek {
            Monday = "mon",
            Tuesday = "tue",
            Wednesday = "wed",
            Thursday = "thu",
            Friday = "fri",
            Saturday = "sat",
            Sunday = "sun",
        }
        /**
         * 通知対象とする時間帯
         */
        interface NotificationTimeRange {
            /**
             * 開始時間（UTC、`HH:MM:SS`形式）
             *
             * 時間のみ指定可能です（分・秒は`00:00`である必要があります）。
             */
            start: string;
            /**
             * 終了時間（UTC、`HH:MM:SS`形式）
             *
             * 時間のみ指定可能です（分・秒は`00:00`である必要があります）。
             * startより前の時間を指定した場合は翌日の時間として扱われます（例: start=22:00:00, end=02:00:00）。
             * startと同じ時間を指定した場合は同日として扱われ、その時刻ちょうどのみが対象となります。
             */
            end: string;
        }
        /**
         * 通知手段固有の設定値
         *
         * 通知手段が`webhook`の場合は通知先の情報が、`mail`・`mobile_push`・`web_push`の場合は空オブジェクト`{}`が返ります。
         * 使用していない認証情報のプロパティは含まれません。
         */
        interface NotificationConfigOptions {
            /**
             * 通知先のURL
             */
            url?: string;
            /**
             * 認証に利用するBearerトークン
             */
            token?: string;
            /**
             * Basic認証のユーザー名
             */
            username?: string;
            /**
             * Basic認証のパスワード
             */
            password?: string;
        }
        /**
         * 通知設定の作成・更新で指定する通知手段固有の設定値
         *
         * 通知手段が`webhook`の場合に通知先の情報を指定します。`mail`・`mobile_push`・`web_push`の場合は空オブジェクト`{}`を指定します。
         * 認証情報は`token`（Bearer認証）または`username`・`password`（Basic認証）のいずれか一方を指定します。
         * 使用しない認証情報は、プロパティを省略するか`null`を指定してください。
         */
        interface NotificationConfigOptionsInput {
            /**
             * 通知先のURL (最大文字数: 2048)
             *
             * schemeはhttpまたはhttpsが必須です。通知手段が`webhook`の場合は指定必須です。
             */
            url?: string | null;
            /**
             * 認証に利用するBearerトークン (最大文字数: 2048)
             *
             * 指定した値は`Authorization: Bearer <token>`の形式でリクエストヘッダーに付与されます。
             * `null`を指定した場合はプロパティの省略と同じ扱いになります。
             */
            token?: string | null;
            /**
             * Basic認証のユーザー名 (最大文字数: 2048)
             *
             * passwordを指定した場合は指定必須です。tokenを指定した場合は指定できません。
             * `null`を指定した場合はプロパティの省略と同じ扱いになります。
             */
            username?: string | null;
            /**
             * Basic認証のパスワード (最大文字数: 2048)
             *
             * usernameを指定した場合は指定必須です。tokenを指定した場合は指定できません。
             * `null`を指定した場合はプロパティの省略と同じ扱いになります。
             */
            password?: string | null;
        }
        /**
         * 通知設定情報
         */
        interface NotificationConfig {
            /**
             * 通知設定ID
             */
            notificationConfigId: number;
            /**
             * 通知対象とするオブジェクト・イベントのtype
             *
             * wildcard指定が可能です（例: `detect.*`）。未設定の場合は全typeが通知対象となります。
             */
            targetType: string | null;
            /**
             * 通知設定の名称
             */
            name: string | null;
            /**
             * 通知設定の説明
             */
            description: string | null;
            /**
             * 通知対象を絞り込むジオメトリ設定のタグリスト
             *
             * 指定されたタグが付与されているジオメトリと関連するオブジェクトの検知のみが通知対象となります。
             * 複数指定した場合はOR条件となります。未設定の場合はnullとなります。
             */
            tags: string[] | null;
            /**
             * 通知手段
             */
            method: NotificationMethod;
            /**
             * 通知手段固有の設定値
             */
            options: NotificationConfigOptions;
            /**
             * 通知対象とする時間帯のリスト
             *
             * 空配列またはnullの場合は全時間帯が通知対象となります。
             */
            targetTimesUtc: NotificationTimeRange[] | null;
            /**
             * 通知対象とする曜日のリスト
             *
             * 空配列またはnullの場合は全曜日が通知対象となります。
             */
            targetDaysOfWeek: DayOfWeek[] | null;
            /**
             * targetDaysOfWeekの曜日判定に使用するタイムゾーン（IANA形式のタイムゾーン名）
             */
            daysOfWeekTimezone: string | null;
        }
        /**
         * 通知設定一覧取得の結果
         */
        interface QueryNotificationConfigsResult {
            /**
             * 返却された通知設定情報
             */
            list: NotificationConfig[];
        }
        /**
         * 通知設定作成の結果
         */
        interface CreateNotificationConfigResult {
            /**
             * 作成された通知設定のID
             */
            notificationConfigId: number;
        }
        /**
         * 通知受信設定取得の結果
         */
        interface QueryNotificationSubscriptionResult {
            /**
             * メール通知を受け取るか否か
             */
            mail: boolean;
            /**
             * モバイルプッシュ通知を受け取るか否か
             */
            mobilePush: boolean;
            /**
             * ブラウザプッシュ通知を受け取るか否か
             */
            webPush: boolean;
        }
        /**
         * AI-Appアプリケーションのユーザー設定
         */
        interface UserConfig {
            /**
             * クラウド解析に対する設定
             *
             * 指定できるサイズ上限はJSONシリアライズ後で5KBまでです。設定できる内容はAI-Appアプリケーションごとに異なります。
             * 取得時、未設定の場合はこのキーが含まれません。
             */
            analyzer?: {
                [key: string]: unknown;
            } | null;
        }
        /**
         * ユーザー設定取得の結果
         */
        interface QueryUserConfigResult {
            /**
             * ユーザー設定
             *
             * 未設定の場合、このキーは含まれません。
             */
            userConfig?: UserConfig;
            /**
             * クラウド静止画解析の解析インターバル（秒）
             *
             * 動画解析のAI-Appアプリケーションの場合はこの設定は無視されます。
             * 未設定の場合、このキーは含まれません。
             */
            snapshotIntervalSec?: number;
        }
        /**
         * オブジェクト一覧のソート順
         */
        enum ObjectSortOrder {
            /**
             * 検知開始時刻の降順
             */
            StartTimestampDesc = "start_timestamp_desc",
            /**
             * 検知開始時刻の昇順
             */
            StartTimestampAsc = "start_timestamp_asc",
        }
        /**
         * AI-Appアプリケーションが出力したオブジェクトの情報
         */
        interface DetectedObject {
            /**
             * オブジェクトID
             */
            objectId: string;
            /**
             * オブジェクトの検知開始時刻（UNIX時間、ミリ秒単位）
             */
            start: number;
            /**
             * オブジェクトの検知終了時刻（UNIX時間、ミリ秒単位）
             *
             * 検知終了時刻がまだ確定していない場合、このキーは含まれません。
             */
            end?: number;
            /**
             * オブジェクトの種類
             */
            type: string;
            /**
             * オブジェクトに付与されたラベルの一覧
             *
             * ラベルが付与されていない場合、このキーは含まれません。
             */
            labels?: string[];
            /**
             * オブジェクトに付与された数値データ
             *
             * 値が付与されていない場合、このキーは含まれません。
             */
            score?: number;
            /**
             * オブジェクトに付与された画像ラベルの一覧
             *
             * ここに含まれるラベルを{@link queryObjectPicture オブジェクト画像取得API}に指定すると画像を取得できます。
             * 画像ラベルが付与されていない場合、このキーは含まれません。
             */
            pictureLabels?: string[];
            /**
             * オブジェクトに関連するジオメトリ設定IDの一覧
             *
             * 関連するジオメトリ設定が無い場合、このキーは含まれません。
             */
            geometryConfigIds?: number[];
        }
        /**
         * オブジェクト一覧取得の結果
         */
        interface QueryObjectsResult {
            /**
             * 返却された件数
             */
            count: number;
            /**
             * 返却されたリストのオフセット
             */
            offset: number;
            /**
             * 検索結果の総件数
             */
            total: number;
            /**
             * 次のリストの有無
             */
            hasNext: boolean;
            /**
             * 返却されたオブジェクト情報
             */
            list: DetectedObject[];
        }
        /**
         * オブジェクト詳細取得の結果
         */
        interface QueryObjectDetailResult {
            /**
             * オブジェクトID
             */
            objectId: string;
            /**
             * オブジェクトの検知開始時刻（UNIX時間、ミリ秒単位）
             */
            start: number;
            /**
             * オブジェクトの検知終了時刻（UNIX時間、ミリ秒単位）
             *
             * 検知終了時刻がまだ確定していない場合、このキーは含まれません。
             */
            end?: number;
            /**
             * オブジェクトの検知期間（ミリ秒単位）
             *
             * 検知終了時刻がまだ確定していない場合、このキーは含まれません。
             */
            duration?: number;
            /**
             * オブジェクトの種類
             */
            type: string;
            /**
             * オブジェクトに付与されたラベルの一覧
             *
             * ラベルが付与されていない場合、このキーは含まれません。
             */
            labels?: string[];
            /**
             * オブジェクトに付与された数値データ
             *
             * 値が付与されていない場合、このキーは含まれません。
             */
            score?: number;
            /**
             * オブジェクトに付与された辞書型データ
             *
             * データが付与されていない場合、このキーは含まれません。
             */
            data?: Record<string, unknown>;
            /**
             * オブジェクトに付与された画像ラベルの一覧
             *
             * ここに含まれるラベルを{@link queryObjectPicture オブジェクト画像取得API}に指定すると画像を取得できます。
             * 画像ラベルが付与されていない場合、このキーは含まれません。
             */
            pictureLabels?: string[];
            /**
             * オブジェクトに付与された追加データがあるか否か
             *
             * trueの場合は{@link queryObjectData オブジェクト付与データ取得API}でデータを取得できます。
             */
            hasExtraData: boolean;
            /**
             * オブジェクトに関連するジオメトリ設定IDの一覧
             *
             * 関連するジオメトリ設定が無い場合、このキーは含まれません。
             */
            geometryConfigIds?: number[];
        }
        /**
         * AI-Appアプリケーションが出力したイベントの情報
         */
        interface DetectedEvent {
            /**
             * イベントID
             */
            eventId: string;
            /**
             * イベントの発生時刻（UNIX時間、ミリ秒単位）
             */
            timestamp: number;
            /**
             * イベントの種類
             */
            type: string;
            /**
             * イベントのスコア
             */
            score: number | null;
            /**
             * イベントに付与されたラベルの一覧
             *
             * ラベルが付与されていない場合はnullとなります。
             */
            labels: string[] | null;
            /**
             * イベントに付与された画像があるか否か
             *
             * trueの場合は{@link queryEventPicture イベント画像取得API}で画像を取得できます。
             */
            hasPicture: boolean;
            /**
             * イベントに関連するジオメトリ設定IDの一覧
             *
             * 関連するジオメトリ設定が無い場合はnullとなります。
             */
            geometryConfigIds: number[] | null;
        }
        /**
         * イベント一覧取得の結果
         */
        interface QueryEventsResult {
            /**
             * 返却された件数
             */
            count: number;
            /**
             * 返却されたリストのオフセット
             */
            offset: number;
            /**
             * 検索結果の総件数
             */
            total: number;
            /**
             * 次のリストの有無
             */
            hasNext: boolean;
            /**
             * 返却されたイベント情報
             */
            list: DetectedEvent[];
        }
        /**
         * イベント詳細取得の結果
         */
        interface QueryEventDetailResult {
            /**
             * イベントID
             */
            eventId: string;
            /**
             * イベントの発生時刻（UNIX時間、ミリ秒単位）
             */
            timestamp: number;
            /**
             * イベントの種類
             */
            type: string;
            /**
             * イベントのスコア
             */
            score: number | null;
            /**
             * イベントに付与されたラベルの一覧
             *
             * ラベルが付与されていない場合はnullとなります。
             */
            labels: string[] | null;
            /**
             * イベントに付与された画像があるか否か
             *
             * trueの場合は{@link queryEventPicture イベント画像取得API}で画像を取得できます。
             */
            hasPicture: boolean;
            /**
             * イベントに関連するジオメトリ設定IDの一覧
             *
             * 関連するジオメトリ設定が無い場合はnullとなります。
             */
            geometryConfigIds: number[] | null;
            /**
             * イベントに付与された辞書型データ
             */
            data: Record<string, unknown> | null;
        }
        /**
         * メトリクスの集計単位
         */
        enum MetricUnit {
            /**
             * 5分単位
             */
            FiveMinutes = "5minutes",
            /**
             * 1時間単位
             */
            Hourly = "hourly",
            /**
             * 1日単位
             */
            Daily = "daily",
        }
        /**
         * メトリクスの統計情報の種類
         */
        enum MetricStat {
            /**
             * 集計された値の件数
             */
            Count = "count",
            /**
             * 合計値
             */
            Sum = "sum",
            /**
             * 平均値
             */
            Avg = "avg",
            /**
             * null値を0として扱った平均値
             */
            Avg0 = "avg0",
            /**
             * 最小値
             */
            Min = "min",
            /**
             * 最大値
             */
            Max = "max",
        }
        /**
         * AI-Appアプリケーションが出力したメトリクスの情報
         *
         * statsで取得対象外とした統計情報はnullとなります。
         */
        interface Metric {
            /**
             * 集計された時間帯の開始時刻（UNIX時間、ミリ秒単位）
             */
            timestamp: number;
            /**
             * 集計された値のラベル
             */
            label: string;
            /**
             * 集計された値の件数（null値を含まない）
             *
             * statsで取得対象としなかった場合、および集計値が存在しない場合、このキーは含まれません。
             */
            count?: number;
            /**
             * 合計値
             *
             * statsで取得対象としなかった場合、および集計値が存在しない場合、このキーは含まれません。
             */
            sum?: number;
            /**
             * 平均値
             *
             * statsで取得対象としなかった場合、および集計値が存在しない場合、このキーは含まれません。
             */
            avg?: number;
            /**
             * null値を0として扱った平均値
             *
             * statsで取得対象としなかった場合、および集計値が存在しない場合、このキーは含まれません。
             */
            avg0?: number;
            /**
             * 最小値
             *
             * statsで取得対象としなかった場合、および集計値が存在しない場合、このキーは含まれません。
             */
            min?: number;
            /**
             * 最大値
             *
             * statsで取得対象としなかった場合、および集計値が存在しない場合、このキーは含まれません。
             */
            max?: number;
        }
        /**
         * メトリクス一覧取得の結果
         */
        interface QueryMetricsResult {
            /**
             * 返却された件数
             */
            count: number;
            /**
             * 返却されたリストのオフセット
             */
            offset: number;
            /**
             * 検索結果の総件数
             */
            total: number;
            /**
             * 次のリストの有無
             */
            hasNext: boolean;
            /**
             * 返却されたメトリクス情報
             */
            list: Metric[];
        }
        /**
         * AI-Appアプリケーションが出力したデバイスステータスの情報
         */
        interface DeviceStatus {
            /**
             * デバイスステータスID
             */
            deviceStatusId: number;
            /**
             * デバイスステータス情報のラベル
             */
            label: string;
            /**
             * デバイスステータスを表す文字列
             */
            status: string;
            /**
             * デバイスステータス情報に付与された数値データ
             */
            score: number | null;
            /**
             * デバイスステータスに関連するジオメトリ設定IDの一覧
             */
            geometryConfigIds: number[];
            /**
             * デバイスステータスの更新時刻（UNIX時間、ミリ秒単位）
             */
            updatedOn: number;
        }
        /**
         * デバイスステータス一覧取得の結果
         */
        interface QueryDeviceStatusesResult {
            /**
             * 検索結果の総件数
             */
            total: number;
            /**
             * 返却されたデバイスステータス情報
             */
            list: DeviceStatus[];
        }
        /**
         * 通知イベントに関連するジオメトリ設定の情報
         */
        interface NotificationEventGeometryConfig {
            /**
             * ジオメトリ設定ID
             */
            geometryConfigId: number;
            /**
             * ジオメトリ設定名
             *
             * ジオメトリ設定が既に削除済みの場合、あるいは未登録の場合はnullとなります。
             */
            geometryConfigName: string | null;
        }
        /**
         * AI-Appアプリケーションが出力した通知イベントの情報
         */
        interface NotificationEvent {
            /**
             * 通知イベントID
             */
            notificationEventId: number;
            /**
             * デバイスID
             */
            deviceId: string;
            /**
             * 通知が発火されたオブジェクトのID
             */
            objectId: string | null;
            /**
             * 通知が発火されたイベントのID
             */
            eventId: string | null;
            /**
             * 通知が発火されたオブジェクト、またはイベントのタイプ
             */
            type: string | null;
            /**
             * 通知方法の一覧
             */
            methods: NotificationMethod[];
            /**
             * 通知イベントに関連するジオメトリ設定の一覧
             *
             * 関連するジオメトリ設定が無い場合はnullとなります。
             */
            geometryConfigs: NotificationEventGeometryConfig[] | null;
            /**
             * 通知が発火されたオブジェクト、またはイベントのスコア
             */
            score: number | null;
            /**
             * 通知イベントの発生時刻（UNIX時間、ミリ秒単位）
             */
            timestamp: number;
        }
        /**
         * 通知イベント一覧取得の結果
         */
        interface QueryNotificationEventsResult {
            /**
             * 返却されたリストのオフセット
             */
            offset: number;
            /**
             * 検索結果の総件数
             */
            total: number;
            /**
             * 返却された通知イベント情報
             */
            list: NotificationEvent[];
        }
        /**
         * AI-Appアプリケーション一覧取得
         * #### 概要
         * - 指定したデバイスに有効化されたAI-Appアプリケーション（AI-App人数カウントを除く）の一覧を取得します
         * #### 必要な権限:
         * - 映像解析結果の閲覧もしくは映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.AIApp.queryApplications({ deviceId });
         * ```
         */
        function queryApplications(options: {
            deviceId: string;
        }): Promise<QueryApplicationsResult>;
        /**
         * AI-Appアプリケーション利用可能デバイス一覧取得
         * #### 概要
         * - 指定したAI-AppアプリケーションIDのAI-Appアプリケーション（AI-App人数カウントを除く）を利用可能なデバイス一覧を取得します
         * - AI-AppアプリケーションIDの指定がない場合、利用可能な全デバイス一覧を取得します
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.offset 返却するリストのオフセット (規定値: 0, 最大値: 10000)
         * @param options.limit 返却するリストの最大件数 (規定値: 20, 最小値: 1, 最大値: 100)
         * @param options.applicationId AI-Appアプリケーションを利用可能なデバイスによる絞り込み
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //最大件数:30件、オフセット:10で実行
         * const result = await Safie.AIApp.queryDevices({ limit: 30, offset: 10 });
         *
         * //AI-AppアプリケーションIDで絞り込み
         * const result = await Safie.AIApp.queryDevices({ applicationId: 1 });
         * ```
         */
        function queryDevices(options?: {
            offset?: number;
            limit?: number;
            applicationId?: number;
        }): Promise<QueryDevicesResult>;
        /**
         * ジオメトリ設定一覧取得
         * #### 概要
         * - ジオメトリ設定の一覧を取得します
         * #### 必要な権限:
         * - 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.AIApp.queryGeometryConfigs({ deviceId, applicationId });
         * ```
         */
        function queryGeometryConfigs(options: {
            deviceId: string;
            applicationId: number;
        }): Promise<QueryGeometryConfigsResult>;
        /**
         * ジオメトリ設定作成
         * #### 概要
         * - ジオメトリ設定を作成します
         * #### 詳細:
         * - ジオメトリ設定は、映像の画角内にエリアやラインを定義するための設定です
         * - 設定したジオメトリに対して、オブジェクトやイベントの検出結果を紐づけることができます
         * - 座標は映像の左上を原点（0, 0）、右下を（1, 1）とする正規化座標で指定します
         * #### ジオメトリタイプ:
         * - polygon（エリア）: 3点以上の頂点座標を順番に指定し、隣接する頂点同士を辺で結んで囲まれたジオメトリを定義します。最後の頂点と最初の頂点も辺で結ばれます
         * - line（ライン）: 始点と終点の2点を指定して線分を定義します
         * - line_io（方向付きライン）: ラインに通過方向を追加します。オブジェクトの移動方向がラインの始点から終点への向きに対して左から右へ横切る場合のみ検出対象となります
         * - all（全域）: 座標の指定は不要です
         * #### 制限:
         * - AI-Appアプリケーション1つあたり最大20個まで作成可能です
         * #### 必要な権限:
         * - 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.name ジオメトリ設定の名称 (最大文字数: 255)
         * @param options.type ジオメトリ設定の種別
         * @param options.points ジオメトリ設定の座標リスト (最大: 30点)。line・line_ioは2点、polygonは3点以上を指定。allの場合は指定不要
         * @param options.tags ジオメトリ設定に付与するタグのリスト (最大: 10個、1タグあたりの最大文字数: 32)
         * @param options.duration ジオメトリと関連付けられた時間に対するしきい値（ミリ秒） (最大値: 10000)。nullは未指定として扱われる
         * @param options.thresholdHigh ジオメトリと関連のあるイベント発生判定に利用されるしきい値（上限）。nullは未指定として扱われる
         * @param options.thresholdLow ジオメトリと関連のあるイベント発生判定に利用されるしきい値（下限）。nullは未指定として扱われる
         * @param options.color フロントで表示する際の色を表すカラーコード（#と16進数6桁の表記）。nullは未指定として扱われる
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.AIApp.createGeometryConfig({
         *   deviceId,
         *   applicationId,
         *   name: 'entrance',
         *   type: Safie.AIApp.GeometryConfigType.Line,
         *   points: [{ x: 0.1, y: 0.1 }, { x: 0.9, y: 0.9 }],
         * });
         * ```
         */
        function createGeometryConfig(options: {
            deviceId: string;
            applicationId: number;
            name: string;
            type: GeometryConfigType;
            points?: Point[];
            tags?: string[];
            duration?: number | null;
            thresholdHigh?: number | null;
            thresholdLow?: number | null;
            color?: string | null;
        }): Promise<CreateGeometryConfigResult>;
        /**
         * ジオメトリ設定更新
         * #### 概要
         * - ジオメトリ設定を更新します
         * #### 詳細:
         * - 指定しなかったフィールドは更新されません
         * - typeとpointsは同時に変更する必要があります
         * - 座標は映像の左上を原点（0, 0）、右下を（1, 1）とする正規化座標で指定します
         * #### 必要な権限:
         * - 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.geometryConfigId ジオメトリ設定ID
         * @param options.name ジオメトリ設定の名称 (最大文字数: 255)
         * @param options.type ジオメトリ設定の種別
         * @param options.points ジオメトリ設定の座標リスト (最大: 30点)。line・line_ioは2点、polygonは3点以上を指定。allの場合は空配列を指定
         * @param options.tags ジオメトリ設定のタグリスト (最大: 10個、1タグあたりの最大文字数: 32)。空配列またはnullを指定すると既存のタグが全て削除される（一部のタグのみの追加・削除はできない）
         * @param options.duration ジオメトリと関連付けられた時間に対するしきい値（ミリ秒） (最大値: 10000)。0またはnullを指定すると設定値が削除される
         * @param options.thresholdHigh ジオメトリと関連のあるイベント発生判定に利用されるしきい値（上限）。nullを指定すると設定値が削除される
         * @param options.thresholdLow ジオメトリと関連のあるイベント発生判定に利用されるしきい値（下限）。nullを指定すると設定値が削除される
         * @param options.color フロントで表示する際の色を表すカラーコード（#と16進数6桁の表記）。nullを指定すると設定値が削除される
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //名称のみ更新する
         * await Safie.AIApp.updateGeometryConfig({ deviceId, applicationId, geometryConfigId, name: 'exit' });
         *
         * //カラーコードの設定値を削除する
         * await Safie.AIApp.updateGeometryConfig({ deviceId, applicationId, geometryConfigId, color: null });
         * ```
         */
        function updateGeometryConfig(options: {
            deviceId: string;
            applicationId: number;
            geometryConfigId: number;
            name?: string;
            type?: GeometryConfigType;
            points?: Point[];
            tags?: string[] | null;
            duration?: number | null;
            thresholdHigh?: number | null;
            thresholdLow?: number | null;
            color?: string | null;
        }): Promise<void>;
        /**
         * ジオメトリ設定削除
         * #### 概要
         * - ジオメトリ設定を削除します
         * #### 必要な権限:
         * - 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.geometryConfigId ジオメトリ設定ID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * await Safie.AIApp.deleteGeometryConfig({ deviceId, applicationId, geometryConfigId });
         * ```
         */
        function deleteGeometryConfig(options: {
            deviceId: string;
            applicationId: number;
            geometryConfigId: number;
        }): Promise<void>;
        /**
         * 通知設定一覧取得
         * #### 概要
         * - 通知設定の一覧を取得します
         * #### 必要な権限:
         * - 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.AIApp.queryNotificationConfigs({ deviceId, applicationId });
         * ```
         */
        function queryNotificationConfigs(options: {
            deviceId: string;
            applicationId: number;
        }): Promise<QueryNotificationConfigsResult>;
        /**
         * 通知設定作成
         * #### 概要
         * - 通知設定を作成します
         * - 通知手段がmail・mobile_push・web_pushの場合、createSubscriptionがtrueであれば、デバイスのオーナーに対する通知受信設定を同時に作成します（既に存在する場合は何もしません）
         * #### 詳細:
         * - targetType・tags・targetTimesUtc・targetDaysOfWeekで通知対象を絞り込みます。いずれも未指定の場合は絞り込みを行いません
         * #### 制限:
         * - 1デバイスあたり最大16個まで作成可能です
         * #### 必要な権限:
         * - 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.method 通知手段
         * @param options.options 通知手段固有の設定値。webhookの場合は通知先のURLと認証情報、mail・mobile_push・web_pushの場合は空オブジェクトを指定
         * @param options.targetType 通知対象とするオブジェクト・イベントのtype (最大文字数: 32)。wildcard指定が可能（例: detect.*）。未指定またはnullの場合は全typeが通知対象となる
         * @param options.name 通知設定の名称 (最大文字数: 255)。nullは未指定として扱われる
         * @param options.description 通知設定の説明 (最大文字数: 255)。nullは未指定として扱われる
         * @param options.tags 通知対象を絞り込むジオメトリ設定のタグリスト (最大: 10個、1タグあたりの最大文字数: 32)。複数指定した場合はOR条件となる。nullは未指定として扱われる
         * @param options.targetTimesUtc 通知対象とする時間帯のリスト (最大: 16個)。nullは未指定として扱われる
         * @param options.targetDaysOfWeek 通知対象とする曜日のリスト。同じ曜日を重複して指定するとエラーになる。nullは未指定として扱われる
         * @param options.daysOfWeekTimezone targetDaysOfWeekの曜日判定に使用するタイムゾーン（IANA形式のタイムゾーン名。例: Asia/Tokyo） (規定値: UTC)
         * @param options.createSubscription 通知手段がmail・mobile_push・web_pushの場合に、デバイスのオーナーに対する通知受信設定を同時に作成するかどうか (規定値: true)。通知受信設定APIで受信設定を管理する場合はfalseを指定。通知手段がそれ以外の場合や、デバイスがSafie Managerの企業に所属している場合は、本パラメータの値に関わらず通知受信設定は作成されない
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //Webhook通知を作成する
         * const result = await Safie.AIApp.createNotificationConfig({
         *   deviceId,
         *   applicationId,
         *   method: Safie.AIApp.NotificationMethod.Webhook,
         *   options: { url: 'https://example.com/webhook' },
         *   name: 'entrance',
         * });
         *
         * //平日の日中のみを対象としたメール通知を作成する
         * const result = await Safie.AIApp.createNotificationConfig({
         *   deviceId,
         *   applicationId,
         *   method: Safie.AIApp.NotificationMethod.Mail,
         *   options: {},
         *   targetTimesUtc: [{ start: '00:00:00', end: '09:00:00' }],
         *   targetDaysOfWeek: [
         *     Safie.AIApp.DayOfWeek.Monday,
         *     Safie.AIApp.DayOfWeek.Tuesday,
         *     Safie.AIApp.DayOfWeek.Wednesday,
         *     Safie.AIApp.DayOfWeek.Thursday,
         *     Safie.AIApp.DayOfWeek.Friday,
         *   ],
         *   daysOfWeekTimezone: 'Asia/Tokyo',
         * });
         * ```
         */
        function createNotificationConfig(options: {
            deviceId: string;
            applicationId: number;
            method: NotificationMethod;
            options: NotificationConfigOptionsInput;
            targetType?: string | null;
            name?: string | null;
            description?: string | null;
            tags?: string[] | null;
            targetTimesUtc?: NotificationTimeRange[] | null;
            targetDaysOfWeek?: DayOfWeek[] | null;
            daysOfWeekTimezone?: string;
            createSubscription?: boolean;
        }): Promise<CreateNotificationConfigResult>;
        /**
         * 通知設定更新
         * #### 概要
         * - 通知設定を更新します
         * - 通知手段がmail・mobile_push・web_pushの場合、updateSubscriptionがtrueであれば、デバイスのオーナーに対する通知受信設定を同時に作成・削除します
         * #### 詳細:
         * - 指定しなかったフィールドは更新されません
         * - methodとoptionsは同時に変更する必要があります
         * #### 必要な権限:
         * - 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.notificationConfigId 通知設定ID
         * @param options.method 通知手段。optionsと同時に指定
         * @param options.options 通知手段固有の設定値。methodと同時に指定。空オブジェクトまたはnullを指定すると設定値が削除される（通知手段がwebhookの場合はurlが必須のため指定不可）
         * @param options.targetType 通知対象とするオブジェクト・イベントのtype (最大文字数: 32)。wildcard指定が可能（例: detect.*）。空文字またはnullを指定すると全typeが通知対象となる
         * @param options.name 通知設定の名称 (最大文字数: 255)。空文字またはnullを指定すると設定されている名称が削除される
         * @param options.description 通知設定の説明 (最大文字数: 255)。空文字またはnullを指定すると設定されている説明が削除される
         * @param options.tags 通知対象を絞り込むジオメトリ設定のタグリスト (最大: 10個、1タグあたりの最大文字数: 32)。複数指定した場合はOR条件となる。空配列またはnullを指定すると既存のタグが全て削除される（一部のタグのみの追加・削除はできない）
         * @param options.targetTimesUtc 通知対象とする時間帯のリスト (最大: 16個)。空配列またはnullを指定すると全時間帯が通知対象となる
         * @param options.targetDaysOfWeek 通知対象とする曜日のリスト。同じ曜日を重複して指定するとエラーになる。空配列またはnullを指定すると全曜日が通知対象となる
         * @param options.daysOfWeekTimezone targetDaysOfWeekの曜日判定に使用するタイムゾーン（IANA形式のタイムゾーン名。例: Asia/Tokyo）
         * @param options.updateSubscription 通知手段がmail・mobile_push・web_pushの場合に、デバイスのオーナーに対する通知受信設定を同時に作成・削除するかどうか (規定値: true)。通知受信設定APIで受信設定を管理する場合はfalseを指定。通知手段がそれ以外の場合や、デバイスがSafie Managerの企業に所属している場合は、本パラメータの値に関わらず通知受信設定は更新されない
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //名称のみ更新する
         * await Safie.AIApp.updateNotificationConfig({ deviceId, applicationId, notificationConfigId, name: 'exit' });
         *
         * //名称の設定値を削除する
         * await Safie.AIApp.updateNotificationConfig({ deviceId, applicationId, notificationConfigId, name: null });
         *
         * //通知手段をWebhookへ変更する
         * await Safie.AIApp.updateNotificationConfig({
         *   deviceId,
         *   applicationId,
         *   notificationConfigId,
         *   method: Safie.AIApp.NotificationMethod.Webhook,
         *   options: { url: 'https://example.com/webhook' },
         * });
         * ```
         */
        function updateNotificationConfig(options: {
            deviceId: string;
            applicationId: number;
            notificationConfigId: number;
            method?: NotificationMethod;
            options?: NotificationConfigOptionsInput | null;
            targetType?: string | null;
            name?: string | null;
            description?: string | null;
            tags?: string[] | null;
            targetTimesUtc?: NotificationTimeRange[] | null;
            targetDaysOfWeek?: DayOfWeek[] | null;
            daysOfWeekTimezone?: string;
            updateSubscription?: boolean;
        }): Promise<void>;
        /**
         * 通知設定削除
         * #### 概要
         * - 通知設定を削除します
         * - 通知手段がmail・mobile_push・web_pushの場合、deleteSubscriptionがtrueであれば、デバイスのオーナーに対する通知受信設定を同時に削除します（削除後も同一の通知手段の通知設定が残っている場合は削除しません）
         * #### 必要な権限:
         * - 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.notificationConfigId 通知設定ID
         * @param options.deleteSubscription 通知手段がmail・mobile_push・web_pushの場合に、デバイスのオーナーに対する通知受信設定を同時に削除するかどうか (規定値: true)。通知受信設定APIで受信設定を管理する場合はfalseを指定。通知手段がそれ以外の場合や、デバイスがSafie Managerの企業に所属している場合、また削除後も同一の通知手段の通知設定が残っている場合は、本パラメータの値に関わらず通知受信設定は削除されない
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * await Safie.AIApp.deleteNotificationConfig({ deviceId, applicationId, notificationConfigId });
         *
         * //通知受信設定APIで受信設定を管理している場合は、受信設定を残して通知設定のみ削除する
         * await Safie.AIApp.deleteNotificationConfig({
         *   deviceId,
         *   applicationId,
         *   notificationConfigId,
         *   deleteSubscription: false,
         * });
         * ```
         */
        function deleteNotificationConfig(options: {
            deviceId: string;
            applicationId: number;
            notificationConfigId: number;
            deleteSubscription?: boolean;
        }): Promise<void>;
        /**
         * 通知受信設定取得
         * #### 概要
         * - 認証ユーザーの通知受信設定（メール/モバイルプッシュ/ブラウザプッシュ）を取得します
         * #### 制限:
         * - OAuth2.0認証アプリケーションでのみ利用可能です（APIキー認証アプリケーションで利用した場合は、400エラーが返ります）
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーションに必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.AIApp.queryNotificationSubscription({ deviceId, applicationId });
         * ```
         */
        function queryNotificationSubscription(options: {
            deviceId: string;
            applicationId: number;
        }): Promise<QueryNotificationSubscriptionResult>;
        /**
         * 通知受信設定更新
         * #### 概要
         * - 認証ユーザーの通知受信設定（メール/モバイルプッシュ/ブラウザプッシュ）を更新します
         * #### 詳細:
         * - 受信中の通知手段にfalseを指定すると、その通知を受信しない状態に更新されます
         * - モバイルプッシュ通知・ブラウザプッシュ通知を実際に受信するためには、この受信設定に加えて、Safie Viewerアプリの通知許可設定が必要です
         * #### 制限:
         * - OAuth2.0認証アプリケーションでのみ利用可能です（APIキー認証アプリケーションで利用した場合は、400エラーが返ります）
         * - 一部の通知手段のみの更新はできないため、全ての通知手段の受信設定を指定します
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーションに必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.mail メール通知を受け取るか否か
         * @param options.mobilePush モバイルプッシュ通知を受け取るか否か
         * @param options.webPush ブラウザプッシュ通知を受け取るか否か
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //メール通知のみを受信する状態に更新する
         * await Safie.AIApp.updateNotificationSubscription({
         *   deviceId,
         *   applicationId,
         *   mail: true,
         *   mobilePush: false,
         *   webPush: false,
         * });
         * ```
         */
        function updateNotificationSubscription(options: {
            deviceId: string;
            applicationId: number;
            mail: boolean;
            mobilePush: boolean;
            webPush: boolean;
        }): Promise<void>;
        /**
         * ユーザー設定取得
         * #### 概要
         * - 指定したデバイスで利用可能なAI-Appアプリケーションのユーザー設定を取得します
         * #### 必要な権限:
         * - 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.AIApp.queryUserConfig({ deviceId, applicationId });
         * ```
         */
        function queryUserConfig(options: {
            deviceId: string;
            applicationId: number;
        }): Promise<QueryUserConfigResult>;
        /**
         * ユーザー設定更新
         * #### 概要
         * - 指定したデバイスで利用可能なAI-Appアプリケーションのユーザー設定を更新します
         * #### 詳細:
         * - 指定しなかったフィールドは更新されません
         * #### 制限:
         * - userConfigに指定できるキーはanalyzerのみです
         * #### 必要な権限:
         * - 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_setting:all
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.userConfig ユーザー設定。空オブジェクトまたはnullを指定すると設定された値が削除される
         * @param options.snapshotIntervalSec クラウド静止画解析の解析インターバル（秒）。5秒以上3600秒以下の値を指定可能。0を指定した場合は静止画解析が停止される。動画解析のAI-Appアプリケーションの場合はこの設定は無視される
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //解析インターバルのみ更新する
         * await Safie.AIApp.updateUserConfig({ deviceId, applicationId, snapshotIntervalSec: 60 });
         *
         * //クラウド解析に対する設定を更新する
         * await Safie.AIApp.updateUserConfig({
         *   deviceId,
         *   applicationId,
         *   userConfig: { analyzer: { threshold: 0.5 } },
         * });
         *
         * //クラウド解析に対する設定を削除する
         * await Safie.AIApp.updateUserConfig({ deviceId, applicationId, userConfig: null });
         * ```
         */
        function updateUserConfig(options: {
            deviceId: string;
            applicationId: number;
            userConfig?: Partial<UserConfig> | null;
            snapshotIntervalSec?: number;
        }): Promise<void>;
        /**
         * オブジェクト一覧取得
         * #### 概要
         * - 指定したAI-Appアプリケーションが出力したオブジェクトの一覧を取得します
         * #### 制限:
         * - startとendで指定できる時間幅は最大32日間です
         * - startとendを省略した場合は、過去一日間が検索対象となります
         * - startとendのいずれか一方のみを指定することはできません
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.start 検索の開始時刻（UNIX時間、ミリ秒単位）。オブジェクトの検知開始時刻に対して検索される（開始時刻を含む）
         * @param options.end 検索の終了時刻（UNIX時間、ミリ秒単位）。オブジェクトの検知開始時刻に対して検索される（終了時刻は含まない）
         * @param options.scoreGte 指定した値以上のscoreを持つオブジェクトのみに絞り込み
         * @param options.scoreLt 指定した値未満のscoreを持つオブジェクトのみに絞り込み
         * @param options.type オブジェクトの種類による絞り込み (最大文字数: 32)
         * @param options.geometryConfigIds ジオメトリ設定IDによる絞り込み。複数指定した場合はOR条件となる
         * @param options.geometryConfigTags ジオメトリ設定のタグによる絞り込み。複数指定した場合はAND条件となる。部分一致で判定
         * @param options.labels オブジェクトのラベルによる絞り込み (1ラベルあたりの最大文字数: 16)。複数指定した場合はAND条件となる。完全一致で判定
         * @param options.sortOrder ソート順 (規定値: start_timestamp_desc)
         * @param options.offset 返却するリストのオフセット (規定値: 0)
         * @param options.limit 返却するリストの最大件数 (規定値: 20, 最小値: 1, 最大値: 100)
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //過去一日間のオブジェクトを取得する
         * const result = await Safie.AIApp.queryObjects({ deviceId, applicationId });
         *
         * //期間とラベルで絞り込み、検知開始時刻の昇順で取得する
         * const result = await Safie.AIApp.queryObjects({
         *   deviceId,
         *   applicationId,
         *   start: new Date('2024-01-01T00:00:00+09:00').getTime(),
         *   end: new Date('2024-01-02T00:00:00+09:00').getTime(),
         *   labels: ['hat'],
         *   sortOrder: Safie.AIApp.ObjectSortOrder.StartTimestampAsc,
         * });
         * ```
         */
        function queryObjects(options: {
            deviceId: string;
            applicationId: number;
            start?: number;
            end?: number;
            scoreGte?: number;
            scoreLt?: number;
            type?: string;
            geometryConfigIds?: number[];
            geometryConfigTags?: string[];
            labels?: string[];
            sortOrder?: ObjectSortOrder;
            offset?: number;
            limit?: number;
        }): Promise<QueryObjectsResult>;
        /**
         * オブジェクト詳細取得
         * #### 概要
         * - 指定したAI-Appアプリケーションが出力したオブジェクトの詳細情報を取得します
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.objectId オブジェクトID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.AIApp.queryObjectDetail({ deviceId, applicationId, objectId });
         * ```
         */
        function queryObjectDetail(options: {
            deviceId: string;
            applicationId: number;
            objectId: string;
        }): Promise<QueryObjectDetailResult>;
        /**
         * オブジェクト画像取得
         * #### 概要
         * - 指定したオブジェクトに付与された画像を取得します
         * - pictureLabelには{@link QueryObjectsResult オブジェクト一覧}・{@link QueryObjectDetailResult オブジェクト詳細}のpictureLabelsに含まれるラベルを指定します
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.objectId オブジェクトID
         * @param options.pictureLabel 画像ラベル (最大文字数: 16)
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const picture = await Safie.AIApp.queryObjectPicture({ deviceId, applicationId, objectId, pictureLabel });
         * //imageElem: HTMLImageElement
         * imageElem.src = URL.createObjectURL(picture);
         * ```
         */
        function queryObjectPicture(options: {
            deviceId: string;
            applicationId: number;
            objectId: string;
            pictureLabel: string;
        }): Promise<Blob>;
        /**
         * オブジェクト付与データ取得
         * #### 概要
         * - 指定したオブジェクトに付与されたデータを取得します
         * - {@link QueryObjectDetailResult オブジェクト詳細}のhasExtraDataがtrueのオブジェクトのみ取得できます
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.objectId オブジェクトID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const data = await Safie.AIApp.queryObjectData({ deviceId, applicationId, objectId });
         * const text = await data.text();
         * ```
         */
        function queryObjectData(options: {
            deviceId: string;
            applicationId: number;
            objectId: string;
        }): Promise<Blob>;
        /**
         * イベント一覧取得
         * #### 概要
         * - 指定したAI-Appアプリケーションが出力したイベントの一覧を取得します
         * #### 制限:
         * - startとendで指定できる時間幅は最大32日間です
         * - startとendを省略した場合は、過去一日間が検索対象となります
         * - startとendのいずれか一方のみを指定することはできません
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.start 検索の開始時刻（UNIX時間、ミリ秒単位）。イベントの発生時刻に対して検索される（開始時刻を含む）
         * @param options.end 検索の終了時刻（UNIX時間、ミリ秒単位）。イベントの発生時刻に対して検索される（終了時刻は含まない）
         * @param options.scoreGte 指定した値以上のscoreを持つイベントのみに絞り込み
         * @param options.scoreLt 指定した値未満のscoreを持つイベントのみに絞り込み
         * @param options.type イベントの種類による絞り込み (最大文字数: 32)
         * @param options.geometryConfigIds ジオメトリ設定IDによる絞り込み。複数指定した場合はOR条件となる
         * @param options.geometryConfigTags ジオメトリ設定のタグによる絞り込み。複数指定した場合はAND条件となる。部分一致で判定
         * @param options.labels イベントのラベルによる絞り込み (1ラベルあたりの最大文字数: 16)。複数指定した場合はAND条件となる。完全一致で判定
         * @param options.offset 返却するリストのオフセット (規定値: 0)
         * @param options.limit 返却するリストの最大件数 (規定値: 20, 最小値: 1, 最大値: 100)
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //過去一日間のイベントを取得する
         * const result = await Safie.AIApp.queryEvents({ deviceId, applicationId });
         *
         * //期間とイベントの種類で絞り込んで取得する
         * const result = await Safie.AIApp.queryEvents({
         *   deviceId,
         *   applicationId,
         *   start: new Date('2024-01-01T00:00:00+09:00').getTime(),
         *   end: new Date('2024-01-02T00:00:00+09:00').getTime(),
         *   type: 'motion',
         * });
         * ```
         */
        function queryEvents(options: {
            deviceId: string;
            applicationId: number;
            start?: number;
            end?: number;
            scoreGte?: number;
            scoreLt?: number;
            type?: string;
            geometryConfigIds?: number[];
            geometryConfigTags?: string[];
            labels?: string[];
            offset?: number;
            limit?: number;
        }): Promise<QueryEventsResult>;
        /**
         * イベント詳細取得
         * #### 概要
         * - 指定したAI-Appアプリケーションが出力したイベントの詳細情報を取得します
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.eventId イベントID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.AIApp.queryEventDetail({ deviceId, applicationId, eventId });
         * ```
         */
        function queryEventDetail(options: {
            deviceId: string;
            applicationId: number;
            eventId: string;
        }): Promise<QueryEventDetailResult>;
        /**
         * イベント画像取得
         * #### 概要
         * - 指定したイベントに付与された画像を取得します
         * - {@link QueryEventsResult イベント一覧}・{@link QueryEventDetailResult イベント詳細}のhasPictureがtrueのイベントのみ取得できます
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.eventId イベントID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const picture = await Safie.AIApp.queryEventPicture({ deviceId, applicationId, eventId });
         * //imageElem: HTMLImageElement
         * imageElem.src = URL.createObjectURL(picture);
         * ```
         */
        function queryEventPicture(options: {
            deviceId: string;
            applicationId: number;
            eventId: string;
        }): Promise<Blob>;
        /**
         * メトリクス一覧取得
         * #### 概要
         * - 指定したAI-Appアプリケーションが出力したメトリクスの一覧を取得します
         * #### 制限:
         * - startとendを省略した場合は、unitが5minutesのときは過去1時間、hourlyのときは過去24時間、dailyのときは過去1週間が検索対象となります
         * - startとendで指定できる時間幅は、unitが5minutesのときは24時間、hourlyのときは1週間、dailyのときは一か月です
         * - startとendのいずれか一方のみを指定することはできません
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.unit メトリクスの集計単位
         * @param options.start 検索の開始時刻（UNIX時間、ミリ秒単位）。集計された時間帯の開始時刻に対して検索される（開始時刻を含む）
         * @param options.end 検索の終了時刻（UNIX時間、ミリ秒単位）。集計された時間帯の開始時刻に対して検索される（終了時刻は含まない）
         * @param options.labels メトリクスのラベルによる絞り込み (1ラベルあたりの最大文字数: 16)。複数指定した場合はOR条件となる
         * @param options.stats 取得する統計情報の種類。複数指定可能。指定しない場合は全ての統計情報が取得される
         * @param options.offset 返却するリストのオフセット (規定値: 0)
         * @param options.limit 返却するリストの最大件数 (規定値: 100, 最小値: 1, 最大値: 1000)
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //過去1時間のメトリクスを5分単位で取得する
         * const result = await Safie.AIApp.queryMetrics({
         *   deviceId,
         *   applicationId,
         *   unit: Safie.AIApp.MetricUnit.FiveMinutes,
         * });
         *
         * //期間とラベルで絞り込み、合計値のみを1日単位で取得する
         * const result = await Safie.AIApp.queryMetrics({
         *   deviceId,
         *   applicationId,
         *   unit: Safie.AIApp.MetricUnit.Daily,
         *   start: new Date('2024-01-01T00:00:00+09:00').getTime(),
         *   end: new Date('2024-01-08T00:00:00+09:00').getTime(),
         *   labels: ['car'],
         *   stats: [Safie.AIApp.MetricStat.Sum],
         * });
         * ```
         */
        function queryMetrics(options: {
            deviceId: string;
            applicationId: number;
            unit: MetricUnit;
            start?: number;
            end?: number;
            labels?: string[];
            stats?: MetricStat[];
            offset?: number;
            limit?: number;
        }): Promise<QueryMetricsResult>;
        /**
         * デバイスステータス一覧取得
         * #### 概要
         * - 指定したAI-Appアプリケーションが出力したデバイスステータスの一覧を取得します
         * #### 必要な権限:
         * - 映像解析結果の閲覧
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.label デバイスステータス情報のラベルによる絞り込み
         * @param options.geometryConfigIds デバイスステータスに関連するジオメトリ設定IDによる絞り込み (最大指定数: 20)
         * @param options.statusUpdatedOnGte ステータスの最終更新時刻による絞り込み（UNIX時間、ミリ秒単位）。指定した時刻より更新時刻が新しいステータスのみが取得される (規定値: 現在時刻の300秒前)
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.AIApp.queryDeviceStatuses({ deviceId, applicationId });
         *
         * //ラベルで絞り込み、過去1時間に更新されたステータスを取得する
         * const result = await Safie.AIApp.queryDeviceStatuses({
         *   deviceId,
         *   applicationId,
         *   label: 'temperature',
         *   statusUpdatedOnGte: Date.now() - 60 * 60 * 1000,
         * });
         * ```
         */
        function queryDeviceStatuses(options: {
            deviceId: string;
            applicationId: number;
            label?: string;
            geometryConfigIds?: number[];
            statusUpdatedOnGte?: number;
        }): Promise<QueryDeviceStatusesResult>;
        /**
         * 通知イベント一覧取得
         * #### 概要
         * - 指定したAI-Appアプリケーションが出力した通知イベントの一覧を取得します
         * - 通知イベントとは、通知設定に基づいてAI-Appアプリケーションが通知すると判断したイベントです
         * - 実際に通知が行われたかどうかは、受信側の設定やシステムの都合によりズレが生じる場合があります
         * - 1デバイスあたり100件までの通知イベントを取得可能です
         * #### 制限:
         * - startとendを省略した場合は、現在時刻から過去一日間が検索対象となります
         * - startに通知イベント履歴の保存期間より前の時刻が指定された場合には、それぞれのAI-Appアプリケーションの保存期間内の時刻に補正されます
         * - endに未来の時刻が指定された場合には、現在時刻に補正されます
         * - startとendのいずれか一方のみを指定することはできません
         * - 検索結果は通知イベントの発生時刻の降順で返却されます
         * #### 必要な権限:
         * - 映像解析結果の閲覧 + 映像解析設定の変更
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:analyze_result:view と api:device:analyze_setting:all の両方
         * #### 必要なデバイスオプション:
         * - OAuth2.0認証アプリケーション、またはAPIキー認証アプリケーション毎に必要となるAPIオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.applicationId AI-AppアプリケーションID
         * @param options.start 検索の開始時刻（UNIX時間、ミリ秒単位）。通知イベントの発生時刻に対して検索される（開始時刻を含む）
         * @param options.end 検索の終了時刻（UNIX時間、ミリ秒単位）。通知イベントの発生時刻に対して検索される（終了時刻は含まない）
         * @param options.type 通知が発火されたオブジェクト、またはイベントのタイプによる絞り込み。前方一致で判定
         * @param options.notificationMethods 通知方法による絞り込み。指定した通知方法が含まれる通知イベントのみが取得される
         * @param options.offset 返却するリストのオフセット (規定値: 0)
         * @param options.limit 返却するリストの最大件数 (規定値: 20, 最小値: 1, 最大値: 100)
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //過去一日間の通知イベントを取得する
         * const result = await Safie.AIApp.queryNotificationEvents({ deviceId, applicationId });
         *
         * //期間と通知方法で絞り込んで取得する
         * const result = await Safie.AIApp.queryNotificationEvents({
         *   deviceId,
         *   applicationId,
         *   start: new Date('2024-01-01T00:00:00+09:00').getTime(),
         *   end: new Date('2024-01-02T00:00:00+09:00').getTime(),
         *   notificationMethods: [Safie.AIApp.NotificationMethod.Mail],
         * });
         * ```
         */
        function queryNotificationEvents(options: {
            deviceId: string;
            applicationId: number;
            start?: number;
            end?: number;
            type?: string;
            notificationMethods?: NotificationMethod[];
            offset?: number;
            limit?: number;
        }): Promise<QueryNotificationEventsResult>;
    }

    /**
     * 認証情報の操作に関する機能群
     */
    namespace Auth {
        /**
         * トークンの種別
         */
        enum TokenType {
            /**
             * APIキー
             */
            APIKey = "apiKey",
            /**
             * OAuth2アクセストークン。
             */
            AccessToken = "accessToken",
        }
        /**
         * 認証情報の初期化のオプション
         */
        interface InitializeOptions {
            /**
             * クライアントID
             * #### 概要
             * - Public Client(PKCE)として初期化する場合に指定します
             * - {@link authorize}で認可したクライアントIDと同じ値を指定してください
             */
            clientId?: string;
        }
        /**
         * 認可のオプション
         */
        interface AuthorizeOptions {
            /**
             * クライアントID
             */
            clientId: string;
            /**
             * 認可後にユーザーを戻すURL
             * #### 概要
             * - Safie Developers 管理ツールに登録済みのURLを指定してください
             * - 戻り先のページで{@link initialize}を呼び出すとトークンの取得が完了します
             */
            redirectUri: string;
            /**
             * 要求するスコープ
             * #### 概要
             * - 複数指定する場合は半角スペースで区切ります
             * - `openid`を含めるとIDトークンを取得します
             */
            scope: string;
            /**
             * セッションの維持(規定値: false)
             * #### 概要
             * - trueの時、サイトを閉じた後もセッションが維持されます。falseの時は、サイトのリロードではセッションは維持されますが、サイトを閉じた際、新しいタブやウィンドウでサイトを開いた際にセッションは維持されません
             */
            rememberMe?: boolean;
            /**
             * トークンの自動更新(既定値: false)
             * #### 概要
             * - trueの時、アクセストークンの期限切れをSDKが検知し、リフレッシュトークンを使って自動で更新します
             */
            enableTokenRefresh?: boolean;
        }
        /**
         * 認証情報の初期化の結果
         */
        interface InitializeResult {
            /**
             * {@inheritDoc TokenType}
             */
            tokenType: TokenType;
            /**
             * IDトークン
             * #### 概要
             * - {@link authorize}のscopeに`openid`を含めて認可した場合に取得されます
             * - JWT形式の文字列です
             * - 保存済みのトークンから復元した場合は、認可した時点で取得した値を返します
             * - SDKは認可リクエストとの対応（nonce）のみを検証しています。値を信頼して利用する場合は、サーバー側で署名を検証してください
             */
            idToken?: string;
        }
        /**
         * 認証情報の初期化
         * #### 概要
         * - ブラウザに保存されたトークンを取得し、認証情報を初期化します
         * - ページをリロードした場合や、{@link setToken}でrememberMeをtrueにした場合に認証情報を復元するために使用します
         * - clientIdを指定した場合はPublic Client(PKCE)として初期化し、{@link authorize}による認可後に`redirect_uri`へ返却された認可コードからトークンを取得します
         * - clientIdを指定しない場合はConfidential ClientまたはAPIキーでの利用とし、{@link setToken}で設定されたトークンのみを復元します
         * - {@link authorize}で開始した認可から戻った場合のみ、URLの`code`・`state`パラメータを読み取って使用し、処理後にURLから除去します
         * - エラーの種別が`authorization_required`の場合は{@link authorize}で認可を開始する必要があります
         * - clientIdを指定しない場合にエラーが返るときは{@link setToken}でトークンを再設定する必要があります
         * @param options {@inheritDoc InitializeOptions}
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //Public Client(PKCE)
         * try {
         *    const result = await Safie.Auth.initialize({ clientId: '*******' });
         *    // 認証情報の初期化が成功した場合
         *    console.log(result.tokenType);
         * } catch (error) {
         *    // 認可が必要な場合
         *    if (error.type === 'authorization_required') {
         *      await Safie.Auth.authorize({
         *        clientId: '*******',
         *        redirectUri: 'https://example.com/',
         *        scope: 'safie-api',
         *      });
         *      return;
         *    }
         *
         *    throw error;
         * }
         *
         * //APIキー・アクセストークン
         * try {
         *    const result = await Safie.Auth.initialize();
         *    // 認証情報の初期化が成功した場合
         *    console.log(result.tokenType);
         * } catch (error) {
         *    // 認証情報の初期化が失敗した場合
         *    await Safie.Auth.setToken(*******, Safie.Auth.TokenType.APIKey);
         * }
         * ```
         */
        function initialize(options?: InitializeOptions): Promise<InitializeResult>;
        /**
         * 認可の開始
         * #### 概要
         * - Public Client(PKCE)としての認可を開始し、Safieのログイン画面へ遷移します
         * - クライアントシークレットを使用しないため、ブラウザ上で完結する認可に使用できます
         * - この関数を呼び出すとページが遷移するため、後続の処理は実行されません
         * - ログイン後は`redirectUri`のページへ戻るため、そのページで{@link initialize}にclientIdを指定して呼び出してください
         * - `redirectUri`にはこの関数を呼び出したページと同一オリジンのURLを指定してください
         * - Web Crypto APIを使用するため、httpsで配信されるページから呼び出してください
         * @param options {@inheritDoc AuthorizeOptions}
         * @returns
         * @throws {@link ErrorDetail} `redirectUri`が呼び出し元と同一オリジンでない場合は`invalid_params`、Web Crypto APIが利用できない場合は`authorization_failed`がスローされます
         * @example
         * ```js
         * await Safie.Auth.authorize({
         *    clientId: '*******',
         *    redirectUri: 'https://example.com/',
         *    scope: 'safie-api',
         * });
         *
         * //IDトークンを取得し、セッションとトークンの更新を有効にする
         * await Safie.Auth.authorize({
         *    clientId: '*******',
         *    redirectUri: 'https://example.com/',
         *    scope: 'safie-api openid',
         *    rememberMe: true,
         *    enableTokenRefresh: true,
         * });
         * ```
         */
        function authorize(options: AuthorizeOptions): Promise<void>;
        /**
         * 認証情報の設定
         * #### 概要
         * - トークンを設定します
         * - 設定前に、{@link authorize}で取得したトークンを含む保存済みの認証情報を削除します
         * - rememberMeがtrueの時、サイトを閉じた後もセッションが維持されます。falseの時は、サイトのリロードではセッションは維持されますが、サイトを閉じた際、新しいタブやウィンドウでサイトを開いた際にセッションは維持されません
         * @param token トークン文字列
         * @param type {@inheritDoc TokenType}
         * @param rememberMe セッションの維持(規定値: false)
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //APIキー
         * await Safie.Auth.setToken(*******, Safie.Auth.TokenType.APIKey);
         * //OAuth2 アクセストークン
         * await Safie.Auth.setToken(*******, Safie.Auth.TokenType.AccessToken);
         *
         * //セッションを維持する
         * await Safie.Auth.setToken(*******, Safie.Auth.TokenType.APIKey, true);
         * ```
         */
        function setToken(token: string, type: TokenType, rememberMe?: boolean): Promise<void>;
        /**
         * 認証情報の削除
         * #### 概要
         * - 設定済みのトークンを削除します
         * - {@link authorize}で取得したトークンも削除されます
         * - SDKが保持するトークンの削除のみを行い、Safieアカウントのログアウトは行いません
         * @returns
         * @example
         * ```js
         * await Safie.Auth.removeToken();
         * ```
         */
        function removeToken(): Promise<void>;
    }

    /**
     * SDK全体の設定に関する機能群
     */
    namespace Config {
        /**
         * テーマの設定に関する機能群
         */
        namespace Theme {
            /** 設定可能なテーマ種別 */
            type ThemeType = "light" | "dark" | "system";
            /**
             * テーマを設定します。
             * #### 概要
             * - SDK全体のテーマを設定します
             * - 現在アクティブな全てのSDKコンポーネント（StreamingPlayer, Timeline等）に即時反映されます
             * - "system"を指定するとOSのカラースキーム設定がリアルタイムに反映されます
             * - 設定しない場合、デフォルトとして"light"が適用されます
             * @param theme テーマ種別
             * @throws {@link ErrorDetail} `ThemeType`以外の値を指定した場合にスローされます
             * @example
             * ```js
             * //ダークテーマに設定
             * Safie.Config.Theme.set('dark');
             * //OSのカラースキームに追従
             * Safie.Config.Theme.set('system');
             * ```
             */
            function set(theme: ThemeType): void;
            /**
             * 現在設定されているテーマ種別を返します。
             * #### 概要
             * - 現在設定されているテーマ種別を返します
             * @returns 設定されているテーマ種別
             * @example
             * ```js
             * const theme = Safie.Config.Theme.get();
             * ```
             */
            function get(): ThemeType;
        }
    }

    /**
     * デバイス情報の操作に関する機能群
     */
    namespace Devices {
        /**
         * デバイス情報
         */
        interface Device {
            /**
             * デバイスID
             */
            deviceId: string;
            model: {
                /**
                 * モデル名
                 */
                description: string;
            };
            /**
             * シリアル
             */
            serial: string;
            setting: {
                /**
                 * デバイス名
                 */
                name: string;
            };
            status: {
                /**
                 * デバイスの映像ストリーミング状況
                 *
                 * ローカルストレージ録画機能が有効な場合は常にfalseとなります。
                 */
                videoStreaming: boolean;
                /**
                 * サーバーへの接続状況
                 */
                serverConnecting: boolean;
            };
            /**
             * デバイスの機能情報のリスト
             */
            capabilities: string[];
        }
        /**
         * デバイス一覧取得の結果
         */
        interface QueryDevicesResult {
            /**
             * 返却された件数
             */
            count: number;
            /**
             * 返却されたリストのオフセット
             */
            offset: number;
            /**
             * 返却されたリストの総件数
             */
            total: number;
            /**
             * 次のリストの有無
             */
            hasNext: boolean;
            /**
             * 返却されたデバイス情報
             */
            list: Device[];
        }
        /**
         * メディア一覧取得の結果
         */
        interface QueryMediaResult {
            /**
             * 返却された一覧
             */
            list: {
                /**
                 * 録画データの開始時間
                 */
                timestamp: number;
                /**
                 * 録画データの開始時間からの経過ミリ秒。timestamp + durationが録画データの終了時間を意味します。
                 */
                duration: number;
            }[];
        }
        /**
         * 標準イベント一覧取得の結果
         */
        interface QueryStandardEventsResult {
            /**
             * 返却されたリストのオフセット
             */
            offset: number;
            /**
             * 返却されたリストの総件数
             */
            total: number;
            /**
             * 返却された一覧
             */
            list: {
                /**
                 * 標準イベント種別
                 */
                type: StandardEvent;
                /**
                 * イベントの発生時間
                 */
                timestamp: number;
            }[];
        }
        /**
         * ローカルストレージ録画状況取得の結果
         */
        interface QueryLocalRecordingStateResult {
            /**
             * ローカルストレージ録画情報
             */
            localRecording?: {
                /**
                 * ローカルストレージ録画機能が有効か否か
                 */
                localMode: boolean;
                /**
                 * ローカルストレージへ録画中か否か
                 */
                recording: boolean;
            };
        }
        /**
         * 位置情報取得の結果
         */
        interface QueryLocationResult {
            /**
             * {@inheritDoc GPSStatus}
             */
            gpsStatus: GPSStatus;
            /**
             * 位置情報
             */
            location: {
                /**
                 * 緯度
                 */
                latitude: number;
                /**
                 * 経度
                 */
                longitude: number;
            };
        }
        /**
         * GPSの状態
         */
        enum GPSStatus {
            /**
             * GPS機能が無効化されている
             */
            Off = "off",
            /**
             * GPS機能が有効化されているが、位置を測位できていない
             */
            On = "on",
            /**
             * GPS機能が有効化されており、位置を測位できている
             */
            Active = "active",
        }
        /**
         * 標準イベント種別
         */
        enum StandardEvent {
            /**
             * 接続検知
             */
            Connected = "connected",
            /**
             * 切断検知
             */
            Disconnected = "disconnected",
            /**
             * モーション検知
             */
            Motion = "motion",
            /**
             * サウンド検知
             */
            Sound = "sound",
            /**
             * 人検知
             */
            Person = "person",
        }
        /**
         * イベント日時の並び順
         */
        enum EventSort {
            /**
             * 昇順
             */
            Ascending = "ascending",
            /**
             * 降順
             */
            Descending = "descending",
        }
        /**
         * デバイス一覧取得
         * #### 概要
         * - API実行時点でアクセス権限のあるデバイスの一覧を取得します
         * - itemId パラメータを指定することで、特定のオプションが付与されているデバイスの情報のみを取得することが可能です
         *   - 有効なitemIdの値は、https://developers.safie.link/terms-of-api/sdk で確認できます
         * #### 必要なOAuth2.0 scope:
         * - Safie APIで利用可能なscopeのいずれか一つ以上
         * #### 必要なデバイスオプション:
         * - APIまたはSDKの任意のオプション
         * @param options オプション
         * @param options.limit 返却するリストの最大件数 (規定値: 20, 最小値: 1, 最大値: 100)
         * @param options.offset 返却するリストのオフセット (規定値: 0, 最大値: 10000)
         * @param options.itemId デバイスに設定されているオプションによる絞り込み
         * @param options.deviceIds デバイスIDによる絞り込み
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //最大件数:30件、オフセット:10で実行
         * const result = await Safie.Devices.queryDevices({ limit: 30, offset: 10});
         * ```
         */
        function queryDevices(options?: {
            limit?: number;
            offset?: number;
            itemId?: number;
            deviceIds?: string[];
        }): Promise<QueryDevicesResult>;
        /**
         * サムネイル取得
         * #### 概要
         * - API実行時点の最新サムネイルを取得します
         * #### 必要な権限:
         * - ライブ
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:live:view
         * #### 必要なデバイスオプション:
         * - APIまたはSDKの任意のオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * // v1.1以降の記法
         * const img = await Safie.Devices.queryThumbnail({ deviceId });
         * //imageElem: HTMLImageElement
         * imageElem.src = URL.createObjectURL(img);
         *
         * // v1.0以前の記法
         * const img = await Safie.Devices.queryThumbnail(deviceId);
         * //imageElem: HTMLImageElement
         * imageElem.src = URL.createObjectURL(img);
         * ```
         * @description v1.1から引数の指定方法が直接指定からオブジェクトリテラル型に変更されました。旧来の記法は継続して利用できますが、非推奨であり将来的に廃止予定です。
         */
        function queryThumbnail(options: {
            deviceId: string;
        }): Promise<Blob>;
        /**
         * @deprecated v1.0以前の記法。将来的に廃止されるため`{ deviceId }` オブジェクト形式に移行してください。
         */
        function queryThumbnail(deviceId: string): Promise<Blob>;
        /**
         * 画像取得
         * #### 概要
         * - デバイスから画像を取得できます
         * - timestampを指定しない場合、API実行時点の最新画像が取得できます
         * #### 制限:
         * - 録画がオフになっている、電源がオフになっているなど映像ストリーミングがオフになっている場合、"No stream on the device"エラーが返ります
         * - timestampを指定する場合、現在時刻から1分以上前の時間を指定してください。現在時刻から1分未満の場合、"Invalid timestamp"エラーが返ります
         * - 録画開始時刻以前をtimestampに指定すると400エラーが返ります
         * - 録画期間内であっても、指定したtimestamp時点の画像を取得できない時は"No available data"エラーが返ります
         * #### 必要な権限:
         * - timestamp未指定時: ライブ
         * - timestamp指定時: ライブ + 録画
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:live:view（timestamp未指定時）
         * - safie-api もしくは api:device:live:view api:device:timeline:view の両方（timestamp指定時）
         * #### 必要なデバイスオプション:
         * 以下のいずれかが必要になります
         * - 静止画 API（10万枚）
         * - 静止画 API（50万枚）
         * - 静止画 API（100万枚）
         * - 静止画 API（200万枚）
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.timestamp 取得したい画像の時刻 (UNIX時間ミリ秒)
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //timestampを指定しない場合
         * const img = await Safie.Devices.queryImage({ deviceId });
         * //imageElem: HTMLImageElement
         * imageElem.src = URL.createObjectURL(img);
         *
         * //timestampを指定する場合
         * const timestamp = 1595981532000; //2020-07-29T09:12:12+0900;
         * const img = await Safie.Devices.queryImage({ deviceId, timestamp });
         * //imageElem: HTMLImageElement
         * imageElem.src = URL.createObjectURL(img);
         * ```
         */
        function queryImage(options: {
            deviceId: string;
            timestamp?: number;
        }): Promise<Blob>;
        /**
         * スチルキャプチャ
         * #### 概要
         * - デバイスの現在の撮影画像を取得しJPEG形式で返します
         * - {@link queryImage 画像取得API}ではストリーミング用の動画から画像を作成するため、 画像は動画の画質と同等となります。スチルキャプチャAPIでは、ストリーミング用の動画エンコード前の画像を取得するため、 デバイスの性能が高ければ、高画質な画像を取得できます
         * #### 制限:
         * - 対象のデバイスがSafieクラウドに接続されていない場合、"No stream on the device"エラーが返ります
         * - 対象デバイスの録画設定がオフになっている、電源がオフになっているなど映像ストリーミングが行われていないとき"No stream on the device"エラーが返ります
         * - スチルキャプチャに対応していないデバイスを指定した場合、"The device does not support still capture"エラーが返ります
         * #### 必要な権限:
         * - ライブ
         * - 位置情報 (権限がない場合、画像の中にGPS情報は含まれません)
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:live:view
         * #### 必要なデバイスオプション:
         * - スチルキャプチャ API
         * @param options オプション
         * @param options.deviceId デバイスID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const img = await Safie.Devices.queryStillCapture({ deviceId });
         * //imageElem: HTMLImageElement
         * imageElem.src = URL.createObjectURL(img);
         * ```
         */
        function queryStillCapture(options: {
            deviceId: string;
        }): Promise<Blob>;
        /**
         * メディア一覧取得
         * #### 概要
         * - 指定されたデバイスで録画されている映像（メディア）の一覧を取得します
         * - 各デバイスでどの時点・期間に録画映像が存在するのかを調べることができます
         * #### 制限:
         * - endはstart時刻以降であれば指定することができます
         * - start/endで指定できる取得期間の最大範囲は 3日（259200秒）です
         * - start/endで指定した範囲で存在するメディア一覧情報を返します
         * #### 必要な権限:
         * - ライブ + 録画
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:live:view api:device:timeline:view の両方
         * #### 必要なデバイスオプション:
         * - APIまたはSDKの任意のオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.start 取得範囲の開始時間 (UNIX時間ミリ秒)
         * @param options.end 取得範囲の終了時間 (UNIX時間ミリ秒)
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const start = 1597823820000; //2020-08-19T16:57:00+09:00
         * const end = 1597910220000; //2020-08-20T16:57:00+09:00
         * const result = await Safie.Devices.queryMedia({ deviceId, start, end });
         * ```
         */
        function queryMedia(options: {
            deviceId: string;
            start: number;
            end: number;
        }): Promise<QueryMediaResult>;
        /**
         * 標準イベント一覧取得
         * #### 概要
         * - 指定されたデバイスの標準イベント情報一覧を取得します
         * - 「標準イベント」とは以下の5つのイベントの総称です
         *   - 接続検知
         *   - 切断検知
         *   - モーション検知
         *   - サウンド検知
         *   - 人検知
         * #### 制限:
         * - start/endで指定される取得期間の最大範囲は 1日(86400秒)です
         * - endは現在時刻から1分以上前の時間を指定してください。現在時刻から1分未満の場合、"Invalid end"エラーが返ります
         * #### 必要な権限:
         * - ライブ + 録画
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:live:view api:device:timeline:view の両方
         * #### 必要なデバイスオプション:
         * - APIまたはSDKの任意のオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @param options.start 取得範囲の開始時間 (UNIX時間ミリ秒)
         * @param options.end 取得範囲の終了時間 (UNIX時間ミリ秒)
         * @param options.types イベント種別
         * @param options.limit 返却するリストの最大件数 (規定値: 20, 最小値: 1, 最大値: 100)
         * @param options.offset 返却するリストのオフセット (規定値: 0, 最大値: 10000)
         * @param options.sort {@inheritDoc EventSort}
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * //最大件数:30件、オフセット:10で実行
         * const start = 1597823820000; //2020-08-19T16:57:00+09:00
         * const end = 1597910220000; //2020-08-20T16:57:00+09:00
         * const result = await Safie.Devices.queryStandardEvents({ deviceId, start, end, limit: 30, offset: 10 });
         *
         * //モーション、サウンドイベントのみ取得
         * const start = 1597823820000; //2020-08-19T16:57:00+09:00
         * const end = 1597910220000; //2020-08-20T16:57:00+09:00
         * const result = await Safie.Devices.queryStandardEvents({ deviceId, start, end, types: [Safie.Devices.StandardEvent.MOTION, Safie.Devices.StandardEvent.SOUND] });
         * ```
         */
        function queryStandardEvents(options: {
            deviceId: string;
            start: number;
            end: number;
            types?: StandardEvent[];
            limit?: number;
            offset?: number;
            sort?: EventSort;
        }): Promise<QueryStandardEventsResult>;
        /**
         * 位置情報取得
         * #### 概要
         * - 指定されたデバイスの現在のGPS位置情報を取得します。GPSに対応していないデバイスでは利用できません
         * - デバイスに手動設定された位置情報を取得することはできません
         * #### 制限:
         * - GPSに対応していないデバイスをdeviceIdに指定すると"The device does not support GPS feature"エラーが返ります
         * #### 必要な権限:
         * - 位置情報
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:location:all
         * #### 必要なデバイスオプション:
         * - 位置情報取得 API
         * @param options オプション
         * @param options.deviceId デバイスID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const location = await Safie.Devices.queryLocation({ deviceId });
         * ```
         */
        function queryLocation(options: {
            deviceId: string;
        }): Promise<QueryLocationResult>;
        /**
         * ローカルストレージ録画状況取得
         * #### 概要
         * - 指定されたハイブリッド録画対応デバイスのローカルストレージ録画状況を取得します
         * - デバイスに対してリアルタイムに問い合わせを行い、ローカルストレージ録画機能の有効状態および録画中かどうかを返却します
         * - 指定されたデバイスがハイブリッド録画に対応していない場合は、空オブジェクト`{}`を返却します
         * #### 制限:
         * - デバイスがサーバーに接続されていない場合、400エラーが返ります
         * #### 必要なOAuth2.0 scope:
         * - Safie APIで利用可能なscopeのいずれか一つ以上
         * #### 必要なデバイスオプション:
         * - APIまたはSDKの任意のオプション
         * @param options オプション
         * @param options.deviceId デバイスID
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.Devices.queryLocalRecordingState({ deviceId });
         * ```
         */
        function queryLocalRecordingState(options: {
            deviceId: string;
        }): Promise<QueryLocalRecordingStateResult>;
    }

    /**
     * エラー種別
     */
    type ErrorType =
        | "invalid_params"
        | "unauthorized"
        /** Public Clientとして再度認可が必要な状態 */
        | "authorization_required"
        /** 認可処理が失敗し、認可をやり直す必要がある状態 */
        | "authorization_failed"
        | "forbidden"
        | "too_many_requests"
        | "service_unavailable"
        | "network_error"
        | "resource_exhausted";
    /**
     * エラー定義
     */
    interface ErrorDetail {
        /**
         * エラー種別
         */
        type: ErrorType;
        /**
         * エラーメッセージ
         */
        message: string;
    }

    /**
     * ストリーミングプレイヤーの操作に関する機能群
     */
    namespace Player {
        /**
         * プレイヤーのイベント定義
         */
        enum PlayerEvent {
            /**
             * ストリーミング再生の時刻が変化したタイミングで発火します。
             */
            PLAY_TIME_CHANGE = "playTimeChange",
            /**
             * プレイヤーのステータスが変更したタイミングで発火します。
             */
            STATUS_CHANGE = "statusChange",
        }
        /**
         * プレイヤーのステータス定義
         */
        enum PlayerStatus {
            /**
             * 未読み込みのステータスです。
             */
            NotLoaded = "notLoaded",
            /**
             * ストリーミング再生開始までのロード中のステータスです。
             */
            Loading = "loading",
            /**
             * ストリーミング再生中のステータスです。
             */
            Streaming = "streaming",
            /**
             * 一時停止中のステータスです。
             */
            Paused = "paused",
            /**
             * エラー発生中のステータスです。
             */
            Error = "error",
            /**
             * 再試行中のステータスです。
             */
            Retrying = "retrying",
        }
        /**
         * ストリーミングステータスの内容
         */
        interface StreamingStatusContext {
            streamingMode: StreamingMode;
        }
        /**
         * エラーステータスの内容
         */
        interface ErrorStatusContext {
            error: ErrorDetail;
        }
        /**
         * プレイヤーステータスの内容
         */
        type PlayerStatusContext = StreamingStatusContext | ErrorStatusContext;
        /**
         * ストリーミング再生のモード
         */
        enum StreamingMode {
            /**
             * 再生していない
             */
            None = "none",
            /**
             * VODのストリーミング再生中です
             */
            Vod = "vod",
            /**
             * LIVEのストリーミング再生中です
             */
            Live = "live",
        }
        /**
         * イベントリスナー
         */
        interface EventListeners {
            /**
             * {@inheritDoc PlayerEvent.PLAY_TIME_CHANGE}
             * @param timestamp 再生時刻 (UNIX時間ミリ秒)
             * @returns
             */
            [PlayerEvent.PLAY_TIME_CHANGE]: (timestamp: number) => void;
            /**
             * {@inheritDoc PlayerEvent.STATUS_CHANGE}
             * @param context.status {@inheritDoc PlayerStatus}
             * @param context.context ステータスコンテキスト。
             */
            [PlayerEvent.STATUS_CHANGE]: (context: {
                status: PlayerStatus;
                context?: PlayerStatusContext;
            }) => void;
        }
        /**
         * プレイヤーの設定値
         */
        interface PlayerConfig {
            /**
             * デバイスID
             * @defaultValue null
             */
            deviceId?: string;
            /**
             * 音量 (0 - 100)
             * @defaultValue 25
             */
            volume?: number;
            /**
             * ミュート設定
             *
             * タイムラインに2台以上のストリーミングプレイヤーが連携されている場合、強制的にミュートが有効となります。
             * @defaultValue false
             */
            muted?: boolean;
            /**
             * マウス・タッチ操作によるズーム、スクロール、および再生/一時停止を有効/無効にします。
             * @defaultValue true
             */
            userInteractions?: boolean;
            /**
             * Live配信モードを通常（hls）/低遅延（webrtc）に設定します。プレイヤーの初期化時に設定します。
             *
             * なお、ハイブリッド録画プランを利用のデバイスにおいては、通常（hls）を指定していても実際の配信は低遅延（webrtc）で行われます。
             * @defaultValue hls
             */
            liveBroadcastMode?: "hls" | "webrtc";
        }
        /**
         * ストリーミングプレイヤー
         * #### 概要
         * 映像のストリーミング再生を行うプレイヤーです。
         * #### 必要な権限:
         * - ライブ + 録画(VOD配信、タイムライン連携時の場合)
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:live:view + api:device:timeline:view
         * #### 必要なデバイスオプション:
         * 以下のいずれかが必要になります
         * - ストリーミング SDK
         * - ストリーミング SDK（100ユーザー）
         * - ストリーミング SDK（2アプリケーション）
         */
        class StreamingPlayer {
            get instanceId(): string;
            /**
             * デバイスを設定します。再生中のストリーミング再生は停止します。
             * @param value デバイスID
             */
            set deviceId(value: string);
            /**
             * 設定されているデバイスのデバイスIDを返します。デバイス未設定時は null を返します。
             */
            get deviceId(): string | null;
            /**
             * 音量を設定します。
             * @param value 音量値 (0 - 100)
             */
            set volume(value: number);
            /**
             * 音量の設定値を返します。
             */
            get volume(): number;
            /**
             * ミュートの有効/無効を設定します。本設定が有効の時はvolumeよりも優先されます。
             * @param value 有効/無効
             */
            set muted(value: boolean);
            /**
             * ミュートの設定値を返します。
             */
            get muted(): boolean;
            /**
             * マウス・タッチ操作によるズーム、スクロール、および再生/一時停止を有効/無効にします
             * @param value 有効/無効
             */
            set userInteractions(value: boolean);
            /**
             * 設定値を返します。
             */
            get userInteractions(): boolean;
            /**
             * LIVE配信モードの設定値を返します。
             */
            get liveBroadcastMode(): "hls" | "webrtc";
            /**
             * 現在のステータスを返します。
             */
            get status(): PlayerStatus;
            /**
             * 現在の再生時刻を返します。再生中でない場合は null を返します。
             */
            get playTime(): number | null;
            /**
             * 現在の再生モードを返します。
             */
            get streamingMode(): StreamingMode;
            /**
             * @param element プレイヤーを配置するルートの要素
             * @param config 初期化時のコンフィグ
             * @example
             * ```js
             * const element = document.getElementById('player');
             * const player = new Safie.Player.StreamingPlayer(element, {
             *  volume: 50
             * });
             * ```
             */
            constructor(element: HTMLElement, config?: PlayerConfig);
            /**
             * ストリーミング再生を開始します。
             *
             * タイムラインと連携している場合、このメソッドの呼び出しは無視されます。
             * @description timestampを指定した時刻が現在時刻に近い場合、強制的にLIVE配信になります。<br>
             * 再生速度が0.25〜8倍速の場合は現在時刻から60秒以内、10～30倍速の場合は現在時刻から80～120秒以内を指定すると、LIVE配信になります。
             *
             * @param timestamp 再生時刻 (UNIX時間ミリ秒)。未指定の場合はLIVE配信になります。
             * @param playbackRate 再生速度の倍率(0.25, 0.5, 1, 1.25, 1.5, 1.75, 2, 3, 4, 5, 8, 10, 15, 20, 30)。LIVE配信の場合は強制的に1になります。
             */
            play(timestamp?: number, playbackRate?: number): void;
            /**
             * ストリーミング再生を停止します。
             *
             * タイムラインと連携している場合、このメソッドの呼び出しは無視されます。
             */
            stop(): void;
            /**
             * ストリーミング再生を一時停止します。
             *
             * タイムラインと連携している場合、このメソッドの呼び出しは無視されます。
             * @description {@link PlayerStatus}がerrorの時は無視されます。
             */
            pause(): void;
            /**
             * ストリーミング再生の一時停止を再開します。
             *
             * タイムラインと連携している場合、このメソッドの呼び出しは無視されます。
             * @description {@link PlayerStatus}がerrorの時は無視されます。
             */
            unpause(): void;
            /**
             * プレイヤーイベントのイベントハンドラーを登録します。
             * @param event
             * @param listener
             * @example
             * ```js
             * function onTimeChange(timestamp) {
             *    console.log(timestamp);
             * }
             *
             * player.on('playTimeChange', onTimeChange);
             * ```
             */
            on<E extends PlayerEvent>(event: E | `${E}`, listener: EventListeners[E]): void;
            /**
             * プレイヤーイベントのイベントハンドラーを解除します。
             * @param event
             * @param listener
             * @example
             * ```js
             * //特定のイベントハンドラーを解除
             * player.off('playTimeChange', onTimeChange);
             * //すべてのイベントハンドラーを解除
             * player.off('playTimeChange');
             * ```
             */
            off<E extends PlayerEvent>(event: E | `${E}`, listener?: EventListeners[E]): void;
            /**
             * プレイヤーのインスタンスを破棄します。
             * @description プレイヤーを削除する時に呼び出す必要があります。実行後にインスタンスを再利用することはできません。
             * @example
             * ```js
             * //インスタンスの破棄
             * player.dispose();
             * // 要素の破棄
             * playerElem.remove();
             *
             * //インスタンスの再利用は不可
             * player.play(); //error
             * ```
             */
            dispose(): void;
            /**
             * PTZ操作を開始します。
             *
             * スライダーによるPTZ操作と中心点移動(クリックやタッチした点が中心になるようにPTZを移動)操作が可能です。
             *
             * PTZに対応していないデバイスでは利用できません。
             * #### 必要な権限:
             * - PTZの利用
             * #### 必要なOAuth2.0 scope:
             * - safie-api もしくは api:device:ptz:all
             * @param options オプション
             * @param options.centeringOnly スライダーを表示せず、中心点移動のみ行う場合はtrueを指定します。デフォルトはfalseです。
             * @example
             * ```js
             * player.startPTZ();
             * ```
             */
            startPTZ(options?: {
                centeringOnly?: boolean;
            }): Promise<void>;
            /**
             * PTZ操作を終了します。
             * @example
             * ```js
             * player.finishPTZ();
             * ```
             */
            finishPTZ(): Promise<void>;
        }
    }

    /**
     * タイムラインの操作に関する機能群
     */
    namespace UIControl {
        /**
         * タイムラインのイベント定義
         */
        enum TimelineEvent {
            /**
             * タイムラインの再生時刻が変化したタイミングで発火します。
             */
            PLAY_TIME_CHANGE = "playTimeChange",
            /**
             * タイムラインのステータスが変更したタイミングで発火します。
             */
            STATUS_CHANGE = "statusChange",
        }
        /**
         * タイムラインのステータス定義
         */
        enum TimelineStatus {
            /**
             * 停止中のステータスです。
             */
            Stopped = "stopped",
            /**
             * タイムライン再生開始までのロード中のステータスです。
             */
            Loading = "loading",
            /**
             * 一時停止中のステータスです。
             */
            Paused = "paused",
            /**
             * 再生中のステータスです。
             */
            Playing = "playing",
        }
        /**
         * エラーステータスの内容
         */
        interface ErrorStatusContext {
            error: ErrorDetail;
        }
        /**
         * タイムラインステータスの内容
         */
        type TimelineStatusContext = ErrorStatusContext;
        /**
         * イベントリスナー
         */
        interface EventListeners {
            /**
             * {@inheritDoc TimelineEvent.PLAY_TIME_CHANGE}
             * @param timestamp 再生時刻 (UNIX時間ミリ秒)
             * @returns
             */
            [TimelineEvent.PLAY_TIME_CHANGE]: (timestamp: number) => void;
            /**
             * {@inheritDoc TimelineEvent.STATUS_CHANGE}
             * @param context.status {@inheritDoc TimelineStatus}
             * @param context.context ステータスコンテキスト。
             */
            [TimelineEvent.STATUS_CHANGE]: (context: {
                status: TimelineStatus;
                context?: TimelineStatusContext;
            }) => void;
        }
        /**
         * タイムラインの設定値
         */
        interface TimelineConfig {
            /**
             * 連携するストリーミングプレイヤーの配列。
             *
             * 2台以上のストリーミングプレイヤーと連携する場合、強制的にミュートが有効となります。
             */
            players: Player.StreamingPlayer[];
            /**
             * イベント凡例に表示するイベント種別をフィルタリングするための配列。
             *
             * nullの場合は全てのイベント種別を表示し、空配列の場合は全てのイベント種別を非表示にします。
             *
             * 指定可能なイベント種別は{@link Devices.StandardEvent 標準イベント種別}やカスタムイベントのID(イベント定義作成時に生成されるID)です。 <br>
             * ただし、接続検知、切断検知は本設定に関わらず常に表示されます。
             *
             * @defaultValue null
             * @example
             * ```js
             * // モーション、サウンド、および特定のカスタムイベントのみ表示
             * filterEventTypes: ['motion', 'sound', 'ev_x8rg0Z9vUDjiYwY8']
             *
             * // 全て非表示
             * filterEventTypes: []
             * ```
             */
            filterEventTypes?: string[] | null;
        }
        /**
         * タイムライン
         * #### 概要
         * 映像の録画タイムラインを表示し、再生を制御するUIコントロールです。ストリーミングプレイヤーと連携して動作します。
         * #### 表示要件:
         * - 幅は545px以上
         * - 高さは120px以上（139px以上の場合はイベントの凡例が表示されます）
         * #### 必要な権限:
         * - ライブ + 録画
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:live:view + api:device:timeline:view
         * #### 必要なデバイスオプション:
         * 以下のいずれかが必要になります
         * - ストリーミング SDK
         * - ストリーミング SDK（100ユーザー）
         * - ストリーミング SDK（2アプリケーション）
         */
        class Timeline {
            /**
             * タイムラインのコンストラクタ
             * @param element タイムラインを配置するルートの要素
             * @param config 初期化時のコンフィグ
             * @example
             * ```js
             * const player1 = new Safie.Player.StreamingPlayer(document.getElementById('player1'));
             * const player2 = new Safie.Player.StreamingPlayer(document.getElementById('player2'));
             *
             * const timeline = new Safie.UIControl.Timeline(document.getElementById('timeline'), {
             *  players: [player1, player2],
             *  filterEventTypes: ['motion', 'sound']
             * });
             * ```
             */
            constructor(element: HTMLElement, config: TimelineConfig);
            /**
             * 現在のステータスを返します。
             */
            get status(): TimelineStatus;
            /**
             * 現在の再生時刻を返します。再生中でない場合は null を返します。
             */
            get playTime(): number | null;
            /**
             * イベント凡例に表示するイベント種別を指定します。
             * @param values 詳細は{@link TimelineConfig.filterEventTypes}を参照。
             */
            set filterEventTypes(values: string[] | null);
            /**
             * イベント凡例に表示するイベント種別の設定値を返します。
             */
            get filterEventTypes(): string[] | null;
            /**
             * タイムラインの再生を開始します。
             * @description timestampを指定した時刻が現在時刻に近い場合、強制的にLIVE配信になります。<br>
             * 再生速度が0.25〜8倍速の場合は現在時刻から60秒以内、10～30倍速の場合は現在時刻から80～120秒以内を指定すると、LIVE配信になります。
             *
             * @param timestamp 再生時刻 (UNIX時間ミリ秒)。未指定の場合は現在時刻から再生されます。
             * @param playbackRate 再生速度の倍率(0.25, 0.5, 1, 1.25, 1.5, 1.75, 2, 3, 4, 5, 8, 10, 15, 20, 30)。未指定の場合は1倍速になります。
             */
            play(timestamp?: number, playbackRate?: number): void;
            /**
             * タイムラインの再生を一時停止します。
             * @example
             * ```js
             * timeline.pause();
             * ```
             */
            pause(): void;
            /**
             * タイムラインの再生の一時停止を再開します。
             * @example
             * ```js
             * timeline.unpause();
             * ```
             */
            unpause(): void;
            /**
             * タイムラインの再生を停止します。
             * @example
             * ```js
             * timeline.stop();
             * ```
             */
            stop(): void;
            /**
             * タイムラインイベントのイベントハンドラーを登録します。
             * @param event イベントタイプ
             * @param listener イベントリスナー関数
             * @example
             * ```js
             * function onTimeChange(timestamp) {
             *    console.log(timestamp);
             * }
             *
             * timeline.on('playTimeChange', onTimeChange);
             * ```
             */
            on<E extends TimelineEvent>(event: E | `${E}`, listener: EventListeners[E]): void;
            /**
             * タイムラインイベントのイベントハンドラーを解除します。
             * @param event イベントタイプ
             * @param listener イベントリスナー関数。未指定の場合はすべてのイベントハンドラーが解除されます。
             * @example
             * ```js
             * //特定のイベントハンドラーを解除
             * timeline.off('playTimeChange', onTimeChange);
             *
             * //すべてのイベントハンドラーを解除
             * timeline.off('playTimeChange');
             * ```
             */
            off<E extends TimelineEvent>(event: E | `${E}`, listener?: EventListeners[E]): void;
            /**
             * タイムラインのインスタンスを破棄します。
             * @description タイムラインを削除する時に呼び出す必要があります。実行後にインスタンスを再利用することはできません。
             * @example
             * ```js
             * //インスタンスの破棄
             * timeline.dispose();
             * // 要素の破棄
             * timelineElem.remove();
             *
             * //インスタンスの再利用は不可
             * timeline.play(); //error
             * ```
             */
            dispose(): void;
        }
    }

    /**
     * ユーザー情報の操作に関する機能群
     */
    namespace Users {
        /**
         * ユーザー情報の取得の結果
         */
        interface QueryInformationResult {
            /**
             * ユーザー名
             */
            userName: string;
            /**
             * メールアドレス
             */
            mailAddress: string;
            /**
             * コーポレーション情報
             */
            corporation?: {
                account: string;
                name: string;
                corporationRole: {
                    name: string;
                    category: string;
                };
            };
        }
        /**
         * ユーザー情報の取得
         * #### 概要
         * - アクセストークンをもとにユーザー情報を取得します
         * - APIキーを設定した場合はエラーが返ります
         * #### 必要なOAuth2.0 scope:
         * - safie-api もしくは api:device:contract:view
         * #### 必要なデバイスオプション:
         * なし
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
         * const result = await Safie.Users.queryInformation();
         * ```
         */
        function queryInformation(): Promise<QueryInformationResult>;
    }
}
