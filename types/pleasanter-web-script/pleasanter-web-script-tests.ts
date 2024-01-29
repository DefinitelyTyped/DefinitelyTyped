// ---
// 関数名: actionの使用例
{
    const api = $p;
    const currentAction = api.action();

    switch (currentAction) {
        case "new":
            console.log("新規作成の処理");
            break;
        case "edit":
            console.log("編集の処理");
            break;
        case "index":
            console.log("インデックス画面の処理");
            break;
        case "calendar":
            console.log("カレンダー表示の処理");
            break;
        case "crosstab":
            console.log("クロス集計の処理");
            break;
        case "gantt":
            console.log("ガントチャートの処理");
            break;
        case "burndown":
            console.log("バーンダウンチャートの処理");
            break;
        case "timeseries":
            console.log("時系列チャートの処理");
            break;
        case "kanban":
            console.log("カンバンの処理");
            break;
        case "imagelib":
            console.log("画像ライブラリの処理");
            break;
        case "trashbox":
            console.log("ゴミ箱の処理");
            break;
        default:
            console.log("未知のアクション: " + currentAction);
    }
}

// ---
// 関数名: apiGetの使用例
{
    // レコード取得リクエストの作成
    const getRequest: GetRequest = {
        id: 123, // 例として、取得したいレコードのIDを指定します。
        data: {
            View: {
                Incomplete: true, // 状態が未完了のレコードをフィルタリングします。
                Own: false,
                NearCompletionTime: false,
                Delay: false,
                Overdue: false,
                Search: "",
                ColumnFilterHash: undefined,
                ColumnSorterHash: undefined,
            },
            TableType: "Normal", // 通常のテーブルタイプを指定
        },
        done: (data: GetResponseData) => {
            // レスポンスデータの処理
            console.log(data.Response.Data); // 取得したレコードデータをコンソールに出力
        },
        fail: (data: FailDataType) => {
            // エラー処理
            console.error(data.statusText); // エラーメッセージをコンソールに出力
        },
        always: (data: FailDataType) => {
            // 常に実行する処理
            console.log("リクエスト完了");
        },
    };

    // リクエストの実行
    $p.apiGet(getRequest);
}

// ---
// 関数名: apiCreateの使用例
{
    // 新しいレコードを作成するためのリクエストデータを定義
    const createRequest: CreateRequestArgument = {
        id: 0, // 新規作成のため、IDは0を指定
        data: {
            SiteId: 1, // サイトIDを指定
            Title: "新しいレコードのタイトル", // レコードのタイトル
            Body: "レコードの内容", // レコードの本文
            // その他の必要なフィールドを設定
        },
        done: (data: OperationResponseJSON) => {
            // レスポンスデータの処理
            console.log(`レコードが作成されました。ID: ${data.Id}`); // 作成されたレコードのIDを出力
        },
        fail: (data: FailDataType) => {
            // エラー処理
            console.error(`エラーが発生しました: ${data.statusText}`); // エラーメッセージを出力
        },
        always: (data: FailDataType) => {
            // 常に実行する処理
            console.log("リクエスト完了");
        },
    };

    // リクエストの実行
    $p.apiCreate(createRequest);
}

// ---
// 関数名: apiDeleteの使用例
{
    // レコードを削除するためのリクエストデータを定義
    const deleteRequest: DeleteRequestArgument = {
        id: 123, // 削除するレコードのID
        done: (data: OperationResponseJSON) => {
            // レスポンスデータの処理
            console.log(`レコードが削除されました。ID: ${data.Id}`); // 削除されたレコードのIDを出力
        },
        fail: (data: FailDataType) => {
            // エラー処理
            console.error(`エラーが発生しました: ${data.statusText}`); // エラーメッセージを出力
        },
        always: (data: FailDataType) => {
            // 常に実行する処理
            console.log("リクエスト完了");
        },
    };

    // リクエストの実行
    $p.apiDelete(deleteRequest);
}

// ---
// 関数名: apiUpdate
{
    // 使用例
    // レコードの更新リクエストを行う例
    $p.apiUpdate({
        id: 123, // 対象レコードのID
        data: {
            SiteId: 1,
            IssueId: 2,
            ResultId: 3,
            Body: "更新された内容",
            StartTime: "2024-01-27T09:00:00",
            CompletionTime: "2024-01-27T17:00:00",
            WorkValue: "10",
            ProgressRate: 80,
            RemainingWorkValue: 2,
            UpdateTime: "2024-01-27T18:00:00",
            Ver: 2,
            Title: "更新されたタイトル",
            Status: "更新状態",
            Manager: 4,
            Owner: 5,
            Comments: "更新コメント",
            Creator: 6,
            Updator: 7,
            CreatedTime: "2024-01-27T08:00:00",
            ItemTitle: "アイテムタイトル更新",
            // 他のオプショナルなフィールドもここに追加可能
        },
        done: (data) => {
            console.log("更新成功", data);
        },
        fail: (data) => {
            console.error("更新失敗", data);
        },
        always: (data) => {
            console.log("常に実行される処理", data);
        },
    });
}

// ---
// 関数名: apiUsersGet
{
    // 使用例
    // ユーザー情報の取得リクエストを行う例
    $p.apiUsersGet({
        id: 123, // ユーザー取得のためのサイトID
        done: (data) => {
            console.log("取得成功", data);
        },
        fail: (data) => {
            console.error("取得失敗", data);
        },
        always: (data) => {
            console.log("常に実行される処理", data);
        },
    });
}

