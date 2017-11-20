/// <reference types="jquery"/>
/// <reference path="index.d.ts" />
namespace server {
    export interface Iperson {
        title: string,
            content: string,


    }
}

class Confirm implements server.Iperson {
    private title_: string;
    private conTent_: string;
    constructor(public title: string, public content: string) {
        this.title_ = title;
        this.conTent_ = content;
    }


    public confirm() {
        $.confirm({
            title: 'Confirm!',
            content: 'Simple confirm!',
            buttons: {
                confirm: function() {
                    $.alert('Confirmed!');
                },
                cancel: function(cancel: string) {
                    $.alert('Canceled! ' + cancel);
                },
                somethingElse: {
                    text: 'Something else',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: function() {
                        alert('Something else?');
                    }
                }
            }
        });
    }

    public alert() {
        $.alert({
            title: 'Alert!',
            content: 'Simple alert!',
        });
    }

    public confirm1() {
        $.confirm({
            title: 'Prompt!',
            content: '' +
                '<form action="" class="formName">' +
                '<div class="form-group">' +
                '<label>Enter something here</label>' +
                '<input type="text" placeholder="Your name" class="name form-control" required />' +
                '</div>' +
                '</form>',
            buttons: {
                formSubmit: {
                    text: 'Submit',
                    btnClass: 'btn-blue',
                    action: function() {
                        let name;
                        if (!name) {
                            $.alert('provide a valid name');
                            return false;
                        }
                        $.alert('Your name is ' + name);
                    }
                },
                cancel: function() {
                    //close
                },
            },
            onContentReady: function() {

            }
        });

    }

    public dialog() {
        $.dialog({
            title: 'Text content!',
            content: 'Simple modal!'
        });
    }
    public confirm_2() {
        $('.atwitter').val();
        $('.atwitter').text();
        $('a.twitter').confirm({
            content: "...",
        });
        $('a.twitter').confirm({
            buttons: {
                hey: function() {
                    location.href = this.$target.attr('href');
                }
            }
        });
    }

    public confirm_3() {
        $.alert('Content here', 'Title here');
        $.confirm('A message', 'Title is optional');
        $.dialog('Just to let you know');
    }

    public confirm_4() {
        var a = $.confirm({
            lazyOpen: true,
        });
        a.open();
        a.close();
        a.toggle(); // toggle open close.

    }

    public confirm_5() {
        $.confirm({
            buttons: {
                hello: function(helloButton:string) {
                    // shorthand method to define a button
                    // the button key will be used as button name
                },
                hey: function(heyButton:string) {
                    // access the button using jquery
                    this.$$hello.trigger('click'); // click the 'hello' button
                    this.$$hey.prop('disabled', true); // disable the current button using jquery method

                    // jconfirm button methods, all methods listed here
                    this.buttons.hello.setText('Helloooo'); // setText for 'hello' button
                    this.buttons.hey.disable(); // disable with button function provided by jconfirm
                    this.buttons.hey.enable(); // enable with button function provided by jconfirm
                    // the button's instance is passed as the first argument, for quick access
                    heyButton === this.buttons.hey
                },
                heyThere: {
                    text: 'Hey there!', // text for button
                    btnClass: 'btn-blue', // class for the button
                    keys: ['enter', 'a'], // keyboard event for button
                    isHidden: false, // initially not hidden
                    isDisabled: false, // initially not disabled
                    action: function(heyThereButton:string) {
                        // longhand method to define a button
                        // provides more features
                    }
                },
            }
        });

    }

    public confirm_6() {
        $.confirm({
            buttons: {
                hey: function() {
                    // here the button key 'hey' will be used as the text.
                    $.alert('You clicked on "hey".');
                },
                heyThere: {
                    text: 'hey there!', // With spaces and symbols
                    action: function() {
                        $.alert('You clicked on "heyThere"');
                    }
                }
            }
        });
    }

    public confirm_7() {
        $.confirm({
            content: 'Time to use your keyboard, press shift, alert, A or B',
            buttons: {
                specialKey: {
                    text: 'On behalf of shift',
                    keys: ['shift', 'alt'],
                    action: function() {
                        $.alert('Shift or Alt was pressed');
                    }
                },
                alphabet: {
                    text: 'A, B',
                    keys: ['a', 'b'],
                    action: function() {
                        $.alert('A or B was pressed');
                    }
                }
            }
        });
    }

    public confirm_8() {
        $.confirm({
            closeIcon: true, // explicitly show the close icon
            buttons: {
                buttonA: {
                    text: 'button a',
                    action: function(buttonA:HTMLElement) {

                        return false; // prevent the modal from closing
                    }
                },
                resetButton: function(resetButton:HTMLElement) {}
            }
        });
    }


