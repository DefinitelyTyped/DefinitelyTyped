import {
    Curtains,
    Mat4,
    Plane,
    PlaneParams,
    Quat,
    RenderTarget,
    ShaderPass,
    SingleValueUniform,
    Texture,
    TextureLoader,
    Uniform,
    Vec2,
    Vec3,
} from "curtainsjs";

// * Example 1: ajax nav

// set up our WebGL context and append the canvas to our wrapper
const curtains = new Curtains({
    container: "canvas",
    pixelRatio: Math.min(1.5, window.devicePixelRatio), // limit pixel ratio for performance
});

const images = [
    "../medias/plane-small-texture-1.jpg",
    "../medias/plane-small-texture-2.jpg",
    "../medias/plane-small-texture-3.jpg",
    "../medias/plane-small-texture-4.jpg",
];

const textures: Texture[] = [];

curtains
    .onError(() => {
        // we will add a class to the document body to display original images
        document.body.classList.add("no-curtains", "site-loaded");
    })
    .onContextLost(() => {
        // on context lost, try to restore the context
        curtains.restoreContext();
    })
    .onContextRestored(() => {
        // since we have some textures that do not have any parent
        // they won't be automatically restored
        // so restore them after everything else has been restored
        for (const texture of textures) {
            if (!texture.hasParent()) {
                texture._restoreContext();
            }
        }
    });

function preloadTextures() {
    let percentLoaded = 0;

    const loaderEl = document.getElementById("loader-inner")!;

    const loader = new TextureLoader(curtains);

    loader.loadImages(
        images,
        {},
        texture => {
            textures.push(texture);

            texture
                .onSourceLoaded(() => {})
                .onSourceUploaded(() => {
                    percentLoaded++;

                    loaderEl.innerText = (percentLoaded / images.length) * 100 + "%";

                    // we have finished loading our textures
                    if (percentLoaded === images.length) {
                        document.body.classList.add("site-loaded");
                    }
                });
        },
        (image, error) => {
            console.warn("there has been an error", error, " while loading this image", image);

            // display site anyway
            document.body.classList.add("site-loaded");
        },
    );
}

preloadTextures();

