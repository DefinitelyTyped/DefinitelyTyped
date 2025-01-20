/// <reference types="chrome" />

declare interface Window {
    whale: typeof whale;
}
declare namespace chrome.downloads {
    export interface StateType {
        readonly COMPLETE: string;
        readonly IN_PROGRESS: string;
        readonly INTERRUPTED: string;
    }
    export const State: StateType;
}

declare namespace whale {
    /**
     * 지정한 주기 혹은 시간에 코드가 실행되도록 예약합니다
     * 권한: "alarms"
     * @since Chrome 22.
     */
    export import alarms = chrome.alarms;

    /**
     * 북마크의 생성, 삭제, 수정 및 폴더 변경 등 북마크에 관한 기능을 제공합니다. 이 API를 이용해 북마크 관리자를 만들 수 있습니다.
     * 권한: "bookmarks"
     * @since Chrome 5.
     */
    export import bookmarks = chrome.bookmarks;

    /**
     * 주소창 오른쪽 툴바 영역에 나타나는 버튼을 제어 할 수 있습니다. 아이콘을 변경하거나 뱃지를 표시할 수도 있고, 팝업이 나타나게 할 수도 있습니다.
     * Manifest:  "browser_action": {...}
     * @since Chrome 5.
     */
    export import browserAction = chrome.browserAction;

    /**
     * 인터넷 사용 기록을 삭제할 수 있습니다. 설정 > 개인정보 보호 > 인터넷 사용 기록 삭제 영역의 각 항목별 삭제를 수행할 수 있습니다.
     * 권한: "browsingData"
     * @since Chrome 19.
     */
    export import browsingData = chrome.browsingData;

    /**
     * 확장앱에 단축키를 부여할 수 있습니다.
     * Manifest:  "commands": {...}
     * @since Chrome 16.
     */
    export import commands = chrome.commands;

    /**
     * 쿠키, 자바스크립트, 마이크 등 웹 사이트에서 요청한 정보를 제공할 것인지 설정할 수 있습니다. 설정 > 개인정보 보호 > 콘텐츠 설정에서 확인할 수 있는 항목을 제어할 수 있습니다.
     * 권한: "contentSettings"
     * @since Chrome 16.
     */
    export import contentSettings = chrome.contentSettings;

    /**
     * 마우스 오른쪽 버튼을 클릭하면 나타나는 콘텍스트 메뉴를 만들 수 있습니다. 페이지, 링크, 이미지 등 클릭한 위치에 따라 서로 다른 메뉴를 표시할 수 있습니다
     * 권한: "contextMenus"
     * @since Chrome 6.
     */
    export import contextMenus = chrome.contextMenus;

    /**
     * 쿠키를 제어하거나 변경시 이벤트를 수신할 수 있습니다
     * 권한: "cookies", host 권한
     * @since Chrome 6.
     */
    export import cookies = chrome.cookies;

    /**
     * 특정 탭의 네트워크 통신, JavaScript 디버깅, DOM · CSS 변형 등 디버그를 위한 [원격 디버깅 프로토콜](https://chromedevtools.github.io/devtools-protocol/tot/Network)을 사용할 수 있습니다.
     * `sendCommand()` 메소드와 `onEvent` 핸들러 함수를 이용해 개발자도구에서 제공하는 개별 기능을 명령 단위로 수행할 수 있습니다.
     * 권한: "debugger"
     * @since Chrome 18.
     */
    const _debugger: typeof chrome.debugger;
    export { _debugger as debugger };

    /**
     * 웹 페이지에 대한 접근 권한 요청없이 특정 페이지의 콘텐트 혹은 상태에 의존적인 동작을 수행할 수 있습니다.
     * 권한: "declarativeContent"
     * @since Chrome 33.
     */
    export import declarativeContent = chrome.declarativeContent;

    /**
     * 화면, 윈도우 또는 탭의 콘텐츠를 캡쳐할 수 있습니다.
     * 권한: "desktopCapture"
     * @since Chrome 34.
     */
    export import desktopCapture = chrome.desktopCapture;

    export namespace devtools {
        /**
         * 개발자도구를 이용한 검사(Inspect)가 진행중인 윈도우에서 코드를 실행하거나 페이지를 새로고침 하는 등의 작업을 수행할 수 있습니다.
         * @since Chrome 18.
         */

        export import inspectedWindow = chrome.devtools.inspectedWindow;

        /**
         *     개발자도구 > 네트워크 패널에서 수신하는 정보들을 수신할 수 있습니다.
         * @since Chrome 18.
         */
        export import network = chrome.devtools.network;

