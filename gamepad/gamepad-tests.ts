/// <reference path="gamepad.d.ts" />


()=>{
    function runAnimation()
    {
        window.requestAnimationFrame(runAnimation);

        var gamepads = navigator.getGamepads();

        for (var i = 0; i < gamepads.length; ++i)
        {
            var pad = gamepads[i];
            // todo; simple demo of displaying pad.axes and pad.buttons
        }
    }

    window.requestAnimationFrame(runAnimation);
};

(()=>{
    var gamepadconnected = (e: Gamepad.GamepadEvent) => {
        console.log('Gamepad ' + e.gamepad.index + ' connected!');
        if(e.gamepad.mapping == 'standard'){
            console.log("The Gamepad's controls have been mapped to the Standard Gamepad layout.");
        }
    };
    var gamepaddisconnected = (e: Gamepad.GamepadEvent) => {
        console.log('Gamepad ' + e.gamepad.index + ' disconnected!');
    };

    window.addEventListener('GamepadConnected', gamepadconnected, false);
    window.addEventListener('GamepadDisconnected', gamepaddisconnected, false);
    window.addEventListener('webkitGamepadConnected', gamepadconnected, false);
    window.addEventListener('webkitGamepadDisconnected', gamepaddisconnected, false);
    window.addEventListener('mozGamepadConnected', gamepadconnected, false);
    window.addEventListener('mozGamepadDisconnected', gamepaddisconnected, false);

    var requestAnimationFrame = window.requestAnimationFrame || (<any>window).mozRequestAnimationFrame;
    var getGamepads = navigator.getGamepads || navigator.webkitGetGamepads;
    if(getGamepads){
        function runAnimation()
        {
            requestAnimationFrame.call(window, runAnimation);

            var gamepads: Gamepad.Gamepad[] = getGamepads.call(navigator);
            for(var i = 0; i < gamepads.length; i++){
                var pad: Gamepad.Gamepad = gamepads[i];
                if(pad && pad.connected){
                    for (var k = 0; k < pad.buttons.length; k++)
                    {   
                        var button: Gamepad.GamepadButton = pad.buttons[k];
                        if(button.pressed){
                            console.log('pad[' + pad.index + ']: ' + 'time=' + pad.timestamp + ' id="' + pad.id + '" button[' + k + '] = ' + button.value);
                        }
                    }
                    for (var k = 0; k < pad.axes.length; k++)
                    {   
                        var axis = pad.axes[k]; 
                        if(Math.abs(axis) > 0.1){
                            console.log('pad[' + pad.index + ']: ' + 'time=' + pad.timestamp + ' id="' + pad.id + '" axis[' + k + '] = ' + axis);
                        }
                    }
                }
            }
        }

        runAnimation();
    }
})();