import {
    addResponseMessage,
    toggleMsgLoader,
    setQuickButtons,
    addUserMessage,
    toggleWidget,
    addLinkSnippet,
    toggleInputDisabled,
    dropMessages,
    isWidgetOpened,
} from 'react-chat-widget';

addResponseMessage('hello');
toggleMsgLoader();
setQuickButtons([{ label: 'foo', value: 'bar' }]);
addUserMessage('hi');
toggleWidget();
addLinkSnippet('http://example.com');
toggleInputDisabled();
dropMessages();
isWidgetOpened();
