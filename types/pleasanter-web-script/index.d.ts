// #region イベント関係

/**
 * @abstract イベントが保持するデータ
 */
interface EventData {
    ControlId: string;
}

/***
 * @abstract イベントハンドラの引数
 */
interface EventArguments {
    $control: string;
    async: boolean;
    data: EventData;
    json: string;
    methodType: string;
    ret: string;
    url: string;
}

/***
 * @abstract イベントハンドラの定義
 */
interface PleasanterApiEventInterface {
    /**
     * @abstract サーバへデータを送信した後に実行するメソッドの指定方法を説明します。
     * @param arg フック情報
     * @returns 処理を続行するか
     * @see https://pleasanter.org/manual/script-events-after-send
     */
    after_send: (arg: EventArguments) => boolean;

    /**
     * @abstract サーバへデータを送信後、画面内容を更新後に実行するメソッドの指定方法を説明します。
     * @param arg フック情報
     * @returns 処理を続行するか
     * @see https://pleasanter.org/manual/script-events-after-set
     */
    after_set: (arg: EventArguments) => boolean;

    /**
     * @abstract バリデーションチェックを行った後に実行するメソッドの指定方法を説明します。項目に入力した値が正しいかをチェックするときに使用してください。
     * @param arg フック情報
     * @returns 処理を続行するか
     * @see https://pleasanter.org/manual/script-events-after-validate
     */
    after_validate: (arg: EventArguments) => boolean;

    /**
     * @abstract サーバへデータを送信する前に実行するメソッドの指定方法を説明します。項目に入力した値が正しいかをチェックするときに使用してください。
     * @param arg フック情報
     * @returns 処理を続行するか
     * @see https://pleasanter.org/manual/script-events-before-set
     */
    before_send: (arg: EventArguments) => boolean;

    /**
     * @abstract サーバへデータを送信後、画面内容を更新する前に実行するメソッドの指定方法を説明します。
     * @param arg フック情報
     * @returns 処理を続行するか
     * @see https://pleasanter.org/manual/script-events-before-set
     */
    before_set: (arg: EventArguments) => boolean;

    /**
     * @abstract バリデーションチェックを行う前に実行するメソッドの指定方法を説明します。項目に入力した値が正しいかをチェックするときに使用してください。
     * @param arg フック情報
     * @returns 処理を続行するか
     * @see https://pleasanter.org/manual/script-events-before-validate
     */
    before_validate: (arg: EventArguments) => boolean;

    /**
     * @abstract 「バーンダウンチャート」を読み込んだとき、もしくはフィルタ等で表示する内容が変わったときに実行するメソッドの指定方法を説明します。
     * @see https://pleasanter.org/manual/script-events-on-burndown-load
     */
    on_burndown_load: () => void;

    /**
     * @abstract 「カレンダー」を読み込んだとき、もしくはフィルタ等で表示する内容が変わったときに実行するメソッドの指定方法を説明します。
     * @see https://pleasanter.org/manual/script-events-on-calendar-load
     */
    on_calendar_load: () => void;

    /**
     * @abstract 「クロス集計」を読み込んだとき、もしくはフィルタ等で表示する内容が変わったときに実行するメソッドの指定方法を説明します。
     * @see https://pleasanter.org/manual/script-events-on-crosstab-load
     */
    on_crosstab_load: () => void;

    /**
     * @abstract  「編集画面」を読み込んだときに実行するメソッドの指定方法を説明します。当メソッドは主に「レコードの遷移にAjaxを使用」や「ダイアログで編集」にチェックを入れた場合にスクリプトを実行させたい場合に使用してください。
     *  @see https://pleasanter.org/manual/script-events-on-editor-load
     */
    on_editor_load: () => void;

    /**
     * @abstract 「ガントチャート」を読み込んだとき、もしくはフィルタ等で表示する内容が変わったときに実行するメソッドの指定方法を説明します。
     * @see https://pleasanter.org/manual/script-events-on-gantt-load
     */
    on_gantt_load: () => void;

    /**
     * @abstract 「一覧画面」を読み込んだとき、もしくはフィルタ等で表示する内容が変わったときに実行するメソッドの指定方法を説明します。
     * @see https://pleasanter.org/manual/script-events-on-grid-load
     */
    on_grid_load: () => void;

