const newsEventname = 'openNewsListPage';
universalLinks.subscribe(newsEventname, onNewsListPageRequested);

function onNewsListPageRequested(eventData: EventData) {
  alert('Did launch application with news link: ' + eventData.url);
}

universalLinks.unsubscribe('openNewsListPage');

window.universalLinks.subscribe(null, onOtherLinkRequested);

function onOtherLinkRequested(eventData: EventData) {
  alert('Did launch application with other link: ' + eventData.url);
}

window.universalLinks.unsubscribe(null);