    public confirm_9() {
        $.confirm({
            title: 'Encountered an error!',
            content: 'Something went downhill, this may be serious',
            type: 'red',
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Try again',
                    btnClass: 'btn-red',
                    action: function() {}
                },
                close: function() {}
            }
        });
    }

    public confirm_10() {
        $.confirm({
            icon: 'glyphicon glyphicon-heart',
            title: 'glyphicon'
        });
        $.confirm({
            icon: 'fa fa-warning',
            title: 'font-awesome'
        });
        $.confirm({
            icon: 'fa fa-spinner fa-spin',
            title: 'Working!',
            content: 'Sit back, we are processing your request!'
        });
    }

    public confirm_11() {
        $.confirm({
            closeIcon: true
        });

        $.confirm({
            closeIcon: true,
            closeIconClass: 'fa fa-close'
        });
    }

    public confirm_12() {
        $.confirm({
            closeIcon: function() {
                return false;
            },
            buttons: {
                aRandomButton: function() {
                    $.alert('A random button is called, and i prevent closing the modal');
                    return false; // you shall not pass
                },
                close: function() {}
            }
        });
    }

    public confirm_13() {
        $.confirm({
            columnClass: 'small'
        });
        $.confirm({
            columnClass: 'col-md-4 col-md-offset-4',
        });
        $.confirm({
            columnClass: 'col-md-12'
        });
        $.confirm({
            columnClass: 'col-md-4 col-md-offset-8 col-xs-4 col-xs-offset-8',
            containerFluid: true, // this will add 'container-fluid' instead of 'container'
        });
    }

    public confirm_14() {
        $.confirm({
            boxWidth: '30%',
            useBootstrap: false,
        });
        $.confirm({
            boxWidth: '500px',
            useBootstrap: false,
        });
    }

    public confirm_15() {
        $.confirm({
            bootstrapClasses: {
                container: 'container',
                containerFluid: 'container-fluid',
                row: 'row',
            },
        });

        $.confirm({
            title: 'Hello there',
            content: 'click and hold on the title to drag',
            draggable: true,
        });

        $.confirm({
            title: 'Hello there',
            content: 'Drag this modal out of the window',
            draggable: true,
            dragWindowBorder: false,
        });
        $.confirm({
            title: 'Hello there',
            content: 'try to drag this modal out of the window',
            draggable: true,
            dragWindowGap: 0, // number of px of distance
        });
    }



    public backgroundDismisseAnimation(){
      $.confirm({
    backgroundDismiss: false,
    backgroundDismissAnimation: 'shake',
});
$.confirm({
    backgroundDismiss: false,
    backgroundDismissAnimation: 'glow',
});
    }

    public escapeKey(){
      $.confirm({
    escapeKey: true,
    backgroundDismiss: false,
});
$.confirm({
    escapeKey: 'buttonName',
    buttons: {
        buttonName: function(){
            $.alert('Button name was called');
        },
        close: function(){
        }
    }
});
    }
    public rtlSupport(){
      $.alert({
    title: 'پیغام',
    content: 'این یک متن به زبان شیرین فارسی است',
    rtl: true,
    closeIcon: true,
    buttons: {
        confirm: {
            text: 'تایید',
            btnClass: 'btn-blue',
            action: function () {
                $.alert('تایید شد.');
            }
        },
        cancel: {
            text: 'انصراف',
            action: function () {
            }
        }
    }
});

    }


    public globalSettings(){
      jconfirm.defaults = {
    title: 'Hello',
    titleClass: '',
    type: 'default',
    typeAnimated: true,
    draggable: true,
    dragWindowGap: 15,
    dragWindowBorder: true,
    animateFromElement: true,
    smoothContent: true,
    content: 'Are you sure to continue?',
    buttons: {},
    defaultButtons: {
        ok: {
            action: function () {
            }
        },
        close: {
            action: function () {
            }
        },
    },

    icon: '',
    lazyOpen: false,
    bgOpacity: null,
    theme: 'light',
    animation: 'scale',
    closeAnimation: 'scale',
    animationSpeed: 400,
    animationBounce: 1,
    rtl: false,
    container: 'body',
    containerFluid: false,
    backgroundDismiss: false,
    backgroundDismissAnimation: 'shake',
    autoClose: false,
    closeIcon: null,
    closeIconClass: false,
    watchInterval: 100,
    columnClass: 'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
    boxWidth: '50%',
    scrollToPreviousElement: true,
    scrollToPreviousElementAnimate: true,
    useBootstrap: true,
    offsetTop: 40,
    offsetBottom: 40,
    bootstrapClasses: {
        container: 'container',
        containerFluid: 'container-fluid',
        row: 'row',
    },
    onContentReady: function () {},
    onOpenBefore: function () {},
    onOpen: function () {},
    onClose: function () {},
    onDestroy: function () {},
    onAction: function () {}
};
    }

    public  api(){
      var jc = $.confirm({
    title: 'awesome',
    onContentReady: function(){
        // this === jc
        //jc.setTitle(title: string);
    }
});
    }

}


var firstName: string = 'Pierre';
var lastName: string = 'Yotti';
var type = new Confirm(firstName, lastName);