{
    // ---
    // apiUsersUpdate関数の使用例

    // apiUsersUpdate関数は、AjaxのPOSTリクエストによるユーザの更新を可能にするメソッドです。
    // この関数にはUsersUpdateRequestオブジェクトを引数として渡します。
    // UsersUpdateRequestオブジェクトには、更新するユーザの情報が含まれます。

    // 例: 特定のユーザ（UserId: 123）の名前と部署コードを更新する
    let updateRequest: UsersUpdateRequest = {
        id: 123,
        data: {
            Name: "新しい名前",
            DeptCode: "新しい部署コード",
        },
        done: (data) => {
            console.log("ユーザ更新成功:", data);
        },
        fail: (error) => {
            console.error("ユーザ更新失敗:", error);
        },
    };

    $p.apiUsersUpdate(updateRequest);
}

{
    // ---
    // apiUsersDelete関数の使用例

    // apiUsersDelete関数は、AjaxのPOSTリクエストによるユーザの削除を可能にするメソッドです。
    // この関数にはUsersDeleteRequestオブジェクトを引数として渡します。
    // UsersDeleteRequestオブジェクトには、削除するユーザのIDが含まれます。

    // 例: 特定のユーザ（UserId: 456）を削除する
    let deleteRequest: UsersDeleteRequest = {
        id: 456,
        done: (data) => {
            console.log("ユーザ削除成功:", data);
        },
        fail: (error) => {
            console.error("ユーザ削除失敗:", error);
        },
    };

    $p.apiUsersDelete(deleteRequest);

    // この関数は、特定のユーザを削除する際に使用されます。
    // doneコールバックは、リクエストが成功した場合に実行され、
    // failコールバックは、リクエストが失敗した場合に実行されます。
}

{
    // ---
    // apiGetSite関数の使用例

    // apiGetSite関数は、AjaxのPOSTリクエストによるサイト情報の取得を可能にするメソッドです。
    // この関数にはGetSiteRequestオブジェクトを引数として渡します。
    // GetSiteRequestオブジェクトには、取得したいサイト情報のIDが含まれます。

    // 例: 特定のサイト（SiteId: 123）の情報を取得する
    let getSiteRequest: GetSiteRequest = {
        id: 123,
        done: (data) => {
            console.log("サイト情報取得成功:", data);
        },
        fail: (error) => {
            console.error("サイト情報取得失敗:", error);
        },
    };

    $p.apiGetSite(getSiteRequest);

    // この関数は、特定のサイトの情報を取得する際に使用されます。
    // doneコールバックは、リクエストが成功した場合に実行され、
    // failコールバックは、リクエストが失敗した場合に実行されます。
}

{
    // ---
    // apiDeleteSite関数の使用例

    // apiDeleteSite関数は、AjaxのPOSTリクエストを用いて特定のサイトを削除するためのメソッドです。
    // この関数は引数としてDeleteSiteRequestオブジェクトを受け取ります。
    // DeleteSiteRequestオブジェクトには、削除したいサイトのIDが含まれます。

    // 例: 特定のサイト（SiteId: 123）を削除する
    let deleteSiteRequest: DeleteSiteRequest = {
        id: 123,
        done: (data) => {
            console.log("サイト削除成功:", data);
        },
        fail: (error) => {
            console.error("サイト削除失敗:", error);
        },
    };

    $p.apiDeleteSite(deleteSiteRequest);

    // この関数は、サイトの削除を行う際に使用されます。
    // doneコールバックは、リクエストが成功した場合に実行され、
    // failコールバックは、リクエストが失敗した場合に実行されます。
}

{
    // ---
    // apiUpdateSite関数の使用例

    // apiUpdateSite関数は、AjaxのPOSTリクエストを用いて特定のサイト情報を更新するためのメソッドです。
    // この関数は引数としてUpdateSiteRequestオブジェクトを受け取ります。
    // UpdateSiteRequestオブジェクトには、更新したいサイトのデータが含まれます。

    // 例: 特定のサイト（SiteId: 123）のタイトルを更新する
    let updateSiteRequest: UpdateSiteRequest = {
        id: 123,
        data: {
            Title: "新しいサイトタイトル",
        },
        done: (data) => {
            console.log("サイト更新成功:", data);
        },
        fail: (error) => {
            console.error("サイト更新失敗:", error);
        },
    };

    $p.apiUpdateSite(updateSiteRequest);

    // この関数は、サイトの情報更新を行う際に使用されます。
    // doneコールバックは、リクエストが成功した場合に実行され、
    // failコールバックは、リクエストが失敗した場合に実行されます。
    // 更新するデータはdataプロパティに指定します。この例ではタイトルのみ更新していますが、
    // 必要に応じて他のサイトデータも更新することが可能です。
}

{
    // ---
    // apiCreateSite関数の使用例

    // apiCreateSite関数は、AjaxのPOSTリクエストを用いて新しいサイトを作成するためのメソッドです。
    // この関数は引数としてUpdateSiteRequestオブジェクトを受け取ります。
    // UpdateSiteRequestオブジェクトには、作成するサイトのデータが含まれます。

    // 例: 新しいサイトを作成する
    let createSiteRequest: UpdateSiteRequest = {
        id: 123,
        data: {
            Title: "新しいサイトのタイトル",
            Body: "新しいサイトの説明",
            SiteName: "NewSite",
            // 他にも必要に応じて追加のプロパティを設定
        },
        done: (data) => {
            console.log("サイト作成成功:", data);
        },
        fail: (error) => {
            console.error("サイト作成失敗:", error);
        },
    };

    $p.apiCreateSite(createSiteRequest);

    // この関数は、新しいサイトの作成を行う際に使用されます。
    // doneコールバックは、リクエストが成功した場合に実行され、
    // failコールバックは、リクエストが失敗した場合に実行されます。
    // 作成するサイトのデータはdataプロパティに指定します。
}