window.addEventListener("load", () => {
    // resize our curtainsjs container because we instanced it before any dom load event
    curtains.resize();

    // we will keep track of all our planes in an array
    let planes: Plane[] = [];
    let planeElements: ArrayLike<Element> = [];

    const vs = `
        precision mediump float;

        // default mandatory variables
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        // texture matrix
        uniform mat4 uTextureMatrix0;

        // custom variables
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uTime;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            float distanceFromCenter = distance(vec2(vertexPosition.x, vertexPosition.y), vec2(0.5, vertexPosition.x));
            vertexPosition.z += 0.05 * cos(5.0 * (distanceFromCenter - (uTime / 100.0)));

            // set positions
            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            // varyings
            vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;
            vVertexPosition = vertexPosition;
        }
    `;

    const fs = `
        precision mediump float;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform sampler2D uSampler0;

        void main( void ) {
            // our texture
            gl_FragColor = texture2D(uSampler0, vTextureCoord);
        }
    `;

    // all planes will have the same parameters
    const params: PlaneParams = {
        vertexShader: vs, // our vertex shader
        fragmentShader: fs, // our framgent shader
        widthSegments: 30,
        heightSegments: 20,

        autoloadSources: false,

        fov: 35,
        uniforms: {
            time: {
                name: "uTime", // uniform name that will be passed to our shaders
                type: "1f", // this means our uniform is a float
                value: 0,
            },
        },
    };

    // add the right texture to the plane
    function assignTexture(plane: Plane) {
        // set the right texture
        const planeImage = plane.htmlElement.querySelector("img");
        const planeTexture = textures.find(
            element => element.source && (element.source as HTMLImageElement).src === planeImage?.src,
        );

        // we got a texture that matches the plane img element, add it
        if (planeTexture) {
            // exactly the same as planeTexture.addParent(plane)
            plane.addTexture(planeTexture);
        }
    }

    // handle all the planes
    function handlePlanes(index: number) {
        const plane = planes[index];

        // if the textures are already created, proceed
        if (textures.length === images.length) {
            assignTexture(plane);
        } else {
            // it's also possible that the planes were created before the textures sources were loaded
            // so we'll use our nextRender method with its keep parameter to true to act as a setInterval
            // once our textures are ready, cancel the nextRender call by setting the keep flag to false
            const waitForTexture = curtains.nextRender(() => {
                if (textures.length === images.length) {
                    // textures are ready, stop executing the callback
                    waitForTexture.keep = false;

                    // assign the texture
                    assignTexture(plane);
                }
            }, true);
        }

        plane
            .onRender(() => {
                // increment our time uniform
                (plane.uniforms.time as SingleValueUniform).value++;
            })
            .onError(() => {
                // display original HTML image element
                plane.htmlElement.classList.add("no-plane");
            });
    }

    function addPlanes() {
        planeElements = document.getElementsByClassName("plane");

        // if we got planes to add
        if (planeElements.length > 0) {
            for (let i = 0; i < planeElements.length; i++) {
                // add the plane to our array
                const plane = new Plane(curtains, planeElements[i], params);
                // only push the plane if it exists
                planes.push(plane);

                handlePlanes(i);
            }
        }
    }

    function removePlanes() {
        // remove all planes
        for (const plane of planes) {
            plane.remove();
        }

        // reset our arrays
        planes = [];
    }

    addPlanes();

    // a flag to know if we are currently in a transition between pages
    let isTransitioning = false;

    // handle all the navigation process
    function handleNavigation() {
        // button navigation
        const navButtons = document.getElementsByClassName("navigation-button");

        function buttonNavigation(this: HTMLElement, e: Event) {
            // get button index
            let index = 0;
            for (let i = 0; i < navButtons.length; i++) {
                navButtons[i].classList.remove("active");
                if (this === navButtons[i]) {
                    index = i;
                    navButtons[i].classList.add("active");
                }
            }

            // ajax call
            handleAjaxCall(navButtons[index].getAttribute("href")!, appendContent);

            // prevent link default behaviour
            e.preventDefault();
        }

        // listen to the navigation buttons click event
        for (const navButton of Array.from(navButtons)) {
            navButton.addEventListener("click", buttonNavigation, false);
        }

        // this function will execute our AJAX call and run a callback function
        function handleAjaxCall(href: string, callback: (href: string, response: XMLHttpRequest["response"]) => void) {
            // set our transition flag
            isTransitioning = true;

            // handling ajax
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
                    const response = xhr.response;
                    callback(href, response);
                }
            };

            xhr.open("GET", href, true);
            xhr.setRequestHeader("Accept", "text/html");
            xhr.send(null);

            // start page transition
            document.getElementById("page-wrap")!.classList.add("page-transition");
        }

        function appendContent(href: string, response: XMLHttpRequest["response"]) {
            // append our response to a div
            const tempHtml = document.createElement("div");
            tempHtml.insertAdjacentHTML("beforeend", response);

            // let the css animation run
            setTimeout(() => {
                removePlanes();

                let content: Element | null = null;
                // manual filtering to get our content
                for (const child of Array.from(tempHtml.children)) {
                    if (child.getAttribute("id") === "page-wrap") {
                        for (const subChild of Array.from(child.children)) {
                            if (subChild.getAttribute("id") === "content") {
                                content = subChild;
                            }
                        }
                    }
                }

                // empty our content div and append our new content
                document.getElementById("content")!.innerHTML = "";
                if (content) {
                    document.getElementById("content")!.appendChild(content.children[0]);
                }

                document.getElementById("page-wrap")!.classList.remove("page-transition");

                addPlanes();

                // reset our transition flag
                isTransitioning = false;

                history.pushState(null, "", href);
            }, 750);
        }
    }

    handleNavigation();
});

// * Example 2 : Async textures