    /**
     *  @abstract 「カンバン」を読み込んだとき、もしくはフィルタ等で表示する内容が変わったときに実行するメソッドの指定方法を説明します。
     * @see https://pleasanter.org/manual/script-events-on-kamban-load
     */
    on_kamban_load: () => void;

    /**
     * @abstract 「時系列チャート」を読み込んだとき、もしくはフィルタ等で表示する内容が変わったときに実行するメソッドの指定方法を説明します。
     * @see https://pleasanter.org/manual/script-events-on-timeseries-load
     */
    on_timeseries_load: () => void;
}

// #endregion

/**
 * @abstract プリザンターのAPI定義
 */
interface PleasanterApiInterface {
    /**
     * Pleasanterで実行されるアクションの種類を表します。
     * @returns {'new' | 'edit' | 'index' | 'calendar' | 'crosstab' | 'gantt' | 'burndown' | 'timeseries' | 'kanban' | 'imagelib' | 'trashbox'} アクションの種類。
     * @see [Pleasanter ドキュメント](https://pleasanter.org/manual/script-action)
     */
    action():
        | "new"
        | "edit"
        | "index"
        | "calendar"
        | "crosstab"
        | "gantt"
        | "burndown"
        | "timeseries"
        | "kanban"
        | "imagelib"
        | "trashbox";

    /// #region Itemデータ系

    /**
     * AjaxのPOSTリクエストによる値のレコード取得が可能なメソッドです。
     * @param ref レコード取得のためのリクエスト参照
     * @see https://pleasanter.org/manual/script-api-get
     */
    apiGet(ref: GetRequest): void;

    /**
     * AjaxのPOSTリクエストによる新規レコードの作成が可能なメソッドです。
     * @param createRequest 新規レコード作成のためのリクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-create
     */
    apiCreate(createRequest: CreateRequestArgument): void;

    /**
     * AjaxのPOSTリクエストによるレコード削除が可能なメソッドです。
     * @param deleteRequest レコード削除のためのリクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-delete
     */
    apiDelete(deleteRequest: DeleteRequestArgument): void;

    // apiDeleteSiteのJSDocコメントは後で追加する
    // https://pleasanter.org/manual/script-api-delete-site

    /**
     * AjaxのPOSTリクエストによるレコードの更新が可能なメソッドです。
     * @param updateRequest レコード更新のためのリクエストパラメータ
     * @see https://pleasanter.net/fs/publishes/524076/edit
     */
    apiUpdate(updateRequest: UpdateRequest): void;

    // #endregion

    /// #region ユーザー関係

    /**
     * AjaxのPOSTリクエストによるユーザ取得が可能なメソッドです。
     * @param usersGetRequest ユーザ取得のためのリクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-users-get
     */
    apiUsersGet(usersGetRequest: UsersGetRequest): void;

    /**
     * AjaxのPOSTリクエストによるユーザの更新が可能なメソッドです。
     * @param usersUpdateRequest ユーザ更新のためのリクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-users-update
     */
    apiUsersUpdate(usersUpdateRequest: UsersUpdateRequest): void;

    /**
     * AjaxのPOSTリクエストによるユーザの削除が可能なメソッドに関する説明をします。ユーザ情報を削除したいときに使用してください。
     *
     * @param usersDeleteRequest ユーザ削除のためのリクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-users-delete
     */
    apiUsersDelete(usersDeleteRequest: UsersDeleteRequest): void;

    // #endregion

    /// #region Site関係

    /**
     * AjaxのPOSTリクエストによるサイト情報の取得が行えるスクリプト機能です。
     * @param ref リクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-get-site
     */
    apiGetSite(ref: GetSiteRequest): void;

    /**
     * AjaxのPOSTリクエストによるサイトの削除が行えるスクリプト機能です。
     * @param ref リクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-delete-site
     */
    apiDeleteSite(ref: DeleteSiteRequest): void;

    /**
     * AjaxのPOSTリクエストによるサイト情報の更新が行えるスクリプト機能です。
     * @param ref リクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-delete-site
     */
    apiUpdateSite(ref: UpdateSiteRequest): void;

    /**
     * AjaxのPOSTリクエストによるサイトの作成が行えるスクリプト機能です。
     * @param ref リクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-create-site
     */
    apiCreateSite(ref: UpdateSiteRequest): void;

    // #endregion

    /// #region Groups関係

    /**
     * AjaxのPOSTリクエストによるグループ情報の取得が行えるスクリプト機能です。
     * @param ref リクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-groups-get
     */
    apiGroupsGet(ref: GetGroupsRequest): void;

