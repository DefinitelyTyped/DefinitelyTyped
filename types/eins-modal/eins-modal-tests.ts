import EinsModal from 'eins-modal';

EinsModal.open('myModal');
EinsModal.isOpen('myModal');
EinsModal.close('myModal');

window.einsModal.open('myModal');
window.einsModal.isOpen('myModal');
window.einsModal.close('myModal');

const modalElement = document.getElementById('myModal');

if (modalElement && modalElement.modal) {
    modalElement.modal('show');
    modalElement.modal('hide');
    modalElement.modal('toggle');
    modalElement.modal('toggle');
    modalElement.modal('show', {openDuration: 200, openTransition: 'bounceDownIn'});
}
