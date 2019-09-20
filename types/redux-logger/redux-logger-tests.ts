import logger, { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

const loggerSimple = createLogger();

const loggerSimpleOpts = createLogger({
    duration: true,
    timestamp: true,
    logger: console,
    logErrors: true,
    predicate: (getState, action) => true,
    stateTransformer: state => state,
    actionTransformer: action => action,
    errorTransformer: error => error,
    diff: true,
    diffPredicate: (getState, action) => true
});

const loggerCollapsedBool = createLogger({
    collapsed: true
});

const loggerCollapsedPredicate = createLogger({
    collapsed: (getAction, action) => true
});

const loggerCollapsedLogEntryPredicate = createLogger({
    collapsed: (getAction, action, logEntry) =>
        logEntry !== undefined && !logEntry.error
});

const loggerColorsOverallBoolean = createLogger({
    colors: false
});

const loggerColorsBoolean = createLogger({
    colors: {
        title: false,
        prevState: false,
        action: false,
        nextState: false,
        error: false
    }
});

const loggerColorsFunction = createLogger({
    colors: {
        title: action => '#000',
        prevState: state => '#000',
        action: action => '#000',
        nextState: state => '#000',
        error: (error, prevState) => '#000'
    }
});

const loggerLevelString = createLogger({
    level: 'log'
});

const loggerLevelFunction = createLogger({
    level: action => 'log'
});

const loggerLevelObjectFunction = createLogger({
    level: {
        prevState: state => 'log',
        action: action => 'log',
        nextState: state => 'log',
        error: (error, prevState) => 'log'
    }
});

const loggerLevelObjectBoolean = createLogger({
    level: {
        prevState: false,
        action: false,
        nextState: false,
        error: false
    }
});

const loggerLevelObjectString = createLogger({
    level: {
        prevState: 'log',
        action: 'log',
        nextState: 'log',
        error: 'log'
    }
});

const createStoreWithMiddleware = applyMiddleware(
    logger,
    loggerSimpleOpts,
    loggerCollapsedBool,
    loggerCollapsedPredicate,
    loggerCollapsedLogEntryPredicate,
    loggerColorsBoolean,
    loggerColorsFunction,
    loggerLevelString,
    loggerLevelFunction,
    loggerLevelObjectFunction,
    loggerLevelObjectBoolean,
    loggerLevelObjectString
)(createStore);
