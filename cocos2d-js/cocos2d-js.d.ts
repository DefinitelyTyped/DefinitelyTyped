// Type definitions for Cocos2d-JS-v3.2
// Project: http://cocos2d-x.org/
// Definitions by: Johnson Zhong <http://zhongzf.cnblogs.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module cc {
        export class Acceleration  {
            /**
            * the device accelerometer reports values for each axis in units of g-force
            */
            constructor(x, y, z, timestamp);
        }
}
declare module cc {
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
            setOriginalTarget(originalTarget);
            /**
            * set tag number.
            */
            setTag(tag);
            /**
            * The action will modify the target properties.
            */
            setTarget(target);
            /**
            * called before the action start.
            */
            startWithTarget(target);
            /**
            * called every frame with it&#39;s delta time.
            */
            step(dt);
            /**
            * called after the action has finished.
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class ActionEase extends cc.ActionInterval {
            /**
            * Base class for Easing actions
            */
            constructor(action);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action);
            /**
            * Get inner Action.
            */
            getInnerAction();
            /**
            * initializes the action
            */
            initWithAction(action);
            /**
            * Create new action to original operation effect opposite.
            */
            reverse();
            /**
            * called before the action start.
            */
            startWithTarget(target);
            /**
            * Stop the action.
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            step(dt);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class ActionInterval extends cc.FiniteTimeAction {
            /**
            *  An interval action is an action that takes place within a certain period of time.
            */
            constructor(d);
            /**
            * Returns a new clone of the action.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(d);
            /**
            * Implementation of ease motion.
            */
            easing(easeObj);
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
            initWithDuration(d);
            /**
            * Returns true if the action has finished.
            */
            isDone();
            /**
            * Repeats an action a number of times.
            */
            repeat(times);
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
            setAmplitudeRate(amp);
            /**
            * Set this action speed.
            */
            setSpeed(speed);
            /**
            * Changes the speed of an action, making it take longer (speed&gt;1)
or less (speed
            */
            speed(speed);
            /**
            * Start this action with target.
            */
            startWithTarget(target);
            /**
            * called every frame with it&#39;s delta time.
            */
            step(dt);
        }
}
declare module cc {
        export class ActionManager extends cc.Class {
            /**
            * cc.ActionManager is a class that can manage actions.
            */
            constructor();
            /**
            * Adds an action with a target.
            */
            addAction(action, target, paused);
            /**
            * Gets an action given its tag an a target
            */
            getActionByTag(tag, target);
            /**
            * Returns the numbers of actions that are running in a certain target.
            */
            numberOfRunningActionsInTarget(target);
            /**
            * Pauses all running actions, returning a list of targets whose actions were paused.
            */
            pauseAllRunningActions();
            /**
            * Pauses the target: all running actions and newly added actions will be paused.
            */
            pauseTarget(target);
            /**
            * purges the shared action manager.
            */
            purgeSharedManager();
            /**
            * Removes an action given an action reference.
            */
            removeAction(action);
            /**
            * Removes an action given its tag and the target
            */
            removeActionByTag(tag, target);
            /**
            * Removes all actions from all the targets.
            */
            removeAllActions();
            /**
            * Removes all actions from a certain target.
            */
            removeAllActionsFromTarget(target, forceDelete);
            /**
            * Resumes the target.
            */
            resumeTarget(target);
            /**
            * Resume a set of targets (convenience function to reverse a pauseAllRunningActions call)
            */
            resumeTargets(targetsToResume);
            /**
            * 
            */
            update(dt);
        }
}
declare module cc {
        export class ActionTween extends cc.ActionInterval {
            /**
            * cc.ActionTween
cc.ActionTween is an action that lets you update any property of an object.
            */
            constructor(duration, key, from, to);
            /**
            * to copy object with deep copy.
            */
            static clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            static ctor(duration, key, from, to);
            /**
            * initializes the action with the property name (key), and the from and to parameters.
            */
            static initWithDuration(duration, key, from, to);
            /**
            * returns a reversed action.
            */
            static reverse();
            /**
            * Start this tween with target.
            */
            static startWithTarget(target);
            /**
            * Called once per frame.
            */
            static update(dt);
        }
}
declare module cc {
        export class ActionTweenDelegate extends cc.Class {
            /**
            * 
            */
            constructor();
            /**
            * Update Tween Action.
            */
            static updateTweenAction(value, key);
        }
}
declare module cc {
        export class AffineTransform  {
            /**
            * cc.AffineTransform class represent an affine transform matrix.
            */
            constructor(a, b, c, d, tx, ty);
        }
}
declare module cc {
        export class Animate extends cc.ActionInterval {
            /**
            * Animates a sprite given the name of an Animation
            */
            constructor(animation);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(animation);
            /**
            * 
            */
            getAnimation();
            /**
            * 
            */
            initWithAnimation(animation);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * 
            */
            setAnimation(animation);
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class Animation extends cc.Class {
            /**
            * 
    A cc.Animation object is used to perform animations on the cc.Sprite objects.
            */
            constructor(frames, delay, loops);
            /**
            * Adds a frame to a cc.Animation, the frame will be added with one &quot;delay unit&quot;.
            */
            addSpriteFrame(frame);
            /**
            * Adds a frame with an image filename.
            */
            addSpriteFrameWithFile(fileName);
            /**
            * Adds a frame with a texture and a rect.
            */
            addSpriteFrameWithTexture(texture, rect);
            /**
            * Clone the current animation
            */
            clone();
            /**
            * Clone the current animation
            */
            copy(pZone);
            /**
            * Clone the current animation
            */
            copyWithZone(pZone);
            /**
            * Creates an animation.
            */
            static create(frames, delay, loops);
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
            initWithAnimationFrames(arrayOfAnimationFrames, delayPerUnit, loops);
            /**
            * Initializes a cc.Animation with frames and a delay between frames, do not call this method yourself, please pass parameters to constructor to initialize.
            */
            initWithSpriteFrames(frames, delay, loops);
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
            setDelayPerUnit(delayPerUnit);
            /**
            * Sets array of animation frames
            */
            setFrames(frames);
            /**
            * Sets how many times the animation is going to loop.
            */
            setLoops(value);
            /**
            * Sets whether or not it shall restore the original frame when the animation finishes
            */
            setRestoreOriginalFrame(restOrigFrame);
        }
}
declare module cc {
        export class animationCache  {
            /**
            * 
    cc.animationCache is a singleton object that manages the Animations.
            */
            constructor();
            /**
            * Adds a cc.Animation with a name.
            */
            addAnimation(animation, name);
            /**
            * 
   Adds an animations from a plist file.
            */
            addAnimations(plist);
            /**
            * 
    Returns a cc.Animation that was previously added.
            */
            getAnimation(name);
            /**
            * Deletes a cc.Animation from the cache.
            */
            removeAnimation(name);
        }
}
declare module cc {
        export class AnimationFrame extends cc.Class {
            /**
            * 
   cc.AnimationFrame
   A frame of the animation.
            */
            constructor(spriteFrame, delayUnits, userInfo);
            /**
            * Create a new animation frame and copy all contents into it
            */
            clone();
            /**
            * Create a new animation frame and copy all contents into it
            */
            copy(pZone);
            /**
            * Create a new animation frame and copy all contents into it
            */
            copyWithZone(pZone);
            /**
            * Creates an animation frame.
            */
            static create(spriteFrame, delayUnits, userInfo);
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
            initWithSpriteFrame(spriteFrame, delayUnits, userInfo);
            /**
            * Sets how many units of time the frame takes setter
            */
            setDelayUnits(delayUnits);
            /**
            * Sets sprite frame to be used
            */
            setSpriteFrame(spriteFrame);
            /**
            * Sets the user custom information
            */
            setUserInfo(userInfo);
        }
}
declare module cc {
        export class ArrayForObjectSorting  {
            /**
            * Array for object sorting utils
            */
            constructor();
            /**
            * Inserts a given object into array.
            */
            insertSortedObject(addObject);
        }
}
declare module cc {
        export class async  {
            /**
            * 
            */
            constructor();
            /**
            * Do tasks by iterator.
            */
            map(tasks, iterator, callback, target);
            /**
            * Do tasks by iterator limit.
            */
            mapLimit(tasks, limit, iterator, cb, target);
            /**
            * Do tasks parallel.
            */
            parallel(tasks, cb, target);
            /**
            * Do tasks series.
            */
            series(tasks, cb, target);
            /**
            * Do tasks waterfall.
            */
            waterfall(tasks, cb, target);
        }
}
declare module cc {
        export class AsyncPool  {
            /**
            * Async Pool class, a helper of cc.async
            */
            constructor(srcObj, limit, iterator, onEnd, target);
        }
}
declare module cc {
        export class AtlasNode extends cc.Node {
            /**
            * cc.AtlasNode is a subclass of cc.Node, it knows how to render a TextureAtlas object.
            */
            constructor(tile, tileWidth, tileHeight, itemsToRender);
            /**
            * Creates a cc.AtlasNode with an Atlas file the width and height of each item and the quantity of items to render
            */
            static create(tile, tileWidth, tileHeight, itemsToRender);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(tile, tileWidth, tileHeight, itemsToRender);
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
            initWithTexture(texture, tileWidth, tileHeight, itemsToRender);
            /**
            * Initializes an cc.AtlasNode object with an atlas texture file name, the width, the height of each tile and the quantity of tiles to render
            */
            initWithTileFile(tile, tileWidth, tileHeight, itemsToRender);
            /**
            * Get whether color should be changed with the opacity value
            */
            isOpacityModifyRGB();
            /**
            * Set node&#39;s blend function
This function accept either cc.BlendFunc object or source value and destination value
            */
            setBlendFunc(src, dst);
            /**
            * Set node&#39;s color
            */
            setColor(color);
            /**
            * Set node&#39;s opacity
            */
            setOpacity(opacity);
            /**
            * Set whether color should be changed with the opacity value,
if true, node color will change while opacity changes.
            */
            setOpacityModifyRGB(value);
            /**
            * Set the number of quads to be rendered
            */
            setQuadsToDraw(quadsToDraw);
            /**
            * Replace the current texture with a new one
            */
            setTexture(texture);
            /**
            * Set the atlas texture
            */
            setTextureAtlas(value);
            /**
            * Updates the Atlas (indexed vertex array).
            */
            updateAtlasValues();
        }
}
declare module cc {
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
            static playEffect(url, loop);
            /**
            * Play music.
            */
            static playMusic(url, loop);
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
            static setEffectsVolume(volume);
            /**
            * Set the volume of music.
            */
            static setMusicVolume(volume);
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
            static stopMusic(releaseData);
            /**
            * Unload the preloaded effect from internal buffer
            */
            static unloadEffect(url);
            /**
            * Indicates whether any background music can be played or not.
            */
            static willPlayMusic();
        }
}
declare module cc {
        export class BezierBy extends cc.ActionInterval {
            /**
            * An action that moves the target with a cubic Bezier curve by a certain distance.
            */
            constructor(t, c);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(t, c);
            /**
            * Initializes the action.
            */
            initWithDuration(t, c);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class BezierTo extends cc.BezierBy {
            /**
            * An action that moves the target with a cubic Bezier curve to a destination point.
            */
            constructor(t, c);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(t, c);
            /**
            * Initializes the action.
            */
            initWithDuration(t, c);
            /**
            * Start the action with target.
            */
            startWithTarget(target);
        }
}
declare module cc {
        export class BinaryStreamReader  {
            /**
            * Binary Stream Reader
            */
            constructor(binaryData);
        }
}
declare module cc {
        export class Blink extends cc.ActionInterval {
            /**
            * Blinks a cc.Node object by modifying it&#39;s visible attribute
            */
            constructor(duration, blinks);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, blinks);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, blinks);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class CallFunc extends cc.ActionInstant {
            /**
            * Calls a &#39;callback&#39;.
            */
            constructor(selector, selectorTarget, data);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(selector, selectorTarget, data);
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
            initWithFunction(selector, selectorTarget, data);
            /**
            * Set selectorTarget.
            */
            setTargetCallback(sel);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class CardinalSplineBy extends cc.CardinalSplineTo {
            /**
            * Cardinal Spline path.
            */
            constructor(duration, points, tension);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Please use cc.cardinalSplineBy instead.
            */
            static create(duration, points, tension);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, points, tension);
            /**
            * reverse a new cc.CardinalSplineBy
            */
            reverse();
            /**
            * called before the action start.
            */
            startWithTarget(target);
            /**
            * update position of target
            */
            updatePosition(newPos);
        }
}
declare module cc {
        export class CardinalSplineTo extends cc.ActionInterval {
            /**
            * Cardinal Spline path.
            */
            constructor(duration, points, tension);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Please use cc.cardinalSplineTo instead.
            */
            static create(duration, points, tension);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, points, tension);
            /**
            * Points getter
            */
            getPoints();
            /**
            * initializes the action with a duration and an array of points
            */
            initWithDuration(duration, points, tension);
            /**
            * reverse a new cc.CardinalSplineTo.
            */
            reverse();
            /**
            * Points setter
            */
            setPoints(points);
            /**
            * called before the action start.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
            /**
            * update position of target
            */
            updatePosition(newPos);
        }
}
declare module cc {
        export class CatmullRomBy extends cc.CardinalSplineBy {
            /**
            * An action that moves the target with a CatmullRom curve by a certain distance.
            */
            constructor(dt, points);
        }
}
declare module cc {
        export class CatmullRomTo extends cc.CardinalSplineTo {
            /**
            * An action that moves the target with a CatmullRom curve to a destination point.
            */
            constructor(dt, points);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(dt, points);
            /**
            * Initializes the action with a duration and an array of points
            */
            initWithDuration(dt, points);
        }
}
declare module cc {
        export class Class  {
            /**
            * The base Class implementation (does nothing)
            */
            constructor();
            /**
            * Create a new Class that inherits from this Class
            */
            static extend(props);
        }
}
declare module cc {
        export class ClippingNode extends cc.Node {
            /**
            * 
    cc.ClippingNode is a subclass of cc.Node.
            */
            constructor(stencil);
            /**
            * Creates and initializes a clipping node with an other node as its stencil.
            */
            static create(stencil);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(stencil);
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
            init(stencil);
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
            setAlphaThreshold(alphaThreshold);
            /**
            * set whether or not invert of stencil
            */
            setInverted(inverted);
            /**
            * Set stencil.
            */
            setStencil(stencil);
        }
}
declare module cc {
        export class Color  {
            /**
            * Color class, please use cc.color() to construct a color
            */
            constructor(r, g, b, a);
        }
}
declare module cc {
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
            serialize(reader);
            /**
            * Sets component whether is enabled.
            */
            setEnabled(enable);
            /**
            * Sets the name to cc.Component.
            */
            setName(name);
            /**
            * Sets the owner to cc.Component.
            */
            setOwner(owner);
            /**
            * The callback per every frame if it schedules update.
            */
            update(delta);
        }
}
declare module cc {
        export class ComponentContainer extends cc.Class {
            /**
            * The component container for Cocostudio, it has some components.
            */
            constructor();
            /**
            * Adds a component to container
            */
            add(component);
            /**
            * Construction of cc.ComponentContainer
            */
            ctor(node);
            /**
            * Gets component by name.
            */
            getComponent(name);
            /**
            * Returns the container whether is empty.
            */
            isEmpty();
            /**
            * Removes component from container by name or component object.
            */
            remove(name);
            /**
            * Removes all components of container.
            */
            removeAll();
            /**
            * Visit callback by director.
            */
            visit(delta);
        }
}
declare module cc {
        export class configuration  {
            /**
            * cc.configuration is a singleton object which contains some openGL variables
            */
            constructor();
            /**
            * returns whether or not an OpenGL is supported
            */
            checkForGLExtension(searchName);
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
            getValue(key, default_value);
            /**
            * Loads a config file.
            */
            loadConfigFile(url);
            /**
            * Sets a new key/value pair  in the configuration dictionary
            */
            setValue(key, value);
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
        export class ContainerStrategy extends cc.Class {
            /**
            * cc.ContainerStrategy class is the root strategy class of container&#39;s scale strategy,
it controls the behavior of how to scale the cc.container and cc._canvas object
            */
            constructor();
            /**
            * Function to apply this strategy
            */
            apply(view, designedResolution);
            /**
            * Manipulation after applying the strategy
            */
            postApply(view);
            /**
            * Manipulation before appling the strategy
            */
            preApply(The);
        }
}
declare module cc {
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
            apply(view, designedResolution);
            /**
            * Manipulation after applying the strategy
            */
            postApply(view);
            /**
            * Manipulation before applying the strategy
            */
            preApply(view);
        }
}
declare module cc {
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
            addTargetWithActionForControlEvents(target, action, controlEvents);
            /**
            * Returns a point corresponding to the touh location converted into the
control space coordinates.
            */
            getTouchLocation(touch);
            /**
            * Returns a boolean value that indicates whether a touch is inside the bounds of the receiver.
            */
            isTouchInside(touch);
            /**
            * Updates the control layout using its current internal state.
            */
            needsLayout();
            /**
            * Removes a target and action for a particular event (or events) from an internal dispatch table.
            */
            removeTargetWithActionForControlEvents(target, action, controlEvents);
            /**
            * Sends action messages for the given control events.
            */
            sendActionsForControlEvents(controlEvents);
            /**
            * Tells whether the control is enabled
            */
            setEnabled(enabled);
            /**
            * A Boolean value that determines whether the control is highlighted.
            */
            setHighlighted(highlighted);
            /**
            * A Boolean value that determines the control selected state.
            */
            setSelected(selected);
        }
}
declare module cc {
        export class ControlButton extends cc.Control {
            /**
            * CCControlButton: Button control for Cocos2D.
            */
            constructor();
            /**
            * 
            */
            static create(label, backgroundSprite, fontSize);
            /**
            * Adjust the background image.
            */
            doesAdjustBackgroundImage();
            /**
            * Returns the background sprite used for a state.
            */
            getBackgroundSpriteForState(state);
            /**
            * The prefered size of the button, if label is larger it will be expanded.
            */
            getPreferredSize();
            /**
            * Returns the title color used for a state.
            */
            getTitleColorForState(state);
            /**
            * Returns the title used for a state.
            */
            getTitleForState(state);
            /**
            * Returns the title label used for a state.
            */
            getTitleLabelForState(state);
            /**
            * return the title TTF filename to use for the specified state.
            */
            getTitleTTFForState(state);
            /**
            * return the font size of LabelTTF to use for the specified state
            */
            getTitleTTFSizeForState(state);
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
            setBackgroundSpriteForState(sprite, state);
            /**
            * Sets the background spriteFrame to use for the specified button state.
            */
            setBackgroundSpriteFrameForState(spriteFrame, state);
            /**
            * set the margins at once (so we only have to do one call of needsLayout)
            */
            setMargins(marginH, marginV);
            /**
            * Sets the font of the label, changes the label to a CCLabelBMFont if necessary.
            */
            setTitleBMFontForState(fntFile, state);
            /**
            * Sets the color of the title to use for the specified state.
            */
            setTitleColorForState(color, state);
            /**
            * 
Sets the title string to use for the specified state.
            */
            setTitleForState(title, state);
            /**
            * Sets the title label to use for the specified state.
            */
            setTitleLabelForState(titleLabel, state);
            /**
            * Sets the title TTF filename to use for the specified state.
            */
            setTitleTTFForState(fntFile, state);
            /**
            * 
            */
            setTitleTTFSizeForState(size, state);
        }
}
declare module cc {
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
        export class ControlHuePicker extends cc.Control {
            /**
            * ControlHuePicker: HUE picker ui component.
            */
            constructor();
            /**
            * 
            */
            static create(target, pos);
            /**
            * The constructor of cc.ControlHuePicker
            */
            ctor(target, pos);
        }
}
declare module cc {
        export class ControlPotentiometer extends cc.Control {
            /**
            * CCControlPotentiometer: Potentiometer control for Cocos2D.
            */
            constructor();
            /**
            * the angle in degree between line1 and line2.
            */
            angleInDegreesBetweenLineFromPoint_toPoint_toLineFromPoint_toPoint(beginLineA, endLineA, beginLineB, endLineB);
            /**
            * 
            */
            static create(backgroundFile, progressFile, thumbFile);
            /**
            * the distance between the point1 and point2
            */
            distanceBetweenPointAndPoint(point1, point2);
            /**
            * 
            */
            initWithTrackSprite_ProgressTimer_ThumbSprite(trackSprite, progressTimer, thumbSprite);
        }
}
declare module cc {
        export class ControlSaturationBrightnessPicker extends cc.Control {
            /**
            * ControlSaturationBrightnessPicker: Saturation brightness picker ui component.
            */
            constructor();
            /**
            * Creates a cc.ControlSaturationBrightnessPicker
            */
            static create(target, pos);
            /**
            * The constructor of cc.ControlSaturationBrightnessPicker
            */
            ctor(target, pos);
        }
}
declare module cc {
        export class ControlSlider extends cc.Control {
            /**
            * ControlSlider: Slider ui component.
            */
            constructor();
            /**
            * Creates a slider with a given background sprite and a progress bar and a
thumb item.
            */
            static create(bgFile, progressFile, thumbFile);
            /**
            * Initializes a slider with a background sprite, a progress bar and a thumb
item.
            */
            initWithSprites(backgroundSprite, progressSprite, thumbSprite);
            /**
            * Returns the value for the given location.
            */
            valueForLocation(location);
        }
}
declare module cc {
        export class ControlStepper extends cc.Control {
            /**
            * ControlStepper: Stepper ui component.
            */
            constructor();
            /**
            * Creates a cc.ControlStepper
            */
            static create(minusSprite, plusSprite);
            /**
            * Stop the autorepeat.
            */
            stopAutorepeat();
        }
}
declare module cc {
        export class ControlSwitch extends cc.Control {
            /**
            * CCControlSwitch: Switch control ui component
            */
            constructor();
            /**
            * Creates a switch with a mask sprite, on/off sprites for on/off states and a thumb sprite.
            */
            static create(maskSprite, onSprite, offSprite, thumbSprite, onLabel, offLabel);
            /**
            * Creates a switch with a mask sprite, on/off sprites for on/off states, a thumb sprite and an on/off labels.
            */
            initWithMaskSprite(maskSprite, onSprite, offSprite, thumbSprite, onLabel, offLabel);
        }
}
declare module cc {
        export class ControlSwitchSprite extends cc.Sprite {
            /**
            * ControlSwitchSprite: Sprite switch control ui component
            */
            constructor();
        }
}
declare module cc {
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
            update(dt);
        }
}
declare module cc {
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
            convertToGL(uiPoint);
            /**
            * Converts an WebGL coordinate to a view coordinate
Useful to convert node points to window points for calls such as glScissor
Implementation can be found in CCDirectorWebGL
            */
            convertToUI(glPoint);
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
            popToSceneStackLevel(level);
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
            pushScene(scene);
            /**
            * Resume director after pause, if the current scene is not paused, nothing will happen.
            */
            resume();
            /**
            * Run a scene.
            */
            runScene(scene);
            /**
            * Sets the cc.ActionManager associated with this director
            */
            setActionManager(actionManager);
            /**
            * Enables/disables OpenGL alpha blending.
            */
            setAlphaBlending(on);
            /**
            * Sets animation interval
            */
            setAnimationInterval(value);
            /**
            * The size in pixels of the surface.
            */
            setContentScaleFactor(scaleFactor);
            /**
            * Sets the default values based on the CCConfiguration info
            */
            setDefaultValues();
            /**
            * Sets the cc.director delegate.
            */
            setDelegate(delegate);
            /**
            * Enables or disables WebGL depth test.
            */
            setDepthTest(on);
            /**
            * Sets whether display the FPS on the bottom-left corner
            */
            setDisplayStats(displayStats);
            /**
            * Sets whether next delta time equals to zero
            */
            setNextDeltaTimeZero(nextDeltaTimeZero);
            /**
            * Starts the registered next scene
            */
            setNextScene();
            /**
            * Sets Notification Node
            */
            setNotificationNode(node);
            /**
            * Sets the view, where everything is rendered, do not call this function.
            */
            setOpenGLView(openGLView);
            /**
            * Sets an OpenGL projection.
            */
            setProjection(projection);
            /**
            * Sets the cc.Scheduler associated with this director
            */
            setScheduler(scheduler);
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
            drawCardinalSpline(config, tension, segments, lineWidth, color);
            /**
            * draw a CatmullRom curve
            */
            drawCatmullRom(points, segments, lineWidth, color);
            /**
            * draws a circle given the center, radius and number of segments.
            */
            drawCircle(center, radius, angle, segments, drawLineToCenter, lineWidth, color);
            /**
            * draws a cubic bezier path
            */
            drawCubicBezier(origin, control1, control2, destination, segments, lineWidth, color);
            /**
            * draw a dot at a position, with a given radius and color
            */
            drawDot(pos, radius, color);
            /**
            * draws an array of points.
            */
            drawDots(points, radius, color);
            /**
            * draw a polygon with a fill color and line color, copying the vertex list
            */
            drawPoly(verts, fillColor, lineWidth, color);
            /**
            * draw a polygon with a fill color and line color without copying the vertex list
            */
            drawPoly_(verts, fillColor, lineWidth, color);
            /**
            * draws a quad bezier path
            */
            drawQuadBezier(origin, control, destination, segments, lineWidth, color);
            /**
            * draws a rectangle given the origin and destination point measured in points.
            */
            drawRect(origin, destination, fillColor, lineWidth, lineColor);
            /**
            * draw a segment with a radius and color
            */
            drawSegment(from, to, lineWidth, color);
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
            setBlendFunc(blendFunc, dst);
            /**
            * draw color setter
            */
            setDrawColor(color);
            /**
            * line width setter
            */
            setLineWidth(width);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class EaseBezierAction extends cc.ActionEase {
            /**
            * cc.EaseBezierAction action.
            */
            constructor(action);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action.
            */
            static create(action);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Set of 4 reference point
            */
            setBezierParamer(p0, p1, p2, p3);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class EaseBounce extends cc.ActionEase {
            /**
            * cc.EaseBounce abstract class.
            */
            constructor();
            /**
            * 
            */
            bounceTime(time1);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates an ease bounce action.
            */
            static create(action);
            /**
            * Create a action.
            */
            reverse();
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class EaseElastic extends cc.ActionEase {
            /**
            * Ease Elastic abstract class.
            */
            constructor(action, period);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Creates the action with the inner action and the period in radians (default is 0.3).
            */
            static create(action, period);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action, period);
            /**
            * get period of the wave in radians.
            */
            getPeriod();
            /**
            * Initializes the action with the inner action and the period in radians (default is 0.3)
            */
            initWithAction(action, period);
            /**
            * Create a action.
            */
            reverse();
            /**
            * set period of the wave in radians.
            */
            setPeriod(period);
        }
}
declare module cc {
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
            static create(action, period);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action, period);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action, period);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a cc.EaseExponentialOut action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a cc.EaseExponentialInOut action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a cc.EaseExponentialIn action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action, rate);
            /**
            * Create a cc.easeIn action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action, rate);
            /**
            * Create a cc.EaseInOut action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action, rate);
            /**
            * Create a cc.easeIn action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class EaseRateAction extends cc.ActionEase {
            /**
            * Base class for Easing actions with rate parameters
            */
            constructor(action, rate);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action, rate);
            /**
            * get rate value for the actions
            */
            getRate();
            /**
            * Initializes the action with the inner action and the rate parameter
            */
            initWithAction(action, rate);
            /**
            * Create new action to original operation effect opposite.
            */
            reverse();
            /**
            * set rate value for the actions
            */
            setRate(rate);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a cc.EaseSineOut action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a cc.EaseSineInOut action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            static create(action);
            /**
            * Create a cc.EaseSineIn action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class EditBox extends cc.ControlButton {
            /**
            * cc.EditBox is a brief Class for edit box.
            */
            constructor();
            /**
            * create a edit box with size and background-color or
            */
            static create(size, normal9SpriteBg, press9SpriteBg, disabled9SpriteBg);
            /**
            * get the rect of a node in world coordinate frame
            */
            static getRect(node);
        }
}
declare module cc {
        export class EditBoxDelegate extends cc.Class {
            /**
            * 
            */
            constructor();
        }
}
declare module cc {
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
            setUserData(data);
        }
}
declare module cc {
        export class EventFocus extends cc.Event {
            /**
            * The widget focus event.
            */
            constructor();
            /**
            * Constructor function.
            */
            ctor(widgetLoseFocus, widgetGetFocus);
        }
}
declare module cc {
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
            static create(argObj);
            /**
            * Initializes event with type and callback function
            */
            ctor(type, listenerID, callback);
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
            setEnabled(enabled);
        }
}
declare module cc {
        export class eventManager  {
            /**
            * 
 cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching.
            */
            constructor();
            /**
            * Adds a Custom event listener.
            */
            addCustomListener(eventName, callback);
            /**
            * 
Adds a event listener for a specified event.
            */
            addListener(listener, nodeOrPriority);
            /**
            * Dispatches a Custom Event with a event name an optional user data
            */
            dispatchCustomEvent(eventName, optionalUserData);
            /**
            * Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list.
            */
            dispatchEvent(event);
            /**
            * Checks whether dispatching events is enabled
            */
            isEnabled();
            /**
            * Pauses all listeners which are associated the specified target.
            */
            pauseTarget(node, recursive);
            /**
            * Removes all listeners
            */
            removeAllListeners();
            /**
            * Removes all custom listeners with the same event name
            */
            removeCustomListeners(customEventName);
            /**
            * Remove a listener
            */
            removeListener(listener);
            /**
            * Removes all listeners with the same event listener type or removes all listeners of a node
            */
            removeListeners(listenerType, recursive);
            /**
            * Resumes all listeners which are associated the specified target.
            */
            resumeTarget(node, recursive);
            /**
            * Whether to enable dispatching events
            */
            setEnabled(enabled);
            /**
            * Sets listener&#39;s priority with fixed value.
            */
            setPriority(listener, fixedPriority);
        }
}
declare module cc {
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
            setButton(button);
            /**
            * Sets cursor location
            */
            setLocation(x, y);
            /**
            * Sets scroll data
            */
            setScrollData(scrollX, scrollY);
        }
}
declare module cc {
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
        export class FadeIn extends cc.FadeTo {
            /**
            * Fades In an object that implements the cc.RGBAProtocol protocol.
            */
            constructor(duration);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
        }
}
declare module cc {
        export class FadeOut extends cc.FadeTo {
            /**
            * Fades Out an object that implements the cc.RGBAProtocol protocol.
            */
            constructor(duration);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration);
            /**
            * Returns a reversed action.
            */
            reverse();
        }
}
declare module cc {
        export class FadeOutBLTiles extends cc.FadeOutTRTiles {
            /**
            * cc.FadeOutBLTiles action.
            */
            constructor();
            /**
            * Test function
            */
            testFunc(pos, time);
        }
}
declare module cc {
        export class FadeOutDownTiles extends cc.FadeOutUpTiles {
            /**
            * cc.FadeOutDownTiles action.
            */
            constructor();
        }
}
declare module cc {
        export class FadeOutTRTiles extends cc.TiledGrid3DAction {
            /**
            * cc.FadeOutTRTiles action.
            */
            constructor();
            /**
            * Test function
            */
            testFunc(pos, time);
            /**
            * Transform tile
            */
            transformTile(pos, distance);
            /**
            * Turn Off Tile
            */
            turnOffTile(pos);
            /**
            * Turn on Tile
            */
            turnOnTile(pos);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class FadeOutUpTiles extends cc.FadeOutTRTiles {
            /**
            * cc.FadeOutUpTiles action.
            */
            constructor();
        }
}
declare module cc {
        export class FadeTo extends cc.ActionInterval {
            /**
            * Fades an object that implements the cc.RGBAProtocol protocol.
            */
            constructor(duration, opacity);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, opacity);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, opacity);
            /**
            * Start this action with target.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(time);
        }
}
declare module cc {
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
            setDuration(duration);
        }
}
declare module cc {
        export class FlipX extends cc.ActionInstant {
            /**
            * Flips the sprite horizontally.
            */
            constructor(flip);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(flip);
            /**
            * initializes the action with a set flipX.
            */
            initWithFlipX(flip);
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class FlipX3D extends cc.Grid3DAction {
            /**
            * cc.FlipX3D action.
            */
            constructor(duration);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration);
            /**
            * initializes the action with duration
            */
            initWithDuration(duration);
            /**
            * initializes the action with gridSize and duration
            */
            initWithSize(gridSize, duration);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class FlipY extends cc.ActionInstant {
            /**
            * Flips the sprite vertically
            */
            constructor(flip);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(flip);
            /**
            * initializes the action with a set flipY.
            */
            initWithFlipY(flip);
            /**
            * returns a reversed action.
            */
            reverse();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class FlipY3D extends cc.FlipX3D {
            /**
            * cc.FlipY3D action.
            */
            constructor(duration);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class Follow extends cc.Action {
            /**
            * cc.Follow is an action that &quot;follows&quot; a node.
            */
            constructor(followedNode, rect);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(followedNode, rect);
            /**
            * initializes the action with a set boundary.
            */
            initWithTarget(followedNode, rect);
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
            setBoudarySet(value);
            /**
            * called every frame with it&#39;s delta time.
            */
            step(dt);
            /**
            * Stop the action.
            */
            stop();
        }
}
declare module cc {
        export class FontDefinition  {
            /**
            * 
            */
            constructor();
        }
}
declare module cc {
        export class game  {
            /**
            * An object to boot the game.
            */
            constructor();
            /**
            * Prepare game.
            */
            prepare(cb);
            /**
            * Restart game.
            */
            restart();
            /**
            * Run game.
            */
            run(id);
            /**
            * Set frameRate of game.
            */
            setFrameRate(frameRate);
        }
}
declare module cc {
        export class GLProgram extends cc.Class {
            /**
            * Class that implements a WebGL program
            */
            constructor();
            /**
            * It will add a new attribute to the shader
            */
            addAttribute(attributeName, index);
            /**
            * Create a cc.GLProgram object
            */
            static create(vShaderFileName, fShaderFileName);
            /**
            * Create a cc.GLProgram object
            */
            ctor(vShaderFileName, fShaderFileName, glContext);
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
            getUniformLocationForName(name);
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
            init(vShaderFilename, fShaderFileName);
            /**
            * Initializes the cc.GLProgram with a vertex and fragment with string
            */
            initWithString(vertShaderStr, fragShaderStr);
            /**
            * Initializes the cc.GLProgram with a vertex and fragment with string
            */
            initWithVertexShaderByteArray(vertShaderStr, fragShaderStr);
            /**
            * Initializes the CCGLProgram with a vertex and fragment with contents of filenames
            */
            initWithVertexShaderFilename(vShaderFilename, fShaderFileName);
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
            setUniformLocationI32(location, i1);
            /**
            * calls glUniform1f only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith1f(location, f1);
            /**
            * calls glUniform1i only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith1i(location, i1);
            /**
            * calls glUniform2f only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith2f(location, f1, f2);
            /**
            * calls glUniform2fv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith2fv(location, floatArray, numberOfArrays);
            /**
            * calls glUniform2i only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith2i(location, i1, i2);
            /**
            * calls glUniform2iv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith2iv(location, intArray, numberOfArrays);
            /**
            * calls glUniform3f only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith3f(location, f1, f2, f3);
            /**
            * calls glUniform3fv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith3fv(location, floatArray, numberOfArrays);
            /**
            * calls glUniform3i only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith3i(location, i1, i2, i3);
            /**
            * calls glUniform3iv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith3iv(location, intArray, numberOfArrays);
            /**
            * calls glUniform4f only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith4f(location, f1, f2, f3, f4);
            /**
            * calls glUniform4fv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith4fv(location, floatArray, numberOfArrays);
            /**
            * calls glUniform4i only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith4i(location, i1, i2, i3, i4);
            /**
            * calls glUniform4iv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWith4iv(location, intArray, numberOfArrays);
            /**
            * calls glUniformMatrix4fv only if the values are different than the previous call for this same shader program.
            */
            setUniformLocationWithMatrix4fv(location, matrixArray, numberOfMatrices);
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
        export class Grabber extends cc.Class {
            /**
            * FBO class that grabs the the contents of the screen
            */
            constructor();
        }
}
declare module cc {
        export class Grid3D extends cc.GridBase {
            /**
            * cc.Grid3D is a 3D grid implementation.
            */
            constructor();
            /**
            * create one Grid3D object
            */
            static create(gridSize, texture, flipped);
            /**
            * create one Grid3D object
Constructor of cc.Grid3D
            */
            ctor(gridSize, texture, flipped);
            /**
            * returns the original (non-transformed) vertex at a given position
            */
            originalVertex(pos);
            /**
            * sets a new vertex at a given position
            */
            setVertex(pos, vertex);
            /**
            * returns the vertex at a given position
            */
            vertex(pos);
        }
}
declare module cc {
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
            originalVertex(position);
            /**
            * sets a new vertex to a certain position of the grid
            */
            setVertex(position, vertex);
            /**
            * returns the vertex than belongs to certain position in the grid
            */
            vertex(position);
        }
}
declare module cc {
        export class GridAction extends cc.ActionInterval {
            /**
            * Base class for Grid actions
            */
            constructor(duration, gridSize);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize);
            /**
            * Returns the grid.
            */
            getGrid();
            /**
            * Initializes the action with size and duration.
            */
            initWithDuration(duration, gridSize);
            /**
            * Create a cc.ReverseTime action.
            */
            reverse();
            /**
            * called before the action start.
            */
            startWithTarget(target);
        }
}
declare module cc {
        export class GridBase extends cc.Class {
            /**
            * Base class for cc.Grid
            */
            constructor();
            /**
            * create one cc.GridBase Object
            */
            static create(gridSize, texture, flipped);
            /**
            * create one cc.GridBase Object
Constructor of cc.GridBase
            */
            ctor(gridSize, texture, flipped);
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
            initWithSize(gridSize, texture, flipped);
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
            setActive(active);
            /**
            * set size of the grid
            */
            setGridSize(gridSize);
            /**
            * set number of times that the grid will be reused
            */
            setReuseGrid(reuseGrid);
            /**
            * set pixels between the grids
            */
            setStep(step);
            /**
            * set whether or not the texture is flipped
            */
            setTextureFlipped(flipped);
        }
}
declare module cc {
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
            update(dt);
        }
}
declare module cc {
        export class ImageTGA  {
            /**
            * TGA format
            */
            constructor(status, type, pixelDepth, width, height, imageData, flipped);
        }
}
declare module cc {
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
            insertText(text, len);
            /**
            * Remove delegate
            */
            removeDelegate();
        }
}
declare module cc {
        export class imeDispatcher  {
            /**
            * cc.imeDispatcher is a singleton object which manage input message dispatching.
            */
            constructor();
            /**
            * Add delegate to concern ime msg
            */
            addDelegate(delegate);
            /**
            * Attach the pDeleate with ime.
            */
            attachDelegateWithIME(delegate);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor();
            /**
            * Detach the pDeleate with ime.
            */
            detachDelegateWithIME(delegate);
            /**
            * Dispatch the delete backward operation
            */
            dispatchDeleteBackward();
            /**
            * Dispatch the input text from ime
            */
            dispatchInsertText(text, len);
            /**
            * Dispatch keyboard notification
            */
            dispatchKeyboardDidHide(info);
            /**
            * Dispatch keyboard notification
            */
            dispatchKeyboardDidShow(info);
            /**
            * Dispatch keyboard notification
            */
            dispatchKeyboardWillHide(info);
            /**
            * Dispatch keyboard notification
            */
            dispatchKeyboardWillShow(info);
            /**
            * Get the content text, which current CCIMEDelegate which attached with IME has.
            */
            getContentText();
            /**
            * Process keydown&#39;s keycode
            */
            processKeycode(keyCode);
            /**
            * Remove the delegate from the delegates who concern ime msg
            */
            removeDelegate(delegate);
        }
}
declare module cc.IMEDispatcher {
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
            findDelegate(delegate);
        }
}
declare module cc {
        export class inputManager  {
            /**
            * 
 This class manages all events of input.
            */
            constructor();
            /**
            * 
            */
            getHTMLElementPosition(element);
            /**
            * 
            */
            getMouseEvent(location, pos, eventType);
            /**
            * 
            */
            getPointByEvent(event, pos);
            /**
            * 
            */
            getPreTouch(touch);
            /**
            * 
            */
            getSetOfTouchesEndOrCancel(touches);
            /**
            * 
            */
            getTouchByXY(tx, ty, pos);
            /**
            * 
            */
            getTouchesByEvent(event, pos);
            /**
            * 
            */
            handleTouchesBegin(touches);
            /**
            * 
            */
            handleTouchesCancel(touches);
            /**
            * 
            */
            handleTouchesEnd(touches);
            /**
            * 
            */
            handleTouchesMove(touches);
            /**
            * 
            */
            registerSystemEvent(element);
            /**
            * 
            */
            setPreTouch(touch);
            /**
            * 
            */
            update(dt);
        }
}
declare module cc {
        export class Invocation extends cc.Class {
            /**
            * An Invocation class
            */
            constructor();
        }
}
declare module cc {
        export class JumpBy extends cc.ActionInterval {
            /**
            * Moves a cc.Node object simulating a parabolic jump movement by modifying it&#39;s position attribute.
            */
            constructor(duration, position, y, height, jumps);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, position, y, height, jumps);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, position, y, height, jumps);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class JumpTiles3D extends cc.TiledGrid3DAction {
            /**
            * cc.JumpTiles3D action.
            */
            constructor(duration, gridSize, numberOfJumps, amplitude);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, numberOfJumps, amplitude);
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
            initWithDuration(duration, gridSize, numberOfJumps, amplitude);
            /**
            * set amplitude of the sin
            */
            setAmplitude(amplitude);
            /**
            * set amplitude rate
            */
            setAmplitudeRate(amplitudeRate);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class JumpTo extends cc.JumpBy {
            /**
            * Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it&#39;s position attribute.
            */
            constructor(duration, position, y, height, jumps);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, position, y, height, jumps);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, position, y, height, jumps);
            /**
            * Start the action with target.
            */
            startWithTarget(target);
        }
}
declare module cc {
        export class kmQuaternion  {
            /**
            * The Quaternion class
            */
            constructor(x, y, z, w);
        }
}
declare module cc {
        export class LabelAtlas extends cc.AtlasNode {
            /**
            * using image file to print text label on the screen, might be a bit slower than cc.Label, similar to cc.LabelBMFont
            */
            constructor(strText, charMapFile, itemWidth, itemHeight, startCharMap);
            /**
            * Add texture loaded event listener.
            */
            addLoadedEventListener(callback, target);
            /**
            * 
    Please use new cc.LabelAtlas instead.
            */
            static create(strText, charMapFile, itemWidth, itemHeight, startCharMap);
            /**
            * 
 Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(strText, charMapFile, itemWidth, itemHeight, startCharMap);
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
            initWithString(strText, charMapFile, itemWidth, itemHeight, startCharMap);
            /**
            * Set the color.
            */
            setColor(color3);
            /**
            * set the display string
            */
            setString(label);
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
        export class LabelBMFont extends cc.SpriteBatchNode {
            /**
            * cc.LabelBMFont is a subclass of cc.SpriteBatchNode.
            */
            constructor(str, fntFile, width, alignment, imageOffset);
            /**
            * add texture loaded event listener.
            */
            addLoadedEventListener(callback, target);
            /**
            * creates a bitmap font atlas with an initial string and the FNT file
            */
            static create(str, fntFile, width, alignment, imageOffset);
            /**
            * updates the font chars based on the string to render
            */
            createFontChars();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(str, fntFile, width, alignment, imageOffset);
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
            initWithString(str, fntFile, width, alignment, imageOffset);
            /**
            * Conforms to cc.RGBAProtocol protocol.
            */
            isOpacityModifyRGB();
            /**
            * Set text alignment.
            */
            setAlignment(alignment);
            /**
            * Set the AnchorPoint of the labelBMFont.
            */
            setAnchorPoint(point, y);
            /**
            * Set the bounding width.
            */
            setBoundingWidth(width);
            /**
            * Set the text.
            */
            setCString(label);
            /**
            * set fnt file path.
            */
            setFntFile(fntFile);
            /**
            * Set the param to change English word warp according to whether the space.
            */
            setLineBreakWithoutSpace(breakWithoutSpace);
            /**
            * Set whether to support cc.RGBAProtocol protocol
            */
            setOpacityModifyRGB(opacityModifyRGB);
            /**
            * Set scale.
            */
            setScale(scale, scaleY);
            /**
            * Set scale of x.
            */
            setScaleX(scaleX);
            /**
            * Set scale of x.
            */
            setScaleY(scaleY);
            /**
            * Set the text
            */
            setString(newString, needUpdateLabel);
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
            updateString(fromUpdate);
        }
}
declare module cc {
        export class LabelTTF extends cc.Sprite {
            /**
            * cc.LabelTTF is a subclass of cc.TextureNode that knows how to render text labels with system font or a ttf font file
All features from cc.Sprite are valid in cc.LabelTTF
cc.LabelTTF objects are slow for js-binding on mobile devices.
            */
            constructor(text, fontName, fontSize, dimensions, hAlignment, vAlignment);
            /**
            * creates a cc.LabelTTF from a font name, alignment, dimension and font size
            */
            static create(text, fontName, fontSize, dimensions, hAlignment, vAlignment);
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
            enableShadow(a, b, c, d);
            /**
            * Enable label stroke with stroke parameters
            */
            enableStroke(strokeColor, strokeSize);
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
            initWithString(label, fontName, fontSize, dimensions, hAlignment, vAlignment);
            /**
            * Initializes the CCLabelTTF with a font name, alignment, dimension and font size, do not call it by yourself, you should pass the correct arguments in constructor to initialize the label.
            */
            initWithStringAndTextDefinition(text, textDefinition);
            /**
            * Set Dimensions of cc.LabelTTF, the dimension is the maximum size of the label, set it so that label will automatically change lines when necessary.
            */
            setDimensions(dim, height);
            /**
            * Sets the text fill color
            */
            setFontFillColor(fillColor);
            /**
            * Sets font name of cc.LabelTTF
            */
            setFontName(fontName);
            /**
            * Sets font size of cc.LabelTTF
            */
            setFontSize(fontSize);
            /**
            * Sets Horizontal Alignment of cc.LabelTTF
            */
            setHorizontalAlignment(alignment);
            /**
            * Changes the text content of the label
            */
            setString(text);
            /**
            * Sets the text definition used by this label
            */
            setTextDefinition(theDefinition);
            /**
            * Sets Vertical Alignment of cc.LabelTTF
            */
            setVerticalAlignment(verticalAlignment);
        }
}
declare module cc {
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
        export class LayerColor extends cc.Layer {
            /**
            * 
CCLayerColor is a subclass of CCLayer that implements the CCRGBAProtocol protocol.
            */
            constructor(color, width, height);
            /**
            * change height in Points
            */
            changeHeight(h);
            /**
            * Changes width in Points
            */
            changeWidth(w);
            /**
            * Changes width and height
            */
            changeWidthAndHeight(w, h);
            /**
            * Creates a cc.Layer with color, width and height in Points
            */
            static create(color, width, height);
            /**
            * Constructor of cc.LayerColor
            */
            ctor(color, width, height);
            /**
            * Returns the blend function
            */
            getBlendFunc();
            /**
            * Initialization of the layer, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer
            */
            init(color, width, height);
            /**
            * Sets the blend func, you can pass either a cc.BlendFunc object or source and destination value separately
            */
            setBlendFunc(src, dst);
        }
}
declare module cc {
        export class LayerGradient extends cc.LayerColor {
            /**
            * 
CCLayerGradient is a subclass of cc.LayerColor that draws gradients across the background.
            */
            constructor(start, end, v);
            /**
            * Creates a gradient layer
            */
            static create(start, end, v);
            /**
            * Constructor of cc.LayerGradient
            */
            ctor(start, end, v);
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
            init(start, end, v);
            /**
            * Returns whether compressed interpolation is enabled
            */
            isCompressedInterpolation();
            /**
            * Sets whether compressed interpolation is enabled
            */
            setCompressedInterpolation(compress);
            /**
            * Sets the untransformed size of the LayerGradient.
            */
            setContentSize(size, height);
            /**
            * Sets the end gradient color
            */
            setEndColor(color);
            /**
            * Sets the end gradient opacity
            */
            setEndOpacity(o);
            /**
            * Sets the starting color
            */
            setStartColor(color);
            /**
            * Sets starting gradient opacity
            */
            setStartOpacity(o);
            /**
            * Sets the direction vector of the gradient
            */
            setVector(Var);
        }
}
declare module cc {
        export class LayerMultiplex extends cc.Layer {
            /**
            * CCMultipleLayer is a CCLayer with the ability to multiplex it&#39;s children.
            */
            constructor(layers);
            /**
            * Add a layer to the multiplex layers list
            */
            addLayer(layer);
            /**
            * Creates a cc.LayerMultiplex with one or more layers using a variable argument list.
            */
            static create();
            /**
            * Constructor of cc.LayerMultiplex
            */
            ctor(layers);
            /**
            * Initialization of the layer multiplex, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer multiplex
            */
            initWithLayers(layers);
            /**
            * Switches to a certain layer indexed by n.
            */
            switchTo(n);
            /**
            * Release the current layer and switches to another layer indexed by n.
            */
            switchToAndReleaseMe(n);
        }
}
declare module cc {
        export class Lens3D extends cc.Grid3DAction {
            /**
            * cc.Lens3D action.
            */
            constructor(duration, gridSize, position, radius);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, position, radius);
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
            initWithDuration(duration, gridSize, position, radius);
            /**
            * Set whether lens is concave
            */
            setConcave(concave);
            /**
            * Set lens center position
            */
            setLensEffect(lensEffect);
            /**
            * set Position
            */
            setPosition(position);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class Liquid extends cc.Grid3DAction {
            /**
            * cc.Liquid action.
            */
            constructor(duration, gridSize, waves, amplitude);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, waves, amplitude);
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
            initWithDuration(duration, gridSize, waves, amplitude);
            /**
            * set amplitude
            */
            setAmplitude(amplitude);
            /**
            * set amplitude rate
            */
            setAmplitudeRate(amplitudeRate);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class loader  {
            /**
            * Loader for resource loading process.
            */
            constructor();
            /**
            * Get resource data by url.
            */
            getRes(url);
            /**
            * Get url with basePath.
            */
            getUrl(basePath, url);
            /**
            * Get XMLHttpRequest.
            */
            getXMLHttpRequest();
            /**
            * Load resources then call the callback.
            */
            load(resources, option, loadCallback);
            /**
            * 
    Loads alias map from the contents of a filename.
            */
            loadAliases(url, callback);
            /**
            * Load a single image.
            */
            loadImg(url, option, callback);
            /**
            * Load js files.
            */
            loadJs(baseDir, jsList, cb);
            /**
            * Load a single resource as json.
            */
            loadJson(url, cb);
            /**
            * Load js width loading image.
            */
            loadJsWithImg(baseDir, jsList, cb);
            /**
            * Load a single resource as txt.
            */
            loadTxt(url, cb);
            /**
            * Register a resource loader into loader.
            */
            register(extNames, loader);
            /**
            * Release the cache of resource by url.
            */
            release(url);
            /**
            * Resource cache of all resources.
            */
            releaseAll();
        }
}
declare module cc {
        export class Menu extends cc.Layer {
            /**
            *  Features and Limitation:
 - You can add MenuItem objects in runtime using addChild:
 - But the only accepted children are MenuItem objects
            */
            constructor(menuItems);
            /**
            * add a child for  cc.Menu
            */
            addChild(child, zOrder, tag);
            /**
            * align items horizontally with default padding
            */
            alignItemsHorizontally();
            /**
            * align items horizontally with specified padding
            */
            alignItemsHorizontallyWithPadding(padding);
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
            alignItemsVerticallyWithPadding(padding);
            /**
            * create a new menu
            */
            static create(menuItems);
            /**
            * Constructor of cc.Menu override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(menuItems);
            /**
            * initializes a cc.Menu with a Array of cc.MenuItem objects
            */
            initWithArray(arrayOfItems);
            /**
            * initializes a cc.Menu with it&#39;s items
            */
            initWithItems(args);
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
            removeChild(child, cleanup);
            /**
            * set whether or not the menu will receive events
            */
            setEnabled(enabled);
            /**
            * only use for jsbinding
            */
            setOpacityModifyRGB(value);
        }
}
declare module cc {
        export class MenuItem extends cc.Node {
            /**
            * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem objects.
            */
            constructor(callback, target);
            /**
            * call the selector with target
            */
            activate();
            /**
            * creates an empty menu item with target and callback
Not recommended to use the base class, should use more defined menu item classes
            */
            static create(callback, target);
            /**
            * Constructor of cc.MenuItem
            */
            ctor(callback, target);
            /**
            * initializes a cc.MenuItem with callback
            */
            initWithCallback(callback, target);
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
            setCallback(callback, target);
            /**
            * set enable value of MenuItem
            */
            setEnabled(enable);
            /**
            * only use for jsbinding
            */
            setOpacityModifyRGB(value);
            /**
            * set the target/selector of the menu item
            */
            setTarget(selector, rec);
            /**
            * set the cc.MenuItem unselected same as setIsSelected(false)
            */
            unselected();
        }
}
declare module cc {
        export class MenuItemAtlasFont extends cc.MenuItemLabel {
            /**
            * Helper class that creates a MenuItemLabel class with a LabelAtlas
            */
            constructor(value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target);
            /**
            * create menu item from string with font
            */
            static create(value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target);
            /**
            * the contructor of cc.MenuItemAtlasFont
            */
            ctor(value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target);
            /**
            * initializes a cc.MenuItemAtlasFont with string
            */
            initWithString(value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target);
        }
}
declare module cc {
        export class MenuItemFont extends cc.MenuItemLabel {
            /**
            * Helper class that creates a CCMenuItemLabel class with a Label
            */
            constructor(value, callback, target);
            /**
            * create a menu item from string
            */
            static create(value, callback, target);
            /**
            * Constructor of cc.MenuItemFont
            */
            ctor(value, callback, target);
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
            initWithString(value, callback, target);
            /**
            * set the font name for cc.MenuItemFont
            */
            setFontName(name);
            /**
            * a shared function to set the fontsize for menuitem font
            */
            static setFontName(name);
            /**
            * a shared function to set the fontSize for menuitem font
            */
            static setFontSize(fontSize);
            /**
            * set the font size for cc.MenuItemFont
            */
            setFontSize(s);
        }
}
declare module cc {
        export class MenuItemImage extends cc.MenuItemSprite {
            /**
            * cc.MenuItemImage accepts images as items.
            */
            constructor(normalImage, selectedImage, disabledImage, callback, target);
            /**
            * creates a new menu item image
            */
            static create(normalImage, selectedImage, three, four, five);
            /**
            * Constructor of cc.MenuItemImage
            */
            ctor(normalImage, selectedImage, disabledImage, callback, target);
            /**
            * initializes a cc.MenuItemImage
            */
            initWithNormalImage(normalImage, selectedImage, disabledImage, callback, target);
            /**
            * sets the sprite frame for the disabled image
            */
            setDisabledSpriteFrame(frame);
            /**
            * sets the sprite frame for the normal image
            */
            setNormalSpriteFrame(frame);
            /**
            * sets the sprite frame for the selected image
            */
            setSelectedSpriteFrame(frame);
        }
}
declare module cc {
        export class MenuItemLabel extends cc.MenuItem {
            /**
            * Any cc.Node that supports the cc.LabelProtocol protocol can be added.
            */
            constructor(label, selector, target);
            /**
            * activate the menu item
            */
            activate();
            /**
            * 
            */
            static create(label, selector, target);
            /**
            * Constructor of cc.MenuItemLabel
            */
            ctor(label, selector, target);
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
            initWithLabel(label, selector, target);
            /**
            * menu item is selected (runs callback)
            */
            selected();
            /**
            * set the opacity for cc.MenuItemLabel
            */
            setColor(color);
            /**
            * set the disable color for this cc.MenuItemLabel
            */
            setDisabledColor(color);
            /**
            * set enable value to cc.MenuItemLabel
            */
            setEnabled(enabled);
            /**
            * set a label for cc.MenuItemLabel
            */
            setLabel(label);
            /**
            * set opacity for cc.MenuItemLabel
            */
            setOpacity(opacity);
            /**
            * set the string for  cc.MenuItemLabel
            */
            setString(label);
            /**
            * menu item goes back to unselected state
            */
            unselected();
        }
}
declare module cc {
        export class MenuItemSprite extends cc.MenuItem {
            /**
            * CCMenuItemSprite accepts CCNode objects as items.
            */
            constructor(normalSprite, selectedSprite, three, four, five);
            /**
            * create a menu item from sprite
            */
            static create(normalSprite, selectedSprite, three, four, five);
            /**
            * Constructor of cc.MenuItemSprite
            */
            ctor(normalSprite, selectedSprite, three, four, five);
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
            initWithNormalSprite(normalSprite, selectedSprite, disabledSprite, callback, target);
            /**
            * menu item is selected (runs callback)
            */
            selected();
            /**
            * set the color for cc.MenuItemSprite
            */
            setColor(color);
            /**
            * set the disabled status image(cc.Sprite)
            */
            setDisabledImage(disabledImage);
            /**
            * set cc.MenuItemSprite  enable to receive the touch event
            */
            setEnabled(bEnabled);
            /**
            * set the normal status image(cc.Sprite)
            */
            setNormalImage(normalImage);
            /**
            * set the opacity for cc.MenuItemSprite
            */
            setOpacity(opacity);
            /**
            * set the selected status image(cc.Sprite)
            */
            setSelectedImage(selectedImage);
            /**
            * menu item goes back to unselected state
            */
            unselected();
        }
}
declare module cc {
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
            addSubItem(item);
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
            setColor(Color);
            /**
            * set the enable status for cc.MenuItemToggle
            */
            setEnabled(enabled);
            /**
            * set the opacity for cc.MenuItemToggle
            */
            setOpacity(opacity);
            /**
            * set the seleceted index for cc.MenuItemToggle
            */
            setSelectedIndex(SelectedIndex);
            /**
            * set the subitem for cc.MenuItemToggle
            */
            setSubItems(subItems);
            /**
            * menu item goes back to unselected state
            */
            unselected();
        }
}
declare module cc {
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
            alignItemsHorizontallyWithPadding(padding);
            /**
            * align items in rows of columns
            */
            alignItemsInColumns(columns);
            /**
            * align items in columns of rows
            */
            alignItemsInRows(rows);
            /**
            * align items vertically
            */
            alignItemsVertically();
            /**
            * align items vertically with padding
            */
            alignItemsVerticallyWithPadding(padding);
            /**
            * creates an empty CCMenu
            */
            static create(item);
            /**
            * creates a CCMenu with it&#39;s item, then use addChild() to add
other items.
            */
            static createWithItem(item);
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
            initWithItems(item, args);
        }
}
declare module cc {
        export class MotionStreak extends cc.Node {
            /**
            * cc.MotionStreak manages a Ribbon based on it&#39;s motion in absolute space.
            */
            constructor();
            /**
            * Please use new cc.MotionStreak instead.
            */
            static create(fade, minSeg, stroke, color, texture);
            /**
            * creates and initializes a motion streak with fade in seconds, minimum segments, stroke&#39;s width, color, texture filename or texture   
Constructor of cc.MotionStreak
            */
            ctor(fade, minSeg, stroke, color, texture);
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
            initWithFade(fade, minSeg, stroke, color, texture);
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
            setBlendFunc(src, dst);
            /**
            * set fast mode
            */
            setFastMode(fastMode);
            /**
            * Set opacity.
            */
            setOpacity(opacity);
            /**
            * set opacity modify RGB.
            */
            setOpacityModifyRGB(value);
            /**
            * Set the position.
            */
            setPosition(position, yValue);
            /**
            * Set the position.x
            */
            setPositionX(x);
            /**
            * Set the position.y
            */
            setPositionY(y);
            /**
            * Set Starting Position Initialized.
            */
            setStartingPositionInitialized(startingPositionInitialized);
            /**
            * Set the texture.
            */
            setTexture(texture);
            /**
            * color used for the tint
            */
            tintWithColor(color);
            /**
            * schedules the &quot;update&quot; method.
            */
            update(delta);
        }
}
declare module cc {
        export class MoveBy extends cc.ActionInterval {
            /**
            * 
    Moves a CCNode object x,y pixels by modifying it&#39;s position attribute.
            */
            constructor(duration, deltaPos, deltaY);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, deltaPos, deltaY);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, position, y);
            /**
            * MoveTo reverse is not implemented
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class MoveTo extends cc.MoveBy {
            /**
            * Moves a CCNode object to the position x,y.
            */
            constructor(duration, position, y);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, position, y);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, position, y);
            /**
            * Start the action with target.
            */
            startWithTarget(target);
        }
}
declare module cc {
        export class Node extends cc.Class {
            /**
            * cc.Node is the root class of all node.
            */
            constructor();
            /**
            * &quot;add&quot; logic MUST only be in this method  

If the child is added to a &#39;running&#39; node, then &#39;onEnter&#39; and &#39;onEnterTransitionDidFinish&#39; will be called immediately.
            */
            addChild(child, localZOrder, tag);
            /**
            * Adds a component to the node&#39;s component container.
            */
            addComponent(component);
            /**
            * Properties configuration function 
All properties in attrs will be set to the node, 
when the setter of the node is available, 
the property will be set via setter function.
            */
            attr(attrs);
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
            convertToNodeSpace(worldPoint);
            /**
            * Converts a Point to node (local) space coordinates.
            */
            convertToNodeSpaceAR(worldPoint);
            /**
            * convenience methods which take a cc.Touch instead of cc.Point
            */
            convertTouchToNodeSpace(touch);
            /**
            * converts a cc.Touch (world coordinates) into a local coordinate.
            */
            convertTouchToNodeSpaceAR(touch);
            /**
            * Converts a Point to world space coordinates.
            */
            convertToWorldSpace(nodePoint);
            /**
            * Converts a local Point to world space coordinates.The result is in Points.
            */
            convertToWorldSpaceAR(nodePoint);
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
            draw(ctx);
            /**
            * Returns an action from the running action list by its tag.
            */
            getActionByTag(tag);
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
            getChildByName(name);
            /**
            * Returns a child from the container given its tag
            */
            getChildByTag(aTag);
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
            getComponent(name);
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
            ignoreAnchorPointForPosition(newValue);
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
            removeAllChildren(cleanup);
            /**
            * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
            */
            removeAllChildrenWithCleanup(cleanup);
            /**
            * Removes all components of cc.Node, it called when cc.Node is exiting from stage.
            */
            removeAllComponents();
            /**
            * Removes a child from the container.
            */
            removeChild(child, cleanup);
            /**
            * Removes a child from the container by tag value.
            */
            removeChildByTag(tag, cleanup);
            /**
            * Removes a component identified by the given name or removes the component object given
            */
            removeComponent(component);
            /**
            * Remove itself from its parent node.
            */
            removeFromParent(cleanup);
            /**
            * Removes this node itself from its parent node.
            */
            removeFromParentAndCleanup(cleanup);
            /**
            * Reorders a child according to a new z value.
            */
            reorderChild(child, zOrder);
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
            runAction(action);
            /**
            * Schedules a custom selector.
            */
            schedule(callback_fn, interval, repeat, delay);
            /**
            * Schedules a callback function that runs only once, with a delay of 0 or larger
            */
            scheduleOnce(callback_fn, delay);
            /**
            * schedules the &quot;update&quot; method.
            */
            scheduleUpdate();
            /**
            * 
schedules the &quot;update&quot; callback function with a custom priority.
            */
            scheduleUpdateWithPriority(priority);
            /**
            * Sets the cc.ActionManager object that is used by all actions.
            */
            setActionManager(actionManager);
            /**
            * Sets the additional transform.
            */
            setAdditionalTransform(additionalTransform);
            /**
            * 
    Sets the anchor point in percent.
            */
            setAnchorPoint(point, y);
            /**
            * Enable or disable cascade color, if cascade enabled, child nodes&#39; opacity will be the cascade value of parent color and its own color.
            */
            setCascadeColorEnabled(cascadeColorEnabled);
            /**
            * Enable or disable cascade opacity, if cascade enabled, child nodes&#39; opacity will be the multiplication of parent opacity and its own opacity.
            */
            setCascadeOpacityEnabled(cascadeOpacityEnabled);
            /**
            * Sets the color of Node.
            */
            setColor(color);
            /**
            * 
    Sets the untransformed size of the node.
            */
            setContentSize(size, height);
            /**
            * Defines the oder in which the nodes are renderer.
            */
            setGlobalZOrder(globalZOrder);
            /**
            * Sets the state of OpenGL server side.
            */
            setGLServerState(state);
            /**
            * Changes a grid object that is used when applying effects
This function have been deprecated, please use cc.NodeGrid to run grid actions
            */
            setGrid(grid);
            /**
            *  LocalZOrder is the &#39;key&#39; used to sort the node relative to its siblings.
            */
            setLocalZOrder(localZOrder);
            /**
            * Changes the name that is used to identify the node easily.
            */
            setName(name);
            /**
            * 
Sets the position (x,y) using values between 0 and 1.
            */
            setNormalizedPosition(posOrX, y);
            /**
            * Sets the opacity of Node
            */
            setOpacity(opacity);
            /**
            * Set whether color should be changed with the opacity value,
useless in cc.Node, but this function is override in some class to have such behavior.
            */
            setOpacityModifyRGB(opacityValue);
            /**
            * 
    Sets the arrival order when this node has a same ZOrder with other children.
            */
            setOrderOfArrival(Var);
            /**
            * Sets the parent node
            */
            setParent(parent);
            /**
            * 
    Changes the position (x,y) of the node in cocos2d coordinates.
            */
            setPosition(newPosOrxValue, yValue);
            /**
            * Sets the x axis position of the node in cocos2d coordinates.
            */
            setPositionX(x);
            /**
            * Sets the y axis position of the node in cocos2d coordinates.
            */
            setPositionY(y);
            /**
            * 
    Sets the rotation (angle) of the node in degrees.
            */
            setRotation(newRotation);
            /**
            * 
    Sets the X rotation (angle) of the node in degrees which performs a horizontal rotational skew.
            */
            setRotationX(rotationX);
            /**
            * 
   Sets the Y rotation (angle) of the node in degrees which performs a vertical rotational skew.
            */
            setRotationY(rotationY);
            /**
            * Sets the scale factor of the node.
            */
            setScale(scale, scaleY);
            /**
            * 
    Changes the scale factor on X axis of this node                                   
    The default value is 1.0 if you haven&#39;t changed it before

            */
            setScaleX(newScaleX);
            /**
            * 
    Changes the scale factor on Y axis of this node                                            
    The Default value is 1.0 if you haven&#39;t changed it before.
            */
            setScaleY(newScaleY);
            /**
            * 
  Sets a CCScheduler object that is used to schedule all &quot;updates&quot; and timers.
            */
            setScheduler(scheduler);
            /**
            * 
    Sets the shader program for this node

    Since v2.0, each rendering node must set its shader program.
            */
            setShaderProgram(newShaderProgram);
            /**
            * 
Changes the X skew angle of the node in degrees.
            */
            setSkewX(newSkewX);
            /**
            * 
Changes the Y skew angle of the node in degrees.
            */
            setSkewY(newSkewY);
            /**
            * Changes the tag that is used to identify the node easily.
            */
            setTag(tag);
            /**
            * 
   Sets a custom user data reference                                                                   
   You can set everything in UserData reference, a data block, a structure or an object, etc.
            */
            setUserData(Var);
            /**
            * 
     Sets a user assigned cocos2d object                                                                                       
     Similar to UserData, but instead of holding all kinds of data it can only hold a cocos2d object                        
     In JSB, the UserObject will be retained once in this method, and the previous UserObject (if existed) will be release.
            */
            setUserObject(newValue);
            /**
            * 
    Sets the real WebGL Z vertex.
            */
            setVertexZ(Var);
            /**
            * Sets whether the node is visible 
The default value is true
            */
            setVisible(visible);
            /**
            * 
    Sets the Z order which stands for the drawing order, and reorder this node in its parent&#39;s children array.
            */
            setZOrder(z);
            /**
            * 
    Sorts the children array once before drawing, instead of every time when a child is added or reordered.
            */
            sortAllChildren();
            /**
            * Stops and removes an action from the running action list.
            */
            stopAction(action);
            /**
            * Removes an action from the running action list by its tag.
            */
            stopActionByTag(tag);
            /**
            * Stops and removes all actions from the running action list .
            */
            stopAllActions();
            /**
            * Performs view-matrix transformation based on position, scale, rotation and other attributes.
            */
            transform(parentCmd, recursive);
            /**
            * unschedules a custom callback function.
            */
            unschedule(callback_fn);
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
            update(dt);
            /**
            * Update the displayed color of Node
            */
            updateDisplayedColor(parentColor);
            /**
            * Update displayed opacity
            */
            updateDisplayedOpacity(parentOpacity);
            /**
            * 
Calls children&#39;s updateTransform() method recursively.
            */
            updateTransform();
            /**
            * Recursive method that visit its children and draw them
            */
            visit(parentCmd);
            /**
            * 
            */
            worldToNodeTransform();
        }
}
declare module cc {
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
            update(time);
        }
}
declare module cc {
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
            addChild(child, z, ratio, offset);
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
            removeAllChildren(cleanup);
            /**
            * Remove Child
            */
            removeChild(child, cleanup);
            /**
            * Set parallax array.
            */
            setParallaxArray(value);
        }
}
declare module cc {
        export class Particle  {
            /**
            * Structure that contains the values of each particle
            */
            constructor(pos, startPos, color, deltaColor, size, deltaSize, rotation, deltaRotation, timeToLive, atlasIndex, modeA, modeB);
        }
}
declare module cc.Particle {
        export class ModeA  {
            /**
            * Mode A: gravity, direction, radial accel, tangential accel
            */
            constructor(dir, radialAccel, tangentialAccel);
        }
}
declare module cc.Particle {
        export class ModeB  {
            /**
            * Mode B: radius mode
            */
            constructor(angle, degreesPerSecond, radius, deltaRadius);
        }
}
declare module cc {
        export class ParticleBatchNode extends cc.ParticleSystem {
            /**
            * 
   cc.ParticleBatchNode is like a batch node: if it contains children, it will draw them in 1 single OpenGL call  
   (often known as &quot;batch draw&quot;).
            */
            constructor(fileImage, capacity);
            /**
            * Add a child into the cc.ParticleBatchNode
            */
            addChild(child, zOrder, tag);
            /**
            * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
            */
            static create(fileImage, capacity);
            /**
            * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
Constructor of cc.ParticleBatchNode
            */
            ctor(fileImage, capacity);
            /**
            * disables a particle by inserting a 0&#39;d quad into the texture atlas
            */
            disableParticle(particleIndex);
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
            init(fileImage, capacity);
            /**
            * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
            */
            initWithFile(fileImage, capacity);
            /**
            * initializes the particle system with cc.Texture2D, a capacity of particles
            */
            initWithTexture(texture, capacity);
            /**
            * Inserts a child into the cc.ParticleBatchNode
            */
            insertChild(pSystem, index);
            /**
            * 
            */
            removeAllChildren(doCleanup);
            /**
            * 
            */
            removeChild(child, cleanup);
            /**
            * 
            */
            removeChildAtIndex(index, doCleanup);
            /**
            * Reorder will be done in this function, no &quot;lazy&quot; reorder to particles
            */
            reorderChild(child, zOrder);
            /**
            * set the blending function used for the texture
            */
            setBlendFunc(src, dst);
            /**
            * sets a new texture.
            */
            setTexture(texture);
            /**
            * set the texture atlas used for drawing the quads
            */
            setTextureAtlas(textureAtlas);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            initWithTotalParticles(numberOfParticles);
        }
}
declare module cc {
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
            static create(plistFile);
            /**
            *  return the string found by key in dict.
            */
            static createWithTotalParticles(plistFile);
            /**
            *  return the string found by key in dict.
            */
            ctor(plistFile);
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
            ignoreColor(ignore);
            /**
            * initializes a cc.ParticleSystem
            */
            init();
            /**
            * Initializes a particle
            */
            initParticle(particle);
            /**
            *  initializes the texture with a rectangle measured Points
pointRect should be in Texture coordinates, not pixel coordinates

            */
            initTexCoordsWithRect(pointRect);
            /**
            * initializes a particle system from a NSDictionary and the path from where to load the png
            */
            initWithDictionary(dictionary, dirname);
            /**
            * 
    initializes a CCParticleSystem from a plist file.
            */
            initWithFile(plistFile);
            /**
            * Initializes a system with a fixed number of particles
            */
            initWithTotalParticles(numberOfParticles);
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
            listenBackToForeground(obj);
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
            setAngle(angle);
            /**
            * angle variance of each particle setter
            */
            setAngleVar(angleVar);
            /**
            * set index of system in batch node array
            */
            setAtlasIndex(atlasIndex);
            /**
            *  set whether or not the node will be auto-removed when it has no particles left.
            */
            setAutoRemoveOnFinish(isAutoRemoveOnFinish);
            /**
            * set weak reference to the cc.SpriteBatchNode that renders the cc.Sprite
            */
            setBatchNode(batchNode);
            /**
            * whether or not the particles are using blend additive.
            */
            setBlendAdditive(isBlendAdditive);
            /**
            * set BlendFunc of Particle System
            */
            setBlendFunc(src, dst);
            /**
            *  Sets a new CCSpriteFrame as particle.
            */
            setDisplayFrame(spriteFrame);
            /**
            * DrawMode of ParticleSystem setter   (Canvas Mode only)
            */
            setDrawMode(drawMode);
            /**
            * set run seconds of the emitter
            */
            setDuration(duration);
            /**
            * set emission rate of the particles
            */
            setEmissionRate(emissionRate);
            /**
            * Switch between different kind of emitter modes:
 - CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration
 - CCParticleSystem.MODE_RADIUS: uses radius movement + rotation 
 
            */
            setEmitterMode(emitterMode);
            /**
            * set end color and end color variation of each particle
            */
            setEndColor(endColor);
            /**
            * set end color variance of each particle
            */
            setEndColorVar(endColorVar);
            /**
            * ending radius of the particles setter.
            */
            setEndRadius(endRadius);
            /**
            * ending radius variance of the particles setter.
            */
            setEndRadiusVar(endRadiusVar);
            /**
            * set end size in pixels of each particle
            */
            setEndSize(endSize);
            /**
            * set end size variance in pixels of each particle
            */
            setEndSizeVar(endSizeVar);
            /**
            * set end angle of each particle
            */
            setEndSpin(endSpin);
            /**
            * set end angle variance of each particle
            */
            setEndSpinVar(endSpinVar);
            /**
            * Gravity of emitter setter
            */
            setGravity(gravity);
            /**
            * life of each particle setter
            */
            setLife(life);
            /**
            * life variance of each particle setter
            */
            setLifeVar(lifeVar);
            /**
            * does the alpha value modify color setter
            */
            setOpacityModifyRGB(newValue);
            /**
            * Quantity of particles setter
            */
            setParticleCount(particleCount);
            /**
            * set particles movement type: Free or Grouped
            */
            setPositionType(positionType);
            /**
            * Position variance of the emitter setter
            */
            setPosVar(posVar);
            /**
            * radial acceleration of each particle setter.
            */
            setRadialAccel(radialAccel);
            /**
            * radial acceleration variance of each particle setter.
            */
            setRadialAccelVar(radialAccelVar);
            /**
            * set Number of degress to rotate a particle around the source pos per second.
            */
            setRotatePerSecond(degrees);
            /**
            * Variance in degrees for rotatePerSecond setter.
            */
            setRotatePerSecondVar(degrees);
            /**
            * set the rotation of each particle to its direction Only available in &#39;Gravity&#39; mode.
            */
            setRotationIsDir(t);
            /**
            * ShapeType of ParticleSystem setter  (Canvas Mode only)
            */
            setShapeType(shapeType);
            /**
            * sourcePosition of the emitter setter
            */
            setSourcePosition(sourcePosition);
            /**
            * Speed of each particle setter
            */
            setSpeed(speed);
            /**
            * speed variance of each particle setter.
            */
            setSpeedVar(speedVar);
            /**
            * get start color of each particle
            */
            setStartColor(startColor);
            /**
            * set start color variance of each particle
            */
            setStartColorVar(startColorVar);
            /**
            * starting radius of the particles setter.
            */
            setStartRadius(startRadius);
            /**
            * starting radius variance of the particles setter.
            */
            setStartRadiusVar(startRadiusVar);
            /**
            * set start size in pixels of each particle
            */
            setStartSize(startSize);
            /**
            * set size variance in pixels of each particle
            */
            setStartSizeVar(startSizeVar);
            /**
            * set initial angle of each particle
            */
            setStartSpin(startSpin);
            /**
            * set initial angle variance of each particle
            */
            setStartSpinVar(startSpinVar);
            /**
            * Tangential acceleration of each particle setter.
            */
            setTangentialAccel(tangentialAccel);
            /**
            * tangential acceleration variance of each particle setter.
            */
            setTangentialAccelVar(tangentialAccelVar);
            /**
            * set Texture of Particle System
            */
            setTexture(texture);
            /**
            * Sets a new texture with a rect.
            */
            setTextureWithRect(texture, rect);
            /**
            * set maximum particles of the system
            */
            setTotalParticles(tp);
            /**
            * stop emitting particles.
            */
            stopSystem();
            /**
            * update emitter&#39;s status
            */
            update(dt);
            /**
            * should be overridden by subclasses
            */
            updateQuadWithParticle(particle, newPosition);
            /**
            * update emitter&#39;s status (dt = 0)
            */
            updateWithNoTime();
        }
}
declare module cc.ParticleSystem {
        export class ModeA  {
            /**
            * Mode A:Gravity + Tangential Accel + Radial Accel
            */
            constructor(gravity, speed, speedVar, tangentialAccel, tangentialAccelVar, radialAccel, radialAccelVar, rotationIsDir);
        }
}
declare module cc.ParticleSystem {
        export class ModeB  {
            /**
            * Mode B: circular movement (gravity, radial accel and tangential accel don&#39;t are not used in this mode)
            */
            constructor(startRadius, startRadiusVar, endRadius, endRadiusVar, rotatePerSecond, rotatePerSecondVar);
        }
}
declare module cc {
        export class path  {
            /**
            * 
            */
            constructor();
            /**
            * Get the file name of a file path.
            */
            basename(pathStr, extname);
            /**
            * Change file name of a file path.
            */
            changeBasename(pathStr, basename, isSameExt);
            /**
            * Change extname of a file path.
            */
            changeExtname(pathStr, extname);
            /**
            * Get dirname of a file path.
            */
            dirname(pathStr);
            /**
            * Get the ext name of a path.
            */
            extname(pathStr);
            /**
            * Join strings to be a path.
            */
            join();
            /**
            * Get the main name of a file name
            */
            mainFileName(fileName);
        }
}
declare module cc {
        export class Place extends cc.ActionInstant {
            /**
            * Places the node in a certain position
            */
            constructor(pos, y);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(pos, y);
            /**
            * Initializes a Place action with a position
            */
            initWithPosition(x, y);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class plistParser  {
            /**
            * cc.plistParser is a singleton object for parsing plist files
            */
            constructor();
            /**
            * parse a xml string as plist object.
            */
            parse(xmlTxt);
        }
}
declare module cc {
        export class Point  {
            /**
            * cc.Point is the class for point object, please do not use its constructor to create points, use cc.p() alias function instead.
            */
            constructor(x, y);
        }
}
declare module cc {
        export class PointObject extends cc.Class {
            /**
            * Parallax Object.
            */
            constructor();
            /**
            * Create a object to stored parallax data.
            */
            static create(ratio, offset);
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
            initWithCCPoint(ratio, offset);
            /**
            * Set the child.
            */
            setChild(value);
            /**
            * Set the offset.
            */
            setOffset(value);
            /**
            * Set the ratio.
            */
            setRatio(value);
        }
}
declare module cc {
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
            getFromPool(args);
            /**
            * Check if this kind of obj has already in pool
            */
            hasObject(objClass);
            /**
            * Put the obj in pool
            */
            putInPool(obj);
            /**
            * Remove the obj if you want to delete it;
            */
            removeObject(obj);
        }
}
declare module cc {
        export class ProgressFromTo extends cc.ActionInterval {
            /**
            * Progress from a percentage to another percentage
            */
            constructor(duration, fromPercentage, toPercentage);
            /**
            * return a new cc.ProgressTo, all the configuration is the same as the original
            */
            clone();
            /**
            * Creates and initializes the action with a duration, a &quot;from&quot; percentage and a &quot;to&quot; percentage
Constructor of cc.ProgressFromTo
            */
            ctor(duration, fromPercentage, toPercentage);
            /**
            * Initializes the action with a duration, a &quot;from&quot; percentage and a &quot;to&quot; percentage
            */
            initWithDuration(duration, fromPercentage, toPercentage);
            /**
            * 
            */
            reverse();
            /**
            * start with a target
            */
            startWithTarget(target);
            /**
            * 
            */
            update(time);
        }
}
declare module cc {
        export class ProgressTimer extends cc.Node {
            /**
            * cc.Progresstimer is a subclass of cc.Node.
            */
            constructor();
            /**
            * create a progress timer object with image file name that renders the inner sprite according to the percentage
            */
            static create(sprite);
            /**
            * constructor of cc.cc.ProgressTimer
            */
            ctor(sprite);
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
            initWithSprite(sprite);
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
            setBarChangeRate(barChangeRate);
            /**
            * set color of sprite
            */
            setColor(color);
            /**
            * Midpoint setter
            */
            setMidpoint(mpoint);
            /**
            * set opacity of sprite
            */
            setOpacity(opacity);
            /**
            * only use for jsbinding
            */
            setOpacityModifyRGB(bValue);
            /**
            * from 0-100
            */
            setPercentage(percentage);
            /**
            * Reverse Progress setter
            */
            setReverseDirection(reverse);
            /**
            * set reverse cc.ProgressTimer
            */
            setReverseProgress(reverse);
            /**
            * set sprite for cc.ProgressTimer
            */
            setSprite(sprite);
            /**
            * set Progress type of cc.ProgressTimer
            */
            setType(type);
        }
}
declare module cc {
        export class ProgressTo extends cc.ActionInterval {
            /**
            * Progress to percentage
            */
            constructor(duration, percent);
            /**
            * return a new cc.ProgressTo, all the configuration is the same as the original
            */
            clone();
            /**
            * Creates a ProgressTo action with a duration and a percent
Constructor of cc.ProgressTo
            */
            ctor(duration, percent);
            /**
            * Initializes with a duration and a percent
            */
            initWithDuration(duration, percent);
            /**
            * reverse hasn&#39;t been supported
            */
            reverse();
            /**
            * start with a target
            */
            startWithTarget(target);
            /**
            * custom update
            */
            update(time);
        }
}
declare module cc {
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
            addProtectedChild(child, localZOrder, tag);
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
            getProtectedChildByTag(tag);
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
            removeAllProtectedChildrenWithCleanup(cleanup);
            /**
            * Removes a child from the container.
            */
            removeProtectedChild(child, cleanup);
            /**
            * Removes a child from the container by tag value.
            */
            removeProtectedChildByTag(tag, cleanup);
            /**
            * Reorders a child according to a new z value.
            */
            reorderProtectedChild(child, localZOrder);
            /**
            * 
    Sorts the children array once before drawing, instead of every time when a child is added or reordered.
            */
            sortAllProtectedChildren();
            /**
            * transforms and draws itself, and visit its children and protected children.
            */
            visit(ctx);
        }
}
declare module cc {
        export class Rect  {
            /**
            * cc.Rect is the class for rect object, please do not use its constructor to create rects, use cc.rect() alias function instead.
            */
            constructor(width, height, width, height);
        }
}
declare module cc {
        export class RemoveSelf extends cc.ActionInstant {
            /**
            * Delete self in the next frame.
            */
            constructor(isNeedCleanUp);
        }
}
declare module cc {
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
            beginWithClear(r, g, b, a, depthValue, stencilValue);
            /**
            * Clear RenderTexture.
            */
            cleanup();
            /**
            * clears the texture with a color
            */
            clear(r, g, b, a);
            /**
            * clears the texture with a specified depth value
            */
            clearDepth(depthValue);
            /**
            * clears the texture with rect.
            */
            clearRect(x, y, width, height);
            /**
            * clears the texture with a specified stencil value
            */
            clearStencil(stencilValue);
            /**
            * creates a RenderTexture object with width and height in Points and a pixel format, only RGB and RGBA formats are valid
            */
            static create(width, height, format, depthStencilFormat);
            /**
            * creates a RenderTexture object with width and height in Points and a pixel format, only RGB and RGBA formats are valid
Constructor of cc.RenderTexture for Canvas
            */
            ctor(width, height, format, depthStencilFormat);
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
            initWithWidthAndHeight(width, height, format, depthStencilFormat);
            /**
            * When enabled, it will render its children into the texture automatically.
            */
            isAutoDraw();
            /**
            * Listen &quot;come to background&quot; message, and save render texture.
            */
            listenToBackground(obj);
            /**
            * Listen &quot;come to foreground&quot; message and restore the frame buffer object.
            */
            listenToForeground(obj);
            /**
            * creates a new CCImage from with the texture&#39;s data.
            */
            newCCImage(flipImage);
            /**
            * saves the texture into a file using JPEG format.
            */
            saveToFile(filePath, format);
            /**
            * When enabled, it will render its children into the texture automatically.
            */
            setAutoDraw(autoDraw);
            /**
            * Set the clear color value.
            */
            setClearColor(clearColor);
            /**
            * Set value for clearDepth.
            */
            setClearDepth(clearDepth);
            /**
            * Set the clearFlags
            */
            setClearFlags(clearFlags);
            /**
            * Set value for clear Stencil.
            */
            setClearStencil(clearStencil);
            /**
            * Set the sprite
            */
            setSprite(sprite);
        }
}
declare module cc {
        export class Repeat extends cc.ActionInterval {
            /**
            * Repeats an action a number of times.
            */
            constructor(action, times);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action, times);
            /**
            * Get inner Action.
            */
            getInnerAction();
            /**
            * 
            */
            initWithAction(action, times);
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
            setInnerAction(action);
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class RepeatForever extends cc.ActionInterval {
            /**
            * Repeats an action for ever.
            */
            constructor(action);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action);
            /**
            * Get inner action.
            */
            getInnerAction();
            /**
            * 
            */
            initWithAction(action);
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
            setInnerAction(action);
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * called every frame with it&#39;s delta time.
            */
            step(dt);
        }
}
declare module cc {
        export class ResolutionPolicy extends cc.Class {
            /**
            * cc.ResolutionPolicy class is the root strategy class of scale strategy,
its main task is to maintain the compatibility with Cocos2d-x
            */
            constructor(containerStg, contentStg);
            /**
            * Function to apply this resolution policy
The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
The target view can then apply these value to itself, it&#39;s preferred not to modify directly its private variables
            */
            apply(view, designedResolution);
            /**
            * Constructor of cc.ResolutionPolicy
            */
            ctor(containerStg, contentStg);
            /**
            * Manipulation after appyling the strategy
            */
            postApply(view);
            /**
            * Manipulation before applying the resolution policy
            */
            preApply(view);
            /**
            * Setup the container&#39;s scale strategy
            */
            setContainerStrategy(containerStg);
            /**
            * Setup the content&#39;s scale strategy
            */
            setContentStrategy(contentStg);
        }
}
declare module cc {
        export class ReuseGrid extends cc.ActionInstant {
            /**
            * cc.ReuseGrid action
            */
            constructor(times);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(times);
            /**
            * initializes an action with the number of times that the current grid will be reused
            */
            initWithTimes(times);
            /**
            * called before the action start.
            */
            startWithTarget(target);
        }
}
declare module cc {
        export class ReverseTime extends cc.ActionInterval {
            /**
            * 
Executes an action in reverse order, from time=duration to time=0                                     
            */
            constructor(action);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action);
            /**
            * 
            */
            initWithAction(action);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class RGBA  {
            /**
            * An RGBA color class, its value present as percent
            */
            constructor(r, g, b, a);
        }
}
declare module cc {
        export class Ripple3D extends cc.Grid3DAction {
            /**
            * cc.Ripple3D action.
            */
            constructor(duration, gridSize, position, radius, waves, amplitude);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, position, radius, waves, amplitude);
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
            initWithDuration(duration, gridSize, position, radius, waves, amplitude);
            /**
            * set Amplitude
            */
            setAmplitude(amplitude);
            /**
            * get amplitude rate
            */
            setAmplitudeRate(amplitudeRate);
            /**
            * set center position
            */
            setPosition(position);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class RotateBy extends cc.ActionInterval {
            /**
            * Rotates a cc.Node object clockwise a number of degrees by modifying it&#39;s rotation attribute.
            */
            constructor(duration, deltaAngleX, deltaAngleY);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, deltaAngleX, deltaAngleY);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, deltaAngleX, deltaAngleY);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class RotateTo extends cc.ActionInterval {
            /**
            * Rotates a cc.Node object to a certain angle by modifying it&#39;s.
            */
            constructor(duration, deltaAngleX, deltaAngleY);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, deltaAngleX, deltaAngleY);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, deltaAngleX, deltaAngleY);
            /**
            * RotateTo reverse not implemented.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            parse(xmlTxt);
        }
}
declare module cc {
        export class Scale9Sprite extends cc.Node {
            /**
            * A 9-slice sprite for cocos2d.
            */
            constructor();
            /**
            * add texture loaded event listener
            */
            addLoadedEventListener(callback, target);
            /**
            * Creates a 9-slice sprite with a texture file, a delimitation zone and
with the specified cap insets.
            */
            static create(file, rect, capInsets);
            /**
            * 
            */
            static createWithSpriteFrame(spriteFrame, capInsets);
            /**
            * 
            */
            static createWithSpriteFrameName(spriteFrameName, capInsets);
            /**
            * Constructor function.
            */
            ctor(file, rect, capInsets);
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
            initWithBatchNode(batchNode, rect, rotated, capInsets);
            /**
            * Initializes a 9-slice sprite with a texture file, a delimitation zone and
with the specified cap insets.
            */
            initWithFile(file, rect, capInsets);
            /**
            * Initializes a 9-slice sprite with an sprite frame and with the specified
cap insets.
            */
            initWithSpriteFrame(spriteFrame, capInsets);
            /**
            * Initializes a 9-slice sprite with an sprite frame name and with the specified
cap insets.
            */
            initWithSpriteFrameName(spriteFrameName, capInsets);
            /**
            * returns whether or not the opacity will be applied using glColor(R,G,B,opacity) or glColor(opacity, opacity, opacity, opacity);
            */
            isOpacityModifyRGB();
            /**
            * Creates and returns a new sprite object with the specified cap insets.
            */
            resizableSpriteWithCapInsets(capInsets);
            /**
            * Color: conforms to CCRGBAProtocol protocol
            */
            setColor(color);
            /**
            * Sets the untransformed size of the Scale9Sprite.
            */
            setContentSize(size, height);
            /**
            * Sets the bottom side inset
            */
            setInsetBottom(insetBottom);
            /**
            * Sets the left side inset
            */
            setInsetLeft(insetLeft);
            /**
            * Sets the right side inset
            */
            setInsetRight(insetRight);
            /**
            * Sets the top side inset
            */
            setInsetTop(insetTop);
            /**
            * Opacity: conforms to CCRGBAProtocol protocol
            */
            setOpacity(opacity);
            /**
            * sets the premultipliedAlphaOpacity property.
            */
            setOpacityModifyRGB(value);
            /**
            * set the sprite frame of cc.Scale9Sprite
            */
            setSpriteFrame(spriteFrame);
            /**
            * return  texture is loaded
            */
            textureLoaded();
            /**
            * Update the scale9Sprite with a SpriteBatchNode.
            */
            updateWithBatchNode(batchNode, originalRect, rotated, capInsets);
        }
}
declare module cc {
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
            startWithTarget(target);
        }
}
declare module cc {
        export class ScaleTo extends cc.ActionInterval {
            /**
            * Scales a cc.Node object to a zoom factor by modifying it&#39;s scale attribute.
            */
            constructor(duration, sx, sy);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, sx, sy);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, sx, sy);
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            isTargetPaused(target);
            /**
            * 
 Pause all selectors from all targets.
            */
            pauseAllTargets();
            /**
            * Pause all selectors from all targets with a minimum priority.
            */
            pauseAllTargetsWithMinPriority(minPriority);
            /**
            * 
   Pauses the target.
            */
            pauseTarget(target);
            /**
            * Resumes the target.
            */
            resumeTarget(target);
            /**
            * Resume selectors on a set of targets.
            */
            resumeTargets(targetsToResume);
            /**
            * 
  The scheduled method will be called every &#39;interval&#39; seconds.
            */
            scheduleCallbackForTarget(target, callback_fn, interval, repeat, delay, paused);
            /**
            * 
   Schedules the &#39;update&#39; callback_fn for a given target with a given priority.
            */
            scheduleUpdateForTarget(target, priority, paused);
            /**
            * 
   Modifies the time of all scheduled callbacks.
            */
            setTimeScale(timeScale);
            /**
            * 
     Unschedules all function callbacks from all targets.
            */
            unscheduleAllCallbacks();
            /**
            * Unschedules all function callbacks for a given target.
            */
            unscheduleAllCallbacksForTarget(target);
            /**
            * 
   Unschedules all function callbacks from all targets with a minimum priority.
            */
            unscheduleAllCallbacksWithMinPriority(minPriority);
            /**
            * 
  Unschedule a callback function for a given target.
            */
            unscheduleCallbackForTarget(target, callback_fn);
            /**
            * Unschedules the update callback function for a given target
            */
            unscheduleUpdateForTarget(target);
            /**
            * &#39;update&#39; the scheduler.
            */
            update(dt);
        }
}
declare module cc {
        export class screen  {
            /**
            * The fullscreen API provides an easy way for web content to be presented using the user&#39;s entire screen.
            */
            constructor();
            /**
            * Automatically request full screen with a touch/click event
            */
            autoFullScreen(element, onFullScreenChange);
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
            requestFullScreen(element, onFullScreenChange);
        }
}
declare module cc {
        export class ScrollView extends cc.Layer {
            /**
            * ScrollView support for cocos2d -x.
            */
            constructor();
            /**
            * Returns an autoreleased scroll view object.
            */
            static create(size, container);
            /**
            * 
            */
            ctor(size, container);
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
            initWithViewSize(size, container);
            /**
            * Determines whether it clips its children or not.
            */
            isClippingToBounds();
            /**
            * Determines if a given node&#39;s bounding box is in visible bounds
            */
            isNodeVisible(node);
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
            onTouchBegan(touch, event);
            /**
            * Provided to make scroll view compatible with SWLayer&#39;s pause method
            */
            pause(sender);
            /**
            * Provided to make scroll view compatible with SWLayer&#39;s resume method
            */
            resume(sender);
            /**
            * Sets a new content offset.
            */
            setContentOffset(offset, animated);
            /**
            * Sets a new content offset.
            */
            setContentOffsetInDuration(offset, dt);
            /**
            * Sets a new scale and does that for a predefined duration.
            */
            setZoomScale(scale, animated);
            /**
            * Sets a new scale for container in a given duration.
            */
            setZoomScaleInDuration(s, dt);
        }
}
declare module cc {
        export class Sequence extends cc.ActionInterval {
            /**
            * Runs actions sequentially, one after another.
            */
            constructor(tempArray);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(tempArray);
            /**
            * Initializes the action 
            */
            initWithTwoActions(actionOne, actionTwo);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * stop the action.
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class shaderCache  {
            /**
            * cc.shaderCache is a singleton object that stores manages GL shaders
            */
            constructor();
            /**
            * adds a CCGLProgram to the cache for a given name
            */
            addProgram(program, key);
            /**
            * returns a GL program for a shader name
            */
            getProgram(shaderName);
            /**
            * loads the default shaders
            */
            loadDefaultShaders();
            /**
            * returns a GL program for a given key
            */
            programForKey(key);
            /**
            * reload the default shaders
            */
            reloadDefaultShaders();
        }
}
declare module cc {
        export class Shaky3D extends cc.Grid3DAction {
            /**
            * cc.Shaky3D action.
            */
            constructor(duration, gridSize, range, shakeZ);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, range, shakeZ);
            /**
            * initializes the action with a range, shake Z vertices, a grid and duration
            */
            initWithDuration(duration, gridSize, range, shakeZ);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class ShakyTiles3D extends cc.TiledGrid3DAction {
            /**
            * cc.ShakyTiles3D action.
            */
            constructor(duration, gridSize, range, shakeZ);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, range, shakeZ);
            /**
            * Initializes the action with a range, whether or not to shake Z vertices, a grid size, and duration.
            */
            initWithDuration(duration, gridSize, range, shakeZ);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class ShatteredTiles3D extends cc.TiledGrid3DAction {
            /**
            * cc.ShatteredTiles3D action.
            */
            constructor(duration, gridSize, range, shatterZ);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, range, shatterZ);
            /**
            * Initializes the action with a range, whether or not to shatter Z vertices, a grid size and duration.
            */
            initWithDuration(duration, gridSize, range, shatterZ);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
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
            update(dt);
        }
}
declare module cc {
        export class ShuffleTiles extends cc.TiledGrid3DAction {
            /**
            * cc.ShuffleTiles action, Shuffle the tiles in random order.
            */
            constructor(duration, gridSize, seed);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, seed);
            /**
            * Get Delta
            */
            getDelta(pos);
            /**
            * Initializes the action with a random seed, the grid size and the duration.
            */
            initWithDuration(duration, gridSize, seed);
            /**
            * Place Tile
            */
            placeTile(pos, tile);
            /**
            * Shuffle
            */
            shuffle(array, len);
            /**
            * Start with target
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class Size  {
            /**
            * cc.Size is the class for size object, please do not use its constructor to create sizes, use cc.size() alias function instead.
            */
            constructor(width, height);
        }
}
declare module cc {
        export class SkewBy extends cc.SkewTo {
            /**
            * Skews a cc.Node object by skewX and skewY degrees.
            */
            constructor(t, sx, sy);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(t, sx, sy);
            /**
            * Initializes the action.
            */
            initWithDuration(t, deltaSkewX, deltaSkewY);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action width target.
            */
            startWithTarget(target);
        }
}
declare module cc {
        export class SkewTo extends cc.ActionInterval {
            /**
            * Skews a cc.Node object to given angles by modifying it&#39;s skewX and skewY attributes
            */
            constructor(t, sx, sy);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(t, sx, sy);
            /**
            * Initializes the action.
            */
            initWithDuration(t, sx, sy);
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class SortableObject extends cc.Class {
            /**
            * The sortable object interface
            */
            constructor();
        }
}
declare module cc {
        export class SortedObject extends cc.SortableObject {
            /**
            * The SortedObject class
            */
            constructor();
        }
}
declare module cc {
        export class Spacer extends cc.Layer {
            /**
            * The Spacer class
            */
            constructor();
        }
}
declare module cc {
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
            ctor(tempArray);
            /**
            * initializes the Spawn action with the 2 actions to spawn
            */
            initWithTwoActions(action1, action2);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class Speed extends cc.Action {
            /**
            * Changes the speed of an action, making it take longer (speed &gt; 1)
or less (speed 
            */
            constructor(action, speed);
            /**
            * to copy object with deep copy.
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(action, speed);
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
            initWithAction(action, speed);
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
            setInnerAction(action);
            /**
            * alter the speed of the inner function in runtime.
            */
            setSpeed(speed);
            /**
            * called before the action start.
            */
            startWithTarget(target);
            /**
            * called every frame with it&#39;s delta time.
            */
            step(dt);
            /**
            * Stop the action.
            */
            stop();
        }
}
declare module cc {
        export class SplitCols extends cc.TiledGrid3DAction {
            /**
            * cc.SplitCols action.
            */
            constructor(duration, cols);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, cols);
            /**
            * initializes the action with the number of columns to split and the duration
            */
            initWithDuration(duration, cols);
            /**
            * called before the action start.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class SplitRows extends cc.TiledGrid3DAction {
            /**
            * cc.SplitRows action.
            */
            constructor(duration, rows);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, rows);
            /**
            * initializes the action with the number of rows to split and the duration
            */
            initWithDuration(duration, rows);
            /**
            * called before the action start.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class Sprite extends cc.Node {
            /**
            * cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) )  

cc.Sprite can be created with an image, or with a sub-rectangle of an image.
            */
            constructor(fileName, rect, rotated);
            /**
            * Add child to sprite (override cc.Node)
            */
            addChild(child, localZOrder, tag);
            /**
            * Add a event listener for texture loaded event.
            */
            addLoadedEventListener(callback, target);
            /**
            * Create a sprite with image path or frame name or texture or spriteFrame.
            */
            static create(fileName, rect, rotated);
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
            ignoreAnchorPointForPosition(relative);
            /**
            * Initializes an empty sprite with nothing init.
            */
            init();
            /**
            * 
    Initializes a sprite with an image filename.
            */
            initWithFile(filename, rect);
            /**
            * Initializes a sprite with a SpriteFrame.
            */
            initWithSpriteFrame(spriteFrame);
            /**
            * Initializes a sprite with a sprite frame name.
            */
            initWithSpriteFrameName(spriteFrameName);
            /**
            * Initializes a sprite with a texture and a rect in points, optionally rotated.
            */
            initWithTexture(texture, rect, rotated);
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
            isFrameDisplayed(frame);
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
            removeAllChildren(cleanup);
            /**
            * Removes a child from the sprite.
            */
            removeChild(child, cleanup);
            /**
            * Reorders a child according to a new z value.
            */
            reorderChild(child, zOrder);
            /**
            * Sets the index used on the TextureAtlas.
            */
            setAtlasIndex(atlasIndex);
            /**
            * Sets the batch node to sprite
            */
            setBatchNode(spriteBatchNode);
            /**
            * conforms to cc.TextureProtocol protocol
            */
            setBlendFunc(src, dst);
            /**
            * Makes the sprite to be updated in the Atlas.
            */
            setDirty(bDirty);
            /**
            * Sets a new display frame to the sprite.
            */
            setDisplayFrame(newFrame);
            /**
            * Changes the display frame with animation name and index.
            */
            setDisplayFrameWithAnimationName(animationName, frameIndex);
            /**
            * Sets whether the sprite should be flipped horizontally or not.
            */
            setFlippedX(flippedX);
            /**
            * Sets whether the sprite should be flipped vertically or not.
            */
            setFlippedY(flippedY);
            /**
            * Sets whether opacity modify color or not.
            */
            setOpacityModifyRGB(modify);
            /**
            * Sets a new sprite frame to the sprite.
            */
            setSpriteFrame(newFrame);
            /**
            * Sets the texture of sprite
            */
            setTexture(texture);
            /**
            * Sets the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
            */
            setTextureAtlas(textureAtlas);
            /**
            * Updates the texture rect of the CCSprite in points.
            */
            setTextureRect(rect, rotated, untrimmedSize, needConvert);
            /**
            * 
   set the vertex rect.
            */
            setVertexRect(rect);
            /**
            * Sets whether the sprite is visible or not.
            */
            setVisible(visible);
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
            useBatchNode(batchNode);
        }
}
declare module cc {
        export class SpriteBatchNode extends cc.Node {
            /**
            * 
    A cc.SpriteBatchNode can reference one and only one texture (one image file, one texture atlas).
            */
            constructor(fileImage, capacity);
            /**
            * Add child to the sprite batch node (override addChild of cc.Node)
            */
            addChild(child, zOrder, tag);
            /**
            * 
   This is the opposite of &quot;addQuadFromSprite.
            */
            addSpriteWithoutQuad(child, z, aTag);
            /**
            * Add child at the end, faster than insert child
            */
            appendChild(sprite);
            /**
            * Returns atlas index for child
            */
            atlasIndexForChild(sprite, nZ);
            /**
            * 
   creates a cc.SpriteBatchNodeCanvas with a file image (.png, .jpg etc) with a default capacity of 29 children.
            */
            static create(fileImage, capacity);
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
            highestAtlasIndexInChild(sprite);
            /**
            * Increase Atlas Capacity
            */
            increaseAtlasCapacity();
            /**
            * 
   initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
            */
            init(fileImage, capacity);
            /**
            * 
   Initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
            */
            initWithFile(fileImage, capacity);
            /**
            * 
   Initializes a cc.SpriteBatchNode with a texture2d and capacity of children.
            */
            initWithTexture(tex, capacity);
            /**
            * Insert a child
            */
            insertChild(sprite, index);
            /**
            * 
   Inserts a quad at a certain index into the texture atlas.
            */
            insertQuadFromSprite(sprite, index);
            /**
            * Returns lowest atlas index in child
            */
            lowestAtlasIndexInChild(sprite);
            /**
            * Rebuild index in order for child
            */
            rebuildIndexInOrder(pobParent, index);
            /**
            * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
            */
            removeAllChildren(cleanup);
            /**
            * Removes a child from cc.SpriteBatchNode (override removeChild of cc.Node)
            */
            removeChild(child, cleanup);
            /**
            * Removes a child given a certain index.
            */
            removeChildAtIndex(index, doCleanup);
            /**
            * Removes sprite from TextureAtlas
            */
            removeSpriteFromAtlas(sprite);
            /**
            * Sprites use this to start sortChildren, don&#39;t call this manually
            */
            reorderBatch(reorder);
            /**
            * Reorder children (override reorderChild of cc.Node)
            */
            reorderChild(child, zOrder);
            /**
            * Sets the source and destination blending function for the texture
            */
            setBlendFunc(src, dst);
            /**
            * Sets the texture of the sprite batch node.
            */
            setTexture(texture);
            /**
            * TextureAtlas of cc.SpriteBatchNode setter
            */
            setTextureAtlas(textureAtlas);
            /**
            * Sort all children nodes (override draw of cc.Node)
            */
            sortAllChildren();
            /**
            * 
  Updates a quad at a certain index into the texture atlas.
            */
            updateQuadFromSprite(sprite, index);
        }
}
declare module cc {
        export class SpriteFrame extends cc.Class {
            /**
            * 
   A cc.SpriteFrame has:
     - texture: A cc.Texture2D that will be used by the cc.Sprite
     - rectangle: A rectangle of the texture
   
   You can modify the frame of a cc.Sprite by doing:

            */
            constructor(filename, rect, rotated, offset, originalSize);
            /**
            * Add a event listener for texture loaded event.
            */
            addLoadedEventListener(callback, target);
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
            static create(filename, rect, rotated, offset, originalSize);
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
            initWithTexture(texture, rect, rotated, offset, originalSize);
            /**
            * Returns whether the sprite frame is rotated in the texture.
            */
            isRotated();
            /**
            * Sets the offset of the frame in the texture
            */
            setOffset(offsets);
            /**
            * Sets the offset of the sprite frame in the texture in pixel
            */
            setOffsetInPixels(offsetInPixels);
            /**
            * Sets the original size of the trimmed image
            */
            setOriginalSize(sizeInPixels);
            /**
            * Sets the original size of the trimmed image
            */
            setOriginalSizeInPixels(sizeInPixels);
            /**
            * Sets the rect of the sprite frame in the texture
            */
            setRect(rect);
            /**
            * Sets the rect of the frame in the texture
            */
            setRectInPixels(rectInPixels);
            /**
            * Set whether the sprite frame is rotated in the texture.
            */
            setRotated(bRotated);
            /**
            * Sets the texture of the frame, the texture is retained automatically
            */
            setTexture(texture);
            /**
            * Returns whether the texture have been loaded
            */
            textureLoaded();
        }
}
declare module cc {
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
            addSpriteFrame(frame, frameName);
            /**
            * 
  Adds multiple Sprite Frames from a plist or json file.
            */
            addSpriteFrames(url, texture);
            /**
            * 
  Returns an Sprite Frame that was previously added.
            */
            getSpriteFrame(name);
            /**
            * Deletes an sprite frame from the sprite frame cache.
            */
            removeSpriteFrameByName(name);
            /**
            * 
  Purges the dictionary of loaded sprite frames.
            */
            removeSpriteFrames();
            /**
            * 
    Removes multiple Sprite Frames from a plist file.
            */
            removeSpriteFramesFromFile(url);
            /**
            * 
   Removes all Sprite Frames associated with the specified textures.
            */
            removeSpriteFramesFromTexture(texture);
        }
}
declare module cc {
        export class StopGrid extends cc.ActionInstant {
            /**
            * 
cc.StopGrid action.
            */
            constructor();
            /**
            * called before the action start.
            */
            startWithTarget(target);
        }
}
declare module cc {
        export class sys  {
            /**
            * 
            */
            constructorcc.sys.ANDROID;
            /**
            * Clean a script in the JS VM, only available in JSB
            */
            static cleanScript(jsfile);
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
        export class TableView extends cc.ScrollView {
            /**
            * UITableView counterpart for cocos2d for iphone.
            */
            constructor();
            /**
            * Returns an existing cell at a given index.
            */
            cellAtIndex(idx);
            /**
            * An initialized table view object
            */
            static create(dataSource, size, container);
            /**
            * The
            */
            ctor(dataSource, size, container);
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
            insertCellAtIndex(idx);
            /**
            * reloads data from data source.
            */
            reloadData();
            /**
            * Removes a cell at a given index
            */
            removeCellAtIndex(idx);
            /**
            * determines how cell is ordered and filled in the view.
            */
            setVerticalFillOrder(fillOrder);
            /**
            * Updates the content of the cell at a given index.
            */
            updateCellAtIndex(idx);
        }
}
declare module cc {
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
        export class TargetedAction extends cc.ActionInterval {
            /**
            * 
    Overrides the target of an action so that it always runs on the target
    specified at action creation rather than the one specified by runAction.
            */
            constructor(target, action);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(target, action);
            /**
            * return the target that the action will be forced to run with
            */
            getForcedTarget();
            /**
            * Init an action with the specified action and forced target
            */
            initWithTarget(target, action);
            /**
            * set the target that the action will be forced to run with
            */
            setForcedTarget(forcedTarget);
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * stop the action
            */
            stop();
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class Tex2F  {
            /**
            * 
            */
            constructor(u1, v1);
        }
}
declare module cc {
        export class TextFieldDelegate extends cc.Class {
            /**
            * Text field delegate
            */
            constructor();
            /**
            * If doesn&#39;t want draw sender as default, return true.
            */
            onDraw(sender);
            /**
            * If the sender doesn&#39;t want to attach with IME, return true;
            */
            onTextFieldAttachWithIME(sender);
            /**
            * If the sender doesn&#39;t want to delete the delText, return true;
            */
            onTextFieldDeleteBackward(sender, delText, len);
            /**
            * If the sender doesn&#39;t want to detach with IME, return true;
            */
            onTextFieldDetachWithIME(sender);
            /**
            * If the sender doesn&#39;t want to insert the text, return true;
            */
            onTextFieldInsertText(sender, text, len);
        }
}
declare module cc {
        export class TextFieldTTF extends cc.LabelTTF {
            /**
            * A simple text input field with TTF font.
            */
            constructor(placeholder, dimensions, alignment, fontName, fontSize);
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
            static create(placeholder, dimensions, alignment, fontName, fontSize);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(placeholder, dimensions, alignment, fontName, fontSize);
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
            draw(ctx);
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
            initWithPlaceHolder(placeholder, dimensions, alignment, fontName, fontSize);
            /**
            * Append the text.
            */
            insertText(text, len);
            /**
            * Remove delegate
            */
            removeDelegate();
            /**
            * Sets the color of space holder.
            */
            setColorSpaceHolder(value);
            /**
            * Set the delegate.
            */
            setDelegate(value);
            /**
            * Set the place holder.
            */
            setPlaceHolder(text);
            /**
            * Input text property
            */
            setString(text);
            /**
            * Sets the color of cc.TextFieldTTF&#39;s text.
            */
            setTextColor(textColor);
            /**
            * Recursive method that visit its children and draw them.
            */
            visit(ctx);
        }
}
declare module cc {
        export class Texture2D extends cc.Class {
            /**
            * 
This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.
            */
            constructor();
            /**
            * add listener for loaded event
            */
            addLoadedEventListener(callback, target);
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
            initWithElement(element);
            /**
            * init with ETC file
            */
            initWithETCFile(file);
            /**
            * init with PVR file
            */
            initWithPVRFile(file);
            /**
            * init with PVRTC data
            */
            initWithPVRTCData(data, level, bpp, hasAlpha, length, pixelFormat);
            /**
            * check whether texture is loaded
            */
            isLoaded();
            /**
            * remove listener from listeners by target
            */
            removeLoadedEventListener(target);
        }
}
declare module cc {
        export class TextureAtlas extends cc.Class {
            /**
            * A class that implements a Texture Atlas.
            */
            constructor();
            /**
            * Creates a TextureAtlas with an filename and with an initial capacity for Quads.
            */
            static create(fileName, capacity);
            /**
            * 
            */
            static createWithTexture();
            /**
            * Creates a TextureAtlas with an filename and with an initial capacity for Quads.
            */
            ctor(fileName, capacity);
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
            fillWithEmptyQuadsFromIndex(index, amount);
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
            increaseTotalQuadsWith(amount);
            /**
            * Initializes a TextureAtlas with a filename and with a certain capacity for Quads.
            */
            initWithFile(file, capacity);
            /**
            * Initializes a TextureAtlas with a previously initialized Texture2D object, and
with an initial capacity for Quads.
            */
            initWithTexture(texture, capacity);
            /**
            * Inserts a Quad (texture, vertex and color) at a certain index
index must be between 0 and the atlas capacity - 1 
            */
            insertQuad(quad, index);
            /**
            * Removes the quad that is located at a certain index and inserts it at a new index 
This operation is faster than removing and inserting in a quad in 2 different steps
            */
            insertQuadFromIndex(fromIndex, newIndex);
            /**
            * 
     Inserts a c array of quads at a given index                                           
     index must be between 0 and the atlas capacity - 1                                    
     this method doesn&#39;t enlarge the array when amount + index &gt; totalQuads                

            */
            insertQuads(quads, index, amount);
            /**
            * whether or not the array buffer of the VBO needs to be updated
            */
            isDirty();
            /**
            * Moves an amount of quads from oldIndex at newIndex
            */
            moveQuadsFromIndex(oldIndex, amount, newIndex);
            /**
            * Removes all Quads.
            */
            removeAllQuads();
            /**
            * Removes a quad at a given index number.
            */
            removeQuadAtIndex(index);
            /**
            * Removes a given number of quads at a given index
            */
            removeQuadsAtIndex(index, amount);
            /**
            * Resize the capacity of the CCTextureAtlas.
            */
            resizeCapacity(newCapacity);
            /**
            * specify if the array buffer of the VBO needs to be updated
            */
            setDirty(dirty);
            /**
            * 
            */
            setQuads(quads);
            /**
            * 
            */
            setTexture(texture);
            /**
            * Updates a Quad (texture, vertex and color) at a certain index 
index must be between 0 and the atlas capacity - 1 
            */
            updateQuad(quad, index);
        }
}
declare module cc {
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
            addETCImage(filename);
            /**
            * Returns a Texture2D object given an PVR filename
If the file image was not previously loaded, it will create a new Texture2D
 object and it will return it.
            */
            addPVRImage(path);
            /**
            * 
    Returns a Texture2D object given an PVR filename                                                              
    If the file image was not previously loaded, it will create a new CCTexture2D                                 
    object and it will return it.
            */
            addPVRTCImage(filename);
            /**
            * Returns a Texture2D object given an UIImage image
If the image was not previously loaded, it will create a new Texture2D object and it will return it.
            */
            addUIImage(image, key);
            /**
            * Cache the image data
            */
            cacheImage(path, texture);
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
            getKeyByTexture(texture);
            /**
            * 
            */
            getTextureColors(texture);
            /**
            * Returns an already created texture.
            */
            getTextureForKey(textureKeyName);
            /**
            * Purges the dictionary of loaded textures.
            */
            removeAllTextures();
            /**
            * Deletes a texture from the cache given a texture
            */
            removeTexture(texture);
            /**
            * Deletes a texture from the cache given a its key name
            */
            removeTextureForKey(textureKeyName);
            /**
            * Returns an already created texture.
            */
            textureForKey(textureKeyName);
        }
}
declare module cc {
        export class Tile  {
            /**
            * A Tile composed of position, startPosition and delta.
            */
            constructor(position, startPosition, delta);
        }
}
declare module cc {
        export class TiledGrid3D extends cc.GridBase {
            /**
            * cc.TiledGrid3D is a 3D grid implementation.
            */
            constructor();
            /**
            * create one TiledGrid3D object
            */
            static create(gridSize, texture, flipped);
            /**
            * create one TiledGrid3D object
Constructor of cc.TiledGrid3D
            */
            ctor(gridSize, texture, flipped);
            /**
            * returns the original tile (untransformed) at the given position
            */
            originalTile(pos);
            /**
            * sets a new tile
            */
            setTile(pos, coords);
            /**
            * returns the tile at the given position
            */
            tile(pos);
        }
}
declare module cc {
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
            originalTile(position);
            /**
            * sets a new tile to a certain position of the grid
            */
            setTile(position, coords);
            /**
            * returns the tile that belongs to a certain position of the grid
            */
            tile(position);
        }
}
declare module cc {
        export class Timer extends cc.Class {
            /**
            * Light weight timer
            */
            constructor();
            /**
            * cc.Timer&#39;s Constructor
Constructor of cc.Timer
            */
            ctor(target, callback, interval, repeat, delay);
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
            setInterval(interval);
            /**
            * triggers the timer
            */
            update(dt);
        }
}
declare module cc {
        export class TintBy extends cc.ActionInterval {
            /**
            * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
            */
            constructor(duration, deltaRed, deltaGreen, deltaBlue);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, deltaRed, deltaGreen, deltaBlue);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, deltaRed, deltaGreen, deltaBlue);
            /**
            * Returns a reversed action.
            */
            reverse();
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class TintTo extends cc.ActionInterval {
            /**
            * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
            */
            constructor(duration, red, green, blue);
            /**
            * returns a new clone of the action
            */
            clone();
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, red, green, blue);
            /**
            * Initializes the action.
            */
            initWithDuration(duration, red, green, blue);
            /**
            * Start the action with target.
            */
            startWithTarget(target);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class TMXLayer extends cc.SpriteBatchNode {
            /**
            * cc.TMXLayer represents the TMX layer.
            */
            constructor();
            /**
            * cc.TMXLayer doesn&#39;t support adding a cc.Sprite manually.
            */
            addChild(child, zOrder, tag);
            /**
            * Creates a cc.TMXLayer with an tile set info, a layer info and a map info
            */
            static create(tilesetInfo, layerInfo, mapInfo);
            /**
            * Creates a cc.TMXLayer with an tile set info, a layer info and a map info   
Constructor of cc.TMXLayer
            */
            ctor(tilesetInfo, layerInfo, mapInfo);
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
            getPositionAt(pos, y);
            /**
            * properties from the layer.
            */
            getProperties();
            /**
            * Return the value for the specific property name
            */
            getProperty(propertyName);
            /**
            * Return texture of cc.SpriteBatchNode
            */
            getTexture();
            /**
            * Returns the tile (cc.Sprite) at a given a tile coordinate.
            */
            getTileAt(pos, y);
            /**
            * lipped tiles can be changed dynamically
            */
            getTileFlagsAt(pos, y);
            /**
            * Returns the tile gid at a given tile coordinate.
            */
            getTileGIDAt(pos, y);
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
            initWithTilesetInfo(tilesetInfo, layerInfo, mapInfo);
            /**
            * Dealloc the map that contains the tile position from memory.
            */
            releaseMap();
            /**
            * Remove child
            */
            removeChild(sprite, cleanup);
            /**
            * Removes a tile at given tile coordinate
            */
            removeTileAt(pos, y);
            /**
            * Sets the untransformed size of the TMXLayer.
            */
            setContentSize(size, height);
            /**
            * Set the layer name
            */
            setLayerName(layerName);
            /**
            * Layer orientation, which is the same as the map orientation
            */
            setLayerOrientation(Var);
            /**
            * Set layer size
            */
            setLayerSize(Var);
            /**
            * Set the map tile size.
            */
            setMapTileSize(Var);
            /**
            * properties from the layer.
            */
            setProperties(Var);
            /**
            * Sets the tile gid (gid = tile global id) at a given tile coordinate.
            */
            setTileGID(gid, posOrX, flagsOrY, flags);
            /**
            * Pointer to the map of tiles
            */
            setTiles(Var);
            /**
            * Tile set information for the layer
            */
            setTileset(Var);
            /**
            * Creates the tiles
            */
            setupTiles();
        }
}
declare module cc {
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
            setProperties(value);
        }
}
declare module cc {
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
            constructor(tmxFile, resourcePath);
            /**
            * Creates a TMX Format with a tmx file or content string
            */
            static create(tmxFile, resourcePath);
            /**
            * Creates a TMX Format with a tmx file or content string                           
Constructor of cc.TMXMapInfo
            */
            ctor(tmxFile, resourcePath);
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
            initWithTMXFile(tmxFile);
            /**
            * initializes a TMX format with an XML string and a TMX resource path
            */
            initWithXML(tmxString, resourcePath);
            /**
            * Initalises parsing of an XML file, either a tmx (Map) file or tsx (Tileset) file
            */
            parseXMLFile(tmxFile, isXmlString);
            /**
            * initializes parsing of an XML string, either a tmx (Map) string or tsx (Tileset) string
            */
            parseXMLString(xmlString);
            /**
            * Set the currentString
            */
            setCurrentString(currentString);
            /**
            * Layer attribute
            */
            setLayerAttribs(value);
            /**
            * Layers
            */
            setLayers(value);
            /**
            * Map width &amp; height
            */
            setMapSize(value);
            /**
            * ObjectGroups
            */
            setObjectGroups(value);
            /**
            * Set the Map orientation.
            */
            setOrientation(value);
            /**
            * parent element
            */
            setParentElement(value);
            /**
            * parent GID
            */
            setParentGID(value);
            /**
            * Properties
            */
            setProperties(value);
            /**
            * Is reading storing characters stream
            */
            setStoringCharacters(value);
            /**
            * Set the tile properties.
            */
            setTileProperties(tileProperties);
            /**
            * tilesets
            */
            setTilesets(value);
            /**
            * Tiles width &amp; height
            */
            setTileSize(value);
            /**
            * Set the tmxFileName
            */
            setTMXFileName(fileName);
        }
}
declare module cc {
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
            objectNamed(objectName);
            /**
            * Return the value for the specific property name
            */
            propertyNamed(propertyName);
            /**
            * Set the Group name
            */
            setGroupName(groupName);
            /**
            * Set the objects.
            */
            setObjects(objects);
            /**
            * Offset position of child objects
            */
            setPositionOffset(offset);
            /**
            * List of properties stored in a dictionary
            */
            setProperties(Var);
        }
}
declare module cc {
        export class TMXTiledMap extends cc.Node {
            /**
            * cc.TMXTiledMap knows how to parse and render a TMX map.
            */
            constructor(tmxFile, resourcePath);
            /**
            * Return All layers array.
            */
            allLayers();
            /**
            * Creates a TMX Tiled Map with a TMX file  or content string.
            */
            static create(tmxFile, resourcePath);
            /**
            * Creates a TMX Tiled Map with a TMX file  or content string.
            */
            ctor(tmxFile, resourcePath);
            /**
            * return the TMXLayer for the specific layer
            */
            getLayer(layerName);
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
            getObjectGroup(groupName);
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
            getPropertiesForGID(GID);
            /**
            * Return the value for the specific property name
            */
            getProperty(propertyName);
            /**
            * Gets the tile size.
            */
            getTileSize();
            /**
            * Initializes the instance of cc.TMXTiledMap with tmxFile
            */
            initWithTMXFile(tmxFile);
            /**
            * Initializes the instance of cc.TMXTiledMap with tmxString
            */
            initWithXML(tmxString, resourcePath);
            /**
            * Return properties dictionary for tile GID
            */
            propertiesForGID(GID);
            /**
            * map orientation
            */
            setMapOrientation(Var);
            /**
            * Set the map size.
            */
            setMapSize(Var);
            /**
            * object groups
            */
            setObjectGroups(Var);
            /**
            * Set the properties
            */
            setProperties(Var);
            /**
            * Set the tile size
            */
            setTileSize(Var);
        }
}
declare module cc {
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
            rectForGID(gid);
        }
}
declare module cc {
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
            update(dt);
        }
}
declare module cc {
        export class Touch extends cc.Class {
            /**
            * The touch event class
            */
            constructor(x, y, id);
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
            setTouchInfo(id, x, y);
        }
}
declare module cc {
        export class TransitionCrossFade extends cc.TransitionScene {
            /**
            * Cross fades two scenes using the cc.RenderTexture object.
            */
            constructor(t, scene);
            /**
            * Cross fades two scenes using the cc.RenderTexture object.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionCrossFade
            */
            ctor(t, scene);
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
        export class TransitionFade extends cc.TransitionScene {
            /**
            * Fade out the outgoing scene and then fade in the incoming scene.
            */
            constructor(t, scene, o);
            /**
            * Fade out the outgoing scene and then fade in the incoming scene.
            */
            static create(t, scene, color);
            /**
            * Constructor of TransitionFade
            */
            ctor(t, scene, o);
            /**
            * initializes the transition with a duration and with an RGB color
            */
            initWithDuration(t, scene, color);
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
        export class TransitionFadeBL extends cc.TransitionFadeTR {
            /**
            * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
            */
            constructor(t, scene);
            /**
            * 
            */
            actionWithSize(size);
            /**
            * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionFadeBL
            */
            ctor(t, scene);
        }
}
declare module cc {
        export class TransitionFadeDown extends cc.TransitionFadeTR {
            /**
            * Fade the tiles of the outgoing scene from the top to the bottom.
            */
            constructor(t, scene);
            /**
            * 
            */
            actionWithSize(size);
            /**
            * Fade the tiles of the outgoing scene from the top to the bottom.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionFadeDown
            */
            ctor(t, scene);
        }
}
declare module cc {
        export class TransitionFadeTR extends cc.TransitionScene {
            /**
            * Fade the tiles of the outgoing scene from the left-bottom corner the to top-right corner.
            */
            constructor(t, scene);
            /**
            * 
            */
            actionWithSize(size);
            /**
            * Fade the tiles of the outgoing scene from the left-bottom corner the to top-right corner.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionFadeTR
            */
            ctor(t, scene);
            /**
            * 
            */
            easeActionWithAction(action);
            /**
            * Custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionFadeUp extends cc.TransitionFadeTR {
            /**
            * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
            */
            constructor(t, scene);
            /**
            * 
            */
            actionWithSize(size);
            /**
            * Fade the tiles of the outgoing scene from the top-right corner to the bottom-left corner.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionFadeUp
            */
            ctor(t, scene);
        }
}
declare module cc {
        export class TransitionFlipAngular extends cc.TransitionSceneOriented {
            /**
            * Flips the screen half horizontally and half vertically.
            */
            constructor(t, scene, o);
            /**
            * Flips the screen half horizontally and half vertically.
            */
            static create(t, scene, o);
            /**
            * Constructor of TransitionFlipAngular
            */
            ctor(t, scene, o);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionFlipX extends cc.TransitionSceneOriented {
            /**
            * Flips the screen horizontally.
            */
            constructor(t, scene, o);
            /**
            * Flips the screen horizontally.
            */
            static create(t, scene, o);
            /**
            * Constructor of TransitionFlipX
            */
            ctor(t, scene, o);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionFlipY extends cc.TransitionSceneOriented {
            /**
            * Flips the screen vertically.
            */
            constructor(t, scene, o);
            /**
            * Flips the screen vertically.
            */
            static create(t, scene, o);
            /**
            * Constructor of TransitionFlipY
            */
            ctor(t, scene, o);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionJumpZoom extends cc.TransitionScene {
            /**
            * Zoom out and jump the outgoing scene, and then jump and zoom in the incoming
            */
            constructor(t, scene);
            /**
            * creates a scene transition that zooms then jump across the screen, the same for the incoming scene
            */
            static create(t, scene);
            /**
            * Constructor of TransitionJumpZoom
            */
            ctor(t, scene);
            /**
            * Custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionMoveInB extends cc.TransitionMoveInL {
            /**
            * Move in from to the bottom the incoming scene.
            */
            constructor(t, scene);
            /**
            * create a scene transition that Move in from to the bottom the incoming scene.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionMoveInB
            */
            ctor(t, scene);
            /**
            * init function
            */
            initScenes();
        }
}
declare module cc {
        export class TransitionMoveInL extends cc.TransitionScene {
            /**
            * Move in from to the left the incoming scene.
            */
            constructor(t, scene);
            /**
            * returns the action that will be performed
            */
            action();
            /**
            * creates an action that  Move in from to the left the incoming scene.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionMoveInL
            */
            ctor(t, scene);
            /**
            * creates an ease action from action
            */
            easeActionWithAction(action);
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
        export class TransitionMoveInR extends cc.TransitionMoveInL {
            /**
            * Move in from to the right the incoming scene.
            */
            constructor(t, scene);
            /**
            * create a scene transition that Move in from to the right the incoming scene.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionMoveInR
            */
            ctor(t, scene);
            /**
            * Init function
            */
            initScenes();
        }
}
declare module cc {
        export class TransitionMoveInT extends cc.TransitionMoveInL {
            /**
            * Move in from to the top the incoming scene.
            */
            constructor(t, scene);
            /**
            * Move in from to the top the incoming scene.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionMoveInT
            */
            ctor(t, scene);
            /**
            * init function
            */
            initScenes();
        }
}
declare module cc {
        export class TransitionPageTurn extends cc.TransitionScene {
            /**
            *  A transition which peels back the bottom right hand corner of a scene
to transition to the scene beneath it simulating a page turn.
            */
            constructor(t, scene, backwards);
            /**
            * 
            */
            actionWithSize(vector);
            /**
            * Creates a base transition with duration and incoming scene.
            */
            static create(t, scene, backwards);
            /**
            * 
            */
            ctor(t, scene, backwards);
            /**
            * Creates a base transition with duration and incoming scene.
            */
            initWithDuration(t, scene, backwards);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionProgress extends cc.TransitionScene {
            /**
            * cc.TransitionProgress transition.
            */
            constructor(t, scene);
            /**
            * create a cc.TransitionProgress object
            */
            static create(t, scene);
            /**
            * 
            */
            ctor(t, scene);
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
        export class TransitionProgressHorizontal extends cc.TransitionProgress {
            /**
            * cc.TransitionProgressHorizontal transition.
            */
            constructor(t, scene);
            /**
            * create a cc.TransitionProgressHorizontal object
            */
            static create(t, scene);
            /**
            * 
            */
            ctor(t, scene);
        }
}
declare module cc {
        export class TransitionProgressInOut extends cc.TransitionProgress {
            /**
            * cc.TransitionProgressInOut transition.
            */
            constructor();
            /**
            * create a cc.TransitionProgressInOut object
            */
            static create(t, scene);
            /**
            * The constructor of cc.TransitionProgressInOut.
            */
            ctor(t, scene);
        }
}
declare module cc {
        export class TransitionProgressOutIn extends cc.TransitionProgress {
            /**
            * cc.TransitionProgressOutIn transition.
            */
            constructor();
            /**
            * create a cc.TransitionProgressOutIn object
            */
            static create(t, scene);
            /**
            * The constructor of cc.TransitionProgressOutIn.
            */
            ctor(t, scene);
        }
}
declare module cc {
        export class TransitionProgressRadialCCW extends cc.TransitionProgress {
            /**
            * cc.TransitionRadialCCW transition.
            */
            constructor(t, scene);
            /**
            * create a cc.TransitionProgressRadialCCW object
            */
            static create(t, scene);
            /**
            * 
            */
            ctor(t, scene);
        }
}
declare module cc {
        export class TransitionProgressRadialCW extends cc.TransitionProgress {
            /**
            * cc.TransitionRadialCW transition.
            */
            constructor(t, scene);
            /**
            * create a cc.TransitionProgressRadialCW object
            */
            static create(t, scene);
            /**
            * 
            */
            ctor(t, scene);
        }
}
declare module cc {
        export class TransitionProgressVertical extends cc.TransitionProgress {
            /**
            * cc.TransitionProgressVertical transition.
            */
            constructor(t, scene);
            /**
            * create a cc.TransitionProgressVertical object
            */
            static create(t, scene);
            /**
            * 
            */
            ctor(t, scene);
        }
}
declare module cc {
        export class TransitionRotoZoom extends cc.TransitionScene {
            /**
            * Rotate and zoom out the outgoing scene, and then rotate and zoom in the incoming
            */
            constructor(t, scene);
            /**
            * Creates a Transtion rotation and zoom
            */
            static create(t, scene);
            /**
            * Constructor of TransitionRotoZoom
            */
            ctor(t, scene);
            /**
            * Custom On Enter callback
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionScene extends cc.Scene {
            /**
            * 
            */
            constructor(t, scene);
            /**
            * custom cleanup
            */
            cleanup();
            /**
            * creates a base transition with duration and incoming scene
            */
            static create(t, scene);
            /**
            * creates a base transition with duration and incoming scene
Constructor of cc.TransitionScene
            */
            ctor(t, scene);
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
            initWithDuration(t, scene);
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
        export class TransitionSceneOriented extends cc.TransitionScene {
            /**
            * A cc.Transition that supports orientation like.
            */
            constructor(t, scene, orientation);
            /**
            * creates a base transition with duration and incoming scene
            */
            static create(t, scene, orientation);
            /**
            * Constructor of TransitionSceneOriented
            */
            ctor(t, scene, orientation);
            /**
            * initialize the transition
            */
            initWithDuration(t, scene, orientation);
        }
}
declare module cc {
        export class TransitionShrinkGrow extends cc.TransitionScene {
            /**
            * Shrink the outgoing scene while grow the incoming scene
            */
            constructor(t, scene);
            /**
            * Shrink the outgoing scene while grow the incoming scene
            */
            static create(t, scene);
            /**
            * Constructor of TransitionShrinkGrow
            */
            ctor(t, scene);
            /**
            * 
            */
            easeActionWithAction(action);
            /**
            * Custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionSlideInB extends cc.TransitionSlideInL {
            /**
            * Slide in the incoming scene from the bottom border.
            */
            constructor(t, scene);
            /**
            * returns the action that will be performed by the incomming and outgoing scene
            */
            action();
            /**
            * create a Slide in the incoming scene from the bottom border.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionSlideInB
            */
            ctor(t, scene);
            /**
            * initializes the scenes
            */
            initScenes();
        }
}
declare module cc {
        export class TransitionSlideInL extends cc.TransitionScene {
            /**
            * a transition that a new scene is slided from left
            */
            constructor(t, scene);
            /**
            * returns the action that will be performed by the incomming and outgoing scene
            */
            action();
            /**
            * create a transition that a new scene is slided from left
            */
            static create(t, scene);
            /**
            * Constructor of TransitionSlideInL
            */
            ctor(t, scene);
            /**
            * 
            */
            easeActionWithAction(action);
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
        export class TransitionSlideInR extends cc.TransitionSlideInL {
            /**
            * Slide in the incoming scene from the right border.
            */
            constructor(t, scene);
            /**
            * returns the action that will be performed by the incomming and outgoing scene
            */
            action();
            /**
            * create Slide in the incoming scene from the right border.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionSlideInR
            */
            ctor(t, scene);
            /**
            * initializes the scenes
            */
            initScenes();
        }
}
declare module cc {
        export class TransitionSlideInT extends cc.TransitionSlideInL {
            /**
            * Slide in the incoming scene from the top border.
            */
            constructor(t, scene);
            /**
            * returns the action that will be performed by the incomming and outgoing scene
            */
            action();
            /**
            * create a Slide in the incoming scene from the top border.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionSlideInT
            */
            ctor(t, scene);
            /**
            * initializes the scenes
            */
            initScenes();
        }
}
declare module cc {
        export class TransitionSplitCols extends cc.TransitionScene {
            /**
            * The odd columns goes upwards while the even columns goes downwards.
            */
            constructor(t, scene);
            /**
            * 
            */
            action();
            /**
            * The odd columns goes upwards while the even columns goes downwards.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionSplitCols
            */
            ctor(t, scene);
            /**
            * 
            */
            easeActionWithAction(action);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionSplitRows extends cc.TransitionSplitCols {
            /**
            * The odd rows goes to the left while the even rows goes to the right.
            */
            constructor(t, scene);
            /**
            * 
            */
            action();
            /**
            * The odd rows goes to the left while the even rows goes to the right.
            */
            static create(t, scene);
            /**
            * Constructor of TransitionSplitRows
            */
            ctor(t, scene);
        }
}
declare module cc {
        export class TransitionTurnOffTiles extends cc.TransitionScene {
            /**
            * Turn off the tiles of the outgoing scene in random order
            */
            constructor(t, scene);
            /**
            * Turn off the tiles of the outgoing scene in random order
            */
            static create(t, scene);
            /**
            * Constructor of TransitionCrossFade
            */
            ctor(t, scene);
            /**
            * 
            */
            easeActionWithAction(action);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionZoomFlipAngular extends cc.TransitionSceneOriented {
            /**
            * Flips the screen half horizontally and half vertically doing a little zooming out/in.
            */
            constructor(t, scene, o);
            /**
            * Flips the screen half horizontally and half vertically doing a little zooming out/in.
            */
            static create(t, scene, o);
            /**
            * Constructor of TransitionZoomFlipAngular
            */
            ctor(t, scene, o);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionZoomFlipX extends cc.TransitionSceneOriented {
            /**
            * Flips the screen horizontally doing a zoom out/in
The front face is the outgoing scene and the back face is the incoming scene.
            */
            constructor(t, scene, o);
            /**
            * Flips the screen horizontally doing a zoom out/in
The front face is the outgoing scene and the back face is the incoming scene.
            */
            static create(t, scene, o);
            /**
            * Constructor of TransitionZoomFlipX
            */
            ctor(t, scene, o);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TransitionZoomFlipY extends cc.TransitionSceneOriented {
            /**
            * Flips the screen vertically doing a little zooming out/in
The front face is the outgoing scene and the back face is the incoming scene.
            */
            constructor(t, scene, o);
            /**
            * Flips the screen vertically doing a little zooming out/in
The front face is the outgoing scene and the back face is the incoming scene.
            */
            static create(t, scene, o);
            /**
            * Constructor of TransitionZoomFlipY
            */
            ctor(t, scene, o);
            /**
            * custom on enter
            */
            onEnter();
        }
}
declare module cc {
        export class TurnOffTiles extends cc.TiledGrid3DAction {
            /**
            * cc.TurnOffTiles action.
            */
            constructor(duration, gridSize, seed);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, seed);
            /**
            * Initializes the action with a random seed, the grid size and the duration.
            */
            initWithDuration(duration, gridSize, seed);
            /**
            * Shuffle
            */
            shuffle(array, len);
            /**
            * called before the action start.
            */
            startWithTarget(target);
            /**
            * Turn off title.
            */
            turnOffTile(pos);
            /**
            * Turn on tile.
            */
            turnOnTile(pos);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class Twirl extends cc.Grid3DAction {
            /**
            * cc.Twirl action.
            */
            constructor(duration, gridSize, position, twirls, amplitude);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, position, twirls, amplitude);
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
            initWithDuration(duration, gridSize, position, twirls, amplitude);
            /**
            * set amplitude
            */
            setAmplitude(amplitude);
            /**
            * set amplitude rate
            */
            setAmplitudeRate(amplitudeRate);
            /**
            * set twirl center
            */
            setPosition(position);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class Vertex2F  {
            /**
            * 
            */
            constructor(x1, y1);
        }
}
declare module cc {
        export class Vertex3F  {
            /**
            * 
            */
            constructor(x1, y1, z1);
        }
}
declare module cc {
        export class view  {
            /**
            * cc.view is the singleton object which represents the game window.
            */
            constructor();
            /**
            * Sets whether the engine modify the &quot;viewport&quot; meta in your web page.
            */
            adjustViewPort(enabled);
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
            convertToLocationInView(tx, ty, relatedPos);
            /**
            * Constructor of cc.EGLView
            */
            ctor();
            /**
            * If enabled, the application will try automatically to enter full screen mode on mobile devices
You can pass true as parameter to enable it and disable it by passing false.
            */
            enableAutoFullScreen(enabled);
            /**
            * Retina support is enabled by default for Apple device but disabled for other devices,
it takes effect only when you called setDesignResolutionPolicy
Only useful on web
            */
            enableRetina(enabled);
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
            resizeWithBrowserSize(enabled);
            /**
            * Sets the resolution translate on EGLView
            */
            setContentTranslateLeftTop(offsetLeft, offsetTop);
            /**
            * Sets the resolution policy with designed view size in points.
            */
            setDesignResolutionSize(width, height, resolutionPolicy);
            /**
            * On native, it sets the frame size of view.
            */
            setFrameSize(width, height);
            /**
            * Open or close IME keyboard , subclass must implement this method.
            */
            setIMEKeyboardState(isOpen);
            /**
            * Sets the callback function for cc.view&#39;s resize action,
this callback will be invoked before applying resolution policy, 
so you can do any additional modifications within the callback.
            */
            setResizeCallback(callback);
            /**
            * Sets the current resolution policy
            */
            setResolutionPolicy(resolutionPolicy);
            /**
            * Sets Scissor rectangle with points.
            */
            setScissorInPoints(x, y, w, h);
            /**
            * 
Sets view&#39;s target-densitydpi for android mobile browser.
            */
            setTargetDensityDPI(densityDPI);
            /**
            * Sets the name of the view
            */
            setViewName(viewName);
            /**
            * Sets view port rectangle with points.
            */
            setViewPortInPoints(x, y, w, h);
            /**
            * Exchanges the front and back buffers, subclass must implement this method.
            */
            swapBuffers();
        }
}
declare module cc {
        export class visibleRect  {
            /**
            * cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
it should represent the same rect as cc.view.getViewportRect()
            */
            constructor();
            /**
            * initialize
            */
            static init(visibleRect);
        }
}
declare module cc {
        export class Waves extends cc.Grid3DAction {
            /**
            * cc.Waves action.
            */
            constructor(duration, gridSize, waves, amplitude, horizontal, vertical);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, waves, amplitude, horizontal, vertical);
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
            initWithDuration(duration, gridSize, waves, amplitude, horizontal, vertical);
            /**
            * set amplitude
            */
            setAmplitude(amplitude);
            /**
            * set amplitude rate
            */
            setAmplitudeRate(amplitudeRate);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class Waves3D extends cc.Grid3DAction {
            /**
            * cc.Waves3D action.
            */
            constructor(duration, gridSize, waves, amplitude);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, waves, amplitude);
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
            initWithDuration(duration, gridSize, waves, amplitude);
            /**
            * set Amplitude
            */
            setAmplitude(amplitude);
            /**
            * set Amplitude Rate
            */
            setAmplitudeRate(amplitudeRate);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module cc {
        export class WavesTiles3D extends cc.TiledGrid3DAction {
            /**
            * cc.WavesTiles3D action.
            */
            constructor(duration, gridSize, waves, amplitude);
            /**
            * Constructor function, override it to extend the construction behavior, remember to call &quot;this._super()&quot; in the extended &quot;ctor&quot; function.
            */
            ctor(duration, gridSize, waves, amplitude);
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
            initWithDuration(duration, gridSize, waves, amplitude);
            /**
            * set amplitude of waves
            */
            setAmplitude(amplitude);
            /**
            * set amplitude rate of waves
            */
            setAmplitudeRate(amplitudeRate);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module ccs {
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
            getAction(duration);
            /**
            * Returns the fade action opacity.
            */
            getOpacity();
            /**
            * Changes the fade action opacity.
            */
            setOpacity(opacity);
        }
}
declare module ccs {
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
            getAction(duration, srcFrame);
            /**
            * Sets the easing parameter to action frame.
            */
            setEasingParameter(parameter);
            /**
            * Sets the easing type to ccs.ActionFrame
            */
            setEasingType(easingType);
        }
}
declare module ccs {
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
            getActionByName(jsonName, actionName);
            /**
            * Init properties with json dictionary
            */
            initWithDictionary(jsonName, dic, root);
            /**
            * Play an Action with a name.
            */
            playActionByName(jsonName, actionName, fun);
            /**
            * Release all actions.
            */
            releaseActions();
            /**
            * Stop an Action with a name.
            */
            stopActionByName(jsonName, actionName);
        }
}
declare module ccs {
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
            getAction(duration);
            /**
            * Returns the move action position.
            */
            getPosition();
            /**
            * Changes the move action position.
            */
            setPosition(pos, y);
        }
}
declare module ccs {
        export class ActionNode extends ccs.Class {
            /**
            * The Cocostudio&#39;s action node, it contains action target, action frame list and current frame index.
            */
            constructor();
            /**
            * Pushes back an ActionFrame to ccs.ActionNode.
            */
            addFrame(frame);
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
            deleteFrame(frame);
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
            initWithDictionary(dic, root);
            /**
            * Inserts an ActionFrame to ccs.ActionNode.
            */
            insertFrame(index, frame);
            /**
            * Returns if the action is done once time.
            */
            isActionDoneOnce();
            /**
            * Plays ccs.ActionNode&#39;s action.
            */
            playAction(fun);
            /**
            * Sets tag to ccs.ActionNode
            */
            setActionTag(tag);
            /**
            * Sets node which will run a action.
            */
            setObject(node);
            /**
            * Sets the time interval of frame.
            */
            setUnitTime(time);
            /**
            * Stops action.
            */
            stopAction();
            /**
            * Updates action states to some time.
            */
            updateActionToTimeLine(time);
        }
}
declare module ccs {
        export class ActionObject extends ccs.Class {
            /**
            * The Cocostudio&#39;s action object.
            */
            constructor();
            /**
            * Adds a ActionNode to play the action.
            */
            addActionNode(node);
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
            initWithDictionary(dic, root);
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
            play(fun);
            /**
            * Removes a ActionNode which play the action.
            */
            removeActionNode(node);
            /**
            * Sets the current time of frame.
            */
            setCurrentTime(time);
            /**
            * Sets if the action will loop play.
            */
            setLoop(loop);
            /**
            * Sets name to ccs.ActionObject
            */
            setName(name);
            /**
            * Sets the time interval of frame.
            */
            setUnitTime(time);
            /**
            * scheduler update function
            */
            simulationActionUpdate(dt);
            /**
            * Stop the action.
            */
            stop();
            /**
            * Updates frame by time.
            */
            updateToFrameByTime(time);
        }
}
declare module ccs {
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
            getAction(duration, srcFrame);
            /**
            * Returns the rotate action rotation.
            */
            getRotation();
            /**
            * Changes rotate action rotation.
            */
            setRotation(rotation);
        }
}
declare module ccs {
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
            getAction(duration);
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
            setScaleX(scaleX);
            /**
            * Changes the scale action scaleY.
            */
            setScaleY(scaleY);
        }
}
declare module ccs {
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
            getAction(duration);
            /**
            * Returns the color of tint action.
            */
            getColor();
            /**
            * Changes the tint action color.
            */
            setColor(color);
        }
}
declare module ccs {
        export class AnimationData extends ccs.Class {
            /**
            * 
The animation data information of Cocos Armature.
            */
            constructor();
            /**
            * adds movement data to the movement data dictionary
            */
            addMovement(moveData);
            /**
            * gets movement data from movement data dictionary
            */
            getMovement(moveName);
            /**
            * gets the count of movement data dictionary
            */
            getMovementCount();
        }
}
declare module ccs {
        export class AnimationEvent extends ccs.Class {
            /**
            * The animation event class, it has the callback, target and arguments.
            */
            constructor();
            /**
            * Constructor of ccs.AnimationEvent
            */
            ctor(callFunc, target, data);
        }
}
declare module ccs {
        export class Armature extends ccs.Node {
            /**
            * The main class of Armature, it plays armature animation, manages and updates bones&#39; state.
            */
            constructor();
            /**
            * Add a Bone to this Armature
            */
            addBone(bone, parentName);
            /**
            * Change a bone&#39;s parent with the specified parent name.
            */
            changeBoneParent(bone, parentName);
            /**
            * Allocates an armature, and use the ArmatureData named name in ArmatureDataManager to initializes the armature.
            */
            static create(name, parentBone);
            /**
            * create a bone with name
            */
            createBone(boneName);
            /**
            * Create a armature node.
            */
            ctor(name, parentBone);
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
            getBone(name);
            /**
            * when bone  contain the point ,then return it.
            */
            getBoneAtPoint(x, y);
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
            init(name, parentBone);
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
            removeBone(bone, recursion);
            /**
            * Sets animation to this Armature
            */
            setAnimation(animation);
            /**
            * Sets armatureData to this Armature
            */
            setArmatureData(armatureData);
            /**
            * Sets the blendFunc to ccs.Armature
            */
            setBlendFunc(blendFunc, dst);
            /**
            * set collider filter
            */
            setColliderFilter(filter);
            /**
            * Sets parent bone of this Armature
            */
            setParentBone(parentBone);
            /**
            * version setter
            */
            setVersion(version);
            /**
            * The update callback of ccs.Armature, it updates animation&#39;s state and updates bone&#39;s state.
            */
            update(dt);
            /**
            * Set contentSize and Calculate anchor point.
            */
            updateOffsetPoint();
        }
}
declare module ccs {
        export class ArmatureAnimation extends ccs.ProcessBase {
            /**
            * The Animation class for Armature, it plays armature animation, and controls speed scale and manages animation frame.
            */
            constructor(armature);
            /**
            * Allocates and initializes a ArmatureAnimation.
            */
            static create(armature);
            /**
            * Emits a frame event
            */
            frameEvent(bone, frameEventName, originFrameIndex, currentFrameIndex);
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
            gotoAndPause(frameIndex);
            /**
            * 
Goes to specified frame and plays current movement.
            */
            gotoAndPlay(frameIndex);
            /**
            * Initializes with an armature object
            */
            init(armature);
            /**
            * Determines if the frame event is ignored
            */
            isIgnoreFrameEvent();
            /**
            * Emits a movement event
            */
            movementEvent(armature, movementType, movementID);
            /**
            * Pauses armature animation.
            */
            pause();
            /**
            * play animation by animation name.
            */
            play(animationName, durationTo, loop);
            /**
            * Plays animation with index, the other param is the same to play.
            */
            playByIndex(animationIndex, durationTo, durationTween, loop, tweenEasing);
            /**
            * Plays animation with index, the other param is the same to play.
            */
            playWithIndex(animationIndex, durationTo, loop);
            /**
            * Plays animation by indexes
            */
            playWithIndexes(movementIndexes, durationTo, loop);
            /**
            * Plays animation with names
            */
            playWithNames(movementNames, durationTo, loop);
            /**
            * Resumes armature animation.
            */
            resume();
            /**
            * Sets animation data to animation.
            */
            setAnimationData(data);
            /**
            * Sets animation play speed scale.
            */
            setAnimationScale(animationScale);
            /**
            * Sets frame event callback to animation.
            */
            setFrameEventCallFunc(callFunc, target);
            /**
            * Sets movement event callback to animation.
            */
            setMovementEventCallFunc(callFunc, target);
            /**
            * Sets animation play speed scale.
            */
            setSpeedScale(speedScale);
            /**
            * Sets user object to animation.
            */
            setUserObject(userObject);
            /**
            * Stops armature animation.
            */
            stop();
            /**
            * Updates the state of ccs.Tween list, calls frame event&#39;s callback and calls movement event&#39;s callback.
            */
            update(dt);
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
            addBoneData(boneData);
            /**
            * Construction of ccs.ArmatureData
            */
            ctor();
            /**
            * Gets bone data by bone name
            */
            getBoneData(boneName);
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
        export class armatureDataManager  {
            /**
            * ccs.armatureDataManager is a singleton object which format and manage armature configuration and armature animation
            */
            constructor();
            /**
            * Adds animation data to armature data manager.
            */
            addAnimationData(id, animationData, configFilePath);
            /**
            * Adds armature data
            */
            addArmatureData(id, armatureData, configFilePath);
            /**
            * Adds ArmatureFileInfo, it is managed by CCArmatureDataManager.
            */
            addArmatureFileInfo(imagePath, plistPath, configFilePath);
            /**
            * Adds ArmatureFileInfo, it is managed by CCArmatureDataManager.
            */
            addArmatureFileInfoAsync(imagePath, plistPath, configFilePath, selector, target);
            /**
            * Adds Relative data of Armature data manager.
            */
            addRelativeData(configFilePath);
            /**
            * Add sprite frame to CCSpriteFrameCache, it will save display name and it&#39;s relative image name
            */
            addSpriteFrameFromFile(plistPath, imagePath, configFilePath);
            /**
            * Adds texture data to Armature data manager.
            */
            addTextureData(id, textureData, configFilePath);
            /**
            * Clear data
            */
            clear();
            /**
            * Gets animationData by id
            */
            getAnimationData(id);
            /**
            * Returns animation data of Armature data manager.
            */
            getAnimationDatas();
            /**
            * Gets armatureData by id
            */
            getArmatureData(id);
            /**
            * Returns armature Data of Armature data manager.
            */
            getArmatureDatas();
            /**
            * Gets RelativeData of Armature data manager.
            */
            getRelativeData(configFilePath);
            /**
            * Gets textureData by id
            */
            getTextureData(id);
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
            removeAnimationData(id);
            /**
            * Removes armature data from armature data manager.
            */
            removeArmatureData(id);
            /**
            * Removes armature cache data by configFilePath
            */
            removeArmatureFileInfo(configFilePath);
            /**
            * Removes texture data by id
            */
            removeTextureData(id);
        }
}
declare module ccs {
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
        export class BaseData extends ccs.Class {
            /**
            * 
    The base data class for Armature.
            */
            constructor();
            /**
            * Copy data from node
            */
            copy(node);
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
            setColor(color);
            /**
            * Calculate two baseData&#39;s between value(to - from) and set to self
            */
            subtract(from, to, limit);
        }
}
declare module ccs {
        export class Bone extends ccs.Node {
            /**
            * The Bone of Armature, it has bone data, display manager and transform data for armature.
            */
            constructor(name);
            /**
            * Adds a child to this bone, and it will let this child call setParent(ccs.Bone) function to set self to it&#39;s parent
            */
            addChildBone(child);
            /**
            * Add display and use  _displayData init the display.
            */
            addDisplay(displayData, index);
            /**
            * Changes display by index
            */
            changeDisplayByIndex(index, force);
            /**
            * Changes display by name
            */
            changeDisplayByName(name, force);
            /**
            * Changes display with index
            */
            changeDisplayWithIndex(index, force);
            /**
            * Changes display with name
            */
            changeDisplayWithName(name, force);
            /**
            * Allocates and initializes a bone.
            */
            static create(name);
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
            init(name);
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
            removeChildBone(bone, recursion);
            /**
            * Removes display by index.
            */
            removeDisplay(index);
            /**
            * Removes itself from its parent ccs.Bone.
            */
            removeFromParent(recursion);
            /**
            * Sets the armature reference to ccs.Bone.
            */
            setArmature(armature);
            /**
            * Sets blend dirty flag
            */
            setBlendDirty(dirty);
            /**
            * Sets BlendFunc to ccs.Bone.
            */
            setBlendFunc(blendFunc, dst);
            /**
            * Sets the boneData to ccs.Bone.
            */
            setBoneData(boneData);
            /**
            * Sets ccs.Bone&#39;s child armature
            */
            setChildArmature(armature);
            /**
            * Sets collider filter to ccs.Bone.
            */
            setColliderFilter(filter);
            /**
            * When CCArmature play a animation, if there is not a CCMovementBoneData of this bone in this CCMovementData, this bone will hide.
            */
            setIgnoreMovementBoneData(bool);
            /**
            * Sets the local zOrder to ccs.Bone.
            */
            setLocalZOrder(zOrder);
            /**
            * Sets parent bone to ccs.Bone.
            */
            setParentBone(parent);
            /**
            * Sets ccs.Bone&#39;s transform dirty flag.
            */
            setTransformDirty(dirty);
            /**
            * Updates worldTransform by tween data and updates display state
            */
            update(delta);
            /**
            * Updates display color
            */
            updateColor();
            /**
            * Updates display color
            */
            updateDisplayedColor(color);
            /**
            * Updates display opacity
            */
            updateDisplayedOpacity(opacity);
            /**
            * Updates display zOrder
            */
            updateZOrder();
        }
}
declare module ccs {
        export class BoneData extends ccs.BaseData {
            /**
            * 
     BoneData used to init a Bone.
            */
            constructor();
            /**
            * Adds display data to list
            */
            addDisplayData(displayData);
            /**
            * Construction of ccs.BoneData
            */
            ctor();
            /**
            * Returns display data with index.
            */
            getDisplayData(index);
            /**
            * Initializes a ccs.BoneData
            */
            init();
        }
}
declare module ccs {
        export class Class  {
            /**
            * The same as cc.Class
            */
            constructor();
        }
}
declare module ccs {
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
            setColliderFilter(colliderFilter);
            /**
            * contourData setter
            */
            setContourData(contourData);
            /**
            * shape getter
            */
            setShape(shape);
        }
}
declare module ccs {
        export class ColliderDetector extends ccs.Class {
            /**
            * Base class for ccs.ColliderDetector
            */
            constructor(bone);
            /**
            * add contourData
            */
            addContourData(contourData);
            /**
            * add contourData
            */
            addContourDataList(contourDataList);
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
            removeContourData(contourData);
            /**
            * set colliderFilter
            */
            setColliderFilter(filter);
        }
}
declare module ccs {
        export class ColliderFilter extends ccs.Class {
            /**
            * Base class for ccs.ColliderFilter
            */
            constructor();
        }
}
declare module ccs {
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
            getBool(key);
            /**
            * Returns double value from attribute
            */
            getDouble(key);
            /**
            * Returns float value from attribute
            */
            getFloat(key);
            /**
            * Returns int value from attribute
            */
            getInt(key);
            /**
            * Returns object value from attribute
            */
            getObject(key);
            /**
            * Returns string value from attribute
            */
            getString(key);
            /**
            * Initializes a ccs.ComAttribute
            */
            init();
            /**
            * Parses json file.
            */
            parse(filename);
            /**
            * Sets boolean attribute
            */
            setBool(key, value);
            /**
            * Sets double attribute
            */
            setDouble(key, value);
            /**
            * Sets float attribute
            */
            setFloat(key, value);
            /**
            * Sets int attribute
            */
            setInt(key, value);
            /**
            * Sets object attribute
            */
            setObject(key, value);
            /**
            * Sets string attribute
            */
            setString(key, value);
        }
}
declare module ccs {
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
            pauseEffect(soundId);
            /**
            * Play background music
            */
            playBackgroundMusic(pszFilePath, loop);
            /**
            * Play sound effect.
            */
            playEffect(pszFilePath, loop);
            /**
            * Preload background music resource
            */
            preloadBackgroundMusic(pszFilePath);
            /**
            * Preload effect
            */
            preloadEffect(pszFilePath);
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
            resumeEffect(soundId);
            /**
            * Rewind background music
            */
            rewindBackgroundMusic();
            /**
            * Set the volume of music.
            */
            setBackgroundMusicVolume(volume);
            /**
            * Set the volume of sound effects.
            */
            setEffectsVolume(volume);
            /**
            * File path setter
            */
            setFile(pszFilePath);
            /**
            * Sets audio component whether plays loop
            */
            setLoop(loop);
            /**
            * stop all effects
            */
            stopAllEffects();
            /**
            * Stop background music
            */
            stopBackgroundMusic(releaseData);
            /**
            * Stop effect
            */
            stopEffect(soundId);
            /**
            * Unload effect
            */
            unloadEffect(pszFilePath);
            /**
            * Indicates whether any background music can be played or not.
            */
            willPlayBackgroundMusic();
        }
}
declare module ccs {
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
            setEnabled(bool);
        }
}
declare module ccs {
        export class Component extends ccs.Class {
            /**
            * The same as cc.Component
            */
            constructor();
        }
}
declare module ccs {
        export class ComRender extends ccs.Component {
            /**
            * The render component for Cocostudio.
            */
            constructor();
            /**
            * allocates and initializes a ComRender.
            */
            static create(node, comName);
            /**
            * Construction of ccs.ComRender
            */
            ctor(node, comName);
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
            setNode(node);
        }
}
declare module ccs {
        export class ContourData  {
            /**
            * The Contour data information of Cocos Armature.
            */
            constructor();
            /**
            * add a vertex object to vertex list
            */
            addVertex(p);
        }
}
declare module ccs {
        export class ContourVertex2  {
            /**
            * contour vertex
            */
            constructor(x, y);
        }
}
declare module ccs {
        export class dataReaderHelper  {
            /**
            * ccs.dataReaderHelper is a singleton object for reading CocoStudio data
            */
            constructor();
            /**
            * Translate XML export from Dragon Bone flash tool to data, and save them.
            */
            addDataFromCache(skeleton, dataInfo);
            /**
            * Add armature data from file.
            */
            addDataFromFile(filePath);
            /**
            * Adds data from file with Async.
            */
            addDataFromFileAsync(imagePath, plistPath, filePath, selector, target);
            /**
            * Adds json armature data to armature data manager.
            */
            addDataFromJson(filePath, dataInfo);
            /**
            * Adds json armature data to armature data manager.
            */
            addDataFromJsonCache(dic, dataInfo);
            /**
            * Adds xml armature data to armature data manager.
            */
            addDataFromXML(xml, dataInfo);
            /**
            * Decodes xml animation data.
            */
            decodeAnimation(animationXML, dataInfo);
            /**
            * Decodes animation json data.
            */
            decodeAnimationFromJson(json, dataInfo);
            /**
            * decode xml armature data.
            */
            decodeArmature(armatureXML, dataInfo);
            /**
            * decode json armature data.
            */
            decodeArmatureFromJSON(json, dataInfo);
            /**
            * decode xml bone data.
            */
            decodeBone(boneXML, parentXML, dataInfo);
            /**
            * decode xml display data of bone
            */
            decodeBoneDisplay(displayXML, dataInfo);
            /**
            * Decodes json display data of bone.
            */
            decodeBoneDisplayFromJson(json, dataInfo);
            /**
            * decode json bone data.
            */
            decodeBoneFromJson(json, dataInfo);
            /**
            * Decodes xml data of contour.
            */
            decodeContour(contourXML, dataInfo);
            /**
            * Decodes json data of contour.
            */
            decodeContourFromJson(json);
            /**
            * Decodes xml data of frame.
            */
            decodeFrame(frameXML, parentFrameXml, boneData, dataInfo);
            /**
            * Decodes json data of frame.
            */
            decodeFrameFromJson(json, dataInfo);
            /**
            * Decodes xml movement data.
            */
            decodeMovement(movementXML, armatureData, dataInfo);
            /**
            * Decodes xml data of bone&#39;s movement.
            */
            decodeMovementBone(movBoneXml, parentXml, boneData, dataInfo);
            /**
            * Decodes json data of bone&#39;s movement.
            */
            decodeMovementBoneFromJson(json, dataInfo);
            /**
            * Decodes json movement data.
            */
            decodeMovementFromJson(json, dataInfo);
            /**
            * Decodes json data of node.
            */
            decodeNodeFromJson(node, json, dataInfo);
            /**
            * Decodes xml data of texture
            */
            decodeTexture(textureXML, dataInfo);
            /**
            * Decodes json data of Texture.
            */
            decodeTextureFromJson(json);
            /**
            * Removes config file from config file list.
            */
            removeConfigFile(configFile);
        }
}
declare module ccs {
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
            setColliderDetector(colliderDetector);
            /**
            * Sets display node to decorative
            */
            setDisplay(display);
            /**
            * Sets display data
            */
            setDisplayData(displayData);
        }
}
declare module ccs {
        export class DisplayData extends ccs.Class {
            /**
            * The class use for save display data.
            */
            constructor();
            /**
            * Changes display name to texture type
            */
            changeDisplayToTexture(displayName);
            /**
            * copy data
            */
            copy(displayData);
            /**
            * Construction of ccs.DisplayData
            */
            ctor();
        }
}
declare module ccs {
        export class FrameData extends ccs.BaseData {
            /**
            * FrameData saved the frame data needed for armature animation in this Armature.
            */
            constructor();
            /**
            * copy data
            */
            copy(frameData);
            /**
            * Construction of ccs.FrameData.
            */
            ctor();
        }
}
declare module ccs {
        export class FrameEvent  {
            /**
            * The frame event class for Armature.
            */
            constructor();
        }
}
declare module ccs {
        export class MovementBoneData extends ccs.Class {
            /**
            * MovementBoneData saved the name, delay, frame list of Bone&#39;s movement.
            */
            constructor();
            /**
            * Adds frame data to frame list.
            */
            addFrameData(frameData);
            /**
            * Construction of ccs.MovementBoneData.
            */
            ctor();
            /**
            * Gets frame data by Index.
            */
            getFrameData(index);
            /**
            * Initializes a ccs.MovementBoneData.
            */
            init();
        }
}
declare module ccs {
        export class MovementData  {
            /**
            * The movement data information of Cocos Armature.
            */
            constructor();
            /**
            * add a movement bone data to dictionary
            */
            addMovementBoneData(movBoneData);
            /**
            * add a movement bone data from dictionary by name
            */
            getMovementBoneData(boneName);
        }
}
declare module ccs {
        export class MovementEvent  {
            /**
            * The movement event class for Armature.
            */
            constructor();
        }
}
declare module ccs {
        export class Node extends ccs.Class {
            /**
            * The same as cc.Node
            */
            constructor();
        }
}
declare module ccs {
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
            gotoFrame(frameIndex);
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
            play(durationTo, durationTween, loop, tweenEasing);
            /**
            * Resumes the Process
            */
            resume();
            /**
            * Sets animation interval to ccs.ProcessBase.
            */
            setAnimationInternal(animationInternal);
            /**
            * Sets process scale
            */
            setProcessScale(processScale);
            /**
            * Stops the Process
            */
            stop();
            /**
            * Update process&#39; state.
            */
            update(dt);
            /**
            * Updates will call this handler, you can handle your logic here
            */
            updateHandler();
        }
}
declare module ccs {
        export class RelativeData  {
            /**
            * RelativeData uses to save plist files, armature files, animations and textures for armature data manager.
            */
            constructor();
        }
}
declare module ccs {
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
            createNodeWithSceneFile(pszFileName);
            /**
            * create UI object from data
            */
            createObject(inputFiles, parenet);
            /**
            * Get a node by tag.
            */
            getNodeByTag(tag);
            /**
            * Sets properties from json dictionary.
            */
            setPropertyFromJsonDict(node, dict);
            /**
            * Sets the listener to reader.
            */
            setTarget(selector, listener);
            /**
            * Returns the version of ccs.SceneReader.
            */
            version();
        }
}
declare module ccs {
        export class Skin extends ccs.Sprite {
            /**
            * ccs.Bone uses ccs.Skin to displays on screen.
            */
            constructor(fileName, rect);
            /**
            * allocates and initializes a skin.
            */
            static create(fileName, rect);
            /**
            * allocates and initializes a skin.
            */
            static createWithSpriteFrameName(spriteFrameName);
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
            initWithFile(fileName, rect);
            /**
            * Initializes with sprite frame name
            */
            initWithSpriteFrameName(spriteFrameName);
            /**
            * Sets the bone reference to ccs.Skin.
            */
            setBone(bone);
            /**
            * Sets skin data to ccs.Skin.
            */
            setSkinData(skinData);
            /**
            * Updates armature skin&#39;s transform with skin transform and bone&#39;s transform.
            */
            updateArmatureTransform();
        }
}
declare module ccs {
        export class Sprite extends ccs.Class {
            /**
            * The same as cc.Sprite
            */
            constructor();
        }
}
declare module ccs {
        export class SpriteDisplayData extends ccs.DisplayData {
            /**
            * The sprite display data class.
            */
            constructor();
            /**
            * copy data
            */
            copy(displayData);
            /**
            * Construction of ccs.SpriteDisplayData
            */
            ctor();
        }
}
declare module ccs {
        export class spriteFrameCacheHelper  {
            /**
            * ccs.spriteFrameCacheHelper is a singleton object, it&#39;s a sprite frame cache helper
            */
            constructor();
            /**
            * Adds sprite frame from file
            */
            addSpriteFrameFromFile(plistPath, imagePath);
            /**
            * Clear the sprite frame cache&#39;s data.
            */
            clear();
            /**
            * Returns texture atlas with texture.
            */
            getTextureAtlasWithTexture(texture);
        }
}
declare module ccs {
        export class TextureData  {
            /**
            * The texture data information of Cocos Armature
            */
            constructor();
            /**
            * Adds a contourData to contourDataList
            */
            addContourData(contourData);
            /**
            * gets a contourData from contourDataList by index
            */
            getContourData(index);
        }
}
declare module ccs {
        export class TransformHelp  {
            /**
            * use to calculate the matrix of node from parent node
            */
            constructor();
            /**
            * 
            */
            static matrixToNode(matrix, node);
            /**
            * 
            */
            static nodeConcat(target, source);
            /**
            * 
            */
            static nodeSub(target, source);
            /**
            * 
            */
            static nodeToMatrix(node, matrix);
            /**
            * Calculate a BaseData&#39;s transform matrix from parent node.
            */
            static transformFromParent(bone, parentNode);
        }
}
declare module ccs {
        export class Tween extends ccs.ProcessBase {
            /**
            * The tween class for Armature.
            */
            constructor(The);
            /**
            * Update display index and process the key frame event when arrived a key frame
            */
            arriveKeyFrame(keyFrameData);
            /**
            * Allocates and initializes a ArmatureAnimation.
            */
            static create(bone);
            /**
            * Returns Armature animation of ccs.Tween.
            */
            getAnimation();
            /**
            * Goes to specified frame and pauses frame.
            */
            gotoAndPause(frameIndex);
            /**
            * Goes to specified frame and plays frame.
            */
            gotoAndPlay(frameIndex);
            /**
            * initializes a ccs.Tween with a CCBone
            */
            init(bone);
            /**
            * Plays the tween.
            */
            play(movementBoneData, durationTo, durationTween, loop, tweenEasing);
            /**
            * Sets Armature animation to ccs.Tween.
            */
            setAnimation(animation);
            /**
            * Calculate the between value of _from and _to, and give it to between frame data
            */
            setBetween(from, to, limit);
            /**
            * Sets movement bone data to ccs.Tween.
            */
            setMovementBoneData(data);
            /**
            * According to the percent to calculate current color with tween effect
            */
            tweenColorTo(percent, node);
            /**
            * According to the percent to calculate current CCFrameData with tween effect
            */
            tweenNodeTo(percent, node);
            /**
            * Calculate which frame arrived, and if current frame have event, then call the event listener
            */
            updateFrameData(currentPercent);
            /**
            * update will call this handler, you can handle your logic here
            */
            updateHandler();
        }
}
declare module ccs {
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
            getFileDesignSize(fileName);
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
            getVersionInteger(str);
            /**
            * Registers class type and callback.
            */
            registerTypeAndCallBack(classType, ins, object, callback);
            /**
            * stores the designSize of UI file.
            */
            storeFileDesignSize(fileName, size);
            /**
            * Creates uiWidget from a json file that exported by cocostudio UI editor
            */
            widgetFromJsonFile(fileName);
        }
}
declare module ccs {
        export class WidgetPropertiesReader extends ccs.Class {
            /**
            * The base class of widget properties reader.
            */
            constructor();
            /**
            * Create a widget object by json object.
            */
            createWidget(jsonDict, fullPath, fileName);
            /**
            * Parses the widget properties.
            */
            widgetFromJsonDictionary(data);
        }
}
declare module ccs {
        export class WidgetPropertiesReader0250 extends ccs.WidgetPropertiesReader {
            /**
            * The widget properties reader to parse Cocostudio exported file v0.3 -- v1.0
            */
            constructor();
            /**
            * Creates a widget by json object.
            */
            createWidget(jsonDict, fullPath, fileName);
            /**
            * Sets widget&#39;s color, anchor point, flipped properties from json object.
            */
            setColorPropsForWidgetFromJsonDictionary(widget, options);
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
            setPropsForButtonFromJsonDictionary(widget, options);
            /**
            * Sets ccui.CheckBox&#39;s properties from json object.
            */
            setPropsForCheckBoxFromJsonDictionary(widget, options);
            /**
            * Sets the container&#39;s properties from json dictionary.
            */
            setPropsForContainerWidgetFromJsonDictionary(widget, options);
            /**
            * Sets ccui.ImageView&#39;s properties from json object.
            */
            setPropsForImageViewFromJsonDictionary(widget, options);
            /**
            * Sets ccui.TextAtlas&#39; properties from json object.
            */
            setPropsForLabelAtlasFromJsonDictionary(widget, options);
            /**
            * Sets ccui.TextBMFont&#39;s properties from json dictionary.
            */
            setPropsForLabelBMFontFromJsonDictionary(widget, options);
            /**
            * Sets ccui.Text&#39;s properties from json object.
            */
            setPropsForLabelFromJsonDictionary(widget, options);
            /**
            * Sets ccui.Layout&#39;s properties from json object.
            */
            setPropsForLayoutFromJsonDictionary(widget, options);
            /**
            * Sets ccui.ListView&#39;s properties from json dictionary.
            */
            setPropsForListViewFromJsonDictionary(widget, options);
            /**
            * Sets ccui.LoadingBar&#39;s properties from json dictionary.
            */
            setPropsForLoadingBarFromJsonDictionary(widget, options);
            /**
            * Sets ccui.PageView&#39;s properties from json dictionary.
            */
            setPropsForPageViewFromJsonDictionary(widget, options);
            /**
            * Sets ccui.ScrollView&#39;s properties from json dictionary.
            */
            setPropsForScrollViewFromJsonDictionary(widget, options);
            /**
            * Sets ccui.Slider&#39;s properties from json dictionary.
            */
            setPropsForSliderFromJsonDictionary(widget, options);
            /**
            * Sets ccui.TextField&#39;s properties from json object.
            */
            setPropsForTextAreaFromJsonDictionary(widget, options);
            /**
            * Sets ccui.Button&#39;s text properties from json dictionary.
            */
            setPropsForTextButtonFromJsonDictionary(widget, options);
            /**
            * Sets ccui.TextField&#39;s properties from json dictionary.
            */
            setPropsForTextFieldFromJsonDictionary(widget, options);
            /**
            * Sets widget&#39;s properties from json dictionary.
            */
            setPropsForWidgetFromJsonDictionary(widget, options);
            /**
            * Creates a widget by json dictionary.
            */
            widgetFromJsonDictionary(data);
        }
}
declare module ccs {
        export class WidgetPropertiesReader0300 extends ccs.WidgetPropertiesReader {
            /**
            * The widget properties reader to parse Cocostudio exported file v1.0 higher.
            */
            constructor();
            /**
            * Creates widget by json object.
            */
            createWidget(jsonDict, fullPath, fileName);
            /**
            * Sets widget&#39;s color, anchor point, flipped properties from json dictionary.
            */
            setColorPropsForWidgetFromJsonDictionary(widget, options);
            /**
            * Sets widget&#39;s custom properties from json dictionary
            */
            setPropsForAllCustomWidgetFromJsonDictionary(classType, widget, customOptions);
            /**
            * Sets widget&#39;s foundation properties from json dictionary.
            */
            setPropsForAllWidgetFromJsonDictionary(reader, widget, options);
            /**
            * Sets ccui.Button&#39;s properties from json dictionary.
            */
            setPropsForButtonFromJsonDictionary(widget, options);
            /**
            * Sets ccui.CheckBox&#39;s properties from json dictionary.
            */
            setPropsForCheckBoxFromJsonDictionary(widget, options);
            /**
            * Sets ccui.ImageView&#39;s properties from json dictionary.
            */
            setPropsForImageViewFromJsonDictionary(widget, options);
            /**
            * Sets ccui.TextAtlas&#39;s properties from json dictionary.
            */
            setPropsForLabelAtlasFromJsonDictionary(widget, options);
            /**
            * Sets ccui.TextBMFont&#39;s properties from json dictionary.
            */
            setPropsForLabelBMFontFromJsonDictionary(widget, options);
            /**
            * Sets ccui.Text&#39;s properties from json dictionary.
            */
            setPropsForLabelFromJsonDictionary(widget, options);
            /**
            * Sets ccui.Layout&#39;s properties from json dictionary.
            */
            setPropsForLayoutFromJsonDictionary(widget, options);
            /**
            * Sets ccui.ListView&#39;s properties from json dictionary.
            */
            setPropsForListViewFromJsonDictionary(widget, options);
            /**
            * Sets ccui.LoadingBar&#39;s properties from json dictionary.
            */
            setPropsForLoadingBarFromJsonDictionary(widget, options);
            /**
            * Sets ccui.PageView&#39;s properties from json dictionary.
            */
            setPropsForPageViewFromJsonDictionary(widget, options);
            /**
            * Sets ccui.ScrollView&#39;s properties from json dictionary.
            */
            setPropsForScrollViewFromJsonDictionary(widget, options);
            /**
            * Sets ccui.Slider&#39;s properties from json dictionary.
            */
            setPropsForSliderFromJsonDictionary(widget, options);
            /**
            * Sets ccui.TextField&#39;s properties from json dictionary.
            */
            setPropsForTextAreaFromJsonDictionary(widget, options);
            /**
            * Sets ccui.Button&#39;s text properties from json dictionary.
            */
            setPropsForTextButtonFromJsonDictionary(widget, options);
            /**
            * Sets ccui.TextField&#39;s text properties from json dictionary.
            */
            setPropsForTextFieldFromJsonDictionary(widget, options);
            /**
            * Sets widget&#39;s foundation properties from json dictionary.
            */
            setPropsForWidgetFromJsonDictionary(widget, options);
            /**
            * Creates a widget from json dictionary.
            */
            widgetFromJsonDictionary(data);
        }
}
declare module ccui {
        export class Button extends ccui.Widget {
            /**
            * The button controls of Cocos UI.
            */
            constructor();
            /**
            * allocates and initializes a UIButton.
            */
            static create(normalImage, selectedImage, disableImage, texType);
            /**
            * Allocates and initializes a UIButton.
            */
            ctor(normalImage, selectedImage, disableImage, texType);
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
            ignoreContentAdaptWithSize(ignore);
            /**
            * Initializes a button.
            */
            init(normalImage, selectedImage, disableImage, texType);
            /**
            * Returns button is using scale9 renderer or not.
            */
            isScale9Enabled();
            /**
            * Load dark state texture for button.
            */
            loadTextureDisabled(disabled, texType);
            /**
            * Load normal state texture for button.
            */
            loadTextureNormal(normal, texType);
            /**
            * Load selected state texture for button.
            */
            loadTexturePressed(selected, texType);
            /**
            * Load textures for button.
            */
            loadTextures(normal, selected, disabled, texType);
            /**
            * Sets capinsets for button, if button is using scale9 renderer.
            */
            setCapInsets(capInsets);
            /**
            * Sets capinsets for button, if button is using scale9 renderer.
            */
            setCapInsetsDisabledRenderer(capInsets);
            /**
            * Sets capinsets for button, if button is using scale9 renderer.
            */
            setCapInsetsNormalRenderer(capInsets);
            /**
            * Sets capinsets for button, if button is using scale9 renderer.
            */
            setCapInsetsPressedRenderer(capInsets);
            /**
            * Changes if button can be clicked zoom effect.
            */
            setPressedActionEnabled(enabled);
            /**
            * Sets if button is using scale9 renderer.
            */
            setScale9Enabled(able);
            /**
            * Sets title color to ccui.Button.
            */
            setTitleColor(color);
            /**
            * Sets title fontName to ccui.Button.
            */
            setTitleFontName(fontName);
            /**
            * Sets title fontSize to ccui.Button
            */
            setTitleFontSize(size);
            /**
            * Sets title text to ccui.Button
            */
            setTitleText(text);
        }
}
declare module ccui {
        export class CheckBox extends ccui.Widget {
            /**
            * The CheckBox control of Cocos UI.
            */
            constructor();
            /**
            * add a call back function would called when checkbox is selected or unselected.
            */
            addEventListener(selector, target);
            /**
            * add event listener to ccui.CheckBox.
            */
            addEventListenerCheckBox(selector, target);
            /**
            * allocates and initializes a UICheckBox.
            */
            static create(backGround, backGroundSeleted, cross, backGroundDisabled, frontCrossDisabled, texType);
            /**
            * allocates and initializes a UICheckBox.
            */
            ctor(backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, texType);
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
            init(backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, texType);
            /**
            * Returns the selected state of ccui.CheckBox.
            */
            isSelected();
            /**
            * Loads background texture for checkbox.
            */
            loadTextureBackGround(backGround, texType);
            /**
            * Loads disabled state of backGround texture for checkbox.
            */
            loadTextureBackGroundDisabled(backGroundDisabled, texType);
            /**
            * Loads selected state of background texture for checkbox.
            */
            loadTextureBackGroundSelected(backGroundSelected, texType);
            /**
            * Loads cross texture for checkbox.
            */
            loadTextureFrontCross(cross, texType);
            /**
            * Loads frontCrossDisabled texture for checkbox.
            */
            loadTextureFrontCrossDisabled(frontCrossDisabled, texType);
            /**
            * Loads textures for checkbox.
            */
            loadTextures(backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, texType);
            /**
            * Sets the selected state to ccui.CheckBox
            */
            setSelected(selected);
            /**
            * 
            */
            setSelectedState(selected);
        }
}
declare module ccui {
        export class Class  {
            /**
            * The same as cc.Class
            */
            constructor();
        }
}
declare module ccui {
        export class HBox extends ccui.Layout {
            /**
            * The horizontal box of Cocos UI.
            */
            constructor();
            /**
            * Creates a HBox object
            */
            static create(size);
            /**
            * The constructor of ccui.HBox
            */
            ctor(size);
            /**
            * Initialize a HBox.
            */
            init();
            /**
            * Initializes a HBox with size.
            */
            initWithSize(size);
        }
}
declare module ccui {
        export class helper  {
            /**
            * ccui.helper is the singleton object which is the Helper object contains some functions for seek widget
            */
            constructor();
            /**
            * Finds a widget whose action tag equals to param name from root widget.
            */
            static seekActionWidgetByActionTag(root, tag);
            /**
            * Finds a widget whose name equals to param name from root widget.
            */
            static seekWidgetByName(root, name);
            /**
            * Finds a widget whose name equals to param name from root widget.
            */
            static seekWidgetByRelativeName(root, name);
            /**
            * Finds a widget whose tag equals to param tag from root widget.
            */
            static seekWidgetByTag(root, tag);
        }
}
declare module ccui {
        export class ImageView extends ccui.Widget {
            /**
            * The ImageView control of Cocos GUI
            */
            constructor();
            /**
            * Allocates and initializes a UIImageView.
            */
            static create(imageFileName, texType);
            /**
            * allocates and initializes a ccui.ImageView.
            */
            ctor(imageFileName, texType);
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
            ignoreContentAdaptWithSize(ignore);
            /**
            * Initializes an imageView.
            */
            init(imageFileName, texType);
            /**
            * Returns ImageView is using scale9 renderer or not.
            */
            isScale9Enabled();
            /**
            * Loads textures for button.
            */
            loadTexture(fileName, texType);
            /**
            * Sets capinsets for button, if button is using scale9 renderer.
            */
            setCapInsets(capInsets);
            /**
            * Sets if button is using scale9 renderer.
            */
            setScale9Enabled(able);
            /**
            * Sets texture rect
            */
            setTextureRect(rect);
        }
}
declare module ccui {
        export class Layout extends ccui.Widget {
            /**
            * ccui.Layout is the base class of  ccui.PageView and ccui.ScrollView, it does layout by layout manager
 and clips area by its _clippingStencil when clippingEnabled is true.
            */
            constructor();
            /**
            * Adds a widget to the container.
            */
            addChild(widget, zOrder, tag);
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
            findNextFocusedWidget(direction, current);
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
            onPassFocusToChild(direction, current);
            /**
            * Removes all children from the container with a cleanup, and sets the layout dirty flag to true.
            */
            removeAllChildren(cleanup);
            /**
            * Removes all children from the container, do a cleanup to all running actions depending on the cleanup parameter,
and sets the layout dirty flag to true.
            */
            removeAllChildrenWithCleanup(cleanup);
            /**
            * Remove the background image of ccui.Layout.
            */
            removeBackGroundImage();
            /**
            * Removes child widget from ccui.Layout, and sets the layout dirty flag to true.
            */
            removeChild(widget, cleanup);
            /**
            * request do layout, it will do layout at visit calls
            */
            requestDoLayout();
            /**
            * Sets background color for layout, if color type is Layout.COLOR_SOLID
            */
            setBackGroundColor(color, endColor);
            /**
            * Sets background opacity to ccui.Layout.
            */
            setBackGroundColorOpacity(opacity);
            /**
            * Sets Color Type for ccui.Layout.
            */
            setBackGroundColorType(type);
            /**
            * Sets background color vector for layout, if color type is Layout.COLOR_GRADIENT
            */
            setBackGroundColorVector(vector);
            /**
            * Sets a background image for layout
            */
            setBackGroundImage(fileName, texType);
            /**
            * Sets a background image CapInsets for layout, if the background image is a scale9 render.
            */
            setBackGroundImageCapInsets(capInsets);
            /**
            * Sets backGround image color
            */
            setBackGroundImageColor(color);
            /**
            * Sets backGround image Opacity
            */
            setBackGroundImageOpacity(opacity);
            /**
            * Sets background image use scale9 renderer.
            */
            setBackGroundImageScale9Enabled(able);
            /**
            * Changes if layout can clip it&#39;s content and locChild.
            */
            setClippingEnabled(able);
            /**
            * Sets clipping type to ccui.Layout
            */
            setClippingType(type);
            /**
            * Sets LayoutType to ccui.Layout, LayoutManager will do layout by layout type.
            */
            setLayoutType(type);
            /**
            * If a layout is loop focused which means that the focus movement will be inside the layout
            */
            setLoopFocus(loop);
            /**
            * Specifies whether the layout pass its focus to its child
            */
            setPassFocusToChild(pass);
            /**
            * 
    Calls adaptRenderers (its subclass will override it.
            */
            visit(ctx);
        }
}
declare module ccui {
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
            setMargin(margin);
        }
}
declare module ccui {
        export class linearHorizontalLayoutManager  {
            /**
            * ccui.linearHorizontalLayoutManager is a singleton object which is the linear horizontal layout manager for ccui.Layout
            */
            constructor();
        }
}
declare module ccui {
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
            setGravity(gravity);
        }
}
declare module ccui {
        export class linearVerticalLayoutManager  {
            /**
            * ccui.linearVerticalLayoutManager is a singleton object which is the linear vertical layout manager for ccui.Layout.
            */
            constructor();
        }
}
declare module ccui {
        export class ListView extends ccui.ScrollView {
            /**
            * The list view control of Cocos UI.
            */
            constructor();
            /**
            * add child to ListView
            */
            addChild(widget, zOrder, tag);
            /**
            * Adds event listener to ccui.ListView.
            */
            addEventListener(selector, target);
            /**
            * Adds event listener to ccui.ListView.
            */
            addEventListenerListView(selector, target);
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
            getIndex(item);
            /**
            * Returns a item whose index is same as the parameter.
            */
            getItem(index);
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
            insertCustomItem(item, index);
            /**
            * Insert a default item(create by a cloned model) into ListView.
            */
            insertDefaultItem(index);
            /**
            * Intercept touch event, handle its child&#39;s touch event.
            */
            interceptTouchEvent(eventType, sender, touch);
            /**
            * Push back custom item into ListView.
            */
            pushBackCustomItem(item);
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
            removeAllChildrenWithCleanup(cleanup);
            /**
            * Removes all items from ccui.ListView.
            */
            removeAllItems();
            /**
            * remove child from ListView
            */
            removeChild(widget, cleanup);
            /**
            * Removes a item whose index is same as the parameter.
            */
            removeItem(index);
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
            setDirection(dir);
            /**
            * Changes the gravity of ListView.
            */
            setGravity(gravity);
            /**
            * Sets a item model for ListView.
            */
            setItemModel(model);
            /**
            * Changes the margin between each item.
            */
            setItemsMargin(margin);
        }
}
declare module ccui {
        export class LoadingBar extends ccui.Widget {
            /**
            * The LoadingBar control of Cocos UI.
            */
            constructor();
            /**
            * Allocates and initializes a UILoadingBar.
            */
            static create(textureName, percentage);
            /**
            * allocates and initializes a UILoadingBar.
            */
            ctor(textureName, percentage);
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
            ignoreContentAdaptWithSize(ignore);
            /**
            * Returns LoadingBar is using scale9 renderer or not.
            */
            isScale9Enabled();
            /**
            * Loads texture for LoadingBar.
            */
            loadTexture(texture, texType);
            /**
            * Sets capinsets for LoadingBar, if LoadingBar is using scale9 renderer.
            */
            setCapInsets(capInsets);
            /**
            * Sets the contentSize of ccui.LoadingBar
            */
            setContentSize(contentSize, height);
            /**
            * Changes the progress direction of LoadingBar.
            */
            setDirection(dir);
            /**
            * The current progress of loadingBar
            */
            setPercent(percent);
            /**
            * Sets if LoadingBar is using scale9 renderer.
            */
            setScale9Enabled(enabled);
        }
}
declare module ccui {
        export class Margin extends ccui.Class {
            /**
            * Base class for ccui.Margin
            */
            constructor();
            /**
            * Constructor of ccui.Margin.
            */
            ctor(margin, top, right, bottom);
            /**
            * Checks target whether equals itself.
            */
            equals(target);
            /**
            * Sets boundary of margin
            */
            setMargin(l, t, r, b);
        }
}
declare module ccui {
        export class Node extends ccui.Class {
            /**
            * that same as cc.Node
            */
            constructor();
        }
}
declare module ccui {
        export class PageView extends ccui.Layout {
            /**
            * The PageView control of Cocos UI.
            */
            constructor();
            /**
            * Adds event listener to ccui.PageView.
            */
            addEventListener(selector, target);
            /**
            * Adds event listener to ccui.PageView.
            */
            addEventListenerPageView(selector, target);
            /**
            * Adds a page to ccui.PageView.
            */
            addPage(page);
            /**
            * Add a widget to a page of PageView.
            */
            addWidgetToPage(widget, pageIdx, forceCreate);
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
            getPage(index);
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
            insertPage(page, idx);
            /**
            * Intercept touch event, handle its child&#39;s touch event.
            */
            interceptTouchEvent(eventType, sender, touch);
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
            onTouchCancelled(touch, event);
            /**
            * The touch ended event callback handler of ccui.PageView.
            */
            onTouchEnded(touch, event);
            /**
            * The touch moved event callback handler of ccui.PageView.
            */
            onTouchMoved(touch, event);
            /**
            * Removes all pages from PageView
            */
            removeAllPages();
            /**
            * Removes a page from PageView.
            */
            removePage(page);
            /**
            * Removes a page at index of PageView.
            */
            removePageAtIndex(index);
            /**
            * scroll PageView to index.
            */
            scrollToPage(idx);
            /**
            * Set CustomScrollThreshold
            */
            setCustomScrollThreshold(threshold);
            /**
            * Does nothing.
            */
            setLayoutType(type);
            /**
            * Set the UsingCustomScrollThreshold
            */
            setUsingCustomScrollThreshold(flag);
            /**
            * Called once per frame.
            */
            update(dt);
        }
}
declare module ccui {
        export class ProtectedNode extends ccui.Node {
            /**
            * that same as cc.Node
            */
            constructor();
        }
}
declare module ccui {
        export class RelativeBox extends ccui.Layout {
            /**
            * The Relative box for Cocos UI layout.
            */
            constructor();
            /**
            * Creates a relative box
            */
            static create(size);
            /**
            * The constructor of ccui.RelativeBox
            */
            ctor(size);
            /**
            * Initializes a relative box.
            */
            init();
            /**
            * Initializes a relative box with size
            */
            initWithSize(size);
        }
}
declare module ccui {
        export class relativeLayoutManager  {
            /**
            * ccui.relativeLayoutManager is the singleton object which is the relative layout manager for ccui.Layout, it has a _doLayout function to do layout.
            */
            constructor();
        }
}
declare module ccui {
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
            setAlign(align);
            /**
            * Sets a name in Relative Layout for LayoutParameter.
            */
            setRelativeName(name);
            /**
            * Sets a key for LayoutParameter.
            */
            setRelativeToWidgetName(name);
        }
}
declare module ccui {
        export class Scale9Sprite extends cc.Node {
            /**
            * 
A 9-slice sprite for cocos2d UI.
            */
            constructor();
            /**
            * add texture loaded event listener
            */
            addLoadedEventListener(callback, target);
            /**
            * Creates a 9-slice sprite with a texture file, a delimitation zone and
with the specified cap insets.
            */
            static create(file, rect, capInsets);
            /**
            * create a ccui.Scale9Sprite with Sprite frame.
            */
            static createWithSpriteFrame(spriteFrame, capInsets);
            /**
            * create a ccui.Scale9Sprite with a Sprite frame name
            */
            static createWithSpriteFrameName(spriteFrameName, capInsets);
            /**
            * Constructor function.
            */
            ctor(file, rect, capInsets);
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
            initWithBatchNode(batchNode, rect, rotated, capInsets);
            /**
            * Initializes a 9-slice sprite with a texture file, a delimitation zone and
with the specified cap insets.
            */
            initWithFile(file, rect, capInsets);
            /**
            * Initializes a 9-slice sprite with an sprite frame and with the specified
cap insets.
            */
            initWithSpriteFrame(spriteFrame, capInsets);
            /**
            * Initializes a 9-slice sprite with an sprite frame name and with the specified
cap insets.
            */
            initWithSpriteFrameName(spriteFrameName, capInsets);
            /**
            * returns whether or not the opacity will be applied using glColor(R,G,B,opacity) or glColor(opacity, opacity, opacity, opacity);
            */
            isOpacityModifyRGB();
            /**
            * Creates and returns a new sprite object with the specified cap insets.
            */
            resizableSpriteWithCapInsets(capInsets);
            /**
            * Color: conforms to CCRGBAProtocol protocol
            */
            setColor(color);
            /**
            * Sets the untransformed size of the Scale9Sprite.
            */
            setContentSize(size, height);
            /**
            * Sets the bottom side inset
            */
            setInsetBottom(insetBottom);
            /**
            * Sets the left side inset
            */
            setInsetLeft(insetLeft);
            /**
            * Sets the right side inset
            */
            setInsetRight(insetRight);
            /**
            * Sets the top side inset
            */
            setInsetTop(insetTop);
            /**
            * Opacity: conforms to CCRGBAProtocol protocol
            */
            setOpacity(opacity);
            /**
            * sets the premultipliedAlphaOpacity property.
            */
            setOpacityModifyRGB(value);
            /**
            * set the sprite frame of ccui.Scale9Sprite
            */
            setSpriteFrame(spriteFrame);
            /**
            * return  texture is loaded
            */
            textureLoaded();
            /**
            * Update the scale9Sprite with a SpriteBatchNode.
            */
            updateWithBatchNode(batchNode, originalRect, rotated, capInsets);
        }
}
declare module ccui {
        export class ScrollView extends ccui.Layout {
            /**
            * The ScrollView control of Cocos UI
            */
            constructor();
            /**
            * Add child to ccui.ScrollView.
            */
            addChild(widget, zOrder, tag);
            /**
            * Adds callback function called ScrollView event triggered
            */
            addEventListener(selector, target);
            /**
            * Adds callback function called ScrollView event triggered
            */
            addEventListenerScrollView(selector, target);
            /**
            * Add node for scrollView
            */
            addNode(node, zOrder, tag);
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
            findNextFocusedWidget(direction, current);
            /**
            * Gets a child from the container given its name
            */
            getChildByName(name);
            /**
            * Gets a child from the container given its tag
            */
            getChildByTag(tag);
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
            getNodeByTag(tag);
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
            interceptTouchEvent(event, sender, touch);
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
            jumpToPercentBothDirection(percent);
            /**
            * Move inner container to horizontal percent position of ScrollView.
            */
            jumpToPercentHorizontal(percent);
            /**
            * Move inner container to vertical percent position of ScrollView.
            */
            jumpToPercentVertical(percent);
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
            onTouchBegan(touch, event);
            /**
            * The touch canceled event callback of ccui.ScrollView.
            */
            onTouchCancelled(touch, event);
            /**
            * The touch ended event callback handler of ccui.ScrollView.
            */
            onTouchEnded(touch, event);
            /**
            * The touch moved event callback handler of ccui.ScrollView.
            */
            onTouchMoved(touch, event);
            /**
            * Removes all children.
            */
            removeAllChildren();
            /**
            * Removes all children.
            */
            removeAllChildrenWithCleanup(cleanup);
            /**
            * Remove all node from ccui.ScrollView.
            */
            removeAllNodes();
            /**
            * Removes widget child
            */
            removeChild(child, cleanup);
            /**
            * Removes a node from ccui.ScrollView.
            */
            removeNode(node);
            /**
            * Removes a node by tag
            */
            removeNodeByTag(tag);
            /**
            * Scroll inner container to bottom boundary of ScrollView.
            */
            scrollToBottom(time, attenuated);
            /**
            * Scroll inner container to bottom and left boundary of ScrollView.
            */
            scrollToBottomLeft(time, attenuated);
            /**
            * Scroll inner container to bottom and right boundary of ScrollView.
            */
            scrollToBottomRight(time, attenuated);
            /**
            * Scroll inner container to left boundary of ScrollView.
            */
            scrollToLeft(time, attenuated);
            /**
            * Scroll inner container to both direction percent position of ScrollView.
            */
            scrollToPercentBothDirection(percent, time, attenuated);
            /**
            * Scroll inner container to horizontal percent position of ScrollView.
            */
            scrollToPercentHorizontal(percent, time, attenuated);
            /**
            * Scroll inner container to vertical percent position of ScrollView.
            */
            scrollToPercentVertical(percent, time, attenuated);
            /**
            * Scroll inner container to right boundary of ScrollView.
            */
            scrollToRight(time, attenuated);
            /**
            * Scroll inner container to top boundary of ScrollView.
            */
            scrollToTop(time, attenuated);
            /**
            * Scroll inner container to top and left boundary of ScrollView.
            */
            scrollToTopLeft(time, attenuated);
            /**
            * Scroll inner container to top and right boundary of ScrollView.
            */
            scrollToTopRight(time, attenuated);
            /**
            * Sets bounce enabled
            */
            setBounceEnabled(enabled);
            /**
            * Changes scroll direction of ScrollView.
            */
            setDirection(dir);
            /**
            * Sets inertiaScroll enabled
            */
            setInertiaScrollEnabled(enabled);
            /**
            * Changes inner container size of ScrollView.
            */
            setInnerContainerSize(size);
            /**
            * Sets LayoutType of ccui.ScrollView.
            */
            setLayoutType(type);
            /**
            * The update callback handler.
            */
            update(dt);
        }
}
declare module ccui {
        export class Slider extends ccui.Widget {
            /**
            * The Slider control of Cocos UI.
            */
            constructor();
            /**
            * Adds a callback
            */
            addEventListener(selector, target);
            /**
            * add event listener
            */
            addEventListenerSlider(selector, target);
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
            hitTest(pt);
            /**
            * override &quot;ignoreContentAdaptWithSize&quot; method of widget.
            */
            ignoreContentAdaptWithSize(ignore);
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
            loadBarTexture(fileName, texType);
            /**
            * Loads dark state texture for slider progress bar.
            */
            loadProgressBarTexture(fileName, texType);
            /**
            * Load dark state texture for slider ball.
            */
            loadSlidBallTextureDisabled(disabled, texType);
            /**
            * Loads normal state texture for slider ball.
            */
            loadSlidBallTextureNormal(normal, texType);
            /**
            * Loads selected state texture for slider ball.
            */
            loadSlidBallTexturePressed(pressed, texType);
            /**
            * Loads textures for slider ball.
            */
            loadSlidBallTextures(normal, pressed, disabled, texType);
            /**
            * Sets capinsets of ProgressBar for slider, if slider is using scale9 renderer.
            */
            setCapInsetProgressBarRenderer(capInsets);
            /**
            * Sets capinsets for slider, if slider is using scale9 renderer.
            */
            setCapInsets(capInsets);
            /**
            * Sets capinsets for slider&#39;s renderer, if slider is using scale9 renderer.
            */
            setCapInsetsBarRenderer(capInsets);
            /**
            * Changes the progress direction of slider.
            */
            setPercent(percent);
            /**
            * Sets if slider is using scale9 renderer.
            */
            setScale9Enabled(able);
        }
}
declare module ccui {
        export class TextField extends ccui.Widget {
            /**
            * 
            */
            constructor();
            /**
            * Adds event listener callback.
            */
            addEventListener(target, selector);
            /**
            * Adds event listener to cuci.TextField.
            */
            addEventListenerTextField(target, selector);
            /**
            * Open keyboard and receive input text.
            */
            attachWithIME();
            /**
            * Creates a ccui.TextField.
            */
            static create(placeholder, fontName, fontSize);
            /**
            * allocates and initializes a UITextField.
            */
            ctor(placeholder, fontName, fontSize);
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
            hitTest(pt);
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
            onTouchBegan(touchPoint, unusedEvent);
            /**
            * Sets attach with IME.
            */
            setAttachWithIME(attach);
            /**
            * Sets the delete backward of ccui.TextField.
            */
            setDeleteBackward(deleteBackward);
            /**
            * Sets detach with IME.
            */
            setDetachWithIME(detach);
            /**
            * Sets font name for ccui.TextField
            */
            setFontName(name);
            /**
            * Sets font size for ccui.TextField.
            */
            setFontSize(size);
            /**
            * Sets insertText string to ccui.TextField.
            */
            setInsertText(insertText);
            /**
            * Sets the max length of ccui.TextField.
            */
            setMaxLength(length);
            /**
            * Sets Whether to open string length limit for ccui.TextField.
            */
            setMaxLengthEnabled(enable);
            /**
            * Sets whether to open setting string as password character.
            */
            setPasswordEnabled(enable);
            /**
            * Sets the password style character, Only when you turn on setting string as password character, it is valid.
            */
            setPasswordStyleText(styleText);
            /**
            * Sets the placeholder string.
            */
            setPlaceHolder(value);
            /**
            * Sets the place holder color to ccui.TextField.
            */
            setPlaceHolderColor(color);
            /**
            * Changes the string value of textField.
            */
            setString(text);
            /**
            * Changes the string value of textField.
            */
            setText(text);
            /**
            * Sets the text area size to ccui.TextField.
            */
            setTextAreaSize(size);
            /**
            * Sets the text color to ccui.TextField
            */
            setTextColor(textColor);
            /**
            * Sets the text horizontal alignment of ccui.TextField.
            */
            setTextHorizontalAlignment(alignment);
            /**
            * Sets the text vertical alignment of ccui.TextField.
            */
            setTextVerticalAlignment(alignment);
            /**
            * Sets whether use touch area.
            */
            setTouchAreaEnabled(enable);
            /**
            * Sets touch size of ccui.TextField.
            */
            setTouchSize(size);
        }
}
declare module ccui {
        export class VBox extends ccui.Layout {
            /**
            * The vertical box of Cocos UI.
            */
            constructor();
            /**
            * Creates a VBox
            */
            static create(size);
            /**
            * The constructor of ccui.VBox
            */
            ctor(size);
            /**
            * Initializes a VBox.
            */
            init();
            /**
            * Initializes a VBox with size.
            */
            initWithSize(size);
        }
}
declare module ccui {
        export class Widget extends ccui.ProtectedNode {
            /**
            * The base class for ccui controls and layout
            */
            constructor();
            /**
            * Adds a node for widget (this function is deleted in -x)
            */
            addNode(node, zOrder, tag);
            /**
            * Sets the touch event target/selector of the ccui.Widget
            */
            addTouchEventListener(selector, target);
            /**
            * Calls the checkChildInfo of widget&#39;s parent, its subclass will override it.
            */
            checkChildInfo(handleState, sender, touchPoint);
            /**
            * Checks a point if in parent&#39;s area.
            */
            clippingParentAreaContainPoint(pt);
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
            dispatchFocusEvent(widgetLostFocus, widgetGetFocus);
            /**
            * call this method with parameter true to enable the Android Dpad focus navigation feature
            */
            enableDpadNavigation(enable);
            /**
            * 
    When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
            */
            findNextFocusedWidget(direction, current);
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
            getLayoutParameter(type);
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
            getNodeByTag(tag);
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
            hitTest(pt);
            /**
            * Ignore the widget size
            */
            ignoreContentAdaptWithSize(ignore);
            /**
            * initializes state of widget.
            */
            init();
            /**
            * Sends the touch event to widget&#39;s parent, its subclass will override it, e.g.
            */
            interceptTouchEvent(eventType, sender, touch);
            /**
            * Determines if the widget is bright
            */
            isBright();
            /**
            * returns whether clipping parent widget contains point.
            */
            isClippingParentContainsPoint(pt);
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
            onFocusChange(widgetLostFocus, widgetGetFocus);
            /**
            * 
   The callback of touch began event.
            */
            onTouchBegan(touch, event);
            /**
            * A call back function called when widget is selected, and on touch canceled.
            */
            onTouchCancelled(touchPoint);
            /**
            * 
     The callback of touch end event
     It sends event to parent widget by interceptTouchEvent,
     calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
            */
            onTouchEnded(touch, event);
            /**
            * A call back function called when widget is selected, and on touch long clicked.
            */
            onTouchLongClicked(touchPoint);
            /**
            * 
   The callback of touch moved event.
            */
            onTouchMoved(touch, event);
            /**
            * Removes all node
            */
            removeAllNodes();
            /**
            * Removes a node from ccui.Widget
            */
            removeNode(node, cleanup);
            /**
            * Removes node by tag
            */
            removeNodeByTag(tag, cleanup);
            /**
            * when a widget calls this method, it will get focus immediately.
            */
            requestFocus();
            /**
            * Sets whether the widget is bright.
            */
            setBright(bright);
            /**
            * To set the bright style of ccui.Widget.
            */
            setBrightStyle(style);
            /**
            * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer&#39;s contentSize, otherwise the content size is parameter.
            */
            setContentSize(contentSize, height);
            /**
            * 
    Sets whether the widget is enabled                                                                                    
    true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
            */
            setEnabled(enabled);
            /**
            * Sets whether the widget should be flipped horizontally or not.
            */
            setFlippedX(flipX);
            /**
            * Sets whether the widget should be flipped vertically or not.
            */
            setFlippedY(flipY);
            /**
            * Sets whether the widget is on focused
The default value is false, a widget is default to not on focused
            */
            setFocused(focus);
            /**
            * sets whether the widget could accept focus.
            */
            setFocusEnabled(enable);
            /**
            * Sets whether the widget is highlighted.
            */
            setHighlighted(highlight);
            /**
            * Gets LayoutParameter of widget.
            */
            setLayoutParameter(parameter);
            /**
            * Changes the position (x,y) of the widget .
            */
            setPosition(pos, posY);
            /**
            * Changes the position (x,y) of the widget
            */
            setPositionPercent(percent);
            /**
            * Changes the position type of the widget
            */
            setPositionType(type);
            /**
            * Changes the size that is widget&#39;s size
            */
            setSize(size);
            /**
            * Changes the percent that is widget&#39;s percent size
            */
            setSizePercent(percent);
            /**
            * TEXTURE_RES_TYPE
Changes the size type of widget.
            */
            setSizeType(type);
            /**
            * Sets whether the widget is touch enabled.
            */
            setTouchEnabled(enable);
            /**
            * updates its size by size type and its position by position type.
            */
            updateSizeAndPosition(parentSize);
            /**
            * Calls _adaptRenderers(its subClass will override it) before calls its parent&#39;s visit.
            */
            visit(ctx);
        }
}
declare module jsb {
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
            create(arg0, arg1);
            /**
            * 
            */
            ctor(arg0, arg1);
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
        export class EventAssetsManager  {
            /**
            * 
            */
            constructor();
            /**
            * 
            */
            EventAssetsManager(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
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
        export class EventListenerAssetsManager  {
            /**
            * 
            */
            constructor();
            /**
            * 
            */
            create(arg0, arg1);
            /**
            * 
            */
            EventListenerAssetsManager();
            /**
            * 
            */
            init(arg0, arg1);
        }
}
declare module jsb {
        export class fileUtils  {
            /**
            * ATTENTION: USE jsb.fileUtils INSTEAD OF jsb.FileUtils.
            */
            constructor();
            /**
            * 
            */
            addSearchPath(arg0);
            /**
            * 
            */
            addSearchResolutionsOrder(arg0);
            /**
            * 
            */
            createDirectories(arg0);
            /**
            * 
            */
            createDirectory(arg0);
            /**
            * 
            */
            fullPathForFilename(arg0);
            /**
            * 
            */
            fullPathFromRelativeFile(arg0, arg1);
            /**
            * 
            */
            getFileSize(arg0);
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
            getStringFromFile(arg0);
            /**
            * 
            */
            getValueMapFromFile(arg0);
            /**
            * 
            */
            getValueVectorFromFile(arg0);
            /**
            * 
            */
            getWritablePath();
            /**
            * 
            */
            isAbsolutePath(arg0);
            /**
            * 
            */
            isDirectoryExist(arg0);
            /**
            * 
            */
            isFileExist(arg0);
            /**
            * 
            */
            isPopupNotify();
            /**
            * 
            */
            loadFilenameLookupDictionaryFromFile(arg0);
            /**
            * 
            */
            purgeCachedEntries();
            /**
            * 
            */
            removeDirectory(arg0);
            /**
            * 
            */
            removeFile(arg0);
            /**
            * 
            */
            renameFile(arg0, arg1, arg2);
            /**
            * 
            */
            setSearchPaths(arg0);
            /**
            * 
            */
            setSearchResolutionsOrder(arg0);
            /**
            * 
            */
            writeStringToFile(arg0, arg1);
            /**
            * 
            */
            writeToFile(arg0, arg1);
        }
}
declare module jsb {
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
        export class Skeleton extends cc.Node {
            /**
            * 
    The skeleton of Spine.
            */
            constructor();
            /**
            * Creates a skeleton object.
            */
            static create(skeletonDataFile, atlasFile, scale);
            /**
            * The constructor of sp.Skeleton.
            */
            ctor(skeletonDataFile, atlasFile, scale);
            /**
            * Finds a bone by name.
            */
            findBone(boneName);
            /**
            * Finds a slot by name.
            */
            findSlot(slotName);
            /**
            * Returns the attachment for the slot and attachment name.
            */
            getAttachment(slotName, attachmentName);
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
            getTextureAtlas(regionAttachment);
            /**
            * Initializes a sp.Skeleton.
            */
            init();
            /**
            * Initializes sp.Skeleton with Data.
            */
            initWithArgs(skeletonDataFile, atlasFile, scale);
            /**
            * Returns whether to enable premultiplied alpha.
            */
            isOpacityModifyRGB();
            /**
            * Sets the attachment for the slot and attachment name.
            */
            setAttachment(slotName, attachmentName);
            /**
            * Sets the blendFunc of sp.Skeleton.
            */
            setBlendFunc(src, dst);
            /**
            * Sets the bones to the setup pose, using the values from the `BoneData` list in the `SkeletonData`.
            */
            setBonesToSetupPose();
            /**
            * Sets whether open debug bones.
            */
            setDebugBones(enable);
            /**
            * Sets whether open debug solots.
            */
            setDebugSolots(enable);
            /**
            * Sets the premultiplied alpha value to sp.Skeleton.
            */
            setOpacityModifyRGB(alpha);
            /**
            * Sets skeleton data to sp.Skeleton.
            */
            setSkeletonData(skeletonData, ownsSkeletonData);
            /**
            * Finds a skin by name and makes it the active skin.
            */
            setSkin(skinName);
            /**
            * Sets the slots to the setup pose, using the values from the `SlotData` list in the `SkeletonData`.
            */
            setSlotsToSetupPose();
            /**
            * Sets the time scale of sp.Skeleton.
            */
            setTimeScale(v);
            /**
            * Sets the bones and slots to the setup pose.
            */
            setToSetupPose();
            /**
            * Update will be called automatically every frame if &quot;scheduleUpdate&quot; is called when the node is &quot;live&quot;.
            */
            update(dt);
            /**
            * Computes the world SRT from the local SRT for each bone.
            */
            updateWorldTransform();
        }
}
declare module sp {
        export class SkeletonAnimation extends sp.Skeleton {
            /**
            * The skeleton animation of spine.
            */
            constructor();
            /**
            * Adds an animation to be played delay seconds after the current or last queued animation.
            */
            addAnimation(trackIndex, name, loop, delay);
            /**
            * Clears track of animation state by trackIndex.
            */
            clearTrack(trackIndex);
            /**
            * Clears all tracks of animation state.
            */
            clearTracks();
            /**
            * Creates a skeleton animation object.
            */
            static create(skeletonDataFile, atlasFile, scale);
            /**
            * Returns track entry by trackIndex.
            */
            getCurrent(trackIndex);
            /**
            * Initializes a sp.SkeletonAnimation.
            */
            init();
            /**
            * Set the current animation.
            */
            setAnimation(trackIndex, name, loop);
            /**
            * Sets event listener of sp.SkeletonAnimation.
            */
            setAnimationListener(target, callback);
            /**
            * Sets animation state data to sp.SkeletonAnimation.
            */
            setAnimationStateData(stateData);
            /**
            * Mix applies all keyframe values, interpolated for the specified time and mixed with the current values.
            */
            setMix(fromAnimation, toAnimation, duration);
            /**
            * Update will be called automatically every frame if &quot;scheduleUpdate&quot; is called when the node is &quot;live&quot;.
            */
            update(dt);
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
