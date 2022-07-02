import RequestState, { FAILED, IN_PROGRESS, NOT_REQUESTED, SUCCEEDED } from '@eseb/request-state';

const failed1 = new RequestState('FAILED');
const failed2 = FAILED;
const inProgress1 = new RequestState('IN_PROGRESS');
const inProgress2 = IN_PROGRESS;
const notRequested1 = new RequestState('NOT_REQUESTED');
const notRequested2 = NOT_REQUESTED;
const succeeded1 = new RequestState('SUCCEEDED');
const succeeded2 = SUCCEEDED;

const requestState = new RequestState();
const isNotRequested = requestState.isNotRequested();
const isInProgress = requestState.isInProgress();
const isSucceeded = requestState.isSucceeded();
const isFailed = requestState.isFailed();
const shouldBeRequested = requestState.shouldBeRequested();
const shouldShowAsLoading = requestState.shouldShowAsLoading();
const { attachment, state } = requestState;

const missingRequest = FAILED.withAttachment(404);
const complexRequest = FAILED.withAttachment({ errorMessage: 'something has gone wrong!' });
