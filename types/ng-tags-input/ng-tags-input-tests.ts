import * as angular from 'angular';
angular.module('testModule', ['ngTagsInput'])
    .config((tagsInputConfigProvider: angular.ngTagsInput.ITagsInputConfigurationProvider) => {
        let options = <angular.ngTagsInput.ITagsInputParams>{
            placeholder: true
        };
        tagsInputConfigProvider.setActiveInterpolation('tagsInput', options);
    });