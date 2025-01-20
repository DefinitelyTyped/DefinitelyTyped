export interface Action {
    type: string;
}

export interface ActionCreator<T> {
    (...data: any[]): Action & T;
}

export interface OptionsActionCreator<T> {
    (data: T): Action & T;
}

/**
 * Creates an action creator which will create an action object with the given type.
 */
export declare function actionCreator<T>(type: string, ...props: string[]): ActionCreator<T>;
/**
 * Creates an action creator which will create an action object with the given type.
 */
export declare function actionCreator<T>(type: string, props: string[]): ActionCreator<T>;

/**
 * Creates an action creator which takes a single object argument and adds its properties to the action object.
 */
export declare function optionsActionCreator<T>(type: string, ...props: string[]): OptionsActionCreator<T>;
/**
 * Creates an action creator which takes a single object argument and adds its properties to the action object.
 */
export declare function optionsActionCreator<T>(type: string, props: string[]): OptionsActionCreator<T>;
