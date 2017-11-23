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