    /**
     * AjaxのPOSTリクエストによるグループの削除が行えるスクリプト機能です。
     * @param ref リクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-groups-delete
     */
    apiGroupsDelete(ref: DeleteGroupsRequest): void;

    /**
     * AjaxのPOSTリクエストによるグループの更新が行えるスクリプト機能です。
     * @param ref リクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-groups-update
     */
    apiGroupsUpdate(ref: UpdateGroupsRequest): void;

    /**
     * AjaxのPOSTリクエストによるグループの作成が行えるスクリプト機能です。
     * @param ref リクエストパラメータ
     * @see https://pleasanter.org/manual/script-api-groups-create
     */
    apiGroupsCreate(ref: CreateGroupsArgument): void;

    // #endregion

    /**
     * 指定された宛先にメールを送信するためのメソッドです。
     * @param {number} id - 操作対象のサイトID
     * @param {SendMailRequest} data - メールの内容。To, Cc, Bcc, Title, Bodyを含むオブジェクト。
     * @see [Pleasanter ドキュメント](https://pleasanter.org/manual/script-api-send-mail)
     */
    apiSendMail(id: number, sendMailRequest: SendMailRequest): void;

    /**
     * AjaxのPOSTリクエストによるAPIのリスクエストを実行する際のURL値の取得が可能なメソッドに関する説明をします。
     * @param {number} id - URLを取得したいサイトID
     * @param {string} action - 指定できるアクション種別 : get、create、update、delete
     * @see [Pleasanter ドキュメント](https://pleasanter.org/manual/script-api-url)
     */
    apiUrl(id: number, action: "get" | "create" | "update" | "delete"): string;

    /**
     * 画面下に表示されるメッセージを削除することができるメソッドです。
     * @see https://pleasanter.org/manual/script-clear-message
     */
    clearMessage(): void;

    /**
     * AjaxのPOSTリクエストを使用して、現在のコントローラーの種類を取得します。
     * 取得可能な値には'tenants', 'depts', 'groups', 'users', 'items'があります。
     *
     * @returns {ControllerType} 現在のコントローラーの種類。
     * @see [Pleasanter ドキュメント](https://pleasanter.org/manual/script-controller)
     */
    controller: () => "tenants" | "depts" | "groups" | "users" | "items";

    /**
     * 現在ログインしているユーザーの組織IDを取得します。
     * この関数は、組織IDをプログラムでアクセスする必要がある場合に使用できます。
     *
     * @returns {number} ログインユーザーの組織ID。
     * @see [Pleasanter ドキュメント](https://pleasanter.org/manual/script-dept-id)
     */
    deptId: () => number;

    /**
     * 対象項目のカラム名（データベースの列名）を取得するメソッドです。
     * @param name カラム名
     * @returns 指定されたカラム名に対応するデータベースの列名
     * @see https://pleasanter.org/manual/script-get-column-name
     */
    getColumnName(name: string): string | undefined;

    /**
     * 編集画面上で対象の項目名から要素を取得するメソッドです。対象の項目名のid名や値を出力したいときに使用してください。
     * @param labelName ラベル名
     * @returns 指定されたラベル名に一致するHTML要素の配列
     * @see https://pleasanter.org/manual/script-get-control
     */
    getControl(labelName: string): HTMLElement[] | undefined;

    /**
     * 対象の項目名からFieldを取得するメソッドです。対象の項目をラベルごとに表示/非表示切り替えたいときなどに使用してください。
     * @param {string} labelName - 項目の名前。
     * @returns {HTMLElement[] | undefined} - 指定されたラベル名に対応するHTML要素の配列。
     * @see https://pleasanter.org/manual/script-get-field
     */
    getField(labelName: string): HTMLElement[] | undefined;

    /**
     * 「一覧画面」のtdタグの要素を取得するメソッドです。一覧画面の特定のセルにアクセスする際に使用します。
     * @param {number} id - レコードID。
     * @param {string} name - 一覧レコード上の表示名。
     * @returns {HTMLElement[] | undefined} - 指定されたIDと名前に対応するHTML要素の配列。
     * @see https://pleasanter.org/manual/script-get-grid-cell
     */
    getGridCell(id: number, name: string): HTMLElement[] | undefined;

