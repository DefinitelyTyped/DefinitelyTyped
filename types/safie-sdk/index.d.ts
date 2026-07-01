declare namespace Safie {
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
         * 認証情報の初期化の結果
         */
        interface InitializeResult {
            /**
             * {@inheritDoc TokenType}
             */
            tokenType: TokenType;
        }
        /**
         * 認証情報の初期化
         * #### 概要
         * - ブラウザに保存されたトークンを取得し、認証情報を初期化します
         * - ページをリロードした場合や、{@link setToken}でrememberMeをtrueにした場合に認証情報を復元するために使用します
         * - エラーが返る場合は{@link setToken}でトークンを再設定する必要があります
         * @returns
         * @throws {@link ErrorDetail}
         * @example
         * ```js
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
        function initialize(): Promise<InitializeResult>;
        /**
         * 認証情報の設定
         * #### 概要
         * - トークンを設定します
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
         * @returns
         * @example
         * ```js
         * await Safie.Auth.removeToken();
         * ```
         */
        function removeToken(): Promise<void>;
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
             * @hidden
             * デバイスのcapability情報
             */
            capabilities?: string[];
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
         *   - 有効なitemIdの値は、https://developers.safie.link/terms-of-api で確認できます
         * #### 必要なOAuth2.0 scope:
         * - Safie APIで利用可能なscopeのいずれか一つ以上
         * #### 必要なデバイスオプション:
         * - APIまたはSDKの任意のオプション
         * @param options オプション
         * @param options.limit 返却するリストの最大件数 (規定値: 20, 最大値: 100)
         * @param options.offset 返却するリストのオフセット (規定値: 0)
         * @param options.itemId デバイスに設定されているオプションによる絞り込み
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
         * @param options.limit 返却するリストの最大件数 (規定値: 20, 最大値: 100)
         * @param options.offset 返却するリストのオフセット (規定値: 0)
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
         * #### 制限:
         * - ハイブリッド録画プランを利用のデバイスにおいて、通信を開始後にSafie Developersのアプリケーションの変更及びデバイスオプションの削除を行っても、視聴中は反映されません。
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
             * @param value 詳細は{@link TimelineConfig.filterEventTypes}を参照。
             */
            set filterEventTypes(value: string[] | null);
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
