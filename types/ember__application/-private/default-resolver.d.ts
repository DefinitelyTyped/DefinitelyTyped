import Resolver from '@ember/engine/-private/resolver';
import Application from '@ember/application';

/**
 * The DefaultResolver defines the default lookup rules to resolve
 * container lookups before consulting the container for registered
 * items:
 */
export default class DefaultResolver extends Resolver {
    /**
     * This method is called via the container's resolver method.
     * It parses the provided `fullName` and then looks up and
     * returns the appropriate template or class.
     */
    resolve(fullName: string): {};
    /**
     * This will be set to the Application instance when it is
     * created.
     */
    namespace: Application;
}
