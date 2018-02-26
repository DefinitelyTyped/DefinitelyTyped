$(document).ready(() => {
    // basic usage
    $('#foo').appear(() => {
        $('#text').text('Appeared');
    });

    // with options
    const options: JQueryAppear.Options<string> = {
        data: 'test',
        one: false,
        accX: 50,
        accY: 100
    };
    $('#foo').appear<string>((element: HTMLElement, data: string) => {
        $(element).text(data);
    }, options);
});
