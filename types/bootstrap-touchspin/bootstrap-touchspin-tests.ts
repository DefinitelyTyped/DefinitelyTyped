$(function () {
    // Example 1 from http://www.virtuosoft.eu/code/bootstrap-touchspin/
    $("input[name='demo1']").TouchSpin({
        min: 0,
        max: 100,
        step: 0.1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10,
        postfix: '%'
    });

    // Example 2 from http://www.virtuosoft.eu/code/bootstrap-touchspin/
    $("input[name='demo2']").TouchSpin({
        min: -1000000000,
        max: 1000000000,
        stepinterval: 50,
        maxboostedstep: 10000000,
        prefix: '$'
    });

    // Example 3 from http://www.virtuosoft.eu/code/bootstrap-touchspin/
    $("input[name='demo_vertical']").TouchSpin({
        verticalbuttons: true
    });

    // Example 4 from http://www.virtuosoft.eu/code/bootstrap-touchspin/
    $("input[name='demo_vertical2']").TouchSpin({
        verticalbuttons: true,
        verticalupclass: 'glyphicon glyphicon-plus',
        verticaldownclass: 'glyphicon glyphicon-minus'
    });

    // Example 5 from http://www.virtuosoft.eu/code/bootstrap-touchspin/
    $("input[name='demo3']").TouchSpin();

    // Example 6 from http://www.virtuosoft.eu/code/bootstrap-touchspin/
    $("input[name='demo3_21']").TouchSpin({
        initval: 40
    });

    // Example 7 from http://www.virtuosoft.eu/code/bootstrap-touchspin/
    $("input[name='demo4']").TouchSpin({
        postfix: "a button",
        postfix_extraclass: "btn btn-default"
    });

    // Example 8 from http://www.virtuosoft.eu/code/bootstrap-touchspin/
    $("input[name='demo4_2']").TouchSpin({
        postfix: "a button",
        postfix_extraclass: "btn btn-default"
    });

    // Example 9 from http://www.virtuosoft.eu/code/bootstrap-touchspin/
    $("input[name='demo5']").TouchSpin({
        prefix: "pre",
        postfix: "post"
    });

    // Example 10 from http://www.virtuosoft.eu/code/bootstrap-touchspin/
    $("input[name='demo6']").TouchSpin({
        buttondown_class: "btn btn-link",
        buttonup_class: "btn btn-link"
    });
});