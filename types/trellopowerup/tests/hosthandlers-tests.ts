import * as Trello from "trellopowerup";

// Model
const modelBoard: Trello.PowerUp.Model = "board";
const modelCard: Trello.PowerUp.Model = "card";
const modelOrg: Trello.PowerUp.Model = "organization";
// @ts-expect-error - invalid model
const invalidModel: Trello.PowerUp.Model = "user";

// Scope
const scopeBoard: Trello.PowerUp.Scope = "board";
const scopeMember: Trello.PowerUp.Scope = "member";
// @ts-expect-error - invalid scope
const invalidScope: Trello.PowerUp.Scope = "foo";

// Visibility
const visShared: Trello.PowerUp.Visibility = "shared";
const visPrivate: Trello.PowerUp.Visibility = "private";
// @ts-expect-error - invalid visibility
const invalidVis: Trello.PowerUp.Visibility = "public";

// ScopeVisibilityMap
const svm: Trello.PowerUp.ScopeVisibilityMap = {
    board: { shared: 1, private: 2 },
    card: { shared: "a", private: "b" },
    organization: { shared: {}, private: {} },
    member: { shared: null, private: undefined },
};
// $ExpectType { shared: unknown; private: unknown; }
svm.board;

// Field types
const orgField: Trello.PowerUp.OrganizationField = "id";
const boardField: Trello.PowerUp.BoardField = "id";
const cardField: Trello.PowerUp.CardField = "id";
const listField: Trello.PowerUp.ListField = "id";
const memberField: Trello.PowerUp.MemberField = "id";

// HeaderAction
const headerAction: Trello.PowerUp.HeaderAction = {
    icon: "icon.png",
    alt: "alt text",
    callback: () => {},
    position: "left",
};
// $ExpectType string
headerAction.icon;
// $ExpectType string
headerAction.alt;
// $ExpectType () => void
headerAction.callback;
// $ExpectType "left" | "right"
headerAction.position;
// @ts-expect-error - missing icon
const invalidHeaderAction: Trello.PowerUp.HeaderAction = { alt: "a", callback: () => {}, position: "left" };

// AlertDisplay
const alertInfo: Trello.PowerUp.AlertDisplay = "info";
const alertSuccess: Trello.PowerUp.AlertDisplay = "success";
// @ts-expect-error - invalid alert display
const invalidAlert: Trello.PowerUp.AlertDisplay = "danger";

// ConfettiOptions
const confetti: Trello.PowerUp.ConfettiOptions = {
    clientX: 10,
    clientY: 20,
    target: document.body,
};
// $ExpectType number
confetti.clientX;
// $ExpectType number
confetti.clientY;
// $ExpectType EventTarget
confetti.target;
// @ts-expect-error - missing clientX
const invalidConfetti: Trello.PowerUp.ConfettiOptions = { clientY: 1, target: document.body };

// JWTOptions
const jwt: Trello.PowerUp.JWTOptions = {};
const jwtWithCard: Trello.PowerUp.JWTOptions = { card: {} as Trello.Card, state: "foo" };
// $ExpectType Card | undefined
jwtWithCard.card;
// $ExpectType string | undefined
jwtWithCard.state;

// PopupOptions
const popupOptions: Trello.PowerUp.PopupOptions = { title: "Popup" };
// $ExpectType string
popupOptions.title;
// @ts-expect-error - missing title
const invalidPopupOptions: Trello.PowerUp.PopupOptions = {};

// PopupListItemOptions
const popupListItem: Trello.PowerUp.PopupListItemOptions = {
    text: "Item",
    callback: async (t, options) => {},
};
// $ExpectType string
popupListItem.text;
// $ExpectType ((t: CallbackHandler, options: PopupCallbackOptions) => Promise<void>) | undefined
popupListItem.callback;
// @ts-expect-error - missing text
const invalidPopupListItem: Trello.PowerUp.PopupListItemOptions = { callback: async () => {} };

// PopupListOptions
const popupList: Trello.PowerUp.PopupListOptions = {
    title: "List",
    items: [popupListItem],
};
// $ExpectType string
popupList.title;
// $ExpectType PopupListItemOptions[]
popupList.items;
// @ts-expect-error - missing items
const invalidPopupList: Trello.PowerUp.PopupListOptions = { title: "List" };

// PopupSearchOptions
const popupSearch: Trello.PowerUp.PopupSearchOptions = {
    title: "Search",
    items: [popupListItem],
    search: {},
};
// $ExpectType { count?: number | undefined; placeholder?: string | undefined; empty?: string | undefined; searching?: string | undefined; debounce?: number | undefined; }
popupSearch.search;

// PopupIframeOptions
const popupIframe: Trello.PowerUp.PopupIframeOptions = {
    title: "Iframe",
    url: "https://example.com",
};
// $ExpectType string
popupIframe.url;
// $ExpectType string
popupIframe.title;

