// Type definitions for Java
// Project: https://www.java.com/js/deployJava.txt
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * @summary Applet Status.
 * {@link http://docs.oracle.com/javase/8/docs/technotes/guides/deploy/applet_dev_guide.html#JSDPG719|Applet Status And Event Handlers}
 */
declare enum AppletStatus {
    /**
     * @summary Applet is loading.
     */
    Loading = 1,
        
    /**
     * @summary Applet has loaded completely and is ready to receive JavaScript calls.
     */
    Ready = 2,
        
    /**
     * @summary Error while loading applet.
     */
    Error = 3
}

/**
 * @summary Interface for Java object.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface Java {
    /**
     * Handler if the applet status is ERROR. An error has occurred while loading the applet.
     */
    onError?: Function;
    
    /**
     * Handler if the applet status is READY. Applet has finished loading and is ready to receive JavaScript calls.
     */
    onLoad?: Function;
    
    /**
     * Handler if the applet has stopped.
     */
    onStop?: Function;
    
    /**
     * @summary Applet Status.
     */
    status?: AppletStatus;
}