declare namespace pc {

    /**
    * @name pc.PostEffect
    * @class Base class for all post effects. Post effects take a a render target as input
    * apply effects to it and then render the result to an output render target or the screen
    * if no output is specified.
    * @description Creates new PostEffect
    * @param {pc.GraphicsDevice} graphicsDevice The graphics device of the application
    */
    class PostEffect {
        constructor(graphicsDevice: pc.GraphicsDevice)

        /**
        * @function
        * @name pc.PostEffect#render
        * @description Render the post effect using the specified inputTarget
        * to the specified outputTarget.
        * @param {pc.RenderTarget} inputTarget The input render target
        * @param {pc.RenderTarget} outputTarget The output render target. If null then this will be the screen.
        * @param {pc.Vec4} rect (Optional) The rect of the current camera. If not specified then it will default to [0,0,1,1]
        */
        render(inputTarget: pc.RenderTarget, outputTarget: pc.RenderTarget, rect: pc.Vec4): void;
    }
}
