declare function test(desc: string, body: () => void): void;
declare function ok(cond: any, desc?: string): void;
declare function deepEqual<T>(a: T, b: T, desc?: string): void;
declare function equal<T>(a: T, b: T, desc?: string): void;

// https://github.com/mrdoob/three.js/tree/master/test/unit/src/math

()=>{
    // -------------------------------------------- Constants
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

    // -------------------------------------------- Box2
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

    test( "setFromPoints", function() {
        var a = new THREE.Box2();

        a.setFromPoints( [ zero2, one2, two2 ] );
        ok( a.min.equals( zero2 ), "Passed!" );
        ok( a.max.equals( two2 ), "Passed!" );

        a.setFromPoints( [ one2 ] );
        ok( a.min.equals( one2 ), "Passed!" );
        ok( a.max.equals( one2 ), "Passed!" );

        a.setFromPoints( [] );
        ok( a.empty(), "Passed!" );
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
        var center = new THREE.Vector2();

        ok( a.getCenter(center).equals( zero2 ), "Passed!" );

        a = new THREE.Box2( zero2, one2 );
        var midpoint = one2.clone().multiplyScalar( 0.5 );
        ok( a.getCenter(center).equals( midpoint ), "Passed!" );
    });

    test( "size", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var size = new THREE.Vector2();

        ok( a.getSize(size).equals( zero2 ), "Passed!" );

        a = new THREE.Box2( zero2.clone(), one2.clone() );
        ok( a.getSize(size).equals( one2 ), "Passed!" );
    });

    test( "expandByPoint", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var size = new THREE.Vector2();

        a.expandByPoint( zero2 );
        ok( a.getSize(size).equals( zero2 ), "Passed!" );

        a.expandByPoint( one2 );
        ok( a.getSize(size).equals( one2 ), "Passed!" );

        a.expandByPoint( one2.clone().negate() );
        ok( a.getSize(size).equals( one2.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.getCenter(new THREE.Vector2()).equals( zero2 ), "Passed!" );
    });

    test( "expandByVector", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var size = new THREE.Vector2();

        a.expandByVector( zero2 );
        ok( a.getSize(size).equals( zero2 ), "Passed!" );

        a.expandByVector( one2 );
        ok( a.getSize(size).equals( one2.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.getCenter(new THREE.Vector2()).equals( zero2 ), "Passed!" );
    });

    test( "expandByScalar", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var size = new THREE.Vector2();

        a.expandByScalar( 0 );
        ok( a.getSize(size).equals( zero2 ), "Passed!" );

        a.expandByScalar( 1 );
        ok( a.getSize(size).equals( one2.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.getCenter(new THREE.Vector2()).equals( zero2 ), "Passed!" );
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
        var target = new THREE.Vector2();

        ok( a.clampPoint( new THREE.Vector2( 0, 0 ), target ).equals( new THREE.Vector2( 0, 0 ) ), "Passed!" );
        ok( a.clampPoint( new THREE.Vector2( 1, 1 ), target ).equals( new THREE.Vector2( 0, 0 ) ), "Passed!" );
        ok( a.clampPoint( new THREE.Vector2( -1, -1 ), target ).equals( new THREE.Vector2( 0, 0 ) ), "Passed!" );

        ok( b.clampPoint( new THREE.Vector2( 2, 2 ), target ).equals( new THREE.Vector2( 1, 1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector2( 1, 1 ), target ).equals( new THREE.Vector2( 1, 1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector2( 0, 0 ), target ).equals( new THREE.Vector2( 0, 0 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector2( -1, -1 ), target ).equals( new THREE.Vector2( -1, -1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector2( -2, -2 ), target ).equals( new THREE.Vector2( -1, -1 ) ), "Passed!" );
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

    test( "intersectsBox", function() {
        var a = new THREE.Box2( zero2.clone(), zero2.clone() );
        var b = new THREE.Box2( zero2.clone(), one2.clone() );
        var c = new THREE.Box2( one2.clone().negate(), one2.clone() );

        ok( a.intersectsBox( a ), "Passed!" );
        ok( a.intersectsBox( b ), "Passed!" );
        ok( a.intersectsBox( c ), "Passed!" );

        ok( b.intersectsBox( a ), "Passed!" );
        ok( c.intersectsBox( a ), "Passed!" );
        ok( b.intersectsBox( c ), "Passed!" );

        b.translate( new THREE.Vector2( 2, 2 ) );
        ok( ! a.intersectsBox( b ), "Passed!" );
        ok( ! b.intersectsBox( a ), "Passed!" );
        ok( ! b.intersectsBox( c ), "Passed!" );
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

    // -------------------------------------------- Box3
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

    test( "setFromPoints", function() {
        var a = new THREE.Box3();

        a.setFromPoints( [ zero3, one3, two3 ] );
        ok( a.min.equals( zero3 ), "Passed!" );
        ok( a.max.equals( two3 ), "Passed!" );

        a.setFromPoints( [ one3 ] );
        ok( a.min.equals( one3 ), "Passed!" );
        ok( a.max.equals( one3 ), "Passed!" );

        a.setFromPoints( [] );
        ok( a.empty(), "Passed!" );
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
        var center = new THREE.Vector3();

        ok( a.getCenter(center).equals( zero3 ), "Passed!" );

        a = new THREE.Box3( zero3.clone(), one3.clone() );
        var midpoint = one3.clone().multiplyScalar( 0.5 );
        ok( a.getCenter(center).equals( midpoint ), "Passed!" );
    });

    test( "size", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var size = new THREE.Vector3();

        ok( a.getSize(size).equals( zero3 ), "Passed!" );

        a = new THREE.Box3( zero3.clone(), one3.clone() );
        ok( a.getSize(size).equals( one3 ), "Passed!" );
    });

    test( "expandByPoint", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var size = new THREE.Vector3();

        a.expandByPoint( zero3 );
        ok( a.getSize(size).equals( zero3 ), "Passed!" );

        a.expandByPoint( one3 );
        ok( a.getSize(size).equals( one3 ), "Passed!" );

        a.expandByPoint( one3.clone().negate() );
        ok( a.getSize(size).equals( one3.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.getCenter(new THREE.Vector3()).equals( zero3 ), "Passed!" );
    });

    test( "expandByVector", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var size = new THREE.Vector3();

        a.expandByVector( zero3 );
        ok( a.getSize(size).equals( zero3 ), "Passed!" );

        a.expandByVector( one3 );
        ok( a.getSize(size).equals( one3.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.getCenter(new THREE.Vector3()).equals( zero3 ), "Passed!" );
    });

    test( "expandByScalar", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var size = new THREE.Vector3();

        a.expandByScalar( 0 );
        ok( a.getSize(size).equals( zero3 ), "Passed!" );

        a.expandByScalar( 1 );
        ok( a.getSize(size).equals( one3.clone().multiplyScalar( 2 ) ), "Passed!" );
        ok( a.getCenter(new THREE.Vector3()).equals( zero3 ), "Passed!" );
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
        var target = new THREE.Vector3();

        ok( a.clampPoint( new THREE.Vector3( 0, 0, 0 ), target ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );
        ok( a.clampPoint( new THREE.Vector3( 1, 1, 1 ), target ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );
        ok( a.clampPoint( new THREE.Vector3( -1, -1, -1 ), target ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        ok( b.clampPoint( new THREE.Vector3( 2, 2, 2 ), target ).equals( new THREE.Vector3( 1, 1, 1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector3( 1, 1, 1 ), target ).equals( new THREE.Vector3( 1, 1, 1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector3( 0, 0, 0 ), target ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector3( -1, -1, -1 ), target ).equals( new THREE.Vector3( -1, -1, -1 ) ), "Passed!" );
        ok( b.clampPoint( new THREE.Vector3( -2, -2, -2 ), target ).equals( new THREE.Vector3( -1, -1, -1 ) ), "Passed!" );
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

    test( "intersectsBox", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( zero3.clone(), one3.clone() );
        var c = new THREE.Box3( one3.clone().negate(), one3.clone() );

        ok( a.intersectsBox( a ), "Passed!" );
        ok( a.intersectsBox( b ), "Passed!" );
        ok( a.intersectsBox( c ), "Passed!" );

        ok( b.intersectsBox( a ), "Passed!" );
        ok( c.intersectsBox( a ), "Passed!" );
        ok( b.intersectsBox( c ), "Passed!" );

        b.translate( new THREE.Vector3( 2, 2, 2 ) );
        ok( ! a.intersectsBox( b ), "Passed!" );
        ok( ! b.intersectsBox( a ), "Passed!" );
        ok( ! b.intersectsBox( c ), "Passed!" );
    });

    test( "getBoundingSphere", function() {
        var a = new THREE.Box3( zero3.clone(), zero3.clone() );
        var b = new THREE.Box3( zero3.clone(), one3.clone() );
        var c = new THREE.Box3( one3.clone().negate(), one3.clone() );
        var target = new THREE.Sphere();

        ok( a.getBoundingSphere( target ).equals( new THREE.Sphere( zero3, 0 ) ), "Passed!" );
        ok( b.getBoundingSphere( target ).equals( new THREE.Sphere( one3.clone().multiplyScalar( 0.5 ), Math.sqrt( 3 ) * 0.5 ) ), "Passed!" );
        ok( c.getBoundingSphere( target ).equals( new THREE.Sphere( zero3, Math.sqrt( 12 ) * 0.5 ) ), "Passed!" );
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

    var compareBox = function ( a: THREE.Box3, b: THREE.Box3, threshold?: number ) {
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

    // -------------------------------------------- Color
    test( "constructor", function(){
        var c = new THREE.Color();
        ok( c.r, "Red: " + c.r );
        ok( c.g, "Green: " + c.g );
        ok( c.b, "Blue: " + c.b );
    });

    test( "rgb constructor", function(){
        var c = new THREE.Color( 1, 1, 1 );
        ok( c.r == 1, "Passed" );
        ok( c.g == 1, "Passed" );
        ok( c.b == 1, "Passed" );
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
        var c = new THREE.Color();
        c.setRGB(1, 0.2, 0.1);
        ok( c.r == 1, "Red: " + c.r );
        ok( c.g == 0.2, "Green: " + c.g );
        ok( c.b == 0.1, "Blue: " + c.b );
    });

    test( "copyGammaToLinear", function(){
        var c = new THREE.Color();
        var c2 = new THREE.Color();
        c2.setRGB(0.3, 0.5, 0.9);
        c.copyGammaToLinear(c2);
        ok( c.r == 0.09, "Red c: " + c.r + " Red c2: " + c2.r);
        ok( c.g == 0.25, "Green c: " + c.g + " Green c2: " + c2.g);
        ok( c.b == 0.81, "Blue c: " + c.b + " Blue c2: " + c2.b);
    });

    test( "copyLinearToGamma", function(){
        var c = new THREE.Color();
        var c2 = new THREE.Color();
        c2.setRGB(0.09, 0.25, 0.81);
        c.copyLinearToGamma(c2);
        ok( c.r == 0.3, "Red c: " + c.r + " Red c2: " + c2.r);
        ok( c.g == 0.5, "Green c: " + c.g + " Green c2: " + c2.g);
        ok( c.b == 0.9, "Blue c: " + c.b + " Blue c2: " + c2.b);
    });


    test( "convertGammaToLinear", function(){
        var c = new THREE.Color();
        c.setRGB(0.3, 0.5, 0.9);
        c.convertGammaToLinear();
        ok( c.r == 0.09, "Red: " + c.r );
        ok( c.g == 0.25, "Green: " + c.g );
        ok( c.b == 0.81, "Blue: " + c.b );
    });


    test( "convertLinearToGamma", function(){
        var c = new THREE.Color();
        c.setRGB(4, 9, 16);
        c.convertLinearToGamma();
        ok( c.r == 2, "Red: " + c.r );
        ok( c.g == 3, "Green: " + c.g );
        ok( c.b == 4, "Blue: " + c.b );
    });

    test("setWithNum", function(){
        var c = new THREE.Color();
        c.set(0xFF0000);
        ok( c.r == 1, "Red: " + c.r );
        ok( c.g === 0, "Green: " + c.g );
        ok( c.b === 0, "Blue: " + c.b );
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
        c.lerp(c2, 0.2);
        ok( c.r == 0.2, "Red: " + c.r );
        ok( c.g == 0.2, "Green: " + c.g );
        ok( c.b == 0.2, "Blue: " + c.b );

    });


    test( "setStyleRGBRed", function(){
        var c = new THREE.Color();
        c.setStyle('rgb(255,0,0)');
        ok( c.r == 1, "Red: " + c.r );
        ok( c.g === 0, "Green: " + c.g );
        ok( c.b === 0, "Blue: " + c.b );
    });

    test( "setStyleRGBRedWithSpaces", function(){
        var c = new THREE.Color();
        c.setStyle('rgb(255, 0, 0)');
        ok( c.r == 1, "Red: " + c.r );
        ok( c.g === 0, "Green: " + c.g );
        ok( c.b === 0, "Blue: " + c.b );
    });

    test( "setStyleRGBPercent", function(){
        var c = new THREE.Color();
        c.setStyle('rgb(100%,50%,10%)');
        ok( c.r == 1, "Red: " + c.r );
        ok( c.g == 0.5, "Green: " + c.g );
        ok( c.b == 0.1, "Blue: " + c.b );
    });

    test( "setStyleRGBPercentWithSpaces", function(){
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
        var hsl = c.getHSL( { h: 0, s: 0, l: 0 } );

        ok( hsl.h == 0.5, "hue: " + hsl.h );
        ok( hsl.s == 1.0, "saturation: " + hsl.s );
        ok( (Math.round(parseFloat(hsl.l.toString())*100)/100) == 0.75, "lightness: " + hsl.l );
    });

    test( "setHSL", function () {
        var c = new THREE.Color();
        c.setHSL(0.75, 1.0, 0.25);
        var hsl = c.getHSL( { h: 0, s: 0, l: 0 } );

        ok( hsl.h == 0.75, "hue: " + hsl.h );
        ok( hsl.s == 1.00, "saturation: " + hsl.s );
        ok( hsl.l == 0.25, "lightness: " + hsl.l );
    });

    // -------------------------------------------- Euler

    var eulerZero = new THREE.Euler( 0, 0, 0, "XYZ" );
    var eulerAxyz = new THREE.Euler( 1, 0, 0, "XYZ" );
    var eulerAzyx = new THREE.Euler( 0, 1, 0, "ZYX" );

    var matrixEquals4 = function( a: THREE.Matrix4, b: THREE.Matrix4 ) {
        var tolerance = 0.0001;
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

    var eulerEquals = function (a: THREE.Euler, b: THREE.Euler, tolerance?: number) {
        tolerance = tolerance || 0.0001;
        var diff = Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
        return (diff < tolerance);
    };


    var quatEquals = function (a: THREE.Quaternion, b: THREE.Quaternion, tolerance?: number) {
        tolerance = tolerance || 0.0001;
        var diff = Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z) + Math.abs(a.w - b.w);
        return (diff < tolerance);
    };


    test( "constructor/equals", function() {
        var a = new THREE.Euler();
        ok( a.equals( eulerZero ), "Passed!" );
        ok( ! a.equals( eulerAxyz ), "Passed!" );
        ok( ! a.equals( eulerAzyx ), "Passed!" );
    });

    test( "clone/copy/equals", function() {
        var a = eulerAxyz.clone();
        ok( a.equals( eulerAxyz ), "Passed!" );
        ok( ! a.equals( eulerZero ), "Passed!" );
        ok( ! a.equals( eulerAzyx ), "Passed!" );

        a.copy( eulerAzyx );
        ok( a.equals( eulerAzyx ), "Passed!" );
        ok( ! a.equals( eulerAxyz ), "Passed!" );
        ok( ! a.equals( eulerZero ), "Passed!" );

    });

    test("set/setFromVector3/toVector3", function () {
        var a = new THREE.Euler();

        a.set( 0, 1, 0, "ZYX" );
        ok( a.equals( eulerAzyx ), "Passed!" );
        ok( ! a.equals( eulerAxyz ), "Passed!" );
        ok(!a.equals(eulerZero), "Passed!");

        var vec = new THREE.Vector3(0, 1, 0);

        var b = new THREE.Euler().setFromVector3(vec, "ZYX");
        console.log(a, b);
        ok(a.equals(b), "Passed!");

        var c = b.toVector3();
        console.log(c, vec);
        ok(c.equals(vec), "Passed!");
    });

    test( "Quaternion.setFromEuler/Euler.fromQuaternion", function() {
        var testValues = [ eulerZero, eulerAxyz, eulerAzyx ];
        for( var i = 0; i < testValues.length; i ++ ) {
            var v = testValues[i];
            var q = new THREE.Quaternion().setFromEuler( v );

            var v2 = new THREE.Euler().setFromQuaternion( q, v.order );
            var q2 = new THREE.Quaternion().setFromEuler( v2 );
            ok(quatEquals(q, q2), "Passed!");
        }
    });


    test( "Matrix4.setFromEuler/Euler.fromRotationMatrix", function() {
        var testValues = [ eulerZero, eulerAxyz, eulerAzyx ];
        for( var i = 0; i < testValues.length; i ++ ) {
            var v = testValues[i];
            var m = new THREE.Matrix4().makeRotationFromEuler( v );

            var v2 = new THREE.Euler().setFromRotationMatrix( m, v.order );
            var m2 = new THREE.Matrix4().makeRotationFromEuler( v2 );
            ok( matrixEquals4( m, m2 ), "Passed!" );
        }
    });

    test( "reorder", function() {
        var testValues = [ eulerZero, eulerAxyz, eulerAzyx ];
        for( var i = 0; i < testValues.length; i ++ ) {
            var v = testValues[i];
            var q = new THREE.Quaternion().setFromEuler( v );

            v.reorder( 'YZX' );
            var q2 = new THREE.Quaternion().setFromEuler( v );
            ok(quatEquals(q, q2), "Passed!");

            v.reorder( 'ZXY' );
            var q3 = new THREE.Quaternion().setFromEuler( v );
            ok(quatEquals(q, q3), "Passed!");
        }
    });

    test("gimbalLocalQuat", function () {
        // known problematic quaternions
        var q1 = new THREE.Quaternion(0.5207769385244341, -0.4783214164122354, 0.520776938524434, 0.47832141641223547);
        var q2 = new THREE.Quaternion(0.11284905712620674, 0.6980437630368944, -0.11284905712620674, 0.6980437630368944);

        var eulerOrder = "ZYX";

        // create Euler directly from a Quaternion
        var eViaQ1 = new THREE.Euler().setFromQuaternion(q1, eulerOrder); // there is likely a bug here

        // create Euler from Quaternion via an intermediate Matrix4
        var mViaQ1 = new THREE.Matrix4().makeRotationFromQuaternion(q1);
        var eViaMViaQ1 = new THREE.Euler().setFromRotationMatrix(mViaQ1, eulerOrder);

        // the results here are different
        ok(eulerEquals(eViaQ1, eViaMViaQ1), "Passed!");  // this result is correct

    });

    // -------------------------------------------- Frustum

    var unit3 = new THREE.Vector3( 1, 0, 0 );

    var planeEquals = function ( a: THREE.Plane, b: THREE.Plane, tolerance: number ) {
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
        var m = new THREE.Matrix4().makePerspective( -1, 1, -1, 1, 1, 100 )
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
        var m = new THREE.Matrix4().makePerspective( -1, 1, -1, 1, 1, 100 )
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

    // -------------------------------------------- Line3

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
        var target = new THREE.Vector3();

        ok( a.at( -1, target ).distanceTo( new THREE.Vector3( 1, 1, 0 ) ) < 0.0001, "Passed!" );
        ok( a.at( 0, target ).distanceTo( one3.clone() ) < 0.0001, "Passed!" );
        ok( a.at( 1, target ).distanceTo( new THREE.Vector3( 1, 1, 2 ) ) < 0.0001, "Passed!" );
        ok( a.at( 2, target ).distanceTo( new THREE.Vector3( 1, 1, 3 ) ) < 0.0001, "Passed!" );
    });

    test( "closestPointToPoint/closestPointToPointParameter", function() {
        var a = new THREE.Line3( one3.clone(), new THREE.Vector3( 1, 1, 2 ) );
        var target = new THREE.Vector3();

        // nearby the ray
        ok( a.closestPointToPointParameter( zero3.clone(), true ) == 0, "Passed!" );
        var b1 = a.closestPointToPoint( zero3.clone(), true, target );
        ok( b1.distanceTo( new THREE.Vector3( 1, 1, 1 ) ) < 0.0001, "Passed!" );

        // nearby the ray
        ok( a.closestPointToPointParameter( zero3.clone(), false ) == -1, "Passed!" );
        var b2 = a.closestPointToPoint( zero3.clone(), false, target );
        ok( b2.distanceTo( new THREE.Vector3( 1, 1, 0 ) ) < 0.0001, "Passed!" );

        // nearby the ray
        ok( a.closestPointToPointParameter( new THREE.Vector3( 1, 1, 5 ), true ) == 1, "Passed!" );
        var b = a.closestPointToPoint( new THREE.Vector3( 1, 1, 5 ), true, target );
        ok( b.distanceTo( new THREE.Vector3( 1, 1, 2 ) ) < 0.0001, "Passed!" );

        // exactly on the ray
        ok( a.closestPointToPointParameter( one3.clone(), true ) == 0, "Passed!" );
        var c = a.closestPointToPoint( one3.clone(), true, target );
        ok( c.distanceTo( one3.clone() ) < 0.0001, "Passed!" );
    });

    // -------------------------------------------- Matrix3

    var matrixEquals3 = function( a: THREE.Matrix, b: THREE.Matrix, tolerance?: number ) {
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


    var toMatrix4 = function( m3: THREE.Matrix3 ) {
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

        var b = new THREE.Matrix3();
        b.set(0, 1, 2, 3, 4, 5, 6, 7, 8);
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
        var a = new THREE.Matrix3();
        a.set(0, 1, 2, 3, 4, 5, 6, 7, 8);
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
        var b = new THREE.Matrix3();
        b.set(0, 1, 2, 3, 4, 5, 6, 7, 8);
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
        var b = new THREE.Matrix3();
        b.set(0, 1, 2, 3, 4, 5, 6, 7, 8);
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
        var b = new THREE.Matrix3();
        b.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var c = new THREE.Matrix4();
        c.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

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

        b = new THREE.Matrix3();
        b.set(0, 1, 2, 3, 4, 5, 6, 7, 8);
        var c = b.clone().transpose();
        ok( ! matrixEquals3( b, c ), "Passed!" );
        c.transpose();
        ok( matrixEquals3( b, c ), "Passed!" );
    });

    test( "clone", function() {
        var a = new THREE.Matrix3();
        a.set(0, 1, 2, 3, 4, 5, 6, 7, 8);
        var b = a.clone();

        ok( matrixEquals3( a, b ), "Passed!" );

        // ensure that it is a true copy
        a.elements[0] = 2;
        ok( ! matrixEquals3( a, b ), "Passed!" );
    });

    // -------------------------------------------- Matrix4

    test( "constructor", function() {
        var a = new THREE.Matrix4();
        ok( a.determinant() == 1, "Passed!" );

        var b = new THREE.Matrix4();
        b.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
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
        var a = new THREE.Matrix4();
        a.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
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
        var b = new THREE.Matrix4();
        b.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
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
        var b = new THREE.Matrix4();
        b.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
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
        var b = new THREE.Matrix4().set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var c = new THREE.Matrix4().set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

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
            new THREE.Matrix4().makePerspective( -1, 1, -1, 1, 1, 1000 ),
            new THREE.Matrix4().makePerspective( -16, 16, -9, 9, 0.1, 10000 ),
            new THREE.Matrix4().makeTranslation( 1, 2, 3 )
        ];

        for( var i = 0, il = testMatrices.length; i < il; i ++ ) {
            var m = testMatrices[i];

            var mInverse = new THREE.Matrix4().getInverse( m );
            var mSelfInverse = m.clone();
            mSelfInverse.getInverse( mSelfInverse );


            // self-inverse should the same as inverse
            ok( matrixEquals4( mSelfInverse, mInverse ), "Passed!" );

            // the determinant of the inverse should be the reciprocal
            ok( Math.abs( m.determinant() * mInverse.determinant() - 1 ) < 0.0001, "Passed!" );

            var mProduct = new THREE.Matrix4().multiplyMatrices( m, mInverse );

            // the determinant of the identity matrix is 1
            ok( Math.abs( mProduct.determinant() - 1 ) < 0.0001, "Passed!" );
            ok( matrixEquals4( mProduct, identity ), "Passed!" );
        }
    });

    test("makeBasis/extractBasis", function () {
        var identityBasis = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)];
        var a = new THREE.Matrix4().makeBasis(identityBasis[0], identityBasis[1], identityBasis[2]);
        var identity = new THREE.Matrix4();
        ok(matrixEquals4(a, identity), "Passed!");

        var testBases = [[new THREE.Vector3(0, 1, 0), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, 1)]];
    	for (var i = 0; i < testBases.length; i++) {
            var testBasis = testBases[i];
            var b = new THREE.Matrix4().makeBasis(testBasis[0], testBasis[1], testBasis[2]);
            var outBasis = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
            b.extractBasis(outBasis[0], outBasis[1], outBasis[2]);
            // check what goes in, is what comes out.
            for (var j = 0; j < outBasis.length; j++) {
                console.log(outBasis[j], testBasis[j]);
                ok(outBasis[j].equals(testBasis[j]), "Passed!");
            }

            // get the basis out the hard war
            for (var j = 0; j < identityBasis.length; j++) {
                outBasis[j].copy(identityBasis[j]);
                outBasis[j].applyMatrix4(b);
            }
            // did the multiply method of basis extraction work?
            for (var j = 0; j < outBasis.length; j++) {
                ok(outBasis[j].equals(testBasis[j]), "Passed!");
            }
        }
    });

    test( "transpose", function() {
        var a = new THREE.Matrix4();
        var b = a.clone().transpose();
        ok( matrixEquals4( a, b ), "Passed!" );

        b = new THREE.Matrix4();
        b.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        var c = b.clone().transpose();
        ok( ! matrixEquals4( b, c ), "Passed!" );
        c.transpose();
        ok( matrixEquals4( b, c ), "Passed!" );
    });

    test( "clone", function() {
        var a = new THREE.Matrix4();
        a.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        var b = a.clone();

        ok( matrixEquals4( a, b ), "Passed!" );

        // ensure that it is a true copy
        a.elements[0] = 2;
        ok( ! matrixEquals4( a, b ), "Passed!" );
    });


    test( "compose/decompose", function() {
        var tValues = [
            new THREE.Vector3(),
            new THREE.Vector3( 3, 0, 0 ),
            new THREE.Vector3( 0, 4, 0 ),
            new THREE.Vector3( 0, 0, 5 ),
            new THREE.Vector3( -6, 0, 0 ),
            new THREE.Vector3( 0, -7, 0 ),
            new THREE.Vector3( 0, 0, -8 ),
            new THREE.Vector3( -2, 5, -9 ),
            new THREE.Vector3( -2, -5, -9 )
        ];

        var sValues = [
            new THREE.Vector3( 1, 1, 1 ),
            new THREE.Vector3( 2, 2, 2 ),
            new THREE.Vector3( 1, -1, 1 ),
            new THREE.Vector3( -1, 1, 1 ),
            new THREE.Vector3( 1, 1, -1 ),
            new THREE.Vector3( 2, -2, 1 ),
            new THREE.Vector3( -1, 2, -2 ),
            new THREE.Vector3( -1, -1, -1 ),
            new THREE.Vector3( -2, -2, -2 )
        ];

        var rValues = [
            new THREE.Quaternion(),
            new THREE.Quaternion().setFromEuler( new THREE.Euler( 1, 1, 0 ) ),
            new THREE.Quaternion().setFromEuler( new THREE.Euler( 1, -1, 1 ) ),
            new THREE.Quaternion( 0, 0.9238795292366128, 0, 0.38268342717215614 )
        ];


        for( var ti = 0; ti < tValues.length; ti ++ ) {
            for( var si = 0; si < sValues.length; si ++ ) {
                for( var ri = 0; ri < rValues.length; ri ++ ) {
                    var t = tValues[ti];
                    var s = sValues[si];
                    var r = rValues[ri];

                    var m = new THREE.Matrix4().compose( t, r, s );
                    var t2 = new THREE.Vector3();
                    var r2 = new THREE.Quaternion();
                    var s2 = new THREE.Vector3();

                    m.decompose( t2, r2, s2 );

                    var m2 = new THREE.Matrix4().compose( t2, r2, s2 );

                    var matrixIsSame = matrixEquals4( m, m2 );
                    /* debug code
                     if( ! matrixIsSame ) {
                     console.log( t, s, r );
                     console.log( t2, s2, r2 );
                     console.log( m, m2 );
                     }*/
                    ok( matrixEquals4( m, m2 ), "Passed!" );

                }
            }
        }
    });

    // -------------------------------------------- Plane

    var comparePlane = function ( a: THREE.Plane, b: THREE.Plane, threshold?: number ) {
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
        ok( a.distanceToPoint( a.projectPoint( zero3.clone(), new THREE.Vector3() ) ) === 0, "Passed!" );
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
        var target = new THREE.Vector3();

        var l1 = new THREE.Line3( new THREE.Vector3( -10, 0, 0 ), new THREE.Vector3( 10, 0, 0 ) );
        ok( a.intersectsLine( l1 ), "Passed!" );
        ok( a.intersectLine( l1, target ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), -3 );

        ok( a.intersectsLine( l1 ), "Passed!" );
        ok( a.intersectLine( l1, target ).equals( new THREE.Vector3( 3, 0, 0 ) ), "Passed!" );


        a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), -11 );

        ok( ! a.intersectsLine( l1 ), "Passed!" );
        ok( a.intersectLine( l1, target ) === undefined, "Passed!" );

        a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 11 );

        ok( ! a.intersectsLine( l1 ), "Passed!" );
        ok( a.intersectLine( l1, target ) === undefined, "Passed!" );

    });

    test( "projectPoint", function() {
        var a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 );
        var target = new THREE.Vector3();

        ok( a.projectPoint( new THREE.Vector3( 10, 0, 0 ), target ).equals( zero3 ), "Passed!" );
        ok( a.projectPoint( new THREE.Vector3( -10, 0, 0 ), target ).equals( zero3 ), "Passed!" );

        a = new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), -1 );
        ok( a.projectPoint( new THREE.Vector3( 0, 0, 0 ), target ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );
        ok( a.projectPoint( new THREE.Vector3( 0, 1, 0 ), target ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );

    });

    test( "orthoPoint", function() {
        var a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 );
        var target = new THREE.Vector3();

        ok( a.orthoPoint( new THREE.Vector3( 10, 0, 0 ), target ).equals( new THREE.Vector3( 10, 0, 0 ) ), "Passed!" );
        ok( a.orthoPoint( new THREE.Vector3( -10, 0, 0 ), target ).equals( new THREE.Vector3( -10, 0, 0 ) ), "Passed!" );
    });

    test( "coplanarPoint", function() {
        var a = new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), 0 );
        ok( a.distanceToPoint( a.coplanarPoint( new THREE.Vector3() ) ) === 0, "Passed!" );

        a = new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), -1 );
        ok( a.distanceToPoint( a.coplanarPoint( new THREE.Vector3() ) ) === 0, "Passed!" );
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

    // -------------------------------------------- Quaternion

    var orders = [ 'XYZ', 'YXZ', 'ZXY', 'ZYX', 'YZX', 'XZY' ];
    var eulerAngles = new THREE.Euler( 0.1, -0.3, 0.25 );



    var qSub = function ( a: THREE.Quaternion, b: THREE.Quaternion ) {
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
                var eulers2 = new THREE.Euler().setFromQuaternion( new THREE.Quaternion().setFromEuler( new THREE.Euler( angles[j].x, angles[j].y, angles[j].z, orders[i] ) ), orders[i] );
                var newAngle = new THREE.Vector3( eulers2.x, eulers2.y, eulers2.z );
                ok( newAngle.distanceTo( angles[j] ) < 0.001, "Passed!" );
            }
        }

    });

    test( "setFromEuler/setFromRotationMatrix", function() {

        // ensure euler conversion for Quaternion matches that of Matrix4
        for( var i = 0; i < orders.length; i ++ ) {
            var q = new THREE.Quaternion().setFromEuler( eulerAngles, false );
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

        var angles = [ new THREE.Euler( 1, 0, 0 ), new THREE.Euler( 0, 1, 0 ), new THREE.Euler( 0, 0, 1 ) ];

        var q1 = new THREE.Quaternion().setFromEuler( angles[0], false );
        var q2 = new THREE.Quaternion().setFromEuler( angles[1], false );
        var q3 = new THREE.Quaternion().setFromEuler( angles[2], false );

        var q = new THREE.Quaternion().multiplyQuaternions( q1, q2 ).multiply( q3 );

        var m1 = new THREE.Matrix4().makeRotationFromEuler( angles[0] );
        var m2 = new THREE.Matrix4().makeRotationFromEuler( angles[1] );
        var m3 = new THREE.Matrix4().makeRotationFromEuler( angles[2] );

        var m = new THREE.Matrix4().multiplyMatrices( m1, m2 ).multiply( m3 );

        var qFromM = new THREE.Quaternion().setFromRotationMatrix( m );

        ok( qSub( q, qFromM ).length() < 0.001, "Passed!" );
    });

    test( "multiplyVector3", function() {

        var angles = [ new THREE.Euler( 1, 0, 0 ), new THREE.Euler( 0, 1, 0 ), new THREE.Euler( 0, 0, 1 ) ];

        // ensure euler conversion for Quaternion matches that of Matrix4
        for( var i = 0; i < orders.length; i ++ ) {
            for( var j = 0; j < angles.length; j ++ ) {
                var q = new THREE.Quaternion().setFromEuler( angles[j], false );
                var m = new THREE.Matrix4().makeRotationFromEuler( angles[j] );

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

    // -------------------------------------------- Ray

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
        var target = new THREE.Vector3();

        ok( a.at( 0, target ).equals( one3 ), "Passed!" );
        ok( a.at( -1, target ).equals( new THREE.Vector3( 1, 1, 0 ) ), "Passed!" );
        ok( a.at( 1, target ).equals( new THREE.Vector3( 1, 1, 2 ) ), "Passed!" );
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
        var target = new THREE.Vector3();

        // behind the ray
        var b = a.closestPointToPoint( zero3, target );
        ok( b.equals( one3 ), "Passed!" );

        // front of the ray
        var c = a.closestPointToPoint( new THREE.Vector3( 0, 0, 50 ), target );
        ok( c.equals( new THREE.Vector3( 1, 1, 50 ) ), "Passed!" );

        // exactly on the ray
        var d = a.closestPointToPoint( one3, target );
        ok( d.equals( one3 ), "Passed!" );
    });

    test( "distanceToPoint", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );

        // behind the ray
        var b = a.distanceToPoint( zero3 );
        ok( b === Math.sqrt( 3 ), "Passed!" );

        // front of the ray
        var c = a.distanceToPoint( new THREE.Vector3( 0, 0, 50 ) );
        ok( c === Math.sqrt( 2 ), "Passed!" );

        // exactly on the ray
        var d = a.distanceToPoint( one3 );
        ok( d === 0, "Passed!" );
    });

    test( "intersectsSphere", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );
        var b = new THREE.Sphere( zero3, 0.5 );
        var c = new THREE.Sphere( zero3, 1.5 );
        var d = new THREE.Sphere( one3, 0.1 );
        var e = new THREE.Sphere( two3, 0.1 );
        var f = new THREE.Sphere( two3, 1 );

        ok( ! a.intersectsSphere( b ), "Passed!" );
        ok( ! a.intersectsSphere( c ), "Passed!" );
        ok( a.intersectsSphere( d ), "Passed!" );
        ok( ! a.intersectsSphere( e ), "Passed!" );
        ok( ! a.intersectsSphere( f ), "Passed!" );
    });

    test( "intersectSphere", function() {

        var TOL = 0.0001;

        // ray a0 origin located at ( 0, 0, 0 ) and points outward in negative-z direction
        var a0 = new THREE.Ray( zero3.clone(), new THREE.Vector3( 0, 0, -1 ) );
        // ray a1 origin located at ( 1, 1, 1 ) and points left in negative-x direction
        var a1 = new THREE.Ray( one3.clone(), new THREE.Vector3( -1, 0, 0 ) );
        var target = new THREE.Vector3();

        // sphere (radius of 2) located behind ray a0, should result in null
        var b = new THREE.Sphere( new THREE.Vector3( 0, 0, 3 ), 2 );
        ok( a0.intersectSphere( b, target ) === null, "Passed!" );

        // sphere (radius of 2) located in front of, but too far right of ray a0, should result in null
        var b = new THREE.Sphere( new THREE.Vector3( 3, 0, -1 ), 2 );
        ok( a0.intersectSphere( b, target ) === null, "Passed!" );

        // sphere (radius of 2) located below ray a1, should result in null
        var b = new THREE.Sphere( new THREE.Vector3( 1, -2, 1 ), 2 );
        ok( a1.intersectSphere( b, target ) === null, "Passed!" );

        // sphere (radius of 1) located to the left of ray a1, should result in intersection at 0, 1, 1
        var b = new THREE.Sphere( new THREE.Vector3( -1, 1, 1 ), 1 );
        ok( a1.intersectSphere( b, target ).distanceTo( new THREE.Vector3( 0, 1, 1 ) ) < TOL, "Passed!" );

        // sphere (radius of 1) located in front of ray a0, should result in intersection at 0, 0, -1
        var b = new THREE.Sphere( new THREE.Vector3( 0, 0, -2 ), 1 );
        ok( a0.intersectSphere( b, target ).distanceTo( new THREE.Vector3( 0, 0, -1 ) ) < TOL, "Passed!" );

        // sphere (radius of 2) located in front & right of ray a0, should result in intersection at 0, 0, -1, or left-most edge of sphere
        var b = new THREE.Sphere( new THREE.Vector3( 2, 0, -1 ), 2 );
        ok( a0.intersectSphere( b, target ).distanceTo( new THREE.Vector3( 0, 0, -1 ) ) < TOL, "Passed!" );

        // same situation as above, but move the sphere a fraction more to the right, and ray a0 should now just miss
        var b = new THREE.Sphere( new THREE.Vector3( 2.01, 0, -1 ), 2 );
        ok( a0.intersectSphere( b, target ) === null, "Passed!" );

        // following tests are for situations where the ray origin is inside the sphere

        // sphere (radius of 1) center located at ray a0 origin / sphere surrounds the ray origin, so the first intersect point 0, 0, 1,
        // is behind ray a0.  Therefore, second exit point on back of sphere will be returned: 0, 0, -1
        // thus keeping the intersection point always in front of the ray.
        var b = new THREE.Sphere( zero3.clone(), 1 );
        ok( a0.intersectSphere( b, target ).distanceTo( new THREE.Vector3( 0, 0, -1 ) ) < TOL, "Passed!" );

        // sphere (radius of 4) center located behind ray a0 origin / sphere surrounds the ray origin, so the first intersect point 0, 0, 5,
        // is behind ray a0.  Therefore, second exit point on back of sphere will be returned: 0, 0, -3
        // thus keeping the intersection point always in front of the ray.
        var b = new THREE.Sphere( new THREE.Vector3( 0, 0, 1 ), 4 );
        ok( a0.intersectSphere( b, target ).distanceTo( new THREE.Vector3( 0, 0, -3 ) ) < TOL, "Passed!" );

        // sphere (radius of 4) center located in front of ray a0 origin / sphere surrounds the ray origin, so the first intersect point 0, 0, 3,
        // is behind ray a0.  Therefore, second exit point on back of sphere will be returned: 0, 0, -5
        // thus keeping the intersection point always in front of the ray.
        var b = new THREE.Sphere( new THREE.Vector3( 0, 0, -1 ), 4 );
        ok( a0.intersectSphere( b, target ).distanceTo( new THREE.Vector3( 0, 0, -5 ) ) < TOL, "Passed!" );

    });

    test( "intersectsPlane", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );

        // parallel plane in front of the ray
        var b = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), one3.clone().sub( new THREE.Vector3( 0, 0, -1 ) ) );
        ok( a.intersectsPlane( b ), "Passed!" );

        // parallel plane coincident with origin
        var c = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), one3.clone().sub( new THREE.Vector3( 0, 0, 0 ) ) );
        ok( a.intersectsPlane( c ), "Passed!" );

        // parallel plane behind the ray
        var d = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), one3.clone().sub( new THREE.Vector3( 0, 0, 1 ) ) );
        ok( ! a.intersectsPlane( d ), "Passed!" );

        // perpendical ray that overlaps exactly
        var e = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 1, 0, 0 ), one3 );
        ok( a.intersectsPlane( e ), "Passed!" );

        // perpendical ray that doesn't overlap
        var f = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 1, 0, 0 ), zero3 );
        ok( ! a.intersectsPlane( f ), "Passed!" );
    });

    test( "intersectPlane", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );
        var target = new THREE.Vector3();

        // parallel plane behind
        var b = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), new THREE.Vector3( 1, 1, -1 ) );
        ok( a.intersectPlane( b, target ) === null, "Passed!" );

        // parallel plane coincident with origin
        var c = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), new THREE.Vector3( 1, 1, 0 ) );
        ok( a.intersectPlane( c, target ) === null, "Passed!" );

        // parallel plane infront
        var d = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 0, 0, 1 ), new THREE.Vector3( 1, 1, 1 ) );
        ok( a.intersectPlane( d, target ).equals( a.origin ), "Passed!" );

        // perpendical ray that overlaps exactly
        var e = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 1, 0, 0 ), one3 );
        ok( a.intersectPlane( e, target ).equals( a.origin ), "Passed!" );

        // perpendical ray that doesn't overlap
        var f = new THREE.Plane().setFromNormalAndCoplanarPoint( new THREE.Vector3( 1, 0, 0 ), zero3 );
        ok( a.intersectPlane( f, target ) === null, "Passed!" );
    });


    test( "applyMatrix4", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );
        var m = new THREE.Matrix4();

        ok( a.clone().applyMatrix4( m ).equals( a ), "Passed!" );

        a = new THREE.Ray( zero3.clone(), new THREE.Vector3( 0, 0, 1 ) );
        m.makeRotationZ( Math.PI );
        ok( a.clone().applyMatrix4( m ).equals( a ), "Passed!" );

        m.makeRotationX( Math.PI );
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


    test( "distanceSqToSegment", function() {
        var a = new THREE.Ray( one3.clone(), new THREE.Vector3( 0, 0, 1 ) );
        var ptOnLine = new THREE.Vector3();
        var ptOnSegment = new THREE.Vector3();

        //segment in front of the ray
        var v0 = new THREE.Vector3( 3, 5, 50 );
        var v1 = new THREE.Vector3( 50, 50, 50 ); // just a far away point
        var distSqr = a.distanceSqToSegment( v0, v1, ptOnLine, ptOnSegment );

        ok( ptOnSegment.distanceTo( v0 ) < 0.0001, "Passed!" );
        ok( ptOnLine.distanceTo( new THREE.Vector3(1, 1, 50) ) < 0.0001, "Passed!" );
        // ((3-1) * (3-1) + (5-1) * (5-1) = 4 + 16 = 20
        ok( Math.abs( distSqr - 20 ) < 0.0001, "Passed!" );

        //segment behind the ray
        v0 = new THREE.Vector3( -50, -50, -50 ); // just a far away point
        v1 = new THREE.Vector3( -3, -5, -4 );
        distSqr = a.distanceSqToSegment( v0, v1, ptOnLine, ptOnSegment );

        ok( ptOnSegment.distanceTo( v1 ) < 0.0001, "Passed!" );
        ok( ptOnLine.distanceTo( one3 ) < 0.0001, "Passed!" );
        // ((-3-1) * (-3-1) + (-5-1) * (-5-1) + (-4-1) + (-4-1) = 16 + 36 + 25 = 77
        ok( Math.abs( distSqr - 77 ) < 0.0001, "Passed!" );

        //exact intersection between the ray and the segment
        v0 = new THREE.Vector3( -50, -50, -50 );
        v1 = new THREE.Vector3( 50, 50, 50 );
        distSqr = a.distanceSqToSegment( v0, v1, ptOnLine, ptOnSegment );

        ok( ptOnSegment.distanceTo( one3 ) < 0.0001, "Passed!" );
        ok( ptOnLine.distanceTo( one3 ) < 0.0001, "Passed!" );
        ok( distSqr < 0.0001, "Passed!" );
    });

    test( "intersectBox", function() {

        var TOL = 0.0001;

        var box = new THREE.Box3( new THREE.Vector3(  -1, -1, -1 ), new THREE.Vector3( 1, 1, 1 ) );
        var target = new THREE.Vector3();

        var a = new THREE.Ray( new THREE.Vector3( -2, 0, 0 ), new THREE.Vector3( 1, 0, 0) );
        //ray should intersect box at -1,0,0
        ok( a.intersectsBox(box) === true, "Passed!" );
        ok( a.intersectBox(box, target).distanceTo( new THREE.Vector3( -1, 0, 0 ) ) < TOL, "Passed!" );

        var b = new THREE.Ray( new THREE.Vector3( -2, 0, 0 ), new THREE.Vector3( -1, 0, 0) );
        //ray is point away from box, it should not intersect
        ok( b.intersectsBox(box) === false, "Passed!" );
        ok( b.intersectBox(box, target) === null, "Passed!" );

        var c = new THREE.Ray( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0) );
        // ray is inside box, should return exit point
        ok( c.intersectsBox(box) === true, "Passed!" );
        ok( c.intersectBox(box, target).distanceTo( new THREE.Vector3( 1, 0, 0 ) ) < TOL, "Passed!" );

        var d = new THREE.Ray( new THREE.Vector3( 0, 2, 1 ), new THREE.Vector3( 0, -1, -1).normalize() );
        //tilted ray should intersect box at 0,1,0
        ok( d.intersectsBox(box) === true, "Passed!" );
        ok( d.intersectBox(box, target).distanceTo( new THREE.Vector3( 0, 1, 0 ) ) < TOL, "Passed!" );

        var e = new THREE.Ray( new THREE.Vector3( 1, -2, 1 ), new THREE.Vector3( 0, 1, 0).normalize() );
        //handle case where ray is coplanar with one of the boxes side - box in front of ray
        ok( e.intersectsBox(box) === true, "Passed!" );
        ok( e.intersectBox(box, target).distanceTo( new THREE.Vector3( 1, -1, 1 ) ) < TOL, "Passed!" );

        var f = new THREE.Ray( new THREE.Vector3( 1, -2, 0 ), new THREE.Vector3( 0, -1, 0).normalize() );
        //handle case where ray is coplanar with one of the boxes side - box behind ray
        ok( f.intersectsBox(box) === false, "Passed!" );
        ok( f.intersectBox(box, target) == null, "Passed!" );

    });

    // -------------------------------------------- Sphere
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
        var target = new THREE.Vector3();

        ok( a.clampPoint( new THREE.Vector3( 1, 1, 3 ), target ).equals( new THREE.Vector3( 1, 1, 2 ) ), "Passed!" );
        ok( a.clampPoint( new THREE.Vector3( 1, 1, -3 ), target ).equals( new THREE.Vector3( 1, 1, 0 ) ), "Passed!" );
    });

    test( "getBoundingBox", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );
        var target = new THREE.Box3();

        ok( a.getBoundingBox( target ).equals( new THREE.Box3( zero3, two3 ) ), "Passed!" );

        a.set( zero3, 0 )
        ok( a.getBoundingBox( target ).equals( new THREE.Box3( zero3, zero3 ) ), "Passed!" );
    });

    test( "applyMatrix4", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );

        var m = new THREE.Matrix4().makeTranslation( 1, -2, 1 );

        ok( a.clone().applyMatrix4( m ).getBoundingBox( new THREE.Box3() ).equals( a.getBoundingBox( new THREE.Box3() ).applyMatrix4( m ) ), "Passed!" );
    });

    test( "translate", function() {
        var a = new THREE.Sphere( one3.clone(), 1 );

        a.translate( one3.clone().negate() );
        ok( a.center.equals( zero3 ), "Passed!" );
    });

    // -------------------------------------------- Triangle

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

    test( "getArea", function() {
        var a = new THREE.Triangle();

        ok( a.getArea() == 0, "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.getArea() == 0.5, "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.getArea() == 2, "Passed!" );

        // colinear triangle.
        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 3, 0, 0 ) );
        ok( a.getArea() == 0, "Passed!" );
    });

    test( "getMidpoint", function() {
        var a = new THREE.Triangle();
        var target = new THREE.Vector3();

        ok( a.getMidpoint( target ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.getMidpoint( target ).equals( new THREE.Vector3( 1/3, 1/3, 0 ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.getMidpoint( target ).equals( new THREE.Vector3( 2/3, 0, 2/3 ) ), "Passed!" );
    });

    test( "getNormal", function() {
        var a = new THREE.Triangle();
        var target = new THREE.Vector3();

        ok( a.getNormal( target ).equals( new THREE.Vector3( 0, 0, 0 ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.getNormal( target ).equals( new THREE.Vector3( 0, 0, 1 ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.getNormal( target ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );
    });

    test( "getPlane", function() {
        var a = new THREE.Triangle();
        var target = new THREE.Vector3();

        // artificial normal is created in this case.
        ok( a.getPlane( target ).distanceToPoint( a.a ) == 0, "Passed!" );
        ok( a.getPlane( target ).distanceToPoint( a.b ) == 0, "Passed!" );
        ok( a.getPlane( target ).distanceToPoint( a.c ) == 0, "Passed!" );
        ok( a.getPlane( target ).normal.equals( a.getNormal( new THREE.Vector3() ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.getPlane( target ).distanceToPoint( a.a ) == 0, "Passed!" );
        ok( a.getPlane( target ).distanceToPoint( a.b ) == 0, "Passed!" );
        ok( a.getPlane( target ).distanceToPoint( a.c ) == 0, "Passed!" );
        ok( a.getPlane( target ).normal.equals( a.getNormal( new THREE.Vector3() ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.getPlane( target ).distanceToPoint( a.a ) == 0, "Passed!" );
        ok( a.getPlane( target ).distanceToPoint( a.b ) == 0, "Passed!" );
        ok( a.getPlane( target ).distanceToPoint( a.c ) == 0, "Passed!" );
        ok( a.getPlane( target ).normal.clone().normalize().equals( a.getNormal( new THREE.Vector3() ) ), "Passed!" );
    });

    test( "getBarycoord", function() {
        var a = new THREE.Triangle();
        var target = new THREE.Vector3();

        var bad = new THREE.Vector3( -2, -1, -1 );

        ok( a.getBarycoord( a.a, target ).equals( bad ), "Passed!" );
        ok( a.getBarycoord( a.b, target ).equals( bad ), "Passed!" );
        ok( a.getBarycoord( a.c, target ).equals( bad ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ), new THREE.Vector3( 0, 1, 0 ) );
        ok( a.getBarycoord( a.a, target ).equals( new THREE.Vector3( 1, 0, 0 ) ), "Passed!" );
        ok( a.getBarycoord( a.b, target ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );
        ok( a.getBarycoord( a.c, target ).equals( new THREE.Vector3( 0, 0, 1 ) ), "Passed!" );
        ok( a.getBarycoord( a.getMidpoint( new THREE.Vector3() ), target ).distanceTo( new THREE.Vector3( 1/3, 1/3, 1/3 ) ) < 0.0001, "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.getBarycoord( a.a, target ).equals( new THREE.Vector3( 1, 0, 0 ) ), "Passed!" );
        ok( a.getBarycoord( a.b, target ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );
        ok( a.getBarycoord( a.c, target ).equals( new THREE.Vector3( 0, 0, 1 ) ), "Passed!" );
        ok( a.getBarycoord( a.getMidpoint( new THREE.Vector3() ), target ).distanceTo( new THREE.Vector3( 1/3, 1/3, 1/3 ) ) < 0.0001, "Passed!" );
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
        ok( a.containsPoint( a.getMidpoint( new THREE.Vector3() ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( -1, -1, -1 ) ), "Passed!" );

        a = new THREE.Triangle( new THREE.Vector3( 2, 0, 0 ), new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 2 ) );
        ok( a.containsPoint( a.a ), "Passed!" );
        ok( a.containsPoint( a.b ), "Passed!" );
        ok( a.containsPoint( a.c ), "Passed!" );
        ok( a.containsPoint( a.getMidpoint( new THREE.Vector3() ) ), "Passed!" );
        ok( ! a.containsPoint( new THREE.Vector3( -1, -1, -1 ) ), "Passed!" );
    });

    // -------------------------------------------- Vector2
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

    test( "applyMatrix3", function () {
        var a = new THREE.Vector2( x, y );
        var m = new THREE.Matrix3().set( 2, 3, 5, 7, 11, 13, 17, 19, 23 );

        a.applyMatrix3( m );
        ok( a.x == 18, "Passed!" );
        ok( a.y == 60, "Passed!" );
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

        c.set(-2*x, 2*x);
        c.clampScalar( -x, x );
        equal( c.x, -x, "scalar clamp x" );
        equal( c.y,  x, "scalar clamp y" );
    });

    test( "rounding", function() {
        deepEqual( new THREE.Vector2( -0.1, 0.1 ).floor(), new THREE.Vector2( -1, 0 ), "floor .1" );
        deepEqual( new THREE.Vector2( -0.5, 0.5 ).floor(), new THREE.Vector2( -1, 0 ), "floor .5" );
        deepEqual( new THREE.Vector2( -0.9, 0.9 ).floor(), new THREE.Vector2( -1, 0 ), "floor .9" );

        deepEqual( new THREE.Vector2( -0.1, 0.1 ).ceil(), new THREE.Vector2( 0, 1 ), "ceil .1" );
        deepEqual( new THREE.Vector2( -0.5, 0.5 ).ceil(), new THREE.Vector2( 0, 1 ), "ceil .5" );
        deepEqual( new THREE.Vector2( -0.9, 0.9 ).ceil(), new THREE.Vector2( 0, 1 ), "ceil .9" );

        deepEqual( new THREE.Vector2( -0.1, 0.1 ).round(), new THREE.Vector2( 0, 0 ), "round .1" );
        deepEqual( new THREE.Vector2( -0.5, 0.5 ).round(), new THREE.Vector2( 0, 1 ), "round .5" );
        deepEqual( new THREE.Vector2( -0.9, 0.9 ).round(), new THREE.Vector2( -1, 1 ), "round .9" );

        deepEqual( new THREE.Vector2( -0.1, 0.1 ).roundToZero(), new THREE.Vector2( 0, 0 ), "roundToZero .1" );
        deepEqual( new THREE.Vector2( -0.5, 0.5 ).roundToZero(), new THREE.Vector2( 0, 0 ), "roundToZero .5" );
        deepEqual( new THREE.Vector2( -0.9, 0.9 ).roundToZero(), new THREE.Vector2( 0, 0 ), "roundToZero .9" );
        deepEqual( new THREE.Vector2( -1.1, 1.1 ).roundToZero(), new THREE.Vector2( -1, 1 ), "roundToZero 1.1" );
        deepEqual( new THREE.Vector2( -1.5, 1.5 ).roundToZero(), new THREE.Vector2( -1, 1 ), "roundToZero 1.5" );
        deepEqual( new THREE.Vector2( -1.9, 1.9 ).roundToZero(), new THREE.Vector2( -1, 1 ), "roundToZero 1.9" );
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

    test( "fromBufferAttribute", function() {
        var a = new THREE.Vector2();
        var attr = new THREE.BufferAttribute( new Float32Array( [ 1, 2, 3, 4 ] ), 2 );

        a.fromBufferAttribute( attr, 0 );
        ok( a.x == 1, "Passed!" );
        ok( a.y == 2, "Passed!" );
    });

    // -------------------------------------------- Vector3
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
        var a = new THREE.Vector3();
        var normal = new THREE.Vector3( 0, 1, 0 );
        var b = new THREE.Vector3();

        a.set( 0, -1, 0 );
        ok( b.copy( a ).reflect( normal ).equals( new THREE.Vector3( 0, 1, 0 ) ), "Passed!" );

        a.set( 1, -1, 0 );
        ok( b.copy( a ).reflect( normal ).equals( new THREE.Vector3( 1, 1, 0 ) ), "Passed!" );

        a.set( 1, -1, 0 );
        normal.set( 0, -1, 0 );
        ok( b.copy( a ).reflect( normal ).equals( new THREE.Vector3( 1, 1, 0 ) ), "Passed!" );
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

    // -------------------------------------------- Vector4
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

    test( "setAxisAngleFromRotationMatrix", function() {
        var TOL = 1e-9;

        // not sure what to do here since THREE.Vector4().setAxisAngleFromRotationMatrix() only accept Matrix3s
        /*var r = new THREE.Matrix4().makeRotationZ(Math.PI / 2);
        var v = new THREE.Vector4().setAxisAngleFromRotationMatrix(r);

        ok( v.x == 0, "Passed!" );
        ok( v.y == 0, "Passed!" );
        ok( v.z == 1, "Passed!" );
        ok( Math.abs(v.w - Math.PI / 2) < TOL, "Passed!" );*/
    });
};