{
    // ---
    // apiSendMail関数の使用例

    // apiSendMail関数は、指定された宛先にメールを送信するためのメソッドです。
    // 第1引数にはサイトIDを指定し、第2引数にはSendMailRequestオブジェクトを指定します。
    // SendMailRequestオブジェクトには、To（宛先）、Cc（カーボンコピー）、Bcc（ブラインドカーボンコピー）、
    // Title（タイトル）、Body（本文）を含むことができます。

    // 例: サイトIDが123の場合、特定のユーザーにメールを送信する
    let siteId = 123;
    let mailRequest = {
        To: "user@example.com",
        Cc: "cc@example.com",
        Bcc: "bcc@example.com",
        Title: "メールのタイトル",
        Body: "メールの本文",
    };

    $p.apiSendMail(siteId, mailRequest);

    // この関数は、Pleasanterのサイト内からメール通知を送信する際に使用されます。
    // To, Cc, Bccは、それぞれのフィールドに複数のメールアドレスをカンマ区切りで指定することができます。
}

{
    // ---
    // apiUrl関数の使用例

    // apiUrl関数は、AjaxのPOSTリクエストを実行する際のURLを取得するメソッドです。
    // 第1引数にはサイトIDを指定し、第2引数にはアクションの種類（'get', 'create', 'update', 'delete'）を指定します。

    // 例: サイトIDが123の場合、各アクションのURLを取得する
    let siteId = 123;
    let getUrl = $p.apiUrl(siteId, "get");
    let createUrl = $p.apiUrl(siteId, "create");
    let updateUrl = $p.apiUrl(siteId, "update");
    let deleteUrl = $p.apiUrl(siteId, "delete");

    // これらのURLは、後続のAjaxリクエストで使用されることが想定されます。
    // 例えば、特定のレコードを取得するためのGETリクエスト、新しいレコードを作成するためのPOSTリクエストなどに使用します。
}

{
    // ---
    // clearMessage関数の使用例

    // clearMessage関数は、画面下に表示されるメッセージを削除するメソッドです。

    // 例: メッセージを削除する
    $p.clearMessage();

    // clearMessage関数は引数を取らず、特定のメッセージやメッセージタイプを指定して削除することはできません。
    // このメソッドは、画面に表示されているすべてのメッセージを削除します。
    // 通常、何らかの処理の完了後や、新たな処理の開始前に使用されることが多いです。
}

{
    // ---
    // controller関数の使用例

    // controller関数は、現在のコントローラーの種類を取得するメソッドです。
    // 取得可能な値は 'tenants', 'depts', 'groups', 'users', 'items' の5種類です。
    // 以下の例では、それぞれのコントローラー種類に基づいた処理を行います。

    // 現在のコントローラーの種類を取得
    const currentController = $p.controller();

    // コントローラーに応じた処理
    switch (currentController) {
        case "tenants":
            console.log("現在のコントローラーは \"tenants\" です。");
            // tenantsに関連する処理を実行
            break;
        case "depts":
            console.log("現在のコントローラーは \"depts\" です。");
            // deptsに関連する処理を実行
            break;
        case "groups":
            console.log("現在のコントローラーは \"groups\" です。");
            // groupsに関連する処理を実行
            break;
        case "users":
            console.log("現在のコントローラーは \"users\" です。");
            // usersに関連する処理を実行
            break;
        case "items":
            console.log("現在のコントローラーは \"items\" です。");
            // itemsに関連する処理を実行
            break;
        default:
            console.log("未知のコントローラーです。");
            // その他の処理
            break;
    }
}

{
    // ---
    // deptId関数の使用例

    // 関数の使用例を示すため、以下のシナリオを考慮します。
    // 1. ログインしているユーザーの組織IDを取得する。
    // 2. 取得した組織IDを利用して、特定の処理を行う。

    // ログインしているユーザーの組織IDを取得する
    const userDeptId = $p.deptId();

    // 取得した組織IDに基づいて特定の処理を行う（例: メッセージ表示）
    if (userDeptId !== null && userDeptId > 0) {
        console.log(`現在のユーザーの組織ID: ${userDeptId}`);
    } else {
        console.log("組織IDが見つかりませんでした。");
    }
}

{
    // 関数名: getColumnName

    // 使用例1: 存在する項目名に対するカラム名の取得
    const itemName1 = "プロジェクト名"; // 項目名
    const columnName1 = $p.getColumnName(itemName1);
    if (columnName1) {
        console.log(`項目名 '${itemName1}' のカラム名: `, columnName1);
    } else {
        console.log(`項目名 '${itemName1}' のカラム名は取得できませんでした。`);
    }

    // 使用例2: 存在しない項目名に対するカラム名の取得
    const nonexistentItem = "存在しない項目"; // 存在しない項目名
    const columnName2 = $p.getColumnName(nonexistentItem);
    if (columnName2) {
        console.log(`項目名 '${nonexistentItem}' のカラム名: `, columnName2);
    } else {
        console.log(
            `項目名 '${nonexistentItem}' のカラム名は取得できませんでした。`,
        );
    }
}