    /**
     * 「一覧画面」で、レコードの表示名のデータが何列目にあるかを取得するメソッドです。
     * @param {string} displayName - 表示名。
     * @returns {number | undefined} - 指定された表示名のデータが存在する列のインデックス。
     * @see https://pleasanter.org/manual/script-get-column-index
     */
    getGridColumnIndex(displayName: string): number | undefined;

    /**
     * 「一覧画面」で、指定したレコードIDに対応する行を取得するメソッドです。
     * @param {number} recordId - レコードID。
     * @returns {HTMLElement[] | undefined} - 指定されたレコードIDに対応するHTML要素の配列。
     * @see https://pleasanter.org/manual/script-get-grid-row
     */
    getGridRow(recordId: number): HTMLElement[] | undefined;

    /**
     * 現在のレコードのIDを取得するメソッドです。
     * @returns {number} - 現在のレコードのID。
     * @see https://pleasanter.org/manual/script-id
     */
    id(): number;

    /**
     * ユーザがログインしている場合、そのユーザのIDを取得するメソッドです。
     * @returns {number} - ログインしているユーザのID。
     * @see https://pleasanter.org/manual/script-login-id
     */
    loginId(): number;

    /**
     * 指定したイベントが発生した際に実行する任意の処理を設定するメソッドです。
     * @param {string} eventName - イベント名。
     * @param {string} monitorItem - 監視項目。
     * @param {() => void} func - 実行する処理。
     * @see https://pleasanter.org/manual/script-on
     */
    on(eventName: string, monitorItem: string, func: () => void): void;

    /**
     * レスポンシブスタイルが有効化されているかどうかを判断するメソッドです。このメソッドは、レスポンシブスタイルの状態に基づいてスクリプトの実行を制御する際に使用されます。
     * @returns {boolean} レスポンシブスタイルが有効化されているかの真偽値を返します。
     * @see https://pleasanter.org/manual/script-responsive
     */
    responsive(): boolean;

    /**
     * 「一覧画面」でチェックを入れた対象「レコード」のIDの配列を取得するメソッドです。
     * @returns {number[]} 選択されたレコードのIDの配列を返します。
     * @see https://pleasanter.org/manual/script-selected-ids
     */
    selectedIds(): number[];

    /**
     * 画面上の値の変更と$p.dataへの格納を同時に行うメソッドです。
     * @param {string} controlId - 制御対象の要素のID。
     * @param {string} val - 設定する値。
     * @see https://pleasanter.org/manual/script-set
     */
    set(controlId: string, val: string): void;

    /**
     * 画面下にメッセージを表示するメソッドです。
     * @param {string} id - メッセージを表示する要素のID。
     * @param {SetMessageArgumentType} alertType - 表示するアラートの設定。
     * @see https://pleasanter.org/manual/script-set-message
     * @example　$p.setMessage('#Message', JSON.stringify({
     *     Css: 'alert-success',
     *     Text: '処理が正常に終了しました。'
     *     }));
     */
    setMessage(id: string, alertType: string): void;

    /**
     * 指定されたサイト名に対応するサイトのIDを取得するメソッドです。
     * @param {string} sitename - サイト名。
     * @returns {number} 指定されたサイト名に対応するIDを返します。
     * @see https://pleasanter.org/manual/script-site-id
     */
    siteId(sitename: string): number;

    /**
     * AjaxのPOSTリクエストによるスクリプトを配置したフォルダまたはテーブルの種類を取得するメソッドです。
     * @returns {'Sites' | 'Results' | 'Issues' | 'Wikis'} スクリプトが配置されているフォルダまたはテーブルの種類を返します。
     * @see https://pleasanter.org/manual/script-table-name
     */
    tableName(): "Sites" | "Results" | "Issues" | "Wikis";

    /**
     * ログインしているユーザのユーザIDを取得するメソッドです。
     * @returns {number} ログインしているユーザのIDを返します。
     * @see https://pleasanter.org/manual/script-user-id
     */
    userId(): number;

    /**
     * ログインしているユーザの名前を取得するメソッドです。
     * @returns {string} ログインしているユーザの名前を返します。
     * @see https://pleasanter.org/manual/script-user-name
     */
    userName(): string;

    /**
     * @abstract イベントに関連するAPIのインターフェースです。
     */
    events: PleasanterApiEventInterface;
}

// ---

// #region SetMessage関係

/**
 * イベントに関連するAPIのインターフェースです。
 * @abstract SetMessageArgument 関数の引数型
 * @argument {Css} メッセージ表示のためのアラートタイプを定義する列挙型です。
 */