        /**
         * 개발자도구에 새로운 패널을 추가하거나 기존의 패널에 접근할 수 있습니다.
         * @since Chrome 18.
         */
        export import panels = chrome.devtools.panels;
    }

    /**
     * 지정한 URL의 파일 다운로드, 진행중인 다운로드의 제어 및 검색 등 파일 다운로드에 관련된 기능을 사용할 수 있습니다.
     * 권한: "downloads"
     * @since Chrome 31
     */
    export import downloads = chrome.downloads;

    /**
     * 웨일 브라우저 API에서 사용되는 공통 이벤트 자료형을 포함하는 네임스페이스입니다.
     * @since Chrome 21.
     */
    export import events = chrome.events;

    /**
     * 서로 다른 확장앱 사이에 메시지를 교환하거나, 현재 확장앱에 관한 정보를 얻을 수 있습니다.
     * @since Chrome 5.
     */
    export import extension = chrome.extension;

    /**
     * 글꼴 관련 설정을 제어할 수 있습니다.
     * 권한: "fontSettings"
     * @since Chrome 22.
     */
    export import fontSettings = chrome.fontSettings;

    /**
     * Google Cloud Messaging 서비스와 메시지를 주고받습니다.
     * 권한: "gcm"
     * @since Chrome 35.
     */
    export import gcm = chrome.gcm;

    /**
     * 방문 기록의 생성, 삭제 및 검색 등 방문 기록에 관한 기능을 제공합니다. 이 API를 이용해 방문 기록 페이지를 만들 수 있습니다.
     * 권한: "history"
     * @since Chrome 5.
     */
    export import history = chrome.history;

    /**
     * 다국어 지원을 위한 기능을 제공합니다.
     * @since Chrome 5.
     */
    export import i18n = chrome.i18n;

    /**
     * 시스템의 유휴 상태(Idle) 여부를 확인하거나 변화를 감지할 수 있습니다.
     * 권한: "idle"
     * @since Chrome 6.
     */
    export import idle = chrome.idle;

    /**
     * 설치되어 있는 확장앱 정보를 얻어 제어할 수 있습니다.
     * 권한: "management"
     * @since Chrome 8.
     */
    export import management = chrome.management;

    /**
     * 시스템 트레이에 알림창을 표시할 수 있습니다.
     * 권한: "notifications"
     * @since Chrome 28.
     */
    export import notifications = chrome.notifications;

    /**
     * 주소창에서 특정 키워드를 입력하면 확장앱이 주소창 영역에 관여하게 할 수 있습니다.
     * Manifest:  "omnibox": {...}
     * @since Chrome 9.
     */
    export import omnibox = chrome.omnibox;

    /**
     * 주소창 오른쪽 툴바 영역에 나타나는 버튼을 제어 할 수 있습니다.
     * `browserAction`과 거의 동일하지만 현재 페이지에 대해서만 기능을 수행하기 위해 제공된다는 점이 다릅니다. 비활성 상태에서는 버튼이 회색으로 표시됩니다.
     * Manifest:  "page_action": {...}
     * @since Chrome 5.
     */
    export import pageAction = chrome.pageAction;

    /**
     * 지정한 탭의 웹 페이지를 MHTML 형식으로 저장할 수 있습니다.
     * 권한: "pageCapture"
     * @since Chrome 18.
     */
    export import pageCapture = chrome.pageCapture;

    /**
     * 매니페스트에 optional_permissions로 정의한 추가 권한을 사용자에게 요청할 수 있습니다
     * @since Chrome 16.
     */
    export import permissions = chrome.permissions;

    /**
     * 전원 관리 기능을 제어할 수 있습니다.
     * 권한: "power"
     */
    export import power = chrome.power;

    /**
     * The chrome.printerProvider API exposes events used by print manager to query printers controlled by extensions, to query their capabilities and to submit print jobs to these printers.
     * 권한: "printerProvider"
     */
    export import printerProvider = chrome.printerProvider;

    /**
     * 개인정보 보호 관련 설정을 제어할 수 있습니다.
     * 권한: "privacy"
     */
    export import privacy = chrome.privacy;

    /**
     * 프록시 관련 설정을 제어할 수 있습니다.
     * 권한: "proxy"
     */
    export import proxy = chrome.proxy;

    /**
     * 백그라운드 페이지 검색, 매니페스트 확인 및 확장앱 수명주기에 관한 이벤트 수신, 메시지 교환 등의 기능을 제공합니다.
     */
    export import runtime = chrome.runtime;