{
    // 関数名: getControl

    // 使用例1: 特定のラベル名に対応するコントロールの取得
    const labelName1 = "プロジェクト名"; // ラベル名を「プロジェクト名」とします
    const controlElements1 = $p.getControl(labelName1);
    if (controlElements1) {
        controlElements1.forEach((control) => {
            console.log(`ラベル名 '${labelName1}' に対応するコントロール: `, control);
        });
    } else {
        console.log(
            `ラベル名 '${labelName1}' に対応するコントロールは存在しません。`,
        );
    }

    // 使用例2: 存在しないラベル名に対するコントロールの取得
    const nonexistentLabel = "存在しないラベル"; // 存在しないラベル名を指定
    const nonexistentControl = $p.getControl(nonexistentLabel);
    if (!nonexistentControl) {
        console.log(
            `ラベル名 '${nonexistentLabel}' に対応するコントロールは存在しません。`,
        );
    }
}

{
    // 関数名: getField

    // 使用例1: 特定のラベル名に対応するフィールドの取得
    const labelName = "ステータス"; // ラベル名を「ステータス」とします
    const fieldElements = $p.getField(labelName);
    if (fieldElements) {
        fieldElements.forEach((field) => {
            console.log(`ラベル名 '${labelName}' に対応するフィールド: `, field);
        });
    } else {
        console.log(`ラベル名 '${labelName}' に対応するフィールドは存在しません。`);
    }

    // 使用例2: 存在しないラベル名に対するフィールドの取得
    const nonexistentLabel = "存在しないラベル"; // 存在しないラベル名を指定
    const nonexistentField = $p.getField(nonexistentLabel);
    if (!nonexistentField) {
        console.log(
            `ラベル名 '${nonexistentLabel}' に対応するフィールドは存在しません。`,
        );
    }
}

{
    // 関数名: getGridCell

    // 使用例1: 特定のレコードIDと表示名に対応するセルの取得
    const recordId = 123; // 例としてレコードIDを123とします
    const displayName = "ステータス"; // 表示名を「ステータス」とします
    const cellElements = $p.getGridCell(recordId, displayName);
    if (cellElements) {
        cellElements.forEach((cell) => {
            console.log(
                `レコードID ${recordId} の '${displayName}' 列のセル内容: ${cell.textContent}`,
            );
        });
    } else {
        console.log(
            `レコードID ${recordId} の '${displayName}' 列に対応するセルは存在しません。`,
        );
    }

    // 使用例2: 複数のレコードIDに対するセルの取得
    const recordIds = [123, 456, 789]; // 複数のレコードID
    const anotherDisplayName = "担当者"; // 別の表示名を指定
    recordIds.forEach((id) => {
        const cells = $p.getGridCell(id, anotherDisplayName);
        if (cells) {
            cells.forEach((cell) => {
                console.log(
                    `レコードID ${id} の '${anotherDisplayName}' 列のセル内容: ${cell.textContent}`,
                );
            });
        } else {
            console.log(
                `レコードID ${id} の '${anotherDisplayName}' 列に対応するセルは存在しません。`,
            );
        }
    });
}

{
    // 関数名: getGridColumnIndex

    // 使用例1: 特定の表示名に対応する列のインデックスを取得
    const displayName = "ステータス"; // 例として表示名を「ステータス」とします
    const columnIndex = $p.getGridColumnIndex(displayName);
    if (typeof columnIndex === "number") {
        console.log(
            `表示名 '${displayName}' は列インデックス ${columnIndex} に対応します。`,
        );
    } else {
        console.log(`表示名 '${displayName}' に対応する列は存在しません。`);
    }

    // 使用例2: 列インデックスに基づいて特定の処理を行う
    const anotherDisplayName = "担当者"; // 別の表示名を指定
    const anotherColumnIndex = $p.getGridColumnIndex(anotherDisplayName);
    if (typeof anotherColumnIndex === "number") {
        // 列インデックスに基づいて何らかの処理を行う
        console.log(
            `列インデックス ${anotherColumnIndex} に何らかの処理を行います。`,
        );
    } else {
        console.log(`表示名 '${anotherDisplayName}' に対応する列は存在しません。`);
    }
}

{
    // 関数名: getGridRow

    // 使用例1: 特定のレコードIDに対応する行を取得
    const recordId = 123; // 例としてレコードIDを123とします
    const gridRowElements = $p.getGridRow(recordId);
    if (gridRowElements) {
        console.log(`レコードID ${recordId} に対応する行の要素:`, gridRowElements);
    } else {
        console.log(`レコードID ${recordId} に対応する行は存在しません。`);
    }

    // 使用例2: 取得した行要素に基づいて何らかの処理を行う
    const anotherRecordId = 456; // 別のレコードIDを指定
    const anotherGridRowElements = $p.getGridRow(anotherRecordId);
    if (anotherGridRowElements) {
        anotherGridRowElements.forEach((element) => {
            // 行の要素に対して何らかの処理を行う
            console.log("処理中の行要素:", element);
        });
    } else {
        console.log(`レコードID ${anotherRecordId} に対応する行は存在しません。`);
    }

    // `getGridRow`関数は、指定したレコードIDに対応する「一覧画面」の行要素を取得するために使用されます。
    // 引数としてレコードIDを受け取り、そのIDに対応する行が存在する場合はその行のHTML要素の配列を返します。
    // 返される配列はHTMLElementの配列で、行を構成する各セルの要素が含まれます。
    // この関数を使用することで、特定のレコードに対するカスタムな表示や操作を行うことが可能になります。
}

