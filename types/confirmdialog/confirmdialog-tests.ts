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
                        let name = this.$content.find('.name').val();
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
                // bind to events
                var jc = this;
                this.$content.find('form').on('submit', function(e) {
                    // if the user submits the form by pressing enter in the field.
                    e.preventDefault();
                    jc.$$formSubmit.trigger('click'); // reference the button and click it
                });
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
                hello: function(helloButton) {
                    // shorthand method to define a button
                    // the button key will be used as button name
                },
                hey: function(heyButton) {
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
                    action: function(heyThereButton) {
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
                    action: function(buttonA) {
                        this.buttons.resetButton.setText('reset button!!!');
                        this.buttons.resetButton.disable();
                        this.buttons.resetButton.enable();
                        this.buttons.resetButton.hide();
                        this.buttons.resetButton.show();
                        this.buttons.resetButton.addClass('btn-red');
                        this.buttons.resetButton.removeClass('btn-red');
                        // or
                        this.$$resetButton // button's jquery element reference, go crazy
                        this.buttons.buttonA == buttonA // both are the same.
                        return false; // prevent the modal from closing
                    }
                },
                resetButton: function(resetButton) {}
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

    public ajaxLoading() {
        $.confirm({
            title: 'Title',
            content: 'url:text.txt',
            onContentReady: function() {
                var self = this;
                this.setContentPrepend('<div>Prepended text</div>');
                setTimeout(function() {
                    self.setContentAppend('<div>Appended text after 2 seconds</div>');
                }, 2000);
            },
            columnClass: 'medium',
        });

        $.confirm({
            content: function() {
                var self = this;
                return $.ajax({
                    url: 'bower.json',
                    dataType: 'json',
                    method: 'get'
                }).done(function(response) {
                    self.setContent('Description: ' + response.description);
                    self.setContentAppend('<br>Version: ' + response.version);
                    self.setTitle(response.name);
                }).fail(function() {
                    self.setContent('Something went wrong.');
                });
            }
        });

        $.confirm({
            content: 'url:text.txt',
            contentLoaded: function(data, status, xhr) {
                // data is already set in content
                this.setContentAppend('<br>Status: ' + status);
            }
        });

        $.confirm({
            content: function() {
                var self = this;
                self.setContent('Checking callback flow');
                return $.ajax({
                    url: 'bower.json',
                    dataType: 'json',
                    method: 'get'
                }).done(function(response) {
                    self.setContentAppend('<div>Done!</div>');
                }).fail(function() {
                    self.setContentAppend('<div>Fail!</div>');
                }).always(function() {
                    self.setContentAppend('<div>Always!</div>');
                });
            },
            contentLoaded: function(data, status, xhr) {
                self.setContentAppend('<div>Content loaded!</div>');
            },
            onContentReady: function() {
                this.setContentAppend('<div>Content ready!</div>');
            }
        });

    }

    public autoClose() {
        $.confirm({
            title: 'Delete user?',
            content: 'This dialog will automatically trigger \'cancel\' in 6 seconds if you don\'t respond.',
            autoClose: 'cancelAction|8000',
            buttons: {
                deleteUser: {
                    text: 'delete user',
                    action: function() {
                        $.alert('Deleted the user!');
                    }
                },
                cancelAction: function() {
                    $.alert('action is canceled');
                }
            }
        });
        $.confirm({
            title: 'Logout?',
            content: 'Your time is out, you will be automatically logged out in 10 seconds.',
            autoClose: 'logoutUser|10000',
            buttons: {
                logoutUser: {
                    text: 'logout myself',
                    action: function() {
                        $.alert('The user was logged out');
                    }
                },
                cancel: function() {
                    $.alert('canceled');
                }
            }
        });
    }

    public backgroundDismisse() {
        $.confirm({
            backgroundDismiss: true, // this will just close the modal
        });
        $.confirm({
            backgroundDismiss: function() {
                return false; // modal wont close.
            },
        });
        $.confirm({
            backgroundDismiss: function() {
                return 'buttonName'; // the button will handle it
            },
        });
        $.confirm({
            backgroundDismiss: 'buttonName',
            content: 'in here the backgroundDismiss action is handled by buttonName' +
                '<div class="checkbox"><label><input type="checkbox" id="enableCheckbox"> Enable backgroundDismiss</label></div>',
            buttons: {
                buttonName: function() {
                    var $checkbox = this.$content.find('#enableCheckbox');
                    return $checkbox.prop('checked');
                },
                close: function() {}
            }
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

    public callBack(){
      $.confirm({
    title: false,
    content: 'url:callback.html',
    onContentReady: function () {
        // when content is fetched & rendered in DOM
        alert('onContentReady');
        var self = this;
        this.buttons.ok.disable();
        this.$content.find('.btn').click(function(){
            self.$content.find('input').val('Chuck norris');
            self.buttons.ok.enable();
        });
    },
    contentLoaded: function(data, status, xhr){
        // when content is fetched
        alert('contentLoaded: ' + status);
    },
    onOpenBefore: function () {
        // before the modal is displayed.
        alert('onOpenBefore');
    },
    onOpen: function () {
        // after the modal is displayed.
        alert('onOpen');
    },
    onClose: function () {
        // before the modal is hidden.
        alert('onClose');
    },
    onDestroy: function () {
        // when the modal is removed from DOM
        alert('onDestroy');
    },
    onAction: function (btnName) {
        // when a button is clicked, with the button name
        alert('onAction: ' + btnName);
    },
    buttons: {
        ok: function(){
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
    contentLoaded: function(data, status, xhr){
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


    public confirm_84() {
      $.confirm({
  closeIcon: true,
  buttons: {
      buttonA: {
          text: 'button a',
          action: function (buttonA: HTMLElement) {
              this.buttons.resetButton.setText('reset button!!!');
              this.buttons.resetButton.disable();
              this.buttons.resetButton.enable();
              this.buttons.resetButton.hide();
              this.buttons.resetButton.show();
              this.buttons.resetButton.addClass('btn-red');
              this.buttons.resetButton.removeClass('btn-red');
              // or
              this.$$resetButton // button's jquery element reference, go crazy
              this.buttons.buttonA == buttonA // both are the same.
              return false; // prevent the modal from closing
          }
      },
      resetButton: function (resetButton: string) {
      }
  }
});
    }

}


var firstName: string = 'Pierre';
var lastName: string = 'Yotti';
var type = new Confirm(firstName, lastName);
