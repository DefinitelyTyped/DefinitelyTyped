/// <reference path="appframework.d.ts" />

af(($: appFrameworkStatic) => {});

((): appFrameworkCollection => {
  return $('div'); //=> all DIV elements on the page
})();
((): appFrameworkCollection => {
  return $("<p />", {}); // context
})();
((): appFrameworkCollection => {
  return $($('')); // appFrameworkCollection
})();
((): appFrameworkCollection => {
  return $(document.createElement('div')); // HTMLElement
})();
((): appFrameworkCollection => {
  return $({}); // Object(any)
})();

((): boolean => {
  return $.is$($(''));
})();

((): boolean[] => {
  return $.map([], (item: any, index: number): boolean => {
    return true;
  });
})();

$.each([], (index: number, item: any) => { });
$.each({}, (key: string, value: any) => { });

((): Object => {
  return $.extend({ one: 'patridge' }, { two: 'turtle doves' });
})();

((): boolean => {
  return $.isArray({});
})();

((): boolean => {
  return $.isFunction({});
})();

((): boolean => {
  return $.isObject({});
})();

((): Object => {
  return $.fn;
})();

((): Object => {
  return $.ajaxSettings;
})();

$.jsonP({});

((): XMLHttpRequest => {
  return $.ajax({});
})();

((): XMLHttpRequest => {
  return $.get('', (data: any, status?: string, xhr?: XMLHttpRequest) => {});
})();


((): XMLHttpRequest => {
  return $.post('', (data: any, status?: string, xhr?: XMLHttpRequest) => {});
})();
((): XMLHttpRequest => {
  return $.post('', {}, (data: any, status?: string, xhr?: XMLHttpRequest) => {});
})();


((): XMLHttpRequest => {
  return $.getJSON('', (data: any, status?: string, xhr?: XMLHttpRequest) => {});
})();
((): XMLHttpRequest => {
  return $.getJSON('', {}, (data: any, status?: string, xhr?: XMLHttpRequest) => {});
})();


((): string => {
  return $.param({});
})();
((): string => {
  return $.param({}, '');
})();

((): Object => {
  return $.parseJSON('');
})();

((): Object => {
  return $.parseXML('');
})();

((): string => {
  return $.uuid();
})();

((): Object => {
  return $.getCssMatrix(document.createElement('div'));
})();
((): Object => {
  return $.getCssMatrix($(''));
})();

((): appFrameworkCollection => {
  return $.create('');
})();
((): appFrameworkCollection => {
  return $.create('', {});
})();

((): appFrameworkCollection => {
  return $.query('');
})();
((): appFrameworkCollection => {
  return $.query('', {});
})();

((): Object => {
  return $.Event('', {});
})();

((): void => {
  return $.bind({}, '', () => {});
})();

((): void => {
  return $.trigger({}, '');
})();
((): void => {
  return $.trigger({}, '', []);
})();

((): void => {
  return $.unbind({}, '', () => {});
})();

((): void => {
  return $.proxy(() => {}, {});
})();

((): void => {
  return $.cleanUpContent(document.createElement('div'), false, false);
})();

((): void => {
  return $.asap(() => {});
})();
((): void => {
  return $.asap(() => {}, {});
})();
((): void => {
  return $.asap(() => {}, {}, []);
})();

((): void => {
  return $.parseJS('');
})();
((): void => {
  return $.parseJS(document.createElement('div'));
})();

$.os.webkit;
$.os.android;
$.os.androidICS;
$.os.ipad;
$.os.iphone;
$.os.ios7;
$.os.webos;
$.os.touchpad;
$.os.ios;
$.os.playbook;
$.os.blackberry;
$.os.blackberry10;
$.os.chrome;
$.os.opera;
$.os.fennec;
$.os.ie;
$.os.ieTouch;
$.os.supportsTouch;

$.feat.nativeTouchScroll;
$.feat.cssPrefix;
$.feat.cssTransformStart;
$.feat.cssTransformEnd;


