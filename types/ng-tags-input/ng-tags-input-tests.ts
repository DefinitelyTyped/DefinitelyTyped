import * as angular from 'angular';
angular.module('testModule', ['ngTagsInput'])
    .config((tagsInputConfigProvider: angular.ngTagsInput.TagsInputConfigurationProvider) => {
        const options: angular.ngTagsInput.TagsInputParams = {
            placeholder: true
        };
        tagsInputConfigProvider.setActiveInterpolation('tagsInput', options);
    });
