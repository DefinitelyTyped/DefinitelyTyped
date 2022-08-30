const div = document.createElement('div');

new daum.Postcode({}).embed(div, { autoClose: true, q: '강남역' });
new daum.Postcode({}).open({
    autoClose: true,
    left: 0,
    top: 0,
    popupKey: '_blank',
    popupTitle: 'Daum Postcode Service',
    q: '강남역',
});
new window.daum.Postcode({}).embed(div);
new window.daum.Postcode({}).embed();
new window.daum.Postcode({}).open();

const theme = {
    bgColor: '#ECECEC',
    contentBgColor: '#FFFFFF',
    emphTextColor: '#008BD3',
    outlineColor: '#008BD3',
    pageBgColor: '#FAFAFA',
    postcodeTextColor: '#FA4256',
    queryTextColor: '#222222',
    searchBgColor: '#FFFFFF',
    textColor: '#333333',
};

new daum.Postcode({
    alwaysShowEngAddr: false,
    animation: false,
    autoMappingJibun: true,
    autoMappingRoad: true,
    focusInput: true,
    height: 500,
    hideEngBtn: false,
    hideMapBtn: false,
    maxSuggestItems: 10,
    onclose: () => {},
    oncomplete: () => {},
    onresize: () => {},
    onsearch: () => {},
    pleaseReadGuide: 0,
    pleaseReadGuideTimer: 1.5,
    shorthand: true,
    showMoreHName: false,
    submitMode: true,
    theme,
    useBannerLink: true,
    width: 500,
});

// @ts-expect-error
new daum.Postcode();
