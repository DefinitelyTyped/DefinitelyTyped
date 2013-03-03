/// <reference path="three.d.ts" />
/// <reference path="../qunit/qunit.d.ts" />

// https://github.com/mrdoob/three.js/tree/master/test/unit/math
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
    var eulerAngles = new THREE.Vector3( 0.1, -0.3, 0.25 );



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


    test( "setFromEuler/setEulerFromQuaternion", function() {

        var angles = [ new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( 0, 0, 1 ) ];

        // ensure euler conversion to/from Quaternion matches.
        for( var i = 0; i < orders.length; i ++ ) {
            for( var j = 0; j < angles.length; j ++ ) {
                var eulers2 = new THREE.Vector3().setEulerFromQuaternion( new THREE.Quaternion().setFromEuler( angles[j], orders[i] ), orders[i] );

                ok( eulers2.distanceTo( angles[j] ) < 0.001, "Passed!" );
            }
        }

    });

    test( "setFromEuler/setFromRotationMatrix", function() {

        // ensure euler conversion for Quaternion matches that of Matrix4
        for( var i = 0; i < orders.length; i ++ ) {
            var q = new THREE.Quaternion().setFromEuler( eulerAngles, orders[i] );
            var m = new THREE.Matrix4().setRotationFromEuler( eulerAngles, orders[i] );
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

        var q1 = new THREE.Quaternion().setFromEuler( angles[0], "XYZ" );
        var q2 = new THREE.Quaternion().setFromEuler( angles[1], "XYZ" );
        var q3 = new THREE.Quaternion().setFromEuler( angles[2], "XYZ" );

        var q = new THREE.Quaternion().multiplyQuaternions( q1, q2 ).multiply( q3 );

        var m1 = new THREE.Matrix4().setRotationFromEuler( angles[0], "XYZ" );
        var m2 = new THREE.Matrix4().setRotationFromEuler( angles[1], "XYZ" );
        var m3 = new THREE.Matrix4().setRotationFromEuler( angles[2], "XYZ" );

        var m = new THREE.Matrix4().multiplyMatrices( m1, m2 ).multiply( m3 );

        var qFromM = new THREE.Quaternion().setFromRotationMatrix( m );

        ok( qSub( q, qFromM ).length() < 0.001, "Passed!" );
    });

    test( "multiplyVector3", function() {

        var angles = [ new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( 0, 0, 1 ) ];

        // ensure euler conversion for Quaternion matches that of Matrix4
        for( var i = 0; i < orders.length; i ++ ) {
            for( var j = 0; j < angles.length; j ++ ) {
                var q = new THREE.Quaternion().setFromEuler( angles[j], orders[i] );
                var m = new THREE.Matrix4().setRotationFromEuler( angles[j], orders[i] );

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
        m.rotateByAxis( new THREE.Vector3( 0, 0, 1 ), Math.PI );
        ok( a.clone().applyMatrix4( m ).equals( a ), "Passed!" );

        m.identity().rotateX( Math.PI );
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
}

interface CSS3Properties{
    WebkitFilter: string;
}

interface HTMLDocument{
    pointerLockElement: any;
    mozPointerLockElement: any;
    webkitPointerLockElement: any;
    fullscreenElement: any;
    mozFullscreenElement: any;
    mozFullScreenElement: any;
    webkitFullscreenElement: any;
}
interface HTMLElement{
    requestPointerLock: any;
    mozRequestPointerLock: any;
    webkitRequestPointerLock: any;
    requestFullScreen: any;
    requestFullscreen: any;
    mozRequestFullScreen: any;
    mozRequestFullscreen: any;
    webkitRequestFullscreen: any;
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

        var geometry = new THREE.CubeGeometry( 50, 50, 50 );
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

            var geometry = shape.createPointsGeometry();
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
        particleMaterial = new THREE.ParticleCanvasMaterial( {

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

            var particle = new THREE.Particle( particleMaterial );
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

            var particle = new THREE.Particle( new THREE.ParticleCanvasMaterial( { color: Math.random() * 0x808080 + 0x808080, program: programStroke } ) );
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

        var geometry = new THREE.CubeGeometry( 50, 50, 50 );
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

        particle1 = new THREE.Particle( new THREE.ParticleCanvasMaterial( { color: 0xff0040, program: program } ) );
        particle1.scale.x = particle1.scale.y = particle1.scale.z = 0.5;
        scene.add( particle1 );

        particle2 = new THREE.Particle( new THREE.ParticleCanvasMaterial( { color: 0x0040ff, program: program } ) );
        particle2.scale.x = particle2.scale.y = particle2.scale.z = 0.5;
        scene.add( particle2 );

        particle3 = new THREE.Particle( new THREE.ParticleCanvasMaterial( { color: 0x80ff80, program: program } ) );
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

        particle1 = new THREE.Particle( new THREE.ParticleCanvasMaterial( { color: 0xff0040, program: program } ) );
        particle1.scale.x = particle1.scale.y = particle1.scale.z = 0.5;
        scene.add( particle1 );

        particle2 = new THREE.Particle( new THREE.ParticleCanvasMaterial( { color: 0x0040ff, program: program } ) );
        particle2.scale.x = particle2.scale.y = particle2.scale.z = 0.5;
        scene.add( particle2 );

        particle3 = new THREE.Particle( new THREE.ParticleCanvasMaterial( { color: 0x80ff80, program: program } ) );
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
        var material = new THREE.ParticleCanvasMaterial( {

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

            particle = new THREE.Particle( material );
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
        var material = new THREE.ParticleCanvasMaterial( {

            color: 0xffffff,
            program: function ( context ) {

                context.beginPath();
                context.arc( 0, 0, 1, 0, PI2, true );
                context.closePath();
                context.fill();

            }

        } );

        for ( var i = 0; i < 1000; i ++ ) {

            particle = new THREE.Particle( material );
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

        var geometry = new THREE.SphereGeometry( 100, 14, 7 );

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

        particleLight = new THREE.Particle( new THREE.ParticleCanvasMaterial( { color: 0xffffff, program: program } ) );
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
        var texture = new THREE.Texture( image, THREE.UVMapping )

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
        var materialParticle = new THREE.ParticleCanvasMaterial( {

            color: 0x0808080,
            program: function ( context ) {

                context.beginPath();
                context.arc( 0, 0, 1, 0, PI2, true );
                context.closePath();
                context.fill();

            }

        } );

        for ( var ix = 0; ix < amountx; ix++ ) {

            for ( var iy = 0; iy < amounty; iy++ ) {

                var particle = new THREE.Particle( materialParticle );
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

        var material = new THREE.ParticleBasicMaterial();

        for ( var ix = 0; ix < AMOUNTX; ix++ ) {

            for ( var iy = 0; iy < AMOUNTY; iy++ ) {

                particle = new THREE.Particle( material );
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

        for ( var i = 0; i < 1000; i++ ) {

            particle = new THREE.Particle( new THREE.ParticleCanvasMaterial( { color: Math.random() * 0x808008 + 0x808080, program: program } ) );
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

()=>{
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

        var material = new THREE.ParticleBasicMaterial( { map: new THREE.Texture( generateSprite() ), blending: THREE.AdditiveBlending } );

        for ( var i = 0; i < 1000; i++ ) {

            particle = new THREE.Particle( material );

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

        var canvas = document.createElement( 'canvas' );
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

        var particle = this instanceof THREE.Particle ? this : particle;
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

        var material = new THREE.ParticleBasicMaterial( { map: new THREE.Texture( generateSprite() ), blending: THREE.AdditiveBlending } );

        for ( var i = 0; i < 1000; i++ ) {

            particle = new THREE.Particle( material );

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

        var particle = this instanceof THREE.Particle ? this : particle;
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
        var material = new THREE.ParticleCanvasMaterial( {

            color: 0xffffff,
            program: function ( context ) {

                context.beginPath();
                context.arc( 0, 0, 1, 0, PI2, true );
                context.fill();

            }

        } );

        var i = 0;

        for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

            for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                particle = particles[ i ++ ] = new THREE.Particle( material );
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

                joint.matrix.copy( objMatrix );
                joint.rotation.setEulerFromRotationMatrix( joint.matrix, joint.eulerOrder );

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

            var object = new THREE.Object3D();
            object.position.x = ( item[ 3 ] * 160 ) - 1540;
            object.position.y = - ( item[ 4 ] * 200 ) + 1100;

            targets.table.push( object );

        }

        // sphere

        var vector = new THREE.Vector3();

        for ( var i = 0, l = objects.length; i < l; i ++ ) {

            var phi = Math.acos( -1 + ( 2 * i ) / l );
            var theta = Math.sqrt( l * Math.PI ) * phi;

            var object = new THREE.Object3D();

            object.position.x = 1000 * Math.cos( theta ) * Math.sin( phi );
            object.position.y = 1000 * Math.sin( theta ) * Math.sin( phi );
            object.position.z = 1000 * Math.cos( phi );

            vector.copy( object.position ).multiplyScalar( 2 );

            object.lookAt( vector );

            targets.sphere.push( object );

        }

        // helix

        var vector = new THREE.Vector3();

        for ( var i = 0, l = objects.length; i < l; i ++ ) {

            var phi = i * 0.175 + Math.PI;

            var object = new THREE.Object3D();

            object.position.x = 1100 * Math.sin( phi );
            object.position.y = - ( i * 8 ) + 450;
            object.position.z = 1100 * Math.cos( phi );

            vector.copy( object.position );
            vector.x *= 2;
            vector.z *= 2;

            object.lookAt( vector );

            targets.helix.push( object );

        }

        // grid

        for ( var i = 0; i < objects.length; i ++ ) {

            var object = new THREE.Object3D();

            object.position.x = ( ( i % 5 ) * 400 ) - 800;
            object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
            object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

            targets.grid.push( object );

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
            new THREE.ParticleBasicMaterial( { color: 0x555555, size: 2, sizeAttenuation: false } ),
            new THREE.ParticleBasicMaterial( { color: 0x555555, size: 1, sizeAttenuation: false } ),
            new THREE.ParticleBasicMaterial( { color: 0x333333, size: 2, sizeAttenuation: false } ),
            new THREE.ParticleBasicMaterial( { color: 0x3a3a3a, size: 1, sizeAttenuation: false } ),
            new THREE.ParticleBasicMaterial( { color: 0x1a1a1a, size: 2, sizeAttenuation: false } ),
            new THREE.ParticleBasicMaterial( { color: 0x1a1a1a, size: 1, sizeAttenuation: false } )
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

        var geometry = new THREE.CylinderGeometry( 0, 10, 100, 3 );
        geometry.applyMatrix( new THREE.Matrix4().setRotationFromEuler( new THREE.Vector3( Math.PI / 2, Math.PI, 0 ) ) );

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