interface SetMessageArgumentType {
    Css: /** 正常を表す、緑色のメッセージ欄 */
        | "alert-success"
        /** 注意を表す、黄色のメッセージ欄 */
        | "alert-warning"
        /** 異常を表す、赤色のメッセージ欄 */
        | "alert-error";
    Text: string;
}

// #endregion

// #region Hashの定義関係

// Hash の元となる方定義

interface ClassHash {
    ClassA?: string | undefined;
    ClassB?: string | undefined;
    ClassC?: string | undefined;
    ClassD?: string | undefined;
    ClassE?: string | undefined;
    ClassF?: string | undefined;
    ClassG?: string | undefined;
    ClassH?: string | undefined;
    ClassI?: string | undefined;
    ClassJ?: string | undefined;
    ClassK?: string | undefined;
    ClassL?: string | undefined;
    ClassM?: string | undefined;
    ClassN?: string | undefined;
    ClassO?: string | undefined;
    ClassP?: string | undefined;
    ClassQ?: string | undefined;
    ClassR?: string | undefined;
    ClassS?: string | undefined;
    ClassT?: string | undefined;
    ClassU?: string | undefined;
    ClassV?: string | undefined;
    ClassW?: string | undefined;
    ClassX?: string | undefined;
    ClassY?: string | undefined;
    ClassZ?: string | undefined;
}

interface NumHash {
    NumA?: number | undefined;
    NumB?: number | undefined;
    NumC?: number | undefined;
    NumD?: number | undefined;
    NumE?: number | undefined;
    NumF?: number | undefined;
    NumG?: number | undefined;
    NumH?: number | undefined;
    NumI?: number | undefined;
    NumJ?: number | undefined;
    NumK?: number | undefined;
    NumL?: number | undefined;
    NumM?: number | undefined;
    NumN?: number | undefined;
    NumO?: number | undefined;
    NumP?: number | undefined;
    NumQ?: number | undefined;
    NumR?: number | undefined;
    NumS?: number | undefined;
    NumT?: number | undefined;
    NumU?: number | undefined;
    NumV?: number | undefined;
    NumW?: number | undefined;
    NumX?: number | undefined;
    NumY?: number | undefined;
    NumZ?: number | undefined;
}

interface DateHash {
    DateA?: string | undefined;
    DateB?: string | undefined;
    DateC?: string | undefined;
    DateD?: string | undefined;
    DateE?: string | undefined;
    DateF?: string | undefined;
    DateG?: string | undefined;
    DateH?: string | undefined;
    DateI?: string | undefined;
    DateJ?: string | undefined;
    DateK?: string | undefined;
    DateL?: string | undefined;
    DateM?: string | undefined;
    DateN?: string | undefined;
    DateO?: string | undefined;
    DateP?: string | undefined;
    DateQ?: string | undefined;
    DateR?: string | undefined;
    DateS?: string | undefined;
    DateT?: string | undefined;
    DateU?: string | undefined;
    DateV?: string | undefined;
    DateW?: string | undefined;
    DateX?: string | undefined;
    DateY?: string | undefined;
    DateZ?: string | undefined;
}

interface DescriptionHash {
    DescriptionA?: string | undefined;
    DescriptionB?: string | undefined;
    DescriptionC?: string | undefined;
    DescriptionD?: string | undefined;
    DescriptionE?: string | undefined;
    DescriptionF?: string | undefined;
    DescriptionG?: string | undefined;
    DescriptionH?: string | undefined;
    DescriptionI?: string | undefined;
    DescriptionJ?: string | undefined;
    DescriptionK?: string | undefined;
    DescriptionL?: string | undefined;
    DescriptionM?: string | undefined;
    DescriptionN?: string | undefined;
    DescriptionO?: string | undefined;
    DescriptionP?: string | undefined;
    DescriptionQ?: string | undefined;
    DescriptionR?: string | undefined;
    DescriptionS?: string | undefined;
    DescriptionT?: string | undefined;
    DescriptionU?: string | undefined;
    DescriptionV?: string | undefined;
    DescriptionW?: string | undefined;
    DescriptionX?: string | undefined;
    DescriptionY?: string | undefined;
    DescriptionZ?: string | undefined;
}