((): appFrameworkCollection => {
  return $('').reduce((hoge) => { return hoge; });
})();

((): number => {
  return $('').push($(''));
})();

((): number => {
  return $('').indexOf($(''));
})();

((): appFrameworkCollection[] => {
  return $('').concat($(''));
})();

((): appFrameworkCollection[] => {
  return $('').slice(0);
})();

((): number => {
  return $('').length;
})();

((): appFrameworkCollection => {
  return $('').map(() => {});
})();

((): appFrameworkCollection => {
  return $('').each(() => {});
})();

((): void => {
  return $('').forEach(() => {});
})();

((): appFrameworkStatic => {
  return $('').ready(() => {});
})();

((): appFrameworkCollection => {
  return $('').find('');
})();

((): string => {
  return $('').html();
})();
((): appFrameworkCollection => {
  return $('').html('');
})();
((): appFrameworkCollection => {
  return $('').html('', false);
})();

((): string => {
  return $('').text();
})();
((): appFrameworkCollection => {
  return $('').text('');
})();

(() => {
  return $('').css('');
})();
((): appFrameworkCollection => {
  return $('').css('', '');
})();
((): appFrameworkCollection => {
  return $('').css({});
})();

((): appFrameworkCollection => {
  return $('').vendorCss('');
})();

((): appFrameworkCollection => {
  return $('').computedStyle('');
})();

((): appFrameworkCollection => {
  return $('').empty();
})();

((): appFrameworkCollection => {
  return $('').hide();
})();

((): appFrameworkCollection => {
  return $('').show();
})();

((): appFrameworkCollection => {
  return $('').toggle();
})();

((): string => {
  return $('').val();
})();
((): appFrameworkCollection => {
  return $('').val('');
})();

((): string => {
  return $('').attr('');
})();
((): appFrameworkCollection => {
  return $('').attr({});
})();
((): appFrameworkCollection => {
  return $('').attr('', '');
})();
((): appFrameworkCollection => {
  return $('').attr('', {});
})();

((): appFrameworkCollection => {
  return $('').removeAttr('');
})();

((): string => {
  return $('').prop('');
})();
((): appFrameworkCollection => {
  return $('').prop({});
})();
((): appFrameworkCollection => {
  return $('').prop('', '');
})();
((): appFrameworkCollection => {
  return $('').prop('', {});
})();

((): appFrameworkCollection => {
  return $('').removeProp('');
})();

((): appFrameworkCollection => {
  return $('').remove();
})();
((): appFrameworkCollection => {
  return $('').remove('');
})();
((): appFrameworkCollection => {
  return $('').remove(document.createElement('div'));
})();
((): appFrameworkCollection => {
  return $('').remove($(''));
})();

((): appFrameworkCollection => {
  return $('').addClass('');
})();

((): appFrameworkCollection => {
  return $('').removeClass('');
})();

((): appFrameworkCollection => {
  return $('').toggleClass('');
})();

((): appFrameworkCollection => {
  return $('').replaceClass('', '');
})();

((): boolean => {
  return $('').hasClass('', document.createElement('div'));
})();

((): appFrameworkCollection => {
  return $('').append('');
})();

((): appFrameworkCollection => {
  return $('').appendTo('');
})();

((): appFrameworkCollection => {
  return $('').prependTo('');
})();

((): appFrameworkCollection => {
  return $('').prepend('');
})();

((): appFrameworkCollection => {
  return $('').insertBefore('');
})();

((): void => {
  return $('').insertAfter('');
})();

((): HTMLElement[] => {
  return $('').get();
})();

((): HTMLElement => {
  return $('').get(0);
})();

((): {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
} => {
  return $('').offset();
})();

((): string => {
  return $('').height();
})();

((): string => {
  return $('').width();
})();

((): appFrameworkCollection => {
  return $('').parent();
})();

((): appFrameworkCollection => {
  return $('').parents();
})();

((): appFrameworkCollection => {
  return $('').children();
})();