window.addEventListener("load", () => {
    // here we will handle which texture is visible and the timer to transition between images
    let activeTexture = 1;
    let transitionTimer = 0;

    // set up our WebGL context and append the canvas to our wrapper
    const curtains = new Curtains({
        container: "canvas",
        watchScroll: false, // no need to listen for the scroll in this example
        pixelRatio: Math.min(1.5, window.devicePixelRatio), // limit pixel ratio for performance
    });

    // disable drawing for now
    curtains.disableDrawing();

    curtains
        .onError(() => {
            // we will add a class to the document body to display original images
            document.body.classList.add("no-curtains");
            // display an error message
            document.getElementById("load-images")!.innerHTML =
                "There has been an error while initiating the WebGL context.";
        })
        .onContextLost(() => {
            // on context lost, try to restore the context
            curtains.restoreContext();
        });

    // get our plane element
    const planeElements = document.getElementsByClassName("async-textures");

    const vs = `
        precision mediump float;

        // default mandatory variables
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        // varyings
        // note how our texture matrices variable name matches the samplers variable names
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;
        varying vec2 vFirstTextureCoord;
        varying vec2 vSecondTextureCoord;

        // textures matrices
        uniform mat4 firstTextureMatrix;
        uniform mat4 secondTextureMatrix;

        uniform float uTransitionTimer;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            // a float varying from -1.5 to 1.5
            float waveCoords = ((uTransitionTimer / 60.0) * 3.5) - 1.75;

            // distance from the waveCoords to the vertex coordinates
            float distanceToWave = distance(vec2(vertexPosition.x, 0.0), vec2(waveCoords, 0.0));

            // nice little wave animation from left to right or right to left depending on the timer
            vertexPosition.z = (cos(clamp(distanceToWave, 0.0, 0.75) * 3.141592) - cos(0.75 * 3.141592)) * 0.05;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            // varyings
            vTextureCoord = aTextureCoord;
            vFirstTextureCoord = (firstTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
            vSecondTextureCoord = (secondTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
            vVertexPosition = vertexPosition;
        }
    `;

    const fs = `
        precision mediump float;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;
        varying vec2 vFirstTextureCoord;
        varying vec2 vSecondTextureCoord;

        uniform float uTransitionTimer;

        uniform sampler2D firstTexture;
        uniform sampler2D secondTexture;

        void main() {
            // set our textures
            vec4 firstTextureColor = texture2D(firstTexture, vFirstTextureCoord);
            vec4 secondTextureColor = texture2D(secondTexture, vSecondTextureCoord);

            // mix our textures based on our transition timer
            vec4 finalColor = mix(firstTextureColor, secondTextureColor, clamp((2.0 - vTextureCoord.x) * (uTransitionTimer / 60.0), 0.0, 1.0));

            // handling premultiplied alpha
            finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);

            gl_FragColor = finalColor;
        }
    `;

    // really basic params
    const params: PlaneParams = {
        vertexShader: vs,
        fragmentShader: fs,
        widthSegments: 20,
        heightSegments: 1,
        visible: false, // hide the plane while its empty
        uniforms: {
            transitionTimer: {
                name: "uTransitionTimer",
                type: "1f",
                value: 0,
            },
        },
    };

    // first we create en empty plane
    // it won't appear because it does not have any texture, but it will be there !
    const asyncTexturesPlane = new Plane(curtains, planeElements[0], params);

    asyncTexturesPlane
        .onReady(() => {
            // images are loaded, we are ready to attach event listener and do stuff
            planeElements[0].addEventListener("click", () => {
                // enable drawing to display transitions
                curtains.enableDrawing();

                // switch the active texture
                if (activeTexture === 1) {
                    activeTexture = 2;

                    document.getElementById("async-textures-wrapper")!.classList.add("second-image-shown");
                } else {
                    activeTexture = 1;

                    document.getElementById("async-textures-wrapper")!.classList.remove("second-image-shown");
                }
            });
        })
        .onRender(() => {
            // increase/decrease our timer based on active texture
            if (activeTexture === 2) {
                // use damping to smoothen transition
                transitionTimer += (60 - transitionTimer) * 0.05;
            } else {
                // use damping to smoothen transition
                transitionTimer += (0 - transitionTimer) * 0.05;
            }
            // update the uniform
            asyncTexturesPlane.uniforms.transitionTimer.value = transitionTimer;
        })
        .onError(() => {
            // we will add a class to the document body to display original images
            document.body.classList.add("no-curtains");
            // display an error message
            document.getElementById("load-images")!.innerHTML =
                "There has been an error while initiating the WebGL context.";
        });

    // then we add images to it, could be after an event or an AJAX call
    document.getElementById("load-images")!.addEventListener("click", () => {
        document.getElementById("page-wrap")!.classList.add("load-images");

        // get our images in the HTML, but it could be inside an AJAX response
        const asyncImgElements = document.getElementById("async-textures-wrapper")!.getElementsByTagName("img");

        // track image loading
        let imagesLoaded = 0;
        const imagesToLoad = asyncImgElements.length;

        // load the images
        asyncTexturesPlane.loadImages(asyncImgElements, {
            // textures options
            // improve texture rendering on small screens with LINEAR_MIPMAP_NEAREST minFilter
            minFilter: curtains.gl.LINEAR_MIPMAP_NEAREST,
        });

        asyncTexturesPlane.onLoading(() => {
            imagesLoaded++;
            if (imagesLoaded === imagesToLoad) {
                // everything is ready, we need to render at least one frame
                curtains.needRender();

                // if window has been resized between plane creation and image loading, we need to trigger a resize
                asyncTexturesPlane.resize();
                // show our plane now
                asyncTexturesPlane.visible = true;
            }
        });
    });
});

