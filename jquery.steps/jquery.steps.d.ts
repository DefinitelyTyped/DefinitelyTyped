/// <reference path="jquery.d.ts" />
interface Settings {
    headerTag?: string;
    bodyTag?: string;
    contentContainerTag?: string;
    actionContainerTag?: string;
    stepsContainerTag?: string;
    cssClass?: string;
    stepsOrientation?: string;

    //Templates
    titleTemplate?: string;
    loadingTemplate?: string;

    //Behaviour 
    autoFocus?: boolean;
    enableAllSteps?: boolean;
    enableKeyNavigation?: boolean;
    enablePagination?: boolean;
    suppressPaginationOnFocus?: boolean;
    enableContentCache?: boolean;
    enableCancelButton?: boolean;
    enableFinishButton?: boolean;
    showFinishButtonAlways?: boolean;
    forceMoveForward?: boolean;
    saveState?: boolean;
    startIndex?: number;

    //TransactionEffect
    transitionEffect?: string;
    transitionEffectSpeed?: number;

    //Events
    onStepChanging?: any;
    onStepChanged?: any;
    onCanceled?: any;
    onFinishing?: any;
    onFinished?: any;

    //Labels
    labels?: Labels;

}

interface Labels {
    cancel?: string;
    current?: string;
    paginatination?: string;
    finish?: string;
    next?: string;
    previous?: string;
    loading?: string;
}

interface State  {
    currentIndex?: number;
    currentStep?: number;
    stepCount?: number;
    transitionElement?: any;
}
interface Step {    
    title?: string;
    content?: string;
    contentMode?: string;
    contentURL?: string;
}

interface Steps {   
    (): JQuery;
    (settings: Settings): JQuery;
    (methodName: string, ...params: any[]): JQuery; 

}

interface JQuery {
    steps: Steps;
}