{
    // 関数名: id

    // 使用例1: 現在のレコードのIDを取得
    const currentRecordId = $p.id();
    console.log(`現在のレコードのIDは ${currentRecordId} です。`);

    // 使用例2: レコードIDに基づいて条件分岐を行う
    if ($p.id() === 100) {
        console.log("レコードIDが100のデータを処理中です。");
    } else {
        console.log("レコードIDが100以外のデータを処理中です。");
    }
}

{
    // 関数名: loginId

    // 使用例1: 現在ログインしているユーザーのIDを取得
    const currentLoginId = $p.loginId();
    console.log(`現在ログインしているユーザーのIDは ${currentLoginId} です。`);

    // 使用例2: ログインIDを条件に何らかの処理を実行
    if ($p.loginId() === 1) {
        console.log("管理者としてログインしています。");
    } else {
        console.log("一般ユーザーとしてログインしています。");
    }
}

{
    // 関数名: on

    // 使用例1: フィールド値の変更を監視
    $p.on("change", "FieldName", () => {
        console.log("FieldNameの値が変更されました。");
    });

    // 使用例2: ボタンクリックを監視
    $p.on("click", "ButtonId", () => {
        console.log("ButtonIdがクリックされました。");
    });

    // 使用例3: フォームのサブミットを監視
    $p.on("submit", "FormId", () => {
        console.log("FormIdがサブミットされました。");
    });
}

{
    // 関数名: responsive

    // 使用例1: レスポンシブスタイルが有効かどうかをチェックする
    const isResponsiveEnabled = $p.responsive();
    console.log(`レスポンシブスタイルが有効: ${isResponsiveEnabled}`);

    // 使用例2: レスポンシブスタイルに基づいて異なる処理を行う
    const handleResponsiveLayout = () => {
        if ($p.responsive()) {
            console.log(
                "レスポンシブスタイルが有効です。モバイル用のレイアウトを適用します。",
            );
            // モバイル用のレイアウトや動作をここに記述
        } else {
            console.log(
                "レスポンシブスタイルが無効です。デスクトップ用のレイアウトを適用します。",
            );
            // デスクトップ用のレイアウトや動作をここに記述
        }
    };
    handleResponsiveLayout();

    // `responsive`関数はPleasanter APIを通じて提供される機能で、
    // 現在の画面レイアウトがレスポンシブスタイル（モバイル対応など）であるかどうかを判断します。
    // この関数は、レスポンシブスタイルが有効である場合に真（true）、無効である場合に偽（false）を返します。
    // 上記の例では、レスポンシブスタイルの状態に基づいて、異なるレイアウトや動作を適用する方法を示しています。
}

{
    // 関数名: selectedIds

    // 使用例1: 一覧画面で選択されたレコードのIDを取得する
    const selectedRecordIds = $p.selectedIds();
    console.log(selectedRecordIds);

    // 使用例2: 選択されたレコードのIDを使用して特定の処理を行う
    const processSelectedRecords = () => {
        const selectedIds = $p.selectedIds();
        selectedIds.forEach((id) => {
            // ここで各IDに対しての処理を行う
            console.log(`処理するレコードID: ${id}`);
        });
    };
    processSelectedRecords();

    // `selectedIds`関数はPleasanter APIを通じて提供される機能で、
    // 一覧画面でチェックを入れた対象「レコード」のIDの配列を取得する際に使用されます。
    // この関数は、ユーザーが画面上で選択したレコードのIDを配列として返します。
    // 上記の例では、選択されたレコードのIDを取得し、そのIDを使って特定の処理を行う方法を示しています。
}

{
    // 関数名: set

    // 使用例1: テキストボックスへの値の設定
    $p.set("ControlIdForTextbox", "設定するテキスト");

    // 使用例2: ドロップダウンリストへの値の設定
    $p.set("ControlIdForDropdown", "選択する値");

    // 使用例3: チェックボックスの状態の設定（チェックを入れる）
    $p.set("ControlIdForCheckbox", "true");

    // 使用例4: チェックボックスの状態の設定（チェックを外す）
    $p.set("ControlIdForCheckbox", "false");

    // 使用例5: 日付フィールドへの値の設定
    $p.set("ControlIdForDateField", "2023-01-01");
}

{
    // 関数名: setMessage

    // 使用例 - 成功メッセージ
    $p.setMessage(
        "#Message",
        JSON.stringify({
            Css: "alert-success",
            Text: "処理が正常に終了しました。",
        }),
    );

    // 使用例 - 警告メッセージ
    $p.setMessage(
        "#Message",
        JSON.stringify({
            Css: "alert-warning",
            Text: "注意が必要です。",
        }),
    );

    // 使用例 - エラーメッセージ
    $p.setMessage(
        "#Message",
        JSON.stringify({
            Css: "alert-error",
            Text: "エラーが発生しました。",
        }),
    );

    // setMessage関数は、画面下にメッセージを表示するために使用されます。
    // 第一引数はメッセージを表示する要素のID、第二引数は表示するアラートの設定（JSON文字列形式）です。
    // この関数は、正常処理（緑色）、警告（黄色）、エラー（赤色）の3つのアラートタイプに対応しています。
    // 上記の例では、それぞれのアラートタイプに合わせたメッセージを設定しています。
}

