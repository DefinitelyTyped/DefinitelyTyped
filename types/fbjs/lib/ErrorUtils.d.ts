declare namespace ErrorUtils {
    var guard: (callback, name) => any;
    var applyWithGuard: (callback, context, args, onError, name) => any;
}

export = ErrorUtils;
