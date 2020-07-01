$(document).ready(() => {
    // basic usage
    $('.lazyload').lazyload();

    // with options
    const options: JQueryLazyLoad.Options = {
        threshold: 200,
        event: 'click',
        effect: 'fadeIn',
        container: $('#container'),
        failure_limit: 10,
        skip_invisible: true,
        appear: (elementsLeft: number, settings: JQueryLazyLoad.Options) => {
            console.log(elementsLeft);
        }
    };
    $('.lazyload').lazyload(options);

    // event on load
    $('.lazyload').on('load', () => {
        $("img.lazy").trigger("click");
    });
});