{
    // 関数名: siteId

    // 使用例
    // 特定のサイト名に対応するサイトIDを取得する例
    const siteName = "サンプルサイト";
    const siteId = $p.siteId(siteName);
    console.log(`サイト名 "${siteName}" に対応するサイトID:`, siteId);

    // siteId関数は、指定されたサイト名に対応するサイトIDを取得するために使用されます。
    // 引数としてサイト名（文字列）を受け取り、対応するサイトID（数値）を返します。
    // 上記の例では、"サンプルサイト"という名前のサイトに対応するサイトIDを取得し、
    // そのIDをコンソールに出力しています。
}

{
    // 関数名: tableName

    // 使用例
    // スクリプトが配置されているフォルダまたはテーブルの種類を取得する例
    const tableType = $p.tableName();
    console.log("現在のフォルダまたはテーブルの種類:", tableType);

    // tableName関数は、スクリプトが配置されているフォルダまたはテーブルの種類を返します。
    // 戻り値は 'Sites', 'Results', 'Issues', 'Wikis' のいずれかです。
    // この関数は引数を取らず、直接呼び出すことで現在のフォルダまたはテーブルの種類を返します。
    // 上記の例では、この関数を使用して現在のフォルダまたはテーブルの種類を取得し、コンソールに出力しています。
}

{
    // 関数名: userId

    // 使用例
    // 現在ログインしているユーザーのIDを取得する例
    const currentUserId = $p.userId();
    console.log("現在ログインしているユーザーのID:", currentUserId);
}

{
    // 関数名: userName

    // 使用例
    // 現在ログインしているユーザーの名前を取得する例
    const currentUserName = $p.userName();
    console.log("現在ログインしているユーザーの名前:", currentUserName);
}

// ----
// イベント系

{
    // ---
    // after_send関数の使用例

    // after_send関数は、サーバへデータを送信した後に実行されるメソッドです。
    // この関数は、EventArgumentsオブジェクトを引数に取ります。

    // EventArgumentsオブジェクトには、コントロール情報、非同期処理の有無、送信データ、JSON形式のレスポンス、
    // メソッドのタイプ、戻り値、URLが含まれます。

    // 例: データ送信後にメッセージを表示する
    $p.events.after_send = (arg) => {
        console.log("データ送信後に実行される関数です。");

        // レスポンスデータを確認
        if (arg.json) {
            let response = JSON.parse(arg.json);
            console.log("レスポンス:", response);

            // 成功メッセージを表示
            $p.setMessage(
                "#Message",
                JSON.stringify({
                    Css: "alert-success",
                    Text: "データが正常に送信されました。",
                }),
            );
        }

        // 処理を続行するかどうかを返す（true: 続行、false: 中断）
        return true;
    };

    // この関数は、データ送信後に特定の処理を実行する場合に利用されます。
    // 例えば、送信後にユーザーに通知を表示したり、ログを取るなどの処理を行うことができます。
}

{
    // ---
    // after_set関数の使用例

    // after_set関数は、サーバへデータを送信後、画面内容を更新した後に実行されるメソッドです。
    // この関数は、EventArgumentsオブジェクトを引数に取ります。

    // EventArgumentsオブジェクトには、コントロール情報、非同期処理の有無、送信データ、JSON形式のレスポンス、
    // メソッドのタイプ、戻り値、URLが含まれます。

    // 例: データ送信後に画面を更新した際にメッセージを表示する
    $p.events.after_set = (arg) => {
        console.log("データ送信後、画面内容を更新した後に実行される関数です。");

        // レスポンスデータを確認
        if (arg.json) {
            let response = JSON.parse(arg.json);
            console.log("レスポンス:", response);

            // 成功メッセージを表示
            $p.setMessage(
                "#Message",
                JSON.stringify({
                    Css: "alert-success",
                    Text: "データの更新が正常に行われました。",
                }),
            );
        }

        // 処理を続行するかどうかを返す（true: 続行、false: 中断）
        return true;
    };

    // この関数は、データ送信後に特定の処理を実行する場合に利用されます。
    // 例えば、送信後にユーザーに通知を表示したり、ログを取るなどの処理を行うことができます。
}

{
    // ---
    // after_validate関数の使用例

    // after_validate関数は、バリデーションチェックを行った後に実行されるメソッドです。
    // EventArgumentsオブジェクトを引数に取ります。

    // EventArgumentsオブジェクトには、コントロール情報、非同期処理の有無、送信データ、JSON形式のレスポンス、
    // メソッドのタイプ、戻り値、URLが含まれます。

    // 例: バリデーションチェック後に特定の条件を満たす場合にアラートを表示する
    $p.events.after_validate = (arg) => {
        console.log("バリデーションチェック後に実行される関数です。");

        // 送信データの内容を確認
        if (arg.data && arg.data.ControlId === "特定のコントロールID") {
            // 条件を満たす場合の処理を実行
            alert("特定の条件を満たしています。");
        }

        // 処理を続行するかどうかを返す（true: 続行、false: 中断）
        return true;
    };

    // この関数は、フォームの送信データに対して追加のバリデーション処理を行いたい場合に使用されます。
    // 例えば、特定の入力条件を満たしていない場合に警告を表示するなどの処理を行うことができます。
}