((): appFrameworkCollection => {
  return $('').siblings();
})();

((): appFrameworkCollection => {
  return $('').closest();
})();

((): appFrameworkCollection => {
  return $('').filter();
})();

((): appFrameworkCollection => {
  return $('').not();
})();

((): any => {
  return $('').data('');
})();
((): appFrameworkCollection => {
  return $('').data('', '');
})();
((): appFrameworkCollection => {
  return $('').data('', {});
})();

((): appFrameworkCollection => {
  return $('').end();
})();

((): appFrameworkCollection => {
  return $('').clone();
})();

((): number => {
  return $('').size();
})();

((): string => {
  return $('').serialize();
})();

((): appFrameworkCollection => {
  return $('').eq(0);
})();

((): number => {
  return $('').index();
})();
((): number => {
  return $('').index('');
})();

((): number => {
  return $('').is('');
})();

((): appFrameworkCollection => {
  return $('').bind({});
})();
((): appFrameworkCollection => {
  return $('').bind('', () => {});
})();

((): appFrameworkCollection => {
  return $('').unbind({});
})();
((): appFrameworkCollection => {
  return $('').unbind();
})();
((): appFrameworkCollection => {
  return $('').unbind('', () => {});
})();

((): appFrameworkCollection => {
  return $('').one({});
})();
((): appFrameworkCollection => {
  return $('').one('', () => {});
})();

((): appFrameworkCollection => {
  return $('').delegate('', {});
})();
((): appFrameworkCollection => {
  return $('').delegate('', '', () => {});
})();

((): appFrameworkCollection => {
  return $('').undelegate('', {});
})();
((): appFrameworkCollection => {
  return $('').undelegate('', '', () => {});
})();

((): appFrameworkCollection => {
  return $('').on({});
})();
((): appFrameworkCollection => {
  return $('').on('', () => {});
})();
((): appFrameworkCollection => {
  return $('').on('', '', () => {});
})();

((): appFrameworkCollection => {
  return $('').off({});
})();
((): appFrameworkCollection => {
  return $('').off('', () => {});
})();
((): appFrameworkCollection => {
  return $('').off('', '', () => {});
})();

((): appFrameworkCollection => {
  return $('').trigger('');
})();
((): appFrameworkCollection => {
  return $('').trigger({});
})();

((): appFrameworkCollection => {
  return $('').click();
})();
((): appFrameworkCollection => {
  return $('').click(() => {});
})();

((): appFrameworkCollection => {
  return $('').keydown();
})();
((): appFrameworkCollection => {
  return $('').keydown(() => {});
})();

((): appFrameworkCollection => {
  return $('').keyup();
})();
((): appFrameworkCollection => {
  return $('').keyup(() => {});
})();

((): appFrameworkCollection => {
  return $('').keypress();
})();
((): appFrameworkCollection => {
  return $('').keypress(() => {});
})();

((): appFrameworkCollection => {
  return $('').submit();
})();
((): appFrameworkCollection => {
  return $('').submit(() => {});
})();

((): appFrameworkCollection => {
  return $('').load();
})();
((): appFrameworkCollection => {
  return $('').load(() => {});
})();

((): appFrameworkCollection => {
  return $('').resize();
})();
((): appFrameworkCollection => {
  return $('').resize(() => {});
})();

((): appFrameworkCollection => {
  return $('').change();
})();
((): appFrameworkCollection => {
  return $('').change(() => {});
})();

((): appFrameworkCollection => {
  return $('').select();
})();
((): appFrameworkCollection => {
  return $('').select(() => {});
})();

((): appFrameworkCollection => {
  return $('').error();
})();
((): appFrameworkCollection => {
  return $('').error(() => {});
})();

((): appFrameworkCollection => {
  return $('').focus();
})();
((): appFrameworkCollection => {
  return $('').focus(() => {});
})();

((): appFrameworkCollection => {
  return $('').blur();
})();
((): appFrameworkCollection => {
  return $('').blur(() => {});
})();
