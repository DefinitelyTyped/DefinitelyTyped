// HTMLAppletElement was removed in TS 4.4's DOM APIs
interface HTMLAppletElement extends HTMLElement {}

/**
 * @summary Java applet Status. More details: {@link http://docs.oracle.com/javase/8/docs/technotes/guides/deploy/applet_dev_guide.html#JSDPG719|Applet Status And Event Handlers}
 */
declare enum JavaAppletStatus {
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
    Error = 3,
}

/**
 * @summary Interface for Java applet object.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface JavaApplet extends HTMLAppletElement {
    /**
     * @summary Handler if the applet status is {@link JavaAppletStatus#Error}. An error has occurred while loading the applet.
     */
    onError?: Function | undefined;

    /**
     * @summary Handler if the applet status is {@link JavaAppletStatus#Ready}. Applet has finished loading and is ready to receive JavaScript calls.
     */
    onLoad?: Function | undefined;

    /**
     * @summary Handler if the applet has stopped.
     */
    onStop?: Function | undefined;

    /**
     * @summary Java applet Status.
     */
    status?: JavaAppletStatus | undefined;
}