interface CheckHash {
    CheckA?: boolean | undefined;
    CheckB?: boolean | undefined;
    CheckC?: boolean | undefined;
    CheckD?: boolean | undefined;
    CheckE?: boolean | undefined;
    CheckF?: boolean | undefined;
    CheckG?: boolean | undefined;
    CheckH?: boolean | undefined;
    CheckI?: boolean | undefined;
    CheckJ?: boolean | undefined;
    CheckK?: boolean | undefined;
    CheckL?: boolean | undefined;
    CheckM?: boolean | undefined;
    CheckN?: boolean | undefined;
    CheckO?: boolean | undefined;
    CheckP?: boolean | undefined;
    CheckQ?: boolean | undefined;
    CheckR?: boolean | undefined;
    CheckS?: boolean | undefined;
    CheckT?: boolean | undefined;
    CheckU?: boolean | undefined;
    CheckV?: boolean | undefined;
    CheckW?: boolean | undefined;
    CheckX?: boolean | undefined;
    CheckY?: boolean | undefined;
    CheckZ?: boolean | undefined;
}

interface AttachmentsHash {
    AttachmentsA?: AttachmentsData | undefined;
    AttachmentsB?: AttachmentsData | undefined;
    AttachmentsC?: AttachmentsData | undefined;
    AttachmentsD?: AttachmentsData | undefined;
    AttachmentsE?: AttachmentsData | undefined;
    AttachmentsF?: AttachmentsData | undefined;
    AttachmentsG?: AttachmentsData | undefined;
    AttachmentsH?: AttachmentsData | undefined;
    AttachmentsI?: AttachmentsData | undefined;
    AttachmentsJ?: AttachmentsData | undefined;
    AttachmentsK?: AttachmentsData | undefined;
    AttachmentsL?: AttachmentsData | undefined;
    AttachmentsM?: AttachmentsData | undefined;
    AttachmentsN?: AttachmentsData | undefined;
    AttachmentsO?: AttachmentsData | undefined;
    AttachmentsP?: AttachmentsData | undefined;
    AttachmentsQ?: AttachmentsData | undefined;
    AttachmentsR?: AttachmentsData | undefined;
    AttachmentsS?: AttachmentsData | undefined;
    AttachmentsT?: AttachmentsData | undefined;
    AttachmentsU?: AttachmentsData | undefined;
    AttachmentsV?: AttachmentsData | undefined;
    AttachmentsW?: AttachmentsData | undefined;
    AttachmentsX?: AttachmentsData | undefined;
    AttachmentsY?: AttachmentsData | undefined;
    AttachmentsZ?: AttachmentsData | undefined;
}
interface AttachmentsData {
    Guid: string | undefined;
    Name: string | undefined;
    Size: number | undefined;
    HashCode: string | undefined;
}

// #endregion

/**
 * @abstract  SendMailの引数データ型
 */
interface SendMailRequest {
    To: string;
    Cc?: string | undefined;
    Bcc?: string | undefined;
    Title: string;
    Body: string;
}

interface RecordDataItems {
    SiteId?: number | undefined;
    IssueId?: number | undefined;
    ResultId?: number | undefined;
    Body?: string | undefined;
    StartTime?: string | undefined;
    CompletionTime?: string | undefined;
    WorkValue?: string | undefined;
    ProgressRate?: number | undefined;
    RemainingWorkValue?: number | undefined;
    UpdateTime?: string | undefined;
    Ver?: number | undefined;
    Title?: string | undefined;
    Status?: string | undefined;
    Manager?: number | undefined;
    Owner?: number | undefined;
    Comments?: string | undefined;
    Creator?: number | undefined;
    Updator?: number | undefined;
    CreatedTime?: string | undefined;
    ItemTitle?: string | undefined;

    ClassHash?: ClassHash | undefined;
    NumHash?: NumHash | undefined;
    DateHash?: DateHash | undefined;
    DescriptionHash?: DescriptionHash | undefined;
    CheckHash?: CheckHash | undefined;
}

// #region APIの呼び出しに失敗した時のデータ型

interface OperationResponseJSON {
    Id: number;
    Message: string;
    StatusCode: number;
}

// memo:
// 調べた結果、ここだけスネークケースとなっている。
interface FailDataType {
    status: number;
    statusText: string;

    responseJSON: OperationResponseJSON;
}

// #endregion

/**
 * @abstract リクエスト要求時のインターフェース
 */
interface AbstractRequestInterface<ResponseHandlerArgumentsType> {
    id: number;
    done: (data: ResponseHandlerArgumentsType) => void;
    fail?: (data: FailDataType) => void;
    always?: (data: FailDataType) => void;
}

