/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.user.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var report: drupal.User.IPasswordStrengthReport = Drupal.evaluatePasswordStrength(
        'admin',
        {
            username: 'string',
            tooShort: 'string',
            addLowerCase: 'string',
            addUpperCase: 'string',
            addNumbers: 'string',
            addPunctuation: 'string',
            sameAsUsername: 'string',
            week: 'string',
            good: 'string',
            strong: 'string',
            hasWeaknesses: 'string'
        }
    );

    report.strength = 42;
    report.message = 'Fake';
    report.indicatorText = report.message;
    report.indicatorClass = report.message;

}(Drupal));
