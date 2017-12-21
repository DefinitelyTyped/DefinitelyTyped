class Confirm  {
    private title_: string;
    private conTent_: string;
    constructor(title: string, content: string) {
        this.title_ = title;
        this.conTent_ = content;
    }

     confirm() {
        $.confirm({
            title: 'Confirm!',
            content: 'Simple confirm!',
            buttons: {
                confirm: () => {
                    $.alert('Confirmed!');
                },
                cancel: (cancel: string) => {
                    $.alert('Canceled! ' + cancel);
                },
                somethingElse: {
                    text: 'Something else',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: () => {
                        alert('Something else?');
                    }
                }
            }
        });
    }

     alert() {
        $.alert({
            title: 'Alert!',
            content: 'Simple alert!',
        });
    }

     globalSettings() {
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
            action: () => {
            }
        },
        close: {
            action: () => {
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
    onContentReady: () => {},
    onOpenBefore: () => {},
    onOpen: () => {},
    onClose: () => {},
    onDestroy: () => {},
    onAction: () => {}
};
    }

      api() {
      const jc = $.confirm({
    title: 'awesome',
    onContentReady: () => {
        jc.setTitle();
    }
});
    }

     confirm_84() {
      $.confirm({
  closeIcon: true,
  buttons: {
      buttonA: {
          text: 'button a',
          action:  (buttonA: string) => {
              return false; // prevent the modal from closing
          }
      },
      resetButton:  (resetButton: string) => {
      }
  }
});
    }
}

let firstName = 'Pierre';
let lastName = 'Yotti';
let type = new Confirm(firstName, lastName);