{
    // ---
    // before_send関数の使用例

    // before_send関数は、サーバへデータを送信する前に実行されるメソッドです。
    // EventArgumentsオブジェクトを引数に取ります。

    // EventArgumentsオブジェクトには、コントロール情報、非同期処理の有無、送信データ、JSON形式のレスポンス、
    // メソッドのタイプ、戻り値、URLが含まれます。

    // 例: 送信データに特定の条件を満たす値が含まれている場合、送信を中断する
    $p.events.before_send = (arg) => {
        console.log("サーバへデータを送信する前に実行される関数です。");

        // 送信データの内容を確認
        if (arg.data && arg.data.ControlId === "特定のコントロールID") {
            // 条件を満たす場合、送信を中断
            alert("特定の条件を満たしているため、送信を中断します。");
            return false;
        }

        // 送信を続行
        return true;
    };

    // この関数は、フォームの送信データに対して追加の検証を行いたい場合や、
    // 特定の条件下で送信を中断させたい場合に使用されます。
}

{
    // ---
    // before_set関数の使用例

    // before_set関数は、サーバへデータを送信後、画面内容を更新する前に実行されるメソッドです。
    // EventArgumentsオブジェクトを引数に取ります。

    // EventArgumentsオブジェクトには、コントロール情報、非同期処理の有無、送信データ、JSON形式のレスポンス、
    // メソッドのタイプ、戻り値、URLが含まれます。

    // 例: 送信データに基づいて、特定のメッセージを表示する
    $p.events.before_set = (arg) => {
        console.log(
            "サーバへデータを送信後、画面内容を更新する前に実行される関数です。",
        );

        // 送信データの内容を確認
        if (arg.data && arg.data.ControlId === "特定のコントロールID") {
            // 特定のコントロールIDに対する処理
            alert("特定のコントロールのデータが更新されます。");
        }

        // 画面更新を続行
        return true;
    };

    // この関数は、サーバへのデータ送信後に、クライアント側で何らかの追加の処理を行いたい場合に使用されます。
}

{
    // ---
    // before_validate関数の使用例

    // before_validate関数は、バリデーションチェックを行う前に実行されるメソッドです。
    // EventArgumentsオブジェクトを引数に取ります。

    // EventArgumentsオブジェクトには、コントロール情報、非同期処理の有無、送信データ、JSON形式のレスポンス、
    // メソッドのタイプ、戻り値、URLが含まれます。

    // 例: 特定の条件下でのバリデーションのカスタマイズ
    $p.events.before_validate = (arg) => {
        console.log("バリデーションチェックを行う前に実行される関数です。");

        // 条件に基づいてカスタムバリデーションを実行
        if (arg.data && arg.data.ControlId === "特定のコントロールID") {
            // 特定の条件を満たす場合の処理
            if (true) {
                alert("特定の条件が満たされていません。");
                return false; // バリデーションチェックを失敗させる
            }
        }

        // バリデーションチェックを続行
        return true;
    };

    // この関数は、フォームの入力値に対して特定の条件を満たしているかをチェックし、
    // 条件を満たしていない場合にエラーメッセージを表示したり、送信を中止したりする際に使用されます。
}

{
    // ---
    // on_burndown_load関数の使用例

    // on_burndown_load関数は、「バーンダウンチャート」を読み込んだとき、
    // もしくはフィルタ等で表示する内容が変わったときに実行されます。

    // 例: バーンダウンチャートの読み込み時にカスタム処理を実行
    $p.events.on_burndown_load = () => {
        console.log("バーンダウンチャートが読み込まれました。");

        // カスタム処理
        // 例えば、チャートの特定の要素を変更するなどの処理をここに追加できます。
        // 以下は仮の処理例です
        const chartElement = document.getElementById("myBurndownChart");
        if (chartElement) {
            // チャートのスタイルやデータをカスタマイズ
            chartElement.style.backgroundColor = "lightblue";
            // その他のカスタム処理...
        }
    };

    // この関数は、プリザンターのバーンダウンチャートが読み込まれた際に、
    // ユーザー定義のカスタマイズを追加するために利用されます。
}

{
    // ---
    // on_calendar_load関数の使用例

    // on_calendar_load関数は、「カレンダー」を読み込んだとき、
    // もしくはフィルタ等で表示する内容が変わったときに実行されます。

    // 例: カレンダーの読み込み時にカスタム処理を実行
    $p.events.on_calendar_load = () => {
        console.log("カレンダーが読み込まれました。");

        // カスタム処理
        // 例えば、カレンダーの特定の要素を変更するなどの処理をここに追加できます。
        // 以下は仮の処理例です
        const calendarElement = document.getElementById("myCalendar");
        if (calendarElement) {
            // カレンダーのスタイルやデータをカスタマイズ
            calendarElement.style.backgroundColor = "lightgreen";
            // その他のカスタム処理...
        }
    };

    // この関数は、プリザンターのカレンダーが読み込まれた際に、
    // ユーザー定義のカスタマイズを追加するために利用されます。
}

{
    // ---
    // on_crosstab_load関数の使用例

    // on_crosstab_load関数は、「クロス集計」を読み込んだとき、
    // もしくはフィルタ等で表示する内容が変わったときに実行されます。

    // 例: クロス集計の読み込み時にカスタム処理を実行
    $p.events.on_crosstab_load = () => {
        console.log("クロス集計が読み込まれました。");

        // カスタム処理
        // 例えば、クロス集計の特定の要素を変更するなどの処理をここに追加できます。
        // 以下は仮の処理例です
        const crosstabElement = document.getElementById("myCrosstab");
        if (crosstabElement) {
            // クロス集計のスタイルやデータをカスタマイズ
            crosstabElement.style.backgroundColor = "lightblue";
            // その他のカスタム処理...
        }
    };

    // この関数は、プリザンターのクロス集計が読み込まれた際に、
    // ユーザー定義のカスタマイズを追加するために利用されます。
}

