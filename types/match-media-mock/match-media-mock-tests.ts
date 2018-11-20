import { create } from "match-media-mock";

const matchMediaMock = create();
matchMediaMock.setConfig({type: 'screen', width: 1200})

matchMediaMock('(max-width: 991px)').matches // false
matchMediaMock('(max-width: 1240px)').matches // true

const mediaQueryList = matchMediaMock('(max-width: 991px)');
const listener = (mqle: MediaQueryListEvent) => { };

mediaQueryList.addListener(listener)
mediaQueryList.removeListener(listener)
