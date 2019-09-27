angular
    .module('toastr-tests', ['toastr'])
    .config(function(toastrConfig: angular.toastr.IToastrConfig) {
        let toastContainerConfig: angular.toastr.IToastContainerConfig = {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        },
            toastConfig: angular.toastr.IToastConfig = {
            allowHtml: false,
            closeButton: false,
            closeHtml: '<button>&times;</button>',
            extendedTimeOut: 1000,
            extraData: {
                txt: "sample text",
                action: () => {/* Do action */},
            },
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            messageClass: 'toast-message',
            onHidden: null,
            onShown: null,
            onTap: null,
            progressBar: false,
            tapToDismiss: true,
            templates: {
                toast: 'directives/toast/toast.html',
                progressbar: 'directives/progressbar/progressbar.html'
            },
            timeOut: 5000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        };

        angular.extend(toastrConfig, toastContainerConfig, toastConfig);
    })
    .controller('ToastrController', function(toastr: angular.toastr.IToastrService) {
        toastr.info('<input type="checkbox" checked> Success!', 'With HTML', {
            allowHtml: true
        });

        toastr.success('What a nice button', 'Button spree', {
            closeButton: true
        });

        toastr.info('What a nice apple button', 'Button spree', {
            closeButton: true,
            closeHtml: '<button></button>'
        });

        toastr.info('I am totally custom!', 'Happy toast', {
            iconClass: 'toast-pink'
        });
    });