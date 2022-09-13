import { Options } from "jquery-loading-overlay";

// Basic usage
$('#target').loadingOverlay();

$('#target').loadingOverlay('remove');

// With options
const options: Options = {
  loadingClass: 'loading',
  overlayClass: 'loading-overlay',
  spinnerClass: 'loading-spinner',
  iconClass: 'loading-icon',
  textClass: 'loading-text',
  loadingText: 'loading'
};

$('#target').loadingOverlay(options);

$('#target').loadingOverlay('remove', {
  loadingClass: 'loading',
  overlayClass: 'loading-overlay'
});
