$(() => {
    $('#cp1').colorpicker();

    $('#cp2').colorpicker();

    $('#cp3').colorpicker({
        color: '#AA3399',
        format: 'rgb'
    });

    $('#cp4').colorpicker().on('changeColor', (e) => {
        $('body')[0].style.backgroundColor = e.color.toString('rgba');
    });

    $('#cp5').colorpicker({
        color: "transparent",
        format: "hex"
    });

    $('#cp6').colorpicker({
        color: "#88cc33",
        horizontal: true
    });

    $('#cp7').colorpicker({
        color: '#ffaa00',
        container: true,
        inline: true
    });

    $('#cp8').colorpicker({
        colorSelectors: {
            black: '#000000',
            white: '#ffffff',
            red: '#FF0000',
            default: '#777777',
            primary: '#337ab7',
            success: '#5cb85c',
            info: '#5bc0de',
            warning: '#f0ad4e',
            danger: '#d9534f'
        }
    });

    $('#cp9').colorpicker({
        customClass: 'colorpicker-2x',
        sliders: {
            saturation: {
                maxLeft: 200,
                maxTop: 200
            },
            hue: {
                maxTop: 200
            },
            alpha: {
                maxTop: 200
            }
        }
    });

    $('.disable-button').click((e) => {
        e.preventDefault();

        $('#cp10').colorpicker('disable');
    });

    $('.enable-button').click((e) => {
        e.preventDefault();

        $('#cp10').colorpicker('enable');
    });

    $('#cp10').colorpicker();


    $('#cp11').colorpicker();
});
