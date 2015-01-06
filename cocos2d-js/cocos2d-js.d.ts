// Type definitions for Cocos2d-JS-v3.2
// Project: http://cocos2d-x.org/
// Definitions by: Johnson Zhong <http://zhongzf.cnblogs.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module cc {
        /**
        * 
								the device accelerometer reports values for each axis in units of g-force
								
							
        */
        export class Acceleration  {
            /**
            * the device accelerometer reports values for each axis in units of g-force
            */
            constructor(x: number, y: number, z: number, timestamp: number);
        }
}
declare module cc {
        /**
        * 
								Base class for cc.Action objects.
								
							
        */
        export class Action extends cc.Class {
            /**
            * Base class for cc.Action objects.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * to copy object with deep copy.
            */
            copy();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * get the original target.
            */
            getOriginalTarget();
            /**
            * get tag number.
            */
            getTag();
            /**
            * get the target.
            */
            getTarget();
            /**
            * return true if the action has finished.
            */
            isDone();
            /**
            * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release.
            */
            release();
            /**
            * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release.
            */
            retain();
            /**
            * Set the original target, since target can be nil.
            */
            setOriginalTarget(originalTarget: Node);
            /**
            * set tag number.
            */
            setTag(tag: number);
            /**
            * The action will modify the target properties.
            */
            setTarget(target: Node);
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
            /**
            * called every frame with it&#39;s delta time.
            */
            step(dt: number);
            /**
            * called after the action has finished.
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Base class for Easing actions
								
							
        */
        export class ActionEase extends cc.ActionInterval {
            /**
            * Base class for Easing actions
            */
            constructor(action: ActionInterval);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action: ActionInterval);
            /**
            * Get inner Action.
            */
            getInnerAction();
            /**
            * initializes the action
            */
            initWithAction(action: ActionInterval);
            /**
            * Create new action to original operation effect opposite.
            */
            reverse();
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
            /**
            * Stop the action.
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Instant actions are immediate actions. They don&#39;t have a duration like.
the CCIntervalAction actions.
								
							
        */
        export class ActionInstant extends cc.FiniteTimeAction {
            /**
            * Instant actions are immediate actions.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * return true if the action has finished.
            */
            isDone();
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * called every frame with it&#39;s delta time.
            */
            step(dt: number);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								 An interval action is an action that takes place within a certain period of time. 
It has an start time, and a finish time. The finish time is the parameter
duration plus the start time.

These CCActionInterval actions have some interesting properties, like:
- They can run normally (default)  
- They can run reversed with the reverse method   
- They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. 

For example, you can simulate a Ping Pong effect running the action normally and
then running it again in Reverse mode. 
								
							
        */
        export class ActionInterval extends cc.FiniteTimeAction {
            /**
            *  An interval action is an action that takes place within a certain period of time.
            */
            constructor(d: number);
            /**
            * Returns a new clone of the action.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(d: number);
            /**
            * Implementation of ease motion.
            */
            easing(easeObj: Object);
            /**
            * Get amplitude rate.
            */
            getAmplitudeRate();
            /**
            * How many seconds had elapsed since the actions started to run.
            */
            getElapsed();
            /**
            * Get this action speed.
            */
            getSpeed();
            /**
            * Initializes the action.
            */
            initWithDuration(d: number);
            /**
            * Returns true if the action has finished.
            */
            isDone();
            /**
            * Repeats an action a number of times.
            */
            repeat();
            /**
            * Repeats an action for ever.
            */
            repeatForever();
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * Set amplitude rate.
            */
            setAmplitudeRate(amp: number);
            /**
            * Set this action speed.
            */
            setSpeed(speed: number);
            /**
            * Changes the speed of an action, making it take longer (speed&gt;1)
or less (speed
            */
            speed();
            /**
            * Start this action with target.
            */
            startWithTarget(target: Node);
            /**
            * called every frame with it&#39;s delta time.
            */
            step(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.ActionManager is a class that can manage actions.
Normally you won&#39;t need to use this class directly. 99% of the cases you will use the CCNode interface,
which uses this class&#39;s singleton object.
But there are some cases where you might need to use this class. 
Examples:
- When you want to run an action where the target is different from a CCNode.
- When you want to pause / resume the actions
								
							
        */
        export class ActionManager extends cc.Class {
            /**
            * cc.ActionManager is a class that can manage actions.
            */
            constructor();
            /**
            * Adds an action with a target.
            */
            addAction(action: Action, target: Node, paused: boolean);
            /**
            * Gets an action given its tag an a target
            */
            getActionByTag(tag: number, target: object);
            /**
            * Returns the numbers of actions that are running in a certain target.
            */
            numberOfRunningActionsInTarget(target: object);
            /**
            * Pauses all running actions, returning a list of targets whose actions were paused.
            */
            pauseAllRunningActions();
            /**
            * Pauses the target: all running actions and newly added actions will be paused.
            */
            pauseTarget(target: object);
            /**
            * purges the shared action manager.
            */
            purgeSharedManager();
            /**
            * Removes an action given an action reference.
            */
            removeAction(action: Action);
            /**
            * Removes an action given its tag and the target
            */
            removeActionByTag(tag: number, target: object);
            /**
            * Removes all actions from all the targets.
            */
            removeAllActions();
            /**
            * Removes all actions from a certain target.
            */
            removeAllActionsFromTarget(target: object, forceDelete: boolean);
            /**
            * Resumes the target.
            */
            resumeTarget(target: object);
            /**
            * Resume a set of targets (convenience function to reverse a pauseAllRunningActions call)
            */
            resumeTargets(targetsToResume: Array);
            /**
            * 
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.ActionTween
cc.ActionTween is an action that lets you update any property of an object.
								
							
        */
        export class ActionTween extends cc.ActionInterval {
            /**
            * cc.ActionTween
cc.ActionTween is an action that lets you update any property of an object.
            */
            constructor(duration: number, key: string, from: number, to: number);
            /**
            * to copy object with deep copy.
            */
            static clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            static ctor(duration: number, key: string, from: number, to: number);
            /**
            * initializes the action with the property name (key), and the from and to parameters.
            */
            static initWithDuration(duration: number, key: string, from: number, to: number);
            /**
            * returns a reversed action.
            */
            static reverse();
            /**
            * Start this tween with target.
            */
            static startWithTarget(target: ActionTweenDelegate);
            /**
            * Called once per frame.
            */
            static update(dt: number);
        }
}
declare module cc {
        /**
        * 
        */
        export class ActionTweenDelegate extends cc.Class {
            /**
            * 
            */
            constructor();
            /**
            * Update Tween Action.
            */
            static updateTweenAction();
        }
}
declare module cc {
        /**
        * 
								cc.AffineTransform class represent an affine transform matrix. It&#39;s composed basically by translation, rotation, scale transformations.
Please do not use its constructor directly, use cc.affineTransformMake alias function instead.

								
							
        */
        export class AffineTransform  {
            /**
            * cc.AffineTransform class represent an affine transform matrix.
            */
            constructor(a: number, b: number, c: number, d: number, tx: number, ty: number);
        }
}
declare module cc {
        /**
        * 
								Animates a sprite given the name of an Animation
								
							
        */
        export class Animate extends cc.ActionInterval {
            /**
            * Animates a sprite given the name of an Animation
            */
            constructor(animation: Animation);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(animation: Animation);
            /**
            * 
            */
            getAnimation();
            /**
            * 
            */
            initWithAnimation(animation: Animation);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * 
            */
            setAnimation(animation: Animation);
            /**
            * Start the action with target.
            */
            startWithTarget(target: Sprite);
            /**
            * stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								
    A cc.Animation object is used to perform animations on the cc.Sprite objects.
    
     The cc.Animation object contains cc.SpriteFrame objects, and a possible delay between the frames. 
     You can animate a cc.Animation object by using the cc.Animate action.

								
							
        */
        export class Animation extends cc.Class {
            /**
            * 
    A cc.Animation object is used to perform animations on the cc.Sprite objects.
            */
            constructor(frames: Array, delay: number, loops: number);
            /**
            * Adds a frame to a cc.Animation, the frame will be added with one &quot;delay unit&quot;.
            */
            addSpriteFrame(frame: SpriteFrame);
            /**
            * Adds a frame with an image filename.
            */
            addSpriteFrameWithFile(fileName: string);
            /**
            * Adds a frame with a texture and a rect.
            */
            addSpriteFrameWithTexture(texture: Texture2D, rect: Rect);
            /**
            * Clone the current animation
            */
            clone();
            /**
            * Clone the current animation
            */
            copy();
            /**
            * Clone the current animation
            */
            copyWithZone();
            /**
            * Creates an animation.
            */
            static create(frames: Array, delay: number, loops: number);
            /**
            * Returns delay in seconds of the &quot;delay unit&quot;
            */
            getDelayPerUnit();
            /**
            * Returns duration in seconds of the whole animation.
            */
            getDuration();
            /**
            * Returns the array of animation frames
            */
            getFrames();
            /**
            * Returns how many times the animation is going to loop.
            */
            getLoops();
            /**
            * Returns whether or not it shall restore the original frame when the animation finishes
            */
            getRestoreOriginalFrame();
            /**
            * Returns total delay units of the cc.Animation.
            */
            getTotalDelayUnits();
            /**
            * Initializes a cc.Animation with cc.AnimationFrame, do not call this method yourself, please pass parameters to constructor to initialize.
            */
            initWithAnimationFrames(arrayOfAnimationFrames: Array, delayPerUnit: number, loops: number);
            /**
            * Initializes a cc.Animation with frames and a delay between frames, do not call this method yourself, please pass parameters to constructor to initialize.
            */
            initWithSpriteFrames(frames: Array, delay: number, loops: number);
            /**
            * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
            */
            release();
            /**
            * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
            */
            retain();
            /**
            * Sets delay in seconds of the &quot;delay unit&quot;
            */
            setDelayPerUnit(delayPerUnit: number);
            /**
            * Sets array of animation frames
            */
            setFrames(frames: Array);
            /**
            * Sets how many times the animation is going to loop.
            */
            setLoops(value: number);
            /**
            * Sets whether or not it shall restore the original frame when the animation finishes
            */
            setRestoreOriginalFrame(restOrigFrame: boolean);
        }
}
declare module cc {
        /**
        * 
								
    cc.animationCache is a singleton object that manages the Animations.
    It saves in a cache the animations. You should use this class if you want to save your animations in a cache.

example
cc.animationCache.addAnimation(animation,&quot;animation1&quot;);

								
							
        */
        export class animationCache  {
            /**
            * 
    cc.animationCache is a singleton object that manages the Animations.
            */
            constructor();
            /**
            * Adds a cc.Animation with a name.
            */
            addAnimation(animation: Animation, name: string);
            /**
            * 
   Adds an animations from a plist file.
            */
            addAnimations(plist: string);
            /**
            * 
    Returns a cc.Animation that was previously added.
            */
            getAnimation(name: string);
            /**
            * Deletes a cc.Animation from the cache.
            */
            removeAnimation(name: string);
        }
}
declare module cc {
        /**
        * 
								
   cc.AnimationFrame
   A frame of the animation. It contains information like:
      - sprite frame name
      - # of delay units.
      - offset

								
							
        */
        export class AnimationFrame extends cc.Class {
            /**
            * 
   cc.AnimationFrame
   A frame of the animation.
            */
            constructor();
            /**
            * Create a new animation frame and copy all contents into it
            */
            clone();
            /**
            * Create a new animation frame and copy all contents into it
            */
            copy();
            /**
            * Create a new animation frame and copy all contents into it
            */
            copyWithZone();
            /**
            * Creates an animation frame.
            */
            static create(spriteFrame: SpriteFrame, delayUnits: number, userInfo: object);
            /**
            * Returns how many units of time the frame takes getter
            */
            getDelayUnits();
            /**
            * Returns sprite frame to be used
            */
            getSpriteFrame();
            /**
            * Returns the user custom information
            */
            getUserInfo();
            /**
            * initializes the animation frame with a spriteframe, number of delay units and a notification user info
            */
            initWithSpriteFrame(spriteFrame: SpriteFrame, delayUnits: number, userInfo: object);
            /**
            * Sets how many units of time the frame takes setter
            */
            setDelayUnits();
            /**
            * Sets sprite frame to be used
            */
            setSpriteFrame(spriteFrame: SpriteFrame);
            /**
            * Sets the user custom information
            */
            setUserInfo(userInfo: object);
        }
}
declare module cc {
        /**
        * 
								Array for object sorting utils
								
							
        */
        export class ArrayForObjectSorting  {
            /**
            * Array for object sorting utils
            */
            constructor();
            /**
            * Inserts a given object into array.
            */
            insertSortedObject(addObject: Object);
        }
}
declare module cc {
        /**
        * 
        */
        export class async  {
            /**
            * 
            */
            constructor();
            /**
            * Do tasks by iterator.
            */
            map(tasks: any, iterator: any, callback: any, target: Object);
            /**
            * Do tasks by iterator limit.
            */
            mapLimit(tasks: any, limit: number, iterator: any, cb: any, target: Object);
            /**
            * Do tasks parallel.
            */
            parallel(tasks: any, cb: any, target: Object);
            /**
            * Do tasks series.
            */
            series(tasks: any, cb: any, target: Object);
            /**
            * Do tasks waterfall.
            */
            waterfall(tasks: any, cb: any, target: Object);
        }
}
declare module cc {
        /**
        * 
								Async Pool class, a helper of cc.async
								
							
        */
        export class AsyncPool  {
            /**
            * Async Pool class, a helper of cc.async
            */
            constructor(srcObj: any, limit: number, iterator: any, onEnd: any, target: object);
        }
}
declare module cc {
        /**
        * 
								cc.AtlasNode is a subclass of cc.Node, it knows how to render a TextureAtlas object. 

If you are going to render a TextureAtlas consider subclassing cc.AtlasNode (or a subclass of cc.AtlasNode)

All features from cc.Node are valid

You can create a cc.AtlasNode with an Atlas file, the width, the height of each item and the quantity of items to render
								
							
        */
        export class AtlasNode extends cc.Node {
            /**
            * cc.AtlasNode is a subclass of cc.Node, it knows how to render a TextureAtlas object.
            */
            constructor(tile: string, tileWidth: number, tileHeight: number, itemsToRender: number);
            /**
            * Creates a cc.AtlasNode with an Atlas file the width and height of each item and the quantity of items to render
            */
            static create(tile: string, tileWidth: number, tileHeight: number, itemsToRender: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(tile: string, tileWidth: number, tileHeight: number, itemsToRender: number);
            /**
            * Get node&#39;s blend function
            */
            getBlendFunc();
            /**
            * Get color value of the atlas node
            */
            getColor();
            /**
            * Get the number of quads to be rendered
            */
            getQuadsToDraw();
            /**
            * Get the current texture
            */
            getTexture();
            /**
            * Get the atlas texture
            */
            getTextureAtlas();
            /**
            * Initializes an CCAtlasNode with an atlas texture, the width, the height of each tile and the quantity of tiles to render
            */
            initWithTexture(texture: Texture2D, tileWidth: number, tileHeight: number, itemsToRender: number);
            /**
            * Initializes an cc.AtlasNode object with an atlas texture file name, the width, the height of each tile and the quantity of tiles to render
            */
            initWithTileFile(tile: string, tileWidth: number, tileHeight: number, itemsToRender: number);
            /**
            * Get whether color should be changed with the opacity value
            */
            isOpacityModifyRGB();
            /**
            * Set node&#39;s blend function
This function accept either cc.BlendFunc object or source value and destination value
            */
            setBlendFunc(src: any, dst: number);
            /**
            * Set node&#39;s color
            */
            setColor(color: Color);
            /**
            * Set node&#39;s opacity
            */
            setOpacity(opacity: number);
            /**
            * Set whether color should be changed with the opacity value,
if true, node color will change while opacity changes.
            */
            setOpacityModifyRGB(value: boolean);
            /**
            * Set the number of quads to be rendered
            */
            setQuadsToDraw(quadsToDraw: number);
            /**
            * Replace the current texture with a new one
            */
            setTexture(texture: Texture2D);
            /**
            * Set the atlas texture
            */
            setTextureAtlas(value: TextureAtlas);
            /**
            * Updates the Atlas (indexed vertex array).
            */
            updateAtlasValues();
        }
}
declare module cc {
        /**
        * 
											End music and effects.
											
											
											
											
										
        */
        export class audioEngine  {
            /**
            * End music and effects.
            */
            constructor();
            /**
            * End music and effects.
            */
            static end();
            /**
            * The volume of the effects max value is 1.0,the min value is 0.0 .
            */
            static getEffectsVolume();
            /**
            * The volume of the music max value is 1.0,the min value is 0.0 .
            */
            static getMusicVolume();
            /**
            * Whether the music is playing.
            */
            static isMusicPlaying();
            /**
            * Pause all playing sound effect.
            */
            static pauseAllEffects();
            /**
            * Pause playing sound effect.
            */
            static pauseEffect();
            /**
            * Pause playing music.
            */
            static pauseMusic();
            /**
            * Play sound effect.
            */
            static playEffect(url: string, loop: boolean);
            /**
            * Play music.
            */
            static playMusic(url: string, loop: boolean);
            /**
            * Resume all playing sound effect
            */
            static resumeAllEffects();
            /**
            * Resume playing sound effect.
            */
            static resumeEffect();
            /**
            * Resume playing music.
            */
            static resumeMusic();
            /**
            * Rewind playing music.
            */
            static rewindMusic();
            /**
            * Set the volume of sound effects.
            */
            static setEffectsVolume(volume: number);
            /**
            * Set the volume of music.
            */
            static setMusicVolume(volume: number);
            /**
            * Stop all playing sound effects.
            */
            static stopAllEffects();
            /**
            * Stop playing sound effect.
            */
            static stopEffect();
            /**
            * Stop playing music.
            */
            static stopMusic(releaseData: boolean);
            /**
            * Unload the preloaded effect from internal buffer
            */
            static unloadEffect(url: string);
            /**
            * Indicates whether any background music can be played or not.
            */
            static willPlayMusic();
        }
}
declare module cc {
        /**
        * 
								An action that moves the target with a cubic Bezier curve by a certain distance.
Relative to its movement.
								
							
        */
        export class BezierBy extends cc.ActionInterval {
            /**
            * An action that moves the target with a cubic Bezier curve by a certain distance.
            */
            constructor(t: number, c: Array);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(t: number, c: Array);
            /**
            * Initializes the action.
            */
            initWithDuration(t: number, c: Array);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								An action that moves the target with a cubic Bezier curve to a destination point.
								
							
        */
        export class BezierTo extends cc.BezierBy {
            /**
            * An action that moves the target with a cubic Bezier curve to a destination point.
            */
            constructor(t: number, c: Array);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(t: number, c: Array);
            /**
            * Initializes the action.
            */
            initWithDuration(t: number, c: Array);
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
        }
}
declare module cc {
        /**
        * 
								Binary Stream Reader
								
							
        */
        export class BinaryStreamReader  {
            /**
            * Binary Stream Reader
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								Blinks a cc.Node object by modifying it&#39;s visible attribute
								
							
        */
        export class Blink extends cc.ActionInterval {
            /**
            * Blinks a cc.Node object by modifying it&#39;s visible attribute
            */
            constructor(duration: number, blinks: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, blinks: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, blinks: number);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Calls a &#39;callback&#39;.
								
							
        */
        export class CallFunc extends cc.ActionInstant {
            /**
            * Calls a &#39;callback&#39;.
            */
            constructor(selector: any, selectorTarget: any, data: any);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(selector: any, selectorTarget: any, data: any);
            /**
            * execute the function.
            */
            execute();
            /**
            * Get selectorTarget.
            */
            getTargetCallback();
            /**
            * Initializes the action with a function or function and its target
            */
            initWithFunction(selector: any, selectorTarget: any, data: any);
            /**
            * Set selectorTarget.
            */
            setTargetCallback(sel: object);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Cardinal Spline path. http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline
Relative coordinates.
								
							
        */
        export class CardinalSplineBy extends cc.CardinalSplineTo {
            /**
            * Cardinal Spline path.
            */
            constructor(duration: number, points: Array, tension: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Please use cc.cardinalSplineBy instead.
            */
            static create(duration: number, points: Array, tension: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, points: Array, tension: number);
            /**
            * reverse a new cc.CardinalSplineBy
            */
            reverse();
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
            /**
            * update position of target
            */
            updatePosition(newPos: Point);
        }
}
declare module cc {
        /**
        * 
								Cardinal Spline path. http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline
Absolute coordinates.
								
							
        */
        export class CardinalSplineTo extends cc.ActionInterval {
            /**
            * Cardinal Spline path.
            */
            constructor(duration: number, points: Array, tension: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Please use cc.cardinalSplineTo instead.
            */
            static create(duration: number, points: Array, tension: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, points: Array, tension: number);
            /**
            * Points getter
            */
            getPoints();
            /**
            * initializes the action with a duration and an array of points
            */
            initWithDuration(duration: number, points: Array, tension: number);
            /**
            * reverse a new cc.CardinalSplineTo.
            */
            reverse();
            /**
            * Points setter
            */
            setPoints(points: Array);
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
            /**
            * update position of target
            */
            updatePosition(newPos: Point);
        }
}
declare module cc {
        /**
        * 
								An action that moves the target with a CatmullRom curve by a certain distance.  
A Catmull Rom is a Cardinal Spline with a tension of 0.5.
http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull.E2.80.93Rom_spline
Relative coordinates.
								
							
        */
        export class CatmullRomBy extends cc.CardinalSplineBy {
            /**
            * An action that moves the target with a CatmullRom curve by a certain distance.
            */
            constructor(dt: number, points: Array);
        }
}
declare module cc {
        /**
        * 
								An action that moves the target with a CatmullRom curve to a destination point.
A Catmull Rom is a Cardinal Spline with a tension of 0.5.  
http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull.E2.80.93Rom_spline
Absolute coordinates.
								
							
        */
        export class CatmullRomTo extends cc.CardinalSplineTo {
            /**
            * An action that moves the target with a CatmullRom curve to a destination point.
            */
            constructor(dt: number, points: Array);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(dt: number, points: Array);
            /**
            * Initializes the action with a duration and an array of points
            */
            initWithDuration(dt: number, points: Array);
        }
}
declare module cc {
        /**
        * 
								The base Class implementation (does nothing)
								
							
        */
        export class Class  {
            /**
            * The base Class implementation (does nothing)
            */
            constructor();
            /**
            * Create a new Class that inherits from this Class
            */
            static extend(props: object);
        }
}
declare module cc {
        /**
        * 
								
    cc.ClippingNode is a subclass of cc.Node.                                                            
    It draws its content (children) clipped using a stencil.                                               
    The stencil is an other cc.Node that will not be drawn.                                               
    The clipping is done using the alpha part of the stencil (adjusted with an alphaThreshold).

								
							
        */
        export class ClippingNode extends cc.Node {
            /**
            * 
    cc.ClippingNode is a subclass of cc.Node.
            */
            constructor(stencil: Node);
            /**
            * Creates and initializes a clipping node with an other node as its stencil.
            */
            static create(stencil: Node);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(stencil: Node);
            /**
            * 
The alpha threshold.
            */
            getAlphaThreshold();
            /**
            * The cc.Node to use as a stencil to do the clipping.
            */
            getStencil();
            /**
            * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it
.
            */
            init(stencil: Node);
            /**
            * 
    Inverted.
            */
            isInverted();
            /**
            * 
    Event callback that is invoked every time when node enters the &#39;stage&#39;.
            */
            onEnter();
            /**
            * 
    Event callback that is invoked when the node enters in the &#39;stage&#39;.
            */
            onEnterTransitionDidFinish();
            /**
            * 
callback that is called every time the node leaves the &#39;stage&#39;.
            */
            onExit();
            /**
            * 
    callback that is called every time the node leaves the &#39;stage&#39;.
            */
            onExitTransitionDidStart();
            /**
            * set alpha threshold.
            */
            setAlphaThreshold(alphaThreshold: number);
            /**
            * set whether or not invert of stencil
            */
            setInverted(inverted: boolean);
            /**
            * Set stencil.
            */
            setStencil(stencil: Node);
        }
}
declare module cc {
        /**
        * 
								Color class, please use cc.color() to construct a color
								
							
        */
        export class Color  {
            /**
            * Color class, please use cc.color() to construct a color
            */
            constructor(r: number, g: number, b: number, a: number);
        }
}
declare module cc {
        /**
        * 
								The base class of component in CocoStudio
								
							
        */
        export class Component extends cc.Class {
            /**
            * The base class of component in CocoStudio
            */
            constructor();
            /**
            * Allocates and initializes a component.
            */
            static create();
            /**
            * Construction of cc.Component
            */
            ctor();
            /**
            * Returns the name of cc.Component.
            */
            getName();
            /**
            * Returns the owner of cc.Component.
            */
            getOwner();
            /**
            * Initializes a cc.Component.
            */
            init();
            /**
            * Returns component whether is enabled.
            */
            isEnabled();
            /**
            * The callback when a component enter stage.
            */
            onEnter();
            /**
            * The callback when a component exit stage.
            */
            onExit();
            /**
            * Serialize a component object.
            */
            serialize();
            /**
            * Sets component whether is enabled.
            */
            setEnabled();
            /**
            * Sets the name to cc.Component.
            */
            setName(name: string);
            /**
            * Sets the owner to cc.Component.
            */
            setOwner();
            /**
            * The callback per every frame if it schedules update.
            */
            update();
        }
}
declare module cc {
        /**
        * 
								The component container for Cocostudio, it has some components.
								
							
        */
        export class ComponentContainer extends cc.Class {
            /**
            * The component container for Cocostudio, it has some components.
            */
            constructor();
            /**
            * Adds a component to container
            */
            add(component: Component);
            /**
            * Construction of cc.ComponentContainer
            */
            ctor();
            /**
            * Gets component by name.
            */
            getComponent();
            /**
            * Returns the container whether is empty.
            */
            isEmpty();
            /**
            * Removes component from container by name or component object.
            */
            remove(name: any);
            /**
            * Removes all components of container.
            */
            removeAll();
            /**
            * Visit callback by director.
            */
            visit(delta: number);
        }
}
declare module cc {
        /**
        * 
								cc.configuration is a singleton object which contains some openGL variables
								
							
        */
        export class configuration  {
            /**
            * cc.configuration is a singleton object which contains some openGL variables
            */
            constructor();
            /**
            * returns whether or not an OpenGL is supported
            */
            checkForGLExtension(searchName: string);
            /**
            * Dumps the current configuration on the console
            */
            dumpInfo();
            /**
            * gathers OpenGL / GPU information
            */
            gatherGPUInfo();
            /**
            * OpenGL Max Modelview Stack Depth.
            */
            getMaxModelviewStackDepth();
            /**
            * OpenGL Max texture size.
            */
            getMaxTextureSize();
            /**
            * returns the maximum texture units
            */
            getMaxTextureUnits();
            /**
            * Returns the value of a given key.
            */
            getValue(key: string, default_value: any);
            /**
            * Loads a config file.
            */
            loadConfigFile(url: string);
            /**
            * Sets a new key/value pair  in the configuration dictionary
            */
            setValue(key: string, value: any);
            /**
            * Whether or not ATITC Texture Compressed is supported
            */
            supportsATITC();
            /**
            * Whether or not BGRA8888 textures are supported.
            */
            supportsBGRA8888();
            /**
            * Whether or not glDiscardFramebufferEXT is supported
            */
            supportsDiscardFramebuffer();
            /**
            * Whether or not ETC Texture Compressed is supported
            */
            supportsETC();
            /**
            * Whether or not the GPU supports NPOT (Non Power Of Two) textures.
            */
            supportsNPOT();
            /**
            * Whether or not PVR Texture Compressed is supported
            */
            supportsPVRTC();
            /**
            * Whether or not S3TC Texture Compressed is supported
            */
            supportsS3TC();
            /**
            * Whether or not shareable VAOs are supported.
            */
            supportsShareableVAO();
        }
}
declare module cc {
        /**
        * 
								cc.ContainerStrategy class is the root strategy class of container&#39;s scale strategy,
it controls the behavior of how to scale the cc.container and cc._canvas object
								
							
        */
        export class ContainerStrategy extends cc.Class {
            /**
            * cc.ContainerStrategy class is the root strategy class of container&#39;s scale strategy,
it controls the behavior of how to scale the cc.container and cc._canvas object
            */
            constructor();
            /**
            * Function to apply this strategy
            */
            apply(view: view, designedResolution: Size);
            /**
            * Manipulation after applying the strategy
            */
            postApply(view: view);
            /**
            * Manipulation before appling the strategy
            */
            preApply(The: view);
        }
}
declare module cc {
        /**
        * 
								cc.ContentStrategy class is the root strategy class of content&#39;s scale strategy,
it controls the behavior of how to scale the scene and setup the viewport for the game
								
							
        */
        export class ContentStrategy extends cc.Class {
            /**
            * cc.ContentStrategy class is the root strategy class of content&#39;s scale strategy,
it controls the behavior of how to scale the scene and setup the viewport for the game
            */
            constructor();
            /**
            * Function to apply this strategy
The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
The target view can then apply these value to itself, it&#39;s preferred not to modify directly its private variables
            */
            apply(view: view, designedResolution: Size);
            /**
            * Manipulation after applying the strategy
            */
            postApply(view: view);
            /**
            * Manipulation before applying the strategy
            */
            preApply(view: view);
        }
}
declare module cc {
        /**
        * 
								CCControl is inspired by the UIControl API class from the UIKit library of
CocoaTouch. It provides a base class for control CCSprites such as CCButton
or CCSlider that convey user intent to the application.
The goal of CCControl is to define an interface and base implementation for
preparing action messages and initially dispatching them to their targets when
certain events occur.
To use the CCControl you have to subclass it.
								
							
        */
        export class Control extends cc.Layer {
            /**
            * CCControl is inspired by the UIControl API class from the UIKit library of
CocoaTouch.
            */
            constructor();
            /**
            * 
Adds a target and action for a particular event (or events) to an internal                         
dispatch table.
            */
            addTargetWithActionForControlEvents(target: Object, action: any, controlEvents: number);
            /**
            * Returns a point corresponding to the touh location converted into the
control space coordinates.
            */
            getTouchLocation(touch: Touch);
            /**
            * Returns a boolean value that indicates whether a touch is inside the bounds of the receiver.
            */
            isTouchInside(touch: Touch);
            /**
            * Updates the control layout using its current internal state.
            */
            needsLayout();
            /**
            * Removes a target and action for a particular event (or events) from an internal dispatch table.
            */
            removeTargetWithActionForControlEvents(target: Object, action: any, controlEvents: number);
            /**
            * Sends action messages for the given control events.
            */
            sendActionsForControlEvents(controlEvents: number);
            /**
            * Tells whether the control is enabled
            */
            setEnabled(enabled: boolean);
            /**
            * A Boolean value that determines whether the control is highlighted.
            */
            setHighlighted(highlighted: boolean);
            /**
            * A Boolean value that determines the control selected state.
            */
            setSelected(selected: boolean);
        }
}
declare module cc {
        /**
        * 
								CCControlButton: Button control for Cocos2D.
								
							
        */
        export class ControlButton extends cc.Control {
            /**
            * CCControlButton: Button control for Cocos2D.
            */
            constructor();
            /**
            * 
            */
            static create();
            /**
            * Adjust the background image.
            */
            doesAdjustBackgroundImage();
            /**
            * Returns the background sprite used for a state.
            */
            getBackgroundSpriteForState(state: number);
            /**
            * The prefered size of the button, if label is larger it will be expanded.
            */
            getPreferredSize();
            /**
            * Returns the title color used for a state.
            */
            getTitleColorForState(state: number);
            /**
            * Returns the title used for a state.
            */
            getTitleForState(state: number);
            /**
            * Returns the title label used for a state.
            */
            getTitleLabelForState();
            /**
            * return the title TTF filename to use for the specified state.
            */
            getTitleTTFForState(state: number);
            /**
            * return the font size of LabelTTF to use for the specified state
            */
            getTitleTTFSizeForState(state: number);
            /**
            * Adjust the button zooming on touchdown.
            */
            getZoomOnTouchDown();
            /**
            * Flag to know if the button is currently pushed.
            */
            isPushed();
            /**
            * Sets the background sprite to use for the specified button state.
            */
            setBackgroundSpriteForState(sprite: Scale9Sprite, state: number);
            /**
            * Sets the background spriteFrame to use for the specified button state.
            */
            setBackgroundSpriteFrameForState(spriteFrame: SpriteFrame, state: number);
            /**
            * set the margins at once (so we only have to do one call of needsLayout)
            */
            setMargins(marginH: number, marginV: number);
            /**
            * Sets the font of the label, changes the label to a CCLabelBMFont if necessary.
            */
            setTitleBMFontForState(fntFile: string, state: number);
            /**
            * Sets the color of the title to use for the specified state.
            */
            setTitleColorForState(color: Color, state: number);
            /**
            * 
Sets the title string to use for the specified state.
            */
            setTitleForState(title: string, state: number);
            /**
            * Sets the title label to use for the specified state.
            */
            setTitleLabelForState(titleLabel: Node, state: number);
            /**
            * Sets the title TTF filename to use for the specified state.
            */
            setTitleTTFForState(fntFile: string, state: number);
            /**
            * 
            */
            setTitleTTFSizeForState(size: number, state: number);
        }
}
declare module cc {
        /**
        * 
								ControlColourPicker: color picker ui component.
								
							
        */
        export class ControlColourPicker extends cc.Control {
            /**
            * ControlColourPicker: color picker ui component.
            */
            constructor();
            /**
            * 
            */
            static create();
        }
}
declare module cc {
        /**
        * 
								ControlHuePicker: HUE picker ui component.
								
							
        */
        export class ControlHuePicker extends cc.Control {
            /**
            * ControlHuePicker: HUE picker ui component.
            */
            constructor();
            /**
            * 
            */
            static create();
            /**
            * The constructor of cc.ControlHuePicker
            */
            ctor(target: Node, pos: Point);
        }
}
declare module cc {
        /**
        * 
								CCControlPotentiometer: Potentiometer control for Cocos2D.
								
							
        */
        export class ControlPotentiometer extends cc.Control {
            /**
            * CCControlPotentiometer: Potentiometer control for Cocos2D.
            */
            constructor();
            /**
            * the angle in degree between line1 and line2.
            */
            angleInDegreesBetweenLineFromPoint_toPoint_toLineFromPoint_toPoint(beginLineA: Point, endLineA: Point, beginLineB: Point, endLineB: Point);
            /**
            * 
            */
            static create();
            /**
            * the distance between the point1 and point2
            */
            distanceBetweenPointAndPoint(point1: Point, point2: Point);
            /**
            * 
            */
            initWithTrackSprite_ProgressTimer_ThumbSprite(trackSprite: Sprite, progressTimer: ProgressTimer, thumbSprite: Sprite);
        }
}
declare module cc {
        /**
        * 
								ControlSaturationBrightnessPicker: Saturation brightness picker ui component.
								
							
        */
        export class ControlSaturationBrightnessPicker extends cc.Control {
            /**
            * ControlSaturationBrightnessPicker: Saturation brightness picker ui component.
            */
            constructor();
            /**
            * Creates a cc.ControlSaturationBrightnessPicker
            */
            static create(target: Node, pos: Point);
            /**
            * The constructor of cc.ControlSaturationBrightnessPicker
            */
            ctor(target: Node, pos: Point);
        }
}
declare module cc {
        /**
        * 
								ControlSlider: Slider ui component.
								
							
        */
        export class ControlSlider extends cc.Control {
            /**
            * ControlSlider: Slider ui component.
            */
            constructor();
            /**
            * Creates a slider with a given background sprite and a progress bar and a
thumb item.
            */
            static create();
            /**
            * Initializes a slider with a background sprite, a progress bar and a thumb
item.
            */
            initWithSprites(backgroundSprite: Sprite, progressSprite: Sprite, thumbSprite: Sprite);
            /**
            * Returns the value for the given location.
            */
            valueForLocation();
        }
}
declare module cc {
        /**
        * 
								ControlStepper: Stepper ui component.
								
							
        */
        export class ControlStepper extends cc.Control {
            /**
            * ControlStepper: Stepper ui component.
            */
            constructor();
            /**
            * Creates a cc.ControlStepper
            */
            static create(minusSprite: Sprite, plusSprite: Sprite);
            /**
            * Stop the autorepeat.
            */
            stopAutorepeat();
        }
}
declare module cc {
        /**
        * 
								CCControlSwitch: Switch control ui component
								
							
        */
        export class ControlSwitch extends cc.Control {
            /**
            * CCControlSwitch: Switch control ui component
            */
            constructor();
            /**
            * Creates a switch with a mask sprite, on/off sprites for on/off states and a thumb sprite.
            */
            static create();
            /**
            * Creates a switch with a mask sprite, on/off sprites for on/off states, a thumb sprite and an on/off labels.
            */
            initWithMaskSprite();
        }
}
declare module cc {
        /**
        * 
								ControlSwitchSprite: Sprite switch control ui component
								
							
        */
        export class ControlSwitchSprite extends cc.Sprite {
            /**
            * ControlSwitchSprite: Sprite switch control ui component
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								Delays the action a certain amount of seconds
								
							
        */
        export class DelayTime extends cc.ActionInterval {
            /**
            * Delays the action a certain amount of seconds
            */
            constructor();
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								
   ATTENTION: USE cc.director INSTEAD OF cc.Director.
   cc.director is a singleton object which manage your game&#39;s logic flow.
   Since the cc.director is a singleton, you don&#39;t need to call any constructor or create functions,
   the standard way to use it is by calling:
     - cc.director.methodName(); 

   It creates and handle the main Window and manages how and when to execute the Scenes.
   
   The cc.director is also responsible for:
     - initializing the OpenGL context
     - setting the OpenGL pixel format (default on is RGB565)
     - setting the OpenGL pixel format (default on is RGB565)
     - setting the OpenGL buffer depth (default one is 0-bit)
     - setting the projection (default one is 3D)
     - setting the orientation (default one is Portrait)
     
   
   The cc.director also sets the default OpenGL context:
     - GL_TEXTURE_2D is enabled
     - GL_VERTEX_ARRAY is enabled
     - GL_COLOR_ARRAY is enabled
     - GL_TEXTURE_COORD_ARRAY is enabled


  cc.director also synchronizes timers with the refresh rate of the display.
  Features and Limitations:
     - Scheduled timers &amp; drawing are synchronizes with the refresh rate of the display
     - Only supports animation intervals of 1/60 1/30 &amp; 1/15

								
							
        */
        export class Director  {
            /**
            * 
   ATTENTION: USE cc.director INSTEAD OF cc.Director.
            */
            constructor();
            /**
            * calculates delta time since last time it was called
            */
            calculateDeltaTime();
            /**
            * Converts a view coordinate to an WebGL coordinate
Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)
Implementation can be found in CCDirectorWebGL
            */
            convertToGL(uiPoint: Point);
            /**
            * Converts an WebGL coordinate to a view coordinate
Useful to convert node points to window points for calls such as glScissor
Implementation can be found in CCDirectorWebGL
            */
            convertToUI(glPoint: Point);
            /**
            * Draw the scene.
            */
            drawScene();
            /**
            * End the life of director in the next frame
            */
            end();
            /**
            * Returns the cc.ActionManager associated with this director
            */
            getActionManager();
            /**
            * Returns the FPS value
            */
            getAnimationInterval();
            /**
            * Returns the size in pixels of the surface.
            */
            getContentScaleFactor();
            /**
            * Returns the cc.director delegate.
            */
            getDelegate();
            /**
            * Returns the delta time since last frame
            */
            getDeltaTime();
            /**
            * This object will be visited after the main scene is visited.
            */
            getNotificationNode();
            /**
            * Get the CCEGLView, where everything is rendered.
            */
            getOpenGLView();
            /**
            * Sets an OpenGL projection.
            */
            getProjection();
            /**
            * Returns current running Scene.
            */
            getRunningScene();
            /**
            * Returns the cc.Scheduler associated with this director
            */
            getScheduler();
            /**
            * Returns seconds per frame
            */
            getSecondsPerFrame();
            /**
            * Returns how many frames were called since the director started
            */
            getTotalFrames();
            /**
            * Returns the visible origin of the running scene
            */
            getVisibleOrigin();
            /**
            * Returns the visible size of the running scene
            */
            getVisibleSize();
            /**
            * Returns the size of the WebGL view in points.
            */
            getWinSize();
            /**
            * Returns the size of the OpenGL view in pixels.
            */
            getWinSizeInPixels();
            /**
            * Returns the z eye, only available in WebGL mode
            */
            getZEye();
            /**
            * Returns whether or not to display the FPS informations
            */
            isDisplayStats();
            /**
            * Returns whether next delta time equals to zero
            */
            isNextDeltaTimeZero();
            /**
            * Returns whether or not the Director is paused
            */
            isPaused();
            /**
            * Returns whether or not the replaced scene will receive the cleanup message.
            */
            isSendCleanupToScene();
            /**
            * Run main loop of director
            */
            mainLoop();
            /**
            * Pause the director&#39;s ticker
            */
            pause();
            /**
            * Pops out a scene from the queue.
            */
            popScene();
            /**
            * Pops out all scenes from the queue until the root scene in the queue.
            */
            popToRootScene();
            /**
            * Pops out all scenes from the queue until it reaches &quot;level&quot;.
            */
            popToSceneStackLevel(level: number);
            /**
            * Removes cached all cocos2d cached data.
            */
            purgeCachedData();
            /**
            * Purge the cc.director itself, including unschedule all schedule, remove all event listeners, clean up and exit the running scene, stops all animations, clear cached data.
            */
            purgeDirector();
            /**
            * Suspends the execution of the running scene, pushing it on the stack of suspended scenes.
            */
            pushScene(scene: Scene);
            /**
            * Resume director after pause, if the current scene is not paused, nothing will happen.
            */
            resume();
            /**
            * Run a scene.
            */
            runScene(scene: Scene);
            /**
            * Sets the cc.ActionManager associated with this director
            */
            setActionManager(actionManager: ActionManager);
            /**
            * Enables/disables OpenGL alpha blending.
            */
            setAlphaBlending(on: boolean);
            /**
            * Sets animation interval
            */
            setAnimationInterval(value: number);
            /**
            * The size in pixels of the surface.
            */
            setContentScaleFactor(scaleFactor: number);
            /**
            * Sets the default values based on the CCConfiguration info
            */
            setDefaultValues();
            /**
            * Sets the cc.director delegate.
            */
            setDelegate();
            /**
            * Enables or disables WebGL depth test.
            */
            setDepthTest(on: boolean);
            /**
            * Sets whether display the FPS on the bottom-left corner
            */
            setDisplayStats(displayStats: boolean);
            /**
            * Sets whether next delta time equals to zero
            */
            setNextDeltaTimeZero(nextDeltaTimeZero: boolean);
            /**
            * Starts the registered next scene
            */
            setNextScene();
            /**
            * Sets Notification Node
            */
            setNotificationNode(node: Node);
            /**
            * Sets the view, where everything is rendered, do not call this function.
            */
            setOpenGLView(openGLView: view);
            /**
            * Sets an OpenGL projection.
            */
            setProjection(projection: number);
            /**
            * Sets the cc.Scheduler associated with this director
            */
            setScheduler(scheduler: Scheduler);
            /**
            * Update the view port.
            */
            setViewport();
            /**
            * Starts Animation
            */
            startAnimation();
            /**
            * Stops animation
            */
            stopAnimation();
        }
}
declare module cc {
        /**
        * 
								CCDrawNode                                                
Node that draws dots, segments and polygons.                        
Faster than the &quot;drawing primitives&quot; since they it draws everything in one single batch.
								
							
        */
        export class DrawNode extends cc.Node {
            /**
            * CCDrawNode                                                
Node that draws dots, segments and polygons.
            */
            constructor();
            /**
            * Clear the geometry in the node&#39;s buffer.
            */
            clear();
            /**
            * Creates a DrawNode
            */
            static create();
            /**
            * The cc.DrawNodeCanvas&#39;s constructor.
            */
            ctor();
            /**
            * draw a cardinal spline path
            */
            drawCardinalSpline(config: Array, tension: number, segments: number, lineWidth: number, color: Color);
            /**
            * draw a CatmullRom curve
            */
            drawCatmullRom(points: Array, segments: number, lineWidth: number, color: Color);
            /**
            * draws a circle given the center, radius and number of segments.
            */
            drawCircle(center: Point, radius: number, angle: number, segments: number, drawLineToCenter: boolean, lineWidth: number, color: Color);
            /**
            * draws a cubic bezier path
            */
            drawCubicBezier(origin: Point, control1: Point, control2: Point, destination: Point, segments: number, lineWidth: number, color: Color);
            /**
            * draw a dot at a position, with a given radius and color
            */
            drawDot(pos: Point, radius: number, color: Color);
            /**
            * draws an array of points.
            */
            drawDots(points: Array, radius: number, color: Color);
            /**
            * draw a polygon with a fill color and line color, copying the vertex list
            */
            drawPoly(verts: Array, fillColor: Color, lineWidth: number, color: Color);
            /**
            * draw a polygon with a fill color and line color without copying the vertex list
            */
            drawPoly_(verts: Array, fillColor: Color, lineWidth: number, color: Color);
            /**
            * draws a quad bezier path
            */
            drawQuadBezier(origin: Point, control: Point, destination: Point, segments: number, lineWidth: number, color: Color);
            /**
            * draws a rectangle given the origin and destination point measured in points.
            */
            drawRect(origin: Point, destination: Point, fillColor: Color, lineWidth: number, lineColor: Color);
            /**
            * draw a segment with a radius and color
            */
            drawSegment(from: Point, to: Point, lineWidth: number, color: Color);
            /**
            * Gets the blend func
            */
            getBlendFunc();
            /**
            * draw color getter
            */
            getDrawColor();
            /**
            * line width getter
            */
            getLineWidth();
            /**
            * Set the blend func
            */
            setBlendFunc();
            /**
            * draw color setter
            */
            setDrawColor(color: Color);
            /**
            * line width setter
            */
            setLineWidth(width: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseBackIn action. 
In the opposite direction to move slowly, and then accelerated to the right direction.
								
							
        */
        export class EaseBackIn extends cc.ActionEase {
            /**
            * cc.EaseBackIn action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the cc.EaseBackIn.
            */
            static create(action: ActionInterval);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseBackInOut action. 
Begining of cc.EaseBackIn. Ending of cc.EaseBackOut.
								
							
        */
        export class EaseBackInOut extends cc.ActionEase {
            /**
            * cc.EaseBackInOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create(action: ActionInterval);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseBackOut action. 
Fast moving more than the finish, and then slowly back to the finish.
								
							
        */
        export class EaseBackOut extends cc.ActionEase {
            /**
            * cc.EaseBackOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create(action: ActionInterval);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseBezierAction action. 
Manually set a 4 order Bessel curve. 
According to the set point, calculate the trajectory.
								
							
        */
        export class EaseBezierAction extends cc.ActionEase {
            /**
            * cc.EaseBezierAction action.
            */
            constructor(action: Action);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action: Action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Set of 4 reference point
            */
            setBezierParamer();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseBounce abstract class.
								
							
        */
        export class EaseBounce extends cc.ActionEase {
            /**
            * cc.EaseBounce abstract class.
            */
            constructor();
            /**
            * 
            */
            bounceTime(time1: number);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates an ease bounce action.
            */
            static create(action: ActionInterval);
            /**
            * Create a action.
            */
            reverse();
        }
}
declare module cc {
        /**
        * 
								cc.EaseBounceIn action. 
Eased bounce effect at the beginning.
								
							
        */
        export class EaseBounceIn extends cc.EaseBounce {
            /**
            * cc.EaseBounceIn action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create(action: ActionInterval);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseBounceInOut action. 
Eased bounce effect at the begining and ending.
								
							
        */
        export class EaseBounceInOut extends cc.EaseBounce {
            /**
            * cc.EaseBounceInOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create(action: ActionInterval);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseBounceOut action. 
Eased bounce effect at the ending.
								
							
        */
        export class EaseBounceOut extends cc.EaseBounce {
            /**
            * cc.EaseBounceOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create(action: ActionInterval);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseCircleActionIn action. 
Reference easeInCirc: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseCircleActionIn extends cc.ActionEase {
            /**
            * cc.EaseCircleActionIn action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseCircleActionInOut action. 
Reference easeInOutCirc: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseCircleActionInOut extends cc.ActionEase {
            /**
            * cc.EaseCircleActionInOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseCircleActionOut action. 
Reference easeOutCirc: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseCircleActionOut extends cc.ActionEase {
            /**
            * cc.EaseCircleActionOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseCubicActionIn action. 
Reference easeInCubic: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseCubicActionIn extends cc.ActionEase {
            /**
            * cc.EaseCubicActionIn action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseCubicActionInOut action. 
Reference easeInOutCubic: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseCubicActionInOut extends cc.ActionEase {
            /**
            * cc.EaseCubicActionInOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseCubicActionOut action. 
Reference easeOutCubic: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseCubicActionOut extends cc.ActionEase {
            /**
            * cc.EaseCubicActionOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Ease Elastic abstract class.
								
							
        */
        export class EaseElastic extends cc.ActionEase {
            /**
            * Ease Elastic abstract class.
            */
            constructor(action: ActionInterval, period: number);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action with the inner action and the period in radians (default is 0.3).
            */
            static create(action: ActionInterval, period: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action: ActionInterval, period: number);
            /**
            * get period of the wave in radians.
            */
            getPeriod();
            /**
            * Initializes the action with the inner action and the period in radians (default is 0.3)
            */
            initWithAction(action: ActionInterval, period: number);
            /**
            * Create a action.
            */
            reverse();
            /**
            * set period of the wave in radians.
            */
            setPeriod(period: number);
        }
}
declare module cc {
        /**
        * 
								Ease Elastic In action. 
Reference easeInElastic: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseElasticIn extends cc.EaseElastic {
            /**
            * Ease Elastic In action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action with the inner action and the period in radians (default is 0.3).
            */
            static create(action: ActionInterval, period: number);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Ease Elastic InOut action. 
Reference easeInOutElastic: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseElasticInOut extends cc.EaseElastic {
            /**
            * Ease Elastic InOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action with the inner action and the period in radians (default is 0.3).
            */
            static create(action: ActionInterval, period: number);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Ease Elastic Out action. 
Reference easeOutElastic: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseElasticOut extends cc.EaseElastic {
            /**
            * Ease Elastic Out action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action with the inner action and the period in radians (default is 0.3).
            */
            static create(action: ActionInterval, period: number);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.Ease Exponential In. Slow to Fast. 
Reference easeInExpo: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseExponentialIn extends cc.ActionEase {
            /**
            * cc.Ease Exponential In.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action easing object with the rate parameter.
            */
            static create(action: ActionInterval);
            /**
            * Create a cc.EaseExponentialOut action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Ease Exponential InOut. 
Reference easeInOutExpo: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseExponentialInOut extends cc.ActionEase {
            /**
            * Ease Exponential InOut.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * creates an EaseExponentialInOut action.
            */
            static create(action: ActionInterval);
            /**
            * Create a cc.EaseExponentialInOut action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Ease Exponential Out. 
Reference easeOutExpo: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseExponentialOut extends cc.ActionEase {
            /**
            * Ease Exponential Out.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action easing object with the rate parameter.
            */
            static create(action: ActionInterval);
            /**
            * Create a cc.EaseExponentialIn action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseIn action with a rate. From slow to fast.
								
							
        */
        export class EaseIn extends cc.EaseRateAction {
            /**
            * cc.EaseIn action with a rate.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action with the inner action and the rate parameter.
            */
            static create(action: ActionInterval, rate: number);
            /**
            * Create a cc.easeIn action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseInOut action with a rate. 
Slow to fast then to slow.
								
							
        */
        export class EaseInOut extends cc.EaseRateAction {
            /**
            * cc.EaseInOut action with a rate.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action with the inner action and the rate parameter.
            */
            static create(action: ActionInterval, rate: number);
            /**
            * Create a cc.EaseInOut action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseOut action with a rate. From fast to slow.
								
							
        */
        export class EaseOut extends cc.EaseRateAction {
            /**
            * cc.EaseOut action with a rate.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action with the inner action and the rate parameter.
            */
            static create(action: ActionInterval, rate: number);
            /**
            * Create a cc.easeIn action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseQuadraticActionIn action. 
Reference easeInQuad: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseQuadraticActionIn extends cc.ActionEase {
            /**
            * cc.EaseQuadraticActionIn action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the cc.EaseQuadRaticActionIn.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseQuadraticActionInOut action. 
Reference easeInOutQuad: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseQuadraticActionInOut extends cc.ActionEase {
            /**
            * cc.EaseQuadraticActionInOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseQuadraticActionIn action. 
Reference easeOutQuad: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseQuadraticActionOut extends cc.ActionEase {
            /**
            * cc.EaseQuadraticActionIn action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseQuarticActionIn action. 
Reference easeInQuart: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseQuarticActionIn extends cc.ActionEase {
            /**
            * cc.EaseQuarticActionIn action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseQuarticActionInOut action. 
Reference easeInOutQuart: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseQuarticActionInOut extends cc.ActionEase {
            /**
            * cc.EaseQuarticActionInOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseQuarticActionOut action. 
Reference easeOutQuart: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseQuarticActionOut extends cc.ActionEase {
            /**
            * cc.EaseQuarticActionOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseQuinticActionIn action. 
Reference easeInQuint: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseQuinticActionIn extends cc.ActionEase {
            /**
            * cc.EaseQuinticActionIn action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseQuinticActionInOut action. 
Reference easeInOutQuint: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseQuinticActionInOut extends cc.ActionEase {
            /**
            * cc.EaseQuinticActionInOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EaseQuinticActionOut action. 
Reference easeQuint: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseQuinticActionOut extends cc.ActionEase {
            /**
            * cc.EaseQuinticActionOut action.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create();
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Base class for Easing actions with rate parameters
								
							
        */
        export class EaseRateAction extends cc.ActionEase {
            /**
            * Base class for Easing actions with rate parameters
            */
            constructor(action: ActionInterval, rate: number);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action: ActionInterval, rate: number);
            /**
            * get rate value for the actions
            */
            getRate();
            /**
            * Initializes the action with the inner action and the rate parameter
            */
            initWithAction(action: ActionInterval, rate: number);
            /**
            * Create new action to original operation effect opposite.
            */
            reverse();
            /**
            * set rate value for the actions
            */
            setRate(rate: number);
        }
}
declare module cc {
        /**
        * 
								Ease Sine In. 
Reference easeInSine: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseSineIn extends cc.ActionEase {
            /**
            * Ease Sine In.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * creates an EaseSineIn action.
            */
            static create(action: ActionInterval);
            /**
            * Create a cc.EaseSineOut action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Ease Sine InOut. 
Reference easeInOutSine: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseSineInOut extends cc.ActionEase {
            /**
            * Ease Sine InOut.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create(action: ActionInterval);
            /**
            * Create a cc.EaseSineInOut action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Ease Sine Out. 
Reference easeOutSine: 
http://www.zhihu.com/question/21981571/answer/19925418
								
							
        */
        export class EaseSineOut extends cc.ActionEase {
            /**
            * Ease Sine Out.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates an EaseSineOut action.
            */
            static create(action: ActionInterval);
            /**
            * Create a cc.EaseSineIn action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.EditBox is a brief Class for edit box.
You can use this widget to gather small amounts of text from the user.
								
							
        */
        export class EditBox extends cc.ControlButton {
            /**
            * cc.EditBox is a brief Class for edit box.
            */
            constructor();
            /**
            * create a edit box with size and background-color or
            */
            static create(size: Size, normal9SpriteBg: Scale9Sprite, press9SpriteBg: Scale9Sprite, disabled9SpriteBg: Scale9Sprite);
            /**
            * get the rect of a node in world coordinate frame
            */
            static getRect(node: Node);
        }
}
declare module cc {
        /**
        * 
        */
        export class EditBoxDelegate extends cc.Class {
            /**
            * 
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								Base class of all kinds of events.
								
							
        */
        export class Event extends cc.Class {
            /**
            * Base class of all kinds of events.
            */
            constructor();
            /**
            * 
    Gets current target of the event                                                            
    note: It only be available when the event listener is associated with node.
            */
            getCurrentTarget();
            /**
            * Gets the event type
            */
            getType();
            /**
            * Checks whether the event has been stopped
            */
            isStopped();
            /**
            * Stops propagation for current event
            */
            stopPropagation();
        }
}
declare module cc {
        /**
        * 
								The Custom event
								
							
        */
        export class EventCustom extends cc.Event {
            /**
            * The Custom event
            */
            constructor();
            /**
            * Gets event name
            */
            getEventName();
            /**
            * Gets user data
            */
            getUserData();
            /**
            * Sets user data
            */
            setUserData(data: *);
        }
}
declare module cc {
        /**
        * 
								The widget focus event.
								
							
        */
        export class EventFocus extends cc.Event {
            /**
            * The widget focus event.
            */
            constructor();
            /**
            * Constructor function.
            */
            ctor(widgetLoseFocus: i.Widget, widgetGetFocus: i.Widget);
        }
}
declare module cc {
        /**
        * 
								
    The base class of event listener.                                                                        
    If you need custom listener which with different callback, you need to inherit this class.               
    For instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,                       
     EventListenerTouchOneByOne, EventListenerCustom.

								
							
        */
        export class EventListener extends cc.Class {
            /**
            * 
    The base class of event listener.
            */
            constructor();
            /**
            * Checks whether the listener is available.
            */
            checkAvailable();
            /**
            * Clones the listener, its subclasses have to override this method.
            */
            clone();
            /**
            * Create a EventListener object by json object
            */
            static create(argObj: object);
            /**
            * Initializes event with type and callback function
            */
            ctor(type: number, listenerID: string, callback: any);
            /**
            * Checks whether the listener is enabled
            */
            isEnabled();
            /**
            * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
            */
            release();
            /**
            * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
            */
            retain();
            /**
            * Enables or disables the listener
            */
            setEnabled(enabled: boolean);
        }
}
declare module cc {
        /**
        * 
								
 cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching. 
                                                                                                             
 The EventListener list is managed in such way so that event listeners can be added and removed          
 while events are being dispatched.

								
							
        */
        export class eventManager  {
            /**
            * 
 cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching.
            */
            constructor();
            /**
            * Adds a Custom event listener.
            */
            addCustomListener(eventName: string, callback: any);
            /**
            * 
Adds a event listener for a specified event.
            */
            addListener(listener: any, nodeOrPriority: any);
            /**
            * Dispatches a Custom Event with a event name an optional user data
            */
            dispatchCustomEvent(eventName: string, optionalUserData: *);
            /**
            * Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list.
            */
            dispatchEvent(event: Event);
            /**
            * Checks whether dispatching events is enabled
            */
            isEnabled();
            /**
            * Pauses all listeners which are associated the specified target.
            */
            pauseTarget(node: Node, recursive: boolean);
            /**
            * Removes all listeners
            */
            removeAllListeners();
            /**
            * Removes all custom listeners with the same event name
            */
            removeCustomListeners(customEventName: string);
            /**
            * Remove a listener
            */
            removeListener(listener: EventListener);
            /**
            * Removes all listeners with the same event listener type or removes all listeners of a node
            */
            removeListeners(listenerType: any, recursive: boolean);
            /**
            * Resumes all listeners which are associated the specified target.
            */
            resumeTarget(node: Node, recursive: boolean);
            /**
            * Whether to enable dispatching events
            */
            setEnabled(enabled: boolean);
            /**
            * Sets listener&#39;s priority with fixed value.
            */
            setPriority(listener: EventListener, fixedPriority: number);
        }
}
declare module cc {
        /**
        * 
								The mouse event
								
							
        */
        export class EventMouse extends cc.Event {
            /**
            * The mouse event
            */
            constructor();
            /**
            * Returns mouse button
            */
            getButton();
            /**
            * Returns the delta distance from the previous location to current location
            */
            getDelta();
            /**
            * Returns the X axis delta distance from the previous location to current location
            */
            getDeltaX();
            /**
            * Returns the Y axis delta distance from the previous location to current location
            */
            getDeltaY();
            /**
            * Returns cursor location
            */
            getLocation();
            /**
            * Returns the current cursor location in screen coordinates
            */
            getLocationInView();
            /**
            * Returns location X axis data
            */
            getLocationX();
            /**
            * Returns location Y axis data
            */
            getLocationY();
            /**
            * Returns the x axis scroll value
            */
            getScrollX();
            /**
            * Returns the y axis scroll value
            */
            getScrollY();
            /**
            * Sets mouse button
            */
            setButton(button: number);
            /**
            * Sets cursor location
            */
            setLocation(x: number, y: number);
            /**
            * Sets scroll data
            */
            setScrollData(scrollX: number, scrollY: number);
        }
}
declare module cc {
        /**
        * 
								The touch event
								
							
        */
        export class EventTouch extends cc.Event {
            /**
            * The touch event
            */
            constructor();
            /**
            * Returns event code
            */
            getEventCode();
            /**
            * Returns touches of event
            */
            getTouches();
        }
}
declare module cc {
        /**
        * 
								Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.
The &quot;reverse&quot; of this action is FadeOut
								
							
        */
        export class FadeIn extends cc.FadeTo {
            /**
            * Fades In an object that implements the cc.RGBAProtocol protocol.
            */
            constructor(duration: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
        }
}
declare module cc {
        /**
        * 
								Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
The &quot;reverse&quot; of this action is FadeIn
								
							
        */
        export class FadeOut extends cc.FadeTo {
            /**
            * Fades Out an object that implements the cc.RGBAProtocol protocol.
            */
            constructor(duration: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number);
            /**
            * Returns a reversed action.
            */
            reverse();
        }
}
declare module cc {
        /**
        * 
								cc.FadeOutBLTiles action. Fades out the tiles in a Bottom-Left direction. 
Reference the test cases (Effects Test)
								
							
        */
        export class FadeOutBLTiles extends cc.FadeOutTRTiles {
            /**
            * cc.FadeOutBLTiles action.
            */
            constructor();
            /**
            * Test function
            */
            testFunc(pos: Size, time: number);
        }
}
declare module cc {
        /**
        * 
								cc.FadeOutDownTiles action. Fades out the tiles in downwards direction. 
Reference the test cases (Effects Test)
								
							
        */
        export class FadeOutDownTiles extends cc.FadeOutUpTiles {
            /**
            * cc.FadeOutDownTiles action.
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								cc.FadeOutTRTiles action. Fades out the tiles in a Top-Right direction. 
Reference the test cases (Effects Test)
								
							
        */
        export class FadeOutTRTiles extends cc.TiledGrid3DAction {
            /**
            * cc.FadeOutTRTiles action.
            */
            constructor();
            /**
            * Test function
            */
            testFunc(pos: Size, time: number);
            /**
            * Transform tile
            */
            transformTile(pos: Point, distance: number);
            /**
            * Turn Off Tile
            */
            turnOffTile(pos: Point);
            /**
            * Turn on Tile
            */
            turnOnTile(pos: Point);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.FadeOutUpTiles action. Fades out the tiles in upwards direction. 
Reference the test cases (Effects Test)
								
							
        */
        export class FadeOutUpTiles extends cc.FadeOutTRTiles {
            /**
            * cc.FadeOutUpTiles action.
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
								
							
        */
        export class FadeTo extends cc.ActionInterval {
            /**
            * Fades an object that implements the cc.RGBAProtocol protocol.
            */
            constructor(duration: number, opacity: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, opacity: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, opacity: number);
            /**
            * Start this action with target.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(time: number);
        }
}
declare module cc {
        /**
        * 
								Base class actions that do have a finite time duration. 
Possible actions: 
- An action with a duration of 0 seconds. 
- An action with a duration of 35.5 seconds.

Infinite time actions are valid
								
							
        */
        export class FiniteTimeAction extends cc.Action {
            /**
            * Base class actions that do have a finite time duration.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * get duration of the action.
            */
            getDuration();
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * set duration of the action.
            */
            setDuration(duration: number);
        }
}
declare module cc {
        /**
        * 
								Flips the sprite horizontally.
								
							
        */
        export class FlipX extends cc.ActionInstant {
            /**
            * Flips the sprite horizontally.
            */
            constructor(flip: boolean);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(flip: boolean);
            /**
            * initializes the action with a set flipX.
            */
            initWithFlipX(flip: boolean);
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.FlipX3D action. 
Flip around. 
Reference the test cases (Effects Test)
								
							
        */
        export class FlipX3D extends cc.Grid3DAction {
            /**
            * cc.FlipX3D action.
            */
            constructor(duration: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number);
            /**
            * initializes the action with duration
            */
            initWithDuration(duration: number);
            /**
            * initializes the action with gridSize and duration
            */
            initWithSize(gridSize: Size, duration: number);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Flips the sprite vertically
								
							
        */
        export class FlipY extends cc.ActionInstant {
            /**
            * Flips the sprite vertically
            */
            constructor(flip: boolean);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(flip: boolean);
            /**
            * initializes the action with a set flipY.
            */
            initWithFlipY(flip: boolean);
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.FlipY3D action. 
Upside down. 
Reference the test cases (Effects Test)
								
							
        */
        export class FlipY3D extends cc.FlipX3D {
            /**
            * cc.FlipY3D action.
            */
            constructor(duration: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.Follow is an action that &quot;follows&quot; a node.
								
							
        */
        export class Follow extends cc.Action {
            /**
            * cc.Follow is an action that &quot;follows&quot; a node.
            */
            constructor(followedNode: Node, rect: Rect);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(followedNode: Node, rect: Rect);
            /**
            * initializes the action with a set boundary.
            */
            initWithTarget(followedNode: Node, rect: Rect);
            /**
            * Get whether camera should be limited to certain area.
            */
            isBoundarySet();
            /**
            * Return true if the action has finished.
            */
            isDone();
            /**
            * alter behavior - turn on/off boundary.
            */
            setBoudarySet(value: boolean);
            /**
            * called every frame with it&#39;s delta time.
            */
            step(dt: number);
            /**
            * Stop the action.
            */
            stop();
        }
}
declare module cc {
        /**
        * 
        */
        export class FontDefinition  {
            /**
            * 
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								An object to boot the game.
								
							
        */
        export class game  {
            /**
            * An object to boot the game.
            */
            constructor();
            /**
            * Prepare game.
            */
            prepare();
            /**
            * Restart game.
            */
            restart();
            /**
            * Run game.
            */
            run();
            /**
            * Set frameRate of game.
            */
            setFrameRate();
        }
}
declare module cc {
        /**
        * 
								Class that implements a WebGL program
								
							
        */
        export class GLProgram extends cc.Class {
            /**
            * Class that implements a WebGL program
            */
            constructor();
            /**
            * It will add a new attribute to the shader
            */
            addAttribute(attributeName: string, index: number);
            /**
            * Create a cc.GLProgram object
            */
            static create(vShaderFileName: string, fShaderFileName: string);
            /**
            * Create a cc.GLProgram object
            */
            ctor(vShaderFileName: string, fShaderFileName: string);
            /**
            * destroy program
            */
            destroyProgram();
            /**
            * returns the fragmentShader error log
            */
            fragmentShaderLog();
            /**
            * returns the fragmentShader error log
            */
            getFragmentShaderLog();
            /**
            * get WebGLProgram object
            */
            getProgram();
            /**
            * returns the program error log
            */
            getProgramLog();
            /**
            * calls retrieves the named uniform location for this shader program.
            */
            getUniformLocationForName(name: string);
            /**
            * get uniform MVP matrix
            */
            getUniformMVPMatrix();
            /**
            * get uniform sampler
            */
            getUniformSampler();
            /**
            * returns the vertexShader error log
            */
            getVertexShaderLog();
            /**
            * Initializes the CCGLProgram with a vertex and fragment with contents of filenames
            */
            init(vShaderFilename: string, fShaderFileName: string);
            /**
            * Initializes the cc.GLProgram with a vertex and fragment with string
            */
            initWithString(vertShaderStr: string, fragShaderStr: string);
            /**
            * Initializes the cc.GLProgram with a vertex and fragment with string
            */
            initWithVertexShaderByteArray(vertShaderStr: string, fragShaderStr: string);
            /**
            * Initializes the CCGLProgram with a vertex and fragment with contents of filenames
            */
            initWithVertexShaderFilename(vShaderFilename: string, fShaderFileName: string);
            /**
            * links the glProgram
            */
            link();
            /**
            * returns the program error log
            */
            programLog();
            /**
            * reload all shaders, this function is designed for android  
 when opengl context lost, so don&#39;t call it.
            */
            reset();
            /**
            * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
            */
            retain();
            /**
            * will update the MVP matrix on the MVP uniform if it is different than the previous call for this same shader program.
            */
            setUniformForModelViewProjectionMatrix();
            /**
            * calls glUniform1i only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationI32(location: WebGLUniformLocation, i1: number);
            /**
            * calls glUniform1f only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith1f(location: WebGLUniformLocation, f1: number);
            /**
            * calls glUniform1i only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith1i(location: WebGLUniformLocation, i1: number);
            /**
            * calls glUniform2f only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith2f(location: WebGLUniformLocation, f1: number, f2: number);
            /**
            * calls glUniform2fv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith2fv(location: WebGLUniformLocation, floatArray: Float32Array, numberOfArrays: number);
            /**
            * calls glUniform2i only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith2i(location: WebGLUniformLocation, i1: number, i2: number);
            /**
            * calls glUniform2iv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith2iv(location: WebGLUniformLocation, intArray: Int32Array, numberOfArrays: number);
            /**
            * calls glUniform3f only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith3f(location: WebGLUniformLocation, f1: number, f2: number, f3: number);
            /**
            * calls glUniform3fv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith3fv(location: WebGLUniformLocation, floatArray: Float32Array, numberOfArrays: number);
            /**
            * calls glUniform3i only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith3i(location: WebGLUniformLocation, i1: number, i2: number, i3: number);
            /**
            * calls glUniform3iv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith3iv(location: WebGLUniformLocation, intArray: Int32Array, numberOfArrays: number);
            /**
            * calls glUniform4f only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith4f(location: WebGLUniformLocation, f1: number, f2: number, f3: number, f4: number);
            /**
            * calls glUniform4fv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith4fv(location: WebGLUniformLocation, floatArray: Float32Array, numberOfArrays: number);
            /**
            * calls glUniform4i only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith4i(location: WebGLUniformLocation, i1: number, i2: number, i3: number, i4: number);
            /**
            * calls glUniform4iv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith4iv(location: WebGLUniformLocation, intArray: Int32Array, numberOfArrays: number);
            /**
            * calls glUniformMatrix4fv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWithMatrix4fv(location: WebGLUniformLocation, matrixArray: Float32Array, numberOfMatrices: number);
            /**
            * will update the builtin uniforms if they are different than the previous call for this same shader program.
            */
            setUniformsForBuiltins();
            /**
            * It will create 4 uniforms:
 cc.UNIFORM_PMATRIX
 cc.UNIFORM_MVMATRIX
 cc.UNIFORM_MVPMATRIX
 cc.UNIFORM_SAMPLER
            */
            updateUniforms();
            /**
            * it will call glUseProgram()
            */
            use();
            /**
            * returns the vertexShader error log
            */
            vertexShaderLog();
        }
}
declare module cc {
        /**
        * 
								FBO class that grabs the the contents of the screen
								
							
        */
        export class Grabber extends cc.Class {
            /**
            * FBO class that grabs the the contents of the screen
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								cc.Grid3D is a 3D grid implementation. Each vertex has 3 dimensions: x,y,z
								
							
        */
        export class Grid3D extends cc.GridBase {
            /**
            * cc.Grid3D is a 3D grid implementation.
            */
            constructor();
            /**
            * create one Grid3D object
            */
            static create(gridSize: Size, texture: Texture2D, flipped: boolean);
            /**
            * create one Grid3D object
Constructor of cc.Grid3D
            */
            ctor(gridSize: Size, texture: Texture2D, flipped: boolean);
            /**
            * returns the original (non-transformed) vertex at a given position
            */
            originalVertex(pos: Point);
            /**
            * sets a new vertex at a given position
            */
            setVertex(pos: Point, vertex: Vertex3F);
            /**
            * returns the vertex at a given position
            */
            vertex(pos: Point);
        }
}
declare module cc {
        /**
        * 
								Base class for cc.Grid3D actions. 
Grid3D actions can modify a non-tiled grid.
								
							
        */
        export class Grid3DAction extends cc.GridAction {
            /**
            * Base class for cc.Grid3D actions.
            */
            constructor();
            /**
            * returns the grid
            */
            getGrid();
            /**
            * returns the non-transformed vertex than belongs to certain position in the grid
            */
            originalVertex(position: Point);
            /**
            * sets a new vertex to a certain position of the grid
            */
            setVertex(position: Point, vertex: Vertex3F);
            /**
            * returns the vertex than belongs to certain position in the grid
            */
            vertex(position: Point);
        }
}
declare module cc {
        /**
        * 
								Base class for Grid actions
								
							
        */
        export class GridAction extends cc.ActionInterval {
            /**
            * Base class for Grid actions
            */
            constructor(duration: number, gridSize: Size);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size);
            /**
            * Returns the grid.
            */
            getGrid();
            /**
            * Initializes the action with size and duration.
            */
            initWithDuration(duration: number, gridSize: Size);
            /**
            * Create a cc.ReverseTime action.
            */
            reverse();
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
        }
}
declare module cc {
        /**
        * 
								Base class for cc.Grid
								
							
        */
        export class GridBase extends cc.Class {
            /**
            * Base class for cc.Grid
            */
            constructor();
            /**
            * create one cc.GridBase Object
            */
            static create(gridSize: Size, texture: Texture2D, flipped: boolean);
            /**
            * create one cc.GridBase Object
Constructor of cc.GridBase
            */
            ctor(gridSize: Size, texture: Texture2D, flipped: boolean);
            /**
            * get size of the grid
            */
            getGridSize();
            /**
            * get number of times that the grid will be reused
            */
            getReuseGrid();
            /**
            * get pixels between the grids
            */
            getStep();
            /**
            * 
            */
            initWithSize(gridSize: Size, texture: Texture2D, flipped: boolean);
            /**
            * whether or not the grid is active
            */
            isActive();
            /**
            * get whether or not the texture is flipped
            */
            isTextureFlipped();
            /**
            * whether or not the grid is active
            */
            setActive(active: number);
            /**
            * set size of the grid
            */
            setGridSize(gridSize: Size);
            /**
            * set number of times that the grid will be reused
            */
            setReuseGrid();
            /**
            * set pixels between the grids
            */
            setStep(step: Point);
            /**
            * set whether or not the texture is flipped
            */
            setTextureFlipped(flipped: boolean);
        }
}
declare module cc {
        /**
        * 
        */
        export class HashElement extends cc.Class {
            /**
            * 
            */
            constructor();
            /**
            * Constructor
            */
            ctor();
        }
}
declare module cc {
        /**
        * 
								Hide the node.
								
							
        */
        export class Hide extends cc.ActionInstant {
            /**
            * Hide the node.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								TGA format
								
							
        */
        export class ImageTGA  {
            /**
            * TGA format
            */
            constructor(status: number, type: number, pixelDepth: number, width: number, height: number, imageData: Array, flipped: number);
        }
}
declare module cc {
        /**
        * 
								Input method editor delegate.
								
							
        */
        export class IMEDelegate extends cc.Class {
            /**
            * Input method editor delegate.
            */
            constructor();
            /**
            * Remove delegate
            */
            attachWithIME();
            /**
            * Decide the delegate instance is ready for receive ime message or not.
            */
            canAttachWithIME();
            /**
            * Decide the delegate instance can stop receive ime message or not.
            */
            canDetachWithIME();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * Called by CCIMEDispatcher when user clicked the backward key.
            */
            deleteBackward();
            /**
            * Detach with IME
            */
            detachWithIME();
            /**
            * When the delegate detach with IME, this method call by CCIMEDispatcher.
            */
            didAttachWithIME();
            /**
            * When the delegate detach with IME, this method call by CCIMEDispatcher.
            */
            didDetachWithIME();
            /**
            * Called by CCIMEDispatcher for get text which delegate already has.
            */
            getContentText();
            /**
            * Called by CCIMEDispatcher when some text input from IME.
            */
            insertText();
            /**
            * Remove delegate
            */
            removeDelegate();
        }
}
declare module cc {
        /**
        * 
								cc.imeDispatcher is a singleton object which manage input message dispatching.
								
							
        */
        export class imeDispatcher  {
            /**
            * cc.imeDispatcher is a singleton object which manage input message dispatching.
            */
            constructor();
            /**
            * Add delegate to concern ime msg
            */
            addDelegate(delegate: IMEDelegate);
            /**
            * Attach the pDeleate with ime.
            */
            attachDelegateWithIME(delegate: IMEDelegate);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * Detach the pDeleate with ime.
            */
            detachDelegateWithIME(delegate: IMEDelegate);
            /**
            * Dispatch the delete backward operation
            */
            dispatchDeleteBackward();
            /**
            * Dispatch the input text from ime
            */
            dispatchInsertText(text: string, len: number);
            /**
            * Dispatch keyboard notification
            */
            dispatchKeyboardDidHide(info: IMEKeyboardNotificationInfo);
            /**
            * Dispatch keyboard notification
            */
            dispatchKeyboardDidShow(info: IMEKeyboardNotificationInfo);
            /**
            * Dispatch keyboard notification
            */
            dispatchKeyboardWillHide(info: IMEKeyboardNotificationInfo);
            /**
            * Dispatch keyboard notification
            */
            dispatchKeyboardWillShow(info: IMEKeyboardNotificationInfo);
            /**
            * Get the content text, which current CCIMEDelegate which attached with IME has.
            */
            getContentText();
            /**
            * Process keydown&#39;s keycode
            */
            processKeycode(keyCode: number);
            /**
            * Remove the delegate from the delegates who concern ime msg
            */
            removeDelegate(delegate: IMEDelegate);
        }
}
declare module cc.IMEDispatcher {
        /**
        * 
								Create the cc.IMEDispatcher.Imp Object. 
This is the inner class...
								
							
        */
        export class Impl extends cc.Class {
            /**
            * Create the cc.IMEDispatcher.Imp Object.
            */
            constructor();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * Find delegate
            */
            findDelegate(delegate: cc.IMEDelegate);
        }
}
declare module cc {
        /**
        * 
								
 This class manages all events of input. include: touch, mouse, accelerometer, keyboard                                       

								
							
        */
        export class inputManager  {
            /**
            * 
 This class manages all events of input.
            */
            constructor();
            /**
            * 
            */
            getHTMLElementPosition(element: HTMLElement);
            /**
            * 
            */
            getMouseEvent(location: Point, pos: Point, eventType: number);
            /**
            * 
            */
            getPointByEvent(event: Touch, pos: Point);
            /**
            * 
            */
            getPreTouch(touch: Touch);
            /**
            * 
            */
            getSetOfTouchesEndOrCancel(touches: Array);
            /**
            * 
            */
            getTouchByXY(tx: number, ty: number, pos: Point);
            /**
            * 
            */
            getTouchesByEvent(event: Touch, pos: Point);
            /**
            * 
            */
            handleTouchesBegin(touches: Array);
            /**
            * 
            */
            handleTouchesCancel(touches: Array);
            /**
            * 
            */
            handleTouchesEnd(touches: Array);
            /**
            * 
            */
            handleTouchesMove(touches: Array);
            /**
            * 
            */
            registerSystemEvent(element: HTMLElement);
            /**
            * 
            */
            setPreTouch(touch: Touch);
            /**
            * 
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								An Invocation class
								
							
        */
        export class Invocation extends cc.Class {
            /**
            * An Invocation class
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								Moves a cc.Node object simulating a parabolic jump movement by modifying it&#39;s position attribute.
Relative to its movement.
								
							
        */
        export class JumpBy extends cc.ActionInterval {
            /**
            * Moves a cc.Node object simulating a parabolic jump movement by modifying it&#39;s position attribute.
            */
            constructor(duration: number, position: any, y: number, height: number, jumps: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, position: any, y: number, height: number, jumps: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, position: any, y: number, height: number, jumps: number);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.JumpTiles3D action.  A sin function is executed to move the tiles across the Z axis. 
Reference the test cases (Effects Test)
								
							
        */
        export class JumpTiles3D extends cc.TiledGrid3DAction {
            /**
            * cc.JumpTiles3D action.
            */
            constructor(duration: number, gridSize: Size, numberOfJumps: number, amplitude: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, numberOfJumps: number, amplitude: number);
            /**
            * get amplitude of the sin
            */
            getAmplitude();
            /**
            * get amplitude rate
            */
            getAmplitudeRate();
            /**
            * initializes the action with the number of jumps, the sin amplitude, the grid size and the duration
            */
            initWithDuration(duration: number, gridSize: Size, numberOfJumps: number, amplitude: number);
            /**
            * set amplitude of the sin
            */
            setAmplitude(amplitude: number);
            /**
            * set amplitude rate
            */
            setAmplitudeRate();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it&#39;s position attribute. 
Jump to the specified location.
								
							
        */
        export class JumpTo extends cc.JumpBy {
            /**
            * Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it&#39;s position attribute.
            */
            constructor(duration: number, position: any, y: number, height: number, jumps: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, position: any, y: number, height: number, jumps: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, position: any, y: number, height: number, jumps: number);
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
        }
}
declare module cc {
        /**
        * 
								The Quaternion class
								
							
        */
        export class kmQuaternion  {
            /**
            * The Quaternion class
            */
            constructor(x: number, y: number, z: number, w: number);
        }
}
declare module cc {
        /**
        * 
								using image file to print text label on the screen, might be a bit slower than cc.Label, similar to cc.LabelBMFont
								
							
        */
        export class LabelAtlas extends cc.AtlasNode {
            /**
            * using image file to print text label on the screen, might be a bit slower than cc.Label, similar to cc.LabelBMFont
            */
            constructor(strText: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: number);
            /**
            * Add texture loaded event listener.
            */
            addLoadedEventListener(callback: Function, target: Node);
            /**
            * 
    Please use new cc.LabelAtlas instead.
            */
            static create(strText: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: number);
            /**
            * 
 Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(strText: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: number);
            /**
            * return the text of this label
            */
            getString();
            /**
            * 
 initializes the cc.LabelAtlas with a string, a char map file(the atlas), 
 the width and height of each element and the starting char of the atlas 
 It accepts two groups of parameters: 
a) string, fntFile 
b) label, textureFilename, width, height, startChar 

            */
            initWithString(strText: string, charMapFile: any, itemWidth: number, itemHeight: number, startCharMap: number);
            /**
            * Set the color.
            */
            setColor(color3: Color);
            /**
            * set the display string
            */
            setString(label: string);
            /**
            * Return  texture is loaded.
            */
            textureLoaded();
            /**
            * Atlas generation
            */
            updateAtlasValues();
        }
}
declare module cc {
        /**
        * 
								cc.LabelBMFont is a subclass of cc.SpriteBatchNode.

Features:
- Treats each character like a cc.Sprite. This means that each individual character can be:
- rotated
- scaled
- translated
- tinted
- change the opacity
- It can be used as part of a menu item.
- anchorPoint can be used to align the &quot;label&quot;
- Supports AngelCode text format

Limitations:
- All inner characters are using an anchorPoint of (0.5, 0.5) and it is not recommend to change it
because it might affect the rendering

cc.LabelBMFont implements the protocol cc.LabelProtocol, like cc.Label and cc.LabelAtlas.
cc.LabelBMFont has the flexibility of cc.Label, the speed of cc.LabelAtlas and all the features of cc.Sprite.
If in doubt, use cc.LabelBMFont instead of cc.LabelAtlas / cc.Label.

Supported editors:
http://glyphdesigner.71squared.com/ (Commercial, Mac OS X)
http://www.n4te.com/hiero/hiero.jnlp (Free, Java)
http://slick.cokeandcode.com/demos/hiero.jnlp (Free, Java)
http://www.angelcode.com/products/bmfont/ (Free, Windows only)
								
							
        */
        export class LabelBMFont extends cc.SpriteBatchNode {
            /**
            * cc.LabelBMFont is a subclass of cc.SpriteBatchNode.
            */
            constructor(str: string, fntFile: string, width: number, alignment: number, imageOffset: Point);
            /**
            * add texture loaded event listener.
            */
            addLoadedEventListener(callback: Function, target: Object);
            /**
            * creates a bitmap font atlas with an initial string and the FNT file
            */
            static create(str: string, fntFile: string, width: number, alignment: number, imageOffset: Point);
            /**
            * updates the font chars based on the string to render
            */
            createFontChars();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(str: string, fntFile: string, width: number, alignment: number, imageOffset: Point);
            /**
            * Return the fnt file path.
            */
            getFntFile();
            /**
            * Gets the text of this label
            */
            getString();
            /**
            * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it
.
            */
            init();
            /**
            * init a bitmap font atlas with an initial string and the FNT file
            */
            initWithString(str: string, fntFile: string, width: number, alignment: number, imageOffset: Point);
            /**
            * Conforms to cc.RGBAProtocol protocol.
            */
            isOpacityModifyRGB();
            /**
            * Set text alignment.
            */
            setAlignment(alignment: number);
            /**
            * Set the AnchorPoint of the labelBMFont.
            */
            setAnchorPoint(point: any, y: number);
            /**
            * Set the bounding width.
            */
            setBoundingWidth(width: number);
            /**
            * Set the text.
            */
            setCString();
            /**
            * set fnt file path.
            */
            setFntFile(fntFile: string);
            /**
            * Set the param to change English word warp according to whether the space.
            */
            setLineBreakWithoutSpace(breakWithoutSpace: boolean);
            /**
            * Set whether to support cc.RGBAProtocol protocol
            */
            setOpacityModifyRGB(opacityModifyRGB: boolean);
            /**
            * Set scale.
            */
            setScale(scale: number, scaleY: number);
            /**
            * Set scale of x.
            */
            setScaleX(scaleX: number);
            /**
            * Set scale of x.
            */
            setScaleY(scaleY: number);
            /**
            * Set the text
            */
            setString(newString: string, needUpdateLabel: any);
            /**
            * return  texture is loaded
            */
            textureLoaded();
            /**
            * Update Label.
            */
            updateLabel();
            /**
            * Update String.
            */
            updateString(fromUpdate: boolean);
        }
}
declare module cc {
        /**
        * 
								cc.LabelTTF is a subclass of cc.TextureNode that knows how to render text labels with system font or a ttf font file
All features from cc.Sprite are valid in cc.LabelTTF
cc.LabelTTF objects are slow for js-binding on mobile devices.
Consider using cc.LabelAtlas or cc.LabelBMFont instead.
You can create a cc.LabelTTF from a font name, alignment, dimension and font size or a cc.FontDefinition object.
								
							
        */
        export class LabelTTF extends cc.Sprite {
            /**
            * cc.LabelTTF is a subclass of cc.TextureNode that knows how to render text labels with system font or a ttf font file
All features from cc.Sprite are valid in cc.LabelTTF
cc.LabelTTF objects are slow for js-binding on mobile devices.
            */
            constructor(text: string, fontName: any, fontSize: number, dimensions: Size, hAlignment: number, vAlignment: number);
            /**
            * creates a cc.LabelTTF from a font name, alignment, dimension and font size
            */
            static create(text: string, fontName: any, fontSize: number, dimensions: Size, hAlignment: number, vAlignment: number);
            /**
            * 
            */
            static createWithFontDefinition();
            /**
            * Disable shadow rendering
            */
            disableShadow();
            /**
            * Disable label stroke
            */
            disableStroke();
            /**
            * Enable or disable shadow for the label
            */
            enableShadow(a: any, b: any, c: number, d: any);
            /**
            * Enable label stroke with stroke parameters
            */
            enableStroke(strokeColor: Color, strokeSize: number);
            /**
            * Returns the actual content size of the label, the content size is the real size that the label occupied while dimension is the outer bounding box of the label.
            */
            getContentSize();
            /**
            * Returns the dimensions of cc.LabelTTF, the dimension is the maximum size of the label, set it so that label will automatically change lines when necessary.
            */
            getDimensions();
            /**
            * Returns font name of cc.LabelTTF
            */
            getFontName();
            /**
            * Returns font size of cc.LabelTTF
            */
            getFontSize();
            /**
            * Returns Horizontal Alignment of cc.LabelTTF
            */
            getHorizontalAlignment();
            /**
            * Returns the text of the label
            */
            getString();
            /**
            * Extract the text definition used by this label
            */
            getTextDefinition();
            /**
            * Returns Vertical Alignment of cc.LabelTTF
            */
            getVerticalAlignment();
            /**
            * Initializes the cc.LabelTTF with a font name, alignment, dimension and font size, do not call it by yourself,
you should pass the correct arguments in constructor to initialize the label.
            */
            initWithString(label: string, fontName: string, fontSize: number, dimensions: Size, hAlignment: number, vAlignment: number);
            /**
            * Initializes the CCLabelTTF with a font name, alignment, dimension and font size, do not call it by yourself, you should pass the correct arguments in constructor to initialize the label.
            */
            initWithStringAndTextDefinition(text: string, textDefinition: FontDefinition);
            /**
            * Set Dimensions of cc.LabelTTF, the dimension is the maximum size of the label, set it so that label will automatically change lines when necessary.
            */
            setDimensions(dim: any, height: number);
            /**
            * Sets the text fill color
            */
            setFontFillColor(fillColor: Color);
            /**
            * Sets font name of cc.LabelTTF
            */
            setFontName(fontName: string);
            /**
            * Sets font size of cc.LabelTTF
            */
            setFontSize(fontSize: number);
            /**
            * Sets Horizontal Alignment of cc.LabelTTF
            */
            setHorizontalAlignment(alignment: any);
            /**
            * Changes the text content of the label
            */
            setString(text: string);
            /**
            * Sets the text definition used by this label
            */
            setTextDefinition(theDefinition: FontDefinition);
            /**
            * Sets Vertical Alignment of cc.LabelTTF
            */
            setVerticalAlignment(verticalAlignment: any);
        }
}
declare module cc {
        /**
        * 
								cc.Layer is a subclass of cc.Node that implements the TouchEventsDelegate protocol.
All features from cc.Node are valid, plus the bake feature: Baked layer can cache a static layer to improve performance
								
							
        */
        export class Layer extends cc.Node {
            /**
            * cc.Layer is a subclass of cc.Node that implements the TouchEventsDelegate protocol.
            */
            constructor();
            /**
            * Sets the layer to cache all of children to a bake sprite, and draw itself by bake sprite.
            */
            bake();
            /**
            * Creates a layer
            */
            static create();
            /**
            * Constructor of cc.Layer, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * Initialization of the layer, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer
            */
            init();
            /**
            * Determines if the layer is baked.
            */
            isBaked();
            /**
            * Cancel the layer to cache all of children to a bake sprite.
            */
            unbake();
        }
}
declare module cc {
        /**
        * 
								
CCLayerColor is a subclass of CCLayer that implements the CCRGBAProtocol protocol.       
 All features from CCLayer are valid, plus the following new features:                   
- opacity                                                                     
- RGB colors                                                                  
								
							
        */
        export class LayerColor extends cc.Layer {
            /**
            * 
CCLayerColor is a subclass of CCLayer that implements the CCRGBAProtocol protocol.
            */
            constructor(color: Color, width: number, height: number);
            /**
            * change height in Points
            */
            changeHeight(h: number);
            /**
            * Changes width in Points
            */
            changeWidth(w: number);
            /**
            * Changes width and height
            */
            changeWidthAndHeight(w: number, h: number);
            /**
            * Creates a cc.Layer with color, width and height in Points
            */
            static create(color: Color, width: any, height: any);
            /**
            * Constructor of cc.LayerColor
            */
            ctor(color: Color, width: number, height: number);
            /**
            * Returns the blend function
            */
            getBlendFunc();
            /**
            * Initialization of the layer, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer
            */
            init(color: Color, width: number, height: number);
            /**
            * Sets the blend func, you can pass either a cc.BlendFunc object or source and destination value separately
            */
            setBlendFunc(src: any, dst: number);
        }
}
declare module cc {
        /**
        * 
								
CCLayerGradient is a subclass of cc.LayerColor that draws gradients across the background.

All features from cc.LayerColor are valid, plus the following new features:
direction
final color
interpolation mode

Color is interpolated between the startColor and endColor along the given
vector (starting at the origin, ending at the terminus).  If no vector is
supplied, it defaults to (0, -1) -- a fade from top to bottom.

If &#39;compressedInterpolation&#39; is disabled, you will not see either the start or end color for
non-cardinal vectors; a smooth gradient implying both end points will be still
be drawn, however.

If &#39;compressedInterpolation&#39; is enabled (default mode) you will see both the start and end colors of the gradient.

								
							
        */
        export class LayerGradient extends cc.LayerColor {
            /**
            * 
CCLayerGradient is a subclass of cc.LayerColor that draws gradients across the background.
            */
            constructor(start: Color, end: Color, v: Point);
            /**
            * Creates a gradient layer
            */
            static create(start: Color, end: Color, v: any);
            /**
            * Constructor of cc.LayerGradient
            */
            ctor(start: Color, end: Color, v: Point);
            /**
            * Returns the end color
            */
            getEndColor();
            /**
            * Returns the end gradient opacity
            */
            getEndOpacity();
            /**
            * Returns the starting color
            */
            getStartColor();
            /**
            * Returns the starting gradient opacity
            */
            getStartOpacity();
            /**
            * Returns the direction vector of the gradient
            */
            getVector();
            /**
            * Initialization of the layer, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer
            */
            init(start: Color, end: Color, v: any);
            /**
            * Returns whether compressed interpolation is enabled
            */
            isCompressedInterpolation();
            /**
            * Sets whether compressed interpolation is enabled
            */
            setCompressedInterpolation(compress: boolean);
            /**
            * Sets the untransformed size of the LayerGradient.
            */
            setContentSize(size: any, height: number);
            /**
            * Sets the end gradient color
            */
            setEndColor(color: Color);
            /**
            * Sets the end gradient opacity
            */
            setEndOpacity(o: number);
            /**
            * Sets the starting color
            */
            setStartColor(color: Color);
            /**
            * Sets starting gradient opacity
            */
            setStartOpacity(o: number);
            /**
            * Sets the direction vector of the gradient
            */
            setVector(Var: Point);
        }
}
declare module cc {
        /**
        * 
								CCMultipleLayer is a CCLayer with the ability to multiplex it&#39;s children.
Features:
 - It supports one or more children
 - Only one children will be active a time
								
							
        */
        export class LayerMultiplex extends cc.Layer {
            /**
            * CCMultipleLayer is a CCLayer with the ability to multiplex it&#39;s children.
            */
            constructor(layers: Array);
            /**
            * Add a layer to the multiplex layers list
            */
            addLayer(layer: Layer);
            /**
            * Creates a cc.LayerMultiplex with one or more layers using a variable argument list.
            */
            static create();
            /**
            * Constructor of cc.LayerMultiplex
            */
            ctor(layers: Array);
            /**
            * Initialization of the layer multiplex, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer multiplex
            */
            initWithLayers(layers: Array);
            /**
            * Switches to a certain layer indexed by n.
            */
            switchTo(n: number);
            /**
            * Release the current layer and switches to another layer indexed by n.
            */
            switchToAndReleaseMe(n: number);
        }
}
declare module cc {
        /**
        * 
								cc.Lens3D action. 
Upside down. 
Reference the test cases (Effects Test)
								
							
        */
        export class Lens3D extends cc.Grid3DAction {
            /**
            * cc.Lens3D action.
            */
            constructor(duration: number, gridSize: Size, position: Point, radius: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, position: Point, radius: number);
            /**
            * Get lens center position
            */
            getLensEffect();
            /**
            * get Position
            */
            getPosition();
            /**
            * initializes the action with center position, radius, a grid size and duration
            */
            initWithDuration(duration: number, gridSize: Size, position: Point, radius: number);
            /**
            * Set whether lens is concave
            */
            setConcave(concave: boolean);
            /**
            * Set lens center position
            */
            setLensEffect(lensEffect: number);
            /**
            * set Position
            */
            setPosition(position: Point);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.Liquid action. 
Reference the test cases (Effects Test)
								
							
        */
        export class Liquid extends cc.Grid3DAction {
            /**
            * cc.Liquid action.
            */
            constructor(duration: number, gridSize: Size, waves: number, amplitude: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, waves: number, amplitude: number);
            /**
            * get amplitude
            */
            getAmplitude();
            /**
            * get amplitude rate
            */
            getAmplitudeRate();
            /**
            * initializes the action with amplitude, a grid and duration
            */
            initWithDuration(duration: number, gridSize: Size, waves: number, amplitude: number);
            /**
            * set amplitude
            */
            setAmplitude(amplitude: number);
            /**
            * set amplitude rate
            */
            setAmplitudeRate(amplitudeRate: number);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Loader for resource loading process. It&#39;s a singleton object.
								
							
        */
        export class loader  {
            /**
            * Loader for resource loading process.
            */
            constructor();
            /**
            * Get resource data by url.
            */
            getRes();
            /**
            * Get url with basePath.
            */
            getUrl(basePath: string, url: string);
            /**
            * Get XMLHttpRequest.
            */
            getXMLHttpRequest();
            /**
            * Load resources then call the callback.
            */
            load(resources: string, option: any, loadCallback: any);
            /**
            * 
    Loads alias map from the contents of a filename.
            */
            loadAliases(url: string, callback: Function);
            /**
            * Load a single image.
            */
            loadImg(url: !string, option: object, callback: any);
            /**
            * Load js files.
            */
            loadJs(baseDir: string, jsList: array, cb: any);
            /**
            * Load a single resource as json.
            */
            loadJson(url: string, cb: any);
            /**
            * Load js width loading image.
            */
            loadJsWithImg(baseDir: string, jsList: array, cb: any);
            /**
            * Load a single resource as txt.
            */
            loadTxt(url: string, cb: any);
            /**
            * Register a resource loader into loader.
            */
            register(extNames: string, loader: any);
            /**
            * Release the cache of resource by url.
            */
            release();
            /**
            * Resource cache of all resources.
            */
            releaseAll();
        }
}
declare module cc {
        /**
        * 
								 Features and Limitation:
 - You can add MenuItem objects in runtime using addChild:
 - But the only accepted children are MenuItem objects
								
							
        */
        export class Menu extends cc.Layer {
            /**
            *  Features and Limitation:
 - You can add MenuItem objects in runtime using addChild:
 - But the only accepted children are MenuItem objects
            */
            constructor(menuItems});
            /**
            * add a child for  cc.Menu
            */
            addChild(child: Node, zOrder: any, tag: any);
            /**
            * align items horizontally with default padding
            */
            alignItemsHorizontally();
            /**
            * align items horizontally with specified padding
            */
            alignItemsHorizontallyWithPadding(padding: number);
            /**
            * align items in columns
            */
            alignItemsInColumns();
            /**
            * align menu items in rows
            */
            alignItemsInRows();
            /**
            * align items vertically with default padding
            */
            alignItemsVertically();
            /**
            * align items vertically with specified padding
            */
            alignItemsVerticallyWithPadding(padding: number);
            /**
            * create a new menu
            */
            static create(menuItems: any);
            /**
            * Constructor of cc.Menu override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(menuItems: any);
            /**
            * initializes a cc.Menu with a Array of cc.MenuItem objects
            */
            initWithArray(arrayOfItems: Array);
            /**
            * initializes a cc.Menu with it&#39;s items
            */
            initWithItems(args: Array);
            /**
            * return whether or not the menu will receive events
            */
            isEnabled();
            /**
            * only use for jsbinding
            */
            isOpacityModifyRGB();
            /**
            * 
    Event callback that is invoked every time when CCMenu enters the &#39;stage&#39;.
            */
            onEnter();
            /**
            * 
callback that is called every time the cc.Menu leaves the &#39;stage&#39;.
            */
            onExit();
            /**
            * remove a child from cc.Menu
            */
            removeChild(child: Node, cleanup: boolean);
            /**
            * set whether or not the menu will receive events
            */
            setEnabled(enabled: boolean);
            /**
            * only use for jsbinding
            */
            setOpacityModifyRGB();
        }
}
declare module cc {
        /**
        * 
								Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem objects.
								
							
        */
        export class MenuItem extends cc.Node {
            /**
            * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem objects.
            */
            constructor(callback: any, target: Node);
            /**
            * call the selector with target
            */
            activate();
            /**
            * creates an empty menu item with target and callback
Not recommended to use the base class, should use more defined menu item classes
            */
            static create(callback: any, target: Node);
            /**
            * Constructor of cc.MenuItem
            */
            ctor(callback: any, target: Node);
            /**
            * initializes a cc.MenuItem with callback
            */
            initWithCallback(callback: any, target: Node);
            /**
            * return whether MenuItem is Enabled
            */
            isEnabled();
            /**
            * only use for jsbinding
            */
            isOpacityModifyRGB();
            /**
            * return whether MenuItem is selected
            */
            isSelected();
            /**
            * return rect value of cc.MenuItem
            */
            rect();
            /**
            * set the cc.MenuItem selected same as setIsSelected(true)
            */
            selected();
            /**
            * set the callback to the menu item
            */
            setCallback(callback: any, target: Node);
            /**
            * set enable value of MenuItem
            */
            setEnabled(enable: boolean);
            /**
            * only use for jsbinding
            */
            setOpacityModifyRGB();
            /**
            * set the target/selector of the menu item
            */
            setTarget(selector: any, rec: Node);
            /**
            * set the cc.MenuItem unselected same as setIsSelected(false)
            */
            unselected();
        }
}
declare module cc {
        /**
        * 
								Helper class that creates a MenuItemLabel class with a LabelAtlas
								
							
        */
        export class MenuItemAtlasFont extends cc.MenuItemLabel {
            /**
            * Helper class that creates a MenuItemLabel class with a LabelAtlas
            */
            constructor(value: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string, callback: any, target: any);
            /**
            * create menu item from string with font
            */
            static create(value: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string, callback: any, target: any);
            /**
            * the contructor of cc.MenuItemAtlasFont
            */
            ctor(value: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string, callback: any, target: any);
            /**
            * initializes a cc.MenuItemAtlasFont with string
            */
            initWithString(value: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string, callback: any, target: any);
        }
}
declare module cc {
        /**
        * 
								Helper class that creates a CCMenuItemLabel class with a Label
								
							
        */
        export class MenuItemFont extends cc.MenuItemLabel {
            /**
            * Helper class that creates a CCMenuItemLabel class with a Label
            */
            constructor(value: string, callback: any, target: Node);
            /**
            * create a menu item from string
            */
            static create(value: string, callback: any, target: any);
            /**
            * Constructor of cc.MenuItemFont
            */
            ctor(value: string, callback: any, target: Node);
            /**
            * a shared function to get the font name for menuitem font
            */
            static fontName();
            /**
            * a shared function to get the font size for menuitem font
            */
            static fontSize();
            /**
            * return the font name for cc.MenuItemFont
            */
            getFontName();
            /**
            * return the font size of cc.MenuItemFont
            */
            getFontSize();
            /**
            * initializes cc.MenuItemFont with  string
            */
            initWithString(value: string, callback: any, target: Node);
            /**
            * set the font name for cc.MenuItemFont
            */
            setFontName(name: string);
            /**
            * a shared function to set the fontsize for menuitem font
            */
            static setFontName();
            /**
            * a shared function to set the fontSize for menuitem font
            */
            static setFontSize(fontSize: number);
            /**
            * set the font size for cc.MenuItemFont
            */
            setFontSize(s: number);
        }
}
declare module cc {
        /**
        * 
								cc.MenuItemImage accepts images as items.
The images has 3 different states:
- unselected image
- selected image
- disabled image

For best results try that all images are of the same size
								
							
        */
        export class MenuItemImage extends cc.MenuItemSprite {
            /**
            * cc.MenuItemImage accepts images as items.
            */
            constructor(normalImage: any, selectedImage: any, disabledImage: any, callback: any, target: any);
            /**
            * creates a new menu item image
            */
            static create(normalImage: string, selectedImage: string, three: any, four: any, five: any);
            /**
            * Constructor of cc.MenuItemImage
            */
            ctor(normalImage: any, selectedImage: any, disabledImage: any, callback: any, target: any);
            /**
            * initializes a cc.MenuItemImage
            */
            initWithNormalImage(normalImage: any, selectedImage: any, disabledImage: any, callback: any, target: any);
            /**
            * sets the sprite frame for the disabled image
            */
            setDisabledSpriteFrame(frame: SpriteFrame);
            /**
            * sets the sprite frame for the normal image
            */
            setNormalSpriteFrame(frame: SpriteFrame);
            /**
            * sets the sprite frame for the selected image
            */
            setSelectedSpriteFrame(frame: SpriteFrame);
        }
}
declare module cc {
        /**
        * 
								Any cc.Node that supports the cc.LabelProtocol protocol can be added.
Supported nodes:
- cc.BitmapFontAtlas
- cc.LabelAtlas
- cc.LabelTTF
								
							
        */
        export class MenuItemLabel extends cc.MenuItem {
            /**
            * Any cc.Node that supports the cc.LabelProtocol protocol can be added.
            */
            constructor(label: Node, selector: any, target: Node);
            /**
            * activate the menu item
            */
            activate();
            /**
            * 
            */
            static create(label: Node, selector: any, target: any);
            /**
            * Constructor of cc.MenuItemLabel
            */
            ctor(label: Node, selector: any, target: Node);
            /**
            * return the color of cc.MenuItemLabel
            */
            getColor();
            /**
            * return the disable color for this cc.MenuItemLabel
            */
            getDisabledColor();
            /**
            * return label of cc.MenuItemLabel
            */
            getLabel();
            /**
            * return the opacity of cc.MenuItemLabel
            */
            getOpacity();
            /**
            * return the string of cc.MenuItemLabel
            */
            getString();
            /**
            * initializes a cc.MenuItemLabel with a label
            */
            initWithLabel(label: Node, selector: any, target: Node);
            /**
            * menu item is selected (runs callback)
            */
            selected();
            /**
            * set the opacity for cc.MenuItemLabel
            */
            setColor(color: Color);
            /**
            * set the disable color for this cc.MenuItemLabel
            */
            setDisabledColor(color: Color);
            /**
            * set enable value to cc.MenuItemLabel
            */
            setEnabled(enabled: boolean);
            /**
            * set a label for cc.MenuItemLabel
            */
            setLabel(label: Node);
            /**
            * set opacity for cc.MenuItemLabel
            */
            setOpacity(opacity: number);
            /**
            * set the string for  cc.MenuItemLabel
            */
            setString(label: string);
            /**
            * menu item goes back to unselected state
            */
            unselected();
        }
}
declare module cc {
        /**
        * 
								CCMenuItemSprite accepts CCNode objects as items.
The images has 3 different states:
  - unselected image
  - selected image
  - disabled image
								
							
        */
        export class MenuItemSprite extends cc.MenuItem {
            /**
            * CCMenuItemSprite accepts CCNode objects as items.
            */
            constructor(normalSprite: any, selectedSprite: any, three: any, four: any, five: any);
            /**
            * create a menu item from sprite
            */
            static create(normalSprite: Image, selectedSprite: any, three: any, four: any, five: any);
            /**
            * Constructor of cc.MenuItemSprite
            */
            ctor(normalSprite: any, selectedSprite: any, three: any, four: any, five: any);
            /**
            * return the color of cc.MenuItemSprite
            */
            getColor();
            /**
            * return the disabled status of cc.MenuItemSprite
            */
            getDisabledImage();
            /**
            * return the normal status image(cc.Sprite)
            */
            getNormalImage();
            /**
            * return the opacity of cc.MenuItemSprite
            */
            getOpacity();
            /**
            * return the selected status image(cc.Sprite) of cc.MenuItemSprite
            */
            getSelectedImage();
            /**
            * initializes cc.MenuItemSprite with a cc.Sprite
            */
            initWithNormalSprite(normalSprite: Node, selectedSprite: Node, disabledSprite: Node, callback: any, target: Node);
            /**
            * menu item is selected (runs callback)
            */
            selected();
            /**
            * set the color for cc.MenuItemSprite
            */
            setColor(color: Color);
            /**
            * set the disabled status image(cc.Sprite)
            */
            setDisabledImage(disabledImage: Sprite);
            /**
            * set cc.MenuItemSprite  enable to receive the touch event
            */
            setEnabled(bEnabled: boolean);
            /**
            * set the normal status image(cc.Sprite)
            */
            setNormalImage(normalImage: Sprite);
            /**
            * set the opacity for cc.MenuItemSprite
            */
            setOpacity(opacity: number);
            /**
            * set the selected status image(cc.Sprite)
            */
            setSelectedImage(selectedImage: Sprite);
            /**
            * menu item goes back to unselected state
            */
            unselected();
        }
}
declare module cc {
        /**
        * 
								A simple container class that &quot;toggles&quot; it&#39;s inner items
The inner items can be any MenuItem
								
							
        */
        export class MenuItemToggle extends cc.MenuItem {
            /**
            * A simple container class that &quot;toggles&quot; it&#39;s inner items
The inner items can be any MenuItem
            */
            constructor();
            /**
            * activate the menu item
            */
            activate();
            /**
            * add the subitem for cc.MenuItemToggle
            */
            addSubItem(item: MenuItem);
            /**
            * create a simple container class that &quot;toggles&quot; it&#39;s inner items
The inner items can be any MenuItem
            */
            static create();
            /**
            * Constructor of cc.MenuItemToggle
            */
            ctor();
            /**
            * return the color of cc.MenuItemToggle
            */
            getColor();
            /**
            * return the opacity of cc.MenuItemToggle
            */
            getOpacity();
            /**
            * return the index of selected
            */
            getSelectedIndex();
            /**
            * similar to get children,return the sumItem array.
            */
            getSubItems();
            /**
            * initializes a cc.MenuItemToggle with items
            */
            initWithItems(args[last-1], args[last]);
            /**
            * * 
    Event callback that is invoked every time when cc.MenuItemToggle enters the &#39;stage&#39;.
            */
            onEnter();
            /**
            * menu item is selected (runs callback)
            */
            selected();
            /**
            * returns the selected item
            */
            selectedItem();
            /**
            * set the color for cc.MenuItemToggle
            */
            setColor(Color: Color);
            /**
            * set the enable status for cc.MenuItemToggle
            */
            setEnabled(enabled: boolean);
            /**
            * set the opacity for cc.MenuItemToggle
            */
            setOpacity(opacity: number);
            /**
            * set the seleceted index for cc.MenuItemToggle
            */
            setSelectedIndex(SelectedIndex: number);
            /**
            * set the subitem for cc.MenuItemToggle
            */
            setSubItems(subItems: MenuItem);
            /**
            * menu item goes back to unselected state
            */
            unselected();
        }
}
declare module cc {
        /**
        * 
								MenuPassive: The menu passive ui component
								
							
        */
        export class MenuPassive extends cc.Layer {
            /**
            * MenuPassive: The menu passive ui component
            */
            constructor();
            /**
            * align items horizontally
            */
            alignItemsHorizontally();
            /**
            * align items horizontally with padding
            */
            alignItemsHorizontallyWithPadding();
            /**
            * align items in rows of columns
            */
            alignItemsInColumns();
            /**
            * align items in columns of rows
            */
            alignItemsInRows();
            /**
            * align items vertically
            */
            alignItemsVertically();
            /**
            * align items vertically with padding
            */
            alignItemsVerticallyWithPadding();
            /**
            * creates an empty CCMenu
            */
            static create();
            /**
            * creates a CCMenu with it&#39;s item, then use addChild() to add
other items.
            */
            static createWithItem();
            /**
            * Color: conforms with CCRGBAProtocol protocol
            */
            getColor();
            /**
            * Opacity: conforms with CCRGBAProtocol protocol
            */
            getOpacity();
            /**
            * initializes a CCMenu with it&#39;s items
            */
            initWithItems();
        }
}
declare module cc {
        /**
        * 
								cc.MotionStreak manages a Ribbon based on it&#39;s motion in absolute space.                 
You construct it with a fadeTime, minimum segment size, texture path, texture            
length and color. The fadeTime controls how long it takes each vertex in                 
the streak to fade out, the minimum segment size it how many pixels the                  
streak will move before adding a new ribbon segment, and the texture                     
length is the how many pixels the texture is stretched across. The texture               
is vertically aligned along the streak segment.
								
							
        */
        export class MotionStreak extends cc.Node {
            /**
            * cc.MotionStreak manages a Ribbon based on it&#39;s motion in absolute space.
            */
            constructor();
            /**
            * Please use new cc.MotionStreak instead.
            */
            static create(fade: number, minSeg: number, stroke: number, color: number, texture: any);
            /**
            * creates and initializes a motion streak with fade in seconds, minimum segments, stroke&#39;s width, color, texture filename or texture   
Constructor of cc.MotionStreak
            */
            ctor(fade: number, minSeg: number, stroke: number, color: number, texture: any);
            /**
            * Gets the blend func.
            */
            getBlendFunc();
            /**
            * Gets opacity.
            */
            getOpacity();
            /**
            * Gets the position.x
            */
            getPositionX();
            /**
            * Gets the position.y
            */
            getPositionY();
            /**
            * Gets the texture.
            */
            getTexture();
            /**
            * initializes a motion streak with fade in seconds, minimum segments, stroke&#39;s width, color and texture filename or texture
            */
            initWithFade(fade: number, minSeg: number, stroke: number, color: number, texture: any);
            /**
            * Checking fast mode.
            */
            isFastMode();
            /**
            * Checking OpacityModifyRGB.
            */
            isOpacityModifyRGB();
            /**
            * Checking starting position initialized.
            */
            isStartingPositionInitialized();
            /**
            * Remove all living segments of the ribbon
            */
            reset();
            /**
            * Set the blend func.
            */
            setBlendFunc(src: number, dst: number);
            /**
            * set fast mode
            */
            setFastMode(fastMode: boolean);
            /**
            * Set opacity.
            */
            setOpacity();
            /**
            * set opacity modify RGB.
            */
            setOpacityModifyRGB();
            /**
            * Set the position.
            */
            setPosition(position: any, yValue: number);
            /**
            * Set the position.x
            */
            setPositionX(x: number);
            /**
            * Set the position.y
            */
            setPositionY(y: number);
            /**
            * Set Starting Position Initialized.
            */
            setStartingPositionInitialized(startingPositionInitialized: boolean);
            /**
            * Set the texture.
            */
            setTexture(texture: Texture2D);
            /**
            * color used for the tint
            */
            tintWithColor(color: Color);
            /**
            * schedules the &quot;update&quot; method.
            */
            update(delta: number);
        }
}
declare module cc {
        /**
        * 
								
    Moves a CCNode object x,y pixels by modifying it&#39;s position attribute.                                  
    x and y are relative to the position of the object.                                                     
    Several CCMoveBy actions can be concurrently called, and the resulting                                  
    movement will be the sum of individual movements.

								
							
        */
        export class MoveBy extends cc.ActionInterval {
            /**
            * 
    Moves a CCNode object x,y pixels by modifying it&#39;s position attribute.
            */
            constructor(duration: number, deltaPos: any, deltaY: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, deltaPos: any, deltaY: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, position: Point, y: number);
            /**
            * MoveTo reverse is not implemented
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Moves a CCNode object to the position x,y. x and y are absolute coordinates by modifying it&#39;s position attribute. 
Several CCMoveTo actions can be concurrently called, and the resulting                                            
movement will be the sum of individual movements.
								
							
        */
        export class MoveTo extends cc.MoveBy {
            /**
            * Moves a CCNode object to the position x,y.
            */
            constructor(duration: number, position: any, y: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, position: any, y: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, position: Point, y: number);
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
        }
}
declare module cc {
        /**
        * 
								cc.Node is the root class of all node. Anything that gets drawn or contains things that get drawn is a cc.Node.
The most popular cc.Nodes are: cc.Scene, cc.Layer, cc.Sprite, cc.Menu.

The main features of a cc.Node are: 
- They can contain other cc.Node nodes (addChild, getChildByTag, removeChild, etc) 
- They can schedule periodic callback (schedule, unschedule, etc) 
- They can execute actions (runAction, stopAction, etc) 

Some cc.Node nodes provide extra functionality for them or their children.

Subclassing a cc.Node usually means (one/all) of: 
- overriding constructor function &quot;ctor&quot; to initialize resources and schedule callbacks
- create callbacks to handle the advancement of time

Features of cc.Node: 
- position  
- scale (x, y) 
- rotation (in degrees, clockwise)
- anchor point
- size 
- color 
- opacity 
- visible
- z-order
- WebGL z position

 Default values: 
- rotation: 0 
- position: (x=0,y=0) 
- scale: (x=1,y=1) 
- contentSize: (x=0,y=0)
- anchorPoint: (x=0,y=0)
- color: (r=255,g=255,b=255)
- opacity: 255

 Limitations:
- A cc.Node is a &quot;void&quot; object. It doesn&#39;t have a texture 

Order in transformations with grid disabled 
-# The node will be translated (position)  
-# The node will be rotated (rotation)
-# The node will be scaled (scale)  

Order in transformations with grid enabled
-# The node will be translated (position)
-# The node will be rotated (rotation) 
-# The node will be scaled (scale) 
-# The grid will capture the screen 
-# The node will be moved according to the camera values (camera) 
-# The grid will render the captured screen 
								
							
        */
        export class Node extends cc.Class {
            /**
            * cc.Node is the root class of all node.
            */
            constructor();
            /**
            * &quot;add&quot; logic MUST only be in this method  

If the child is added to a &#39;running&#39; node, then &#39;onEnter&#39; and &#39;onEnterTransitionDidFinish&#39; will be called immediately.
            */
            addChild(child: Node, localZOrder: number, tag: number);
            /**
            * Adds a component to the node&#39;s component container.
            */
            addComponent(component: Component);
            /**
            * Properties configuration function 
All properties in attrs will be set to the node, 
when the setter of the node is available, 
the property will be set via setter function.
            */
            attr(attrs: Object);
            /**
            * Returns a &quot;local&quot; axis aligned bounding box of the node.
            */
            boundingBox();
            /**
            * Stops all running actions and schedulers
            */
            cleanup();
            /**
            * Converts a Point to node (local) space coordinates.
            */
            convertToNodeSpace(worldPoint: Point);
            /**
            * Converts a Point to node (local) space coordinates.
            */
            convertToNodeSpaceAR(worldPoint: Point);
            /**
            * convenience methods which take a cc.Touch instead of cc.Point
            */
            convertTouchToNodeSpace(touch: Touch);
            /**
            * converts a cc.Touch (world coordinates) into a local coordinate.
            */
            convertTouchToNodeSpaceAR(touch: Touch);
            /**
            * Converts a Point to world space coordinates.
            */
            convertToWorldSpace(nodePoint: Point);
            /**
            * Converts a local Point to world space coordinates.The result is in Points.
            */
            convertToWorldSpaceAR(nodePoint: Point);
            /**
            * Allocates and initializes a node.
            */
            static create();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * Render function using the canvas 2d context or WebGL context, internal usage only, please do not call this function
            */
            draw(ctx: any);
            /**
            * Returns an action from the running action list by its tag.
            */
            getActionByTag(tag: number);
            /**
            * Returns the CCActionManager object that is used by all actions.
            */
            getActionManager();
            /**
            * Returns a copy of the anchor point.
            */
            getAnchorPoint();
            /**
            * Returns a copy of the anchor point in absolute pixels.
            */
            getAnchorPointInPoints();
            /**
            * Returns a &quot;local&quot; axis aligned bounding box of the node.
            */
            getBoundingBox();
            /**
            * Returns a &quot;world&quot; axis aligned bounding box of the node.
            */
            getBoundingBoxToWorld();
            /**
            * Returns a camera object that lets you move the node using a gluLookAt
            */
            getCamera();
            /**
            * Returns a child from the container given its name
            */
            getChildByName(name: string);
            /**
            * Returns a child from the container given its tag
            */
            getChildByTag(aTag: number);
            /**
            * Returns an array of all children  
Composing a &quot;tree&quot; structure is a very important feature of CCNode
            */
            getChildren();
            /**
            * Returns the amount of children.
            */
            getChildrenCount();
            /**
            * Returns the color of Node
            */
            getColor();
            /**
            * Returns a component identified by the name given.
            */
            getComponent(name: string);
            /**
            * Returns a copy the untransformed size of the node.
            */
            getContentSize();
            /**
            * Returns the displayed color of Node,
the difference between displayed color and color is that displayed color is calculated based on color and parent node&#39;s color when cascade color enabled.
            */
            getDisplayedColor();
            /**
            * Returns the displayed opacity of Node,
the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node&#39;s opacity when cascade opacity enabled.
            */
            getDisplayedOpacity();
            /**
            * Return the Node&#39;s Global Z Order.
            */
            getGlobalZOrder();
            /**
            * Returns the state of OpenGL server side.
            */
            getGLServerState();
            /**
            * Returns a grid object that is used when applying effects.
            */
            getGrid();
            /**
            * Returns the local Z order of this node.
            */
            getLocalZOrder();
            /**
            * Returns a string that is used to identify the node.
            */
            getName();
            /**
            * Returns the matrix that transform the node&#39;s (local) space coordinates into the parent&#39;s space coordinates.
            */
            getNodeToParentTransform();
            /**
            * Returns the world affine transform matrix.
            */
            getNodeToWorldTransform();
            /**
            * returns the normalized position
            */
            getNormalizedPosition();
            /**
            * Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).
            */
            getNumberOfRunningActions();
            /**
            * Returns the opacity of Node
            */
            getOpacity();
            /**
            * Returns the arrival order, indicates which children should be added previously.
            */
            getOrderOfArrival();
            /**
            * Returns a reference to the parent node
            */
            getParent();
            /**
            * Returns the matrix that transform parent&#39;s space coordinates to the node&#39;s (local) space coordinates.
            */
            getParentToNodeTransform();
            /**
            * Returns a copy of the position (x,y) of the node in cocos2d coordinates.
            */
            getPosition();
            /**
            * Returns the x axis position of the node in cocos2d coordinates.
            */
            getPositionX();
            /**
            * Returns the y axis position of the node in cocos2d coordinates.
            */
            getPositionY();
            /**
            * Returns the rotation (angle) of the node in degrees.
            */
            getRotation();
            /**
            * Returns the X axis rotation (angle) which represent a horizontal rotational skew of the node in degrees.
            */
            getRotationX();
            /**
            * Returns the Y axis rotation (angle) which represent a vertical rotational skew of the node in degrees.
            */
            getRotationY();
            /**
            * Returns the scale factor of the node.
            */
            getScale();
            /**
            * Returns the scale factor on X axis of this node
            */
            getScaleX();
            /**
            * Returns the scale factor on Y axis of this node
            */
            getScaleY();
            /**
            * 
  Returns the cc.Scheduler object used to schedule all &quot;updates&quot; and timers.
            */
            getScheduler();
            /**
            * Return the shader program currently used for this node
            */
            getShaderProgram();
            /**
            * Returns the skew degrees in X 
The X skew angle of the node in degrees.
            */
            getSkewX();
            /**
            * Returns the skew degrees in Y               
The Y skew angle of the node in degrees.
            */
            getSkewY();
            /**
            * Returns a tag that is used to identify the node easily.
            */
            getTag();
            /**
            * 
    Returns a custom user data pointer                                                               
    You can set everything in UserData pointer, a data block, a structure or an object.
            */
            getUserData();
            /**
            * Returns a user assigned cocos2d object.
            */
            getUserObject();
            /**
            * Returns WebGL Z vertex of this node.
            */
            getVertexZ();
            /**
            * Returns the inverse world affine transform matrix.
            */
            getWorldToNodeTransform();
            /**
            * Returns z order of this node
            */
            getZOrder();
            /**
            * 
    Sets whether the anchor point will be ignored when you position this node.
            */
            ignoreAnchorPointForPosition(newValue: boolean);
            /**
            * Initializes the instance of cc.Node
            */
            init();
            /**
            * Returns whether node&#39;s color value affect its child nodes.
            */
            isCascadeColorEnabled();
            /**
            * Returns whether node&#39;s opacity value affect its child nodes.
            */
            isCascadeOpacityEnabled();
            /**
            * Returns whether the anchor point will be ignored when you position this node.
            */
            isIgnoreAnchorPointForPosition();
            /**
            * Get whether color should be changed with the opacity value
            */
            isOpacityModifyRGB();
            /**
            * 
    Returns whether or not the node accepts event callbacks.
            */
            isRunning();
            /**
            * Returns if the node is visible
            */
            isVisible();
            /**
            * Returns the matrix that transform the node&#39;s (local) space coordinates into the parent&#39;s space coordinates.
            */
            nodeToParentTransform();
            /**
            * 
            */
            nodeToWorldTransform();
            /**
            * 
    Event callback that is invoked every time when CCNode enters the &#39;stage&#39;.
            */
            onEnter();
            /**
            * 
    Event callback that is invoked when the CCNode enters in the &#39;stage&#39;.
            */
            onEnterTransitionDidFinish();
            /**
            * 
callback that is called every time the cc.Node leaves the &#39;stage&#39;.
            */
            onExit();
            /**
            * callback that is called every time the cc.Node leaves the &#39;stage&#39;.
            */
            onExitTransitionDidStart();
            /**
            * 
            */
            parentToNodeTransform();
            /**
            * Pauses all scheduled selectors and actions.
            */
            pause();
            /**
            * Pauses all scheduled selectors and actions.
            */
            pauseSchedulerAndActions();
            /**
            * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
            */
            release();
            /**
            * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
            */
            removeAllChildren(cleanup: boolean);
            /**
            * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
            */
            removeAllChildrenWithCleanup(cleanup: boolean);
            /**
            * Removes all components of cc.Node, it called when cc.Node is exiting from stage.
            */
            removeAllComponents();
            /**
            * Removes a child from the container.
            */
            removeChild(child: Node, cleanup: boolean);
            /**
            * Removes a child from the container by tag value.
            */
            removeChildByTag(tag: number, cleanup: boolean);
            /**
            * Removes a component identified by the given name or removes the component object given
            */
            removeComponent(component: any);
            /**
            * Remove itself from its parent node.
            */
            removeFromParent(cleanup: boolean);
            /**
            * Removes this node itself from its parent node.
            */
            removeFromParentAndCleanup(cleanup: boolean);
            /**
            * Reorders a child according to a new z value.
            */
            reorderChild(child: Node, zOrder: number);
            /**
            * Resumes all scheduled selectors and actions.
            */
            resume();
            /**
            * Resumes all scheduled selectors and actions.
            */
            resumeSchedulerAndActions();
            /**
            * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
            */
            retain();
            /**
            * Executes an action, and returns the action that is executed.
            */
            runAction(action: Action);
            /**
            * Schedules a custom selector.
            */
            schedule(callback_fn: any, interval: number, repeat: number, delay: number);
            /**
            * Schedules a callback function that runs only once, with a delay of 0 or larger
            */
            scheduleOnce(callback_fn: any, delay: number);
            /**
            * schedules the &quot;update&quot; method.
            */
            scheduleUpdate();
            /**
            * 
schedules the &quot;update&quot; callback function with a custom priority.
            */
            scheduleUpdateWithPriority(priority: number);
            /**
            * Sets the cc.ActionManager object that is used by all actions.
            */
            setActionManager(actionManager: ActionManager);
            /**
            * Sets the additional transform.
            */
            setAdditionalTransform(additionalTransform: AffineTransform);
            /**
            * 
    Sets the anchor point in percent.
            */
            setAnchorPoint(point: any, y: number);
            /**
            * Enable or disable cascade color, if cascade enabled, child nodes&#39; opacity will be the cascade value of parent color and its own color.
            */
            setCascadeColorEnabled(cascadeColorEnabled: boolean);
            /**
            * Enable or disable cascade opacity, if cascade enabled, child nodes&#39; opacity will be the multiplication of parent opacity and its own opacity.
            */
            setCascadeOpacityEnabled(cascadeOpacityEnabled: boolean);
            /**
            * Sets the color of Node.
            */
            setColor(color: Color);
            /**
            * 
    Sets the untransformed size of the node.
            */
            setContentSize(size: any, height: number);
            /**
            * Defines the oder in which the nodes are renderer.
            */
            setGlobalZOrder(globalZOrder: number);
            /**
            * Sets the state of OpenGL server side.
            */
            setGLServerState(state: number);
            /**
            * Changes a grid object that is used when applying effects
This function have been deprecated, please use cc.NodeGrid to run grid actions
            */
            setGrid(grid: GridBase);
            /**
            *  LocalZOrder is the &#39;key&#39; used to sort the node relative to its siblings.
            */
            setLocalZOrder(localZOrder: number);
            /**
            * Changes the name that is used to identify the node easily.
            */
            setName(name: string);
            /**
            * 
Sets the position (x,y) using values between 0 and 1.
            */
            setNormalizedPosition(posOrX: any, y: number);
            /**
            * Sets the opacity of Node
            */
            setOpacity(opacity: number);
            /**
            * Set whether color should be changed with the opacity value,
useless in cc.Node, but this function is override in some class to have such behavior.
            */
            setOpacityModifyRGB(opacityValue: boolean);
            /**
            * 
    Sets the arrival order when this node has a same ZOrder with other children.
            */
            setOrderOfArrival(Var: number);
            /**
            * Sets the parent node
            */
            setParent(parent: Node);
            /**
            * 
    Changes the position (x,y) of the node in cocos2d coordinates.
            */
            setPosition(newPosOrxValue: any, yValue: number);
            /**
            * Sets the x axis position of the node in cocos2d coordinates.
            */
            setPositionX(x: number);
            /**
            * Sets the y axis position of the node in cocos2d coordinates.
            */
            setPositionY(y: number);
            /**
            * 
    Sets the rotation (angle) of the node in degrees.
            */
            setRotation(newRotation: number);
            /**
            * 
    Sets the X rotation (angle) of the node in degrees which performs a horizontal rotational skew.
            */
            setRotationX(rotationX: number);
            /**
            * 
   Sets the Y rotation (angle) of the node in degrees which performs a vertical rotational skew.
            */
            setRotationY();
            /**
            * Sets the scale factor of the node.
            */
            setScale(scale: number, scaleY: number);
            /**
            * 
    Changes the scale factor on X axis of this node                                   
    The default value is 1.0 if you haven&#39;t changed it before

            */
            setScaleX(newScaleX: number);
            /**
            * 
    Changes the scale factor on Y axis of this node                                            
    The Default value is 1.0 if you haven&#39;t changed it before.
            */
            setScaleY(newScaleY: number);
            /**
            * 
  Sets a CCScheduler object that is used to schedule all &quot;updates&quot; and timers.
            */
            setScheduler();
            /**
            * 
    Sets the shader program for this node

    Since v2.0, each rendering node must set its shader program.
            */
            setShaderProgram(newShaderProgram: GLProgram);
            /**
            * 
Changes the X skew angle of the node in degrees.
            */
            setSkewX(newSkewX: number);
            /**
            * 
Changes the Y skew angle of the node in degrees.
            */
            setSkewY(newSkewY: number);
            /**
            * Changes the tag that is used to identify the node easily.
            */
            setTag(tag: number);
            /**
            * 
   Sets a custom user data reference                                                                   
   You can set everything in UserData reference, a data block, a structure or an object, etc.
            */
            setUserData(Var: object);
            /**
            * 
     Sets a user assigned cocos2d object                                                                                       
     Similar to UserData, but instead of holding all kinds of data it can only hold a cocos2d object                        
     In JSB, the UserObject will be retained once in this method, and the previous UserObject (if existed) will be release.
            */
            setUserObject(newValue: object);
            /**
            * 
    Sets the real WebGL Z vertex.
            */
            setVertexZ(Var: number);
            /**
            * Sets whether the node is visible 
The default value is true
            */
            setVisible(visible: boolean);
            /**
            * 
    Sets the Z order which stands for the drawing order, and reorder this node in its parent&#39;s children array.
            */
            setZOrder(z: number);
            /**
            * 
    Sorts the children array once before drawing, instead of every time when a child is added or reordered.
            */
            sortAllChildren();
            /**
            * Stops and removes an action from the running action list.
            */
            stopAction(action: Action);
            /**
            * Removes an action from the running action list by its tag.
            */
            stopActionByTag(tag: number);
            /**
            * Stops and removes all actions from the running action list .
            */
            stopAllActions();
            /**
            * Performs view-matrix transformation based on position, scale, rotation and other attributes.
            */
            transform(parentCmd: Node.RenderCmd, recursive: boolean);
            /**
            * unschedules a custom callback function.
            */
            unschedule(callback_fn: any);
            /**
            * unschedule all scheduled callback functions: custom callback functions, and the &#39;update&#39; callback function.
            */
            unscheduleAllCallbacks();
            /**
            * Unschedules the &quot;update&quot; method.
            */
            unscheduleUpdate();
            /**
            * Update will be called automatically every frame if &quot;scheduleUpdate&quot; is called when the node is &quot;live&quot;.
            */
            update(dt: number);
            /**
            * Update the displayed color of Node
            */
            updateDisplayedColor(parentColor: Color);
            /**
            * Update displayed opacity
            */
            updateDisplayedOpacity(parentOpacity: number);
            /**
            * 
Calls children&#39;s updateTransform() method recursively.
            */
            updateTransform();
            /**
            * Recursive method that visit its children and draw them
            */
            visit(parentCmd: Node.RenderCmd);
            /**
            * 
            */
            worldToNodeTransform();
        }
}
declare module cc {
        /**
        * 
								
    This action simulates a page turn from the bottom right hand corner of the screen.     
    It&#39;s not much use by itself but is used by the PageTurnTransition.                     
                                                                                           
    Based on an original paper by L Hong et al.                                            
    http://www.parc.com/publication/1638/turning-pages-of-3d-electronic-books.html

								
							
        */
        export class PageTurn3D extends cc.Grid3DAction {
            /**
            * 
    This action simulates a page turn from the bottom right hand corner of the screen.
            */
            constructor();
            /**
            * Update each tick                                         
Time is the percentage of the way through the duration
            */
            update();
        }
}
declare module cc {
        /**
        * 
								cc.ParallaxNode: A node that simulates a parallax scroller
The children will be moved faster / slower than the parent according the the parallax ratio. 
								
							
        */
        export class ParallaxNode extends cc.Node {
            /**
            * cc.ParallaxNode: A node that simulates a parallax scroller
The children will be moved faster / slower than the parent according the the parallax ratio.
            */
            constructor();
            /**
            * Adds a child to the container with a z-order, a parallax ratio and a position offset
It returns self, so you can chain several addChilds.
            */
            addChild(child: Node, z: number, ratio: Point, offset: Point);
            /**
            * Create new parallax node.
            */
            static create();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * Gets the parallax array.
            */
            getParallaxArray();
            /**
            * Remove all children with cleanup
            */
            removeAllChildren(cleanup: boolean);
            /**
            * Remove Child
            */
            removeChild(child: Node, cleanup: boolean);
            /**
            * Set parallax array.
            */
            setParallaxArray(value: Array);
        }
}
declare module cc {
        /**
        * 
								Structure that contains the values of each particle
								
							
        */
        export class Particle  {
            /**
            * Structure that contains the values of each particle
            */
            constructor(pos: Point, startPos: Point, color: Color, deltaColor: Color, size: Size, deltaSize: Size, rotation: number, deltaRotation: number, timeToLive: number, atlasIndex: number, modeA: Particle.ModeA, modeB: Particle.ModeA);
        }
}
declare module cc.Particle {
        /**
        * 
								Mode A: gravity, direction, radial accel, tangential accel
								
							
        */
        export class ModeA  {
            /**
            * Mode A: gravity, direction, radial accel, tangential accel
            */
            constructor(dir: cc.Point, radialAccel: number, tangentialAccel: number);
        }
}
declare module cc.Particle {
        /**
        * 
								Mode B: radius mode
								
							
        */
        export class ModeB  {
            /**
            * Mode B: radius mode
            */
            constructor(angle: number, degreesPerSecond: number, radius: number, deltaRadius: number);
        }
}
declare module cc {
        /**
        * 
								
   cc.ParticleBatchNode is like a batch node: if it contains children, it will draw them in 1 single OpenGL call  
   (often known as &quot;batch draw&quot;).  

   A cc.ParticleBatchNode can reference one and only one texture (one image file, one texture atlas).
   Only the cc.ParticleSystems that are contained in that texture can be added to the cc.SpriteBatchNode.
   All cc.ParticleSystems added to a cc.SpriteBatchNode are drawn in one OpenGL ES draw call.
   If the cc.ParticleSystems are not added to a cc.ParticleBatchNode then an OpenGL ES draw call will be needed for each one, which is less efficient.

   Limitations:
   - At the moment only cc.ParticleSystem is supported
   - All systems need to be drawn with the same parameters, blend function, aliasing, texture

   Most efficient usage
   - Initialize the ParticleBatchNode with the texture and enough capacity for all the particle systems
   - Initialize all particle systems and add them as child to the batch node

								
							
        */
        export class ParticleBatchNode extends cc.ParticleSystem {
            /**
            * 
   cc.ParticleBatchNode is like a batch node: if it contains children, it will draw them in 1 single OpenGL call  
   (often known as &quot;batch draw&quot;).
            */
            constructor(fileImage: any, capacity: number);
            /**
            * Add a child into the cc.ParticleBatchNode
            */
            addChild(child: ParticleSystem, zOrder: number, tag: number);
            /**
            * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
            */
            static create(fileImage: any, capacity: number);
            /**
            * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
Constructor of cc.ParticleBatchNode
            */
            ctor(fileImage: any, capacity: number);
            /**
            * disables a particle by inserting a 0&#39;d quad into the texture atlas
            */
            disableParticle(particleIndex: number);
            /**
            * returns the blending function used for the texture
            */
            getBlendFunc();
            /**
            * returns the used texture
            */
            getTexture();
            /**
            * return the texture atlas used for drawing the quads
            */
            getTextureAtlas();
            /**
            * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
            */
            init(fileImage: string, capacity: number);
            /**
            * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
            */
            initWithFile(fileImage: string, capacity: number);
            /**
            * initializes the particle system with cc.Texture2D, a capacity of particles
            */
            initWithTexture(texture: any, capacity: number);
            /**
            * Inserts a child into the cc.ParticleBatchNode
            */
            insertChild(pSystem: ParticleSystem, index: number);
            /**
            * 
            */
            removeAllChildren(doCleanup: boolean);
            /**
            * 
            */
            removeChild(child: ParticleSystem, cleanup: boolean);
            /**
            * 
            */
            removeChildAtIndex(index: number, doCleanup: boolean);
            /**
            * Reorder will be done in this function, no &quot;lazy&quot; reorder to particles
            */
            reorderChild(child: ParticleSystem, zOrder: number);
            /**
            * set the blending function used for the texture
            */
            setBlendFunc(src: any, dst: number);
            /**
            * sets a new texture.
            */
            setTexture(texture: Texture2D);
            /**
            * set the texture atlas used for drawing the quads
            */
            setTextureAtlas(textureAtlas: TextureAtlas);
        }
}
declare module cc {
        /**
        * 
								An explosion particle system
								
							
        */
        export class ParticleExplosion extends cc.ParticleSystem {
            /**
            * An explosion particle system
            */
            constructor();
            /**
            * Create an explosion particle system
            */
            static create();
            /**
            * The cc.ParticleExplosion&#39;s constructor.
            */
            ctor();
            /**
            * initialize an explosion particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								A fire particle system
								
							
        */
        export class ParticleFire extends cc.ParticleSystem {
            /**
            * A fire particle system
            */
            constructor();
            /**
            * Create a fire particle system
            */
            static create();
            /**
            * The cc.ParticleFire&#39;s constructor.
            */
            ctor();
            /**
            * initialize a fire particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								A fireworks particle system
								
							
        */
        export class ParticleFireworks extends cc.ParticleSystem {
            /**
            * A fireworks particle system
            */
            constructor();
            /**
            * Create a fireworks particle system
            */
            static create();
            /**
            * The cc.ParticleFireworks&#39;s constructor.
            */
            ctor();
            /**
            * initialize a fireworks particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								A flower particle system
								
							
        */
        export class ParticleFlower extends cc.ParticleSystem {
            /**
            * A flower particle system
            */
            constructor();
            /**
            * Create a flower particle system
            */
            static create();
            /**
            * The cc.ParticleFlower&#39;s constructor.
            */
            ctor();
            /**
            * initialize a flower particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								A galaxy particle system
								
							
        */
        export class ParticleGalaxy extends cc.ParticleSystem {
            /**
            * A galaxy particle system
            */
            constructor();
            /**
            * Create a galaxy particle system
            */
            static create();
            /**
            * The cc.ParticleGalaxy&#39;s constructor.
            */
            ctor();
            /**
            * initialize a galaxy particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								A meteor particle system
								
							
        */
        export class ParticleMeteor extends cc.ParticleSystem {
            /**
            * A meteor particle system
            */
            constructor();
            /**
            * Create a meteor particle system
            */
            static create();
            /**
            * The cc.ParticleMeteor&#39;s constructor.
            */
            ctor();
            /**
            * initialize a meteor particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								A rain particle system
								
							
        */
        export class ParticleRain extends cc.ParticleSystem {
            /**
            * A rain particle system
            */
            constructor();
            /**
            * Create a rain particle system
            */
            static create();
            /**
            * The cc.ParticleRain&#39;s constructor.
            */
            ctor();
            /**
            * initialize a rain particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								A smoke particle system
								
							
        */
        export class ParticleSmoke extends cc.ParticleSystem {
            /**
            * A smoke particle system
            */
            constructor();
            /**
            * Create a smoke particle system
            */
            static create();
            /**
            * The cc.ParticleSmoke&#39;s constructor.
            */
            ctor();
            /**
            * initialize a smoke particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								A snow particle system
								
							
        */
        export class ParticleSnow extends cc.ParticleSystem {
            /**
            * A snow particle system
            */
            constructor();
            /**
            * Create a snow particle system
            */
            static create();
            /**
            * The cc.ParticleSnow&#39;s constructor.
            */
            ctor();
            /**
            * initialize a snow particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								A spiral particle system
								
							
        */
        export class ParticleSpiral extends cc.ParticleSystem {
            /**
            * A spiral particle system
            */
            constructor();
            /**
            * Create a spiral particle system
            */
            static create();
            /**
            * The cc.ParticleSpiral&#39;s constructor.
            */
            ctor();
            /**
            * initialize a spiral particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								A sun particle system
								
							
        */
        export class ParticleSun extends cc.ParticleSystem {
            /**
            * A sun particle system
            */
            constructor();
            /**
            * Create a sun particle system
            */
            static create();
            /**
            * The cc.ParticleSun&#39;s constructor.
            */
            ctor();
            /**
            * initialize a sun particle system with number Of Particles
            */
            initWithTotalParticles(numberOfParticles: number);
        }
}
declare module cc {
        /**
        * 
								
    Particle System base class. 
    Attributes of a Particle System:
    - emmision rate of the particles
    - Gravity Mode (Mode A): 
    - gravity 
    - direction 
    - speed +-  variance 
    - tangential acceleration +- variance
    - radial acceleration +- variance
    - Radius Mode (Mode B):      
    - startRadius +- variance    
    - endRadius +- variance      
    - rotate +- variance         
    - Properties common to all modes: 
    - life +- life variance      
    - start spin +- variance     
    - end spin +- variance       
    - start size +- variance     
    - end size +- variance       
    - start color +- variance    
    - end color +- variance      
    - life +- variance           
    - blending function          
    - texture                    
                                 
    cocos2d also supports particles generated by Particle Designer (http://particledesigner.71squared.com/).
    &#39;Radius Mode&#39; in Particle Designer uses a fixed emit rate of 30 hz. Since that can&#39;t be guarateed in cocos2d,  
    cocos2d uses a another approach, but the results are almost identical.
    cocos2d supports all the variables used by Particle Designer plus a bit more:  
    - spinning particles (supported when using ParticleSystem)       
    - tangential acceleration (Gravity mode)                               
    - radial acceleration (Gravity mode)                                   
    - radius direction (Radius mode) (Particle Designer supports outwards to inwards direction only) 
    It is possible to customize any of the above mentioned properties in runtime. Example:   

								
							
        */
        export class ParticleSystem extends cc.Node {
            /**
            * 
    Particle System base class.
            */
            constructor();
            /**
            * Add a particle to the emitter
            */
            addParticle();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            *  return the string found by key in dict.
            */
            static create(plistFile: any);
            /**
            *  return the string found by key in dict.
            */
            static createWithTotalParticles(plistFile: any);
            /**
            *  return the string found by key in dict.
            */
            ctor(plistFile: any);
            /**
            * Unschedules the &quot;update&quot; method.
            */
            destroyParticleSystem();
            /**
            * Return angle of each particle
            */
            getAngle();
            /**
            * Return angle variance of each particle
            */
            getAngleVar();
            /**
            * return index of system in batch node array
            */
            getAtlasIndex();
            /**
            * return weak reference to the cc.SpriteBatchNode that renders the cc.Sprite
            */
            getBatchNode();
            /**
            * get BlendFunc of Particle System
            */
            getBlendFunc();
            /**
            * return bounding box of particle system in world space
            */
            getBoundingBoxToWorld();
            /**
            * Return DrawMode of ParticleSystem   (Canvas Mode only)
            */
            getDrawMode();
            /**
            * How many seconds the emitter wil run.
            */
            getDuration();
            /**
            * get emission rate of the particles
            */
            getEmissionRate();
            /**
            * return kind of emitter modes
            */
            getEmitterMode();
            /**
            * get end color and end color variation of each particle
            */
            getEndColor();
            /**
            * get end color variance of each particle
            */
            getEndColorVar();
            /**
            * Return ending radius of the particles.
            */
            getEndRadius();
            /**
            * Return ending radius variance of the particles.
            */
            getEndRadiusVar();
            /**
            * get end size in pixels of each particle
            */
            getEndSize();
            /**
            * get end size variance in pixels of each particle
            */
            getEndSizeVar();
            /**
            * get end angle of each particle
            */
            getEndSpin();
            /**
            * get end angle variance of each particle
            */
            getEndSpinVar();
            /**
            * Return Gravity of emitter
            */
            getGravity();
            /**
            * Return life of each particle
            */
            getLife();
            /**
            * Return life variance of each particle
            */
            getLifeVar();
            /**
            * Quantity of particles that are being simulated at the moment
            */
            getParticleCount();
            /**
            * get particles movement type: Free or Grouped
            */
            getPositionType();
            /**
            * Return Position variance of the emitter
            */
            getPosVar();
            /**
            * Return radial acceleration of each particle.
            */
            getRadialAccel();
            /**
            * Return radial acceleration variance of each particle.
            */
            getRadialAccelVar();
            /**
            * get Number of degress to rotate a particle around the source pos per second.
            */
            getRotatePerSecond();
            /**
            * Return Variance in degrees for rotatePerSecond.
            */
            getRotatePerSecondVar();
            /**
            * get the rotation of each particle to its direction Only available in &#39;Gravity&#39; mode.
            */
            getRotationIsDir();
            /**
            * Return ShapeType of ParticleSystem  (Canvas Mode only)
            */
            getShapeType();
            /**
            * Return sourcePosition of the emitter
            */
            getSourcePosition();
            /**
            * Return Speed of each particle
            */
            getSpeed();
            /**
            * return speed variance of each particle.
            */
            getSpeedVar();
            /**
            * set start color of each particle
            */
            getStartColor();
            /**
            * get start color variance of each particle
            */
            getStartColorVar();
            /**
            * Return starting radius of the particles.
            */
            getStartRadius();
            /**
            * Return starting radius variance of the particles.
            */
            getStartRadiusVar();
            /**
            * get start size in pixels of each particle
            */
            getStartSize();
            /**
            * get size variance in pixels of each particle
            */
            getStartSizeVar();
            /**
            * get initial angle of each particle
            */
            getStartSpin();
            /**
            * get initial angle variance of each particle
            */
            getStartSpinVar();
            /**
            * Return tangential acceleration of each particle.
            */
            getTangentialAccel();
            /**
            * Return tangential acceleration variance of each particle.
            */
            getTangentialAccelVar();
            /**
            * get Texture of Particle System
            */
            getTexture();
            /**
            * get maximum particles of the system
            */
            getTotalParticles();
            /**
            * This is a hack function for performance, it&#39;s only available on Canvas mode.
            */
            ignoreColor(ignore: boolean);
            /**
            * initializes a cc.ParticleSystem
            */
            init();
            /**
            * Initializes a particle
            */
            initParticle(particle: Particle);
            /**
            *  initializes the texture with a rectangle measured Points
pointRect should be in Texture coordinates, not pixel coordinates

            */
            initTexCoordsWithRect(pointRect: Rect);
            /**
            * initializes a particle system from a NSDictionary and the path from where to load the png
            */
            initWithDictionary(dictionary: object, dirname: string);
            /**
            * 
    initializes a CCParticleSystem from a plist file.
            */
            initWithFile(plistFile: string);
            /**
            * Initializes a system with a fixed number of particles
            */
            initWithTotalParticles(numberOfParticles: number);
            /**
            * Return ParticleSystem is active
            */
            isActive();
            /**
            *  return whether or not the node will be auto-removed when it has no particles left.
            */
            isAutoRemoveOnFinish();
            /**
            * whether or not the particles are using blend additive.
            */
            isBlendAdditive();
            /**
            * whether or not the system is full
            */
            isFull();
            /**
            * does the alpha value modify color getter
            */
            isOpacityModifyRGB();
            /**
            * listen the event that coming to foreground on Android  (An empty function for native)
            */
            listenBackToForeground(obj: Class);
            /**
            * should be overridden by subclasses
            */
            postStep();
            /**
            * Kill all living particles.
            */
            resetSystem();
            /**
            * angle of each particle setter
            */
            setAngle(angle: number);
            /**
            * angle variance of each particle setter
            */
            setAngleVar();
            /**
            * set index of system in batch node array
            */
            setAtlasIndex(atlasIndex: number);
            /**
            *  set whether or not the node will be auto-removed when it has no particles left.
            */
            setAutoRemoveOnFinish(isAutoRemoveOnFinish: boolean);
            /**
            * set weak reference to the cc.SpriteBatchNode that renders the cc.Sprite
            */
            setBatchNode(batchNode: ParticleBatchNode);
            /**
            * whether or not the particles are using blend additive.
            */
            setBlendAdditive(isBlendAdditive: boolean);
            /**
            * set BlendFunc of Particle System
            */
            setBlendFunc(src: number, dst: number);
            /**
            *  Sets a new CCSpriteFrame as particle.
            */
            setDisplayFrame(spriteFrame: SpriteFrame);
            /**
            * DrawMode of ParticleSystem setter   (Canvas Mode only)
            */
            setDrawMode(drawMode: number);
            /**
            * set run seconds of the emitter
            */
            setDuration(duration: number);
            /**
            * set emission rate of the particles
            */
            setEmissionRate(emissionRate: number);
            /**
            * Switch between different kind of emitter modes:
 - CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration
 - CCParticleSystem.MODE_RADIUS: uses radius movement + rotation 
 
            */
            setEmitterMode(emitterMode: number);
            /**
            * set end color and end color variation of each particle
            */
            setEndColor(endColor: Color);
            /**
            * set end color variance of each particle
            */
            setEndColorVar(endColorVar: Color);
            /**
            * ending radius of the particles setter.
            */
            setEndRadius(endRadius: number);
            /**
            * ending radius variance of the particles setter.
            */
            setEndRadiusVar();
            /**
            * set end size in pixels of each particle
            */
            setEndSize();
            /**
            * set end size variance in pixels of each particle
            */
            setEndSizeVar(endSizeVar: number);
            /**
            * set end angle of each particle
            */
            setEndSpin(endSpin: number);
            /**
            * set end angle variance of each particle
            */
            setEndSpinVar(endSpinVar: number);
            /**
            * Gravity of emitter setter
            */
            setGravity(gravity: Point);
            /**
            * life of each particle setter
            */
            setLife(life: number);
            /**
            * life variance of each particle setter
            */
            setLifeVar(lifeVar: number);
            /**
            * does the alpha value modify color setter
            */
            setOpacityModifyRGB();
            /**
            * Quantity of particles setter
            */
            setParticleCount(particleCount: number);
            /**
            * set particles movement type: Free or Grouped
            */
            setPositionType(positionType: number);
            /**
            * Position variance of the emitter setter
            */
            setPosVar(posVar: Point);
            /**
            * radial acceleration of each particle setter.
            */
            setRadialAccel(radialAccel: number);
            /**
            * radial acceleration variance of each particle setter.
            */
            setRadialAccelVar(radialAccelVar: number);
            /**
            * set Number of degress to rotate a particle around the source pos per second.
            */
            setRotatePerSecond(degrees: number);
            /**
            * Variance in degrees for rotatePerSecond setter.
            */
            setRotatePerSecondVar();
            /**
            * set the rotation of each particle to its direction Only available in &#39;Gravity&#39; mode.
            */
            setRotationIsDir(t: boolean);
            /**
            * ShapeType of ParticleSystem setter  (Canvas Mode only)
            */
            setShapeType(shapeType: number);
            /**
            * sourcePosition of the emitter setter
            */
            setSourcePosition();
            /**
            * Speed of each particle setter
            */
            setSpeed(speed: number);
            /**
            * speed variance of each particle setter.
            */
            setSpeedVar(speedVar: number);
            /**
            * get start color of each particle
            */
            setStartColor(startColor: Color);
            /**
            * set start color variance of each particle
            */
            setStartColorVar(startColorVar: Color);
            /**
            * starting radius of the particles setter.
            */
            setStartRadius(startRadius: number);
            /**
            * starting radius variance of the particles setter.
            */
            setStartRadiusVar(startRadiusVar: number);
            /**
            * set start size in pixels of each particle
            */
            setStartSize(startSize: number);
            /**
            * set size variance in pixels of each particle
            */
            setStartSizeVar(startSizeVar: number);
            /**
            * set initial angle of each particle
            */
            setStartSpin(startSpin: number);
            /**
            * set initial angle variance of each particle
            */
            setStartSpinVar(startSpinVar: number);
            /**
            * Tangential acceleration of each particle setter.
            */
            setTangentialAccel(tangentialAccel: number);
            /**
            * tangential acceleration variance of each particle setter.
            */
            setTangentialAccelVar(tangentialAccelVar: number);
            /**
            * set Texture of Particle System
            */
            setTexture(texture: Texture2D);
            /**
            * Sets a new texture with a rect.
            */
            setTextureWithRect(texture: Texture2D, rect: Rect);
            /**
            * set maximum particles of the system
            */
            setTotalParticles(tp: number);
            /**
            * stop emitting particles.
            */
            stopSystem();
            /**
            * update emitter&#39;s status
            */
            update(dt: number);
            /**
            * should be overridden by subclasses
            */
            updateQuadWithParticle(particle: Particle, newPosition: Point);
            /**
            * update emitter&#39;s status (dt = 0)
            */
            updateWithNoTime();
        }
}
declare module cc.ParticleSystem {
        /**
        * 
								Mode A:Gravity + Tangential Accel + Radial Accel
								
							
        */
        export class ModeA  {
            /**
            * Mode A:Gravity + Tangential Accel + Radial Accel
            */
            constructor(gravity: cc.Point, speed: number, speedVar: number, tangentialAccel: number, tangentialAccelVar: number, radialAccel: number, radialAccelVar: number, rotationIsDir: boolean);
        }
}
declare module cc.ParticleSystem {
        /**
        * 
								Mode B: circular movement (gravity, radial accel and tangential accel don&#39;t are not used in this mode)
								
							
        */
        export class ModeB  {
            /**
            * Mode B: circular movement (gravity, radial accel and tangential accel don&#39;t are not used in this mode)
            */
            constructor(startRadius: number, startRadiusVar: number, endRadius: number, endRadiusVar: number, rotatePerSecond: number, rotatePerSecondVar: number);
        }
}
declare module cc {
        /**
        * 
        */
        export class path  {
            /**
            * 
            */
            constructor();
            /**
            * Get the file name of a file path.
            */
            basename(pathStr: string, extname: string);
            /**
            * Change file name of a file path.
            */
            changeBasename(pathStr: string, basename: string, isSameExt: boolean);
            /**
            * Change extname of a file path.
            */
            changeExtname(pathStr: string, extname: string);
            /**
            * Get dirname of a file path.
            */
            dirname(pathStr: string);
            /**
            * Get the ext name of a path.
            */
            extname(pathStr: string);
            /**
            * Join strings to be a path.
            */
            join();
            /**
            * Get the main name of a file name
            */
            mainFileName(fileName: string);
        }
}
declare module cc {
        /**
        * 
								Places the node in a certain position
								
							
        */
        export class Place extends cc.ActionInstant {
            /**
            * Places the node in a certain position
            */
            constructor(pos: any, y: number);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(pos: any, y: number);
            /**
            * Initializes a Place action with a position
            */
            initWithPosition(x: number, y: number);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.plistParser is a singleton object for parsing plist files
								
							
        */
        export class plistParser  {
            /**
            * cc.plistParser is a singleton object for parsing plist files
            */
            constructor();
            /**
            * parse a xml string as plist object.
            */
            parse(xmlTxt: string);
        }
}
declare module cc {
        /**
        * 
								cc.Point is the class for point object, please do not use its constructor to create points, use cc.p() alias function instead.
								
							
        */
        export class Point  {
            /**
            * cc.Point is the class for point object, please do not use its constructor to create points, use cc.p() alias function instead.
            */
            constructor(x: number, y: number);
        }
}
declare module cc {
        /**
        * 
								Parallax Object. 
Parallax required attributes are stored.
								
							
        */
        export class PointObject extends cc.Class {
            /**
            * Parallax Object.
            */
            constructor();
            /**
            * Create a object to stored parallax data.
            */
            static create(ratio: Point, offset: Point);
            /**
            * Gets the child.
            */
            getChild();
            /**
            * Gets the offset.
            */
            getOffset();
            /**
            * Gets the ratio.
            */
            getRatio();
            /**
            * initializes cc.PointObject
            */
            initWithCCPoint(ratio: Point, offset: Point);
            /**
            * Set the child.
            */
            setChild(value: Node);
            /**
            * Set the offset.
            */
            setOffset(value: Point);
            /**
            * Set the ratio.
            */
            setRatio(value: Point);
        }
}
declare module cc {
        /**
        * 
								
 cc.pool is a singleton object serves as an object cache pool.
 It can helps you to improve your game performance for objects which need frequent release and recreate operations
 Some common use case is :
     1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)
     2. Blocks in candy crash (massive creation and recreation)
     etc...

								
							
        */
        export class pool  {
            /**
            * 
 cc.pool is a singleton object serves as an object cache pool.
            */
            constructor();
            /**
            * remove all objs in pool and reset the pool
            */
            drainAllPools();
            /**
            * Get the obj from pool
            */
            getFromPool();
            /**
            * Check if this kind of obj has already in pool
            */
            hasObject();
            /**
            * Put the obj in pool
            */
            putInPool();
            /**
            * Remove the obj if you want to delete it;
            */
            removeObject();
        }
}
declare module cc {
        /**
        * 
								Progress from a percentage to another percentage
								
							
        */
        export class ProgressFromTo extends cc.ActionInterval {
            /**
            * Progress from a percentage to another percentage
            */
            constructor(duration: number, fromPercentage: number, toPercentage: number);
            /**
            * return a new cc.ProgressTo, all the configuration is the same as the original
            */
            clone();
            /**
            * Creates and initializes the action with a duration, a &quot;from&quot; percentage and a &quot;to&quot; percentage
Constructor of cc.ProgressFromTo
            */
            ctor(duration: number, fromPercentage: number, toPercentage: number);
            /**
            * Initializes the action with a duration, a &quot;from&quot; percentage and a &quot;to&quot; percentage
            */
            initWithDuration(duration: number, fromPercentage: number, toPercentage: number);
            /**
            * 
            */
            reverse();
            /**
            * start with a target
            */
            startWithTarget(target: Node);
            /**
            * 
            */
            update(time: number);
        }
}
declare module cc {
        /**
        * 
								cc.Progresstimer is a subclass of cc.Node.   
It renders the inner sprite according to the percentage.
The progress can be Radial, Horizontal or vertical.
								
							
        */
        export class ProgressTimer extends cc.Node {
            /**
            * cc.Progresstimer is a subclass of cc.Node.
            */
            constructor();
            /**
            * create a progress timer object with image file name that renders the inner sprite according to the percentage
            */
            static create(sprite: Sprite);
            /**
            * constructor of cc.cc.ProgressTimer
            */
            ctor(sprite: Sprite);
            /**
            * This allows the bar type to move the component at a specific rate
   Set the component to 0 to make sure it stays at 100%.
            */
            getBarChangeRate();
            /**
            * return color of sprite
            */
            getColor();
            /**
            * Midpoint is used to modify the progress start position.
            */
            getMidpoint();
            /**
            * return Opacity of sprite
            */
            getOpacity();
            /**
            * Percentages are from 0 to 100
            */
            getPercentage();
            /**
            * The image to show the progress percentage, retain
            */
            getSprite();
            /**
            * Change the percentage to change progress
            */
            getType();
            /**
            * Initializes a progress timer with the sprite as the shape the timer goes through
            */
            initWithSprite(sprite: Sprite);
            /**
            * only use for jsbinding
            */
            isOpacityModifyRGB();
            /**
            * return if reverse direction
            */
            isReverseDirection();
            /**
            * 
            */
            setBarChangeRate(barChangeRate: Point);
            /**
            * set color of sprite
            */
            setColor(color: Color);
            /**
            * Midpoint setter
            */
            setMidpoint(mpoint: Point);
            /**
            * set opacity of sprite
            */
            setOpacity(opacity: number);
            /**
            * only use for jsbinding
            */
            setOpacityModifyRGB();
            /**
            * from 0-100
            */
            setPercentage(percentage: number);
            /**
            * Reverse Progress setter
            */
            setReverseDirection(reverse: boolean);
            /**
            * set reverse cc.ProgressTimer
            */
            setReverseProgress(reverse: boolean);
            /**
            * set sprite for cc.ProgressTimer
            */
            setSprite(sprite: Sprite);
            /**
            * set Progress type of cc.ProgressTimer
            */
            setType(type: any);
        }
}
declare module cc {
        /**
        * 
								Progress to percentage
								
							
        */
        export class ProgressTo extends cc.ActionInterval {
            /**
            * Progress to percentage
            */
            constructor(duration: number, percent: number);
            /**
            * return a new cc.ProgressTo, all the configuration is the same as the original
            */
            clone();
            /**
            * Creates a ProgressTo action with a duration and a percent
Constructor of cc.ProgressTo
            */
            ctor(duration: number, percent: number);
            /**
            * Initializes with a duration and a percent
            */
            initWithDuration(duration: number, percent: number);
            /**
            * reverse hasn&#39;t been supported
            */
            reverse();
            /**
            * start with a target
            */
            startWithTarget(target: Node);
            /**
            * custom update
            */
            update(time: number);
        }
}
declare module cc {
        /**
        * 
								A class inhert from cc.Node, use for saving some protected children in other list.
								
							
        */
        export class ProtectedNode extends cc.Node {
            /**
            * A class inhert from cc.Node, use for saving some protected children in other list.
            */
            constructor();
            /**
            * 
 Adds a child to the container with z order and tag                                                                         
 If the child is added to a &#39;running&#39; node, then &#39;onEnter&#39; and &#39;onEnterTransitionDidFinish&#39; will be called immediately.
            */
            addProtectedChild(child: Node, localZOrder: number, tag: number);
            /**
            * Stops itself and its children and protected children&#39;s all running actions and schedulers
            */
            cleanup();
            /**
            * create a cc.ProtectedNode object;
            */
            static create();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * Gets a child from the container with its tag
            */
            getProtectedChildByTag(tag: number);
            /**
            * Calls its parent&#39;s onEnter and calls its protected children&#39;s onEnter
            */
            onEnter();
            /**
            * 
    Event callback that is invoked when the Node enters in the &#39;stage&#39;.
            */
            onEnterTransitionDidFinish();
            /**
            * Calls its parent&#39;s onExit and calls its protected children&#39;s onExit
            */
            onExit();
            /**
            * 
     Event callback that is called every time the Node leaves the &#39;stage&#39;.
            */
            onExitTransitionDidStart();
            /**
            * Removes all children from the container with a cleanup.
            */
            removeAllProtectedChildren();
            /**
            * Removes all children from the container, and do a cleanup to all running actions depending on the cleanup parameter.
            */
            removeAllProtectedChildrenWithCleanup(cleanup: boolean);
            /**
            * Removes a child from the container.
            */
            removeProtectedChild(child: Node, cleanup: boolean);
            /**
            * Removes a child from the container by tag value.
            */
            removeProtectedChildByTag(tag: number, cleanup: boolean);
            /**
            * Reorders a child according to a new z value.
            */
            reorderProtectedChild(child: Node, localZOrder: number);
            /**
            * 
    Sorts the children array once before drawing, instead of every time when a child is added or reordered.
            */
            sortAllProtectedChildren();
            /**
            * transforms and draws itself, and visit its children and protected children.
            */
            visit(ctx: any);
        }
}
declare module cc {
        /**
        * 
								cc.Rect is the class for rect object, please do not use its constructor to create rects, use cc.rect() alias function instead.
								
							
        */
        export class Rect  {
            /**
            * cc.Rect is the class for rect object, please do not use its constructor to create rects, use cc.rect() alias function instead.
            */
            constructor(width: number, height: number);
        }
}
declare module cc {
        /**
        * 
								Delete self in the next frame.
								
							
        */
        export class RemoveSelf extends cc.ActionInstant {
            /**
            * Delete self in the next frame.
            */
            constructor(isNeedCleanUp: boolean);
        }
}
declare module cc {
        /**
        * 
								cc.RenderTexture is a generic rendering target. To render things into it,
simply construct a render target, call begin on it, call visit on any cocos
scenes or objects to render them, and call end. For convenience, render texture
adds a sprite as it&#39;s display child with the results, so you can simply add
the render texture to your scene and treat it like any other CocosNode.
There are also functions for saving the render texture to disk in PNG or JPG format.
								
							
        */
        export class RenderTexture extends cc.Node {
            /**
            * cc.RenderTexture is a generic rendering target.
            */
            constructor();
            /**
            * starts grabbing
            */
            begin();
            /**
            * starts rendering to the texture while clearing the texture first.
            */
            beginWithClear(r: number, g: number, b: number, a: number, depthValue: number, stencilValue: number);
            /**
            * Clear RenderTexture.
            */
            cleanup();
            /**
            * clears the texture with a color
            */
            clear(r: any, g: number, b: number, a: number);
            /**
            * clears the texture with a specified depth value
            */
            clearDepth(depthValue: number);
            /**
            * clears the texture with rect.
            */
            clearRect(x: number, y: number, width: number, height: number);
            /**
            * clears the texture with a specified stencil value
            */
            clearStencil(stencilValue: number);
            /**
            * creates a RenderTexture object with width and height in Points and a pixel format, only RGB and RGBA formats are valid
            */
            static create(width: number, height: number, format: any, depthStencilFormat: number);
            /**
            * creates a RenderTexture object with width and height in Points and a pixel format, only RGB and RGBA formats are valid
Constructor of cc.RenderTexture for Canvas
            */
            ctor(width: number, height: number, format: any, depthStencilFormat: number);
            /**
            * ends grabbing
            */
            end();
            /**
            * Clear color value.
            */
            getClearColor();
            /**
            * Value for clearDepth.
            */
            getClearDepth();
            /**
            * Valid flags: GL_COLOR_BUFFER_BIT, GL_DEPTH_BUFFER_BIT, GL_STENCIL_BUFFER_BIT.
            */
            getClearFlags();
            /**
            * Value for clear Stencil.
            */
            getClearStencil();
            /**
            * Gets the sprite
            */
            getSprite();
            /**
            * Initializes the instance of cc.RenderTexture
            */
            initWithWidthAndHeight(width: number, height: number, format: any, depthStencilFormat: number);
            /**
            * When enabled, it will render its children into the texture automatically.
            */
            isAutoDraw();
            /**
            * Listen &quot;come to background&quot; message, and save render texture.
            */
            listenToBackground(obj: Class);
            /**
            * Listen &quot;come to foreground&quot; message and restore the frame buffer object.
            */
            listenToForeground(obj: Class);
            /**
            * creates a new CCImage from with the texture&#39;s data.
            */
            newCCImage();
            /**
            * saves the texture into a file using JPEG format.
            */
            saveToFile(filePath: number, format: number);
            /**
            * When enabled, it will render its children into the texture automatically.
            */
            setAutoDraw();
            /**
            * Set the clear color value.
            */
            setClearColor(clearColor: Color);
            /**
            * Set value for clearDepth.
            */
            setClearDepth(clearDepth: number);
            /**
            * Set the clearFlags
            */
            setClearFlags(clearFlags: number);
            /**
            * Set value for clear Stencil.
            */
            setClearStencil();
            /**
            * Set the sprite
            */
            setSprite(sprite: Sprite);
        }
}
declare module cc {
        /**
        * 
								Repeats an action a number of times.
To repeat an action forever use the CCRepeatForever action.
								
							
        */
        export class Repeat extends cc.ActionInterval {
            /**
            * Repeats an action a number of times.
            */
            constructor(action: FiniteTimeAction, times: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action: FiniteTimeAction, times: number);
            /**
            * Get inner Action.
            */
            getInnerAction();
            /**
            * 
            */
            initWithAction(action: FiniteTimeAction, times: number);
            /**
            * Return true if the action has finished.
            */
            isDone();
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * Set inner Action.
            */
            setInnerAction(action: FiniteTimeAction);
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Repeats an action for ever.  
To repeat the an action for a limited number of times use the Repeat action. 
								
							
        */
        export class RepeatForever extends cc.ActionInterval {
            /**
            * Repeats an action for ever.
            */
            constructor(action: FiniteTimeAction);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action: FiniteTimeAction);
            /**
            * Get inner action.
            */
            getInnerAction();
            /**
            * 
            */
            initWithAction(action: ActionInterval);
            /**
            * Return true if the action has finished.
            */
            isDone();
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Set inner action.
            */
            setInnerAction(action: ActionInterval);
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * called every frame with it&#39;s delta time.
            */
            step();
        }
}
declare module cc {
        /**
        * 
								cc.ResolutionPolicy class is the root strategy class of scale strategy,
its main task is to maintain the compatibility with Cocos2d-x
								
							
        */
        export class ResolutionPolicy extends cc.Class {
            /**
            * cc.ResolutionPolicy class is the root strategy class of scale strategy,
its main task is to maintain the compatibility with Cocos2d-x
            */
            constructor(containerStg: ContainerStrategy, contentStg: ContentStrategy);
            /**
            * Function to apply this resolution policy
The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
The target view can then apply these value to itself, it&#39;s preferred not to modify directly its private variables
            */
            apply(view: view, designedResolution: Size);
            /**
            * Constructor of cc.ResolutionPolicy
            */
            ctor(containerStg: ContainerStrategy, contentStg: ContentStrategy);
            /**
            * Manipulation after appyling the strategy
            */
            postApply(view: view);
            /**
            * Manipulation before applying the resolution policy
            */
            preApply(view: view);
            /**
            * Setup the container&#39;s scale strategy
            */
            setContainerStrategy(containerStg: ContainerStrategy);
            /**
            * Setup the content&#39;s scale strategy
            */
            setContentStrategy(contentStg: ContentStrategy);
        }
}
declare module cc {
        /**
        * 
								cc.ReuseGrid action
								
							
        */
        export class ReuseGrid extends cc.ActionInstant {
            /**
            * cc.ReuseGrid action
            */
            constructor(times: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(times: number);
            /**
            * initializes an action with the number of times that the current grid will be reused
            */
            initWithTimes(times: number);
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
        }
}
declare module cc {
        /**
        * 
								
Executes an action in reverse order, from time=duration to time=0                                     
								
							
        */
        export class ReverseTime extends cc.ActionInterval {
            /**
            * 
Executes an action in reverse order, from time=duration to time=0                                     
            */
            constructor(action: FiniteTimeAction);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action: FiniteTimeAction);
            /**
            * 
            */
            initWithAction(action: FiniteTimeAction);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								An RGBA color class, its value present as percent
								
							
        */
        export class RGBA  {
            /**
            * An RGBA color class, its value present as percent
            */
            constructor(r: number, g: number, b: number, a: number);
        }
}
declare module cc {
        /**
        * 
								cc.Ripple3D action. 
Reference the test cases (Effects Test)
								
							
        */
        export class Ripple3D extends cc.Grid3DAction {
            /**
            * cc.Ripple3D action.
            */
            constructor(duration: number, gridSize: Size, position: Point, radius: number, waves: number, amplitude: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, position: Point, radius: number, waves: number, amplitude: number);
            /**
            * get Amplitude
            */
            getAmplitude();
            /**
            * get Amplitude rate
            */
            getAmplitudeRate();
            /**
            * get center position
            */
            getPosition();
            /**
            * initializes the action with radius, number of waves, amplitude, a grid size and duration
            */
            initWithDuration(duration: number, gridSize: Size, position: Point, radius: number, waves: number, amplitude: number);
            /**
            * set Amplitude
            */
            setAmplitude(amplitude: number);
            /**
            * get amplitude rate
            */
            setAmplitudeRate(amplitudeRate: number);
            /**
            * set center position
            */
            setPosition(position: Point);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Rotates a cc.Node object clockwise a number of degrees by modifying it&#39;s rotation attribute.
Relative to its properties to modify.
								
							
        */
        export class RotateBy extends cc.ActionInterval {
            /**
            * Rotates a cc.Node object clockwise a number of degrees by modifying it&#39;s rotation attribute.
            */
            constructor(duration: number, deltaAngleX: number, deltaAngleY: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, deltaAngleX: number, deltaAngleY: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, deltaAngleX: number, deltaAngleY: number);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Rotates a cc.Node object to a certain angle by modifying it&#39;s.
rotation attribute. 
The direction will be decided by the shortest angle.
								
							
        */
        export class RotateTo extends cc.ActionInterval {
            /**
            * Rotates a cc.Node object to a certain angle by modifying it&#39;s.
            */
            constructor(duration: number, deltaAngleX: number, deltaAngleY: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, deltaAngleX: number, deltaAngleY: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, deltaAngleX: number, deltaAngleY: number);
            /**
            * RotateTo reverse not implemented.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								A SAX Parser
								
							
        */
        export class saxParser extends cc.Class {
            /**
            * A SAX Parser
            */
            constructor();
            /**
            * Constructor of cc.SAXParser
            */
            ctor();
            /**
            * 
            */
            parse(xmlTxt: string);
        }
}
declare module cc {
        /**
        * 
								A 9-slice sprite for cocos2d.

9-slice scaling allows you to specify how scaling is applied
to specific areas of a sprite. With 9-slice scaling (3x3 grid),
you can ensure that the sprite does not become distorted when
scaled.
								
							
        */
        export class Scale9Sprite extends cc.Node {
            /**
            * A 9-slice sprite for cocos2d.
            */
            constructor();
            /**
            * add texture loaded event listener
            */
            addLoadedEventListener(callback: Function, target: Object);
            /**
            * Creates a 9-slice sprite with a texture file, a delimitation zone and
with the specified cap insets.
            */
            static create(file: any, rect: Rect, capInsets: Rect);
            /**
            * 
            */
            static createWithSpriteFrame();
            /**
            * 
            */
            static createWithSpriteFrameName();
            /**
            * Constructor function.
            */
            ctor(file: any, rect: Rect, capInsets: Rect);
            /**
            * Gets the bottom side inset
            */
            getInsetBottom();
            /**
            * Gets the left side inset
            */
            getInsetLeft();
            /**
            * Gets the right side inset
            */
            getInsetRight();
            /**
            * Gets the top side inset
            */
            getInsetTop();
            /**
            * Original sprite&#39;s size.
            */
            getOriginalSize();
            /**
            * Initializes a cc.Scale9Sprite.
            */
            init();
            /**
            * Initializes a 9-slice sprite with a SpriteBatchNode.
            */
            initWithBatchNode(batchNode: SpriteBatchNode, rect: Rect, rotated: any, capInsets: Rect);
            /**
            * Initializes a 9-slice sprite with a texture file, a delimitation zone and
with the specified cap insets.
            */
            initWithFile(file: string, rect: Rect, capInsets: Rect);
            /**
            * Initializes a 9-slice sprite with an sprite frame and with the specified
cap insets.
            */
            initWithSpriteFrame();
            /**
            * Initializes a 9-slice sprite with an sprite frame name and with the specified
cap insets.
            */
            initWithSpriteFrameName();
            /**
            * returns whether or not the opacity will be applied using glColor(R,G,B,opacity) or glColor(opacity, opacity, opacity, opacity);
            */
            isOpacityModifyRGB();
            /**
            * Creates and returns a new sprite object with the specified cap insets.
            */
            resizableSpriteWithCapInsets(capInsets: Rect);
            /**
            * Color: conforms to CCRGBAProtocol protocol
            */
            setColor();
            /**
            * Sets the untransformed size of the Scale9Sprite.
            */
            setContentSize(size: any, height: number);
            /**
            * Sets the bottom side inset
            */
            setInsetBottom(insetBottom: number);
            /**
            * Sets the left side inset
            */
            setInsetLeft(insetLeft: number);
            /**
            * Sets the right side inset
            */
            setInsetRight(insetRight: number);
            /**
            * Sets the top side inset
            */
            setInsetTop(insetTop: number);
            /**
            * Opacity: conforms to CCRGBAProtocol protocol
            */
            setOpacity();
            /**
            * sets the premultipliedAlphaOpacity property.
            */
            setOpacityModifyRGB();
            /**
            * set the sprite frame of cc.Scale9Sprite
            */
            setSpriteFrame(spriteFrame: SpriteFrame);
            /**
            * return  texture is loaded
            */
            textureLoaded();
            /**
            * Update the scale9Sprite with a SpriteBatchNode.
            */
            updateWithBatchNode(batchNode: SpriteBatchNode, originalRect: Rect, rotated: boolean, capInsets: Rect);
        }
}
declare module cc {
        /**
        * 
								Scales a cc.Node object a zoom factor by modifying it&#39;s scale attribute.
Relative to its changes.
								
							
        */
        export class ScaleBy extends cc.ScaleTo {
            /**
            * Scales a cc.Node object a zoom factor by modifying it&#39;s scale attribute.
            */
            constructor();
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
        }
}
declare module cc {
        /**
        * 
								Scales a cc.Node object to a zoom factor by modifying it&#39;s scale attribute.
								
							
        */
        export class ScaleTo extends cc.ActionInterval {
            /**
            * Scales a cc.Node object to a zoom factor by modifying it&#39;s scale attribute.
            */
            constructor(duration: number, sx: number, sy: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, sx: number, sy: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, sx: number, sy: number);
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.Scene is a subclass of cc.Node that is used only as an abstract concept.
 cc.Scene an cc.Node are almost identical with the difference that cc.Scene has it&#39;s
anchor point (by default) at the center of the screen.

For the moment cc.Scene has no other logic than that, but in future releases it might have
additional logic.

It is a good practice to use and cc.Scene as the parent of all your nodes.
								
							
        */
        export class Scene extends cc.Node {
            /**
            * cc.Scene is a subclass of cc.Node that is used only as an abstract concept.
            */
            constructor();
            /**
            * creates a scene
            */
            static create();
        }
}
declare module cc {
        /**
        * 
								
   Scheduler is responsible of triggering the scheduled callbacks.
   You should not use NSTimer. Instead use this class.
   
   There are 2 different types of callbacks (selectors):
      - update callback: the &#39;update&#39; callback will be called every frame. You can customize the priority.
      - custom callback: A custom callback will be called every frame, or with a custom interval of time
      
   The &#39;custom selectors&#39; should be avoided when possible. It is faster, and consumes less memory to use the &#39;update callback&#39;. *

								
							
        */
        export class Scheduler extends cc.Class {
            /**
            * 
   Scheduler is responsible of triggering the scheduled callbacks.
            */
            constructor();
            /**
            * Returns time scale of scheduler
            */
            getTimeScale();
            /**
            * Returns whether or not the target is paused
            */
            isTargetPaused(target: Class);
            /**
            * 
 Pause all selectors from all targets.
            */
            pauseAllTargets();
            /**
            * Pause all selectors from all targets with a minimum priority.
            */
            pauseAllTargetsWithMinPriority(minPriority: number);
            /**
            * 
   Pauses the target.
            */
            pauseTarget(target: Class);
            /**
            * Resumes the target.
            */
            resumeTarget(target: Class);
            /**
            * Resume selectors on a set of targets.
            */
            resumeTargets(targetsToResume: Array);
            /**
            * 
  The scheduled method will be called every &#39;interval&#39; seconds.
            */
            scheduleCallbackForTarget(target: Class, callback_fn: any, interval: number, repeat: number, delay: number, paused: boolean);
            /**
            * 
   Schedules the &#39;update&#39; callback_fn for a given target with a given priority.
            */
            scheduleUpdateForTarget(target: Class, priority: number, paused: boolean);
            /**
            * 
   Modifies the time of all scheduled callbacks.
            */
            setTimeScale(timeScale: number);
            /**
            * 
     Unschedules all function callbacks from all targets.
            */
            unscheduleAllCallbacks();
            /**
            * Unschedules all function callbacks for a given target.
            */
            unscheduleAllCallbacksForTarget(target: Class);
            /**
            * 
   Unschedules all function callbacks from all targets with a minimum priority.
            */
            unscheduleAllCallbacksWithMinPriority(minPriority: number);
            /**
            * 
  Unschedule a callback function for a given target.
            */
            unscheduleCallbackForTarget(target: Class, callback_fn: any);
            /**
            * Unschedules the update callback function for a given target
            */
            unscheduleUpdateForTarget(target: Class);
            /**
            * &#39;update&#39; the scheduler.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								The fullscreen API provides an easy way for web content to be presented using the user&#39;s entire screen.
It&#39;s invalid on safari, QQbrowser and android browser
								
							
        */
        export class screen  {
            /**
            * The fullscreen API provides an easy way for web content to be presented using the user&#39;s entire screen.
            */
            constructor();
            /**
            * Automatically request full screen with a touch/click event
            */
            autoFullScreen(element: Element, onFullScreenChange: Function);
            /**
            * exit the full mode.
            */
            exitFullScreen();
            /**
            * return true if it&#39;s full now.
            */
            fullScreen();
            /**
            * initialize
            */
            init();
            /**
            * change the screen to full mode.
            */
            requestFullScreen(element: Element, onFullScreenChange: Function);
        }
}
declare module cc {
        /**
        * 
								ScrollView support for cocos2d -x.
It provides scroll view functionalities to cocos2d projects natively.
								
							
        */
        export class ScrollView extends cc.Layer {
            /**
            * ScrollView support for cocos2d -x.
            */
            constructor();
            /**
            * Returns an autoreleased scroll view object.
            */
            static create(size: Size, container: Node);
            /**
            * 
            */
            ctor();
            /**
            * direction allowed to scroll.
            */
            getDirection();
            /**
            * 
size to clip.
            */
            getViewSize();
            /**
            * initialized whether success or fail
            */
            initWithViewSize(size: Size, container: Node);
            /**
            * Determines whether it clips its children or not.
            */
            isClippingToBounds();
            /**
            * Determines if a given node&#39;s bounding box is in visible bounds
            */
            isNodeVisible(node: Node);
            /**
            * Returns the current container&#39;s maximum offset.
            */
            maxContainerOffset();
            /**
            * Returns the current container&#39;s minimum offset.
            */
            minContainerOffset();
            /**
            * override functions
            */
            onTouchBegan();
            /**
            * Provided to make scroll view compatible with SWLayer&#39;s pause method
            */
            pause();
            /**
            * Provided to make scroll view compatible with SWLayer&#39;s resume method
            */
            resume();
            /**
            * Sets a new content offset.
            */
            setContentOffset(offset: Point, animated: number);
            /**
            * Sets a new content offset.
            */
            setContentOffsetInDuration(offset: Point, dt: number);
            /**
            * Sets a new scale and does that for a predefined duration.
            */
            setZoomScale(scale: number, animated: boolean);
            /**
            * Sets a new scale for container in a given duration.
            */
            setZoomScaleInDuration(s: number, dt: number);
        }
}
declare module cc {
        /**
        * 
								Runs actions sequentially, one after another.
								
							
        */
        export class Sequence extends cc.ActionInterval {
            /**
            * Runs actions sequentially, one after another.
            */
            constructor(tempArray: any);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(tempArray: any);
            /**
            * Initializes the action 
            */
            initWithTwoActions(actionOne: FiniteTimeAction, actionTwo: FiniteTimeAction);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * stop the action.
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.shaderCache is a singleton object that stores manages GL shaders
								
							
        */
        export class shaderCache  {
            /**
            * cc.shaderCache is a singleton object that stores manages GL shaders
            */
            constructor();
            /**
            * adds a CCGLProgram to the cache for a given name
            */
            addProgram(program: GLProgram, key: string);
            /**
            * returns a GL program for a shader name
            */
            getProgram(shaderName: string);
            /**
            * loads the default shaders
            */
            loadDefaultShaders();
            /**
            * returns a GL program for a given key
            */
            programForKey(key: string);
            /**
            * reload the default shaders
            */
            reloadDefaultShaders();
        }
}
declare module cc {
        /**
        * 
								cc.Shaky3D action. 
Reference the test cases (Effects Test)
								
							
        */
        export class Shaky3D extends cc.Grid3DAction {
            /**
            * cc.Shaky3D action.
            */
            constructor(duration: number, gridSize: Size, range: number, shakeZ: boolean);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, range: number, shakeZ: boolean);
            /**
            * initializes the action with a range, shake Z vertices, a grid and duration
            */
            initWithDuration(duration: number, gridSize: Size, range: number, shakeZ: boolean);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.ShakyTiles3D action. 
Reference the test cases (Effects Test)
								
							
        */
        export class ShakyTiles3D extends cc.TiledGrid3DAction {
            /**
            * cc.ShakyTiles3D action.
            */
            constructor(duration: number, gridSize: Size, range: number, shakeZ: boolean);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, range: number, shakeZ: boolean);
            /**
            * Initializes the action with a range, whether or not to shake Z vertices, a grid size, and duration.
            */
            initWithDuration(duration: number, gridSize: Size, range: number, shakeZ: boolean);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.ShatteredTiles3D action. 
Reference the test cases (Effects Test)
								
							
        */
        export class ShatteredTiles3D extends cc.TiledGrid3DAction {
            /**
            * cc.ShatteredTiles3D action.
            */
            constructor(duration: number, gridSize: Size, range: number, shatterZ: boolean);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, range: number, shatterZ: boolean);
            /**
            * Initializes the action with a range, whether or not to shatter Z vertices, a grid size and duration.
            */
            initWithDuration(duration: number, gridSize: Size, range: number, shatterZ: boolean);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Show the node.
								
							
        */
        export class Show extends cc.ActionInstant {
            /**
            * Show the node.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.ShuffleTiles action, Shuffle the tiles in random order. 
Reference the test cases (Effects Test)
								
							
        */
        export class ShuffleTiles extends cc.TiledGrid3DAction {
            /**
            * cc.ShuffleTiles action, Shuffle the tiles in random order.
            */
            constructor(duration: number, gridSize: Size, seed: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, seed: number);
            /**
            * Get Delta
            */
            getDelta(pos: Size);
            /**
            * Initializes the action with a random seed, the grid size and the duration.
            */
            initWithDuration(duration: number, gridSize: Size, seed: number);
            /**
            * Place Tile
            */
            placeTile(pos: Point, tile: Tile);
            /**
            * Shuffle
            */
            shuffle(array: Array, len: number);
            /**
            * Start with target
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.Size is the class for size object, please do not use its constructor to create sizes, use cc.size() alias function instead.
								
							
        */
        export class Size  {
            /**
            * cc.Size is the class for size object, please do not use its constructor to create sizes, use cc.size() alias function instead.
            */
            constructor(width: number, height: number);
        }
}
declare module cc {
        /**
        * 
								Skews a cc.Node object by skewX and skewY degrees.
Relative to its attribute modification.
								
							
        */
        export class SkewBy extends cc.SkewTo {
            /**
            * Skews a cc.Node object by skewX and skewY degrees.
            */
            constructor(t: number, sx: number, sy: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(t: number, sx: number, sy: number);
            /**
            * Initializes the action.
            */
            initWithDuration(t: number, deltaSkewX: number, deltaSkewY: number);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action width target.
            */
            startWithTarget(target: Node);
        }
}
declare module cc {
        /**
        * 
								Skews a cc.Node object to given angles by modifying it&#39;s skewX and skewY attributes
								
							
        */
        export class SkewTo extends cc.ActionInterval {
            /**
            * Skews a cc.Node object to given angles by modifying it&#39;s skewX and skewY attributes
            */
            constructor(t: number, sx: number, sy: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(t: number, sx: number, sy: number);
            /**
            * Initializes the action.
            */
            initWithDuration(t: number, sx: number, sy: number);
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								The sortable object interface
								
							
        */
        export class SortableObject extends cc.Class {
            /**
            * The sortable object interface
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								The SortedObject class
								
							
        */
        export class SortedObject extends cc.SortableObject {
            /**
            * The SortedObject class
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								The Spacer class
								
							
        */
        export class Spacer extends cc.Layer {
            /**
            * The Spacer class
            */
            constructor();
        }
}
declare module cc {
        /**
        * 
								Spawn a new action immediately
								
							
        */
        export class Spawn extends cc.ActionInterval {
            /**
            * Spawn a new action immediately
            */
            constructor();
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(tempArray: any);
            /**
            * initializes the Spawn action with the 2 actions to spawn
            */
            initWithTwoActions(action1: FiniteTimeAction, action2: FiniteTimeAction);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Changes the speed of an action, making it take longer (speed &gt; 1)
or less (speed 
Useful to simulate &#39;slow motion&#39; or &#39;fast forward&#39; effect.
								
							
        */
        export class Speed extends cc.Action {
            /**
            * Changes the speed of an action, making it take longer (speed &gt; 1)
or less (speed 
            */
            constructor(action: ActionInterval, speed: number);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action: ActionInterval, speed: number);
            /**
            * Get inner Action.
            */
            getInnerAction();
            /**
            * Gets the current running speed.
            */
            getSpeed();
            /**
            * initializes the action.
            */
            initWithAction(action: ActionInterval, speed: number);
            /**
            * return true if the action has finished.
            */
            isDone();
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * Set inner Action.
            */
            setInnerAction(action: ActionInterval);
            /**
            * alter the speed of the inner function in runtime.
            */
            setSpeed(speed: number);
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
            /**
            * called every frame with it&#39;s delta time.
            */
            step(dt: number);
            /**
            * Stop the action.
            */
            stop();
        }
}
declare module cc {
        /**
        * 
								cc.SplitCols action. 
Reference the test cases (Effects Test)
								
							
        */
        export class SplitCols extends cc.TiledGrid3DAction {
            /**
            * cc.SplitCols action.
            */
            constructor(duration: number, cols: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, cols: number);
            /**
            * initializes the action with the number of columns to split and the duration
            */
            initWithDuration(duration: number, cols: number);
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.SplitRows action. 
Reference the test cases (Effects Test)
								
							
        */
        export class SplitRows extends cc.TiledGrid3DAction {
            /**
            * cc.SplitRows action.
            */
            constructor(duration: number, rows: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, rows: number);
            /**
            * initializes the action with the number of rows to split and the duration
            */
            initWithDuration(duration: number, rows: number);
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) )  

cc.Sprite can be created with an image, or with a sub-rectangle of an image.  

If the parent or any of its ancestors is a cc.SpriteBatchNode then the following features/limitations are valid   
   - Features when the parent is a cc.BatchNode: 
       - MUCH faster rendering, specially if the cc.SpriteBatchNode has many children. All the children will be drawn in a single batch.  

   - Limitations   
       - Camera is not supported yet (eg: CCOrbitCamera action doesn&#39;t work)  
       - GridBase actions are not supported (eg: CCLens, CCRipple, CCTwirl) 
       - The Alias/Antialias property belongs to CCSpriteBatchNode, so you can&#39;t individually set the aliased property.  
       - The Blending function property belongs to CCSpriteBatchNode, so you can&#39;t individually set the blending function property. 
       - Parallax scroller is not supported, but can be simulated with a &quot;proxy&quot; sprite.        

 If the parent is an standard cc.Node, then cc.Sprite behaves like any other cc.Node:      
   - It supports blending functions    
   - It supports aliasing / antialiasing    
   - But the rendering will be slower: 1 draw per children.   

The default anchorPoint in cc.Sprite is (0.5, 0.5). 
								
							
        */
        export class Sprite extends cc.Node {
            /**
            * cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) )  

cc.Sprite can be created with an image, or with a sub-rectangle of an image.
            */
            constructor(fileName: any, rect: Rect, rotated: boolean);
            /**
            * Add child to sprite (override cc.Node)
            */
            addChild(child: Sprite, localZOrder: number, tag: string);
            /**
            * Add a event listener for texture loaded event.
            */
            addLoadedEventListener(callback: Function, target: Object);
            /**
            * Create a sprite with image path or frame name or texture or spriteFrame.
            */
            static create(fileName: any, rect: Rect, rotated: boolean);
            /**
            * 
            */
            static createWithSpriteFrame();
            /**
            * 
            */
            static createWithSpriteFrameName();
            /**
            * 
            */
            static createWithTexture();
            /**
            * Returns the current displayed frame.
            */
            displayFrame();
            /**
            * Returns the index used on the TextureAtlas.
            */
            getAtlasIndex();
            /**
            * Returns the batch node object if this sprite is rendered by cc.SpriteBatchNode
            */
            getBatchNode();
            /**
            * Returns the blend function
            */
            getBlendFunc();
            /**
            * Returns the offset position of the sprite.
            */
            getOffsetPosition();
            /**
            * Returns the quad (tex coords, vertex coords and color) information.
            */
            getQuad();
            /**
            * Returns the texture of the sprite node
            */
            getTexture();
            /**
            * Returns the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
            */
            getTextureAtlas();
            /**
            * Returns the rect of the cc.Sprite in points
            */
            getTextureRect();
            /**
            * Sets whether ignore anchor point for positioning
            */
            ignoreAnchorPointForPosition(relative: boolean);
            /**
            * Initializes an empty sprite with nothing init.
            */
            init();
            /**
            * 
    Initializes a sprite with an image filename.
            */
            initWithFile(filename: string, rect: Rect);
            /**
            * Initializes a sprite with a SpriteFrame.
            */
            initWithSpriteFrame(spriteFrame: SpriteFrame);
            /**
            * Initializes a sprite with a sprite frame name.
            */
            initWithSpriteFrameName(spriteFrameName: string);
            /**
            * Initializes a sprite with a texture and a rect in points, optionally rotated.
            */
            initWithTexture(texture: any, rect: Rect, rotated: boolean);
            /**
            * Returns whether or not the Sprite needs to be updated in the Atlas
            */
            isDirty();
            /**
            * 
Returns the flag which indicates whether the sprite is flipped horizontally or not.
            */
            isFlippedX();
            /**
            * 
    Return the flag which indicates whether the sprite is flipped vertically or not.
            */
            isFlippedY();
            /**
            * Returns whether or not a cc.SpriteFrame is being displayed
            */
            isFrameDisplayed(frame: SpriteFrame);
            /**
            * Returns whether opacity modify color or not.
            */
            isOpacityModifyRGB();
            /**
            * Returns whether or not the texture rectangle is rotated.
            */
            isTextureRectRotated();
            /**
            * Removes all children from the container.
            */
            removeAllChildren();
            /**
            * Removes a child from the sprite.
            */
            removeChild();
            /**
            * Reorders a child according to a new z value.
            */
            reorderChild(child: Node, zOrder: number);
            /**
            * Sets the index used on the TextureAtlas.
            */
            setAtlasIndex(atlasIndex: number);
            /**
            * Sets the batch node to sprite
            */
            setBatchNode(spriteBatchNode: any);
            /**
            * conforms to cc.TextureProtocol protocol
            */
            setBlendFunc(src: any, dst: number);
            /**
            * Makes the sprite to be updated in the Atlas.
            */
            setDirty(bDirty: boolean);
            /**
            * Sets a new display frame to the sprite.
            */
            setDisplayFrame(newFrame: any);
            /**
            * Changes the display frame with animation name and index.
            */
            setDisplayFrameWithAnimationName(animationName: string, frameIndex: number);
            /**
            * Sets whether the sprite should be flipped horizontally or not.
            */
            setFlippedX(flippedX: boolean);
            /**
            * Sets whether the sprite should be flipped vertically or not.
            */
            setFlippedY(flippedY: boolean);
            /**
            * Sets whether opacity modify color or not.
            */
            setOpacityModifyRGB(modify: boolean);
            /**
            * Sets a new sprite frame to the sprite.
            */
            setSpriteFrame(newFrame: any);
            /**
            * Sets the texture of sprite
            */
            setTexture(texture: any);
            /**
            * Sets the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
            */
            setTextureAtlas(textureAtlas: TextureAtlas);
            /**
            * Updates the texture rect of the CCSprite in points.
            */
            setTextureRect(rect: Rect, rotated: boolean, untrimmedSize: Size);
            /**
            * 
   set the vertex rect.
            */
            setVertexRect(rect: Rect);
            /**
            * Sets whether the sprite is visible or not.
            */
            setVisible(visible: boolean);
            /**
            * Sort all children of this sprite node.
            */
            sortAllChildren();
            /**
            * Returns whether the texture have been loaded
            */
            textureLoaded();
            /**
            * Updates the quad according the the rotation, position, scale values.
            */
            updateTransform();
            /**
            * Tell the sprite to use batch node render.
            */
            useBatchNode(batchNode: SpriteBatchNode);
        }
}
declare module cc {
        /**
        * 
								
    A cc.SpriteBatchNode can reference one and only one texture (one image file, one texture atlas).
    Only the cc.Sprites that are contained in that texture can be added to the cc.SpriteBatchNode.
    All cc.Sprites added to a cc.SpriteBatchNode are drawn in one WebGL draw call. 
    If the cc.Sprites are not added to a cc.SpriteBatchNode then an WebGL draw call will be needed for each one, which is less efficient. 
    
    Limitations:
      - The only object that is accepted as child (or grandchild, grand-grandchild, etc...) is cc.Sprite or any subclass of cc.Sprite. 
         eg: particles, labels and layer can&#39;t be added to a cc.SpriteBatchNode. 
      - Either all its children are Aliased or Antialiased. It can&#39;t be a mix. 
         This is because &quot;alias&quot; is a property of the texture, and all the sprites share the same texture. 

								
							
        */
        export class SpriteBatchNode extends cc.Node {
            /**
            * 
    A cc.SpriteBatchNode can reference one and only one texture (one image file, one texture atlas).
            */
            constructor(fileImage: any, capacity: number);
            /**
            * Add child to the sprite batch node (override addChild of cc.Node)
            */
            addChild(child: Sprite, zOrder: number, tag: number);
            /**
            * 
   This is the opposite of &quot;addQuadFromSprite.
            */
            addSpriteWithoutQuad(child: Sprite, z: number, aTag: number);
            /**
            * Add child at the end, faster than insert child
            */
            appendChild(sprite: Sprite);
            /**
            * Returns atlas index for child
            */
            atlasIndexForChild(sprite: Sprite, nZ: number);
            /**
            * 
   creates a cc.SpriteBatchNodeCanvas with a file image (.png, .jpg etc) with a default capacity of 29 children.
            */
            static create(fileImage: any, capacity: number);
            /**
            * 
            */
            static createWithTexture();
            /**
            * Returns the blending function used for the texture
            */
            getBlendFunc();
            /**
            * Return Descendants of cc.SpriteBatchNode
            */
            getDescendants();
            /**
            * Returns texture of the sprite batch node
            */
            getTexture();
            /**
            * Return TextureAtlas of cc.SpriteBatchNode
            */
            getTextureAtlas();
            /**
            * Returns highest atlas index in child
            */
            highestAtlasIndexInChild(sprite: Sprite);
            /**
            * Increase Atlas Capacity
            */
            increaseAtlasCapacity();
            /**
            * 
   initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
            */
            init(fileImage: string, capacity: number);
            /**
            * 
   Initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
            */
            initWithFile(fileImage: string, capacity: number);
            /**
            * 
   Initializes a cc.SpriteBatchNode with a texture2d and capacity of children.
            */
            initWithTexture(tex: Texture2D, capacity: number);
            /**
            * Insert a child
            */
            insertChild(sprite: Sprite, index: number);
            /**
            * 
   Inserts a quad at a certain index into the texture atlas.
            */
            insertQuadFromSprite(sprite: Sprite, index: number);
            /**
            * Returns lowest atlas index in child
            */
            lowestAtlasIndexInChild(sprite: Sprite);
            /**
            * Rebuild index in order for child
            */
            rebuildIndexInOrder(pobParent: Sprite, index: number);
            /**
            * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
            */
            removeAllChildren(cleanup: boolean);
            /**
            * Removes a child from cc.SpriteBatchNode (override removeChild of cc.Node)
            */
            removeChild(child: Sprite, cleanup: boolean);
            /**
            * Removes a child given a certain index.
            */
            removeChildAtIndex(index: number, doCleanup: boolean);
            /**
            * Removes sprite from TextureAtlas
            */
            removeSpriteFromAtlas(sprite: Sprite);
            /**
            * Sprites use this to start sortChildren, don&#39;t call this manually
            */
            reorderBatch(reorder: boolean);
            /**
            * Reorder children (override reorderChild of cc.Node)
            */
            reorderChild(child: Sprite, zOrder: number);
            /**
            * Sets the source and destination blending function for the texture
            */
            setBlendFunc(src: any, dst: number);
            /**
            * Sets the texture of the sprite batch node.
            */
            setTexture(texture: Texture2D);
            /**
            * TextureAtlas of cc.SpriteBatchNode setter
            */
            setTextureAtlas(textureAtlas: TextureAtlas);
            /**
            * Sort all children nodes (override draw of cc.Node)
            */
            sortAllChildren();
            /**
            * 
  Updates a quad at a certain index into the texture atlas.
            */
            updateQuadFromSprite(sprite: Sprite, index: number);
        }
}
declare module cc {
        /**
        * 
								
   A cc.SpriteFrame has:
     - texture: A cc.Texture2D that will be used by the cc.Sprite
     - rectangle: A rectangle of the texture
   
   You can modify the frame of a cc.Sprite by doing:

								
							
        */
        export class SpriteFrame extends cc.Class {
            /**
            * 
   A cc.SpriteFrame has:
     - texture: A cc.Texture2D that will be used by the cc.Sprite
     - rectangle: A rectangle of the texture
   
   You can modify the frame of a cc.Sprite by doing:

            */
            constructor(filename: any, rect: Rect, rotated: boolean, offset: Point, originalSize: Size);
            /**
            * Add a event listener for texture loaded event.
            */
            addLoadedEventListener(callback: Function, target: Object);
            /**
            * Clone the sprite frame
            */
            clone();
            /**
            * Copy the sprite frame
            */
            copy();
            /**
            * Copy the sprite frame
            */
            copyWithZone();
            /**
            * 
   Create a cc.SpriteFrame with a texture filename, rect, rotated, offset and originalSize in pixels.
            */
            static create(filename: any, rect: Rect, rotated: boolean, offset: Point, originalSize: Size);
            /**
            * 
            */
            static createWithTexture();
            /**
            * Returns the offset of the frame in the texture
            */
            getOffset();
            /**
            * Returns the offset of the sprite frame in the texture in pixel
            */
            getOffsetInPixels();
            /**
            * Returns the original size of the trimmed image
            */
            getOriginalSize();
            /**
            * Returns the original size of the trimmed image
            */
            getOriginalSizeInPixels();
            /**
            * Returns the rect of the sprite frame in the texture
            */
            getRect();
            /**
            * Gets the rect of the frame in the texture
            */
            getRectInPixels();
            /**
            * Returns the texture of the frame
            */
            getTexture();
            /**
            * Initializes SpriteFrame with Texture, rect, rotated, offset and originalSize in pixels.
            */
            initWithTexture(texture: any, rect: Rect, rotated: boolean, offset: Point, originalSize: Size);
            /**
            * Returns whether the sprite frame is rotated in the texture.
            */
            isRotated();
            /**
            * Sets the offset of the frame in the texture
            */
            setOffset(offsets: Point);
            /**
            * Sets the offset of the sprite frame in the texture in pixel
            */
            setOffsetInPixels(offsetInPixels: Point);
            /**
            * Sets the original size of the trimmed image
            */
            setOriginalSize(sizeInPixels: Size);
            /**
            * Sets the original size of the trimmed image
            */
            setOriginalSizeInPixels(sizeInPixels: Size);
            /**
            * Sets the rect of the sprite frame in the texture
            */
            setRect(rect: Rect);
            /**
            * Sets the rect of the frame in the texture
            */
            setRectInPixels(rectInPixels: Rect);
            /**
            * Set whether the sprite frame is rotated in the texture.
            */
            setRotated(bRotated: boolean);
            /**
            * Sets the texture of the frame, the texture is retained automatically
            */
            setTexture(texture: Texture2D);
            /**
            * Returns whether the texture have been loaded
            */
            textureLoaded();
        }
}
declare module cc {
        /**
        * 
								
cc.spriteFrameCache is a singleton that handles the loading of the sprite frames. It saves in a cache the sprite frames.

example
// add SpriteFrames to spriteFrameCache With File
cc.spriteFrameCache.addSpriteFrames(s_grossiniPlist);

								
							
        */
        export class spriteFrameCache  {
            /**
            * 
cc.spriteFrameCache is a singleton that handles the loading of the sprite frames.
            */
            constructor();
            /**
            * 
 Adds an sprite frame with a given name.
            */
            addSpriteFrame(frame: SpriteFrame, frameName: string);
            /**
            * 
  Adds multiple Sprite Frames from a plist or json file.
            */
            addSpriteFrames(url: string, texture: any);
            /**
            * 
  Returns an Sprite Frame that was previously added.
            */
            getSpriteFrame(name: string);
            /**
            * Deletes an sprite frame from the sprite frame cache.
            */
            removeSpriteFrameByName(name: string);
            /**
            * 
  Purges the dictionary of loaded sprite frames.
            */
            removeSpriteFrames();
            /**
            * 
    Removes multiple Sprite Frames from a plist file.
            */
            removeSpriteFramesFromFile(url: string);
            /**
            * 
   Removes all Sprite Frames associated with the specified textures.
            */
            removeSpriteFramesFromTexture(texture: any);
        }
}
declare module cc {
        /**
        * 
								
cc.StopGrid action.                                               
								
							
        */
        export class StopGrid extends cc.ActionInstant {
            /**
            * 
cc.StopGrid action.
            */
            constructor();
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
        }
}
declare module cc {
        /**
        * 
        */
        export class sys  {
            /**
            * 
            */
            constructorcc.sys.ANDROID;
            /**
            * Clean a script in the JS VM, only available in JSB
            */
            static cleanScript(jsfile: string);
            /**
            * Dump system informations
            */
            static dump();
            /**
            * Dumps rooted objects, only available in JSB
            */
            static dumpRoot();
            /**
            * Forces the garbage collection, only available in JSB
            */
            static garbageCollect();
            /**
            * Restart the JS VM, only available in JSB
            */
            static restartVM();
            /**
            * 
            */
            static ANDROID;
            /**
            * 
            */
            static BLACKBERRY;
            /**
            * Indicate the running browser type
            */
            static browserType
													
													Indicate the running browser type;
            /**
            * 
            */
            static DESKTOP_BROWSER;
            /**
            * 
            */
            static EMSCRIPTEN;
            /**
            * 
            */
            static IPAD;
            /**
            * 
            */
            static IPHONE;
            /**
            * Indicate whether system is mobile system
            */
            static isMobile
													
													Indicate whether system is mobile system;
            /**
            * Is native ? This is set to be true in jsb auto.
            */
            static ;
            /**
            * Indicate the current language of the running system
            */
            static language
													
													Indicate the current language of the running system;
            /**
            * Arabic language code
            */
            static LANGUAGE_ARABIC
													
													Arabic language code;
            /**
            * Chinese language code
            */
            static LANGUAGE_CHINESE
													
													Chinese language code;
            /**
            * Spanish language code
            */
            static LANGUAGE_DUTCH
													
													Spanish language code;
            /**
            * English language code
            */
            static LANGUAGE_ENGLISH
													
													English language code;
            /**
            * French language code
            */
            static LANGUAGE_FRENCH
													
													French language code;
            /**
            * German language code
            */
            static LANGUAGE_GERMAN
													
													German language code;
            /**
            * Hungarian language code
            */
            static LANGUAGE_HUNGARIAN
													
													Hungarian language code;
            /**
            * Italian language code
            */
            static LANGUAGE_ITALIAN
													
													Italian language code;
            /**
            * Japanese language code
            */
            static LANGUAGE_JAPANESE
													
													Japanese language code;
            /**
            * Korean language code
            */
            static LANGUAGE_KOREAN
													
													Korean language code;
            /**
            * Norwegian language code
            */
            static LANGUAGE_NORWEGIAN
													
													Norwegian language code;
            /**
            * Polish language code
            */
            static LANGUAGE_POLISH
													
													Polish language code;
            /**
            * Portuguese language code
            */
            static LANGUAGE_PORTUGUESE
													
													Portuguese language code;
            /**
            * Russian language code
            */
            static LANGUAGE_RUSSIAN
													
													Russian language code;
            /**
            * Spanish language code
            */
            static LANGUAGE_SPANISH
													
													Spanish language code;
            /**
            * 
            */
            static LINUX;
            /**
            * cc.sys.localStorage is a local storage component.
            */
            static ;
            /**
            * 
            */
            static MACOS;
            /**
            * 
            */
            static MOBILE_BROWSER;
            /**
            * 
            */
            static NACL;
            /**
            * Indicate the running os name
            */
            static os
													
													Indicate the running os name;
            /**
            * 
            */
            static OS_ANDROID;
            /**
            * 
            */
            static OS_IOS;
            /**
            * 
            */
            static OS_LINUX;
            /**
            * 
            */
            static OS_OSX;
            /**
            * 
            */
            static OS_UNIX;
            /**
            * 
            */
            static OS_UNKNOWN;
            /**
            * 
            */
            static OS_WINDOWS;
            /**
            * Indicate the running platform
            */
            static platform
													
													Indicate the running platform;
            /**
            * 
            */
            static TIZEN;
            /**
            * 
            */
            static WINDOWS;
            /**
            * 
            */
            static WINRT;
            /**
            * 
            */
            static WP8;
        }
}
declare module cc {
        /**
        * 
								UITableView counterpart for cocos2d for iphone.
this is a very basic, minimal implementation to bring UITableView-like component into cocos2d world.
								
							
        */
        export class TableView extends cc.ScrollView {
            /**
            * UITableView counterpart for cocos2d for iphone.
            */
            constructor();
            /**
            * Returns an existing cell at a given index.
            */
            cellAtIndex();
            /**
            * An initialized table view object
            */
            static create(dataSource: TableViewDataSource, size: Size, container: Node);
            /**
            * The
            */
            ctor();
            /**
            * Dequeues a free cell if available.
            */
            dequeueCell();
            /**
            * data source
            */
            getDataSource();
            /**
            * delegate
            */
            getDelegate();
            /**
            * Inserts a new cell at a given index
            */
            insertCellAtIndex();
            /**
            * reloads data from data source.
            */
            reloadData();
            /**
            * Removes a cell at a given index
            */
            removeCellAtIndex();
            /**
            * determines how cell is ordered and filled in the view.
            */
            setVerticalFillOrder();
            /**
            * Updates the content of the cell at a given index.
            */
            updateCellAtIndex();
        }
}
declare module cc {
        /**
        * 
								Abstract class for SWTableView cell node
								
							
        */
        export class TableViewCell extends cc.Node {
            /**
            * Abstract class for SWTableView cell node
            */
            constructor();
            /**
            * The index used internally by SWTableView and its subclasses
            */
            getIdx();
            /**
            * Cleans up any resources linked to this cell and resets idx property.
            */
            reset();
        }
}
declare module cc {
        /**
        * 
								
    Overrides the target of an action so that it always runs on the target
    specified at action creation rather than the one specified by runAction.

								
							
        */
        export class TargetedAction extends cc.ActionInterval {
            /**
            * 
    Overrides the target of an action so that it always runs on the target
    specified at action creation rather than the one specified by runAction.
            */
            constructor(target: Node, action: FiniteTimeAction);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(target: Node, action: FiniteTimeAction);
            /**
            * return the target that the action will be forced to run with
            */
            getForcedTarget();
            /**
            * Init an action with the specified action and forced target
            */
            initWithTarget(target: Node, action: FiniteTimeAction);
            /**
            * set the target that the action will be forced to run with
            */
            setForcedTarget(forcedTarget: Node);
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
        */
        export class Tex2F  {
            /**
            * 
            */
            constructor(u1: number, v1: number);
        }
}
declare module cc {
        /**
        * 
								Text field delegate
								
							
        */
        export class TextFieldDelegate extends cc.Class {
            /**
            * Text field delegate
            */
            constructor();
            /**
            * If doesn&#39;t want draw sender as default, return true.
            */
            onDraw(sender: TextFieldTTF);
            /**
            * If the sender doesn&#39;t want to attach with IME, return true;
            */
            onTextFieldAttachWithIME(sender: TextFieldTTF);
            /**
            * If the sender doesn&#39;t want to delete the delText, return true;
            */
            onTextFieldDeleteBackward(sender: TextFieldTTF, delText: string, len: number);
            /**
            * If the sender doesn&#39;t want to detach with IME, return true;
            */
            onTextFieldDetachWithIME(sender: TextFieldTTF);
            /**
            * If the sender doesn&#39;t want to insert the text, return true;
            */
            onTextFieldInsertText(sender: TextFieldTTF, text: string, len: number);
        }
}
declare module cc {
        /**
        * 
								A simple text input field with TTF font.
								
							
        */
        export class TextFieldTTF extends cc.LabelTTF {
            /**
            * A simple text input field with TTF font.
            */
            constructor(placeholder: string, dimensions: Size, alignment: number, fontName: string, fontSize: number);
            /**
            * Open keyboard and receive input text.
            */
            attachWithIME();
            /**
            * Return whether to allow attach with IME.
            */
            canAttachWithIME();
            /**
            * Return whether to allow detach with IME.
            */
            canDetachWithIME();
            /**
            * Please use new TextFieldTTF instead.
            */
            static create(placeholder: string, dimensions: Size, alignment: number, fontName: string, fontSize: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(placeholder: string, dimensions: Size, alignment: number, fontName: string, fontSize: number);
            /**
            * Delete backward
            */
            deleteBackward();
            /**
            * End text input  and close keyboard.
            */
            detachWithIME();
            /**
            * When the delegate detach with IME, this method call by CCIMEDispatcher.
            */
            didAttachWithIME();
            /**
            * When the delegate detach with IME, this method call by CCIMEDispatcher.
            */
            didDetachWithIME();
            /**
            * Render function using the canvas 2d context or WebGL context, internal usage only, please do not call this function.
            */
            draw(ctx: any);
            /**
            * Gets the char count.
            */
            getCharCount();
            /**
            * Returns the color of space holder.
            */
            getColorSpaceHolder();
            /**
            * Gets the input text.
            */
            getContentText();
            /**
            * Gets the delegate.
            */
            getDelegate();
            /**
            * Gets the place holder.
            */
            getPlaceHolder();
            /**
            * Gets the string
            */
            getString();
            /**
            * Initializes the cc.TextFieldTTF with a font name, alignment, dimension and font size
            */
            initWithPlaceHolder(placeholder: string, dimensions: Size, alignment: number, fontName: string, fontSize: number);
            /**
            * Append the text.
            */
            insertText(text: string, len: number);
            /**
            * Remove delegate
            */
            removeDelegate();
            /**
            * Sets the color of space holder.
            */
            setColorSpaceHolder(value: Color);
            /**
            * Set the delegate.
            */
            setDelegate(value: Node);
            /**
            * Set the place holder.
            */
            setPlaceHolder(text: string);
            /**
            * Input text property
            */
            setString(text: string);
            /**
            * Sets the color of cc.TextFieldTTF&#39;s text.
            */
            setTextColor(textColor: Color);
            /**
            * Recursive method that visit its children and draw them.
            */
            visit(ctx: any);
        }
}
declare module cc {
        /**
        * 
								
This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.                                    
The created cc.Texture2D object will always have power-of-two dimensions.                                                
Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions 
 i.e. &quot;contentSize&quot; != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).                                           
Be aware that the content of the generated textures will be upside-down! 
								
							
        */
        export class Texture2D extends cc.Class {
            /**
            * 
This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.
            */
            constructor();
            /**
            * add listener for loaded event
            */
            addLoadedEventListener(callback: Function, target: Node);
            /**
            * description of cc.Texture2D
            */
            description();
            /**
            * get content size
            */
            getContentSize();
            /**
            * get content size in pixels
            */
            getContentSizeInPixels();
            /**
            * HTMLElement Object getter
            */
            getHtmlElementObj();
            /**
            * get height of in pixels
            */
            getPixelsHigh();
            /**
            * get width in pixels
            */
            getPixelsWide();
            /**
            * handle loaded texture
            */
            handleLoadedTexture();
            /**
            * init with HTML element
            */
            initWithElement(element: any);
            /**
            * init with ETC file
            */
            initWithETCFile();
            /**
            * init with PVR file
            */
            initWithPVRFile();
            /**
            * init with PVRTC data
            */
            initWithPVRTCData();
            /**
            * check whether texture is loaded
            */
            isLoaded();
            /**
            * remove listener from listeners by target
            */
            removeLoadedEventListener(target: Node);
        }
}
declare module cc {
        /**
        * 
								A class that implements a Texture Atlas. 
Supported features: 
The atlas file can be a PNG, JPG. 
Quads can be updated in runtime 
Quads can be added in runtime 
Quads can be removed in runtime 
Quads can be re-ordered in runtime 
The TextureAtlas capacity can be increased or decreased in runtime.
								
							
        */
        export class TextureAtlas extends cc.Class {
            /**
            * A class that implements a Texture Atlas.
            */
            constructor();
            /**
            * Creates a TextureAtlas with an filename and with an initial capacity for Quads.
            */
            static create(fileName: any, capacity: number);
            /**
            * 
            */
            static createWithTexture();
            /**
            * Creates a TextureAtlas with an filename and with an initial capacity for Quads.
            */
            ctor(fileName: any, capacity: number);
            /**
            * Description
            */
            description();
            /**
            * Draws all the Atlas&#39;s Quads
            */
            drawQuads();
            /**
            * Ensures that after a realloc quads are still empty                                
Used internally by CCParticleBatchNode
            */
            fillWithEmptyQuadsFromIndex(index: number, amount: number);
            /**
            * Quantity of quads that can be stored with the current texture atlas size
            */
            getCapacity();
            /**
            * Quads that are going to be rendered
            */
            getQuads();
            /**
            * Texture of the texture atlas
            */
            getTexture();
            /**
            * Quantity of quads that are going to be drawn.
            */
            getTotalQuads();
            /**
            * Used internally by CCParticleBatchNode                                    
don&#39;t use this unless you know what you&#39;re doing
            */
            increaseTotalQuadsWith(amount: number);
            /**
            * Initializes a TextureAtlas with a filename and with a certain capacity for Quads.
            */
            initWithFile(file: string, capacity: number);
            /**
            * Initializes a TextureAtlas with a previously initialized Texture2D object, and
with an initial capacity for Quads.
            */
            initWithTexture(texture: Image, capacity: number);
            /**
            * Inserts a Quad (texture, vertex and color) at a certain index
index must be between 0 and the atlas capacity - 1 
            */
            insertQuad(quad: V3F_C4B_T2F_Quad, index: number);
            /**
            * Removes the quad that is located at a certain index and inserts it at a new index 
This operation is faster than removing and inserting in a quad in 2 different steps
            */
            insertQuadFromIndex(fromIndex: number, newIndex: number);
            /**
            * 
     Inserts a c array of quads at a given index                                           
     index must be between 0 and the atlas capacity - 1                                    
     this method doesn&#39;t enlarge the array when amount + index &gt; totalQuads                

            */
            insertQuads(quads: Array, index: number, amount: number);
            /**
            * whether or not the array buffer of the VBO needs to be updated
            */
            isDirty();
            /**
            * Moves an amount of quads from oldIndex at newIndex
            */
            moveQuadsFromIndex(oldIndex: number, amount: number, newIndex: number);
            /**
            * Removes all Quads.
            */
            removeAllQuads();
            /**
            * Removes a quad at a given index number.
            */
            removeQuadAtIndex(index: number);
            /**
            * Removes a given number of quads at a given index
            */
            removeQuadsAtIndex(index: number, amount: number);
            /**
            * Resize the capacity of the CCTextureAtlas.
            */
            resizeCapacity(newCapacity: number);
            /**
            * specify if the array buffer of the VBO needs to be updated
            */
            setDirty(dirty: boolean);
            /**
            * 
            */
            setQuads(quads: Array);
            /**
            * 
            */
            setTexture(texture: Image);
            /**
            * Updates a Quad (texture, vertex and color) at a certain index 
index must be between 0 and the atlas capacity - 1 
            */
            updateQuad(quad: V3F_C4B_T2F_Quad, index: number);
        }
}
declare module cc {
        /**
        * 
								cc.textureCache is a singleton object, it&#39;s the global cache for cc.Texture2D
								
							
        */
        export class textureCache  {
            /**
            * cc.textureCache is a singleton object, it&#39;s the global cache for cc.Texture2D
            */
            constructor();
            /**
            * 
    Returns a Texture2D object given an ETC filename                                                               
    If the file image was not previously loaded, it will create a new CCTexture2D                                  
    object and it will return it.
            */
            addETCImage(filename: string);
            /**
            * Returns a Texture2D object given an PVR filename
If the file image was not previously loaded, it will create a new Texture2D
 object and it will return it.
            */
            addPVRImage(path: string);
            /**
            * 
    Returns a Texture2D object given an PVR filename                                                              
    If the file image was not previously loaded, it will create a new CCTexture2D                                 
    object and it will return it.
            */
            addPVRTCImage(filename: string);
            /**
            * Returns a Texture2D object given an UIImage image
If the image was not previously loaded, it will create a new Texture2D object and it will return it.
            */
            addUIImage(image: any, key: string);
            /**
            * Cache the image data
            */
            cacheImage(path: string, texture: any);
            /**
            * Description
            */
            description();
            /**
            * Output to cc.log the current contents of this TextureCache 
This will attempt to calculate the size of each texture, and the total texture memory in use.
            */
            dumpCachedTextureInfo();
            /**
            * 
            */
            getKeyByTexture(texture: Image);
            /**
            * 
            */
            getTextureColors(texture: Image);
            /**
            * Returns an already created texture.
            */
            getTextureForKey(textureKeyName: string);
            /**
            * Purges the dictionary of loaded textures.
            */
            removeAllTextures();
            /**
            * Deletes a texture from the cache given a texture
            */
            removeTexture(texture: Image);
            /**
            * Deletes a texture from the cache given a its key name
            */
            removeTextureForKey(textureKeyName: string);
            /**
            * Returns an already created texture.
            */
            textureForKey(textureKeyName: string);
        }
}
declare module cc {
        /**
        * 
								A Tile composed of position, startPosition and delta.
								
							
        */
        export class Tile  {
            /**
            * A Tile composed of position, startPosition and delta.
            */
            constructor(position: Point, startPosition: Point, delta: Size);
        }
}
declare module cc {
        /**
        * 
								cc.TiledGrid3D is a 3D grid implementation. It differs from Grid3D in that   
the tiles can be separated from the grid.
								
							
        */
        export class TiledGrid3D extends cc.GridBase {
            /**
            * cc.TiledGrid3D is a 3D grid implementation.
            */
            constructor();
            /**
            * create one TiledGrid3D object
            */
            static create(gridSize: Size, texture: Texture2D, flipped: boolean);
            /**
            * create one TiledGrid3D object
Constructor of cc.TiledGrid3D
            */
            ctor(gridSize: Size, texture: Texture2D, flipped: boolean);
            /**
            * returns the original tile (untransformed) at the given position
            */
            originalTile(pos: Point);
            /**
            * sets a new tile
            */
            setTile(pos: Point, coords: Quad3);
            /**
            * returns the tile at the given position
            */
            tile(pos: Point);
        }
}
declare module cc {
        /**
        * 
								Base class for cc.TiledGrid3D actions.
								
							
        */
        export class TiledGrid3DAction extends cc.GridAction {
            /**
            * Base class for cc.TiledGrid3D actions.
            */
            constructor();
            /**
            * returns the grid
            */
            getGrid();
            /**
            * returns the non-transformed tile that belongs to a certain position of the grid
            */
            originalTile(position: Point);
            /**
            * sets a new tile to a certain position of the grid
            */
            setTile(position: Point, coords: Quad3);
            /**
            * returns the tile that belongs to a certain position of the grid
            */
            tile(position: Point);
        }
}
declare module cc {
        /**
        * 
								Light weight timer
								
							
        */
        export class Timer extends cc.Class {
            /**
            * Light weight timer
            */
            constructor();
            /**
            * cc.Timer&#39;s Constructor
Constructor of cc.Timer
            */
            ctor(target: Class, callback: any, interval: number, repeat: number, delay: number);
            /**
            * 
            */
            getCallback();
            /**
            * 
            */
            getInterval();
            /**
            * 
            */
            setInterval(interval: number);
            /**
            * triggers the timer
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
Relative to their own color change.
								
							
        */
        export class TintBy extends cc.ActionInterval {
            /**
            * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
            */
            constructor(duration: number, deltaRed: number, deltaGreen: number, deltaBlue: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, deltaRed: number, deltaGreen: number, deltaBlue: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, deltaRed: number, deltaGreen: number, deltaBlue: number);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
								
							
        */
        export class TintTo extends cc.ActionInterval {
            /**
            * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
            */
            constructor(duration: number, red: number, green: number, blue: number);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, red: number, green: number, blue: number);
            /**
            * Initializes the action.
            */
            initWithDuration(duration: number, red: number, green: number, blue: number);
            /**
            * Start the action with target.
            */
            startWithTarget(target: Node);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.TMXLayer represents the TMX layer. 

It is a subclass of cc.SpriteBatchNode. By default the tiles are rendered using a cc.TextureAtlas. 
If you modify a tile on runtime, then, that tile will become a cc.Sprite, otherwise no cc.Sprite objects are created. 
The benefits of using cc.Sprite objects as tiles are: 
- tiles (cc.Sprite) can be rotated/scaled/moved with a nice API 

If the layer contains a property named &quot;cc.vertexz&quot; with an integer (in can be positive or negative), 
then all the tiles belonging to the layer will use that value as their OpenGL vertex Z for depth. 

On the other hand, if the &quot;cc.vertexz&quot; property has the &quot;automatic&quot; value, then the tiles will use an automatic vertex Z value. 
Also before drawing the tiles, GL_ALPHA_TEST will be enabled, and disabled after drawing them. The used alpha func will be:  

glAlphaFunc( GL_GREATER, value ) 

&quot;value&quot; by default is 0, but you can change it from Tiled by adding the &quot;cc_alpha_func&quot; property to the layer. 
The value 0 should work for most cases, but if you have tiles that are semi-transparent, then you might want to use a different value, like 0.5.
								
							
        */
        export class TMXLayer extends cc.SpriteBatchNode {
            /**
            * cc.TMXLayer represents the TMX layer.
            */
            constructor();
            /**
            * cc.TMXLayer doesn&#39;t support adding a cc.Sprite manually.
            */
            addChild(child: Node, zOrder: number, tag: number);
            /**
            * Creates a cc.TMXLayer with an tile set info, a layer info and a map info
            */
            static create(tilesetInfo: TMXTilesetInfo, layerInfo: TMXLayerInfo, mapInfo: TMXMapInfo);
            /**
            * Creates a cc.TMXLayer with an tile set info, a layer info and a map info   
Constructor of cc.TMXLayer
            */
            ctor(tilesetInfo: TMXTilesetInfo, layerInfo: TMXLayerInfo, mapInfo: TMXMapInfo);
            /**
            * Gets the layer name
            */
            getLayerName();
            /**
            * Layer orientation, which is the same as the map orientation
            */
            getLayerOrientation();
            /**
            * Gets layer size.
            */
            getLayerSize();
            /**
            * Size of the map&#39;s tile (could be different from the tile&#39;s size)
            */
            getMapTileSize();
            /**
            * Returns the position in pixels of a given tile coordinate
            */
            getPositionAt(pos: any, y: number);
            /**
            * properties from the layer.
            */
            getProperties();
            /**
            * Return the value for the specific property name
            */
            getProperty(propertyName: string);
            /**
            * Return texture of cc.SpriteBatchNode
            */
            getTexture();
            /**
            * Returns the tile (cc.Sprite) at a given a tile coordinate.
            */
            getTileAt(pos: any, y: number);
            /**
            * lipped tiles can be changed dynamically
            */
            getTileFlagsAt(pos: any, y: number);
            /**
            * Returns the tile gid at a given tile coordinate.
            */
            getTileGIDAt(pos: any, y: number);
            /**
            * Pointer to the map of tiles
            */
            getTiles();
            /**
            * Tile set information for the layer
            */
            getTileset();
            /**
            * Initializes a cc.TMXLayer with a tileset info, a layer info and a map info
            */
            initWithTilesetInfo(tilesetInfo: TMXTilesetInfo, layerInfo: TMXLayerInfo, mapInfo: TMXMapInfo);
            /**
            * Dealloc the map that contains the tile position from memory.
            */
            releaseMap();
            /**
            * Remove child
            */
            removeChild(sprite: Sprite, cleanup: boolean);
            /**
            * Removes a tile at given tile coordinate
            */
            removeTileAt(pos: any, y: number);
            /**
            * Sets the untransformed size of the TMXLayer.
            */
            setContentSize(size: any, height: number);
            /**
            * Set the layer name
            */
            setLayerName(layerName: string);
            /**
            * Layer orientation, which is the same as the map orientation
            */
            setLayerOrientation(Var: number);
            /**
            * Set layer size
            */
            setLayerSize(Var: Size);
            /**
            * Set the map tile size.
            */
            setMapTileSize(Var: Size);
            /**
            * properties from the layer.
            */
            setProperties(Var: Array);
            /**
            * Sets the tile gid (gid = tile global id) at a given tile coordinate.
            */
            setTileGID(gid: number, posOrX: any, flagsOrY: number, flags: number);
            /**
            * Pointer to the map of tiles
            */
            setTiles(Var: Array);
            /**
            * Tile set information for the layer
            */
            setTileset(Var: TMXTilesetInfo);
            /**
            * Creates the tiles
            */
            setupTiles();
        }
}
declare module cc {
        /**
        * 
								cc.TMXLayerInfo contains the information about the layers like: 
- Layer name
- Layer size 
- Layer opacity at creation time (it can be modified at runtime)  
- Whether the layer is visible (if it&#39;s not visible, then the CocosNode won&#39;t be created) 
 
This information is obtained from the TMX file.
								
							
        */
        export class TMXLayerInfo extends cc.Class {
            /**
            * cc.TMXLayerInfo contains the information about the layers like: 
- Layer name
- Layer size 
- Layer opacity at creation time (it can be modified at runtime)  
- Whether the layer is visible (if it&#39;s not visible, then the CocosNode won&#39;t be created) 
 
This information is obtained from the TMX file.
            */
            constructor();
            /**
            * Gets the Properties.
            */
            getProperties();
            /**
            * Set the Properties.
            */
            setProperties(value: object);
        }
}
declare module cc {
        /**
        * 
								cc.TMXMapInfo contains the information about the map like: 
- Map orientation (hexagonal, isometric or orthogonal)
- Tile size
- Map size

And it also contains: 
- Layers (an array of TMXLayerInfo objects)
- Tilesets (an array of TMXTilesetInfo objects) 
- ObjectGroups (an array of TMXObjectGroupInfo objects) 

This information is obtained from the TMX file. 
								
							
        */
        export class TMXMapInfo extends cc.saxParser {
            /**
            * cc.TMXMapInfo contains the information about the map like: 
- Map orientation (hexagonal, isometric or orthogonal)
- Tile size
- Map size

And it also contains: 
- Layers (an array of TMXLayerInfo objects)
- Tilesets (an array of TMXTilesetInfo objects) 
- ObjectGroups (an array of TMXObjectGroupInfo objects) 

This information is obtained from the TMX file.
            */
            constructor(tmxFile: string, resourcePath: string);
            /**
            * Creates a TMX Format with a tmx file or content string
            */
            static create(tmxFile: string, resourcePath: string);
            /**
            * Creates a TMX Format with a tmx file or content string                           
Constructor of cc.TMXMapInfo
            */
            ctor(tmxFile: string, resourcePath: string);
            /**
            * Gets the currentString
            */
            getCurrentString();
            /**
            * Layer attribute
            */
            getLayerAttribs();
            /**
            * Layers
            */
            getLayers();
            /**
            * Map width &amp; height
            */
            getMapSize();
            /**
            * ObjectGroups
            */
            getObjectGroups();
            /**
            * Gets Map orientation.
            */
            getOrientation();
            /**
            * parent element
            */
            getParentElement();
            /**
            * parent GID
            */
            getParentGID();
            /**
            * Properties
            */
            getProperties();
            /**
            * Is reading storing characters stream
            */
            getStoringCharacters();
            /**
            * Gets the tile properties.
            */
            getTileProperties();
            /**
            * tilesets
            */
            getTilesets();
            /**
            * Tiles width &amp; height
            */
            getTileSize();
            /**
            * Gets the tmxFileName
            */
            getTMXFileName();
            /**
            * Initializes a TMX format with a  tmx file
            */
            initWithTMXFile(tmxFile: string);
            /**
            * initializes a TMX format with an XML string and a TMX resource path
            */
            initWithXML(tmxString: string, resourcePath: string);
            /**
            * Initalises parsing of an XML file, either a tmx (Map) file or tsx (Tileset) file
            */
            parseXMLFile(tmxFile: string, isXmlString: boolean);
            /**
            * initializes parsing of an XML string, either a tmx (Map) string or tsx (Tileset) string
            */
            parseXMLString(xmlString: string);
            /**
            * Set the currentString
            */
            setCurrentString(currentString: string);
            /**
            * Layer attribute
            */
            setLayerAttribs(value: Object);
            /**
            * Layers
            */
            setLayers(value: TMXLayerInfo);
            /**
            * Map width &amp; height
            */
            setMapSize(value: Size);
            /**
            * ObjectGroups
            */
            setObjectGroups(value: TMXObjectGroup);
            /**
            * Set the Map orientation.
            */
            setOrientation(value: number);
            /**
            * parent element
            */
            setParentElement(value: Object);
            /**
            * parent GID
            */
            setParentGID(value: number);
            /**
            * Properties
            */
            setProperties(value: object);
            /**
            * Is reading storing characters stream
            */
            setStoringCharacters(value: boolean);
            /**
            * Set the tile properties.
            */
            setTileProperties(tileProperties: object);
            /**
            * tilesets
            */
            setTilesets(value: TMXTilesetInfo);
            /**
            * Tiles width &amp; height
            */
            setTileSize(value: Size);
            /**
            * Set the tmxFileName
            */
            setTMXFileName(fileName: string);
        }
}
declare module cc {
        /**
        * 
								cc.TMXObjectGroup represents the TMX object group.
								
							
        */
        export class TMXObjectGroup extends cc.Class {
            /**
            * cc.TMXObjectGroup represents the TMX object group.
            */
            constructor();
            /**
            * The cc.TMXObjectGroup&#39;s constructor.
            */
            ctor();
            /**
            * Gets the Group name.
            */
            getGroupName();
            /**
            * Gets the objects.
            */
            getObjects();
            /**
            * Offset position of child objects
            */
            getPositionOffset();
            /**
            * List of properties stored in a dictionary
            */
            getProperties();
            /**
            * Return the dictionary for the specific object name.
            */
            objectNamed(objectName: string);
            /**
            * Return the value for the specific property name
            */
            propertyNamed(propertyName: string);
            /**
            * Set the Group name
            */
            setGroupName(groupName: string);
            /**
            * Set the objects.
            */
            setObjects(objects: object);
            /**
            * Offset position of child objects
            */
            setPositionOffset(offset: Point);
            /**
            * List of properties stored in a dictionary
            */
            setProperties(Var: object);
        }
}
declare module cc {
        /**
        * 
								cc.TMXTiledMap knows how to parse and render a TMX map.

It adds support for the TMX tiled map format used by http://www.mapeditor.org 
It supports isometric, hexagonal and orthogonal tiles.
It also supports object groups, objects, and properties.

Features: 
- Each tile will be treated as an cc.Sprite
- The sprites are created on demand. They will be created only when you call &quot;layer.getTileAt(position)&quot; 
- Each tile can be rotated / moved / scaled / tinted / &quot;opacitied&quot;, since each tile is a cc.Sprite
- Tiles can be added/removed in runtime
- The z-order of the tiles can be modified in runtime
- Each tile has an anchorPoint of (0,0) 
- The anchorPoint of the TMXTileMap is (0,0) 
- The TMX layers will be added as a child 
- The TMX layers will be aliased by default 
- The tileset image will be loaded using the cc.TextureCache 
- Each tile will have a unique tag
- Each tile will have a unique z value. top-left: z=1, bottom-right: z=max z
- Each object group will be treated as an cc.MutableArray 
- Object class which will contain all the properties in a dictionary
- Properties can be assigned to the Map, Layer, Object Group, and Object

Limitations: 
- It only supports one tileset per layer. 
- Embeded images are not supported 
- It only supports the XML format (the JSON format is not supported)

Technical description: 
Each layer is created using an cc.TMXLayer (subclass of cc.SpriteBatchNode). If you have 5 layers, then 5 cc.TMXLayer will be created, 
unless the layer visibility is off. In that case, the layer won&#39;t be created at all. 
You can obtain the layers (cc.TMXLayer objects) at runtime by: 
- map.getChildByTag(tag_number);  // 0=1st layer, 1=2nd layer, 2=3rd layer, etc...
- map.getLayer(name_of_the_layer); 

Each object group is created using a cc.TMXObjectGroup which is a subclass of cc.MutableArray.
You can obtain the object groups at runtime by: 
- map.getObjectGroup(name_of_the_object_group); 

Each object is a cc.TMXObject.

Each property is stored as a key-value pair in an cc.MutableDictionary.
You can obtain the properties at runtime by: 

map.getProperty(name_of_the_property); 
layer.getProperty(name_of_the_property); 
objectGroup.getProperty(name_of_the_property); 
object.getProperty(name_of_the_property);
								
							
        */
        export class TMXTiledMap extends cc.Node {
            /**
            * cc.TMXTiledMap knows how to parse and render a TMX map.
            */
            constructor(tmxFile: string, resourcePath: string);
            /**
            * Return All layers array.
            */
            allLayers();
            /**
            * Creates a TMX Tiled Map with a TMX file  or content string.
            */
            static create(tmxFile: string, resourcePath: string);
            /**
            * Creates a TMX Tiled Map with a TMX file  or content string.
            */
            ctor(tmxFile: string, resourcePath: string);
            /**
            * return the TMXLayer for the specific layer
            */
            getLayer(layerName: string);
            /**
            * map orientation
            */
            getMapOrientation();
            /**
            * Gets the map size.
            */
            getMapSize();
            /**
            * Return the TMXObjectGroup for the specific group
            */
            getObjectGroup(groupName: string);
            /**
            * object groups
            */
            getObjectGroups();
            /**
            * Gets the properties
            */
            getProperties();
            /**
            * Return properties dictionary for tile GID
            */
            getPropertiesForGID(GID: number);
            /**
            * Return the value for the specific property name
            */
            getProperty(propertyName: string);
            /**
            * Gets the tile size.
            */
            getTileSize();
            /**
            * Initializes the instance of cc.TMXTiledMap with tmxFile
            */
            initWithTMXFile(tmxFile: string);
            /**
            * Initializes the instance of cc.TMXTiledMap with tmxString
            */
            initWithXML(tmxString: string, resourcePath: string);
            /**
            * Return properties dictionary for tile GID
            */
            propertiesForGID(GID: number);
            /**
            * map orientation
            */
            setMapOrientation(Var: number);
            /**
            * Set the map size.
            */
            setMapSize(Var: Size);
            /**
            * object groups
            */
            setObjectGroups(Var: Array);
            /**
            * Set the properties
            */
            setProperties(Var: object);
            /**
            * Set the tile size
            */
            setTileSize(Var: Size);
        }
}
declare module cc {
        /**
        * 
								cc.TMXTilesetInfo contains the information about the tilesets like: 
- Tileset name
- Tileset spacing
- Tileset margin
- size of the tiles
- Image used for the tiles
- Image size

This information is obtained from the TMX file. 
								
							
        */
        export class TMXTilesetInfo extends cc.Class {
            /**
            * cc.TMXTilesetInfo contains the information about the tilesets like: 
- Tileset name
- Tileset spacing
- Tileset margin
- size of the tiles
- Image used for the tiles
- Image size

This information is obtained from the TMX file.
            */
            constructor();
            /**
            * Return rect
            */
            rectForGID(gid: number);
        }
}
declare module cc {
        /**
        * 
								Toggles the visibility of a node.
								
							
        */
        export class ToggleVisibility extends cc.ActionInstant {
            /**
            * Toggles the visibility of a node.
            */
            constructor();
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								The touch event class
								
							
        */
        export class Touch extends cc.Class {
            /**
            * The touch event class
            */
            constructor(x: number, y: number, id: number);
            /**
            * Returns the delta distance from the previous touche to the current one in screen coordinates
            */
            getDelta();
            /**
            * Returns the id of cc.Touch
            */
            getID();
            /**
            * Returns the id of cc.Touch
            */
            getId();
            /**
            * Returns the current touch location in OpenGL coordinates
            */
            getLocation();
            /**
            * Returns the current touch location in screen coordinates
            */
            getLocationInView();
            /**
            * Returns X axis location value
            */
            getLocationX();
            /**
            * Returns Y axis location value
            */
            getLocationY();
            /**
            * Returns the previous touch location in OpenGL coordinates
            */
            getPreviousLocation();
            /**
            * Returns the previous touch location in screen coordinates
            */
            getPreviousLocationInView();
            /**
            * Returns the start touch location in OpenGL coordinates
            */
            getStartLocation();
            /**
            * Returns the start touch location in screen coordinates
            */
            getStartLocationInView();
            /**
            * Sets information to touch
            */
            setTouchInfo(id: number, x: number, y: number);
        }
}
declare module cc {
        /**
        * 
								Cross fades two scenes using the cc.RenderTexture object.
								
							
        */
        export class TransitionCrossFade extends cc.TransitionScene {
            /**
            * Cross fades two scenes using the cc.RenderTexture object.
            */
            constructor(t: number, scene: Scene);
            /**
            * Cross fades two scenes using the cc.RenderTexture object.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionCrossFade
            */
            ctor(t: number, scene: Scene);
            /**
            * overide draw
            */
            draw();
            /**
            * custom on enter
            */
            onEnter();
            /**
            * custom on exit
            */
            onExit();
            /**
            * stuff gets drawn here
            */
            visit();
        }
}
declare module cc {
        /**
        * 
								Fade out the outgoing scene and then fade in the incoming scene.
								
							
        */
        export class TransitionFade extends cc.TransitionScene {
            /**
            * Fade out the outgoing scene and then fade in the incoming scene.
            */
            constructor(t: number, scene: Scene, o: any);
            /**
            * Fade out the outgoing scene and then fade in the incoming scene.
            */
            static create(t: number, scene: Scene, color: Color);
            /**
            * Constructor of TransitionFade
            */
            ctor(t: number, scene: Scene, o: any);
            /**
            * initializes the transition with a duration and with an RGB color
            */
            initWithDuration(t: number, scene: Scene, color: Color);
            /**
            * custom on enter
            */
            onEnter();
            /**
            * custom on exit
            */
            onExit();
        }
}
declare module cc {
        /**
        * 
								Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
								
							
        */
        export class TransitionFadeBL extends cc.TransitionFadeTR {
            /**
            * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
            */
            constructor(t: number, scene: Scene);
            /**
            * 
            */
            actionWithSize(size: Size);
            /**
            * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionFadeBL
            */
            ctor(t: number, scene: Scene);
        }
}
declare module cc {
        /**
        * 
								Fade the tiles of the outgoing scene from the top to the bottom.
								
							
        */
        export class TransitionFadeDown extends cc.TransitionFadeTR {
            /**
            * Fade the tiles of the outgoing scene from the top to the bottom.
            */
            constructor(t: number, scene: Scene);
            /**
            * 
            */
            actionWithSize(size: Size);
            /**
            * Fade the tiles of the outgoing scene from the top to the bottom.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionFadeDown
            */
            ctor(t: number, scene: Scene);
        }
}
declare module cc {
        /**
        * 
								Fade the tiles of the outgoing scene from the left-bottom corner the to top-right corner.
								
							
        */
        export class TransitionFadeTR extends cc.TransitionScene {
            /**
            * Fade the tiles of the outgoing scene from the left-bottom corner the to top-right corner.
            */
            constructor(t: number, scene: Scene);
            /**
            * 
            */
            actionWithSize(size: Size);
            /**
            * Fade the tiles of the outgoing scene from the left-bottom corner the to top-right corner.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionFadeTR
            */
            ctor(t: number, scene: Scene);
            /**
            * 
            */
            easeActionWithAction(action: ActionInterval);
            /**
            * Custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
								
							
        */
        export class TransitionFadeUp extends cc.TransitionFadeTR {
            /**
            * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
            */
            constructor(t: number, scene: Scene);
            /**
            * 
            */
            actionWithSize(size: Size);
            /**
            * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionFadeUp
            */
            ctor(t: number, scene: Scene);
        }
}
declare module cc {
        /**
        * 
								Flips the screen half horizontally and half vertically.
The front face is the outgoing scene and the back face is the incoming scene.
								
							
        */
        export class TransitionFlipAngular extends cc.TransitionSceneOriented {
            /**
            * Flips the screen half horizontally and half vertically.
            */
            constructor(t: number, scene: Scene, o: any);
            /**
            * Flips the screen half horizontally and half vertically.
            */
            static create(t: number, scene: Scene, o: any);
            /**
            * Constructor of TransitionFlipAngular
            */
            ctor(t: number, scene: Scene, o: any);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Flips the screen horizontally.
The front face is the outgoing scene and the back face is the incoming scene.
								
							
        */
        export class TransitionFlipX extends cc.TransitionSceneOriented {
            /**
            * Flips the screen horizontally.
            */
            constructor(t: number, scene: Scene, o: any);
            /**
            * Flips the screen horizontally.
            */
            static create(t: number, scene: Scene, o: any);
            /**
            * Constructor of TransitionFlipX
            */
            ctor(t: number, scene: Scene, o: any);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Flips the screen vertically.
The front face is the outgoing scene and the back face is the incoming scene.
								
							
        */
        export class TransitionFlipY extends cc.TransitionSceneOriented {
            /**
            * Flips the screen vertically.
            */
            constructor(t: number, scene: Scene, o: any);
            /**
            * Flips the screen vertically.
            */
            static create(t: number, scene: Scene, o: any);
            /**
            * Constructor of TransitionFlipY
            */
            ctor(t: number, scene: Scene, o: any);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Zoom out and jump the outgoing scene, and then jump and zoom in the incoming
								
							
        */
        export class TransitionJumpZoom extends cc.TransitionScene {
            /**
            * Zoom out and jump the outgoing scene, and then jump and zoom in the incoming
            */
            constructor(t: number, scene: Scene);
            /**
            * creates a scene transition that zooms then jump across the screen, the same for the incoming scene
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionJumpZoom
            */
            ctor(t: number, scene: Scene);
            /**
            * Custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Move in from to the bottom the incoming scene.
								
							
        */
        export class TransitionMoveInB extends cc.TransitionMoveInL {
            /**
            * Move in from to the bottom the incoming scene.
            */
            constructor(t: number, scene: Scene);
            /**
            * create a scene transition that Move in from to the bottom the incoming scene.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionMoveInB
            */
            ctor(t: number, scene: Scene);
            /**
            * init function
            */
            initScenes();
        }
}
declare module cc {
        /**
        * 
								Move in from to the left the incoming scene.
								
							
        */
        export class TransitionMoveInL extends cc.TransitionScene {
            /**
            * Move in from to the left the incoming scene.
            */
            constructor(t: number, scene: Scene);
            /**
            * returns the action that will be performed
            */
            action();
            /**
            * creates an action that  Move in from to the left the incoming scene.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionMoveInL
            */
            ctor(t: number, scene: Scene);
            /**
            * creates an ease action from action
            */
            easeActionWithAction(action: ActionInterval);
            /**
            * initializes the scenes
            */
            initScenes();
            /**
            * Custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Move in from to the right the incoming scene.
								
							
        */
        export class TransitionMoveInR extends cc.TransitionMoveInL {
            /**
            * Move in from to the right the incoming scene.
            */
            constructor(t: number, scene: Scene);
            /**
            * create a scene transition that Move in from to the right the incoming scene.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionMoveInR
            */
            ctor(t: number, scene: Scene);
            /**
            * Init function
            */
            initScenes();
        }
}
declare module cc {
        /**
        * 
								Move in from to the top the incoming scene.
								
							
        */
        export class TransitionMoveInT extends cc.TransitionMoveInL {
            /**
            * Move in from to the top the incoming scene.
            */
            constructor(t: number, scene: Scene);
            /**
            * Move in from to the top the incoming scene.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionMoveInT
            */
            ctor(t: number, scene: Scene);
            /**
            * init function
            */
            initScenes();
        }
}
declare module cc {
        /**
        * 
								 A transition which peels back the bottom right hand corner of a scene
to transition to the scene beneath it simulating a page turn.

This uses a 3DAction so it&#39;s strongly recommended that depth buffering
is turned on in cc.director using:

cc.director.setDepthBufferFormat(kDepthBuffer16);
								
							
        */
        export class TransitionPageTurn extends cc.TransitionScene {
            /**
            *  A transition which peels back the bottom right hand corner of a scene
to transition to the scene beneath it simulating a page turn.
            */
            constructor(t: number, scene: Scene, backwards: boolean);
            /**
            * 
            */
            actionWithSize(vector: Size);
            /**
            * Creates a base transition with duration and incoming scene.
            */
            static create(t: number, scene: Scene, backwards: boolean);
            /**
            * 
            */
            ctor(t: number, scene: Scene, backwards: boolean);
            /**
            * Creates a base transition with duration and incoming scene.
            */
            initWithDuration(t: number, scene: Scene, backwards: boolean);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								cc.TransitionProgress transition.
								
							
        */
        export class TransitionProgress extends cc.TransitionScene {
            /**
            * cc.TransitionProgress transition.
            */
            constructor(t: number, scene: Scene);
            /**
            * create a cc.TransitionProgress object
            */
            static create(t: number, scene: Scene);
            /**
            * 
            */
            ctor(t: number, scene: Scene);
            /**
            * 
            */
            onEnter();
            /**
            * 
            */
            onExit();
        }
}
declare module cc {
        /**
        * 
								cc.TransitionProgressHorizontal transition.
A  colock-wise radial transition to the next scene
								
							
        */
        export class TransitionProgressHorizontal extends cc.TransitionProgress {
            /**
            * cc.TransitionProgressHorizontal transition.
            */
            constructor(t: number, scene: Scene);
            /**
            * create a cc.TransitionProgressHorizontal object
            */
            static create(t: number, scene: Scene);
            /**
            * 
            */
            ctor(t: number, scene: Scene);
        }
}
declare module cc {
        /**
        * 
								cc.TransitionProgressInOut transition.
								
							
        */
        export class TransitionProgressInOut extends cc.TransitionProgress {
            /**
            * cc.TransitionProgressInOut transition.
            */
            constructor();
            /**
            * create a cc.TransitionProgressInOut object
            */
            static create(t: number, scene: Scene);
            /**
            * The constructor of cc.TransitionProgressInOut.
            */
            ctor(t: number, scene: Scene);
        }
}
declare module cc {
        /**
        * 
								cc.TransitionProgressOutIn transition.
								
							
        */
        export class TransitionProgressOutIn extends cc.TransitionProgress {
            /**
            * cc.TransitionProgressOutIn transition.
            */
            constructor();
            /**
            * create a cc.TransitionProgressOutIn object
            */
            static create(t: number, scene: Scene);
            /**
            * The constructor of cc.TransitionProgressOutIn.
            */
            ctor(t: number, scene: Scene);
        }
}
declare module cc {
        /**
        * 
								cc.TransitionRadialCCW transition.
 A counter clock-wise radial transition to the next scene
								
							
        */
        export class TransitionProgressRadialCCW extends cc.TransitionProgress {
            /**
            * cc.TransitionRadialCCW transition.
            */
            constructor(t: number, scene: Scene);
            /**
            * create a cc.TransitionProgressRadialCCW object
            */
            static create(t: number, scene: Scene);
            /**
            * 
            */
            ctor(t: number, scene: Scene);
        }
}
declare module cc {
        /**
        * 
								cc.TransitionRadialCW transition.
A counter colock-wise radial transition to the next scene
								
							
        */
        export class TransitionProgressRadialCW extends cc.TransitionProgress {
            /**
            * cc.TransitionRadialCW transition.
            */
            constructor(t: number, scene: Scene);
            /**
            * create a cc.TransitionProgressRadialCW object
            */
            static create(t: number, scene: Scene);
            /**
            * 
            */
            ctor(t: number, scene: Scene);
        }
}
declare module cc {
        /**
        * 
								cc.TransitionProgressVertical transition.
								
							
        */
        export class TransitionProgressVertical extends cc.TransitionProgress {
            /**
            * cc.TransitionProgressVertical transition.
            */
            constructor(t: number, scene: Scene);
            /**
            * create a cc.TransitionProgressVertical object
            */
            static create(t: number, scene: Scene);
            /**
            * 
            */
            ctor(t: number, scene: Scene);
        }
}
declare module cc {
        /**
        * 
								Rotate and zoom out the outgoing scene, and then rotate and zoom in the incoming
								
							
        */
        export class TransitionRotoZoom extends cc.TransitionScene {
            /**
            * Rotate and zoom out the outgoing scene, and then rotate and zoom in the incoming
            */
            constructor(t: number, scene: Scene);
            /**
            * Creates a Transtion rotation and zoom
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionRotoZoom
            */
            ctor(t: number, scene: Scene);
            /**
            * Custom On Enter callback
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
        */
        export class TransitionScene extends cc.Scene {
            /**
            * 
            */
            constructor(t: number, scene: Scene);
            /**
            * custom cleanup
            */
            cleanup();
            /**
            * creates a base transition with duration and incoming scene
            */
            static create(t: number, scene: Scene);
            /**
            * creates a base transition with duration and incoming scene
Constructor of cc.TransitionScene
            */
            ctor(t: number, scene: Scene);
            /**
            * called after the transition finishes
            */
            finish();
            /**
            * set hide the out scene and show in scene
            */
            hideOutShowIn();
            /**
            * initializes a transition with duration and incoming scene
            */
            initWithDuration(t: number, scene: Scene);
            /**
            * 
    Event callback that is invoked every time when cc.TransitionScene enters the &#39;stage&#39;.
            */
            onEnter();
            /**
            * 
callback that is called every time the cc.TransitionScene leaves the &#39;stage&#39;.
            */
            onExit();
            /**
            * stuff gets drawn here
            */
            visit();
        }
}
declare module cc {
        /**
        * 
								A cc.Transition that supports orientation like.
Possible orientation: LeftOver, RightOver, UpOver, DownOver
useful for when you want to make a transition happen between 2 orientations
								
							
        */
        export class TransitionSceneOriented extends cc.TransitionScene {
            /**
            * A cc.Transition that supports orientation like.
            */
            constructor(t: number, scene: Scene, orientation: any);
            /**
            * creates a base transition with duration and incoming scene
            */
            static create(t: number, scene: Scene, orientation: any);
            /**
            * Constructor of TransitionSceneOriented
            */
            ctor(t: number, scene: Scene, orientation: any);
            /**
            * initialize the transition
            */
            initWithDuration(t: number, scene: Scene, orientation: any);
        }
}
declare module cc {
        /**
        * 
								Shrink the outgoing scene while grow the incoming scene
								
							
        */
        export class TransitionShrinkGrow extends cc.TransitionScene {
            /**
            * Shrink the outgoing scene while grow the incoming scene
            */
            constructor(t: number, scene: Scene);
            /**
            * Shrink the outgoing scene while grow the incoming scene
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionShrinkGrow
            */
            ctor(t: number, scene: Scene);
            /**
            * 
            */
            easeActionWithAction();
            /**
            * Custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Slide in the incoming scene from the bottom border.
								
							
        */
        export class TransitionSlideInB extends cc.TransitionSlideInL {
            /**
            * Slide in the incoming scene from the bottom border.
            */
            constructor(t: number, scene: Scene);
            /**
            * returns the action that will be performed by the incomming and outgoing scene
            */
            action();
            /**
            * create a Slide in the incoming scene from the bottom border.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionSlideInB
            */
            ctor(t: number, scene: Scene);
            /**
            * initializes the scenes
            */
            initScenes();
        }
}
declare module cc {
        /**
        * 
								a transition that a new scene is slided from left
								
							
        */
        export class TransitionSlideInL extends cc.TransitionScene {
            /**
            * a transition that a new scene is slided from left
            */
            constructor(t: number, scene: Scene);
            /**
            * returns the action that will be performed by the incomming and outgoing scene
            */
            action();
            /**
            * create a transition that a new scene is slided from left
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionSlideInL
            */
            ctor(t: number, scene: Scene);
            /**
            * 
            */
            easeActionWithAction(action: ActionInterval);
            /**
            * initializes the scenes
            */
            initScenes();
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Slide in the incoming scene from the right border.
								
							
        */
        export class TransitionSlideInR extends cc.TransitionSlideInL {
            /**
            * Slide in the incoming scene from the right border.
            */
            constructor(t: number, scene: Scene);
            /**
            * returns the action that will be performed by the incomming and outgoing scene
            */
            action();
            /**
            * create Slide in the incoming scene from the right border.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionSlideInR
            */
            ctor(t: number, scene: Scene);
            /**
            * initializes the scenes
            */
            initScenes();
        }
}
declare module cc {
        /**
        * 
								Slide in the incoming scene from the top border.
								
							
        */
        export class TransitionSlideInT extends cc.TransitionSlideInL {
            /**
            * Slide in the incoming scene from the top border.
            */
            constructor(t: number, scene: Scene);
            /**
            * returns the action that will be performed by the incomming and outgoing scene
            */
            action();
            /**
            * create a Slide in the incoming scene from the top border.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionSlideInT
            */
            ctor(t: number, scene: Scene);
            /**
            * initializes the scenes
            */
            initScenes();
        }
}
declare module cc {
        /**
        * 
								The odd columns goes upwards while the even columns goes downwards.
								
							
        */
        export class TransitionSplitCols extends cc.TransitionScene {
            /**
            * The odd columns goes upwards while the even columns goes downwards.
            */
            constructor(t: number, scene: Scene);
            /**
            * 
            */
            action();
            /**
            * The odd columns goes upwards while the even columns goes downwards.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionSplitCols
            */
            ctor(t: number, scene: Scene);
            /**
            * 
            */
            easeActionWithAction(action: ActionInterval);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								The odd rows goes to the left while the even rows goes to the right.
								
							
        */
        export class TransitionSplitRows extends cc.TransitionSplitCols {
            /**
            * The odd rows goes to the left while the even rows goes to the right.
            */
            constructor(t: number, scene: Scene);
            /**
            * 
            */
            action();
            /**
            * The odd rows goes to the left while the even rows goes to the right.
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionSplitRows
            */
            ctor(t: number, scene: Scene);
        }
}
declare module cc {
        /**
        * 
								Turn off the tiles of the outgoing scene in random order
								
							
        */
        export class TransitionTurnOffTiles extends cc.TransitionScene {
            /**
            * Turn off the tiles of the outgoing scene in random order
            */
            constructor(t: number, scene: Scene);
            /**
            * Turn off the tiles of the outgoing scene in random order
            */
            static create(t: number, scene: Scene);
            /**
            * Constructor of TransitionCrossFade
            */
            ctor(t: number, scene: Scene);
            /**
            * 
            */
            easeActionWithAction(action: ActionInterval);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Flips the screen half horizontally and half vertically doing a little zooming out/in.
The front face is the outgoing scene and the back face is the incoming scene.
								
							
        */
        export class TransitionZoomFlipAngular extends cc.TransitionSceneOriented {
            /**
            * Flips the screen half horizontally and half vertically doing a little zooming out/in.
            */
            constructor(t: number, scene: Scene, o: any);
            /**
            * Flips the screen half horizontally and half vertically doing a little zooming out/in.
            */
            static create(t: number, scene: Scene, o: any);
            /**
            * Constructor of TransitionZoomFlipAngular
            */
            ctor(t: number, scene: Scene, o: any);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Flips the screen horizontally doing a zoom out/in
The front face is the outgoing scene and the back face is the incoming scene.
								
							
        */
        export class TransitionZoomFlipX extends cc.TransitionSceneOriented {
            /**
            * Flips the screen horizontally doing a zoom out/in
The front face is the outgoing scene and the back face is the incoming scene.
            */
            constructor(t: number, scene: Scene, o: any);
            /**
            * Flips the screen horizontally doing a zoom out/in
The front face is the outgoing scene and the back face is the incoming scene.
            */
            static create(t: number, scene: Scene, o: any);
            /**
            * Constructor of TransitionZoomFlipX
            */
            ctor(t: number, scene: Scene, o: any);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								Flips the screen vertically doing a little zooming out/in
The front face is the outgoing scene and the back face is the incoming scene.
								
							
        */
        export class TransitionZoomFlipY extends cc.TransitionSceneOriented {
            /**
            * Flips the screen vertically doing a little zooming out/in
The front face is the outgoing scene and the back face is the incoming scene.
            */
            constructor(t: number, scene: Scene, o: any);
            /**
            * Flips the screen vertically doing a little zooming out/in
The front face is the outgoing scene and the back face is the incoming scene.
            */
            static create(t: number, scene: Scene, o: any);
            /**
            * Constructor of TransitionZoomFlipY
            */
            ctor(t: number, scene: Scene, o: any);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        /**
        * 
								cc.TurnOffTiles action.
Turn off the files in random order. 
Reference the test cases (Effects Test)
								
							
        */
        export class TurnOffTiles extends cc.TiledGrid3DAction {
            /**
            * cc.TurnOffTiles action.
            */
            constructor(duration: number, gridSize: Size, seed: any);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, seed: any);
            /**
            * Initializes the action with a random seed, the grid size and the duration.
            */
            initWithDuration(duration: number, gridSize: Size, seed: any);
            /**
            * Shuffle
            */
            shuffle(array: Array, len: number);
            /**
            * called before the action start.
            */
            startWithTarget(target: Node);
            /**
            * Turn off title.
            */
            turnOffTile(pos: Point);
            /**
            * Turn on tile.
            */
            turnOnTile(pos: Point);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.Twirl action. 
Reference the test cases (Effects Test)
								
							
        */
        export class Twirl extends cc.Grid3DAction {
            /**
            * cc.Twirl action.
            */
            constructor(duration: number, gridSize: Size, position: Point, twirls: number, amplitude: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, position: Point, twirls: number, amplitude: number);
            /**
            * get amplitude
            */
            getAmplitude();
            /**
            * get amplitude rate
            */
            getAmplitudeRate();
            /**
            * get twirl center
            */
            getPosition();
            /**
            * initializes the action with center position, number of twirls, amplitude, a grid size and duration
            */
            initWithDuration();
            /**
            * set amplitude
            */
            setAmplitude(amplitude: number);
            /**
            * set amplitude rate
            */
            setAmplitudeRate(amplitudeRate: number);
            /**
            * set twirl center
            */
            setPosition(position: Point);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
        */
        export class Vertex2F  {
            /**
            * 
            */
            constructor(x1: number, y1: number);
        }
}
declare module cc {
        /**
        * 
        */
        export class Vertex3F  {
            /**
            * 
            */
            constructor(x1: number, y1: number, z1: number);
        }
}
declare module cc {
        /**
        * 
								cc.view is the singleton object which represents the game window.
It&#39;s main task include: 
 - Apply the design resolution policy
 - Provide interaction with the window, like resize event on web, retina display support, etc...
 - Manage the game view port which can be different with the window
 - Manage the content scale and translation

Since the cc.view is a singleton, you don&#39;t need to call any constructor or create functions,
the standard way to use it is by calling:
 - cc.view.methodName(); 
								
							
        */
        export class view  {
            /**
            * cc.view is the singleton object which represents the game window.
            */
            constructor();
            /**
            * Sets whether the engine modify the &quot;viewport&quot; meta in your web page.
            */
            adjustViewPort(enabled: boolean);
            /**
            * Returns whether developer can set content&#39;s scale factor.
            */
            canSetContentScaleFactor();
            /**
            * Empty function
            */
            centerWindow();
            /**
            * Returns the real location in view for a translation based on a related position
            */
            convertToLocationInView(tx: number, ty: number, relatedPos: Object);
            /**
            * Constructor of cc.EGLView
            */
            ctor();
            /**
            * If enabled, the application will try automatically to enter full screen mode on mobile devices
You can pass true as parameter to enable it and disable it by passing false.
            */
            enableAutoFullScreen(enabled: boolean);
            /**
            * Retina support is enabled by default for Apple device but disabled for other devices,
it takes effect only when you called setDesignResolutionPolicy
Only useful on web
            */
            enableRetina(enabled: boolean);
            /**
            * Force destroying EGL view, subclass must implement this method.
            */
            end();
            /**
            * Returns the resolution translate on EGLView
            */
            getContentTranslateLeftTop();
            /**
            * Returns the designed size for the view.
            */
            getDesignResolutionSize();
            /**
            * Returns device pixel ratio for retina display.
            */
            getDevicePixelRatio();
            /**
            * Returns the frame size of the view.
            */
            getFrameSize();
            /**
            * Returns the current resolution policy
            */
            getResolutionPolicy();
            /**
            * Returns scale factor of the horizontal direction (X axis).
            */
            getScaleX();
            /**
            * Returns scale factor of the vertical direction (Y axis).
            */
            getScaleY();
            /**
            * Returns the current scissor rectangle
            */
            getScissorRect();
            /**
            * Returns the current target-densitydpi value of cc.view.
            */
            getTargetDensityDPI();
            /**
            * Returns the name of the view
            */
            getViewName();
            /**
            * Returns the view port rectangle.
            */
            getViewPortRect();
            /**
            * Returns the visible origin of the view port.
            */
            getVisibleOrigin();
            /**
            * Returns the visible area size of the view port.
            */
            getVisibleSize();
            /**
            * Check whether auto full screen is enabled.
            */
            isAutoFullScreenEnabled();
            /**
            * Get whether render system is ready(no matter opengl or canvas),
this name is for the compatibility with cocos2d-x, subclass must implement this method.
            */
            isOpenGLReady();
            /**
            * Check whether retina display is enabled.
            */
            isRetinaEnabled();
            /**
            * Returns whether GL_SCISSOR_TEST is enable
            */
            isScissorEnabled();
            /**
            * Sets whether resize canvas automatically when browser&#39;s size changed.
            */
            resizeWithBrowserSize(enabled: boolean);
            /**
            * Sets the resolution translate on EGLView
            */
            setContentTranslateLeftTop(offsetLeft: number, offsetTop: number);
            /**
            * Sets the resolution policy with designed view size in points.
            */
            setDesignResolutionSize(width: number, height: number, resolutionPolicy: any);
            /**
            * On native, it sets the frame size of view.
            */
            setFrameSize(width: number, height: number);
            /**
            * Open or close IME keyboard , subclass must implement this method.
            */
            setIMEKeyboardState(isOpen: boolean);
            /**
            * Sets the callback function for cc.view&#39;s resize action,
this callback will be invoked before applying resolution policy, 
so you can do any additional modifications within the callback.
            */
            setResizeCallback(callback: any);
            /**
            * Sets the current resolution policy
            */
            setResolutionPolicy(resolutionPolicy: any);
            /**
            * Sets Scissor rectangle with points.
            */
            setScissorInPoints(x: number, y: number, w: number, h: number);
            /**
            * 
Sets view&#39;s target-densitydpi for android mobile browser.
            */
            setTargetDensityDPI(densityDPI: string);
            /**
            * Sets the name of the view
            */
            setViewName(viewName: string);
            /**
            * Sets view port rectangle with points.
            */
            setViewPortInPoints(x: number, y: number, w: number, h: number);
            /**
            * Exchanges the front and back buffers, subclass must implement this method.
            */
            swapBuffers();
        }
}
declare module cc {
        /**
        * 
								cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
it should represent the same rect as cc.view.getViewportRect()
								
							
        */
        export class visibleRect  {
            /**
            * cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
it should represent the same rect as cc.view.getViewportRect()
            */
            constructor();
            /**
            * initialize
            */
            static init(visibleRect: Rect);
        }
}
declare module cc {
        /**
        * 
								cc.Waves action. 
Reference the test cases (Effects Test)
								
							
        */
        export class Waves extends cc.Grid3DAction {
            /**
            * cc.Waves action.
            */
            constructor(duration: number, gridSize: Size, waves: number, amplitude: number, horizontal: boolean, vertical: boolean);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, waves: number, amplitude: number, horizontal: boolean, vertical: boolean);
            /**
            * get amplitude
            */
            getAmplitude();
            /**
            * get amplitude rate
            */
            getAmplitudeRate();
            /**
            * initializes the action with amplitude, horizontal sin, vertical sin, a grid and duration
            */
            initWithDuration(duration: number, gridSize: Size, waves: number, amplitude: number, horizontal: boolean, vertical: boolean);
            /**
            * set amplitude
            */
            setAmplitude(amplitude: number);
            /**
            * set amplitude rate
            */
            setAmplitudeRate(amplitudeRate: number);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.Waves3D action. 
Reference the test cases (Effects Advanced Test)
								
							
        */
        export class Waves3D extends cc.Grid3DAction {
            /**
            * cc.Waves3D action.
            */
            constructor(duration: number, gridSize: Size, waves: number, amplitude: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, waves: number, amplitude: number);
            /**
            * get Amplitude
            */
            getAmplitude();
            /**
            * get Amplitude Rate
            */
            getAmplitudeRate();
            /**
            * initializes an action with duration, grid size, waves and amplitude
            */
            initWithDuration(duration: number, gridSize: Size, waves: number, amplitude: number);
            /**
            * set Amplitude
            */
            setAmplitude(amplitude: number);
            /**
            * set Amplitude Rate
            */
            setAmplitudeRate(amplitudeRate: number);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module cc {
        /**
        * 
								cc.WavesTiles3D action. 
Reference the test cases (Effects Test)
								
							
        */
        export class WavesTiles3D extends cc.TiledGrid3DAction {
            /**
            * cc.WavesTiles3D action.
            */
            constructor(duration: number, gridSize: Size, waves: number, amplitude: number);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration: number, gridSize: Size, waves: number, amplitude: number);
            /**
            * get amplitude of waves
            */
            getAmplitude();
            /**
            * get amplitude rate of waves
            */
            getAmplitudeRate();
            /**
            * initializes the action with a number of waves, the waves amplitude, the grid size and the duration
            */
            initWithDuration(duration: number, gridSize: Size, waves: number, amplitude: number);
            /**
            * set amplitude of waves
            */
            setAmplitude(amplitude: number);
            /**
            * set amplitude rate of waves
            */
            setAmplitudeRate(amplitudeRate: number);
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module ccs {
        /**
        * 
								The Cocostudio&#39;s fade action frame.
								
							
        */
        export class ActionFadeFrame extends ccs.ActionFrame {
            /**
            * The Cocostudio&#39;s fade action frame.
            */
            constructor();
            /**
            * Construction of ccs.ActionFadeFrame
            */
            ctor();
            /**
            * Returns a fade action with easing.
            */
            getAction(duration: number);
            /**
            * Returns the fade action opacity.
            */
            getOpacity();
            /**
            * Changes the fade action opacity.
            */
            setOpacity(opacity: number);
        }
}
declare module ccs {
        /**
        * 
								The action frame of Cocostudio. It&#39;s the base class of ccs.ActionMoveFrame, ccs.ActionScaleFrame etc.
								
							
        */
        export class ActionFrame extends ccs.Class {
            /**
            * The action frame of Cocostudio.
            */
            constructor();
            /**
            * The constructor of cc.ActionFrame.
            */
            ctor();
            /**
            * Returns the action of ActionFrame.
            */
            getAction(duration: number, srcFrame: ActionFrame);
            /**
            * Sets the easing parameter to action frame.
            */
            setEasingParameter(parameter: Array);
            /**
            * Sets the easing type to ccs.ActionFrame
            */
            setEasingType(easingType: number);
        }
}
declare module ccs {
        /**
        * 
								Base singleton object for ccs.ActionManager.
								
							
        */
        export class actionManager  {
            /**
            * Base singleton object for ccs.ActionManager.
            */
            constructor();
            /**
            * Clear data: Release all actions.
            */
            clear();
            /**
            * Gets an actionObject with a name.
            */
            getActionByName(jsonName: string, actionName: string);
            /**
            * Init properties with json dictionary
            */
            initWithDictionary(jsonName: string, dic: Object, root: Object);
            /**
            * Play an Action with a name.
            */
            playActionByName(jsonName: string, actionName: string, fun: cc.CallFunc);
            /**
            * Release all actions.
            */
            releaseActions();
            /**
            * Stop an Action with a name.
            */
            stopActionByName(jsonName: string, actionName: string);
        }
}
declare module ccs {
        /**
        * 
								The Cocostudio&#39;s move action frame.
								
							
        */
        export class ActionMoveFrame extends ccs.ActionFrame {
            /**
            * The Cocostudio&#39;s move action frame.
            */
            constructor();
            /**
            * Construction of ccs.ActionMoveFrame
            */
            ctor();
            /**
            * Returns the CCAction of ActionFrame.
            */
            getAction(duration: number);
            /**
            * Returns the move action position.
            */
            getPosition();
            /**
            * Changes the move action position.
            */
            setPosition(pos: any, y: number);
        }
}
declare module ccs {
        /**
        * 
								The Cocostudio&#39;s action node, it contains action target, action frame list and current frame index.  it can be play action by calling playAciton.
								
							
        */
        export class ActionNode extends ccs.Class {
            /**
            * The Cocostudio&#39;s action node, it contains action target, action frame list and current frame index.
            */
            constructor();
            /**
            * Pushes back an ActionFrame to ccs.ActionNode.
            */
            addFrame(frame: ActionFrame);
            /**
            * Removes all ActionFrames from ccs.ActionNode.
            */
            clearAllFrame();
            /**
            * Construction of ccs.ActionNode
            */
            ctor();
            /**
            * Removes an ActionFrame from ccs.ActionNode.
            */
            deleteFrame(frame: ActionFrame);
            /**
            * Returns the target node of ccs.ActionNode
            */
            getActionNode();
            /**
            * Returns the tag of ccs.ActionNode
            */
            getActionTag();
            /**
            * Returns index of first ActionFrame.
            */
            getFirstFrameIndex();
            /**
            * Returns the index of last ccs.ActionFrame.
            */
            getLastFrameIndex();
            /**
            * Returns node which will run a action.
            */
            getObject();
            /**
            * Returns the time interval of frame.
            */
            getUnitTime();
            /**
            * Init properties with a json dictionary
            */
            initWithDictionary(dic: Object, root: Object);
            /**
            * Inserts an ActionFrame to ccs.ActionNode.
            */
            insertFrame(index: number, frame: ActionFrame);
            /**
            * Returns if the action is done once time.
            */
            isActionDoneOnce();
            /**
            * Plays ccs.ActionNode&#39;s action.
            */
            playAction(fun: cc.CallFunc);
            /**
            * Sets tag to ccs.ActionNode
            */
            setActionTag(tag: number);
            /**
            * Sets node which will run a action.
            */
            setObject(node: Object);
            /**
            * Sets the time interval of frame.
            */
            setUnitTime(time: number);
            /**
            * Stops action.
            */
            stopAction();
            /**
            * Updates action states to some time.
            */
            updateActionToTimeLine(time: number);
        }
}
declare module ccs {
        /**
        * 
								The Cocostudio&#39;s action object.
								
							
        */
        export class ActionObject extends ccs.Class {
            /**
            * The Cocostudio&#39;s action object.
            */
            constructor();
            /**
            * Adds a ActionNode to play the action.
            */
            addActionNode(node: ActionNode);
            /**
            * Construction of ccs.ActionObject.
            */
            ctor();
            /**
            * Returns the current time of frame.
            */
            getCurrentTime();
            /**
            * Returns if the action will loop play.
            */
            getLoop();
            /**
            * Returns name fo ccs.ActionObject
            */
            getName();
            /**
            * Returns the total time of frame.
            */
            getTotalTime();
            /**
            * Returns the time interval of frame.
            */
            getUnitTime();
            /**
            * Init properties with a json dictionary
            */
            initWithDictionary(dic: Object, root: Object);
            /**
            * Returns if the action is playing.
            */
            isPlaying();
            /**
            * Pauses the action.
            */
            pause();
            /**
            * Plays the action.
            */
            play(fun: cc.CallFunc);
            /**
            * Removes a ActionNode which play the action.
            */
            removeActionNode(node: ActionNode);
            /**
            * Sets the current time of frame.
            */
            setCurrentTime(time: number);
            /**
            * Sets if the action will loop play.
            */
            setLoop(loop: boolean);
            /**
            * Sets name to ccs.ActionObject
            */
            setName(name: string);
            /**
            * Sets the time interval of frame.
            */
            setUnitTime(time: number);
            /**
            * scheduler update function
            */
            simulationActionUpdate(dt: number);
            /**
            * Stop the action.
            */
            stop();
            /**
            * Updates frame by time.
            */
            updateToFrameByTime();
        }
}
declare module ccs {
        /**
        * 
								The Cocostudio&#39;s rotation action frame.
								
							
        */
        export class ActionRotationFrame extends ccs.ActionFrame {
            /**
            * The Cocostudio&#39;s rotation action frame.
            */
            constructor();
            /**
            * Construction of ccs.ActionRotationFrame
            */
            ctor();
            /**
            * Returns the CCAction of ActionFrame.
            */
            getAction(duration: number, srcFrame: cc.ActionFrame);
            /**
            * Returns the rotate action rotation.
            */
            getRotation();
            /**
            * Changes rotate action rotation.
            */
            setRotation(rotation: number);
        }
}
declare module ccs {
        /**
        * 
								The Cocostudio&#39;s scale action frame
								
							
        */
        export class ActionScaleFrame extends ccs.ActionFrame {
            /**
            * The Cocostudio&#39;s scale action frame
            */
            constructor();
            /**
            * Construction of ccs.ActionScaleFrame
            */
            ctor();
            /**
            * Returns the action of ActionFrame.
            */
            getAction(duration: number);
            /**
            * Returns the scale action scaleX.
            */
            getScaleX();
            /**
            * Returns the scale action scaleY.
            */
            getScaleY();
            /**
            * Changes the scale action scaleX.
            */
            setScaleX(scaleX: number);
            /**
            * Changes the scale action scaleY.
            */
            setScaleY(scaleY: number);
        }
}
declare module ccs {
        /**
        * 
								The Cocostudio&#39;s tint action frame.
								
							
        */
        export class ActionTintFrame extends ccs.ActionFrame {
            /**
            * The Cocostudio&#39;s tint action frame.
            */
            constructor();
            /**
            * Construction of ccs.ActionTintFrame
            */
            ctor();
            /**
            * Returns a tint action with easing.
            */
            getAction();
            /**
            * Returns the color of tint action.
            */
            getColor();
            /**
            * Changes the tint action color.
            */
            setColor(color: cc.Color);
        }
}
declare module ccs {
        /**
        * 
								
The animation data information of Cocos Armature. It include all movement information for the Armature.         
The struct is AnimationData -&gt; MovementData -&gt; MovementBoneData -&gt; FrameData                                    
                                             -&gt; MovementFrameData                                               

								
							
        */
        export class AnimationData extends ccs.Class {
            /**
            * 
The animation data information of Cocos Armature.
            */
            constructor();
            /**
            * adds movement data to the movement data dictionary
            */
            addMovement(moveData: MovementData);
            /**
            * gets movement data from movement data dictionary
            */
            getMovement(moveName: string);
            /**
            * gets the count of movement data dictionary
            */
            getMovementCount();
        }
}
declare module ccs {
        /**
        * 
								The animation event class, it has the callback, target and arguments.
								
							
        */
        export class AnimationEvent extends ccs.Class {
            /**
            * The animation event class, it has the callback, target and arguments.
            */
            constructor();
            /**
            * Constructor of ccs.AnimationEvent
            */
            ctor(callFunc: any, target: object, data: object);
        }
}
declare module ccs {
        /**
        * 
								The main class of Armature, it plays armature animation, manages and updates bones&#39; state.
								
							
        */
        export class Armature extends ccs.Node {
            /**
            * The main class of Armature, it plays armature animation, manages and updates bones&#39; state.
            */
            constructor();
            /**
            * Add a Bone to this Armature
            */
            addBone(bone: Bone, parentName: string);
            /**
            * Change a bone&#39;s parent with the specified parent name.
            */
            changeBoneParent(bone: Bone, parentName: string);
            /**
            * Allocates an armature, and use the ArmatureData named name in ArmatureDataManager to initializes the armature.
            */
            static create(name: string, parentBone: Bone);
            /**
            * create a bone with name
            */
            createBone(boneName: string);
            /**
            * Create a armature node.
            */
            ctor(name: string, parentBone: Bone);
            /**
            * draw contour
            */
            drawContour();
            /**
            * Gets the animation of this Armature.
            */
            getAnimation();
            /**
            * Returns the armatureData of ccs.Armature
            */
            getArmatureData();
            /**
            * armatureTransformDirty getter
            */
            getArmatureTransformDirty();
            /**
            * Returns the blendFunc of ccs.Armature
            */
            getBlendFunc();
            /**
            * Gets a bone with the specified name
            */
            getBone(name: string);
            /**
            * when bone  contain the point ,then return it.
            */
            getBoneAtPoint(x: number, y: number);
            /**
            * Get CCArmature&#39;s bone dictionary
            */
            getBoneDic();
            /**
            * This boundingBox will calculate all bones&#39; boundingBox every time
            */
            getBoundingBox();
            /**
            * Return parent bone of ccs.Armature.
            */
            getParentBone();
            /**
            * version getter
            */
            getVersion();
            /**
            * Initializes a CCArmature with the specified name and CCBone
            */
            init(name: string, parentBone: Bone);
            /**
            * The callback when ccs.Armature enter stage.
            */
            onEnter();
            /**
            * The callback when ccs.Armature exit stage.
            */
            onExit();
            /**
            * Remove a bone with the specified name.
            */
            removeBone(bone: Bone, recursion: boolean);
            /**
            * Sets animation to this Armature
            */
            setAnimation(animation: ArmatureAnimation);
            /**
            * Sets armatureData to this Armature
            */
            setArmatureData(armatureData: ArmatureData);
            /**
            * Sets the blendFunc to ccs.Armature
            */
            setBlendFunc(blendFunc: any, dst: number);
            /**
            * set collider filter
            */
            setColliderFilter(filter: ColliderFilter);
            /**
            * Sets parent bone of this Armature
            */
            setParentBone(parentBone: Bone);
            /**
            * version setter
            */
            setVersion(version: number);
            /**
            * The update callback of ccs.Armature, it updates animation&#39;s state and updates bone&#39;s state.
            */
            update(dt: number);
            /**
            * Set contentSize and Calculate anchor point.
            */
            updateOffsetPoint();
        }
}
declare module ccs {
        /**
        * 
								The Animation class for Armature, it plays armature animation, and controls speed scale and manages animation frame.
								
							
        */
        export class ArmatureAnimation extends ccs.ProcessBase {
            /**
            * The Animation class for Armature, it plays armature animation, and controls speed scale and manages animation frame.
            */
            constructor(armature: Armature);
            /**
            * Allocates and initializes a ArmatureAnimation.
            */
            static create();
            /**
            * Emits a frame event
            */
            frameEvent(bone: Bone, frameEventName: string, originFrameIndex: number, currentFrameIndex: number);
            /**
            * Returns animation data of animation.
            */
            getAnimationData();
            /**
            * Returns animation play speed scale.
            */
            getAnimationScale();
            /**
            * Returns the Id of current movement
            */
            getCurrentMovementID();
            /**
            * Returns the length of armature&#39;s movements
            */
            getMovementCount();
            /**
            * Returns animation play speed scale.
            */
            getSpeedScale();
            /**
            * Returns the user object of animation.
            */
            getUserObject();
            /**
            * Goes to specified frame and pauses current movement.
            */
            gotoAndPause(frameIndex: number);
            /**
            * 
Goes to specified frame and plays current movement.
            */
            gotoAndPlay(frameIndex: number);
            /**
            * Initializes with an armature object
            */
            init(armature: Armature);
            /**
            * Determines if the frame event is ignored
            */
            isIgnoreFrameEvent();
            /**
            * Emits a movement event
            */
            movementEvent(armature: Armature, movementType: number, movementID: string);
            /**
            * Pauses armature animation.
            */
            pause();
            /**
            * play animation by animation name.
            */
            play(animationName: string, durationTo: number, loop: number);
            /**
            * Plays animation with index, the other param is the same to play.
            */
            playByIndex(animationIndex: number, durationTo: number, durationTween: number, loop: number, tweenEasing: number);
            /**
            * Plays animation with index, the other param is the same to play.
            */
            playWithIndex(animationIndex: any, durationTo: number, loop: number);
            /**
            * Plays animation by indexes
            */
            playWithIndexes(movementIndexes: Array, durationTo: number, loop: boolean);
            /**
            * Plays animation with names
            */
            playWithNames(movementNames: Array, durationTo: number, loop: boolean);
            /**
            * Resumes armature animation.
            */
            resume();
            /**
            * Sets animation data to animation.
            */
            setAnimationData(data: AnimationData);
            /**
            * Sets animation play speed scale.
            */
            setAnimationScale(animationScale: number);
            /**
            * Sets frame event callback to animation.
            */
            setFrameEventCallFunc(callFunc: any, target: Object);
            /**
            * Sets movement event callback to animation.
            */
            setMovementEventCallFunc(callFunc: any, target: Object);
            /**
            * Sets animation play speed scale.
            */
            setSpeedScale(speedScale: number);
            /**
            * Sets user object to animation.
            */
            setUserObject(userObject: Object);
            /**
            * Stops armature animation.
            */
            stop();
            /**
            * Updates the state of ccs.Tween list, calls frame event&#39;s callback and calls movement event&#39;s callback.
            */
            update(dt: number);
            /**
            * Updates will call this handler, you can handle your logic here
            */
            updateHandler();
            /**
            * Updates movement list.
            */
            updateMovementList();
        }
}
declare module ccs {
        /**
        * 
								
ArmatureData saved the Armature name and BoneData needed for the CCBones in this Armature      
When we create a Armature, we need to get each Bone&#39;s BoneData as it&#39;s init information.       
So we can get a BoneData from the Dictionary saved in the ArmatureData.                        

								
							
        */
        export class ArmatureData extends ccs.Class {
            /**
            * 
ArmatureData saved the Armature name and BoneData needed for the CCBones in this Armature      
When we create a Armature, we need to get each Bone&#39;s BoneData as it&#39;s init information.
            */
            constructor();
            /**
            * Adds bone data to dictionary
            */
            addBoneData(boneData: BoneData);
            /**
            * Construction of ccs.ArmatureData
            */
            ctor();
            /**
            * Gets bone data by bone name
            */
            getBoneData(boneName: string);
            /**
            * Gets bone data dictionary
            */
            getBoneDataDic();
            /**
            * Initializes a ccs.ArmatureData
            */
            init();
        }
}
declare module ccs {
        /**
        * 
								ccs.armatureDataManager is a singleton object which format and manage armature configuration and armature animation
								
							
        */
        export class armatureDataManager  {
            /**
            * ccs.armatureDataManager is a singleton object which format and manage armature configuration and armature animation
            */
            constructor();
            /**
            * Adds animation data to armature data manager.
            */
            addAnimationData(id: string, animationData: AnimationData);
            /**
            * Adds armature data
            */
            addArmatureData(id: string, armatureData: ArmatureData);
            /**
            * Adds ArmatureFileInfo, it is managed by CCArmatureDataManager.
            */
            addArmatureFileInfo(imagePath: string, plistPath: string, configFilePath: string);
            /**
            * Adds ArmatureFileInfo, it is managed by CCArmatureDataManager.
            */
            addArmatureFileInfoAsync(imagePath: string, plistPath: string, configFilePath: string, selector: Function, target: Object);
            /**
            * Adds Relative data of Armature data manager.
            */
            addRelativeData(configFilePath: string);
            /**
            * Add sprite frame to CCSpriteFrameCache, it will save display name and it&#39;s relative image name
            */
            addSpriteFrameFromFile(plistPath: string, imagePath: string, configFilePath: string);
            /**
            * Adds texture data to Armature data manager.
            */
            addTextureData(id: string, textureData: TextureData);
            /**
            * Clear data
            */
            clear();
            /**
            * Gets animationData by id
            */
            getAnimationData(id: string);
            /**
            * Returns animation data of Armature data manager.
            */
            getAnimationDatas();
            /**
            * Gets armatureData by id
            */
            getArmatureData(id: string);
            /**
            * Returns armature Data of Armature data manager.
            */
            getArmatureDatas();
            /**
            * Gets RelativeData of Armature data manager.
            */
            getRelativeData(configFilePath: string);
            /**
            * Gets textureData by id
            */
            getTextureData(id: string);
            /**
            * Returns texture data of Armature data manager.
            */
            getTextureDatas();
            /**
            * Returns whether or not need auto load sprite file
            */
            isAutoLoadSpriteFile();
            /**
            * Removes animation data
            */
            removeAnimationData(id: string);
            /**
            * Removes armature data from armature data manager.
            */
            removeArmatureData(id: string);
            /**
            * Removes armature cache data by configFilePath
            */
            removeArmatureFileInfo(configFilePath: string);
            /**
            * Removes texture data by id
            */
            removeTextureData(id: string);
        }
}
declare module ccs {
        /**
        * 
								The armature display data class
								
							
        */
        export class ArmatureDisplayData extends ccs.DisplayData {
            /**
            * The armature display data class
            */
            constructor();
            /**
            * Construction of ccs.ArmatureDisplayData
            */
            ctor();
        }
}
declare module ccs {
        /**
        * 
								
    The base data class for Armature. it contains position, zOrder, skew, scale, color datas.                                       
    x y skewX skewY scaleX scaleY used to calculate transform matrix                                                                
    skewX, skewY can have rotation effect                                                                                           
    To get more matrix information, you can have a look at this pape : http://www.senocular.com/flash/tutorials/transformmatrix/    

								
							
        */
        export class BaseData extends ccs.Class {
            /**
            * 
    The base data class for Armature.
            */
            constructor();
            /**
            * Copy data from node
            */
            copy(node: BaseData);
            /**
            * Construction of ccs.BaseData
            */
            ctor();
            /**
            * Returns the color of ccs.BaseData
            */
            getColor();
            /**
            * Sets color to base data.
            */
            setColor(color: cc.Color);
            /**
            * Calculate two baseData&#39;s between value(to - from) and set to self
            */
            subtract(from: BaseData, to: BaseData, limit: boolean);
        }
}
declare module ccs {
        /**
        * 
								The Bone of Armature, it has bone data, display manager and transform data for armature.
								
							
        */
        export class Bone extends ccs.Node {
            /**
            * The Bone of Armature, it has bone data, display manager and transform data for armature.
            */
            constructor(name: string);
            /**
            * Adds a child to this bone, and it will let this child call setParent(ccs.Bone) function to set self to it&#39;s parent
            */
            addChildBone(child: Bone);
            /**
            * Add display and use  _displayData init the display.
            */
            addDisplay(displayData: DisplayData, index: number);
            /**
            * Changes display by index
            */
            changeDisplayByIndex(index: number, force: boolean);
            /**
            * Changes display by name
            */
            changeDisplayByName(name: string, force: boolean);
            /**
            * Changes display with index
            */
            changeDisplayWithIndex(index: number, force: boolean);
            /**
            * Changes display with name
            */
            changeDisplayWithName(name: string, force: boolean);
            /**
            * Allocates and initializes a bone.
            */
            static create();
            /**
            * Returns the armature reference of ccs.Bone.
            */
            getArmature();
            /**
            * Returns the blendFunc of ccs.Bone.
            */
            getBlendFunc();
            /**
            * Returns boneData of ccs.Bone.
            */
            getBoneData();
            /**
            * Returns ccs.Bone&#39;s child armature.
            */
            getChildArmature();
            /**
            * Returns the children of ccs.Bone
            */
            getChildrenBone();
            /**
            * Returns the collider body list in this bone.
            */
            getColliderBodyList();
            /**
            * Returns the collide detector of ccs.Bone.
            */
            getColliderDetector();
            /**
            * Returns collider filter of ccs.Bone.
            */
            getColliderFilter();
            /**
            * displayManager dirty getter
            */
            getDisplayManager();
            /**
            * Returns the display render node.
            */
            getDisplayRenderNode();
            /**
            * Returns the type of display render node
            */
            getDisplayRenderNodeType();
            /**
            * Returns whether is ignore movement bone data.
            */
            getIgnoreMovementBoneData();
            /**
            * Return the worldTransform of ccs.Bone.
            */
            getNodeToArmatureTransform();
            /**
            * Returns the world transform of ccs.Bone.
            */
            getNodeToWorldTransform();
            /**
            * Returns the parent bone of ccs.Bone.
            */
            getParentBone();
            /**
            * Return the tween of ccs.Bone
            */
            getTween();
            /**
            * Returns the tweenData of ccs.Bone.
            */
            getTweenData();
            /**
            * Returns the world information of ccs.Bone.
            */
            getWorldInfo();
            /**
            * Initializes a ccs.Bone with the specified name
            */
            init(name: string);
            /**
            * Returns the blend dirty flag whether is dirty.
            */
            isBlendDirty();
            /**
            * Returns whether is ignore movement bone data.
            */
            isIgnoreMovementBoneData();
            /**
            * Returns ccs.Bone&#39;s transform dirty flag whether is dirty.
            */
            isTransformDirty();
            /**
            * Returns the worldTransform of ccs.Bone.
            */
            nodeToArmatureTransform();
            /**
            * 
            */
            nodeToWorldTransform();
            /**
            * Removes a child bone
            */
            removeChildBone(bone: Bone, recursion: boolean);
            /**
            * Removes display by index.
            */
            removeDisplay(index: number);
            /**
            * Removes itself from its parent ccs.Bone.
            */
            removeFromParent(recursion: boolean);
            /**
            * Sets the armature reference to ccs.Bone.
            */
            setArmature(armature: Armature);
            /**
            * Sets blend dirty flag
            */
            setBlendDirty(dirty: boolean);
            /**
            * Sets BlendFunc to ccs.Bone.
            */
            setBlendFunc(blendFunc: any, dst: number);
            /**
            * Sets the boneData to ccs.Bone.
            */
            setBoneData(boneData: BoneData);
            /**
            * Sets ccs.Bone&#39;s child armature
            */
            setChildArmature(armature: Armature);
            /**
            * Sets collider filter to ccs.Bone.
            */
            setColliderFilter(filter: ColliderFilter);
            /**
            * When CCArmature play a animation, if there is not a CCMovementBoneData of this bone in this CCMovementData, this bone will hide.
            */
            setIgnoreMovementBoneData(bool: boolean);
            /**
            * Sets the local zOrder to ccs.Bone.
            */
            setLocalZOrder(zOrder: number);
            /**
            * Sets parent bone to ccs.Bone.
            */
            setParentBone(parent: Bone);
            /**
            * Sets ccs.Bone&#39;s transform dirty flag.
            */
            setTransformDirty(dirty: boolean);
            /**
            * Updates worldTransform by tween data and updates display state
            */
            update(delta: number);
            /**
            * Updates display color
            */
            updateColor();
            /**
            * Updates display color
            */
            updateDisplayedColor(color: cc.Color);
            /**
            * Updates display opacity
            */
            updateDisplayedOpacity(opacity: number);
            /**
            * Updates display zOrder
            */
            updateZOrder();
        }
}
declare module ccs {
        /**
        * 
								
     BoneData used to init a Bone.                                                               
     BoneData keeps a DisplayData list, a Bone can have many display to change.                  
     The display information saved in the DisplayData                                            

								
							
        */
        export class BoneData extends ccs.BaseData {
            /**
            * 
     BoneData used to init a Bone.
            */
            constructor();
            /**
            * Adds display data to list
            */
            addDisplayData(displayData: DisplayData);
            /**
            * Construction of ccs.BoneData
            */
            ctor();
            /**
            * Returns display data with index.
            */
            getDisplayData(index: number);
            /**
            * Initializes a ccs.BoneData
            */
            init();
        }
}
declare module ccs {
        /**
        * 
								The same as cc.Class
								
							
        */
        export class Class  {
            /**
            * The same as cc.Class
            */
            constructor();
        }
}
declare module ccs {
        /**
        * 
								Base class for ccs.ColliderBody
								
							
        */
        export class ColliderBody extends ccs.Class {
            /**
            * Base class for ccs.ColliderBody
            */
            constructor();
            /**
            * get calculated vertex list
            */
            getCalculatedVertexList();
            /**
            * colliderFilter getter
            */
            getColliderFilter();
            /**
            * contourData getter
            */
            getContourData();
            /**
            * shape setter
            */
            getShape();
            /**
            * colliderFilter setter
            */
            setColliderFilter(colliderFilter: ColliderFilter);
            /**
            * contourData setter
            */
            setContourData(contourData: ContourData);
            /**
            * shape getter
            */
            setShape(shape: Shape);
        }
}
declare module ccs {
        /**
        * 
								Base class for ccs.ColliderDetector
								
							
        */
        export class ColliderDetector extends ccs.Class {
            /**
            * Base class for ccs.ColliderDetector
            */
            constructor(bone: Bone);
            /**
            * add contourData
            */
            addContourData(contourData: ContourData);
            /**
            * add contourData
            */
            addContourDataList(contourDataList: Array);
            /**
            * get colliderFilter
            */
            getColliderFilter();
            /**
            * remove all body
            */
            removeAll();
            /**
            * remove contourData
            */
            removeContourData();
            /**
            * set colliderFilter
            */
            setColliderFilter(filter: ColliderFilter);
        }
}
declare module ccs {
        /**
        * 
								Base class for ccs.ColliderFilter
								
							
        */
        export class ColliderFilter extends ccs.Class {
            /**
            * Base class for ccs.ColliderFilter
            */
            constructor();
        }
}
declare module ccs {
        /**
        * 
								The attribute component for Cocostudio.
								
							
        */
        export class ComAttribute extends ccs.Component {
            /**
            * The attribute component for Cocostudio.
            */
            constructor();
            /**
            * allocates and initializes a ComAttribute.
            */
            static create();
            /**
            * Construction of ccs.ComAttribute
            */
            ctor();
            /**
            * Returns boolean value from attribute
            */
            getBool(key: string);
            /**
            * Returns double value from attribute
            */
            getDouble(key: string);
            /**
            * Returns float value from attribute
            */
            getFloat(key: string);
            /**
            * Returns int value from attribute
            */
            getInt(key: string);
            /**
            * Returns object value from attribute
            */
            getObject(key: string);
            /**
            * Returns string value from attribute
            */
            getString(key: string);
            /**
            * Initializes a ccs.ComAttribute
            */
            init();
            /**
            * Parses json file.
            */
            parse();
            /**
            * Sets boolean attribute
            */
            setBool(key: string, value: boolean);
            /**
            * Sets double attribute
            */
            setDouble(key: string, value: number);
            /**
            * Sets float attribute
            */
            setFloat(key: string, value: number);
            /**
            * Sets int attribute
            */
            setInt(key: string, value: number);
            /**
            * Sets object attribute
            */
            setObject(key: string, value: Object);
            /**
            * Sets string attribute
            */
            setString(key: string, value: boolean);
        }
}
declare module ccs {
        /**
        * 
								The audio component for Cocostudio.
								
							
        */
        export class ComAudio extends ccs.Component {
            /**
            * The audio component for Cocostudio.
            */
            constructor();
            /**
            * allocates and initializes a ComAudio.
            */
            static create();
            /**
            * Construction of ccs.ComAudio
            */
            ctor();
            /**
            * Stops all audios.
            */
            end();
            /**
            * The volume of the music max value is 1.0,the min value is 0.0 .
            */
            getBackgroundMusicVolume();
            /**
            * The volume of the effects max value is 1.0,the min value is 0.0 .
            */
            getEffectsVolume();
            /**
            * Returns the file path of audio component.
            */
            getFile();
            /**
            * Initializes a ccs.ComAudio.
            */
            init();
            /**
            * Whether the music is playing.
            */
            isBackgroundMusicPlaying();
            /**
            * Returns audio component whether plays loop
            */
            isLoop();
            /**
            * The callback calls when a audio component enter stage.
            */
            onExit();
            /**
            * Pause all effects
            */
            pauseAllEffects();
            /**
            * Pause background music
            */
            pauseBackgroundMusic();
            /**
            * Pause playing sound effect.
            */
            pauseEffect(soundId: number);
            /**
            * Play background music
            */
            playBackgroundMusic(pszFilePath: string, loop: boolean);
            /**
            * Play sound effect.
            */
            playEffect(pszFilePath: string, loop: boolean);
            /**
            * Preload background music resource
            */
            preloadBackgroundMusic(pszFilePath: string);
            /**
            * Preload effect
            */
            preloadEffect(pszFilePath: string);
            /**
            * Resume all effects
            */
            resumeAllEffects();
            /**
            * Resume background music
            */
            resumeBackgroundMusic();
            /**
            * Resume effect
            */
            resumeEffect(soundId: number);
            /**
            * Rewind background music
            */
            rewindBackgroundMusic();
            /**
            * Set the volume of music.
            */
            setBackgroundMusicVolume(volume: number);
            /**
            * Set the volume of sound effects.
            */
            setEffectsVolume(volume: number);
            /**
            * File path setter
            */
            setFile(pszFilePath: string);
            /**
            * Sets audio component whether plays loop
            */
            setLoop(loop: boolean);
            /**
            * stop all effects
            */
            stopAllEffects();
            /**
            * Stop background music
            */
            stopBackgroundMusic(releaseData: string);
            /**
            * Stop effect
            */
            stopEffect(soundId: number);
            /**
            * Unload effect
            */
            unloadEffect(pszFilePath: string);
            /**
            * Indicates whether any background music can be played or not.
            */
            willPlayBackgroundMusic();
        }
}
declare module ccs {
        /**
        * 
								The controller component for Cocostudio.
								
							
        */
        export class ComController extends ccs.Component {
            /**
            * The controller component for Cocostudio.
            */
            constructor();
            /**
            * Allocates and initializes a ComController.
            */
            static create();
            /**
            * Construction of ccs.ComController.
            */
            ctor();
            /**
            * Returns controller component whether is enabled
            */
            isEnabled();
            /**
            * The callback calls when controller component enter stage.
            */
            onEnter();
            /**
            * Sets controller component whether is enabled
            */
            setEnabled(bool: boolean);
        }
}
declare module ccs {
        /**
        * 
								The same as cc.Component
								
							
        */
        export class Component extends ccs.Class {
            /**
            * The same as cc.Component
            */
            constructor();
        }
}
declare module ccs {
        /**
        * 
								The render component for Cocostudio.
								
							
        */
        export class ComRender extends ccs.Component {
            /**
            * The render component for Cocostudio.
            */
            constructor();
            /**
            * allocates and initializes a ComRender.
            */
            static create();
            /**
            * Construction of ccs.ComRender
            */
            ctor(node: cc.Node, comName: string);
            /**
            * Returns a render node
            */
            getNode();
            /**
            * The callback calls when a render component enter stage.
            */
            onEnter();
            /**
            * The callback calls when a render component exit stage.
            */
            onExit();
            /**
            * Sets a render node to component.
            */
            setNode(node: cc.Node);
        }
}
declare module ccs {
        /**
        * 
								The Contour data information of Cocos Armature.
								
							
        */
        export class ContourData  {
            /**
            * The Contour data information of Cocos Armature.
            */
            constructor();
            /**
            * add a vertex object to vertex list
            */
            addVertex(p: cc.Point);
        }
}
declare module ccs {
        /**
        * 
								contour vertex
								
							
        */
        export class ContourVertex2  {
            /**
            * contour vertex
            */
            constructor(x: number, y: number);
        }
}
declare module ccs {
        /**
        * 
								ccs.dataReaderHelper is a singleton object for reading CocoStudio data
								
							
        */
        export class dataReaderHelper  {
            /**
            * ccs.dataReaderHelper is a singleton object for reading CocoStudio data
            */
            constructor();
            /**
            * Translate XML export from Dragon Bone flash tool to data, and save them.
            */
            addDataFromCache(skeleton: Object, dataInfo: DataInfo);
            /**
            * Add armature data from file.
            */
            addDataFromFile(filePath: string);
            /**
            * Adds data from file with Async.
            */
            addDataFromFileAsync(imagePath: string, plistPath: string, filePath: string, selector: any, target: Object);
            /**
            * Adds json armature data to armature data manager.
            */
            addDataFromJson(filePath: string, dataInfo: DataInfo);
            /**
            * Adds json armature data to armature data manager.
            */
            addDataFromJsonCache(dic: Object, dataInfo: DataInfo);
            /**
            * Adds xml armature data to armature data manager.
            */
            addDataFromXML(xml: XMLDocument, dataInfo: DataInfo);
            /**
            * Decodes xml animation data.
            */
            decodeAnimation(animationXML: XMLDocument, dataInfo: DataInfo);
            /**
            * Decodes animation json data.
            */
            decodeAnimationFromJson(json: Object, dataInfo: DataInfo);
            /**
            * decode xml armature data.
            */
            decodeArmature(armatureXML: XMLDocument, dataInfo: DataInfo);
            /**
            * decode json armature data.
            */
            decodeArmatureFromJSON(json: Object, dataInfo: DataInfo);
            /**
            * decode xml bone data.
            */
            decodeBone(boneXML: XMLDocument, parentXML: XMLDocument, dataInfo: DataInfo);
            /**
            * decode xml display data of bone
            */
            decodeBoneDisplay(displayXML: XMLDocument, dataInfo: DataInfo);
            /**
            * Decodes json display data of bone.
            */
            decodeBoneDisplayFromJson(json: Object, dataInfo: DataInfo);
            /**
            * decode json bone data.
            */
            decodeBoneFromJson(json: Object, dataInfo: DataInfo);
            /**
            * Decodes xml data of contour.
            */
            decodeContour(contourXML: XMLDocument, dataInfo: DataInfo);
            /**
            * Decodes json data of contour.
            */
            decodeContourFromJson(json: Object);
            /**
            * Decodes xml data of frame.
            */
            decodeFrame(frameXML: XMLDocument, parentFrameXml: XMLDocument, boneData: BoneData, dataInfo: DataInfo);
            /**
            * Decodes json data of frame.
            */
            decodeFrameFromJson(json: Object, dataInfo: DataInfo);
            /**
            * Decodes xml movement data.
            */
            decodeMovement(movementXML: XMLDocument, armatureData: ArmatureData, dataInfo: DataInfo);
            /**
            * Decodes xml data of bone&#39;s movement.
            */
            decodeMovementBone(movBoneXml: XMLDocument, parentXml: XMLDocument, boneData: BoneData, dataInfo: DataInfo);
            /**
            * Decodes json data of bone&#39;s movement.
            */
            decodeMovementBoneFromJson(json: Object, dataInfo: DataInfo);
            /**
            * Decodes json movement data.
            */
            decodeMovementFromJson(json: Object, dataInfo: DataInfo);
            /**
            * Decodes json data of node.
            */
            decodeNodeFromJson();
            /**
            * Decodes xml data of texture
            */
            decodeTexture(textureXML: XMLDocument, dataInfo: DataInfo);
            /**
            * Decodes json data of Texture.
            */
            decodeTextureFromJson();
            /**
            * Removes config file from config file list.
            */
            removeConfigFile(configFile: string);
        }
}
declare module ccs {
        /**
        * 
								Decorative a display node for Cocos Armature
								
							
        */
        export class DecorativeDisplay extends ccs.Class {
            /**
            * Decorative a display node for Cocos Armature
            */
            constructor();
            /**
            * Allocates and initializes a decorative display.
            */
            static create();
            /**
            * Returns collide detector
            */
            getColliderDetector();
            /**
            * Returns the display node
            */
            getDisplay();
            /**
            * Returns display data
            */
            getDisplayData();
            /**
            * Initializes a ccs.DecorativeDisplay
            */
            init();
            /**
            * Sets collide detector
            */
            setColliderDetector(colliderDetector: ColliderDetector);
            /**
            * Sets display node to decorative
            */
            setDisplay(display: cc.Node);
            /**
            * Sets display data
            */
            setDisplayData(displayData: DisplayData);
        }
}
declare module ccs {
        /**
        * 
								The class use for save display data.
								
							
        */
        export class DisplayData extends ccs.Class {
            /**
            * The class use for save display data.
            */
            constructor();
            /**
            * Changes display name to texture type
            */
            changeDisplayToTexture(displayName: string);
            /**
            * copy data
            */
            copy(displayData: DisplayData);
            /**
            * Construction of ccs.DisplayData
            */
            ctor();
        }
}
declare module ccs {
        /**
        * 
								FrameData saved the frame data needed for armature animation in this Armature.
								
							
        */
        export class FrameData extends ccs.BaseData {
            /**
            * FrameData saved the frame data needed for armature animation in this Armature.
            */
            constructor();
            /**
            * copy data
            */
            copy();
            /**
            * Construction of ccs.FrameData.
            */
            ctor();
        }
}
declare module ccs {
        /**
        * 
								The frame event class for Armature.
								
							
        */
        export class FrameEvent  {
            /**
            * The frame event class for Armature.
            */
            constructor();
        }
}
declare module ccs {
        /**
        * 
								MovementBoneData saved the name, delay, frame list of Bone&#39;s movement.
								
							
        */
        export class MovementBoneData extends ccs.Class {
            /**
            * MovementBoneData saved the name, delay, frame list of Bone&#39;s movement.
            */
            constructor();
            /**
            * Adds frame data to frame list.
            */
            addFrameData(frameData: FrameData);
            /**
            * Construction of ccs.MovementBoneData.
            */
            ctor();
            /**
            * Gets frame data by Index.
            */
            getFrameData(index: number);
            /**
            * Initializes a ccs.MovementBoneData.
            */
            init();
        }
}
declare module ccs {
        /**
        * 
								The movement data information of Cocos Armature.
								
							
        */
        export class MovementData  {
            /**
            * The movement data information of Cocos Armature.
            */
            constructor();
            /**
            * add a movement bone data to dictionary
            */
            addMovementBoneData(movBoneData: MovementBoneData);
            /**
            * add a movement bone data from dictionary by name
            */
            getMovementBoneData();
        }
}
declare module ccs {
        /**
        * 
								The movement event class for Armature.
								
							
        */
        export class MovementEvent  {
            /**
            * The movement event class for Armature.
            */
            constructor();
        }
}
declare module ccs {
        /**
        * 
								The same as cc.Node
								
							
        */
        export class Node extends ccs.Class {
            /**
            * The same as cc.Node
            */
            constructor();
        }
}
declare module ccs {
        /**
        * 
								The particle display data class.
								
							
        */
        export class ParticleDisplayData extends ccs.DisplayData {
            /**
            * The particle display data class.
            */
            constructor();
            /**
            * Construction of ccs.ParticleDisplayData
            */
            ctor();
        }
}
declare module ccs {
        /**
        * 
								The Base Process class for Cocostudio.
								
							
        */
        export class ProcessBase extends ccs.Class {
            /**
            * The Base Process class for Cocostudio.
            */
            constructor();
            /**
            * Constructor of ccs.ProcessBase
            */
            ctor();
            /**
            * Returns animation interval of ccs.ProcessBase
            */
            getAnimationInternal();
            /**
            * Returns the index of current frame.
            */
            getCurrentFrameIndex();
            /**
            * Returns current percent of ccs.ProcessBase
            */
            getCurrentPercent();
            /**
            * Returns loop type of ccs.ProcessBase
            */
            getLoop();
            /**
            * Returns process scale
            */
            getProcessScale();
            /**
            * Returns the raw duration of ccs.ProcessBase
            */
            getRawDuration();
            /**
            * Returns tween easing of ccs.ProcessBase
            */
            getTweenEasing();
            /**
            * Goes to specified frame by frameIndex.
            */
            gotoFrame(frameIndex: number);
            /**
            * Returns whether the animation is complete
            */
            isComplete();
            /**
            * Returns whether the animation is pause
            */
            isPause();
            /**
            * Returns whether the animation is playing
            */
            isPlaying();
            /**
            * Pauses the Process
            */
            pause();
            /**
            * Plays animation by animation name.
            */
            play(durationTo: number, durationTween: number, loop: number, tweenEasing: number);
            /**
            * Resumes the Process
            */
            resume();
            /**
            * Sets animation interval to ccs.ProcessBase.
            */
            setAnimationInternal();
            /**
            * Sets process scale
            */
            setProcessScale();
            /**
            * Stops the Process
            */
            stop();
            /**
            * Update process&#39; state.
            */
            update(dt: number);
            /**
            * Updates will call this handler, you can handle your logic here
            */
            updateHandler();
        }
}
declare module ccs {
        /**
        * 
								RelativeData uses to save plist files, armature files, animations and textures for armature data manager.
								
							
        */
        export class RelativeData  {
            /**
            * RelativeData uses to save plist files, armature files, animations and textures for armature data manager.
            */
            constructor();
        }
}
declare module ccs {
        /**
        * 
								ccs.sceneReader is the reader for Cocos Studio scene editor.
								
							
        */
        export class sceneReader  {
            /**
            * ccs.sceneReader is the reader for Cocos Studio scene editor.
            */
            constructor();
            /**
            * Clear all triggers and stops all sounds.
            */
            clear();
            /**
            * Creates a node with json file that exported by CocoStudio scene editor
            */
            createNodeWithSceneFile();
            /**
            * create UI object from data
            */
            createObject(inputFiles: Object, parenet: cc.Node);
            /**
            * Get a node by tag.
            */
            getNodeByTag(tag: number);
            /**
            * Sets properties from json dictionary.
            */
            setPropertyFromJsonDict(node: cc.Node, dict: Object);
            /**
            * Sets the listener to reader.
            */
            setTarget(selector: any, listener: Object);
            /**
            * Returns the version of ccs.SceneReader.
            */
            version();
        }
}
declare module ccs {
        /**
        * 
								ccs.Bone uses ccs.Skin to displays on screen.
								
							
        */
        export class Skin extends ccs.Sprite {
            /**
            * ccs.Bone uses ccs.Skin to displays on screen.
            */
            constructor(fileName: string, rect: cc.Rect);
            /**
            * allocates and initializes a skin.
            */
            static create(fileName: string, rect: cc.Rect);
            /**
            * allocates and initializes a skin.
            */
            static createWithSpriteFrameName(spriteFrameName: string);
            /**
            * Returns the bone reference of ccs.Skin.
            */
            getBone();
            /**
            * display name getter
            */
            getDisplayName();
            /**
            * Returns skin&#39;s world transform.
            */
            getNodeToWorldTransform();
            /**
            * Returns skin date of ccs.Skin.
            */
            getSkinData();
            /**
            * Initializes with texture file name.
            */
            initWithFile(fileName: string, rect: cc.Rect);
            /**
            * Initializes with sprite frame name
            */
            initWithSpriteFrameName(spriteFrameName: string);
            /**
            * Sets the bone reference to ccs.Skin.
            */
            setBone();
            /**
            * Sets skin data to ccs.Skin.
            */
            setSkinData(skinData: BaseData);
            /**
            * Updates armature skin&#39;s transform with skin transform and bone&#39;s transform.
            */
            updateArmatureTransform();
        }
}
declare module ccs {
        /**
        * 
								The same as cc.Sprite
								
							
        */
        export class Sprite extends ccs.Class {
            /**
            * The same as cc.Sprite
            */
            constructor();
        }
}
declare module ccs {
        /**
        * 
								The sprite display data class.
								
							
        */
        export class SpriteDisplayData extends ccs.DisplayData {
            /**
            * The sprite display data class.
            */
            constructor();
            /**
            * copy data
            */
            copy(displayData: SpriteDisplayData);
            /**
            * Construction of ccs.SpriteDisplayData
            */
            ctor();
        }
}
declare module ccs {
        /**
        * 
								ccs.spriteFrameCacheHelper is a singleton object, it&#39;s a sprite frame cache helper
								
							
        */
        export class spriteFrameCacheHelper  {
            /**
            * ccs.spriteFrameCacheHelper is a singleton object, it&#39;s a sprite frame cache helper
            */
            constructor();
            /**
            * Adds sprite frame from file
            */
            addSpriteFrameFromFile();
            /**
            * Clear the sprite frame cache&#39;s data.
            */
            clear();
            /**
            * Returns texture atlas with texture.
            */
            getTextureAtlasWithTexture();
        }
}
declare module ccs {
        /**
        * 
								The texture data information of Cocos Armature
								
							
        */
        export class TextureData  {
            /**
            * The texture data information of Cocos Armature
            */
            constructor();
            /**
            * Adds a contourData to contourDataList
            */
            addContourData(contourData: ContourData);
            /**
            * gets a contourData from contourDataList by index
            */
            getContourData(index: number);
        }
}
declare module ccs {
        /**
        * 
								use to calculate the matrix of node from parent node
								
							
        */
        export class TransformHelp  {
            /**
            * use to calculate the matrix of node from parent node
            */
            constructor();
            /**
            * 
            */
            static matrixToNode(matrix: cc.AffineTransform, node: BaseData);
            /**
            * 
            */
            static nodeConcat(target: BaseData, source: BaseData);
            /**
            * 
            */
            static nodeSub(target: BaseData, source: BaseData);
            /**
            * 
            */
            static nodeToMatrix(node: BaseData, matrix: cc.AffineTransform);
            /**
            * Calculate a BaseData&#39;s transform matrix from parent node.
            */
            static transformFromParent(bone: BaseData);
        }
}
declare module ccs {
        /**
        * 
								The tween class for Armature.
								
							
        */
        export class Tween extends ccs.ProcessBase {
            /**
            * The tween class for Armature.
            */
            constructor(The: Bone);
            /**
            * Update display index and process the key frame event when arrived a key frame
            */
            arriveKeyFrame(keyFrameData: FrameData);
            /**
            * Allocates and initializes a ArmatureAnimation.
            */
            static create(bone: Bone);
            /**
            * Returns Armature animation of ccs.Tween.
            */
            getAnimation();
            /**
            * Goes to specified frame and pauses frame.
            */
            gotoAndPause(frameIndex: number);
            /**
            * Goes to specified frame and plays frame.
            */
            gotoAndPlay(frameIndex: number);
            /**
            * initializes a ccs.Tween with a CCBone
            */
            init(bone: Bone);
            /**
            * Plays the tween.
            */
            play(movementBoneData: MovementBoneData, durationTo: number, durationTween: number, loop: boolean, tweenEasing: TweenType);
            /**
            * Sets Armature animation to ccs.Tween.
            */
            setAnimation(animation: ArmatureAnimation);
            /**
            * Calculate the between value of _from and _to, and give it to between frame data
            */
            setBetween(from: FrameData, to: FrameData, limit: boolean);
            /**
            * Sets movement bone data to ccs.Tween.
            */
            setMovementBoneData();
            /**
            * According to the percent to calculate current color with tween effect
            */
            tweenColorTo(percent: number, node: FrameData);
            /**
            * According to the percent to calculate current CCFrameData with tween effect
            */
            tweenNodeTo(percent: number, node: FrameData);
            /**
            * Calculate which frame arrived, and if current frame have event, then call the event listener
            */
            updateFrameData(currentPercent: number);
            /**
            * update will call this handler, you can handle your logic here
            */
            updateHandler();
        }
}
declare module ccs {
        /**
        * 
								ccs.uiReader is a singleton object which is the reader for Cocos Studio ui.
								
							
        */
        export class uiReader  {
            /**
            * ccs.uiReader is a singleton object which is the reader for Cocos Studio ui.
            */
            constructor();
            /**
            * Resets the states and clear the file design sizes.
            */
            clear();
            /**
            * Gets the design size by filename.
            */
            getFileDesignSize(fileName: string);
            /**
            * Returns the file path
            */
            getFilePath();
            /**
            * Returns the parsed callback map.
            */
            getParseCallBackMap();
            /**
            * Returns the parsed object map.
            */
            getParseObjectMap();
            /**
            * Gets the version number by version string.
            */
            getVersionInteger(str: string);
            /**
            * Registers class type and callback.
            */
            registerTypeAndCallBack(classType: string, ins: objectFactory, object: Object, callback: any);
            /**
            * stores the designSize of UI file.
            */
            storeFileDesignSize(fileName: string, size: cc.Size);
            /**
            * Creates uiWidget from a json file that exported by cocostudio UI editor
            */
            widgetFromJsonFile(fileName: string);
        }
}
declare module ccs {
        /**
        * 
								The base class of widget properties reader. It parse the foundation properties of widget.
								
							
        */
        export class WidgetPropertiesReader extends ccs.Class {
            /**
            * The base class of widget properties reader.
            */
            constructor();
            /**
            * Create a widget object by json object.
            */
            createWidget(jsonDict: Object, fullPath: string, fileName: string);
            /**
            * Parses the widget properties.
            */
            widgetFromJsonDictionary(data: Object);
        }
}
declare module ccs {
        /**
        * 
								The widget properties reader to parse Cocostudio exported file v0.3 -- v1.0
								
							
        */
        export class WidgetPropertiesReader0250 extends ccs.WidgetPropertiesReader {
            /**
            * The widget properties reader to parse Cocostudio exported file v0.3 -- v1.0
            */
            constructor();
            /**
            * Creates a widget by json object.
            */
            createWidget(jsonDict: Object, fullPath: string, fileName: string);
            /**
            * Sets widget&#39;s color, anchor point, flipped properties from json object.
            */
            setColorPropsForWidgetFromJsonDictionary(widget: ccui.Widget, options: Object);
            /**
            * Sets all custom widget&#39;s properties from json dictionary.
            */
            setPropsForAllCustomWidgetFromJsonDictionary();
            /**
            * Sets all widgets&#39; properties from json dictionary.
            */
            setPropsForAllWidgetFromJsonDictionary();
            /**
            * Sets ccui.Button&#39;s properties from json object.
            */
            setPropsForButtonFromJsonDictionary(widget: ccui.Button, options: Object);
            /**
            * Sets ccui.CheckBox&#39;s properties from json object.
            */
            setPropsForCheckBoxFromJsonDictionary(widget: ccui.CheckBox, options: Object);
            /**
            * Sets the container&#39;s properties from json dictionary.
            */
            setPropsForContainerWidgetFromJsonDictionary(widget: ccui.Widget, options: Object);
            /**
            * Sets ccui.ImageView&#39;s properties from json object.
            */
            setPropsForImageViewFromJsonDictionary(widget: ccui.ImageView, options: Object);
            /**
            * Sets ccui.TextAtlas&#39; properties from json object.
            */
            setPropsForLabelAtlasFromJsonDictionary(widget: ccui.TextAtlas, options: Object);
            /**
            * Sets ccui.TextBMFont&#39;s properties from json dictionary.
            */
            setPropsForLabelBMFontFromJsonDictionary(widget: ccui.TextBMFont, options: Object);
            /**
            * Sets ccui.Text&#39;s properties from json object.
            */
            setPropsForLabelFromJsonDictionary(widget: ccui.Text, options: Object);
            /**
            * Sets ccui.Layout&#39;s properties from json object.
            */
            setPropsForLayoutFromJsonDictionary(widget: ccui.Layout, options: Object);
            /**
            * Sets ccui.ListView&#39;s properties from json dictionary.
            */
            setPropsForListViewFromJsonDictionary(widget: ccui.ListView, options: Object);
            /**
            * Sets ccui.LoadingBar&#39;s properties from json dictionary.
            */
            setPropsForLoadingBarFromJsonDictionary(widget: ccui.LoadingBar, options: Object);
            /**
            * Sets ccui.PageView&#39;s properties from json dictionary.
            */
            setPropsForPageViewFromJsonDictionary(widget: ccui.PageView, options: Object);
            /**
            * Sets ccui.ScrollView&#39;s properties from json dictionary.
            */
            setPropsForScrollViewFromJsonDictionary(widget: ccui.ScrollView, options: Object);
            /**
            * Sets ccui.Slider&#39;s properties from json dictionary.
            */
            setPropsForSliderFromJsonDictionary(widget: ccui.Slider, options: Object);
            /**
            * Sets ccui.TextField&#39;s properties from json object.
            */
            setPropsForTextAreaFromJsonDictionary(widget: ccui.TextField, options: Object);
            /**
            * Sets ccui.Button&#39;s text properties from json dictionary.
            */
            setPropsForTextButtonFromJsonDictionary(widget: ccui.Button, options: Object);
            /**
            * Sets ccui.TextField&#39;s properties from json dictionary.
            */
            setPropsForTextFieldFromJsonDictionary(widget: ccui.TextField, options: Object);
            /**
            * Sets widget&#39;s properties from json dictionary.
            */
            setPropsForWidgetFromJsonDictionary(widget: ccui.Widget, options: Object);
            /**
            * Creates a widget by json dictionary.
            */
            widgetFromJsonDictionary(data: Object);
        }
}
declare module ccs {
        /**
        * 
								The widget properties reader to parse Cocostudio exported file v1.0 higher.
								
							
        */
        export class WidgetPropertiesReader0300 extends ccs.WidgetPropertiesReader {
            /**
            * The widget properties reader to parse Cocostudio exported file v1.0 higher.
            */
            constructor();
            /**
            * Creates widget by json object.
            */
            createWidget(jsonDict: Object, fullPath: string, fileName: string);
            /**
            * Sets widget&#39;s color, anchor point, flipped properties from json dictionary.
            */
            setColorPropsForWidgetFromJsonDictionary(widget: ccui.Widget, options: Object);
            /**
            * Sets widget&#39;s custom properties from json dictionary
            */
            setPropsForAllCustomWidgetFromJsonDictionary(classType: string, widget: ccui.Widget, customOptions: Object);
            /**
            * Sets widget&#39;s foundation properties from json dictionary.
            */
            setPropsForAllWidgetFromJsonDictionary(reader: Object, widget: ccui.Widget, options: Object);
            /**
            * Sets ccui.Button&#39;s properties from json dictionary.
            */
            setPropsForButtonFromJsonDictionary(widget: ccui.Button, options: Object);
            /**
            * Sets ccui.CheckBox&#39;s properties from json dictionary.
            */
            setPropsForCheckBoxFromJsonDictionary(widget: ccui.CheckBox, options: Object);
            /**
            * Sets ccui.ImageView&#39;s properties from json dictionary.
            */
            setPropsForImageViewFromJsonDictionary(widget: ccui.ImageView, options: Object);
            /**
            * Sets ccui.TextAtlas&#39;s properties from json dictionary.
            */
            setPropsForLabelAtlasFromJsonDictionary(widget: ccui.TextAtlas, options: Object);
            /**
            * Sets ccui.TextBMFont&#39;s properties from json dictionary.
            */
            setPropsForLabelBMFontFromJsonDictionary(widget: ccui.TextBMFont, options: Object);
            /**
            * Sets ccui.Text&#39;s properties from json dictionary.
            */
            setPropsForLabelFromJsonDictionary(widget: ccui.Text, options: Object);
            /**
            * Sets ccui.Layout&#39;s properties from json dictionary.
            */
            setPropsForLayoutFromJsonDictionary(widget: ccui.Layout, options: Object);
            /**
            * Sets ccui.ListView&#39;s properties from json dictionary.
            */
            setPropsForListViewFromJsonDictionary(widget: ccui.ListView, options: Object);
            /**
            * Sets ccui.LoadingBar&#39;s properties from json dictionary.
            */
            setPropsForLoadingBarFromJsonDictionary(widget: ccui.LoadingBar, options: Object);
            /**
            * Sets ccui.PageView&#39;s properties from json dictionary.
            */
            setPropsForPageViewFromJsonDictionary(widget: ccui.PageView, options: Object);
            /**
            * Sets ccui.ScrollView&#39;s properties from json dictionary.
            */
            setPropsForScrollViewFromJsonDictionary(widget: ccui.ScrollView, options: Object);
            /**
            * Sets ccui.Slider&#39;s properties from json dictionary.
            */
            setPropsForSliderFromJsonDictionary(widget: ccui.Slider, options: Object);
            /**
            * Sets ccui.TextField&#39;s properties from json dictionary.
            */
            setPropsForTextAreaFromJsonDictionary(widget: ccui.TextField, options: Object);
            /**
            * Sets ccui.Button&#39;s text properties from json dictionary.
            */
            setPropsForTextButtonFromJsonDictionary(widget: ccui.Button, options: Object);
            /**
            * Sets ccui.TextField&#39;s text properties from json dictionary.
            */
            setPropsForTextFieldFromJsonDictionary(widget: ccui.TextField, options: Object);
            /**
            * Sets widget&#39;s foundation properties from json dictionary.
            */
            setPropsForWidgetFromJsonDictionary(widget: ccui.Widget, options: Object);
            /**
            * Creates a widget from json dictionary.
            */
            widgetFromJsonDictionary(data: Object);
        }
}
declare module ccui {
        /**
        * 
								The button controls of Cocos UI.
								
							
        */
        export class Button extends ccui.Widget {
            /**
            * The button controls of Cocos UI.
            */
            constructor();
            /**
            * allocates and initializes a UIButton.
            */
            static create(normalImage: string, selectedImage: string, disableImage: string, texType: string);
            /**
            * Allocates and initializes a UIButton.
            */
            ctor(normalImage: string, selectedImage: string, disableImage: string, texType: number);
            /**
            * Returns disable renderer cap insets.
            */
            getCapInsetsDisabledRenderer();
            /**
            * Returns normal renderer cap insets.
            */
            getCapInsetsNormalRenderer();
            /**
            * Returns pressed renderer cap insets.
            */
            getCapInsetsPressedRenderer();
            /**
            * Returns the &quot;class name&quot; of widget.
            */
            getDescription();
            /**
            * Returns title color of ccui.Button
            */
            getTitleColor();
            /**
            * Gets title fontName of ccui.Button.
            */
            getTitleFontName();
            /**
            * Returns title fontSize of ccui.Button.
            */
            getTitleFontSize();
            /**
            * Get the title renderer.
            */
            getTitleRenderer();
            /**
            * Returns title text of ccui.Button
            */
            getTitleText();
            /**
            * Gets the Virtual Renderer of widget.
            */
            getVirtualRenderer();
            /**
            * Returns the renderer size.
            */
            getVirtualRendererSize();
            /**
            * Sets whether ignore the widget size
            */
            ignoreContentAdaptWithSize(ignore: boolean);
            /**
            * Initializes a button.
            */
            init(normalImage: string, selectedImage: string, disableImage: string, texType: number);
            /**
            * Returns button is using scale9 renderer or not.
            */
            isScale9Enabled();
            /**
            * Load dark state texture for button.
            */
            loadTextureDisabled(disabled: string, texType: any);
            /**
            * Load normal state texture for button.
            */
            loadTextureNormal(normal: string, texType: any);
            /**
            * Load selected state texture for button.
            */
            loadTexturePressed(selected: string, texType: any);
            /**
            * Load textures for button.
            */
            loadTextures(normal: string, selected: string, disabled: string, texType: any);
            /**
            * Sets capinsets for button, if button is using scale9 renderer.
            */
            setCapInsets(capInsets: cc.Rect);
            /**
            * Sets capinsets for button, if button is using scale9 renderer.
            */
            setCapInsetsDisabledRenderer(capInsets: cc.Rect);
            /**
            * Sets capinsets for button, if button is using scale9 renderer.
            */
            setCapInsetsNormalRenderer(capInsets: cc.Rect);
            /**
            * Sets capinsets for button, if button is using scale9 renderer.
            */
            setCapInsetsPressedRenderer(capInsets: cc.Rect);
            /**
            * Changes if button can be clicked zoom effect.
            */
            setPressedActionEnabled(enabled: boolean);
            /**
            * Sets if button is using scale9 renderer.
            */
            setScale9Enabled(able: boolean);
            /**
            * Sets title color to ccui.Button.
            */
            setTitleColor(color: cc.Color);
            /**
            * Sets title fontName to ccui.Button.
            */
            setTitleFontName(fontName: string);
            /**
            * Sets title fontSize to ccui.Button
            */
            setTitleFontSize(size: cc.Size);
            /**
            * Sets title text to ccui.Button
            */
            setTitleText(text: string);
        }
}
declare module ccui {
        /**
        * 
								The CheckBox control of Cocos UI.
								
							
        */
        export class CheckBox extends ccui.Widget {
            /**
            * The CheckBox control of Cocos UI.
            */
            constructor();
            /**
            * add a call back function would called when checkbox is selected or unselected.
            */
            addEventListener(selector: Function, target: Object);
            /**
            * add event listener to ccui.CheckBox.
            */
            addEventListenerCheckBox(selector: Function, target: Object);
            /**
            * allocates and initializes a UICheckBox.
            */
            static create(backGround: string, backGroundSeleted: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: number);
            /**
            * allocates and initializes a UICheckBox.
            */
            ctor(backGround: string, backGroundSelected: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: number);
            /**
            * Returns the &quot;class name&quot; of widget.
            */
            getDescription();
            /**
            * 
            */
            getSelectedState();
            /**
            * override &quot;getVirtualRenderer&quot; method of widget.
            */
            getVirtualRenderer();
            /**
            * Returns the content size of Renderer.
            */
            getVirtualRendererSize();
            /**
            * Initializes a checkBox.
            */
            init(backGround: string, backGroundSelected: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: number);
            /**
            * Returns the selected state of ccui.CheckBox.
            */
            isSelected();
            /**
            * Loads background texture for checkbox.
            */
            loadTextureBackGround(backGround: string, texType: any);
            /**
            * Loads disabled state of backGround texture for checkbox.
            */
            loadTextureBackGroundDisabled(backGroundDisabled: string, texType: any);
            /**
            * Loads selected state of background texture for checkbox.
            */
            loadTextureBackGroundSelected(backGroundSelected: string, texType: any);
            /**
            * Loads cross texture for checkbox.
            */
            loadTextureFrontCross(cross: string, texType: any);
            /**
            * Loads frontCrossDisabled texture for checkbox.
            */
            loadTextureFrontCrossDisabled(frontCrossDisabled: string, texType: any);
            /**
            * Loads textures for checkbox.
            */
            loadTextures(backGround: string, backGroundSelected: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: any);
            /**
            * Sets the selected state to ccui.CheckBox
            */
            setSelected(selected: boolean);
            /**
            * 
            */
            setSelectedState();
        }
}
declare module ccui {
        /**
        * 
								The same as cc.Class
								
							
        */
        export class Class  {
            /**
            * The same as cc.Class
            */
            constructor();
        }
}
declare module ccui {
        /**
        * 
								The horizontal box of Cocos UI. Its layout type is ccui.Layout.LINEAR_HORIZONTAL.
								
							
        */
        export class HBox extends ccui.Layout {
            /**
            * The horizontal box of Cocos UI.
            */
            constructor();
            /**
            * Creates a HBox object
            */
            static create(size: cc.Size);
            /**
            * The constructor of ccui.HBox
            */
            ctor(size: cc.Size);
            /**
            * Initialize a HBox.
            */
            init();
            /**
            * Initializes a HBox with size.
            */
            initWithSize();
        }
}
declare module ccui {
        /**
        * 
								ccui.helper is the singleton object which is the Helper object contains some functions for seek widget
								
							
        */
        export class helper  {
            /**
            * ccui.helper is the singleton object which is the Helper object contains some functions for seek widget
            */
            constructor();
            /**
            * Finds a widget whose action tag equals to param name from root widget.
            */
            static seekActionWidgetByActionTag(root: Widget, tag: number);
            /**
            * Finds a widget whose name equals to param name from root widget.
            */
            static seekWidgetByName(root: Widget, name: string);
            /**
            * Finds a widget whose name equals to param name from root widget.
            */
            static seekWidgetByRelativeName(root: Widget, name: string);
            /**
            * Finds a widget whose tag equals to param tag from root widget.
            */
            static seekWidgetByTag(root: Widget, tag: number);
        }
}
declare module ccui {
        /**
        * 
								The ImageView control of Cocos GUI
								
							
        */
        export class ImageView extends ccui.Widget {
            /**
            * The ImageView control of Cocos GUI
            */
            constructor();
            /**
            * Allocates and initializes a UIImageView.
            */
            static create(imageFileName: string, texType: number);
            /**
            * allocates and initializes a ccui.ImageView.
            */
            ctor(imageFileName: string, texType: number);
            /**
            * Returns cap insets of ccui.ImageView.
            */
            getCapInsets();
            /**
            * Returns the &quot;class name&quot; of ccui.ImageView.
            */
            getDescription();
            /**
            * Returns the renderer of ccui.ImageView
            */
            getVirtualRenderer();
            /**
            * Returns the image&#39;s texture size.
            */
            getVirtualRendererSize();
            /**
            * Ignore the imageView&#39;s custom size, true that imageView will ignore it&#39;s custom size, use renderer&#39;s content size, false otherwise.
            */
            ignoreContentAdaptWithSize(ignore: boolean);
            /**
            * Initializes an imageView.
            */
            init(imageFileName: string, texType: number);
            /**
            * Returns ImageView is using scale9 renderer or not.
            */
            isScale9Enabled();
            /**
            * Loads textures for button.
            */
            loadTexture(fileName: string, texType: any);
            /**
            * Sets capinsets for button, if button is using scale9 renderer.
            */
            setCapInsets(capInsets: cc.Rect);
            /**
            * Sets if button is using scale9 renderer.
            */
            setScale9Enabled(able: boolean);
            /**
            * Sets texture rect
            */
            setTextureRect(rect: cc.Rect);
        }
}
declare module ccui {
        /**
        * 
								ccui.Layout is the base class of  ccui.PageView and ccui.ScrollView, it does layout by layout manager
 and clips area by its _clippingStencil when clippingEnabled is true.
								
							
        */
        export class Layout extends ccui.Widget {
            /**
            * ccui.Layout is the base class of  ccui.PageView and ccui.ScrollView, it does layout by layout manager
 and clips area by its _clippingStencil when clippingEnabled is true.
            */
            constructor();
            /**
            * Adds a widget to the container.
            */
            addChild(widget: Widget, zOrder: number, tag: any);
            /**
            * allocates and initializes a UILayout.
            */
            static create();
            /**
            * Allocates and initializes an UILayout.
            */
            ctor();
            /**
            * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
            */
            findNextFocusedWidget(direction: number, current: Widget);
            /**
            * Gets background color of ccui.Layout, if color type is Layout.COLOR_SOLID.
            */
            getBackGroundColor();
            /**
            * Get background opacity value of ccui.Layout.
            */
            getBackGroundColorOpacity();
            /**
            * Get background color type of ccui.Layout.
            */
            getBackGroundColorType();
            /**
            * Gets background color vector of ccui.Layout, if color type is Layout.COLOR_GRADIENT
            */
            getBackGroundColorVector();
            /**
            * Gets background end color of ccui.Layout
            */
            getBackGroundEndColor();
            /**
            * Gets background image capinsets of ccui.Layout.
            */
            getBackGroundImageCapInsets();
            /**
            * Gets backGround image color
            */
            getBackGroundImageColor();
            /**
            * Gets backGround image opacity
            */
            getBackGroundImageOpacity();
            /**
            * Gets background image texture size.
            */
            getBackGroundImageTextureSize();
            /**
            * Gets background start color of ccui.Layout
            */
            getBackGroundStartColor();
            /**
            * Gets clipping type of ccui.Layout
            */
            getClippingType();
            /**
            * Returns the &quot;class name&quot; of widget.
            */
            getDescription();
            /**
            * Gets LayoutType of ccui.Layout.
            */
            getLayoutType();
            /**
            * override &quot;init&quot; method of widget.
            */
            init();
            /**
            * Get whether background image is use scale9 renderer.
            */
            isBackGroundImageScale9Enabled();
            /**
            * Gets if layout is clipping enabled.
            */
            isClippingEnabled();
            /**
            * Gets whether enable focus loop
            */
            isLoopFocus();
            /**
            * Returns whether the layout will pass the focus to its children or not.
            */
            isPassFocusToChild();
            /**
            * Calls its parent&#39;s onEnter, and calls its clippingStencil&#39;s onEnter if clippingStencil isn&#39;t null.
            */
            onEnter();
            /**
            * Calls its parent&#39;s onExit, and calls its clippingStencil&#39;s onExit if clippingStencil isn&#39;t null.
            */
            onExit();
            /**
            * To specify a user-defined functor to decide which child widget of the layout should get focused
            */
            onPassFocusToChild(direction: number, current: Widget);
            /**
            * Removes all children from the container with a cleanup, and sets the layout dirty flag to true.
            */
            removeAllChildren(cleanup: boolean);
            /**
            * Removes all children from the container, do a cleanup to all running actions depending on the cleanup parameter,
and sets the layout dirty flag to true.
            */
            removeAllChildrenWithCleanup(cleanup: boolean);
            /**
            * Remove the background image of ccui.Layout.
            */
            removeBackGroundImage();
            /**
            * Removes child widget from ccui.Layout, and sets the layout dirty flag to true.
            */
            removeChild(widget: Widget, cleanup: boolean);
            /**
            * request do layout, it will do layout at visit calls
            */
            requestDoLayout();
            /**
            * Sets background color for layout, if color type is Layout.COLOR_SOLID
            */
            setBackGroundColor(color: cc.Color, endColor: cc.Color);
            /**
            * Sets background opacity to ccui.Layout.
            */
            setBackGroundColorOpacity(opacity: number);
            /**
            * Sets Color Type for ccui.Layout.
            */
            setBackGroundColorType(type: any);
            /**
            * Sets background color vector for layout, if color type is Layout.COLOR_GRADIENT
            */
            setBackGroundColorVector(vector: cc.Point);
            /**
            * Sets a background image for layout
            */
            setBackGroundImage(fileName: string, texType: any);
            /**
            * Sets a background image CapInsets for layout, if the background image is a scale9 render.
            */
            setBackGroundImageCapInsets(capInsets: cc.Rect);
            /**
            * Sets backGround image color
            */
            setBackGroundImageColor(color: cc.Color);
            /**
            * Sets backGround image Opacity
            */
            setBackGroundImageOpacity(opacity: number);
            /**
            * Sets background image use scale9 renderer.
            */
            setBackGroundImageScale9Enabled(able: boolean);
            /**
            * Changes if layout can clip it&#39;s content and locChild.
            */
            setClippingEnabled(able: boolean);
            /**
            * Sets clipping type to ccui.Layout
            */
            setClippingType(type: any);
            /**
            * Sets LayoutType to ccui.Layout, LayoutManager will do layout by layout type.
            */
            setLayoutType(type: any);
            /**
            * If a layout is loop focused which means that the focus movement will be inside the layout
            */
            setLoopFocus(loop: boolean);
            /**
            * Specifies whether the layout pass its focus to its child
            */
            setPassFocusToChild();
            /**
            * 
    Calls adaptRenderers (its subclass will override it.
            */
            visit(ctx: any);
        }
}
declare module ccui {
        /**
        * 
								Layout parameter contains a margin and layout parameter type. It uses for ccui.LayoutManager.
								
							
        */
        export class LayoutParameter extends ccui.Class {
            /**
            * Layout parameter contains a margin and layout parameter type.
            */
            constructor();
            /**
            * Clones a ccui.LayoutParameter object from itself.
            */
            clone();
            /**
            * allocates and initializes a LayoutParameter.
            */
            static create();
            /**
            * The constructor of ccui.LayoutParameter.
            */
            ctor();
            /**
            * Gets LayoutParameterType of LayoutParameter.
            */
            getLayoutType();
            /**
            * Gets Margin of LayoutParameter.
            */
            getMargin();
            /**
            * Sets Margin to LayoutParameter.
            */
            setMargin(margin: Margin);
        }
}
declare module ccui {
        /**
        * 
								ccui.linearHorizontalLayoutManager is a singleton object which is the linear horizontal layout manager for ccui.Layout
								
							
        */
        export class linearHorizontalLayoutManager  {
            /**
            * ccui.linearHorizontalLayoutManager is a singleton object which is the linear horizontal layout manager for ccui.Layout
            */
            constructor();
        }
}
declare module ccui {
        /**
        * 
								The linear of Layout parameter. its parameter type is ccui.LayoutParameter.LINEAR.
								
							
        */
        export class LinearLayoutParameter extends ccui.LayoutParameter {
            /**
            * The linear of Layout parameter.
            */
            constructor();
            /**
            * allocates and initializes a LinearLayoutParameter.
            */
            static create();
            /**
            * The constructor of ccui.LinearLayoutParameter.
            */
            ctor();
            /**
            * Gets LinearGravity of LayoutParameter.
            */
            getGravity();
            /**
            * Sets LinearGravity to LayoutParameter.
            */
            setGravity(gravity: number);
        }
}
declare module ccui {
        /**
        * 
								ccui.linearVerticalLayoutManager is a singleton object which is the linear vertical layout manager for ccui.Layout.
								
							
        */
        export class linearVerticalLayoutManager  {
            /**
            * ccui.linearVerticalLayoutManager is a singleton object which is the linear vertical layout manager for ccui.Layout.
            */
            constructor();
        }
}
declare module ccui {
        /**
        * 
								The list view control of Cocos UI.
								
							
        */
        export class ListView extends ccui.ScrollView {
            /**
            * The list view control of Cocos UI.
            */
            constructor();
            /**
            * add child to ListView
            */
            addChild(widget: cc.Node, zOrder: number, tag: any);
            /**
            * Adds event listener to ccui.ListView.
            */
            addEventListener(selector: Function, target: Object);
            /**
            * Adds event listener to ccui.ListView.
            */
            addEventListenerListView(selector: Function, target: Object);
            /**
            * allocates and initializes a UIListView.
            */
            static create();
            /**
            * allocates and initializes a UIListView.
            */
            ctor();
            /**
            * provides a public _doLayout function for Editor.
            */
            doLayout();
            /**
            * Returns current selected index
            */
            getCurSelectedIndex();
            /**
            * Returns the &quot;class name&quot; of ccui.ListView.
            */
            getDescription();
            /**
            * Returns the index of item.
            */
            getIndex(item: Widget);
            /**
            * Returns a item whose index is same as the parameter.
            */
            getItem(index: number);
            /**
            * Returns the item container.
            */
            getItems();
            /**
            * Returns the margin between each item.
            */
            getItemsMargin();
            /**
            * Initializes a ccui.ListView.
            */
            init();
            /**
            * Push back custom item into ccui.ListView.
            */
            insertCustomItem(item: Widget, index: number);
            /**
            * Insert a default item(create by a cloned model) into ListView.
            */
            insertDefaultItem(index: number);
            /**
            * Intercept touch event, handle its child&#39;s touch event.
            */
            interceptTouchEvent(eventType: number, sender: Widget, touch: cc.Touch);
            /**
            * Push back custom item into ListView.
            */
            pushBackCustomItem(item: Widget);
            /**
            * Push back a default item(create by a cloned model) into ListView.
            */
            pushBackDefaultItem();
            /**
            * Refreshes list view.
            */
            refreshView();
            /**
            * Removes all children from ccui.ListView.
            */
            removeAllChildren();
            /**
            * Removes all children from ccui.ListView and do a cleanup all running actions depending on the cleanup parameter.
            */
            removeAllChildrenWithCleanup(cleanup: boolean);
            /**
            * Removes all items from ccui.ListView.
            */
            removeAllItems();
            /**
            * remove child from ListView
            */
            removeChild(widget: cc.Node, cleanup: boolean);
            /**
            * Removes a item whose index is same as the parameter.
            */
            removeItem(index: number);
            /**
            * Removes the last item of ccui.ListView.
            */
            removeLastItem();
            /**
            * Requests refresh list view.
            */
            requestRefreshView();
            /**
            * Changes scroll direction of ccui.ListView.
            */
            setDirection(dir: any);
            /**
            * Changes the gravity of ListView.
            */
            setGravity(gravity: any);
            /**
            * Sets a item model for ListView.
            */
            setItemModel(model: Widget);
            /**
            * Changes the margin between each item.
            */
            setItemsMargin(margin: number);
        }
}
declare module ccui {
        /**
        * 
								The LoadingBar control of Cocos UI.
								
							
        */
        export class LoadingBar extends ccui.Widget {
            /**
            * The LoadingBar control of Cocos UI.
            */
            constructor();
            /**
            * Allocates and initializes a UILoadingBar.
            */
            static create(textureName: string, percentage: number);
            /**
            * allocates and initializes a UILoadingBar.
            */
            ctor(textureName: string, percentage: number);
            /**
            * Returns cap insets for loadingBar.
            */
            getCapInsets();
            /**
            * Returns the &quot;class name&quot; of widget.
            */
            getDescription();
            /**
            * Returns the progress direction of LoadingBar.
            */
            getDirection();
            /**
            * Returns the progress direction of LoadingBar.
            */
            getPercent();
            /**
            * Returns the renderer of ccui.LoadingBar
            */
            getVirtualRenderer();
            /**
            * Returns the texture size of renderer.
            */
            getVirtualRendererSize();
            /**
            * Ignore the LoadingBar&#39;s custom size,  if ignore is true that LoadingBar will ignore it&#39;s custom size, use renderer&#39;s content size, false otherwise.
            */
            ignoreContentAdaptWithSize(ignore: boolean);
            /**
            * Returns LoadingBar is using scale9 renderer or not.
            */
            isScale9Enabled();
            /**
            * Loads texture for LoadingBar.
            */
            loadTexture(texture: string, texType: any);
            /**
            * Sets capinsets for LoadingBar, if LoadingBar is using scale9 renderer.
            */
            setCapInsets(capInsets: cc.Rect);
            /**
            * Sets the contentSize of ccui.LoadingBar
            */
            setContentSize(contentSize: any, height: number);
            /**
            * Changes the progress direction of LoadingBar.
            */
            setDirection(dir: any);
            /**
            * The current progress of loadingBar
            */
            setPercent(percent: number);
            /**
            * Sets if LoadingBar is using scale9 renderer.
            */
            setScale9Enabled(enabled: boolean);
        }
}
declare module ccui {
        /**
        * 
								Base class for ccui.Margin
								
							
        */
        export class Margin extends ccui.Class {
            /**
            * Base class for ccui.Margin
            */
            constructor();
            /**
            * Constructor of ccui.Margin.
            */
            ctor(margin: any, top: number, right: number, bottom: number);
            /**
            * Checks target whether equals itself.
            */
            equals(target: Margin);
            /**
            * Sets boundary of margin
            */
            setMargin(l: number, t: number, r: number, b: number);
        }
}
declare module ccui {
        /**
        * 
								that same as cc.Node
								
							
        */
        export class Node extends ccui.Class {
            /**
            * that same as cc.Node
            */
            constructor();
        }
}
declare module ccui {
        /**
        * 
								The PageView control of Cocos UI.
								
							
        */
        export class PageView extends ccui.Layout {
            /**
            * The PageView control of Cocos UI.
            */
            constructor();
            /**
            * Adds event listener to ccui.PageView.
            */
            addEventListener(selector: Function, target: Object);
            /**
            * Adds event listener to ccui.PageView.
            */
            addEventListenerPageView(selector: Function, target: Object);
            /**
            * Adds a page to ccui.PageView.
            */
            addPage(page: Layout);
            /**
            * Add a widget to a page of PageView.
            */
            addWidgetToPage(widget: Widget, pageIdx: number, forceCreate: boolean);
            /**
            * allocates and initializes a UIPageView.
            */
            static create();
            /**
            * Allocates and initializes a UIPageView.
            */
            ctor();
            /**
            * Returns current page index
            */
            getCurPageIndex();
            /**
            * Gets the _customScrollThreshold.
            */
            getCustomScrollThreshold();
            /**
            * Returns the &quot;class name&quot; of ccui.PageView.
            */
            getDescription();
            /**
            * Returns the layout type of ccui.PageView.
            */
            getLayoutType();
            /**
            * Returns a page from PageView by index
            */
            getPage(index: number);
            /**
            * Returns all pages of PageView
            */
            getPages();
            /**
            * Initializes a ccui.PageView.
            */
            init();
            /**
            * Inserts a page in the specified location.
            */
            insertPage(page: Layout, idx: number);
            /**
            * Intercept touch event, handle its child&#39;s touch event.
            */
            interceptTouchEvent(eventType: number, sender: Widget, touch: cc.Touch);
            /**
            * Gets the UsingCustomScrollThreshold
            */
            isUsingCustomScrollThreshold();
            /**
            * Calls the parent class&#39; onEnter and schedules update function.
            */
            onEnter();
            /**
            * The touch canceled event callback handler of ccui.PageView.
            */
            onTouchCancelled(touch: cc.Touch, event: cc.Event);
            /**
            * The touch ended event callback handler of ccui.PageView.
            */
            onTouchEnded(touch: cc.Touch, event: cc.Event);
            /**
            * The touch moved event callback handler of ccui.PageView.
            */
            onTouchMoved(touch: cc.Touch, event: cc.Event);
            /**
            * Removes all pages from PageView
            */
            removeAllPages();
            /**
            * Removes a page from PageView.
            */
            removePage(page: Layout);
            /**
            * Removes a page at index of PageView.
            */
            removePageAtIndex(index: number);
            /**
            * scroll PageView to index.
            */
            scrollToPage(idx: number);
            /**
            * Set CustomScrollThreshold
            */
            setCustomScrollThreshold();
            /**
            * Does nothing.
            */
            setLayoutType(type: number);
            /**
            * Set the UsingCustomScrollThreshold
            */
            setUsingCustomScrollThreshold();
            /**
            * Called once per frame.
            */
            update(dt: number);
        }
}
declare module ccui {
        /**
        * 
								that same as cc.Node
								
							
        */
        export class ProtectedNode extends ccui.Node {
            /**
            * that same as cc.Node
            */
            constructor();
        }
}
declare module ccui {
        /**
        * 
								The Relative box for Cocos UI layout.  Its layout type is ccui.Layout.RELATIVE.
								
							
        */
        export class RelativeBox extends ccui.Layout {
            /**
            * The Relative box for Cocos UI layout.
            */
            constructor();
            /**
            * Creates a relative box
            */
            static create(size: cc.Size);
            /**
            * The constructor of ccui.RelativeBox
            */
            ctor(size: cc.Size);
            /**
            * Initializes a relative box.
            */
            init();
            /**
            * Initializes a relative box with size
            */
            initWithSize(size: cc.Size);
        }
}
declare module ccui {
        /**
        * 
								ccui.relativeLayoutManager is the singleton object which is the relative layout manager for ccui.Layout, it has a _doLayout function to do layout.
								
							
        */
        export class relativeLayoutManager  {
            /**
            * ccui.relativeLayoutManager is the singleton object which is the relative layout manager for ccui.Layout, it has a _doLayout function to do layout.
            */
            constructor();
        }
}
declare module ccui {
        /**
        * 
								The relative of layout parameter. Its layout parameter type is ccui.LayoutParameter.RELATIVE.
								
							
        */
        export class RelativeLayoutParameter extends ccui.LayoutParameter {
            /**
            * The relative of layout parameter.
            */
            constructor();
            /**
            * Allocates and initializes a RelativeLayoutParameter.
            */
            static create();
            /**
            * The constructor of ccui.RelativeLayoutParameter
            */
            ctor();
            /**
            * Gets RelativeAlign parameter for LayoutParameter.
            */
            getAlign();
            /**
            * Gets a name in Relative Layout of LayoutParameter.
            */
            getRelativeName();
            /**
            * Gets the key of LayoutParameter.
            */
            getRelativeToWidgetName();
            /**
            * Sets RelativeAlign parameter for LayoutParameter.
            */
            setAlign(align: number);
            /**
            * Sets a name in Relative Layout for LayoutParameter.
            */
            setRelativeName(name: string);
            /**
            * Sets a key for LayoutParameter.
            */
            setRelativeToWidgetName(name: string);
        }
}
declare module ccui {
        /**
        * 
								
A 9-slice sprite for cocos2d UI.                                                                    
                                                                                                    
9-slice scaling allows you to specify how scaling is applied                                        
to specific areas of a sprite. With 9-slice scaling (3x3 grid),                                     
you can ensure that the sprite does not become distorted when                                       
scaled.                                                                                             
								
							
        */
        export class Scale9Sprite extends cc.Node {
            /**
            * 
A 9-slice sprite for cocos2d UI.
            */
            constructor();
            /**
            * add texture loaded event listener
            */
            addLoadedEventListener(callback: Function, target: Object);
            /**
            * Creates a 9-slice sprite with a texture file, a delimitation zone and
with the specified cap insets.
            */
            static create(file: any, rect: cc.Rect, capInsets: cc.Rect);
            /**
            * create a ccui.Scale9Sprite with Sprite frame.
            */
            static createWithSpriteFrame(spriteFrame: cc.SpriteFrame, capInsets: cc.Rect);
            /**
            * create a ccui.Scale9Sprite with a Sprite frame name
            */
            static createWithSpriteFrameName(spriteFrameName: string, capInsets: cc.Rect);
            /**
            * Constructor function.
            */
            ctor(file: any, rect: cc.Rect, capInsets: cc.Rect);
            /**
            * Gets the bottom side inset
            */
            getInsetBottom();
            /**
            * Gets the left side inset
            */
            getInsetLeft();
            /**
            * Gets the right side inset
            */
            getInsetRight();
            /**
            * Gets the top side inset
            */
            getInsetTop();
            /**
            * Original sprite&#39;s size.
            */
            getOriginalSize();
            /**
            * Initializes a ccui.Scale9Sprite.
            */
            init();
            /**
            * Initializes a 9-slice sprite with a SpriteBatchNode.
            */
            initWithBatchNode(batchNode: cc.SpriteBatchNode, rect: cc.Rect, rotated: any, capInsets: cc.Rect);
            /**
            * Initializes a 9-slice sprite with a texture file, a delimitation zone and
with the specified cap insets.
            */
            initWithFile(file: string, rect: cc.Rect, capInsets: cc.Rect);
            /**
            * Initializes a 9-slice sprite with an sprite frame and with the specified
cap insets.
            */
            initWithSpriteFrame();
            /**
            * Initializes a 9-slice sprite with an sprite frame name and with the specified
cap insets.
            */
            initWithSpriteFrameName();
            /**
            * returns whether or not the opacity will be applied using glColor(R,G,B,opacity) or glColor(opacity, opacity, opacity, opacity);
            */
            isOpacityModifyRGB();
            /**
            * Creates and returns a new sprite object with the specified cap insets.
            */
            resizableSpriteWithCapInsets(capInsets: cc.Rect);
            /**
            * Color: conforms to CCRGBAProtocol protocol
            */
            setColor();
            /**
            * Sets the untransformed size of the Scale9Sprite.
            */
            setContentSize(size: any, height: number);
            /**
            * Sets the bottom side inset
            */
            setInsetBottom(insetBottom: number);
            /**
            * Sets the left side inset
            */
            setInsetLeft(insetLeft: number);
            /**
            * Sets the right side inset
            */
            setInsetRight(insetRight: number);
            /**
            * Sets the top side inset
            */
            setInsetTop(insetTop: number);
            /**
            * Opacity: conforms to CCRGBAProtocol protocol
            */
            setOpacity();
            /**
            * sets the premultipliedAlphaOpacity property.
            */
            setOpacityModifyRGB();
            /**
            * set the sprite frame of ccui.Scale9Sprite
            */
            setSpriteFrame(spriteFrame: cc.SpriteFrame);
            /**
            * return  texture is loaded
            */
            textureLoaded();
            /**
            * Update the scale9Sprite with a SpriteBatchNode.
            */
            updateWithBatchNode(batchNode: cc.SpriteBatchNode, originalRect: cc.Rect, rotated: boolean, capInsets: cc.Rect);
        }
}
declare module ccui {
        /**
        * 
								The ScrollView control of Cocos UI
								
							
        */
        export class ScrollView extends ccui.Layout {
            /**
            * The ScrollView control of Cocos UI
            */
            constructor();
            /**
            * Add child to ccui.ScrollView.
            */
            addChild(widget: cc.Node, zOrder: number, tag: any);
            /**
            * Adds callback function called ScrollView event triggered
            */
            addEventListener(selector: Function, target: Object);
            /**
            * Adds callback function called ScrollView event triggered
            */
            addEventListenerScrollView(selector: Function, target: Object);
            /**
            * Add node for scrollView
            */
            addNode(node: cc.Node, zOrder: number, tag: number);
            /**
            * allocates and initializes a UIScrollView.
            */
            static create();
            /**
            * Allocates and initializes a UIScrollView.
            */
            ctor();
            /**
            * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
            */
            findNextFocusedWidget(direction: number, current: Widget);
            /**
            * Gets a child from the container given its name
            */
            getChildByName(name: string);
            /**
            * Gets a child from the container given its tag
            */
            getChildByTag(tag: number);
            /**
            * Returns inner container&#39;s children
            */
            getChildren();
            /**
            * Gets the count of inner container&#39;s children
            */
            getChildrenCount();
            /**
            * Returns the &quot;class name&quot; of ccui.ScrollView.
            */
            getDescription();
            /**
            * Returns scroll direction of ScrollView.
            */
            getDirection();
            /**
            * Gets inner container of ScrollView.
            */
            getInnerContainer();
            /**
            * Returns inner container size of ScrollView.
            */
            getInnerContainerSize();
            /**
            * Returns the layout type of ccui.ScrollView.
            */
            getLayoutType();
            /**
            * Returns a node by tag
            */
            getNodeByTag(tag: number);
            /**
            * Returns all nodes of inner container
            */
            getNodes();
            /**
            * Initializes a ccui.ScrollView.
            */
            init();
            /**
            * Intercept touch event, handle its child&#39;s touch event.
            */
            interceptTouchEvent(event: number, sender: Widget, touch: cc.Touch);
            /**
            * Returns whether bounce is enabled
            */
            isBounceEnabled();
            /**
            * Returns whether inertiaScroll is enabled
            */
            isInertiaScrollEnabled();
            /**
            * Move inner container to bottom boundary of ScrollView.
            */
            jumpToBottom();
            /**
            * Move inner container to bottom and left boundary of ScrollView.
            */
            jumpToBottomLeft();
            /**
            * Move inner container to bottom and right boundary of ScrollView.
            */
            jumpToBottomRight();
            /**
            * Move inner container to left boundary of ScrollView.
            */
            jumpToLeft();
            /**
            * Move inner container to both direction percent position of ScrollView.
            */
            jumpToPercentBothDirection(percent: cc.Point);
            /**
            * Move inner container to horizontal percent position of ScrollView.
            */
            jumpToPercentHorizontal(percent: number);
            /**
            * Move inner container to vertical percent position of ScrollView.
            */
            jumpToPercentVertical(percent: number);
            /**
            * Move inner container to right boundary of ScrollView.
            */
            jumpToRight();
            /**
            * Move inner container to top boundary of ScrollView.
            */
            jumpToTop();
            /**
            * Move inner container to top and left boundary of ScrollView.
            */
            jumpToTopLeft();
            /**
            * Move inner container to top and right boundary of ScrollView.
            */
            jumpToTopRight();
            /**
            * Calls the parent class&#39; onEnter and schedules update function.
            */
            onEnter();
            /**
            * The touch began event callback handler of ccui.ScrollView.
            */
            onTouchBegan(touch: cc.Touch, event: cc.Event);
            /**
            * The touch canceled event callback of ccui.ScrollView.
            */
            onTouchCancelled(touch: cc.Touch, event: cc.Event);
            /**
            * The touch ended event callback handler of ccui.ScrollView.
            */
            onTouchEnded(touch: cc.Touch, event: cc.Event);
            /**
            * The touch moved event callback handler of ccui.ScrollView.
            */
            onTouchMoved(touch: cc.Touch, event: cc.Event);
            /**
            * Removes all children.
            */
            removeAllChildren();
            /**
            * Removes all children.
            */
            removeAllChildrenWithCleanup(cleanup: boolean);
            /**
            * Remove all node from ccui.ScrollView.
            */
            removeAllNodes();
            /**
            * Removes widget child
            */
            removeChild(child: Widget, cleanup: boolean);
            /**
            * Removes a node from ccui.ScrollView.
            */
            removeNode(node: cc.Node);
            /**
            * Removes a node by tag
            */
            removeNodeByTag(tag: number);
            /**
            * Scroll inner container to bottom boundary of ScrollView.
            */
            scrollToBottom(time: number, attenuated: boolean);
            /**
            * Scroll inner container to bottom and left boundary of ScrollView.
            */
            scrollToBottomLeft(time: number, attenuated: boolean);
            /**
            * Scroll inner container to bottom and right boundary of ScrollView.
            */
            scrollToBottomRight(time: number, attenuated: boolean);
            /**
            * Scroll inner container to left boundary of ScrollView.
            */
            scrollToLeft(time: number, attenuated: boolean);
            /**
            * Scroll inner container to both direction percent position of ScrollView.
            */
            scrollToPercentBothDirection(percent: cc.Point, time: number, attenuated: boolean);
            /**
            * Scroll inner container to horizontal percent position of ScrollView.
            */
            scrollToPercentHorizontal(percent: number, time: number, attenuated: boolean);
            /**
            * Scroll inner container to vertical percent position of ScrollView.
            */
            scrollToPercentVertical(percent: number, time: number, attenuated: boolean);
            /**
            * Scroll inner container to right boundary of ScrollView.
            */
            scrollToRight(time: number, attenuated: boolean);
            /**
            * Scroll inner container to top boundary of ScrollView.
            */
            scrollToTop(time: number, attenuated: boolean);
            /**
            * Scroll inner container to top and left boundary of ScrollView.
            */
            scrollToTopLeft(time: number, attenuated: boolean);
            /**
            * Scroll inner container to top and right boundary of ScrollView.
            */
            scrollToTopRight(time: number, attenuated: boolean);
            /**
            * Sets bounce enabled
            */
            setBounceEnabled(enabled: boolean);
            /**
            * Changes scroll direction of ScrollView.
            */
            setDirection(dir: any);
            /**
            * Sets inertiaScroll enabled
            */
            setInertiaScrollEnabled(enabled: boolean);
            /**
            * Changes inner container size of ScrollView.
            */
            setInnerContainerSize(size: cc.Size);
            /**
            * Sets LayoutType of ccui.ScrollView.
            */
            setLayoutType(type: any);
            /**
            * The update callback handler.
            */
            update(dt: number);
        }
}
declare module ccui {
        /**
        * 
								The Slider control of Cocos UI.
								
							
        */
        export class Slider extends ccui.Widget {
            /**
            * The Slider control of Cocos UI.
            */
            constructor();
            /**
            * Adds a callback
            */
            addEventListener(selector: Function, target: Object);
            /**
            * add event listener
            */
            addEventListenerSlider(selector: Function, target: Object);
            /**
            * allocates and initializes a UISlider.
            */
            static create();
            /**
            * allocates and initializes a UISlider.
            */
            ctor();
            /**
            * Returns cap insets for slider.
            */
            getCapInsetsBarRenderer();
            /**
            * Returns cap insets of ProgressBar for slider.
            */
            getCapInsetsProgressBarRenderer();
            /**
            * Returns the &quot;class name&quot; of ccui.LoadingBar.
            */
            getDescription();
            /**
            * Gets the progress direction of slider.
            */
            getPercent();
            /**
            * Returns the bar renderer.
            */
            getVirtualRenderer();
            /**
            * Returns the content size of bar renderer.
            */
            getVirtualRendererSize();
            /**
            * test the point whether location in loadingBar&#39;s bounding box.
            */
            hitTest(pt: cc.Point);
            /**
            * override &quot;ignoreContentAdaptWithSize&quot; method of widget.
            */
            ignoreContentAdaptWithSize(ignore: boolean);
            /**
            * Initializes a ccui.Slider.
            */
            init();
            /**
            * Returns slider is using scale9 renderer or not.
            */
            isScale9Enabled();
            /**
            * Loads texture for slider bar.
            */
            loadBarTexture(fileName: string, texType: any);
            /**
            * Loads dark state texture for slider progress bar.
            */
            loadProgressBarTexture(fileName: string, texType: any);
            /**
            * Load dark state texture for slider ball.
            */
            loadSlidBallTextureDisabled(disabled: string, texType: any);
            /**
            * Loads normal state texture for slider ball.
            */
            loadSlidBallTextureNormal(normal: string, texType: any);
            /**
            * Loads selected state texture for slider ball.
            */
            loadSlidBallTexturePressed(pressed: string, texType: any);
            /**
            * Loads textures for slider ball.
            */
            loadSlidBallTextures(normal: string, pressed: string, disabled: string, texType: any);
            /**
            * Sets capinsets of ProgressBar for slider, if slider is using scale9 renderer.
            */
            setCapInsetProgressBarRenderer(capInsets: cc.Rect);
            /**
            * Sets capinsets for slider, if slider is using scale9 renderer.
            */
            setCapInsets(capInsets: cc.Rect);
            /**
            * Sets capinsets for slider&#39;s renderer, if slider is using scale9 renderer.
            */
            setCapInsetsBarRenderer(capInsets: cc.Rect);
            /**
            * Changes the progress direction of slider.
            */
            setPercent(percent: number);
            /**
            * Sets if slider is using scale9 renderer.
            */
            setScale9Enabled(able: boolean);
        }
}
declare module ccui {
        /**
        * 
        */
        export class TextField extends ccui.Widget {
            /**
            * 
            */
            constructor();
            /**
            * Adds event listener callback.
            */
            addEventListener(target: Object, selector: Function);
            /**
            * Adds event listener to cuci.TextField.
            */
            addEventListenerTextField(target: Object, selector: Function);
            /**
            * Open keyboard and receive input text.
            */
            attachWithIME();
            /**
            * Creates a ccui.TextField.
            */
            static create(placeholder: string, fontName: string, fontSize: number);
            /**
            * allocates and initializes a UITextField.
            */
            ctor(placeholder: string, fontName: string, fontSize: number);
            /**
            * detach with IME
            */
            didNotSelectSelf();
            /**
            * Returns whether attach with IME.
            */
            getAttachWithIME();
            /**
            * Returns the delete backward of ccui.TextField.
            */
            getDeleteBackward();
            /**
            * Returns the &quot;class name&quot; of ccui.TextField.
            */
            getDescription();
            /**
            * Returns whether detach with IME.
            */
            getDetachWithIME();
            /**
            * Returns font name of ccui.TextField.
            */
            getFontName();
            /**
            * Gets font size of ccui.TextField.
            */
            getFontSize();
            /**
            * Returns insertText string of ccui.TextField.
            */
            getInsertText();
            /**
            * Returns the max length of ccui.TextField.
            */
            getMaxLength();
            /**
            * Returns the password style character.
            */
            getPasswordStyleText();
            /**
            * Returns the placeholder string.
            */
            getPlaceHolder();
            /**
            * Returns the color of ccui.TextField&#39;s place holder.
            */
            getPlaceHolderColor();
            /**
            * Returns string value of ccui.TextField.
            */
            getString();
            /**
            * Returns the length of ccui.TextField.
            */
            getStringLength();
            /**
            * Returns textField string value
            */
            getStringValue();
            /**
            * Returns touch size of ccui.TextField.
            */
            getTouchSize();
            /**
            * Returns the renderer of ccui.TextField.
            */
            getVirtualRenderer();
            /**
            * Returns the ccui.TextField&#39;s content size.
            */
            getVirtualRendererSize();
            /**
            * Checks a point if is in ccui.TextField&#39;s space
            */
            hitTest(pt: cc.Point);
            /**
            * Initializes a ccui.TextField.
            */
            init();
            /**
            * Returns Whether to open string length limit.
            */
            isMaxLengthEnabled();
            /**
            * Returns whether to open setting string as password character.
            */
            isPasswordEnabled();
            /**
            * Calls parent class&#39; onEnter and schedules update function.
            */
            onEnter();
            /**
            * The touch began event callback handler.
            */
            onTouchBegan(touchPoint: cc.Point);
            /**
            * Sets attach with IME.
            */
            setAttachWithIME(attach: boolean);
            /**
            * Sets the delete backward of ccui.TextField.
            */
            setDeleteBackward(deleteBackward: boolean);
            /**
            * Sets detach with IME.
            */
            setDetachWithIME(detach: boolean);
            /**
            * Sets font name for ccui.TextField
            */
            setFontName(name: string);
            /**
            * Sets font size for ccui.TextField.
            */
            setFontSize(size: number);
            /**
            * Sets insertText string to ccui.TextField.
            */
            setInsertText(insertText: string);
            /**
            * Sets the max length of ccui.TextField.
            */
            setMaxLength(length: number);
            /**
            * Sets Whether to open string length limit for ccui.TextField.
            */
            setMaxLengthEnabled(enable: boolean);
            /**
            * Sets whether to open setting string as password character.
            */
            setPasswordEnabled(enable: boolean);
            /**
            * Sets the password style character, Only when you turn on setting string as password character, it is valid.
            */
            setPasswordStyleText();
            /**
            * Sets the placeholder string.
            */
            setPlaceHolder(value: string);
            /**
            * Sets the place holder color to ccui.TextField.
            */
            setPlaceHolderColor();
            /**
            * Changes the string value of textField.
            */
            setString(text: string);
            /**
            * Changes the string value of textField.
            */
            setText(text: string);
            /**
            * Sets the text area size to ccui.TextField.
            */
            setTextAreaSize(size: cc.Size);
            /**
            * Sets the text color to ccui.TextField
            */
            setTextColor();
            /**
            * Sets the text horizontal alignment of ccui.TextField.
            */
            setTextHorizontalAlignment();
            /**
            * Sets the text vertical alignment of ccui.TextField.
            */
            setTextVerticalAlignment();
            /**
            * Sets whether use touch area.
            */
            setTouchAreaEnabled();
            /**
            * Sets touch size of ccui.TextField.
            */
            setTouchSize(size: cc.Size);
        }
}
declare module ccui {
        /**
        * 
								The vertical box of Cocos UI. Its layout type is ccui.Layout.LINEAR_VERTICAL.
								
							
        */
        export class VBox extends ccui.Layout {
            /**
            * The vertical box of Cocos UI.
            */
            constructor();
            /**
            * Creates a VBox
            */
            static create(size: cc.Size);
            /**
            * The constructor of ccui.VBox
            */
            ctor(size: cc.Size);
            /**
            * Initializes a VBox.
            */
            init();
            /**
            * Initializes a VBox with size.
            */
            initWithSize(size: cc.Size);
        }
}
declare module ccui {
        /**
        * 
								The base class for ccui controls and layout
								
							
        */
        export class Widget extends ccui.ProtectedNode {
            /**
            * The base class for ccui controls and layout
            */
            constructor();
            /**
            * Adds a node for widget (this function is deleted in -x)
            */
            addNode(node: cc.Node, zOrder: number, tag: number);
            /**
            * Sets the touch event target/selector of the ccui.Widget
            */
            addTouchEventListener(selector: Function, target: Object);
            /**
            * Calls the checkChildInfo of widget&#39;s parent, its subclass will override it.
            */
            checkChildInfo(handleState: number, sender: Widget, touchPoint: cc.Point);
            /**
            * Checks a point if in parent&#39;s area.
            */
            clippingParentAreaContainPoint(pt: cc.Point);
            /**
            * Clones a new widget.
            */
            clone();
            /**
            * allocates and initializes a UIWidget.
            */
            static create();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * A call back function when widget lost of focus.
            */
            didNotSelectSelf();
            /**
            * Dispatch a EventFocus through a EventDispatcher
            */
            dispatchFocusEvent(widgetLostFocus: Widget, widgetGetFocus: Widget);
            /**
            * call this method with parameter true to enable the Android Dpad focus navigation feature
            */
            enableDpadNavigation(enable: boolean);
            /**
            * 
    When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
            */
            findNextFocusedWidget();
            /**
            * Gets the bottom boundary position of this widget.
            */
            getBottomBoundary();
            /**
            * Gets the bottom boundary position of this widget.
            */
            getBottomInParent();
            /**
            * Gets the focused widget of current stage.
            */
            static getCurrentFocusedWidget();
            /**
            * no matter what widget object you call this method on , it will return you the exact one focused widget
            */
            getCurrentFocusedWidget();
            /**
            * Get custom size of ccui.Widget
            */
            getCustomSize();
            /**
            * Returns the &quot;class name&quot; of widget.
            */
            getDescription();
            /**
            * Gets layout parameter
            */
            getLayoutParameter(type: any);
            /**
            * Gets layout size of ccui.Widget.
            */
            getLayoutSize();
            /**
            * Gets the left boundary position of this widget.
            */
            getLeftBoundary();
            /**
            * Gets the left boundary position of this widget.
            */
            getLeftInParent();
            /**
            * Gets node by tag
            */
            getNodeByTag(tag: number);
            /**
            * Returns all children.
            */
            getNodes();
            /**
            * Gets the percent (x,y) of the widget
            */
            getPositionPercent();
            /**
            * Gets the position type of the widget
            */
            getPositionType();
            /**
            * Gets the right boundary position of this widget.
            */
            getRightBoundary();
            /**
            * Gets the right boundary position of this widget.
            */
            getRightInParent();
            /**
            * Returns size of widget
            */
            getSize();
            /**
            * Returns size percent of ccui.Widget
            */
            getSizePercent();
            /**
            * Gets the size type of widget.
            */
            getSizeType();
            /**
            * Gets the top boundary position of this widget.
            */
            getTopBoundary();
            /**
            * Gets the top boundary position of this widget.
            */
            getTopInParent();
            /**
            * Gets the position of touch began event.
            */
            getTouchBeganPosition();
            /**
            * Gets the touch end point of widget when widget is selected.
            */
            getTouchEndPos();
            /**
            * Gets the position of touch end event
            */
            getTouchEndPosition();
            /**
            * Gets the touch move point of widget when widget is selected.
            */
            getTouchMovePos();
            /**
            * Gets the position of touch moved event
            */
            getTouchMovePosition();
            /**
            * Gets the touch began point of widget when widget is selected.
            */
            getTouchStartPos();
            /**
            * Gets the Virtual Renderer of widget.
            */
            getVirtualRenderer();
            /**
            * Gets the content size of widget.
            */
            getVirtualRendererSize();
            /**
            * The direct parent when it&#39;s a widget also, otherwise equals null
            */
            getWidgetParent();
            /**
            * get widget type
            */
            getWidgetType();
            /**
            * Gets world position of ccui.Widget.
            */
            getWorldPosition();
            /**
            * Checks a point if is in widget&#39;s space
            */
            hitTest(pt: cc.Point);
            /**
            * Ignore the widget size
            */
            ignoreContentAdaptWithSize(ignore: boolean);
            /**
            * initializes state of widget.
            */
            init();
            /**
            * Sends the touch event to widget&#39;s parent, its subclass will override it, e.g.
            */
            interceptTouchEvent(eventType: number, sender: Widget, touch: cc.Touch);
            /**
            * Determines if the widget is bright
            */
            isBright();
            /**
            * returns whether clipping parent widget contains point.
            */
            isClippingParentContainsPoint(pt: cc.Point);
            /**
            * Determines if the widget is enabled
            */
            isEnabled();
            /**
            * 
  Returns the flag which indicates whether the widget is flipped horizontally or not.
            */
            isFlippedX();
            /**
            * 
    Return the flag which indicates whether the widget is flipped vertically or not.
            */
            isFlippedY();
            /**
            * Determines if the widget is on focused
            */
            isFocused();
            /**
            * returns whether the widget could accept focus.
            */
            isFocusEnabled();
            /**
            * Determines if the widget is highlighted
            */
            isHighlighted();
            /**
            * Gets whether ignore the content size (custom size)
            */
            isIgnoreContentAdaptWithSize();
            /**
            * Returns whether or not touch is enabled.
            */
            isTouchEnabled();
            /**
            * Calls updateSizeAndPosition and its parent&#39;s onEnter
            */
            onEnter();
            /**
            * Calls unscheduleUpdate and its parent&#39;s onExit
            */
            onExit();
            /**
            * This method is called when a focus change event happens
            */
            onFocusChange(widgetLostFocus: Widget, widgetGetFocus: Widget);
            /**
            * 
   The callback of touch began event.
            */
            onTouchBegan(touch: cc.Touch, event: cc.Event);
            /**
            * A call back function called when widget is selected, and on touch canceled.
            */
            onTouchCancelled(touchPoint: cc.Point);
            /**
            * 
     The callback of touch end event
     It sends event to parent widget by interceptTouchEvent,
     calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
            */
            onTouchEnded();
            /**
            * A call back function called when widget is selected, and on touch long clicked.
            */
            onTouchLongClicked(touchPoint: cc.Point);
            /**
            * 
   The callback of touch moved event.
            */
            onTouchMoved(touch: cc.Touch, event: cc.Event);
            /**
            * Removes all node
            */
            removeAllNodes();
            /**
            * Removes a node from ccui.Widget
            */
            removeNode(node: cc.Node, cleanup: boolean);
            /**
            * Removes node by tag
            */
            removeNodeByTag(tag: number, cleanup: boolean);
            /**
            * when a widget calls this method, it will get focus immediately.
            */
            requestFocus();
            /**
            * Sets whether the widget is bright.
            */
            setBright(bright: boolean);
            /**
            * To set the bright style of ccui.Widget.
            */
            setBrightStyle(style: number);
            /**
            * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer&#39;s contentSize, otherwise the content size is parameter.
            */
            setContentSize(contentSize: any, height: number);
            /**
            * 
    Sets whether the widget is enabled                                                                                    
    true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
            */
            setEnabled(enabled: boolean);
            /**
            * Sets whether the widget should be flipped horizontally or not.
            */
            setFlippedX(flipX: boolean);
            /**
            * Sets whether the widget should be flipped vertically or not.
            */
            setFlippedY(flipY: boolean);
            /**
            * Sets whether the widget is on focused
The default value is false, a widget is default to not on focused
            */
            setFocused(focus: boolean);
            /**
            * sets whether the widget could accept focus.
            */
            setFocusEnabled(enable: boolean);
            /**
            * Sets whether the widget is highlighted.
            */
            setHighlighted();
            /**
            * Gets LayoutParameter of widget.
            */
            setLayoutParameter(parameter: LayoutParameter);
            /**
            * Changes the position (x,y) of the widget .
            */
            setPosition(pos: any, posY: number);
            /**
            * Changes the position (x,y) of the widget
            */
            setPositionPercent(percent: cc.Point);
            /**
            * Changes the position type of the widget
            */
            setPositionType(type: number);
            /**
            * Changes the size that is widget&#39;s size
            */
            setSize(size: cc.Size);
            /**
            * Changes the percent that is widget&#39;s percent size
            */
            setSizePercent(percent: cc.Point);
            /**
            * TEXTURE_RES_TYPE
Changes the size type of widget.
            */
            setSizeType(type: any);
            /**
            * Sets whether the widget is touch enabled.
            */
            setTouchEnabled(enable: boolean);
            /**
            * updates its size by size type and its position by position type.
            */
            updateSizeAndPosition(parentSize: cc.Size);
            /**
            * Calls _adaptRenderers(its subClass will override it) before calls its parent&#39;s visit.
            */
            visit(ctx: any);
        }
}
declare module jsb {
        /**
        * 
        */
        export class AssetsManager  {
            /**
            * 
            */
            constructor();
            /**
            * 
            */
            checkUpdate();
            /**
            * 
            */
            create(arg0: string, arg1: string);
            /**
            * 
            */
            ctor(arg0: string, arg1: string);
            /**
            * 
            */
            downloadFailedAssets();
            /**
            * 
            */
            getLocalManifest();
            /**
            * 
            */
            getRemoteManifest();
            /**
            * 
            */
            getState();
            /**
            * 
            */
            getStoragePath();
            /**
            * 
            */
            update();
        }
}
declare module jsb {
        /**
        * 
        */
        export class EventAssetsManager  {
            /**
            * 
            */
            constructor();
            /**
            * 
            */
            EventAssetsManager(arg0: string, arg1: cc.AssetsManager, arg2: cc.EventAssetsManager::EventCode, arg3: float, arg4: float, arg5: string, arg6: string, arg7: int, arg8: int);
            /**
            * 
            */
            getAssetId();
            /**
            * 
            */
            getAssetsManager();
            /**
            * 
            */
            getCURLECode();
            /**
            * 
            */
            getCURLMCode();
            /**
            * 
            */
            getEventCode();
            /**
            * 
            */
            getMessage();
            /**
            * 
            */
            getPercent();
            /**
            * 
            */
            getPercentByFile();
        }
}
declare module jsb {
        /**
        * 
        */
        export class EventListenerAssetsManager  {
            /**
            * 
            */
            constructor();
            /**
            * 
            */
            create(arg0: cc.AssetsManager, arg1: any);
            /**
            * 
            */
            EventListenerAssetsManager();
            /**
            * 
            */
            init(arg0: cc.AssetsManager, arg1: any);
        }
}
declare module jsb {
        /**
        * 
								ATTENTION: USE jsb.fileUtils INSTEAD OF jsb.FileUtils.
jsb.fileUtils is the native file utils&#39; singleton object,
please refer to Cocos2d-x&#39;s API to know how to use it.
Only available in JSB
								
							
        */
        export class fileUtils  {
            /**
            * ATTENTION: USE jsb.fileUtils INSTEAD OF jsb.FileUtils.
            */
            constructor();
            /**
            * 
            */
            addSearchPath(arg0: string);
            /**
            * 
            */
            addSearchResolutionsOrder(arg0: string);
            /**
            * 
            */
            createDirectories(arg0: string);
            /**
            * 
            */
            createDirectory(arg0: string);
            /**
            * 
            */
            fullPathForFilename(arg0: string);
            /**
            * 
            */
            fullPathFromRelativeFile(arg0: string, arg1: string);
            /**
            * 
            */
            getFileSize(arg0: string);
            /**
            * 
            */
            getSearchPaths();
            /**
            * 
            */
            getSearchResolutionsOrder();
            /**
            * 
            */
            getStringFromFile(arg0: string);
            /**
            * 
            */
            getValueMapFromFile(arg0: string);
            /**
            * 
            */
            getValueVectorFromFile(arg0: string);
            /**
            * 
            */
            getWritablePath();
            /**
            * 
            */
            isAbsolutePath(arg0: string);
            /**
            * 
            */
            isDirectoryExist(arg0: string);
            /**
            * 
            */
            isFileExist(arg0: string);
            /**
            * 
            */
            isPopupNotify();
            /**
            * 
            */
            loadFilenameLookupDictionaryFromFile(arg0: string);
            /**
            * 
            */
            purgeCachedEntries();
            /**
            * 
            */
            removeDirectory(arg0: string);
            /**
            * 
            */
            removeFile(arg0: string);
            /**
            * 
            */
            renameFile(arg0: string, arg1: string, arg2: string);
            /**
            * 
            */
            setSearchPaths(arg0: Array);
            /**
            * 
            */
            setSearchResolutionsOrder(arg0: Array);
            /**
            * 
            */
            writeStringToFile(arg0: string, arg1: string);
            /**
            * 
            */
            writeToFile(arg0: map_object, arg1: string);
        }
}
declare module jsb {
        /**
        * 
        */
        export class Manifest  {
            /**
            * 
            */
            constructor();
            /**
            * 
            */
            getManifestFileUrl();
            /**
            * 
            */
            getPackageUrl();
            /**
            * 
            */
            getVersion();
            /**
            * 
            */
            getVersionFileUrl();
            /**
            * 
            */
            isLoaded();
            /**
            * 
            */
            isVersionLoaded();
        }
}
declare module jsb {
        /**
        * 
								jsb.reflection is a bridge to let you invoke Java static functions.
please refer to this document to know how to use it: http://www.cocos2d-x.org/docs/manual/framework/html5/v3/reflection/en
Only available on iOS/Mac/Android platform
								
							
        */
        export class reflection  {
            /**
            * jsb.reflection is a bridge to let you invoke Java static functions.
            */
            constructor();
            /**
            * 
            */
            callStaticMethod();
        }
}
declare module sp {
        /**
        * 
								
    The skeleton of Spine.                                                                          
    Skeleton has a reference to a SkeletonData and stores the state for skeleton instance,
    which consists of the current pose&#39;s bone SRT, slot colors, and which slot attachments are visible.           
    Multiple skeletons can use the same SkeletonData (which includes all animations, skins, and attachments).     

								
							
        */
        export class Skeleton extends cc.Node {
            /**
            * 
    The skeleton of Spine.
            */
            constructor();
            /**
            * Creates a skeleton object.
            */
            static create(skeletonDataFile: any, atlasFile: any, scale: number);
            /**
            * The constructor of sp.Skeleton.
            */
            ctor();
            /**
            * Finds a bone by name.
            */
            findBone(boneName: string);
            /**
            * Finds a slot by name.
            */
            findSlot(slotName: string);
            /**
            * Returns the attachment for the slot and attachment name.
            */
            getAttachment(slotName: string, attachmentName: string);
            /**
            * Returns the blendFunc of sp.Skeleton.
            */
            getBlendFunc();
            /**
            * Returns the bounding box of sp.Skeleton.
            */
            getBoundingBox();
            /**
            * Return the renderer of attachment.
            */
            getTextureAtlas(regionAttachment: any);
            /**
            * Initializes a sp.Skeleton.
            */
            init();
            /**
            * Initializes sp.Skeleton with Data.
            */
            initWithArgs(skeletonDataFile: any, atlasFile: any, scale: number);
            /**
            * Returns whether to enable premultiplied alpha.
            */
            isOpacityModifyRGB();
            /**
            * Sets the attachment for the slot and attachment name.
            */
            setAttachment(slotName: string, attachmentName: string);
            /**
            * Sets the blendFunc of sp.Skeleton.
            */
            setBlendFunc(src: any, dst: number);
            /**
            * Sets the bones to the setup pose, using the values from the `BoneData` list in the `SkeletonData`.
            */
            setBonesToSetupPose();
            /**
            * Sets whether open debug bones.
            */
            setDebugBones(enable: boolean);
            /**
            * Sets whether open debug solots.
            */
            setDebugSolots(enable: boolean);
            /**
            * Sets the premultiplied alpha value to sp.Skeleton.
            */
            setOpacityModifyRGB(alpha: number);
            /**
            * Sets skeleton data to sp.Skeleton.
            */
            setSkeletonData(skeletonData: ne.SkeletonData, ownsSkeletonData: ne.SkeletonData);
            /**
            * Finds a skin by name and makes it the active skin.
            */
            setSkin(skinName: string);
            /**
            * Sets the slots to the setup pose, using the values from the `SlotData` list in the `SkeletonData`.
            */
            setSlotsToSetupPose();
            /**
            * Sets the time scale of sp.Skeleton.
            */
            setTimeScale(v: number);
            /**
            * Sets the bones and slots to the setup pose.
            */
            setToSetupPose();
            /**
            * Update will be called automatically every frame if &quot;scheduleUpdate&quot; is called when the node is &quot;live&quot;.
            */
            update(dt: number);
            /**
            * Computes the world SRT from the local SRT for each bone.
            */
            updateWorldTransform();
        }
}
declare module sp {
        /**
        * 
								The skeleton animation of spine. It updates animation&#39;s state and skeleton&#39;s world transform.
								
							
        */
        export class SkeletonAnimation extends sp.Skeleton {
            /**
            * The skeleton animation of spine.
            */
            constructor();
            /**
            * Adds an animation to be played delay seconds after the current or last queued animation.
            */
            addAnimation(trackIndex: number, name: string, loop: boolean, delay: number);
            /**
            * Clears track of animation state by trackIndex.
            */
            clearTrack(trackIndex: number);
            /**
            * Clears all tracks of animation state.
            */
            clearTracks();
            /**
            * Creates a skeleton animation object.
            */
            static create(skeletonDataFile: any, atlasFile: any, scale: number);
            /**
            * Returns track entry by trackIndex.
            */
            getCurrent();
            /**
            * Initializes a sp.SkeletonAnimation.
            */
            init();
            /**
            * Set the current animation.
            */
            setAnimation(trackIndex: number, name: string, loop: boolean);
            /**
            * Sets event listener of sp.SkeletonAnimation.
            */
            setAnimationListener(target: Object, callback: Function);
            /**
            * Sets animation state data to sp.SkeletonAnimation.
            */
            setAnimationStateData(stateData: ne.AnimationStateData);
            /**
            * Mix applies all keyframe values, interpolated for the specified time and mixed with the current values.
            */
            setMix(fromAnimation: string, toAnimation: string, duration: number);
            /**
            * Update will be called automatically every frame if &quot;scheduleUpdate&quot; is called when the node is &quot;live&quot;.
            */
            update(dt: number);
        }
}


declare module cc {
    var winSize;
    function color(r, g, b, a);
    function sequence(a, b);
    function spawn(a, b);
    function rotateTo(a, b);
    function scaleTo(a, b, c);
    function moveBy(a, b);
    function tintTo(a, b, c, d);
    function log(a);
    function p(x, y);
}