/**
 * @abstract リクエスト処理において、引数にデータをとる場合
 */
interface AbstractRequestInterfaceWithData<
    ResponseHandlerArgumentsType,
    DataType = void,
> extends AbstractRequestInterface<ResponseHandlerArgumentsType> {
    data?: DataType | undefined;
}

// #region GetRequest関係の定義

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GetRequest extends AbstractRequestInterfaceWithData<GetResponseData, DataOfGetRequest> {}

interface GetResponseData {
    StatusCode: number;
    Response: {
        Offset: number;
        PageSize: number;
        TotalCount: number;
        Data: RecordDataItems[];
    };
}

interface DataOfGetRequest {
    View: ViewItems;
    TableType?: "Normal" | "History" | "NormalAndHistory";
}

// #endregion

// #region Item系
// #region CreateRequest関係の定義

/**
 * @abstract apiCreate関数で使用する関数引数定義
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateRequestArgument extends
    AbstractRequestInterfaceWithData<
        OperationResponseJSON,
        RecordDataItems
    >
{}

// #endregion

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UpdateRequest extends AbstractRequestInterfaceWithData<OperationResponseJSON, RecordDataItems> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DeleteRequestArgument extends AbstractRequestInterface<OperationResponseJSON> {}

// #endregion

// #region Site系

// #region GetSite系

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GetSiteRequest extends AbstractRequestInterface<SiteResponseData> {}

interface SiteResponseData {
    StatusCode: number;
    Response: SiteResponse | undefined;
}

interface SiteResponse {
    Data: SiteData | undefined;
}

/**
 * @abstract Site関係のスクリプトで使用するデータ形式
 * 公式に以下注釈があるとおり、最新のデータ形式でない可能性があります。
 * [注釈]
 * ※サイト情報データは、サイトパッケージをエクスポートした際の"Site”パラメータと同等の値を設定する必要があります。
 * 「$p.apiGetSite」でサイト情報を取得したのち、
 * 任意の項目を変更してリクエストデータを作成するような処理を想定します。
 */
interface SiteData {
    TenantId?: number;
    SiteId?: number;
    UpdatedTime?: string | undefined;
    Ver?: number;
    Title?: string | undefined;
    Body?: string | undefined;
    SiteName?: string | undefined;
    SiteGroupName?: string | undefined;
    GridGuide?: string | undefined;
    EditorGuide?: string | undefined;
    CalendarGuide?: string | undefined;
    CrosstabGuide?: string | undefined;
    GanttGuide?: string | undefined;
    BurnDownGuide?: string | undefined;
    TimeSeriesGuide?: string | undefined;
    KambanGuide?: string | undefined;
    ImageLibGuide?: string | undefined;
    ReferenceType?: string | undefined;
    ParentId?: number | undefined;
    InheritPermission?: number | undefined;
    Permissions?: any[] | undefined;
    SiteSettings?: SiteSettings | undefined;
    Publish?: boolean | undefined;
    DisableCrossSearch?: boolean | undefined;
    LockedTime?: string | undefined;
    LockedUser?: number | undefined;
    ApiCountDate?: string | undefined;
    ApiCount?: number | undefined;
    Comments?: string | undefined;
    Creator?: number | undefined;
    Updator?: number | undefined;
    CreatedTime?: string | undefined;
    ApiVersion?: number | undefined;
    ClassHash?: ClassHash | undefined;
    NumHash?: NumHash | undefined;
    DateHash?: DateHash | undefined;
    DescriptionHash?: DescriptionHash | undefined;
    CheckHash?: CheckHash | undefined;
    AttachmentsHash?: AttachmentsHash | undefined;
}

interface SiteSettings {
    Version: number | undefined;
    ReferenceType: string | undefined;
    EditorColumnHash: EditorColumnHash | undefined;
    Columns: Column[] | undefined;
    Scripts: Script[] | undefined;
    NoDisplayIfReadOnly: boolean | undefined;
}

interface EditorColumnHash {
    General: string[] | undefined;
}

interface Column {
    ColumnName: string | undefined;
    Description?: string | undefined;
    ChoicesText?: string | undefined;
    EditorFormat?: string | undefined;
    LabelText?: string | undefined;
    NoWrap?: boolean | undefined;
}

interface Script {
    Title: string | undefined;
    All: boolean | undefined;
    Body: string | undefined;
    Id: number | undefined;
}

