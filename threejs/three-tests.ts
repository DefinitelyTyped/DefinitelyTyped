/// <reference path="three.d.ts" />
/// <reference path="../qunit/qunit.d.ts" />

/////////////////////////////////////////////////////////////////////
// Lib.d.ts browser specific fixes necessary for these tests to work : 
/////////////////////////////////////////////////////////////////////
interface CSSStyleDeclaration {
    WebkitFilter: string;
}
interface Document {
    pointerLockElement: any;
    mozPointerLockElement: any;
    webkitPointerLockElement: any;
    fullscreenElement: any;
    mozFullscreenElement: any;
    mozFullScreenElement: any;
    webkitFullscreenElement: any;
}
interface HTMLElement {
    requestPointerLock: any;
    mozRequestPointerLock: any;
    webkitRequestPointerLock: any;
    requestFullScreen: any;
    requestFullscreen: any;
    mozRequestFullScreen: any;
    mozRequestFullscreen: any;
    webkitRequestFullscreen: any;
}

/*
The MIT License

Copyright (c) 2010-2013 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// https://github.com/mrdoob/three.js/tree/master/test/unit/math

()=>{
    var x = 2;
    var y = 3;
    var z = 4;
    var w = 5;

    var negInf2 = new THREE.Vector2( -Infinity, -Infinity );
    var posInf2 = new THREE.Vector2( Infinity, Infinity );

    var zero2 = new THREE.Vector2();
    var one2 = new THREE.Vector2( 1, 1 );
    var two2 = new THREE.Vector2( 2, 2 );

    var negInf3 = new THREE.Vector3( -Infinity, -Infinity, -Infinity );
    var posInf3 = new THREE.Vector3( Infinity, Infinity, Infinity );

    var zero3 = new THREE.Vector3();
    var one3 = new THREE.Vector3( 1, 1, 1 );
    var two3 = new THREE.Vector3( 2, 2, 2 );

    (QUnit.module)( "Box2" );

    test( "constructor", function() {
        var a = new THREE.Box2();
        ok( a.min.equals( posInf2 ), "Passed!" );
        ok( a.max.equals( negInf2 ), "Passed!" );

        a = new THREE.Box2( zero2.clone(), zero2.clone() );
        ok( a.min.equals( zero2 ), "Passed!" );
        ok( a.max.equals( zero2 ), "Passed!" );

        a = new THREE.Box2( zero2.clone(), one2.clone() );
        ok( a.min.equals( zero2 ), "Passed!" );
        ok( a.max.equals( one2 ), "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Box2( zero2.clone(), one2.clone() );
        var b = new THREE.Box2().copy( a );
        ok( b.min.equals( zero2 ), "Passed!" );
        ok( b.max.equals( one2 ), "Passed!" );

        // ensure that it is a true copy
        a.min = zero2;
        a.max = one2;
        ok( b.min.equals( zero2 ), "Passed!" );
        ok( b.max.equals( one2 ), "Passed!" );
    });

    test( "set", function() {
        var a = new THREE.Box2();

        a.set( zero2, one2 );
        ok( a.min.equals( zero2 ), "Passed!" );
        ok( a.max.equals( one2 ), "Passed!" );
    });

    test( "empty/makeEmpty", function() {
        var a = new THREE.Box2();

        ok( a.empty(), "Passed!" );

        var a = new THREE.Box2( zero2.clone(), one2.clone() );
        ok( ! a.empty(), "Passed!" );

        a.makeEmpty();
        ok( a.empty(), "Passed!" );
    });

    test( "center", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );

        ok( a.center().equals( zero2 ), "Passed!" );

        a = new THREE.Box2( zero2, one2 );
        var midpoint = one2.clone().multiplyScalar( 0.5 );
        ok( a.center().equals( midpoint ), "Passed!" );
    });

    test( "size", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );

        ok( a.size().equals( zero2 ), "Passed!" );

        a = new THREE.Box2( zero2.clone(), one2.clone() );
        ok( a.size().equals( one2 ), "Passed!" );
    });

    test( "expandByPoint", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );

        a.expandByPoint( zero2 );
        ok( a.size().equals( zero2 ), "Passed!" );

        a.expandByPoint( one2 );
        ok( a.size().equals( one2 ), "Passed!" );

        a.expandByPoint( one2.clone().negate() );
        ok( a.size().equals( one2.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.center().equals( zero2 ), "Passed!" );
    });

    test( "expandByVector", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );

        a.expandByVector( zero2 );
        ok( a.size().equals( zero2 ), "Passed!" );

        a.expandByVector( one2 );
        ok( a.size().equals( one2.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.center().equals( zero2 ), "Passed!" );
    });

    test( "expandByScalar", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );

        a.expandByScalar( 0 );
        ok( a.size().equals( zero2 ), "Passed!" );

        a.expandByScalar( 1 );
        ok( a.size().equals( one2.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.center().equals( zero2 ), "Passed!" );
    });

    test( "containsPoint", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );

        ok( a.containsPoint( zero2 ), "Passed!" );
        ok( ! a.containsPoint( one2 ), "Passed!" );

        a.expandByScalar( 1 );
        ok( a.containsPoint( zero2 ), "Passed!" );
        ok( a.containsPoint( one2 ), "Passed!" );
        ok( a.containsPoint( one2.clone().negate() ), "Passed!" );
    });

    test( "containsBox", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var b = new THREE.Box2( zero2.clone(), one2.clone() );
        var c = new THREE.Box2( one2.clone().negate(), one2.clone() );

        ok( a.containsBox( a ), "Passed!" );
        ok( ! a.containsBox( b ), "Passed!" );
        ok( ! a.containsBox( c ), "Passed!" );

        ok( b.containsBox( a ), "Passed!" );
        ok( c.containsBox( a ), "Passed!" );
        ok( ! b.containsBox( c ), "Passed!" );
    });

    test( "getParameter", function() {
        var a = new THREE.Box2( zero2.clone(), one2.clone() );
        var b = new THREE.Box2( one2.clone().negate(), one2.clone() );

        ok( a.getParameter( new THREE.Vector2( 0, 0 ) ).equals( new THREE.Vector2( 0, 0 ) ), "Passed!" );
        ok( a.getParameter( new THREE.Vector2( 1, 1 ) ).equals( new THREE.Vector2( 1, 1 ) ), "Passed!" );

        ok( b.getParameter( new THREE.Vector2( -1, -1 ) ).equals( new THREE.Vector2( 0, 0 ) ), "Passed!" );
        ok( b.getParameter( new THREE.Vector2( 0, 0 ) ).equals( new THREE.Vector2( 0.5, 0.5 ) ), "Passed!" );
        ok( b.getParameter( new THREE.Vector2( 1, 1 ) ).equals( new THREE.Vector2( 1, 1 ) ), "Passed!" );
    });

    test( "clampPoint", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var b = new THREE.Box2( one2.clone().negate(), one2.clone() );

        ok( a.clampPoint( new THREE.Vector2( 0, 0 ) ).equals( new THREE.Vector2( 0, 0 ) ), "Passed!" );
        ok( a.clampPoint( new THREE.Vector2( 1, 1 ) ).equals( new THREE.Vector2( 0, 0 ) ), "Passed!" );
        ok( a.clampPoint( new THREE.Vector2( -1, -1 ) ).equals( new THREE.Vector2( 0, 0 ) ), "Passed!" );

        ok( b.clampPoint( new THREE.Vector2( 2, 2 ) ).equals( new THREE.Vector2( 1, 1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector2( 1, 1 ) ).equals( new THREE.Vector2( 1, 1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector2( 0, 0 ) ).equals( new THREE.Vector2( 0, 0 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector2( -1, -1 ) ).equals( new THREE.Vector2( -1, -1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector2( -2, -2 ) ).equals( new THREE.Vector2( -1, -1 ) ), "Passed!" );
    });

    test( "distanceToPoint", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var b = new THREE.Box2( one2.clone().negate(), one2.clone() );

        ok( a.distanceToPoint( new THREE.Vector2( 0, 0 ) ) == 0, "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector2( 1, 1 ) ) == Math.sqrt( 2 ), "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector2( -1, -1 ) ) == Math.sqrt( 2 ), "Passed!" );

        ok( b.distanceToPoint( new THREE.Vector2( 2, 2 ) ) == Math.sqrt( 2 ), "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector2( 1, 1 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector2( 0, 0 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector2( -1, -1 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector2( -2, -2 ) ) == Math.sqrt( 2 ), "Passed!" );
    });

    test( "distanceToPoint", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var b = new THREE.Box2( one2.clone().negate(), one2.clone() );

        ok( a.distanceToPoint( new THREE.Vector2( 0, 0 ) ) == 0, "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector2( 1, 1 ) ) == Math.sqrt( 2 ), "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector2( -1, -1 ) ) == Math.sqrt( 2 ), "Passed!" );

        ok( b.distanceToPoint( new THREE.Vector2( 2, 2 ) ) == Math.sqrt( 2 ), "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector2( 1, 1 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector2( 0, 0 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector2( -1, -1 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector2( -2, -2 ) ) == Math.sqrt( 2 ), "Passed!" );
    });

    test( "isIntersectionBox", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var b = new THREE.Box2( zero2.clone(), one2.clone() );
        var c = new THREE.Box2( one2.clone().negate(), one2.clone() );

        ok( a.isIntersectionBox( a ), "Passed!" );
        ok( a.isIntersectionBox( b ), "Passed!" );
        ok( a.isIntersectionBox( c ), "Passed!" );

        ok( b.isIntersectionBox( a ), "Passed!" );
        ok( c.isIntersectionBox( a ), "Passed!" );
        ok( b.isIntersectionBox( c ), "Passed!" );

        b.translate( new THREE.Vector2( 2, 2 ) );
        ok( ! a.isIntersectionBox( b ), "Passed!" );
        ok( ! b.isIntersectionBox( a ), "Passed!" );
        ok( ! b.isIntersectionBox( c ), "Passed!" );
    });

    test( "intersect", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var b = new THREE.Box2( zero2.clone(), one2.clone() );
        var c = new THREE.Box2( one2.clone().negate(), one2.clone() );

        ok( a.clone().intersect( a ).equals( a ), "Passed!" );
        ok( a.clone().intersect( b ).equals( a ), "Passed!" );
        ok( b.clone().intersect( b ).equals( b ), "Passed!" );
        ok( a.clone().intersect( c ).equals( a ), "Passed!" );
        ok( b.clone().intersect( c ).equals( b ), "Passed!" );
        ok( c.clone().intersect( c ).equals( c ), "Passed!" );
    });

    test( "union", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var b = new THREE.Box2( zero2.clone(), one2.clone() );
        var c = new THREE.Box2( one2.clone().negate(), one2.clone() );

        ok( a.clone().union( a ).equals( a ), "Passed!" );
        ok( a.clone().union( b ).equals( b ), "Passed!" );
        ok( a.clone().union( c ).equals( c ), "Passed!" );
        ok( b.clone().union( c ).equals( c ), "Passed!" );
    });

    test( "translate", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var b = new THREE.Box2( zero2.clone(), one2.clone() );
        var c = new THREE.Box2( one2.clone().negate(), one2.clone() );
        var d = new THREE.Box2( one2.clone().negate(), zero2.clone() );

        ok( a.clone().translate( one2 ).equals( new THREE.Box2( one2, one2 ) ), "Passed!" );
        ok( a.clone().translate( one2 ).translate( one2.clone().negate() ).equals( a ), "Passed!" );
        ok( d.clone().translate( one2 ).equals( b ), "Passed!" );
        ok( b.clone().translate( one2.clone().negate() ).equals( d ), "Passed!" );
    });

    test( "constructor", function() {
        var a = new THREE.Box3();
        ok( a.min.equals( posInf3 ), "Passed!" );
        ok( a.max.equals( negInf3 ), "Passed!" );

        a = new THREE.Box3( zero3.clone(), zero3.clone() );
        ok( a.min.equals( zero3 ), "Passed!" );
        ok( a.max.equals( zero3 ), "Passed!" );

        a = new THREE.Box3( zero3.clone(), one3.clone() );
        ok( a.min.equals( zero3 ), "Passed!" );
        ok( a.max.equals( one3 ), "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Box3( zero3.clone(), one3.clone() );
        var b = new THREE.Box3().copy( a );
        ok( b.min.equals( zero3 ), "Passed!" );
        ok( b.max.equals( one3 ), "Passed!" );

        // ensure that it is a true copy
        a.min = zero3;
        a.max = one3;
        ok( b.min.equals( zero3 ), "Passed!" );
        ok( b.max.equals( one3 ), "Passed!" );
    });

    test( "set", function() {
        var a = new THREE.Box3();

        a.set( zero3, one3 );
        ok( a.min.equals( zero3 ), "Passed!" );
        ok( a.max.equals( one3 ), "Passed!" );
    });

    test( "empty/makeEmpty", function() {
        var a = new THREE.Box3();

        ok( a.empty(), "Passed!" );

        var a = new THREE.Box3( zero3.clone(), one3.clone() );
        ok( ! a.empty(), "Passed!" );

        a.makeEmpty();
        ok( a.empty(), "Passed!" );
    });

    test( "center", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );

        ok( a.center().equals( zero3 ), "Passed!" );

        a = new THREE.Box3( zero3.clone(), one3.clone() );
        var midpoint = one3.clone().multiplyScalar( 0.5 );
        ok( a.center().equals( midpoint ), "Passed!" );
    });

    test( "size", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );

        ok( a.size().equals( zero3 ), "Passed!" );

        a = new THREE.Box3( zero3.clone(), one3.clone() );
        ok( a.size().equals( one3 ), "Passed!" );
    });

    test( "expandByPoint", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );

        a.expandByPoint( zero3 );
        ok( a.size().equals( zero3 ), "Passed!" );

        a.expandByPoint( one3 );
        ok( a.size().equals( one3 ), "Passed!" );

        a.expandByPoint( one3.clone().negate() );
        ok( a.size().equals( one3.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.center().equals( zero3 ), "Passed!" );
    });

    test( "expandByVector", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );

        a.expandByVector( zero3 );
        ok( a.size().equals( zero3 ), "Passed!" );

        a.expandByVector( one3 );
        ok( a.size().equals( one3.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.center().equals( zero3 ), "Passed!" );
    });

    test( "expandByScalar", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );

        a.expandByScalar( 0 );
        ok( a.size().equals( zero3 ), "Passed!" );

        a.expandByScalar( 1 );
        ok( a.size().equals( one3.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.center().equals( zero3 ), "Passed!" );
    });

    test( "containsPoint", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );

        ok( a.containsPoint( zero3 ), "Passed!" );
        ok( ! a.containsPoint( one3 ), "Passed!" );

        a.expandByScalar( 1 );
        ok( a.containsPoint( zero3 ), "Passed!" );
        ok( a.containsPoint( one3 ), "Passed!" );
        ok( a.containsPoint( one3.clone().negate() ), "Passed!" );
    });

    test( "containsBox", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( zero3.clone(), one3.clone() );
        var c = new THREE.Box3( one3.clone().negate(), one3.clone() );

        ok( a.containsBox( a ), "Passed!" );
        ok( ! a.containsBox( b ), "Passed!" );
        ok( ! a.containsBox( c ), "Passed!" );

        ok( b.containsBox( a ), "Passed!" );
        ok( c.containsBox( a ), "Passed!" );
        ok( ! b.containsBox( c ), "Passed!" );
    });

    test( "getParameter", function() {
        var a = new THREE.Box3( zero3.clone(), one3.clone() );
        var b = new THREE.Box3( one3.clone().negate(), one3.clone() );

        ok( a.getParameter( new THREE.Vector3( 0, 0, 0 ) ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );
        ok( a.getParameter( new THREE.Vector3( 1, 1, 1 ) ).equals( new THREE.Vector3( 1, 1, 1 ) ), "Passed!" );

        ok( b.getParameter( new THREE.Vector3( -1, -1, -1 ) ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );
        ok( b.getParameter( new THREE.Vector3( 0, 0, 0 ) ).equals( new THREE.Vector3( 0.5, 0.5, 0.5 ) ), "Passed!" );
        ok( b.getParameter( new THREE.Vector3( 1, 1, 1 ) ).equals( new THREE.Vector3( 1, 1, 1 ) ), "Passed!" );
    });

    test( "clampPoint", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( one3.clone().negate(), one3.clone() );

        ok( a.clampPoint( new THREE.Vector3( 0, 0, 0 ) ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );
        ok( a.clampPoint( new THREE.Vector3( 1, 1, 1 ) ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );
        ok( a.clampPoint( new THREE.Vector3( -1, -1, -1 ) ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        ok( b.clampPoint( new THREE.Vector3( 2, 2, 2 ) ).equals( new THREE.Vector3( 1, 1, 1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector3( 1, 1, 1 ) ).equals( new THREE.Vector3( 1, 1, 1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector3( 0, 0, 0 ) ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector3( -1, -1, -1 ) ).equals( new THREE.Vector3( -1, -1, -1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector3( -2, -2, -2 ) ).equals( new THREE.Vector3( -1, -1, -1 ) ), "Passed!" );
    });

    test( "distanceToPoint", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( one3.clone().negate(), one3.clone() );

        ok( a.distanceToPoint( new THREE.Vector3( 0, 0, 0 ) ) == 0, "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector3( 1, 1, 1 ) ) == Math.sqrt( 3 ), "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector3( -1, -1, -1 ) ) == Math.sqrt( 3 ), "Passed!" );

        ok( b.distanceToPoint( new THREE.Vector3( 2, 2, 2 ) ) == Math.sqrt( 3 ), "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector3( 1, 1, 1 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector3( 0, 0, 0 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector3( -1, -1, -1 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector3( -2, -2, -2 ) ) == Math.sqrt( 3 ), "Passed!" );
    });

    test( "distanceToPoint", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( one3.clone().negate(), one3.clone() );

        ok( a.distanceToPoint( new THREE.Vector3( 0, 0, 0 ) ) == 0, "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector3( 1, 1, 1 ) ) == Math.sqrt( 3 ), "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector3( -1, -1, -1 ) ) == Math.sqrt( 3 ), "Passed!" );

        ok( b.distanceToPoint( new THREE.Vector3( 2, 2, 2 ) ) == Math.sqrt( 3 ), "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector3( 1, 1, 1 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector3( 0, 0, 0 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector3( -1, -1, -1 ) ) == 0, "Passed!" );
        ok( b.distanceToPoint( new THREE.Vector3( -2, -2, -2 ) ) == Math.sqrt( 3 ), "Passed!" );
    });

    test( "isIntersectionBox", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( zero3.clone(), one3.clone() );
        var c = new THREE.Box3( one3.clone().negate(), one3.clone() );

        ok( a.isIntersectionBox( a ), "Passed!" );
        ok( a.isIntersectionBox( b ), "Passed!" );
        ok( a.isIntersectionBox( c ), "Passed!" );

        ok( b.isIntersectionBox( a ), "Passed!" );
        ok( c.isIntersectionBox( a ), "Passed!" );
        ok( b.isIntersectionBox( c ), "Passed!" );

        b.translate( new THREE.Vector3( 2, 2, 2 ) );
        ok( ! a.isIntersectionBox( b ), "Passed!" );
        ok( ! b.isIntersectionBox( a ), "Passed!" );
        ok( ! b.isIntersectionBox( c ), "Passed!" );
    });

    test( "getBoundingSphere", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( zero3.clone(), one3.clone() );
        var c = new THREE.Box3( one3.clone().negate(), one3.clone() );

        ok( a.getBoundingSphere().equals( new THREE.Sphere( zero3, 0 ) ), "Passed!" );
        ok( b.getBoundingSphere().equals( new THREE.Sphere( one3.clone().multiplyScalar( 0.5 ), Math.sqrt( 3 ) * 0.5 ) ), "Passed!" );
        ok( c.getBoundingSphere().equals( new THREE.Sphere( zero3, Math.sqrt( 12 ) * 0.5 ) ), "Passed!" );
    });

    test( "intersect", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( zero3.clone(), one3.clone() );
        var c = new THREE.Box3( one3.clone().negate(), one3.clone() );

        ok( a.clone().intersect( a ).equals( a ), "Passed!" );
        ok( a.clone().intersect( b ).equals( a ), "Passed!" );
        ok( b.clone().intersect( b ).equals( b ), "Passed!" );
        ok( a.clone().intersect( c ).equals( a ), "Passed!" );
        ok( b.clone().intersect( c ).equals( b ), "Passed!" );
        ok( c.clone().intersect( c ).equals( c ), "Passed!" );
    });

    test( "union", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( zero3.clone(), one3.clone() );
        var c = new THREE.Box3( one3.clone().negate(), one3.clone() );

        ok( a.clone().union( a ).equals( a ), "Passed!" );
        ok( a.clone().union( b ).equals( b ), "Passed!" );
        ok( a.clone().union( c ).equals( c ), "Passed!" );
        ok( b.clone().union( c ).equals( c ), "Passed!" );
    });

    var compareBox = function ( a, b, threshold? ) {
        threshold = threshold || 0.0001;
        return ( a.min.distanceTo( b.min ) < threshold &&
        a.max.distanceTo( b.max ) < threshold );
    };

    test( "applyMatrix4", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( zero3.clone(), one3.clone() );
        var c = new THREE.Box3( one3.clone().negate(), one3.clone() );
        var d = new THREE.Box3( one3.clone().negate(), zero3.clone() );

        var m = new THREE.Matrix4().makeTranslation( 1, -2, 1 );
        var t1 = new THREE.Vector3( 1, -2, 1 );

        ok( compareBox( a.clone().applyMatrix4( m ), a.clone().translate( t1 ) ), "Passed!" );
        ok( compareBox( b.clone().applyMatrix4( m ), b.clone().translate( t1 ) ), "Passed!" );
        ok( compareBox( c.clone().applyMatrix4( m ), c.clone().translate( t1 ) ), "Passed!" );
        ok( compareBox( d.clone().applyMatrix4( m ), d.clone().translate( t1 ) ), "Passed!" );
    });

    test( "translate", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( zero3.clone(), one3.clone() );
        var c = new THREE.Box3( one3.clone().negate(), one3.clone() );
        var d = new THREE.Box3( one3.clone().negate(), zero3.clone() );

        ok( a.clone().translate( one3 ).equals( new THREE.Box3( one3, one3 ) ), "Passed!" );
        ok( a.clone().translate( one3 ).translate( one3.clone().negate() ).equals( a ), "Passed!" );
        ok( d.clone().translate( one3 ).equals( b ), "Passed!" );
        ok( b.clone().translate( one3.clone().negate() ).equals( d ), "Passed!" );
    });

    test( "constructor", function(){
        var c = new THREE.Color();
        ok( c.r, "Red: " + c.r );
        ok( c.g, "Green: " + c.g );
        ok( c.b, "Blue: " + c.g );
    });

    test( "copyHex", function(){
        var c = new THREE.Color();
        var c2 = new THREE.Color(0xF5FFFA);
        c.copy(c2);
        ok(c.getHex() == c2.getHex(), "Hex c: " + c.getHex() + " Hex c2: " + c2.getHex());
    });

    test( "copyColorString", function(){
        var c = new THREE.Color();
        var c2 = new THREE.Color('ivory');
        c.copy(c2);
        ok(c.getHex() == c2.getHex(), "Hex c: " + c.getHex() + " Hex c2: " + c2.getHex());
    });

    test( "setRGB", function(){
        var c = new THREE.Color()
        c.setRGB(255, 2, 1);
        ok( c.r == 255, "Red: " + c.r );
        ok( c.g == 2, "Green: " + c.g );
        ok( c.b == 1, "Blue: " + c.b );
    });

    test( "copyGammaToLinear", function(){
        var c = new THREE.Color();
        var c2 = new THREE.Color();
        c2.setRGB(2, 4, 8)
        c.copyGammaToLinear(c2)
        ok( c.r == 4, "Red c: " + c.r + " Red c2: " + c2.r);
        ok( c.g == 16, "Green c: " + c.g + " Green c2: " + c2.g);
        ok( c.b == 64, "Blue c: " + c.b + " Blue c2: " + c2.b);
    });

    test( "copyLinearToGamma", function(){
        var c = new THREE.Color();
        var c2 = new THREE.Color();
        c2.setRGB(4, 9, 16)
        c.copyLinearToGamma(c2)
        ok( c.r == 2, "Red c: " + c.r + " Red c2: " + c2.r);
        ok( c.g == 3, "Green c: " + c.g + " Green c2: " + c2.g);
        ok( c.b == 4, "Blue c: " + c.b + " Blue c2: " + c2.b);
    });


    test( "convertGammaToLinear", function(){
        var c = new THREE.Color();
        c.setRGB(2, 4, 8)
        c.convertGammaToLinear()
        ok( c.r == 4, "Red: " + c.r );
        ok( c.g == 16, "Green: " + c.g );
        ok( c.b == 64, "Blue: " + c.b );
    });


    test( "convertLinearToGamma", function(){
        var c = new THREE.Color();
        c.setRGB(4, 9, 16)
        c.convertLinearToGamma()
        ok( c.r == 2, "Red: " + c.r );
        ok( c.g == 3, "Green: " + c.g );
        ok( c.b == 4, "Blue: " + c.b );
    });

    test("setWithNum", function(){
        var c = new THREE.Color();
        c.set(0xFF0000);
        ok( c.r == 1, "Red: " + c.r );
        ok( c.g == 0, "Green: " + c.g );
        ok( c.b == 0, "Blue: " + c.b );
    });


    test( "setWithString", function(){
        var c = new THREE.Color();
        c.set('silver');
        ok(c.getHex() == 0xC0C0C0, "Hex c: " + c.getHex());
    });


    test( "clone", function(){
        var c = new THREE.Color('teal');
        var c2 = c.clone();
        ok(c2.getHex() == 0x008080, "Hex c2: " + c2.getHex());
    });

    test( "lerp", function(){
        var c = new THREE.Color();
        var c2 = new THREE.Color();
        c.setRGB(0, 0, 0);
        c.lerp(c2, 2);
        ok( c.r == 2, "Red: " + c.r );
        ok( c.g == 2, "Green: " + c.g );
        ok( c.b == 2, "Blue: " + c.b );
        
    });


    test( "setStyleRGBRed", function(){
        var c = new THREE.Color();
        c.setStyle('rgb(255,0,0)');
        ok( c.r == 1, "Red: " + c.r );
        ok( c.g == 0, "Green: " + c.g );
        ok( c.b == 0, "Blue: " + c.b );
    });

    test( "setStyleRGBPercent", function(){
        var c = new THREE.Color();
        c.setStyle('rgb(100%,50%,10%)');
        ok( c.r == 1, "Red: " + c.r );
        ok( c.g == 0.5, "Green: " + c.g );
        ok( c.b == 0.1, "Blue: " + c.b );
    });

    test( "setStyleHexSkyBlue", function(){
        var c = new THREE.Color();
        c.setStyle('#87CEEB');
        ok(c.getHex() == 0x87CEEB, "Hex c: " + c.getHex());
    });

    test( "setStyleHex2Olive", function(){
        var c = new THREE.Color();
        c.setStyle('#F00');
        ok(c.getHex() == 0xFF0000, "Hex c: " + c.getHex());
    });

    test( "setStyleColorName", function(){
        var c = new THREE.Color();
        c.setStyle('powderblue');
        ok(c.getHex() == 0xB0E0E6, "Hex c: " + c.getHex());
    });


    test( "getHex", function(){
        var c = new THREE.Color('red');
        var res = c.getHex();
        ok( res == 0xFF0000, "Hex: " + res );
    });

    test( "setHex", function(){
        var c = new THREE.Color();
        c.setHex(0xFA8072);
        ok( c.getHex() == 0xFA8072, "Hex: " + c.getHex());
    });

    test( "getHexString", function(){
        var c = new THREE.Color('tomato');
        var res = c.getHexString();
        ok( res == 'ff6347', "Hex: " + res );
    });

    test( "getStyle", function(){
        var c = new THREE.Color('plum');
        var res = c.getStyle();
        ok( res == 'rgb(221,160,221)', "style: " + res );
    });

    test( "getHSL", function () {
        var c = new THREE.Color( 0x80ffff );
        var hsl = c.getHSL();

        ok( hsl.h == 0.5, "hue: " + hsl.h );
        ok( hsl.s == 1.0, "saturation: " + hsl.s );


        //ok( (Math.round(parseFloat(hsl.l)*100)/100) == 0.75, "lightness: " + hsl.l );
        ok( (Math.round(hsl.l*100)/100) == 0.75, "lightness: " + hsl.l );
    });

    test( "setHSL", function () {
        var c = new THREE.Color();
        c.setHSL(0.75, 1.0, 0.25);
        var hsl = c.getHSL();

        ok( hsl.h == 0.75, "hue: " + hsl.h );
        ok( hsl.s == 1.00, "saturation: " + hsl.s );
        ok( hsl.l == 0.25, "lightness: " + hsl.l );
    });

    var unit3 = new THREE.Vector3( 1, 0, 0 );

    var planeEquals = function ( a, b, tolerance ) {
        tolerance = tolerance || 0.0001;
        if( a.normal.distanceTo( b.normal ) > tolerance ) {
            return false;
        }
        if( Math.abs( a.constant - b.constant ) > tolerance ) {
            return false;
        }
        return true;
    };

    test( "constructor", function() {
        var a = new THREE.Frustum();

        ok( a.planes !== undefined, "Passed!" );
        ok( a.planes.length === 6, "Passed!" );

        var pDefault = new THREE.Plane();
        for( var i = 0; i < 6; i ++ ) {
            ok( a.planes[i].equals( pDefault ), "Passed!" );
        }

        var p0 = new THREE.Plane( unit3, -1 );
        var p1 = new THREE.Plane( unit3, 1 );
        var p2 = new THREE.Plane( unit3, 2 );
        var p3 = new THREE.Plane( unit3, 3 );
        var p4 = new THREE.Plane( unit3, 4 );
        var p5 = new THREE.Plane( unit3, 5 );

        a = new THREE.Frustum( p0, p1, p2, p3, p4, p5 );
        ok( a.planes[0].equals( p0 ), "Passed!" );
        ok( a.planes[1].equals( p1 ), "Passed!" );
        ok( a.planes[2].equals( p2 ), "Passed!" );
        ok( a.planes[3].equals( p3 ), "Passed!" );
        ok( a.planes[4].equals( p4 ), "Passed!" );
        ok( a.planes[5].equals( p5 ), "Passed!" );
    });

    test( "copy", function() {

        var p0 = new THREE.Plane( unit3, -1 );
        var p1 = new THREE.Plane( unit3, 1 );
        var p2 = new THREE.Plane( unit3, 2 );
        var p3 = new THREE.Plane( unit3, 3 );
        var p4 = new THREE.Plane( unit3, 4 );
        var p5 = new THREE.Plane( unit3, 5 );

        var b = new THREE.Frustum( p0, p1, p2, p3, p4, p5 );
        var a = new THREE.Frustum().copy( b );
        ok( a.planes[0].equals( p0 ), "Passed!" );
        ok( a.planes[1].equals( p1 ), "Passed!" );
        ok( a.planes[2].equals( p2 ), "Passed!" );
        ok( a.planes[3].equals( p3 ), "Passed!" );
        ok( a.planes[4].equals( p4 ), "Passed!" );
        ok( a.planes[5].equals( p5 ), "Passed!" );

        // ensure it is a true copy by modifying source
        b.planes[0] = p1;
        ok( a.planes[0].equals( p0 ), "Passed!" );
    });

    test( "setFromMatrix/makeOrthographic/containsPoint", function() {
        var m = new THREE.Matrix4().makeOrthographic( -1, 1, -1, 1, 1, 100 )
        var a = new THREE.Frustum().setFromMatrix( m );

        ok( ! a.containsPoint( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( 0, 0, -50 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( 0, 0, -1.001 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( -1, -1, -1.001 ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( -1.1, -1.1, -1.001 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( 1, 1, -1.001 ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( 1.1, 1.1, -1.001 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( 0, 0, -100 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( -1, -1, -100 ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( -1.1, -1.1, -100.1 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( 1, 1, -100 ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( 1.1, 1.1, -100.1 ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( 0, 0, -101 ) ), "Passed!" );

    });

    test( "setFromMatrix/makeFrustum/containsPoint", function() {
        var m = new THREE.Matrix4().makeFrustum( -1, 1, -1, 1, 1, 100 )
        var a = new THREE.Frustum().setFromMatrix( m );

        ok( ! a.containsPoint( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( 0, 0, -50 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( 0, 0, -1.001 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( -1, -1, -1.001 ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( -1.1, -1.1, -1.001 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( 1, 1, -1.001 ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( 1.1, 1.1, -1.001 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( 0, 0, -99.999 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( -99.999, -99.999, -99.999 ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( -100.1, -100.1, -100.1 ) ), "Passed!" );
        ok( a.containsPoint( new THREE.Vector3( 99.999, 99.999, -99.999 ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( 100.1, 100.1, -100.1 ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( 0, 0, -101 ) ), "Passed!" );
    });

    test( "setFromMatrix/makeFrustum/intersectsSphere", function() {
        var m = new THREE.Matrix4().makeFrustum( -1, 1, -1, 1, 1, 100 )
        var a = new THREE.Frustum().setFromMatrix( m );

        ok( ! a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 0, 0, 0 ), 0 ) ), "Passed!" );
        ok( ! a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 0, 0, 0 ), 0.9 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 0, 0, 0 ), 1.1 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 0, 0, -50 ), 0 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 0, 0, -1.001 ), 0 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( -1, -1, -1.001 ), 0 ) ), "Passed!" );
        ok( ! a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( -1.1, -1.1, -1.001 ), 0 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( -1.1, -1.1, -1.001 ), 0.5 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 1, 1, -1.001 ), 0 ) ), "Passed!" );
        ok( ! a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 1.1, 1.1, -1.001 ), 0 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 1.1, 1.1, -1.001 ), 0.5 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 0, 0, -99.999 ), 0 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( -99.999, -99.999, -99.999 ), 0 ) ), "Passed!" );
        ok( ! a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( -100.1, -100.1, -100.1 ), 0 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( -100.1, -100.1, -100.1 ), 0.5 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 99.999, 99.999, -99.999 ), 0 ) ), "Passed!" );
        ok( ! a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 100.1, 100.1, -100.1 ), 0 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 100.1, 100.1, -100.1 ), 0.2 ) ), "Passed!" );
        ok( ! a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 0, 0, -101 ), 0 ) ), "Passed!" );
        ok( a.intersectsSphere( new THREE.Sphere( new THREE.Vector3( 0, 0, -101 ), 1.1 ) ), "Passed!" );
    });

    test( "clone", function() {

        var p0 = new THREE.Plane( unit3, -1 );
        var p1 = new THREE.Plane( unit3, 1 );
        var p2 = new THREE.Plane( unit3, 2 );
        var p3 = new THREE.Plane( unit3, 3 );
        var p4 = new THREE.Plane( unit3, 4 );
        var p5 = new THREE.Plane( unit3, 5 );

        var b = new THREE.Frustum( p0, p1, p2, p3, p4, p5 );
        var a = b.clone();
        ok( a.planes[0].equals( p0 ), "Passed!" );
        ok( a.planes[1].equals( p1 ), "Passed!" );
        ok( a.planes[2].equals( p2 ), "Passed!" );
        ok( a.planes[3].equals( p3 ), "Passed!" );
        ok( a.planes[4].equals( p4 ), "Passed!" );
        ok( a.planes[5].equals( p5 ), "Passed!" );

        // ensure it is a true copy by modifying source
        a.planes[0].copy( p1 );
        ok( b.planes[0].equals( p0 ), "Passed!" );
    });


    test( "constructor/equals", function() {
        var a = new THREE.Line3();
        ok( a.start.equals( zero3 ), "Passed!" );
        ok( a.end.equals( zero3 ), "Passed!" );

        a = new THREE.Line3( two3.clone(), one3.clone() );
        ok( a.start.equals( two3 ), "Passed!" );
        ok( a.end.equals( one3 ), "Passed!" );
    });

    test( "copy/equals", function() {
        var a = new THREE.Line3( zero3.clone(), one3.clone() );
        var b = new THREE.Line3().copy( a );
        ok( b.start.equals( zero3 ), "Passed!" );
        ok( b.end.equals( one3 ), "Passed!" );

        // ensure that it is a true copy
        a.start = zero3;
        a.end = one3;
        ok( b.start.equals( zero3 ), "Passed!" );
        ok( b.end.equals( one3 ), "Passed!" );
    });

    test( "set", function() {
        var a = new THREE.Line3();

        a.set( one3, one3 );
        ok( a.start.equals( one3 ), "Passed!" );
        ok( a.end.equals( one3 ), "Passed!" );
    });

    test( "at", function() {
        var a = new THREE.Line3( one3.clone(), new THREE.Vector3( 1, 1, 2 ) );

        ok( a.at( -1 ).distanceTo( new THREE.Vector3( 1, 1, 0 ) ) < 0.0001, "Passed!" );
        ok( a.at( 0 ).distanceTo( one3.clone() ) < 0.0001, "Passed!" );
        ok( a.at( 1 ).distanceTo( new THREE.Vector3( 1, 1, 2 ) ) < 0.0001, "Passed!" );
        ok( a.at( 2 ).distanceTo( new THREE.Vector3( 1, 1, 3 ) ) < 0.0001, "Passed!" );
    });

    test( "closestPointToPoint/closestPointToPointParameter", function() {
        var a = new THREE.Line3( one3.clone(), new THREE.Vector3( 1, 1, 2 ) );

        // nearby the ray
        ok( a.closestPointToPointParameter( zero3.clone(), true ) == 0, "Passed!" );
        var b1 = a.closestPointToPoint( zero3.clone(), true );
        ok( b1.distanceTo( new THREE.Vector3( 1, 1, 1 ) ) < 0.0001, "Passed!" );

        // nearby the ray
        ok( a.closestPointToPointParameter( zero3.clone(), false ) == -1, "Passed!" );
        var b2 = a.closestPointToPoint( zero3.clone(), false );
        console.log( b2 );
        ok( b2.distanceTo( new THREE.Vector3( 1, 1, 0 ) ) < 0.0001, "Passed!" );

        // nearby the ray
        ok( a.closestPointToPointParameter( new THREE.Vector3( 1, 1, 5 ), true ) == 1, "Passed!" );
        var b = a.closestPointToPoint( new THREE.Vector3( 1, 1, 5 ), true );
        ok( b.distanceTo( new THREE.Vector3( 1, 1, 2 ) ) < 0.0001, "Passed!" );

        // exactly on the ray
        ok( a.closestPointToPointParameter( one3.clone(), true ) == 0, "Passed!" );
        var c = a.closestPointToPoint( one3.clone(), true );
        ok( c.distanceTo( one3.clone() ) < 0.0001, "Passed!" );
    });



    var matrixEquals3 = function( a, b, tolerance? ) {
        tolerance = tolerance || 0.0001;
        if( a.elements.length != b.elements.length ) {
            return false;
        }
        for( var i = 0, il = a.elements.length; i < il; i ++ ) {
            var delta = a.elements[i] - b.elements[i];
            if( delta > tolerance ) {
                return false;
            }
        }
        return true;
    };


    var toMatrix4 = function( m3 ) {
        var result = new THREE.Matrix4();
        var re = result.elements;
        var me = m3.elements;
        re[0] = me[0];
        re[1] = me[1];
        re[2] = me[2];
        re[4] = me[3];
        re[5] = me[4];
        re[6] = me[5];
        re[8] = me[6];
        re[9] = me[7];
        re[10] = me[8];

        return result;
    };

    test( "constructor", function() {
        var a = new THREE.Matrix3();
        ok( a.determinant() == 1, "Passed!" );

        var b = new THREE.Matrix3( 0, 1, 2, 3, 4, 5, 6, 7, 8 );
        ok( b.elements[0] == 0 );
        ok( b.elements[1] == 3 );
        ok( b.elements[2] == 6 );
        ok( b.elements[3] == 1 );
        ok( b.elements[4] == 4 );
        ok( b.elements[5] == 7 );
        ok( b.elements[6] == 2 );
        ok( b.elements[7] == 5 );
        ok( b.elements[8] == 8 );

        ok( ! matrixEquals3( a, b ), "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Matrix3( 0, 1, 2, 3, 4, 5, 6, 7, 8 );
        var b = new THREE.Matrix3().copy( a );

        ok( matrixEquals3( a, b ), "Passed!" );

        // ensure that it is a true copy
        a.elements[0] = 2;
        ok( ! matrixEquals3( a, b ), "Passed!" );
    });

    test( "set", function() {
        var b = new THREE.Matrix3();
        ok( b.determinant() == 1, "Passed!" );

        b.set( 0, 1, 2, 3, 4, 5, 6, 7, 8 );
        ok( b.elements[0] == 0 );
        ok( b.elements[1] == 3 );
        ok( b.elements[2] == 6 );
        ok( b.elements[3] == 1 );
        ok( b.elements[4] == 4 );
        ok( b.elements[5] == 7 );
        ok( b.elements[6] == 2 );
        ok( b.elements[7] == 5 );
        ok( b.elements[8] == 8 );
    });

    test( "identity", function() {
        var b = new THREE.Matrix3( 0, 1, 2, 3, 4, 5, 6, 7, 8 );
        ok( b.elements[0] == 0 );
        ok( b.elements[1] == 3 );
        ok( b.elements[2] == 6 );
        ok( b.elements[3] == 1 );
        ok( b.elements[4] == 4 );
        ok( b.elements[5] == 7 );
        ok( b.elements[6] == 2 );
        ok( b.elements[7] == 5 );
        ok( b.elements[8] == 8 );

        var a = new THREE.Matrix3();
        ok( ! matrixEquals3( a, b ), "Passed!" );

        b.identity();
        ok( matrixEquals3( a, b ), "Passed!" );
    });

    test( "multiplyScalar", function() {
        var b = new THREE.Matrix3( 0, 1, 2, 3, 4, 5, 6, 7, 8 );
        ok( b.elements[0] == 0 );
        ok( b.elements[1] == 3 );
        ok( b.elements[2] == 6 );
        ok( b.elements[3] == 1 );
        ok( b.elements[4] == 4 );
        ok( b.elements[5] == 7 );
        ok( b.elements[6] == 2 );
        ok( b.elements[7] == 5 );
        ok( b.elements[8] == 8 );

        b.multiplyScalar( 2 );
        ok( b.elements[0] == 0*2 );
        ok( b.elements[1] == 3*2 );
        ok( b.elements[2] == 6*2 );
        ok( b.elements[3] == 1*2 );
        ok( b.elements[4] == 4*2 );
        ok( b.elements[5] == 7*2 );
        ok( b.elements[6] == 2*2 );
        ok( b.elements[7] == 5*2 );
        ok( b.elements[8] == 8*2 );
    });

    test( "determinant", function() {
        var a = new THREE.Matrix3();
        ok( a.determinant() == 1, "Passed!" );

        a.elements[0] = 2;
        ok( a.determinant() == 2, "Passed!" );

        a.elements[0] = 0;
        ok( a.determinant() == 0, "Passed!" );

        // calculated via http://www.euclideanspace.com/maths/algebra/matrix/functions/determinant/threeD/index.htm
        a.set( 2, 3, 4, 5, 13, 7, 8, 9, 11 );
        ok( a.determinant() == -73, "Passed!" );
    });


    test( "getInverse", function() {
        var identity = new THREE.Matrix4();
        var a = new THREE.Matrix4();
        var b = new THREE.Matrix3( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

        //var c = new THREE.Matrix4( 0, 0, 0, 0, 0, 0, 0, 0, 0 );
        var c = new THREE.Matrix4( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

        ok( ! matrixEquals3( a, b ), "Passed!" );
        b.getInverse( a, false );
        ok( matrixEquals3( b, new THREE.Matrix3() ), "Passed!" );

        try { 
            b.getInverse( c, true );
            ok( false, "Passed!" ); // should never get here.
        }
        catch( err ) {
            ok( true, "Passed!" );
        }

        var testMatrices = [
            new THREE.Matrix4().makeRotationX( 0.3 ),
            new THREE.Matrix4().makeRotationX( -0.3 ),
            new THREE.Matrix4().makeRotationY( 0.3 ),
            new THREE.Matrix4().makeRotationY( -0.3 ),
            new THREE.Matrix4().makeRotationZ( 0.3 ),
            new THREE.Matrix4().makeRotationZ( -0.3 ),
            new THREE.Matrix4().makeScale( 1, 2, 3 ),
            new THREE.Matrix4().makeScale( 1/8, 1/2, 1/3 )
            ];

        for( var i = 0, il = testMatrices.length; i < il; i ++ ) {
            var m = testMatrices[i];
            var mInverse3 = new THREE.Matrix3().getInverse( m );

            var mInverse = toMatrix4( mInverse3 );

            // the determinant of the inverse should be the reciprocal
            ok( Math.abs( m.determinant() * mInverse3.determinant() - 1 ) < 0.0001, "Passed!" );
            ok( Math.abs( m.determinant() * mInverse.determinant() - 1 ) < 0.0001, "Passed!" );

            var mProduct = new THREE.Matrix4().multiplyMatrices( m, mInverse );
            ok( Math.abs( mProduct.determinant() - 1 ) < 0.0001, "Passed!" );
            ok( matrixEquals3( mProduct, identity ), "Passed!" );
        }
    });

    test( "transpose", function() {
        var a = new THREE.Matrix3();
        var b = a.clone().transpose();
        ok( matrixEquals3( a, b ), "Passed!" );

        b = new THREE.Matrix3( 0, 1, 2, 3, 4, 5, 6, 7, 8 );
        var c = b.clone().transpose();
        ok( ! matrixEquals3( b, c ), "Passed!" ); 
        c.transpose();
        ok( matrixEquals3( b, c ), "Passed!" ); 
    });

    test( "clone", function() {
        var a = new THREE.Matrix3( 0, 1, 2, 3, 4, 5, 6, 7, 8 );
        var b = a.clone();

        ok( matrixEquals3( a, b ), "Passed!" );

        // ensure that it is a true copy
        a.elements[0] = 2;
        ok( ! matrixEquals3( a, b ), "Passed!" );
    });

    var matrixEquals4 = function( a, b, tolerance? ) {
        tolerance = tolerance || 0.0001;
        if( a.elements.length != b.elements.length ) {
            return false;
        }
        for( var i = 0, il = a.elements.length; i < il; i ++ ) {
            var delta = a.elements[i] - b.elements[i];
            if( delta > tolerance ) {
                return false;
            }
        }
        return true;
    };

    test( "constructor", function() {
        var a = new THREE.Matrix4();
        ok( a.determinant() == 1, "Passed!" );

        var b = new THREE.Matrix4( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 );
        ok( b.elements[0] == 0 );
        ok( b.elements[1] == 4 );
        ok( b.elements[2] == 8 );
        ok( b.elements[3] == 12 );
        ok( b.elements[4] == 1 );
        ok( b.elements[5] == 5 );
        ok( b.elements[6] == 9 );
        ok( b.elements[7] == 13 );
        ok( b.elements[8] == 2 );
        ok( b.elements[9] == 6 );
        ok( b.elements[10] == 10 );
        ok( b.elements[11] == 14 );
        ok( b.elements[12] == 3 );
        ok( b.elements[13] == 7 );
        ok( b.elements[14] == 11 );
        ok( b.elements[15] == 15 );

        ok( ! matrixEquals4( a, b ), "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Matrix4( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 );
        var b = new THREE.Matrix4().copy( a );

        ok( matrixEquals4( a, b ), "Passed!" );

        // ensure that it is a true copy
        a.elements[0] = 2;
        ok( ! matrixEquals4( a, b ), "Passed!" );
    });

    test( "set", function() {
        var b = new THREE.Matrix4();
        ok( b.determinant() == 1, "Passed!" );

        b.set( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 );
        ok( b.elements[0] == 0 );
        ok( b.elements[1] == 4 );
        ok( b.elements[2] == 8 );
        ok( b.elements[3] == 12 );
        ok( b.elements[4] == 1 );
        ok( b.elements[5] == 5 );
        ok( b.elements[6] == 9 );
        ok( b.elements[7] == 13 );
        ok( b.elements[8] == 2 );
        ok( b.elements[9] == 6 );
        ok( b.elements[10] == 10 );
        ok( b.elements[11] == 14 );
        ok( b.elements[12] == 3 );
        ok( b.elements[13] == 7 );
        ok( b.elements[14] == 11 );
        ok( b.elements[15] == 15 );
    });

    test( "identity", function() {
        var b = new THREE.Matrix4( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 );
        ok( b.elements[0] == 0 );
        ok( b.elements[1] == 4 );
        ok( b.elements[2] == 8 );
        ok( b.elements[3] == 12 );
        ok( b.elements[4] == 1 );
        ok( b.elements[5] == 5 );
        ok( b.elements[6] == 9 );
        ok( b.elements[7] == 13 );
        ok( b.elements[8] == 2 );
        ok( b.elements[9] == 6 );
        ok( b.elements[10] == 10 );
        ok( b.elements[11] == 14 );
        ok( b.elements[12] == 3 );
        ok( b.elements[13] == 7 );
        ok( b.elements[14] == 11 );
        ok( b.elements[15] == 15 );

        var a = new THREE.Matrix4();
        ok( ! matrixEquals4( a, b ), "Passed!" );

        b.identity();
        ok( matrixEquals4( a, b ), "Passed!" );
    });

    test( "multiplyScalar", function() {
        var b = new THREE.Matrix4( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 );
        ok( b.elements[0] == 0 );
        ok( b.elements[1] == 4 );
        ok( b.elements[2] == 8 );
        ok( b.elements[3] == 12 );
        ok( b.elements[4] == 1 );
        ok( b.elements[5] == 5 );
        ok( b.elements[6] == 9 );
        ok( b.elements[7] == 13 );
        ok( b.elements[8] == 2 );
        ok( b.elements[9] == 6 );
        ok( b.elements[10] == 10 );
        ok( b.elements[11] == 14 );
        ok( b.elements[12] == 3 );
        ok( b.elements[13] == 7 );
        ok( b.elements[14] == 11 );
        ok( b.elements[15] == 15 );

        b.multiplyScalar( 2 );
        ok( b.elements[0] == 0*2 );
        ok( b.elements[1] == 4*2 );
        ok( b.elements[2] == 8*2 );
        ok( b.elements[3] == 12*2 );
        ok( b.elements[4] == 1*2 );
        ok( b.elements[5] == 5*2 );
        ok( b.elements[6] == 9*2 );
        ok( b.elements[7] == 13*2 );
        ok( b.elements[8] == 2*2 );
        ok( b.elements[9] == 6*2 );
        ok( b.elements[10] == 10*2 );
        ok( b.elements[11] == 14*2 );
        ok( b.elements[12] == 3*2 );
        ok( b.elements[13] == 7*2 );
        ok( b.elements[14] == 11*2 );
        ok( b.elements[15] == 15*2 );
    });

    test( "determinant", function() {
        var a = new THREE.Matrix4();
        ok( a.determinant() == 1, "Passed!" );

        a.elements[0] = 2;
        ok( a.determinant() == 2, "Passed!" );

        a.elements[0] = 0;
        ok( a.determinant() == 0, "Passed!" );

        // calculated via http://www.euclideanspace.com/maths/algebra/matrix/functions/determinant/fourD/index.htm
        a.set( 2, 3, 4, 5, -1, -21, -3, -4, 6, 7, 8, 10, -8, -9, -10, -12 );
        ok( a.determinant() == 76, "Passed!" );
    });

    test( "getInverse", function() {
        var identity = new THREE.Matrix4();

        var a = new THREE.Matrix4();
        var b = new THREE.Matrix4( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );
        var c = new THREE.Matrix4( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

        ok( ! matrixEquals4( a, b ), "Passed!" );
        b.getInverse( a, false );
        ok( matrixEquals4( b, new THREE.Matrix4() ), "Passed!" );

        try { 
            b.getInverse( c, true );
            ok( false, "Passed!" ); // should never get here.
        }
        catch( err ) {
            ok( true, "Passed!" );
        }

        var testMatrices = [
            new THREE.Matrix4().makeRotationX( 0.3 ),
            new THREE.Matrix4().makeRotationX( -0.3 ),
            new THREE.Matrix4().makeRotationY( 0.3 ),
            new THREE.Matrix4().makeRotationY( -0.3 ),
            new THREE.Matrix4().makeRotationZ( 0.3 ),
            new THREE.Matrix4().makeRotationZ( -0.3 ),
            new THREE.Matrix4().makeScale( 1, 2, 3 ),
            new THREE.Matrix4().makeScale( 1/8, 1/2, 1/3 ),
            new THREE.Matrix4().makeFrustum( -1, 1, -1, 1, 1, 1000 ),
            new THREE.Matrix4().makeFrustum( -16, 16, -9, 9, 0.1, 10000 ),
            new THREE.Matrix4().makeTranslation( 1, 2, 3 )
            ];

        for( var i = 0, il = testMatrices.length; i < il; i ++ ) {
            var m = testMatrices[i];

            var mInverse = new THREE.Matrix4().getInverse( m );

            // the determinant of the inverse should be the reciprocal
            ok( Math.abs( m.determinant() * mInverse.determinant() - 1  ) < 0.0001, "Passed!" );

            var mProduct = new THREE.Matrix4().multiplyMatrices( m, mInverse );

            // the determinant of the identity matrix is 1
            ok( Math.abs( mProduct.determinant() - 1 ) < 0.0001, "Passed!" );
            ok( matrixEquals4( mProduct, identity ), "Passed!" );
        }
    });

    test( "transpose", function() {
        var a = new THREE.Matrix4();
        var b = a.clone().transpose();
        ok( matrixEquals4( a, b ), "Passed!" );

        b = new THREE.Matrix4( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 );
        var c = b.clone().transpose();
        ok( ! matrixEquals4( b, c ), "Passed!" ); 
        c.transpose();
        ok( matrixEquals4( b, c ), "Passed!" ); 
    });

    test( "clone", function() {
        var a = new THREE.Matrix4( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 );
        var b = a.clone();

        ok( matrixEquals4( a, b ), "Passed!" );

        // ensure that it is a true copy
        a.elements[0] = 2;
        ok( ! matrixEquals4( a, b ), "Passed!" );
    });


    var comparePlane = function ( a, b, threshold? ) {
        threshold = threshold || 0.0001;
        return ( a.normal.distanceTo( b.normal ) < threshold &&
        Math.abs( a.constant - b.constant ) < threshold );
    };


    test( "constructor", function() {
        var a = new THREE.Plane();
        ok( a.normal.x == 1, "Passed!" );
        ok( a.normal.y == 0, "Passed!" );
        ok( a.normal.z == 0, "Passed!" );
        ok( a.constant == 0, "Passed!" );

        a = new THREE.Plane( one3.clone(), 0 );
        ok( a.normal.x == 1, "Passed!" );
        ok( a.normal.y == 1, "Passed!" );
        ok( a.normal.z == 1, "Passed!" );
        ok( a.constant == 0, "Passed!" );

        a = new THREE.Plane( one3.clone(), 1 );
        ok( a.normal.x == 1, "Passed!" );
        ok( a.normal.y == 1, "Passed!" );
        ok( a.normal.z == 1, "Passed!" );
        ok( a.constant == 1, "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Plane( new THREE.Vector3( x, y, z ), w );
        var b = new THREE.Plane().copy( a );
        ok( b.normal.x == x, "Passed!" );
        ok( b.normal.y == y, "Passed!" );
        ok( b.normal.z == z, "Passed!" );
        ok( b.constant == w, "Passed!" );

        // ensure that it is a true copy
        a.normal.x = 0;
        a.normal.y = -1;
        a.normal.z = -2;
        a.constant = -3;
        ok( b.normal.x == x, "Passed!" );
        ok( b.normal.y == y, "Passed!" );
        ok( b.normal.z == z, "Passed!" );
        ok( b.constant == w, "Passed!" );
    });

    test( "set", function() {
        var a = new THREE.Plane();
        ok( a.normal.x == 1, "Passed!" );
        ok( a.normal.y == 0, "Passed!" );
        ok( a.normal.z == 0, "Passed!" );
        ok( a.constant == 0, "Passed!" );

        var b = a.clone().set( new THREE.Vector3( x, y, z ), w );
        ok( b.normal.x == x, "Passed!" );
        ok( b.normal.y == y, "Passed!" );
        ok( b.normal.z == z, "Passed!" );
        ok( b.constant == w, "Passed!" );
    });

    test( "setComponents", function() {
        var a = new THREE.Plane();
        ok( a.normal.x == 1, "Passed!" );
        ok( a.normal.y == 0, "Passed!" );
        ok( a.normal.z == 0, "Passed!" );
        ok( a.constant == 0, "Passed!" );

        var b = a.clone().setComponents( x, y, z , w );
        ok( b.normal.x == x, "Passed!" );
        ok( b.normal.y == y, "Passed!" );
        ok( b.normal.z == z, "Passed!" );
        ok( b.constant == w, "Passed!" );
    });

    test( "setFromNormalAndCoplanarPoint", function() {
        var normal = one3.clone().normalize();
        var a = new THREE.Plane().setFromNormalAndCoplanarPoint( normal, zero3 );

        ok( a.normal.equals( normal ), "Passed!" );
        ok( a.constant == 0, "Passed!" );
    });

    test( "normalize", function() {
        var a = new THREE.Plane( new THREE.Vector3( 2, 0, 0 ), 2 );

        a.normalize();
        ok( a.normal.length() == 1, "Passed!" );
        ok( a.normal.equals( new THREE.Vector3( 1, 0, 0 ) ), "Passed!" );
        ok( a.constant == 1, "Passed!" );
    });

    test( "negate/distanceToPoint", function() {
        var a = new THREE.Plane( new THREE.Vector3( 2, 0, 0 ), -2 );

        a.normalize();
        ok( a.distanceToPoint( new THREE.Vector3( 4, 0, 0 ) ) === 3, "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector3( 1, 0, 0 ) ) === 0, "Passed!" );

        a.negate();
        ok( a.distanceToPoint( new THREE.Vector3( 4, 0, 0 ) ) === -3, "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector3( 1, 0, 0 ) ) === 0, "Passed!" );
    });

    test( "distanceToPoint", function() {
        var a = new THREE.Plane( new THREE.Vector3( 2, 0, 0 ), -2 );

        a.normalize();
        ok( a.distanceToPoint( a.projectPoint( zero3.clone() ) ) === 0, "Passed!" );
        ok( a.distanceToPoint( new THREE.Vector3( 4, 0, 0 ) ) === 3, "Passed!" );
    });

    test( "distanceToSphere", function() {
        var a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 );

        var b = new THREE.Sphere( new THREE.Vector3( 2, 0, 0 ), 1 );

        ok( a.distanceToSphere( b ) === 1, "Passed!" );

        a.set( new THREE.Vector3( 1, 0, 0 ), 2 );
        ok( a.distanceToSphere( b ) === 3, "Passed!" );
        a.set( new THREE.Vector3( 1, 0, 0 ), -2 );
        ok( a.distanceToSphere( b ) === -1, "Passed!" );
    });

    test( "isInterestionLine/intersectLine", function() {
        var a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 );

        var l1 = new THREE.Line3( new THREE.Vector3( -10, 0, 0 ), new THREE.Vector3( 10, 0, 0 ) );
        ok( a.isIntersectionLine( l1 ), "Passed!" );
        ok( a.intersectLine( l1 ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), -3 );

        ok( a.isIntersectionLine( l1 ), "Passed!" );
        ok( a.intersectLine( l1 ).equals( new THREE.Vector3( 3, 0, 0 ) ), "Passed!" );


        a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), -11 );

        ok( ! a.isIntersectionLine( l1 ), "Passed!" );
        ok( a.intersectLine( l1 ) === undefined, "Passed!" );

        a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 11 );

        ok( ! a.isIntersectionLine( l1 ), "Passed!" );
        ok( a.intersectLine( l1 ) === undefined, "Passed!" );

    });

    test( "projectPoint", function() {
        var a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 );

        ok( a.projectPoint( new THREE.Vector3( 10, 0, 0 ) ).equals( zero3 ), "Passed!" );
        ok( a.projectPoint( new THREE.Vector3( -10, 0, 0 ) ).equals( zero3 ), "Passed!" );

        a = new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), -1 );
        ok( a.projectPoint( new THREE.Vector3( 0, 0, 0 ) ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );
        ok( a.projectPoint( new THREE.Vector3( 0, 1, 0 ) ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );

    });

    test( "orthoPoint", function() {
        var a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 );

        ok( a.orthoPoint( new THREE.Vector3( 10, 0, 0 ) ).equals( new THREE.Vector3( 10, 0, 0 ) ), "Passed!" );
        ok( a.orthoPoint( new THREE.Vector3( -10, 0, 0 ) ).equals( new THREE.Vector3( -10, 0, 0 ) ), "Passed!" );
    });

    test( "coplanarPoint", function() {
        var a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 );
        ok( a.distanceToPoint( a.coplanarPoint() ) === 0, "Passed!" );

        a = new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), -1 );
        ok( a.distanceToPoint( a.coplanarPoint() ) === 0, "Passed!" );
    });

    test( "applyMatrix4/translate", function() {

        var a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 );

        var m = new THREE.Matrix4();
        m.makeRotationZ( Math.PI * 0.5 );

        ok( comparePlane( a.clone().applyMatrix4( m ), new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), 0 ) ), "Passed!" );

        a = new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), -1 );
        ok( comparePlane( a.clone().applyMatrix4( m ), new THREE.Plane( new THREE.Vector3( -1, 0, 0 ), -1 ) ), "Passed!" );

        m.makeTranslation( 1, 1, 1 );
        ok( comparePlane( a.clone().applyMatrix4( m ), a.clone().translate( new THREE.Vector3( 1, 1, 1 ) ) ), "Passed!" );
    });

    var orders = [ 'XYZ', 'YXZ', 'ZXY', 'ZYX', 'YZX', 'XZY' ];
    var eulerAngles = new THREE.Euler( 0.1, -0.3, 0.25 );



    var qSub = function ( a, b ) {
        var result = new THREE.Quaternion();
        result.copy( a );

        result.x -= b.x;
        result.y -= b.y;
        result.z -= b.z;
        result.w -= b.w;

        return result;

    };

    test( "constructor", function() {
        var a = new THREE.Quaternion();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );
        ok( a.w == 1, "Passed!" );

        a = new THREE.Quaternion( x, y, z, w );
        ok( a.x === x, "Passed!" );
        ok( a.y === y, "Passed!" );
        ok( a.z === z, "Passed!" );
        ok( a.w === w, "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Quaternion( x, y, z, w );
        var b = new THREE.Quaternion().copy( a );
        ok( b.x == x, "Passed!" );
        ok( b.y == y, "Passed!" );
        ok( b.z == z, "Passed!" );
        ok( b.w == w, "Passed!" );

        // ensure that it is a true copy
        a.x = 0;
        a.y = -1;
        a.z = 0;
        a.w = -1;
        ok( b.x == x, "Passed!" );
        ok( b.y == y, "Passed!" );
    });

    test( "set", function() {
        var a = new THREE.Quaternion();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );
        ok( a.w == 1, "Passed!" );

        a.set( x, y, z, w );
        ok( a.x == x, "Passed!" );
        ok( a.y == y, "Passed!" );
        ok( a.z === z, "Passed!" );
        ok( a.w === w, "Passed!" );
    });

    test( "setFromAxisAngle", function() {

        // TODO: find cases to validate.
        ok( true, "Passed!" );

        var zero = new THREE.Quaternion();

        var a = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), 0 );
        ok( a.equals( zero ), "Passed!" );
        a = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), 0 );
        ok( a.equals( zero ), "Passed!" );
        a = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), 0 );
        ok( a.equals( zero ), "Passed!" );

        var b1 = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI );
        ok( ! a.equals( b1 ), "Passed!" );
        var b2 = new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), -Math.PI );
        ok( ! a.equals( b2 ), "Passed!" );

        b1.multiply( b2 );
        ok( a.equals( b1 ), "Passed!" );
    });


    test( "setFromEuler/setFromQuaternion", function() {

        var angles = [ new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( 0, 0, 1 ) ];

        // ensure euler conversion to/from Quaternion matches.
        for( var i = 0; i < orders.length; i ++ ) {
            for( var j = 0; j < angles.length; j ++ ) {
                var eulers2 = new THREE.Euler().setFromQuaternion(
                    new THREE.Quaternion().setFromEuler(new THREE.Euler(angles[j].x, angles[j].y, angles[j].z, orders[i])),
                    orders[i]
                );
                var v = new THREE.Vector3().applyEuler(eulers2);
                ok( v.distanceTo( angles[j] ) < 0.001, "Passed!" );
            }
        }

    });

    test( "setFromEuler/setFromRotationMatrix", function() {

        // ensure euler conversion for Quaternion matches that of Matrix4
        for( var i = 0; i < orders.length; i ++ ) {
            var q = new THREE.Quaternion().setFromEuler( eulerAngles );
            var m = new THREE.Matrix4().makeRotationFromEuler( eulerAngles );
            var q2 = new THREE.Quaternion().setFromRotationMatrix( m );

            ok( qSub( q, q2 ).length() < 0.001, "Passed!" );
        }

    });

    test( "normalize/length/lengthSq", function() {
        var a = new THREE.Quaternion( x, y, z, w );
        var b = new THREE.Quaternion( -x, -y, -z, -w );

        ok( a.length() != 1, "Passed!");
        ok( a.lengthSq() != 1, "Passed!");
        a.normalize();
        ok( a.length() == 1, "Passed!");
        ok( a.lengthSq() == 1, "Passed!");

        a.set( 0, 0, 0, 0 );
        ok( a.lengthSq() == 0, "Passed!");
        ok( a.length() == 0, "Passed!");
        a.normalize();
        ok( a.lengthSq() == 1, "Passed!");
        ok( a.length() == 1, "Passed!");
    });

    test( "inverse/conjugate", function() {
        var a = new THREE.Quaternion( x, y, z, w );

        // TODO: add better validation here.

        var b = a.clone().conjugate();

        ok( a.x == -b.x, "Passed!" );
        ok( a.y == -b.y, "Passed!" );
        ok( a.z == -b.z, "Passed!" );
        ok( a.w == b.w, "Passed!" );
    });


    test( "multiplyQuaternions/multiply", function() {

        var angles = [ new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( 0, 0, 1 ) ];

        var q1 = new THREE.Quaternion().setFromEuler( new THREE.Euler(angles[0].x, angles[0].y, angles[0].z) );
        var q2 = new THREE.Quaternion().setFromEuler( new THREE.Euler(angles[1].x, angles[1].y, angles[1].z) );
        var q3 = new THREE.Quaternion().setFromEuler( new THREE.Euler(angles[2].x, angles[2].y, angles[2].z) );

        var q = new THREE.Quaternion().multiplyQuaternions( q1, q2 ).multiply( q3 );

        var m1 = new THREE.Matrix4().makeRotationFromEuler( new THREE.Euler(angles[0].x, angles[0].y, angles[0].z) );
        var m2 = new THREE.Matrix4().makeRotationFromEuler( new THREE.Euler(angles[1].x, angles[1].y, angles[1].z) );
        var m3 = new THREE.Matrix4().makeRotationFromEuler( new THREE.Euler(angles[2].x, angles[2].y, angles[2].z) );

        var m = new THREE.Matrix4().multiplyMatrices( m1, m2 ).multiply( m3 );

        var qFromM = new THREE.Quaternion().setFromRotationMatrix( m );

        ok( qSub( q, qFromM ).length() < 0.001, "Passed!" );
    });

    test( "multiplyVector3", function() {

        var angles = [ new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( 0, 0, 1 ) ];

        // ensure euler conversion for Quaternion matches that of Matrix4
        for( var i = 0; i < orders.length; i ++ ) {
            for( var j = 0; j < angles.length; j ++ ) {
                var q = new THREE.Quaternion().setFromEuler( new THREE.Euler(angles[j].x, angles[j].y, angles[j].z, orders[i]) );
                var m = new THREE.Matrix4().makeRotationFromEuler( new THREE.Euler(angles[j].x, angles[j].y, angles[j].z, orders[i]) );

                var v0 = new THREE.Vector3(1, 0, 0);
                var qv = v0.clone().applyQuaternion( q );
                var mv = v0.clone().applyMatrix4( m );

                ok( qv.distanceTo( mv ) < 0.001, "Passed!" );
            }
        }

    });

    test( "equals", function() {
        var a = new THREE.Quaternion( x, y, z, w );
        var b = new THREE.Quaternion( -x, -y, -z, -w );

        ok( a.x != b.x, "Passed!" );
        ok( a.y != b.y, "Passed!" );

        ok( ! a.equals( b ), "Passed!" );
        ok( ! b.equals( a ), "Passed!" );

        a.copy( b );
        ok( a.x == b.x, "Passed!" );
        ok( a.y == b.y, "Passed!" );

        ok( a.equals( b ), "Passed!" );
        ok( b.equals( a ), "Passed!" );
    });


    test( "constructor/equals", function() {
        var a = new THREE.Ray();
        ok( a.origin.equals( zero3 ), "Passed!" );
        ok( a.direction.equals( zero3 ), "Passed!" );

        a = new THREE.Ray( two3.clone(), one3.clone() );
        ok( a.origin.equals( two3 ), "Passed!" );
        ok( a.direction.equals( one3 ), "Passed!" );
    });

    test( "copy/equals", function() {
        var a = new THREE.Ray( zero3.clone(), one3.clone() );
        var b = new THREE.Ray().copy( a );
        ok( b.origin.equals( zero3 ), "Passed!" );
        ok( b.direction.equals( one3 ), "Passed!" );

        // ensure that it is a true copy
        a.origin = zero3;
        a.direction = one3;
        ok( b.origin.equals( zero3 ), "Passed!" );
        ok( b.direction.equals( one3 ), "Passed!" );
    });

    test( "set", function() {
        var a = new THREE.Ray();

        a.set( one3, one3 );
        ok( a.origin.equals( one3 ), "Passed!" );
        ok( a.direction.equals( one3 ), "Passed!" );
    });

    test( "at", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );

        ok( a.at( 0 ).equals( one3 ), "Passed!" );
        ok( a.at( -1 ).equals( new THREE.Vector3( 1, 1, 0 ) ), "Passed!" );
        ok( a.at( 1 ).equals( new THREE.Vector3( 1, 1, 2 ) ), "Passed!" );
    });

    test( "recast/clone", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );

        ok( a.recast( 0 ).equals( a ), "Passed!" );

        var b = a.clone();
        ok( b.recast( -1 ).equals( new THREE.Ray( new THREE.Vector3( 1, 1, 0 ), new THREE.Vector3( 0, 0, 1 ) ) ), "Passed!" );

        var c = a.clone();
        ok( c.recast( 1 ).equals( new THREE.Ray( new THREE.Vector3( 1, 1, 2 ), new THREE.Vector3( 0, 0, 1 ) ) ), "Passed!" );

        var d = a.clone();
        var e = d.clone().recast( 1 );
        ok( d.equals( a ), "Passed!" );
        ok( ! e.equals( d ), "Passed!" );
        ok( e.equals( c ), "Passed!" );
    });

    test( "closestPointToPoint", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );

        // nearby the ray
        var b = a.closestPointToPoint( zero3 );
        ok( b.equals( new THREE.Vector3( 1, 1, 0 ) ), "Passed!" );

        // exactly on the ray
        var c = a.closestPointToPoint( one3 );
        ok( c.equals( one3 ), "Passed!" );
    });

    test( "distanceToPoint", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );

        // nearby the ray
        var b = a.distanceToPoint( zero3 );
        ok( b == Math.sqrt( 2 ), "Passed!" );

        // exactly on the ray
        var c = a.distanceToPoint( one3 );
        ok( c == 0, "Passed!" );
    });

    test( "isIntersectionSphere", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );
        var b = new THREE.Sphere( zero3, 0.5 );
        var c = new THREE.Sphere( zero3, 1.5 );
        var d = new THREE.Sphere( one3, 0.1 );
        var e = new THREE.Sphere( two3, 0.1 );
        var f = new THREE.Sphere( two3, 1 );

        ok( ! a.isIntersectionSphere( b ), "Passed!" );
        ok( a.isIntersectionSphere( c ), "Passed!" );
        ok( a.isIntersectionSphere( d ), "Passed!" );
        ok( ! a.isIntersectionSphere( e ), "Passed!" );
        ok( ! a.isIntersectionSphere( f ), "Passed!" );
    });

    test( "isIntersectionPlane", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );

        // parallel plane behind
        var b = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), one3.clone().sub( new THREE.Vector3( 0, 0, -1 ) ) );
        ok( a.isIntersectionPlane( b ), "Passed!" );

        // parallel plane coincident with origin
        var c = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), one3.clone().sub( new THREE.Vector3( 0, 0, 0 ) ) );
        ok( a.isIntersectionPlane( c ), "Passed!" );

        // parallel plane infront
        var d = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), one3.clone().sub( new THREE.Vector3( 0, 0, 1 ) ) );
        ok( a.isIntersectionPlane( d ), "Passed!" );

        // perpendical ray that overlaps exactly
        var e = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 1, 0, 0 ), one3 );
        ok( a.isIntersectionPlane( e ), "Passed!" );

        // perpendical ray that doesn't overlap
        var f = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 1, 0, 0 ), zero3 );
        ok( ! a.isIntersectionPlane( f ), "Passed!" );
    });

    test( "intersectPlane", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );

        // parallel plane behind
        var b = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), new THREE.Vector3( 1, 1, -1 ) );
        ok( a.intersectPlane( b ).equals( new THREE.Vector3( 1, 1, -1 ) ), "Passed!" );

        // parallel plane coincident with origin
        var c = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), new THREE.Vector3( 1, 1, 0 ) );
        ok( a.intersectPlane( c ).equals( new THREE.Vector3( 1, 1, 0 ) ), "Passed!" );

        // parallel plane infront
        var d = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), new THREE.Vector3( 1, 1, 1 ) );
        ok( a.intersectPlane( d ).equals( new THREE.Vector3( 1, 1, 1 ) ), "Passed!" );

        // perpendical ray that overlaps exactly
        var e = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 1, 0, 0 ), one3 );
        ok( a.intersectPlane( e ).equals( a.origin ), "Passed!" );

        // perpendical ray that doesn't overlap
        var f = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 1, 0, 0 ), zero3 );
        ok( a.intersectPlane( f ) === undefined, "Passed!" );
    });


    test( "applyMatrix4", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );
        var m = new THREE.Matrix4().identity();

        ok( a.clone().applyMatrix4( m ).equals( a ), "Passed!" );

        a = new THREE.Ray( zero3.clone(), new THREE.Vector3( 0, 0, 1 ) );
        m.makeRotationAxis( new THREE.Vector3( 0, 0, 1 ), Math.PI );
        ok( a.clone().applyMatrix4( m ).equals( a ), "Passed!" );

        m.identity().makeRotationX( Math.PI );
        var b = a.clone();
        b.direction.negate();
        var a2 = a.clone().applyMatrix4( m );
        ok( a2.origin.distanceTo( b.origin ) < 0.0001, "Passed!" );
        ok( a2.direction.distanceTo( b.direction ) < 0.0001, "Passed!" );

        a.origin = new THREE.Vector3( 0, 0, 1 );
        b.origin = new THREE.Vector3( 0, 0, -1 );
        var a2 = a.clone().applyMatrix4( m );
        ok( a2.origin.distanceTo( b.origin ) < 0.0001, "Passed!" );
        ok( a2.direction.distanceTo( b.direction ) < 0.0001, "Passed!" );
    });


    test( "constructor", function() {
        var a = new THREE.Sphere();
        ok( a.center.equals( zero3 ), "Passed!" );
        ok( a.radius == 0, "Passed!" );

        a = new THREE.Sphere( one3.clone(), 1 );
        ok( a.center.equals( one3 ), "Passed!" );
        ok( a.radius == 1, "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );
        var b = new THREE.Sphere().copy( a );

        ok( b.center.equals( one3 ), "Passed!" );
        ok( b.radius == 1, "Passed!" );

        // ensure that it is a true copy
        a.center = zero3;
        a.radius = 0;
        ok( b.center.equals( one3 ), "Passed!" );
        ok( b.radius == 1, "Passed!" );
    });

    test( "set", function() {
        var a = new THREE.Sphere();
        ok( a.center.equals( zero3 ), "Passed!" );
        ok( a.radius == 0, "Passed!" );

        a.set( one3, 1 );
        ok( a.center.equals( one3 ), "Passed!" );
        ok( a.radius == 1, "Passed!" );
    });

    test( "empty", function() {
        var a = new THREE.Sphere();
        ok( a.empty(), "Passed!" );

        a.set( one3, 1 );
        ok( ! a.empty(), "Passed!" );
    });

    test( "containsPoint", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );

        ok( ! a.containsPoint( zero3 ), "Passed!" );
        ok( a.containsPoint( one3 ), "Passed!" );
    });

    test( "distanceToPoint", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );

        ok( ( a.distanceToPoint( zero3 ) - 0.7320 ) < 0.001, "Passed!" );
        ok( a.distanceToPoint( one3 ) === -1, "Passed!" );
    });

    test( "intersectsSphere", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );
        var b = new THREE.Sphere( zero3.clone(), 1 );
        var c = new THREE.Sphere( zero3.clone(), 0.25 );

        ok( a.intersectsSphere( b ) , "Passed!" );
        ok( ! a.intersectsSphere( c ) , "Passed!" );
    });

    test( "clampPoint", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );

        ok( a.clampPoint( new THREE.Vector3( 1, 1, 3 ) ).equals( new THREE.Vector3( 1, 1, 2 ) ), "Passed!" );
        ok( a.clampPoint( new THREE.Vector3( 1, 1, -3 ) ).equals( new THREE.Vector3( 1, 1, 0 ) ), "Passed!" );
    });

    test( "getBoundingBox", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );

        ok( a.getBoundingBox().equals( new THREE.Box3( zero3, two3 ) ), "Passed!" );

        a.set( zero3, 0 )
        ok( a.getBoundingBox().equals( new THREE.Box3( zero3, zero3 ) ), "Passed!" );
    });

    test( "applyMatrix4", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );

        var m = new THREE.Matrix4().makeTranslation( 1, -2, 1 );

        ok( a.clone().applyMatrix4( m ).getBoundingBox().equals( a.getBoundingBox().applyMatrix4( m ) ), "Passed!" );
    });

    test( "translate", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );

        a.translate( one3.clone().negate() );
        ok( a.center.equals( zero3 ), "Passed!" );
    });

    test( "constructor", function() {
        var a = new THREE.Triangle();
        ok( a.a.equals( zero3 ), "Passed!" );
        ok( a.b.equals( zero3 ), "Passed!" );
        ok( a.c.equals( zero3 ), "Passed!" );

        a = new THREE.Triangle( one3.clone().negate(), one3.clone(), two3.clone() );
        ok( a.a.equals( one3.clone().negate() ), "Passed!" );
        ok( a.b.equals( one3 ), "Passed!" );
        ok( a.c.equals( two3 ), "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Triangle( one3.clone().negate(), one3.clone(), two3.clone() );
        var b = new THREE.Triangle().copy( a );
        ok( b.a.equals( one3.clone().negate() ), "Passed!" );
        ok( b.b.equals( one3 ), "Passed!" );
        ok( b.c.equals( two3 ), "Passed!" );

        // ensure that it is a true copy
        a.a = one3;
        a.b = zero3;
        a.c = zero3;
        ok( b.a.equals( one3.clone().negate() ), "Passed!" );
        ok( b.b.equals( one3 ), "Passed!" );
        ok( b.c.equals( two3 ), "Passed!" );
    });

    test( "setFromPointsAndIndices", function() {
        var a = new THREE.Triangle();

        var points = [ one3, one3.clone().negate(), two3 ];
        a.setFromPointsAndIndices( points, 1, 0, 2 );
        ok( a.a.equals( one3.clone().negate() ), "Passed!" );
        ok( a.b.equals( one3 ), "Passed!" );
        ok( a.c.equals( two3 ), "Passed!" );

    });

    test( "set", function() {
        var a = new THREE.Triangle();

        a.set( one3.clone().negate(), one3, two3 );
        ok( a.a.equals( one3.clone().negate() ), "Passed!" );
        ok( a.b.equals( one3 ), "Passed!" );
        ok( a.c.equals( two3 ), "Passed!" );

    });

    test( "area", function() {
        var a = new THREE.Triangle();

        ok( a.area() == 0, "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.area() == 0.5, "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.area() == 2, "Passed!" );

        // colinear triangle.
        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 3, 0, 0 ) );
        ok( a.area() == 0, "Passed!" );
    });

    test( "midpoint", function() {
        var a = new THREE.Triangle();

        ok( a.midpoint().equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.midpoint().equals( new THREE.Vector3( 1/3, 1/3, 0 ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.midpoint().equals( new THREE.Vector3( 2/3, 0, 2/3 ) ), "Passed!" );
    });

    test( "normal", function() {
        var a = new THREE.Triangle();

        ok( a.normal().equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.normal().equals( new THREE.Vector3( 0, 0, 1 ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.normal().equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );
    });

    test( "plane", function() {
        var a = new THREE.Triangle();

        // artificial normal is created in this case.
        ok( a.plane().distanceToPoint( a.a ) == 0, "Passed!" );
        ok( a.plane().distanceToPoint( a.b ) == 0, "Passed!" );
        ok( a.plane().distanceToPoint( a.c ) == 0, "Passed!" );
        ok( a.plane().normal.equals( a.normal() ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.plane().distanceToPoint( a.a ) == 0, "Passed!" );
        ok( a.plane().distanceToPoint( a.b ) == 0, "Passed!" );
        ok( a.plane().distanceToPoint( a.c ) == 0, "Passed!" );
        ok( a.plane().normal.equals( a.normal() ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.plane().distanceToPoint( a.a ) == 0, "Passed!" );
        ok( a.plane().distanceToPoint( a.b ) == 0, "Passed!" );
        ok( a.plane().distanceToPoint( a.c ) == 0, "Passed!" );
        ok( a.plane().normal.clone().normalize().equals( a.normal() ), "Passed!" );
    });

    test( "barycoordFromPoint", function() {
        var a = new THREE.Triangle();

        var bad = new THREE.Vector3( -2, -1, -1 );

        ok( a.barycoordFromPoint( a.a ).equals( bad ), "Passed!" );
        ok( a.barycoordFromPoint( a.b ).equals( bad ), "Passed!" );
        ok( a.barycoordFromPoint( a.c ).equals( bad ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.barycoordFromPoint( a.a ).equals( new THREE.Vector3( 1, 0, 0 ) ), "Passed!" );
        ok( a.barycoordFromPoint( a.b ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );
        ok( a.barycoordFromPoint( a.c ).equals( new THREE.Vector3( 0, 0, 1 ) ), "Passed!" );
        ok( a.barycoordFromPoint( a.midpoint() ).distanceTo( new THREE.Vector3( 1/3, 1/3, 1/3 ) ) < 0.0001, "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.barycoordFromPoint( a.a ).equals( new THREE.Vector3( 1, 0, 0 ) ), "Passed!" );
        ok( a.barycoordFromPoint( a.b ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );
        ok( a.barycoordFromPoint( a.c ).equals( new THREE.Vector3( 0, 0, 1 ) ), "Passed!" );
        ok( a.barycoordFromPoint( a.midpoint() ).distanceTo( new THREE.Vector3( 1/3, 1/3, 1/3 ) ) < 0.0001, "Passed!" );
    });

    test( "containsPoint", function() {
        var a = new THREE.Triangle();

        ok( ! a.containsPoint( a.a ), "Passed!" );
        ok( ! a.containsPoint( a.b ), "Passed!" );
        ok( ! a.containsPoint( a.c ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.containsPoint( a.a ), "Passed!" );
        ok( a.containsPoint( a.b ), "Passed!" );
        ok( a.containsPoint( a.c ), "Passed!" );
        ok( a.containsPoint( a.midpoint() ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( -1, -1, -1 ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.containsPoint( a.a ), "Passed!" );
        ok( a.containsPoint( a.b ), "Passed!" );
        ok( a.containsPoint( a.c ), "Passed!" );
        ok( a.containsPoint( a.midpoint() ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( -1, -1, -1 ) ), "Passed!" );
    });


    test( "constructor", function() {
        var a = new THREE.Vector2();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );

        a = new THREE.Vector2( x, y );
        ok( a.x === x, "Passed!" );
        ok( a.y === y, "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Vector2( x, y );
        var b = new THREE.Vector2().copy( a );
        ok( b.x == x, "Passed!" );
        ok( b.y == y, "Passed!" );

        // ensure that it is a true copy
        a.x = 0;
        a.y = -1;
        ok( b.x == x, "Passed!" );
        ok( b.y == y, "Passed!" );
    });

    test( "set", function() {
        var a = new THREE.Vector2();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );

        a.set( x, y );
        ok( a.x == x, "Passed!" );
        ok( a.y == y, "Passed!" );
    });

    test( "setX,setY", function() {
        var a = new THREE.Vector2();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );

        a.setX( x );
        a.setY( y );
        ok( a.x == x, "Passed!" );
        ok( a.y == y, "Passed!" );
    });

    test( "setComponent,getComponent", function() {
        var a = new THREE.Vector2();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );

        a.setComponent( 0, 1 );
        a.setComponent( 1, 2 );
        ok( a.getComponent( 0 ) == 1, "Passed!" );
        ok( a.getComponent( 1 ) == 2, "Passed!" );
    });

    test( "add", function() {
        var a = new THREE.Vector2( x, y );
        var b = new THREE.Vector2( -x, -y );

        a.add( b );
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );

        var c = new THREE.Vector2().addVectors( b, b );
        ok( c.x == -2*x, "Passed!" );
        ok( c.y == -2*y, "Passed!" );
    });

    test( "sub", function() {
        var a = new THREE.Vector2( x, y );
        var b = new THREE.Vector2( -x, -y );

        a.sub( b );
        ok( a.x == 2*x, "Passed!" );
        ok( a.y == 2*y, "Passed!" );

        var c = new THREE.Vector2().subVectors( a, a );
        ok( c.x == 0, "Passed!" );
        ok( c.y == 0, "Passed!" );
    });

    test( "multiply/divide", function() {
        var a = new THREE.Vector2( x, y );
        var b = new THREE.Vector2( -x, -y );

        a.multiplyScalar( -2 );
        ok( a.x == x*-2, "Passed!" );
        ok( a.y == y*-2, "Passed!" );

        b.multiplyScalar( -2 );
        ok( b.x == 2*x, "Passed!" );
        ok( b.y == 2*y, "Passed!" );

        a.divideScalar( -2 );
        ok( a.x == x, "Passed!" );
        ok( a.y == y, "Passed!" );

        b.divideScalar( -2 );
        ok( b.x == -x, "Passed!" );
        ok( b.y == -y, "Passed!" );
    });


    test( "min/max/clamp", function() {
        var a = new THREE.Vector2( x, y );
        var b = new THREE.Vector2( -x, -y );
        var c = new THREE.Vector2();

        c.copy( a ).min( b );
        ok( c.x == -x, "Passed!" );
        ok( c.y == -y, "Passed!" );

        c.copy( a ).max( b );
        ok( c.x == x, "Passed!" );
        ok( c.y == y, "Passed!" );

        c.set( -2*x, 2*y );
        c.clamp( b, a );
        ok( c.x == -x, "Passed!" );
        ok( c.y == y, "Passed!" );
    });

    test( "negate", function() {
        var a = new THREE.Vector2( x, y );

        a.negate();
        ok( a.x == -x, "Passed!" );
        ok( a.y == -y, "Passed!" );
    });

    test( "dot", function() {
        var a = new THREE.Vector2( x, y );
        var b = new THREE.Vector2( -x, -y );
        var c = new THREE.Vector2();

        var result = a.dot( b );
        ok( result == (-x*x-y*y), "Passed!" );

        result = a.dot( c );
        ok( result == 0, "Passed!" );
    });

    test( "length/lengthSq", function() {
        var a = new THREE.Vector2( x, 0 );
        var b = new THREE.Vector2( 0, -y );
        var c = new THREE.Vector2();

        ok( a.length() == x, "Passed!" );
        ok( a.lengthSq() == x*x, "Passed!" );
        ok( b.length() == y, "Passed!" );
        ok( b.lengthSq() == y*y, "Passed!" );
        ok( c.length() == 0, "Passed!" );
        ok( c.lengthSq() == 0, "Passed!" );

        a.set( x, y );
        ok( a.length() == Math.sqrt( x*x + y*y ), "Passed!" );
        ok( a.lengthSq() == ( x*x + y*y ), "Passed!" );
    });

    test( "normalize", function() {
        var a = new THREE.Vector2( x, 0 );
        var b = new THREE.Vector2( 0, -y );
        var c = new THREE.Vector2();

        a.normalize();
        ok( a.length() == 1, "Passed!" );
        ok( a.x == 1, "Passed!" );

        b.normalize();
        ok( b.length() == 1, "Passed!" );
        ok( b.y == -1, "Passed!" );
    });

    test( "distanceTo/distanceToSquared", function() {
        var a = new THREE.Vector2( x, 0 );
        var b = new THREE.Vector2( 0, -y );
        var c = new THREE.Vector2();

        ok( a.distanceTo( c ) == x, "Passed!" );
        ok( a.distanceToSquared( c ) == x*x, "Passed!" );

        ok( b.distanceTo( c ) == y, "Passed!" );
        ok( b.distanceToSquared( c ) == y*y, "Passed!" );
    });

    test( "setLength", function() {
        var a = new THREE.Vector2( x, 0 );

        ok( a.length() == x, "Passed!" );
        a.setLength( y );
        ok( a.length() == y, "Passed!" );

        a = new THREE.Vector2( 0, 0 );
        ok( a.length() == 0, "Passed!" );
        a.setLength( y );
        ok( a.length() == 0, "Passed!" );
    });

    test( "lerp/clone", function() {
        var a = new THREE.Vector2( x, 0 );
        var b = new THREE.Vector2( 0, -y );

        ok( a.lerp( a, 0 ).equals( a.lerp( a, 0.5 ) ), "Passed!" );
        ok( a.lerp( a, 0 ).equals( a.lerp( a, 1 ) ), "Passed!" );

        ok( a.clone().lerp( b, 0 ).equals( a ), "Passed!" );

        ok( a.clone().lerp( b, 0.5 ).x == x*0.5, "Passed!" );
        ok( a.clone().lerp( b, 0.5 ).y == -y*0.5, "Passed!" );

        ok( a.clone().lerp( b, 1 ).equals( b ), "Passed!" );
    });

    test( "equals", function() {
        var a = new THREE.Vector2( x, 0 );
        var b = new THREE.Vector2( 0, -y );

        ok( a.x != b.x, "Passed!" );
        ok( a.y != b.y, "Passed!" );

        ok( ! a.equals( b ), "Passed!" );
        ok( ! b.equals( a ), "Passed!" );

        a.copy( b );
        ok( a.x == b.x, "Passed!" );
        ok( a.y == b.y, "Passed!" );

        ok( a.equals( b ), "Passed!" );
        ok( b.equals( a ), "Passed!" );
    });


    test( "constructor", function() {
        var a = new THREE.Vector3();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );

        a = new THREE.Vector3( x, y, z );
        ok( a.x === x, "Passed!" );
        ok( a.y === y, "Passed!" );
        ok( a.z === z, "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Vector3( x, y, z );
        var b = new THREE.Vector3().copy( a );
        ok( b.x == x, "Passed!" );
        ok( b.y == y, "Passed!" );
        ok( b.z == z, "Passed!" );

        // ensure that it is a true copy
        a.x = 0;
        a.y = -1;
        a.z = -2;
        ok( b.x == x, "Passed!" );
        ok( b.y == y, "Passed!" );
        ok( b.z == z, "Passed!" );
    });

    test( "set", function() {
        var a = new THREE.Vector3();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );

        a.set( x, y, z );
        ok( a.x == x, "Passed!" );
        ok( a.y == y, "Passed!" );
        ok( a.z == z, "Passed!" );
    });

    test( "setX,setY,setZ", function() {
        var a = new THREE.Vector3();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );

        a.setX( x );
        a.setY( y );
        a.setZ( z );

        ok( a.x == x, "Passed!" );
        ok( a.y == y, "Passed!" );
        ok( a.z == z, "Passed!" );
    });

    test( "setComponent,getComponent", function() {
        var a = new THREE.Vector3();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );

        a.setComponent( 0, 1 );
        a.setComponent( 1, 2 );
        a.setComponent( 2, 3 );
        ok( a.getComponent( 0 ) == 1, "Passed!" );
        ok( a.getComponent( 1 ) == 2, "Passed!" );
        ok( a.getComponent( 2 ) == 3, "Passed!" );
    });

    test( "add", function() {
        var a = new THREE.Vector3( x, y, z );
        var b = new THREE.Vector3( -x, -y, -z );

        a.add( b );
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );

        var c = new THREE.Vector3().addVectors( b, b );
        ok( c.x == -2*x, "Passed!" );
        ok( c.y == -2*y, "Passed!" );
        ok( c.z == -2*z, "Passed!" );
    });

    test( "sub", function() {
        var a = new THREE.Vector3( x, y, z );
        var b = new THREE.Vector3( -x, -y, -z );

        a.sub( b );
        ok( a.x == 2*x, "Passed!" );
        ok( a.y == 2*y, "Passed!" );
        ok( a.z == 2*z, "Passed!" );

        var c = new THREE.Vector3().subVectors( a, a );
        ok( c.x == 0, "Passed!" );
        ok( c.y == 0, "Passed!" );
        ok( c.z == 0, "Passed!" );
    });

    test( "multiply/divide", function() {
        var a = new THREE.Vector3( x, y, z );
        var b = new THREE.Vector3( -x, -y, -z );

        a.multiplyScalar( -2 );
        ok( a.x == x*-2, "Passed!" );
        ok( a.y == y*-2, "Passed!" );
        ok( a.z == z*-2, "Passed!" );

        b.multiplyScalar( -2 );
        ok( b.x == 2*x, "Passed!" );
        ok( b.y == 2*y, "Passed!" );
        ok( b.z == 2*z, "Passed!" );

        a.divideScalar( -2 );
        ok( a.x == x, "Passed!" );
        ok( a.y == y, "Passed!" );
        ok( a.z == z, "Passed!" );

        b.divideScalar( -2 );
        ok( b.x == -x, "Passed!" );
        ok( b.y == -y, "Passed!" );
        ok( b.z == -z, "Passed!" );
    });

    test( "min/max/clamp", function() {
        var a = new THREE.Vector3( x, y, z );
        var b = new THREE.Vector3( -x, -y, -z );
        var c = new THREE.Vector3();

        c.copy( a ).min( b );
        ok( c.x == -x, "Passed!" );
        ok( c.y == -y, "Passed!" );
        ok( c.z == -z, "Passed!" );

        c.copy( a ).max( b );
        ok( c.x == x, "Passed!" );
        ok( c.y == y, "Passed!" );
        ok( c.z == z, "Passed!" );

        c.set( -2*x, 2*y, -2*z );
        c.clamp( b, a );
        ok( c.x == -x, "Passed!" );
        ok( c.y == y, "Passed!" );
        ok( c.z == -z, "Passed!" );
    });

    test( "negate", function() {
        var a = new THREE.Vector3( x, y, z );

        a.negate();
        ok( a.x == -x, "Passed!" );
        ok( a.y == -y, "Passed!" );
        ok( a.z == -z, "Passed!" );
    });

    test( "dot", function() {
        var a = new THREE.Vector3( x, y, z );
        var b = new THREE.Vector3( -x, -y, -z );
        var c = new THREE.Vector3();

        var result = a.dot( b );
        ok( result == (-x*x-y*y-z*z), "Passed!" );

        result = a.dot( c );
        ok( result == 0, "Passed!" );
    });

    test( "length/lengthSq", function() {
        var a = new THREE.Vector3( x, 0, 0 );
        var b = new THREE.Vector3( 0, -y, 0 );
        var c = new THREE.Vector3( 0, 0, z );
        var d = new THREE.Vector3();

        ok( a.length() == x, "Passed!" );
        ok( a.lengthSq() == x*x, "Passed!" );
        ok( b.length() == y, "Passed!" );
        ok( b.lengthSq() == y*y, "Passed!" );
        ok( c.length() == z, "Passed!" );
        ok( c.lengthSq() == z*z, "Passed!" );
        ok( d.length() == 0, "Passed!" );
        ok( d.lengthSq() == 0, "Passed!" );

        a.set( x, y, z );
        ok( a.length() == Math.sqrt( x*x + y*y + z*z ), "Passed!" );
        ok( a.lengthSq() == ( x*x + y*y + z*z ), "Passed!" );
    });

    test( "normalize", function() {
        var a = new THREE.Vector3( x, 0, 0 );
        var b = new THREE.Vector3( 0, -y, 0 );
        var c = new THREE.Vector3( 0, 0, z );

        a.normalize();
        ok( a.length() == 1, "Passed!" );
        ok( a.x == 1, "Passed!" );

        b.normalize();
        ok( b.length() == 1, "Passed!" );
        ok( b.y == -1, "Passed!" );

        c.normalize();
        ok( c.length() == 1, "Passed!" );
        ok( c.z == 1, "Passed!" );
    });

    test( "distanceTo/distanceToSquared", function() {
        var a = new THREE.Vector3( x, 0, 0 );
        var b = new THREE.Vector3( 0, -y, 0 );
        var c = new THREE.Vector3( 0, 0, z );
        var d = new THREE.Vector3();

        ok( a.distanceTo( d ) == x, "Passed!" );
        ok( a.distanceToSquared( d ) == x*x, "Passed!" );

        ok( b.distanceTo( d ) == y, "Passed!" );
        ok( b.distanceToSquared( d ) == y*y, "Passed!" );

        ok( c.distanceTo( d ) == z, "Passed!" );
        ok( c.distanceToSquared( d ) == z*z, "Passed!" );
    });

    test( "setLength", function() {
        var a = new THREE.Vector3( x, 0, 0 );

        ok( a.length() == x, "Passed!" );
        a.setLength( y );
        ok( a.length() == y, "Passed!" );

        a = new THREE.Vector3( 0, 0, 0 );
        ok( a.length() == 0, "Passed!" );
        a.setLength( y );
        ok( a.length() == 0, "Passed!" );

    });

    test( "projectOnVector", function() {
        var a = new THREE.Vector3( 1, 0, 0 );
        var b = new THREE.Vector3();
        var normal = new THREE.Vector3( 10, 0, 0 );

        ok( b.copy( a ).projectOnVector( normal ).equals( new THREE.Vector3( 1, 0, 0 ) ), "Passed!" );

        a.set( 0, 1, 0 );
        ok( b.copy( a ).projectOnVector( normal ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        a.set( 0, 0, -1 );
        ok( b.copy( a ).projectOnVector( normal ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        a.set( -1, 0, 0 );
        ok( b.copy( a ).projectOnVector( normal ).equals( new THREE.Vector3( -1, 0, 0 ) ), "Passed!" );

    });

    test( "projectOnPlane", function() {
        var a = new THREE.Vector3( 1, 0, 0 );
        var b = new THREE.Vector3();
        var normal = new THREE.Vector3( 1, 0, 0 );

        ok( b.copy( a ).projectOnPlane( normal ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        a.set( 0, 1, 0 );
        ok( b.copy( a ).projectOnPlane( normal ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );

        a.set( 0, 0, -1 );
        ok( b.copy( a ).projectOnPlane( normal ).equals( new THREE.Vector3( 0, 0, -1 ) ), "Passed!" );

        a.set( -1, 0, 0 );
        ok( b.copy( a ).projectOnPlane( normal ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

    });

    test( "reflect", function() {
        var a = new THREE.Vector3( 1, 0, 0 );
        var normal = new THREE.Vector3( 1, 0, 0 );
        var b = new THREE.Vector3( 0, 0, 0 );

        ok( b.copy( a ).reflect( normal ).equals( new THREE.Vector3( 1, 0, 0 ) ), "Passed!" );

        a.set( 1, -1, 0 );
        ok( b.copy( a ).reflect( normal ).equals( new THREE.Vector3( 1, 1, 0 ) ), "Passed!" );

        a.set( 1, -1, 0 );
        normal.set( 0, -1, 0 );
        ok( b.copy( a ).reflect(  normal ).equals( new THREE.Vector3( -1, -1, 0 ) ), "Passed!" );
    });

    test( "angleTo", function() {
        var a = new THREE.Vector3( 0, -0.18851655680720186, 0.9820700116639124 );
        var b = new THREE.Vector3( 0, 0.18851655680720186, -0.9820700116639124 );

        equal( a.angleTo( a ), 0 );
        equal( a.angleTo( b ), Math.PI );

        var x = new THREE.Vector3( 1, 0, 0 );
        var y = new THREE.Vector3( 0, 1, 0 );
        var z = new THREE.Vector3( 0, 0, 1 );

        equal( x.angleTo( y ), Math.PI / 2 );
        equal( x.angleTo( z ), Math.PI / 2 );
        equal( z.angleTo( x ), Math.PI / 2 );

        ok( Math.abs( x.angleTo( new THREE.Vector3( 1, 1, 0 ) ) - ( Math.PI / 4 ) ) < 0.0000001 );
    });

    test( "lerp/clone", function() {
        var a = new THREE.Vector3( x, 0, z );
        var b = new THREE.Vector3( 0, -y, 0 );

        ok( a.lerp( a, 0 ).equals( a.lerp( a, 0.5 ) ), "Passed!" );
        ok( a.lerp( a, 0 ).equals( a.lerp( a, 1 ) ), "Passed!" );

        ok( a.clone().lerp( b, 0 ).equals( a ), "Passed!" );

        ok( a.clone().lerp( b, 0.5 ).x == x*0.5, "Passed!" );
        ok( a.clone().lerp( b, 0.5 ).y == -y*0.5, "Passed!" );
        ok( a.clone().lerp( b, 0.5 ).z == z*0.5, "Passed!" );

        ok( a.clone().lerp( b, 1 ).equals( b ), "Passed!" );
    });

    test( "equals", function() {
        var a = new THREE.Vector3( x, 0, z );
        var b = new THREE.Vector3( 0, -y, 0 );

        ok( a.x != b.x, "Passed!" );
        ok( a.y != b.y, "Passed!" );
        ok( a.z != b.z, "Passed!" );

        ok( ! a.equals( b ), "Passed!" );
        ok( ! b.equals( a ), "Passed!" );

        a.copy( b );
        ok( a.x == b.x, "Passed!" );
        ok( a.y == b.y, "Passed!" );
        ok( a.z == b.z, "Passed!" );

        ok( a.equals( b ), "Passed!" );
        ok( b.equals( a ), "Passed!" );
    });


    test( "constructor", function() {
        var a = new THREE.Vector4();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );
        ok( a.w == 1, "Passed!" );

        a = new THREE.Vector4( x, y, z, w );
        ok( a.x === x, "Passed!" );
        ok( a.y === y, "Passed!" );
        ok( a.z === z, "Passed!" );
        ok( a.w === w, "Passed!" );
    });

    test( "copy", function() {
        var a = new THREE.Vector4( x, y, z, w );
        var b = new THREE.Vector4().copy( a );
        ok( b.x == x, "Passed!" );
        ok( b.y == y, "Passed!" );
        ok( b.z == z, "Passed!" );
        ok( b.w == w, "Passed!" );

        // ensure that it is a true copy
        a.x = 0;
        a.y = -1;
        a.z = -2;
        a.w = -3;
        ok( b.x == x, "Passed!" );
        ok( b.y == y, "Passed!" );
        ok( b.z == z, "Passed!" );
        ok( b.w == w, "Passed!" );
    });

    test( "set", function() {
        var a = new THREE.Vector4();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );
        ok( a.w == 1, "Passed!" );

        a.set( x, y, z, w );
        ok( a.x == x, "Passed!" );
        ok( a.y == y, "Passed!" );
        ok( a.z == z, "Passed!" );
        ok( a.w == w, "Passed!" );
    });

    test( "setX,setY,setZ,setW", function() {
        var a = new THREE.Vector4();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );
        ok( a.w == 1, "Passed!" );

        a.setX( x );
        a.setY( y );
        a.setZ( z );
        a.setW( w );

        ok( a.x == x, "Passed!" );
        ok( a.y == y, "Passed!" );
        ok( a.z == z, "Passed!" );
        ok( a.w == w, "Passed!" );
    });

    test( "setComponent,getComponent", function() {
        var a = new THREE.Vector4();
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );
        ok( a.w == 1, "Passed!" );

        a.setComponent( 0, 1 );
        a.setComponent( 1, 2 );
        a.setComponent( 2, 3 );
        a.setComponent( 3, 4 );
        ok( a.getComponent( 0 ) == 1, "Passed!" );
        ok( a.getComponent( 1 ) == 2, "Passed!" );
        ok( a.getComponent( 2 ) == 3, "Passed!" );
        ok( a.getComponent( 3 ) == 4, "Passed!" );
    });

    test( "add", function() {
        var a = new THREE.Vector4( x, y, z, w );
        var b = new THREE.Vector4( -x, -y, -z, -w );

        a.add( b );
        ok( a.x == 0, "Passed!" );
        ok( a.y == 0, "Passed!" );
        ok( a.z == 0, "Passed!" );
        ok( a.w == 0, "Passed!" );

        var c = new THREE.Vector4().addVectors( b, b );
        ok( c.x == -2*x, "Passed!" );
        ok( c.y == -2*y, "Passed!" );
        ok( c.z == -2*z, "Passed!" );
        ok( c.w == -2*w, "Passed!" );
    });

    test( "sub", function() {
        var a = new THREE.Vector4( x, y, z, w );
        var b = new THREE.Vector4( -x, -y, -z, -w );

        a.sub( b );
        ok( a.x == 2*x, "Passed!" );
        ok( a.y == 2*y, "Passed!" );
        ok( a.z == 2*z, "Passed!" );
        ok( a.w == 2*w, "Passed!" );

        var c = new THREE.Vector4().subVectors( a, a );
        ok( c.x == 0, "Passed!" );
        ok( c.y == 0, "Passed!" );
        ok( c.z == 0, "Passed!" );
        ok( c.w == 0, "Passed!" );
    });

    test( "multiply/divide", function() {
        var a = new THREE.Vector4( x, y, z, w );
        var b = new THREE.Vector4( -x, -y, -z, -w );

        a.multiplyScalar( -2 );
        ok( a.x == x*-2, "Passed!" );
        ok( a.y == y*-2, "Passed!" );
        ok( a.z == z*-2, "Passed!" );
        ok( a.w == w*-2, "Passed!" );

        b.multiplyScalar( -2 );
        ok( b.x == 2*x, "Passed!" );
        ok( b.y == 2*y, "Passed!" );    
        ok( b.z == 2*z, "Passed!" );    
        ok( b.w == 2*w, "Passed!" );    

        a.divideScalar( -2 );
        ok( a.x == x, "Passed!" );
        ok( a.y == y, "Passed!" );
        ok( a.z == z, "Passed!" );
        ok( a.w == w, "Passed!" );

        b.divideScalar( -2 );
        ok( b.x == -x, "Passed!" );
        ok( b.y == -y, "Passed!" );
        ok( b.z == -z, "Passed!" );
        ok( b.w == -w, "Passed!" );
    });

    test( "min/max/clamp", function() {
        var a = new THREE.Vector4( x, y, z, w );
        var b = new THREE.Vector4( -x, -y, -z, -w );
        var c = new THREE.Vector4();

        c.copy( a ).min( b );
        ok( c.x == -x, "Passed!" );
        ok( c.y == -y, "Passed!" );
        ok( c.z == -z, "Passed!" );
        ok( c.w == -w, "Passed!" );

        c.copy( a ).max( b );
        ok( c.x == x, "Passed!" );
        ok( c.y == y, "Passed!" );
        ok( c.z == z, "Passed!" );
        ok( c.w == w, "Passed!" );

        c.set( -2*x, 2*y, -2*z, 2*w );
        c.clamp( b, a );
        ok( c.x == -x, "Passed!" );
        ok( c.y == y, "Passed!" );
        ok( c.z == -z, "Passed!" );
        ok( c.w == w, "Passed!" );
    });

    test( "negate", function() {
        var a = new THREE.Vector4( x, y, z, w );

        a.negate();
        ok( a.x == -x, "Passed!" );
        ok( a.y == -y, "Passed!" );
        ok( a.z == -z, "Passed!" );
        ok( a.w == -w, "Passed!" );
    });

    test( "dot", function() {
        var a = new THREE.Vector4( x, y, z, w );
        var b = new THREE.Vector4( -x, -y, -z, -w );
        var c = new THREE.Vector4( 0, 0, 0, 0 );

        var result = a.dot( b );
        ok( result == (-x*x-y*y-z*z-w*w), "Passed!" );

        result = a.dot( c );
        ok( result == 0, "Passed!" );
    });

    test( "length/lengthSq", function() {
        var a = new THREE.Vector4( x, 0, 0, 0 );
        var b = new THREE.Vector4( 0, -y, 0, 0 );
        var c = new THREE.Vector4( 0, 0, z, 0 );
        var d = new THREE.Vector4( 0, 0, 0, w );
        var e = new THREE.Vector4( 0, 0, 0, 0 );

        ok( a.length() == x, "Passed!" );
        ok( a.lengthSq() == x*x, "Passed!" );
        ok( b.length() == y, "Passed!" );
        ok( b.lengthSq() == y*y, "Passed!" );
        ok( c.length() == z, "Passed!" );
        ok( c.lengthSq() == z*z, "Passed!" );
        ok( d.length() == w, "Passed!" );
        ok( d.lengthSq() == w*w, "Passed!" );
        ok( e.length() == 0, "Passed!" );
        ok( e.lengthSq() == 0, "Passed!" );

        a.set( x, y, z, w );
        ok( a.length() == Math.sqrt( x*x + y*y + z*z + w*w ), "Passed!" );
        ok( a.lengthSq() == ( x*x + y*y + z*z + w*w ), "Passed!" );
    });

    test( "normalize", function() {
        var a = new THREE.Vector4( x, 0, 0, 0 );
        var b = new THREE.Vector4( 0, -y, 0, 0 );
        var c = new THREE.Vector4( 0, 0, z, 0 );
        var d = new THREE.Vector4( 0, 0, 0, -w );

        a.normalize();
        ok( a.length() == 1, "Passed!" );
        ok( a.x == 1, "Passed!" );

        b.normalize();
        ok( b.length() == 1, "Passed!" );
        ok( b.y == -1, "Passed!" );

        c.normalize();
        ok( c.length() == 1, "Passed!" );
        ok( c.z == 1, "Passed!" );

        d.normalize();
        ok( d.length() == 1, "Passed!" );
        ok( d.w == -1, "Passed!" );
    });

    /*
    test( "distanceTo/distanceToSquared", function() {
        var a = new THREE.Vector4( x, 0, 0, 0 );
        var b = new THREE.Vector4( 0, -y, 0, 0 );
        var c = new THREE.Vector4( 0, 0, z, 0 );
        var d = new THREE.Vector4( 0, 0, 0, -w );
        var e = new THREE.Vector4();
        
        ok( a.distanceTo( e ) == x, "Passed!" );
        ok( a.distanceToSquared( e ) == x*x, "Passed!" );

        ok( b.distanceTo( e ) == y, "Passed!" );
        ok( b.distanceToSquared( e ) == y*y, "Passed!" );

        ok( c.distanceTo( e ) == z, "Passed!" );
        ok( c.distanceToSquared( e ) == z*z, "Passed!" );

        ok( d.distanceTo( e ) == w, "Passed!" );
        ok( d.distanceToSquared( e ) == w*w, "Passed!" );
    });
    */


    test( "setLength", function() {
        var a = new THREE.Vector4( x, 0, 0, 0 );

        ok( a.length() == x, "Passed!" );
        a.setLength( y );
        ok( a.length() == y, "Passed!" );

        a = new THREE.Vector4( 0, 0, 0, 0 );
        ok( a.length() == 0, "Passed!" );
        a.setLength( y );
        ok( a.length() == 0, "Passed!" );
    });

    test( "lerp/clone", function() {
        var a = new THREE.Vector4( x, 0, z, 0 );
        var b = new THREE.Vector4( 0, -y, 0, -w );

        ok( a.lerp( a, 0 ).equals( a.lerp( a, 0.5 ) ), "Passed!" );
        ok( a.lerp( a, 0 ).equals( a.lerp( a, 1 ) ), "Passed!" );

        ok( a.clone().lerp( b, 0 ).equals( a ), "Passed!" );

        ok( a.clone().lerp( b, 0.5 ).x == x*0.5, "Passed!" );
        ok( a.clone().lerp( b, 0.5 ).y == -y*0.5, "Passed!" );
        ok( a.clone().lerp( b, 0.5 ).z == z*0.5, "Passed!" );
        ok( a.clone().lerp( b, 0.5 ).w == -w*0.5, "Passed!" );

        ok( a.clone().lerp( b, 1 ).equals( b ), "Passed!" );
    });

    test( "equals", function() {
        var a = new THREE.Vector4( x, 0, z, 0 );
        var b = new THREE.Vector4( 0, -y, 0, -w );

        ok( a.x != b.x, "Passed!" );
        ok( a.y != b.y, "Passed!" );
        ok( a.z != b.z, "Passed!" );
        ok( a.w != b.w, "Passed!" );

        ok( ! a.equals( b ), "Passed!" );
        ok( ! b.equals( a ), "Passed!" );

        a.copy( b );
        ok( a.x == b.x, "Passed!" );
        ok( a.y == b.y, "Passed!" );
        ok( a.z == b.z, "Passed!" );
        ok( a.w == b.w, "Passed!" );

        ok( a.equals( b ), "Passed!" );
        ok( b.equals( a ), "Passed!" );
    });
};

/////////////////////////////////////////////////////////////
// https://github.com/mrdoob/three.js/tree/master/examples
//////////////////////////////////////////////////////////////


declare var Stats: any;
declare var TWEEN: any;
declare var Detector: any;
declare var Qrcode: any;
declare var ImprovedNoise: any;


declare module THREE{
    var PDBLoader: any;
    var CSS3Renderer: any;
    var CSS3DSprite: any;
    var CSS3DRenderer: any;
    var CSS3DObject: any;
    var TrackballControls: any;
    var FlyControls: any;
    var RenderPass: any;
    var FilmPass: any;
    var EffectComposer: any;
    var OrbitControls: any;
    var PathControls: any;
    var PointerLockControls: any;
    var RollControls: any;
    var FirstPersonControls: any;
    var SVGRenderer: any;
    var SoftwareRenderer: any;
    var UVsDebug: any;
    var UVsUtils: any;
    var Curves: any;
    var ParametricGeometries: any;
    var BinaryLoader: any;
    var OculusRiftEffect: any;
    var SubdivisionModifier: any;
    var TessellateModifier: any;
    var ExplodeModifier: any;
    var RenderPass: any;
    var BloomPass:any;
    var FilmPass: any;
    var ShaderPass: any;
    var FXAAShader: any;
    var CopyShader: any;
    var ColladaLoader: any;
    var CTMLoader: any;
    var VTKLoader: any;
    var STLLoader: any;
    var OBJLoader: any;
    var ColladaLoader: any;
    var UTF8Loader: any;
    var UnpackDepthRGBAShader: any;
}

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_camera_orthographic.html

()=>{
    var container, stats;
    var camera, scene, renderer;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        var info = document.createElement( 'div' );
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - orthographic view';
        container.appendChild( info );

        camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, - 500, 1000 );
        camera.position.x = 200;
        camera.position.y = 100;
        camera.position.z = 200;

        scene = new THREE.Scene();

        // Grid

        var size = 500, step = 50;

        var geometry = new THREE.Geometry();

        for ( var i = - size; i <= size; i += step ) {

            geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
            geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

            geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
            geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

        }

        var materialLine = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } );

        var line = new THREE.Line( geometry, materialLine );
        line.type = THREE.LinePieces;
        scene.add( line );

        // Cubes

        geometry = new THREE.CubeGeometry( 50, 50, 50 );
        var materialCube = new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, overdraw: true } );

        for ( var i = 0; i < 100; i ++ ) {

            var cube = new THREE.Mesh( geometry, materialCube );

            cube.scale.y = Math.floor( Math.random() * 2 + 1 );

            cube.position.x = Math.floor( ( Math.random() * 1000 - 500 ) / 50 ) * 50 + 25;
            cube.position.y = ( cube.scale.y * 50 ) / 2;
            cube.position.z = Math.floor( ( Math.random() * 1000 - 500 ) / 50 ) * 50 + 25;

            scene.add( cube );

        }

        // Lights

        var ambientLight = new THREE.AmbientLight( Math.random() * 0x10 );
        scene.add( ambientLight );

        var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        scene.add( directionalLight );

        var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        scene.add( directionalLight );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.left = window.innerWidth / - 2;
        camera.right = window.innerWidth / 2;
        camera.top = window.innerHeight / 2;
        camera.bottom = window.innerHeight / - 2;

        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var timer = Date.now() * 0.0001;

        camera.position.x = Math.cos( timer ) * 200;
        camera.position.z = Math.sin( timer ) * 200;
        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_geometry_cube.html

()=>{

    var container, stats;

    var camera, scene, renderer;

    var cube, plane;

    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;

    var mouseX = 0;
    var mouseXOnMouseDown = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        var info = document.createElement( 'div' );
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = 'Drag to spin the cube';
        container.appendChild( info );

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.y = 150;
        camera.position.z = 500;

        scene = new THREE.Scene();

        // Cube

        var geometryCube = new THREE.CubeGeometry( 200, 200, 200 );

        for ( var i = 0; i < geometryCube.faces.length; i ++ ) {

            geometryCube.faces[ i ].color.setHex( Math.random() * 0xffffff );

        }

        var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors } );

        cube = new THREE.Mesh( geometryCube, material );
        cube.position.y = 150;
        scene.add( cube );

        // Plane

        var geometryPlane = new THREE.PlaneGeometry( 200, 200 );
        geometryPlane.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

        var material = new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } );

        plane = new THREE.Mesh( geometryPlane, material );
        scene.add( plane );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousedown', onDocumentMouseDown, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function onDocumentMouseDown( event ) {

        event.preventDefault();

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'mouseup', onDocumentMouseUp, false );
        document.addEventListener( 'mouseout', onDocumentMouseOut, false );

        mouseXOnMouseDown = event.clientX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;

    }

    function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;

        targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

    }

    function onDocumentMouseUp( event ) {

        document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

    }

    function onDocumentMouseOut( event ) {

        document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

    }

    function onDocumentTouchStart( event ) {

        if ( event.touches.length === 1 ) {

            event.preventDefault();

            mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
            targetRotationOnMouseDown = targetRotation;

        }

    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length === 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        plane.rotation.y = cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_geometry_hierarchy.html

()=>{
    var container, stats;

    var camera, scene, renderer;

    var geometry, group;

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 500;

        scene = new THREE.Scene();

        var geometry = new THREE.CubeGeometry( 100, 100, 100 );
        var material = new THREE.MeshNormalMaterial();

        group = new THREE.Object3D();

        for ( var i = 0; i < 200; i ++ ) {

            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = Math.random() * 2000 - 1000;
            mesh.position.y = Math.random() * 2000 - 1000;
            mesh.position.z = Math.random() * 2000 - 1000;
            mesh.rotation.x = Math.random() * 2 * Math.PI;
            mesh.rotation.y = Math.random() * 2 * Math.PI;
            mesh.matrixAutoUpdate = false;
            mesh.updateMatrix();
            group.add( mesh );

        }

        scene.add( group );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.sortObjects = false;
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove(event) {

        mouseX = ( event.clientX - windowHalfX ) * 10;
        mouseY = ( event.clientY - windowHalfY ) * 10;

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY - camera.position.y ) * .05;
        camera.lookAt( scene.position );

        var currentSeconds = Date.now();
        group.rotation.x = Math.sin( currentSeconds * 0.0007 ) * 0.5;
        group.rotation.y = Math.sin( currentSeconds * 0.0003 ) * 0.5;
        group.rotation.z = Math.sin( currentSeconds * 0.0002 ) * 0.5;

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_geometry_panorama.html

()=>{
    var camera, scene, renderer;

    var texture_placeholder,
    isUserInteracting = false,
    onPointerDownPointerX = 0, onPointerDownPointerY = 0,
    lon = 90, onPointerDownLon = 0,
    lat = 0, onPointerDownLat = 0,
    phi = 0, theta = 0,
    target = new THREE.Vector3();

    init();

    function init() {

        var container, mesh;

        container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );

        scene = new THREE.Scene();

        texture_placeholder = document.createElement( 'canvas' );
        texture_placeholder.width = 128;
        texture_placeholder.height = 128;

        var context = texture_placeholder.getContext( '2d' );
        context.fillStyle = 'rgb( 200, 200, 200 )';
        context.fillRect( 0, 0, texture_placeholder.width, texture_placeholder.height );

        var materials = [

            loadTexture( 'textures/cube/skybox/px.jpg' ), // right
            loadTexture( 'textures/cube/skybox/nx.jpg' ), // left
            loadTexture( 'textures/cube/skybox/py.jpg' ), // top
            loadTexture( 'textures/cube/skybox/ny.jpg' ), // bottom
            loadTexture( 'textures/cube/skybox/pz.jpg' ), // back
            loadTexture( 'textures/cube/skybox/nz.jpg' )  // front

        ];

        mesh = new THREE.Mesh( new THREE.CubeGeometry( 300, 300, 300, 7, 7, 7 ), new THREE.MeshFaceMaterial( materials ) );
        mesh.scale.x = - 1;
        scene.add( mesh );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        document.addEventListener( 'mousedown', onDocumentMouseDown, false );
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'mouseup', onDocumentMouseUp, false );
        document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );

        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

    }

    function loadTexture( path ) {

        var texture = new THREE.Texture( texture_placeholder );
        var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: true } );

        var image = new Image();
        image.onload = function () {

            texture.needsUpdate = true;
            material.map.image = this;

            render();

        };
        image.src = path;

        return material;

    }

    function onDocumentMouseDown( event ) {

        event.preventDefault();

        isUserInteracting = true;

        onPointerDownPointerX = event.clientX;
        onPointerDownPointerY = event.clientY;

        onPointerDownLon = lon;
        onPointerDownLat = lat;

    }

    function onDocumentMouseMove( event ) {

        if ( isUserInteracting ) {

            lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
            lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
            render();

        }

    }

    function onDocumentMouseUp( event ) {

        isUserInteracting = false;
        render();

    }

    function onDocumentMouseWheel( event ) {

        camera.fov -= event.wheelDeltaY * 0.05;
        camera.updateProjectionMatrix();

        render();

    }


    function onDocumentTouchStart( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            onPointerDownPointerX = event.touches[ 0 ].pageX;
            onPointerDownPointerY = event.touches[ 0 ].pageY;

            onPointerDownLon = lon;
            onPointerDownLat = lat;

        }

    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            lon = ( onPointerDownPointerX - event.touches[0].pageX ) * 0.1 + onPointerDownLon;
            lat = ( event.touches[0].pageY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;

            render();

        }

    }

    function render() {

        lat = Math.max( - 85, Math.min( 85, lat ) );
        phi = THREE.Math.degToRad( 90 - lat );
        theta = THREE.Math.degToRad( lon );

        target.x = 500 * Math.sin( phi ) * Math.cos( theta );
        target.y = 500 * Math.cos( phi );
        target.z = 500 * Math.sin( phi ) * Math.sin( theta );

        camera.lookAt( target );

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_geometry_panorama_fisheye.html

()=>{
    var camera, scene, renderer;

    var texture_placeholder,
    isUserInteracting = false,
    onPointerDownPointerX = 0, onPointerDownPointerY = 0,
    lon = 90, onPointerDownLon = 0,
    lat = 0, onPointerDownLat = 0,
    phi = 0, theta = 0,
    target = new THREE.Vector3();

    init();

    function init() {

        var container, mesh;

        container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );

        scene = new THREE.Scene();

        texture_placeholder = document.createElement( 'canvas' );
        texture_placeholder.width = 128;
        texture_placeholder.height = 128;

        var context = texture_placeholder.getContext( '2d' );
        context.fillStyle = 'rgb( 200, 200, 200 )';
        context.fillRect( 0, 0, texture_placeholder.width, texture_placeholder.height );

        var materials = [

            loadTexture( 'textures/cube/skybox/px.jpg' ), // right
            loadTexture( 'textures/cube/skybox/nx.jpg' ), // left
            loadTexture( 'textures/cube/skybox/py.jpg' ), // top
            loadTexture( 'textures/cube/skybox/ny.jpg' ), // bottom
            loadTexture( 'textures/cube/skybox/pz.jpg' ), // back
            loadTexture( 'textures/cube/skybox/nz.jpg' ) // front

        ];

        mesh = new THREE.Mesh( new THREE.CubeGeometry( 300, 300, 300, 7, 7, 7 ), new THREE.MeshFaceMaterial( materials ) );
        mesh.scale.x = - 1;
        scene.add( mesh );

        for ( var i = 0, l = mesh.geometry.vertices.length; i < l; i ++ ) {

            var vertex = mesh.geometry.vertices[ i ];

            vertex.normalize();
            vertex.multiplyScalar( 550 );

        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        document.addEventListener( 'mousedown', onDocumentMouseDown, false );
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'mouseup', onDocumentMouseUp, false );
        document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );
        document.addEventListener( 'DOMMouseScroll', onDocumentMouseWheel, false);

        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

    }

    function loadTexture( path ) {

        var texture = new THREE.Texture( texture_placeholder );
        var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: true } );

        var image = new Image();
        image.onload = function () {

            texture.needsUpdate = true;
            material.map.image = this;

            render();

        };
        image.src = path;

        return material;

    }

    function onDocumentMouseDown( event ) {

        event.preventDefault();

        isUserInteracting = true;

        onPointerDownPointerX = event.clientX;
        onPointerDownPointerY = event.clientY;

        onPointerDownLon = lon;
        onPointerDownLat = lat;

    }

    function onDocumentMouseMove( event ) {

        if ( isUserInteracting ) {

            lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
            lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
            render();

        }
    }

    function onDocumentMouseUp( event ) {

        isUserInteracting = false;
        render();

    }

    function onDocumentMouseWheel( event ) {

        // WebKit

        if ( event.wheelDeltaY ) {

            camera.fov -= event.wheelDeltaY * 0.05;

        // Opera / Explorer 9

        } else if ( event.wheelDelta ) {

            camera.fov -= event.wheelDelta * 0.05;

        // Firefox

        } else if ( event.detail ) {

            camera.fov -= event.detail * 0.05;

        }

        camera.updateProjectionMatrix();

        render();

    }


    function onDocumentTouchStart( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            onPointerDownPointerX = event.touches[ 0 ].pageX;
            onPointerDownPointerY = event.touches[ 0 ].pageY;

            onPointerDownLon = lon;
            onPointerDownLat = lat;

        }

    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            lon = ( onPointerDownPointerX - event.touches[0].pageX ) * 0.1 + onPointerDownLon;
            lat = ( event.touches[0].pageY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;

            render();

        }

    }

    function render() {

        lat = Math.max( - 85, Math.min( 85, lat ) );
        phi = THREE.Math.degToRad( 90 - lat );
        theta = THREE.Math.degToRad( lon );

        target.x = 500 * Math.sin( phi ) * Math.cos( theta );
        target.y = 500 * Math.cos( phi );
        target.z = 500 * Math.sin( phi ) * Math.sin( theta );

        camera.position.x = - target.x;
        camera.position.y = - target.y;
        camera.position.z = - target.z;
        camera.lookAt( target );

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_geometry_shapes.html

()=>{
var container, stats;

    var camera, scene, renderer;

    var text, plane;

    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;

    var mouseX = 0;
    var mouseXOnMouseDown = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var parent;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 0, 150, 500 );

        scene = new THREE.Scene();

        parent = new THREE.Object3D();
        parent.position.y = 50;
        scene.add( parent );

        function addShape( shape, color, x, y, z, rx, ry, rz, s ) {

            // flat shape

            var geometry = new THREE.ShapeGeometry( shape );
            var materialMesh = new THREE.MeshBasicMaterial( { color: color, overdraw: true } );

            var mesh = new THREE.Mesh( geometry, materialMesh );
            mesh.position.set( x, y, z );
            mesh.rotation.set( rx, ry, rz );
            mesh.scale.set( s, s, s );
            parent.add( mesh );

            // line

            geometry = shape.createPointsGeometry();
            var materialLine = new THREE.LineBasicMaterial( { linewidth: 10, color: 0x333333, transparent: true } );

            var line = new THREE.Line( geometry, materialLine );
            line.position.set( x, y, z );
            line.rotation.set( rx, ry, rz );
            line.scale.set( s, s, s );
            parent.add( line );

        }


        // California

        var californiaPts = [];

        californiaPts.push( new THREE.Vector2 ( 610, 320 ) );
        californiaPts.push( new THREE.Vector2 ( 450, 300 ) );
        californiaPts.push( new THREE.Vector2 ( 392, 392 ) );
        californiaPts.push( new THREE.Vector2 ( 266, 438 ) );
        californiaPts.push( new THREE.Vector2 ( 190, 570 ) );
        californiaPts.push( new THREE.Vector2 ( 190, 600 ) );
        californiaPts.push( new THREE.Vector2 ( 160, 620 ) );
        californiaPts.push( new THREE.Vector2 ( 160, 650 ) );
        californiaPts.push( new THREE.Vector2 ( 180, 640 ) );
        californiaPts.push( new THREE.Vector2 ( 165, 680 ) );
        californiaPts.push( new THREE.Vector2 ( 150, 670 ) );
        californiaPts.push( new THREE.Vector2 (  90, 737 ) );
        californiaPts.push( new THREE.Vector2 (  80, 795 ) );
        californiaPts.push( new THREE.Vector2 (  50, 835 ) );
        californiaPts.push( new THREE.Vector2 (  64, 870 ) );
        californiaPts.push( new THREE.Vector2 (  60, 945 ) );
        californiaPts.push( new THREE.Vector2 ( 300, 945 ) );
        californiaPts.push( new THREE.Vector2 ( 300, 743 ) );
        californiaPts.push( new THREE.Vector2 ( 600, 473 ) );
        californiaPts.push( new THREE.Vector2 ( 626, 425 ) );
        californiaPts.push( new THREE.Vector2 ( 600, 370 ) );
        californiaPts.push( new THREE.Vector2 ( 610, 320 ) );

        var californiaShape = new THREE.Shape( californiaPts );


        // Triangle

        var triangleShape = new THREE.Shape();
        triangleShape.moveTo(  80, 20 );
        triangleShape.lineTo(  40, 80 );
        triangleShape.lineTo( 120, 80 );
        triangleShape.lineTo(  80, 20 ); // close path


        // Heart

        var x = 0, y = 0;

        var heartShape = new THREE.Shape(); // From http://blog.burlock.org/html5/130-paths

        heartShape.moveTo( x + 25, y + 25 );
        heartShape.bezierCurveTo( x + 25, y + 25, x + 20, y, x, y );
        heartShape.bezierCurveTo( x - 30, y, x - 30, y + 35,x - 30,y + 35 );
        heartShape.bezierCurveTo( x - 30, y + 55, x - 10, y + 77, x + 25, y + 95 );
        heartShape.bezierCurveTo( x + 60, y + 77, x + 80, y + 55, x + 80, y + 35 );
        heartShape.bezierCurveTo( x + 80, y + 35, x + 80, y, x + 50, y );
        heartShape.bezierCurveTo( x + 35, y, x + 25, y + 25, x + 25, y + 25 );


        // Square

        var sqLength = 80;

        var squareShape = new THREE.Shape();
        squareShape.moveTo( 0,0 );
        squareShape.lineTo( 0, sqLength );
        squareShape.lineTo( sqLength, sqLength );
        squareShape.lineTo( sqLength, 0 );
        squareShape.lineTo( 0, 0 );


        // Rectangle

        var rectLength = 120, rectWidth = 40;

        var rectShape = new THREE.Shape();
        rectShape.moveTo( 0,0 );
        rectShape.lineTo( 0, rectWidth );
        rectShape.lineTo( rectLength, rectWidth );
        rectShape.lineTo( rectLength, 0 );
        rectShape.lineTo( 0, 0 );


        // Rounded rectangle

        var roundedRectShape = new THREE.Shape();

        ( function roundedRect( ctx, x, y, width, height, radius ){

            ctx.moveTo( x, y + radius );
            ctx.lineTo( x, y + height - radius );
            ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
            ctx.lineTo( x + width - radius, y + height) ;
            ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
            ctx.lineTo( x + width, y + radius );
            ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
            ctx.lineTo( x + radius, y );
            ctx.quadraticCurveTo( x, y, x, y + radius );

        } )( roundedRectShape, 0, 0, 50, 50, 20 );


        // Circle

        var circleRadius = 40;
        var circleShape = new THREE.Shape();
        circleShape.moveTo( 0, circleRadius );
        circleShape.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 );
        circleShape.quadraticCurveTo( circleRadius, -circleRadius, 0, -circleRadius );
        circleShape.quadraticCurveTo( -circleRadius, -circleRadius, -circleRadius, 0 );
        circleShape.quadraticCurveTo( -circleRadius, circleRadius, 0, circleRadius );


        // Fish

        x = y = 0;

        var fishShape = new THREE.Shape();

        fishShape.moveTo(x,y);
        fishShape.quadraticCurveTo(x + 50, y - 80, x + 90, y - 10);
        fishShape.quadraticCurveTo(x + 100, y - 10, x + 115, y - 40);
        fishShape.quadraticCurveTo(x + 115, y, x + 115, y + 40);
        fishShape.quadraticCurveTo(x + 100, y + 10, x + 90, y + 10);
        fishShape.quadraticCurveTo(x + 50, y + 80, x, y);


        // Arc circle

        var arcShape = new THREE.Shape();
        arcShape.moveTo( 50, 10 );
        arcShape.absarc( 10, 10, 40, 0, Math.PI*2, false );

        var holePath = new THREE.Path();
        holePath.moveTo( 20, 10 );
        holePath.absarc( 10, 10, 10, 0, Math.PI*2, true );
        arcShape.holes.push( holePath );


        // Smiley

        var smileyShape = new THREE.Shape();
        smileyShape.moveTo( 80, 40 );
        smileyShape.absarc( 40, 40, 40, 0, Math.PI*2, false );

        var smileyEye1Path = new THREE.Path();
        smileyEye1Path.moveTo( 35, 20 );
        // smileyEye1Path.absarc( 25, 20, 10, 0, Math.PI*2, true );
        smileyEye1Path.absellipse( 25, 20, 10, 10, 0, Math.PI*2, true );

        smileyShape.holes.push( smileyEye1Path );

        var smileyEye2Path = new THREE.Path();
        smileyEye2Path.moveTo( 65, 20 );
        smileyEye2Path.absarc( 55, 20, 10, 0, Math.PI*2, true );
        smileyShape.holes.push( smileyEye2Path );

        var smileyMouthPath = new THREE.Path();
        // ugly box mouth
        // smileyMouthPath.moveTo( 20, 40 );
        // smileyMouthPath.lineTo( 60, 40 );
        // smileyMouthPath.lineTo( 60, 60 );
        // smileyMouthPath.lineTo( 20, 60 );
        // smileyMouthPath.lineTo( 20, 40 );

        smileyMouthPath.moveTo( 20, 40 );
        smileyMouthPath.quadraticCurveTo( 40, 60, 60, 40 );
        smileyMouthPath.bezierCurveTo( 70, 45, 70, 50, 60, 60 );
        smileyMouthPath.quadraticCurveTo( 40, 80, 20, 60 );
        smileyMouthPath.quadraticCurveTo( 5, 50, 20, 40 );

        smileyShape.holes.push( smileyMouthPath );


        // Spline shape + path extrusion

        var splinepts = [];
        splinepts.push( new THREE.Vector2 ( 350, 100 ) );
        splinepts.push( new THREE.Vector2 ( 400, 450 ) );
        splinepts.push( new THREE.Vector2 ( -140, 350 ) );
        splinepts.push( new THREE.Vector2 ( 0, 0 ) );

        var splineShape = new THREE.Shape(  );
        splineShape.moveTo( 0, 0 );
        splineShape.splineThru( splinepts );


        // addShape( shape, color, x, y, z, rx, ry,rz, s );

        addShape( californiaShape, 0xffaa00, -300, -100, 0, 0, 0, 0, 0.25 );
        addShape( triangleShape, 0xffee00, -180, 0, 0, 0, 0, 0, 1 );
        addShape( roundedRectShape, 0x005500, -150, 150, 0, 0, 0, 0, 1 );
        addShape( squareShape, 0x0055ff, 150, 100, 0, 0, 0, 0, 1 );
        addShape( heartShape, 0xff1100, 60, 100, 0, 0, 0, Math.PI, 1 );
        addShape( circleShape, 0x00ff11, 120, 250, 0, 0, 0, 0, 1 );
        addShape( fishShape, 0x222222, -60, 200, 0, 0, 0, 0, 1 );
        addShape( smileyShape, 0xee00ff, -200, 250, 0, 0, 0, Math.PI, 1 );
        addShape( arcShape, 0xbb4422, 150, 0, 0, 0, 0, 0, 1 );
        addShape( splineShape, 0x888888, -50, -100, 0, 0, 0, 0, 0.2 );

        //

        renderer = new THREE.CanvasRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.sortObjects = false;
        renderer.sortElements = false;
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousedown', onDocumentMouseDown, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function onDocumentMouseDown( event ) {

        event.preventDefault();

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'mouseup', onDocumentMouseUp, false );
        document.addEventListener( 'mouseout', onDocumentMouseOut, false );

        mouseXOnMouseDown = event.clientX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;

    }

    function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;

        targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

    }

    function onDocumentMouseUp( event ) {

        document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

    }

    function onDocumentMouseOut( event ) {

        document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

    }

    function onDocumentTouchStart( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
            targetRotationOnMouseDown = targetRotation;

        }

    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        parent.rotation.y += ( targetRotation - parent.rotation.y ) * 0.05;
        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_interactive_cubes.html

()=>{
    var container, stats;
    var camera, scene, projector, renderer;
    var particleMaterial;

    var objects = [];

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        var info = document.createElement( 'div' );
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - clickable objects';
        container.appendChild( info );

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.set( 0, 300, 500 );

        scene = new THREE.Scene();

        var geometry = new THREE.CubeGeometry( 100, 100, 100 );

        for ( var i = 0; i < 10; i ++ ) {

            var object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, opacity: 0.5 } ) );
            object.position.x = Math.random() * 800 - 400;
            object.position.y = Math.random() * 800 - 400;
            object.position.z = Math.random() * 800 - 400;

            object.scale.x = Math.random() * 2 + 1;
            object.scale.y = Math.random() * 2 + 1;
            object.scale.z = Math.random() * 2 + 1;

            object.rotation.x = Math.random() * 2 * Math.PI;
            object.rotation.y = Math.random() * 2 * Math.PI;
            object.rotation.z = Math.random() * 2 * Math.PI;

            scene.add( object );

            objects.push( object );

        }

        var PI2 = Math.PI * 2;
        particleMaterial = new THREE.ParticleSystemMaterial( {

            color: 0x000000,
            program: function ( context ) {

                context.beginPath();
                context.arc( 0, 0, 1, 0, PI2, true );
                context.closePath();
                context.fill();

            }

        } );

        projector = new THREE.Projector();

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousedown', onDocumentMouseDown, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseDown( event ) {

        event.preventDefault();

        var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
        projector.unprojectVector( vector, camera );

        var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

        var intersects = raycaster.intersectObjects( objects );

        if ( intersects.length > 0 ) {

            var mesh = <THREE.Mesh>intersects[ 0 ].object;
            var mat = <THREE.MeshBasicMaterial>mesh.material;
            mat.color.setHex( Math.random() * 0xffffff );

            var geometry = new THREE.Geometry();
            var particle = new THREE.ParticleSystem(geometry, particleMaterial );
            particle.position = intersects[ 0 ].point;
            particle.scale.x = particle.scale.y = 8;
            scene.add( particle );

        }

        /*
        // Parse all the faces
        for ( var i in intersects ) {

            intersects[ i ].face.material[ 0 ].color.setHex( Math.random() * 0xffffff | 0x80000000 );

        }
        */
    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    var radius = 600;
    var theta = 0;

    function render() {

        theta += 0.1;

        camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
        camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
        camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_interactive_particles.html

()=>{
    var container, stats;
    var camera, scene, projector, renderer;

    var PI2 = Math.PI * 2;

    var programFill = function ( context ) {

        context.beginPath();
        context.arc( 0, 0, 1, 0, PI2, true );
        context.closePath();
        context.fill();

    }

    var programStroke = function ( context ) {

        context.lineWidth = 0.05;
        context.beginPath();
        context.arc( 0, 0, 1, 0, PI2, true );
        context.closePath();
        context.stroke();

    }

    var mouse = { x: 0, y: 0 }, INTERSECTED;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        var info = document.createElement( 'div' );
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> canvas - interactive particles';
        container.appendChild( info );

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.set( 0, 300, 500 );

        scene = new THREE.Scene();

        for ( var i = 0; i < 100; i ++ ) {
            var geometry = new THREE.Geometry();
            var particle = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: Math.random() * 0x808080 + 0x808080, program: programStroke } ) );
            particle.position.x = Math.random() * 800 - 400;
            particle.position.y = Math.random() * 800 - 400;
            particle.position.z = Math.random() * 800 - 400;
            particle.scale.x = particle.scale.y = Math.random() * 10 + 10;
            scene.add( particle );

        }

        projector = new THREE.Projector();

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove( event ) {

        event.preventDefault();

        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    var radius = 600;
    var theta = 0;

    function render() {

        // rotate camera

        theta += 0.1;

        camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
        camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
        camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
        camera.lookAt( scene.position );

        // find intersections

        camera.updateMatrixWorld();

        var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
        projector.unprojectVector( vector, camera );

        var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

        var intersects = raycaster.intersectObjects( scene.children );

        if ( intersects.length > 0 ) {

            if ( INTERSECTED != intersects[ 0 ].object ) {

                if ( INTERSECTED ) INTERSECTED.material.program = programStroke;

                INTERSECTED = intersects[ 0 ].object;
                INTERSECTED.material.program = programFill;

            }

        } else {

            if ( INTERSECTED ) INTERSECTED.material.program = programStroke;

            INTERSECTED = null;

        }

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_camera_orthographic.html

()=>{
    var container, stats;
    var camera, scene, renderer;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        var info = document.createElement( 'div' );
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - orthographic view';
        container.appendChild( info );

        camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, - 500, 1000 );
        camera.position.x = 200;
        camera.position.y = 100;
        camera.position.z = 200;

        scene = new THREE.Scene();

        // Grid

        var size = 500, step = 50;

        var geometry = new THREE.Geometry();

        for ( var i = - size; i <= size; i += step ) {

            geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
            geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

            geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
            geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

        }

        var lineMaterial = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } );

        var line = new THREE.Line( geometry, lineMaterial );
        line.type = THREE.LinePieces;
        scene.add( line );

        // Cubes

        geometry = new THREE.CubeGeometry( 50, 50, 50 );
        var cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, overdraw: true } );

        for ( var i = 0; i < 100; i ++ ) {

            var cube = new THREE.Mesh( geometry, cubeMaterial );

            cube.scale.y = Math.floor( Math.random() * 2 + 1 );

            cube.position.x = Math.floor( ( Math.random() * 1000 - 500 ) / 50 ) * 50 + 25;
            cube.position.y = ( cube.scale.y * 50 ) / 2;
            cube.position.z = Math.floor( ( Math.random() * 1000 - 500 ) / 50 ) * 50 + 25;

            scene.add( cube );

        }

        // Lights

        var ambientLight = new THREE.AmbientLight( Math.random() * 0x10 );
        scene.add( ambientLight );

        var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        scene.add( directionalLight );

        var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        scene.add( directionalLight );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.left = window.innerWidth / - 2;
        camera.right = window.innerWidth / 2;
        camera.top = window.innerHeight / 2;
        camera.bottom = window.innerHeight / - 2;

        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var timer = Date.now() * 0.0001;

        camera.position.x = Math.cos( timer ) * 200;
        camera.position.z = Math.sin( timer ) * 200;
        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }

};


// https://github.com/mrdoob/three.js/blob/master/examples/canvas_interactive_voxelpainter.html

()=>{
    var container, stats;
    var camera, scene, renderer;
    var projector, plane;
    var mouse2D, mouse3D, raycaster, theta = 45,
    isShiftDown = false, isCtrlDown = false,
    target = new THREE.Vector3( 0, 200, 0 );
    var ROLLOVERED;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        var info = document.createElement( 'div' );
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - voxel painter<br><strong>click</strong>: add voxel, <strong>control + click</strong>: remove voxel, <strong>shift</strong>: rotate, <a href="javascript:save();return false;">save .png</a>';
        container.appendChild( info );

        camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.y = 800;

        scene = new THREE.Scene();

        // Grid

        var size = 500, step = 50;

        var geometry = new THREE.Geometry();

        for ( var i = - size; i <= size; i += step ) {

            geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
            geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

            geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
            geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

        }

        var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } );

        var line = new THREE.Line( geometry, material );
        line.type = THREE.LinePieces;
        scene.add( line );

        //

        projector = new THREE.Projector();

        plane = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000 ), new THREE.MeshBasicMaterial() );
        plane.rotation.x = - Math.PI / 2;
        plane.visible = false;
        scene.add( plane );

        mouse2D = new THREE.Vector3( 0, 10000, 0.5 );

        // Lights

        var ambientLight = new THREE.AmbientLight( 0x606060 );
        scene.add( ambientLight );

        var directionalLight = new THREE.DirectionalLight( 0xffffff );
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        scene.add( directionalLight );

        var directionalLight = new THREE.DirectionalLight( 0x808080 );
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        scene.add( directionalLight );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild(renderer.domElement);

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'mousedown', onDocumentMouseDown, false );
        document.addEventListener( 'keydown', onDocumentKeyDown, false );
        document.addEventListener( 'keyup', onDocumentKeyUp, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove( event ) {

        event.preventDefault();

        mouse2D.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse2D.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        var intersects = raycaster.intersectObjects( scene.children );

        if ( intersects.length > 0 ) {

            if ( ROLLOVERED ) ROLLOVERED.color.setHex( 0x00ff80 );

            ROLLOVERED = intersects[ 0 ].face;
            ROLLOVERED.color.setHex( 0xff8000 )

        }

    }

    function onDocumentMouseDown( event ) {

        event.preventDefault();

        var intersects = raycaster.intersectObjects( scene.children );

        if ( intersects.length > 0 ) {

            var interect = intersects[ 0 ];

            if ( isCtrlDown ) {

                if ( interect.object != plane ) {

                    scene.remove( interect.object );

                }

            } else {

                var normal = interect.face.normal.clone();
                normal.applyMatrix4( interect.object.matrixRotationWorld );

                var position = new THREE.Vector3().addVectors( interect.point, normal );

                var geometry = new THREE.CubeGeometry( 50, 50, 50 );

                for ( var i = 0; i < geometry.faces.length; i ++ ) {

                    geometry.faces[ i ].color.setHex( 0x00ff80 );

                }

                var material = new THREE.MeshLambertMaterial( { vertexColors: THREE.FaceColors } );

                var voxel = new THREE.Mesh( geometry, material );
                voxel.position.x = Math.floor( position.x / 50 ) * 50 + 25;
                voxel.position.y = Math.floor( position.y / 50 ) * 50 + 25;
                voxel.position.z = Math.floor( position.z / 50 ) * 50 + 25;
                voxel.matrixAutoUpdate = false;
                voxel.updateMatrix();
                scene.add( voxel );

            }

        }
    }

    function onDocumentKeyDown( event ) {

        switch( event.keyCode ) {

            case 16: isShiftDown = true; break;
            case 17: isCtrlDown = true; break;

        }

    }

    function onDocumentKeyUp( event ) {

        switch( event.keyCode ) {

            case 16: isShiftDown = false; break;
            case 17: isCtrlDown = false; break;

        }
    }

    function save() {

        window.open( renderer.domElement.toDataURL('image/png'), 'mywindow' );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        if ( isShiftDown ) {

            theta += mouse2D.x * 3;

        }

        camera.position.x = 1400 * Math.sin( theta * Math.PI / 360 );
        camera.position.z = 1400 * Math.cos( theta * Math.PI / 360 );
        camera.lookAt( target );

        raycaster = projector.pickingRay( mouse2D.clone(), camera );

        renderer.render( scene, camera );

    }  
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_lights_pointlights.html

()=>{
    var camera, scene, renderer,
    particle1, particle2, particle3,
    light1, light2, light3,
    loader, mesh;

    init();
    animate();

    function init() {

        var container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 0, - 6, 100 );

        scene = new THREE.Scene();

        scene.add( new THREE.AmbientLight( 0x00020 ) );

        light1 = new THREE.PointLight( 0xff0040, 1, 50 );
        scene.add( light1 );

        light2 = new THREE.PointLight( 0x0040ff, 1, 50 );
        scene.add( light2 );

        light3 = new THREE.PointLight( 0x80ff80, 1, 50 );
        scene.add( light3 );

        var PI2 = Math.PI * 2;
        var program = function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 1, 0, PI2, true );
            context.fill();

        }

        var geometry = new THREE.Geometry();
        particle1 = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: 0xff0040, program: program } ) );
        particle1.scale.x = particle1.scale.y = particle1.scale.z = 0.5;
        scene.add( particle1 );

        particle2 = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: 0x0040ff, program: program } ) );
        particle2.scale.x = particle2.scale.y = particle2.scale.z = 0.5;
        scene.add( particle2 );

        particle3 = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: 0x80ff80, program: program } ) );
        particle3.scale.x = particle3.scale.y = particle3.scale.z = 0.5;
        scene.add( particle3 );

        loader = new THREE.JSONLoader();
        loader.load( 'obj/WaltHeadLo.js', function ( geometry ) {

            mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, overdraw: true } ) );
            scene.add( mesh );

        } );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );
        render();

    }

    function render() {

        var time = Date.now() * 0.0005;

        if ( mesh ) mesh.rotation.y -= 0.01;

        particle1.position.x = Math.sin( time * 0.7 ) * 30;
        particle1.position.y = Math.cos( time * 0.5 ) * 40;
        particle1.position.z = Math.cos( time * 0.3 ) * 30;

        light1.position.x = particle1.position.x;
        light1.position.y = particle1.position.y;
        light1.position.z = particle1.position.z;

        particle2.position.x = Math.cos( time * 0.3 ) * 30;
        particle2.position.y = Math.sin( time * 0.5 ) * 40;
        particle2.position.z = Math.sin( time * 0.7 ) * 30;

        light2.position.x = particle2.position.x;
        light2.position.y = particle2.position.y;
        light2.position.z = particle2.position.z;

        particle3.position.x = Math.sin( time * 0.7 ) * 30;
        particle3.position.y = Math.cos( time * 0.3 ) * 40;
        particle3.position.z = Math.sin( time * 0.5 ) * 30;

        light3.position.x = particle3.position.x;
        light3.position.y = particle3.position.y;
        light3.position.z = particle3.position.z;

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_lights_pointlights_smooth.html

()=>{
    var camera, scene, renderer,
    particle1, particle2, particle3,
    light1, light2, light3,
    loader, mesh;

    init();
    animate();

    function init() {

        var container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 0, - 6, 100 );

        scene = new THREE.Scene();

        scene.add( new THREE.AmbientLight( 0x00020 ) );

        light1 = new THREE.PointLight( 0xff0040, 1, 50 );
        scene.add( light1 );

        light2 = new THREE.PointLight( 0x0040ff, 1, 50 );
        scene.add( light2 );

        light3 = new THREE.PointLight( 0x80ff80, 1, 50 );
        scene.add( light3 );

        var PI2 = Math.PI * 2;
        var program = function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 1, 0, PI2, true );
            context.fill();

        }

        var geometry = new THREE.Geometry();
        particle1 = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: 0xff0040, program: program } ) );
        particle1.scale.x = particle1.scale.y = particle1.scale.z = 0.5;
        scene.add( particle1 );

        particle2 = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: 0x0040ff, program: program } ) );
        particle2.scale.x = particle2.scale.y = particle2.scale.z = 0.5;
        scene.add( particle2 );

        particle3 = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: 0x80ff80, program: program } ) );
        particle3.scale.x = particle3.scale.y = particle3.scale.z = 0.5;
        scene.add( particle3 );

        loader = new THREE.JSONLoader();
        loader.load( 'obj/WaltHeadLo.js', function ( geometry ) {

            geometry.computeVertexNormals();

            mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0xffffff, overdraw: true } ) );
            scene.add( mesh );

        } );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();

    }

    function render() {

        var time = Date.now() * 0.0005;

        if ( mesh ) mesh.rotation.y -= 0.01;

        particle1.position.x = Math.sin( time * 0.7 ) * 30;
        particle1.position.y = Math.cos( time * 0.5 ) * 40;
        particle1.position.z = Math.cos( time * 0.3 ) * 30;

        light1.position.x = particle1.position.x;
        light1.position.y = particle1.position.y;
        light1.position.z = particle1.position.z;

        particle2.position.x = Math.cos( time * 0.3 ) * 30;
        particle2.position.y = Math.sin( time * 0.5 ) * 40;
        particle2.position.z = Math.sin( time * 0.7 ) * 30;

        light2.position.x = particle2.position.x;
        light2.position.y = particle2.position.y;
        light2.position.z = particle2.position.z;

        particle3.position.x = Math.sin( time * 0.7 ) * 30;
        particle3.position.y = Math.cos( time * 0.3 ) * 40;
        particle3.position.z = Math.sin( time * 0.5 ) * 30;

        light3.position.x = particle3.position.x;
        light3.position.y = particle3.position.y;
        light3.position.z = particle3.position.z;

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_lines.html

()=>{

    var mouseX = 0, mouseY = 0,

    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,

    SEPARATION = 200,
    AMOUNTX = 10,
    AMOUNTY = 10,

    camera, scene, renderer;

    init();
    animate();

    function init() {

        var container, separation = 100, amountX = 50, amountY = 50,
        particles, particle;

        container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 100;

        scene = new THREE.Scene();

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        // particles

        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleSystemMaterial( {

            color: 0xffffff,
            program: function ( context ) {

                context.beginPath();
                context.arc( 0, 0, 1, 0, PI2, true );
                context.closePath();
                context.fill();

            }

        } );

        var geometry = new THREE.Geometry();

        for ( var i = 0; i < 100; i ++ ) {

            particle = new THREE.ParticleSystem(geometry, material );
            particle.position.x = Math.random() * 2 - 1;
            particle.position.y = Math.random() * 2 - 1;
            particle.position.z = Math.random() * 2 - 1;
            particle.position.normalize();
            particle.position.multiplyScalar( Math.random() * 10 + 450 );
            particle.scale.x = particle.scale.y = 5;
            scene.add( particle );

            geometry.vertices.push( particle.position );

        }

        // lines

        var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
        scene.add( line );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function onDocumentMouseMove(event) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;

    }

    function onDocumentTouchStart( event ) {

        if ( event.touches.length > 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();

    }

    function render() {

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_lines_sphere.html

()=>{

    var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,

    mouseX = 0, mouseY = 0,

    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,

    SEPARATION = 200,
    AMOUNTX = 10,
    AMOUNTY = 10,

    camera, scene, renderer;

    init();
    animate();

    function init() {

        var container, separation = 100, amountX = 50, amountY = 50,
        particles, particle;

        container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        container.appendChild( renderer.domElement );

        // particles

        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleSystemMaterial( {

            color: 0xffffff,
            program: function ( context ) {

                context.beginPath();
                context.arc( 0, 0, 1, 0, PI2, true );
                context.closePath();
                context.fill();

            }

        } );

        var geometry = new THREE.Geometry();
        for ( var i = 0; i < 1000; i ++ ) {

            particle = new THREE.ParticleSystem(geometry, material );
            particle.position.x = Math.random() * 2 - 1;
            particle.position.y = Math.random() * 2 - 1;
            particle.position.z = Math.random() * 2 - 1;
            particle.position.normalize();
            particle.position.multiplyScalar( Math.random() * 10 + 450 );
            scene.add( particle );

        }

        // lines

        for (var i = 0; i < 300; i++) {

            var geometry = new THREE.Geometry();

            var vertex = new THREE.Vector3( Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1 );
            vertex.normalize();
            vertex.multiplyScalar( 450 );

            geometry.vertices.push( vertex );

            var vertex2 = vertex.clone();
            vertex2.multiplyScalar( Math.random() * 0.3 + 1 );

            geometry.vertices.push( vertex2 );

            var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: Math.random() } ) );
            scene.add( line );
        }

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function onDocumentMouseMove(event) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart( event ) {

        if ( event.touches.length > 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();

    }

    function render() {

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_materials.html

()=>{

    var container, stats;

    var camera, scene, renderer, objects;
    var particleLight, pointLight;

    init();
    animate();

    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.set( 0, 200, 800 );

        scene = new THREE.Scene();

        // Grid

        var size = 500, step = 100;

        var geometry = new THREE.Geometry();

        for ( var i = - size; i <= size; i += step ) {

            geometry.vertices.push( new THREE.Vector3( - size, - 120, i ) );
            geometry.vertices.push( new THREE.Vector3(   size, - 120, i ) );

            geometry.vertices.push( new THREE.Vector3( i, - 120, - size ) );
            geometry.vertices.push( new THREE.Vector3( i, - 120,   size ) );

        }

        var material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.2 } );

        var line = new THREE.Line( geometry, material );
        line.type = THREE.LinePieces;
        scene.add( line );

        // Spheres

        geometry = new THREE.SphereGeometry( 100, 14, 7 );

        var materials:THREE.Material[] = [

            new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true, side: THREE.DoubleSide } ),
            new THREE.MeshBasicMaterial( { color: 0xff0000, blending: THREE.AdditiveBlending, side: THREE.DoubleSide } ),
            new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide, overdraw: true } ),
            new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.SmoothShading, overdraw: true } ),
            new THREE.MeshDepthMaterial( { overdraw: true } ),
            new THREE.MeshNormalMaterial( { overdraw: true } ),
            new THREE.MeshNormalMaterial( { shading: THREE.SmoothShading, overdraw: true } ),
            new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/land_ocean_ice_cloud_2048.jpg' ) } ),
            new THREE.MeshBasicMaterial( { envMap: THREE.ImageUtils.loadTexture( 'textures/envmap.png', new THREE.SphericalReflectionMapping() ) } )

        ];

        for ( var i = 0, l = geometry.faces.length; i < l; i ++ ) {

            var face = geometry.faces[ i ];
            if ( Math.random() > 0.5 ) face.materialIndex = Math.floor( Math.random() * materials.length );

        }

        materials.push( new THREE.MeshFaceMaterial( materials ) );

        objects = [];

        for ( var i = 0, l = materials.length; i < l; i ++ ) {

            var sphere = new THREE.Mesh( geometry, <any>materials[ i ] );

            sphere.position.x = ( i % 5 ) * 200 - 400;
            sphere.position.z = Math.floor( i / 5 ) * 200 - 200;

            sphere.rotation.x = Math.random() * 200 - 100;
            sphere.rotation.y = Math.random() * 200 - 100;
            sphere.rotation.z = Math.random() * 200 - 100;

            objects.push( sphere );

            scene.add( sphere );

        }

        var PI2 = Math.PI * 2;
        var program = function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 1, 0, PI2, true );
            context.closePath();
            context.fill();

        }

        var geometry = new THREE.Geometry();
        particleLight = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: 0xffffff, program: program } ) );
        particleLight.scale.x = particleLight.scale.y = particleLight.scale.z = 4;
        scene.add( particleLight );

        // Lights

        scene.add( new THREE.AmbientLight( Math.random() * 0x202020 ) );

        var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        scene.add( directionalLight );

        pointLight = new THREE.PointLight( 0xffffff, 1 );
        scene.add( pointLight );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        var debugCanvas:HTMLCanvasElement = <HTMLCanvasElement>document.createElement( 'canvas' );
        debugCanvas.width = 512;
        debugCanvas.height = 512;
        debugCanvas.style.position = 'absolute';
        debugCanvas.style.top = '0px';
        debugCanvas.style.left = '0px';

        container.appendChild( debugCanvas );

        var debugContext = debugCanvas.getContext( '2d' );
        debugContext.setTransform( 1, 0, 0, 1, 256, 256 );
        debugContext.strokeStyle = '#000000';

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild(stats.domElement);

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function loadImage( path ) {

        var image:HTMLImageElement = <HTMLImageElement>document.createElement( 'img' );
        var texture = new THREE.Texture( image, new THREE.UVMapping() )

        image.onload = function () { texture.needsUpdate = true; };
        image.src = path;

        return texture;

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var timer = Date.now() * 0.0001;

        camera.position.x = Math.cos( timer ) * 1000;
        camera.position.z = Math.sin( timer ) * 1000;
        camera.lookAt( scene.position );

        for ( var i = 0, l = objects.length; i < l; i++ ) {

            var object = objects[ i ];

            object.rotation.x += 0.01;
            object.rotation.y += 0.005;

        }

        particleLight.position.x = Math.sin( timer * 7 ) * 300;
        particleLight.position.y = Math.cos( timer * 5 ) * 400;
        particleLight.position.z = Math.cos( timer * 3 ) * 300;

        pointLight.position.x = particleLight.position.x;
        pointLight.position.y = particleLight.position.y;
        pointLight.position.z = particleLight.position.z;

        renderer.render( scene, camera );

    }

};


// https://github.com/mrdoob/three.js/blob/master/examples/canvas_materials_depth.html

()=>{
    var container, stats;

    var camera, scene, renderer;

    var cube, plane, objects = [];

    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;

    var mouseX = 0;
    var mouseXOnMouseDown = 0;

    var moveForward = false;
    var moveBackwards = false;
    var moveLeft = false;
    var moveRight = false;
    var moveUp = false;
    var moveDown = false;

    var targetMoveLeft = false;
    var targetMoveRight = false;

    var debugContext;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.set( 1000, 1000, 1000 );
        camera.target = new THREE.Vector3( 0, 150, 0 );

        scene = new THREE.Scene();

        // Plane

        var material = new THREE.MeshDepthMaterial( { side: THREE.DoubleSide, overdraw: true } );

        plane = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000, 10, 10 ), material );
        plane.position.y = - 100;
        plane.rotation.x = - Math.PI / 2;
        scene.add( plane );

        // Cubes

        var geometry = new THREE.CubeGeometry( 100, 100, 100 );
        material = new THREE.MeshDepthMaterial( { overdraw: true } );

        for ( var i = 0; i < 20; i ++ ) {

            cube = new THREE.Mesh( geometry, material );

            cube.position.x = ( i % 5 ) * 200 - 400;
            cube.position.z = Math.floor( i / 5 ) * 200 - 350;

            cube.rotation.x = Math.random() * 200 - 100;
            cube.rotation.y = Math.random() * 200 - 100;
            cube.rotation.z = Math.random() * 200 - 100;

            scene.add( cube );

            objects.push( cube );

        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        var debugCanvas = <HTMLCanvasElement>document.createElement( 'canvas' );
        debugCanvas.width = 512;
        debugCanvas.height = 512;
        debugCanvas.style.position = 'absolute';
        debugCanvas.style.top = '0px';
        debugCanvas.style.left = '0px';

        container.appendChild( debugCanvas );

        debugContext = debugCanvas.getContext( '2d' );
        debugContext.setTransform( 1, 0, 0, 1, 256, 256 );
        debugContext.strokeStyle = '#808080';

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild(stats.domElement);

        document.addEventListener( 'keydown', onDocumentKeyDown, false );
        document.addEventListener( 'keyup', onDocumentKeyUp, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentKeyDown( event ) {

        switch ( event.keyCode ) {

            case 38: moveForward = true; break; // up
            case 40: moveBackwards = true; break; // down
            case 37: moveLeft = true; break; // left
            case 39: moveRight = true; break; // right
            case 87: moveUp = true; break; // w
            case 83: moveDown = true; break; // s
            case 65: targetMoveLeft = true; break; // a
            case 68: targetMoveRight = true; break; // d

        }

    }

    function onDocumentKeyUp( event ) {

        switch ( event.keyCode ) {

            case 38: moveForward = false; break; // up
            case 40: moveBackwards = false; break; // down
            case 37: moveLeft = false; break; // left
            case 39: moveRight = false; break; // right
            case 87: moveUp = false; break; // w
            case 83: moveDown = false; break; // s
            case 65: targetMoveLeft = false; break; // a
            case 68: targetMoveRight = false; break; // d

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        if ( moveForward ) camera.position.z -= 10;
        if ( moveBackwards ) camera.position.z += 10;

        if ( moveLeft ) camera.position.x -= 10;
        if ( moveRight ) camera.position.x += 10;

        if ( moveUp ) camera.position.y += 10;
        if ( moveDown ) camera.position.y -= 10;

        if ( targetMoveLeft ) camera.target.x -= 10;
        if ( targetMoveRight ) camera.target.x += 10;

        camera.lookAt( camera.target );

        debugContext.clearRect( - 256, - 256, 512, 512 );

        debugContext.beginPath();

        // center
        debugContext.moveTo( - 10, 0 );
        debugContext.lineTo( 10, 0 );
        debugContext.moveTo( 0, - 10 );
        debugContext.lineTo( 0, 10 );

        // camera

        debugContext.moveTo( camera.position.x * 0.1, camera.position.z * 0.1 );
        debugContext.lineTo( camera.target.x * 0.1, camera.target.z * 0.1 );
        debugContext.rect( camera.position.x * 0.1 - 5, camera.position.z * 0.1 - 5, 10, 10 );
        debugContext.rect( camera.target.x * 0.1 - 5, camera.target.z * 0.1 - 5, 10, 10 );
        debugContext.rect( - 50, - 50, 100, 100 );

        for ( var i = 0; i < objects.length; i++ ) {

            var object = objects[ i ];

            object.rotation.x += 0.01;
            object.rotation.y += 0.005;
            object.position.y = Math.sin( object.rotation.x ) * 200 + 200;

            debugContext.rect( object.position.x * 0.1 - 5, object.position.z * 0.1 - 5, 10, 10 );

        }

        debugContext.closePath();
        debugContext.stroke();

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_materials_normal.html

()=>{
    var camera, scene, renderer,
    loader, mesh;

    init();
    animate();

    function init() {

        var container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.set( 0, - 6, 100 );

        scene = new THREE.Scene();

        loader = new THREE.JSONLoader();
        loader.load( 'obj/WaltHeadLo.js', function ( geometry ) {

            mesh = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial( { overdraw: true } ) );
            scene.add( mesh );

        } );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );
        render();

    }

    function render() {

        var time = Date.now() * 0.0005;

        if ( mesh ) {

            mesh.rotation.x -= 0.005;
            mesh.rotation.y -= 0.01;

        }

        renderer.render( scene, camera );

    }
};


// https://github.com/mrdoob/three.js/blob/master/examples/canvas_materials_reflection.html

()=>{

    var camera, scene, renderer,
    particle1, particle2, particle2,
    light1, light2, light3,
    loader, mesh;

    init();
    animate();

    function init() {

        var container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 0, - 6, 100 );

        scene = new THREE.Scene();

        loader = new THREE.JSONLoader();
        loader.load( 'obj/WaltHeadLo.js', function ( geometry ) {

            geometry.computeVertexNormals();

            mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { envMap: THREE.ImageUtils.loadTexture( 'textures/metal.jpg', new THREE.SphericalReflectionMapping() ), overdraw: true } ) );
            scene.add( mesh );

        } );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();

    }

    function render() {

        var time = Date.now() * 0.0005;

        if ( mesh ) mesh.rotation.y -= 0.01;

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_materials_video.html

()=>{
    var AMOUNT = 100;

    var container, stats;

    var camera, scene, renderer;

    var video, image, imageContext,
    imageReflection, imageReflectionContext, imageReflectionGradient,
    texture, textureReflection;

    var mesh;

    var mouseX = 0;
    var mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        var info = document.createElement( 'div' );
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - video demo. playing <a href="http://durian.blender.org/" target="_blank">sintel</a> trailer';
        container.appendChild( info );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        video = document.getElementById( 'video' );

        //

        image = document.createElement( 'canvas' );
        image.width = 480;
        image.height = 204;

        imageContext = image.getContext( '2d' );
        imageContext.fillStyle = '#000000';
        imageContext.fillRect( 0, 0, 480, 204 );

        texture = new THREE.Texture( image );
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: true } );

        imageReflection = document.createElement( 'canvas' );
        imageReflection.width = 480;
        imageReflection.height = 204;

        imageReflectionContext = imageReflection.getContext( '2d' );
        imageReflectionContext.fillStyle = '#000000';
        imageReflectionContext.fillRect( 0, 0, 480, 204 );

        imageReflectionGradient = imageReflectionContext.createLinearGradient( 0, 0, 0, 204 );
        imageReflectionGradient.addColorStop( 0.2, 'rgba(240, 240, 240, 1)' );
        imageReflectionGradient.addColorStop( 1, 'rgba(240, 240, 240, 0.8)' );

        textureReflection = new THREE.Texture( imageReflection );
        textureReflection.minFilter = THREE.LinearFilter;
        textureReflection.magFilter = THREE.LinearFilter;

        var materialReflection = new THREE.MeshBasicMaterial( { map: textureReflection, side: THREE.BackSide, overdraw: true } );

        //

        var plane = new THREE.PlaneGeometry( 480, 204, 4, 4 );

        mesh = new THREE.Mesh( plane, material );
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.5;
        scene.add(mesh);

        mesh = new THREE.Mesh( plane, materialReflection );
        mesh.position.y = -306;
        mesh.rotation.x = - Math.PI;
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.5;
        scene.add( mesh );

        //

        var separation = 150;
        var amountx = 10;
        var amounty = 10;

        var PI2 = Math.PI * 2;
        var materialParticle = new THREE.ParticleSystemMaterial( {

            color: 0x0808080,
            program: function ( context ) {

                context.beginPath();
                context.arc( 0, 0, 1, 0, PI2, true );
                context.closePath();
                context.fill();

            }

        } );

        var geometry = new THREE.Geometry();
        for ( var ix = 0; ix < amountx; ix++ ) {
            for ( var iy = 0; iy < amounty; iy++ ) {
                var particle = new THREE.ParticleSystem(geometry, materialParticle );
                particle.position.x = ix * separation - ( ( amountx * separation ) / 2 );
                particle.position.y = -153
                particle.position.z = iy * separation - ( ( amounty * separation ) / 2 );
                scene.add( particle );

            }

        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove( event ) {

        mouseX = ( event.clientX - windowHalfX );
        mouseY = ( event.clientY - windowHalfY ) * 0.2;

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        camera.position.x += ( mouseX - camera.position.x ) * 0.05;
        camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
        camera.lookAt( scene.position );

        if ( video.readyState === video.HAVE_ENOUGH_DATA ) {

            imageContext.drawImage( video, 0, 0 );

            if ( texture ) texture.needsUpdate = true;
            if ( textureReflection ) textureReflection.needsUpdate = true;

        }

        imageReflectionContext.drawImage( image, 0, 0 );
        imageReflectionContext.fillStyle = imageReflectionGradient;
        imageReflectionContext.fillRect( 0, 0, 480, 204 );

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_particles_floor.html

()=>{
    var SEPARATION = 100;
    var AMOUNTX = 50;
    var AMOUNTY = 50;

    var container, stats;
    var camera, scene, renderer, particle;
    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        var material = new THREE.ParticleSystemMaterial();
        var geometry = new THREE.Geometry();
        for ( var ix = 0; ix < AMOUNTX; ix++ ) {

            for ( var iy = 0; iy < AMOUNTY; iy++ ) {

                particle = new THREE.ParticleSystem(geometry, material );
                particle.scale.y = 4;
                particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
                scene.add( particle );
            }
        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart( event ) {

        if ( event.touches.length > 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;
        }
    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;
        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY - camera.position.y ) * .05;
        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }
};


// https://github.com/mrdoob/three.js/blob/master/examples/canvas_particles_random.html

()=>{
    var container, stats;
    var camera, scene, renderer, group, particle;
    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        var PI2 = Math.PI * 2;
        var program = function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 1, 0, PI2, true );
            context.closePath();
            context.fill();

        }

        group = new THREE.Object3D();
        scene.add( group );

        var geometry = new THREE.Geometry();
        for ( var i = 0; i < 1000; i++ ) {

            particle = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: Math.random() * 0x808008 + 0x808080, program: program } ) );
            particle.position.x = Math.random() * 2000 - 1000;
            particle.position.y = Math.random() * 2000 - 1000;
            particle.position.z = Math.random() * 2000 - 1000;
            particle.scale.x = particle.scale.y = Math.random() * 10 + 5;
            group.add( particle );
        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart( event ) {

        if ( event.touches.length === 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length === 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        camera.position.x += ( mouseX - camera.position.x ) * 0.05;
        camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
        camera.lookAt( scene.position );

        group.rotation.x += 0.01;
        group.rotation.y += 0.02;

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_particles_sprites.html

() => {
    var container, stats;
    var camera, scene, renderer, particle;
    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
        camera.position.z = 1000;

        scene = new THREE.Scene();

        var material = new THREE.ParticleSystemMaterial({ map: new THREE.Texture(generateSprite()), blending: THREE.AdditiveBlending });
        var geometry = new THREE.Geometry();
        for (var i = 0; i < 1000; i++) {

            particle = new THREE.ParticleSystem(geometry, material);

            initParticle(particle, i * 10);

            scene.add(particle);
        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.sortElements = false;
        renderer.setClearColorHex(0x0000ff, 0.25);
        container.appendChild(renderer.domElement);

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild(stats.domElement);

        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('touchstart', onDocumentTouchStart, false);
        document.addEventListener('touchmove', onDocumentTouchMove, false);

        //

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function generateSprite() {

        var canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;

        var context = canvas.getContext('2d');
        var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
        gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
        gradient.addColorStop(1, 'rgba(0,0,0,1)');

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        return canvas;

    }

    function initParticle(particle, delay) {

        var particle = this instanceof THREE.ParticleSystem ? this : particle;
        var delay = delay !== undefined ? delay : 0;

        particle.position.x = 0;
        particle.position.y = 0;
        particle.position.z = 0;
        particle.scale.x = particle.scale.y = Math.random() * 3 + 1;

        new TWEEN.Tween(particle)
            .delay(delay)
            .to({}, 10000)
            .onComplete(initParticle)
            .start();

        new TWEEN.Tween(particle.position)
            .delay(delay)
            .to({ x: Math.random() * 4000 - 2000, y: Math.random() * 1000 - 500, z: Math.random() * 4000 - 2000 }, 10000)
            .start();

        new TWEEN.Tween(particle.scale)
            .delay(delay)
            .to({ x: 0, y: 0 }, 10000)
            .start();

    }

    //

    function onDocumentMouseMove(event) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart(event) {

        if (event.touches.length == 1) {

            event.preventDefault();

            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;

        }

    }

    function onDocumentTouchMove(event) {

        if (event.touches.length == 1) {

            event.preventDefault();

            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;

        }

    }

    //

    function animate() {

        requestAnimationFrame(animate);

        render();
        stats.update();

    }

    function render() {

        TWEEN.update();

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (- mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);

    }
};
() => {
    var container, stats;
    var camera, scene, renderer, particle;
    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        var material = new THREE.ParticleSystemMaterial( { map: new THREE.Texture( generateSprite() ), blending: THREE.AdditiveBlending } );
        var geometry = new THREE.Geometry();
        for ( var i = 0; i < 1000; i++ ) {

            particle = new THREE.ParticleSystem(geometry, material );

            initParticle( particle, i * 10 );

            scene.add( particle );
        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.sortElements = false;
        renderer.setClearColorHex( 0x0000ff, 0.25 );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function generateSprite() {

        var canvas = <HTMLCanvasElement>document.createElement( 'canvas' );
        canvas.width = 16;
        canvas.height = 16;

        var context = canvas.getContext( '2d' );
        var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
        gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
        gradient.addColorStop( 0.2, 'rgba(0,255,255,1)' );
        gradient.addColorStop( 0.4, 'rgba(0,0,64,1)' );
        gradient.addColorStop( 1, 'rgba(0,0,0,1)' );

        context.fillStyle = gradient;
        context.fillRect( 0, 0, canvas.width, canvas.height );

        return canvas;

    }

    function initParticle( particle, delay ) {

        var particle = this instanceof THREE.ParticleSystem ? this : particle;
        var delay = delay !== undefined ? delay : 0;

        particle.position.x = 0;
        particle.position.y = 0;
        particle.position.z = 0;
        particle.scale.x = particle.scale.y = Math.random() * 3 + 1;

        new TWEEN.Tween( particle )
            .delay( delay )
            .to( {}, 10000 )
            .onComplete( initParticle )
            .start();

        new TWEEN.Tween( particle.position )
            .delay( delay )
            .to( { x: Math.random() * 4000 - 2000, y: Math.random() * 1000 - 500, z: Math.random() * 4000 - 2000 }, 10000 )
            .start();

        new TWEEN.Tween( particle.scale )
            .delay( delay )
            .to( { x: 0, y: 0 }, 10000 )
            .start();

    }

    //

    function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        TWEEN.update();

        camera.position.x += ( mouseX - camera.position.x ) * 0.05;
        camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }

};


// https://github.com/mrdoob/three.js/blob/master/examples/canvas_particles_waves.html

()=>{
    var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

    var container, stats;
    var camera, scene, renderer;

    var particles, particle, count = 0;

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        particles = new Array();

        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleSystemMaterial( {

            color: 0xffffff,
            program: function ( context ) {

                context.beginPath();
                context.arc( 0, 0, 1, 0, PI2, true );
                context.fill();

            }

        } );

        var i = 0;
        var geometry = new THREE.Geometry();
        for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

            for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                particle = particles[ i ++ ] = new THREE.ParticleSystem(geometry, material );
                particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
                scene.add( particle );

            }

        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;

    }

    function onDocumentTouchStart( event ) {

        if ( event.touches.length === 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length === 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY - camera.position.y ) * .05;
        camera.lookAt( scene.position );

        var i = 0;

        for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

            for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                particle = particles[ i++ ];
                particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
                particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;

            }

        }

        renderer.render( scene, camera );

        count += 0.1;

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_performance.html

()=>{
    var container, stats;

    var camera, scene, renderer;

    var sphere, plane;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.set( 0, 1000, 1000 );

        scene = new THREE.Scene();

        // Grid

        var size = 500, step = 100;

        var geometry = new THREE.Geometry();

        for ( var i = - size; i <= size; i += step ) {

            geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
            geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

            geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
            geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

        }

        var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.5 } );

        var line = new THREE.Line( geometry, material );
        line.type = THREE.LinePieces;
        scene.add( line );

        // Spheres

        geometry = new THREE.SphereGeometry( 100, 26, 18 );
        var materialLambert = new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, overdraw: true } );

        for ( var i = 0; i < 20; i ++ ) {

            sphere = new THREE.Mesh( geometry, materialLambert );

            sphere.position.x = ( i % 5 ) * 200 - 400;
            sphere.position.z = Math.floor( i / 5 ) * 200 - 400;

            scene.add( sphere );

        }

        // Lights

        var ambientLight = new THREE.AmbientLight( Math.random() * 0x202020 );
        scene.add( ambientLight );

        var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
        directionalLight.position.set( 0, 1, 0 );
        scene.add( directionalLight );

        var pointLight = new THREE.PointLight( 0xff0000, 1, 500 );
        scene.add( pointLight );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild(stats.domElement);

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }
};


// https://github.com/mrdoob/three.js/blob/master/examples/canvas_sandbox.html

()=>{
    var container, stats;

    var camera, scene, renderer, objects;
    var pointLight;

    var sphere;

    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;

    var mouseX = 0;
    var mouseXOnMouseDown = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var moveForward = false;
    var moveBackwards = false;
    var moveLeft = false;
    var moveRight = false;
    var moveUp = false;
    var moveDown = false;

    var targetMoveLeft = false;
    var targetMoveRight = false;

    var debugContext;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.set( 0, 150, 400 );
        camera.target = new THREE.Vector3( 0, 150, 0 );

        scene = new THREE.Scene();


        // Grid

        var size = 500, step = 100;

        var geometry = new THREE.Geometry();

        for ( var i = - size; i <= size; i += step ) {

            geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
            geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

            geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
            geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

        }

        var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.5 } );

        var line = new THREE.Line( geometry, material );
        line.type = THREE.LinePieces;
        scene.add( line );

        // Spheres

        objects = [];

        geometry = new THREE.IcosahedronGeometry( 100, 1 );

        var materialBasic = new THREE.MeshBasicMaterial( { envMap: THREE.ImageUtils.loadTexture( 'textures/metal.jpg', new THREE.SphericalReflectionMapping() ), overdraw: true } );

        for ( var i = 0; i < 10; i ++ ) {

            sphere = new THREE.Mesh( geometry, materialBasic );

            sphere.position.x = Math.random() * 1000 - 500;
            sphere.position.y = Math.random() * 1000 - 500;
            sphere.position.z = Math.random() * 1000 - 500;

            sphere.rotation.x = Math.random() * 200 - 100;
            sphere.rotation.y = Math.random() * 200 - 100;
            sphere.rotation.z = Math.random() * 200 - 100;

            sphere.scale.x = sphere.scale.y = sphere.scale.z = Math.random() + 0.5;

            objects.push( sphere );

            scene.add( sphere );

        }

        // Lights

        var ambientLight = new THREE.AmbientLight( Math.random() * 0x202020 );
        scene.add( ambientLight );

        var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        scene.add( directionalLight );

        pointLight = new THREE.PointLight( 0xff0000, 1 );
        scene.add( pointLight );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        var debugCanvas = <HTMLCanvasElement>document.createElement( 'canvas' );
        debugCanvas.width = 512;
        debugCanvas.height = 512;
        debugCanvas.style.position = 'absolute';
        debugCanvas.style.top = '0px';
        debugCanvas.style.left = '0px';

        container.appendChild( debugCanvas );

        debugContext = debugCanvas.getContext( '2d' );
        debugContext.setTransform( 1, 0, 0, 1, 256, 256 );
        debugContext.strokeStyle = '#000000';

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild(stats.domElement);

        document.addEventListener( 'keydown', onDocumentKeyDown, false );
        document.addEventListener( 'keyup', onDocumentKeyUp, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentKeyDown( event ) {

        switch ( event.keyCode ) {

            case 38: moveForward = true; break; // up
            case 40: moveBackwards = true; break; // down
            case 37: moveLeft = true; break; // left
            case 39: moveRight = true; break; // right
            case 87: moveUp = true; break; // w
            case 83: moveDown = true; break; // s
            case 65: targetMoveLeft = true; break; // a
            case 68: targetMoveRight = true; break; // d

        }

    }

    function onDocumentKeyUp( event ) {

        switch ( event.keyCode ) {

            case 38: moveForward = false; break; // up
            case 40: moveBackwards = false; break; // down
            case 37: moveLeft = false; break; // left
            case 39: moveRight = false; break; // right
            case 87: moveUp = false; break; // w
            case 83: moveDown = false; break; // s
            case 65: targetMoveLeft = false; break; // a
            case 68: targetMoveRight = false; break; // d

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        if ( moveForward ) camera.position.z -= 10;
        if ( moveBackwards ) camera.position.z += 10;

        if ( moveLeft ) camera.position.x -= 10;
        if ( moveRight ) camera.position.x += 10;

        if ( moveUp ) camera.position.y += 10;
        if ( moveDown ) camera.position.y -= 10;

        if ( targetMoveLeft ) camera.target.x -= 10;
        if ( targetMoveRight ) camera.target.x += 10;

        camera.lookAt( camera.target );

        debugContext.clearRect( -256, -256, 512, 512 );

        debugContext.beginPath();

        // center
        debugContext.moveTo( -10, 0 );
        debugContext.lineTo( 10, 0 );
        debugContext.moveTo( 0, -10 );
        debugContext.lineTo( 0, 10 );

        // camera

        debugContext.moveTo( camera.position.x * 0.1, camera.position.z * 0.1 );
        debugContext.lineTo( camera.target.x * 0.1, camera.target.z * 0.1 );
        debugContext.rect( camera.position.x * 0.1 - 5, camera.position.z * 0.1 - 5, 10, 10 );
        debugContext.rect( camera.target.x * 0.1 - 5, camera.target.z * 0.1 - 5, 10, 10 );
        debugContext.rect( - 50, - 50, 100, 100 );

        for ( var i = 0, l = objects.length; i < l; i++ ) {

            var object = objects[ i ];

            object.rotation.x += 0.01;
            object.rotation.y += 0.005;
            object.position.y = Math.sin( object.rotation.x ) * 200;

            debugContext.rect( object.position.x * 0.1 - 5, object.position.z * 0.1 - 5, 10, 10 );

        }


        debugContext.closePath();
        debugContext.stroke();

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/css3d_molecules.html

()=>{
    var camera, scene, renderer;
    var controls;
    var root;

    var objects = [];
    var tmpVec1 = new THREE.Vector3();
    var tmpVec2 = new THREE.Vector3();
    var tmpVec3 = new THREE.Vector3();
    var tmpVec4 = new THREE.Vector3();

    var visualizationType = 2;

    var MOLECULES = {
        "Ethanol"   :"ethanol.pdb",
        "Aspirin"   :"aspirin.pdb",
        "Caffeine"  :"caffeine.pdb",
        "Nicotine"  :"nicotine.pdb",
        "LSD"       :"lsd.pdb",
        "Cocaine"       :"cocaine.pdb",
        "Cholesterol"  :"cholesterol.pdb",
        "Lycopene"  :"lycopene.pdb",
        "Glucose"   : "glucose.pdb",
        "Aluminium oxide":"Al2O3.pdb",
        "Cubane"    :"cubane.pdb",
        "Copper"    :"cu.pdb",
        "Fluorite"  :"caf2.pdb",
        "Salt"      :"nacl.pdb",
        "YBCO superconductor":"ybco.pdb",
        "Buckyball" : "buckyball.pdb",
        //"Diamond"   :"diamond.pdb",
        "Graphite"  :"graphite.pdb"
    };

    var loader = new THREE.PDBLoader();
    var colorSpriteMap = {};
    var baseSprite = <HTMLImageElement>document.createElement( 'img' );

    var menu = document.getElementById( "menu" );

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 5000 );
        camera.position.z = 1500;

        scene = new THREE.Scene();

        root = new THREE.Object3D();
        scene.add( root );

        //

        renderer = new THREE.CSS3DRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.getElementById( 'container' ).appendChild( renderer.domElement );

        //

        controls = new THREE.TrackballControls( camera, renderer.domElement );
        controls.rotateSpeed = 0.5;
        controls.addEventListener( 'change', render );

        //

        baseSprite.onload = function () {

            loadMolecule( "models/molecules/caffeine.pdb" );
            createMenu();

        };

        baseSprite.src = 'textures/sprites/ball.png';

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    //

    function generateButtonCallback( url ) {

        return function ( event ) {

            loadMolecule( url );

        }

    }

    function createMenu() {

        for ( var m in MOLECULES ) {

            var button = document.createElement( 'button' );
            button.innerHTML = m;
            menu.appendChild( button );

            var url = "models/molecules/" +  MOLECULES[ m ];

            button.addEventListener( 'click', generateButtonCallback( url ), false );

        }

        var b_a = document.getElementById( "b_a" );
        var b_b = document.getElementById( "b_b" );
        var b_ab = document.getElementById( "b_ab" );

        b_a.addEventListener( 'click', function() { visualizationType = 0; showAtoms() } );
        b_b.addEventListener( 'click', function() { visualizationType = 1; showBonds() } );
        b_ab.addEventListener( 'click', function() { visualizationType = 2; showAtomsBonds() } );

    }

    //

    function showAtoms() {

        for ( var i = 0; i < objects.length; i ++ ) {

            var object = objects[ i ];

            if ( object instanceof THREE.CSS3DSprite ) {

                object.element.style.display = "";
                object.visible = true;

            } else {

                object.element.style.display = "none";
                object.visible = false;

            }

        }

    }

    function showBonds() {

        for ( var i = 0; i < objects.length; i ++ ) {

            var object = objects[ i ];

            if ( object instanceof THREE.CSS3DSprite ) {

                object.element.style.display = "none";
                object.visible = false;

            } else {

                object.element.style.display = "";
                object.element.style.height = object.properties.bondLengthFull;
                object.visible = true;

            }

        }

    }

    function showAtomsBonds() {

        for ( var i = 0; i < objects.length; i ++ ) {

            var object = objects[ i ];

            object.element.style.display = "";
            object.visible = true;

            if ( ! ( object instanceof THREE.CSS3DSprite ) ) {

                object.element.style.height = object.properties.bondLengthShort;

            }

        }

    }

    //

    function colorify( ctx, width, height, color, a ) {

        var r = color.r;
        var g = color.g;
        var b = color.b;

        var imageData = ctx.getImageData( 0, 0, width, height );
        var data = imageData.data;

        for ( var y = 0; y < height; y ++ ) {

            for ( var x = 0; x < width; x ++ ) {

                var index = ( y * width + x ) * 4;

                data[ index ]     *= r;
                data[ index + 1 ] *= g;
                data[ index + 2 ] *= b;
                data[ index + 3 ] *= a;

            }

        }

        ctx.putImageData( imageData, 0, 0 );

    }

    function imageToCanvas( image ) {

        var width = image.width;
        var height = image.height;

        var canvas = <HTMLCanvasElement>document.createElement( 'canvas' );

        canvas.width = width;
        canvas.height = height;

        var context = canvas.getContext( '2d' );
        context.drawImage( image, 0, 0, width, height );

        return canvas;

    }

    //

    function loadMolecule( url ) {

        for ( var i = 0; i < objects.length; i ++ ) {

            var object = objects[ i ];

            object.parent.remove( object );

            if ( object.element.parentNode === renderer.cameraElement ) {

                renderer.cameraElement.removeChild( object.element );

            }

            if ( object.properties.joint ) {

                object.properties.joint.parent.remove( object.properties.joint );

            }

        }

        objects = [];

        loader.load( url, function ( geometry, geometryBonds ) {

            var offset = THREE.GeometryUtils.center( geometry );
            geometryBonds.applyMatrix( new THREE.Matrix4().makeTranslation( offset.x, offset.y, offset.z ) );

            for ( var i = 0; i < geometry.vertices.length; i ++ ) {

                var position = geometry.vertices[ i ];
                var color = geometry.colors[ i ];
                var element = geometry.elements[ i ];

                if ( ! colorSpriteMap[ element ] ) {

                    var canvas = imageToCanvas( baseSprite );
                    var context = canvas.getContext( '2d' );

                    colorify( context, canvas.width, canvas.height, color, 1 );

                    var dataUrl = canvas.toDataURL();

                    colorSpriteMap[ element ] = dataUrl;

                }

                var colorSprite = colorSpriteMap[ element ];

                var atom = <HTMLImageElement>document.createElement( 'img' );
                atom.src = colorSprite;

                var object = new THREE.CSS3DSprite( atom );
                object.position.copy( position );
                object.position.multiplyScalar( 75 );
                object.billboard = true;

                object.matrixAutoUpdate = false;
                object.updateMatrix();

                root.add( object );

                objects.push( object );

            }

            for ( var i = 0; i < geometryBonds.vertices.length; i += 2 ) {

                var start = geometryBonds.vertices[ i ];
                var end = geometryBonds.vertices[ i + 1 ];

                start.multiplyScalar( 75 );
                end.multiplyScalar( 75 );

                tmpVec1.subVectors( end, start );
                var bondLength = tmpVec1.length() - 50;


                //

                var bond = document.createElement( 'div' );
                bond.className = "bond";
                bond.style.height = bondLength + "px";

                var object = new THREE.CSS3DObject( bond );
                object.position.copy( start );
                object.position.lerp( end, 0.5 );

                object.properties.bondLengthShort = bondLength + "px";
                object.properties.bondLengthFull = ( bondLength + 55 ) + "px";

                //

                var axis = tmpVec2.set( 0, 1, 0 ).cross( tmpVec1 );
                var radians = Math.acos( tmpVec3.set( 0, 1, 0 ).dot( tmpVec4.copy( tmpVec1 ).normalize() ) );

                var objMatrix = new THREE.Matrix4().makeRotationAxis( axis.normalize(), radians );
                object.matrix = objMatrix;
                object.rotation.setEulerFromRotationMatrix( object.matrix, object.eulerOrder );

                object.matrixAutoUpdate = false;
                object.updateMatrix();

                root.add( object );

                objects.push( object );

                //

                var bond = document.createElement( 'div' );
                bond.className = "bond";
                bond.style.height = bondLength + "px";

    
                // three-tests/ts:
                // var joint = new THREE.Object3D( bond );
                // It seems a parameter "bond" is not used by Object3D.
                var joint = new THREE.Object3D();
                

                joint.position.copy( start );
                joint.position.lerp( end, 0.5 );

                joint.matrix.copy(objMatrix);
                joint.rotation = new THREE.Euler().setFromRotationMatrix(joint.matrix, joint.eulerOrder);

                joint.matrixAutoUpdate = false;
                joint.updateMatrix();

                var object = new THREE.CSS3DObject( bond );
                object.rotation.y = Math.PI/2;

                object.matrixAutoUpdate = false;
                object.updateMatrix();

                object.properties.bondLengthShort = bondLength + "px";
                object.properties.bondLengthFull = ( bondLength + 55 ) + "px";

                object.properties.joint = joint;

                joint.add( object );
                root.add( joint );

                objects.push( object );

            }

            //console.log( "CSS3DObjects:", objects.length );

            switch ( visualizationType ) {

                case 0: showAtoms(); break;
                case 1: showBonds(); break;
                case 2: showAtomsBonds(); break;

            }

            render();

        } );


    }

    //

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

    }

    function animate() {

        requestAnimationFrame( animate );
        controls.update();

        var time = Date.now() * 0.0004;

        root.rotation.x = time;
        root.rotation.y = time * 0.7;

        render();

    }

    function render() {

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/css3d_panorama.html

()=>{
    var camera, scene, renderer;
    var geometry, material, mesh;
    var target = new THREE.Vector3();

    var lon = 90, lat = 0;
    var phi = 0, theta = 0;

    var touchX, touchY;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

        scene = new THREE.Scene();

        var sides = [
            {
                url: 'textures/cube/Bridge2/posx.jpg',
                position: new THREE.Vector3( -512, 0, 0 ),
                rotation: new THREE.Vector3( 0, Math.PI / 2, 0 )
            },
            {
                url: 'textures/cube/Bridge2/negx.jpg',
                position: new THREE.Vector3( 512, 0, 0 ),
                rotation: new THREE.Vector3( 0, -Math.PI / 2, 0 )
            },
            {
                url: 'textures/cube/Bridge2/posy.jpg',
                position: new THREE.Vector3( 0,  512, 0 ),
                rotation: new THREE.Vector3( Math.PI / 2, 0, Math.PI )
            },
            {
                url: 'textures/cube/Bridge2/negy.jpg',
                position: new THREE.Vector3( 0, -512, 0 ),
                rotation: new THREE.Vector3( - Math.PI / 2, 0, Math.PI )
            },
            {
                url: 'textures/cube/Bridge2/posz.jpg',
                position: new THREE.Vector3( 0, 0,  512 ),
                rotation: new THREE.Vector3( 0, Math.PI, 0 )
            },
            {
                url: 'textures/cube/Bridge2/negz.jpg',
                position: new THREE.Vector3( 0, 0, -512 ),
                rotation: new THREE.Vector3( 0, 0, 0 )
            }
        ];

        for ( var i = 0; i < sides.length; i ++ ) {

            var side = sides[ i ];

            var element = <HTMLImageElement>document.createElement( 'img' );
            element.width = 1026; // 2 pixels extra to close the gap.
            element.src = side.url;

            var object = new THREE.CSS3DObject( element );
            object.position = side.position;
            object.rotation = side.rotation;
            scene.add( object );

        }

        renderer = new THREE.CSS3DRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        //

        document.addEventListener( 'mousedown', onDocumentMouseDown, false );
        document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );

        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseDown( event ) {

        event.preventDefault();

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'mouseup', onDocumentMouseUp, false );

    }

    function onDocumentMouseMove( event ) {

        var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

        lon -= movementX * 0.1;
        lat += movementY * 0.1;

    }

    function onDocumentMouseUp( event ) {

        document.removeEventListener( 'mousemove', onDocumentMouseMove );
        document.removeEventListener( 'mouseup', onDocumentMouseUp );

    }

    function onDocumentMouseWheel( event ) {

        camera.fov -= event.wheelDeltaY * 0.05;
        camera.updateProjectionMatrix();

    }

    function onDocumentTouchStart( event ) {

        event.preventDefault();

        var touch = event.touches[ 0 ];

        touchX = touch.screenX;
        touchY = touch.screenY;

    }

    function onDocumentTouchMove( event ) {

        event.preventDefault();

        var touch = event.touches[ 0 ];

        lon -= ( touch.screenX - touchX ) * 0.1;
        lat += ( touch.screenY - touchY ) * 0.1;

        touchX = touch.screenX;
        touchY = touch.screenY;

    }

    function animate() {

        requestAnimationFrame( animate );

        lon +=  0.1;
        lat = Math.max( - 85, Math.min( 85, lat ) );
        phi = THREE.Math.degToRad( 90 - lat );
        theta = THREE.Math.degToRad( lon );

        target.x = Math.sin( phi ) * Math.cos( theta );
        target.y = Math.cos( phi );
        target.z = Math.sin( phi ) * Math.sin( theta );

        camera.lookAt( target );

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/css3d_periodictable.html

()=>{

    var table: any[][] = [
        [ "H", "Hydrogen", "1.00794", 1, 1 ],
        [ "He", "Helium", "4.002602", 18, 1 ],
        [ "Li", "Lithium", "6.941", 1, 2 ],
        [ "Be", "Beryllium", "9.012182", 2, 2 ],
        [ "B", "Boron", "10.811", 13, 2 ],
        [ "C", "Carbon", "12.0107", 14, 2 ],
        [ "N", "Nitrogen", "14.0067", 15, 2 ],
        [ "O", "Oxygen", "15.9994", 16, 2 ],
        [ "F", "Fluorine", "18.9984032", 17, 2 ],
        [ "Ne", "Neon", "20.1797", 18, 2 ],
        [ "Na", "Sodium", "22.98976...", 1, 3 ],
        [ "Mg", "Magnesium", "24.305", 2, 3 ],
        [ "Al", "Aluminium", "26.9815386", 13, 3 ],
        [ "Si", "Silicon", "28.0855", 14, 3 ],
        [ "P", "Phosphorus", "30.973762", 15, 3 ],
        [ "S", "Sulfur", "32.065", 16, 3 ],
        [ "Cl", "Chlorine", "35.453", 17, 3 ],
        [ "Ar", "Argon", "39.948", 18, 3 ],
        [ "K", "Potassium", "39.948", 1, 4 ],
        [ "Ca", "Calcium", "40.078", 2, 4 ],
        [ "Sc", "Scandium", "44.955912", 3, 4 ],
        [ "Ti", "Titanium", "47.867", 4, 4 ],
        [ "V", "Vanadium", "50.9415", 5, 4 ],
        [ "Cr", "Chromium", "51.9961", 6, 4 ],
        [ "Mn", "Manganese", "54.938045", 7, 4 ],
        [ "Fe", "Iron", "55.845", 8, 4 ],
        [ "Co", "Cobalt", "58.933195", 9, 4 ],
        [ "Ni", "Nickel", "58.6934", 10, 4 ],
        [ "Cu", "Copper", "63.546", 11, 4 ],
        [ "Zn", "Zinc", "65.38", 12, 4 ],
        [ "Ga", "Gallium", "69.723", 13, 4 ],
        [ "Ge", "Germanium", "72.63", 14, 4 ],
        [ "As", "Arsenic", "74.9216", 15, 4 ],
        [ "Se", "Selenium", "78.96", 16, 4 ],
        [ "Br", "Bromine", "79.904", 17, 4 ],
        [ "Kr", "Krypton", "83.798", 18, 4 ],
        [ "Rb", "Rubidium", "85.4678", 1, 5 ],
        [ "Sr", "Strontium", "87.62", 2, 5 ],
        [ "Y", "Yttrium", "88.90585", 3, 5 ],
        [ "Zr", "Zirconium", "91.224", 4, 5 ],
        [ "Nb", "Niobium", "92.90628", 5, 5 ],
        [ "Mo", "Molybdenum", "95.96", 6, 5 ],
        [ "Tc", "Technetium", "(98)", 7, 5 ],
        [ "Ru", "Ruthenium", "101.07", 8, 5 ],
        [ "Rh", "Rhodium", "102.9055", 9, 5 ],
        [ "Pd", "Palladium", "106.42", 10, 5 ],
        [ "Ag", "Silver", "107.8682", 11, 5 ],
        [ "Cd", "Cadmium", "112.411", 12, 5 ],
        [ "In", "Indium", "114.818", 13, 5 ],
        [ "Sn", "Tin", "118.71", 14, 5 ],
        [ "Sb", "Antimony", "121.76", 15, 5 ],
        [ "Te", "Tellurium", "127.6", 16, 5 ],
        [ "I", "Iodine", "126.90447", 17, 5 ],
        [ "Xe", "Xenon", "131.293", 18, 5 ],
        [ "Cs", "Caesium", "132.9054", 1, 6 ],
        [ "Ba", "Barium", "132.9054", 2, 6 ],
        [ "La", "Lanthanum", "138.90547", 4, 9 ],
        [ "Ce", "Cerium", "140.116", 5, 9 ],
        [ "Pr", "Praseodymium", "140.90765", 6, 9 ],
        [ "Nd", "Neodymium", "144.242", 7, 9 ],
        [ "Pm", "Promethium", "(145)", 8, 9 ],
        [ "Sm", "Samarium", "150.36", 9, 9 ],
        [ "Eu", "Europium", "151.964", 10, 9 ],
        [ "Gd", "Gadolinium", "157.25", 11, 9 ],
        [ "Tb", "Terbium", "158.92535", 12, 9 ],
        [ "Dy", "Dysprosium", "162.5", 13, 9 ],
        [ "Ho", "Holmium", "164.93032", 14, 9 ],
        [ "Er", "Erbium", "167.259", 15, 9 ],
        [ "Tm", "Thulium", "168.93421", 16, 9 ],
        [ "Yb", "Ytterbium", "173.054", 17, 9 ],
        [ "Lu", "Lutetium", "174.9668", 18, 9 ],
        [ "Hf", "Hafnium", "178.49", 4, 6 ],
        [ "Ta", "Tantalum", "180.94788", 5, 6 ],
        [ "W", "Tungsten", "183.84", 6, 6 ],
        [ "Re", "Rhenium", "186.207", 7, 6 ],
        [ "Os", "Osmium", "190.23", 8, 6 ],
        [ "Ir", "Iridium", "192.217", 9, 6 ],
        [ "Pt", "Platinum", "195.084", 10, 6 ],
        [ "Au", "Gold", "196.966569", 11, 6 ],
        [ "Hg", "Mercury", "200.59", 12, 6 ],
        [ "Tl", "Thallium", "204.3833", 13, 6 ],
        [ "Pb", "Lead", "207.2", 14, 6 ],
        [ "Bi", "Bismuth", "208.9804", 15, 6 ],
        [ "Po", "Polonium", "(209)", 16, 6 ],
        [ "At", "Astatine", "(210)", 17, 6 ],
        [ "Rn", "Radon", "(222)", 18, 6 ],
        [ "Fr", "Francium", "(223)", 1, 7 ],
        [ "Ra", "Radium", "(226)", 2, 7 ],
        [ "Ac", "Actinium", "(227)", 4, 10 ],
        [ "Th", "Thorium", "232.03806", 5, 10 ],
        [ "Pa", "Protactinium", "231.0588", 6, 10 ],
        [ "U", "Uranium", "238.02891", 7, 10 ],
        [ "Np", "Neptunium", "(237)", 8, 10 ],
        [ "Pu", "Plutonium", "(244)", 9, 10 ],
        [ "Am", "Americium", "(243)", 10, 10 ],
        [ "Cm", "Curium", "(247)", 11, 10 ],
        [ "Bk", "Berkelium", "(247)", 12, 10 ],
        [ "Cf", "Californium", "(251)", 13, 10 ],
        [ "Es", "Einstenium", "(252)", 14, 10 ],
        [ "Fm", "Fermium", "(257)", 15, 10 ],
        [ "Md", "Mendelevium", "(258)", 16, 10 ],
        [ "No", "Nobelium", "(259)", 17, 10 ],
        [ "Lr", "Lawrencium", "(262)", 18, 10 ],
        [ "Rf", "Rutherfordium", "(267)", 4, 7 ],
        [ "Db", "Dubnium", "(268)", 5, 7 ],
        [ "Sg", "Seaborgium", "(271)", 6, 7 ],
        [ "Bh", "Bohrium", "(272)", 7, 7 ],
        [ "Hs", "Hassium", "(270)", 8, 7 ],
        [ "Mt", "Meitnerium", "(276)", 9, 7 ],
        [ "Ds", "Darmstadium", "(281)", 10, 7 ],
        [ "Rg", "Roentgenium", "(280)", 11, 7 ],
        [ "Cn", "Copernicium", "(285)", 12, 7 ],
        [ "Uut", "Unutrium", "(284)", 13, 7 ],
        [ "Fl", "Flerovium", "(289)", 14, 7 ],
        [ "Uup", "Ununpentium", "(288)", 15, 7 ],
        [ "Lv", "Livermorium", "(293)", 16, 7 ],
        [ "Uus", "Ununseptium", "(294)", 17, 7 ],
        [ "Uuo", "Ununoctium", "(294)", 18, 7 ]
    ];

    var camera, scene, renderer;
    var controls;

    var objects = [];
    var targets = { table: [], sphere: [], helix: [], grid: [] };

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
        camera.position.z = 1800;

        scene = new THREE.Scene();

        for ( var i = 0; i < table.length; i ++ ) {

            var item = table[ i ];

            var element = document.createElement( 'div' );
            element.className = 'element';
            element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

            var number = document.createElement( 'div' );
            number.className = 'number';
            number.textContent = (i + 1).toString();
            element.appendChild( number );

            var symbol = document.createElement( 'div' );
            symbol.className = 'symbol';
            symbol.textContent = item[ 0 ];
            element.appendChild( symbol );

            var details = document.createElement( 'div' );
            details.className = 'details';
            details.innerHTML = item[ 1 ] + '<br>' + item[ 2 ];
            element.appendChild( details );

            var object = new THREE.CSS3DObject( element );
            object.position.x = Math.random() * 4000 - 2000;
            object.position.y = Math.random() * 4000 - 2000;
            object.position.z = Math.random() * 4000 - 2000;
            scene.add( object );

            objects.push( object );

        }

        // table

        for ( var i = 0; i < objects.length; i ++ ) {

            var item = table[ i ];

            var object2 = new THREE.Object3D();
            object2.position.x = ( item[ 3 ] * 160 ) - 1540;
            object2.position.y = - ( item[ 4 ] * 200 ) + 1100;

            targets.table.push( object );

        }

        // sphere

        var vector = new THREE.Vector3();

        for ( var i = 0, l = objects.length; i < l; i ++ ) {

            var phi = Math.acos( -1 + ( 2 * i ) / l );
            var theta = Math.sqrt( l * Math.PI ) * phi;

            var object3 = new THREE.Object3D();

            object3.position.x = 1000 * Math.cos( theta ) * Math.sin( phi );
            object3.position.y = 1000 * Math.sin( theta ) * Math.sin( phi );
            object3.position.z = 1000 * Math.cos( phi );

            vector.copy( object3.position ).multiplyScalar( 2 );

            object3.lookAt( vector );

            targets.sphere.push( object3 );

        }

        // helix

        var vector = new THREE.Vector3();

        for ( var i = 0, l = objects.length; i < l; i ++ ) {

            var phi = i * 0.175 + Math.PI;

            var object4 = new THREE.Object3D();

            object4.position.x = 1100 * Math.sin( phi );
            object4.position.y = - ( i * 8 ) + 450;
            object4.position.z = 1100 * Math.cos( phi );

            vector.copy( object4.position );
            vector.x *= 2;
            vector.z *= 2;

            object4.lookAt( vector );

            targets.helix.push( object4 );

        }

        // grid

        for ( var i = 0; i < objects.length; i ++ ) {

            var object5 = new THREE.Object3D();

            object5.position.x = ( ( i % 5 ) * 400 ) - 800;
            object5.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
            object5.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

            targets.grid.push( object5 );

        }

        //

        renderer = new THREE.CSS3DRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.domElement.style.position = 'absolute';
        document.getElementById( 'container' ).appendChild( renderer.domElement );

        //

        controls = new THREE.TrackballControls( camera, renderer.domElement );
        controls.rotateSpeed = 0.5;
        controls.addEventListener( 'change', render );

        var button = document.getElementById( 'table' );
        button.addEventListener( 'click', function ( event ) {

            transform( targets.table, 2000 );

        }, false );

        var button = document.getElementById( 'sphere' );
        button.addEventListener( 'click', function ( event ) {

            transform( targets.sphere, 2000 );

        }, false );

        var button = document.getElementById( 'helix' );
        button.addEventListener( 'click', function ( event ) {

            transform( targets.helix, 2000 );

        }, false );

        var button = document.getElementById( 'grid' );
        button.addEventListener( 'click', function ( event ) {

            transform( targets.grid, 2000 );

        }, false );

        transform( targets.table, 5000 );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function transform( targets, duration ) {

        TWEEN.removeAll();

        for ( var i = 0; i < objects.length; i ++ ) {

            var object = objects[ i ];
            var target = targets[ i ];

            new TWEEN.Tween( object.position )
                .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
                .easing( TWEEN.Easing.Exponential.InOut )
                .start();

            new TWEEN.Tween( object.rotation )
                .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
                .easing( TWEEN.Easing.Exponential.InOut )
                .start();

        }

        new TWEEN.Tween( this )
            .to( {}, duration * 2 )
            .onUpdate( render )
            .start();

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

        requestAnimationFrame( animate );

        TWEEN.update();
        controls.update();

    }

    function render() {

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/css3d_sandbox.html

()=>{
    var camera, scene, renderer;
    var geometry, material, mesh;

    var scene2, renderer2;

    var controls;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 200, 200, 200 );

        controls = new THREE.TrackballControls( camera );

        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;

        controls.noZoom = false;
        controls.noPan = false;

        controls.staticMoving = false;
        controls.dynamicDampingFactor = 0.3;

        controls.keys = [ 65, 83, 68 ];

        scene = new THREE.Scene();

        geometry = new THREE.CubeGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth: 1 } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        //

        scene2 = new THREE.Scene();

        for ( var i = 0; i < 20; i ++ ) {

            var element = document.createElement( 'div' );
            element.style.width = '100px';
            element.style.height = '100px';
            element.style.background = new THREE.Color( Math.random() * 0xffffff ).getStyle();

            var object = new THREE.CSS3DObject( element );
            object.position.x = Math.random() * 200 - 100;
            object.position.y = Math.random() * 200 - 100;
            object.position.z = Math.random() * 200 - 100;
            object.scale.x = Math.random() + 0.5;
            object.scale.y = Math.random() + 0.5;
            scene2.add( object );

        }

        //

        renderer2 = new THREE.CSS3DRenderer();
        renderer2.setSize( window.innerWidth, window.innerHeight );
        renderer2.domElement.style.position = 'absolute';
        renderer2.domElement.style.top = 0;
        document.body.appendChild( renderer2.domElement );

    }

    function animate() {

        requestAnimationFrame( animate );

        controls.update();

        renderer.render( scene, camera );
        renderer2.render( scene2, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/css3d_youtube.html

()=>{
    var camera, scene, renderer;
    var objects = [], player;

    var auto = true;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
        camera.position.y = - 25;

        scene = new THREE.Scene();

        renderer = new THREE.CSS3DRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = 0;
        document.getElementById( 'container' ).appendChild( renderer.domElement );

        //

        var query = <HTMLInputElement>document.getElementById( 'query' );
        query.addEventListener( 'keyup', function ( event:KeyboardEvent ) {

            if ( event.keyCode === 13 ) {

                search( query.value );

            }

        }, false );

        var button = document.getElementById( 'button' );
        button.addEventListener( 'click', function ( event ) {

            search( query.value );

        }, false );

        if ( window.location.hash.length > 0 ) {

            query.value = window.location.hash.substr( 1 );

        }

        search( query.value );

        document.body.addEventListener( 'mousewheel', onMouseWheel, false );

        document.body.addEventListener( 'click', function ( event ) {

            auto = true;

            if ( player !== undefined ) {

                player.parentNode.removeChild( player );
                player = undefined;

            }

            new TWEEN.Tween( camera.position )
                    .to( { x: 0, y: - 25 }, 1500 )
                    .easing( TWEEN.Easing.Exponential.Out )
                    .start();

        }, false );

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function search( query ) {

        window.location.hash = query;

        for ( var i = 0, l = objects.length; i < l; i ++ ) {

            var object = objects[ i ];
            var delay = Math.random() * 1000;

            new TWEEN.Tween( object.position )
                    .to( { y: - 3000 }, 1000 )
                    .delay( delay )
                    .easing( TWEEN.Easing.Exponential.In )
                    .start();

            new TWEEN.Tween( object )
                    .to( {}, 2000 )
                    .delay( delay )
                    .onComplete( function () {

                        scene.remove( this );
                        renderer.cameraElement.removeChild( this.element );

                        var index = objects.indexOf( this );
                        objects.splice( index, 1 );

                    } )
                    .start();

        }

        var request = new XMLHttpRequest();
        request.addEventListener( 'load', onData, false );
        request.open( 'GET', 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=json&max-results=50&q=' + query, true );
        request.send( null );

    }

    function onData( event ) {

        var data = JSON.parse( event.target.responseText );
        var entries = data.feed.entry;

        // console.log( entries );

        for ( var i = 0; i < entries.length; i ++ ) {

            var entry = entries[ i ];

            var element = document.createElement( 'div' );
            element.style.width = '480px';
            element.style.height = '360px';

            var image = <HTMLImageElement>document.createElement( 'img' );
            image.addEventListener( 'load', function ( event ) {

                var object = this.properties.object;
                var button = this.properties.button;

                button.style.visibility = 'visible';

                new TWEEN.Tween( object.position )
                    .to( { y: Math.random() * 2000 - 1000 }, 2000 )
                    .easing( TWEEN.Easing.Exponential.Out )
                    .start();

            }, false );
            image.style.position = 'absolute';
            image.style.width = '480px';
            image.style.height = '360px';
            image.src = entry.media$group.media$thumbnail[ 2 ].url;
            element.appendChild( image );

            var button = <HTMLImageElement>document.createElement( 'img' );
            button.style.position = 'absolute';
            button.style.left = ( ( 480 - 86 ) / 2 ) + 'px';
            button.style.top = ( ( 360 - 61 ) / 2 ) + 'px';
            button.style.visibility = 'hidden';
            button.style.WebkitFilter = 'grayscale()';
            button.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAA9CAYAAAA3ZZ5uAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wLBQ0uMbsnLZIAAAbXSURBVHja7ZxvbBvlHcc/z/maf4PGg9FtbaZeS2I1iUgP1q7QEmFpmxB7AYxXk/aCvETaC/Zy2qSpk7apL/YCTbCyoU0uUAGdRv8uVCorzsQGSRu4tFoahbYxpEkKayvHaRInvnt+e5HEzb92cez4bHRfyS/ufPbd8/H3vs/vZ99Zkac+erB5OxhhAG1oS4myZp5RYVFi5/PeSpSFwrrd84I4QDLH93RAksusjwM89PH5DgoglcvGZ+ymp8RQTytRliCWUsriyywhCTiiJKFQCaUmXtjRfXk0b7Bnv7211vUq2xSqDaVsAoGII0jMDE3F7gT5tmA/tJue0qiYgnBAczkzkzSQtoed3qMrBvt+y7ZnlTJiAb6VGFi3PXqu78D/Bft+y7ZnhQBqbhPVUrgLwP6rsXGza+IEp3/usWC62HsuXPh0bp05f4NMSGKgwhKwylXhTIgXgB8ucezp5sh2MJyAUR7O1cr67qxrs471kDZF4NW8slbpNuBXC8CKNmxRAZz8LKuiS8BqJBoYNm9FF2Rs+7b6x8CIB1wKIR39Qd/FDnOmyFU2gV0LlbQ2MAPW02Ip5UPAVlXB44/Dxk0zy8NDcOYMDA+XcScmVjZjtWD7URFU79zJzp//gtraWgBGR0cZGBhgsLMT3nyjLAGLYGfBimhbKL5jv7FnTxYqQG1tLbZtE4lE6N+1i5Hjx5n+x7vlBVjkFlitlC8t7Ncbm5ZdX1NTg23bNDc30//MM3wWj5P+66HyADzLUv1ty5bN2lAJP46h9bXXuW/XrhVt29/fT197O96Rw0iJAza0WKYnYkkZdAaRSIRIJMLlJ5+k7+23mTx+vGQBi4hlagiL+FNqrWavW7du5VvPP0//E0+QaG9n4sQJZGiotNIAwqaA7RNXRITVfKimadLU1IRlWfRGowydepfMyZPo0gFsm54mjPKLbH4vr6mpYceOHTQ0NHDu0T1cO3aMqXdOwuSkz1lA2NQitn/7L8wHWltbS2trK4OWRX80SrL9Habicf8AC7apfexkRaCQ+V5XV0ddXR399fVc2rObsTcPkTl/3pcz0dRI2D+wwlpMnA0NDWzatIlPGhsZPHWK1FuH0DduFHNoYVOD7df3L3qNwAJUV1fT0tJCfX09Zx94gKuxA0x1dhVv8tIiPkaBRkSv7fcR1VW0fv97DNTfz5lf/5Z0vKMoYzNmcs6vhxTtYVkWj+z9JcbGjUUZm6+O1SLoIs6eVckUjKYoxph9joK1y9jFutrZyennfkJmbKwo+/O53JI1z9jpVIre2Ks4v3+pqGPzNwq0Rmu9hi7tous3+7hxoa/oYzO1f4ZFa1kTsDevDOG8+AcuHj7q29jMSddzKkOGL22tlsI69ubQEM6L+30FCjDlacesMFTSrzSYiQKvAECHuXj4GD0vvVwSX21VGCo5O3mJj2BX79jp1Bi9rx2k99WDZMZuUkoytXgOGNFyAjudGuOz0+/Rte93JQcUIK11whStkn79MuNpjed5OQG9ePQEPfv/VJJA51SJSpifuy5fM82Sj4Le19+gZ/8rJQ10TtdcF/MejLhfTYKnPTzPvb1Dx8YYfO+f9Lz8Z8aHr1Iuugcjbn7iprnfqPblAEa6urnvwe1LZ/nhET4/+zHn/vgXxkfKB+icLrlpzEtpN7Glwp8D+M/BQ3yzdTdfjTRkgQ78/STnX4lRzrqUdhMK4Gd33SvrlH/XFmx4aMa1X3zUQ7krI8K+m9eVCTCudXK9EfLtJ5qr3eUPdE7jWidh7opuEUeLRAmUv0ScLNgJTydqlBFAKYAmPJ3Igp0UHB1c0F0QTQq3HDuQmXY2hkIBlQJoIDPtwLwb6H687m7ZYJgBmTx0Q3scyKTUrckLmBKJC8EElo9S4mXv7MyC/UJ7RzaoUNRUwV10q9V1rbOdjXGr/pqMXRMvoLNK/Vd7uFqOLAHbDaMj4sZcCcqDXOWKcEUysX+T/nQJWADPY29Cu8kAVW5KaDfpeeydv25BjTWIO3qvClVVoKJfCRqGFemyznAd77kPJN1xW7AAV8TtuAvDAuz1Adw7nv4JcbkmXtuHXnrJf8Is2xVcEffoelQ4KfrhdUpRHQBeAPS6aC5LJpny3B91ytRby213x9rqEaoekxB7K1DRShTzHVyBolIpalB8mUu0lGjGZi+DSolmAo0nxDI6/dNuyP1/t+ZrN1WbBSwxmN9AWCgsEbGVUuEaFKFF8AHuXrTsd7xMiTA1+3P/hGjmF5jjs8sewgQCQgJFQkQchUoqTXyatHMnoDmBXYm+w7rtIULhRfBBsbibK5nuTkQcpVQSIQEkAARJGlo5ChLzy6dc9T9S8wu+HzDbBQAAAABJRU5ErkJggg==';
            element.appendChild( button );

            var blocker = document.createElement( 'div' );
            blocker.style.position = 'absolute';
            blocker.style.width = '480px';
            blocker.style.height = '360px';
            blocker.style.background = 'rgba(0,0,0,0.5)';
            blocker.style.cursor = 'pointer';
            element.appendChild( blocker );

            var object = new THREE.CSS3DObject( element );
            object.position.x = Math.random() * 4000 - 2000;
            // object.position.y = Math.random() * 2000 - 1000;
            object.position.y = 3000;
            object.position.z = Math.random() * - 5000;
            scene.add( object );

            objects.push( object );

            //

            var properties = { data: entry, blocker: blocker, button: button, object: object }

            element["properties"] = properties;
            image["properties"] = properties;

            element.addEventListener( 'mouseover', function () {

                this.properties.button.style.WebkitFilter = '';
                this.properties.blocker.style.background = 'rgba(0,0,0,0)';

            }, false );

            element.addEventListener( 'mouseout', function () {

                this.properties.button.style.WebkitFilter = 'grayscale()';
                this.properties.blocker.style.background = 'rgba(0,0,0,0.75)';

            }, false );

            element.addEventListener( 'click', function ( event ) {

                event.stopPropagation();

                var data = this.properties.data;
                var object = this.properties.object;

                auto = false;

                if ( player !== undefined ) {

                    player.parentNode.removeChild( player );
                    player = undefined;

                }

                player = document.createElement( 'iframe' );
                player.style.position = 'absolute';
                player.style.width = '480px';
                player.style.height = '360px';
                player.style.border = '0px';
                player.src = 'http://www.youtube.com/embed/' + data.id.$t.split( ':' ).pop() + '?rel=0&autoplay=1&controls=1&showinfo=0';
                this.appendChild( player );

                //

                var prev = object.position.z + 400;

                new TWEEN.Tween( camera.position )
                    .to( { x: object.position.x, y: object.position.y - 25 }, 1500 )
                    .easing( TWEEN.Easing.Exponential.Out )
                    .start();

                new TWEEN.Tween( { value: prev } )
                    .to( { value: 0  }, 2000 )
                    .onUpdate( function () {

                        move( this.value - prev );
                        prev = this.value;

                    } )
                    .easing( TWEEN.Easing.Exponential.Out )
                    .start();

            }, false );

        }

    }

    function move( delta ) {

        for ( var i = 0; i < objects.length; i ++ ) {

            var object = objects[ i ];

            object.position.z += delta;

            if ( object.position.z > 0 ) {

                object.position.z -= 5000;

            } else if ( object.position.z < - 5000 ) {

                object.position.z += 5000;

            }

        }

    }

    function onMouseWheel( event ) {

        move( event.wheelDelta );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

        requestAnimationFrame( animate );

        TWEEN.update();

        if ( auto === true ) {

            move( 1 );

        }

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_fly.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var radius = 6371;
    var tilt = 0.41;
    var rotationSpeed = 0.02;

    var cloudsScale = 1.005;
    var moonScale = 0.23;

    var MARGIN = 0;
    var SCREEN_HEIGHT = window.innerHeight - MARGIN * 2;
    var SCREEN_WIDTH  = window.innerWidth;

    var container, stats;
    var camera, controls, scene, sceneCube, renderer;
    var geometry, meshPlanet, meshClouds, meshMoon;
    var dirLight, pointLight, ambientLight;

    var d, dPlanet, dMoon, dMoonVec = new THREE.Vector3();

    var clock = new THREE.Clock();

    var composer;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 25, SCREEN_WIDTH / SCREEN_HEIGHT, 50, 1e7 );
        camera.position.z = radius * 5;

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0x000000, 0.00000025 );

        controls = new THREE.FlyControls( camera );

        controls.movementSpeed = 1000;
        controls.domElement = container;
        controls.rollSpeed = Math.PI / 24;
        controls.autoForward = false;
        controls.dragToLook = false;

        dirLight = new THREE.DirectionalLight( 0xffffff );
        dirLight.position.set( -1, 0, 1 ).normalize();
        scene.add( dirLight );

        ambientLight = new THREE.AmbientLight( 0x000000 );
        scene.add( ambientLight );

        var planetTexture   = THREE.ImageUtils.loadTexture( "textures/planets/earth_atmos_2048.jpg" );
        var cloudsTexture   = THREE.ImageUtils.loadTexture( "textures/planets/earth_clouds_1024.png" );
        var normalTexture   = THREE.ImageUtils.loadTexture( "textures/planets/earth_normal_2048.jpg" );
        var specularTexture = THREE.ImageUtils.loadTexture( "textures/planets/earth_specular_2048.jpg" );

        var moonTexture = THREE.ImageUtils.loadTexture( "textures/planets/moon_1024.jpg" );

        var shader = THREE.ShaderLib[ "normalmap" ];
        var uniforms = THREE.UniformsUtils.clone( shader.uniforms );

        uniforms[ "tNormal" ].value = normalTexture;
        uniforms[ "uNormalScale" ].value.set( 0.85, 0.85 );

        uniforms[ "tDiffuse" ].value = planetTexture;
        uniforms[ "tSpecular" ].value = specularTexture;

        uniforms[ "enableAO" ].value = false;
        uniforms[ "enableDiffuse" ].value = true;
        uniforms[ "enableSpecular" ].value = true;

        uniforms[ "uDiffuseColor" ].value.setHex( 0xffffff );
        uniforms[ "uSpecularColor" ].value.setHex( 0x333333 );
        uniforms[ "uAmbientColor" ].value.setHex( 0x000000 );

        uniforms[ "uShininess" ].value = 15;

        var parameters = {

            fragmentShader: shader.fragmentShader,
            vertexShader: shader.vertexShader,
            uniforms: uniforms,
            lights: true,
            fog: true

        };

        var materialNormalMap = new THREE.ShaderMaterial( parameters );

        // planet

        geometry = new THREE.SphereGeometry( radius, 100, 50 );
        geometry.computeTangents();

        meshPlanet = new THREE.Mesh( geometry, materialNormalMap );
        meshPlanet.rotation.y = 0;
        meshPlanet.rotation.z = tilt;
        scene.add( meshPlanet );

        // clouds

        var materialClouds = new THREE.MeshLambertMaterial( { color: 0xffffff, map: cloudsTexture, transparent: true } );

        meshClouds = new THREE.Mesh( geometry, materialClouds );
        meshClouds.scale.set( cloudsScale, cloudsScale, cloudsScale );
        meshClouds.rotation.z = tilt;
        scene.add( meshClouds );

        // moon

        var materialMoon = new THREE.MeshPhongMaterial( { color: 0xffffff, map: moonTexture } );

        meshMoon = new THREE.Mesh( geometry, materialMoon );
        meshMoon.position.set( radius * 5, 0, 0 );
        meshMoon.scale.set( moonScale, moonScale, moonScale );
        scene.add( meshMoon );

        // stars

        var i, r = radius, starsGeometry = [ new THREE.Geometry(), new THREE.Geometry() ];

        for ( i = 0; i < 250; i ++ ) {

            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 2 - 1;
            vertex.y = Math.random() * 2 - 1;
            vertex.z = Math.random() * 2 - 1;
            vertex.multiplyScalar( r );

            starsGeometry[ 0 ].vertices.push( vertex );

        }

        for ( i = 0; i < 1500; i ++ ) {

            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 2 - 1;
            vertex.y = Math.random() * 2 - 1;
            vertex.z = Math.random() * 2 - 1;
            vertex.multiplyScalar( r );

            starsGeometry[ 1 ].vertices.push( vertex );

        }

        var stars;
        var starsMaterials = [
            new THREE.ParticleSystemMaterial( { color: 0x555555, size: 2, sizeAttenuation: false } ),
            new THREE.ParticleSystemMaterial( { color: 0x555555, size: 1, sizeAttenuation: false } ),
            new THREE.ParticleSystemMaterial( { color: 0x333333, size: 2, sizeAttenuation: false } ),
            new THREE.ParticleSystemMaterial( { color: 0x3a3a3a, size: 1, sizeAttenuation: false } ),
            new THREE.ParticleSystemMaterial( { color: 0x1a1a1a, size: 2, sizeAttenuation: false } ),
            new THREE.ParticleSystemMaterial( { color: 0x1a1a1a, size: 1, sizeAttenuation: false } )
        ];

        for ( i = 10; i < 30; i ++ ) {

            stars = new THREE.ParticleSystem( starsGeometry[ i % 2 ], starsMaterials[ i % 6 ] );

            stars.rotation.x = Math.random() * 6;
            stars.rotation.y = Math.random() * 6;
            stars.rotation.z = Math.random() * 6;

            var s = i * 10;
            stars.scale.set( s, s, s );

            stars.matrixAutoUpdate = false;
            stars.updateMatrix();

            scene.add( stars );

        }

        renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1 } );
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        renderer.sortObjects = false;

        renderer.autoClear = false;

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );

        window.addEventListener( 'resize', onWindowResize, false );

        // postprocessing

        var renderModel = new THREE.RenderPass( scene, camera );
        var effectFilm = new THREE.FilmPass( 0.35, 0.75, 2048, false );

        effectFilm.renderToScreen = true;

        composer = new THREE.EffectComposer( renderer );

        composer.addPass( renderModel );
        composer.addPass( effectFilm );

    };

    function onWindowResize( event ) {

        SCREEN_HEIGHT = window.innerHeight;
        SCREEN_WIDTH  = window.innerWidth;

        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

        camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
        camera.updateProjectionMatrix();

        composer.reset();

    };

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    };

    function render() {

        // rotate the planet and clouds

        var delta = clock.getDelta();

        meshPlanet.rotation.y += rotationSpeed * delta;
        meshClouds.rotation.y += 1.25 * rotationSpeed * delta;

        // slow down as we approach the surface

        dPlanet = camera.position.length();

        dMoonVec.subVectors( camera.position, meshMoon.position );
        dMoon = dMoonVec.length();

        if ( dMoon < dPlanet ) {

            d = ( dMoon - radius * moonScale * 1.01 );

        } else {

            d = ( dPlanet - radius * 1.01 );

        }

        controls.movementSpeed = 0.33 * d;
        controls.update( delta );

        renderer.clear();
        composer.render( delta );

    };
};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_orbit.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, controls, scene, renderer;

    var cross;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.z = 500;

        controls = new THREE.OrbitControls( camera );
        controls.addEventListener( 'change', render );

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

        // world

        var geometry = new THREE.CylinderGeometry( 0, 10, 30, 4, 1 );
        var material =  new THREE.MeshLambertMaterial( { color:0xffffff, shading: THREE.FlatShading } );

        for ( var i = 0; i < 500; i ++ ) {

            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = ( Math.random() - 0.5 ) * 1000;
            mesh.position.y = ( Math.random() - 0.5 ) * 1000;
            mesh.position.z = ( Math.random() - 0.5 ) * 1000;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            scene.add( mesh );

        }


        // lights

        var light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 1, 1, 1 );
        scene.add( light );

        light = new THREE.DirectionalLight( 0x002288 );
        light.position.set( -1, -1, -1 );
        scene.add( light );

        var lightAmbient = new THREE.AmbientLight( 0x222222 );
        scene.add( lightAmbient );


        // renderer

        renderer = new THREE.WebGLRenderer( { antialias: false } );
        renderer.setClearColor( scene.fog.color, 1 );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container = document.getElementById( 'container' );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

    }

    function animate() {

        requestAnimationFrame( animate );
        controls.update();

    }

    function render() {

        renderer.render( scene, camera );
        stats.update();

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_path.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, controls, scene, renderer;

    var cross;

    var clock = new THREE.Clock();

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );

        controls = new THREE.PathControls( camera );

        controls.waypoints = [ [ -500, 0, 0 ], [ 0, 200, 0 ], [ 500, 0, 0 ] ];
        controls.duration = 28
        controls.useConstantSpeed = true;
        //controls.createDebugPath = true;
        //controls.createDebugDummy = true;
        controls.lookSpeed = 0.06;
        controls.lookVertical = true;
        controls.lookHorizontal = true;
        controls.verticalAngleMap = { srcRange: [ 0, 2 * Math.PI ], dstRange: [ 1.1, 3.8 ] };
        controls.horizontalAngleMap = { srcRange: [ 0, 2 * Math.PI ], dstRange: [ 0.3, Math.PI - 0.3 ] };
        controls.lon = 180;

        controls.init();

        // world

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

        scene.add( controls.animationParent );

        var geometry = new THREE.CylinderGeometry( 0, 10, 30, 4, 1 );
        var material =  new THREE.MeshLambertMaterial( { color:0xffffff, shading: THREE.FlatShading } );

        for ( var i = 0; i < 500; i ++ ) {

            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = ( Math.random() - 0.5 ) * 1000;
            mesh.position.y = ( Math.random() - 0.5 ) * 1000;
            mesh.position.z = ( Math.random() - 0.5 ) * 1000;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            scene.add( mesh );

        }

        // lights

        var light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 1, 1, 1 );
        scene.add( light );

        light = new THREE.DirectionalLight( 0x002288 );
        light.position.set( -1, -1, -1 );
        scene.add( light );

        var lightAmbient = new THREE.AmbientLight( 0x222222 );
        scene.add( lightAmbient );


        // renderer

        renderer = new THREE.WebGLRenderer( { antialias: false } );
        renderer.setClearColor( scene.fog.color, 1 );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container = document.getElementById( 'container' );
        container.appendChild( renderer.domElement );

        // stats

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

        // start animation

        controls.animation.play( true, 0 );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        controls.handleResize();

    }

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var delta = clock.getDelta();

        THREE.AnimationHandler.update( delta );

        controls.update( delta );
        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_pointerlock.html

()=>{
    var camera, scene, renderer;
    var geometry, material, mesh;
    var controls,time = Date.now();

    var objects = [];

    var ray;

    var blocker = document.getElementById( 'blocker' );
    var instructions = document.getElementById( 'instructions' );

    // http://www.html5rocks.com/en/tutorials/pointerlock/intro/

    var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

    if ( havePointerLock ) {

        var element = document.body;

        var pointerlockchange = function ( event ) {

            if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {

                controls.enabled = true;

                blocker.style.display = 'none';

            } else {

                controls.enabled = false;

                blocker.style.display = '-webkit-box';
                blocker.style.display = '-moz-box';
                blocker.style.display = 'box';

                instructions.style.display = '';

            }

        }

        var pointerlockerror = function ( event ) {

            instructions.style.display = '';

        }

        // Hook pointer lock state change events
        document.addEventListener( 'pointerlockchange', pointerlockchange, false );
        document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

        document.addEventListener( 'pointerlockerror', pointerlockerror, false );
        document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
        document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

        instructions.addEventListener( 'click', function ( event ) {

            instructions.style.display = 'none';

            // Ask the browser to lock the pointer
            element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

            if ( /Firefox/i.test( navigator.userAgent ) ) {

                var fullscreenchange = function ( event ) {

                    if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {

                        document.removeEventListener( 'fullscreenchange', fullscreenchange );
                        document.removeEventListener( 'mozfullscreenchange', fullscreenchange );

                        element.requestPointerLock();
                    }

                }

                document.addEventListener( 'fullscreenchange', fullscreenchange, false );
                document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

                element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;

                element.requestFullscreen();

            } else {

                element.requestPointerLock();

            }

        }, false );

    } else {

        instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';

    }

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog( 0xffffff, 0, 750 );

        var light = new THREE.DirectionalLight( 0xffffff, 1.5 );
        light.position.set( 1, 1, 1 );
        scene.add( light );

        var light = new THREE.DirectionalLight( 0xffffff, 0.75 );
        light.position.set( -1, - 0.5, -1 );
        scene.add( light );

        controls = new THREE.PointerLockControls( camera );
        scene.add( controls.getObject() );

        ray = new THREE.Raycaster();
        ray.ray.direction.set( 0, -1, 0 );

        // floor

        geometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
        geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

        for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {

            var vertex = geometry.vertices[ i ];
            vertex.x += Math.random() * 20 - 10;
            vertex.y += Math.random() * 2;
            vertex.z += Math.random() * 20 - 10;

        }

        for ( var i = 0, l = geometry.faces.length; i < l; i ++ ) {

            var face = geometry.faces[ i ];
            face.vertexColors[ 0 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
            face.vertexColors[ 1 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
            face.vertexColors[ 2 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
            face.vertexColors[ 3 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );

        }

        material = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        // objects

        geometry = new THREE.CubeGeometry( 20, 20, 20 );

        for ( var i = 0, l = geometry.faces.length; i < l; i ++ ) {

            var face = geometry.faces[ i ];
            face.vertexColors[ 0 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
            face.vertexColors[ 1 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
            face.vertexColors[ 2 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
            face.vertexColors[ 3 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );

        }

        for ( var i = 0; i < 500; i ++ ) {

            material = new THREE.MeshPhongMaterial( { specular: 0xffffff, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } );

            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = Math.floor( Math.random() * 20 - 10 ) * 20;
            mesh.position.y = Math.floor( Math.random() * 20 ) * 20 + 10;
            mesh.position.z = Math.floor( Math.random() * 20 - 10 ) * 20;
            scene.add( mesh );

            material.color.setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );

            objects.push( mesh );

        }

        //

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

        requestAnimationFrame( animate );

        //

        controls.isOnObject( false );

        ray.ray.origin.copy( controls.getObject().position );
        ray.ray.origin.y -= 10;

        var intersections = ray.intersectObjects( objects );

        if ( intersections.length > 0 ) {

            var distance = intersections[ 0 ].distance;

            if ( distance > 0 && distance < 10 ) {

                controls.isOnObject( true );

            }

        }

        controls.update( Date.now() - time );

        renderer.render( scene, camera );

        time = Date.now();

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_roll.html

()=>{

    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, controls, scene, renderer;

    var cross;

    var clock = new THREE.Clock();

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );

        controls = new THREE.RollControls( camera );

        controls.movementSpeed = 100;
        controls.lookSpeed = 3;
        controls.constrainVertical = [ -0.5, 0.5 ];
        //controls.autoForward = true;

        // world

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

        var geometry = new THREE.CylinderGeometry( 0, 10, 30, 4, 1 );
        var material =  new THREE.MeshLambertMaterial( { color:0xffffff, shading: THREE.FlatShading } );

        for ( var i = 0; i < 500; i ++ ) {

            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = ( Math.random() - 0.5 ) * 1000;
            mesh.position.y = ( Math.random() - 0.5 ) * 1000;
            mesh.position.z = ( Math.random() - 0.5 ) * 1000;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            scene.add( mesh );

        }

        // lights

        var light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 1, 1, 1 );
        scene.add( light );

        light = new THREE.DirectionalLight( 0x002288 );
        light.position.set( -1, -1, -1 );
        scene.add( light );

        var lightAmbient = new THREE.AmbientLight( 0x555555 );
        scene.add( lightAmbient );


        // renderer

        renderer = new THREE.WebGLRenderer( { antialias: false } );
        renderer.setClearColor( scene.fog.color, 1 );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container = document.getElementById( 'container' );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        controls.handleResize();

    }

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        controls.update( clock.getDelta() );
        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_trackball.html

()=>{

    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, controls, scene, renderer;

    var cross;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.z = 500;

        controls = new THREE.TrackballControls( camera );

        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;

        controls.noZoom = false;
        controls.noPan = false;

        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;

        controls.keys = [ 65, 83, 68 ];

        controls.addEventListener( 'change', render );

        // world

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

        var geometry = new THREE.CylinderGeometry( 0, 10, 30, 4, 1 );
        var material =  new THREE.MeshLambertMaterial( { color:0xffffff, shading: THREE.FlatShading } );

        for ( var i = 0; i < 500; i ++ ) {

            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = ( Math.random() - 0.5 ) * 1000;
            mesh.position.y = ( Math.random() - 0.5 ) * 1000;
            mesh.position.z = ( Math.random() - 0.5 ) * 1000;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            scene.add( mesh );

        }


        // lights

        var light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 1, 1, 1 );
        scene.add( light );

        light = new THREE.DirectionalLight( 0x002288 );
        light.position.set( -1, -1, -1 );
        scene.add( light );

        var lightAmbient = new THREE.AmbientLight( 0x222222 );
        scene.add( lightAmbient );


        // renderer

        renderer = new THREE.WebGLRenderer( { antialias: false } );
        renderer.setClearColor( scene.fog.color, 1 );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container = document.getElementById( 'container' );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        controls.handleResize();

        render();

    }

    function animate() {

        requestAnimationFrame( animate );
        controls.update();

    }

    function render() {

        renderer.render( scene, camera );
        stats.update();

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_lights_test.html

()=>{
    var SCREEN_WIDTH = window.innerWidth / 2;
    var SCREEN_HEIGHT = window.innerHeight;
    var FLOOR = -250;

    var container, stats;

    var camera, scene, canvasRenderer, webglRenderer;

    var mesh, zmesh, lightMesh, geometry;
    var materialSpheres, materialTorus;

    var directionalLight, pointLight;

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var render_canvas = true, render_gl = true;
    var has_gl = 0;

    var lightAdded = false;

    var clock = new THREE.Clock();

    var bcanvas = document.getElementById( 'rcanvas' );
    var bwebgl = document.getElementById( 'rwebgl' );

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    init();
    animate();

    //render_canvas = !has_gl;
    bwebgl.style.display = has_gl ? 'inline' : 'none';
    bcanvas.className = render_canvas ? 'button' : 'button inactive';

    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 100000 );
        camera.position.z = 500;

        scene = new THREE.Scene();

        // Spheres

        var geometry = new THREE.SphereGeometry( 100, 16, 8 );
        materialSpheres = new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, overdraw: true } );

        for ( var i = 0; i < 30; i ++ ) {

            mesh = new THREE.Mesh( geometry, materialSpheres );
            mesh.position.x = 500 * ( Math.random() - 0.5 );
            mesh.position.y = 500 * ( Math.random() - 0.5 );
            mesh.position.z = 500 * ( Math.random() - 0.5 );
            mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.25 * ( Math.random() + 0.5 );
            scene.add( mesh );

        }

        // Torus

        materialTorus = new THREE.MeshLambertMaterial( { color: 0xffffff, overdraw: true } );
        mesh = new THREE.Mesh( new THREE.TorusGeometry( 100, 25, 15, 30 ), materialTorus );
        scene.add( mesh );

        // Lights

        var ambient = new THREE.AmbientLight( 0x101010 );
        scene.add( ambient );

        directionalLight = new THREE.DirectionalLight( 0xffffff );
        directionalLight.position.set( 0, -70, 100 ).normalize();
        //scene.add( directionalLight );

        pointLight = new THREE.PointLight( 0xffaa00 );
        scene.add( pointLight );

        lightMesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) );
        lightMesh.scale.x = lightMesh.scale.y = lightMesh.scale.z = 0.05;
        lightMesh.position = pointLight.position;
        scene.add( lightMesh );


        if ( render_canvas ) {

            canvasRenderer = new THREE.CanvasRenderer();
            canvasRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
            container.appendChild( canvasRenderer.domElement );

        }

        if ( render_gl ) {

            try {

                webglRenderer = new THREE.WebGLRenderer( { alpha: true } );
                webglRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                webglRenderer.domElement.style.position = "relative";
                container.appendChild( webglRenderer.domElement );

                has_gl = 1;

            } catch (e) {

            }

        }

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );

        bcanvas.addEventListener("click", toggleCanvas, false);
        bwebgl.addEventListener("click", toggleWebGL, false);

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        SCREEN_WIDTH = window.innerWidth / 2;
        SCREEN_HEIGHT = window.innerHeight;

        camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
        camera.updateProjectionMatrix();

        if ( canvasRenderer ) canvasRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        if ( webglRenderer ) webglRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

    }

    function onDocumentMouseMove( event ) {

        mouseX = ( event.clientX - windowHalfX );
        mouseY = ( event.clientY - windowHalfY );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var delta = clock.getDelta();
        var r = clock.getElapsedTime();

        if ( ! lightAdded && r >= 3.0 ) {

            scene.add( directionalLight );

            materialTorus.needsUpdate = true;
            materialSpheres.needsUpdate = true;

            lightAdded = true;

        }

        camera.position.x += ( mouseX - camera.position.x ) * 0.05;
        camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

        camera.lookAt( scene.position );

        for ( var i = 0, l = scene.children.length; i < l; i ++ ) {

            var object = scene.children[ i ];

            if ( object instanceof THREE.Mesh ) {

                if ( i % 3 == 1 )

                    object.rotation.z += 1.5 * delta;

                else if ( i % 3 == 2 )

                    object.rotation.y += 1.5 * delta;

                else if ( i % 3 == 0 )

                    object.rotation.x += 1.5 * delta;

            }

        }


        lightMesh.position.x = 200 * Math.cos( r );
        lightMesh.position.z = 200 * Math.sin( r );

        if ( render_canvas ) canvasRenderer.render( scene, camera );
        if ( render_gl && has_gl ) webglRenderer.render( scene, camera );

    }

    function toggleCanvas() {

        render_canvas = !render_canvas;
        bcanvas.className = render_canvas ? "button" : "button inactive";

        render_gl = !render_canvas;
        bwebgl.className = render_gl ? "button" : "button inactive";

        if( has_gl )
            webglRenderer.domElement.style.display = render_gl ? "block" : "none";

        canvasRenderer.domElement.style.display = render_canvas ? "block" : "none";

    }

    function toggleWebGL() {

        render_gl = !render_gl;
        bwebgl.className = render_gl ? "button" : "button inactive";

        render_canvas = !render_gl;
        bcanvas.className = render_canvas ? "button" : "button inactive";

        if( has_gl )
            webglRenderer.domElement.style.display = render_gl ? "block" : "none";

        canvasRenderer.domElement.style.display = render_canvas ? "block" : "none";

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_lookat.html

()=>{

    var container, stats;

    var camera, scene, renderer;

    var mesh, geometry, sphere;

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    init();
    animate();


    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 15000 );
        camera.position.z = 3200;

        scene = new THREE.Scene();

        sphere = new THREE.Mesh( new THREE.SphereGeometry( 100, 20, 20 ), new THREE.MeshNormalMaterial( { shading: THREE.SmoothShading } ) );
        scene.add( sphere );

        var geometry = new THREE.CylinderGeometry(0, 10, 100, 3);
        var v = new THREE.Vector3(Math.PI / 2, Math.PI, 0);
        geometry.applyMatrix(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(v.x, v.y, v.z) ) );

        var material = new THREE.MeshNormalMaterial();

        for ( var i = 0; i < 1000; i ++ ) {

            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = Math.random() * 4000 - 2000;
            mesh.position.y = Math.random() * 4000 - 2000;
            mesh.position.z = Math.random() * 4000 - 2000;
            mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 4 + 2;
            scene.add( mesh );

        }

        scene.matrixAutoUpdate = false;

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.sortObjects = false;
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove(event) {

        mouseX = ( event.clientX - windowHalfX ) * 10;
        mouseY = ( event.clientY - windowHalfY ) * 10;

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.0005;

        sphere.position.x = Math.sin( time * 0.7 ) * 2000;
        sphere.position.y = Math.cos( time * 0.5 ) * 2000;
        sphere.position.z = Math.cos( time * 0.3 ) * 2000;

        for ( var i = 1, l = scene.children.length; i < l; i ++ ) {

            scene.children[ i ].lookAt( sphere.position );

        }

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY - camera.position.y ) * .05;
        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_sound.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container;
    var camera, controls, scene, renderer;
    var light, pointLight;

    var mesh;
    var material_sphere1, material_sphere2;

    var sound1, sound2;

    var clock = new THREE.Clock();

    var Sound = function ( sources, radius, volume ) {

        var audio = <HTMLAudioElement>document.createElement( 'audio' );

        for ( var i = 0; i < sources.length; i ++ ) {

            var source = <HTMLSourceElement> document.createElement( 'source' );
            source.src = sources[ i ];

            audio.appendChild( source );

        }

        this.position = new THREE.Vector3();

        this.play = function () {

            audio.play();

        }

        this.update = function ( camera ) {

            var distance = this.position.distanceTo( camera.position );

            if ( distance <= radius ) {

                audio.volume = volume * ( 1 - distance / radius );

            } else {

                audio.volume = 0;

            }

        }

    }

    init();
    animate();

    function init() {

        container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.set( 0, 25, 0 );

        controls = new THREE.FirstPersonControls( camera );

        controls.movementSpeed = 70;
        controls.lookSpeed = 0.05;
        controls.noFly = true;
        controls.lookVertical = false;

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0x000000, 0.0035 );

        light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 0.5, 1 ).normalize();
        scene.add( light );

        var sphere = new THREE.SphereGeometry( 20, 32, 16 );

        material_sphere1 = new THREE.MeshLambertMaterial( { color: 0xffaa00, shading: THREE.FlatShading } );
        material_sphere2 = new THREE.MeshLambertMaterial( { color: 0xff2200, shading: THREE.FlatShading } );

        // sound spheres

        var s = 1;

        var mesh1 = new THREE.Mesh( sphere, material_sphere1 );
        mesh1.position.set( -250, 30, 0 );
        mesh1.scale.set( s, s, s );
        scene.add( mesh1 );

        sound1 = new Sound( [ 'sounds/358232_j_s_song.mp3', 'sounds/358232_j_s_song.ogg' ], 275, 1 );
        sound1.position.copy( mesh1.position );
        sound1.play();

        //

        var mesh2 = new THREE.Mesh( sphere, material_sphere2 );
        mesh2.position.set( 250, 30, 0 );
        mesh2.scale.set( s, s, s );
        scene.add( mesh2 );

        sound2 = new Sound( [ 'sounds/376737_Skullbeatz___Bad_Cat_Maste.mp3', 'sounds/376737_Skullbeatz___Bad_Cat_Maste.ogg' ], 275, 1 );
        sound2.position.copy( mesh2.position );
        sound2.play();


        // ground

        var material = new THREE.MeshLambertMaterial( { color: 0x7f7566, wireframe: true, wireframeLinewidth: 1 } );

        mesh = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000, 100, 100 ), material );
        mesh.position.y = 0.1;
        mesh.rotation.x = - Math.PI / 2;
        scene.add( mesh );

        //

        renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1, antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.innerHTML = "";
        container.appendChild( renderer.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        controls.handleResize();

    }

    function animate() {

        requestAnimationFrame( animate );
        render();

    }


    function render() {

        var delta = clock.getDelta(),
            time = clock.getElapsedTime() * 5;

        controls.update( delta );

        material_sphere1.color.setHSL( 0.0, 0.3 + 0.7 * ( 1 + Math.cos( time ) ) / 2, 0.5 );
        material_sphere2.color.setHSL( 0.1, 0.3 + 0.7 * ( 1 + Math.sin( time ) ) / 2, 0.5 );

        renderer.render( scene, camera );

        sound1.update( camera );
        sound2.update( camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_ubiquity_test.html

()=>{
    var SCREEN_WIDTH = window.innerWidth / 2;
    var SCREEN_HEIGHT = window.innerHeight / 2;
    var AMOUNT = 100;

    var container, stats;

    var camera, scene;
    var canvasRenderer, svgRenderer, softwareRenderer, webglRenderer;

    var mesh, group;

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 100000 );
        camera.position.z = 500;

        scene = new THREE.Scene();

        // QRCODE

        mesh = new THREE.Mesh( new Qrcode(), new THREE.MeshLambertMaterial( { /*emissive: 0xff0000,*/ vertexColors: THREE.FaceColors } ) );
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 2;
        scene.add( mesh );

        // CUBES

        var cube = new THREE.CubeGeometry( 100, 100, 100 );

        mesh = new THREE.Mesh( cube, new THREE.MeshBasicMaterial( { color: 0x0000ff, opacity: 0.5, transparent: true } ) );
        mesh.position.x = 500;
        mesh.rotation.x = Math.random();
        mesh.rotation.y = Math.random();
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 2;
        scene.add( mesh );

        mesh = new THREE.Mesh( cube, new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ) );
        mesh.position.x = 500;
        mesh.position.y = 500;
        mesh.rotation.x = Math.random();
        mesh.rotation.y = Math.random();
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 2;
        scene.add( mesh );

        // PLANE

        mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, side: THREE.DoubleSide } ) );
        mesh.position.y = -500;
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 2;
        scene.add( mesh );

        // CYLINDER

        mesh = new THREE.Mesh( new THREE.CylinderGeometry( 20, 100, 200, 10 ), new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ) );
        mesh.position.x = -500;
        mesh.rotation.x = - Math.PI / 2;
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 2;
        scene.add( mesh );

        // POLYFIELD

        var geometry = new THREE.Geometry();
        var materials = [];

        for ( var i = 0; i < 100; i ++ ) {

            var v = new THREE.Vector3( Math.random() * 1000 - 500, Math.random() * 1000 - 500, Math.random() * 1000 - 500 );

            var v0 = new THREE.Vector3( Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50 );
            var v1 = new THREE.Vector3( Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50 );
            var v2 = new THREE.Vector3( Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50 );

            v0.add( v );
            v1.add( v );
            v2.add( v );

            var face = new THREE.Face3( geometry.vertices.push( v0 ) - 1, geometry.vertices.push( v1 ) - 1, geometry.vertices.push( v2 ) - 1, null, null, i );

            geometry.faces.push( face );

            materials.push( new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, side: THREE.DoubleSide } ) );

        }

        geometry.computeFaceNormals();
        geometry.computeCentroids();

        group = new THREE.Object3D();
        group.scale.x = group.scale.y = group.scale.z = 2;
        scene.add( group );

        mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
        group.add( mesh );

        // LIGHTS

        var ambient = new THREE.AmbientLight( 0x80ffff );
        scene.add( ambient );

        var directional = new THREE.DirectionalLight( 0xffff00 );
        directional.position.set( - 1, 0.5, 0 );
        scene.add( directional );

        canvasRenderer = new THREE.CanvasRenderer();
        canvasRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        container.appendChild( canvasRenderer.domElement );

        svgRenderer = new THREE.SVGRenderer();
        svgRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        svgRenderer.setQuality( 'low' );
        container.appendChild( svgRenderer.domElement );

        softwareRenderer = new THREE.SoftwareRenderer();
        softwareRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        container.appendChild( softwareRenderer.domElement );

        webglRenderer = new THREE.WebGLRenderer( { antialias: true } );
        webglRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        container.appendChild( webglRenderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        SCREEN_WIDTH = window.innerWidth / 2;
        SCREEN_HEIGHT = window.innerHeight / 2;

        camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
        camera.updateProjectionMatrix();

        canvasRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        svgRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        softwareRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        webglRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

    }

    function onDocumentMouseMove(event) {

        mouseX = ( event.clientX - windowHalfX );
        mouseY = ( event.clientY - windowHalfY );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY - camera.position.y ) * .05;
        camera.lookAt( scene.position );

        group.rotation.y += 0.01;

        canvasRenderer.render( scene, camera );
        svgRenderer.render( scene, camera );
        softwareRenderer.render( scene, camera );
        webglRenderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/misc_uv_tests.html

()=>{
        /* 
     * This is to help debug UVs problems in geometry, 
     * as well as allow a new user to visualize what UVs are about. 
     */


    function test(name, geometry) {
      
      var d = document.createElement('div');
      d.innerHTML = '<br><br>' + name + '<br>';
      d.appendChild(THREE.UVsDebug(geometry));
      document.body.appendChild(d);
      
    }


    test('new THREE.PlaneGeometry( 100, 100, 4, 4 )', new THREE.PlaneGeometry( 100, 100, 4, 4 ));
    test('new THREE.SphereGeometry( 75, 12, 6 )', new THREE.SphereGeometry( 75, 12, 6 ));

    test('new THREE.IcosahedronGeometry( 30, 1 )', new THREE.IcosahedronGeometry( 30, 1 ));
    test('new THREE.OctahedronGeometry( 30, 2 )', new THREE.OctahedronGeometry( 30, 2 ));

    test('new THREE.CylinderGeometry( 25, 75, 100, 10, 5 )', new THREE.CylinderGeometry( 25, 75, 100, 10, 5 ));

    test('new THREE.CubeGeometry( 100, 100, 100, 4, 4, 4 )', new THREE.CubeGeometry( 100, 100, 100, 4, 4, 4 ));

    var points = [];

    for ( var i = 0; i < 10; i ++ ) {

        points.push( new THREE.Vector3( Math.sin( i * 0.2 ) * 15 + 50, 0, ( i - 5 ) * 2 ) );

    }


    test('new THREE.LatheGeometry( points, 8 )', new THREE.LatheGeometry( points, 8 ));
    test('new THREE.TorusGeometry( 50, 20, 8, 8 )', new THREE.TorusGeometry( 50, 20, 8, 8 ));
    test('new THREE.TorusKnotGeometry( 50, 10, 12, 6 )', new THREE.TorusKnotGeometry( 50, 10, 12, 6 ));

    /*
    Not sure how UVs for ExtrudeGeometry are done currently...
    */

    var pts = [], starPoints = 5, l;
    for (i=0; i<starPoints*2;i++) {
      if (i%2==1) {
        l = 5;
      } else {
        l = 10;
      }

      var a = i / starPoints * Math.PI;
      pts.push(new THREE.Vector2(Math.cos(a) * l,Math.sin(a) * l ));
    }
    var starShape = new THREE.Shape(pts);
    var extrudeSettings = { amount: 200,  bevelEnabled: true, bevelSegments: 2, steps: 10 }; 

    test('new THREE.ExtrudeGeometry(starShape, extrudeSettings);', new THREE.ExtrudeGeometry(starShape, extrudeSettings));

    var uvGenerator = new THREE.UVsUtils.CylinderUVGenerator();
            var testShape = setupShape(8, 3);
            var holeShape = setupShape(8, 2);
            testShape.holes.push(holeShape);

    function setupShape(n, r) {
            // Make shape
            var sh = new THREE.Shape();
            for (var i = 0; i < n;i++) {
                var method = i ? 'lineTo' : 'moveTo';
                var a = (i/n) * Math.PI * 2;
                var x = Math.cos(a) * r;
                var y = Math.sin(a) * r;
                sh[method](x, y);
            }

            return sh;
        }

    var exoption = {
        bevelEnabled: true,
        bevelSize: 1,
        amount: 3,
        extrudeMaterial: 0,
        material: 1,
        uvGenerator: uvGenerator
    };

    var geom = testShape.extrude(exoption);
    test('new THREE.ExtrudeGeometry with CylinderUVGenerator;', geom);
};

// https://github.com/mrdoob/three.js/blob/master/examples/software_sandbox.html

()=>{
    var container, stats;

    var camera, controls, scene, renderer;

    var torus, cube;

    var start = Date.now();

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        var info = document.createElement( 'div' );
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="https://github.com/mrdoob/three.js/" target="_blank">three.js<a/> - software renderer<br/>drag to change the point of view';
        container.appendChild( info );

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.z = 600;

        controls = new THREE.TrackballControls( camera );

        scene = new THREE.Scene();

        torus = new THREE.Mesh( new THREE.TorusKnotGeometry( 150 ), new THREE.MeshBasicMaterial( { color: 0x0000ff } ) );
        scene.add( torus );

        // Plane

        cube = new THREE.Mesh( new THREE.CubeGeometry( 200, 200, 200 ), new THREE.MeshBasicMaterial( { color: 0x00ff00 } ) );
        scene.add( cube );

        renderer = new THREE.SoftwareRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var timer = Date.now() - start;

        torus.position.y = Math.sin( timer * 0.002 ) * 150;
        torus.rotation.x = timer * 0.0003;
        torus.rotation.z = timer * 0.0002;

        cube.rotation.x = timer * 0.0002;
        cube.rotation.z = timer * 0.0003;


        controls.update();

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_cloth.html


declare var cloth: any;
declare var clothFunction: any;
declare var ballSize: number;
declare var windStrength: number;
declare var windForce: THREE.Vector3;
declare function simulate(time: number);
declare var ballPosition: THREE.Vector3;
()=>{
    /* testing cloth simulation */

    var pinsFormation = [];
    var pins = [6];

    pinsFormation.push( pins );

    pins = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    pinsFormation.push( pins );

    pins = [ 0 ];
    pinsFormation.push( pins );

    pins = []; // cut the rope ;)
    pinsFormation.push( pins );

    pins = [ 0, cloth.w ]; // classic 2 pins
    pinsFormation.push( pins );

    pins = pinsFormation[ 1 ];


    function togglePins() {

        pins = pinsFormation[ ~~( Math.random() * pinsFormation.length ) ];

    }

    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;
    var camera, scene, renderer;

    var clothGeometry;
    var sphere;
    var object, arrow;

    var rotate = true;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        // scene

        scene = new THREE.Scene();

        scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );

        // camera

        camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.y = 50;
        camera.position.z = 1500;
        scene.add( camera );

        // lights

        var light, materials;

        scene.add( new THREE.AmbientLight( 0x666666 ) );

        light = new THREE.DirectionalLight( 0xdfebff, 1.75 );
        light.position.set( 50, 200, 100 );
        light.position.multiplyScalar( 1.3 );

        light.castShadow = true;
        //light.shadowCameraVisible = true;

        light.shadowMapWidth = 2048;
        light.shadowMapHeight = 2048;

        var d = 300;

        light.shadowCameraLeft = -d;
        light.shadowCameraRight = d;
        light.shadowCameraTop = d;
        light.shadowCameraBottom = -d;

        light.shadowCameraFar = 1000;
        light.shadowDarkness = 0.5;

        scene.add( light );

        light = new THREE.DirectionalLight( 0x3dff0c, 0.35 );
        light.position.set( 0, -1, 0 );

        scene.add( light );

        // cloth material

        var clothTexture = THREE.ImageUtils.loadTexture( 'textures/patterns/circuit_pattern.png' );
        clothTexture.wrapS = clothTexture.wrapT = THREE.RepeatWrapping;
        clothTexture.anisotropy = 16;

        var clothMaterial = new THREE.MeshPhongMaterial( { alphaTest: 0.5, ambient: 0xffffff, color: 0xffffff, specular: 0x030303, emissive: 0x111111, shiness: 10, map: clothTexture, side: THREE.DoubleSide } );

        // cloth geometry
        clothGeometry = new THREE.ParametricGeometry( clothFunction, cloth.w, cloth.h, true );
        clothGeometry.dynamic = true;
        clothGeometry.computeFaceNormals();

        var uniforms = { texture:  { type: "t", value: clothTexture } };
        var vertexShader = document.getElementById( 'vertexShaderDepth' ).textContent;
        var fragmentShader = document.getElementById( 'fragmentShaderDepth' ).textContent;

        // cloth mesh

        object = new THREE.Mesh( clothGeometry, clothMaterial );
        object.position.set( 0, 0, 0 );
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add( object );

		// TS bug: https://typescript.codeplex.com/workitem/2036
        //object.customDepthMaterial = new THREE.ShaderMaterial( { uniforms: uniforms, vertexShader: vertexShader, fragmentShader: fragmentShader } );
        object.customDepthMaterial = new THREE.ShaderMaterial( { uniforms: <THREE.Uniforms><any>uniforms, vertexShader: vertexShader, fragmentShader: fragmentShader } );

        // sphere

        var ballGeo = new THREE.SphereGeometry( ballSize, 20, 20 );
        var ballMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );

        sphere = new THREE.Mesh( ballGeo, ballMaterial );
        sphere.castShadow = true;
        sphere.receiveShadow = true;
        scene.add( sphere );

        // arrow

        arrow = new THREE.ArrowHelper( new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( 0, 0, 0 ), 50, 0xff0000 );
        arrow.position.set( -200, 0, -200 );
        // scene.add( arrow );

        // ground

        var initColor = new THREE.Color( 0x497f13 );
        var initTexture = THREE.ImageUtils.generateDataTexture( 1, 1, initColor );

        var groundMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: initTexture } );

        var groundTexture = THREE.ImageUtils.loadTexture( "textures/terrain/grasslight-big.jpg", undefined, function() { groundMaterial.map = groundTexture } );
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set( 25, 25 );
        groundTexture.anisotropy = 16;

        var mesh = new THREE.Mesh( new THREE.PlaneGeometry( 20000, 20000 ), groundMaterial );
        mesh.position.y = -250;
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add( mesh );

        // poles

        var poleGeo = new THREE.CubeGeometry( 5, 375, 5 );
        var poleMat = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shiness: 100 } );

        var mesh = new THREE.Mesh( poleGeo, poleMat );
        mesh.position.x = -125;
        mesh.position.y = -62;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        scene.add( mesh );

        var mesh = new THREE.Mesh( poleGeo, poleMat );
        mesh.position.x = 125;
        mesh.position.y = -62;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        scene.add( mesh );

        var mesh = new THREE.Mesh( new THREE.CubeGeometry( 255, 5, 5 ), poleMat );
        mesh.position.y = -250 + 750/2;
        mesh.position.x = 0;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        scene.add( mesh );

        var gg = new THREE.CubeGeometry( 10, 10, 10 );
        var mesh = new THREE.Mesh( gg, poleMat );
        mesh.position.y = -250;
        mesh.position.x = 125;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        scene.add( mesh );

        var mesh = new THREE.Mesh( gg, poleMat );
        mesh.position.y = -250;
        mesh.position.x = -125;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        scene.add( mesh );

        //

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor( scene.fog.color );

        container.appendChild( renderer.domElement );

        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.physicallyBasedShading = true;

        renderer.shadowMapEnabled = true;

        //

        stats = new Stats();
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

        sphere.visible = !true

    }

    //

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        var time = Date.now();

        windStrength = Math.cos( time / 7000 ) * 20 + 40;
        windForce.set( Math.sin( time / 2000 ), Math.cos( time / 3000 ), Math.sin( time / 1000 ) ).normalize().multiplyScalar( windStrength );
        arrow.setLength( windStrength );
        arrow.setDirection( windForce );

        simulate(time);
        render();
        stats.update();

    }

    function render() {

        var timer = Date.now() * 0.0002;

        var p = cloth.particles;

        for ( var i = 0, il = p.length; i < il; i ++ ) {

            clothGeometry.vertices[ i ].copy( p[ i ].position );

        }

        clothGeometry.computeFaceNormals();
        clothGeometry.computeVertexNormals();

        clothGeometry.normalsNeedUpdate = true;
        clothGeometry.verticesNeedUpdate = true;

        sphere.position.copy( ballPosition );

        if ( rotate ) {

            camera.position.x = Math.cos( timer ) * 1500;
            camera.position.z = Math.sin( timer ) * 1500;

        }

        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_skinning.html

()=>{

    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    window.onload = init;

    var container, stats;

    var camera, scene, renderer;

    var mesh, light;

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var animations = [];
    var buffalos = [];
    var offset = [];

    var floor, dz = 0, dstep = -10, playback = false;

    var clock = new THREE.Clock();

    function init() {

        container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.set( 0, 185, 2500 );

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0xfff4e5, 0.0003 );

        light = new THREE.DirectionalLight( 0xffffff, 1.5 );
        light.position.set( 0, 1, 1 ).normalize();
        scene.add( light );

        var planeSimple = new THREE.PlaneGeometry( 200, 300 );
        var planeTesselated = new THREE.PlaneGeometry( 100, 300, 25, 40 );
        var matWire = new THREE.MeshBasicMaterial( { color: 0x110000, wireframe: true, wireframeLinewidth: 2 } );
        var matSolid = new THREE.MeshBasicMaterial( { color: 0xffb23f } );

        floor = new THREE.Mesh( planeSimple, matSolid );
        floor.position.y = -10;
        floor.rotation.x = - Math.PI / 2;
        floor.scale.set( 25, 25, 25 );
        scene.add( floor );

        floor = new THREE.Mesh( planeTesselated, matWire );
        floor.rotation.x = - Math.PI / 2;
        floor.scale.set( 25, 25, 25 );
        scene.add( floor );

        renderer = new THREE.WebGLRenderer( { clearColor: 0xffffff, clearAlpha: 1, antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor( scene.fog.color, 1 );
        renderer.sortObjects = false;

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'click', startAnimation, false );

        var loader = new THREE.JSONLoader();
        loader.load( "obj/buffalo/buffalo.js", createScene );

        //

        window.addEventListener( 'resize', onWindowResize, false );

        //

        loop();

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function createScene( geometry, materials ) {

        buffalos = [];
        animations = [];

        var x:number, y,
            buffalo, animation,
            gridx = 25, gridz = 15,
            sepx  = 150, sepz = 300;

        var material = new THREE.MeshFaceMaterial( materials );

        var originalMaterial = materials[ 0 ];

        originalMaterial.skinning = true;
        originalMaterial.transparent = true;
        originalMaterial.alphaTest = 0.75;

        THREE.AnimationHandler.add( geometry.animation );

        for(var x = 0; x < gridx; x ++ ) {

            for(var z = 0; z < gridz; z ++ ) {

                buffalo = new THREE.SkinnedMesh( geometry, material, false );

                buffalo.position.x = - ( gridx - 1 ) * sepx * 0.5 + x * sepx + Math.random() * 0.5 * sepx;
                buffalo.position.z = - ( gridz - 1 ) * sepz * 0.5 + z * sepz + Math.random() * 0.5 * sepz - 500;

                buffalo.position.y = buffalo.geometry.boundingSphere.radius * 0.5;
                buffalo.rotation.y = 0.2 - Math.random() * 0.4;

                scene.add( buffalo );

                buffalos.push( buffalo );

                animation = new THREE.Animation( buffalo, "take_001" );
                animations.push( animation );

                offset.push( Math.random() );

            }

        }

    }

    function startAnimation() {

        for( var i = 0; i < animations.length; i ++ ) {

            animations[ i ].offset = 0.05 * Math.random();
            animations[ i ].play();

        }

        dz = dstep;
        playback = true;

    }


    function onDocumentMouseMove( event ) {

        mouseX = ( event.clientX - windowHalfX );
        mouseY = ( event.clientY - windowHalfY );

    }

    function loop() {

        requestAnimationFrame( loop );

        var delta = clock.getDelta();

        THREE.AnimationHandler.update( delta );

        camera.position.x += ( mouseX - camera.position.x ) * 0.05;
        camera.lookAt( scene.position );

        if ( buffalos && playback ) {

            var elapsed = clock.getElapsedTime();

            camera.position.z += 2 * Math.sin( elapsed );

            for(var i = 0; i < buffalos.length; i++ ) {

                buffalos[ i ].position.z += 2 * Math.sin( elapsed + offset[ i ] );

            }

        }

        floor.position.z += dz;
        if( floor.position.z < -500 ) floor.position.z = 0;


        renderer.render( scene, camera );

        stats.update();

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_skinning_morph.html

()=>{
    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;
    var FLOOR = -250;

    var container,stats;

    var camera, scene;
    var renderer;

    var mesh;

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var clock = new THREE.Clock();

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    init();
    animate();

    function init() {

        container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 30, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
        camera.position.z = 2200;

        scene = new THREE.Scene();

        scene.fog = new THREE.Fog( 0xffffff, 2000, 10000 );

        scene.add( camera );

        // GROUND

        var groundMaterial = new THREE.MeshPhongMaterial( { emissive: 0xbbbbbb } );
        var planeGeometry = new THREE.PlaneGeometry( 16000, 16000 );

        var ground = new THREE.Mesh( planeGeometry, groundMaterial );
        ground.position.set( 0, FLOOR, 0 );
        ground.rotation.x = -Math.PI/2;
        scene.add( ground );

        ground.receiveShadow = true;


        // LIGHTS

        var ambient = new THREE.AmbientLight( 0x222222 );
        scene.add( ambient );


        var light = new THREE.DirectionalLight( 0xebf3ff, 1.6 );
        light.position.set( 0, 140, 500 ).multiplyScalar( 1.1 );
        scene.add( light );

        light.castShadow = true;

        light.shadowMapWidth = 2048;
        light.shadowMapHeight = 2048;

        var d = 390;

        light.shadowCameraLeft = -d * 2;
        light.shadowCameraRight = d * 2;
        light.shadowCameraTop = d * 1.5;
        light.shadowCameraBottom = -d;

        light.shadowCameraFar = 3500;
        //light.shadowCameraVisible = true;

        //

        var light = new THREE.DirectionalLight( 0x497f13, 1 );
        light.position.set( 0, -1, 0 );
        scene.add( light );

        // RENDERER

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        renderer.domElement.style.position = "relative";

        renderer.setClearColor( scene.fog.color, 1 );

        container.appendChild( renderer.domElement );

        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.physicallyBasedShading = true;

        renderer.shadowMapEnabled = true;


        // STATS

        stats = new Stats();
        container.appendChild( stats.domElement );

        //

        var loader = new THREE.JSONLoader();
        loader.load( "models/skinned/knight.js", function ( geometry, materials ) { createScene( geometry, materials, 0, FLOOR, -300, 60 ) } );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function ensureLoop( animation ) {

        for ( var i = 0; i < animation.hierarchy.length; i ++ ) {

            var bone = animation.hierarchy[ i ];

            var first = bone.keys[ 0 ];
            var last = bone.keys[ bone.keys.length - 1 ];

            last.pos = first.pos;
            last.rot = first.rot;
            last.scl = first.scl;

        }

    }

    function createScene( geometry, materials, x, y, z, s ) {

        ensureLoop( geometry.animation );

        geometry.computeBoundingBox();
        var bb = geometry.boundingBox;

        THREE.AnimationHandler.add( geometry.animation );

        var path = "textures/cube/Park2/";
        var format = '.jpg';
        var urls = [
                path + 'posx' + format, path + 'negx' + format,
                path + 'posy' + format, path + 'negy' + format,
                path + 'posz' + format, path + 'negz' + format
            ];


        //var envMap = THREE.ImageUtils.loadTextureCube( urls );

        //var map = THREE.ImageUtils.loadTexture( "textures/ash_uvgrid01.jpg" );

        //var bumpMap = THREE.ImageUtils.generateDataTexture( 1, 1, new THREE.Color() );
        //var bumpMap = THREE.ImageUtils.loadTexture( "textures/water.jpg" );

        for ( var i = 0; i < materials.length; i ++ ) {

            var m = materials[ i ];
            m.skinning = true;
            m.morphTargets = true;

            m.specular.setHSL( 0, 0, 0.1 );

            m.color.setHSL( 0.6, 0, 0.6 );
            m.ambient.copy( m.color );

            //m.map = map;
            //m.envMap = envMap;
            //m.bumpMap = bumpMap;
            //m.bumpScale = 2;

            //m.combine = THREE.MixOperation;
            //m.reflectivity = 0.75;

            m.wrapAround = true;

        }

        mesh = new THREE.SkinnedMesh( geometry, new THREE.MeshFaceMaterial( materials ) );
        mesh.position.set( x, y - bb.min.y * s, z );
        mesh.scale.set( s, s, s );
        scene.add( mesh );

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        var animation = new THREE.Animation( mesh, geometry.animation.name );
        animation.interpolationType = THREE.AnimationHandler.LINEAR;

        animation.play();

    }

    function onDocumentMouseMove( event ) {

        mouseX = ( event.clientX - windowHalfX );
        mouseY = ( event.clientY - windowHalfY );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var delta = 0.75 * clock.getDelta();

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y = THREE.Math.clamp( camera.position.y + ( - mouseY - camera.position.y ) * .05, 0, 1000 );

        camera.lookAt( scene.position );

        // update skinning

        THREE.AnimationHandler.update( delta );

        // update morphs

        if ( mesh ) {

            var time = Date.now() * 0.001;

            // mouth

            mesh.morphTargetInfluences[ 1 ] = ( 1 + Math.sin( 4 * time ) ) / 2;

            // frown ?

            mesh.morphTargetInfluences[ 2 ] = ( 1 + Math.sin( 2 * time ) ) / 2;

            // eyes

            mesh.morphTargetInfluences[ 3 ] = ( 1 + Math.cos( 4 * time ) ) / 2;

        }

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_buffergeometry.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, scene, renderer;

    var mesh;

    init();
    animate();

    function init() {

        container = document.getElementById( 'container' );

        //

        camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 1, 3500 );
        camera.position.z = 2750;

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog( 0x050505, 2000, 3500 );

        //

        scene.add( new THREE.AmbientLight( 0x444444 ) );

        var light1 = new THREE.DirectionalLight( 0xffffff, 0.5 );
        light1.position.set( 1, 1, 1 );
        scene.add( light1 );

        var light2 = new THREE.DirectionalLight( 0xffffff, 1.5 );
        light2.position.set( 0, -1, 0 );
        scene.add( light2 );

        //

        var triangles = 160000;

        var geometry = new THREE.BufferGeometry();
        geometry.attributes = {
            index: {
                itemSize: 1,
                array: new Uint16Array( triangles * 3 ),
                numItems: triangles * 3
            },
            position: {
                itemSize: 3,
                array: new Float32Array( triangles * 3 * 3 ),
                numItems: triangles * 3 * 3
            },
            normal: {
                itemSize: 3,
                array: new Float32Array( triangles * 3 * 3 ),
                numItems: triangles * 3 * 3
            },
            color: {
                itemSize: 3,
                array: new Float32Array( triangles * 3 * 3 ),
                numItems: triangles * 3 * 3
            }
        }

        // break geometry into
        // chunks of 21,845 triangles (3 unique vertices per triangle)
        // for indices to fit into 16 bit integer number
        // floor(2^16 / 3) = 21845

        var chunkSize = 21845;

        var indices = geometry.attributes.index.array;

        for ( var i = 0; i < indices.length; i ++ ) {

            indices[ i ] = i % ( 3 * chunkSize );

        }

        var positions = geometry.attributes.position.array;
        var normals = geometry.attributes.normal.array;
        var colors = geometry.attributes.color.array;

        var color = new THREE.Color();

        var n = 800, n2 = n/2;  // triangles spread in the cube
        var d = 12, d2 = d/2;   // individual triangle size

        var pA = new THREE.Vector3();
        var pB = new THREE.Vector3();
        var pC = new THREE.Vector3();

        var cb = new THREE.Vector3();
        var ab = new THREE.Vector3();

        for ( var i = 0; i < positions.length; i += 9 ) {

            // positions

            var x = Math.random() * n - n2;
            var y = Math.random() * n - n2;
            var z = Math.random() * n - n2;

            var ax = x + Math.random() * d - d2;
            var ay = y + Math.random() * d - d2;
            var az = z + Math.random() * d - d2;

            var bx = x + Math.random() * d - d2;
            var by = y + Math.random() * d - d2;
            var bz = z + Math.random() * d - d2;

            var cx = x + Math.random() * d - d2;
            var cy = y + Math.random() * d - d2;
            var cz = z + Math.random() * d - d2;

            positions[ i ]     = ax;
            positions[ i + 1 ] = ay;
            positions[ i + 2 ] = az;

            positions[ i + 3 ] = bx;
            positions[ i + 4 ] = by;
            positions[ i + 5 ] = bz;

            positions[ i + 6 ] = cx;
            positions[ i + 7 ] = cy;
            positions[ i + 8 ] = cz;

            // flat face normals

            pA.set( ax, ay, az );
            pB.set( bx, by, bz );
            pC.set( cx, cy, cz );

            cb.subVectors( pC, pB );
            ab.subVectors( pA, pB );
            cb.cross( ab );

            cb.normalize();

            var nx = cb.x;
            var ny = cb.y;
            var nz = cb.z;

            normals[ i ]     = nx;
            normals[ i + 1 ] = ny;
            normals[ i + 2 ] = nz;

            normals[ i + 3 ] = nx;
            normals[ i + 4 ] = ny;
            normals[ i + 5 ] = nz;

            normals[ i + 6 ] = nx;
            normals[ i + 7 ] = ny;
            normals[ i + 8 ] = nz;

            // colors

            var vx = ( x / n ) + 0.5;
            var vy = ( y / n ) + 0.5;
            var vz = ( z / n ) + 0.5;

            //color.setHSV( 0.5 + 0.5 * vx, 0.25 + 0.75 * vy, 0.25 + 0.75 * vz );
            color.setRGB( vx, vy, vz );

            colors[ i ]     = color.r;
            colors[ i + 1 ] = color.g;
            colors[ i + 2 ] = color.b;

            colors[ i + 3 ] = color.r;
            colors[ i + 4 ] = color.g;
            colors[ i + 5 ] = color.b;

            colors[ i + 6 ] = color.r;
            colors[ i + 7 ] = color.g;
            colors[ i + 8 ] = color.b;

        }

        geometry.offsets = [];

        var offsets = triangles / chunkSize;

        for ( var i = 0; i < offsets; i ++ ) {

            var offset = {
                start: i * chunkSize * 3,
                index: i * chunkSize * 3,
                count: Math.min( triangles - ( i * chunkSize ), chunkSize ) * 3
            };

            geometry.offsets.push( offset );

        }

        geometry.computeBoundingSphere();

        var material = new THREE.MeshPhongMaterial( {
                color: 0xaaaaaa, ambient: 0xaaaaaa, specular: 0xffffff, shininess: 250,
                side: THREE.DoubleSide, vertexColors: THREE.VertexColors
        } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        //

        renderer = new THREE.WebGLRenderer( { antialias: false, clearColor: 0x333333, clearAlpha: 1, alpha: false } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor( scene.fog.color, 1 );

        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.physicallyBasedShading = true;

        container.appendChild( renderer.domElement );

        //

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.001;

        mesh.rotation.x = time * 0.25;
        mesh.rotation.y = time * 0.5;

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_buffergeometry_lines.html

()=>{

    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, scene, renderer;

    var mesh;

    init();
    animate();

    function init() {

        container = document.getElementById( 'container' );

        //

        camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 1, 4000 );
        camera.position.z = 2750;

        scene = new THREE.Scene();


        var segments = 10000;

        var geometry = new THREE.BufferGeometry();
        var material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors });

        geometry.attributes = {
            position: {
                itemSize: 3,
                array: new Float32Array(segments * 3),
                numItems: segments * 3
            },
            color: {
                itemSize: 3,
                array: new Float32Array(segments * 3),
                numItems: segments * 3
            }
        };

        var positions = geometry.attributes.position.array;
        var colors = geometry.attributes.color.array;

        var r = 800;

        for ( var i = 0; i < segments; i ++ ) {

            var x = Math.random() * r - r / 2;
            var y = Math.random() * r - r / 2;
            var z = Math.random() * r - r / 2;

            // positions

            positions[ i * 3 ] = x;
            positions[ i * 3 + 1 ] = y;
            positions[ i * 3 + 2 ] = z;

            // colors

            colors[ i * 3 ] = ( x / r ) + 0.5;
            colors[ i * 3 + 1 ] = ( y / r ) + 0.5;
            colors[ i * 3 + 2 ] = ( z / r ) + 0.5;

        }

        geometry.computeBoundingSphere();

        mesh = new THREE.Line( geometry, material );
        scene.add( mesh );

        //

        renderer = new THREE.WebGLRenderer( { antialias: false, clearColor: 0x000000, clearAlpha: 0, alpha: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );

        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.physicallyBasedShading = true;

        container.appendChild( renderer.domElement );

        //

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.001;

        mesh.rotation.x = time * 0.25;
        mesh.rotation.y = time * 0.5;

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_buffergeometry_particles.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, scene, renderer;

    var mesh;

    var particleSystem;

    init();
    animate();

    function init() {

        container = document.getElementById( 'container' );

        //

        camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 5, 3500 );
        camera.position.z = 2750;

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog( 0x050505, 2000, 3500 );

        //

        var particles = 500000;

        var geometry = new THREE.BufferGeometry();
        geometry.attributes = {

            position: {
                itemSize: 3,
                array: new Float32Array( particles * 3 ),
                numItems: particles * 3
            },
            color: {
                itemSize: 3,
                array: new Float32Array( particles * 3 ),
                numItems: particles * 3
            }

        }


        var positions = geometry.attributes.position.array;
        var colors = geometry.attributes.color.array;

        var color = new THREE.Color();

        var n = 1000, n2 = n / 2; // particles spread in the cube

        for ( var i = 0; i < positions.length; i += 3 ) {

            // positions

            var x = Math.random() * n - n2;
            var y = Math.random() * n - n2;
            var z = Math.random() * n - n2;

            positions[ i ]     = x;
            positions[ i + 1 ] = y;
            positions[ i + 2 ] = z;

            // colors

            var vx = ( x / n ) + 0.5;
            var vy = ( y / n ) + 0.5;
            var vz = ( z / n ) + 0.5;

            color.setRGB( vx, vy, vz );

            colors[ i ]     = color.r;
            colors[ i + 1 ] = color.g;
            colors[ i + 2 ] = color.b;

        }

        geometry.computeBoundingSphere();

        //

        var material = new THREE.ParticleSystemMaterial( { size: 15, vertexColors: true } );

        particleSystem = new THREE.ParticleSystem( geometry, material );
        scene.add( particleSystem );

        //

        renderer = new THREE.WebGLRenderer( { antialias: false, clearColor: 0x333333, clearAlpha: 1, alpha: false } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor( scene.fog.color, 1 );

        container.appendChild( renderer.domElement );

        //

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.001;

        particleSystem.rotation.x = time * 0.25;
        particleSystem.rotation.y = time * 0.5;

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_camera.html

()=>{
    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;

    var container, stats;
    var camera, scene, renderer, mesh;
    var cameraRig, activeCamera, activeHelper;
    var cameraPerspective, cameraOrtho;
    var cameraPerspectiveHelper, cameraOrthoHelper;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        scene = new THREE.Scene();

        //

        camera = new THREE.PerspectiveCamera( 50, 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
        camera.position.z = 2500;

        cameraPerspective = new THREE.PerspectiveCamera( 50, 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT, 150, 1000 );

        cameraPerspectiveHelper = new THREE.CameraHelper( cameraPerspective );
        scene.add( cameraPerspectiveHelper );

        //

        cameraOrtho = new THREE.OrthographicCamera( 0.5 * SCREEN_WIDTH / - 2, 0.5 * SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, SCREEN_HEIGHT / - 2, 150, 1000 );

        cameraOrthoHelper = new THREE.CameraHelper( cameraOrtho );
        scene.add( cameraOrthoHelper );

        //

        activeCamera = cameraPerspective;
        activeHelper = cameraPerspectiveHelper;


        // counteract different front orientation of cameras vs rig

        cameraOrtho.rotation.y = Math.PI;
        cameraPerspective.rotation.y = Math.PI;

        cameraRig = new THREE.Object3D();

        cameraRig.add( cameraPerspective );
        cameraRig.add( cameraOrtho );

        scene.add( cameraRig );

        //

        mesh = new THREE.Mesh( new THREE.SphereGeometry( 100, 16, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } ) );
        scene.add( mesh );

        var mesh2 = new THREE.Mesh( new THREE.SphereGeometry( 50, 16, 8 ), new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } ) );
        mesh2.position.y = 150;
        mesh.add( mesh2 );

        var mesh3 = new THREE.Mesh( new THREE.SphereGeometry( 5, 16, 8 ), new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } ) );
        mesh3.position.z = 150;
        cameraRig.add( mesh3 );

        //

        var geometry = new THREE.Geometry();

        for ( var i = 0; i < 10000; i ++ ) {

            var vertex = new THREE.Vector3();
            vertex.x = THREE.Math.randFloatSpread( 2000 );
            vertex.y = THREE.Math.randFloatSpread( 2000 );
            vertex.z = THREE.Math.randFloatSpread( 2000 );

            geometry.vertices.push( vertex );

        }

        var particles = new THREE.ParticleSystem( geometry, new THREE.ParticleSystemMaterial( { color: 0x888888 } ) );
        scene.add( particles );

        //


        renderer = new THREE.WebGLRenderer( { antialias: true, clearColor: 0x000000, clearAlpha: 1 } );
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        renderer.domElement.style.position = "relative";
        container.appendChild( renderer.domElement );

        renderer.autoClear = false;

        //

        stats = new Stats();
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );
        document.addEventListener( 'keydown', onKeyDown, false );

    }

    //

    function onKeyDown ( event ) {

        switch( event.keyCode ) {

            case 79: /*O*/

                activeCamera = cameraOrtho;
                activeHelper = cameraOrthoHelper;

                break;

            case 80: /*P*/

                activeCamera = cameraPerspective;
                activeHelper = cameraPerspectiveHelper;

                break;

        }

    };

    //

    function onWindowResize( event ) {

        SCREEN_WIDTH = window.innerWidth;
        SCREEN_HEIGHT = window.innerHeight;

        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

        camera.aspect = 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT;
        camera.updateProjectionMatrix();

        cameraPerspective.aspect = 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT;
        cameraPerspective.updateProjectionMatrix();

        cameraOrtho.left   = - 0.5 * SCREEN_WIDTH / 2;
        cameraOrtho.right  =   0.5 * SCREEN_WIDTH / 2;
        cameraOrtho.top    =   SCREEN_HEIGHT / 2;
        cameraOrtho.bottom = - SCREEN_HEIGHT / 2;
        cameraOrtho.updateProjectionMatrix();

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }


    function render() {

        var r = Date.now() * 0.0005;

        mesh.position.x = 700 * Math.cos( r );
        mesh.position.z = 700 * Math.sin( r );
        mesh.position.y = 700 * Math.sin( r );

        mesh.children[ 0 ].position.x = 70 * Math.cos( 2 * r );
        mesh.children[ 0 ].position.z = 70 * Math.sin( r );

        if ( activeCamera === cameraPerspective ) {

            cameraPerspective.fov = 35 + 30 * Math.sin( 0.5 * r );
            cameraPerspective.far = mesh.position.length();
            cameraPerspective.updateProjectionMatrix();

            cameraPerspectiveHelper.update();
            cameraPerspectiveHelper.visible = true;

            cameraOrthoHelper.visible = false;

        } else {

            cameraOrtho.far = mesh.position.length();
            cameraOrtho.updateProjectionMatrix();

            cameraOrthoHelper.update();
            cameraOrthoHelper.visible = true;

            cameraPerspectiveHelper.visible = false;

        }

        cameraRig.lookAt( mesh.position );

        renderer.clear();

        activeHelper.visible = false;

        renderer.setViewport( 0, 0, SCREEN_WIDTH/2, SCREEN_HEIGHT );
        renderer.render( scene, activeCamera );

        activeHelper.visible = true;

        renderer.setViewport( SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2, SCREEN_HEIGHT );
        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_custom_attributes.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var renderer, scene, camera, stats;

    var sphere, uniforms, attributes;

    var noise = [];

    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 30, WIDTH / HEIGHT, 1, 10000 );
        camera.position.z = 300;

        scene = new THREE.Scene();

        attributes = {

            displacement: { type: 'f', value: [] }

        };

        uniforms = {

            amplitude: { type: "f", value: 1.0 },
            color:     { type: "c", value: new THREE.Color( 0xff2200 ) },
            texture:   { type: "t", value: THREE.ImageUtils.loadTexture( "textures/water.jpg" ) },

        };

        uniforms.texture.value.wrapS = uniforms.texture.value.wrapT = THREE.RepeatWrapping;

        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms:       uniforms,
            attributes:     attributes,
            vertexShader:   document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader' ).textContent

        });


        var radius = 50, segments = 128, rings = 64;
        var geometry = new THREE.SphereGeometry( radius, segments, rings );
        geometry.dynamic = true;

        sphere = new THREE.Mesh( geometry, shaderMaterial );

        var vertices = sphere.geometry.vertices;
        var values = attributes.displacement.value;

        for ( var v = 0; v < vertices.length; v++ ) {

            values[ v ] = 0;
            noise[ v ] = Math.random() * 5;

        }

        scene.add( sphere );

        renderer = new THREE.WebGLRenderer( { clearColor: 0x050505, clearAlpha: 1 } );
        renderer.setSize( WIDTH, HEIGHT );

        var container = document.getElementById( 'container' );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.01;

        sphere.rotation.y = sphere.rotation.z = 0.01 * time;

        uniforms.amplitude.value = 2.5 * Math.sin( sphere.rotation.y * 0.125 );
        uniforms.color.value.offsetHSL( 0.0005, 0, 0 );

        for ( var i = 0; i < attributes.displacement.value.length; i ++ ) {

            attributes.displacement.value[ i ] = Math.sin( 0.1 * i + time );

            noise[ i ] += 0.5 * ( 0.5 - Math.random() );
            noise[ i ] = THREE.Math.clamp( noise[ i ], -5, 5 );

            attributes.displacement.value[ i ] += noise[ i ];

        }

        attributes.displacement.needsUpdate = true;

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_custom_attributes_lines.html

()=>{

    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var renderer, scene, camera, stats;

    var object, uniforms, attributes;

    var text = "three.js",

        height = 15,
        size = 50,

        curveSegments = 10,
        steps = 40,

        bevelThickness = 5,
        bevelSize = 1.5,
        bevelSegments = 10,
        bevelEnabled = true,

        font = "helvetiker",        // helvetiker, optimer, gentilis, droid sans, droid serif
        weight = "bold",        // normal bold
        style = "normal";       // normal italic

    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 30, WIDTH / HEIGHT, 1, 10000 );
        camera.position.z = 400;

        scene = new THREE.Scene();

        attributes = {

            displacement: { type: 'v3', value: [] },
            customColor: {  type: 'c', value: [] }

        };

        uniforms = {

            amplitude: { type: "f", value: 5.0 },
            opacity:   { type: "f", value: 0.3 },
            color:     { type: "c", value: new THREE.Color( 0xff0000 ) }

        };

        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms:       uniforms,
            attributes:     attributes,
            vertexShader:   document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
            blending:       THREE.AdditiveBlending,
            depthTest:      false,
            transparent:    true

        });

        (<any>shaderMaterial).linewidth = 1;

        var geometry = new THREE.TextGeometry( text, {

            size: size,
            height: height,
            curveSegments: curveSegments,

            font: font,
            weight: weight,
            style: style,

            bevelThickness: bevelThickness,
            bevelSize: bevelSize,
            bevelEnabled: bevelEnabled,
            bevelSegments: bevelSegments,

            steps: steps

        });

        geometry.dynamic = true;

        THREE.GeometryUtils.center( geometry );

        object = new THREE.Line( geometry, shaderMaterial, THREE.LineStrip );

        var vertices = object.geometry.vertices;

        var displacement = attributes.displacement.value;
        var color = attributes.customColor.value;

        for( var v = 0; v < vertices.length; v ++ ) {

            displacement[ v ] = new THREE.Vector3();

            color[ v ] = new THREE.Color( 0xffffff );
            color[ v ].setHSL( v / vertices.length, 0.5, 0.5 );

        }

        object.rotation.x = 0.2;

        scene.add( object );

        renderer = new THREE.WebGLRenderer( { clearColor: 0x050505, clearAlpha: 1, antialias: true } );
        renderer.setSize( WIDTH, HEIGHT );

        var container = document.getElementById( 'container' );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.001;

        object.rotation.y = 0.25 * time;

        uniforms.amplitude.value = 0.5 * Math.sin( 0.5 * time );
        uniforms.color.value.offsetHSL( 0.0005, 0, 0 );

        var nx, ny, nz, value;

        for( var i = 0, il = attributes.displacement.value.length; i < il; i ++ ) {

            nx = 0.3 * ( 0.5 - Math.random() );
            ny = 0.3 * ( 0.5 - Math.random() );
            nz = 0.3 * ( 0.5 - Math.random() );

            value = attributes.displacement.value[ i ];

            value.x += nx;
            value.y += ny;
            value.z += nz;

        }

        attributes.displacement.needsUpdate = true;

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_custom_attributes_particles.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var renderer, scene, camera, stats;

    var sphere, uniforms, attributes;

    var noise = [];

    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 40, WIDTH / HEIGHT, 1, 10000 );
        camera.position.z = 300;

        scene = new THREE.Scene();

        attributes = {

            size: { type: 'f', value: [] },
            customColor: { type: 'c', value: [] }

        };

        uniforms = {

            amplitude: { type: "f", value: 1.0 },
            color:     { type: "c", value: new THREE.Color( 0xffffff ) },
            texture:   { type: "t", value: THREE.ImageUtils.loadTexture( "textures/sprites/spark1.png" ) },

        };

        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms:       uniforms,
            attributes:     attributes,
            vertexShader:   document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader' ).textContent,

            blending:       THREE.AdditiveBlending,
            depthTest:      false,
            transparent:    true

        });


        var radius = 200;
        var geometry = new THREE.Geometry();

        for ( var i = 0; i < 100000; i++ ) {

            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 2 - 1;
            vertex.y = Math.random() * 2 - 1;
            vertex.z = Math.random() * 2 - 1;
            vertex.multiplyScalar( radius );

            geometry.vertices.push( vertex );

        }

        sphere = new THREE.ParticleSystem( geometry, shaderMaterial );

        sphere.dynamic = true;
        //sphere.sortParticles = true;

        var vertices = sphere.geometry.vertices;
        var values_size = attributes.size.value;
        var values_color = attributes.customColor.value;


        for( var v = 0; v < vertices.length; v++ ) {

            values_size[ v ] = 10;
            values_color[ v ] = new THREE.Color( 0xffaa00 );

            if ( vertices[ v ].x < 0 )
                values_color[ v ].setHSL( 0.5 + 0.1 * ( v / vertices.length ), 0.7, 0.9 );
            else
                values_color[ v ].setHSL( 0.0 + 0.1 * ( v / vertices.length ), 0.9, 0.9 );

        }

        scene.add( sphere );

        renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1 } );
        renderer.setSize( WIDTH, HEIGHT );

        var container = document.getElementById( 'container' );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.005;

        sphere.rotation.z = 0.01 * time;

        for( var i = 0; i < attributes.size.value.length; i++ ) {

            attributes.size.value[ i ] = 14 + 13 * Math.sin( 0.1 * i + time );


        }

        attributes.size.needsUpdate = true;

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_custom_attributes_particles2.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var renderer, scene, camera, stats;

    var sphere, uniforms, attributes;

    var vc1;

    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 45, WIDTH / HEIGHT, 1, 10000 );
        camera.position.z = 300;

        scene = new THREE.Scene();

        attributes = {

            size: { type: 'f', value: [] },
            ca:   { type: 'c', value: [] }

        };

        uniforms = {

            amplitude: { type: "f", value: 1.0 },
            color:     { type: "c", value: new THREE.Color( 0xffffff ) },
            texture:   { type: "t", value: THREE.ImageUtils.loadTexture( "textures/sprites/disc.png" ) },

        };

        uniforms.texture.value.wrapS = uniforms.texture.value.wrapT = THREE.RepeatWrapping;

        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms:       uniforms,
            attributes:     attributes,
            vertexShader:   document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
            transparent:    true

        });


        var radius = 100, segments = 68, rings = 38;
        var geometry = new THREE.SphereGeometry( radius, segments, rings );

        vc1 = geometry.vertices.length;

        var geometry2 = new THREE.CubeGeometry( 0.8 * radius, 0.8 * radius, 0.8 * radius, 10, 10, 10 );

        THREE.GeometryUtils.merge( geometry, geometry2 );

        sphere = new THREE.ParticleSystem( geometry, shaderMaterial );

        sphere.dynamic = true;
        sphere.sortParticles = true;

        var vertices = sphere.geometry.vertices;
        var values_size = attributes.size.value;
        var values_color = attributes.ca.value;

        for( var v = 0; v < vertices.length; v++ ) {

            values_size[ v ] = 10;
            values_color[ v ] = new THREE.Color( 0xffffff );

            if ( v < vc1 ) {

                values_color[ v ].setHSL( 0.01 + 0.1 * ( v / vc1 ), 0.99, ( vertices[ v ].y + radius ) / ( 2 *radius ) );

            } else {

                values_size[ v ] = 40;
                values_color[ v ].setHSL( 0.6, 0.75, 0.5 + vertices[ v ].y / ( 0.8 * radius ) );

            }

        }

        scene.add( sphere );

        renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1 } );
        renderer.setSize( WIDTH, HEIGHT );

        var container = document.getElementById( 'container' );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.005;

        sphere.rotation.y = 0.02 * time;
        sphere.rotation.z = 0.02 * time;

        for( var i = 0; i < attributes.size.value.length; i ++ ) {

            if ( i < vc1 )
                attributes.size.value[ i ] = 16 + 12 * Math.sin( 0.1 * i + time );


        }

        attributes.size.needsUpdate = true;

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_custom_attributes_particles3.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var renderer, scene, camera, stats;

    var object, uniforms, attributes;

    var vc1;

    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 40, WIDTH / HEIGHT, 1, 1000 );
        camera.position.z = 500;

        scene = new THREE.Scene();

        attributes = {

            size: { type: 'f', value: [] },
            ca:   { type: 'c', value: [] }

        };

        uniforms = {

            amplitude: { type: "f", value: 1.0 },
            color:     { type: "c", value: new THREE.Color( 0xffffff ) },
            texture:   { type: "t", value: THREE.ImageUtils.loadTexture( "textures/sprites/ball.png" ) },

        };

        uniforms.texture.value.wrapS = uniforms.texture.value.wrapT = THREE.RepeatWrapping;

        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms:       uniforms,
            attributes:     attributes,
            vertexShader:   document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader' ).textContent

        });


        var radius = 100, inner = 0.6 * radius;
        var geometry = new THREE.Geometry();

        for ( var i = 0; i < 100000; i ++ ) {

            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 2 - 1;
            vertex.y = Math.random() * 2 - 1;
            vertex.z = Math.random() * 2 - 1;
            vertex.multiplyScalar( radius );

            if ( ( vertex.x > inner || vertex.x < -inner ) ||
                 ( vertex.y > inner || vertex.y < -inner ) ||
                 ( vertex.z > inner || vertex.z < -inner )  )

            geometry.vertices.push( vertex );

        }

        vc1 = geometry.vertices.length;

        var m, dummyMaterial = new THREE.MeshFaceMaterial();

        radius = 200;
        var geometry2 = new THREE.CubeGeometry( radius, 0.1 * radius, 0.1 * radius, 50, 5, 5 );

        function addGeo( geo, x, y, z, ry ) {

            m = new THREE.Mesh( geo, dummyMaterial );
            m.position.set( x, y, z );
            m.rotation.y = ry;

            THREE.GeometryUtils.merge( geometry, m );

        }

        // side 1

        addGeo( geometry2, 0,  110,  110, 0 );
        addGeo( geometry2, 0,  110, -110, 0 );
        addGeo( geometry2, 0, -110,  110, 0 );
        addGeo( geometry2, 0, -110, -110, 0 );

        // side 2

        addGeo( geometry2,  110,  110, 0, Math.PI/2 );
        addGeo( geometry2,  110, -110, 0, Math.PI/2 );
        addGeo( geometry2, -110,  110, 0, Math.PI/2 );
        addGeo( geometry2, -110, -110, 0, Math.PI/2 );

        // corner edges

        var geometry3 = new THREE.CubeGeometry( 0.1 * radius, radius * 1.2, 0.1 * radius, 5, 60, 5 );

        addGeo( geometry3,  110, 0,  110, 0 );
        addGeo( geometry3,  110, 0, -110, 0 );
        addGeo( geometry3, -110, 0,  110, 0 );
        addGeo( geometry3, -110, 0, -110, 0 );

        // particle system

        object = new THREE.ParticleSystem( geometry, shaderMaterial );
        object.dynamic = true;

        // custom attributes

        var vertices = object.geometry.vertices;

        var values_size = attributes.size.value;
        var values_color = attributes.ca.value;

        for( var v = 0; v < vertices.length; v ++ ) {

            values_size[ v ] = 10;
            values_color[ v ] = new THREE.Color( 0xffffff );

            if ( v < vc1 ) {

                values_color[ v ].setHSL( 0.5 + 0.2 * ( v / vc1 ), 0.99, 1.0 );

            } else {

                values_size[ v ] = 55;
                values_color[ v ].setHSL( 0.1, 0.99, 1.0 );

            }

        }

        //console.log( vertices.length );

        scene.add( object );

        renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1 } );
        renderer.setSize( WIDTH, HEIGHT );

        var container = document.getElementById( 'container' );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.01;

        object.rotation.y = object.rotation.z = 0.02 * time;

        for( var i = 0; i < attributes.size.value.length; i ++ ) {

            if ( i < vc1 )
                attributes.size.value[ i ] = Math.max(0, 26 + 32 * Math.sin( 0.1 * i + 0.6 * time ));


        }

        attributes.size.needsUpdate = true;

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_custom_attributes_ribbons.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;
    var camera, scene, renderer;

    var materials = [];

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 3000 );
        camera.position.z = 1200;

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0x000000, 0.0016 );

        //

        var vertexShader = document.getElementById( 'vertexShader' ).textContent;
        var fragmentShader = document.getElementById( 'fragmentShader' ).textContent;

        var attributes = { customColor:  { type: 'c',  boundTo: 'vertices', value: [] },
                           position2:    { type: 'v3', boundTo: 'vertices', value: [] }
                          };

        var uniforms =  { ratio: { type: "f", value: 1.0 },
                      color:     { type: "c", value: new THREE.Color( 0xffffff ) }
                    };

		//TS bug: https://typescript.codeplex.com/workitem/2036
        //var material = new THREE.ShaderMaterial( { uniforms: uniforms, attributes: attributes, vertexShader: vertexShader, fragmentShader: fragmentShader, side: THREE.DoubleSide } );
        var material = new THREE.ShaderMaterial( { uniforms: <THREE.Uniforms><any>uniforms, attributes: attributes, vertexShader: vertexShader, fragmentShader: fragmentShader, side: THREE.DoubleSide } );

        var position2 = attributes.position2.value;
        var colors = attributes.customColor.value;

        //

        var geometry = new THREE.Geometry();

        var i, i2;
        var x1, y1, z1;
        var x2, y2, z2;
        var color;

        var n = 200;

        for ( i = -n; i < n; i ++ ) {

            i2 = i + n;

            x1 = 10 * i;
            y1 = - 50 + ( i2 % 2 ) * 100 - Math.cos( 4 * Math.PI * i/n ) * 50;
            z1 = 0;

            x2 = x1;
            y2 = y1 + Math.cos( 4 * Math.PI * i/n ) * 100;
            z2 = z1;

            var h = i2 % 2 ? 1 : 0.15;
            if ( i2 % 4 <= 2 ) h -= 0.15;

            color = new THREE.Color( 0xffffff );
            color.setHSL( 0.1 * Math.random(), 0.15, h );

            position2[ geometry.vertices.length ] = new THREE.Vector3( x2, y2, z2 );
            colors[ geometry.vertices.length ] = color;

            geometry.vertices.push( new THREE.Vector3( x1, y1, z1 ) );

        }
        //

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor( scene.fog.color, 1 );

        container.appendChild( renderer.domElement );

        //

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;

    }

    function onDocumentTouchStart( event ) {

        if ( event.touches.length === 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length === 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.0025;

        //camera.position.x += ( mouseX - camera.position.x ) * 0.036;
        //camera.position.y += ( - mouseY - camera.position.y ) * 0.036;

        camera.lookAt( scene.position );

        for ( var i = 0; i < materials.length; i ++ ) {

            var uniforms = materials[ i ].uniforms;
            uniforms.ratio.value = 0.5 * ( Math.sin( time ) + 1 );

        }

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometries.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, scene, renderer;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.y = 400;

        scene = new THREE.Scene();

        var light, object, object2, materials: THREE.Material[];

        scene.add( new THREE.AmbientLight( 0x404040 ) );

        light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 1, 0 );
        scene.add( light );

        var map = THREE.ImageUtils.loadTexture( 'textures/ash_uvgrid01.jpg' );
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 16;

        materials = [
            new THREE.MeshLambertMaterial( { ambient: 0xbbbbbb, map: map, side: THREE.DoubleSide } ),
            new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1, side: THREE.DoubleSide } )
        ];

        object = THREE.SceneUtils.createMultiMaterialObject( new THREE.CubeGeometry( 100, 100, 100, 4, 4, 4 ), materials );
        object.position.set( -200, 0, 400 );
        scene.add( object );

        object = THREE.SceneUtils.createMultiMaterialObject( new THREE.CylinderGeometry( 25, 75, 100, 40, 5 ), materials );
        object.position.set( 0, 0, 400 );
        scene.add( object );

        object = THREE.SceneUtils.createMultiMaterialObject( new THREE.IcosahedronGeometry( 75, 1 ), materials );
        object.position.set( -200, 0, 200 );
        scene.add( object );

        object = THREE.SceneUtils.createMultiMaterialObject( new THREE.OctahedronGeometry( 75, 2 ), materials );
        object.position.set( 0, 0, 200 );
        scene.add( object );


        object = THREE.SceneUtils.createMultiMaterialObject( new THREE.TetrahedronGeometry( 75, 0 ), materials );
        object.position.set( 200, 0, 200 );
        scene.add( object );

        object = THREE.SceneUtils.createMultiMaterialObject( new THREE.PlaneGeometry( 100, 100, 4, 4 ), materials );
        object.position.set( -200, 0, 0 );
        scene.add( object );

        object2 = THREE.SceneUtils.createMultiMaterialObject( new THREE.CircleGeometry( 50, 10, 0, Math.PI ), materials );
        object2.rotation.x = Math.PI/2;
        object.add( object2 );

        object = THREE.SceneUtils.createMultiMaterialObject( new THREE.SphereGeometry( 75, 20, 10 ), materials );
        object.position.set( 0, 0, 0 );
        scene.add( object );

        var points = [];

        for ( var i = 0; i < 50; i ++ ) {

            points.push( new THREE.Vector3( Math.sin( i * 0.2 ) * 15 + 50, 0, ( i - 5 ) * 2 ) );

        }

        object = THREE.SceneUtils.createMultiMaterialObject( new THREE.LatheGeometry( points, 20 ), materials );
        object.position.set( 200, 0, 0 );
        scene.add( object );

        object = THREE.SceneUtils.createMultiMaterialObject( new THREE.TorusGeometry( 50, 20, 20, 20 ), materials );
        object.position.set( -200, 0, -200 );
        scene.add( object );

        object = THREE.SceneUtils.createMultiMaterialObject( new THREE.TorusKnotGeometry( 50, 10, 50, 20 ), materials );
        object.position.set( 0, 0, -200 );
        scene.add( object );

        object = new THREE.AxisHelper( 50 );
        object.position.set( 200, 0, -200 );
        scene.add( object );

        object = new THREE.ArrowHelper( new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( 0, 0, 0 ), 50 );
        object.position.set( 200, 0, 400 );
        scene.add( object );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var timer = Date.now() * 0.0001;

        camera.position.x = Math.cos( timer ) * 800;
        camera.position.z = Math.sin( timer ) * 800;

        camera.lookAt( scene.position );

        for ( var i = 0, l = scene.children.length; i < l; i ++ ) {

            var object = scene.children[ i ];

            object.rotation.x = timer * 5;
            object.rotation.y = timer * 2.5;

        }

        renderer.render( scene, camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometries2.html

()=>{
    /* Testing the new Parametric Surfaces Geometries*/


    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, scene, renderer;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.y = 400;

        scene = new THREE.Scene();

        var light, object, materials: THREE.Material[];

        scene.add( new THREE.AmbientLight( 0x404040 ) );

        light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 0, 1 );
        scene.add( light );

        var map = THREE.ImageUtils.loadTexture( 'textures/ash_uvgrid01.jpg' );
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 16;

        materials = [
            new THREE.MeshLambertMaterial( { ambient: 0xbbbbbb, map: map, side: THREE.DoubleSide } ),
            new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1, side: THREE.DoubleSide } )
        ];


        var heightScale = 1;
        var p = 2;
        var q = 3;
        var radius = 150, tube = 10, segmentsR = 50, segmentsT = 20;

        var GrannyKnot =  new THREE.Curves.GrannyKnot();

        var torus2 = new THREE.ParametricGeometries.TorusKnotGeometry( radius, tube, segmentsR, segmentsT, p , q, heightScale );
        var sphere2 = new THREE.ParametricGeometries.SphereGeometry( 75, 20, 10 );
        var tube2 = new THREE.ParametricGeometries.TubeGeometry( GrannyKnot, 150, 2, 8, true, false );

        // var torus = new THREE.TorusKnotGeometry( radius, tube, segmentsR, segmentsT, p , q, heightScale );
        // var sphere = new THREE.SphereGeometry( 75, 20, 10 );
        // var tube = new THREE.TubeGeometry( GrannyKnot, 150, 2, 8, true, false );


        // var benchmarkCopies = 1000;
        // var benchmarkObject = tube;
        // var rand = function() { return (Math.random() - 0.5 ) * 600; };
        // for (var b=0;b<benchmarkCopies;b++) {
        //    object = THREE.SceneUtils.createMultiMaterialObject( benchmarkObject, materials );
        //   object.position.set( rand(), rand(), rand() );
        //   scene.add( object );
        // }

        console.log(THREE.ParametricGeometries);
        var geo;

        // Klein Bottle

        geo = new THREE.ParametricGeometry( THREE.ParametricGeometries.klein, 20, 20 );
        object = THREE.SceneUtils.createMultiMaterialObject( geo, materials );
        object.position.set( 0, 0, 0 );
        object.scale.multiplyScalar( 10 );
        scene.add( object );

        // Mobius Strip

        geo = new THREE.ParametricGeometry( THREE.ParametricGeometries.mobius, 20, 20 );
        object = THREE.SceneUtils.createMultiMaterialObject( geo, materials );
        object.position.set( 10, 0, 0 );
        object.scale.multiplyScalar( 100 );
        scene.add( object );

        geo = new THREE.ParametricGeometry( THREE.ParametricGeometries.plane( 200, 200 ), 10, 20 );
        // document.body.appendChild( THREE.UVsDebug( geo ));
        object = THREE.SceneUtils.createMultiMaterialObject( geo, materials );
        object.position.set( 0, 0, 0 );
        scene.add( object );

        // object = THREE.SceneUtils.createMultiMaterialObject( torus, materials );
        // object.position.set( 0, 0, 0 );
        // scene.add( object );

        object = THREE.SceneUtils.createMultiMaterialObject( torus2, materials );
        object.position.set( 0, 100, 0 );
        scene.add( object );




        //  object = THREE.SceneUtils.createMultiMaterialObject( sphere, materials );
        //  object.position.set( 500, 0, 0 );
        //  scene.add( object );

        object = THREE.SceneUtils.createMultiMaterialObject( sphere2, materials );
        // document.body.appendChild( THREE.UVsDebug( sphere2 ));
        object.position.set( 200, 0, 0 );
        scene.add( object );

        // object = THREE.SceneUtils.createMultiMaterialObject( tube, materials );
        // object.position.set( 0, 0, 0 );
        // scene.add( object );

        object = THREE.SceneUtils.createMultiMaterialObject( tube2, materials );
        object.position.set( 100, 0, 0 );
        scene.add( object );


        // object = THREE.SceneUtils.createMultiMaterialObject( new THREE.PlaneGeometry( 400, 400, 4, 4 ), materials );
        // object.position.set( -200, 100, 0 );
        // scene.add( object );

        // object = THREE.SceneUtils.createMultiMaterialObject( new THREE.PlaneGeometry2( 400, 400, 4, 4 ), materials );
        // object.position.set( -200, 100, 0 );
        // scene.add( object );

        object = new THREE.AxisHelper( 50 );
        object.position.set( 200, 0, -200 );
        scene.add( object );

        object = new THREE.ArrowHelper( new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( 0, 0, 0 ), 50 );
        object.position.set( 200, 0, 400 );
        scene.add( object );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var timer = Date.now() * 0.0001;

        camera.position.x = Math.cos( timer ) * 800;
        camera.position.z = Math.sin( timer ) * 800;

        camera.lookAt( scene.position );

        for ( var i = 0, l = scene.children.length; i < l; i ++ ) {

            var object = scene.children[ i ];

            object.rotation.x = timer * 5;
            object.rotation.y = timer * 2.5;

        }

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_colors_blender.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, scene, renderer;

    var mesh, mesh2, mesh3, light;

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

        container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1800;

        scene = new THREE.Scene();

        light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 0, 1 ).normalize();
        scene.add( light );

        var loader = new THREE.JSONLoader();

        loader.load( "obj/cubecolors/cubecolors.js", createScene1 );
        loader.load( "obj/cubecolors/cube_fvc.js", createScene2 );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function createScene1( geometry, materials ) {

        materials[ 0 ].shading = THREE.FlatShading;

        mesh = new THREE.Object3D();
        mesh.position.x = 400;
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 250;
        scene.add( mesh );

        var part1 = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
        mesh.add( part1 );

        var part2 = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.9, shading: THREE.FlatShading, wireframe: true, wireframeLinewidth: 2, transparent: true } ) );
        mesh.add( part2 );

    }

    function createScene2( geometry, materials ) {

        materials[ 0 ].shading = THREE.FlatShading;

        mesh2 = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
        mesh2.position.x = - 400;
        mesh2.scale.x = mesh2.scale.y = mesh2.scale.z = 250;
        scene.add( mesh2 );

    }

    function onDocumentMouseMove( event ) {

        mouseX = ( event.clientX - windowHalfX );
        mouseY = ( event.clientY - windowHalfY );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        camera.position.x += ( mouseX - camera.position.x ) * 0.05;
        camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

        camera.lookAt( scene.position );

        if ( mesh ) {

            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
        }

        if ( mesh2 ) {

            mesh2.rotation.x += 0.01;
            mesh2.rotation.y += 0.01;

        }

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_convex.html

()=>{
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, scene, renderer;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.y = 400;

        scene = new THREE.Scene();

        var light, object, materials: THREE.Material[];

        scene.add( new THREE.AmbientLight( 0x404040 ) );

        light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 1, 0 );
        scene.add( light );

        var map = THREE.ImageUtils.loadTexture( 'textures/ash_uvgrid01.jpg' );
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 16;

        materials = [
            new THREE.MeshLambertMaterial( { ambient: 0xbbbbbb, map: map } ),
            new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1 } )
        ];

        object = new THREE.AxisHelper( 50 );
        object.position.set( 200, 0, -200 );
        scene.add( object );

        object = new THREE.ArrowHelper( new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( 0, 0, 0 ), 50 );
        object.position.set( 200, 0, 400 );
        scene.add( object );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }


    function randomPointInSphere( radius ) {

        return new THREE.Vector3(
            ( Math.random() - 0.5 ) * 2 * radius,
            ( Math.random() - 0.5 ) * 2 * radius,
            ( Math.random() - 0.5 ) * 2 * radius
        );

    }

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var timer = Date.now() * 0.0001;

        camera.position.x = Math.cos( timer ) * 800;
        camera.position.z = Math.sin( timer ) * 800;

        camera.lookAt( scene.position );

        for ( var i = 0, l = scene.children.length; i < l; i ++ ) {

            var object = scene.children[ i ];

            object.rotation.x = timer * 5;
            object.rotation.y = timer * 2.5;

        }

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_cube.html

()=>{
    var camera, scene, renderer;
    var mesh;

    init();
    animate();

    function init() {

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        //

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.z = 400;

        scene = new THREE.Scene();

        var geometry = new THREE.CubeGeometry( 200, 200, 200 );

        var texture = THREE.ImageUtils.loadTexture( 'textures/crate.gif' );
        texture.anisotropy = renderer.getMaxAnisotropy();

        var material = new THREE.MeshBasicMaterial( { map: texture } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

        requestAnimationFrame( animate );

        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;

        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_dynamic.html

()=>{
    if ( ! Detector.webgl ) {

        Detector.addGetWebGLMessage();
        document.getElementById( 'container' ).innerHTML = "";

    }

    var container, stats;

    var camera, controls, scene, renderer;

    var mesh, texture, geometry, material;

    var worldWidth = 128, worldDepth = 128,
    worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

    var clock = new THREE.Clock();

    init();
    animate();

    function init() {

        container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );
        camera.position.y = 200;

        controls = new THREE.FirstPersonControls( camera );

        controls.movementSpeed = 500;
        controls.lookSpeed = 0.1

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0xaaccff, 0.0007 );

        geometry = new THREE.PlaneGeometry( 20000, 20000, worldWidth - 1, worldDepth - 1 );
        geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
        geometry.dynamic = true;

        var i, j, il, jl;

        for ( i = 0, il = geometry.vertices.length; i < il; i ++ ) {

            geometry.vertices[ i ].y = 35 * Math.sin( i/2 );

        }


        //console.log( "triangles: " + geometry.faces.length * 2 + " faces: " + geometry.faces.length + " vertices: " + geometry.vertices.length );

        geometry.computeFaceNormals();
        geometry.computeVertexNormals();

        var texture = THREE.ImageUtils.loadTexture( "textures/water.jpg" );
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 5, 5 );

        material = new THREE.MeshBasicMaterial( { color: 0x0044ff, map: texture } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer( { clearColor: 0xaaccff, clearAlpha: 1 } );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.innerHTML = "";

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        controls.handleResize();

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var delta = clock.getDelta(),
            time = clock.getElapsedTime() * 10;

        for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {

            geometry.vertices[ i ].y = 35 * Math.sin( i / 5 + ( time + i ) / 7 );

        }

        //geometry.computeFaceNormals();
        //geometry.computeVertexNormals();

        mesh.geometry.verticesNeedUpdate = true;
        //mesh.geometry.normalsNeedUpdate = true;

        controls.update( delta );
        renderer.render( scene, camera );

    }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_extrude_shapes.html

()=>{
    var container, stats;

    var camera, scene, renderer;

    var text, plane;

    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;

    var mouseX = 0;
    var mouseXOnMouseDown = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var parent;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        var info = document.createElement( 'div' );
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = 'Shapes Extrusion via Spline path<br/>Drag to spin';
        container.appendChild( info );

        camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 0, 150, 500 );

        scene = new THREE.Scene();

        var light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 0, 1 );
        scene.add( light );

        parent = new THREE.Object3D();
        parent.position.y = 50;
        scene.add( parent );

        function addGeometry( geometry, color, x, y, z, rx, ry, rz, s ) {

            // 3d shape

            var mesh = THREE.SceneUtils.createMultiMaterialObject( geometry, [ new THREE.MeshLambertMaterial( { color: color, opacity: 0.2, transparent: true } ), new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true,  opacity: 0.3 } ) ] );

            mesh.position.set( x, y, z - 75 );
            // mesh.rotation.set( rx, ry, rz );
            mesh.scale.set( s, s, s );

            if ( geometry.debug ) mesh.add( geometry.debug );

            parent.add( mesh );

        }

        var extrudeSettings: { amount: number; bevelEnabled: boolean; bevelSegments: number; steps: number; extrudePath: THREE.Path; };
        extrudeSettings = { amount: 200,  bevelEnabled: true, bevelSegments: 2, steps: 150, extrudePath: new THREE.Path() }; // bevelSegments: 2, steps: 2 , bevelSegments: 5, bevelSize: 8, bevelThickness:5,

        // var extrudePath = new THREE.Path();

        // extrudePath.moveTo( 0, 0 );
        // extrudePath.lineTo( 10, 10 );
        // extrudePath.quadraticCurveTo( 80, 60, 160, 10 );
        // extrudePath.quadraticCurveTo( 240, -40, 320, 10 );


        extrudeSettings.bevelEnabled = false;

    // Circle

    var circleRadius = 4;
    var circleShape = new THREE.Shape();
    circleShape.moveTo( 0, circleRadius );
    circleShape.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 );
    circleShape.quadraticCurveTo( circleRadius, -circleRadius, 0, -circleRadius );
    circleShape.quadraticCurveTo( -circleRadius, -circleRadius, -circleRadius, 0 );
    circleShape.quadraticCurveTo( -circleRadius, circleRadius, 0, circleRadius);

    var rectLength = 12, rectWidth = 4;

    var rectShape = new THREE.Shape();

    rectShape.moveTo( -rectLength/2, -rectWidth/2 );
    rectShape.lineTo( -rectLength/2, rectWidth/2 );
    rectShape.lineTo( rectLength/2, rectWidth/2 );
    rectShape.lineTo( rectLength/2, -rectLength/2 );
    rectShape.lineTo( -rectLength/2, -rectLength/2 );


    var pts = [], starPoints = 5, l;

    for ( var i = 0; i < starPoints * 2; i ++ ) {

        if ( i % 2 == 1 ) {

            l = 5;

        } else {

            l = 10;

        }

        var a = i / starPoints * Math.PI;
        pts.push( new THREE.Vector2 ( Math.cos( a ) * l, Math.sin( a ) * l ) );

    }

    var starShape = new THREE.Shape( pts );

    // Smiley

    var smileyShape = new THREE.Shape();
    smileyShape.moveTo( 80, 40 );
    smileyShape.arc( 40, 40, 40, 0, Math.PI*2, false );

    var smileyEye1Path = new THREE.Path();
    smileyEye1Path.moveTo( 35, 20 );
    smileyEye1Path.arc( 25, 20, 10, 0, Math.PI*2, true );
    smileyShape.holes.push( smileyEye1Path );

    var smileyEye2Path = new THREE.Path();
    smileyEye2Path.moveTo( 65, 20 );
    smileyEye2Path.arc( 55, 20, 10, 0, Math.PI*2, true );
    smileyShape.holes.push( smileyEye2Path );

    var smileyMouthPath = new THREE.Path();

    smileyMouthPath.moveTo( 20, 40 );
    smileyMouthPath.quadraticCurveTo( 40, 60, 60, 40 );
    smileyMouthPath.bezierCurveTo( 70, 45, 70, 50, 60, 60 );
    smileyMouthPath.quadraticCurveTo( 40, 80, 20, 60 );
    smileyMouthPath.quadraticCurveTo( 5, 50, 20, 40 );

    smileyShape.holes.push( smileyMouthPath );

    var circle3d = starShape.extrude( extrudeSettings ); //circleShape rectShape smileyShape starShape
    // var circle3d = new THREE.ExtrudeGeometry(circleShape, extrudeBend, extrudeSettings );

    var tube = new THREE.TubeGeometry(extrudeSettings.extrudePath, 150, 4, 5, false);
    // new THREE.TubeGeometry(extrudePath, segments, 2, radiusSegments, closed2, debug);


    addGeometry( circle3d, 0xff1111,  -100,  0, 0,     0, 0, 0, 1 );
    addGeometry( tube, 0x00ff11,  0,  0, 0,     0, 0, 0, 1 );
    console.log(tube);

    //

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );

    container.appendChild( renderer.domElement );

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    container.appendChild( stats.domElement );

    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', onDocumentTouchMove, false );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function onDocumentMouseDown( event ) {

    event.preventDefault();

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'mouseup', onDocumentMouseUp, false );
    document.addEventListener( 'mouseout', onDocumentMouseOut, false );

    mouseXOnMouseDown = event.clientX - windowHalfX;
    targetRotationOnMouseDown = targetRotation;

}

function onDocumentMouseMove( event ) {

    mouseX = event.clientX - windowHalfX;

    targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

}

function onDocumentMouseUp( event ) {

    document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
    document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
    document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentMouseOut( event ) {

    document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
    document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
    document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentTouchStart( event ) {

    if ( event.touches.length == 1 ) {

        event.preventDefault();

        mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;

    }

}

function onDocumentTouchMove( event ) {

    if ( event.touches.length == 1 ) {

        event.preventDefault();

        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

    }

}

//

function animate() {

    requestAnimationFrame( animate );

    render();
    stats.update();

}

function render() {

    parent.rotation.y += ( targetRotation - parent.rotation.y ) * 0.05;
    renderer.render( scene, camera );

}
};


// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_extrude_splines.html

()=>{
    var container, stats;

    var camera, scene, renderer, splineCamera, cameraHelper, cameraEye;

    var text, plane;

    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;

    var mouseX = 0;
    var mouseXOnMouseDown = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var binormal = new THREE.Vector3();
    var normal = new THREE.Vector3();

    // Keep a dictionary of Curve instances
    var splines = {
        GrannyKnot: new THREE.Curves.GrannyKnot(),
        HeartCurve: new THREE.Curves.HeartCurve(3.5),
        VivianiCurve: new THREE.Curves.VivianiCurve(70),
        KnotCurve: new THREE.Curves.KnotCurve(),
        HelixCurve: new THREE.Curves.HelixCurve(),
        TrefoilKnot: new THREE.Curves.TrefoilKnot(),
        TorusKnot: new THREE.Curves.TorusKnot(20),
        CinquefoilKnot: new THREE.Curves.CinquefoilKnot(20),
        TrefoilPolynomialKnot: new THREE.Curves.TrefoilPolynomialKnot(14),
        FigureEightPolynomialKnot: new THREE.Curves.FigureEightPolynomialKnot(),
        DecoratedTorusKnot4a: new THREE.Curves.DecoratedTorusKnot4a(),
        DecoratedTorusKnot4b: new THREE.Curves.DecoratedTorusKnot4b(),
        DecoratedTorusKnot5a: new THREE.Curves.DecoratedTorusKnot5a(),
        DecoratedTorusKnot5c: new THREE.Curves.DecoratedTorusKnot5c()
    };




    var extrudePath = new THREE.Curves.TrefoilKnot();

    var dropdown = '<select id="dropdown" onchange="addTube(this.value)">';

    var s;
    for ( s in splines ) {
        dropdown += '<option value="' + s + '"';
        dropdown += '>' + s + '</option>';
    }

    dropdown += '</select>';

    var closed2 = true;
    var debug = true;
    var parent;
    var tube, tubeMesh;
    var animation = false, lookAhead = false;
    var scale;
    var showCameraHelper = false;

    function addTube() {

        var value = (<HTMLSelectElement>document.getElementById('dropdown')).value;

        var segments = parseInt((<HTMLSelectElement>document.getElementById('segments')).value);
        closed2 = (<HTMLInputElement>document.getElementById('closed')).checked;
        debug = (<HTMLInputElement>document.getElementById('debug')).checked;

        var radiusSegments = parseInt((<HTMLSelectElement>document.getElementById('radiusSegments')).value);

        console.log('adding tube', value, closed2, debug, radiusSegments);
        if (tubeMesh) parent.remove(tubeMesh);

        extrudePath = splines[value];

        tube = new THREE.TubeGeometry(extrudePath, segments, 2, radiusSegments, closed2);

        addGeometry(tube, 0xff00ff);
        setScale();

    }

    function setScale() {

        scale = parseInt( (<HTMLSelectElement>document.getElementById('scale')).value );
        tubeMesh.scale.set( scale, scale, scale );

    }


    function addGeometry( geometry, color ) {

        // 3d shape

        tubeMesh = THREE.SceneUtils.createMultiMaterialObject( geometry, [
            new THREE.MeshLambertMaterial({
                color: color,
                opacity: geometry.debug ? 0.2 : 0.8,
                transparent: true
            }),
            new THREE.MeshBasicMaterial({
                color: 0x000000,
                opacity: 0.5,
                wireframe: true
        })]);

        if ( geometry.debug ) tubeMesh.add( geometry.debug );

        parent.add( tubeMesh );

    }

    function animateCamera( toggle ) {

        if ( toggle ) {

            animation = animation === false;
            (<HTMLSelectElement>document.getElementById('animation')).value = 'Camera Spline Animation View: ' + (animation? 'ON': 'OFF');

        }

        lookAhead = (<HTMLInputElement>document.getElementById('lookAhead')).checked;

        showCameraHelper = (<HTMLInputElement>document.getElementById('cameraHelper')).checked;

        cameraHelper.visible = showCameraHelper;
        cameraEye.visible = showCameraHelper;
    }


    init();
    animate();

    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        var info = document.createElement('div');
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = 'Spline Extrusion Examples by <a href="http://www.lab4games.net/zz85/blog">zz85</a><br/>Select spline:';

        info.innerHTML += dropdown;

        info.innerHTML += '<br/>Scale: <select id="scale" onchange="setScale()"><option>1</option><option>2</option><option selected>4</option><option>6</option><option>10</option></select>';
        info.innerHTML += '<br/>Extrusion Segments: <select onchange="addTube()" id="segments"><option>50</option><option selected>100</option><option>200</option><option>400</option></select>';
        info.innerHTML += '<br/>Radius Segments: <select id="radiusSegments" onchange="addTube()"><option>1</option><option>2</option><option selected>3</option><option>4</option><option>5</option><option>6</option><option>8</option><option>12</option></select>';
        info.innerHTML += '<br/>Debug normals: <input id="debug" type="checkbox" onchange="addTube()"  /> Closed:<input id="closed" onchange="addTube()" type="checkbox" checked />';

        info.innerHTML += '<br/><br/><input id="animation" type="button" onclick="animateCamera(true)" value="Camera Spline Animation View: OFF"/><br/> Look Ahead <input id="lookAhead" type="checkbox" onchange="animateCamera()" /> Camera Helper <input id="cameraHelper" type="checkbox" onchange="animateCamera()" />';

        container.appendChild(info);

        //

        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
        camera.position.set(0, 50, 500);

        scene = new THREE.Scene();

        var light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 0, 1 );
        scene.add( light );

        parent = new THREE.Object3D();
        parent.position.y = 100;
        scene.add( parent );

        splineCamera = new THREE.PerspectiveCamera( 84, window.innerWidth / window.innerHeight, 0.01, 1000 );
        parent.add( splineCamera );

        cameraHelper = new THREE.CameraHelper( splineCamera );
        scene.add( cameraHelper );

        addTube();

        // Debug point

        cameraEye = new THREE.Mesh( new THREE.SphereGeometry( 5 ), new THREE.MeshBasicMaterial( { color: 0xdddddd } ) );
        parent.add( cameraEye );

        cameraHelper.visible = showCameraHelper;
        cameraEye.visible = showCameraHelper;

        //

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

        renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
        renderer.domElement.addEventListener( 'touchstart', onDocumentTouchStart, false );
        renderer.domElement.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function onDocumentMouseDown(event) {

        event.preventDefault();

        renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
        renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );
        renderer.domElement.addEventListener( 'mouseout', onDocumentMouseOut, false );

        mouseXOnMouseDown = event.clientX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;

    }

    function onDocumentMouseMove(event) {

        mouseX = event.clientX - windowHalfX;

        targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;

    }

    function onDocumentMouseUp(event) {

        renderer.domElement.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        renderer.domElement.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        renderer.domElement.removeEventListener( 'mouseout', onDocumentMouseOut, false );

    }

    function onDocumentMouseOut(event) {

        renderer.domElement.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        renderer.domElement.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        renderer.domElement.removeEventListener( 'mouseout', onDocumentMouseOut, false );

    }

    function onDocumentTouchStart(event) {

        if (event.touches.length == 1) {

            event.preventDefault();

            mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
            targetRotationOnMouseDown = targetRotation;

        }

    }

    function onDocumentTouchMove(event) {

        if (event.touches.length == 1) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

        }

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        // Try Animate Camera Along Spline
        var time = Date.now();
        var looptime = 20 * 1000;
        var t = ( time % looptime ) / looptime;

        var pos = tube.path.getPointAt( t );
        pos.multiplyScalar( scale );

        // interpolation
        var segments = tube.tangents.length;
        var pickt = t * segments;
        var pick = Math.floor( pickt );
        var pickNext = ( pick + 1 ) % segments;

        binormal.subVectors( tube.binormals[ pickNext ], tube.binormals[ pick ] );
        binormal.multiplyScalar( pickt - pick ).add( tube.binormals[ pick ] );


        var dir = tube.path.getTangentAt( t );

        var offset = 15;

        normal.copy( binormal ).cross( dir );

        // We move on a offset on its binormal
        pos.add( normal.clone().multiplyScalar( offset ) );

        splineCamera.position = pos;
        cameraEye.position = pos;


        // Camera Orientation 1 - default look at
        // splineCamera.lookAt( lookAt );

        // Using arclength for stablization in look ahead.
        var lookAt = tube.path.getPointAt( ( t + 30 / tube.path.getLength() ) % 1 ).multiplyScalar( scale );

        // Camera Orientation 2 - up orientation via normal
        if (!lookAhead)
        lookAt.copy( pos ).add( dir );
        splineCamera.matrix.lookAt(splineCamera.position, lookAt, normal);
        splineCamera.rotation.setEulerFromRotationMatrix( splineCamera.matrix, splineCamera.eulerOrder );

        cameraHelper.update();

        parent.rotation.y += ( targetRotation - parent.rotation.y ) * 0.05;

        renderer.render( scene, animation === true ? splineCamera : camera );

    }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_extrude_uvs2.html

()=>{
    (function(){
        'use strict';

        var tex;
        var testShape;
        var holeShape;
        var testMesh = null;
        var WIDTH = 640;
        var HEIGHT = 480;
        var targetCanvas;
        var uvGenerator;

        var scene, renderer, camera;

        var rX = 0;
        var rY = 0;

        window["launch"] = function() {

            camera = new THREE.PerspectiveCamera(30, WIDTH / HEIGHT);
            camera.position.z = 20;

            scene = new THREE.Scene();

            /** Custom UV mapper **/
            uvGenerator = new THREE.UVsUtils.CylinderUVGenerator();
            testShape = setupShape(8, 3);
            holeShape = setupShape(8, 2);
            testShape.holes.push(holeShape);

            tex = setupTexture(TestTextureData);
            renewMesh();

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(WIDTH, HEIGHT);

            // show canvas
            targetCanvas = renderer.domElement;
            targetCanvas.width  = WIDTH;
            targetCanvas.height = HEIGHT;
            document.getElementById('canvas-container').appendChild(targetCanvas);

            setupAnimation();
            render();
        };

        function setupAnimation(n?) {
            new AnimationController(
                document.getElementById('html-el'),
                function(x, y) {
                    rX = x;
                    rY = y;
                    render();
                });
        }

        function updateRotation() {
            rX = (rX + 3600) % 360;
            rY = (rY + 3600) % 360;
            testMesh.rotation.set( THREE.Math.degToRad( rY ), 0, THREE.Math.degToRad( rX ) );
        }

        function render() {
            if (testMesh) {
                var rx = pickRepeatSetting();
                if (uvGenerator.uRepeat != rx) {
                    uvGenerator.uRepeat = rx;
                    renewMesh();
                }

                updateRotation();
                renderer.render( scene, camera );
            }
        }

        function pickRepeatSetting() {
            var radios = (<HTMLFormElement>document.getElementById('repeat-setting'))["repeat"];
            for (var i = 0;i < 3;i++) {
                if (radios[i].checked) { return radios[i].value - 0; }
            }

            return 1;
        }

        function setupShape(n, r) {
            // Make shape
            var sh = new THREE.Shape();
            for (var i = 0; i < n;i++) {
                var method = i ? 'lineTo' : 'moveTo';
                var a = (i/n) * Math.PI * 2;
                var x = Math.cos(a) * r;
                var y = Math.sin(a) * r;
                sh[method](x, y);
            }

            return sh;
        }

        function setupGeometry(shape) {     
            // Make extruded geometory
            var exoption = {
                bevelEnabled: true,
                bevelSize: 1,
                amount: 3,
                extrudeMaterial: 0,
                material: 1,
                uvGenerator: uvGenerator
            };

            var geom = shape.extrude(exoption);
            return geom;
        }

        function setupTexture(dat) {
            var img = new Image();
            var t = new THREE.Texture(img);
            t.wrapS = THREE.RepeatWrapping;

            img.onload = function() {
                t.needsUpdate = true;
                render();
            };
            img.src = dat;
            return t;
        }

        function setupMesh(geom, side_texture) {
            var materials = [
                new THREE.MeshBasicMaterial( { map: side_texture } ),
                new THREE.MeshBasicMaterial( { color: 0x447766 } )
            ];
            var mesh = new THREE.Mesh(geom, new THREE.MeshFaceMaterial(materials));

            scene.add(mesh);
            return mesh;
        }

        function renewMesh() {
            if (testMesh) {
                scene.remove(testMesh);
            }

            testMesh = setupMesh( setupGeometry(testShape) , tex);
            testMesh.position.set(0, 0, -30);
        }

        function AnimationController(target, callback) {
            var _this = this;
            this.callback = callback;
            target.addEventListener('mousemove', function(e) {
                _this.onMouseMove(e);
            }, false);
        }

        AnimationController.prototype = {
            onMouseMove: function(e) {
                this.callback(e.clientX, e.clientY);
            }
        };

        var TestTextureData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAAXNSR0IArs4c6QAAADBQTFRFB1B5B1iEA16QAGCPAGaWE2WXJHJMJntSLoJVKopbQX+fMJBgLZlnbZuyZaiGgrCY0v66KwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wEEBE0NIvLSa4AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAa7ElEQVR42u1cTWwbR5YuUuIlQAA2qb4YEMCm3JcBDEhyeBlgAdsJLwECsJus41xlEiImN0eCCeQmk2AjvlFssDDJZmcvAXS1SbAxvlHd6ELW1iQXAbzOTrDB+OZx4EC936tuyXIws4ct7M4uQEZ/MfsVu169+t73Xr1+jHNuchffnLt22TUlXl4UyEjOpSelz2sN2+U2XcXtht2UQ7wde5EcyHksA6krz0rczjsGzztV2zWNZiGaz6WI8CV8XCMPMQAv4pLSmlPLbZuV4KHsRmEvnHfkJJSDWFeemY5tuBBscLtpb3EzCvwIA0g1Siw9x2zwKjcd+so3axZmIGQsw/SKQOrKM6iuzHnTdHnN5S1egwJjucA7ePWkDBwokPO6w+0WtFjjcoIBIjnFN2bg+7ryrO6U87Q4Dq9atuHkQ188HR4FgyMx9vcjv920HbvSxDRMxzDdgisPw14UBsdyLAc0UV15LIGR54bLi5gG7IjT/QUR7o+0FAUCMtxyCzCihskd08X76WuSzlJXHksAC4WaylzpistfvHi9mQ6NSWCAZuBBMBr6shP2Ynkw15VnroO7y1VMwzEd03LWnspBqh7YcT+c9GBEJrRoWTCz4p2Cc9gLu7PT3hMxiXHFINaVZxbnVjPP+Y4Le951Csp28SOUx54fBUED1ovBoUIXmoYKSbt0hVR/SV15BgWWOCaBgRo2dCTTpUmXES+X0w5KgSSPhcTQAggyhh0DbwZSV57Z7obFC9jMHIZsWHYoBtHhOBZT+UT60wj7eIcGqNhmo2xiu8veKW1zH58TEJLpyjNOpoMb3M3gMr4yH4IJKRpQHRC2CZwhS+KkYZohrBkDTaSuPG6gvoF/51a95tg1bmfSUGE6lFN3ecE1W7SG/K7pRl4Y+EeYZufp4WjeiXXlmXW3lCsWGhsGLzVgyoWo3Q4fjuL2g6AtZscTr2FW3NyddcsxK2bFMCsTcQrVyXmQfZKuPEHx5Uspc3Eoo1R7Us4i6TUIQmmKmMmu2ufKuAjP8SViXXlWNWjx0gHqNrefSDWASJdJ9siK67jEhY2VXBsqPA0m43F7dv9YPBAHY115ZuRauUaOmxVm7hjrTmksx0960wEcdifqHE27MGBsHnu3srHNgSUlbOF4OFNmBI8vpa48U4TimhbVwij7ERHp0cEOJxRtYib2L6CWLtOVT29AbSNaQ8fOdpCcZV7DzQbgtkVo7/oAUAweYJMfjuXRXFeelXbcvJN3GDOMom0U8+N5ZxQcxQeDeBh1QJy2a0WeA4wX1w3ODF4MRAiI7UVyL8ZAB1JXXmkA27SmLKlE+xi7ZJaqCIDec+o7dOdV3DxN1FD2HQJNOsqKI115dQNw06kp1xSpjACUeDOIYEkC+MrT5bvHay2eA9ETk4UcjbsYP05JqY48s5v3gOSOZTqFOyUTWD4ajg59KcawYsBZt4EBNir1HHytW8BOkr1YpB+RvnTlWYrkXJEF+iu6slFB0+gR1SDaTQ6NmKeyMAU00Rz0U+rKwxeQI3fJn7bIisf0dqwYaywG0nOxsLR85FQwQDX2ppP+02AQe+OxP8YNaMqz0vZWubhmWTnD3rbMit2X+yOxF+0fgz12B1Fv2zTcXNE0ts0dByo0Qo+4HqaXgbmuPONKcUBKMhVoMcAigbtfEhapdrhCcks5VQnOfcnqMU5fV54BqM1sAOjIMYPYI8aK9Qtgo7HHifJyxTa4eZeXInEcDMbSB7kOaBq68sywiU06Vp18BQaII29B9tOfdSJvfLrfsPPwI2ZZbSeLIh81O8B4pKiFrjwjwyHOCFXW6AeAJFQzUIsUScW1HZpejf66JBwHMlh4I18MdOVBSkGYTacKI0WE42yIGPjVh+4yZ3KPxIt8AxN0TMzxNBj1xbHcpwhM4YCmPCKjZs3hDu0l011r5CUcNlTY34e5eqEIrHqxiAGwg5hbqzr2acYkKPYOVGSkJ69IqXPJZ8DhJe2TOCZEV/ze4beV6u4S94atUdwPK+4tuos9DzG4rjxDQLle4WyH4ocmjGj2VCzkfeKrwcgbh55BSAbjoTdL4HxhfDD3ZnIYBYuAYj9deYWEFs9h+RDnYxSfNirWx5Od8WQ8kSCbTs0gTmsSt7DDjPVmrEPqymek9JLWkRWnjO4yiM1I/9VLDTCW'+
        'D+PJWPZjv68rz+wNp3YXN5hvYqO6OR5Q0NqJZTfynmIQAAnWDpzCIXdTctkjsTiY9ONuPPDJkua68swGQhZv5oHTds4xqnwciTDaj+fdcAgjirpuk6Je4hQGqCXFfuF1fyd15QmKyYrJoZl02VBxCZlu05BIJWKqe2/VLCn1FEsfbCNuj6O2rjyza0Qbqw7lkCiJIIgsDOMB9nAo+lIYfN25adwrFaFrG1hCQW03DD6LheJdQleemVWKbGGkjgPQdvmEcOxQDrGW00BEnpVyCV5qFYrV9UY9C/subUzqyjOyXPfKRltcKdC75PZEq2vNd3k/gL5PUX4Ud8bBRFcefKBSA5927DKvNW4a9mAq/RiEMYAxyYfwdkDR1lrD3P7AVpg3EgNiOvuhfKRIp648s0uV2g7RpuaHICxOvR/LR7Ib7g/DXoi19Ix7a266xHDpu00+IgvDHCnXitdQV56puP0amqgEGuBcJTCECr2U6po0ACYxloMYzhRXdOTkqRzoyjOedwCkZiMHzNwBlohTDypckDPFNWREnDwpb1QxwbxTCikB5tMMyOHiAzTlGd8FSpC3dNPQZv8U7oqgNAx8uR/LCs836muOvZNFH1kSShE+isF15VmK07ZzqcIgvQIoJjLCAcF1oGmduzV80TYPYMVHwaHfGY8PdOWZS2/yUsM2mohe7nLs0o58GLUnp14sJpEog2UQxADoHbPaMEfBOPb68aBPWSZsNV15ZgC9cjwHILFhqZX6w1OsUHchQNkAKZEogeryDXfDpk0OPcdyEgeTdI/TdteVZ8QWSsSsFWuscWXAKW0P6RaVZnOcb9VaLqV9Kcsu9gnOOlEXe0lXHjZg8Fw93zCLPG8Yxj1vEfixryJ4bJIw2ALLKGGAKt+hbEvpVE6iwIu8fhrcCF15ZuXp/kvg7q2yDc9GAUss/LAbgrsexLJEdDPNQbZoMmqC4HyU6hTRYKIrfz1Nx6+n2ymZp4CkZatkbwlu9TbczSkgdNAOsdAHsjd+J03335JnlbpTY4ov0KEK42IKpPBArkPMZF8OKL9bLTTsSqnkVDHRqZzHh0JeOTRdecZs8CVuVHGL8NZAsihG6BzNek/Ekzl2kkVHHtDeJeBOs6AzogMBbGpteZU9yMImohbB2xwaBRgSpNetEuXlNQdoaj+S/ZEcxw+PfTHCKnu68ozSZzCjpl0x63SZOA3mcBUzOOwnUS8UhmM2SiVrgw4byJ58yq6ouCYLvzXlmQrryUoQvFIWg/Zx1JUqjKc0V+tvGVk6zVPpTwJdeXVoBRW6tsqkVDj+WZIRXZJXJWXylsHrxfKOZYbzTtRvx96TuBvKIy/WlWc2MwDVdOrEK0VY8eFIHp52wz3xSI6EiGc5a227lrubY27OqBr3eH/qhYEEr6fpkbPRlGeEECY5bEyAMtuwTGwjxG2xxIaKhbFDh478KiWcWZhQSp7Iia48S9+6pDUuD2C7sVCptJBMRaUXCs3LJEzLJ7bvEeEbULJtqCvPLCLVDggFcLpRa/CH9LaHPXosj2HFwQ62D8WVao7A9AGpLqBTJy89MdGUZ+7l/YNZKiOKKZUrswgqBKtNVbfO1ZkT7fOQ+FYPWCcWk4muPJagRGefnKvowuDBQganFLlTggF6NCm5VnYdBOBFx3byg2C4GLbDtoiVHqWuPCsWii55s3yOks6W642ktxCDBZbx0fTh8axQMStb607VbJnKtU8UlbwMLaXUlVeREVeHeumpBu4qXSRiNuk+Thl16x1vB8jvYQbxga48bmCLl51aEf7CpHSWgBWr5MkozWgTpW8R7XLsYtls5P1wGE46YXc02w9xrdSVxy7IAUhgn0WYsrlDWO4vglnoPQWjOww9s2E27q1XKAen8jA+bWHvKvSTuvKXhKR2mei6dvI6J03CsFXQefMalkdpig0R9rSvK8927Y8osrvNyxTlVgnJgvAKRijy4VtuzeXsQ161imsuvFx45IXD4UKM5F4/1pVnRqHi5pzbzAFU5yuFxrAftQ+kfzQAZ4S7irHH8latQkUYCL24AwubZ4cOVI4ideUzQsILrZRR/KIEg86EKL9gXHpTRwiZESrayDOpK09AxNP6Bu5AU67CMVokBHcIr8ZUIXOXAo8iN8BqKmIYt5+KAVjvuJtuMz155rTW3fUdC+FLuQhYL/pU1xDiCoS5UFSfm9sEcq1qiZDcqNIeVicymRnryjMoiCC65qQqKstrZkw6VMUZ2aEc/U75zISSjZgg1lhTninVqS2kynBMVV8SUYYFHiseCleV6OQbtgPWAU1jesO+bMf9Pfkw9DtSV56BVG/Xq0auaOWLJVYunHpTuTce9o/EI39/sT8tlixuIO60CfIBdrITqvxCj4rmyBdoyjOHvBW37S0iDlZaYJC6iTFFkDJNxtdaWb7XlT06EFGHEYSkUl'+
        'f+emjmwKXYaaFbShmoFIEyzXTmaZucSmG2ZfcUCEM5prBLyQZdeaYSiVaTwpciSMXGaTDATvL3qcbncDRpO3nDrCh31iyQW1PpF5X9SA1ZV55ZTTgxdbYNK23xWpxVFqgkkko0qveyYh2+C70GEwqq8OZTKFNXnrlNeGqjCaeNyNFQBYlyMiMY9dR9ko+nCiVcY9+pmkbYe4LYfhgGhws4vGGkK88chE5lY8egarNC0Sqcimk08GNvgYsOx2JALtYih4vxaQpZGZgyITp+0pVn6qTpbRkOfwsjqS076p8LCmzrnComSQxQ681g55NYV55R9Mq3VPhMHqMuo0MYiS+P04zzkM6DjEbBsfJ3bOaU2LR3JIaL7pPBfijHQghdeUZ1gFYe2jN2c2WEsDMYyL4fBfdlO/RGY7HDc9XiLs+wzq7J1OGHGdRKXXl2edj0yxSL'+
        'zAIHnp77vfu+GoAOyT2pK8+4Q8kzB0NsUXRnwlFQ8Ij/PFXnsAXNNl1YUm7HLiO2mXoR2KxYyPZ45i0QHWvKM4PdZka+YuagSifn5I8HXuiDTI4ItMeyXUTcTQUgDmDEdGq1OFWhqpmkRJSuPLt26KeOVi9teBZ31dmTqoNUNqbovcJ6ygXCq6sYVFeebqDOFZ2E0+INDDAHn53KfgxF+WGvxXPNtGCyAfrHy6E3o9QCBbmBVKGZnjyzmG1U1orNnGMwnrO4PzoMZ+1ZCqSATQvjFygLs66KAPjboCqmeq25rjydG+b5ZRLNzKxUXKZxpCxBwzbVbRPe3OV2JOaUAzwMRX/WfhT4uvIshSmVaaZaMx4ovor1Cb1wcjCZFRxKqNfKQFy3VNzaONqfhd2ncSeU7ZlIYz8teWbCn7oI7Qzu5Iv8rj2Ieguf4uaFt5gM4wGnqJYqZeyrfUxkwrs6N9SUz+oJd7L0Aedp1C7TraKCSzXBumvuqlRD5sg9ORtIMY7buvIMQZvhbFi8VG0UuJtrerR7+weyfRSMo+HULzXg5SqmUSkZrm055qkQZMOIrQd08CZ05Zlpp1lGk/w2/uey7FpkBWfZmVvdrV+pME7fVnoMdOX/brr+qjrezWrVlI5dE+NO5YiOnidUnzrUlYcRshLVIJUqhumUjOL+6eQwnvRDj7CkM5vligVrhzXXKioZ7hRGAR3OXlXLSV15Zju1qiqCspyagyhOUq7XwxVPwCoRZtG5+BXc2i4CDy9OT1s8KtUa6MqzKyqTZRmUpxbKitUtAscV46ES9bLZMCOElbI97TwCv/ajyUBXntUct9Cwcm6JzjRaeRduYnxMBQ50+ipGAXAcwU8T/nSjYdec2tFVMV4KqLryjO80VSlkTcXxNr86+U9rgyWo9kdpAuZa3fBlzn0GI9OUv7YLSFM3nWHKJuMgO3dS+LLVRNRhursbFVvE4lgeRmBbh0eftQNfV56VqNYRsWU+V+RgJ8XO0aAdtu8fDw6OO4v+wM9vm2S9puHmGzU4lA6VHXTDICN1A115LMFtu2EbO7x+N4XKt08oqBkUHJ7V7HJ1+CSyCpBpyjs8XXnG7awY7W8ASTbAhzSyxW3Lrll1byGOhB8HPYnY8pEQuvKslndLKs9cxq26ue1gDMb0EHxmFPQjuR/R0zm80DB3Ff/f4r1Q0KN06txT7QJNeWiA6iFrdzhiWN5E9HqcZtBgoaoOQCXBMI3qL2cYCSpVkLryLFPgHXpWTW2jcfqISJpOwwBU+YFp5NybMOTKRzChvjyMhwOq3B3EA115littE2PcJqCCpTrykdwbi2Ho9UfdhXd8RDBCBcFm01Ql+nC3AxXgxz2FJbryTOW3XLMIVdYJrKWqyw2yMD+MeYmvKQN2a6pSQ0X2ILwy9OJxN/R15dUugJpqnLI8agD1KFz2KFZfUokMB6kzG3mLCmG6oTiIuiMxWYhTEUQTXXnWLDQMKr12mbGVr+Qqnf5M+H6bDp3apxNP7tLBMJUhudmxmwoq5FVVnq68MsL6WyNtpo5aXFpxVKcTCZNnD/NxOhmdU65TlaSB+OrKs7eOIgX0q5PdCV0jQtBdqpim0wirWd5pDo/lAT2a4IXBlFBVV54ZIJTlHW7QM2vFml2kBxEj4R+Lw7AznndDrGGJMISy0U3bdUUGpIE6HQ6lrjxrphUWW2ShZewTUo9K6WdwQSZEGE7pSDoWUo/0Dg4Ad5LOx/q68syBYEHlOGknmU3ZlkBT3GSkyKvvrLn5O2aF0uHMqua2geRDOpgEjvmEprryzOEVdeBHlae7O4BSjx4C6sTyCFqKJ8Ix3fRxRjoYwDzk27BPpEkoPXmWPSWmftWvsDq4uuz6g2yX'+
        '6fY4fWhTIBL3deWZRZXx2EZNYCaIsyWHkQc+EwWA82jela0CPR5QrdpuHdy74GJmiDvlFDAyj7HeuvKsxIsmjDNnwanmHLs687A5ov0wGC68Iy+IgOPYQdv0RCnV49GZj0dPTMtQVYbOdeVZSlTqGW0nFcaBevhBYYmUiOsBpPTcMj0qYTv+MOo9nXViSjMhupzpyqtitpTQbvFqnW9R+YEawIvVqYoagFgVPS0Fjq9Ou6R6jGEo1amZnjxb9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R9Y9R/4P99/oLj7v9J/oIpXaqZgEe/0D6jks/4BLdPaNf+L/gPVX/QfIHc/kTGIImJWGGq1hK8r+eH0nf4DLsPLVv0Djh+82z/g1lnWP8DK4Rrr7/cfyOSv+g882Q/jvdkePQmaKznqE67Jf3b4Tv8Bd4mXslX+6at3+wdsnqX9A7Yr7y2X35T+bv8BN5O/6j/w7I0fJfNkm+cbyzWnulymn5HJP3v9Tv8BdQOtrVaryR//NBdzGc/nEX7h9+aZebe5VufF9+iaFx+E84EM+rF3FByO2/3+we0STP/2huMuq1Vsw11ICeVpnr2RcRK8/Lq+8evzdc7TG7hbngEmJgfy81d+51r/AXdZgSEzVmKlT1/t3X/QfnB/7+nwgfCP9t4/W6sg8jSLJ+d3Nz5+Xnqwtzf3jvBTTj5r7w3GbI3fg263i0vGKrkiG7fl/fZ+1J48exNPktnj5+7aP31H/Qdat56bO0W25x0f7e35+Jj9a/0H3KVVteyTr6yTr5MkeZ38NvkpeTJMggcvk5OzfPFk+ZX5q2Ud9tS0HicXh/PfJsmfgxiX/fsXy3++Y723PM/dwvxuPT9ZfvpKjBPqP/DsTRgns9+d2/mTf1X9B26dtaxvlhcPj18myQAf8+Za/wF3SUb4yXc3l3V6R33PoMDPk2R5Zp1g7A9unLfcXevmDbz3aowfidemn8ny3LqB9//4G7oBfH9xEfzuIlA2gBuYf3tuV5cfqf4Dt17UcWXy+ovsI3661n/gnjKQ9eV7f7z3+FXQTy4GkbqBT18Hn7y4sfwwd/L15nc7DcbyJ3+dP774IvnzF8mPk+THb5MfP16yk/Pb753nl3Z+c/kv94aJ9/kb6j/w7M3TOJkGy93yMu0/sPm8evKd8ezi8V+HX/z58at3+g+kRlg+Ofk9f/xahonnh8l0AhuO5ftnm88Zw88z3oQRLvf29pIvL2L5+M0s8cJkaC0NUt+yurxZ3vyOc/Fy+PgH6j/w7M0xNCBPvr5xnvYfuHXWPIENQPqzfoxdcL3/gLukp/Favzq/yb9UxovvOb7wx62zTbq7s80/mg7dAKn901ehePzms6Q7SuawfmXf1SWtMoDo3354qThXugvkJy82v6ur/gObL3ZwXZJgCf40xjyv9x/AKNQ/4MaS1aGbftKDFsZYhWQyeP/F+zT+9zfO887uZnYD2MSPf54ksMOgsrTUDQAH7FtnjItnf01U/4Fnr2dhEgw2X7z/PO0/8P6LqrqB2bcvk/949tM7/QfcpYF1Mk5OvuKPsUGTXjRNHnyW+EmfbuB5qbpjfrw0dqubZ8u9yezoy9eT2eOfJrQEA7bEBqwytrUsGbfOgITfXlyo/gNfvj56lMTiV+cnX6f9B6CfpVEd9afjycs3z15NvWv9B9JdUD7/5Hnty4u9wwQ3l/zpt4CRv94/gRF+xW6cGcvzInv/xcmrB3uf/yF5sJf8gBsYJT13uXVyztg3Nq66dWZxaOVnNbVvkwefX0gJw7mX9h/YfG6dvGB7Lz9/sPfpT4QD1/oPKCM0N7/7YFn7gnDAC2fYrMmMtuGLDdqGZ8YnCgl/TUsg8eYFrTC+oLyP1R7CVUoDi+SHtP8ALvw5FMZymfUf2Hzh/pqW4Eu88R/4mJ+v9x9Qu+Dkq42T33svkx+TrpR/wC8pXl588j3/6GR5/hFvfQNfUG/9Jbn4i/zDy4sfoSTpJwFfOi3cwe9hQMvffO9yb/Hyx7T/wLfJBfUfODnPCnp/8z3HlRd/gQlAM/iY/6H+A4uXwT+2/8DRxT+4/8CXP/+D+w+8/HHVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf2DVf+D/V/+B/wT15JbOMyhx1QAAAABJRU5ErkJggg==';

    })();
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_hierarchy.html

()=>{
                var container, stats;

            var camera, scene, renderer;

            var geometry, group;

            var mouseX = 0, mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            document.addEventListener( 'mousemove', onDocumentMouseMove, false );

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
                camera.position.z = 500;

                scene = new THREE.Scene();
                scene.fog = new THREE.Fog( 0xffffff, 1, 10000 );

                var geometry = new THREE.CubeGeometry( 100, 100, 100 );
                var material = new THREE.MeshNormalMaterial();

                group = new THREE.Object3D();

                for ( var i = 0; i < 1000; i ++ ) {

                    var mesh = new THREE.Mesh( geometry, material );
                    mesh.position.x = Math.random() * 2000 - 1000;
                    mesh.position.y = Math.random() * 2000 - 1000;
                    mesh.position.z = Math.random() * 2000 - 1000;

                    mesh.rotation.x = Math.random() * 2 * Math.PI;
                    mesh.rotation.y = Math.random() * 2 * Math.PI;

                    mesh.matrixAutoUpdate = false;
                    mesh.updateMatrix();

                    group.add( mesh );

                }

                scene.add( group );

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.sortObjects = false;

                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.zIndex = 100;
                container.appendChild( stats.domElement );

            //

            window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function onDocumentMouseMove(event) {

                mouseX = ( event.clientX - windowHalfX ) * 10;
                mouseY = ( event.clientY - windowHalfY ) * 10;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var time = Date.now() * 0.001;

                var rx = Math.sin( time * 0.7 ) * 0.5,
                    ry = Math.sin( time * 0.3 ) * 0.5,
                    rz = Math.sin( time * 0.2 ) * 0.5;

                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY - camera.position.y ) * .05;

                camera.lookAt( scene.position );

                group.rotation.x = rx;
                group.rotation.y = ry;
                group.rotation.z = rz;

                renderer.render( scene, camera );

            }

};


// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_hierarchy2.html

()=>{
                var container, stats;

            var camera, scene, renderer;

            var geometry, root;

            var mouseX = 0, mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            document.addEventListener( 'mousemove', onDocumentMouseMove, false );

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
                camera.position.z = 500;

                scene = new THREE.Scene();

                var geometry = new THREE.CubeGeometry( 100, 100, 100 );
                var material = new THREE.MeshNormalMaterial();

                root = new THREE.Mesh( geometry, material );
                root.position.x = 1000;
                scene.add( root );

                var amount = 200, object, parent = root;

                for ( var i = 0; i < amount; i ++ ) {

                    object = new THREE.Mesh( geometry, material );
                    object.position.x = 100;

                    parent.add( object );
                    parent = object;

                }

                parent = root;

                for ( var i = 0; i < amount; i ++ ) {

                    object = new THREE.Mesh( geometry, material );
                    object.position.x = - 100;

                    parent.add( object );
                    parent = object;

                }

                parent = root;

                for ( var i = 0; i < amount; i ++ ) {

                    object = new THREE.Mesh( geometry, material );
                    object.position.y = - 100;

                    parent.add( object );
                    parent = object;

                }

                parent = root;

                for ( var i = 0; i < amount; i ++ ) {

                    object = new THREE.Mesh( geometry, material );
                    object.position.y = 100;

                    parent.add( object );
                    parent = object;

                }

                parent = root;

                for ( var i = 0; i < amount; i ++ ) {

                    object = new THREE.Mesh( geometry, material );
                    object.position.z = - 100;

                    parent.add( object );
                    parent = object;

                }

                parent = root;

                for ( var i = 0; i < amount; i ++ ) {

                    object = new THREE.Mesh( geometry, material );
                    object.position.z = 100;

                    parent.add( object );
                    parent = object;

                }

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.sortObjects = false;
                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.zIndex = 100;
                container.appendChild( stats.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function onDocumentMouseMove(event) {

                mouseX = ( event.clientX - windowHalfX ) * 10;
                mouseY = ( event.clientY - windowHalfY ) * 10;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var time = Date.now() * 0.001;

                var rx = Math.sin( time * 0.7 ) * 0.2;
                var ry = Math.sin( time * 0.3 ) * 0.1;
                var rz = Math.sin( time * 0.2 ) * 0.1;

                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY - camera.position.y ) * .05;

                camera.lookAt( scene.position );

                root.traverse( function ( object ) {

                    object.rotation.x = rx;
                    object.rotation.y = ry;
                    object.rotation.z = rz;

                } );

                renderer.render( scene, camera );

            }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_large_mesh.html

()=>{
                var SCREEN_WIDTH = window.innerWidth;
            var SCREEN_HEIGHT = window.innerHeight;
            var FLOOR = -250;

            var container, stats;

            var camera, scene, canvasRenderer, webglRenderer;

            var loader;

            var mesh, zmesh, lightMesh;

            var directionalLight, pointLight;

            var mouseX = 0, mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var render_canvas = true, render_gl = true;
            var has_gl = false;

            var bcanvas = document.getElementById( "rcanvas" );
            var bwebgl = document.getElementById( "rwebgl" );

            document.addEventListener( 'mousemove', onDocumentMouseMove, false );

            init();
            animate();

            render_canvas = !has_gl;
            bwebgl.style.display = has_gl ? "inline" : "none";
            bcanvas.className = render_canvas ? "button" : "button inactive";

            function addMesh( geometry, scale, x, y, z, rx, ry, rz, material ) {

                mesh = new THREE.Mesh( geometry, material );

                mesh.scale.set( scale, scale, scale );
                mesh.position.set( x, y, z );
                mesh.rotation.set( rx, ry, rz );

                scene.add( mesh );

            }

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 50, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 100000 );
                camera.position.z = 1500;

                scene = new THREE.Scene();

                // LIGHTS

                var ambient = new THREE.AmbientLight( 0x101010 );
                scene.add( ambient );

                directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
                directionalLight.position.set( 1, 1, 2 ).normalize();
                scene.add( directionalLight );

                pointLight = new THREE.PointLight( 0xffaa00 );
                pointLight.position.set( 0, 0, 0 );
                scene.add( pointLight );

                // light representation

                var sphere = new THREE.SphereGeometry( 100, 16, 8, 1 );
                lightMesh = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) );
                lightMesh.scale.set( 0.05, 0.05, 0.05 );
                lightMesh.position = pointLight.position;
                scene.add( lightMesh );


                if ( render_gl ) {
                    try {

                        webglRenderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
                        webglRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                        webglRenderer.domElement.style.position = "relative";
                        container.appendChild( webglRenderer.domElement );
                        has_gl = true;

                    }
                    catch (e) {
                    }
                }

                if( render_canvas ) {

                    canvasRenderer = new THREE.CanvasRenderer();
                    canvasRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                    container.appendChild( canvasRenderer.domElement );

                }


                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.zIndex = 100;
                container.appendChild( stats.domElement );

                bcanvas.addEventListener( "click", toggleCanvas, false );
                bwebgl.addEventListener( "click", toggleWebGL, false );

                var loader = new THREE.BinaryLoader( true );
                //loader = new THREE.JSONLoader( true );
                document.body.appendChild( loader.statusDomElement );

                var start = Date.now();

                //loader.load( 'obj/lucy/Lucy100k_slim.js', callback );
                loader.load( 'obj/lucy/Lucy100k_bin.js', function ( geometry, materials ) {

                    addMesh( geometry, 0.75, 900, 0, 0,  0,0,0, new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x030303, specular: 0x990000, shininess: 30 } ) );
                    addMesh( geometry, 0.75, 300, 0, 0,  0,0,0, new THREE.MeshFaceMaterial( materials ) );
                    addMesh( geometry, 0.75, -300, 0, 0, 0,0,0, new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x111111, specular: 0xffaa00, shininess: 10 } ) );
                    addMesh( geometry, 0.75, -900, 0, 0, 0,0,0, new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x555555, specular: 0x666666, shininess: 10 } ) );

                    loader.statusDomElement.style.display = "none";

                    _log( "geometry.vertices: " + geometry.vertices.length );
                    _log( "geometry.faces: " + geometry.faces.length );

                    _log( "model loaded and created in " + ( Date.now() - start ) + " ms" );

                } );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                if ( render_canvas ) canvasRenderer.setSize( window.innerWidth, window.innerHeight );
                if ( render_gl && has_gl ) webglRenderer.setSize( window.innerWidth, window.innerHeight );

            }

            function onDocumentMouseMove( event ) {

                mouseX = ( event.clientX - windowHalfX );
                mouseY = ( event.clientY - windowHalfY );

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            var r = 0;

            function render() {

                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY - camera.position.y ) * .05;

                camera.lookAt( scene.position );

                lightMesh.position.x = 700 * Math.cos( r );
                lightMesh.position.z = 700 * Math.sin( r );

                r += 0.01;

                if ( render_canvas ) canvasRenderer.render( scene, camera );
                if ( render_gl && has_gl ) webglRenderer.render( scene, camera );

            }

            function _log( text ) {

                var e = document.getElementById( "log" );
                e.innerHTML = text + "<br/>" + e.innerHTML;

            }

            function toggleCanvas() {

                render_canvas = !render_canvas;
                bcanvas.className = render_canvas ? "button" : "button inactive";

                render_gl = !render_canvas;
                bwebgl.className = render_gl ? "button" : "button inactive";

                if( has_gl )
                    webglRenderer.domElement.style.display = render_gl ? "block" : "none";

                canvasRenderer.domElement.style.display = render_canvas ? "block" : "none";

            }

            function toggleWebGL() {

                render_gl = !render_gl;
                bwebgl.className = render_gl ? "button" : "button inactive";

                render_canvas = !render_gl;
                bcanvas.className = render_canvas ? "button" : "button inactive";

                if( has_gl )
                    webglRenderer.domElement.style.display = render_gl ? "block" : "none";

                canvasRenderer.domElement.style.display = render_canvas ? "block" : "none";

            }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_minecraft.html

()=>{

            if ( ! Detector.webgl ) {

                Detector.addGetWebGLMessage();
                document.getElementById( 'container' ).innerHTML = "";

            }

            var container, stats;

            var camera, controls, scene, renderer;

            var mesh;

            var worldWidth = 128, worldDepth = 128,
            worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2,
            data = generateHeight( worldWidth, worldDepth );

            var clock = new THREE.Clock();

            init();
            animate();

            function init() {

                container = document.getElementById( 'container' );

                camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );
                camera.position.y = getY( worldHalfWidth, worldHalfDepth ) * 100 + 100;

                controls = new THREE.FirstPersonControls( camera );

                controls.movementSpeed = 1000;
                controls.lookSpeed = 0.125;
                controls.lookVertical = true;

                scene = new THREE.Scene();

                // sides

                var matrix = new THREE.Matrix4();

                var pxGeometry = new THREE.PlaneGeometry( 100, 100 );
                pxGeometry.faces[ 0 ].materialIndex = 1;
                pxGeometry.applyMatrix( matrix.makeRotationY( Math.PI / 2 ) );
                pxGeometry.applyMatrix( matrix.makeTranslation( 50, 0, 0 ) );

                var nxGeometry = new THREE.PlaneGeometry( 100, 100 );
                nxGeometry.faces[ 0 ].materialIndex = 1;
                nxGeometry.applyMatrix( matrix.makeRotationY( - Math.PI / 2 ) );
                nxGeometry.applyMatrix( matrix.makeTranslation( - 50, 0, 0 ) );

                var pyGeometry = new THREE.PlaneGeometry( 100, 100 );
                pyGeometry.faces[ 0 ].materialIndex = 0;
                pyGeometry.applyMatrix( matrix.makeRotationX( - Math.PI / 2 ) );
                pyGeometry.applyMatrix( matrix.makeTranslation( 0, 50, 0 ) );

                var pzGeometry = new THREE.PlaneGeometry( 100, 100 );
                pzGeometry.faces[ 0 ].materialIndex = 1;
                pzGeometry.applyMatrix( matrix.makeTranslation( 0, 0, 50 ) );

                var nzGeometry = new THREE.PlaneGeometry( 100, 100 );
                nzGeometry.faces[ 0 ].materialIndex = 1;
                nzGeometry.applyMatrix( matrix.makeRotationY( Math.PI ) );
                nzGeometry.applyMatrix( matrix.makeTranslation( 0, 0, -50 ) );
                //

                var geometry = new THREE.Geometry();
                var dummy = new THREE.Mesh();

                for ( var z = 0; z < worldDepth; z ++ ) {

                    for ( var x = 0; x < worldWidth; x ++ ) {

                        var h = getY( x, z );

                        dummy.position.x = x * 100 - worldHalfWidth * 100;
                        dummy.position.y = h * 100;
                        dummy.position.z = z * 100 - worldHalfDepth * 100;

                        var px = getY( x + 1, z );
                        var nx = getY( x - 1, z );
                        var pz = getY( x, z + 1 );
                        var nz = getY( x, z - 1 );

                        dummy.geometry = pyGeometry;
                        THREE.GeometryUtils.merge( geometry, dummy );

                        if ( ( px != h && px != h + 1 ) || x == 0 ) {

                            dummy.geometry = pxGeometry;
                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                        if ( ( nx != h && nx != h + 1 ) || x == worldWidth - 1 ) {

                            dummy.geometry = nxGeometry;
                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                        if ( ( pz != h && pz != h + 1 ) || z == worldDepth - 1 ) {

                            dummy.geometry = pzGeometry;
                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                        if ( ( nz != h && nz != h + 1 ) || z == 0 ) {

                            dummy.geometry = nzGeometry;
                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                    }

                }

                var textureGrass = THREE.ImageUtils.loadTexture( 'textures/minecraft/grass.png' );
                textureGrass.magFilter = THREE.NearestFilter;
                textureGrass.minFilter = THREE.LinearMipMapLinearFilter;

                var textureGrassDirt = THREE.ImageUtils.loadTexture( 'textures/minecraft/grass_dirt.png' );
                textureGrassDirt.magFilter = THREE.NearestFilter;
                textureGrassDirt.minFilter = THREE.LinearMipMapLinearFilter;

                var material1 = new THREE.MeshLambertMaterial( { map: textureGrass, ambient: 0xbbbbbb } );
                var material2 = new THREE.MeshLambertMaterial( { map: textureGrassDirt, ambient: 0xbbbbbb } );

                var mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( [ material1, material2 ] ) );
                scene.add( mesh );

                var ambientLight = new THREE.AmbientLight( 0xcccccc );
                scene.add( ambientLight );

                var directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
                directionalLight.position.set( 1, 1, 0.5 ).normalize();
                scene.add( directionalLight );

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );

                container.innerHTML = "";

                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

                controls.handleResize();

            }

            function generateHeight( width, height ) {

                var data = [], perlin = new ImprovedNoise(),
                size = width * height, quality = 2, z = Math.random() * 100;

                for ( var j = 0; j < 4; j ++ ) {

                    if ( j == 0 ) for ( var i = 0; i < size; i ++ ) data[ i ] = 0;

                    for ( var i = 0; i < size; i ++ ) {

                        var x = i % width, y = ( i / width ) | 0;
                        data[ i ] += perlin.noise( x / quality, y / quality, z ) * quality;


                    }

                    quality *= 4

                }

                return data;

            }

            function getY( x, z ) {

                return ( data[ x + z * worldWidth ] * 0.2 ) | 0;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                controls.update( clock.getDelta() );
                renderer.render( scene, camera );

            }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_minecraft_ao.html

()=>{

            if ( ! Detector.webgl ) {

                Detector.addGetWebGLMessage();
                document.getElementById( 'container' ).innerHTML = "";

            }

            var fogExp2 = true;

            var container, stats;

            var camera, controls, scene, renderer;

            var mesh, mat;

            var worldWidth = 200, worldDepth = 200,
            worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2,
            data = generateHeight( worldWidth, worldDepth );

            var clock = new THREE.Clock();

            init();
            animate();

            function init() {

                container = document.getElementById( 'container' );

                camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 20000 );
                camera.position.y = getY( worldHalfWidth, worldHalfDepth ) * 100 + 100;

                controls = new THREE.FirstPersonControls( camera );

                controls.movementSpeed = 1000;
                controls.lookSpeed = 0.125;
                controls.lookVertical = true;
                controls.constrainVertical = true;
                controls.verticalMin = 1.1;
                controls.verticalMax = 2.2;

                scene = new THREE.Scene();
                scene.fog = new THREE.FogExp2( 0xffffff, 0.00015 );

                // sides

                var light = new THREE.Color( 0xffffff );
                var shadow = new THREE.Color( 0x505050 );

                var matrix = new THREE.Matrix4();

                var pxGeometry = new THREE.PlaneGeometry( 100, 100 );
                pxGeometry.faces[ 0 ].materialIndex = 1;
                pxGeometry.faces[ 0 ].vertexColors = [ light, shadow, shadow, light ];
                pxGeometry.applyMatrix( matrix.makeRotationY( Math.PI / 2 ) );
                pxGeometry.applyMatrix( matrix.makeTranslation( 50, 0, 0 ) );

                var nxGeometry = new THREE.PlaneGeometry( 100, 100 );
                nxGeometry.faces[ 0 ].materialIndex = 1;
                nxGeometry.faces[ 0 ].vertexColors = [ light, shadow, shadow, light ];
                nxGeometry.applyMatrix( matrix.makeRotationY( - Math.PI / 2 ) );
                nxGeometry.applyMatrix( matrix.makeTranslation( - 50, 0, 0 ) );

                var pyGeometry = new THREE.PlaneGeometry( 100, 100 );
                pyGeometry.faces[ 0 ].materialIndex = 0;
                pyGeometry.faces[ 0 ].vertexColors = [ light, light, light, light ];
                pyGeometry.applyMatrix( matrix.makeRotationX( - Math.PI / 2 ) );
                pyGeometry.applyMatrix( matrix.makeTranslation( 0, 50, 0 ) );

                var pzGeometry = new THREE.PlaneGeometry( 100, 100 );
                pzGeometry.faces[ 0 ].materialIndex = 1;
                pzGeometry.faces[ 0 ].vertexColors = [ light, shadow, shadow, light ];
                pzGeometry.applyMatrix( matrix.makeTranslation( 0, 0, 50 ) );

                var nzGeometry = new THREE.PlaneGeometry( 100, 100 );
                nzGeometry.faces[ 0 ].materialIndex = 1;
                nzGeometry.faces[ 0 ].vertexColors = [ light, shadow, shadow, light ];
                nzGeometry.applyMatrix( matrix.makeRotationY( Math.PI ) );
                nzGeometry.applyMatrix( matrix.makeTranslation( 0, 0, -50 ) );

                //

                var geometry = new THREE.Geometry();
                var dummy = new THREE.Mesh();

                for ( var z = 0; z < worldDepth; z ++ ) {

                    for ( var x = 0; x < worldWidth; x ++ ) {

                        var h = getY( x, z );

                        dummy.position.x = x * 100 - worldHalfWidth * 100;
                        dummy.position.y = h * 100;
                        dummy.position.z = z * 100 - worldHalfDepth * 100;

                        var px = getY( x + 1, z );
                        var nx = getY( x - 1, z );
                        var pz = getY( x, z + 1 );
                        var nz = getY( x, z - 1 );

                        var pxpz = getY( x + 1, z + 1 );
                        var nxpz = getY( x - 1, z + 1 );
                        var pxnz = getY( x + 1, z - 1 );
                        var nxnz = getY( x - 1, z - 1 );

                        dummy.geometry = pyGeometry;

                        var colors = dummy.geometry.faces[ 0 ].vertexColors;
                        colors[ 0 ] = nx > h || nz > h || nxnz > h ? shadow : light;
                        colors[ 1 ] = nx > h || pz > h || nxpz > h ? shadow : light;
                        colors[ 2 ] = px > h || pz > h || pxpz > h ? shadow : light;
                        colors[ 3 ] = px > h || nz > h || pxnz > h ? shadow : light;

                        THREE.GeometryUtils.merge( geometry, dummy );

                        if ( ( px != h && px != h + 1 ) || x == 0 ) {

                            dummy.geometry = pxGeometry;

                            var colors = dummy.geometry.faces[ 0 ].vertexColors;
                            colors[ 0 ] = pxpz > px && x > 0 ? shadow : light;
                            colors[ 3 ] = pxnz > px && x > 0 ? shadow : light;

                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                        if ( ( nx != h && nx != h + 1 ) || x == worldWidth - 1 ) {

                            dummy.geometry = nxGeometry;

                            var colors = dummy.geometry.faces[ 0 ].vertexColors;
                            colors[ 0 ] = nxnz > nx && x < worldWidth - 1 ? shadow : light;
                            colors[ 3 ] = nxpz > nx && x < worldWidth - 1 ? shadow : light;

                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                        if ( ( pz != h && pz != h + 1 ) || z == worldDepth - 1 ) {

                            dummy.geometry = pzGeometry;

                            var colors = dummy.geometry.faces[ 0 ].vertexColors;
                            colors[ 0 ] = nxpz > pz && z < worldDepth - 1 ? shadow : light;
                            colors[ 3 ] = pxpz > pz && z < worldDepth - 1 ? shadow : light;

                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                        if ( ( nz != h && nz != h + 1 ) || z == 0 ) {

                            dummy.geometry = nzGeometry;

                            var colors = dummy.geometry.faces[ 0 ].vertexColors;
                            colors[ 0 ] = pxnz > nz && z > 0 ? shadow : light;
                            colors[ 3 ] = nxnz > nz && z > 0 ? shadow : light;

                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                    }

                }

                var textureGrass = THREE.ImageUtils.loadTexture( 'textures/minecraft/grass.png' );
                textureGrass.magFilter = THREE.NearestFilter;
                textureGrass.minFilter = THREE.LinearMipMapLinearFilter;

                var textureGrassDirt = THREE.ImageUtils.loadTexture( 'textures/minecraft/grass_dirt.png' );
                textureGrassDirt.magFilter = THREE.NearestFilter;
                textureGrassDirt.minFilter = THREE.LinearMipMapLinearFilter;

                var material1 = new THREE.MeshLambertMaterial( { map: textureGrass, ambient: 0xbbbbbb, vertexColors: THREE.VertexColors } );
                var material2 = new THREE.MeshLambertMaterial( { map: textureGrassDirt, ambient: 0xbbbbbb, vertexColors: THREE.VertexColors } );

                var mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( [ material1, material2 ] ) );
                scene.add( mesh );

                var ambientLight = new THREE.AmbientLight( 0xcccccc );
                scene.add( ambientLight );

                var directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
                directionalLight.position.set( 1, 1, 0.5 ).normalize();
                scene.add( directionalLight );

                renderer = new THREE.WebGLRenderer( { clearColor: 0xffffff } );
                renderer.setSize( window.innerWidth, window.innerHeight );

                container.innerHTML = "";

                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

                controls.handleResize();

            }

            function loadTexture( path, callback ) {

                var image = new Image();

                image.onload = function () { callback(); };
                image.src = path;

                return image;

            }

            function generateHeight( width, height ) {

                var data = [], perlin = new ImprovedNoise(),
                size = width * height, quality = 2, z = Math.random() * 100;

                for ( var j = 0; j < 4; j ++ ) {

                    if ( j == 0 ) for ( var i = 0; i < size; i ++ ) data[ i ] = 0;

                    for ( var i = 0; i < size; i ++ ) {

                        var x = i % width, y = ( i / width ) | 0;
                        data[ i ] += perlin.noise( x / quality, y / quality, z ) * quality;

                    }

                    quality *= 4

                }

                return data;

            }

            function getY( x, z ) {

                return ( data[ x + z * worldWidth ] * 0.2 ) | 0;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                controls.update( clock.getDelta() );
                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_minecraft_oculusrift.html

()=>{

            if ( ! Detector.webgl ) {

                Detector.addGetWebGLMessage();
                document.getElementById( 'container' ).innerHTML = "";

            }

            var container, stats;

            var camera, controls, scene, renderer;

            var mesh;

            var effect;

            var worldWidth = 128, worldDepth = 128,
            worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2,
            data = generateHeight( worldWidth, worldDepth );

            var clock = new THREE.Clock();

            init();
            animate();

            function init() {

                container = document.getElementById( 'container' );

                camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );
                camera.position.y = getY( worldHalfWidth, worldHalfDepth ) * 100 + 100;

                controls = new THREE.FirstPersonControls( camera );

                controls.movementSpeed = 1000;
                controls.lookSpeed = 0.125;
                controls.lookVertical = true;

                scene = new THREE.Scene();

                // sides

                var matrix = new THREE.Matrix4();

                var pxGeometry = new THREE.PlaneGeometry( 100, 100 );
                pxGeometry.faces[ 0 ].materialIndex = 1;
                pxGeometry.applyMatrix( matrix.makeRotationY( Math.PI / 2 ) );
                pxGeometry.applyMatrix( matrix.makeTranslation( 50, 0, 0 ) );

                var nxGeometry = new THREE.PlaneGeometry( 100, 100 );
                nxGeometry.faces[ 0 ].materialIndex = 1;
                nxGeometry.applyMatrix( matrix.makeRotationY( - Math.PI / 2 ) );
                nxGeometry.applyMatrix( matrix.makeTranslation( - 50, 0, 0 ) );

                var pyGeometry = new THREE.PlaneGeometry( 100, 100 );
                pyGeometry.faces[ 0 ].materialIndex = 0;
                pyGeometry.applyMatrix( matrix.makeRotationX( - Math.PI / 2 ) );
                pyGeometry.applyMatrix( matrix.makeTranslation( 0, 50, 0 ) );

                var pzGeometry = new THREE.PlaneGeometry( 100, 100 );
                pzGeometry.faces[ 0 ].materialIndex = 1;
                pzGeometry.applyMatrix( matrix.makeTranslation( 0, 0, 50 ) );

                var nzGeometry = new THREE.PlaneGeometry( 100, 100 );
                nzGeometry.faces[ 0 ].materialIndex = 1;
                nzGeometry.applyMatrix( matrix.makeRotationY( Math.PI ) );
                nzGeometry.applyMatrix( matrix.makeTranslation( 0, 0, -50 ) );
                //

                var geometry = new THREE.Geometry();
                var dummy = new THREE.Mesh();

                for ( var z = 0; z < worldDepth; z ++ ) {

                    for ( var x = 0; x < worldWidth; x ++ ) {

                        var h = getY( x, z );

                        dummy.position.x = x * 100 - worldHalfWidth * 100;
                        dummy.position.y = h * 100;
                        dummy.position.z = z * 100 - worldHalfDepth * 100;

                        var px = getY( x + 1, z );
                        var nx = getY( x - 1, z );
                        var pz = getY( x, z + 1 );
                        var nz = getY( x, z - 1 );

                        dummy.geometry = pyGeometry;
                        THREE.GeometryUtils.merge( geometry, dummy );

                        if ( ( px != h && px != h + 1 ) || x == 0 ) {

                            dummy.geometry = pxGeometry;
                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                        if ( ( nx != h && nx != h + 1 ) || x == worldWidth - 1 ) {

                            dummy.geometry = nxGeometry;
                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                        if ( ( pz != h && pz != h + 1 ) || z == worldDepth - 1 ) {

                            dummy.geometry = pzGeometry;
                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                        if ( ( nz != h && nz != h + 1 ) || z == 0 ) {

                            dummy.geometry = nzGeometry;
                            THREE.GeometryUtils.merge( geometry, dummy );

                        }

                    }

                }

                var textureGrass = THREE.ImageUtils.loadTexture( 'textures/minecraft/grass.png' );
                textureGrass.magFilter = THREE.NearestFilter;
                textureGrass.minFilter = THREE.LinearMipMapLinearFilter;

                var textureGrassDirt = THREE.ImageUtils.loadTexture( 'textures/minecraft/grass_dirt.png' );
                textureGrassDirt.magFilter = THREE.NearestFilter;
                textureGrassDirt.minFilter = THREE.LinearMipMapLinearFilter;

                var material1 = new THREE.MeshLambertMaterial( { map: textureGrass, ambient: 0xbbbbbb } );
                var material2 = new THREE.MeshLambertMaterial( { map: textureGrassDirt, ambient: 0xbbbbbb } );

                var mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( [ material1, material2 ] ) );
                scene.add( mesh );

                var ambientLight = new THREE.AmbientLight( 0xcccccc );
                scene.add( ambientLight );

                var directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
                directionalLight.position.set( 1, 1, 0.5 ).normalize();
                scene.add( directionalLight );

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                effect = new THREE.OculusRiftEffect( renderer );
                effect.setSize( window.innerWidth, window.innerHeight );

                // Right Oculus Parameters are yet to be determined
                effect.separation = 20;
                effect.distortion = 0.1;
                effect.fov = 110;


                document.getElementById( 'distVal' ).innerHTML = effect.distortion.toFixed(2);
                document.getElementById( 'sepVal' ).innerHTML = effect.separation;
                document.getElementById( 'fovVal' ).innerHTML = effect.fov;


                container.innerHTML = "";

                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                // GUI
                window.addEventListener( 'resize', onWindowResize, false );
                document.addEventListener( 'keydown', keyPressed, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                effect.setSize( window.innerWidth, window.innerHeight );

                controls.handleResize();

            }

            function keyPressed (event) {
                switch ( event.keyCode ) {
                    case 79: /*O*/ effect.distortion -= 0.01; document.getElementById( 'distVal' ).innerHTML = effect.distortion.toFixed(2); break;
                    case 80: /*P*/ effect.distortion += 0.01; document.getElementById( 'distVal' ).innerHTML = effect.distortion.toFixed(2); break;
                    case 75: /*K*/ effect.separation -= 1; document.getElementById( 'sepVal' ).innerHTML = effect.separation; break;
                    case 76: /*L*/ effect.separation += 1; document.getElementById( 'sepVal' ).innerHTML = effect.separation; break;
                    case 78: /*N*/ effect.fov -= 1; document.getElementById( 'fovVal' ).innerHTML = effect.fov; break;
                    case 77: /*M*/ effect.fov += 1; document.getElementById( 'fovVal' ).innerHTML = effect.fov; break;

                }
            }

            function generateHeight( width, height ) {

                var data = [], perlin = new ImprovedNoise(),
                size = width * height, quality = 2, z = Math.random() * 100;

                for ( var j = 0; j < 4; j ++ ) {

                    if ( j == 0 ) for ( var i = 0; i < size; i ++ ) data[ i ] = 0;

                    for ( var i = 0; i < size; i ++ ) {

                        var x = i % width, y = ( i / width ) | 0;
                        data[ i ] += perlin.noise( x / quality, y / quality, z ) * quality;


                    }

                    quality *= 4

                }

                return data;

            }

            function getY( x, z ) {

                return ( data[ x + z * worldWidth ] * 0.2 ) | 0;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                controls.update( clock.getDelta() );
                effect.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_normals.html

()=>{

            var container, stats;

            var camera, scene, renderer;

            var cube, plane;

            var targetYRotation = 0;
            var targetXRotation = 0;
            var targetYRotationOnMouseDown = 0;
            var targetXRotationOnMouseDown = 0;

            var mouseX = 0, mouseY = 0;
            var mouseXOnMouseDown = 0;
            var mouseYOnMouseDown = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var group;

            var targetRotationOnMouseDown;
            var targetRotation;


            // Create new object by parameters

            var createSomething = function( klass, args ) {

                var F = function( klass, args ) {

                    return klass.apply( this, args );

                }

                F.prototype = klass.prototype;

                return F( klass, args );

            };


            // Cube

            var materials = [];

            for ( var i = 0; i < 6; i ++ ) {

                materials.push( [ new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, wireframe: false } ) ] );

            }



            var geometriesParams: {type:string;args:any[];}[] = [

                { type: 'CubeGeometry', args: [ 200, 200, 200, 2, 2, 2, materials ] },
                { type: 'TorusGeometry', args: [ 100, 60, 12, 12 ] },
                { type: 'TorusKnotGeometry', args: [  ] },
                { type: 'SphereGeometry', args: [ 100, 12, 12 ] },
                { type: 'SphereGeometry', args: [ 100, 5, 5 ] },
                { type: 'SphereGeometry', args: [ 100, 13, 13 ] },
                { type: 'IcosahedronGeometry', args: [ 100, 1 ] },
                { type: 'CylinderGeometry', args: [ 25, 75, 200, 8, 3 ]} ,
                { type: 'OctahedronGeometry', args: [200, 0] },
                { type: 'LatheGeometry', args: [ [
                    new THREE.Vector3(0,0,-100),
                    new THREE.Vector3(0,50,-50),
                    new THREE.Vector3(0,10,0),
                    new THREE.Vector3(0,50,50),
                    new THREE.Vector3(0,0,100) ] ]},
                { type: 'LatheGeometry', args: [ [
                    new THREE.Vector3(0,0,-100),
                    new THREE.Vector3(0,50,-50),
                    new THREE.Vector3(0,10,0),
                    new THREE.Vector3(0,50,50),
                    new THREE.Vector3(0,100,100) ], 12, 0, Math.PI ] },
                { type: 'LatheGeometry', args: [ [
                    new THREE.Vector3(0,10,-100),
                    new THREE.Vector3(0,50,-50),
                    new THREE.Vector3(0,10,0),
                    new THREE.Vector3(0,50,50),
                    new THREE.Vector3(0,0,100) ], 12, Math.PI*2/3, Math.PI*3/2 ] },
                { type: 'TextGeometry', args: ['&', {
                                        size: 200,
                                        height: 50,
                                        curveSegments: 1,
                                        font: "helvetiker"

                                    }]},
                { type: 'PlaneGeometry', args: [ 200, 200, 4, 4 ] }

            ];

            var info;
            var geometryIndex = 0;

            // start scene

            init();
            animate();

            function nextGeometry() {

                geometryIndex ++;

                if ( geometryIndex > geometriesParams.length - 1 ) {

                    geometryIndex = 0;

                }

                addStuff();

            }

            function switchGeometry(i) {

                geometryIndex = i;

                addStuff();
            }

            function updateInfo() {

                var params = geometriesParams[ geometryIndex ];

                var dropdown = '<select id="dropdown" onchange="switchGeometry(this.value)">';

                for (  i = 0; i < geometriesParams.length; i ++ ) {
                    dropdown += '<option value="' + i + '"';

                    dropdown += (geometryIndex == i)  ? ' selected' : '';

                    dropdown += '>' + geometriesParams[i].type + '</option>';
                }

                dropdown += '</select>';

                var text =
                    'Drag to spin THREE.' + params.type +
                    '<br>' +
                    '<br>Geometry: ' + dropdown + ' <a href="#" onclick="nextGeometry();return false;">next</a>';

                text +=
                    '<br><br><font color="3333FF">Blue Arrows: Face Normals</font>' + 
                    '<br><font color="FF3333">Red Arrows: Vertex Normals before Geometry.mergeVertices</font>' + 
                    '<br>Black Arrows: Vertex Normals after Geometry.mergeVertices';

                info.innerHTML = text;

            }

            function addStuff() {

                if ( group !== undefined ) {

                    scene.remove( group );

                }



                var params = geometriesParams[ geometryIndex ];

                var geometry = createSomething( THREE[ params.type ], params.args );

                // scale geometry to a uniform size
                geometry.computeBoundingSphere();

                var scaleFactor = 160 / geometry.boundingSphere.radius;
                geometry.applyMatrix( new THREE.Matrix4().makeScale( scaleFactor, scaleFactor, scaleFactor ) );

                var originalGeometry = geometry.clone();
                originalGeometry.computeFaceNormals();
                originalGeometry.computeVertexNormals( true );

                // in case of duplicated vertices
                geometry.mergeVertices();
                geometry.computeCentroids();
                geometry.computeFaceNormals();
                geometry.computeVertexNormals( true );

                updateInfo();

                var faceABCD = "abcd";
                var color, f, p, n, vertexIndex;

                for ( i = 0; i < geometry.faces.length; i ++ ) {

                    f  = geometry.faces[ i ];


                    n = ( f instanceof THREE.Face3 ) ? 3 : 4;

                    for( var j = 0; j < n; j++ ) {

                        vertexIndex = f[ faceABCD.charAt( j ) ];

                        p = geometry.vertices[ vertexIndex ];

                        color = new THREE.Color( 0xffffff );
                        color.setHSL( ( p.y ) / 400 + 0.5, 1.0, 1.0 );

                        f.vertexColors[ j ] = color;

                    }

                }


                group = new THREE.Object3D();
                var mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xfefefe, wireframe: true, opacity: 0.5 } ) );
                group.add( mesh );
                scene.add( group );

                var fvNames = [ 'a', 'b', 'c', 'd' ];

                var normalLength = 15;

                var fl: number;
                var face: THREE.Face;

                for( f = 0, fl = geometry.faces.length; f < fl; f ++ ) {
                    face = geometry.faces[ f ];
                    var arrow = new THREE.ArrowHelper( 
                            face.normal,
                            face.centroid,
                            normalLength,
                            0x3333FF );
                    mesh.add( arrow );
                }

                for( f = 0, fl = originalGeometry.faces.length; f < fl; f ++ ) {
                    face = originalGeometry.faces[ f ];
                    if( face.vertexNormals === undefined ) {
                        continue;
                    }
                    for( var v = 0, vl = face.vertexNormals.length; v < vl; v ++ ) {
                        var arrow = new THREE.ArrowHelper( 
                                face.vertexNormals[ v ],
                                originalGeometry.vertices[ face[ fvNames[ v ] ] ],
                                normalLength,
                                0xFF3333 );
                        mesh.add( arrow );
                    }
                }

                for( f = 0, fl = mesh.geometry.faces.length; f < fl; f ++ ) {
                    face = mesh.geometry.faces[ f ];
                    if( face.vertexNormals === undefined ) {
                        continue;
                    }
                    for( var v = 0, vl = face.vertexNormals.length; v < vl; v ++ ) {
                        var arrow = new THREE.ArrowHelper( 
                                face.vertexNormals[ v ],
                                mesh.geometry.vertices[ face[ fvNames[ v ] ] ],
                                normalLength,
                                0x000000 );
                        mesh.add( arrow );
                    }
                }

            }

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                info = document.createElement( 'div' );
                info.style.position = 'absolute';
                info.style.top = '10px';
                info.style.width = '100%';
                info.style.textAlign = 'center';
                info.innerHTML = 'Drag to spin the geometry ';
                container.appendChild( info );

                camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
                camera.position.z = 500;

                scene = new THREE.Scene();

                var light = new THREE.PointLight( 0xffffff, 1.5 );
                light.position.set( 1000, 1000, 2000 );
                scene.add( light );

                addStuff();

                renderer = new THREE.WebGLRenderer( { antialias: true } ); // WebGLRenderer CanvasRenderer
                renderer.setSize( window.innerWidth, window.innerHeight );

                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                document.addEventListener( 'mousedown', onDocumentMouseDown, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            //

            function onDocumentMouseDown( event ) {

                //event.preventDefault();

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'mouseup', onDocumentMouseUp, false );
                document.addEventListener( 'mouseout', onDocumentMouseOut, false );

                mouseXOnMouseDown = event.clientX - windowHalfX;
                mouseYOnMouseDown = event.clientY - windowHalfY;
                targetYRotationOnMouseDown = targetYRotation;
                targetXRotationOnMouseDown = targetXRotation;

            }

            function onDocumentMouseMove( event ) {

                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;

                targetYRotation = targetYRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
                targetXRotation = targetXRotationOnMouseDown + ( mouseY - mouseYOnMouseDown ) * 0.02;

            }

            function onDocumentMouseUp( event ) {

                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
            }

            function onDocumentMouseOut( event ) {

                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
                    targetRotationOnMouseDown = targetRotation;

                }
            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

                }
            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                group.rotation.x = ( targetXRotation) * 0.15;
                group.rotation.y =  ( targetYRotation ) * 0.15;

                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_shapes.html

()=>{

            var container, stats;

            var camera, scene, renderer;

            var text, plane;

            var targetRotation = 0;
            var targetRotationOnMouseDown = 0;

            var mouseX = 0;
            var mouseXOnMouseDown = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var parent;

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                var info = document.createElement( 'div' );
                info.style.position = 'absolute';
                info.style.top = '10px';
                info.style.width = '100%';
                info.style.textAlign = 'center';
                info.innerHTML = 'Simple procedurally generated 3D shapes example by <a href="http://www.lab4games.net/zz85/blog">zz85</a><br/>Drag to spin';
                container.appendChild( info );

                camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
                camera.position.set( 0, 150, 500 );

                scene = new THREE.Scene();

                var light = new THREE.DirectionalLight( 0xffffff );
                light.position.set( 0, 0, 1 );
                scene.add( light );

                parent = new THREE.Object3D();
                parent.position.y = 50;
                scene.add( parent );

                function addShape( shape, extrudeSettings, color, x, y, z, rx, ry, rz, s ) {

                    var points = shape.createPointsGeometry();
                    var spacedPoints = shape.createSpacedPointsGeometry( 100 );

                    // flat shape

                    var geometry = new THREE.ShapeGeometry( shape );

                    var mesh = THREE.SceneUtils.createMultiMaterialObject( geometry, [ new THREE.MeshLambertMaterial( { color: color } ), new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, transparent: true } ) ] );
                    mesh.position.set( x, y, z - 125 );
                    mesh.rotation.set( rx, ry, rz );
                    mesh.scale.set( s, s, s );
                    parent.add( mesh );

                    // 3d shape

                    var geometryExtrude = new THREE.ExtrudeGeometry( shape, extrudeSettings );

                    var mesh = THREE.SceneUtils.createMultiMaterialObject( geometryExtrude, [ new THREE.MeshLambertMaterial( { color: color } ), new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, transparent: true } ) ] );
                    mesh.position.set( x, y, z - 75 );
                    mesh.rotation.set( rx, ry, rz );
                    mesh.scale.set( s, s, s );
                    parent.add( mesh );

                    // solid line

                    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: color, linewidth: 2 } ) );
                    line.position.set( x, y, z + 25 );
                    line.rotation.set( rx, ry, rz );
                    line.scale.set( s, s, s );
                    parent.add( line );

                    // transparent line from real points

                    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: color, opacity: 0.5 } ) );
                    line.position.set( x, y, z + 75 );
                    line.rotation.set( rx, ry, rz );
                    line.scale.set( s, s, s );
                    parent.add( line );

                    // vertices from real points

                    var pgeo = points.clone();
                    var particles = new THREE.ParticleSystem( pgeo, new THREE.ParticleSystemMaterial( { color: color, size: 2, opacity: 0.75 } ) );
                    particles.position.set( x, y, z + 75 );
                    particles.rotation.set( rx, ry, rz );
                    particles.scale.set( s, s, s );
                    parent.add( particles );

                    // transparent line from equidistance sampled points

                    var line = new THREE.Line( spacedPoints, new THREE.LineBasicMaterial( { color: color, opacity: 0.2 } ) );
                    line.position.set( x, y, z + 125 );
                    line.rotation.set( rx, ry, rz );
                    line.scale.set( s, s, s );
                    parent.add( line );

                    // equidistance sampled points

                    var pgeo = spacedPoints.clone();
                    var particles2 = new THREE.ParticleSystem( pgeo, new THREE.ParticleSystemMaterial( { color: color, size: 2, opacity: 0.5 } ) );
                    particles2.position.set( x, y, z + 125 );
                    particles2.rotation.set( rx, ry, rz );
                    particles2.scale.set( s, s, s );
                    parent.add( particles2 );

                }


                // California

                var californiaPts = [];

                californiaPts.push( new THREE.Vector2 ( 610, 320 ) );
                californiaPts.push( new THREE.Vector2 ( 450, 300 ) );
                californiaPts.push( new THREE.Vector2 ( 392, 392 ) );
                californiaPts.push( new THREE.Vector2 ( 266, 438 ) );
                californiaPts.push( new THREE.Vector2 ( 190, 570 ) );
                californiaPts.push( new THREE.Vector2 ( 190, 600 ) );
                californiaPts.push( new THREE.Vector2 ( 160, 620 ) );
                californiaPts.push( new THREE.Vector2 ( 160, 650 ) );
                californiaPts.push( new THREE.Vector2 ( 180, 640 ) );
                californiaPts.push( new THREE.Vector2 ( 165, 680 ) );
                californiaPts.push( new THREE.Vector2 ( 150, 670 ) );
                californiaPts.push( new THREE.Vector2 (  90, 737 ) );
                californiaPts.push( new THREE.Vector2 (  80, 795 ) );
                californiaPts.push( new THREE.Vector2 (  50, 835 ) );
                californiaPts.push( new THREE.Vector2 (  64, 870 ) );
                californiaPts.push( new THREE.Vector2 (  60, 945 ) );
                californiaPts.push( new THREE.Vector2 ( 300, 945 ) );
                californiaPts.push( new THREE.Vector2 ( 300, 743 ) );
                californiaPts.push( new THREE.Vector2 ( 600, 473 ) );
                californiaPts.push( new THREE.Vector2 ( 626, 425 ) );
                californiaPts.push( new THREE.Vector2 ( 600, 370 ) );
                californiaPts.push( new THREE.Vector2 ( 610, 320 ) );

                var californiaShape = new THREE.Shape( californiaPts );


                // Triangle

                var triangleShape = new THREE.Shape();
                triangleShape.moveTo(  80, 20 );
                triangleShape.lineTo(  40, 80 );
                triangleShape.lineTo( 120, 80 );
                triangleShape.lineTo(  80, 20 ); // close path


                // Heart

                var x = 0, y = 0;

                var heartShape = new THREE.Shape(); // From http://blog.burlock.org/html5/130-paths

                heartShape.moveTo( x + 25, y + 25 );
                heartShape.bezierCurveTo( x + 25, y + 25, x + 20, y, x, y );
                heartShape.bezierCurveTo( x - 30, y, x - 30, y + 35,x - 30,y + 35 );
                heartShape.bezierCurveTo( x - 30, y + 55, x - 10, y + 77, x + 25, y + 95 );
                heartShape.bezierCurveTo( x + 60, y + 77, x + 80, y + 55, x + 80, y + 35 );
                heartShape.bezierCurveTo( x + 80, y + 35, x + 80, y, x + 50, y );
                heartShape.bezierCurveTo( x + 35, y, x + 25, y + 25, x + 25, y + 25 );


                // Square

                var sqLength = 80;

                var squareShape = new THREE.Shape();
                squareShape.moveTo( 0,0 );
                squareShape.lineTo( 0, sqLength );
                squareShape.lineTo( sqLength, sqLength );
                squareShape.lineTo( sqLength, 0 );
                squareShape.lineTo( 0, 0 );


                // Rectangle

                var rectLength = 120, rectWidth = 40;

                var rectShape = new THREE.Shape();
                rectShape.moveTo( 0,0 );
                rectShape.lineTo( 0, rectWidth );
                rectShape.lineTo( rectLength, rectWidth );
                rectShape.lineTo( rectLength, 0 );
                rectShape.lineTo( 0, 0 );


                // Rounded rectangle

                var roundedRectShape = new THREE.Shape();

                ( function roundedRect( ctx, x, y, width, height, radius ){

                    ctx.moveTo( x, y + radius );
                    ctx.lineTo( x, y + height - radius );
                    ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
                    ctx.lineTo( x + width - radius, y + height) ;
                    ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
                    ctx.lineTo( x + width, y + radius );
                    ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
                    ctx.lineTo( x + radius, y );
                    ctx.quadraticCurveTo( x, y, x, y + radius );

                } )( roundedRectShape, 0, 0, 50, 50, 20 );


                // Circle

                var circleRadius = 40;
                var circleShape = new THREE.Shape();
                circleShape.moveTo( 0, circleRadius );
                circleShape.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 );
                circleShape.quadraticCurveTo( circleRadius, -circleRadius, 0, -circleRadius );
                circleShape.quadraticCurveTo( -circleRadius, -circleRadius, -circleRadius, 0 );
                circleShape.quadraticCurveTo( -circleRadius, circleRadius, 0, circleRadius );


                // Fish

                x = y = 0;

                var fishShape = new THREE.Shape();

                fishShape.moveTo(x,y);
                fishShape.quadraticCurveTo(x + 50, y - 80, x + 90, y - 10);
                fishShape.quadraticCurveTo(x + 100, y - 10, x + 115, y - 40);
                fishShape.quadraticCurveTo(x + 115, y, x + 115, y + 40);
                fishShape.quadraticCurveTo(x + 100, y + 10, x + 90, y + 10);
                fishShape.quadraticCurveTo(x + 50, y + 80, x, y);


                // Arc circle

                var arcShape = new THREE.Shape();
                arcShape.moveTo( 50, 10 );
                arcShape.absarc( 10, 10, 40, 0, Math.PI*2, false );

                var holePath = new THREE.Path();
                holePath.moveTo( 20, 10 );
                holePath.absarc( 10, 10, 10, 0, Math.PI*2, true );
                arcShape.holes.push( holePath );


                // Smiley

                var smileyShape = new THREE.Shape();
                smileyShape.moveTo( 80, 40 );
                smileyShape.absarc( 40, 40, 40, 0, Math.PI*2, false );

                var smileyEye1Path = new THREE.Path();
                smileyEye1Path.moveTo( 35, 20 );
                // smileyEye1Path.absarc( 25, 20, 10, 0, Math.PI*2, true );
                smileyEye1Path.absellipse( 25, 20, 10, 10, 0, Math.PI*2, true );

                smileyShape.holes.push( smileyEye1Path );

                var smileyEye2Path = new THREE.Path();
                smileyEye2Path.moveTo( 65, 20 );
                smileyEye2Path.absarc( 55, 20, 10, 0, Math.PI*2, true );
                smileyShape.holes.push( smileyEye2Path );

                var smileyMouthPath = new THREE.Path();
                // ugly box mouth
                // smileyMouthPath.moveTo( 20, 40 );
                // smileyMouthPath.lineTo( 60, 40 );
                // smileyMouthPath.lineTo( 60, 60 );
                // smileyMouthPath.lineTo( 20, 60 );
                // smileyMouthPath.lineTo( 20, 40 );

                smileyMouthPath.moveTo( 20, 40 );
                smileyMouthPath.quadraticCurveTo( 40, 60, 60, 40 );
                smileyMouthPath.bezierCurveTo( 70, 45, 70, 50, 60, 60 );
                smileyMouthPath.quadraticCurveTo( 40, 80, 20, 60 );
                smileyMouthPath.quadraticCurveTo( 5, 50, 20, 40 );

                smileyShape.holes.push( smileyMouthPath );


                // Spline shape + path extrusion

                var splinepts = [];
                splinepts.push( new THREE.Vector2 ( 350, 100 ) );
                splinepts.push( new THREE.Vector2 ( 400, 450 ) );
                splinepts.push( new THREE.Vector2 ( -140, 350 ) );
                splinepts.push( new THREE.Vector2 ( 0, 0 ) );

                var splineShape = new THREE.Shape(  );
                splineShape.moveTo( 0, 0 );
                splineShape.splineThru( splinepts );

                // splineShape.debug( document.getElementById("debug") );

                // TODO 3d path?


                var extrudeSettings:any = { amount: 20 }; // bevelSegments: 2, steps: 2 , bevelSegments: 5, bevelSize: 8, bevelThickness:5

                // addShape( shape, color, x, y, z, rx, ry,rz, s );

                addShape( californiaShape, extrudeSettings, 0xffaa00, -300, -100, 0, 0, 0, 0, 0.25 );

                extrudeSettings.bevelEnabled = true;
                extrudeSettings.bevelSegments = 2;
                extrudeSettings.steps = 2;

                addShape( triangleShape, extrudeSettings, 0xffee00, -180, 0, 0, 0, 0, 0, 1 );
                addShape( roundedRectShape, extrudeSettings, 0x005500, -150, 150, 0, 0, 0, 0, 1 );
                addShape( squareShape, extrudeSettings, 0x0055ff, 150, 100, 0, 0, 0, 0, 1 );
                addShape( heartShape, extrudeSettings, 0xff1100, 60, 100, 0, 0, 0, Math.PI, 1 );
                addShape( circleShape, extrudeSettings, 0x00ff11, 120, 250, 0, 0, 0, 0, 1 );
                addShape( fishShape, extrudeSettings, 0x222222, -60, 200, 0, 0, 0, 0, 1 );
                addShape( smileyShape, extrudeSettings, 0xee00ff, -200, 250, 0, 0, 0, Math.PI, 1 );
                addShape( arcShape, extrudeSettings, 0xbb4422, 150, 0, 0, 0, 0, 0, 1 );

                extrudeSettings.bevelEnabled = false;
                extrudeSettings.steps = 20;

                addShape( splineShape, extrudeSettings, 0x888888, -50, -100, -50, 0, 0, 0, 0.2 );

                //

                renderer = new THREE.WebGLRenderer( { antialias: true } );
                renderer.setSize( window.innerWidth, window.innerHeight );

                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                document.addEventListener( 'mousedown', onDocumentMouseDown, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            //

            function onDocumentMouseDown( event ) {

                event.preventDefault();

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'mouseup', onDocumentMouseUp, false );
                document.addEventListener( 'mouseout', onDocumentMouseOut, false );

                mouseXOnMouseDown = event.clientX - windowHalfX;
                targetRotationOnMouseDown = targetRotation;

            }

            function onDocumentMouseMove( event ) {

                mouseX = event.clientX - windowHalfX;

                targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

            }

            function onDocumentMouseUp( event ) {

                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

            }

            function onDocumentMouseOut( event ) {

                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
                    targetRotationOnMouseDown = targetRotation;

                }

            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

                }

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                parent.rotation.y += ( targetRotation - parent.rotation.y ) * 0.05;
                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_subdivision.html

()=>{

            var container, stats;

            var camera, scene, renderer;

            var cube, plane;

            var targetYRotation = 0;
            var targetXRotation = 0;
            var targetYRotationOnMouseDown = 0;
            var targetXRotationOnMouseDown = 0;
            var targetRotationOnMouseDown = 0;
            var targetRotation = 0;

            var mouseX = 0, mouseY = 0;
            var mouseXOnMouseDown = 0;
            var mouseYOnMouseDown = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var scene, group, cube, geometry, smooth;


            // Create new object by parameters

            var createSomething = function( klass, args ) {

                var F = function( klass, args ) {

                    return klass.apply( this, args );

                }

                F.prototype = klass.prototype;

                return F( klass, args );

            };


            // Cube

            var materials = [];

            for ( var i = 0; i < 6; i ++ ) {

                materials.push( [ new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, wireframe: false } ) ] );

            }



            var geometriesParams:{type:string;args:any[];}[] = [

                { type: 'CubeGeometry', args: [ 200, 200, 200, 2, 2, 2, materials ] },
                { type: 'TorusGeometry', args: [ 100, 60, 4, 8, Math.PI*2 ] },
                { type: 'TorusKnotGeometry', args: [  ], scale:0.25, meshScale:4 },
                { type: 'SphereGeometry', args: [ 100, 3, 3 ], meshScale:2 },
                { type: 'IcosahedronGeometry', args: [ 100, 1 ], meshScale:2 },
                { type: 'CylinderGeometry', args: [ 25, 75, 200, 8, 3 ]} ,
                { type: 'OctahedronGeometry', args: [200, 0], meshScale:2 },
                { type: 'LatheGeometry', args: [ [
                    new THREE.Vector3(0,0,0),
                    new THREE.Vector3(0,50,50),
                    new THREE.Vector3(0,10,100),
                    new THREE.Vector3(0,50,150),
                    new THREE.Vector3(0,0,200) ] ]},
                { type: 'TextGeometry', args: ['&', {
                                        size: 200,
                                        height: 50,
                                        curveSegments: 1,
                                        font: "helvetiker"

                                    }]},
                { type: 'PlaneGeometry', args: [ 200, 200, 4, 4 ] }

            ];

            var loader = new THREE.JSONLoader();
            loader.load( 'obj/WaltHeadLo.js', function ( geometry ) {

                geometriesParams.push({type: 'WaltHead', args: [ ], meshScale: 6 });

                THREE["WaltHead"] = function() {
                    return geometry.clone();
                };

                updateInfo()

            });

            var loader2 = new THREE.JSONLoader();
            loader2.load( 'obj/Suzanne.js', function ( geometry ) {

                geometriesParams.push({type: 'Suzanne', args: [ ], scale: 100, meshScale:2 });

                THREE["Suzanne"] = function() {
                    return geometry.clone();
                };

                updateInfo()

            } );


            var info;
            var subdivisions = 2;
            var geometryIndex = 0;

            // start scene

            init();
            animate();

            function nextSubdivision( x ) {

                subdivisions = Math.max( 0, subdivisions + x );
                addStuff();

            }

            function nextGeometry() {

                geometryIndex ++;

                if ( geometryIndex > geometriesParams.length - 1 ) {

                    geometryIndex = 0;

                }

                addStuff();

            }

            function switchGeometry(i) {

                geometryIndex = i;

                addStuff();
            }

            function updateInfo() {

                var params = geometriesParams[ geometryIndex ];

                var dropdown = '<select id="dropdown" onchange="switchGeometry(this.value)">';

                for (  i = 0; i < geometriesParams.length; i ++ ) {
                    dropdown += '<option value="' + i + '"';

                    dropdown += (geometryIndex == i)  ? ' selected' : '';

                    dropdown += '>' + geometriesParams[i].type + '</option>';
                }

                dropdown += '</select>';

                info.innerHTML = 'Drag to spin THREE.' + params.type +

                    '<br><br>Subdivisions: '  + subdivisions +
                    ' <a href="#" onclick="nextSubdivision(1); return false;">more</a>/<a href="#" onclick="nextSubdivision(-1); return false;">less</a>' +
                    '<br>Geometry: ' + dropdown + ' <a href="#" onclick="nextGeometry();return false;">next</a>' +
                    '<br><br>Vertices count: before ' + geometry.vertices.length + ' after ' + smooth.vertices.length +
                    '<br>Face count: before ' + geometry.faces.length + ' after ' + smooth.faces.length
                ; //+ params.args;
            }

            function addStuff() {

                if ( cube ) {

                    scene.remove( group );
                    scene.remove( cube );

                }


                var modifier = new THREE.SubdivisionModifier( subdivisions );


                var params:any = geometriesParams[ geometryIndex ];

                geometry = createSomething( THREE[ params.type ], params.args );

                // Scale Geometry

                if ( params.scale ) {

                    geometry.applyMatrix( new THREE.Matrix4().makeScale( params.scale, params.scale, params.scale ) );

                }

                // Cloning original geometry for debuging

                var smooth = geometry.clone();

                // mergeVertices(); is run in case of duplicated vertices
                smooth.mergeVertices();

                smooth.computeCentroids();
                smooth.computeFaceNormals();
                smooth.computeVertexNormals();

                modifier.modify( smooth );

                updateInfo();

                var faceABCD = "abcd";
                var color, f, p, n, vertexIndex;

                for ( i = 0; i < smooth.faces.length; i ++ ) {

                    f  = smooth.faces[ i ];


                    n = ( f instanceof THREE.Face3 ) ? 3 : 4;

                    for( var j = 0; j < n; j++ ) {

                        vertexIndex = f[ faceABCD.charAt( j ) ];

                        p = smooth.vertices[ vertexIndex ];

                        color = new THREE.Color( 0xffffff );
                        color.setHSL( ( p.y ) / 200 + 0.5, 1.0, 1.0 );

                        f.vertexColors[ j ] = color;

                    }

                }


                group = new THREE.Object3D();
                group.add( new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xfefefe, wireframe: true, opacity: 0.5 } ) ) );
                scene.add( group );


                var debugNewPoints = false;
                var debugOldPoints = false;

                // Debug new Points

                if (debugNewPoints) {
                    var PI2 = Math.PI * 2;
                    var program = function ( context ) {

                        context.beginPath();
                        context.arc( 0, 0, 1, 0, PI2, true );
                        context.closePath();
                        context.fill();

                    }

                    for ( var i = 0; i < smooth.vertices.length; i++ ) {
                        var geometry = new THREE.Geometry();
                        var particle = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: Math.random() * 0x808008 + 0x808080, program: program } ) );
                        particle.position = smooth.vertices[ i ];
                        particle.scale.x = particle.scale.y = 5;
                        group.add( particle );
                    }

                }


                //Debug original points

                if (debugOldPoints) {

                    var drawText = function(i) {

                        return function ( context ) {

                            context.beginPath();
                            context.scale(0.1,-0.1);

                            context.fillText(i, 0,0);

                        };

                    }

                    for ( var i = 0; i < geometry.vertices.length; i++ ) {
                        var geometry = new THREE.Geometry();
                        particle = new THREE.ParticleSystem(geometry, new THREE.ParticleSystemMaterial( { color: Math.random() * 0x808008 + 0x808080, program: drawText(i) } ) );
                        particle.position = smooth.vertices[ i ];
                        particle.scale.x = particle.scale.y = 30;
                        group.add( particle );
                    }
                }


                var meshmaterials:THREE.Material[] = [
                    new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
                    new THREE.MeshBasicMaterial( { color: 0x405040, wireframe: true, opacity: 0.8, transparent: true } )
                ];

                cube = THREE.SceneUtils.createMultiMaterialObject( smooth, meshmaterials );

                var meshScale =  params.meshScale ? params.meshScale : 1;

                cube.scale.x = meshScale;
                cube.scale.y = meshScale;
                cube.scale.z = meshScale;

                scene.add( cube );

                group.scale.copy( cube.scale );

            }

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                info = document.createElement( 'div' );
                info.style.position = 'absolute';
                info.style.top = '10px';
                info.style.width = '100%';
                info.style.textAlign = 'center';
                info.innerHTML = 'Drag to spin the geometry ';
                container.appendChild( info );

                camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
                camera.position.z = 500;

                scene = new THREE.Scene();

                var light = new THREE.PointLight( 0xffffff, 1.5 );
                light.position.set( 1000, 1000, 2000 );
                scene.add( light );

                addStuff();

                renderer = new THREE.WebGLRenderer( { antialias: true } ); // WebGLRenderer CanvasRenderer
                renderer.setSize( window.innerWidth, window.innerHeight );

                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                document.addEventListener( 'mousedown', onDocumentMouseDown, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            //

            function onDocumentMouseDown( event ) {

                //event.preventDefault();

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'mouseup', onDocumentMouseUp, false );
                document.addEventListener( 'mouseout', onDocumentMouseOut, false );

                mouseXOnMouseDown = event.clientX - windowHalfX;
                mouseYOnMouseDown = event.clientY - windowHalfY;
                targetYRotationOnMouseDown = targetYRotation;
                targetXRotationOnMouseDown = targetXRotation;

            }

            function onDocumentMouseMove( event ) {

                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;

                targetYRotation = targetYRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
                targetXRotation = targetXRotationOnMouseDown + ( mouseY - mouseYOnMouseDown ) * 0.02;

            }

            function onDocumentMouseUp( event ) {

                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
            }

            function onDocumentMouseOut( event ) {

                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
                    targetRotationOnMouseDown = targetRotation;

                }
            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

                }
            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                group.rotation.x = cube.rotation.x += ( targetXRotation - cube.rotation.x ) * 0.05;
                group.rotation.y = cube.rotation.y += ( targetYRotation - cube.rotation.y ) * 0.05;

                renderer.render( scene, camera );

            }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_terrain.html

()=>{

            if ( ! Detector.webgl ) {

                Detector.addGetWebGLMessage();
                document.getElementById( 'container' ).innerHTML = "";

            }

            var container, stats;

            var camera, controls, scene, renderer;

            var mesh, texture;

            var worldWidth = 256, worldDepth = 256,
            worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

            var clock = new THREE.Clock();

            var data;

            init();
            animate();

            function init() {

                container = document.getElementById( 'container' );

                camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );

                scene = new THREE.Scene();

                controls = new THREE.FirstPersonControls( camera );
                controls.movementSpeed = 1000;
                controls.lookSpeed = 0.1;

                data = generateHeight( worldWidth, worldDepth );

                camera.position.y = data[ worldHalfWidth + worldHalfDepth * worldWidth ] + 500;

                var geometry = new THREE.PlaneGeometry( 7500, 7500, worldWidth - 1, worldDepth - 1 );
                geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

                for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {

                    geometry.vertices[ i ].y = data[ i ] * 10;

                }

                texture = new THREE.Texture( generateTexture( data, worldWidth, worldDepth ), new THREE.UVMapping(), THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping );
                texture.needsUpdate = true;

                mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: texture } ) );
                scene.add( mesh );

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );

                container.innerHTML = "";

                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

                controls.handleResize();

            }

            function generateHeight( width, height ) {

                var size = width * height, data = new Float32Array( size ),
                perlin = new ImprovedNoise(), quality = 1, z = Math.random() * 100;

                for ( var i = 0; i < size; i ++ ) {

                    data[ i ] = 0

                }

                for ( var j = 0; j < 4; j ++ ) {

                    for ( var i = 0; i < size; i ++ ) {

                        var x = i % width, y = ~~ ( i / width );
                        data[ i ] += Math.abs( perlin.noise( x / quality, y / quality, z ) * quality * 1.75 );


                    }

                    quality *= 5;

                }

                return data;

            }

            function generateTexture( data, width, height ) {

                var canvas, canvasScaled, context, image, imageData,
                level, diff, vector3, sun, shade;

                vector3 = new THREE.Vector3( 0, 0, 0 );

                sun = new THREE.Vector3( 1, 1, 1 );
                sun.normalize();

                canvas = document.createElement( 'canvas' );
                canvas.width = width;
                canvas.height = height;

                context = canvas.getContext( '2d' );
                context.fillStyle = '#000';
                context.fillRect( 0, 0, width, height );

                image = context.getImageData( 0, 0, canvas.width, canvas.height );
                imageData = image.data;

                for ( var i = 0, j = 0, l = imageData.length; i < l; i += 4, j ++ ) {

                    vector3.x = data[ j - 2 ] - data[ j + 2 ];
                    vector3.y = 2;
                    vector3.z = data[ j - width * 2 ] - data[ j + width * 2 ];
                    vector3.normalize();

                    shade = vector3.dot( sun );

                    imageData[ i ] = ( 96 + shade * 128 ) * ( 0.5 + data[ j ] * 0.007 );
                    imageData[ i + 1 ] = ( 32 + shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );
                    imageData[ i + 2 ] = ( shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );
                }

                context.putImageData( image, 0, 0 );

                // Scaled 4x

                canvasScaled = document.createElement( 'canvas' );
                canvasScaled.width = width * 4;
                canvasScaled.height = height * 4;

                context = canvasScaled.getContext( '2d' );
                context.scale( 4, 4 );
                context.drawImage( canvas, 0, 0 );

                image = context.getImageData( 0, 0, canvasScaled.width, canvasScaled.height );
                imageData = image.data;

                for ( var i = 0, l = imageData.length; i < l; i += 4 ) {

                    var v = ~~ ( Math.random() * 5 );

                    imageData[ i ] += v;
                    imageData[ i + 1 ] += v;
                    imageData[ i + 2 ] += v;

                }

                context.putImageData( image, 0, 0 );

                return canvasScaled;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                controls.update( clock.getDelta() );
                renderer.render( scene, camera );

            }

};


// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_terrain_fog.html

()=>{

            if ( ! Detector.webgl ) {

                Detector.addGetWebGLMessage();
                document.getElementById( 'container' ).innerHTML = "";

            }

            var container, stats;

            var camera, controls, scene, renderer;

            var mesh, texture;

            var worldWidth = 256, worldDepth = 256,
            worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

            var clock = new THREE.Clock();

            var data;

            init();
            animate();

            function init() {

                container = document.getElementById( 'container' );

                camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );

                controls = new THREE.FirstPersonControls( camera );
                controls.movementSpeed = 150;
                controls.lookSpeed = 0.1;

                scene = new THREE.Scene();
                scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0025 );

                data = generateHeight( worldWidth, worldDepth );

                camera.position.y = data[ worldHalfWidth + worldHalfDepth * worldWidth ] * 10 + 500;

                var geometry = new THREE.PlaneGeometry( 7500, 7500, worldWidth - 1, worldDepth - 1 );
                geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

                for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {

                    geometry.vertices[ i ].y = data[ i ] * 10;

                }

                texture = new THREE.Texture( generateTexture( data, worldWidth, worldDepth ), new THREE.UVMapping(), THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping );
                texture.needsUpdate = true;

                mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: texture } ) );
                scene.add( mesh );

                renderer = new THREE.WebGLRenderer( { clearColor: 0xefd1b5, clearAlpha: 1 } );
                renderer.setSize( window.innerWidth, window.innerHeight );

                container.innerHTML = "";

                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );


                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

                controls.handleResize();

            }

            function generateHeight( width, height ) {

                var size = width * height, data = new Float32Array( size ),
                perlin = new ImprovedNoise(), quality = 1, z = Math.random() * 100;

                for ( var i = 0; i < size; i ++ ) {

                    data[ i ] = 0

                }

                for ( var j = 0; j < 4; j ++ ) {

                    for ( var i = 0; i < size; i ++ ) {

                        var x = i % width, y = ~~ ( i / width );
                        data[ i ] += Math.abs( perlin.noise( x / quality, y / quality, z ) * quality * 1.75 );


                    }

                    quality *= 5;

                }

                return data;

            }

            function generateTexture( data, width, height ) {

                var canvas, canvasScaled, context, image, imageData,
                level, diff, vector3, sun, shade;

                vector3 = new THREE.Vector3( 0, 0, 0 );

                sun = new THREE.Vector3( 1, 1, 1 );
                sun.normalize();

                canvas = document.createElement( 'canvas' );
                canvas.width = width;
                canvas.height = height;

                context = canvas.getContext( '2d' );
                context.fillStyle = '#000';
                context.fillRect( 0, 0, width, height );

                image = context.getImageData( 0, 0, canvas.width, canvas.height );
                imageData = image.data;

                for ( var i = 0, j = 0, l = imageData.length; i < l; i += 4, j ++ ) {

                    vector3.x = data[ j - 2 ] - data[ j + 2 ];
                    vector3.y = 2;
                    vector3.z = data[ j - width * 2 ] - data[ j + width * 2 ];
                    vector3.normalize();

                    shade = vector3.dot( sun );

                    imageData[ i ] = ( 96 + shade * 128 ) * ( 0.5 + data[ j ] * 0.007 );
                    imageData[ i + 1 ] = ( 32 + shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );
                    imageData[ i + 2 ] = ( shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );

                }

                context.putImageData( image, 0, 0 );

                // Scaled 4x

                canvasScaled = document.createElement( 'canvas' );
                canvasScaled.width = width * 4;
                canvasScaled.height = height * 4;

                context = canvasScaled.getContext( '2d' );
                context.scale( 4, 4 );
                context.drawImage( canvas, 0, 0 );

                image = context.getImageData( 0, 0, canvasScaled.width, canvasScaled.height );
                imageData = image.data;

                for ( var i = 0, l = imageData.length; i < l; i += 4 ) {

                    var v = ~~ ( Math.random() * 5 );

                    imageData[ i ] += v;
                    imageData[ i + 1 ] += v;
                    imageData[ i + 2 ] += v;

                }

                context.putImageData( image, 0, 0 );

                return canvasScaled;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }


            function render() {

                controls.update( clock.getDelta() );
                renderer.render( scene, camera );

            }
};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_tessellation.html

()=>{

        if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

        var renderer, scene, camera, stats;

        var mesh, uniforms, attributes;

        var WIDTH = window.innerWidth,
            HEIGHT = window.innerHeight;

        var controls;

        init();
        animate();

        function init() {

            camera = new THREE.PerspectiveCamera( 25, WIDTH / HEIGHT, 1, 10000 );
            camera.position.z = 350;

            controls = new THREE.TrackballControls( camera );

            scene = new THREE.Scene();

            //

            attributes = {

                displacement: { type: 'v3', value: [] },
                customColor:  { type: 'c', value: [] }

            };

            uniforms = {

                amplitude: { type: "f", value: 0.0 }

            };

            var shaderMaterial = new THREE.ShaderMaterial( {

                uniforms:       uniforms,
                attributes:     attributes,
                vertexShader:   document.getElementById( 'vertexshader' ).textContent,
                fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
                shading:        THREE.FlatShading,
                side:           THREE.DoubleSide

            });


            var geometry = new THREE.TextGeometry( "THREE.JS", {

                size: 40,
                height: 5,
                curveSegments: 3,

                font: "helvetiker",
                weight: "bold",
                style: "normal",

                bevelThickness: 2,
                bevelSize: 1,
                bevelEnabled: true

            });

            geometry.dynamic = true;

            THREE.GeometryUtils.center( geometry );

            var tessellateModifier = new THREE.TessellateModifier( 4 );

            for ( var i = 0; i < 6; i ++ ) {

                tessellateModifier.modify( geometry );

            }

            var explodeModifier = new THREE.ExplodeModifier();
            explodeModifier.modify( geometry );

            var vertices = geometry.vertices;

            var colors = attributes.customColor.value;
            var displacement = attributes.displacement.value;

            var h, d, x, y, z, s;
            var nv, v = 0;

            for( var f = 0; f < geometry.faces.length; f ++ ) {

                var face = geometry.faces[ f ];

                if ( face instanceof THREE.Face3 ) {

                    nv = 3;

                } else {

                    nv = 4;

                }

                h = 0.15 * Math.random();
                s = 0.7 * Math.random();

                d = 10 * ( 0.5 - Math.random() );

                x = 2 * ( 0.5 - Math.random() );
                y = 2 * ( 0.5 - Math.random() );
                z = 2 * ( 0.5 - Math.random() );

                for ( var i = 0; i < nv; i ++ ) {

                    colors[ v ] = new THREE.Color();
                    displacement[ v ] = new THREE.Vector3();

                    colors[ v ].setHSL( h, s, 1 );
                    colors[ v ].convertGammaToLinear();

                    displacement[ v ].set( x, y, z );

                    v += 1;

                }

            }

            console.log( "faces", geometry.faces.length );

            mesh = new THREE.Mesh( geometry, shaderMaterial );
            mesh.rotation.set( 0.5, 0.5, 0 );

            scene.add( mesh );

            renderer = new THREE.WebGLRenderer( { clearColor: 0x050505, clearAlpha: 1, antialias: true } );
            renderer.setSize( WIDTH, HEIGHT );

            var container = document.getElementById( 'container' );
            container.appendChild( renderer.domElement );

            stats = new Stats();
            container.appendChild( stats.domElement );

            //

            window.addEventListener( 'resize', onWindowResize, false );

        }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        function animate() {

            requestAnimationFrame( animate );

            render();
            stats.update();

        }

        function render() {

            var time = Date.now() * 0.001;

            uniforms.amplitude.value = 0.125 * Math.sin( time * 0.5 );

            controls.update();
            renderer.render( scene, camera );

        }

};

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_text.html

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var container, stats, permalink, hex, color;

            var camera, cameraTarget, scene, renderer;

            var composer;
            var effectFXAA;

            var textMesh1, textMesh2, textGeo, material, parent;

            var firstLetter = true;

            var text = "three.js",

                height = 20,
                size = 70,
                hover = 30,

                curveSegments = 4,

                bevelThickness = 2,
                bevelSize = 1.5,
                bevelSegments = 3,
                bevelEnabled = true,

                font = "optimer", // helvetiker, optimer, gentilis, droid sans, droid serif
                weight = "bold", // normal bold
                style = "normal"; // normal italic

            var mirror = true;

            var fontMap = {

                "helvetiker": 0,
                "optimer": 1,
                "gentilis": 2,
                "droid sans": 3,
                "droid serif": 4

            };

            var weightMap = {

                "normal": 0,
                "bold": 1

            };

            var reverseFontMap = {};
            var reverseWeightMap = {};

            for ( var i in fontMap ) reverseFontMap[ fontMap[i] ] = i;
            for ( var i in weightMap ) reverseWeightMap[ weightMap[i] ] = i;

            var targetRotation = 0;
            var targetRotationOnMouseDown = 0;

            var mouseX = 0;
            var mouseXOnMouseDown = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var postprocessing = { enabled : false };
            var glow = 0.9;

            init();
            animate();

            function capitalize( txt ) {

                return txt.substring( 0, 1 ).toUpperCase() + txt.substring( 1 );

            }

            function decimalToHex( d ) {

                var hex = Number( d ).toString( 16 );
                hex = "000000".substr( 0, 6 - hex.length ) + hex;
                return hex.toUpperCase();

            }

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                permalink = document.getElementById( "permalink" );

                // CAMERA

                camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500 );
                camera.position.set( 0, 400, 700 );

                cameraTarget = new THREE.Vector3( 0, 150, 0 );

                // SCENE

                scene = new THREE.Scene();
                scene.fog = new THREE.Fog( 0x000000, 250, 1400 );

                // LIGHTS

                var dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
                dirLight.position.set( 0, 0, 1 ).normalize();
                scene.add( dirLight );

                var pointLight = new THREE.PointLight( 0xffffff, 1.5 );
                pointLight.position.set( 0, 100, 90 );
                scene.add( pointLight );

                //text = capitalize( font ) + " " + capitalize( weight );
                //text = "abcdefghijklmnopqrstuvwxyz0123456789";
                //text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

                // Get text from hash

                var hash = document.location.hash.substr( 1 );

                if ( hash.length !== 0 ) {

                    var colorhash  = hash.substring( 0, 6 );
                    var fonthash   = hash.substring( 6, 7 );
                    var weighthash = hash.substring( 7, 8 );
                    var pphash     = hash.substring( 8, 9 );
                    var bevelhash  = hash.substring( 9, 10 );
                    var texthash   = hash.substring( 10 );

                    hex = colorhash;
                    pointLight.color.setHex( parseInt( colorhash, 16 ) );

                    font = reverseFontMap[ parseInt( fonthash ) ];
                    weight = reverseWeightMap[ parseInt( weighthash ) ];

                    postprocessing.enabled = parseInt( pphash ) ? true : false;
                    bevelEnabled = parseInt( bevelhash ) ? true : false;

                    text = decodeURI( texthash );

                    updatePermalink();

                } else {

                    pointLight.color.setHSL( Math.random(), 0.95, 0.85 );
                    hex = decimalToHex( pointLight.color.getHex() );

                }

                material = new THREE.MeshFaceMaterial( [ 
                    new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
                    new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
                ] );

                parent = new THREE.Object3D();
                parent.position.y = 100;

                scene.add( parent );

                createText();

                var plane = new THREE.Mesh( new THREE.PlaneGeometry( 10000, 10000 ), new THREE.MeshBasicMaterial( { color: 0xffffff, opacity: 0.5, transparent: true } ) );
                plane.position.y = 100;
                plane.rotation.x = - Math.PI / 2;
                scene.add( plane );

                // RENDERER

                renderer = new THREE.WebGLRenderer( { antialias: true } );
                renderer.setSize( window.innerWidth, window.innerHeight );

                renderer.setClearColor( scene.fog.color, 1 );

                container.appendChild( renderer.domElement );

                // STATS

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                //container.appendChild( stats.domElement );

                // EVENTS

                document.addEventListener( 'mousedown', onDocumentMouseDown, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );
                document.addEventListener( 'keypress', onDocumentKeyPress, false );
                document.addEventListener( 'keydown', onDocumentKeyDown, false );

                document.getElementById( "color" ).addEventListener( 'click', function() {

                    pointLight.color.setHSL( Math.random(), 0.95, 0.85 );
                    hex = decimalToHex( pointLight.color.getHex() );

                    updatePermalink();

                }, false );

                document.getElementById( "font" ).addEventListener( 'click', function() {

                    if ( font == "helvetiker" ) {

                        font = "optimer";

                    } else if ( font == "optimer" ) {

                        font = "gentilis";

                    } else if ( font == "gentilis" ) {

                        font = "droid sans";

                    } else if ( font == "droid sans" ) {

                        font = "droid serif";

                    } else {

                        font = "helvetiker";

                    }

                    refreshText();

                }, false );

                document.getElementById( "weight" ).addEventListener( 'click', function() {

                    if ( weight == "bold" ) {

                        weight = "normal";

                    } else {

                        weight = "bold";

                    }

                    refreshText();

                }, false );

                document.getElementById( "bevel" ).addEventListener( 'click', function() {

                    bevelEnabled = !bevelEnabled;

                    refreshText();

                }, false );

                document.getElementById( "postprocessing" ).addEventListener( 'click', function() {

                    postprocessing.enabled = !postprocessing.enabled;
                    updatePermalink();

                }, false );


                // POSTPROCESSING

                renderer.autoClear = false;

                var renderModel = new THREE.RenderPass( scene, camera );
                var effectBloom = new THREE.BloomPass( 0.25 );
                var effectFilm = new THREE.FilmPass( 0.5, 0.125, 2048, false );

                effectFXAA = new THREE.ShaderPass( THREE.FXAAShader );

                var width = window.innerWidth || 2;
                var height = window.innerHeight || 2;

                effectFXAA.uniforms[ 'resolution' ].value.set( 1 / width, 1 / height );

                effectFilm.renderToScreen = true;

                composer = new THREE.EffectComposer( renderer );

                composer.addPass( renderModel );
                composer.addPass( effectFXAA );
                composer.addPass( effectBloom );
                composer.addPass( effectFilm );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

                composer.reset();

                effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight );

            }

            //

            function boolToNum( b ) {

                return b ? 1 : 0;

            }

            function updatePermalink() {

                var link = hex + fontMap[ font ] + weightMap[ weight ] + boolToNum( postprocessing.enabled ) + boolToNum( bevelEnabled ) + "#" + encodeURI( text );

                permalink.href = "#" + link;
                window.location.hash = link;

            }

            function onDocumentKeyDown( event ) {

                if ( firstLetter ) {

                    firstLetter = false;
                    text = "";

                }

                var keyCode = event.keyCode;

                // backspace

                if ( keyCode == 8 ) {

                    event.preventDefault();

                    text = text.substring( 0, text.length - 1 );
                    refreshText();

                    return false;

                }

            }

            function onDocumentKeyPress( event ) {

                var keyCode = event.which;

                // backspace

                if ( keyCode == 8 ) {

                    event.preventDefault();

                } else {

                    var ch = String.fromCharCode( keyCode );
                    text += ch;

                    refreshText();

                }

            }

            function createText() {

                textGeo = new THREE.TextGeometry( text, {

                    size: size,
                    height: height,
                    curveSegments: curveSegments,

                    font: font,
                    weight: weight,
                    style: style,

                    bevelThickness: bevelThickness,
                    bevelSize: bevelSize,
                    bevelEnabled: bevelEnabled,

                    material: 0,
                    extrudeMaterial: 1

                });

                textGeo.computeBoundingBox();
                textGeo.computeVertexNormals();

                // "fix" side normals by removing z-component of normals for side faces
                // (this doesn't work well for beveled geometry as then we lose nice curvature around z-axis)

                if ( ! bevelEnabled ) {

                    var triangleAreaHeuristics = 0.1 * ( height * size );

                    for ( var i = 0; i < textGeo.faces.length; i ++ ) {

                        var face = textGeo.faces[ i ];

                        if ( face.materialIndex == 1 ) {

                            for ( var j = 0; j < face.vertexNormals.length; j ++ ) {

                                face.vertexNormals[ j ].z = 0;
                                face.vertexNormals[ j ].normalize();

                            }

                            var va = textGeo.vertices[ face.a ];
                            var vb = textGeo.vertices[ face.b ];
                            var vc = textGeo.vertices[ face.c ];

                            var s = THREE.GeometryUtils.triangleArea( va, vb, vc );

                            if ( s > triangleAreaHeuristics ) {

                                for ( var j = 0; j < face.vertexNormals.length; j ++ ) {

                                    face.vertexNormals[ j ].copy( face.normal );

                                }

                            }

                        }

                    }

                }

                var centerOffset = -0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

                textMesh1 = new THREE.Mesh( textGeo, material );

                textMesh1.position.x = centerOffset;
                textMesh1.position.y = hover;
                textMesh1.position.z = 0;

                textMesh1.rotation.x = 0;
                textMesh1.rotation.y = Math.PI * 2;

                parent.add( textMesh1 );

                if ( mirror ) {

                    textMesh2 = new THREE.Mesh( textGeo, material );

                    textMesh2.position.x = centerOffset;
                    textMesh2.position.y = -hover;
                    textMesh2.position.z = height;

                    textMesh2.rotation.x = Math.PI;
                    textMesh2.rotation.y = Math.PI * 2;

                    parent.add( textMesh2 );

                }

            }

            function refreshText() {

                updatePermalink();

                parent.remove( textMesh1 );
                if ( mirror ) parent.remove( textMesh2 );

                if ( !text ) return;

                createText();

            }

            function onDocumentMouseDown( event ) {

                event.preventDefault();

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'mouseup', onDocumentMouseUp, false );
                document.addEventListener( 'mouseout', onDocumentMouseOut, false );

                mouseXOnMouseDown = event.clientX - windowHalfX;
                targetRotationOnMouseDown = targetRotation;

            }

            function onDocumentMouseMove( event ) {

                mouseX = event.clientX - windowHalfX;

                targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

            }

            function onDocumentMouseUp( event ) {

                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

            }

            function onDocumentMouseOut( event ) {

                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
                    targetRotationOnMouseDown = targetRotation;

                }

            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

                }

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                parent.rotation.y += ( targetRotation - parent.rotation.y ) * 0.05;

                camera.lookAt( cameraTarget );

                renderer.clear();

                if ( postprocessing.enabled ) {

                    composer.render( 0.05 );

                } else {

                    renderer.render( scene, camera );

                }

            }
};


// https://github.com/mrdoob/three.js/tree/master/examples/webgl_hdr.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var container, stats;

            var camera, scene, renderer;
            var materialHDR, quad;

            var sign = 1, rate = 1;

            var clock = new THREE.Clock();

            var delta;

            init();
            animate();

            function init() {

                container = document.getElementById( 'container' );

                camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
                camera.position.z = 900;

                scene = new THREE.Scene();

                var texture = THREE.ImageUtils.loadTexture( "textures/memorial.png" );
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.NearestFilter;

                materialHDR = new THREE.ShaderMaterial( {

                    uniforms: {
                        tDiffuse:  { type: "t", value: texture },
                        exposure:  { type: "f", value: 0.125 },
                        brightMax: { type: "f", value: 0.5 }
                        },
                    vertexShader: getText( 'vs-hdr' ),
                    fragmentShader: getText( 'fs-hdr' )

                } );

                var plane = new THREE.PlaneGeometry( 512, 768 );

                quad = new THREE.Mesh( plane, materialHDR );
                quad.position.z = -100;
                scene.add( quad );

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function getText( id ) {

                return document.getElementById( id ).textContent;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                delta = clock.getDelta() * 5;

                if ( materialHDR.uniforms.exposure.value > 0 || materialHDR.uniforms.exposure.value < 1 ) {

                    rate = 0.25;

                } else {

                    rate = 1;

                }

                if ( materialHDR.uniforms.exposure.value > 5 || materialHDR.uniforms.exposure.value <= 0 ) {

                    sign *= -1;

                }

                materialHDR.uniforms.exposure.value += sign * rate * delta;

                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_interactive_cubes.html 

()=>{

            var container, stats;
            var camera, scene, projector, renderer;

            var mouse = { x: 0, y: 0 }, INTERSECTED;

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                var info = document.createElement( 'div' );
                info.style.position = 'absolute';
                info.style.top = '10px';
                info.style.width = '100%';
                info.style.textAlign = 'center';
                info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> webgl - interactive cubes';
                container.appendChild( info );

                camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
                camera.position.set( 0, 300, 500 );

                scene = new THREE.Scene();

                var light = new THREE.DirectionalLight( 0xffffff, 2 );
                light.position.set( 1, 1, 1 ).normalize();
                scene.add( light );

                var light = new THREE.DirectionalLight( 0xffffff );
                light.position.set( -1, -1, -1 ).normalize();
                scene.add( light );

                var geometry = new THREE.CubeGeometry( 20, 20, 20 );

                for ( var i = 0; i < 2000; i ++ ) {

                    var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

                    object.position.x = Math.random() * 800 - 400;
                    object.position.y = Math.random() * 800 - 400;
                    object.position.z = Math.random() * 800 - 400;

                    object.rotation.x = Math.random() * 2 * Math.PI;
                    object.rotation.y = Math.random() * 2 * Math.PI;
                    object.rotation.z = Math.random() * 2 * Math.PI;

                    object.scale.x = Math.random() + 0.5;
                    object.scale.y = Math.random() + 0.5;
                    object.scale.z = Math.random() + 0.5;

                    scene.add( object );

                }

                projector = new THREE.Projector();

                renderer = new THREE.WebGLRenderer();
                renderer.sortObjects = false;
                renderer.setSize( window.innerWidth, window.innerHeight );

                container.appendChild(renderer.domElement);

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function onDocumentMouseMove( event ) {

                event.preventDefault();

                mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            var radius = 100;
            var theta = 0;

            function render() {

                theta += 0.1;

                camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
                camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
                camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );

                camera.lookAt( scene.position );

                // find intersections

                var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
                projector.unprojectVector( vector, camera );

                var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

                var intersects = raycaster.intersectObjects( scene.children );

                if ( intersects.length > 0 ) {

                    if ( INTERSECTED != intersects[ 0 ].object ) {

                        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

                        INTERSECTED = intersects[ 0 ].object;
                        INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                        INTERSECTED.material.emissive.setHex( 0xff0000 );

                    }

                } else {

                    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

                    INTERSECTED = null;

                }

                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_interactive_cubes_gpu.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_interactive_draggablecubes.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_interactive_voxelpainter.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_kinect.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_lensflares.html 

()=>{

            var container, stats;

            var camera, scene, renderer;

            var clock = new THREE.Clock();

            var composer;

            var controls;

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                // camera

                camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 15000 );
                camera.position.z = 250;

                controls = new THREE.FlyControls( camera );

                controls.movementSpeed = 2500;
                controls.domElement = container;
                controls.rollSpeed = Math.PI / 6;
                controls.autoForward = false;
                controls.dragToLook = false

                // scene

                scene = new THREE.Scene();
                scene.fog = new THREE.Fog( 0x000000, 3500, 15000 );
                scene.fog.color.setHSL( 0.51, 0.6, 0.025 );

                // world

                var s = 250;

                var cube = new THREE.CubeGeometry( s, s, s );
                var material = new THREE.MeshPhongMaterial( { ambient: 0x333333, color: 0xffffff, specular: 0xffffff, shininess: 50 } );


                for ( var i = 0; i < 3000; i ++ ) {

                    var mesh = new THREE.Mesh( cube, material );

                    mesh.position.x = 8000 * ( 2.0 * Math.random() - 1.0 );
                    mesh.position.y = 8000 * ( 2.0 * Math.random() - 1.0 );
                    mesh.position.z = 8000 * ( 2.0 * Math.random() - 1.0 );

                    mesh.rotation.x = Math.random() * Math.PI;
                    mesh.rotation.y = Math.random() * Math.PI;
                    mesh.rotation.z = Math.random() * Math.PI;

                    mesh.matrixAutoUpdate = false;
                    mesh.updateMatrix();

                    scene.add( mesh );

                }


                // lights

                var ambient = new THREE.AmbientLight( 0xffffff );
                ambient.color.setHSL( 0.1, 0.5, 0.3 );
                scene.add( ambient );


                var dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
                dirLight.position.set( 0, -1, 0 ).normalize();
                scene.add( dirLight );

                dirLight.color.setHSL( 0.1, 0.725, 0.9 );

                // lens flares

                var textureFlare0 = THREE.ImageUtils.loadTexture( "textures/lensflare/lensflare0.png" );
                var textureFlare2 = THREE.ImageUtils.loadTexture( "textures/lensflare/lensflare2.png" );
                var textureFlare3 = THREE.ImageUtils.loadTexture( "textures/lensflare/lensflare3.png" );

                addLight( 0.55, 0.825, 0.99, 5000, 0, -1000 );
                addLight( 0.08, 0.825, 0.99,    0, 0, -1000 );
                addLight( 0.995, 0.025, 0.99, 5000, 5000, -1000 );

                function addLight( h, s, v, x, y, z ) {

                    var light = new THREE.PointLight( 0xffffff, 1.5, 4500 );
                    light.color.setHSL( h, s, v );
                    light.position.set( x, y, z );
                    scene.add( light );

                    var flareColor = new THREE.Color( 0xffffff );
                    flareColor.setHSL( h, s - 0.5, v + 0.5 );

                    var lensFlare = new THREE.LensFlare( textureFlare0, 700, 0.0, THREE.AdditiveBlending, flareColor );

                    lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
                    lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
                    lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );

                    lensFlare.add( textureFlare3, 60, 0.6, THREE.AdditiveBlending );
                    lensFlare.add( textureFlare3, 70, 0.7, THREE.AdditiveBlending );
                    lensFlare.add( textureFlare3, 120, 0.9, THREE.AdditiveBlending );
                    lensFlare.add( textureFlare3, 70, 1.0, THREE.AdditiveBlending );

                    lensFlare.customUpdateCallback = lensFlareUpdateCallback;
                    lensFlare.position = light.position;

                    scene.add( lensFlare );

                }

                // renderer

                renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.setClearColor( scene.fog.color, 1 );

                container.appendChild( renderer.domElement );

                //

                renderer.gammaInput = true;
                renderer.gammaOutput = true;
                renderer.physicallyBasedShading = true;

                // stats

                stats = new Stats();
                container.appendChild( stats.domElement );

                // events

                window.addEventListener( 'resize', onWindowResize, false );

            }

            //

             function lensFlareUpdateCallback( object ) {

                var f, fl = object.lensFlares.length;
                var flare;
                var vecX = -object.positionScreen.x * 2;
                var vecY = -object.positionScreen.y * 2;


                for( f = 0; f < fl; f++ ) {

                       flare = object.lensFlares[ f ];

                       flare.x = object.positionScreen.x + vecX * flare.distance;
                       flare.y = object.positionScreen.y + vecY * flare.distance;

                       flare.rotation = 0;

                }

                object.lensFlares[ 2 ].y += 0.025;
                object.lensFlares[ 3 ].rotation = object.positionScreen.x * 0.5 + THREE.Math.degToRad( 45 );

            }

            //

            function onWindowResize( event ) {

                renderer.setSize( window.innerWidth, window.innerHeight );

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var delta = clock.getDelta();

                controls.update( delta );
                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_lights_hemisphere.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var camera, scene, renderer, dirLight, hemiLight;
            var morphs = [];
            var stats;

            var clock = new THREE.Clock();

            var morph: THREE.MorphAnimMesh;

            init();
            animate();

            function init() {

                var container = document.getElementById( 'container' );

                camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 5000 );
                camera.position.set( 0, 0, 250 );

                scene = new THREE.Scene();

                scene.fog = new THREE.Fog( 0xffffff, 1, 5000 );
                scene.fog.color.setHSL( 0.6, 0, 1 );

                /*
                controls = new THREE.TrackballControls( camera );

                controls.rotateSpeed = 1.0;
                controls.zoomSpeed = 1.2;
                controls.panSpeed = 0.8;

                controls.noZoom = false;
                controls.noPan = false;

                controls.staticMoving = true;
                controls.dynamicDampingFactor = 0.15;
                */

                // LIGHTS

                hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
                hemiLight.color.setHSL( 0.6, 0.75, 1 );
                hemiLight.groundColor.setHSL( 0.095, 0.5, 1 );
                hemiLight.position.set( 0, 500, 0 );
                scene.add( hemiLight );

                //

                dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
                dirLight.color.setHSL( 0.1, 0.1, 1 );
                dirLight.position.set( -1, 1.75, 1 );
                dirLight.position.multiplyScalar( 50 );
                scene.add( dirLight );

                dirLight.castShadow = true;

                dirLight.shadowMapWidth = 2048;
                dirLight.shadowMapHeight = 2048;

                var d = 50;

                dirLight.shadowCameraLeft = -d;
                dirLight.shadowCameraRight = d;
                dirLight.shadowCameraTop = d;
                dirLight.shadowCameraBottom = -d;

                dirLight.shadowCameraFar = 3500;
                dirLight.shadowBias = -0.0001;
                dirLight.shadowDarkness = 0.35;
                //dirLight.shadowCameraVisible = true;

                // GROUND

                var groundGeo = new THREE.PlaneGeometry( 10000, 10000 );
                var groundMat = new THREE.MeshPhongMaterial( { ambient: 0xffffff, color: 0xffffff, specular: 0x050505 } );
                groundMat.color.setHSL( 0.095, 0.5, 1 );

                var ground = new THREE.Mesh( groundGeo, groundMat );
                ground.rotation.x = -Math.PI/2;
                ground.position.y = -33;
                scene.add( ground );

                ground.receiveShadow = true;

                // SKYDOME

                var vertexShader = document.getElementById( 'vertexShader' ).textContent;
                var fragmentShader = document.getElementById( 'fragmentShader' ).textContent;
                var uniforms = {
                    topColor:    { type: "c", value: new THREE.Color( 0x0077ff ) },
                    bottomColor: { type: "c", value: new THREE.Color( 0xffffff ) },
                    offset:      { type: "f", value: 33 },
                    exponent:    { type: "f", value: 0.6 }
                }
                uniforms.topColor.value.copy( hemiLight.color );

                scene.fog.color.copy( uniforms.bottomColor.value );

                var skyGeo = new THREE.SphereGeometry( 4000, 32, 15 );
                //TS bug: https://typescript.codeplex.com/workitem/2036
				//var skyMat = new THREE.ShaderMaterial( { vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: uniforms, side: THREE.BackSide } );
                var skyMat = new THREE.ShaderMaterial( { vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: <THREE.Uniforms><any>uniforms, side: THREE.BackSide } );

                var sky = new THREE.Mesh( skyGeo, skyMat );
                scene.add( sky );

                // MODEL

                var loader = new THREE.JSONLoader();

                loader.load( "models/animated/flamingo.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    geometry.computeMorphNormals();

                    var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 20, morphTargets: true, morphNormals: true, vertexColors: THREE.FaceColors, shading: THREE.FlatShading } );
                    var meshAnim = new THREE.MorphAnimMesh( geometry, material );

                    meshAnim.duration = 1000;

                    var s = 0.35;
                    meshAnim.scale.set( s, s, s );
                    meshAnim.position.y = 15;
                    meshAnim.rotation.y = -1;

                    meshAnim.castShadow = true;
                    meshAnim.receiveShadow = true;

                    scene.add( meshAnim );
                    morphs.push( meshAnim );

                } );

                // RENDERER

                renderer = new THREE.WebGLRenderer( { antialias: true } );
                renderer.setSize( window.innerWidth, window.innerHeight );
                container.appendChild( renderer.domElement );

                renderer.setClearColor( scene.fog.color, 1 );

                renderer.gammaInput = true;
                renderer.gammaOutput = true;
                renderer.physicallyBasedShading = true;

                renderer.shadowMapEnabled = true;
                renderer.shadowMapCullFace = THREE.CullFaceBack;

                // STATS

                stats = new Stats();
                container.appendChild( stats.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );
                document.addEventListener( 'keydown', onKeyDown, false );

            }

            function morphColorsToFaceColors( geometry ) {

                if ( geometry.morphColors && geometry.morphColors.length ) {

                    var colorMap = geometry.morphColors[ 0 ];

                    for ( var i = 0; i < colorMap.colors.length; i ++ ) {

                        geometry.faces[ i ].color = colorMap.colors[ i ];

                    }

                }

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function onKeyDown ( event ) {

                switch ( event.keyCode ) {

                    case 72: /*h*/

                    hemiLight.visible = !hemiLight.visible;
                    break;

                    case 68: /*d*/

                    dirLight.visible = !dirLight.visible;
                    break;

                }

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var delta = clock.getDelta();

                //controls.update();

                for ( var i = 0; i < morphs.length; i ++ ) {

                    morph = morphs[ i ];
                    morph.updateAnimation( 1000 * delta );

                }

                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_lights_pointlights.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_lights_pointlights2.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_lines_colors.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var effectFXAA;

            var mouseX = 0, mouseY = 0,

            windowHalfX = window.innerWidth / 2,
            windowHalfY = window.innerHeight / 2,

            camera, scene, renderer, material, composer;

            var stats: any;

            init();
            animate();

            function init() {

                var i, container;

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 33, window.innerWidth / window.innerHeight, 1, 10000 );
                camera.position.z = 700;

                scene = new THREE.Scene();

                renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1, antialias: false } );
                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.autoClear = false;

                container.appendChild( renderer.domElement );

                var geometry = new THREE.Geometry(),
                    geometry2 = new THREE.Geometry(),
                    geometry3 = new THREE.Geometry(),
                    points = hilbert3D( new THREE.Vector3( 0,0,0 ), 200.0, 2, 0, 1, 2, 3, 4, 5, 6, 7 ),
                    colors = [], colors2 = [], colors3 = [];

                for ( i = 0; i < points.length; i ++ ) {

                    geometry.vertices.push( points[ i ] );

                    colors[ i ] = new THREE.Color( 0xffffff );
                    colors[ i ].setHSV( 0.6, ( 200 + points[ i ].x ) / 400, 1.0 );

                    colors2[ i ] = new THREE.Color( 0xffffff );
                    colors2[ i ].setHSV( 0.3, 1.0, ( 200 + points[ i ].x ) / 400 );

                    colors3[ i ] = new THREE.Color( 0xffffff );
                    colors3[ i ].setHSV( i / points.length, 1.0, 1.0 );

                }

                geometry2.vertices = geometry3.vertices = geometry.vertices;

                geometry.colors = colors;
                geometry2.colors = colors2;
                geometry3.colors = colors3;

                // lines

                material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 1, linewidth: 3, vertexColors: THREE.VertexColors } );

                var line, p, scale = 0.3, d = 225;
                var parameters =  [
                    [ material, scale*1.5, [-d,0,0],  geometry ],
                    [ material, scale*1.5, [0,0,0],  geometry2 ],
                    [ material, scale*1.5, [d,0,0],  geometry3 ]
                ];

                for ( i = 0; i < parameters.length; ++i ) {

                    p = parameters[ i ];
                    line = new THREE.Line( p[ 3 ],  p[ 0 ] );
                    line.scale.x = line.scale.y = line.scale.z =  p[ 1 ];
                    line.position.x = p[ 2 ][ 0 ];
                    line.position.y = p[ 2 ][ 1 ];
                    line.position.z = p[ 2 ][ 2 ];
                    scene.add( line );

                }

                //

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                //container.appendChild( stats.domElement );

                //

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );

                //

                var renderModel = new THREE.RenderPass( scene, camera );
                var effectBloom = new THREE.BloomPass( 1.3 );
                var effectCopy = new THREE.ShaderPass( THREE.CopyShader );

                effectFXAA = new THREE.ShaderPass( THREE.FXAAShader );

                var width = window.innerWidth || 2;
                var height = window.innerHeight || 2;

                effectFXAA.uniforms[ 'resolution' ].value.set( 1 / width, 1 / height );

                effectCopy.renderToScreen = true;

                composer = new THREE.EffectComposer( renderer );

                composer.addPass( renderModel );
                composer.addPass( effectFXAA );
                composer.addPass( effectBloom );
                composer.addPass( effectCopy );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

                effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight );

                composer.reset();

            }

            // port of Processing Java code by Thomas Diewald
            // http://www.openprocessing.org/visuals/?visualID=15599

            function hilbert3D( center, side, iterations, v0, v1, v2, v3, v4, v5, v6, v7 ) {

                var half = side / 2,

                    vec_s = [

                    new THREE.Vector3( center.x - half, center.y + half, center.z - half ),
                    new THREE.Vector3( center.x - half, center.y + half, center.z + half ),
                    new THREE.Vector3( center.x - half, center.y - half, center.z + half ),
                    new THREE.Vector3( center.x - half, center.y - half, center.z - half ),
                    new THREE.Vector3( center.x + half, center.y - half, center.z - half ),
                    new THREE.Vector3( center.x + half, center.y - half, center.z + half ),
                    new THREE.Vector3( center.x + half, center.y + half, center.z + half ),
                    new THREE.Vector3( center.x + half, center.y + half, center.z - half )

                    ],

                    vec = [ vec_s[ v0 ], vec_s[ v1 ], vec_s[ v2 ], vec_s[ v3 ], vec_s[ v4 ], vec_s[ v5 ], vec_s[ v6 ], vec_s[ v7 ] ];

                if( --iterations >= 0 ) {

                    var tmp = [];

                    Array.prototype.push.apply( tmp, hilbert3D ( vec[ 0 ], half, iterations, v0, v3, v4, v7, v6, v5, v2, v1 ) );
                    Array.prototype.push.apply( tmp, hilbert3D ( vec[ 1 ], half, iterations, v0, v7, v6, v1, v2, v5, v4, v3 ) );
                    Array.prototype.push.apply( tmp, hilbert3D ( vec[ 2 ], half, iterations, v0, v7, v6, v1, v2, v5, v4, v3 ) );
                    Array.prototype.push.apply( tmp, hilbert3D ( vec[ 3 ], half, iterations, v2, v3, v0, v1, v6, v7, v4, v5 ) );
                    Array.prototype.push.apply( tmp, hilbert3D ( vec[ 4 ], half, iterations, v2, v3, v0, v1, v6, v7, v4, v5 ) );
                    Array.prototype.push.apply( tmp, hilbert3D ( vec[ 5 ], half, iterations, v4, v3, v2, v5, v6, v1, v0, v7 ) );
                    Array.prototype.push.apply( tmp, hilbert3D ( vec[ 6 ], half, iterations, v4, v3, v2, v5, v6, v1, v0, v7 ) );
                    Array.prototype.push.apply( tmp, hilbert3D ( vec[ 7 ], half, iterations, v6, v5, v2, v1, v0, v3, v4, v7 ) );

                    return tmp;

                }

                return vec;
            }

            //

            function onDocumentMouseMove( event ) {

                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;

            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length > 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    mouseY = event.touches[ 0 ].pageY - windowHalfY;

                }

            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    mouseY = event.touches[ 0 ].pageY - windowHalfY;
                }

            }

            //

            function animate() {

                requestAnimationFrame( animate );
                render();

                stats.update();

            }

            function render() {

                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;

                camera.lookAt( scene.position );

                var time = Date.now() * 0.0005;

                for ( var i = 0; i < scene.children.length; i ++ ) {

                    var object = scene.children[ i ];
                    if ( object instanceof THREE.Line ) object.rotation.y = time * ( i % 2 ? 1 : -1 );

                }

                renderer.clear();
                composer.render();

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_lines_cubes.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_lines_dashed.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_lines_sphere.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_lines_splines.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_collada.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_collada_keyframe.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_ctm.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_ctm_materials.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_json_blender.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var container, stats;

            var camera, scene, renderer, objects;
            var particleLight, pointLight;
            var dae, skin;

            var clock = new THREE.Clock();
            var morphs = [];
            var morph: THREE.MorphAnimMesh;

            // Collada model

            var loader = new THREE.ColladaLoader();
            loader.options.convertUpAxis = true;
            loader.load( 'models/collada/monster/monster.dae', function ( collada ) {

                dae = collada.scene;
                skin = collada.skins[ 0 ];

                dae.scale.x = dae.scale.y = dae.scale.z = 0.002;
                dae.position.x = -1;
                dae.updateMatrix();

                init();
                animate();

            } );

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000 );
                camera.position.set( 2, 4, 5 );

                scene = new THREE.Scene();
                scene.fog = new THREE.FogExp2( 0x000000, 0.035 );

                // Add Blender exported Collada model

                var loader = new THREE.JSONLoader();
                loader.load( 'models/animated/monster/monster.js', function ( geometry, materials ) {

                    // adjust color a bit

                    var material = <THREE.MeshLambertMaterial>materials[ 0 ];
                    material.morphTargets = true;
                    material.color.setHex( 0xffaaaa );
                    material.ambient.setHex( 0x222222 );

                    var faceMaterial = new THREE.MeshFaceMaterial( materials );

                    for ( var i = 0; i < 729; i ++ ) {

                        // random placement in a grid

                        var x = ( ( i % 27 )  - 13.5 ) * 2 + THREE.Math.randFloatSpread( 1 );
                        var z = ( Math.floor( i / 27 ) - 13.5 ) * 2 + THREE.Math.randFloatSpread( 1 );

                        // leave space for big monster

                        if ( Math.abs( x ) < 2 && Math.abs( z ) < 2 ) continue;

                        morph = new THREE.MorphAnimMesh( geometry, faceMaterial );

                        // one second duration

                        morph.duration = 1000;

                        // random animation offset

                        morph.time = 1000 * Math.random();

                        var s = THREE.Math.randFloat( 0.00075, 0.001 );
                        morph.scale.set( s, s, s );

                        morph.position.set( x, 0, z );
                        morph.rotation.y = THREE.Math.randFloat( -0.25, 0.25 );

                        morph.matrixAutoUpdate = false;
                        morph.updateMatrix();

                        scene.add( morph );

                        morphs.push( morph );

                    }

                } );


                // Add the COLLADA

                scene.add( dae );

                // Lights

                scene.add( new THREE.AmbientLight( 0xcccccc ) );

                pointLight = new THREE.PointLight( 0xff4400, 5, 30 );
                pointLight.position.set( 5, 0, 0 );
                scene.add( pointLight );

                // Renderer

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );

                container.appendChild( renderer.domElement );

                // Stats

                stats = new Stats();
                container.appendChild( stats.domElement );

                // Events

                window.addEventListener( 'resize', onWindowResize, false );

            }

            //

            function onWindowResize( event ) {

                renderer.setSize( window.innerWidth, window.innerHeight );

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

            }

            //

            var t = 0;
            function animate() {

                requestAnimationFrame( animate );

                // animate Collada model

                if ( t > 30 ) t = 0;

                if ( skin ) {

                    // guess this can be done smarter...

                    // (Indeed, there are way more frames than needed and interpolation is not used at all
                    //  could be something like - one morph per each skinning pose keyframe, or even less,
                    //  animation could be resampled, morphing interpolation handles sparse keyframes quite well.
                    //  Simple animation cycles like this look ok with 10-15 frames instead of 100 ;)

                    for ( var i = 0; i < skin.morphTargetInfluences.length; i++ ) {

                        skin.morphTargetInfluences[ i ] = 0;

                    }

                    skin.morphTargetInfluences[ Math.floor( t ) ] = 1;

                    t += 0.5;

                }

                // animate morphs

                var delta = clock.getDelta();

                if ( morphs.length ) {

                    for ( var i = 0; i < morphs.length; i ++ )
                        morphs[ i ].updateAnimation( 1000 * delta );


                }

                render();
                stats.update();

            }

            function render() {

                var timer = Date.now() * 0.0005;

                camera.position.x = Math.cos( timer ) * 10;
                camera.position.y = 4;
                camera.position.z = Math.sin( timer ) * 10;

                camera.lookAt( scene.position );

                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_json_objconverter.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_obj.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_obj_mtl.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_scene.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var SCREEN_WIDTH = window.innerWidth;
            var SCREEN_HEIGHT = window.innerHeight;

            var container,stats;

            var camera, scene, loaded;
            var renderer;

            var mouseX = 0, mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var rotatingObjects = [];
            var morphAnimatedObjects = [];

            var clock = new THREE.Clock();

            document.addEventListener( 'mousemove', onDocumentMouseMove, false );

            init();
            animate();

            function $( id ) {

                return document.getElementById( id );

            }

            function handle_update( result, pieces ) {

                refreshSceneView( result );
                //renderer.initWebGLObjects( result.scene );

                var m, material, count = 0;

                for ( m in result.materials ) {

                    material = result.materials[ m ];
                    if ( ! ( material instanceof THREE.MeshFaceMaterial || material instanceof THREE.ShaderMaterial || material.morphTargets ) ) {

                        if( !material.program ) {

                            renderer.initMaterial( material, result.scene.__lights, result.scene.fog );

                            count += 1;

                            if( count > pieces ) {

                                //console.log("xxxxxxxxx");
                                break;

                            }

                        }

                    }

                }

            }

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                var loadScene = createLoadScene();

                camera = loadScene.camera;
                scene = loadScene.scene;

                renderer = new THREE.WebGLRenderer( { antialias: true } );
                renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                renderer.domElement.style.position = "relative";
                container.appendChild( renderer.domElement );

                renderer.gammaInput = true;
                renderer.gammaOutput = true;
                renderer.physicallyBasedShading = true;

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.right = '0px';
                stats.domElement.style.zIndex = 100;
                container.appendChild( stats.domElement );

                $( "start" ).addEventListener( 'click', onStartClick, false );

                var callbackProgress = function( progress, result ) {

                    var bar = 250,
                        total = progress.totalModels + progress.totalTextures,
                        loaded = progress.loadedModels + progress.loadedTextures;

                    if ( total )
                        bar = Math.floor( bar * loaded / total );

                    $( "bar" ).style.width = bar + "px";

                    var count = 0;
                    for ( var m in result.materials ) count++;

                    handle_update( result, Math.floor( count/total ) );

                }

                var callbackSync = function( result ) {

                    /*

                    // uncomment to see progressive scene loading

                    scene = result.scene;
                    camera = result.currentCamera;

                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();

                    */

                    //handle_update( result, 1 );

                }

                var callbackFinished = function ( result ) {

                    loaded = result;

                    $( "message" ).style.display = "none";
                    $( "progressbar" ).style.display = "none";
                    $( "start" ).style.display = "block";
                    $( "start" ).className = "enabled";

                    handle_update( result, 1 );

                    result.scene.traverse( function ( object ) {

                        if ( object.properties.rotating === true ) {

                            rotatingObjects.push( object );

                        }

                        if ( object instanceof THREE.MorphAnimMesh ) {

                            morphAnimatedObjects.push( object );

                        }

                        if ( object instanceof THREE.SkinnedMesh ) {

                            if ( object.geometry.animation ) {

                                THREE.AnimationHandler.add( object.geometry.animation );

                                var animation = new THREE.Animation( object, object.geometry.animation.name );
                                animation.interpolationType = THREE.AnimationHandler.LINEAR;

                                animation.play();

                            }

                        }

                    } );

                }

                $( "progress" ).style.display = "block";

                var loader = new THREE.SceneLoader();

                loader.addGeometryHandler( "binary", THREE.BinaryLoader );
                loader.addGeometryHandler( "ctm", THREE.CTMLoader );
                loader.addGeometryHandler( "vtk", THREE.VTKLoader );
                loader.addGeometryHandler( "stl", THREE.STLLoader );

                loader.addHierarchyHandler( "obj", THREE.OBJLoader );
                loader.addHierarchyHandler( "dae", THREE.ColladaLoader );
                loader.addHierarchyHandler( "utf8", THREE.UTF8Loader );

                loader.callbackSync = callbackSync;
                loader.callbackProgress = callbackProgress;

                loader.load( "scenes/test_scene.js", callbackFinished );

                $( "plus_exp" ).addEventListener( 'click', createToggle( "exp" ), false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function setButtonActive( id ) {

                $( "start" ).style.backgroundColor = "green";

            }

            function onStartClick() {

                $( "progress" ).style.display = "none";

                camera = loaded.currentCamera;
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                scene = loaded.scene;

            }

            function onDocumentMouseMove( event ) {

                mouseX = ( event.clientX - windowHalfX );
                mouseY = ( event.clientY - windowHalfY );

            }

            function createLoadScene() {

                var result = {

                    scene:  new THREE.Scene(),
                    camera: new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 1000 )

                };

                result.camera.position.z = 100;
                result.scene.add( result.camera );

                var object, geometry, material, light, count = 500, range = 200;

                material = new THREE.MeshLambertMaterial( { color:0xffffff } );
                geometry = new THREE.CubeGeometry( 5, 5, 5 );

                for( var i = 0; i < count; i++ ) {

                    object = new THREE.Mesh( geometry, material );

                    object.position.x = ( Math.random() - 0.5 ) * range;
                    object.position.y = ( Math.random() - 0.5 ) * range;
                    object.position.z = ( Math.random() - 0.5 ) * range;

                    object.rotation.x = Math.random() * 6;
                    object.rotation.y = Math.random() * 6;
                    object.rotation.z = Math.random() * 6;

                    object.matrixAutoUpdate = false;
                    object.updateMatrix();

                    result.scene.add( object );

                }

                result.scene.matrixAutoUpdate = false;

                light = new THREE.PointLight( 0xffffff );
                result.scene.add( light );

                light = new THREE.DirectionalLight( 0x111111 );
                light.position.x = 1;
                result.scene.add( light );

                return result;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var delta = clock.getDelta();

                camera.position.x += ( mouseX - camera.position.x ) * .001;
                camera.position.y += ( - mouseY - camera.position.y ) * .001;

                camera.lookAt( scene.position );

                // update skinning

                THREE.AnimationHandler.update( delta * 0.75 );

                for ( var i = 0; i < rotatingObjects.length; i ++ ) {

                    var object = rotatingObjects[ i ];

                    if ( object.properties.rotateX ) object.rotation.x += 1 * delta;
                    if ( object.properties.rotateY ) object.rotation.y += 0.5 * delta;

                }

                for ( var i = 0; i < morphAnimatedObjects.length; i ++ ) {

                    var object = morphAnimatedObjects[ i ];

                    object.updateAnimation( 1000 * delta );

                }

                renderer.render( scene, camera );

            }

            // Scene explorer user interface

            function toggle( id ) {

                var scn = $( "section_" + id ).style,
                    btn = $( "plus_" + id );

                if ( scn.display == "block" ) {

                    scn.display = "none";
                    btn.innerHTML = "[+]";

                }
                else {

                    scn.display = "block";
                    btn.innerHTML = "[-]";

                }

            }

            function createToggle( label ) { return function() { toggle( label ) } };

            function refreshSceneView( result ) {

                $( "section_exp" ).innerHTML = generateSceneView( result );

                var config = [ "obj", "geo", "mat", "tex", "lit", "cam" ];

                for ( var i = 0; i < config.length; i++ )
                    $( "plus_" + config[i] ).addEventListener( 'click', createToggle( config[i] ), false );

            }

            function generateSection( label, id, objects ) {

                var html = "";

                html += "<h3><a id='plus_" + id + "' href='#'>[+]</a> " + label + "</h3>";
                html += "<div id='section_" + id + "' class='part'>";

                for( var o in objects ) {

                    html += o + "<br/>";

                }
                html += "</div>";

                return html;

            }

            function generateSceneView( result ) {

                var config = [
                [ "Objects",    "obj", result.objects ],
                [ "Geometries", "geo", result.geometries ],
                [ "Materials",  "mat", result.materials ],
                [ "Textures",   "tex", result.textures ],
                [ "Lights",     "lit", result.lights ],
                [ "Cameras",    "cam", result.cameras ]
                ];

                var html = "";

                for ( var i = 0; i < config.length; i++ )
                    html += generateSection( config[i][0], config[i][1], config[i][2] );

                return html;

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_scene_blender.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var SCREEN_WIDTH = window.innerWidth;
            var SCREEN_HEIGHT = window.innerHeight;

            var container,stats;

            var camera, scene: THREE.Scene, loaded;
            var renderer;

            var mesh, zmesh, geometry;

            var mouseX = 0, mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            document.addEventListener( 'mousemove', onDocumentMouseMove, false );

            init();
            animate();

            function $( id ) {

                return document.getElementById( id );

            }

            function handle_update( result, pieces ) {

                refreshSceneView( result );
                //renderer.initWebGLObjects( result.scene );

                var m, material, count = 0;

                for ( m in result.materials ) {

                    material = result.materials[ m ];
                    if ( ! ( material instanceof THREE.MeshFaceMaterial ) ) {

                        if( !material.program ) {

                            console.log(m);
                            renderer.initMaterial( material, result.scene.__lights, result.scene.fog );

                            count += 1;
                            if( count > pieces ) {

                                //console.log("xxxxxxxxx");
                                break;

                            }

                        }

                    }

                }

            }

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                var loadScene = createLoadScene();

                camera = loadScene.camera;
                scene = loadScene.scene;

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                renderer.domElement.style.position = "relative";
                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.right = '0px';
                stats.domElement.style.zIndex = 100;
                container.appendChild( stats.domElement );

                $( "start" ).addEventListener( 'click', onStartClick, false );

                var callbackProgress = function( progress, result ) {

                    var bar = 250,
                        total = progress.total_models + progress.total_textures,
                        loaded = progress.loaded_models + progress.loaded_textures;

                    if ( total )
                        bar = Math.floor( bar * loaded / total );

                    $( "bar" ).style.width = bar + "px";

                    var count = 0;
                    for ( var m in result.materials ) count++;

                    handle_update( result, Math.floor( count/total ) );

                }

                var callbackFinished = function( result ) {

                    loaded = result;

                    $( "message" ).style.display = "none";
                    $( "progressbar" ).style.display = "none";
                    $( "start" ).style.display = "block";
                    $( "start" ).className = "enabled";

                    handle_update( result, 1 );

                }

                $( "progress" ).style.display = "block";

                var loader = new THREE.SceneLoader();
                loader.callbackProgress = callbackProgress;

                loader.load( "obj/blenderscene/scene.js", callbackFinished );

                $( "plus_exp" ).addEventListener( 'click', createToggle( "exp" ), false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function setButtonActive( id ) {

                $( "start" ).style.backgroundColor = "green";

            }

            function onStartClick() {

                $( "progress" ).style.display = "none";

                camera = loaded.currentCamera;
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                scene = loaded.scene;

            }

            function onDocumentMouseMove(event) {

                mouseX = ( event.clientX - windowHalfX );
                mouseY = ( event.clientY - windowHalfY );

            }

            function createLoadScene() {

                var result = {

                    scene:  new THREE.Scene(),
                    camera: new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 1000 )

                };

                result.camera.position.z = 100;

                var object, geometry, material, light, count = 500, range = 200;

                material = new THREE.MeshLambertMaterial( { color:0xffffff } );
                geometry = new THREE.CubeGeometry( 5, 5, 5 );

                for( var i = 0; i < count; i++ ) {

                    object = new THREE.Mesh( geometry, material );

                    object.position.x = ( Math.random() - 0.5 ) * range;
                    object.position.y = ( Math.random() - 0.5 ) * range;
                    object.position.z = ( Math.random() - 0.5 ) * range;

                    object.rotation.x = Math.random() * 6;
                    object.rotation.y = Math.random() * 6;
                    object.rotation.z = Math.random() * 6;

                    object.matrixAutoUpdate = false;
                    object.updateMatrix();

                    result.scene.add( object );

                }

                result.scene.matrixAutoUpdate = false;

                light = new THREE.PointLight( 0xffffff );
                result.scene.add( light );

                light = new THREE.DirectionalLight( 0x111111 );
                light.position.x = 1;
                result.scene.add( light );

                return result;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                camera.position.x += ( mouseX - camera.position.x ) * .001;
                camera.position.y += ( - mouseY - camera.position.y ) * .001;

                camera.lookAt( scene.position );

                renderer.render( scene, camera );

            }

            // Scene explorer user interface

            function toggle( id ) {

                var scn = $( "section_" + id ).style,
                    btn = $( "plus_" + id );

                if ( scn.display == "block" ) {

                    scn.display = "none";
                    btn.innerHTML = "[+]";

                }
                else {

                    scn.display = "block";
                    btn.innerHTML = "[-]";

                }

            }

            function createToggle( label ) { return function() { toggle( label ) } };

            function refreshSceneView( result ) {

                $( "section_exp" ).innerHTML = generateSceneView( result );

                var config = [ "obj", "geo", "mat", "tex", "lit", "cam" ];

                for ( var i = 0; i < config.length; i++ )
                    $( "plus_" + config[i] ).addEventListener( 'click', createToggle( config[i] ), false );

            }

            function generateSection( label, id, objects ) {

                var html = "";

                html += "<h3><a id='plus_" + id + "' href='#'>[+]</a> " + label + "</h3>";
                html += "<div id='section_" + id + "' class='part'>";

                for( var o in objects ) {

                    html += o + "<br/>";

                }
                html += "</div>";

                return html;

            }

            function generateSceneView( result ) {

                var config = [
                [ "Objects",    "obj", result.objects ],
                [ "Geometries", "geo", result.geometries ],
                [ "Materials",  "mat", result.materials ],
                [ "Textures",   "tex", result.textures ],
                [ "Lights",     "lit", result.lights ],
                [ "Cameras",    "cam", result.cameras ]
                ];

                var html = "";

                for ( var i = 0; i < config.length; i++ )
                    html += generateSection( config[i][0], config[i][1], config[i][2] );

                return html;

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_stl.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_utf8.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_loader_vtk.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_lod.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_marching_cubes.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var container, stats;

            var camera, scene, renderer, objects;
            var particleLight, pointLight;

            var materials = [];

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
                camera.position.set( 0, 200, 800 );

                scene = new THREE.Scene();

                // Grid

                var line_material = new THREE.LineBasicMaterial( { color: 0x303030 } ),
                    geometry = new THREE.Geometry(),
                    floor = -75, step = 25;

                for ( var i = 0; i <= 40; i ++ ) {

                    geometry.vertices.push( new THREE.Vector3( - 500, floor, i * step - 500 ) );
                    geometry.vertices.push( new THREE.Vector3(   500, floor, i * step - 500 ) );

                    geometry.vertices.push( new THREE.Vector3( i * step - 500, floor, -500 ) );
                    geometry.vertices.push( new THREE.Vector3( i * step - 500, floor,  500 ) );

                }

                var line = new THREE.Line( geometry, line_material, THREE.LinePieces );
                scene.add( line );

                // Materials

                var texture = new THREE.Texture( generateTexture() );
                texture.needsUpdate = true;

                materials.push( new THREE.MeshLambertMaterial( { map: texture, transparent: true } ) );
                materials.push( new THREE.MeshLambertMaterial( { color: 0xdddddd, shading: THREE.FlatShading } ) );
                materials.push( new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ) );
                materials.push( new THREE.MeshNormalMaterial( ) );
                materials.push( new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending } ) );
                //materials.push( new THREE.MeshBasicMaterial( { color: 0xff0000, blending: THREE.SubtractiveBlending } ) );

                materials.push( new THREE.MeshLambertMaterial( { color: 0xdddddd, shading: THREE.SmoothShading } ) );
                materials.push( new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.SmoothShading, map: texture, transparent: true } ) );
                materials.push( new THREE.MeshNormalMaterial( { shading: THREE.SmoothShading } ) );
                materials.push( new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } ) );

                materials.push( new THREE.MeshDepthMaterial() );

                materials.push( new THREE.MeshLambertMaterial( { color: 0x666666, emissive: 0xff0000, ambient: 0x000000, shading: THREE.SmoothShading } ) );
                materials.push( new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x666666, emissive: 0xff0000, ambient: 0x000000, shininess: 10, shading: THREE.SmoothShading, opacity: 0.9, transparent: true } ) );

                materials.push( new THREE.MeshBasicMaterial( { map: texture, transparent: true } ) );

                // Spheres geometry

                var geometry_smooth = new THREE.SphereGeometry( 70, 32, 16 );
                var geometry_flat = new THREE.SphereGeometry( 70, 32, 16 );
                var geometry_pieces = new THREE.SphereGeometry( 70, 32, 16 ); // Extra geometry to be broken down for MeshFaceMaterial

                for ( var i = 0, l = geometry_pieces.faces.length; i < l; i ++ ) {

                    var face = geometry_pieces.faces[ i ];
                    face.materialIndex = Math.floor( Math.random() * materials.length );

                }

                geometry_pieces["materials"] = materials;

                materials.push( new THREE.MeshFaceMaterial( materials ) );

                objects = [];

                var sphere, material;

                for ( var i = 0, l = materials.length; i < l; i ++ ) {

                    material = materials[ i ];

                    geometry = material instanceof THREE.MeshFaceMaterial ? geometry_pieces :
                               ( material.shading == THREE.FlatShading ? geometry_flat : geometry_smooth );

                    sphere = new THREE.Mesh( geometry, material );

                    sphere.position.x = ( i % 4 ) * 200 - 400;
                    sphere.position.z = Math.floor( i / 4 ) * 200 - 200;

                    sphere.rotation.x = Math.random() * 200 - 100;
                    sphere.rotation.y = Math.random() * 200 - 100;
                    sphere.rotation.z = Math.random() * 200 - 100;

                    objects.push( sphere );

                    scene.add( sphere );

                }

                particleLight = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
                scene.add( particleLight );

                // Lights

                scene.add( new THREE.AmbientLight( 0x111111 ) );

                var directionalLight = new THREE.DirectionalLight( /*Math.random() * */ 0xffffff, 0.125 );

                directionalLight.position.x = Math.random() - 0.5;
                directionalLight.position.y = Math.random() - 0.5;
                directionalLight.position.z = Math.random() - 0.5;

                directionalLight.position.normalize();

                scene.add( directionalLight );

                pointLight = new THREE.PointLight( 0xffffff, 1 );
                scene.add( pointLight );

                //

                renderer = new THREE.WebGLRenderer( { antialias: true } );
                renderer.setSize( window.innerWidth, window.innerHeight );

                container.appendChild( renderer.domElement );

                //

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';

                container.appendChild( stats.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function generateTexture() {

                var canvas = <HTMLCanvasElement>document.createElement( 'canvas' );
                canvas.width = 256;
                canvas.height = 256;

                var context = canvas.getContext( '2d' );
                var image = context.getImageData( 0, 0, 256, 256 );

                var x = 0, y = 0;

                for ( var i = 0, j = 0, l = image.data.length; i < l; i += 4, j ++ ) {

                    x = j % 256;
                    y = x == 0 ? y + 1 : y;

                    image.data[ i ] = 255;
                    image.data[ i + 1 ] = 255;
                    image.data[ i + 2 ] = 255;
                    image.data[ i + 3 ] = Math.floor( x ^ y );

                }

                context.putImageData( image, 0, 0 );

                return canvas;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var timer = 0.0001 * Date.now();

                camera.position.x = Math.cos( timer ) * 1000;
                camera.position.z = Math.sin( timer ) * 1000;

                camera.lookAt( scene.position );

                for ( var i = 0, l = objects.length; i < l; i ++ ) {

                    var object = objects[ i ];

                    object.rotation.x += 0.01;
                    object.rotation.y += 0.005;

                }

                materials[ materials.length - 3 ].emissive.setHSV( 0.54, 1, 0.7 * ( 0.5 + 0.5 * Math.sin( 35 * timer ) ) );
                materials[ materials.length - 4 ].emissive.setHSV( 0.04, 1, 0.7 * ( 0.5 + 0.5 * Math.cos( 35 * timer ) ) );

                particleLight.position.x = Math.sin( timer * 7 ) * 300;
                particleLight.position.y = Math.cos( timer * 5 ) * 400;
                particleLight.position.z = Math.cos( timer * 3 ) * 300;

                pointLight.position.x = particleLight.position.x;
                pointLight.position.y = particleLight.position.y;
                pointLight.position.z = particleLight.position.z;

                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials2.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var container, stats;

            var camera, scene, renderer, objects;
            var particleLight, pointLight;

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 2000 );
                camera.position.set( 0, 200, 0 );

                scene = new THREE.Scene();

                // Materials

                var imgTexture2 = THREE.ImageUtils.loadTexture( "textures/planets/moon_1024.jpg" );
                imgTexture2.wrapS = imgTexture2.wrapT = THREE.RepeatWrapping;
                imgTexture2.anisotropy = 16;

                var imgTexture = THREE.ImageUtils.loadTexture( "textures/lava/lavatile.jpg" );
                imgTexture.repeat.set( 4, 2 );
                imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;
                imgTexture.anisotropy = 16;

                var shininess = 50, specular = 0x333333, bumpScale = 1, shading = THREE.SmoothShading;

                var materials = [];

                materials.push( new THREE.MeshPhongMaterial( { map: imgTexture, bumpMap: imgTexture, bumpScale: bumpScale, color: 0xffffff, ambient: 0x777777, specular: specular, shininess: shininess, shading: shading } ) );
                materials.push( new THREE.MeshPhongMaterial( { map: imgTexture, bumpMap: imgTexture, bumpScale: bumpScale, color: 0x00ff00, ambient: 0x777777, specular: specular, shininess: shininess, shading: shading } ) );
                materials.push( new THREE.MeshPhongMaterial( { map: imgTexture, bumpMap: imgTexture, bumpScale: bumpScale, color: 0x00ff00, ambient: 0x007700, specular: specular, shininess: shininess, shading: shading } ) );
                materials.push( new THREE.MeshPhongMaterial( { map: imgTexture, bumpMap: imgTexture, bumpScale: bumpScale, color: 0x000000, ambient: 0x00ff00, specular: specular, shininess: shininess, shading: shading } ) );

                materials.push( new THREE.MeshLambertMaterial( { map: imgTexture, color: 0xffffff, ambient: 0x777777, shading: shading } ) );
                materials.push( new THREE.MeshLambertMaterial( { map: imgTexture, color: 0xff0000, ambient: 0x777777, shading: shading } ) );
                materials.push( new THREE.MeshLambertMaterial( { map: imgTexture, color: 0xff0000, ambient: 0x770000, shading: shading } ) );
                materials.push( new THREE.MeshLambertMaterial( { map: imgTexture, color: 0x000000, ambient: 0xff0000, shading: shading } ) );

                shininess = 15;

                materials.push( new THREE.MeshPhongMaterial( { map: imgTexture2, bumpMap: imgTexture2, bumpScale: bumpScale, color: 0x000000, ambient: 0x000000, specular: 0xffaa00, shininess: shininess, metal: true, shading: shading } ) );
                materials.push( new THREE.MeshPhongMaterial( { map: imgTexture2, bumpMap: imgTexture2, bumpScale: bumpScale, color: 0x000000, ambient: 0x000000, specular: 0xaaff00, shininess: shininess, metal: true, shading: shading } ) );
                materials.push( new THREE.MeshPhongMaterial( { map: imgTexture2, bumpMap: imgTexture2, bumpScale: bumpScale, color: 0x000000, ambient: 0x000000, specular: 0x00ffaa, shininess: shininess, metal: true, shading: shading } ) );
                materials.push( new THREE.MeshPhongMaterial( { map: imgTexture2, bumpMap: imgTexture2, bumpScale: bumpScale, color: 0x000000, ambient: 0x000000, specular: 0x00aaff, shininess: shininess, metal: true, shading: shading } ) );

                // Spheres geometry

                var geometry_smooth = new THREE.SphereGeometry( 70, 32, 16 );
                var geometry_flat = new THREE.SphereGeometry( 70, 32, 16 );

                objects = [];

                var sphere, geometry, material;

                for ( var i = 0, l = materials.length; i < l; i ++ ) {

                    material = materials[ i ];

                    geometry = material.shading == THREE.FlatShading ? geometry_flat : geometry_smooth;

                    sphere = new THREE.Mesh( geometry, material );

                    sphere.position.x = ( i % 4 ) * 200 - 200;
                    sphere.position.z = Math.floor( i / 4 ) * 200 - 200;

                    objects.push( sphere );

                    scene.add( sphere );

                }

                particleLight = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
                scene.add( particleLight );

                // Lights

                scene.add( new THREE.AmbientLight( 0x444444 ) );

                var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
                directionalLight.position.set( 1, 1, 1 ).normalize();
                scene.add( directionalLight );

                pointLight = new THREE.PointLight( 0xffffff, 2, 800 );
                scene.add( pointLight );

                particleLight.material.color = pointLight.color;
                pointLight.position = particleLight.position;

                //

                renderer = new THREE.WebGLRenderer( { clearColor: 0x0a0a0a, clearAlpha: 1, antialias: true } );
                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.sortObjects = true;

                container.appendChild( renderer.domElement );

                renderer.gammaInput = true;
                renderer.gammaOutput = true;
                renderer.physicallyBasedShading = true;

                //

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';

                container.appendChild( stats.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var timer = Date.now() * 0.00025;

                camera.position.x = Math.cos( timer ) * 800;
                camera.position.z = Math.sin( timer ) * 800;

                camera.lookAt( scene.position );

                for ( var i = 0, l = objects.length; i < l; i ++ ) {

                    var object = objects[ i ];

                    object.rotation.y += 0.005;

                }

                particleLight.position.x = Math.sin( timer * 7 ) * 300;
                particleLight.position.y = Math.cos( timer * 5 ) * 400;
                particleLight.position.z = Math.cos( timer * 3 ) * 300;

                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_blending.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var camera, scene, renderer;
            var mesh;

            init();
            animate();

            function init() {

                // CAMERA

                camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
                camera.position.z = 600;

                // SCENE

                scene = new THREE.Scene();

                // BACKGROUND

                var x = <HTMLCanvasElement>document.createElement( "canvas" );
                var xc = x.getContext( "2d" );
                x.width = x.height = 128;
                xc.fillStyle = "#ddd";
                xc.fillRect( 0, 0, 128, 128 );
                xc.fillStyle = "#555";
                xc.fillRect( 0, 0, 64, 64 );
                xc.fillStyle = "#999";
                xc.fillRect( 32, 32, 32, 32 );
                xc.fillStyle = "#555";
                xc.fillRect( 64, 64, 64, 64 );
                xc.fillStyle = "#777";
                xc.fillRect( 96, 96, 32, 32 );

                var mapBg = new THREE.Texture( x );
                mapBg.wrapS = mapBg.wrapT = THREE.RepeatWrapping;
                mapBg.repeat.set( 128, 64 );
                mapBg.needsUpdate = true;

                /*
                var mapBg = THREE.ImageUtils.loadTexture( "textures/disturb.jpg" );
                mapBg.wrapS = mapBg.wrapT = THREE.RepeatWrapping;
                mapBg.repeat.set( 8, 4 );
                */

                var materialBg = new THREE.MeshBasicMaterial( { map: mapBg } );

                var meshBg = new THREE.Mesh( new THREE.PlaneGeometry( 4000, 2000 ), materialBg );
                meshBg.position.set( 0, 0, -1 );
                scene.add( meshBg );

                // OBJECTS

                var blendings = [ "NoBlending", "NormalBlending", "AdditiveBlending", "SubtractiveBlending", "MultiplyBlending", "AdditiveAlphaBlending" ];

                var map0 = THREE.ImageUtils.loadTexture( 'textures/ash_uvgrid01.jpg' );
                var map1 = THREE.ImageUtils.loadTexture( 'textures/sprite0.jpg' );
                var map2 = THREE.ImageUtils.loadTexture( 'textures/sprite0.png' );
                var map3 = THREE.ImageUtils.loadTexture( 'textures/lensflare/lensflare0.png' );
                var map4 = THREE.ImageUtils.loadTexture( 'textures/lensflare/lensflare0_alpha.png' );

                var geo1 = new THREE.PlaneGeometry( 100, 100 );
                var geo2 = new THREE.PlaneGeometry( 100, 25 );

                addImageRow( map0, 300 );
                addImageRow( map1, 150 );
                addImageRow( map2, 0 );
                addImageRow( map3, -150 );
                addImageRow( map4, -300 );

                function addImageRow( map, y ) {

                    for ( var i = 0; i < blendings.length; i ++ ) {

                        var blending = blendings[ i ];

                        var material = new THREE.MeshBasicMaterial( { map: map } );
                        material.transparent = true;
                        material.blending = THREE[ blending ];

                        var x = ( i - blendings.length / 2 ) * 110;
                        var z = 0;

                        var mesh = new THREE.Mesh( geo1, material );
                        mesh.position.set( x, y, z );
                        scene.add( mesh );


                        var mesh = new THREE.Mesh( geo2, generateLabelMaterial( blending.replace( "Blending", "" ) ) );
                        mesh.position.set( x, y - 75, z );
                        scene.add( mesh );

                    }

                }

                // RENDERER

                renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1 } );
                renderer.setSize( window.innerWidth, window.innerHeight );
                document.body.appendChild( renderer.domElement );

                // EVENTS

                window.addEventListener( 'resize', onWindowResize, false );

            }

            //

            function onWindowResize( event ) {

                var SCREEN_WIDTH = window.innerWidth;
                var SCREEN_HEIGHT = window.innerHeight;

                renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

                camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
                camera.updateProjectionMatrix();

            }


            function generateLabelMaterial( text ) {

                var x = <HTMLCanvasElement>document.createElement( "canvas" );
                var xc = x.getContext( "2d" );
                x.width = 128;
                x.height = 32;

                xc.fillStyle = "rgba( 0, 0, 0, 0.95 )";
                xc.fillRect( 0, 0, 128, 32 );

                xc.fillStyle = "white";
                xc.font = "12pt arial bold";
                xc.fillText( text, 10, 22 );

                var map = new THREE.Texture( x );
                map.needsUpdate = true;

                var material = new THREE.MeshBasicMaterial( { map: map, transparent: true } );
                return material;

            }

            function animate() {

                requestAnimationFrame( animate );
                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_blending_custom.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_bumpmap.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_bumpmap_skin.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cars.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var STATS_ENABLED = false;

            var CARS = {

                "veyron":   {

                    name:   "Bugatti Veyron",
                    url:    "obj/veyron/VeyronNoUv_bin.js",
                    author: '<a href="http://artist-3d.com/free_3d_models/dnm/model_disp.php?uid=1129" target="_blank">Troyano</a>',
                    init_rotation: [ 0, 0, 0 ],
                    scale: 5.5,
                    init_material: 4,
                    body_materials: [ 2 ],

                    object: null,
                    buttons: null,
                    materials: null,
                    mmap: null

                },

                "gallardo": {

                    name:   "Lamborghini Gallardo",
                    url:    "obj/gallardo/GallardoNoUv_bin.js",
                    author: '<a href="http://artist-3d.com/free_3d_models/dnm/model_disp.php?uid=1711" target="_blank">machman_3d</a>',
                    init_rotation: [ 0, 0, 0 ],
                    scale: 3.7,
                    init_material: 9,
                    body_materials: [ 3 ],

                    object: null,
                    buttons: null,
                    materials: null,
                    mmap: null

                },

                "f50": {

                    name:   "Ferrari F50",
                    url:    "obj/f50/F50NoUv_bin.js",
                    author: '<a href="http://artist-3d.com/free_3d_models/dnm/model_disp.php?uid=1687" target="_blank">daniel sathya</a>',
                    init_rotation: [ 0, 0, 0 ],
                    scale: 0.175,
                    init_material: 2,
                    body_materials: [ 3, 6, 7, 8, 9, 10, 23, 24 ],

                    object: null,
                    buttons: null,
                    materials: null,
                    mmap: null

                },

                "camaro": {

                    name:   "Chevrolet Camaro",
                    url:    "obj/camaro/CamaroNoUv_bin.js",
                    author: '<a href="http://www.turbosquid.com/3d-models/blender-camaro/411348" target="_blank">dskfnwn</a>',
                    init_rotation: [ 0.0, 0.0, 0.0 /*0, 1, 0*/ ],
                    scale: 75,
                    init_material: 0,
                    body_materials: [ 0 ],

                    object: null,
                    buttons: null,
                    materials: null,
                    mmap: null

                }

            };


            var container, stats;

            var camera, scene, renderer;
            var cameraCube, sceneCube;

            var m, mi;

            var directionalLight, pointLight;

            var mouseX = 0, mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var loader = new THREE.BinaryLoader( true );
            document.body.appendChild( loader.statusDomElement );

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                // CAMERAS

                camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 100000 );
                cameraCube = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 100000 );

                // SCENE

                scene = new THREE.Scene();
                sceneCube = new THREE.Scene();

                // LIGHTS

                var ambient = new THREE.AmbientLight( 0x050505 );
                scene.add( ambient );

                directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
                directionalLight.position.set( 2, 1.2, 10 ).normalize();
                scene.add( directionalLight );

                directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
                directionalLight.position.set( -2, 1.2, -10 ).normalize();
                scene.add( directionalLight );

                pointLight = new THREE.PointLight( 0xffaa00, 2 );
                pointLight.position.set( 2000, 1200, 10000 );
                scene.add( pointLight );

                // Skybox

                var shader = THREE.ShaderLib[ "cube" ];
                shader.uniforms[ "tCube" ].value = textureCube;

                var material = new THREE.ShaderMaterial( {

                    fragmentShader: shader.fragmentShader,
                    vertexShader: shader.vertexShader,
                    uniforms: shader.uniforms,
                    depthWrite: false,
                    side: THREE.BackSide

                } ),

                mesh = new THREE.Mesh( new THREE.CubeGeometry( 100, 100, 100 ), material );
                sceneCube.add( mesh );

                //

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.setFaceCulling( THREE.CullFaceNone );
                renderer.autoClear = false;

                container.appendChild( renderer.domElement );

                if ( STATS_ENABLED ) {

                    stats = new Stats();
                    stats.domElement.style.position = 'absolute';
                    stats.domElement.style.top = '0px';
                    stats.domElement.style.zIndex = 100;
                    container.appendChild( stats.domElement );

                }

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );

                var r = "textures/cube/Bridge2/";
                var urls = [ r + "posx.jpg", r + "negx.jpg",
                             r + "posy.jpg", r + "negy.jpg",
                             r + "posz.jpg", r + "negz.jpg" ];

                var textureCube = THREE.ImageUtils.loadTextureCube( urls );
                textureCube.format = THREE.RGBFormat;

                // common materials

                var mlib = {

                "Orange":   new THREE.MeshLambertMaterial( { color: 0xff6600, ambient: 0xff2200, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.3 } ),
                "Blue":     new THREE.MeshLambertMaterial( { color: 0x001133, ambient: 0x001133, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.3 } ),
                "Red":      new THREE.MeshLambertMaterial( { color: 0x660000, ambient: 0x330000, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.25 } ),
                "Black":    new THREE.MeshLambertMaterial( { color: 0x000000, ambient: 0x000000, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.15 } ),
                "White":    new THREE.MeshLambertMaterial( { color: 0xffffff, ambient: 0x666666, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.25 } ),

                "Carmine":  new THREE.MeshPhongMaterial( { color: 0x770000, specular:0xffaaaa, envMap: textureCube, combine: THREE.MultiplyOperation } ),
                "Gold":     new THREE.MeshPhongMaterial( { color: 0xaa9944, specular:0xbbaa99, shininess:50, envMap: textureCube, combine: THREE.MultiplyOperation } ),
                "Bronze":   new THREE.MeshPhongMaterial( { color: 0x150505, specular:0xee6600, shininess:10, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.25 } ),
                "Chrome":   new THREE.MeshPhongMaterial( { color: 0xffffff, specular:0xffffff, envMap: textureCube, combine: THREE.MultiplyOperation } ),

                "Orange metal": new THREE.MeshLambertMaterial( { color: 0xff6600, ambient: 0xff2200, envMap: textureCube, combine: THREE.MultiplyOperation } ),
                "Blue metal":   new THREE.MeshLambertMaterial( { color: 0x001133, ambient: 0x002266, envMap: textureCube, combine: THREE.MultiplyOperation } ),
                "Red metal":    new THREE.MeshLambertMaterial( { color: 0x770000, envMap: textureCube, combine: THREE.MultiplyOperation } ),
                "Green metal":  new THREE.MeshLambertMaterial( { color: 0x007711, envMap: textureCube, combine: THREE.MultiplyOperation } ),
                "Black metal":  new THREE.MeshLambertMaterial( { color: 0x222222, envMap: textureCube, combine: THREE.MultiplyOperation } ),

                "Pure chrome":  new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: textureCube } ),
                "Dark chrome":  new THREE.MeshLambertMaterial( { color: 0x444444, envMap: textureCube } ),
                "Darker chrome":new THREE.MeshLambertMaterial( { color: 0x222222, envMap: textureCube } ),

                "Black glass":  new THREE.MeshLambertMaterial( { color: 0x101016, envMap: textureCube, opacity: 0.975, transparent: true } ),
                "Dark glass":   new THREE.MeshLambertMaterial( { color: 0x101046, envMap: textureCube, opacity: 0.25, transparent: true } ),
                "Blue glass":   new THREE.MeshLambertMaterial( { color: 0x668899, envMap: textureCube, opacity: 0.75, transparent: true } ),
                "Light glass":  new THREE.MeshBasicMaterial( { color: 0x223344, envMap: textureCube, opacity: 0.25, transparent: true, combine: THREE.MixOperation, reflectivity: 0.25 } ),

                "Red glass":    new THREE.MeshLambertMaterial( { color: 0xff0000, opacity: 0.75, transparent: true } ),
                "Yellow glass": new THREE.MeshLambertMaterial( { color: 0xffffaa, opacity: 0.75, transparent: true } ),
                "Orange glass": new THREE.MeshLambertMaterial( { color: 0x995500, opacity: 0.75, transparent: true } ),

                "Orange glass 50":  new THREE.MeshLambertMaterial( { color: 0xffbb00, opacity: 0.5, transparent: true } ),
                "Red glass 50":     new THREE.MeshLambertMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } ),

                "Fullblack rough":  new THREE.MeshLambertMaterial( { color: 0x000000 } ),
                "Black rough":      new THREE.MeshLambertMaterial( { color: 0x050505 } ),
                "Darkgray rough":   new THREE.MeshLambertMaterial( { color: 0x090909 } ),
                "Red rough":        new THREE.MeshLambertMaterial( { color: 0x330500 } ),

                "Darkgray shiny":   new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x050505 } ),
                "Gray shiny":       new THREE.MeshPhongMaterial( { color: 0x050505, shininess: 20 } )

                }

                // Gallardo materials

                CARS[ "gallardo" ].materials = {

                    body: [

                        [ "Orange",     mlib[ "Orange" ] ],
                        [ "Blue",       mlib[ "Blue" ] ],
                        [ "Red",        mlib[ "Red" ] ],
                        [ "Black",      mlib[ "Black" ] ],
                        [ "White",      mlib[ "White" ] ],

                        [ "Orange metal",   mlib[ "Orange metal" ] ],
                        [ "Blue metal",     mlib[ "Blue metal" ] ],
                        [ "Green metal",    mlib[ "Green metal" ] ],
                        [ "Black metal",    mlib[ "Black metal" ] ],

                        [ "Carmine",    mlib[ "Carmine" ] ],
                        [ "Gold",       mlib[ "Gold" ] ],
                        [ "Bronze",     mlib[ "Bronze" ] ],
                        [ "Chrome",     mlib[ "Chrome" ] ]

                    ]

                }

                m = CARS[ "gallardo" ].materials;
                mi = CARS[ "gallardo" ].init_material;

                CARS[ "gallardo" ].mmap = {

                    0: mlib[ "Pure chrome" ],   // wheels chrome
                    1: mlib[ "Black rough" ],   // tire
                    2: mlib[ "Black glass" ],   // windshield
                    3: m.body[ mi ][ 1 ],       // body
                    4: mlib[ "Red glass" ],     // back lights
                    5: mlib[ "Yellow glass" ],  // front lights
                    6: mlib[ "Dark chrome" ]    // windshield rim

                }

                // Veyron materials

                CARS[ "veyron" ].materials = {

                    body: [

                        [ "Orange metal",   mlib[ "Orange metal" ] ],
                        [ "Blue metal",     mlib[ "Blue metal" ] ],
                        [ "Red metal",      mlib[ "Red metal" ] ],
                        [ "Green metal",    mlib[ "Green metal" ] ],
                        [ "Black metal",    mlib[ "Black metal" ] ],

                        [ "Gold",       mlib[ "Gold" ] ],
                        [ "Bronze",     mlib[ "Bronze" ] ],
                        [ "Chrome",     mlib[ "Chrome" ] ]

                    ],

                }

                m = CARS[ "veyron" ].materials;
                mi = CARS[ "veyron" ].init_material;

                CARS[ "veyron" ].mmap = {

                    0: mlib[ "Black rough" ],       // tires + inside
                    1: mlib[ "Pure chrome" ],       // wheels + extras chrome
                    2: m.body[ mi ][ 1 ],           // back / top / front torso
                    3: mlib[ "Dark glass" ],        // glass
                    4: mlib[ "Pure chrome" ],       // sides torso
                    5: mlib[ "Pure chrome" ],       // engine
                    6: mlib[ "Red glass 50" ],      // backlights
                    7: mlib[ "Orange glass 50" ]    // backsignals

                }

                // F50 materials

                CARS[ "f50" ].materials = {

                    body: [

                        [ "Orange",     mlib[ "Orange" ] ],
                        [ "Blue",       mlib[ "Blue" ] ],
                        [ "Red",        mlib[ "Red" ] ],
                        [ "Black",      mlib[ "Black" ] ],
                        [ "White",      mlib[ "White" ] ],

                        [ "Orange metal",   mlib[ "Orange metal" ] ],
                        [ "Blue metal",     mlib[ "Blue metal" ] ],
                        [ "Black metal",    mlib[ "Black metal" ] ],

                        [ "Carmine",    mlib[ "Carmine" ] ],
                        [ "Gold",       mlib[ "Gold" ] ],
                        [ "Bronze",     mlib[ "Bronze" ] ],
                        [ "Chrome",     mlib[ "Chrome" ] ]

                    ],

                }

                m = CARS[ "f50" ].materials;
                mi = CARS[ "f50" ].init_material;

                CARS[ "f50" ].mmap = {

                    0:  mlib[ "Dark chrome" ],      // interior + rim
                    1:  mlib[ "Pure chrome" ],      // wheels + gears chrome
                    2:  mlib[ "Blue glass" ],       // glass
                    3:  m.body[ mi ][ 1 ],          // torso mid + front spoiler
                    4:  mlib[ "Darkgray shiny" ],   // interior + behind seats
                    5:  mlib[ "Darkgray shiny" ],   // tiny dots in interior
                    6:  m.body[ mi ][ 1 ],          // back torso
                    7:  m.body[ mi ][ 1 ],          // right mirror decal
                    8:  m.body[ mi ][ 1 ],          // front decal
                    9:  m.body[ mi ][ 1 ],          // front torso
                    10: m.body[ mi ][ 1 ],          // left mirror decal
                    11: mlib[ "Pure chrome" ],      // engine
                    12: mlib[ "Darkgray rough" ],   // tires side
                    13: mlib[ "Darkgray rough" ],   // tires bottom
                    14: mlib[ "Darkgray shiny" ],   // bottom
                    15: mlib[ "Black rough" ],      // ???
                    16: mlib[ "Orange glass" ],     // front signals
                    17: mlib[ "Dark chrome" ],      // wheels center
                    18: mlib[ "Red glass" ],        // back lights
                    19: mlib[ "Black rough" ],      // ???
                    20: mlib[ "Red rough" ],        // seats
                    21: mlib[ "Black rough" ],      // back plate
                    22: mlib[ "Black rough" ],      // front light dots
                    23: m.body[ mi ][ 1 ],          // back torso
                    24: m.body[ mi ][ 1 ]           // back torso center

                }


                // Camero materials

                CARS[ "camaro" ].materials = {

                    body: [

                        [ "Orange",     mlib[ "Orange" ] ],
                        [ "Blue",       mlib[ "Blue" ] ],
                        [ "Red",        mlib[ "Red" ] ],
                        [ "Black",      mlib[ "Black" ] ],
                        [ "White",      mlib[ "White" ] ],

                        [ "Orange metal",   mlib[ "Orange metal" ] ],
                        [ "Blue metal",     mlib[ "Blue metal" ] ],
                        [ "Red metal",      mlib[ "Red metal" ] ],
                        [ "Green metal",    mlib[ "Green metal" ] ],
                        [ "Black metal",    mlib[ "Black metal" ] ],

                        [ "Gold",       mlib[ "Gold" ] ],
                        [ "Bronze",     mlib[ "Bronze" ] ],
                        [ "Chrome",     mlib[ "Chrome" ] ]

                    ],

                }

                m = CARS[ "camaro" ].materials;
                mi = CARS[ "camaro" ].init_material;

                CARS[ "camaro" ].mmap = {

                    0: m.body[ mi ][ 1 ],           // car body
                    1: mlib[ "Pure chrome" ],       // wheels chrome
                    2: mlib[ "Pure chrome" ],       // grille chrome
                    3: mlib[ "Dark chrome" ],       // door lines
                    4: mlib[ "Light glass" ],       // windshield
                    5: mlib[ "Gray shiny" ],        // interior
                    6: mlib[ "Black rough" ],       // tire
                    7: mlib[ "Fullblack rough" ],   // tireling
                    8: mlib[ "Fullblack rough" ]    // behind grille

                }

                loader.load( CARS[ "veyron" ].url, function( geometry ) { createScene( geometry, "veyron" ) } );

                for( var c in CARS ) initCarButton( c );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                cameraCube.aspect = window.innerWidth / window.innerHeight;
                cameraCube.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function initCarButton( car ) {

                $( car ).addEventListener( 'click', function() {

                    if ( ! CARS[ car ].object ) {

                        loader.statusDomElement.style.display = "block";
                        loader.load( CARS[ car ].url, function( geometry ) { createScene( geometry, car ) } );

                    } else {

                        switchCar( car );

                    }

                }, false );

            }

            function $( id ) { return document.getElementById( id ) }
            function button_name( car, index ) { return "m_" + car  + "_" + index }

            function switchCar( car ) {

                for ( var c in CARS ) {

                    if ( c != car && CARS[ c ].object ) {

                        CARS[ c ].object.visible = false;
                        CARS[ c ].buttons.style.display = "none";

                    }
                }

                CARS[ car ].object.visible = true;
                CARS[ car ].buttons.style.display = "block";

                $( "car_name" ).innerHTML = CARS[ car ].name + " model";
                $( "car_author" ).innerHTML = CARS[ car ].author;

            }

            function createButtons( materials, car ) {

                var buttons, i, src = "";

                for( i = 0; i < materials.length; i ++ ) {

                    src += '<button id="' + button_name( car, i ) + '">' + materials[ i ][ 0 ] + '</button> ';

                }

                buttons = document.createElement( "div" );
                buttons.innerHTML = src;

                $( "buttons_materials" ).appendChild( buttons );

                return buttons;

            }

            function attachButtonMaterials( materials, faceMaterial, material_indices, car ) {

                for( var i = 0; i < materials.length; i ++ ) {

                    $( button_name( car, i ) )["counter"] = i;
                    $( button_name( car, i ) ).addEventListener( 'click', function() {

                        for ( var j = 0; j < material_indices.length; j ++ ) {

                            faceMaterial.materials[ material_indices [ j ] ] = materials[ this.counter ][ 1 ];

                        }

                    }, false );

                }

            }

            function createScene( geometry, car ) {

                loader.statusDomElement.innerHTML = "Creating model ...";

                var m = new THREE.MeshFaceMaterial(),
                    s = CARS[ car ].scale * 1,
                    r = CARS[ car ].init_rotation,
                    materials = CARS[ car ].materials,
                    mi = CARS[ car ].init_material,
                    bm = CARS[ car ].body_materials;

                for ( var i in CARS[ car ].mmap ) {

                    m.materials[ i ] = CARS[ car ].mmap[ i ];

                }

                var mesh = new THREE.Mesh( geometry, m );

                mesh.rotation.x = r[ 0 ];
                mesh.rotation.y = r[ 1 ];
                mesh.rotation.z = r[ 2 ];

                mesh.scale.x = mesh.scale.y = mesh.scale.z = s;

                scene.add( mesh );

                CARS[ car ].object = mesh;

                CARS[ car ].buttons = createButtons( materials.body, car );
                attachButtonMaterials( materials.body, m, bm, car );

                switchCar( car );

                loader.statusDomElement.style.display = "none";
                loader.statusDomElement.innerHTML = "Loading model ...";

            }

            function onDocumentMouseMove(event) {

                mouseY = ( event.clientY - window.innerHeight );

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();

            }

            function render() {

                var timer = -0.0002 * Date.now();

                camera.position.x = 1000 * Math.cos( timer );
                camera.position.y += ( - mouseY - camera.position.y ) * .05;
                camera.position.z = 1000 * Math.sin( timer );

                camera.lookAt( scene.position );
                cameraCube.rotation.copy( camera.rotation );

                renderer.render( sceneCube, cameraCube );
                renderer.render( scene, camera );

                if ( STATS_ENABLED ) stats.update();

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cars_anaglyph.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cars_camaro.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cars_camaro_crosseyed.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cars_parallaxbarrier.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cubemap.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var container, stats;

            var camera, scene, renderer;
            var cameraCube, sceneCube;

            var mesh, lightMesh, geometry;

            var loader;

            var directionalLight, pointLight;

            var mouseX = 0;
            var mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            document.addEventListener('mousemove', onDocumentMouseMove, false);

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
                camera.position.z = 2000;

                cameraCube = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 100 );

                scene = new THREE.Scene();
                sceneCube = new THREE.Scene();

                // LIGHTS

                var ambient = new THREE.AmbientLight( 0xffffff );
                scene.add( ambient );

                pointLight = new THREE.PointLight( 0xffffff, 2 );
                scene.add( pointLight );

                // light representation

                var sphere = new THREE.SphereGeometry( 100, 16, 8 );
                lightMesh = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) );
                lightMesh.position = pointLight.position;
                lightMesh.scale.x = lightMesh.scale.y = lightMesh.scale.z = 0.05;
                scene.add( lightMesh );

                var path = "textures/cube/SwedishRoyalCastle/";
                var format = '.jpg';
                var urls = [
                        path + 'px' + format, path + 'nx' + format,
                        path + 'py' + format, path + 'ny' + format,
                        path + 'pz' + format, path + 'nz' + format
                    ];

                var reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
                reflectionCube.format = THREE.RGBFormat;

                var refractionCube = new THREE.Texture( <HTMLImageElement>reflectionCube.image, new THREE.CubeRefractionMapping() );
                refractionCube.format = THREE.RGBFormat;

                //var cubeMaterial3 = new THREE.MeshPhongMaterial( { color: 0x000000, specular:0xaa0000, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.25 } );
                var cubeMaterial3 = new THREE.MeshLambertMaterial( { color: 0xff6600, ambient: 0x993300, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
                var cubeMaterial2 = new THREE.MeshLambertMaterial( { color: 0xffee00, ambient: 0x996600, envMap: refractionCube, refractionRatio: 0.95 } );
                var cubeMaterial1 = new THREE.MeshLambertMaterial( { color: 0xffffff, ambient: 0xaaaaaa, envMap: reflectionCube } )

                // Skybox

                var shader = THREE.ShaderLib[ "cube" ];
                shader.uniforms[ "tCube" ].value = reflectionCube;

                var material = new THREE.ShaderMaterial( {

                    fragmentShader: shader.fragmentShader,
                    vertexShader: shader.vertexShader,
                    uniforms: shader.uniforms,
                    depthWrite: false,
                    side: THREE.BackSide

                } ),

                mesh = new THREE.Mesh( new THREE.CubeGeometry( 100, 100, 100 ), material );
                sceneCube.add( mesh );

                //

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.autoClear = false;
                container.appendChild( renderer.domElement );

                //

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.zIndex = 100;
                container.appendChild( stats.domElement );

                //

                loader = new THREE.BinaryLoader( true );
                document.body.appendChild( loader.statusDomElement );

                loader.load( "obj/walt/WaltHead_bin.js", function( geometry ) { createScene( geometry, cubeMaterial1, cubeMaterial2, cubeMaterial3 ) } );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                cameraCube.aspect = window.innerWidth / window.innerHeight;
                cameraCube.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function createScene( geometry, m1, m2, m3 ) {

                var s = 15;

                var mesh = new THREE.Mesh( geometry, m1 );
                mesh.position.z = - 100;
                mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
                scene.add( mesh );

                var mesh = new THREE.Mesh( geometry, m2 );
                mesh.position.x = - 900;
                mesh.position.z = - 100;
                mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
                scene.add( mesh );

                var mesh = new THREE.Mesh( geometry, m3 );
                mesh.position.x = 900;
                mesh.position.z = - 100;
                mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
                scene.add( mesh );

                loader.statusDomElement.style.display = "none";

            }

            function onDocumentMouseMove(event) {

                mouseX = ( event.clientX - windowHalfX ) * 4;
                mouseY = ( event.clientY - windowHalfY ) * 4;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var timer = -0.0002 * Date.now();

                lightMesh.position.x = 1500 * Math.cos( timer );
                lightMesh.position.z = 1500 * Math.sin( timer );

                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY - camera.position.y ) * .05;

                camera.lookAt( scene.position );
                cameraCube.rotation.copy( camera.rotation );

                renderer.render( sceneCube, cameraCube );
                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cubemap_balls_reflection.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cubemap_balls_reflection_anaglyph.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cubemap_balls_refraction.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cubemap_balls_refraction_crosseyed.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cubemap_dynamic.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cubemap_dynamic2.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cubemap_escher.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_cubemap_refraction.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_grass.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var camera, scene, renderer,
            mesh, levels = [];

            init();
            animate();

            function init() {

                camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
                camera.position.set( 0, 75, 100 );

                scene = new THREE.Scene();

                var geometry = new THREE.PlaneGeometry( 100, 100 );

                var bitmap = generateTextureBase();

                for ( var i = 0; i < 15; i ++ ) {

                    mesh = levels[ i ] = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: new THREE.Texture( generateTextureLevel( bitmap ) ), transparent: true, depthWrite: false, depthTest: false } ) );
                    mesh.material.map.needsUpdate = true;

                    mesh.position.y = i * 0.25;
                    mesh.rotation.x = - Math.PI / 2;

                    scene.add( mesh );

                }

                renderer = new THREE.WebGLRenderer();
                renderer.sortObjects = false;
                renderer.setSize( window.innerWidth, window.innerHeight );
                document.body.appendChild( renderer.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function generateTextureBase() {

                var canvas = <HTMLCanvasElement>document.createElement( 'canvas' );
                canvas.width = 512;
                canvas.height = 512;

                var context = canvas.getContext( '2d' );

                for ( var i = 0; i < 20000; i ++ ) {

                    context.fillStyle = 'rgba(0,' + Math.floor( Math.random() * 64 + 32 ) + ',16,1)';
                    context.beginPath();
                    context.arc( Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 1 + 0.5, 0, Math.PI * 2, true );
                    context.closePath();
                    context.fill();

                }

                context.globalAlpha = 0.075;
                context.globalCompositeOperation = 'lighter';

                return canvas;

            }

            function generateTextureLevel( texture ) {

                texture.getContext( '2d' ).drawImage( texture, 0, 0 );

                var canvas = <HTMLCanvasElement>document.createElement( 'canvas' );
                canvas.width = texture.width;
                canvas.height = texture.height;

                canvas.getContext( '2d' ).drawImage( texture, 0, 0 );

                return canvas;

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();

            }

            function render() {

                var time = Date.now() / 6000;

                camera.position.x = 80 * Math.cos( time );
                camera.position.z = 80 * Math.sin( time );

                camera.lookAt( scene.position );

                for ( var i = 0, l = levels.length; i < l; i ++ ) {

                    mesh = levels[ i ];
                    mesh.position.x = Math.sin( time * 4 ) * i * i * 0.005;
                    mesh.position.z = Math.cos( time * 6 ) * i * i * 0.005;

                }

                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_lightmap.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_normalmap.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_normalmap2.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_shaders.html 

()=>{

            var SCREEN_WIDTH = window.innerWidth;
            var SCREEN_HEIGHT = window.innerHeight;
            var FLOOR = -250;

            var container, stats;

            var camera, scene, canvasRenderer, webglRenderer;

            var mesh, zmesh, lightMesh, geometry;

            var directionalLight, pointLight;

            var mouseX = 0, mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var render_canvas = false, render_gl = true;
            var has_gl = false;

            var bcanvas = document.getElementById( "rcanvas" );
            var bwebgl = document.getElementById( "rwebgl" );

            init();
            animate();

            render_canvas = !has_gl;
            bwebgl.style.display = has_gl ? "inline" : "none";
            bcanvas.className = render_canvas ? "button" : "button inactive";

            function addMesh( geometry, scale, x, y, z, rx, ry, rz, material ) {

                mesh = new THREE.Mesh( geometry, material );

                mesh.scale.set( scale, scale, scale );
                mesh.position.set( x, y, z );
                mesh.rotation.set( rx, ry, rz );

                scene.add( mesh );

            }

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 100000 );
                camera.position.z = 1000;

                scene = new THREE.Scene();

                // LIGHTS

                var ambient = new THREE.AmbientLight( 0x101010 );
                scene.add( ambient );

                directionalLight = new THREE.DirectionalLight( 0xffffff );
                directionalLight.position.set( 1, 1, 2 ).normalize();
                scene.add( directionalLight );

                pointLight = new THREE.PointLight( 0xffffff );
                scene.add( pointLight );

                // light representation

                var sphere = new THREE.SphereGeometry( 100, 16, 8 );
                lightMesh = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) );
                lightMesh.scale.set( 0.05, 0.05, 0.05 );
                lightMesh.position = pointLight.position;
                scene.add( lightMesh );

                // material samples

                sphere = new THREE.SphereGeometry( 100, 32, 32 );

                var y1 = 0, y2 = - 200;

                addMesh( sphere, 1, -600, y1, 0, 0,0,0, new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x000000, specular: 0x555555, shininess: 30 } ) );
                addMesh( sphere, 1, -600, y2, 0, 0,0,0, new THREE.MeshLambertMaterial( { color: 0x050505 } ) );

                addMesh( sphere, 1, -400, y1, 0, 0,0,0, new THREE.MeshPhongMaterial( { ambient: 0x000000, color: 0xffffff, specular: 0x555555, shininess: 30 } ) );
                addMesh( sphere, 1, -400, y2, 0, 0,0,0, new THREE.MeshLambertMaterial( { color: 0xffffff } ) );

                addMesh( sphere, 1, -200, y1, 0, 0,0,0, new THREE.MeshPhongMaterial( { ambient: 0x000000, color: 0xff5500, specular: 0x555555, shininess: 10 } ) );
                addMesh( sphere, 1, -200, y2, 0, 0,0,0, new THREE.MeshLambertMaterial( { color: 0xff5500 } ) );

                addMesh( sphere, 1,    0, y1, 0, 0,0,0, new THREE.MeshPhongMaterial( { ambient: 0x000000, color: 0xffaa00, specular: 0x555555, shininess: 30 } ) );
                addMesh( sphere, 1,    0, y2, 0, 0,0,0, new THREE.MeshLambertMaterial( { color: 0xffaa00 } ) );

                addMesh( sphere, 1,  200, y1, 0, 0,0,0, new THREE.MeshPhongMaterial( { ambient: 0x000000, color: 0x55ff00, specular: 0x555555, shininess: 30 } ) );
                addMesh( sphere, 1,  200, y2, 0, 0,0,0, new THREE.MeshLambertMaterial( { color: 0x55ff00 } ) );

                addMesh( sphere, 1,  400, y1, 0, 0,0,0, new THREE.MeshPhongMaterial( { ambient: 0x000000, color: 0x0055ff, specular: 0x555555, shininess: 30 } ) );
                addMesh( sphere, 1,  400, y2, 0, 0,0,0, new THREE.MeshLambertMaterial( { color: 0x0055ff } ) );

                addMesh( sphere, 1,  600, y1, 0, 0,0,0, new THREE.MeshPhongMaterial( { ambient: 0x000000, color: 0x5500ff, specular: 0x555555, shininess: 30 } ) );
                addMesh( sphere, 1,  600, y2, 0, 0,0,0, new THREE.MeshLambertMaterial( { color: 0x5500ff } ) );

                addToruses( new THREE.TorusGeometry( 100, 20, 32, 32 ) );

                //

                if ( render_gl ) {

                    try {

                        webglRenderer = new THREE.WebGLRenderer();
                        webglRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                        webglRenderer.domElement.style.position = "relative";
                        container.appendChild( webglRenderer.domElement );
                        has_gl = true;

                    } catch (e) {

                    }

                }

                canvasRenderer = new THREE.CanvasRenderer();
                canvasRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                container.appendChild( canvasRenderer.domElement );

                //

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.zIndex = 100;
                container.appendChild( stats.domElement );

                bcanvas.addEventListener("click", toggleCanvas, false);
                bwebgl.addEventListener("click", toggleWebGL, false);

                document.addEventListener('mousemove', onDocumentMouseMove, false);

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                if ( webglRenderer ) webglRenderer.setSize( window.innerWidth, window.innerHeight );
                if ( canvasRenderer ) canvasRenderer.setSize( window.innerWidth, window.innerHeight );

            }

            function addToruses( geometry ) {

                var s = 0.85, t = s + 100, y = 200, rx = 0;

                addMesh( geometry, s, -6*t, y, 0, rx,0,0, new THREE.MeshPhongMaterial( { ambient: 0x000000, color: 0x000000, specular: 0x333333, shininess: 10 } ) );
                addMesh( geometry, s, -4*t, y, 0, rx,0,0, new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x888888, specular: 0x333333, shininess: 10 } ) );
                addMesh( geometry, s, -2*t, y, 0, rx,0,0, new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x030303, specular: 0xff5500, shininess: 10 } ) );
                addMesh( geometry, s,    0, y, 0, rx,0,0, new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x030303, specular: 0xffaa00, shininess: 10 } ) );
                addMesh( geometry, s,  2*t, y, 0, rx,0,0, new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x030303, specular: 0x55ff00, shininess: 10 } ) );
                addMesh( geometry, s,  4*t, y, 0, rx,0,0, new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x030303, specular: 0x0055ff, shininess: 10 } ) );
                addMesh( geometry, s,  6*t, y, 0, rx,0,0, new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x030303, specular: 0x5500ff, shininess: 10 } ) );

            }


            function onDocumentMouseMove(event) {

                mouseX = ( event.clientX - windowHalfX );
                mouseY = ( event.clientY - windowHalfY );

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var timer = -0.0002 * Date.now();

                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY - camera.position.y ) * .05;

                camera.lookAt( scene.position );

                lightMesh.position.x = 700 * Math.cos( timer );
                lightMesh.position.z = 700 * Math.sin( timer );

                if ( render_canvas ) canvasRenderer.render( scene, camera );
                if ( render_gl && has_gl ) webglRenderer.render( scene, camera );

            }

            function toggleCanvas() {

                render_canvas = !render_canvas;
                bcanvas.className = render_canvas ? "button" : "button inactive";

                render_gl = !render_canvas;
                bwebgl.className = render_gl ? "button" : "button inactive";

                if( has_gl )
                    webglRenderer.domElement.style.display = render_gl ? "block" : "none";

                canvasRenderer.domElement.style.display = render_canvas ? "block" : "none";

            }

            function toggleWebGL() {

                render_gl = !render_gl;
                bwebgl.className = render_gl ? "button" : "button inactive";

                render_canvas = !render_gl;
                bcanvas.className = render_canvas ? "button" : "button inactive";

                if( has_gl )
                    webglRenderer.domElement.style.display = render_gl ? "block" : "none";

                canvasRenderer.domElement.style.display = render_canvas ? "block" : "none";

            }
};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_shaders_fresnel.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_skin.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_texture_anisotropy.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_texture_compressed.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_texture_filters.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_texture_manualmipmap.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_video.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_materials_wireframe.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_morphnormals.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_morphtargets.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_morphtargets_horse.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_morphtargets_md2.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_morphtargets_md2_control.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_multiple_canvases_circle.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_multiple_canvases_complex.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_multiple_canvases_grid.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_multiple_views.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_panorama_equirectangular.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_particles_billboards.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_particles_billboards_colors.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_particles_dynamic.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_particles_random.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_particles_shapes.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_particles_sprites.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_performance.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_performance_doublesided.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_performance_static.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_postprocessing.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_postprocessing2.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_postprocessing_advanced.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_postprocessing_dof.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_postprocessing_godrays.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_ribbons.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var container, stats;
            var camera, scene, renderer, ribbon, geometry, geometry2, ribbons = [],
                parameters, i, i2, h, color, x, y, z, z2, s, n, n2, nribbons, grid;

            var mouseX = 0, mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var postprocessing = { enabled  : true };

            var composer;

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 3000 );
                camera.position.z = 1200;

                scene = new THREE.Scene();
                scene.fog = new THREE.FogExp2( 0x000000, 0.0016 );

                geometry = new THREE.Geometry();
                geometry2 = new THREE.Geometry();

                n = 1000;
                n2 = 2 * n;

                for ( i = -n; i < n; i++ ) {

                    i2 = i + n;

                    x = i * 1.175;
                    y = ( i2 % 2 ) * 5;

                    if ( i2 % 2 )  {

                        z = 10 * Math.sin( i2 * 0.3 ) * Math.cos( i2 * 0.1 );

                    }

                    geometry.vertices.push( new THREE.Vector3( x, y, z ) );
                    geometry2.vertices.push( new THREE.Vector3( x, y, z ) );

                    h = i2 % 2 ? 1 : 0.15;
                    if( i2 % 4 <= 2 ) h -= 0.15;

                    color = new THREE.Color( 0xffffff );
                    color.setHSL( 0.1, 0, h );
                    geometry.colors.push( color );
                    geometry2.colors.push( color );

                }

                //

                renderer = new THREE.WebGLRenderer( { antialias: false } );
                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.autoClear = false;
                renderer.setClearColor( scene.fog.color, 1 );

                container.appendChild( renderer.domElement );

                //

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                //

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );

                //

                var renderModel = new THREE.RenderPass( scene, camera );
                var effectBloom = new THREE.BloomPass( 1.0 );
                var effectCopy = new THREE.ShaderPass( THREE.CopyShader );

                effectCopy.renderToScreen = true;

                composer = new THREE.EffectComposer( renderer );

                composer.addPass( renderModel );
                composer.addPass( effectBloom );
                composer.addPass( effectCopy );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

                composer.reset();

            }

            function onDocumentMouseMove( event ) {

                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;

            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length === 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    mouseY = event.touches[ 0 ].pageY - windowHalfY;

                }

            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length === 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    mouseY = event.touches[ 0 ].pageY - windowHalfY;

                }

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var time = Date.now() * 0.00005;

                camera.position.x += ( mouseX - camera.position.x ) * 0.036;
                camera.position.y += ( - mouseY - camera.position.y ) * 0.036;

                camera.lookAt( scene.position );

                for ( i = -n; i < n; i ++ ) {

                    i2 = i + n;

                    z  =  10 * Math.sin( i2 * 0.1 + time*30 );
                    z2 =  20 * Math.cos( Math.sin( i2 * 0.1 + time * 20 ) );

                    geometry.vertices[ i2 ].z = z;
                    geometry2.vertices[ i2 ].z = z2;

                }

                geometry.verticesNeedUpdate = true;
                geometry2.verticesNeedUpdate = true;

                for ( i = 0; i < nribbons; i++ ) {

                    h = ( 360 * ( i / nribbons + time ) % 360 ) / 360;
                    ribbons[ i ].material.color.setHSL( h, ( i % 20 / 20 ) * 0.3 + 0.7, 0.6 );

                }

                renderer.clear();
                composer.render( 0.1 );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_rtt.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_sandbox.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_shader.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var container, stats;

            var camera, scene, renderer;

            var uniforms, material, mesh;

            var mouseX = 0, mouseY = 0,
            lat = 0, lon = 0, phy = 0, theta = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            init();
            animate();

            function init() {

                container = document.getElementById( 'container' );

                camera = new THREE.Camera();
                camera.position.z = 1;

                scene = new THREE.Scene();

                uniforms = {
                    time: { type: "f", value: 1.0 },
                    resolution: { type: "v2", value: new THREE.Vector2() }
                };

                material = new THREE.ShaderMaterial( {

                    uniforms: uniforms,
                    vertexShader: document.getElementById( 'vertexShader' ).textContent,
                    fragmentShader: document.getElementById( 'fragmentShader' ).textContent

                } );

                mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), material );
                scene.add( mesh );

                renderer = new THREE.WebGLRenderer();
                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                onWindowResize();

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize( event? ) {

                uniforms.resolution.value.x = window.innerWidth;
                uniforms.resolution.value.y = window.innerHeight;
                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                uniforms.time.value += 0.05;

                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_shader2.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var container, stats;

            var start_time;

            var camera, scene, renderer;

            var uniforms1, uniforms2, material1, material2, mesh, meshes = [];

            var mouseX = 0, mouseY = 0,
            lat = 0, lon = 0, phy = 0, theta = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var clock = new THREE.Clock();

            init();
            animate();

            function init() {

                container = document.getElementById( 'container' );

                camera = new THREE.PerspectiveCamera( 40, windowHalfX / windowHalfY, 1, 3000 );
                camera.position.z = 4;

                scene = new THREE.Scene();

                start_time = Date.now();

                uniforms1 = {
                    time: { type: "f", value: 1.0 },
                    resolution: { type: "v2", value: new THREE.Vector2() }
                };

                uniforms2 = {
                    time: { type: "f", value: 1.0 },
                    resolution: { type: "v2", value: new THREE.Vector2() },
                    texture: { type: "t", value: THREE.ImageUtils.loadTexture( "textures/disturb.jpg" ) }
                };

                uniforms2.texture.value.wrapS = uniforms2.texture.value.wrapT = THREE.RepeatWrapping;

                var size = 0.75, mlib = [],
                    params = [ [ 'fragment_shader1', uniforms1 ],  [ 'fragment_shader2', uniforms2 ], [ 'fragment_shader3', uniforms1 ], [ 'fragment_shader4', uniforms1 ] ];

                for( var i = 0; i < params.length; i++ ) {

                    var material = new THREE.ShaderMaterial( {

                        uniforms: params[ i ][ 1 ],
                        vertexShader: document.getElementById( 'vertexShader' ).textContent,
                        fragmentShader: document.getElementById( params[ i ][ 0 ] ).textContent

                        } );

                    mlib[ i ] = material;

                    mesh = new THREE.Mesh( new THREE.CubeGeometry( size, size, size ), new THREE.MeshFaceMaterial( [ mlib[ i ], mlib[ i ], mlib[ i ], mlib[ i ], mlib[ i ], mlib[ i ] ] ) );
                    mesh.position.x = i - ( params.length - 1 ) / 2;
                    mesh.position.y = i % 2 - 0.5;
                    scene.add( mesh );

                    meshes[ i ] = mesh;

                }

                renderer = new THREE.WebGLRenderer();
                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );

                onWindowResize();

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize( event? ) {

                uniforms1.resolution.value.x = window.innerWidth;
                uniforms1.resolution.value.y = window.innerHeight;

                uniforms2.resolution.value.x = window.innerWidth;
                uniforms2.resolution.value.y = window.innerHeight;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var delta = clock.getDelta();

                uniforms1.time.value += delta * 5;
                uniforms2.time.value = clock.elapsedTime;

                for( var i = 0; i < meshes.length; ++ i ) {

                    meshes[ i ].rotation.y += delta * 0.5 * ( i % 2 ? 1 : -1 );
                    meshes[ i ].rotation.x += delta * 0.5 * ( i % 2 ? -1 : 1 );

                }

                renderer.render( scene, camera );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_shader_lava.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_shading_physical.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_shadowmap.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var SHADOW_MAP_WIDTH = 2048, SHADOW_MAP_HEIGHT = 1024;

            var MARGIN = 100;

            var SCREEN_WIDTH = window.innerWidth;
            var SCREEN_HEIGHT = window.innerHeight - 2 * MARGIN;
            var FLOOR = -250;

            var camera, controls, scene, renderer;
            var container, stats;

            var NEAR = 5, FAR = 3000;

            var sceneHUD, cameraOrtho, hudMaterial;

            var morph, morphs = [];

            var light;

            var clock = new THREE.Clock();

            init();
            animate();


            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                // SCENE CAMERA

                camera = new THREE.PerspectiveCamera( 23, SCREEN_WIDTH / SCREEN_HEIGHT, NEAR, FAR );
                camera.position.set( 700, 50, 1900 );

                controls = new THREE.FirstPersonControls( camera );

                controls.lookSpeed = 0.0125;
                controls.movementSpeed = 500;
                controls.noFly = false;
                controls.lookVertical = true;
                controls.constrainVertical = true;
                controls.verticalMin = 1.5;
                controls.verticalMax = 2.0;

                controls.lon = -110;

                // SCENE

                scene = new THREE.Scene();
                scene.fog = new THREE.Fog( 0x59472b, 1000, FAR );

                // LIGHTS

                var ambient = new THREE.AmbientLight( 0x444444 );
                scene.add( ambient );

                light = new THREE.SpotLight( 0xffffff, 1, 0, Math.PI, 1 );
                light.position.set( 0, 1500, 1000 );
                light.target.position.set( 0, 0, 0 );

                light.castShadow = true;

                light.shadowCameraNear = 700;
                light.shadowCameraFar = camera.far;
                light.shadowCameraFov = 50;

                //light.shadowCameraVisible = true;

                light.shadowBias = 0.0001;
                light.shadowDarkness = 0.5;

                light.shadowMapWidth = SHADOW_MAP_WIDTH;
                light.shadowMapHeight = SHADOW_MAP_HEIGHT;

                scene.add( light );

                createHUD();
                createScene();

                // RENDERER

                renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1, antialias: false } );
                renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                renderer.domElement.style.position = "relative";
                renderer.domElement.style.top = MARGIN + 'px';
                container.appendChild( renderer.domElement );

                renderer.setClearColor( scene.fog.color, 1 );
                renderer.autoClear = false;

                //

                renderer.shadowMapEnabled = true;
                renderer.shadowMapType = THREE.PCFShadowMap;

                // STATS

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.zIndex = 100;
                //container.appendChild( stats.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                SCREEN_WIDTH = window.innerWidth;
                SCREEN_HEIGHT = window.innerHeight - 2 * MARGIN;

                camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
                camera.updateProjectionMatrix();

                renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

                controls.handleResize();

            }

            function createHUD() {

                cameraOrtho = new THREE.OrthographicCamera( SCREEN_WIDTH / - 2, SCREEN_WIDTH / 2,  SCREEN_HEIGHT / 2, SCREEN_HEIGHT / - 2, -10, 1000 );
                cameraOrtho.position.z = 10;

                var shader = THREE.UnpackDepthRGBAShader;
                var uniforms = THREE.UniformsUtils.clone( shader.uniforms );

                hudMaterial = new THREE.ShaderMaterial( { vertexShader: shader.vertexShader, fragmentShader: shader.fragmentShader, uniforms: uniforms } );

                var hudGeo = new THREE.PlaneGeometry( SHADOW_MAP_WIDTH / 2, SHADOW_MAP_HEIGHT / 2 );
                var hudMesh = new THREE.Mesh( hudGeo, hudMaterial );
                hudMesh.position.x = ( SCREEN_WIDTH - SHADOW_MAP_WIDTH / 2 ) * -0.5;
                hudMesh.position.y = ( SCREEN_HEIGHT - SHADOW_MAP_HEIGHT / 2 ) * -0.5;
                hudMesh.rotation.x = Math.PI / 2;

                sceneHUD = new THREE.Scene();
                sceneHUD.add( hudMesh );

                cameraOrtho.lookAt( sceneHUD.position );

            }

            function createScene( ) {

                // GROUND

                var geometry = new THREE.PlaneGeometry( 100, 100 );
                var planeMaterial = new THREE.MeshPhongMaterial( { color: 0xffdd99 } );
                planeMaterial.ambient = planeMaterial.color;

                var ground = new THREE.Mesh( geometry, planeMaterial );

                ground.position.set( 0, FLOOR, 0 );
                ground.rotation.x = - Math.PI / 2;
                ground.scale.set( 100, 100, 100 );

                ground.castShadow = false;
                ground.receiveShadow = true;

                scene.add( ground );

                // TEXT

                var textGeo = new THREE.TextGeometry( "THREE.JS", {

                    size: 200,
                    height: 50,
                    curveSegments: 12,

                    font: "helvetiker",
                    weight: "bold",
                    style: "normal",

                    bevelThickness: 2,
                    bevelSize: 5,
                    bevelEnabled: true

                });

                textGeo.computeBoundingBox();
                var centerOffset = -0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

                var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0xffffff, ambient: 0xaa0000 } );

                var mesh = new THREE.Mesh( textGeo, textMaterial );
                mesh.position.x = centerOffset;
                mesh.position.y = FLOOR + 67;

                mesh.castShadow = true;
                mesh.receiveShadow = true;

                scene.add( mesh );

                // CUBES

                var mesh = new THREE.Mesh( new THREE.CubeGeometry( 1500, 220, 150 ), planeMaterial );

                mesh.position.y = FLOOR - 50;
                mesh.position.z = 20;

                mesh.castShadow = true;
                mesh.receiveShadow = true;

                scene.add( mesh );

                var mesh = new THREE.Mesh( new THREE.CubeGeometry( 1600, 170, 250 ), planeMaterial );

                mesh.position.y = FLOOR - 50;
                mesh.position.z = 20;

                mesh.castShadow = true;
                mesh.receiveShadow = true;

                scene.add( mesh );

                // MORPHS

                function addMorph( geometry, speed, duration, x, y, z, fudgeColor ) {

                    var material = new THREE.MeshLambertMaterial( { color: 0xffaa55, morphTargets: true, vertexColors: THREE.FaceColors } );

                    if ( fudgeColor ) {

                        material.color.offsetHSL( 0, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25 );
                        material.ambient = material.color;

                    }

                    var meshAnim = new THREE.MorphAnimMesh( geometry, material );

                    (<any>meshAnim).speed = speed;
                    meshAnim.duration = duration;
                    meshAnim.time = 600 * Math.random();

                    meshAnim.position.set( x, y, z );
                    meshAnim.rotation.y = Math.PI/2;

                    meshAnim.castShadow = true;
                    meshAnim.receiveShadow = true;

                    scene.add( meshAnim );

                    morphs.push( meshAnim );

                }

                function morphColorsToFaceColors( geometry ) {

                    if ( geometry.morphColors && geometry.morphColors.length ) {

                        var colorMap = geometry.morphColors[ 0 ];

                        for ( var i = 0; i < colorMap.colors.length; i ++ ) {

                            geometry.faces[ i ].color = colorMap.colors[ i ];

                        }

                    }

                }

                var loader = new THREE.JSONLoader();

                loader.load( "models/animated/horse.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );

                    addMorph( geometry, 550, 1000, 100 - Math.random() * 1000, FLOOR, 300, true );
                    addMorph( geometry, 550, 1000, 100 - Math.random() * 1000, FLOOR, 450, true );
                    addMorph( geometry, 550, 1000, 100 - Math.random() * 1000, FLOOR, 600, true );

                    addMorph( geometry, 550, 1000, 100 - Math.random() * 1000, FLOOR, -300, true );
                    addMorph( geometry, 550, 1000, 100 - Math.random() * 1000, FLOOR, -450, true );
                    addMorph( geometry, 550, 1000, 100 - Math.random() * 1000, FLOOR, -600, true );

                } );

                /*
                loader.load( "obj/morphs/fox.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 200, 1000, 100 - Math.random() * 500, FLOOR - 5, 600 );

                } );

                loader.load( "obj/morphs/shdw3walk.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 40, 2000, -500, FLOOR + 60, 245 );

                } );

                loader.load( "obj/morphs/flamingo.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 500, 1000, 500 - Math.random() * 500, FLOOR + 350, 40 );

                } );

                loader.load( "obj/morphs/stork.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 350, 1000, 500 - Math.random() * 500, FLOOR + 350, 340 );

                } );

                loader.load( "obj/morphs/mountainlion.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 400, 1000, 500 - Math.random() * 500, FLOOR - 5, 700 );

                } );

                loader.load( "obj/morphs/bearBrown.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 300, 2500, -500, FLOOR - 5, -750 );

                } );

                loader.load( "obj/morphs/parrot.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 450, 500, 500 - Math.random() * 500, FLOOR + 300, 700 );

                } );
                */

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var delta = clock.getDelta();

                for ( var i = 0; i < morphs.length; i ++ ) {

                    morph = morphs[ i ];

                    morph.updateAnimation( 1000 * delta );

                    morph.position.x += morph.speed * delta;

                    if ( morph.position.x  > 2000 )  {

                        morph.position.x = -1000 - Math.random() * 500;

                    }

                }

                controls.update( delta );

                renderer.clear();
                renderer.render( scene, camera );

                // Render debug HUD with shadow map

                //hudMaterial.uniforms.tDiffuse.texture = light.shadowMap;
                //renderer.render( sceneHUD, cameraOrtho );

            }
};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_shadowmap_performance.html 

()=>{

            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var SHADOW_MAP_WIDTH = 2048, SHADOW_MAP_HEIGHT = 1024;

            var MARGIN = 100;

            var SCREEN_WIDTH = window.innerWidth;
            var SCREEN_HEIGHT = window.innerHeight - 2 * MARGIN;
            var FLOOR = -250;

            var camera, controls, scene, renderer;
            var container, stats;

            var NEAR = 5, FAR = 3000;

            var sceneHUD, cameraOrtho, hudMaterial;

            var morph, morphs = [];

            var light;

            var clock = new THREE.Clock();

            init();
            animate();


            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                // SCENE CAMERA

                camera = new THREE.PerspectiveCamera( 23, SCREEN_WIDTH / SCREEN_HEIGHT, NEAR, FAR );
                camera.position.set( 700, 50, 1900 );

                controls = new THREE.FirstPersonControls( camera );

                controls.lookSpeed = 0.0125;
                controls.movementSpeed = 500;
                controls.noFly = false;
                controls.lookVertical = true;
                controls.constrainVertical = true;
                controls.verticalMin = 1.5;
                controls.verticalMax = 2.0;

                controls.lon = -110;

                // SCENE

                scene = new THREE.Scene();
                scene.fog = new THREE.Fog( 0x59472b, 1000, FAR );

                // LIGHTS

                var ambient = new THREE.AmbientLight( 0x444444 );
                scene.add( ambient );

                light = new THREE.SpotLight( 0xffffff, 1, 0, Math.PI, 1 );
                light.position.set( 0, 1500, 1000 );
                light.target.position.set( 0, 0, 0 );

                light.castShadow = true;

                light.shadowCameraNear = 700;
                light.shadowCameraFar = camera.far;
                light.shadowCameraFov = 50;

                //light.shadowCameraVisible = true;

                light.shadowBias = 0.0001;
                light.shadowDarkness = 0.5;

                light.shadowMapWidth = SHADOW_MAP_WIDTH;
                light.shadowMapHeight = SHADOW_MAP_HEIGHT;

                scene.add( light );

                createHUD();
                createScene();

                // RENDERER

                renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1, antialias: false } );
                renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                renderer.domElement.style.position = "relative";
                renderer.domElement.style.top = MARGIN + 'px';
                container.appendChild( renderer.domElement );

                renderer.setClearColor( scene.fog.color, 1 );
                renderer.autoClear = false;

                //

                renderer.shadowMapEnabled = true;
                renderer.shadowMapType = THREE.PCFSoftShadowMap;

                // STATS

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.zIndex = 100;
                container.appendChild( stats.domElement );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                SCREEN_WIDTH = window.innerWidth;
                SCREEN_HEIGHT = window.innerHeight - 2 * MARGIN;

                camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
                camera.updateProjectionMatrix();

                renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

                controls.handleResize();

            }

            function createHUD() {

                cameraOrtho = new THREE.OrthographicCamera( SCREEN_WIDTH / - 2, SCREEN_WIDTH / 2,  SCREEN_HEIGHT / 2, SCREEN_HEIGHT / - 2, -10, 1000 );
                cameraOrtho.position.z = 10;

                var shader = THREE.UnpackDepthRGBAShader;
                var uniforms = THREE.UniformsUtils.clone( shader.uniforms );

                hudMaterial = new THREE.ShaderMaterial( { vertexShader: shader.vertexShader, fragmentShader: shader.fragmentShader, uniforms: uniforms } );

                var hudGeo = new THREE.PlaneGeometry( SHADOW_MAP_WIDTH / 2, SHADOW_MAP_HEIGHT / 2 );
                var hudMesh = new THREE.Mesh( hudGeo, hudMaterial );
                hudMesh.position.x = ( SCREEN_WIDTH - SHADOW_MAP_WIDTH / 2 ) * -0.5;
                hudMesh.position.y = ( SCREEN_HEIGHT - SHADOW_MAP_HEIGHT / 2 ) * -0.5;
                hudMesh.rotation.x = Math.PI / 2;

                sceneHUD = new THREE.Scene();
                sceneHUD.add( hudMesh );

                cameraOrtho.lookAt( sceneHUD.position );

            }

            function createScene( ) {

                // GROUND

                var geometry = new THREE.PlaneGeometry( 100, 100 );
                var planeMaterial = new THREE.MeshPhongMaterial( { color: 0xffdd99 } );
                planeMaterial.ambient = planeMaterial.color;

                var ground = new THREE.Mesh( geometry, planeMaterial );

                ground.position.set( 0, FLOOR, 0 );
                ground.rotation.x = - Math.PI / 2;
                ground.scale.set( 100, 100, 100 );

                ground.castShadow = false;
                ground.receiveShadow = true;

                scene.add( ground );

                // TEXT

                var textGeo = new THREE.TextGeometry( "THREE.JS", {

                    size: 200,
                    height: 50,
                    curveSegments: 12,

                    font: "helvetiker",
                    weight: "bold",
                    style: "normal",

                    bevelThickness: 2,
                    bevelSize: 5,
                    bevelEnabled: true

                });

                textGeo.computeBoundingBox();
                var centerOffset = -0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

                var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0xffffff, ambient: 0xaa0000 } );

                var mesh = new THREE.Mesh( textGeo, textMaterial );
                mesh.position.x = centerOffset;
                mesh.position.y = FLOOR + 67;

                mesh.castShadow = true;
                mesh.receiveShadow = true;

                scene.add( mesh );

                // CUBES

                var mesh = new THREE.Mesh( new THREE.CubeGeometry( 1500, 220, 150 ), planeMaterial );

                mesh.position.y = FLOOR - 50;
                mesh.position.z = 20;

                mesh.castShadow = true;
                mesh.receiveShadow = true;

                scene.add( mesh );

                var mesh = new THREE.Mesh( new THREE.CubeGeometry( 1600, 170, 250 ), planeMaterial );

                mesh.position.y = FLOOR - 50;
                mesh.position.z = 20;

                mesh.castShadow = true;
                mesh.receiveShadow = true;

                scene.add( mesh );

                // MORPHS

                function addMorph( geometry, speed, duration, x, y, z, fudgeColor ) {

                    var material = new THREE.MeshLambertMaterial( { color: 0xffaa55, morphTargets: true, vertexColors: THREE.FaceColors } );

                    if ( fudgeColor ) {

                        material.color.offsetHSL( 0, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25 );
                        material.ambient = material.color;

                    }

                    var meshAnim = new THREE.MorphAnimMesh( geometry, material );

                    (<any>meshAnim).speed = speed;
                    meshAnim.duration = duration;
                    meshAnim.time = 600 * Math.random();

                    meshAnim.position.set( x, y, z );
                    meshAnim.rotation.y = Math.PI/2;

                    meshAnim.castShadow = true;
                    meshAnim.receiveShadow = true;

                    scene.add( meshAnim );

                    morphs.push( meshAnim );

                }

                function morphColorsToFaceColors( geometry ) {

                    if ( geometry.morphColors && geometry.morphColors.length ) {

                        var colorMap = geometry.morphColors[ 0 ];

                        for ( var i = 0; i < colorMap.colors.length; i ++ ) {

                            geometry.faces[ i ].color = colorMap.colors[ i ];

                        }

                    }

                }

                var loader = new THREE.JSONLoader();

                loader.load( "models/animated/horse.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );


                    var i = -600;
                    while (i < 601){
                        addMorph( geometry, 550, 1000, 100 - Math.random() * 3000, FLOOR, i, true );
                        i += 2;
                    }

                } );

                /*
                loader.load( "obj/morphs/fox.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 200, 1000, 100 - Math.random() * 500, FLOOR - 5, 600 );

                } );

                loader.load( "obj/morphs/shdw3walk.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 40, 2000, -500, FLOOR + 60, 245 );

                } );

                loader.load( "obj/morphs/flamingo.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 500, 1000, 500 - Math.random() * 500, FLOOR + 350, 40 );

                } );

                loader.load( "obj/morphs/stork.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 350, 1000, 500 - Math.random() * 500, FLOOR + 350, 340 );

                } );

                loader.load( "obj/morphs/mountainlion.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 400, 1000, 500 - Math.random() * 500, FLOOR - 5, 700 );

                } );

                loader.load( "obj/morphs/bearBrown.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 300, 2500, -500, FLOOR - 5, -750 );

                } );

                loader.load( "obj/morphs/parrot.js", function( geometry ) {

                    morphColorsToFaceColors( geometry );
                    addMorph( geometry, 450, 500, 500 - Math.random() * 500, FLOOR + 300, 700 );

                } );
                */

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var delta = clock.getDelta();

                for ( var i = 0; i < morphs.length; i ++ ) {

                    morph = morphs[ i ];

                    morph.updateAnimation( 1000 * delta );

                    morph.position.x += morph.speed * delta;

                    if ( morph.position.x  > 2000 )  {

                        morph.position.x = -1000 - Math.random() * 500;

                    }

                }

                controls.update( delta );

                renderer.clear();
                renderer.render( scene, camera );

                // Render debug HUD with shadow map

                //hudMaterial.uniforms.tDiffuse.texture = light.shadowMap;
                //renderer.render( sceneHUD, cameraOrtho );

            }

};

// https://github.com/mrdoob/three.js/tree/master/examples/webgl_sprites.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_terrain_dynamic.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_test_memory.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_test_memory2.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgl_trails.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgldeferred_animation.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgldeferred_arealights.html 
// https://github.com/mrdoob/three.js/tree/master/examples/webgldeferred_pointlights.html 