// * Example 3 - Multiple planes with parallax

class LocomotiveScroll {
    constructor(options: Record<string, unknown>) {}
    isMobile: boolean;
    on(
        event: string,
        callback: (obj: {
            scroll: {
                x: number;
                y: number;
            };
        }) => void,
    ): void {}
}

window.addEventListener("load", () => {
    // we will keep track of all our planes in an array
    const planes: Plane[] = [];
    let scrollEffect = 0;

    // get our planes elements
    const planeElements = document.getElementsByClassName("plane");

    // handle smooth scroll and update planes positions
    const smoothScroll = new LocomotiveScroll({
        el: document.getElementById("page-content"),
        smooth: true,
        inertia: 0.5,
        passive: true,
    });

    const useNativeScroll = smoothScroll.isMobile;

    // set up our WebGL context and append the canvas to our wrapper
    const curtains = new Curtains({
        container: "canvas",
        watchScroll: useNativeScroll, // watch scroll on mobile not on desktop since we're using locomotive scroll
        pixelRatio: Math.min(1.5, window.devicePixelRatio), // limit pixel ratio for performance
    });

    curtains
        .onRender(() => {
            if (useNativeScroll) {
                // update our planes deformation
                // increase/decrease the effect
                scrollEffect = curtains.lerp(scrollEffect, 0, 0.05);
            }
        })
        .onScroll(() => {
            // get scroll deltas to apply the effect on scroll
            const delta = curtains.getScrollDeltas();

            // invert value for the effect
            delta.y = -delta.y;

            // threshold
            if (delta.y > 60) {
                delta.y = 60;
            } else if (delta.y < -60) {
                delta.y = -60;
            }

            scrollEffect = useNativeScroll && Math.abs(delta.y) > Math.abs(scrollEffect)
                ? curtains.lerp(scrollEffect, delta.y, 0.5)
                : curtains.lerp(scrollEffect, delta.y * 1.5, 0.5);

            // manually update planes positions
            for (let i = 0; i < planes.length; i++) {
                // apply additional translation, scale and rotation
                applyPlanesParallax(i);

                // update the plane deformation uniform as well
                planes[i].uniforms.scrollEffect.value = scrollEffect;
            }
        })
        .onError(() => {
            // we will add a class to the document body to display original images
            document.body.classList.add("no-curtains", "planes-loaded");
        })
        .onContextLost(() => {
            // on context lost, try to restore the context
            curtains.restoreContext();
        });

    function updateScroll(xOffset: number, yOffset: number) {
        // update our scroll manager values
        curtains.updateScrollValues(xOffset, yOffset);
    }

    // custom scroll event
    if (!useNativeScroll) {
        // we'll render only while lerping the scroll
        curtains.disableDrawing();
        smoothScroll.on("scroll", obj => {
            updateScroll(obj.scroll.x, obj.scroll.y);

            // render scene
            curtains.needRender();
        });
    }

    // keep track of the number of plane we're currently drawing
    const debugElement = document.getElementById("debug-value")!;
    // we need to fill the counter with all our planes
    let planeDrawn = planeElements.length;

    const vs = `
        precision mediump float;

        // default mandatory variables
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        uniform mat4 planeTextureMatrix;

        // custom variables
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uScrollEffect;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            // cool effect on scroll
            vertexPosition.x += sin((vertexPosition.y / 1.5 + 1.0) * 3.141592) * (sin(uScrollEffect / 2000.0));

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            // varyings
            vVertexPosition = vertexPosition;
            vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
        }
    `;

    const fs = `
        precision mediump float;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform sampler2D planeTexture;

        void main( void ) {
            // just display our texture
            gl_FragColor = texture2D(planeTexture, vTextureCoord);
        }
    `;

    const params: PlaneParams = {
        vertexShader: vs,
        fragmentShader: fs,
        widthSegments: 10,
        heightSegments: 10,
        uniforms: {
            scrollEffect: {
                name: "uScrollEffect",
                type: "1f",
                value: 0,
            },
        },
    };

    // add our planes and handle them
    for (let i = 0; i < planeElements.length; i++) {
        const plane = new Plane(curtains, planeElements[i], params);

        planes.push(plane);

        handlePlanes(i);
    }

    // handle all the planes
    function handlePlanes(index: number) {
        const plane = planes[index];

        // check if our plane is defined and use it
        plane
            .onReady(() => {
                // apply parallax on load
                applyPlanesParallax(index);

                // once everything is ready, display everything
                if (index === planes.length - 1) {
                    document.body.classList.add("planes-loaded");
                }
            })
            .onAfterResize(() => {
                // apply new parallax values after resize
                applyPlanesParallax(index);
            })
            .onRender(() => {
                // new way: we just have to change the rotation and scale properties directly!
                // apply the rotation
                plane.rotation.z = Math.abs(scrollEffect) / 750;

                // scale plane and its texture
                plane.scale.y = 1 + Math.abs(scrollEffect) / 300;
                plane.textures[0].scale.y = 1 + Math.abs(scrollEffect) / 150;

                /*
            // old way: using setRotation and setScale
            plane.setRotation(new Vec3(0, 0, scrollEffect / 750));
            plane.setScale(new Vec2(1, 1 + Math.abs(scrollEffect) / 300));
            plane.textures[0].setScale(new Vec2(1, 1 + Math.abs(scrollEffect) / 150));
            */
            })
            .onReEnterView(() => {
                // plane is drawn again
                planeDrawn++;
                // update our number of planes drawn debug value
                debugElement.innerText = planeDrawn.toString();
            })
            .onLeaveView(() => {
                // plane is not drawn anymore
                planeDrawn--;
                // update our number of planes drawn debug value
                debugElement.innerText = planeDrawn.toString();
            });
    }

    function applyPlanesParallax(index: number) {
        // calculate the parallax effect

        // get our window size
        const sceneBoundingRect = curtains.getBoundingRect();
        // get our plane center coordinate
        const planeBoundingRect = planes[index].getBoundingRect();
        const planeOffsetTop = planeBoundingRect.top + planeBoundingRect.height / 2;
        // get a float value based on window height (0 means the plane is centered)
        const parallaxEffect = (planeOffsetTop - sceneBoundingRect.height / 2) / sceneBoundingRect.height;

        // apply the parallax effect
        planes[index].relativeTranslation.y = (parallaxEffect * sceneBoundingRect.height) / 4;
    }
});