// #endregion

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DeleteSiteRequest extends AbstractRequestInterface<void> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UpdateSiteRequest extends AbstractRequestInterfaceWithData<OperationResponseJSON, SiteData> {}

// #endregion

// #region Users系

// #region UserGet系

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UsersGetRequest extends AbstractRequestInterface<GetResponseUserData> {}

interface UserResponseData {
    TenantId?: number | undefined;
    UserId?: number | undefined;
    Ver?: number | undefined;
    LoginId?: string | undefined;
    GlobalId?: string | undefined;
    Name?: string | undefined;
    UserCode?: string | undefined;
    Birthday?: string | undefined;
    Gender?: string | undefined;
    Language?: string | undefined;
    TimeZone?: string | undefined;
    DeptCode?: string | undefined;
    DeptId?: number | undefined;
    Theme?: string | undefined;
    Body?: string | undefined;
    LastLoginTime?: string | undefined;
    PasswordExpirationTime?: string | undefined;
    PasswordChangeTime?: string | undefined;
    NumberOfLogins?: number | undefined;
    NumberOfDenial?: number | undefined;
    TenantManager?: boolean | undefined;
    Disabled?: boolean | undefined;
    Lockout?: boolean | undefined;
    LockoutCounter?: number | undefined;
    UserSettings?: string | undefined;
    SecondaryAuthenticationCode?: string | undefined;
    SecondaryAuthenticationCodeExpirationTime?: string | undefined;
    LdapSearchRoot?: string | undefined;
    SynchronizedTime?: string | undefined;
    Comments?: string | undefined;
    Creator?: number | undefined;
    Updator?: number | undefined;
    CreatedTime?: string | undefined;
    UpdatedTime?: string | undefined;
    ApiVersion?: number | undefined;

    ClassHash?: ClassHash | undefined;
    NumHash?: NumHash | undefined;
    DateHash?: DateHash | undefined;
    DescriptionHash?: DescriptionHash | undefined;
    CheckHash?: CheckHash | undefined;
}

interface GetResponseUserData {
    StatusCode: number;
    Response: {
        Offset: number;
        PageSize: number;
        TotalCount: number;
        Data: UserResponseData[];
    };
}

// #endregion

// #region UsersUpdate系

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UsersUpdateRequest extends AbstractRequestInterfaceWithData<OperationResponseJSON, UserResponseData> {}

// #endregion

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UsersDeleteRequest extends AbstractRequestInterface<OperationResponseJSON> {}

// #endregion

// #region Groups系

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GetGroupsRequest extends AbstractRequestInterfaceWithData<GroupsResponse, ViewItems> {}

interface GroupsResponse {
    StatusCode: number;
    Response: GroupsResponseData;
}

interface GroupsResponseData {
    Offset: number;
    PageSize: number;
    TotalCount: number;
    Data: GroupsData[];
}

interface GroupsData {
    TenantId: number | undefined;
    GroupId: number | undefined;
    Ver: number | undefined;
    GroupName: string | undefined;
    Body: string | undefined;
    Disabled: boolean | undefined;
    Comments: string | undefined;
    Creator: number | undefined;
    Updator: number | undefined;
    CreatedTime: string | undefined;
    UpdatedTime: string | undefined;
    GroupMembers: string[] | undefined;
    ApiVersion: number | undefined;
    ClassHash: ClassHash | undefined;
    NumHash: NumHash | undefined;
    DateHash: DateHash | undefined;
    DescriptionHash: DescriptionHash | undefined;
    CheckHash: CheckHash | undefined;
    AttachmentsHash: AttachmentsHash | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DeleteGroupsRequest extends AbstractRequestInterface<void> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UpdateGroupsRequest extends AbstractRequestInterfaceWithData<GroupsData> {}

/**
 * @abstract apiGroupsCreate関数で使用する関数引数定義
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateGroupsArgument extends AbstractRequestInterfaceWithData<OperationResponseJSON, GroupsData> {}

// #endregion

interface ViewItems {
    Incomplete: boolean | undefined;
    Own: boolean | undefined;
    NearCompletionTime: boolean | undefined;
    Delay: boolean | undefined;
    Overdue: boolean | undefined;
    Search: string | undefined;

    ColumnFilterHash: { [key: string]: string } | undefined;
    ColumnSorterHash: { [key: string]: string } | undefined;
}

// ---
// global interface
declare const $p: PleasanterApiInterface;
