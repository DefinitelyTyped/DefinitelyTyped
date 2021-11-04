import * as crossDomainUtils from 'cross-domain-utils';

// $ExpectType SameDomainWindowType
crossDomainUtils.assertSameDomain(window);

// $ExpectType string
crossDomainUtils.getDomain(window);

// $ExpectType string
crossDomainUtils.getDomainFromUrl('<url>');

// $ExpectType string
crossDomainUtils.getActualDomain(window);

// $ExpectType boolean
crossDomainUtils.isBlankDomain(window);

// $ExpectType boolean
crossDomainUtils.isSameDomain(window);

// $ExpectType CrossDomainWindowType | undefined
crossDomainUtils.getParent(window);

// $ExpectType CrossDomainWindowType | undefined
crossDomainUtils.getOpener(window);

// $ExpectType ReadonlyArray<CrossDomainWindowType>
crossDomainUtils.getParents(window);

// $ExpectType boolean
crossDomainUtils.isAncestorParent(window, window);

// $ExpectType ReadonlyArray<CrossDomainWindowType>
crossDomainUtils.getFrames(window);

// $ExpectType ReadonlyArray<CrossDomainWindowType>
crossDomainUtils.getAllChildFrames(window);

// $ExpectType CrossDomainWindowType | undefined
crossDomainUtils.getTop(window);

// $ExpectType ReadonlyArray<CrossDomainWindowType>
crossDomainUtils.getAllFramesInWindow(window);

// $ExpectType boolean
crossDomainUtils.isTop(window);

// $ExpectType boolean
crossDomainUtils.isFrameWindowClosed(document.createElement('iframe'));

// $ExpectType boolean
crossDomainUtils.isWindowClosed(window);

// $ExpectType string
crossDomainUtils.getUserAgent(window);

// $ExpectType CrossDomainWindowType | undefined
crossDomainUtils.getFrameByName(window, '<name>');

// $ExpectType CrossDomainWindowType | undefined
crossDomainUtils.findChildFrameByName(window, '<name>');

// $ExpectType CrossDomainWindowType | undefined
crossDomainUtils.findFrameByName(window, '<name>');

// $ExpectType boolean
crossDomainUtils.isParent(window, window);

// $ExpectType boolean
crossDomainUtils.isOpener(window, window);

// $ExpectType CrossDomainWindowType | undefined
crossDomainUtils.getAncestor(window);

// $ExpectType ReadonlyArray<CrossDomainWindowType>
crossDomainUtils.getAncestors(window);

// $ExpectType boolean
crossDomainUtils.isAncestor(window, window);

// $ExpectType boolean
crossDomainUtils.isPopup(window);

// $ExpectType boolean
crossDomainUtils.isIframe(window);

// $ExpectType number
crossDomainUtils.getDistanceFromTop(window);

// $ExpectType CrossDomainWindowType | undefined
crossDomainUtils.getNthParent(window, 1);

// $ExpectType boolean
crossDomainUtils.isSameTopWindow(window, window);

// $ExpectType boolean
crossDomainUtils.isWindow(window);

// $ExpectType { cancel: () => void; }
crossDomainUtils.onCloseWindow(window, () => 0, 1);

// $ExpectType boolean
crossDomainUtils.matchDomain('<pattern>', '<domain>');
