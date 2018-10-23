/**
 * Created by itboy on 11/22/2015.
 */
///<reference types="jquery"/>


    //Run test : LobiboxTest.test() after window load event
class LobiboxTest {
    static test() {
        // extending default parameters
        Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
            //override any options from default options
            delay: false,
            soundPath: '/libraries/lobibox/sounds/',
            size: 'mini'
        });

// notify
        Lobibox.notify("error", {msg: "Hello world"});
        Lobibox.notify("success", {msg: "Hello world"});
        Lobibox.notify("warning", {msg: "Hello world"});
        Lobibox.notify("info", {msg: "Hello world"});

// alert
        Lobibox.alert("error", {msg: "Hello world"});
        Lobibox.alert("success", {msg: "Hello world"});
        Lobibox.alert("warning", {msg: "Hello world"});
        Lobibox.alert("info", {msg: "Hello world"});

//alert with more options
        Lobibox.alert('error', {
            msg: 'This is an error message',
            //buttons: ['ok', 'cancel', 'yes', 'no'],
            //Or more powerfull way
            buttons: {
                ok: {
                    'class': 'btn btn-info',
                    closeOnClick: false
                },
                cancel: {
                    'class': 'btn btn-danger',
                    closeOnClick: false
                },
                yes: {
                    'class': 'btn btn-success',
                    closeOnClick: false
                },
                no: {
                    'class': 'btn btn-warning',
                    closeOnClick: false
                },
                custom: {
                    'class': 'btn btn-default',
                    text: 'Custom'
                }
            },
            callback: function (lobibox:any, type:string):any {
                let btnType:string = "";
                if (type === 'no') {
                    btnType = 'warning';
                } else if (type === 'yes') {
                    btnType = 'success';
                } else if (type === 'ok') {
                    btnType = 'info';
                } else if (type === 'cancel') {
                    btnType = 'error';
                }
                Lobibox.notify(btnType, {
                    size: 'mini',
                    msg: 'This is ' + btnType + ' message'
                });
            }
        });

// confirm
        Lobibox.confirm({
            msg: "Are you ok",
        });

// prompt
        Lobibox.prompt("text", {
            title: 'Please enter username',
            //Attributes of <input>
            attrs: {
                placeholder: "Username"
            }
        });

// progress
        Lobibox.progress({
            title: 'Please wait',
            label: 'Uploading files...',
            onShow: function ($this:any):void {
                var i = 0;
                var inter = setInterval(function ():void {
                    window.console.log(i);
                    if (i > 100) {
                        clearInterval(inter);
                    }
                    i = i + 0.1;
                    $this.setProgress(i);
                }, 10);
            }
        });

// window
        Lobibox.window({
            title: 'Window title',
            //Available types: string, jquery object, function
            content: function ():any {
                return $('.container');
            },
            url: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.css',
            autoload: false,
            loadMethod: 'GET',
            //Load parameters
            params: {
                param1: 'Lorem',
                param2: 'Ipsum'
            },
            buttons: {
                load: {
                    text: 'Load from url'
                },
                close: {
                    text: 'Close',
                    closeOnClick: true
                }
            },
            callback: function ($this:any, type:string, ev:any):void {
                if (type === 'load') {
                    $this.load(function ():any {
                        //Do something when content is loaded
                    });
                }
            }
        });
    }
}

window.onload = (): void => {
  LobiboxTest.test();
};