{
    // ---
    // on_editor_load関数の使用例

    // on_editor_load関数は、「編集画面」を読み込んだときに実行されます。
    // この関数は、主にAjaxによるレコードの遷移やダイアログでの編集時にカスタムスクリプトを実行するために使用されます。

    $p.events.on_editor_load = () => {
        console.log("編集画面が読み込まれました。");

        // カスタム処理
        // 例えば、特定のフィールドのスタイルを変更したり、イベントリスナーを追加するなどの処理をここに追加できます。
        // 以下は仮の処理例です
        const myField = $p.getControl("MyField");
        if (myField) {
            // フィールドのスタイルをカスタマイズ
        }
    };

    // この関数は、プリザンターの編集画面が読み込まれた際に、
    // ユーザー定義のカスタマイズを追加するために利用されます。
}

{
    // ---
    // on_gantt_load関数の使用例

    // on_gantt_load関数は、「ガントチャート」を読み込んだとき、またはフィルタ等で表示内容が変わったときに実行されます。
    // この関数は、ガントチャートのカスタマイズや特定の処理を実行するために使用されます。

    $p.events.on_gantt_load = () => {
        console.log("ガントチャートが読み込まれました。");

        // カスタム処理
        // 例えば、ガントチャートに対して特定のスタイルを適用したり、イベントリスナーを追加するなどの処理をここに追加できます。
        // 以下は仮の処理例です
        const ganttChart = document.getElementById("MyGanttChart");
        if (ganttChart) {
            // ガントチャートのスタイルをカスタマイズ
            ganttChart.style.backgroundColor = "lightblue";
            // イベントリスナーの追加
            ganttChart.addEventListener("click", (event) => {
                console.log("ガントチャートがクリックされました。");
            });
            // その他のカスタム処理...
        }
    };

    // この関数は、プリザンターのガントチャートが読み込まれた際に、
    // ユーザー定義のカスタマイズを追加するために利用されます。
}

{
    // ---
    // on_grid_load関数の使用例

    // on_grid_load関数は、一覧画面が読み込まれたとき、またはフィルタ等で表示内容が変わったときに実行されます。
    // この関数は、一覧画面のカスタマイズや特定の処理を実行するために使用されます。

    $p.events.on_grid_load = () => {
        console.log("一覧画面が読み込まれました。");

        // カスタム処理
        // 例えば、一覧画面に対して特定のスタイルを適用したり、イベントリスナーを追加するなどの処理をここに追加できます。
        // 以下は仮の処理例です
        const gridView = document.getElementById("MyGridView");
        if (gridView) {
            // 一覧画面のスタイルをカスタマイズ
            gridView.style.backgroundColor = "lightyellow";
            // イベントリスナーの追加
            gridView.addEventListener("click", (event) => {
                console.log("一覧画面がクリックされました。");
            });
            // その他のカスタム処理...
        }
    };

    // この関数は、プリザンターの一覧画面が読み込まれた際に、
    // ユーザー定義のカスタマイズを追加するために利用されます。
}

{
    // ---
    // on_kamban_load関数の使用例

    // on_kamban_load関数は、「カンバン」が読み込まれた時、もしくはフィルタ等で表示内容が変わった時に実行される関数です。
    // この関数は、カンバンビューのカスタマイズや特定の処理を実行するために使用されます。

    $p.events.on_kamban_load = () => {
        console.log("カンバンビューが読み込まれました。");

        // カスタム処理
        // 例えば、カンバンビューに対して特定のスタイルを適用したり、イベントリスナーを追加するなどの処理をここに追加できます。
        // 以下は仮の処理例です
        const kanbanView = document.getElementById("MyKanbanView");
        if (kanbanView) {
            // カンバンビューのスタイルをカスタマイズ
            kanbanView.style.backgroundColor = "lightblue";
            // イベントリスナーの追加
            kanbanView.addEventListener("click", (event) => {
                console.log("カンバンビューがクリックされました。");
            });
            // その他のカスタム処理...
        }
    };

    // この関数は、プリザンターのカンバンビューが読み込まれた際に、
    // ユーザー定義のカスタマイズを追加するために利用されます。
}

{
    // ---
    // on_timeseries_load関数の使用例

    // on_timeseries_load関数は、「時系列チャート」が読み込まれたとき、もしくはフィルタ等で表示内容が変わったときに実行される関数です。
    // この関数は、時系列チャートのカスタマイズや特定の処理を実行するために使用されます。

    $p.events.on_timeseries_load = () => {
        console.log("時系列チャートが読み込まれました。");

        // カスタム処理
        // 例えば、時系列チャートに対して特定のスタイルを適用したり、イベントリスナーを追加するなどの処理をここに追加できます。
        // 以下は仮の処理例です
        const timeseriesChart = document.getElementById("MyTimeseriesChart");
        if (timeseriesChart) {
            // 時系列チャートのスタイルをカスタマイズ
            timeseriesChart.style.backgroundColor = "lightgreen";
            // イベントリスナーの追加
            timeseriesChart.addEventListener("click", (event) => {
                console.log("時系列チャートがクリックされました。");
            });
            // その他のカスタム処理...
        }
    };

    // この関数は、プリザンターの時系列チャートが読み込まれた際に、
    // ユーザー定義のカスタマイズを追加するために利用されます。
}
