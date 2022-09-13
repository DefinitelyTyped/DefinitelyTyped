const newsEventname = 'openNewsListPage';
universalLinks.subscribe(newsEventname, onNewsListPageRequested);

function onNewsListPageRequested(eventData: universalLinks.EventData) {
  alert('Did launch application with news link: ' + eventData.url);
}

universalLinks.unsubscribe('openNewsListPage');

universalLinks.subscribe(null, onOtherLinkRequested);

function onOtherLinkRequested(eventData: universalLinks.EventData) {
  alert('Did launch application with other link: ' + eventData.url);
}

universalLinks.unsubscribe(null);