// * Example 4 - Render passes with render targets

window.addEventListener("load", () => {
    // we will keep track of all our planes in an array
    let scrollEffect = 0;

    // set up our WebGL context and append the canvas to our wrapper
    const curtains = new Curtains({
        container: "canvas",
        antialias: false, // render targets will disable default antialiasing anyway
        pixelRatio: Math.min(1.5, window.devicePixelRatio), // limit pixel ratio for performance
    });

    curtains
        .onRender(() => {
            // update our planes deformation
            // increase/decrease the effect
            scrollEffect = curtains.lerp(scrollEffect, 0, 0.05);
        })
        .onScroll(() => {
            // get scroll deltas to apply the effect on scroll
            const delta = curtains.getScrollDeltas();

            // invert value for the effect
            delta.y = -delta.y;

            // threshold
            if (delta.y > 100) {
                delta.y = 100;
            } else if (delta.y < -100) {
                delta.y = -100;
            }

            if (Math.abs(delta.y) > Math.abs(scrollEffect)) {
                scrollEffect = curtains.lerp(scrollEffect, delta.y, 0.5);
            }
        })
        .onError(() => {
            // we will add a class to the document body to display original images
            document.body.classList.add("no-curtains");
        })
        .onContextLost(() => {
            // on context lost, try to restore the context
            curtains.restoreContext();
        });

    // get our planes elements
    const planeElements = document.getElementsByClassName("plane");
    const smallPlaneElements = document.getElementsByClassName("small-plane");

    const distortionTarget = new RenderTarget(curtains);
    const rgbTarget = new RenderTarget(curtains);

    const vs = `
        precision mediump float;

        // default mandatory variables
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        uniform mat4 planeTextureMatrix;

        // custom variables
        varying vec3 vVertexPosition;
        varying vec2 vTextureMatrixCoord;

        void main() {

            vec3 vertexPosition = aVertexPosition;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            // varyings
            vVertexPosition = vertexPosition;
            vTextureMatrixCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
        }
    `;

    const fs = `
        precision mediump float;

        varying vec3 vVertexPosition;
        varying vec2 vTextureMatrixCoord;

        uniform sampler2D planeTexture;

        void main() {
            // just display our texture
            gl_FragColor = texture2D(planeTexture, vTextureMatrixCoord);
        }
    `;

    // add our planes and handle them
    for (const planeElement of Array.from(planeElements)) {
        const plane = new Plane(curtains, planeElement, {
            vertexShader: vs,
            fragmentShader: fs,
        });

        plane.setRenderTarget(distortionTarget);
    }

    // add the small planes as well
    for (const smallPlaneElement of Array.from(smallPlaneElements)) {
        const plane = new Plane(curtains, smallPlaneElement, {
            vertexShader: vs,
            fragmentShader: fs,
            texturesOptions: {
                // textures images will be reduced, use LINEAR_MIPMAP_NEAREST
                minFilter: curtains.gl.LINEAR_MIPMAP_NEAREST,
            },
        });

        plane.setRenderTarget(rgbTarget);
    }

    const distortionFs = `
        precision mediump float;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform sampler2D uRenderTexture;

        uniform float uScrollEffect;

        void main() {
            vec2 textureCoords = vTextureCoord;
            vec2 texCenter = vec2(0.5, 0.5);

            // distort around scene center
            textureCoords.y += cos((textureCoords.x - texCenter.x) * 3.141592) * uScrollEffect / 500.0;

            gl_FragColor = texture2D(uRenderTexture, textureCoords);
        }
    `;

    const distortionPass = new ShaderPass(curtains, {
        fragmentShader: distortionFs,
        renderTarget: distortionTarget,
        uniforms: {
            scrollEffect: {
                name: "uScrollEffect",
                type: "1f",
                value: 0,
            },
        },
    });

    distortionPass.onRender(() => {
        // update the uniform
        distortionPass.uniforms.scrollEffect.value = scrollEffect;
    });

    const rgbFs = `
        precision mediump float;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform sampler2D uRenderTexture;

        uniform float uScrollEffect;

        void main() {
            vec2 textureCoords = vTextureCoord;

            vec2 redTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 300.0);
            vec2 greenTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 600.0);
            vec2 blueTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 900.0);

            vec4 red = texture2D(uRenderTexture, redTextCoords);
            vec4 green = texture2D(uRenderTexture, greenTextCoords);
            vec4 blue = texture2D(uRenderTexture, blueTextCoords);

            vec4 finalColor = vec4(red.r, green.g, blue.b, min(1.0, red.a + blue.a + green.a));
            gl_FragColor = finalColor;
        }
    `;

    const rgbPass = new ShaderPass(curtains, {
        fragmentShader: rgbFs,
        renderTarget: rgbTarget,
        uniforms: {
            scrollEffect: {
                name: "uScrollEffect",
                type: "1f",
                value: 0,
            },
        },
    });

    rgbPass.onRender(() => {
        // update the uniform
        rgbPass.uniforms.scrollEffect.value = scrollEffect;
    });

    const blurFs = `
        precision mediump float;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform sampler2D uRenderTexture;

        uniform float uScrollEffect;
        uniform vec2 uResolution;


        // taken from https://github.com/Jam3/glsl-fast-gaussian-blur
        vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
            vec4 color = vec4(0.0);
            vec2 off1 = vec2(1.3333333333333333) * direction;
            color += texture2D(image, uv) * 0.29411764705882354;
            color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
            color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
            return color;
        }

        void main() {
            vec4 original = texture2D(uRenderTexture, vTextureCoord);
            vec4 blur = blur5(uRenderTexture, vTextureCoord, uResolution, vec2(0.0, 1.0));

            gl_FragColor = mix(original, blur, min(1.0, abs(uScrollEffect) / 5.0));
        }
    `;

    let curtainsBBox = curtains.getBoundingRect();

    const blurPass = new ShaderPass(curtains, {
        fragmentShader: blurFs,
        uniforms: {
            scrollEffect: {
                name: "uScrollEffect",
                type: "1f",
                value: 0,
            },
            resolution: {
                name: "uResolution",
                type: "2f",
                value: [curtainsBBox.width, curtainsBBox.height],
            },
        },
    });

    blurPass
        .onRender(() => {
            // update the uniform
            blurPass.uniforms.scrollEffect.value = scrollEffect;
        })
        .onAfterResize(() => {
            curtainsBBox = curtains.getBoundingRect();
            blurPass.uniforms.resolution.value = [curtainsBBox.width, curtainsBBox.height];
        });
});

