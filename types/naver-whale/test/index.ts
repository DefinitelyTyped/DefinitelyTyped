// https://developers.whale.naver.com/tutorials/browserAction/
function ToolBarExample() {
    whale.browserAction.onClicked.addListener(() => {
        whale.tabs.create({
            url: `http://news.naver.com/`
        });
    });
}

// https://developers.whale.naver.com/tutorials/messagePassing/
function MessageExample() {
    // background
    whale.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message === `How are you?`) {
            sendResponse(`I'm fine thank you and you?`);
        }
    });

    // contentScript
    for (let i = 0; i < 100; i++) {
        console.log(`How are you?`);
        whale.runtime.sendMessage(`How are you?`, response => {
            console.log(response); // = I'm fine thank you and you?
        });
    }

    // connect
    const port = whale.runtime.connect({ name: `greetings` });

    port.onMessage.addListener(message => {
        console.log(message);
    });

    for (let i = 0; i < 100; i++) {
        console.log(`How are you?`);
        port.postMessage(`How are you?`);
    }

    whale.runtime.onConnect.addListener(port => {
        if (port.name === `greetings`) {
            port.onMessage.addListener(message => {
                if (message === `How are you?`) {
                    port.postMessage(`I'm fine thank you and you?`);
                }
            });
        }
    });
    whale.sidebarAction.show(() => {
        whale.runtime.sendMessage(`Hello Sidebar!`);
    });

    window.addEventListener(`DOMContentLoaded`, () => {
        // 이 구문이 실행되기 전 이미 contentScript.js 의 sendMessage() 가 끝난 상태.
        // 그러므로 sidebarAction.show() 의 콜백에서 보내는 메시지는 이곳에 도달하지 않습니다.
        whale.runtime.onMessage.addListener(message => {
            console.log(message);
        });
    });
}

function StorageExample() {
    window.addEventListener(`DOMContentLoaded`, () => {
        // 처음 로딩 될 때: 메시지가 있는지 확인하고 삭제
        whale.storage.local.get(`message`, storage => {
            console.log(storage.message); // = Hello
            whale.storage.local.remove(`message`);
        });

        // 로딩 이후의 변화 대응
        whale.storage.onChanged.addListener((changes, areaName) => {
            if (areaName === `local` && changes.message) {
                console.log(changes.message.newValue);
            }
        });
    });
}

// https://developers.whale.naver.com/tutorials/sidebarAction/
function SidebarExample() {
    whale.sidebarAction.onClicked.addListener(result => {
        // result.opened: 사이드바가 열렸는지 닫혔는지를 알려주는 boolean 값. 열렸으면 true.
    });

    whale.sidebarAction.setTitle({
        title: `새 제목`
    });

    whale.sidebarAction.setBadgeText({
        text: `5`
    });

    whale.sidebarAction.setBadgeBackgroundColor({
        color: `#ff0000` //  RGBA 색상값 배열([255, 0, 0, 255]) 혹은 HEX 색상 표현 문자열(#FF0000).
    });
}

// https://developers.whale.naver.com/tutorials/sidebarAdvance/
function SidebarExample2() {
    whale.sidebarAction.show({ url: `http://MYWEBSITE.com` });
    whale.sidebarAction.show({
        url: whale.runtime.getURL(`index.html`)
    });
}

// https://developers.whale.naver.com/tutorials/downloads/
function DownloadExample() {
    whale.downloads.download({
        url: `http://example.org/example.zip`
    });

    whale.downloads.download(
        {
            url: `http://example.org/example.zip`,
            filename: `download.zip`,
            saveAs: true
        },
        downloadId => {
            // 만약 'downloadId' 가 undefined 라면 오류가 발생했다는 뜻입니다.
            // 그러므로 이후의 과정을 진행하기 전에 오류 여부를 확인해야 합니다.
            if (typeof downloadId !== `undefined`) {
                console.log(`다운로드가 시작되었습니다. (ID: ${downloadId})`);
            }
        }
    );

    whale.downloads.search(
        {
            orderBy: ["-startTime"],
            limit: 5
        },
        downloadedItems => {
            downloadedItems.forEach(item => {
                console.log(`
                id: ${item.id}
                filename: ${item.filename}
                startedAt: ${new Date(item.startTime).toLocaleString()}
            `);
            });
        }
    );

    whale.downloads.onCreated.addListener(evt => {
        console.log(`
            다운로드가 시작되었습니다.
            - ID: ${evt.id}
            - URL: ${evt.url}
            - fileSize: ${evt.fileSize}
        `);
    });

    whale.downloads.onChanged.addListener(({ id, state }) => {
        if (typeof state === `undefined`) {
            return;
        }

        switch (state.current) {
            case whale.downloads.State.COMPLETE:
                console.log(`다운로드가 완료되었습니다. (ID: ${id})`);
                break;

            case whale.downloads.State.INTERRUPTED:
                console.log(`다운로드가 중단되었습니다. (ID: ${id})`);
                break;
        }
    });
}

// https://developers.whale.naver.com/tutorials/bookmarks/
function BookmarkExample() {
    whale.bookmarks.getTree(function(bmTree) {
        bmTree.forEach(function(node) {});
    });
}
whale.browserAction.onClicked.addListener(function() {
    whale.bookmarks.create(
        {
            title: `네이버 웨일`,
            parentId: `1`
        },
        function(newEntry) {
            whale.bookmarks.create({
                title: "웨일 홈",
                url: "http://whale.naver.com/",
                parentId: newEntry.id
            });

            whale.bookmarks.create({
                title: "웨일 연구소",
                url: "http://lab.whale.naver.com",
                parentId: newEntry.id
            });

            console.log("New Entry Added");
        }
    );
});

// https://developers.whale.naver.com/tutorials/commands/
whale.commands.onCommand.addListener(function(command) {
    if (command === `test`) {
        alert("컨트롤 쉬프트 제이를 누르셨군요!");
    }
});

whale.commands.onCommand.addListener(function(command) {
    if (command === `open-popup`) {
        whale.browserAction.setPopup({
            popup: whale.runtime.getManifest().browser_action!.default_popup!
        });
    }
});

// https://developers.whale.naver.com/tutorials/history/
var count = 0;

whale.browserAction.onClicked.addListener(function(tab) {
    whale.history.getVisits(
        {
            url: tab.url!
        },
        function(visitItem) {
            count = visitItem.length;

            whale.browserAction.setBadgeBackgroundColor({
                color: `#ff0000`
            });

            whale.browserAction.setBadgeText({
                text: `${count}`
            });

            console.log(`The user has visited ${tab.url} ${count} times`);
        }
    );
});

whale.browserAction.onClicked.addListener(function(tab) {
    whale.history.deleteUrl({
        url: tab.url!
    });
});

// https://developers.whale.naver.com/tutorials/contextMenu/
whale.contextMenus.create({
    title: `%s 검색하기`,
    contexts: [`selection`],
    onclick: () => {}
});

function searchText(info) {
    const myQuery = encodeURI(
        `https://search.naver.com/search.naver?query=${info.selectionText}`
    );

    whale.tabs.create({
        url: myQuery
    });
}
