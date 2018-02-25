$(document).ready(() => {
    // basic usage
    $('#foo').appear(() => {
        $('#text').text('Appeared');
    });

    // with options
    const options: JQueryAppear.Options = {
        data: 'test',
        one: false,
        accX: 50,
        accY: 100
    };
    $('#foo').appear((element?: HTMLElement, data?: any) => {
        $(element).text(data);
    }, options);
});