    /**
     * 웨일 사이드바 API.
     * Manifest: "sidebar_action": {...}
     * @since whale
     */
    export namespace sidebarAction {
        export interface SidebarShowDetail {
            /** Optional. 사이드바 영역에 표시할 페이지 URL. 지정하지 않으면 매니페스트에 정의한 default_page. */
            url?: string | undefined;
            /**
             * Optional. url 인자와 현재 URL이 같을 때에도 페이지를 새로고침 할 것인지 여부.
             * @default false
             */
            reload?: boolean | undefined;
        }

        export interface SidebarTitleDetail {
            title: string;
        }

        export interface SidebarIconDetail {
            /**
             * 아이콘 이미지 데이터입니다. @see https://developer.chrome.com/extensions/pageAction#type-ImageDataType
             */
            icon: ImageData;
        }

        export interface SidebarPageDetail {
            /** html 파일의 리소스 경로. 빈 문자열(‘’)로 설정하면 사이드바에 빈화면이 보입니다. */
            page: string;
        }

        export interface SidebarBadgeDetail {
            /** 설정할 badge 문자열 */
            text: string;
        }

        export interface SidebarDockDetail {
            /** 부모 윈도우의 ID. 지정하지 않으면 마지막 사용된 윈도우에 도킹합니다. */
            targetWindowId?: number | undefined;
        }

        export interface BadgeBackgroundColorDetails {
            /** 색상값 배열([255, 0, 0, 255]) 혹은 HEX 색상 표현 문자열(#FF0000). */
            color: string | ColorArray;
        }
        export type ColorArray = [number, number, number, number];

        export interface BrowserClickedEvent extends chrome.events.Event<(tab: chrome.tabs.Tab) => void> {}

        /**
         * 지정한 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
         *
         * @param windowId Optional. 대상 윈도우의 ID.
         * @param details Optional. url 설정
         * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
         */
        export function show(
            windowId: number,
            details?: SidebarShowDetail,
            callback?: (windowId: number) => void,
        ): void;

        /**
         * 현재 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
         *
         * @param details Optional. url 설정
         * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
         */
        export function show(
            details: SidebarShowDetail,
            callback?: (windowId: number) => void,
        ): void;

        /**
         * 현재 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
         *
         * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
         */
        export function show(callback: (windowId: number) => void): void;

        /**
         * 현재 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
         */
        export function show(): void;

        /**
         * 지정된 윈도우의 사이드바를 닫습니다. 현재 확장앱에 포커스가 있는 상황에만 동작합니다.
         * @param windowId Optional. 대상 윈도우의 ID. 지정하지 않으면 현재 윈도우.
         * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
         */
        export function hide(
            windowId: number,
            callback?: (windowId: number) => void,
        ): void;

        /**
         * 현재 윈도우의 사이드바를 닫습니다. 현재 확장앱에 포커스가 있는 상황에만 동작합니다.
         * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
         */
        export function hide(callback: (windowId: number) => void): void;

        /**
         * 현재 윈도우의 사이드바를 닫습니다. 현재 확장앱에 포커스가 있는 상황에만 동작합니다.
         */
        export function hide(): void;

        /**
         * 확장앱 아이콘에 마우스를 올렸을 때 나타나는 툴팁 문자열을 변경합니다.
         * sidebar_action 에서 default_title 속성으로 지정하는 영역입니다.
         * 열려 있는 모든 윈도우에 동시 적용됩니다.
         * @param details 설정 할 데이터
         */
        export function setTitle(details: SidebarTitleDetail): void;

        /**
         * 확장앱 아이콘에 마우스를 올렸을 때 나타나는 툴팁 문자열을 반환합니다.
         * sidebar_action 에서 default_title 속성으로 지정한 영역입니다.
         * @param callback title을 담은 결과를 인자값으로 넣은 콜백 함수
         */
        export function getTitle(callback: (result: string) => void): void;

        /**
         * 확장앱 아이콘을 동적으로 변경합니다. 열려 있는 모든 윈도우에 동시 적용됩니다.
         * @param details 아이콘 데이터
         */
        export function setIcon(details: SidebarIconDetail): void;

        /**
         * 확장앱 아이콘이 클릭되었을 때, 로딩되는 페이지 리소스의 경로를 변경합니다.
         * @param details 페이지 상세 정보
         */
        export function setPage(details: SidebarPageDetail): void;

        /**
         * 사이드바 확장앱 아이콘이 클릭되었을 때, 로딩되는 페이지 리소스의 경로를 반환합니다.
         * @param callback 현재 page 경로를 인자값으로 넣은 콜백 함수
         */
        export function getPage(callback: (result: string) => void): void;