// * Example 5 - Uniform types

const uniform1v: Uniform = {
    name: "uUniform1v",
    type: "1f",
    value: 0.5,
};

const uniform2v: Uniform = {
    name: "uUniform2v",
    type: "2f",
    value: [0.5, 0.5],
};

const uniform2vVec: Uniform = {
    name: "uUniform2v",
    type: "2f",
    value: new Vec2(0.5, 0.5),
};

const uniform3v: Uniform = {
    name: "uUniform3v",
    type: "3f",
    value: [0.5, 0.5, 0.5],
};

const uniform3vVec: Uniform = {
    name: "uUniform3v",
    type: "3f",
    value: new Vec3(0.5, 0.5, 0.5),
};

const uniform4v: Uniform = {
    name: "uUniform4v",
    type: "4f",
    value: [0.5, 0.5, 0.5, 0.5],
};

const uniform4vQuat: Uniform = {
    name: "uUniform4v",
    type: "4f",
    value: new Quat([0.5, 0.5, 0.5, 0.5]),
};

// @ts-expect-error
const uniform1i: Uniform = {
    name: "uUniform1i",
    type: "1i",
    value: [1],
};

// @ts-expect-error
const uniform2i: Uniform = {
    name: "uUniform2i",
    type: "2i",
    value: [1, 1, 1],
};

// @ts-expect-error
const uniform3i: Uniform = {
    name: "uUniform3i",
    type: "3i",
    value: 1,
};

// @ts-expect-error
const uniform4i: Uniform = {
    name: "uUniform4i",
    type: "4i",
    value: new Mat4(),
};
