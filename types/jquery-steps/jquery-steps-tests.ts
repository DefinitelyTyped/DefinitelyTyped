var labels: JQuerySteps.LabelSettings = {
    cancel: 'Cancel',
    current: 'Current:',
    pagination: 'Paging',
    finish: 'Done',
    next: 'Next >',
    previous: '< Previous',
    loading: 'Loading...'
}

var onStepChangingFunc: JQuerySteps.FunctionOnStepChanging = (event, currentIndex, newIndex): boolean => true;

var onStepChangedFunc: JQuerySteps.FunctionOnStepChanged = (event, currentIndex, priorIndex) => {};

var onCancelledFunc: JQuerySteps.FunctionOnCancelled = (event) => {};

var onFinishingFunc: JQuerySteps.FunctionOnFinishing= (event, currentIndex): boolean => true;

var onFinishedFunc: JQuerySteps.FunctionOnFinished = (event, currentIndex) => {};

var onInitFunc: JQuerySteps.FunctionOnInit = (event, currentIndex) => {};

var onContentLoadedFunc: JQuerySteps.FunctionOnContentLoaded = (event, currentIndex) => {};

var settings: JQuerySteps.Settings = {
    headerTag: 'h3',
    bodyTag: 'section',
    contentContainerTag: 'div',
    actionContainerTag: 'div',
    stepsContainerTag: 'div',
    cssClass: 'wizard',
    stepsOrientation: 'vertical',
    titleTemplate: '#title#',
    loadingTemplate: '<span class="spinner"></span> #text#',
    autoFocus: true,
    enableAllSteps: true,
    enableKeyNavigation: false,
    enablePagination: false,
    suppressPaginationOnFocus: false,
    enableContentCache: false,
    enableCancelButton: true,
    enableFinishButton: false,
    showFinishButtonAlways: true,
    forceMoveForward: true,
    saveState: true,
    startIndex: 1,
    transitionEffect: 'slideLeft',
    transitionEffectSpeed: 400,
    labels: labels,
    onCanceled: onCancelledFunc,
    onContentLoaded: onContentLoadedFunc,
    onFinished: onFinishedFunc,
    onFinishing: onFinishingFunc,
    onInit: onInitFunc,
    onStepChanged: onStepChangedFunc,
    onStepChanging: onStepChangingFunc
}

var wizard = $('.wizard').steps(settings);

var newStep1: JQuerySteps.Step = {
    content: '<div>Content</div>',
    title: 'Step 1'
}

var test1 = wizard.add(newStep1);

var newStep2: JQuerySteps.Step = {
    content: '<div>Content</div>',
    title: 'Step 2',
    contentMode: 'async',
    contentUrl: 'data.xml'
}

var test2 = wizard.insert(0, newStep2);

var test3 = wizard.remove(1);

var test4 = wizard.getCurrentStep();

var test5 = wizard.getCurrentIndex();

var test6 = wizard.getStep(0);

var newStep3: JQuerySteps.Step = {
    content: '<div>Content</div>',
    title: 'Step 1'
}

var test7 = wizard.insert(0, newStep3);

var test8 = wizard.next();

var test9 = wizard.previous();

wizard.finish();

wizard.destroy();
