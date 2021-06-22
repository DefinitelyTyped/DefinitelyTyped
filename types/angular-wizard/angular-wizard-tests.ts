/// <reference types="jasmine" />

// test file taken from https://github.com/mgonto/angular-wizard

import * as ng from "angular";
import * as angular from "angular";

interface IWizardScope extends ng.IScope {
    editMode: boolean;
    referenceCurrentStep: string;
    stepValidation: () => void;
    finishedWizard: () => void;
    enterValidation: () => void;
    exitValidation: boolean;
    dynamicStepDisabled: string;
}

describe('AngularWizard', function () {
    var $compile: ng.ICompileService,
        $q: ng.IQService,
        $rootScope: ng.IRootScopeService,
        $timeout: ng.ITimeoutService,
        WizardHandler: angular.mgoAngularWizard.WizardHandler;

    beforeEach(() => angular.module('mgo-angular-wizard'));

    /**
     * Create the generic view with wizard to test
     * @param  {Scope} scope         A scope to bind to
     * @return {[DOM element]}       A DOM element compiled
     */
    function createGenericView(scope: IWizardScope) {
        scope.referenceCurrentStep = null;
        scope.editMode = false;
        var element = angular.element('<wizard on-finish="finishedWizard()" current-step="referenceCurrentStep" ng-init="msg = 14" edit-mode="editMode">'
            + '    <wz-step wz-title="Starting" canenter="enterValidation" description="Step description">'
            + '        <h1>This is the first step</h1>'
            + '        <p>Here you can use whatever you want. You can use other directives, binding, etc.</p>'
            + '        <input type="submit" wz-next value="Continue" />'
            + '    </wz-step>'
            + '    <wz-step wz-title="Dynamic" wz-disabled="{{dynamicStepDisabled == \'Y\'}}">'
            + '        <h1>Dynamic {{dynamicStepDisabled}}</h1>'
            + '        <p>You have continued here!</p>'
            + '        <input type="submit" wz-next value="Go on" />'
            + '    </wz-step>'
            + '    <wz-step wz-title="Continuing" canexit="stepValidation">'
            + '        <h1>Continuing</h1>'
            + '        <p>You have continued here!</p>'
            + '        <input type="submit" wz-next value="Go on" />'
            + '    </wz-step>'
            + '    <wz-step wz-title="More steps" canenter="enterValidation">'
            + '        <p>Even more steps!!</p>'
            + '        <input type="submit" wz-next value="Finish now" />'
            + '    </wz-step>'
            + '</wizard>');
        var elementCompiled = $compile(element)(scope);
        $rootScope.$digest();
        return elementCompiled;
    }

    it("should correctly create the wizard", function () {
        var scope = <IWizardScope>$rootScope.$new();
        var view = createGenericView(scope);
        expect(WizardHandler).toBeTruthy();
        expect(view.find('section').length).toEqual(4);
        // expect the correct step to be desirable one
        expect(scope.referenceCurrentStep).toEqual('Starting');
    });
    it("should go to the next step", function () {
        var scope = <IWizardScope>$rootScope.$new();
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Dynamic');
    });
    it("should render only those steps which are enabled", function () {
        var scope =<IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
    });
    it("should enable or disable dynamic steps based on conditions", function () {
        var scope = <IWizardScope>$rootScope.$new();
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        scope.dynamicStepDisabled = 'Y';
        $rootScope.$digest();
        WizardHandler.wizard().goTo(2);
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('More steps');
    });
    it("should return to a previous step", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
        WizardHandler.wizard().previous();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Starting');
    });
    it("should go to a step specified by name", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().goTo('More steps');
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('More steps');
    });
    it("should go to a step specified by index", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().goTo(2);
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('More steps');
    });
    it("should go to next step becasue callback is truthy", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next(function () {
            return true
        });
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
    });
    it("should NOT go to next step because callback is falsey", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next(function () {
            return false
        });
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Starting');
    });
    it("should go to next step because CANEXIT is UNDEFINED", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
    });
    it("should go to next step because CANEXIT is TRUE", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        scope.stepValidation = function () {
            return true;
        };
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('More steps');
    });
    it("should NOT go to next step because CANEXIT is FALSE", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        scope.stepValidation = function () {
            return false;
        };
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
    });
    it("should go to next step because CANENTER is TRUE", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        scope.enterValidation = function () {
            return true;
        };
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('More steps');
    });
    it("should NOT go to next step because CANENTER is FALSE", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        scope.enterValidation = function () {
            return false;
        };
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
    });
    it("should NOT return to a previous step. Although CANEXIT is false and we are heading to a previous state, the can enter validation is false", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        scope.stepValidation = function () {
            return false;
        };
        scope.enterValidation = function () {
            return false;
        };
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
        WizardHandler.wizard().previous();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
    });
    it("should return to a previous step even though CANEXIT is false", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        scope.stepValidation = function () {
            return false;
        };
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
        WizardHandler.wizard().previous();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Starting');
    });
    it("should go to the next step because the promise that CANENTER returns resolves to true", function (done) {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        scope.enterValidation = function () {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(true);
                done();
            });
            return deferred.promise;
        };
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
        WizardHandler.wizard().next();
        expect(scope.referenceCurrentStep).toEqual('More steps');
    });
    it("should go to the next step because CANEXIT is set to true", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        scope.exitValidation = true;
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Continuing');
        WizardHandler.wizard().next();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('More steps');
    });
    it("should finish", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var flag = false;
        scope.finishedWizard = function () { flag = true; };
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().finish();
        expect(flag).toBeTruthy();
        $rootScope.$digest();
    });
    it("should go to first step when reset is called", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        expect(scope.referenceCurrentStep).toEqual('Starting');
        WizardHandler.wizard().goTo(2);
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('More steps');
        WizardHandler.wizard().reset();
        $rootScope.$digest();
        expect(scope.referenceCurrentStep).toEqual('Starting');
    });
    it("step description should be accessible", function () {
        var scope = <IWizardScope>$rootScope.$new();
        scope.dynamicStepDisabled = 'Y';
        var view = createGenericView(scope);
        expect((<any>view.isolateScope()).steps[0].description).toEqual('Step description');
    });
    it("should set edit mode through custom method", () => {
        const scope = <IWizardScope>$rootScope.$new();
        scope.editMode = true;
        createGenericView(scope);
        expect(scope.editMode).toBeTrue();
        WizardHandler.wizard().setEditMode(false);
        $rootScope.$digest();
        expect(scope.editMode).toBeFalse();
    });
});
