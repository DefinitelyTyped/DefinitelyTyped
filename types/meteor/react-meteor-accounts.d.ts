import { Meteor } from 'meteor/meteor';
import * as React from 'react';

/**
 * Hook to get a stateful value of the current user id. Uses `Meteor.userId`, a reactive data source.
 * @see https://docs.meteor.com/api/accounts.html#Meteor-userId
 */
export declare function useUserId(): string | null;
export interface WithUserIdProps {
    userId: string | null;
}
/**
 * HOC to forward a stateful value of the current user id. Uses `Meteor.userId`, a reactive data source.
 * @see https://docs.meteor.com/api/accounts.html#Meteor-userId
 */
export declare function withUserId<P>(
    Component: React.ComponentType<P>,
): React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Omit<P, 'userId'> & Partial<WithUserIdProps>> & React.RefAttributes<unknown>
>;
/**
 * Hook to get a stateful value of the current user record. Uses `Meteor.user`, a reactive data source.
 * @see https://docs.meteor.com/api/accounts.html#Meteor-user
 */
export declare function useUser(): Meteor.User | null;
export interface WithUserProps {
    user: Meteor.User | null;
}
/**
 * HOC to get a stateful value of the current user record. Uses `Meteor.user`, a reactive data source.
 * @see https://docs.meteor.com/api/accounts.html#Meteor-user
 */
export declare function withUser<P>(
    Component: React.ComponentType<P>,
): React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Omit<P, 'user'> & Partial<WithUserProps>> & React.RefAttributes<unknown>
>;
/**
 * Hook to get a stateful value of whether a login method (e.g. `loginWith<Service>`) is currently in progress. Uses `Meteor.loggingIn`, a reactive data source.
 * @see https://docs.meteor.com/api/accounts.html#Meteor-loggingIn
 */
export declare function useLoggingIn(): boolean;
export interface WithLoggingInProps {
    loggingIn: boolean;
}
/**
 * HOC to forward a stateful value of whether a login method (e.g. `loginWith<Service>`) is currently in progress. Uses `Meteor.loggingIn`, a reactive data source.
 * @see https://docs.meteor.com/api/accounts.html#Meteor-loggingIn
 */
export declare function withLoggingIn<P>(
    Component: React.ComponentType<P>,
): React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Omit<P, 'loggingIn'> & Partial<WithLoggingInProps>> & React.RefAttributes<unknown>
>;
/**
 * Hook to get a stateful value of whether the logout method is currently in progress. Uses `Meteor.loggingOut`, a reactive data source.
 * @see https://docs.meteor.com/api/accounts.html#Meteor-loggingOut
 */
export declare function useLoggingOut(): boolean;
export interface WithLoggingOutProps {
    loggingOut: boolean;
}
/**
 * HOC to forward a stateful value of whether the logout method is currently in progress. Uses `Meteor.loggingOut`, a reactive data source.
 * @see https://docs.meteor.com/api/accounts.html#Meteor-loggingOut
 */
export declare function withLoggingOut<P>(
    Component: React.ComponentType<P>,
): React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Omit<P, 'loggingOut'> & Partial<WithLoggingOutProps>> & React.RefAttributes<unknown>
>;