// PopupDateOptions
const popupDate: Trello.PowerUp.PopupDateOptions = {
    title: "Date",
    type: "date",
    callback: async (t, options) => {},
};
// $ExpectType "date" | "datetime"
popupDate.type;
// $ExpectType (t: CallbackHandler, options: PopupCallbackOptions & { date: string; }) => Promise<void>
popupDate.callback;

// PopupConfirmOptions
const popupConfirm: Trello.PowerUp.PopupConfirmOptions = {
    title: "Confirm",
    type: "confirm",
    message: "Are you sure?",
    confirmText: "Yes",
    onConfirm: async (t, opts) => {},
};
// $ExpectType string
popupConfirm.message;
// $ExpectType string
popupConfirm.confirmText;
// $ExpectType (t: CallbackHandler, opts: PopupCallbackOptions) => Promise<void>
popupConfirm.onConfirm;

// PopupConfirmWithCancelOptions
const popupConfirmCancel: Trello.PowerUp.PopupConfirmWithCancelOptions = {
    title: "Confirm",
    type: "confirm",
    message: "Are you sure?",
    confirmText: "Yes",
    onConfirm: async (t, opts) => {},
    cancelText: "No",
    onCancel: async (t, opts) => {},
};
// $ExpectType string
popupConfirmCancel.cancelText;
// $ExpectType (t: CallbackHandler, opts: PopupCallbackOptions) => Promise<void>
popupConfirmCancel.onCancel;

// AnonymousHostHandlers (type only, not instantiable)
declare const anon: Trello.PowerUp.AnonymousHostHandlers;
// $ExpectType Promise<ScopeVisibilityMap>
anon.getAll();
// $ExpectType Promise<Card[]>
anon.cards("all");
// $ExpectType Promise<Board>
anon.board("all");
// $ExpectType string
anon.safe("<b>hi</b>");
// $ExpectType string[]
anon.localizeKeys(["a", ["b", "c"]]);
// $ExpectType void
anon.localizeNode(document.body);

// HostHandlers (type only, not instantiable)
declare const host: Trello.PowerUp.HostHandlers;
// $ExpectType boolean
host.isMemberSignedIn();
// $ExpectType boolean
host.memberCanWriteToModel("board");
// $ExpectType string
host.signUrl("/foo");
// $ExpectType Promise<void>
host.navigate({ url: "/foo" });
// $ExpectType Promise<void>
host.showCard("cardId");
// $ExpectType Promise<void>
host.hideCard();
// $ExpectType Promise<void>
host.alert({ message: "hi" });
// $ExpectType Promise<void>
host.hideAlert();
// $ExpectType Promise<void>
host.popup(popupList);
// $ExpectType Promise<void>
host.overlay({ url: "foo", args: {}, inset: 1 });
// $ExpectType Promise<void>
host.boardBar({ url: "foo", args: {}, height: 1 });
// $ExpectType Promise<void>
host.modal({ url: "foo" });
// $ExpectType Promise<void>
host.updateModal({});
// $ExpectType Promise<void>
host.hide();
// $ExpectType Promise<void>
host.closePopup();
// $ExpectType Promise<void>
host.back();
// $ExpectType Promise<void>
host.hideOverlay();
// $ExpectType Promise<void>
host.closeOverlay();
// $ExpectType Promise<void>
host.hideBoardBar();
// $ExpectType Promise<void>
host.closeBoardBar();
// $ExpectType Promise<void>
host.closeModal();
// $ExpectType Promise<void>
host.sizeTo(1);
// $ExpectType Promise<Card>
host.card("all");
// $ExpectType Promise<List>
host.list("all");
// $ExpectType Promise<void>
host.attach({ name: "n", url: "u" });
// $ExpectType Promise<string>
host.requestToken({});
// $ExpectType Promise<string>
host.authorize("url");
// $ExpectType Promise<void>
host.storeSecret("k", "d");
// $ExpectType Promise<string>
host.loadSecret("k");
// $ExpectType Promise<void>
host.clearSecret("k");
// $ExpectType Promise<void>
host.notifyParent("done");
// $ExpectType string
host.getColorToken("foo");
// $ExpectType string
host.getComputedColorToken("foo");
// $ExpectType () => void
host.subscribeToThemeChanges((theme) => {});

// CallbackHandler (type only, not instantiable)
declare const cb: Trello.PowerUp.CallbackHandler;
// $ExpectType Error
cb.InvalidContext;
// $ExpectType Error
cb.NotHandled;
// $ExpectType Error
cb.PluginDisabled;
// $ExpectType string | undefined
cb.command;
// $ExpectType [{ action: string; callback: string; context: Context; locale: string; }, ...unknown[]]
cb.args;
// $ExpectType string | undefined
cb.source;
// $ExpectType string | undefined
cb.secret;