        /**
         * 확장앱 아이콘 위에 표시되는 뱃지의 문자열을 변경합니다. 열려 있는 모든 윈도우에 동시 적용됩니다.
         * @param details badge 정보
         */
        export function setBadgeText(details: SidebarBadgeDetail): void;

        /**
         * 사이드바 확장앱 아이콘 위에 표시되는 뱃지의 문자열을 반환합니다.
         * @param callback 현재 뱃지 텍스트를 인자값으로 넣은 콜백 함수.
         */
        export function getBadgeText(callback: (result: string) => void): void;

        /**
         * 확장앱 아이콘 위에 표시되는 뱃지의 배경 색상을 변경합니다. 열려 있는 모든 윈도우에 동시 적용됩니다.
         * @param details 뱃지 배경 색상을 담은 객체
         */
        export function setBadgeBackgroundColor(
            details: BadgeBackgroundColorDetails,
        ): void;

        /**
         * 확장앱 아이콘 위에 표시되는 뱃지의 배경색상을 반환합니다.
         * @param callback 뱃지 배경 색상. RGBA 색상값 배열 [R, G, B, A]를 담은 인자값으로 넣은 콜백 함수.
         */
        export function getBadgeBackgroundColor(
            callback: (color: ColorArray) => void,
        ): void;

        /**
         * 팝업 윈도우를 사이드바에 도킹합니다. details를 통해 도킹하고자 하는 부모 윈도우를 지정할 수 있습니다.
         * 도킹 후에는 팝업 윈도우의 ID는 더 이상 유효하지 않습니다.
         * @param popupWindowId 팝업 윈도우의 ID.
         * @param details Optional. 부모 윈도우의 ID를 담은 객체
         * @param callback 도킹 된 windowId를 인자값으로 넣은 콜백 함수.
         */
        export function dock(
            popupWindowId: number,
            details: SidebarDockDetail,
            callback: (windowId: number) => void,
        ): void;

        /**
         * 팝업 윈도우를 사이드바에 도킹합니다. details를 통해 도킹하고자 하는 부모 윈도우를 지정할 수 있습니다.
         * 도킹 후에는 팝업 윈도우의 ID는 더 이상 유효하지 않습니다.
         * @param popupWindowId 팝업 윈도우의 ID.
         * @param callback 도킹 된 windowId를 인자값으로 넣은 콜백 함수.
         */
        export function dock(
            popupWindowId: number,
            callback: (windowId: number) => void,
        ): void;

        /**
         * 도킹된 윈도우를 부모 윈도우에서 떼어냅니다.
         * @param popupWindowId 부모 윈도우의 ID
         * @param callback 새로 부여된 윈도우 Id를 인자값으로 넣은 콜백 함수.
         * 여기서 windowId는 `whale.sidebarAction.dock()`으로 붙일 때 사용했던 윈도우 ID와는 다르다.
         */
        export function undock(
            popupWindowId: number,
            callback: (windowId: number) => void,
        ): void;

        /**
         * 사이드바 확장앱 아이콘이 클릭될 때 발생하는 이벤트 핸들러
         */
        export var onClicked: BrowserClickedEvent;
    }

    /**
     * 데이터 저장소 기능을 제공합니다. 데이터 변경시 이벤트를 수신할 수 있습니다. 이 API를 이용해 저장한 데이터는 쿠키, 웹 스토리지 등 인터넷 사용 기록과는 별도로 관리됩니다.
     * 권한: "storage"
     * @since Chrome 20.
     */
    export import storage = chrome.storage;

    export namespace system {
        /**
         * 시스템 CPU 관련 정보를 얻을 수 있습니다.
         * 권한: "system.cpu"
         * @since Chrome 32.
         */
        export import cpu = chrome.system.cpu;

        /**
         * 시스템 메모리 관련 정보를 얻을 수 있습니다.
         * 권한: "system.memory"
         * @since Chrome 32.
         */
        export import memory = chrome.system.memory;

        /**
         * 시스템 연결된 이동식 저장매체에 대한 정보를 얻을 수 있습니다. 새로운 이동식 저장매체가 연결되거나, 이미 연결되어 있던 매체가 연결 해제되는 경우 이벤트를 수신할 수 있습니다.
         * Permissions:  "system.storage"
         * @since Chrome 30.
         */
        export import storage = chrome.system.storage;
    }

    /**
     * 지정한 탭의 미디어 스트림을 캡쳐할 수 있습니다
     * 권한: "tabCapture"
     * @since Chrome 31.
     */
    export import tabCapture = chrome.tabCapture;

