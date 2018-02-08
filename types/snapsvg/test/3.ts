//the code in this test file was copied from http://svg.dabbles.info/snaptut-animateframe
//the author is Ian Brierlay

window.onload=()=>{

    var s = Snap("#svgout");
    var path = Snap.path;
    // bboxing
    var b1 = path.bezierBBox(0, 0, 0, 0, 100, 100, 100, 100);
    var b2 = path.bezierBBox(50, 50, 50, 50, 150, 150, 150, 150);
    var b3 = path.bezierBBox(100, 100, 100, 100, 200, 200, 200, 200);

    alert(b1);
    // all true
    console.log(path.isBBoxIntersect(b1, b2));
    console.log(path.isBBoxIntersect(b1, b3));
    console.log(path.isPointInsideBBox(b1, 50, 50));
    console.log(path.isPointInsideBBox(b2, 50, 50));
    console.log(!path.isPointInsideBBox(b3, 50, 50));

    {
        // Snap Transforms

        var c = s.circle( 200,200,10 );
        var r = s.rect(200,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red', 'opacity': 0.3 });

        var rclone = r.clone();
        var rclone2 = r.clone();
        var rclone3 = r.clone();
        var rclone4 = r.clone();
        var rclone5 = r.clone();

        //t=relative transform, T=absolute transform, s=relative scale, S=absolute Scale
        //r=relative rotate, R=relative rotate
        //relative means it takes into account previous transforms to accumulate
        //here it doesn't make much difference, until we combine later


        rclone.transform( 't100,100');
        rclone2.transform( 'r20,200,200' );
        rclone3.transform( 'r40,200,200' );

        s.text(350,150,"rotate around 200,200");

        rclone4.transform( 't100,100r20,200,200' );
        rclone5.transform( 't100,100r40,200,200' );

        s.text(450,250,"combined translate of 100,100 and rotate around 200,200");
    }

    {
        // Filters - Blur
        s.attr({ viewBox: "0 0 600 600" });

        var f = s.filter(Snap.filter.blur(5, 10));
        var shadow = s.filter(Snap.filter.shadow(0, 2, 3));
        var filterChild = f.node.firstChild;

        var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red', filter:  f });
        Snap.animate( 0, 10, function( value ) { filterChild.attributes[0].value = value + ',' + value;  }, 1000 );

        var t = s.text(0,50, 'Hover to blur, hover out for shadow' );

        r.hover( addBlur, addShadow );

        function addBlur() {
            this.attr({ filter: f });
            Snap.animate( 0, 10, function( value ) { filterChild.attributes[0].value = value + ',' + value;  }, 1000 );
        };

        function addShadow() {
            this.attr({ filter: shadow });
        };
    }

    {
        // Drag Handler
        var rect = s.rect(20,20,40,40);
        var circle = s.circle(60,150,50);

        var move = function(dx:number,dy:number) {
                this.attr({
                            transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                        });
        }

        var start = function() {
                this.data('origTransform', this.transform().local );
        }
        var stop = function() {
                console.log('finished dragging');
        }

        rect.drag(move, start, stop );
        circle.drag(move, start, stop );

    }

    {
        // Snap drag and scale example
        var dragging = 0;
        var handleGroup:any;

        function addHandleFunc() {
                if( dragging == 0 ) {
                        dragging = 1;
                        var bb = this.getBBox();
                        var handle = new Array();
                        handle[0] = s.circle(bb.x,bb.y,10).attr({class: 'handler'});;
                        handle[1] = s.circle(bb.x+bb.width, bb.y, 10).attr({class: 'handler'});
                        handleGroup = s.group(this, handle[0], handle[1]);
                        handleGroup.drag(move,start,stop);
                } else {
                        dragging = 0;
                        s.append(this);
                        handleGroup.selectAll('handler').remove();
                        handleGroup.remove();
                }
        }

        var start = function() {
                this.data('origTransform', this.transform().local);
        }

        var move = function(dx:number,dy:number) {
                var scale = 1 + dx / 50;
                this.attr({
                        transform: this.data('origTransform') + (this.data('origTransform') ? "S" : "s") + scale
                });
        }

        var stop = function() {};


        var myRect = s.rect( 100,100,100,100 ).attr({fill: 'blue'});

        myRect.dblclick( addHandleFunc );;

        s.text(70,220, 'double click the rect');
    }

    {
        // Snap mask
        var bigC = s.circle(200,200,175).attr({ stroke: 'silver', 'strokeWidth': 40, fill: 'silver' });

        var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red' });
        var c = s.circle(50,50,50).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'blue' });

        var g = s.group(r,c);

        g.attr({ mask: bigC });

        g.animate({ transform: 'r360,150,150' }, 1000, mina.bounce );

    }

    {
        // Snap animated mask-clippath
        var bigC = s.circle(100,100,75).attr({ stroke: 'silver', 'strokeWidth': 40, fill: 'silver' });
        var bigC2 = s.circle(250,250,75).attr({ stroke: 'silver', 'strokeWidth': 40, fill: 'silver' });
        var clipG = s.group(bigC,bigC2);

        var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red' });
        var c = s.circle(50,50,50).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'blue' });

        var g = s.group(r,c);

        g.attr({ mask: clipG });

        g.animate({ transform: 'r360,150,150' }, 3000, mina.bounce );
        clipG.animate({ transform: 't200,0' }, 3000, mina.bounce, function() { clipG.animate({ transform: 't0,0' }, 3000, mina.bounce)  }  );


    }
    {
        // Snap load and animate svg
        var g = s.group();
        var tux = Snap.load("Dreaming_tux.svg", function ( loadedFragment:Snap.Element ) {
                                                        g.append( loadedFragment );
                                                        g.hover( hoverover, hoverout );
                                                        g.text(300,100, 'hover over me');
                                                } );

        var hoverover = function() { g.animate({ transform: 's2r45,150,150' }, 1000, mina.bounce ) };
        var hoverout = function() { g.animate({ transform: 's1r0,150,150' }, 1000, mina.bounce ) };

    }

    {
        // Snap path test if a point inside with translation
        var x:number, y:number, myTranslateX = 200, myTranslateY = 100;

        var myPathString = "M 60 0 L 120 0 L 180 60 L 180 120 L 120 180 L 60 180 L 0 120 L 0 60 Z";

        var p  = s.path( myPathString );
        s.path([["M", 5, 10], ["l", 15, 2], ["Z"]]);
        var p2 = s.path( myPathString ).transform("t" + myTranslateX + "," + myTranslateY);

        for( var count = 0; count < 500; count++ ) {
                x = Math.random() * 800; y = Math.random() * 400;

                c = s.circle( x,y,5 ).attr({ fill: "silver" });

                // basic path
                if( Snap.path.isPointInside( myPathString, x,y ) ) {
                        c.attr({ fill: "#ff0000" });
                }

                // matching against path as though it was translated
                if( Snap.path.isPointInside( myPathString, x - myTranslateX, y - myTranslateY ) ) {
                        c.attr({ fill: "#0000ff" });
                }


            }
    }

    {
        // Snap animate rotate a group
        var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red' });
        var c = s.circle(50,50,50).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'blue' });

        var g = s.group(r,c);

        g.animate({ transform: 'r360,150,150' }, 1000, mina.bounce );
    }

    {
        // Snap animate in a sequence and multiple anims
        var myFrames = [{
                        animation: { transform: 'r360,150,150' }, dur: 1000 },
        {               animation: { transform: 't100,-100s2,3' }, dur: 1000 },
        {               animation: { transform: 't100,100' }, dur: 1000 },
        {               animation: { transform: 's0,1' }, dur: 1000 },
        {               animation: { transform: 's1,0' }, dur: 1000 },
        {               animation: { transform: 's1,1' }, dur: 1000 }];

        var rectAnim = [{
                                animation: { fill: 'green', transform: 'r1180,150,150' }, dur: 1500 },
                        {        animation: { fill: 'silver', transform: 'r360,150,150' }, dur: 1500 }];

        var circleAnim = [{     animation: { transform: 's0,1' }, dur: 1500 },
                        {       animation: { transform: 's1,1' }, dur: 1500 }];

        function nextFrame ( el:Snap.Element, frameArray:any[],  whichFrame:number ) {
                if( whichFrame >= frameArray.length ) { return }
                el.animate( frameArray[ whichFrame ].animation, frameArray[ whichFrame ].dur, <any>nextFrame.bind( null, el, frameArray, whichFrame + 1 ) );

        }

        var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red' });
        var c = s.circle(50,50,50).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'blue' });

        var g = s.group(r,c);

        //g.animate({ transform: 'r360,150,150' }, 1000, mina.bounce );
        nextFrame( g, myFrames, 0 );
        nextFrame( r, rectAnim, 0 );
        nextFrame( c, circleAnim, 0 );
    }
    {
        // Snap animate number
        var t = s.text(50,50,0);

        Snap.animate(0, 100, function (value) {
            t.attr({text: Math.round(value)});
        }, 1000);
    }
    {
        // Snap animate text announce
        var text = 'Here is some dynamic exciting announcement';
        // inspired from http://codepen.io/GreenSock/pen/AGzci

        var textArray = text.split(" ");
        var len = textArray.length;
        var timing = 750;

        for( var index=0; index < len; index++ ) {

            (function() {

                var svgTextElement = s.text(350,100, textArray[index]).attr({ fontSize: '120px', opacity: 0, "text-anchor": "middle" });

                setTimeout( function() {

                        Snap.animate( 0, 1, function( value ) {
                            //svgTextElement.transform('s' + value   );                              // Animate by transform
                            svgTextElement.attr({ 'font-size': value * 100,  opacity: value });      // Animate by font-size ?
                        }, timing, mina.bounce, function() { svgTextElement.remove() } );
                                    }
                ,index * timing)
            }());
        };
    }
    {
        // Snap animate on click
        var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red' });
        var c = s.circle(50,50,50).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'blue' });
        var otherRect = s.rect(200,200,50,50,10,10).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'green' });

        var g = s.group(r,c);

        var clickFunc = function () {
            g.transform('');   // reset the animation, may not be needed
            otherRect.transform('');
            g.animate({ transform: 'r45,150,150' }, 1000, mina.bounce ) ;;
            otherRect.animate({ transform: 'r360, 150,150' },2000, mina.bounce, endAnim );
        };

        var endAnim = function() {
            otherRect.animate({ transform: 'r90,200,200' }, 2000, mina.bounce );
        }

        g.click( clickFunc );
    }

    {
        // Snap and the matrix
        var s = Snap("#svgout");

        var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red' });
        var c = s.circle(50,50,50).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'blue' });
        var t = s.text(150,75,'The order of transformations is important!!!');
        var g = s.group(r,c,t);


        // TODO: add constructor to Matrix
        //var myMatrix = new Snap.Matrix();
        var myMatrix :Snap.Matrix;
        myMatrix.scale(4,2);            // play with scaling before and after the rotate
        myMatrix.translate(100,0);      // this translate will not be applied to the rotation
        myMatrix.rotate(45);            // rotate
        //myMatrix.scale(4,2);
        //myMatrix.translate(100,0);    // this translate will take into account the rotated coord space
        //g.animate({ transform: myMatrix.toTransformString() },1000);  // probably not needed

        var myInvertedMatrix = myMatrix.invert();

        g.animate({ transform: myMatrix },3000, mina.bounce, function() { g.animate({ transform: myInvertedMatrix }, 3000, mina.bounce) } );
        console.log( g.transform(), myMatrix.split() );
    }
}
