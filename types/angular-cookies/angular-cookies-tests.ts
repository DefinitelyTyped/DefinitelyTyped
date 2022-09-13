import * as angular from 'angular';
import * as ngCookiesModule from 'angular-cookies';

angular.module('angular-cookies-tests', [ngCookiesModule])
    .config(($cookiesProvider: angular.cookies.ICookiesProvider) => {
        $cookiesProvider.defaults = {
            path: '/',
            domain: 'www.example.com',
            expires: 'Wed, 22 Jul 2020 00:30:00 BST',
            secure: true,
            samesite: 'strict'
        };
    })
    .config(($cookiesProvider: angular.cookies.ICookiesProvider) => {
        // expires can also be specified as a Date
        $cookiesProvider.defaults = {
            expires: new Date()
        };
    })
    .config(($cookiesProvider: angular.cookies.ICookiesProvider) => {
        // all defaults are optional
        $cookiesProvider.defaults = {
            path: undefined,
            domain: undefined,
            expires: undefined,
            secure: undefined,
            samesite: undefined
        };
    })
    .service('authService', class AuthService {
        private readonly $cookies: angular.cookies.ICookiesService;

        constructor($cookies: angular.cookies.ICookiesService) {
            this.$cookies = $cookies;
        }

        getToken(): string {
            return this.$cookies.get('authToken');
        }

        getSessionData(): any {
            return this.$cookies.getObject('session');
        }

        getConsentSettings(): ConsentSettings {
            return this.$cookies.getObject('consent');
        }

        getAllStoredData(): any {
            return this.$cookies.getAll();
        }

        setToken(token: string): void {
            this.$cookies.put('authToken', token);
        }

        setSessionToken(token: string): void {
            this.$cookies.put('sessionToken', token, {expires: undefined});
        }

        setSessionData(data: any): void {
            this.$cookies.putObject('session', data);
        }

        allowTrackingOnly(): void {
            const consent: ConsentSettings = {tracking: true, spam: false};
            this.$cookies.putObject('consent', consent, {path: '/public'});
        }

        logOut(): void {
            this.$cookies.remove('authToken');
        }

        clearSession(): void {
            this.$cookies.remove('session', {secure: true});
        }
    });

interface ConsentSettings {
    tracking: boolean;
    spam: boolean;
}
