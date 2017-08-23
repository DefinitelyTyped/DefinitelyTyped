//import $ = require('jquery');

$(() => {
    // examples from http://vadimsva.github.io/waitMe/

    $("#container").waitMe();

    $('#container').waitMe({});

    $("#container").waitMe({ effect: "none", text: "" });

    $('#container').waitMe({
        effect: 'bounce',
        text: '',
        bg: 'rgba(255, 255, 255, 0.7)',
        color: "#000",
        maxSize: '',
        textPos: 'vertical',
        fontSize: '',
        source: ''
    });

    $('#container').waitMe()
        .on('close', (e) => {
                //console.log(e);
        });

    $("asdsa").waitMe("hide");


});