    /**
     * 새로운 탭을 생성하거나 이미 생성된 탭을 제어할 수 있습니다.
     * @since Chrome 5.
     */
    export import tabs = chrome.tabs;

    /**
     * 새 탭 페이지의 "자주 가는 사이트" 목록을 얻거나 수정, 검색 할 수 있습니다.
     * Whale에서 더 많은 기능을 지원합니다.
     * 권한: "topSites"
     * @since Chrome 19.
     */
    export namespace topSites {
        /** 많이 방문한 URL을 저장하는 Object입니다. get에서 사용됩니다. */
        export interface MostVisitedURL {
            /** 많이 방문한 url. */
            url: string;
            /** 페이지 제목 */
            title: string;
            /**
             * 방문기록에서 판단한 여부입니다.
             * api로 추가한 경우에는 false입니다.
             */
            from_history: boolean;
        }

        /** 많이 방문한 URL을 저장하는 Object입니다. search에서 사용됩니다. */
        export interface MostVisitedURL2 {
            /** 많이 방문한 url. */
            url: string;
            /** 페이지 제목 */
            title: string;
        }

        /**
         * 자주 가는 사이트를 전부 리스트로 담아옵니다.
         * @param callback 결과를 콜백함수의 인자값으로 보냅니다.
         */
        export function get(callback: (data: MostVisitedURL[]) => void): void;

        /**
         * 자주 가는 사이트에 url과 title을 추가합니다.
         * @param url 추가할 url
         * @param title 제목
         * @param callback 상태를 콜백 함수의 인자값으로 보냅니다. 성공시 true, 실패시 false
         */
        export function add(
            url: string,
            title: string,
            callback?: (status: boolean) => void,
        ): void;

        /**
         * 자주 가는 사이트에서 해당 url을 삭제합니다.
         * @param url 삭제할 url
         */
        function _delete(url: string): void;
        export { _delete as delete };

        /**
         * 자주 가는 사이트에서 해당 url을 숨깁니다.
         * @param url block할 url
         */
        export function block(url: string): void;

        /**
         * 자주 가는 사이트에서 숨겨진 url을 보이게 합니다.
         * @param url block을 풀 url
         */
        export function unblock(url: string): void;

        /**
         * 자주 가는 사이트에 block당한 여부를 확인합니다.
         * @param url 확인할 uri
         * @param callback block 여부를 콜백함수의 인자값으로 보냅니다.
         */
        export function isBlocked(
            url: string,
            callback: (status: boolean) => void,
        ): void;

        /**
         * 방문기록에서 자주 가는 사이트 순으로 검색을 합니다.
         * @param term 검색할 키워드
         * @param count 검색할 개수.
         * @param callback 결과 리스트를 함수의 인자값으로 보냅니다.
         */
        export function search(
            term: string,
            count: number,
            callback?: (result: MostVisitedURL2[]) => void,
        ): void;

        /**
         * 자주 가는 사이트에 해당 배열을 추가합니다.
         * 만약 다시 update를 실행하면 기존에 update에 존재하는 배열은 삭제됩니다.
         * @param urls url, title로 구성된 Object Array
         */
        export function update(urls: MostVisitedURL2[]);
    }

    /**
     * text-to-speech를 사용할 수 있는 api입니다.
     * 권한: "tts"
     * @since Chrome 14.
     */
    export import tts = chrome.tts;

    /**
     * text-to-speech를 사용할 수 있는 api입니다.
     * 권한: "tts"
     * @since Chrome 14.
     */
    export import ttsEngine = chrome.ttsEngine;

    /**
     * Whale API의 type 정보를 얻을 수 있습니다.
     * @since Chrome 13.
     */
    export import types = chrome.types;

    /**
     * 웹 탐색 요청을 수신하여 제어할 수 있습니다.
     * 권한: "webNavigation"
     * @since Chrome 16.
     */
    export import webNavigation = chrome.webNavigation;

    /**
     * 웹 요청을 감지하여 차단, 수정 및 간섭할 수 있습니다.
     * 권한: "webRequest", host 권한
     * @since Chrome 17.
     */
    export import webRequest = chrome.webRequest;

    /**
     * 새로운 창을 생성하거나 이미 생성된 창을 제어할 수 있습니다.
     * 아무런 권한이 없어도 되지만, Tab권한이 있어야 favocon, uri, title의 정보를 불러올 수 있다.
     * @since Chrome 5.
     */
    export import windows = chrome.windows;
}
