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

()=>{
    window.addEventListener('GamepadConnected', (e: GamepadEvent)=>{
        console.log('Gamepad ' + e.gamepad.index + ' connected!');
    }, false);
    window.addEventListener('GamepadDisconnected', (e: GamepadEvent)=>{
        console.log('Gamepad ' + e.gamepad.index + ' disconnected!');
    }, false);
    window.addEventListener('webkitGamepadConnected', (e: GamepadEvent)=>{
        console.log('Gamepad ' + e.gamepad.index + ' connected!');
    }, false);
    window.addEventListener('webkitGamepadDisconnected', (e: GamepadEvent)=>{
        console.log('Gamepad ' + e.gamepad.index + ' disconnected!');
    }, false);    
    window.addEventListener('mozGamepadConnected', (e: GamepadEvent)=>{
        console.log('Gamepad ' + e.gamepad.index + ' connected!');
    }, false);
    window.addEventListener('mozGamepadDisconnected', (e: GamepadEvent)=>{
        console.log('Gamepad ' + e.gamepad.index + ' disconnected!');
    }, false);

    var requestAnimationFrame = window.requestAnimationFrame || window["mozRequestAnimationFrame"];
    var getGamepads = navigator.getGamepads || navigator.webkitGetGamepads;
    if(getGamepads){
        function runAnimation()
        {
            requestAnimationFrame.call(window, runAnimation);

            var gamepads: GamepadList = getGamepads.call(navigator);
            for(var i = 0; i < gamepads.length; i++){
                var pad: Gamepad = gamepads[i];
                if(pad){
                    for (var k = 0; k < pad.buttons.length; k++)
                    {   
                        var button = pad.buttons[k]; 
                        if(button !== 0){
                            console.log('pad[' + pad.index + ']: ' + 'time=' + pad.timestamp + ' id="' + pad.id + '" button[' + k + '] = ' + button);
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
}();