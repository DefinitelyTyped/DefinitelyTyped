// Type definitions for ammo.js generated using C2T <https://github.com/ameentj/c2t> and manually tuned.
// Project: https://github.com/kripken/ammo.js/
// Definitions by: Ameen Tayyebi <http://ameentj.github.io/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module Ammo {
    export enum btTypedConstraintType {
         POINT2POINT_CONSTRAINT_TYPE = 3,
         HINGE_CONSTRAINT_TYPE = 4,
         CONETWIST_CONSTRAINT_TYPE = 5,
         D6_CONSTRAINT_TYPE = 6,
         SLIDER_CONSTRAINT_TYPE = 7,
         CONTACT_CONSTRAINT_TYPE = 8,
         D6_SPRING_CONSTRAINT_TYPE = 9,
         MAX_CONSTRAINT_TYPE = 10,
    }
    export enum btConstraintParams {
         BT_CONSTRAINT_ERP = 1,
         BT_CONSTRAINT_STOP_ERP = 2,
         BT_CONSTRAINT_CFM = 3,
         BT_CONSTRAINT_STOP_CFM = 4,
    }
    export enum BroadphaseNativeTypes {
         BOX_SHAPE_PROXYTYPE = 0,
         TRIANGLE_SHAPE_PROXYTYPE = 1,
         TETRAHEDRAL_SHAPE_PROXYTYPE = 2,
         CONVEX_TRIANGLEMESH_SHAPE_PROXYTYPE = 3,
         CONVEX_HULL_SHAPE_PROXYTYPE = 4,
         CONVEX_POINT_CLOUD_SHAPE_PROXYTYPE = 5,
         CUSTOM_POLYHEDRAL_SHAPE_TYPE = 6,
         IMPLICIT_CONVEX_SHAPES_START_HERE = 7,
         SPHERE_SHAPE_PROXYTYPE = 8,
         MULTI_SPHERE_SHAPE_PROXYTYPE = 9,
         CAPSULE_SHAPE_PROXYTYPE = 10,
         CONE_SHAPE_PROXYTYPE = 11,
         CONVEX_SHAPE_PROXYTYPE = 12,
         CYLINDER_SHAPE_PROXYTYPE = 13,
         UNIFORM_SCALING_SHAPE_PROXYTYPE = 14,
         MINKOWSKI_SUM_SHAPE_PROXYTYPE = 15,
         MINKOWSKI_DIFFERENCE_SHAPE_PROXYTYPE = 16,
         BOX_2D_SHAPE_PROXYTYPE = 17,
         CONVEX_2D_SHAPE_PROXYTYPE = 18,
         CUSTOM_CONVEX_SHAPE_TYPE = 19,
         CONCAVE_SHAPES_START_HERE = 20,
         TRIANGLE_MESH_SHAPE_PROXYTYPE = 21,
         SCALED_TRIANGLE_MESH_SHAPE_PROXYTYPE = 22,
         FAST_CONCAVE_MESH_PROXYTYPE = 23,
         TERRAIN_SHAPE_PROXYTYPE = 24,
         GIMPACT_SHAPE_PROXYTYPE = 25,
         MULTIMATERIAL_TRIANGLE_MESH_PROXYTYPE = 26,
         EMPTY_SHAPE_PROXYTYPE = 27,
         _PLANE_PROXYTYPE = 28,
         CUSTOM_CONCAVE_SHAPE_TYPE = 29,
         CONCAVE_SHAPES_END_HERE = 30,
         COMPOUND_SHAPE_PROXYTYPE = 31,
         SOFTBODY_SHAPE_PROXYTYPE = 32,
         HFFLUID_SHAPE_PROXYTYPE = 33,
         HFFLUID_BUOYANT_CONVEX_SHAPE_PROXYTYPE = 34,
         INVALID_SHAPE_PROXYTYPE = 35,
         MAX_BROADPHASE_COLLISION_TYPES = 36,
    }
    export enum btSolverMode {
         SOLVER_RANDMIZE_ORDER = 1,
         SOLVER_FRICTION_SEPARATE = 2,
         SOLVER_USE_WARMSTARTING = 4,
         SOLVER_USE_FRICTION_WARMSTARTING = 8,
         SOLVER_USE_2_FRICTION_DIRECTIONS = 16,
         SOLVER_ENABLE_FRICTION_DIRECTION_CACHING = 32,
         SOLVER_DISABLE_VELOCITY_DEPENDENT_FRICTION_DIRECTION = 64,
         SOLVER_CACHE_FRIENDLY = 128,
         SOLVER_SIMD = 256,
         SOLVER_CUDA = 512,
    }
    export enum bt6DofFlags {
         BT_6DOF_FLAGS_CFM_NORM = 1,
         BT_6DOF_FLAGS_CFM_STOP = 2,
         BT_6DOF_FLAGS_ERP_STOP = 4,
    }
    export enum btConeTwistFlags {
         BT_CONETWIST_FLAGS_LIN_CFM = 1,
         BT_CONETWIST_FLAGS_LIN_ERP = 2,
         BT_CONETWIST_FLAGS_ANG_CFM = 4,
    }
    export enum btSerializationFlags {
         BT_SERIALIZE_NO_BVH = 1,
         BT_SERIALIZE_NO_TRIANGLEINFOMAP = 2,
         BT_SERIALIZE_NO_DUPLICATE_ASSERT = 4,
    }
    export enum __codecvt_result {
         __codecvt_ok = 0,
         __codecvt_partial = 1,
         __codecvt_error = 2,
         __codecvt_noconv = 3,
    }
    export enum btPoint2PointFlags {
         BT_P2P_FLAGS_ERP = 1,
         BT_P2P_FLAGS_CFM = 2,
    }
    export enum btRigidBodyFlags {
         BT_DISABLE_WORLD_GRAVITY = 1,
    }
    export enum btDynamicsWorldType {
         BT_SIMPLE_DYNAMICS_WORLD = 1,
         BT_DISCRETE_DYNAMICS_WORLD = 2,
         BT_CONTINUOUS_DYNAMICS_WORLD = 3,
         BT_SOFT_RIGID_DYNAMICS_WORLD = 4,
    }
    export enum btSliderFlags {
         BT_SLIDER_FLAGS_CFM_DIRLIN = 1,
         BT_SLIDER_FLAGS_ERP_DIRLIN = 2,
         BT_SLIDER_FLAGS_CFM_DIRANG = 4,
         BT_SLIDER_FLAGS_ERP_DIRANG = 8,
         BT_SLIDER_FLAGS_CFM_ORTLIN = 16,
         BT_SLIDER_FLAGS_ERP_ORTLIN = 32,
         BT_SLIDER_FLAGS_CFM_ORTANG = 64,
         BT_SLIDER_FLAGS_ERP_ORTANG = 128,
         BT_SLIDER_FLAGS_CFM_LIMLIN = 256,
         BT_SLIDER_FLAGS_ERP_LIMLIN = 512,
         BT_SLIDER_FLAGS_CFM_LIMANG = 1024,
         BT_SLIDER_FLAGS_ERP_LIMANG = 2048
    }
    export enum btContactManifoldTypes {
         MIN_CONTACT_MANIFOLD_TYPE = 1024,
         BT_PERSISTENT_MANIFOLD_TYPE = 1025,
    }
    export enum btHingeFlags {
         BT_HINGE_FLAGS_CFM_STOP = 1,
         BT_HINGE_FLAGS_ERP_STOP = 2,
         BT_HINGE_FLAGS_CFM_NORM = 4,
    }
    export enum PHY_ScalarType {
        PHY_FLOAT,
        PHY_DOUBLE,
        PHY_INTEGER,
        PHY_SHORT,
        PHY_FIXEDPOINT88,
        PHY_UCHAR
    }
    export module btQuantizedBvh {
        export enum btTraversalMode {
            TRAVERSAL_STACKLESS = 0,
            TRAVERSAL_STACKLESS_CACHE_FRIENDLY = 1,
            TRAVERSAL_RECURSIVE = 2
        }
    }
    export class btMatrix3x3 {
        absolute():btMatrix3x3;
        adjoint():btMatrix3x3;
        constructor();
        constructor(q:btQuaternion);
        constructor(xx:number,xy:number,xz:number,yx:number,yy:number,yz:number,zx:number,zy:number,zz:number);
        constructor(other:btMatrix3x3);
        cofac(r1:number,c1:number,r2:number,c2:number):number;
        deSerialize(dataIn:btMatrix3x3FloatData):void;
        deSerializeDouble(dataIn:btMatrix3x3DoubleData):void;
        deSerializeFloat(dataIn:btMatrix3x3FloatData):void;
        determinant():number;
        diagonalize(rot:btMatrix3x3,threshold:number,maxSteps:number):void;
        getColumn(i:number):btVector3;
        getEulerYPR(yaw:number,pitch:number,roll:number):void;
        getEulerZYX(yaw:number,pitch:number,roll:number,solution_number:number):void;
        static getIdentity():btMatrix3x3;
        getOpenGLSubMatrix(m:number):void;
        getRotation(q:btQuaternion):void;
        getRow(i:number):btVector3;
        inverse():btMatrix3x3;
        op_get(i:number):btVector3;
        op_set(other:btMatrix3x3):btMatrix3x3;
        scaled(s:btVector3):btMatrix3x3;
        serialize(dataOut:btMatrix3x3FloatData):void;
        serializeFloat(dataOut:btMatrix3x3FloatData):void;
        setEulerYPR(yaw:number,pitch:number,roll:number):void;
        setEulerZYX(eulerX:number,eulerY:number,eulerZ:number):void;
        setFromOpenGLSubMatrix(m:number):void;
        setIdentity():void;
        setRotation(q:btQuaternion):void;
        setValue(xx:number,xy:number,xz:number,yx:number,yy:number,yz:number,zx:number,zy:number,zz:number):void;
        tdotx(v:btVector3):number;
        tdoty(v:btVector3):number;
        tdotz(v:btVector3):number;
        timesTranspose(m:btMatrix3x3):btMatrix3x3;
        transpose():btMatrix3x3;
        transposeTimes(m:btMatrix3x3):btMatrix3x3;
    }
    export class btDispatcherInfo {
        constructor();
        get_m_timeStep():number;
        set_m_timeStep(value:number):void;
        get_m_stepCount():number;
        set_m_stepCount(value:number):void;
        get_m_dispatchFunc():number;
        set_m_dispatchFunc(value:number):void;
        get_m_timeOfImpact():number;
        set_m_timeOfImpact(value:number):void;
        get_m_useContinuous():boolean;
        set_m_useContinuous(value:boolean):void;
        get_m_debugDraw():btIDebugDraw;
        set_m_debugDraw(value:btIDebugDraw):void;
        get_m_enableSatConvex():boolean;
        set_m_enableSatConvex(value:boolean):void;
        get_m_enableSPU():boolean;
        set_m_enableSPU(value:boolean):void;
        get_m_useEpa():boolean;
        set_m_useEpa(value:boolean):void;
        get_m_allowedCcdPenetration():number;
        set_m_allowedCcdPenetration(value:number):void;
        get_m_useConvexConservativeDistanceUtil():boolean;
        set_m_useConvexConservativeDistanceUtil(value:boolean):void;
        get_m_convexConservativeDistanceThreshold():number;
        set_m_convexConservativeDistanceThreshold(value:number):void;
        get_m_stackAllocator():btStackAlloc;
        set_m_stackAllocator(value:btStackAlloc):void;
    }
    export class btMultiSphereShapeData {
        get_m_convexInternalShapeData():btConvexInternalShapeData;
        set_m_convexInternalShapeData(value:btConvexInternalShapeData):void;
        get_m_localPositionArrayPtr():btPositionAndRadius;
        set_m_localPositionArrayPtr(value:btPositionAndRadius):void;
        get_m_localPositionArraySize():number;
        set_m_localPositionArraySize(value:number):void;
        get_m_padding():string;
        set_m_padding(value:string):void;
    }
    export class btSortedOverlappingPairCache extends Ammo.btOverlappingPairCache {
        addOverlappingPair(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy):btBroadphasePair;
        constructor();
        cleanOverlappingPair(pair:btBroadphasePair,dispatcher:btDispatcher):void;
        cleanProxyFromPairs(proxy:btBroadphaseProxy,dispatcher:btDispatcher):void;
        findPair(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy):btBroadphasePair;
        getNumOverlappingPairs():number;
        getOverlapFilterCallback():btOverlapFilterCallback;
        getOverlappingPairArray():btAlignedObjectArray;
        getOverlappingPairArrayPtr():btBroadphasePair;
        hasDeferredRemoval():boolean;
        needsBroadphaseCollision(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy):boolean;
        processAllOverlappingPairs(arg0:btOverlapCallback,dispatcher:btDispatcher):void;
        removeOverlappingPair(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy,dispatcher:btDispatcher):any;
        removeOverlappingPairsContainingProxy(proxy:btBroadphaseProxy,dispatcher:btDispatcher):void;
        setInternalGhostPairCallback(ghostPairCallback:btOverlappingPairCallback):void;
        setOverlapFilterCallback(callback:btOverlapFilterCallback):void;
        sortOverlappingPairs(dispatcher:btDispatcher):void;
    }
    export class btIntIndexData {
        get_m_value():number;
        set_m_value(value:number):void;
    }
    export class btCapsuleShape extends Ammo.btConvexInternalShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(radius:number,height:number);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        calculateSerializeBufferSize():number;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getHalfHeight():number;
        getName():string;
        getRadius():number;
        getUpAxis():number;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setLocalScaling(scaling:btVector3):void;
        setMargin(collisionMargin:number):void;
    }
    export class btConvexHullShape extends Ammo.btPolyhedralConvexAabbCachingShape {
        addPoint(point:btVector3):void;
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(points:number,numPoints:number,stride:number);
        calculateSerializeBufferSize():number;
        getEdge(i:number,pa:btVector3,pb:btVector3):void;
        getName():string;
        getNumEdges():number;
        getNumPlanes():number;
        getNumPoints():number;
        getNumVertices():number;
        getPlane(planeNormal:btVector3,planeSupport:btVector3,i:number):void;
        getPoints():btVector3;
        getScaledPoint(i:number):btVector3;
        getUnscaledPoints():btVector3;
        getVertex(i:number,vtx:btVector3):void;
        isInside(pt:btVector3,tolerance:number):boolean;
        localGetSupportingVertex(vec:btVector3):btVector3;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setLocalScaling(scaling:btVector3):void;
    }
    export class btTypedObject {
        constructor(objectType:number);
        getObjectType():number;
        get_m_objectType():number;
        set_m_objectType(value:number):void;
    }
    export class btIndexedMesh {
        constructor();
        get_m_numTriangles():number;
        set_m_numTriangles(value:number):void;
        get_m_triangleIndexBase():any;
        set_m_triangleIndexBase(value:any):void;
        get_m_triangleIndexStride():number;
        set_m_triangleIndexStride(value:number):void;
        get_m_numVertices():number;
        set_m_numVertices(value:number):void;
        get_m_vertexBase():any;
        set_m_vertexBase(value:any):void;
        get_m_vertexStride():number;
        set_m_vertexStride(value:number):void;
        get_m_indexType():PHY_ScalarType;
        set_m_indexType(value:PHY_ScalarType):void;
        get_m_vertexType():PHY_ScalarType;
        set_m_vertexType(value:PHY_ScalarType):void;
    }
    export class btConeTwistConstraintData {
        get_m_typeConstraintData():btTypedConstraintData;
        set_m_typeConstraintData(value:btTypedConstraintData):void;
        get_m_rbAFrame():btTransformFloatData;
        set_m_rbAFrame(value:btTransformFloatData):void;
        get_m_rbBFrame():btTransformFloatData;
        set_m_rbBFrame(value:btTransformFloatData):void;
        get_m_swingSpan1():number;
        set_m_swingSpan1(value:number):void;
        get_m_swingSpan2():number;
        set_m_swingSpan2(value:number):void;
        get_m_twistSpan():number;
        set_m_twistSpan(value:number):void;
        get_m_limitSoftness():number;
        set_m_limitSoftness(value:number):void;
        get_m_biasFactor():number;
        set_m_biasFactor(value:number):void;
        get_m_relaxationFactor():number;
        set_m_relaxationFactor(value:number):void;
        get_m_damping():number;
        set_m_damping(value:number):void;
        get_m_pad():string;
        set_m_pad(value:string):void;
    }
    export class btCollisionObject {
        activate(forceActivation:boolean):void;
        constructor();
        calculateSerializeBufferSize():number;
        checkCollideWith(co:btCollisionObject):boolean;
        forceActivationState(newState:number):void;
        getActivationState():number;
        getAnisotropicFriction():btVector3;
        getBroadphaseHandle():btBroadphaseProxy;
        getCcdMotionThreshold():number;
        getCcdSquareMotionThreshold():number;
        getCcdSweptSphereRadius():number;
        getCollisionFlags():number;
        getCollisionShape():btCollisionShape;
        getCompanionId():number;
        getContactProcessingThreshold():number;
        getDeactivationTime():number;
        getFriction():number;
        getHitFraction():number;
        getInternalType():number;
        getInterpolationAngularVelocity():btVector3;
        getInterpolationLinearVelocity():btVector3;
        getInterpolationWorldTransform():btTransform;
        getIslandTag():number;
        getRestitution():number;
        getRootCollisionShape():btCollisionShape;
        getUserPointer():any;
        getWorldTransform():btTransform;
        hasAnisotropicFriction():boolean;
        hasContactResponse():boolean;
        internalGetExtensionPointer():any;
        internalSetExtensionPointer(pointer:any):void;
        internalSetTemporaryCollisionShape(collisionShape:btCollisionShape):void;
        isActive():boolean;
        isKinematicObject():boolean;
        isStaticObject():boolean;
        isStaticOrKinematicObject():boolean;
        mergesSimulationIslands():boolean;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        serializeSingleObject(serializer:btSerializer):void;
        setActivationState(newState:number):void;
        setAnisotropicFriction(anisotropicFriction:btVector3):void;
        setBroadphaseHandle(handle:btBroadphaseProxy):void;
        setCcdMotionThreshold(ccdMotionThreshold:number):void;
        setCcdSweptSphereRadius(radius:number):void;
        setCollisionFlags(flags:number):void;
        setCollisionShape(collisionShape:btCollisionShape):void;
        setCompanionId(id:number):void;
        setContactProcessingThreshold(contactProcessingThreshold:number):void;
        setDeactivationTime(time:number):void;
        setFriction(frict:number):void;
        setHitFraction(hitFraction:number):void;
        setInterpolationAngularVelocity(angvel:btVector3):void;
        setInterpolationLinearVelocity(linvel:btVector3):void;
        setInterpolationWorldTransform(trans:btTransform):void;
        setIslandTag(tag:number):void;
        setRestitution(rest:number):void;
        setUserPointer(userPointer:any):void;
        setWorldTransform(worldTrans:btTransform):void;
    }
    export class random_data {
        get_fptr():number;
        set_fptr(value:number):void;
        get_rptr():number;
        set_rptr(value:number):void;
        get_state():number;
        set_state(value:number):void;
        get_rand_type():number;
        set_rand_type(value:number):void;
        get_rand_deg():number;
        set_rand_deg(value:number):void;
        get_rand_sep():number;
        set_rand_sep(value:number):void;
        get_end_ptr():number;
        set_end_ptr(value:number):void;
    }
    export class btConvexTriangleMeshShape extends Ammo.btPolyhedralConvexAabbCachingShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(meshInterface:btStridingMeshInterface,calcAabb:boolean);
        calculatePrincipalAxisTransform(principal:btTransform,inertia:btVector3,volume:number):void;
        getEdge(i:number,pa:btVector3,pb:btVector3):void;
        getLocalScaling():btVector3;
        getMeshInterface():any;
        getName():string;
        getNumEdges():number;
        getNumPlanes():number;
        getNumVertices():number;
        getPlane(planeNormal:btVector3,planeSupport:btVector3,i:number):void;
        getVertex(i:number,vtx:btVector3):void;
        isInside(pt:btVector3,tolerance:number):boolean;
        localGetSupportingVertex(vec:btVector3):btVector3;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
        setLocalScaling(scaling:btVector3):void;
    }
    export class btBroadphaseInterface {
        resetPool(dispatcher:btDispatcher):void;
    }
    export class btAngularLimit {
        constructor();
        fit(angle:number):void;
        getBiasFactor():number;
        getCorrection():number;
        getError():number;
        getHalfRange():number;
        getHigh():number;
        getLow():number;
        getRelaxationFactor():number;
        getSign():number;
        getSoftness():number;
        isLimit():boolean;
        set(low:number,high:number,_softness:number,_biasFactor:number,_relaxationFactor:number):void;
        test(angle:number):void;
    }
    export class btDefaultCollisionConfiguration extends Ammo.btCollisionConfiguration {
        constructor();
        constructor(constructionInfo:btDefaultCollisionConstructionInfo);
        getCollisionAlgorithmCreateFunc(proxyType0:number,proxyType1:number):btCollisionAlgorithmCreateFunc;
        getCollisionAlgorithmPool():any;
        getPersistentManifoldPool():any;
        getSimplexSolver():any;
        getStackAllocator():btStackAlloc;
        setConvexConvexMultipointIterations(numPerturbationIterations:number,minimumPointsPerturbationThreshold:number):void;
    }
    export class ContactResultCallback {
        constructor();
        needsCollision(proxy0:btBroadphaseProxy):boolean;
        get_m_collisionFilterGroup():number;
        set_m_collisionFilterGroup(value:number):void;
        get_m_collisionFilterMask():number;
        set_m_collisionFilterMask(value:number):void;
    }
    export class btSphereSphereCollisionAlgorithm extends Ammo.btActivatingCollisionAlgorithm {
        constructor(mf:btPersistentManifold,ci:btCollisionAlgorithmConstructionInfo,body0:btCollisionObject,body1:btCollisionObject);
        constructor(ci:btCollisionAlgorithmConstructionInfo);
        calculateTimeOfImpact(body0:btCollisionObject,body1:btCollisionObject,dispatchInfo:btDispatcherInfo,resultOut:btManifoldResult):number;
        getAllContactManifolds(manifoldArray:btAlignedObjectArray):void;
        processCollision(body0:btCollisionObject,body1:btCollisionObject,dispatchInfo:btDispatcherInfo,resultOut:btManifoldResult):void;
    }
    export module btSphereSphereCollisionAlgorithm {
        export class CreateFunc extends Ammo.btCollisionAlgorithmCreateFunc {
            CreateCollisionAlgorithm(ci:btCollisionAlgorithmConstructionInfo,body0:btCollisionObject,body1:btCollisionObject):btCollisionAlgorithm;
        }
    }
    export class btConvexInternalShapeData {
        get_m_collisionShapeData():btCollisionShapeData;
        set_m_collisionShapeData(value:btCollisionShapeData):void;
        get_m_localScaling():btVector3FloatData;
        set_m_localScaling(value:btVector3FloatData):void;
        get_m_implicitShapeDimensions():btVector3FloatData;
        set_m_implicitShapeDimensions(value:btVector3FloatData):void;
        get_m_collisionMargin():number;
        set_m_collisionMargin(value:number):void;
        get_m_padding():number;
        set_m_padding(value:number):void;
    }
    export class btSimpleBroadphase extends Ammo.btBroadphaseInterface {
        static aabbOverlap(proxy0:btSimpleBroadphaseProxy,proxy1:btSimpleBroadphaseProxy):boolean;
        aabbTest(aabbMin:btVector3,aabbMax:btVector3,callback:btBroadphaseAabbCallback):void;
        constructor(maxProxies:number,overlappingPairCache:btOverlappingPairCache);
        calculateOverlappingPairs(dispatcher:btDispatcher):void;
        createProxy(aabbMin:btVector3,aabbMax:btVector3,shapeType:number,userPtr:any,collisionFilterGroup:number,collisionFilterMask:number,dispatcher:btDispatcher,multiSapProxy:any):btBroadphaseProxy;
        destroyProxy(proxy:btBroadphaseProxy,dispatcher:btDispatcher):void;
        getAabb(proxy:btBroadphaseProxy,aabbMin:btVector3,aabbMax:btVector3):void;
        getBroadphaseAabb(aabbMin:btVector3,aabbMax:btVector3):void;
        getOverlappingPairCache():btOverlappingPairCache;
        printStats():void;
        rayTest(rayFrom:btVector3,rayTo:btVector3,rayCallback:btBroadphaseRayCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        setAabb(proxy:btBroadphaseProxy,aabbMin:btVector3,aabbMax:btVector3,dispatcher:btDispatcher):void;
        testAabbOverlap(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy):boolean;
    }
    export class btCollisionConfiguration {
    }
    export class btPersistentManifold extends Ammo.btTypedObject {
        addManifoldPoint(newPoint:btManifoldPoint):number;
        constructor();
        constructor(body0:any,body1:any,arg0:number,contactBreakingThreshold:number,contactProcessingThreshold:number);
        clearManifold():void;
        clearUserCache(pt:btManifoldPoint):void;
        getBody0():any;
        getBody1():any;
        getCacheEntry(newPoint:btManifoldPoint):number;
        getContactBreakingThreshold():number;
        getContactPoint(index:number):btManifoldPoint;
        getContactProcessingThreshold():number;
        getNumContacts():number;
        refreshContactPoints(trA:btTransform,trB:btTransform):void;
        removeContactPoint(index:number):void;
        replaceContactPoint(newPoint:btManifoldPoint,insertIndex:number):void;
        setBodies(body0:any,body1:any):void;
        validContactDistance(pt:btManifoldPoint):boolean;
        get_m_companionIdA():number;
        set_m_companionIdA(value:number):void;
        get_m_companionIdB():number;
        set_m_companionIdB(value:number):void;
        get_m_index1a():number;
        set_m_index1a(value:number):void;
    }
    export class btNodeOverlapCallback {
    }
    export class btCompoundShape extends Ammo.btCollisionShape {
        addChildShape(localTransform:btTransform,shape:btCollisionShape):void;
        constructor(enableDynamicAabbTree:boolean);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        calculatePrincipalAxisTransform(masses:number,principal:btTransform,inertia:btVector3):void;
        calculateSerializeBufferSize():number;
        createAabbTreeFromChildren():void;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getChildList():btCompoundShapeChild;
        getChildShape(index:number):btCollisionShape;
        getChildTransform(index:number):btTransform;
        getDynamicAabbTree():btDbvt;
        getLocalScaling():btVector3;
        getMargin():number;
        getName():string;
        getNumChildShapes():number;
        getUpdateRevision():number;
        recalculateLocalAabb():void;
        removeChildShape(shape:btCollisionShape):void;
        removeChildShapeByIndex(childShapeindex:number):void;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setLocalScaling(scaling:btVector3):void;
        setMargin(margin:number):void;
        updateChildTransform(childIndex:number,newChildTransform:btTransform,shouldRecalculateLocalAabb:boolean):void;
    }
    export class btShortIntIndexTripletData {
        get_m_values():number;
        set_m_values(value:number):void;
        get_m_pad():string;
        set_m_pad(value:string):void;
    }
    export class btPoint2PointConstraintFloatData {
        get_m_typeConstraintData():btTypedConstraintData;
        set_m_typeConstraintData(value:btTypedConstraintData):void;
        get_m_pivotInA():btVector3FloatData;
        set_m_pivotInA(value:btVector3FloatData):void;
        get_m_pivotInB():btVector3FloatData;
        set_m_pivotInB(value:btVector3FloatData):void;
    }
    export class less {
    }
    export class btScaledBvhTriangleMeshShape extends Ammo.btConcaveShape {
        constructor(childShape:btBvhTriangleMeshShape,localScaling:btVector3);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        calculateSerializeBufferSize():number;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getChildShape():btBvhTriangleMeshShape;
        getLocalScaling():btVector3;
        getName():string;
        processAllTriangles(callback:btTriangleCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setLocalScaling(scaling:btVector3):void;
    }
    export class btDynamicsWorld extends Ammo.btCollisionWorld {
        addCharacter(character:btActionInterface):void;
        addConstraint(constraint:btTypedConstraint,disableCollisionsBetweenLinkedBodies:boolean):void;
        addVehicle(vehicle:btActionInterface):void;
        constructor(dispatcher:btDispatcher,broadphase:btBroadphaseInterface,collisionConfiguration:btCollisionConfiguration);
        getConstraint(index:number):btTypedConstraint;
        getNumConstraints():number;
        getSolverInfo():btContactSolverInfo;
        getWorldUserInfo():any;
        removeCharacter(character:btActionInterface):void;
        removeConstraint(constraint:btTypedConstraint):void;
        removeVehicle(vehicle:btActionInterface):void;
        setWorldUserInfo(worldUserInfo:any):void;
    }
    export class btDefaultVehicleRaycaster extends Ammo.btVehicleRaycaster {
        constructor(world:btDynamicsWorld);
        castRay(from:btVector3,to:btVector3,result:btVehicleRaycaster.btVehicleRaycasterResult):any;
    }
    export class btConstraintSetting {
        constructor();
        get_m_tau():number;
        set_m_tau(value:number):void;
        get_m_damping():number;
        set_m_damping(value:number):void;
        get_m_impulseClamp():number;
        set_m_impulseClamp(value:number):void;
    }
    export class btStackAlloc {
        allocate(size:number):any;
        beginBlock():btBlock;
        constructor(size:number);
        create(size:number):void;
        destroy():void;
        endBlock(block:btBlock):void;
        getAvailableMemory():number;
    }
    export class btSolverBodyObsolete {
        applyImpulse(linearComponent:btVector3,angularComponent:btVector3,impulseMagnitude:number):void;
        getAngularVelocity(angVel:btVector3):void;
        getVelocityInLocalPointObsolete(rel_pos:btVector3,velocity:btVector3):void;
        internalApplyPushImpulse(linearComponent:btVector3,angularComponent:btVector3,impulseMagnitude:number):void;
        writebackVelocity():void;
        writebackVelocity(timeStep:number):void;
        get_m_deltaLinearVelocity():btVector3;
        set_m_deltaLinearVelocity(value:btVector3):void;
        get_m_deltaAngularVelocity():btVector3;
        set_m_deltaAngularVelocity(value:btVector3):void;
        get_m_angularFactor():btVector3;
        set_m_angularFactor(value:btVector3):void;
        get_m_invMass():btVector3;
        set_m_invMass(value:btVector3):void;
        get_m_originalBody():btRigidBody;
        set_m_originalBody(value:btRigidBody):void;
        get_m_pushVelocity():btVector3;
        set_m_pushVelocity(value:btVector3):void;
        get_m_turnVelocity():btVector3;
        set_m_turnVelocity(value:btVector3):void;
    }
    export class btContactSolverInfo extends Ammo.btContactSolverInfoData {
        constructor();
    }
    export class CreateFunc extends Ammo.btCollisionAlgorithmCreateFunc {
        CreateCollisionAlgorithm(ci:btCollisionAlgorithmConstructionInfo,body0:btCollisionObject,body1:btCollisionObject):btCollisionAlgorithm;
    }
    export class btUniversalConstraint extends Ammo.btGeneric6DofConstraint {
        constructor(rbA:btRigidBody,rbB:btRigidBody,anchor:btVector3,axis1:btVector3,axis2:btVector3);
        getAnchor():btVector3;
        getAnchor2():btVector3;
        getAngle1():number;
        getAngle2():number;
        getAxis1():btVector3;
        getAxis2():btVector3;
        setAxis(axis1:btVector3,axis2:btVector3):void;
        setLowerLimit(ang1min:number,ang2min:number):void;
        setUpperLimit(ang1max:number,ang2max:number):void;
    }
    export class btGeneric6DofConstraintData {
        get_m_typeConstraintData():btTypedConstraintData;
        set_m_typeConstraintData(value:btTypedConstraintData):void;
        get_m_rbAFrame():btTransformFloatData;
        set_m_rbAFrame(value:btTransformFloatData):void;
        get_m_rbBFrame():btTransformFloatData;
        set_m_rbBFrame(value:btTransformFloatData):void;
        get_m_linearUpperLimit():btVector3FloatData;
        set_m_linearUpperLimit(value:btVector3FloatData):void;
        get_m_linearLowerLimit():btVector3FloatData;
        set_m_linearLowerLimit(value:btVector3FloatData):void;
        get_m_angularUpperLimit():btVector3FloatData;
        set_m_angularUpperLimit(value:btVector3FloatData):void;
        get_m_angularLowerLimit():btVector3FloatData;
        set_m_angularLowerLimit(value:btVector3FloatData):void;
        get_m_useLinearReferenceFrameA():number;
        set_m_useLinearReferenceFrameA(value:number):void;
        get_m_useOffsetForConstraintFrame():number;
        set_m_useOffsetForConstraintFrame(value:number):void;
    }
    export class btEmptyShape extends Ammo.btConcaveShape {
        constructor();
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getLocalScaling():btVector3;
        getName():string;
        processAllTriangles(arg0:btTriangleCallback,arg1:btVector3,arg2:btVector3):void;
        setLocalScaling(scaling:btVector3):void;
    }
    export class btCompoundShapeChild {
        get_m_transform():btTransform;
        set_m_transform(value:btTransform):void;
        get_m_childShape():btCollisionShape;
        set_m_childShape(value:btCollisionShape):void;
        get_m_childShapeType():number;
        set_m_childShapeType(value:number):void;
        get_m_childMargin():number;
        set_m_childMargin(value:number):void;
        get_m_node():btDbvtNode;
        set_m_node(value:btDbvtNode):void;
    }
    export class btBroadphasePairSortPredicate {
    }
    export class btOptimizedBvhNodeFloatData {
        get_m_aabbMinOrg():btVector3FloatData;
        set_m_aabbMinOrg(value:btVector3FloatData):void;
        get_m_aabbMaxOrg():btVector3FloatData;
        set_m_aabbMaxOrg(value:btVector3FloatData):void;
        get_m_escapeIndex():number;
        set_m_escapeIndex(value:number):void;
        get_m_subPart():number;
        set_m_subPart(value:number):void;
        get_m_triangleIndex():number;
        set_m_triangleIndex(value:number):void;
        get_m_pad():string;
        set_m_pad(value:string):void;
    }
    export class btHashKeyPtr {
        constructor(uid:number);
        equals(other:btHashKeyPtr):boolean;
        getHash():number;
        getUid1():number;
    }
    export class btRigidBody extends Ammo.btCollisionObject {
        addConstraintRef(c:btTypedConstraint):void;
        applyCentralForce(force:btVector3):void;
        applyCentralImpulse(impulse:btVector3):void;
        applyDamping(timeStep:number):void;
        applyForce(force:btVector3,rel_pos:btVector3):void;
        applyGravity():void;
        applyImpulse(impulse:btVector3,rel_pos:btVector3):void;
        applyTorque(torque:btVector3):void;
        applyTorqueImpulse(torque:btVector3):void;
        constructor(constructionInfo:btRigidBody.btRigidBodyConstructionInfo);
        constructor(mass:number,motionState:btMotionState,collisionShape:btCollisionShape,localInertia:btVector3);
        calculateSerializeBufferSize():number;
        checkCollideWithOverride(co:btCollisionObject):boolean;
        clearForces():void;
        computeAngularImpulseDenominator(axis:btVector3):number;
        computeImpulseDenominator(pos:btVector3,normal:btVector3):number;
        getAabb(aabbMin:btVector3,aabbMax:btVector3):void;
        getAngularDamping():number;
        getAngularFactor():btVector3;
        getAngularSleepingThreshold():number;
        getAngularVelocity():btVector3;
        getBroadphaseProxy():btBroadphaseProxy;
        getCenterOfMassPosition():btVector3;
        getCenterOfMassTransform():btTransform;
        getCollisionShape():btCollisionShape;
        getConstraintRef(index:number):btTypedConstraint;
        getDeltaAngularVelocity():btVector3;
        getDeltaLinearVelocity():btVector3;
        getFlags():number;
        getGravity():btVector3;
        getInvInertiaDiagLocal():btVector3;
        getInvInertiaTensorWorld():btMatrix3x3;
        getInvMass():number;
        getLinearDamping():number;
        getLinearFactor():btVector3;
        getLinearSleepingThreshold():number;
        getLinearVelocity():btVector3;
        getMotionState():btMotionState;
        getNumConstraintRefs():number;
        getOrientation():btQuaternion;
        getPushVelocity():btVector3;
        getTotalForce():btVector3;
        getTotalTorque():btVector3;
        getTurnVelocity():btVector3;
        getVelocityInLocalPoint(rel_pos:btVector3):btVector3;
        integrateVelocities(step:number):void;
        internalApplyImpulse(linearComponent:btVector3,angularComponent:btVector3,impulseMagnitude:number):void;
        internalApplyPushImpulse(linearComponent:btVector3,angularComponent:btVector3,impulseMagnitude:number):void;
        internalGetAngularFactor():btVector3;
        internalGetAngularVelocity(angVel:btVector3):void;
        internalGetDeltaAngularVelocity():btVector3;
        internalGetDeltaLinearVelocity():btVector3;
        internalGetInvMass():btVector3;
        internalGetPushVelocity():btVector3;
        internalGetTurnVelocity():btVector3;
        internalGetVelocityInLocalPointObsolete(rel_pos:btVector3,velocity:btVector3):void;
        internalWritebackVelocity():void;
        internalWritebackVelocity(timeStep:number):void;
        isInWorld():boolean;
        predictIntegratedTransform(step:number,predictedTransform:btTransform):void;
        proceedToTransform(newTrans:btTransform):void;
        removeConstraintRef(c:btTypedConstraint):void;
        saveKinematicState(step:number):void;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        serializeSingleObject(serializer:btSerializer):void;
        setAngularFactor(angFac:btVector3):void;
        setAngularFactor(angFac:number):void;
        setAngularVelocity(ang_vel:btVector3):void;
        setCenterOfMassTransform(xform:btTransform):void;
        setDamping(lin_damping:number,ang_damping:number):void;
        setFlags(flags:number):void;
        setGravity(acceleration:btVector3):void;
        setInvInertiaDiagLocal(diagInvInertia:btVector3):void;
        setLinearFactor(linearFactor:btVector3):void;
        setLinearVelocity(lin_vel:btVector3):void;
        setMassProps(mass:number,inertia:btVector3):void;
        setMotionState(motionState:btMotionState):void;
        setNewBroadphaseProxy(broadphaseProxy:btBroadphaseProxy):void;
        setSleepingThresholds(linear:number,angular:number):void;
        translate(v:btVector3):void;
        static upcast(colObj:btCollisionObject):Ammo.btRigidBody;
        updateDeactivation(timeStep:number):void;
        updateInertiaTensor():void;
        wantsSleeping():boolean;
        get_m_contactSolverType():number;
        set_m_contactSolverType(value:number):void;
        get_m_frictionSolverType():number;
        set_m_frictionSolverType(value:number):void;
    }
    export module btRigidBody {
        export class btRigidBodyConstructionInfo {
            constructor(mass:number,motionState:btMotionState,collisionShape:btCollisionShape,localInertia:btVector3);
            get_m_mass():number;
            set_m_mass(value:number):void;
            get_m_motionState():btMotionState;
            set_m_motionState(value:btMotionState):void;
            get_m_startWorldTransform():btTransform;
            set_m_startWorldTransform(value:btTransform):void;
            get_m_collisionShape():btCollisionShape;
            set_m_collisionShape(value:btCollisionShape):void;
            get_m_localInertia():btVector3;
            set_m_localInertia(value:btVector3):void;
            get_m_linearDamping():number;
            set_m_linearDamping(value:number):void;
            get_m_angularDamping():number;
            set_m_angularDamping(value:number):void;
            get_m_friction():number;
            set_m_friction(value:number):void;
            get_m_restitution():number;
            set_m_restitution(value:number):void;
            get_m_linearSleepingThreshold():number;
            set_m_linearSleepingThreshold(value:number):void;
            get_m_angularSleepingThreshold():number;
            set_m_angularSleepingThreshold(value:number):void;
            get_m_additionalDamping():boolean;
            set_m_additionalDamping(value:boolean):void;
            get_m_additionalDampingFactor():number;
            set_m_additionalDampingFactor(value:number):void;
            get_m_additionalLinearDampingThresholdSqr():number;
            set_m_additionalLinearDampingThresholdSqr(value:number):void;
            get_m_additionalAngularDampingThresholdSqr():number;
            set_m_additionalAngularDampingThresholdSqr(value:number):void;
            get_m_additionalAngularDampingFactor():number;
            set_m_additionalAngularDampingFactor(value:number):void;
        }
    }
    export class btOptimizedBvhNodeDoubleData {
        get_m_aabbMinOrg():btVector3DoubleData;
        set_m_aabbMinOrg(value:btVector3DoubleData):void;
        get_m_aabbMaxOrg():btVector3DoubleData;
        set_m_aabbMaxOrg(value:btVector3DoubleData):void;
        get_m_escapeIndex():number;
        set_m_escapeIndex(value:number):void;
        get_m_subPart():number;
        set_m_subPart(value:number):void;
        get_m_triangleIndex():number;
        set_m_triangleIndex(value:number):void;
        get_m_pad():string;
        set_m_pad(value:string):void;
    }
    export class btOptimizedBvh extends Ammo.btQuantizedBvh {
        constructor();
        build(triangles:btStridingMeshInterface,useQuantizedAabbCompression:boolean,bvhAabbMin:btVector3,bvhAabbMax:btVector3):void;
        refit(triangles:btStridingMeshInterface,aabbMin:btVector3,aabbMax:btVector3):void;
        refitPartial(triangles:btStridingMeshInterface,aabbMin:btVector3,aabbMax:btVector3):void;
        serializeInPlace(o_alignedDataBuffer:any,i_dataBufferSize:number,i_swapEndian:boolean):boolean;
        updateBvhNodes(meshInterface:btStridingMeshInterface,firstNode:number,endNode:number,index:number):void;
    }
    export class btTypedConstraint extends Ammo.btTypedObject {
        constructor(type:btTypedConstraintType,rbA:Ammo.btRigidBody);
        constructor(type:btTypedConstraintType,rbA:Ammo.btRigidBody,rbB:Ammo.btRigidBody);
        buildJacobian():void;
        calculateSerializeBufferSize():number;
        enableFeedback(needsFeedback:boolean):void;
        getAppliedImpulse():number;
        getBreakingImpulseThreshold():number;
        getConstraintType():btTypedConstraintType;
        getDbgDrawSize():number;
        getRigidBodyA():Ammo.btRigidBody;
        getRigidBodyB():Ammo.btRigidBody;
        getUid():number;
        getUserConstraintId():number;
        getUserConstraintPtr():any;
        getUserConstraintType():number;
        internalGetAppliedImpulse():number;
        internalSetAppliedImpulse(appliedImpulse:number):void;
        isEnabled():boolean;
        needsFeedback():boolean;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setBreakingImpulseThreshold(threshold:number):void;
        setDbgDrawSize(dbgDrawSize:number):void;
        setEnabled(enabled:boolean):void;
        setUserConstraintId(uid:number):void;
        setUserConstraintPtr(ptr:any):void;
        setUserConstraintType(userConstraintType:number):void;
        setupSolverConstraint(ca:btAlignedObjectArray,solverBodyA:number,solverBodyB:number,timeStep:number):void;
        solveConstraintObsolete(arg0:Ammo.btRigidBody,arg1:Ammo.btRigidBody,arg2:number):void;
    }
    export module btTypedConstraint {
        export class btConstraintInfo1 {
            get_m_numConstraintRows():number;
            set_m_numConstraintRows(value:number):void;
            get_nub():number;
            set_nub(value:number):void;
        }
        export class btConstraintInfo2 {
            get_fps():number;
            set_fps(value:number):void;
            get_erp():number;
            set_erp(value:number):void;
            get_m_J1linearAxis():number;
            set_m_J1linearAxis(value:number):void;
            get_m_J2linearAxis():number;
            set_m_J2linearAxis(value:number):void;
            get_rowskip():number;
            set_rowskip(value:number):void;
            get_m_constraintError():number;
            set_m_constraintError(value:number):void;
            get_m_lowerLimit():number;
            set_m_lowerLimit(value:number):void;
            get_findex():number;
            set_findex(value:number):void;
            get_m_numIterations():number;
            set_m_numIterations(value:number):void;
            get_m_damping():number;
            set_m_damping(value:number):void;
        }
    }
    export class btPolyhedralConvexShape extends Ammo.btConvexInternalShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor();
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        getConvexPolyhedron():any;
        initializePolyhedralFeatures():boolean;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
    }
    export class btTransformFloatData {
        get_m_basis():btMatrix3x3FloatData;
        set_m_basis(value:btMatrix3x3FloatData):void;
        get_m_origin():btVector3FloatData;
        set_m_origin(value:btVector3FloatData):void;
    }
    export class btIDebugDraw {
        drawAabb(from:btVector3,to:btVector3,color:btVector3):void;
        drawArc(center:btVector3,normal:btVector3,axis:btVector3,radiusA:number,radiusB:number,minAngle:number,maxAngle:number,color:btVector3,drawSect:boolean,stepDegrees:number):void;
        drawBox(bbMin:btVector3,bbMax:btVector3,color:btVector3):void;
        drawBox(bbMin:btVector3,bbMax:btVector3,trans:btTransform,color:btVector3):void;
        drawCapsule(radius:number,halfHeight:number,upAxis:number,transform:btTransform,color:btVector3):void;
        drawCone(radius:number,height:number,upAxis:number,transform:btTransform,color:btVector3):void;
        drawCylinder(radius:number,halfHeight:number,upAxis:number,transform:btTransform,color:btVector3):void;
        drawLine(from:btVector3,to:btVector3,fromColor:btVector3,toColor:btVector3):void;
        drawPlane(planeNormal:btVector3,planeConst:number,transform:btTransform,color:btVector3):void;
        drawSphere(radius:number,transform:btTransform,color:btVector3):void;
        drawSphere(p:btVector3,radius:number,color:btVector3):void;
        drawSpherePatch(center:btVector3,up:btVector3,axis:btVector3,radius:number,minTh:number,maxTh:number,minPs:number,maxPs:number,color:btVector3,stepDegrees:number):void;
        drawTransform(transform:btTransform,orthoLen:number):void;
        drawTriangle(v0:btVector3,v1:btVector3,v2:btVector3,arg0:btVector3,arg1:btVector3,arg2:btVector3,color:btVector3,alpha:number):void;
        drawTriangle(v0:btVector3,v1:btVector3,v2:btVector3,color:btVector3,arg0:number):void;
    }
    export class btDbvtBroadphase extends Ammo.btBroadphaseInterface {
        aabbTest(aabbMin:btVector3,aabbMax:btVector3,callback:btBroadphaseAabbCallback):void;
        static benchmark(arg0:btBroadphaseInterface):void;
        constructor();
        constructor(paircache:btOverlappingPairCache);
        calculateOverlappingPairs(dispatcher:btDispatcher):void;
        collide(dispatcher:btDispatcher):void;
        createProxy(aabbMin:btVector3,aabbMax:btVector3,shapeType:number,userPtr:any,collisionFilterGroup:number,collisionFilterMask:number,dispatcher:btDispatcher,multiSapProxy:any):btBroadphaseProxy;
        destroyProxy(proxy:btBroadphaseProxy,dispatcher:btDispatcher):void;
        getAabb(proxy:btBroadphaseProxy,aabbMin:btVector3,aabbMax:btVector3):void;
        getBroadphaseAabb(aabbMin:btVector3,aabbMax:btVector3):void;
        getOverlappingPairCache():btOverlappingPairCache;
        getVelocityPrediction():number;
        optimize():void;
        performDeferredRemoval(dispatcher:btDispatcher):void;
        printStats():void;
        rayTest(rayFrom:btVector3,rayTo:btVector3,rayCallback:btBroadphaseRayCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        resetPool(dispatcher:btDispatcher):void;
        setAabb(proxy:btBroadphaseProxy,aabbMin:btVector3,aabbMax:btVector3,dispatcher:btDispatcher):void;
        setAabbForceUpdate(absproxy:btBroadphaseProxy,aabbMin:btVector3,aabbMax:btVector3,arg0:btDispatcher):void;
        setVelocityPrediction(prediction:number):void;
        get_m_sets():btDbvt;
        set_m_sets(value:btDbvt):void;
        get_m_stageRoots():btDbvtProxy;
        set_m_stageRoots(value:btDbvtProxy):void;
        get_m_paircache():btOverlappingPairCache;
        set_m_paircache(value:btOverlappingPairCache):void;
        get_m_prediction():number;
        set_m_prediction(value:number):void;
        get_m_stageCurrent():number;
        set_m_stageCurrent(value:number):void;
        get_m_fupdates():number;
        set_m_fupdates(value:number):void;
        get_m_dupdates():number;
        set_m_dupdates(value:number):void;
        get_m_cupdates():number;
        set_m_cupdates(value:number):void;
        get_m_newpairs():number;
        set_m_newpairs(value:number):void;
        get_m_fixedleft():number;
        set_m_fixedleft(value:number):void;
        get_m_updates_call():number;
        set_m_updates_call(value:number):void;
        get_m_updates_done():number;
        set_m_updates_done(value:number):void;
        get_m_updates_ratio():number;
        set_m_updates_ratio(value:number):void;
        get_m_pid():number;
        set_m_pid(value:number):void;
        get_m_cid():number;
        set_m_cid(value:number):void;
        get_m_gid():number;
        set_m_gid(value:number):void;
        get_m_releasepaircache():boolean;
        set_m_releasepaircache(value:boolean):void;
        get_m_deferedcollide():boolean;
        set_m_deferedcollide(value:boolean):void;
        get_m_needcleanup():boolean;
        set_m_needcleanup(value:boolean):void;
    }
    export class btSimpleBroadphaseProxy extends Ammo.btBroadphaseProxy {
        GetNextFree():number;
        SetNextFree(next:number):void;
        constructor();
        constructor(minpt:btVector3,maxpt:btVector3,shapeType:number,userPtr:any,collisionFilterGroup:number,collisionFilterMask:number,multiSapProxy:any);
        get_m_nextFree():number;
        set_m_nextFree(value:number):void;
    }
    export class timespec {
        get_tv_sec():number;
        set_tv_sec(value:number):void;
        get_tv_nsec():number;
        set_tv_nsec(value:number):void;
    }
    export class btCollisionDispatcher extends Ammo.btDispatcher {
        allocateCollisionAlgorithm(size:number):any;
        constructor(collisionConfiguration:btCollisionConfiguration);
        clearManifold(manifold:btPersistentManifold):void;
        static defaultNearCallback(collisionPair:btBroadphasePair,dispatcher:btCollisionDispatcher,dispatchInfo:btDispatcherInfo):void;
        dispatchAllCollisionPairs(pairCache:btOverlappingPairCache,dispatchInfo:btDispatcherInfo,dispatcher:btDispatcher):void;
        findAlgorithm(body0:btCollisionObject,body1:btCollisionObject,sharedManifold:btPersistentManifold):btCollisionAlgorithm;
        freeCollisionAlgorithm(ptr:any):void;
        getCollisionConfiguration():btCollisionConfiguration;
        getDispatcherFlags():number;
        getInternalManifoldPointer():btPersistentManifold;
        getInternalManifoldPool():any;
        getManifoldByIndexInternal(index:number):btPersistentManifold;
        getNearCallback():any;
        getNewManifold(b0:any,b1:any):btPersistentManifold;
        getNumManifolds():number;
        needsCollision(body0:btCollisionObject,body1:btCollisionObject):boolean;
        needsResponse(body0:btCollisionObject,body1:btCollisionObject):boolean;
        registerCollisionCreateFunc(proxyType0:number,proxyType1:number,createFunc:btCollisionAlgorithmCreateFunc):void;
        releaseManifold(manifold:btPersistentManifold):void;
        setCollisionConfiguration(config:btCollisionConfiguration):void;
        setDispatcherFlags(flags:number):void;
    }
    export class btAxisSweep3 extends Ammo.btAxisSweep3Internal {
        constructor(worldAabbMin:btVector3,worldAabbMax:btVector3,maxHandles:number,pairCache:btOverlappingPairCache,disableRaycastAccelerator:boolean);
    }
    export class btCollisionAlgorithmConstructionInfo {
        constructor();
        constructor(dispatcher:btDispatcher,temp:number);
        get_m_dispatcher1():btDispatcher;
        set_m_dispatcher1(value:btDispatcher):void;
        get_m_manifold():btPersistentManifold;
        set_m_manifold(value:btPersistentManifold):void;
    }
    export class btStaticPlaneShapeData {
        get_m_collisionShapeData():btCollisionShapeData;
        set_m_collisionShapeData(value:btCollisionShapeData):void;
        get_m_localScaling():btVector3FloatData;
        set_m_localScaling(value:btVector3FloatData):void;
        get_m_planeNormal():btVector3FloatData;
        set_m_planeNormal(value:btVector3FloatData):void;
        get_m_planeConstant():number;
        set_m_planeConstant(value:number):void;
        get_m_pad():string;
        set_m_pad(value:string):void;
    }
    export class btDiscreteDynamicsWorld extends Ammo.btDynamicsWorld {
        addAction(arg0:btActionInterface):void;
        addCharacter(character:btActionInterface):void;
        addCollisionObject(collisionObject:btCollisionObject,collisionFilterGroup:number,collisionFilterMask:number):void;
        addConstraint(constraint:Ammo.btTypedConstraint,disableCollisionsBetweenLinkedBodies:boolean):void;
        addRigidBody(body:Ammo.btRigidBody):void;
        addRigidBody(body:Ammo.btRigidBody,group:number,mask:number):void;
        addVehicle(vehicle:btActionInterface):void;
        applyGravity():void;
        constructor(dispatcher:Ammo.btDispatcher,pairCache:btBroadphaseInterface,constraintSolver:btConstraintSolver,collisionConfiguration:btCollisionConfiguration);
        clearForces():void;
        debugDrawConstraint(constraint:Ammo.btTypedConstraint):void;
        debugDrawWorld():void;
        getCollisionWorld():btCollisionWorld;
        getConstraint(index:number):Ammo.btTypedConstraint;
        getConstraintSolver():btConstraintSolver;
        getGravity():btVector3;
        getNumConstraints():number;
        getSimulationIslandManager():any;
        getSynchronizeAllMotionStates():boolean;
        getWorldType():btDynamicsWorldType;
        removeAction(arg0:btActionInterface):void;
        removeCharacter(character:btActionInterface):void;
        removeCollisionObject(collisionObject:btCollisionObject):void;
        removeConstraint(constraint:Ammo.btTypedConstraint):void;
        removeRigidBody(body:Ammo.btRigidBody):void;
        removeVehicle(vehicle:btActionInterface):void;
        serialize(serializer:btSerializer):void;
        setConstraintSolver(solver:btConstraintSolver):void;
        setGravity(gravity:btVector3):void;
        setNumTasks(numTasks:number):void;
        setSynchronizeAllMotionStates(synchronizeAll:boolean):void;
        stepSimulation(timeStep:number,maxSubSteps:number,fixedTimeStep?:number):number;
        synchronizeMotionStates():void;
        synchronizeSingleMotionState(body:Ammo.btRigidBody):void;
        updateVehicles(timeStep:number):void;
    }
    export class btTriangleCallback {
    }
    export class btCollisionObjectDoubleData {
        get_m_broadphaseHandle():any;
        set_m_broadphaseHandle(value:any):void;
        get_m_collisionShape():any;
        set_m_collisionShape(value:any):void;
        get_m_rootCollisionShape():btCollisionShapeData;
        set_m_rootCollisionShape(value:btCollisionShapeData):void;
        get_m_name():string;
        set_m_name(value:string):void;
        get_m_worldTransform():btTransformDoubleData;
        set_m_worldTransform(value:btTransformDoubleData):void;
        get_m_interpolationWorldTransform():btTransformDoubleData;
        set_m_interpolationWorldTransform(value:btTransformDoubleData):void;
        get_m_interpolationLinearVelocity():btVector3DoubleData;
        set_m_interpolationLinearVelocity(value:btVector3DoubleData):void;
        get_m_interpolationAngularVelocity():btVector3DoubleData;
        set_m_interpolationAngularVelocity(value:btVector3DoubleData):void;
        get_m_anisotropicFriction():btVector3DoubleData;
        set_m_anisotropicFriction(value:btVector3DoubleData):void;
        get_m_contactProcessingThreshold():number;
        set_m_contactProcessingThreshold(value:number):void;
        get_m_deactivationTime():number;
        set_m_deactivationTime(value:number):void;
        get_m_friction():number;
        set_m_friction(value:number):void;
        get_m_restitution():number;
        set_m_restitution(value:number):void;
        get_m_hitFraction():number;
        set_m_hitFraction(value:number):void;
        get_m_ccdSweptSphereRadius():number;
        set_m_ccdSweptSphereRadius(value:number):void;
        get_m_ccdMotionThreshold():number;
        set_m_ccdMotionThreshold(value:number):void;
        get_m_hasAnisotropicFriction():number;
        set_m_hasAnisotropicFriction(value:number):void;
        get_m_collisionFlags():number;
        set_m_collisionFlags(value:number):void;
        get_m_islandTag1():number;
        set_m_islandTag1(value:number):void;
        get_m_companionId():number;
        set_m_companionId(value:number):void;
        get_m_activationState1():number;
        set_m_activationState1(value:number):void;
        get_m_internalType():number;
        set_m_internalType(value:number):void;
        get_m_checkCollideWith():number;
        set_m_checkCollideWith(value:number):void;
        get_m_padding():string;
        set_m_padding(value:string):void;
    }
    export class btHashMap {
        clear():void;
        find(key:any):any;
        findIndex(key:any):number;
        getAtIndex(index:number):any;
        insert(key:any,value:any):void;
        op_get(key:any):any;
        remove(key:any):void;
        size():number;
    }
    export class btConeTwistConstraint extends Ammo.btTypedConstraint {
        GetPointForAngle(fAngleInRadians:number,fLength:number):btVector3;
        constructor(rbA:Ammo.btRigidBody,rbB:Ammo.btRigidBody,rbAFrame:btTransform,rbBFrame:btTransform);
        constructor(rbA:Ammo.btRigidBody,rbAFrame:btTransform);
        buildJacobian():void;
        calcAngleInfo():void;
        calcAngleInfo2(transA:btTransform,transB:btTransform,invInertiaWorldA:btMatrix3x3,invInertiaWorldB:btMatrix3x3):void;
        calculateSerializeBufferSize():number;
        enableMotor(b:boolean):void;
        getAFrame():btTransform;
        getBFrame():btTransform;
        getFixThresh():number;
        getFrameOffsetA():btTransform;
        getFrameOffsetB():btTransform;
        getInfo1(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo1NonVirtual(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo2(info:btTypedConstraint.btConstraintInfo2):void;
        getInfo2NonVirtual(info:btTypedConstraint.btConstraintInfo2,transA:btTransform,transB:btTransform,invInertiaWorldA:btMatrix3x3,invInertiaWorldB:btMatrix3x3):void;
        getParam(num:number,axis:number):number;
        getRigidBodyA():Ammo.btRigidBody;
        getRigidBodyB():Ammo.btRigidBody;
        getSolveSwingLimit():number;
        getSolveTwistLimit():number;
        getSwingSpan1():number;
        getSwingSpan2():number;
        getTwistAngle():number;
        getTwistLimitSign():number;
        getTwistSpan():number;
        isPastSwingLimit():boolean;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setAngularOnly(angularOnly:boolean):void;
        setDamping(damping:number):void;
        setFixThresh(fixThresh:number):void;
        setFrames(frameA:btTransform,frameB:btTransform):void;
        setLimit(limitIndex:number,limitValue:number):void;
        setLimit(_swingSpan1:number,_swingSpan2:number,_twistSpan:number,_softness:number,_biasFactor:number,_relaxationFactor:number):void;
        setMaxMotorImpulse(maxMotorImpulse:number):void;
        setMaxMotorImpulseNormalized(maxMotorImpulse:number):void;
        setMotorTarget(q:btQuaternion):void;
        setMotorTargetInConstraintSpace(q:btQuaternion):void;
        setParam(num:number,value:number,axis:number):void;
        solveConstraintObsolete(bodyA:Ammo.btRigidBody,bodyB:Ammo.btRigidBody,timeStep:number):void;
        updateRHS(timeStep:number):void;
    }
    export class btHingeConstraint extends Ammo.btTypedConstraint {
        constructor(rbA:Ammo.btRigidBody,rbB:Ammo.btRigidBody,pivotInA:btVector3,pivotInB:btVector3,axisInA:btVector3,axisInB:btVector3,useReferenceFrameA:boolean);
        constructor(rbA:Ammo.btRigidBody,pivotInA:btVector3,axisInA:btVector3,useReferenceFrameA:boolean);
        constructor(rbA:Ammo.btRigidBody,rbB:Ammo.btRigidBody,rbAFrame:btTransform,rbBFrame:btTransform,useReferenceFrameA:boolean);
        constructor(rbA:Ammo.btRigidBody,rbAFrame:btTransform,useReferenceFrameA:boolean);
        buildJacobian():void;
        calculateSerializeBufferSize():number;
        enableAngularMotor(enableMotor:boolean,targetVelocity:number,maxMotorImpulse:number):void;
        enableMotor(enableMotor:boolean):void;
        getAFrame():btTransform;
        getAngularOnly():boolean;
        getBFrame():btTransform;
        getEnableAngularMotor():boolean;
        getFrameOffsetA():btTransform;
        getFrameOffsetB():btTransform;
        getHingeAngle():number;
        getHingeAngle(transA:btTransform,transB:btTransform):number;
        getInfo1(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo1NonVirtual(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo2(info:btTypedConstraint.btConstraintInfo2):void;
        getInfo2Internal(info:btTypedConstraint.btConstraintInfo2,transA:btTransform,transB:btTransform,angVelA:btVector3,angVelB:btVector3):void;
        getInfo2InternalUsingFrameOffset(info:btTypedConstraint.btConstraintInfo2,transA:btTransform,transB:btTransform,angVelA:btVector3,angVelB:btVector3):void;
        getInfo2NonVirtual(info:btTypedConstraint.btConstraintInfo2,transA:btTransform,transB:btTransform,angVelA:btVector3,angVelB:btVector3):void;
        getLimitSign():number;
        getLowerLimit():number;
        getMaxMotorImpulse():number;
        getMotorTargetVelosity():number;
        getParam(num:number,axis:number):number;
        getRigidBodyA():Ammo.btRigidBody;
        getRigidBodyB():Ammo.btRigidBody;
        getSolveLimit():number;
        getUpperLimit():number;
        getUseFrameOffset():boolean;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setAngularOnly(angularOnly:boolean):void;
        setAxis(axisInA:btVector3):void;
        setFrames(frameA:btTransform,frameB:btTransform):void;
        setLimit(low:number,high:number,_softness:number,_biasFactor:number,_relaxationFactor:number):void;
        setMaxMotorImpulse(maxMotorImpulse:number):void;
        setMotorTarget(qAinB:btQuaternion,dt:number):void;
        setMotorTarget(targetAngle:number,dt:number):void;
        setParam(num:number,value:number,axis:number):void;
        setUseFrameOffset(frameOffsetOnOff:boolean):void;
        testLimit(transA:btTransform,transB:btTransform):void;
        updateRHS(timeStep:number):void;
    }
    export class btRotationalLimitMotor {
        constructor();
        constructor(limot:btRotationalLimitMotor);
        isLimited():boolean;
        needApplyTorques():boolean;
        solveAngularLimits(timeStep:number,axis:btVector3,jacDiagABInv:number,body0:Ammo.btRigidBody,body1:Ammo.btRigidBody):number;
        testLimitValue(test_value:number):number;
        get_m_loLimit():number;
        set_m_loLimit(value:number):void;
        get_m_hiLimit():number;
        set_m_hiLimit(value:number):void;
        get_m_targetVelocity():number;
        set_m_targetVelocity(value:number):void;
        get_m_maxMotorForce():number;
        set_m_maxMotorForce(value:number):void;
        get_m_maxLimitForce():number;
        set_m_maxLimitForce(value:number):void;
        get_m_damping():number;
        set_m_damping(value:number):void;
        get_m_limitSoftness():number;
        set_m_limitSoftness(value:number):void;
        get_m_normalCFM():number;
        set_m_normalCFM(value:number):void;
        get_m_stopERP():number;
        set_m_stopERP(value:number):void;
        get_m_stopCFM():number;
        set_m_stopCFM(value:number):void;
        get_m_bounce():number;
        set_m_bounce(value:number):void;
        get_m_enableMotor():boolean;
        set_m_enableMotor(value:boolean):void;
        get_m_currentLimitError():number;
        set_m_currentLimitError(value:number):void;
        get_m_currentPosition():number;
        set_m_currentPosition(value:number):void;
        get_m_currentLimit():number;
        set_m_currentLimit(value:number):void;
        get_m_accumulatedImpulse():number;
        set_m_accumulatedImpulse(value:number):void;
    }
    export class btVehicleRaycaster {
    }
    export module btVehicleRaycaster {
        export class btVehicleRaycasterResult {
            constructor();
            get_m_hitPointInWorld():btVector3;
            set_m_hitPointInWorld(value:btVector3):void;
            get_m_hitNormalInWorld():btVector3;
            set_m_hitNormalInWorld(value:btVector3):void;
            get_m_distFraction():number;
            set_m_distFraction(value:number):void;
        }
    }
    export class btConeShapeZ extends Ammo.btConeShape {
        constructor(radius:number,height:number);
    }
    export class IClone {
        CloneLeaf(arg0:btDbvtNode):void;
    }
    export class btConeShapeX extends Ammo.btConeShape {
        constructor(radius:number,height:number);
    }
    export class btTriangleMesh extends Ammo.btTriangleIndexVertexArray {
        addIndex(index:number):void;
        addTriangle(vertex0:btVector3,vertex1:btVector3,vertex2:btVector3,removeDuplicateVertices:boolean):void;
        constructor(use32bitIndices:boolean,use4componentVertices:boolean);
        findOrAddVertex(vertex:btVector3,removeDuplicateVertices:boolean):number;
        getNumTriangles():number;
        getUse32bitIndices():boolean;
        getUse4componentVertices():boolean;
        preallocateIndices(numindices:number):void;
        preallocateVertices(numverts:number):void;
        get_m_weldingThreshold():number;
        set_m_weldingThreshold(value:number):void;
    }
    export class btBroadphaseAabbCallback {
    }
    export class btBroadphasePair {
        constructor();
        constructor(other:Ammo.btBroadphasePair);
        constructor(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy);
        get_m_pProxy0():btBroadphaseProxy;
        set_m_pProxy0(value:btBroadphaseProxy):void;
        get_m_pProxy1():btBroadphaseProxy;
        set_m_pProxy1(value:btBroadphaseProxy):void;
        get_m_algorithm():btCollisionAlgorithm;
        set_m_algorithm(value:btCollisionAlgorithm):void;
    }
    export module btBroadphasePair {
    }
    export class btConstraintInfo1 {
        get_m_numConstraintRows():number;
        set_m_numConstraintRows(value:number):void;
        get_nub():number;
        set_nub(value:number):void;
    }
    export class btConstraintInfo2 {
        get_fps():number;
        set_fps(value:number):void;
        get_erp():number;
        set_erp(value:number):void;
        get_m_J1linearAxis():number;
        set_m_J1linearAxis(value:number):void;
        get_m_J2linearAxis():number;
        set_m_J2linearAxis(value:number):void;
        get_rowskip():number;
        set_rowskip(value:number):void;
        get_m_constraintError():number;
        set_m_constraintError(value:number):void;
        get_m_lowerLimit():number;
        set_m_lowerLimit(value:number):void;
        get_findex():number;
        set_findex(value:number):void;
        get_m_numIterations():number;
        set_m_numIterations(value:number):void;
        get_m_damping():number;
        set_m_damping(value:number):void;
    }
    export class btBroadphaseRayCallback extends Ammo.btBroadphaseAabbCallback {
        get_m_rayDirectionInverse():btVector3;
        set_m_rayDirectionInverse(value:btVector3):void;
        get_m_signs():number;
        set_m_signs(value:number):void;
        get_m_lambda_max():number;
        set_m_lambda_max(value:number):void;
    }
    export class ConvexResultCallback {
        constructor();
        hasHit():boolean;
        needsCollision(proxy0:btBroadphaseProxy):boolean;
        get_m_closestHitFraction():number;
        set_m_closestHitFraction(value:number):void;
        get_m_collisionFilterGroup():number;
        set_m_collisionFilterGroup(value:number):void;
        get_m_collisionFilterMask():number;
        set_m_collisionFilterMask(value:number):void;
    }
    export class btDefaultMotionState extends Ammo.btMotionState {
        constructor(startTrans:btTransform,centerOfMassOffset?:btTransform);
        getWorldTransform(centerOfMassWorldTrans:btTransform):void;
        setWorldTransform(centerOfMassWorldTrans:btTransform):void;
        get_m_graphicsWorldTrans():btTransform;
        set_m_graphicsWorldTrans(value:btTransform):void;
        get_m_centerOfMassOffset():btTransform;
        set_m_centerOfMassOffset(value:btTransform):void;
        get_m_startWorldTrans():btTransform;
        set_m_startWorldTrans(value:btTransform):void;
        get_m_userPointer():any;
        set_m_userPointer(value:any):void;
    }
    export class btTriangleMeshShape extends Ammo.btConcaveShape {
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getLocalAabbMax():btVector3;
        getLocalAabbMin():btVector3;
        getLocalScaling():btVector3;
        getMeshInterface():btStridingMeshInterface;
        getName():string;
        localGetSupportingVertex(vec:btVector3):btVector3;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
        processAllTriangles(callback:btTriangleCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        recalcLocalAabb():void;
        setLocalScaling(scaling:btVector3):void;
    }
    export class btTriangleInfoData {
        get_m_flags():number;
        set_m_flags(value:number):void;
        get_m_edgeV0V1Angle():number;
        set_m_edgeV0V1Angle(value:number):void;
        get_m_edgeV1V2Angle():number;
        set_m_edgeV1V2Angle(value:number):void;
        get_m_edgeV2V0Angle():number;
        set_m_edgeV2V0Angle(value:number):void;
    }
    export class sStkNN {
        constructor();
        constructor(na:btDbvtNode,nb:btDbvtNode);
        get_a():Ammo.btDbvtNode;
        set_a(value:Ammo.btDbvtNode):void;
        get_b():Ammo.btDbvtNode;
        set_b(value:Ammo.btDbvtNode):void;
    }
    export class btContinuousDynamicsWorld extends Ammo.btDiscreteDynamicsWorld {
        constructor(dispatcher:btDispatcher,pairCache:btBroadphaseInterface,constraintSolver:btConstraintSolver,collisionConfiguration:btCollisionConfiguration);
        calculateTimeOfImpacts(timeStep:number):void;
        getWorldType():btDynamicsWorldType;
        internalSingleStepSimulation(timeStep:number):void;
    }
    export class btDbvtNode {
        isinternal():boolean;
        isleaf():boolean;
        get_volume():btDbvtAabbMm;
        set_volume(value:btDbvtAabbMm):void;
        get_parent():Ammo.btDbvtNode;
        set_parent(value:Ammo.btDbvtNode):void;
    }
    export module btDbvtNode {
    }
    export class btSliderConstraintData {
        get_m_typeConstraintData():btTypedConstraintData;
        set_m_typeConstraintData(value:btTypedConstraintData):void;
        get_m_rbAFrame():btTransformFloatData;
        set_m_rbAFrame(value:btTransformFloatData):void;
        get_m_rbBFrame():btTransformFloatData;
        set_m_rbBFrame(value:btTransformFloatData):void;
        get_m_linearUpperLimit():number;
        set_m_linearUpperLimit(value:number):void;
        get_m_linearLowerLimit():number;
        set_m_linearLowerLimit(value:number):void;
        get_m_angularUpperLimit():number;
        set_m_angularUpperLimit(value:number):void;
        get_m_angularLowerLimit():number;
        set_m_angularLowerLimit(value:number):void;
        get_m_useLinearReferenceFrameA():number;
        set_m_useLinearReferenceFrameA(value:number):void;
        get_m_useOffsetForConstraintFrame():number;
        set_m_useOffsetForConstraintFrame(value:number):void;
    }
    export class btConeShape extends Ammo.btConvexInternalShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(radius:number,height:number);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        getConeUpIndex():number;
        getHeight():number;
        getName():string;
        getRadius():number;
        localGetSupportingVertex(vec:btVector3):btVector3;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
        setConeUpIndex(upIndex:number):void;
        setLocalScaling(scaling:btVector3):void;
    }
    export class btSolverConstraint {
        get_m_relpos1CrossNormal():btVector3;
        set_m_relpos1CrossNormal(value:btVector3):void;
        get_m_contactNormal():btVector3;
        set_m_contactNormal(value:btVector3):void;
        get_m_relpos2CrossNormal():btVector3;
        set_m_relpos2CrossNormal(value:btVector3):void;
        get_m_angularComponentA():btVector3;
        set_m_angularComponentA(value:btVector3):void;
        get_m_angularComponentB():btVector3;
        set_m_angularComponentB(value:btVector3):void;
        get_m_appliedPushImpulse():number;
        set_m_appliedPushImpulse(value:number):void;
        get_m_appliedImpulse():number;
        set_m_appliedImpulse(value:number):void;
        get_m_friction():number;
        set_m_friction(value:number):void;
        get_m_jacDiagABInv():number;
        set_m_jacDiagABInv(value:number):void;
        get_m_rhs():number;
        set_m_rhs(value:number):void;
        get_m_cfm():number;
        set_m_cfm(value:number):void;
        get_m_lowerLimit():number;
        set_m_lowerLimit(value:number):void;
        get_m_upperLimit():number;
        set_m_upperLimit(value:number):void;
        get_m_rhsPenetration():number;
        set_m_rhsPenetration(value:number):void;
    }
    export module btSolverConstraint {
    }
    export class btWheelInfo {
        constructor(ci:btWheelInfoConstructionInfo);
        getSuspensionRestLength():number;
        updateWheel(chassis:Ammo.btRigidBody,raycastInfo:btWheelInfo.RaycastInfo):void;
        get_m_raycastInfo():RaycastInfo;
        set_m_raycastInfo(value:RaycastInfo):void;
        get_m_worldTransform():btTransform;
        set_m_worldTransform(value:btTransform):void;
        get_m_chassisConnectionPointCS():btVector3;
        set_m_chassisConnectionPointCS(value:btVector3):void;
        get_m_wheelDirectionCS():btVector3;
        set_m_wheelDirectionCS(value:btVector3):void;
        get_m_wheelAxleCS():btVector3;
        set_m_wheelAxleCS(value:btVector3):void;
        get_m_suspensionRestLength1():number;
        set_m_suspensionRestLength1(value:number):void;
        get_m_maxSuspensionTravelCm():number;
        set_m_maxSuspensionTravelCm(value:number):void;
        get_m_wheelsRadius():number;
        set_m_wheelsRadius(value:number):void;
        get_m_suspensionStiffness():number;
        set_m_suspensionStiffness(value:number):void;
        get_m_wheelsDampingCompression():number;
        set_m_wheelsDampingCompression(value:number):void;
        get_m_wheelsDampingRelaxation():number;
        set_m_wheelsDampingRelaxation(value:number):void;
        get_m_frictionSlip():number;
        set_m_frictionSlip(value:number):void;
        get_m_steering():number;
        set_m_steering(value:number):void;
        get_m_rotation():number;
        set_m_rotation(value:number):void;
        get_m_deltaRotation():number;
        set_m_deltaRotation(value:number):void;
        get_m_rollInfluence():number;
        set_m_rollInfluence(value:number):void;
        get_m_maxSuspensionForce():number;
        set_m_maxSuspensionForce(value:number):void;
        get_m_engineForce():number;
        set_m_engineForce(value:number):void;
        get_m_brake():number;
        set_m_brake(value:number):void;
        get_m_bIsFrontWheel():boolean;
        set_m_bIsFrontWheel(value:boolean):void;
        get_m_clientInfo():any;
        set_m_clientInfo(value:any):void;
        get_m_clippedInvContactDotSuspension():number;
        set_m_clippedInvContactDotSuspension(value:number):void;
        get_m_suspensionRelativeVelocity():number;
        set_m_suspensionRelativeVelocity(value:number):void;
        get_m_wheelsSuspensionForce():number;
        set_m_wheelsSuspensionForce(value:number):void;
        get_m_skidInfo():number;
        set_m_skidInfo(value:number):void;
    }
    export module btWheelInfo {
        export class RaycastInfo {
            get_m_contactNormalWS():btVector3;
            set_m_contactNormalWS(value:btVector3):void;
            get_m_contactPointWS():btVector3;
            set_m_contactPointWS(value:btVector3):void;
            get_m_suspensionLength():number;
            set_m_suspensionLength(value:number):void;
            get_m_hardPointWS():btVector3;
            set_m_hardPointWS(value:btVector3):void;
            get_m_wheelDirectionWS():btVector3;
            set_m_wheelDirectionWS(value:btVector3):void;
            get_m_wheelAxleWS():btVector3;
            set_m_wheelAxleWS(value:btVector3):void;
            get_m_isInContact():boolean;
            set_m_isInContact(value:boolean):void;
            get_m_groundObject():any;
            set_m_groundObject(value:any):void;
        }
    }
    export class __pthread_internal_list {
        get___prev():__pthread_internal_list;
        set___prev(value:__pthread_internal_list):void;
        get___next():__pthread_internal_list;
        set___next(value:__pthread_internal_list):void;
    }
    export class btBU_Simplex1to4 extends Ammo.btPolyhedralConvexAabbCachingShape {
        addVertex(pt:btVector3):void;
        constructor();
        constructor(pt0:btVector3);
        constructor(pt0:btVector3,pt1:btVector3);
        constructor(pt0:btVector3,pt1:btVector3,pt2:btVector3);
        constructor(pt0:btVector3,pt1:btVector3,pt2:btVector3,pt3:btVector3);
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getEdge(i:number,pa:btVector3,pb:btVector3):void;
        getIndex(i:number):number;
        getName():string;
        getNumEdges():number;
        getNumPlanes():number;
        getNumVertices():number;
        getPlane(planeNormal:btVector3,planeSupport:btVector3,i:number):void;
        getVertex(i:number,vtx:btVector3):void;
        isInside(pt:btVector3,tolerance:number):boolean;
        reset():void;
    }
    export class btMultiSapProxy extends Ammo.btBroadphaseProxy {
        constructor(aabbMin:btVector3,aabbMax:btVector3,shapeType:number,userPtr:any,collisionFilterGroup:number,collisionFilterMask:number);
        get_m_bridgeProxies():Ammo.btAlignedObjectArray;
        set_m_bridgeProxies(value:Ammo.btAlignedObjectArray):void;
        get_m_aabbMin():btVector3;
        set_m_aabbMin(value:btVector3):void;
        get_m_aabbMax():btVector3;
        set_m_aabbMax(value:btVector3):void;
        get_m_shapeType():number;
        set_m_shapeType(value:number):void;
    }
    export class btVector4 extends Ammo.btVector3 {
        absolute4():btVector4;
        constructor();
        constructor(x:number,y:number,z:number,w:number);
        closestAxis4():number;
        getW():number;
        maxAxis4():number;
        minAxis4():number;
        // Will cause TypeScript error due to how method overloading is defined in TypeScript
        //setValue(x:number,y:number,z:number,w:number):void;
    }
    export class btGeneric6DofSpringConstraintData {
        get_m_6dofData():btGeneric6DofConstraintData;
        set_m_6dofData(value:btGeneric6DofConstraintData):void;
        get_m_springEnabled():number;
        set_m_springEnabled(value:number):void;
        get_m_equilibriumPoint():number;
        set_m_equilibriumPoint(value:number):void;
        get_m_springStiffness():number;
        set_m_springStiffness(value:number):void;
        get_m_springDamping():number;
        set_m_springDamping(value:number):void;
    }
    export class btRigidBodyFloatData {
        get_m_collisionObjectData():btCollisionObjectFloatData;
        set_m_collisionObjectData(value:btCollisionObjectFloatData):void;
        get_m_invInertiaTensorWorld():btMatrix3x3FloatData;
        set_m_invInertiaTensorWorld(value:btMatrix3x3FloatData):void;
        get_m_linearVelocity():btVector3FloatData;
        set_m_linearVelocity(value:btVector3FloatData):void;
        get_m_angularVelocity():btVector3FloatData;
        set_m_angularVelocity(value:btVector3FloatData):void;
        get_m_angularFactor():btVector3FloatData;
        set_m_angularFactor(value:btVector3FloatData):void;
        get_m_linearFactor():btVector3FloatData;
        set_m_linearFactor(value:btVector3FloatData):void;
        get_m_gravity():btVector3FloatData;
        set_m_gravity(value:btVector3FloatData):void;
        get_m_gravity_acceleration():btVector3FloatData;
        set_m_gravity_acceleration(value:btVector3FloatData):void;
        get_m_invInertiaLocal():btVector3FloatData;
        set_m_invInertiaLocal(value:btVector3FloatData):void;
        get_m_totalForce():btVector3FloatData;
        set_m_totalForce(value:btVector3FloatData):void;
        get_m_totalTorque():btVector3FloatData;
        set_m_totalTorque(value:btVector3FloatData):void;
        get_m_inverseMass():number;
        set_m_inverseMass(value:number):void;
        get_m_linearDamping():number;
        set_m_linearDamping(value:number):void;
        get_m_angularDamping():number;
        set_m_angularDamping(value:number):void;
        get_m_additionalDampingFactor():number;
        set_m_additionalDampingFactor(value:number):void;
        get_m_additionalLinearDampingThresholdSqr():number;
        set_m_additionalLinearDampingThresholdSqr(value:number):void;
        get_m_additionalAngularDampingThresholdSqr():number;
        set_m_additionalAngularDampingThresholdSqr(value:number):void;
        get_m_additionalAngularDampingFactor():number;
        set_m_additionalAngularDampingFactor(value:number):void;
        get_m_linearSleepingThreshold():number;
        set_m_linearSleepingThreshold(value:number):void;
        get_m_angularSleepingThreshold():number;
        set_m_angularSleepingThreshold(value:number):void;
        get_m_additionalDamping():number;
        set_m_additionalDamping(value:number):void;
    }
    export class btActionInterface {
    }
    export class btVector3 {
        absolute():btVector3;
        angle(v:btVector3):number;
        constructor();
        constructor(x:number,y:number,z:number);
        closestAxis():number;
        cross(v:btVector3):btVector3;
        deSerialize(dataIn:btVector3FloatData):void;
        deSerializeDouble(dataIn:btVector3DoubleData):void;
        deSerializeFloat(dataIn:btVector3FloatData):void;
        distance(v:btVector3):number;
        distance2(v:btVector3):number;
        dot(v:btVector3):number;
        furthestAxis():number;
        fuzzyZero():boolean;
        getSkewSymmetricMatrix(v0:btVector3,v1:btVector3,v2:btVector3):void;
        getX():number;
        getY():number;
        getZ():number;
        isZero():boolean;
        length():number;
        length2():number;
        lerp(v:btVector3,t:number):btVector3;
        maxAxis():number;
        minAxis():number;
        normalize():btVector3;
        normalized():btVector3;
        op_eq(other:btVector3):boolean;
        rotate(wAxis:btVector3,angle:number):btVector3;
        safeNormalize():btVector3;
        serialize(dataOut:btVector3FloatData):void;
        serializeDouble(dataOut:btVector3DoubleData):void;
        serializeFloat(dataOut:btVector3FloatData):void;
        setInterpolate3(v0:btVector3,v1:btVector3,rt:number):void;
        setMax(other:btVector3):void;
        setMin(other:btVector3):void;
        setValue(x:number,y:number,z:number):void;
        setW(w:number):void;
        setX(x:number):void;
        setY(y:number):void;
        setZ(z:number):void;
        setZero():void;
        triple(v1:btVector3,v2:btVector3):number;
        w():number;
        x():number;
        y():number;
        z():number;
        get_m_floats():number;
        set_m_floats(value:number):void;
    }
    export class btMeshPartData {
        get_m_vertices3f():btVector3FloatData;
        set_m_vertices3f(value:btVector3FloatData):void;
        get_m_vertices3d():btVector3DoubleData;
        set_m_vertices3d(value:btVector3DoubleData):void;
        get_m_indices32():btIntIndexData;
        set_m_indices32(value:btIntIndexData):void;
        get_m_3indices16():btShortIntIndexTripletData;
        set_m_3indices16(value:btShortIntIndexTripletData):void;
        get_m_3indices8():btCharIndexTripletData;
        set_m_3indices8(value:btCharIndexTripletData):void;
        get_m_indices16():btShortIntIndexData;
        set_m_indices16(value:btShortIntIndexData):void;
        get_m_numTriangles():number;
        set_m_numTriangles(value:number):void;
        get_m_numVertices():number;
        set_m_numVertices(value:number):void;
    }
    export class btSerializer {
    }
    export class btTriangleInfo {
        constructor();
        get_m_flags():number;
        set_m_flags(value:number):void;
        get_m_edgeV0V1Angle():number;
        set_m_edgeV0V1Angle(value:number):void;
        get_m_edgeV1V2Angle():number;
        set_m_edgeV1V2Angle(value:number):void;
        get_m_edgeV2V0Angle():number;
        set_m_edgeV2V0Angle(value:number):void;
    }
    export class btPointerUid {
    }
    export module btPointerUid {
    }
    export class btConstraintRow {
        get_m_normal():number;
        set_m_normal(value:number):void;
        get_m_rhs():number;
        set_m_rhs(value:number):void;
        get_m_jacDiagInv():number;
        set_m_jacDiagInv(value:number):void;
        get_m_lowerLimit():number;
        set_m_lowerLimit(value:number):void;
        get_m_upperLimit():number;
        set_m_upperLimit(value:number):void;
        get_m_accumImpulse():number;
        set_m_accumImpulse(value:number):void;
    }
    export class sStkNP {
        constructor(n:Ammo.btDbvtNode,m:number);
        get_node():Ammo.btDbvtNode;
        set_node(value:Ammo.btDbvtNode):void;
        get_mask():number;
        set_mask(value:number):void;
    }
    export class ClosestRayResultCallback extends Ammo.RayResultCallback {
        constructor(rayFromWorld:btVector3,rayToWorld:btVector3);
        addSingleResult(rayResult:LocalRayResult,normalInWorldSpace:boolean):number;
        get_m_rayFromWorld():btVector3;
        set_m_rayFromWorld(value:btVector3):void;
        get_m_rayToWorld():btVector3;
        set_m_rayToWorld(value:btVector3):void;
        get_m_hitNormalWorld():btVector3;
        set_m_hitNormalWorld(value:btVector3):void;
        get_m_hitPointWorld():btVector3;
        set_m_hitPointWorld(value:btVector3):void;
    }
    export class LocalRayResult {
        constructor(collisionObject:btCollisionObject,localShapeInfo:btCollisionWorld.LocalShapeInfo,hitNormalLocal:btVector3,hitFraction:number);
        get_m_collisionObject():btCollisionObject;
        set_m_collisionObject(value:btCollisionObject):void;
        get_m_localShapeInfo():btCollisionWorld.LocalShapeInfo;
        set_m_localShapeInfo(value:btCollisionWorld.LocalShapeInfo):void;
        get_m_hitNormalLocal():btVector3;
        set_m_hitNormalLocal(value:btVector3):void;
        get_m_hitFraction():number;
        set_m_hitFraction(value:number):void;
    }
    export class btHinge2Constraint extends Ammo.btGeneric6DofSpringConstraint {
        constructor(rbA:Ammo.btRigidBody,rbB:Ammo.btRigidBody,anchor:btVector3,axis1:btVector3,axis2:btVector3);
        getAnchor():btVector3;
        getAnchor2():btVector3;
        getAngle1():number;
        getAngle2():number;
        getAxis1():btVector3;
        getAxis2():btVector3;
        setLowerLimit(ang1min:number):void;
        setUpperLimit(ang1max:number):void;
    }
    export class IWriter {
    }
    export class btAlignedObjectArray {
        at(n:number):any;
        constructor();
        constructor(otherArray:Ammo.btAlignedObjectArray);
        capacity():number;
        clear():void;
        copyFromArray(otherArray:Ammo.btAlignedObjectArray):void;
        downHeap(pArr:any,k:number,n:number,CompareFunc:any):void;
        expand(fillValue:any):any;
        expandNonInitializing():any;
        findBinarySearch(key:any):number;
        findanyinearSearch(key:any):number;
        heapSort(CompareFunc:any):void;
        initializeFromBuffer(buffer:any,size:number,capacity:number):void;
        op_get(n:number):any;
        pop_back():void;
        push_back(_Val:any):void;
        quickSort(CompareFunc:any):void;
        quickSortInternal(CompareFunc:any,lo:number,hi:number):void;
        remove(key:any):void;
        reserve(_Count:number):void;
        resize(newsize:number,fillData:any):void;
        size():number;
        swap(index0:number,index1:number):void;
    }
    export module btAlignedObjectArray {
        export class less {
        }
    }
    export class btStridingMeshInterfaceData {
        get_m_meshPartsPtr():btMeshPartData;
        set_m_meshPartsPtr(value:btMeshPartData):void;
        get_m_scaling():btVector3FloatData;
        set_m_scaling(value:btVector3FloatData):void;
        get_m_numMeshParts():number;
        set_m_numMeshParts(value:number):void;
        get_m_padding():string;
        set_m_padding(value:string):void;
    }
    export class btConstraintSolver {
        prepareSolve(arg0:number,arg1:number):void;
    }
    export module btConstraintSolver {
        export class btIDebugDraw {
        }
    }
    export class btRaycastVehicle extends Ammo.btActionInterface {
        addWheel(connectionPointCS0:btVector3,wheelDirectionCS0:btVector3,wheelAxleCS:btVector3,suspensionRestLength:number,wheelRadius:number,tuning:btRaycastVehicle.btVehicleTuning,isFrontWheel:boolean):Ammo.btWheelInfo;
        applyEngineForce(force:number,wheel:number):void;
        constructor(tuning:btRaycastVehicle.btVehicleTuning,chassis:Ammo.btRigidBody,raycaster:Ammo.btVehicleRaycaster);
        debugDraw(debugDrawer:btIDebugDraw):void;
        getChassisWorldTransform():btTransform;
        getCurrentSpeedKmHour():number;
        getForwardAxis():number;
        getForwardVector():btVector3;
        getNumWheels():number;
        getRightAxis():number;
        getRigidBody():Ammo.btRigidBody;
        getSteeringValue(wheel:number):number;
        getUpAxis():number;
        getUserConstraintId():number;
        getUserConstraintType():number;
        getWheelInfo(index:number):Ammo.btWheelInfo;
        getWheelTransformWS(wheelIndex:number):btTransform;
        rayCast(wheel:Ammo.btWheelInfo):number;
        resetSuspension():void;
        setBrake(brake:number,wheelIndex:number):void;
        setCoordinateSystem(rightIndex:number,upIndex:number,forwardIndex:number):void;
        setPitchControl(pitch:number):void;
        setSteeringValue(steering:number,wheel:number):void;
        setUserConstraintId(uid:number):void;
        setUserConstraintType(userConstraintType:number):void;
        updateAction(collisionWorld:btCollisionWorld,step:number):void;
        updateFriction(timeStep:number):void;
        updateSuspension(deltaTime:number):void;
        updateVehicle(step:number):void;
        updateWheelTransform(wheelIndex:number,interpolatedTransform:boolean):void;
        updateWheelTransformsWS(wheel:Ammo.btWheelInfo,interpolatedTransform:boolean):void;
        get_m_wheelInfo():Ammo.btAlignedObjectArray;
        set_m_wheelInfo(value:Ammo.btAlignedObjectArray):void;
    }
    export module btRaycastVehicle {
        export class btVehicleTuning {
            constructor();
            get_m_suspensionStiffness():number;
            set_m_suspensionStiffness(value:number):void;
            get_m_suspensionCompression():number;
            set_m_suspensionCompression(value:number):void;
            get_m_suspensionDamping():number;
            set_m_suspensionDamping(value:number):void;
            get_m_maxSuspensionTravelCm():number;
            set_m_maxSuspensionTravelCm(value:number):void;
            get_m_frictionSlip():number;
            set_m_frictionSlip(value:number):void;
            get_m_maxSuspensionForce():number;
            set_m_maxSuspensionForce(value:number):void;
        }
    }
    export class AllHitsRayResultCallback extends Ammo.RayResultCallback {
        constructor(rayFromWorld:btVector3,rayToWorld:btVector3);
        addSingleResult(rayResult:LocalRayResult,normalInWorldSpace:boolean):number;
        get_m_collisionObjects():Ammo.btAlignedObjectArray;
        set_m_collisionObjects(value:Ammo.btAlignedObjectArray):void;
        get_m_rayFromWorld():btVector3;
        set_m_rayFromWorld(value:btVector3):void;
        get_m_rayToWorld():btVector3;
        set_m_rayToWorld(value:btVector3):void;
        get_m_hitNormalWorld():Ammo.btAlignedObjectArray;
        set_m_hitNormalWorld(value:Ammo.btAlignedObjectArray):void;
        get_m_hitPointWorld():Ammo.btAlignedObjectArray;
        set_m_hitPointWorld(value:Ammo.btAlignedObjectArray):void;
        get_m_hitFractions():Ammo.btAlignedObjectArray;
        set_m_hitFractions(value:Ammo.btAlignedObjectArray):void;
    }
    export class btCylinderShapeX extends Ammo.btCylinderShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(halfExtents:btVector3);
        getName():string;
        getRadius():number;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
    }
    export class RayResultCallback {
        constructor();
        hasHit():boolean;
        needsCollision(proxy0:btBroadphaseProxy):boolean;
        get_m_closestHitFraction():number;
        set_m_closestHitFraction(value:number):void;
        get_m_collisionObject():btCollisionObject;
        set_m_collisionObject(value:btCollisionObject):void;
        get_m_collisionFilterGroup():number;
        set_m_collisionFilterGroup(value:number):void;
        get_m_collisionFilterMask():number;
        set_m_collisionFilterMask(value:number):void;
        get_m_flags():number;
        set_m_flags(value:number):void;
    }
    export class btUniformScalingShape extends Ammo.btConvexShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(convexChildShape:btConvexShape,uniformScalingFactor:number);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getAabbSlow(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getChildShape():btConvexShape;
        getLocalScaling():btVector3;
        getMargin():number;
        getName():string;
        getNumPreferredPenetrationDirections():number;
        getPreferredPenetrationDirection(index:number,penetrationVector:btVector3):void;
        getUniformScalingFactor():number;
        localGetSupportingVertex(vec:btVector3):btVector3;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
        setLocalScaling(scaling:btVector3):void;
        setMargin(margin:number):void;
    }
    export class btVehicleRaycasterResult {
        constructor();
        get_m_hitPointInWorld():btVector3;
        set_m_hitPointInWorld(value:btVector3):void;
        get_m_hitNormalInWorld():btVector3;
        set_m_hitNormalInWorld(value:btVector3):void;
        get_m_distFraction():number;
        set_m_distFraction(value:number):void;
    }
    export class btQuadWord {
        constructor();
        constructor(x:number,y:number,z:number);
        constructor(x:number,y:number,z:number,w:number);
        getX():number;
        getY():number;
        getZ():number;
        op_eq(other:btQuadWord):boolean;
        setMax(other:btQuadWord):void;
        setMin(other:btQuadWord):void;
        setValue(x:number,y:number,z:number):void;
        setValue(x:number,y:number,z:number,w:number):void;
        setW(w:number):void;
        setX(x:number):void;
        setY(y:number):void;
        setZ(z:number):void;
        w():number;
        x():number;
        y():number;
        z():number;
    }
    export class btCylinderShape extends Ammo.btConvexInternalShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(halfExtents:btVector3);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        calculateSerializeBufferSize():number;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getHalfExtentsWithMargin():btVector3;
        getHalfExtentsWithoutMargin():btVector3;
        getName():string;
        getRadius():number;
        getUpAxis():number;
        localGetSupportingVertex(vec:btVector3):btVector3;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setLocalScaling(scaling:btVector3):void;
        setMargin(collisionMargin:number):void;
    }
    export class btStorageResult extends Ammo.btDiscreteCollisionDetectorInterface.Result {
        addContactPoint(normalOnBInWorld:btVector3,pointInWorld:btVector3,depth:number):void;
        constructor();
        get_m_normalOnSurfaceB():btVector3;
        set_m_normalOnSurfaceB(value:btVector3):void;
        get_m_closestPointInB():btVector3;
        set_m_closestPointInB(value:btVector3):void;
        get_m_distance():number;
        set_m_distance(value:number):void;
    }
    export class btOptimizedBvhNode {
        get_m_aabbMinOrg():btVector3;
        set_m_aabbMinOrg(value:btVector3):void;
        get_m_aabbMaxOrg():btVector3;
        set_m_aabbMaxOrg(value:btVector3):void;
        get_m_escapeIndex():number;
        set_m_escapeIndex(value:number):void;
        get_m_subPart():number;
        set_m_subPart(value:number):void;
        get_m_triangleIndex():number;
        set_m_triangleIndex(value:number):void;
        get_m_padding():number;
        set_m_padding(value:number):void;
    }
    export class btDbvtProxy extends Ammo.btBroadphaseProxy {
        constructor(aabbMin:btVector3,aabbMax:btVector3,userPtr:any,collisionFilterGroup:number,collisionFilterMask:number);
        get_leaf():Ammo.btDbvtNode;
        set_leaf(value:Ammo.btDbvtNode):void;
        get_links():btDbvtProxy;
        set_links(value:btDbvtProxy):void;
        get_stage():number;
        set_stage(value:number):void;
    }
    export class btWheelInfoConstructionInfo {
        get_m_chassisConnectionCS():btVector3;
        set_m_chassisConnectionCS(value:btVector3):void;
        get_m_wheelDirectionCS():btVector3;
        set_m_wheelDirectionCS(value:btVector3):void;
        get_m_wheelAxleCS():btVector3;
        set_m_wheelAxleCS(value:btVector3):void;
        get_m_suspensionRestLength():number;
        set_m_suspensionRestLength(value:number):void;
        get_m_maxSuspensionTravelCm():number;
        set_m_maxSuspensionTravelCm(value:number):void;
        get_m_wheelRadius():number;
        set_m_wheelRadius(value:number):void;
        get_m_suspensionStiffness():number;
        set_m_suspensionStiffness(value:number):void;
        get_m_wheelsDampingCompression():number;
        set_m_wheelsDampingCompression(value:number):void;
        get_m_wheelsDampingRelaxation():number;
        set_m_wheelsDampingRelaxation(value:number):void;
        get_m_frictionSlip():number;
        set_m_frictionSlip(value:number):void;
        get_m_maxSuspensionForce():number;
        set_m_maxSuspensionForce(value:number):void;
        get_m_bIsFrontWheel():boolean;
        set_m_bIsFrontWheel(value:boolean):void;
    }
    export class ConcreteContactResultCallback extends Ammo.btCollisionWorld.ContactResultCallback {
        constructor();
        addSingleResult(cp:btManifoldPoint,colObj0:btCollisionObject,partId0:number,index0:number,colObj1:btCollisionObject,partId1:number,index1:number):number;
    }
    export class btSequentialImpulseConstraintSolver extends Ammo.btConstraintSolver {
        btRand2():number;
        btRandInt2(n:number):number;
        constructor();
        getRandSeed():number;
        reset():void;
        setRandSeed(seed:number):void;
        solveGroup(bodies:btCollisionObject,numBodies:number,manifold:btPersistentManifold,numManifolds:number,constraints:Ammo.btTypedConstraint,numConstraints:number,info:btContactSolverInfo,debugDrawer:btIDebugDraw,stackAlloc:btStackAlloc,dispatcher:btDispatcher):number;
    }
    export class btSimpleDynamicsWorld extends Ammo.btDynamicsWorld {
        addAction(action:btActionInterface):void;
        addRigidBody(body:Ammo.btRigidBody):void;
        addRigidBody(body:Ammo.btRigidBody,group:number,mask:number):void;
        constructor(dispatcher:btDispatcher,pairCache:btBroadphaseInterface,constraintSolver:Ammo.btConstraintSolver,collisionConfiguration:btCollisionConfiguration);
        clearForces():void;
        debugDrawWorld():void;
        getConstraintSolver():Ammo.btConstraintSolver;
        getGravity():btVector3;
        getWorldType():btDynamicsWorldType;
        removeAction(action:btActionInterface):void;
        removeCollisionObject(collisionObject:btCollisionObject):void;
        removeRigidBody(body:Ammo.btRigidBody):void;
        setConstraintSolver(solver:Ammo.btConstraintSolver):void;
        setGravity(gravity:btVector3):void;
        stepSimulation(timeStep:number,maxSubSteps:number,fixedTimeStep:number):number;
        synchronizeMotionStates():void;
        updateAabbs():void;
    }
    export class btDbvt {
        static allocate(ifree:Ammo.btAlignedObjectArray,stock:Ammo.btAlignedObjectArray,value:sStkNPS):number;
        static benchmark():void;
        constructor();
        clear():void;
        clone(dest:Ammo.btDbvt,iclone:IClone):void;
        static collideKDOP(root:Ammo.btDbvtNode,normals:btVector3,offsets:number,count:number,policy:ICollide):void;
        static collideOCL(root:Ammo.btDbvtNode,normals:btVector3,offsets:number,sortaxis:btVector3,count:number,policy:ICollide,fullsort:boolean):void;
        collideTT(root0:Ammo.btDbvtNode,root1:Ammo.btDbvtNode,policy:ICollide):void;
        collideTTpersistentStack(root0:Ammo.btDbvtNode,root1:Ammo.btDbvtNode,policy:ICollide):void;
        static collideTU(root:Ammo.btDbvtNode,policy:ICollide):void;
        collideTV(root:Ammo.btDbvtNode,volume:btDbvtAabbMm,policy:ICollide):void;
        static countLeaves(node:Ammo.btDbvtNode):number;
        empty():boolean;
        static enumLeaves(root:Ammo.btDbvtNode,policy:ICollide):void;
        static enumNodes(root:Ammo.btDbvtNode,policy:ICollide):void;
        static extractLeaves(node:Ammo.btDbvtNode,leaves:Ammo.btAlignedObjectArray):void;
        insert(box:btDbvtAabbMm,data:any):Ammo.btDbvtNode;
        static maxdepth(node:Ammo.btDbvtNode):number;
        static nearest(i:number,a:btDbvt.sStkNPS,v:number,l:number,h:number):number;
        optimizeBottomUp():void;
        optimizeIncremental(passes:number):void;
        optimizeTopDown(bu_treshold:number):void;
        static rayTest(root:Ammo.btDbvtNode,rayFrom:btVector3,rayTo:btVector3,policy:ICollide):void;
        rayTestInternal(root:Ammo.btDbvtNode,rayFrom:btVector3,rayTo:btVector3,rayDirectionInverse:btVector3,signs:number,lambda_max:number,aabbMin:btVector3,aabbMax:btVector3,policy:ICollide):void;
        remove(leaf:Ammo.btDbvtNode):void;
        update(leaf:Ammo.btDbvtNode,lookahead:number):void;
        update(leaf:Ammo.btDbvtNode,volume:btDbvtAabbMm):void;
        update(leaf:Ammo.btDbvtNode,volume:btDbvtAabbMm,velocity:btVector3,margin:number):boolean;
        update(leaf:Ammo.btDbvtNode,volume:btDbvtAabbMm,velocity:btVector3):boolean;
        update(leaf:Ammo.btDbvtNode,volume:btDbvtAabbMm,margin:number):boolean;
        write(iwriter:btDbvt.IWriter):void;
        get_m_root():Ammo.btDbvtNode;
        set_m_root(value:Ammo.btDbvtNode):void;
        get_m_free():Ammo.btDbvtNode;
        set_m_free(value:Ammo.btDbvtNode):void;
        get_m_lkhd():number;
        set_m_lkhd(value:number):void;
        get_m_leaves():number;
        set_m_leaves(value:number):void;
        get_m_opath():number;
        set_m_opath(value:number):void;
        get_m_stkStack():Ammo.btAlignedObjectArray;
        set_m_stkStack(value:Ammo.btAlignedObjectArray):void;
    }
    export module btDbvt {
        export class sStkNN {
            constructor();
            constructor(na:Ammo.btDbvtNode,nb:Ammo.btDbvtNode);
            get_a():Ammo.btDbvtNode;
            set_a(value:Ammo.btDbvtNode):void;
            get_b():Ammo.btDbvtNode;
            set_b(value:Ammo.btDbvtNode):void;
        }
        export class sStkNP {
            constructor(n:Ammo.btDbvtNode,m:number);
            get_node():Ammo.btDbvtNode;
            set_node(value:Ammo.btDbvtNode):void;
            get_mask():number;
            set_mask(value:number):void;
        }
        export class sStkNPS {
            constructor();
            constructor(n:Ammo.btDbvtNode,m:number,v:number);
            get_node():Ammo.btDbvtNode;
            set_node(value:Ammo.btDbvtNode):void;
            get_mask():number;
            set_mask(value:number):void;
            get_value():number;
            set_value(value:number):void;
        }
        export class sStkCLN {
            constructor(n:Ammo.btDbvtNode,p:Ammo.btDbvtNode);
            get_node():Ammo.btDbvtNode;
            set_node(value:Ammo.btDbvtNode):void;
            get_parent():Ammo.btDbvtNode;
            set_parent(value:Ammo.btDbvtNode):void;
        }
        export class ICollide {
            AllLeaves(arg0:Ammo.btDbvtNode):boolean;
            Descent(arg0:Ammo.btDbvtNode):boolean;
            Process(arg0:Ammo.btDbvtNode,arg1:Ammo.btDbvtNode):void;
            Process(arg0:Ammo.btDbvtNode):void;
            Process(n:Ammo.btDbvtNode,arg0:number):void;
        }
        export class IWriter {
        }
        export class IClone {
            CloneLeaf(arg0:Ammo.btDbvtNode):void;
        }
    }
    export class btManifoldResult extends Ammo.btDiscreteCollisionDetectorInterface.Result {
        addContactPoint(normalOnBInWorld:btVector3,pointInWorld:btVector3,depth:number):void;
        constructor();
        constructor(body0:btCollisionObject,body1:btCollisionObject);
        getBody0Internal():btCollisionObject;
        getBody1Internal():btCollisionObject;
        getPersistentManifold():btPersistentManifold;
        refreshContactPoints():void;
        setPersistentManifold(manifoldPtr:btPersistentManifold):void;
        setShapeIdentifiersA(partId0:number,index0:number):void;
        setShapeIdentifiersB(partId1:number,index1:number):void;
    }
    export class btMultiSphereShape extends Ammo.btConvexInternalAabbCachingShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(positions:btVector3,radi:number,numSpheres:number);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        calculateSerializeBufferSize():number;
        getName():string;
        getSphereCount():number;
        getSpherePosition(index:number):btVector3;
        getSphereRadius(index:number):number;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
        serialize(dataBuffer:any,serializer:btSerializer):string;
    }
    export class btHashedOverlappingPairCache extends Ammo.btOverlappingPairCache {
        GetCount():number;
        addOverlappingPair(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy):Ammo.btBroadphasePair;
        constructor();
        cleanOverlappingPair(pair:Ammo.btBroadphasePair,dispatcher:btDispatcher):void;
        cleanProxyFromPairs(proxy:btBroadphaseProxy,dispatcher:btDispatcher):void;
        findPair(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy):Ammo.btBroadphasePair;
        getNumOverlappingPairs():number;
        getOverlapFilterCallback():btOverlapFilterCallback;
        getOverlappingPairArray():Ammo.btAlignedObjectArray;
        getOverlappingPairArrayPtr():Ammo.btBroadphasePair;
        needsBroadphaseCollision(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy):boolean;
        processAllOverlappingPairs(arg0:btOverlapCallback,dispatcher:btDispatcher):void;
        removeOverlappingPair(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy,dispatcher:btDispatcher):any;
        removeOverlappingPairsContainingProxy(proxy:btBroadphaseProxy,dispatcher:btDispatcher):void;
        setOverlapFilterCallback(callback:btOverlapFilterCallback):void;
    }
    export class btTransformUtil {
        static calculateDiffAxisAngle(transform0:btTransform,transform1:btTransform,axis:btVector3,angle:number):void;
        static calculateDiffAxisAngleQuaternion(orn0:btQuaternion,orn1a:btQuaternion,axis:btVector3,angle:number):void;
        static calculateVelocity(transform0:btTransform,transform1:btTransform,timeStep:number,linVel:btVector3,angVel:btVector3):void;
        static calculateVelocityQuaternion(pos0:btVector3,pos1:btVector3,orn0:btQuaternion,orn1:btQuaternion,timeStep:number,linVel:btVector3,angVel:btVector3):void;
        static integrateTransform(curTrans:btTransform,linvel:btVector3,angvel:btVector3,timeStep:number,predictedTransform:btTransform):void;
    }
    export class sStkNPS {
        constructor();
        constructor(n:Ammo.btDbvtNode,m:number,v:number);
        get_node():Ammo.btDbvtNode;
        set_node(value:Ammo.btDbvtNode):void;
        get_mask():number;
        set_mask(value:number):void;
        get_value():number;
        set_value(value:number):void;
    }
    export class btHeightfieldTerrainShape extends Ammo.btConcaveShape {
        constructor(heightStickWidth:number,heightStickLength:number,heightfieldData:any,heightScale:number,minHeight:number,maxHeight:number,upAxis:number,heightDataType:PHY_ScalarType,flipQuadEdges:boolean);
        constructor(heightStickWidth:number,heightStickLength:number,heightfieldData:any,maxHeight:number,upAxis:number,useFloatData:boolean,flipQuadEdges:boolean);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getLocalScaling():btVector3;
        getName():string;
        processAllTriangles(callback:btTriangleCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        setLocalScaling(scaling:btVector3):void;
        setUseDiamondSubdivision(useDiamondSubdivision:boolean):void;
    }
    export module btHeightfieldTerrainShape {
    }
    export class btMatrix3x3DoubleData {
        get_m_el():btVector3DoubleData;
        set_m_el(value:btVector3DoubleData):void;
    }
    export class btConvexInternalAabbCachingShape extends Ammo.btConvexInternalShape {
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        recalcLocalAabb():void;
        setLocalScaling(scaling:btVector3):void;
    }
    export class btConvexShape extends Ammo.btCollisionShape {
        constructor();
        getAabbNonVirtual(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getMarginNonVirtual():number;
        localGetSupportVertexNonVirtual(vec:btVector3):btVector3;
        localGetSupportVertexWithoutMarginNonVirtual(vec:btVector3):btVector3;
    }
    export class btDiscreteCollisionDetectorInterface {
    }
    export module btDiscreteCollisionDetectorInterface {
        export class Result {
        }
        export class ClosestPointInput {
            constructor();
            get_m_transformA():btTransform;
            set_m_transformA(value:btTransform):void;
            get_m_transformB():btTransform;
            set_m_transformB(value:btTransform):void;
            get_m_maximumDistanceSquared():number;
            set_m_maximumDistanceSquared(value:number):void;
            get_m_stackAlloc():btStackAlloc;
            set_m_stackAlloc(value:btStackAlloc):void;
        }
    }
    export class btDefaultCollisionConstructionInfo {
        constructor();
        get_m_stackAlloc():btStackAlloc;
        set_m_stackAlloc(value:btStackAlloc):void;
        get_m_persistentManifoldPool():any;
        set_m_persistentManifoldPool(value:any):void;
        get_m_collisionAlgorithmPool():any;
        set_m_collisionAlgorithmPool(value:any):void;
        get_m_defaultMaxPersistentManifoldPoolSize():number;
        set_m_defaultMaxPersistentManifoldPoolSize(value:number):void;
        get_m_defaultMaxCollisionAlgorithmPoolSize():number;
        set_m_defaultMaxCollisionAlgorithmPoolSize(value:number):void;
        get_m_customCollisionAlgorithmMaxElementSize():number;
        set_m_customCollisionAlgorithmMaxElementSize(value:number):void;
        get_m_defaultStackAllocatorSize():number;
        set_m_defaultStackAllocatorSize(value:number):void;
        get_m_useEpaPenetrationAlgorithm():number;
        set_m_useEpaPenetrationAlgorithm(value:number):void;
    }
    export class btDispatcher {
        allocateCollisionAlgorithm(size:number):any;
        clearManifold(manifold:btPersistentManifold):void;
        dispatchAllCollisionPairs(pairCache:btOverlappingPairCache,dispatchInfo:btDispatcherInfo,dispatcher:btDispatcher):void;
        findAlgorithm(body0:btCollisionObject,body1:btCollisionObject,sharedManifold:btPersistentManifold):btCollisionAlgorithm;
        freeCollisionAlgorithm(ptr:any):void;
        getInternalManifoldPool():any;
        getNewManifold(b0:any,b1:any):btPersistentManifold;
        getNumManifolds():number;
        needsCollision(body0:btCollisionObject,body1:btCollisionObject):boolean;
        needsResponse(body0:btCollisionObject,body1:btCollisionObject):boolean;
        releaseManifold(manifold:btPersistentManifold):void;
    }
    export class btScaledTriangleMeshShapeData {
        get_m_trimeshShapeData():btTriangleMeshShapeData;
        set_m_trimeshShapeData(value:btTriangleMeshShapeData):void;
        get_m_localScaling():btVector3FloatData;
        set_m_localScaling(value:btVector3FloatData):void;
    }
    export class btJacobianEntry {
        constructor();
        constructor(world2A:btMatrix3x3,world2B:btMatrix3x3,rel_pos1:btVector3,rel_pos2:btVector3,jointAxis:btVector3,inertiaInvA:btVector3,massInvA:number,inertiaInvB:btVector3,massInvB:number);
        constructor(jointAxis:btVector3,world2A:btMatrix3x3,world2B:btMatrix3x3,inertiaInvA:btVector3,inertiaInvB:btVector3);
        constructor(axisInA:btVector3,axisInB:btVector3,inertiaInvA:btVector3,inertiaInvB:btVector3);
        constructor(world2A:btMatrix3x3,rel_pos1:btVector3,rel_pos2:btVector3,jointAxis:btVector3,inertiaInvA:btVector3,massInvA:number);
        getDiagonal():number;
        getNonDiagonal(jacB:btJacobianEntry,massInvA:number):number;
        getNonDiagonal(jacB:btJacobianEntry,massInvA:number,massInvB:number):number;
        getRelativeVelocity(linvelA:btVector3,angvelA:btVector3,linvelB:btVector3,angvelB:btVector3):number;
        get_m_linearJointAxis():btVector3;
        set_m_linearJointAxis(value:btVector3):void;
        get_m_aJ():btVector3;
        set_m_aJ(value:btVector3):void;
        get_m_bJ():btVector3;
        set_m_bJ(value:btVector3):void;
        get_m_0MinvJt():btVector3;
        set_m_0MinvJt(value:btVector3):void;
        get_m_1MinvJt():btVector3;
        set_m_1MinvJt(value:btVector3):void;
        get_m_Adiag():number;
        set_m_Adiag(value:number):void;
    }
    export class btNullPairCache extends Ammo.btOverlappingPairCache {
        addOverlappingPair(arg0:btBroadphaseProxy,arg1:btBroadphaseProxy):Ammo.btBroadphasePair;
        cleanOverlappingPair(arg0:Ammo.btBroadphasePair,arg1:btDispatcher):void;
        cleanProxyFromPairs(arg0:btBroadphaseProxy,arg1:btDispatcher):void;
        findPair(arg0:btBroadphaseProxy,arg1:btBroadphaseProxy):Ammo.btBroadphasePair;
        getNumOverlappingPairs():number;
        getOverlappingPairArray():Ammo.btAlignedObjectArray;
        getOverlappingPairArrayPtr():Ammo.btBroadphasePair;
        hasDeferredRemoval():boolean;
        processAllOverlappingPairs(arg0:btOverlapCallback,arg1:btDispatcher):void;
        removeOverlappingPair(arg0:btBroadphaseProxy,arg1:btBroadphaseProxy,arg2:btDispatcher):any;
        removeOverlappingPairsContainingProxy(arg0:btBroadphaseProxy,arg1:btDispatcher):void;
        setInternalGhostPairCallback(arg0:btOverlappingPairCallback):void;
        setOverlapFilterCallback(arg0:btOverlapFilterCallback):void;
        sortOverlappingPairs(dispatcher:btDispatcher):void;
    }
    export class btOverlappingPairCallback {
    }
    export class btHashInt {
        constructor(uid:number);
        equals(other:btHashInt):boolean;
        getHash():number;
        getUid1():number;
        setUid1(uid:number):void;
    }
    export class btCollisionAlgorithmCreateFunc {
        CreateCollisionAlgorithm(arg0:btCollisionAlgorithmConstructionInfo,body0:btCollisionObject,body1:btCollisionObject):btCollisionAlgorithm;
        constructor();
        get_m_swapped():boolean;
        set_m_swapped(value:boolean):void;
    }
    export class btCollisionWorld {
        addCollisionObject(collisionObject:btCollisionObject,collisionFilterGroup:number,collisionFilterMask:number):void;
        constructor(dispatcher:btDispatcher,broadphasePairCache:btBroadphaseInterface,collisionConfiguration:btCollisionConfiguration);
        contactPairTest(colObjA:btCollisionObject,colObjB:btCollisionObject,resultCallback:btCollisionWorld.ContactResultCallback):void;
        contactTest(colObj:btCollisionObject,resultCallback:btCollisionWorld.ContactResultCallback):void;
        convexSweepTest(castShape:btConvexShape,from:btTransform,to:btTransform,resultCallback:btCollisionWorld.ConvexResultCallback,allowedCcdPenetration:number):void;
        debugDrawObject(worldTransform:btTransform,shape:btCollisionShape,color:btVector3):void;
        debugDrawWorld():void;
        getBroadphase():btBroadphaseInterface;
        getCollisionObjectArray():Ammo.btAlignedObjectArray;
        getDebugDrawer():btIDebugDraw;
        getDispatchInfo():btDispatcherInfo;
        getDispatcher():btDispatcher;
        getForceUpdateAllAabbs():boolean;
        getNumCollisionObjects():number;
        getPairCache():btOverlappingPairCache;
        static objectQuerySingle(castShape:btConvexShape,rayFromTrans:btTransform,rayToTrans:btTransform,collisionObject:btCollisionObject,collisionShape:btCollisionShape,colObjWorldTransform:btTransform,resultCallback:btCollisionWorld.ConvexResultCallback,allowedPenetration:number):void;
        performDiscreteCollisionDetection():void;
        rayTest(rayFromWorld:btVector3,rayToWorld:btVector3,resultCallback:btCollisionWorld.RayResultCallback):void;
        static rayTestSingle(rayFromTrans:btTransform,rayToTrans:btTransform,collisionObject:btCollisionObject,collisionShape:btCollisionShape,colObjWorldTransform:btTransform,resultCallback:btCollisionWorld.RayResultCallback):void;
        removeCollisionObject(collisionObject:btCollisionObject):void;
        serialize(serializer:btSerializer):void;
        setBroadphase(pairCache:btBroadphaseInterface):void;
        setDebugDrawer(debugDrawer:btIDebugDraw):void;
        setForceUpdateAllAabbs(forceUpdateAllAabbs:boolean):void;
        updateAabbs():void;
        updateSingleAabb(colObj:btCollisionObject):void;
    }
    export module btCollisionWorld {
        export class LocalShapeInfo {
            get_m_shapePart():number;
            set_m_shapePart(value:number):void;
            get_m_triangleIndex():number;
            set_m_triangleIndex(value:number):void;
        }
        export class LocalRayResult {
            constructor(collisionObject:btCollisionObject,localShapeInfo:btCollisionWorld.LocalShapeInfo,hitNormalLocal:btVector3,hitFraction:number);
            get_m_collisionObject():btCollisionObject;
            set_m_collisionObject(value:btCollisionObject):void;
            get_m_localShapeInfo():btCollisionWorld.LocalShapeInfo;
            set_m_localShapeInfo(value:btCollisionWorld.LocalShapeInfo):void;
            get_m_hitNormalLocal():btVector3;
            set_m_hitNormalLocal(value:btVector3):void;
            get_m_hitFraction():number;
            set_m_hitFraction(value:number):void;
        }
        export class RayResultCallback {
            constructor();
            hasHit():boolean;
            needsCollision(proxy0:btBroadphaseProxy):boolean;
            get_m_closestHitFraction():number;
            set_m_closestHitFraction(value:number):void;
            get_m_collisionObject():btCollisionObject;
            set_m_collisionObject(value:btCollisionObject):void;
            get_m_collisionFilterGroup():number;
            set_m_collisionFilterGroup(value:number):void;
            get_m_collisionFilterMask():number;
            set_m_collisionFilterMask(value:number):void;
            get_m_flags():number;
            set_m_flags(value:number):void;
        }
        export class ClosestRayResultCallback extends Ammo.RayResultCallback {
            constructor(rayFromWorld:btVector3,rayToWorld:btVector3);
            addSingleResult(rayResult:LocalRayResult,normalInWorldSpace:boolean):number;
            get_m_rayFromWorld():btVector3;
            set_m_rayFromWorld(value:btVector3):void;
            get_m_rayToWorld():btVector3;
            set_m_rayToWorld(value:btVector3):void;
            get_m_hitNormalWorld():btVector3;
            set_m_hitNormalWorld(value:btVector3):void;
            get_m_hitPointWorld():btVector3;
            set_m_hitPointWorld(value:btVector3):void;
        }
        export class AllHitsRayResultCallback extends Ammo.RayResultCallback {
            constructor(rayFromWorld:btVector3,rayToWorld:btVector3);
            addSingleResult(rayResult:LocalRayResult,normalInWorldSpace:boolean):number;
            get_m_collisionObjects():Ammo.btAlignedObjectArray;
            set_m_collisionObjects(value:Ammo.btAlignedObjectArray):void;
            get_m_rayFromWorld():btVector3;
            set_m_rayFromWorld(value:btVector3):void;
            get_m_rayToWorld():btVector3;
            set_m_rayToWorld(value:btVector3):void;
            get_m_hitNormalWorld():Ammo.btAlignedObjectArray;
            set_m_hitNormalWorld(value:Ammo.btAlignedObjectArray):void;
            get_m_hitPointWorld():Ammo.btAlignedObjectArray;
            set_m_hitPointWorld(value:Ammo.btAlignedObjectArray):void;
            get_m_hitFractions():Ammo.btAlignedObjectArray;
            set_m_hitFractions(value:Ammo.btAlignedObjectArray):void;
        }
        export class LocalConvexResult {
            constructor(hitCollisionObject:btCollisionObject,localShapeInfo:btCollisionWorld.LocalShapeInfo,hitNormalLocal:btVector3,hitPointLocal:btVector3,hitFraction:number);
            get_m_hitCollisionObject():btCollisionObject;
            set_m_hitCollisionObject(value:btCollisionObject):void;
            get_m_localShapeInfo():btCollisionWorld.LocalShapeInfo;
            set_m_localShapeInfo(value:btCollisionWorld.LocalShapeInfo):void;
            get_m_hitNormalLocal():btVector3;
            set_m_hitNormalLocal(value:btVector3):void;
            get_m_hitPointLocal():btVector3;
            set_m_hitPointLocal(value:btVector3):void;
            get_m_hitFraction():number;
            set_m_hitFraction(value:number):void;
        }
        export class ConvexResultCallback {
            constructor();
            hasHit():boolean;
            needsCollision(proxy0:btBroadphaseProxy):boolean;
            get_m_closestHitFraction():number;
            set_m_closestHitFraction(value:number):void;
            get_m_collisionFilterGroup():number;
            set_m_collisionFilterGroup(value:number):void;
            get_m_collisionFilterMask():number;
            set_m_collisionFilterMask(value:number):void;
        }
        export class ClosestConvexResultCallback extends Ammo.ConvexResultCallback {
            constructor(convexFromWorld:btVector3,convexToWorld:btVector3);
            addSingleResult(convexResult:LocalConvexResult,normalInWorldSpace:boolean):number;
            get_m_convexFromWorld():btVector3;
            set_m_convexFromWorld(value:btVector3):void;
            get_m_convexToWorld():btVector3;
            set_m_convexToWorld(value:btVector3):void;
            get_m_hitNormalWorld():btVector3;
            set_m_hitNormalWorld(value:btVector3):void;
            get_m_hitPointWorld():btVector3;
            set_m_hitPointWorld(value:btVector3):void;
            get_m_hitCollisionObject():btCollisionObject;
            set_m_hitCollisionObject(value:btCollisionObject):void;
        }
        export class ContactResultCallback {
            constructor();
            needsCollision(proxy0:btBroadphaseProxy):boolean;
            get_m_collisionFilterGroup():number;
            set_m_collisionFilterGroup(value:number):void;
            get_m_collisionFilterMask():number;
            set_m_collisionFilterMask(value:number):void;
        }
    }
    export class btTranslationalLimitMotor {
        constructor();
        constructor(other:btTranslationalLimitMotor);
        isLimited(limitIndex:number):boolean;
        needApplyForce(limitIndex:number):boolean;
        solveLinearAxis(timeStep:number,jacDiagABInv:number,body1:Ammo.btRigidBody,pointInA:btVector3,body2:Ammo.btRigidBody,pointInB:btVector3,limit_index:number,axis_normal_on_a:btVector3,anchorPos:btVector3):number;
        testLimitValue(limitIndex:number,test_value:number):number;
        get_m_lowerLimit():btVector3;
        set_m_lowerLimit(value:btVector3):void;
        get_m_upperLimit():btVector3;
        set_m_upperLimit(value:btVector3):void;
        get_m_accumulatedImpulse():btVector3;
        set_m_accumulatedImpulse(value:btVector3):void;
        get_m_limitSoftness():number;
        set_m_limitSoftness(value:number):void;
        get_m_damping():number;
        set_m_damping(value:number):void;
        get_m_restitution():number;
        set_m_restitution(value:number):void;
        get_m_normalCFM():btVector3;
        set_m_normalCFM(value:btVector3):void;
        get_m_stopERP():btVector3;
        set_m_stopERP(value:btVector3):void;
        get_m_stopCFM():btVector3;
        set_m_stopCFM(value:btVector3):void;
        get_m_enableMotor():boolean;
        set_m_enableMotor(value:boolean):void;
        get_m_targetVelocity():btVector3;
        set_m_targetVelocity(value:btVector3):void;
        get_m_maxMotorForce():btVector3;
        set_m_maxMotorForce(value:btVector3):void;
        get_m_currentLimitError():btVector3;
        set_m_currentLimitError(value:btVector3):void;
        get_m_currentLinearDiff():btVector3;
        set_m_currentLinearDiff(value:btVector3):void;
        get_m_currentLimit():number;
        set_m_currentLimit(value:number):void;
    }
    export class btQuantizedBvhFloatData {
        get_m_bvhAabbMin():btVector3FloatData;
        set_m_bvhAabbMin(value:btVector3FloatData):void;
        get_m_bvhAabbMax():btVector3FloatData;
        set_m_bvhAabbMax(value:btVector3FloatData):void;
        get_m_bvhQuantization():btVector3FloatData;
        set_m_bvhQuantization(value:btVector3FloatData):void;
        get_m_curNodeIndex():number;
        set_m_curNodeIndex(value:number):void;
        get_m_useQuantization():number;
        set_m_useQuantization(value:number):void;
        get_m_numContiguousLeafNodes():number;
        set_m_numContiguousLeafNodes(value:number):void;
        get_m_numQuantizedContiguousNodes():number;
        set_m_numQuantizedContiguousNodes(value:number):void;
        get_m_contiguousNodesPtr():btOptimizedBvhNodeFloatData;
        set_m_contiguousNodesPtr(value:btOptimizedBvhNodeFloatData):void;
        get_m_quantizedContiguousNodesPtr():btQuantizedBvhNodeData;
        set_m_quantizedContiguousNodesPtr(value:btQuantizedBvhNodeData):void;
        get_m_subTreeInfoPtr():btBvhSubtreeInfoData;
        set_m_subTreeInfoPtr(value:btBvhSubtreeInfoData):void;
        get_m_traversalMode():number;
        set_m_traversalMode(value:number):void;
        get_m_numSubtreeHeaders():number;
        set_m_numSubtreeHeaders(value:number):void;
    }
    export class btInternalTriangleIndexCallback {
    }
    export class btConvexInternalShape extends Ammo.btConvexShape {
        calculateSerializeBufferSize():number;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getAabbSlow(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getImplicitShapeDimensions():btVector3;
        getLocalScaling():btVector3;
        getLocalScalingNV():btVector3;
        getMargin():number;
        getMarginNV():number;
        getNumPreferredPenetrationDirections():number;
        getPreferredPenetrationDirection(index:number,penetrationVector:btVector3):void;
        localGetSupportingVertex(vec:btVector3):btVector3;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setImplicitShapeDimensions(dimensions:btVector3):void;
        setLocalScaling(scaling:btVector3):void;
        setMargin(margin:number):void;
    }
    export class btTypedConstraintData {
        get_m_rbA():btRigidBodyFloatData;
        set_m_rbA(value:btRigidBodyFloatData):void;
        get_m_rbB():btRigidBodyFloatData;
        set_m_rbB(value:btRigidBodyFloatData):void;
        get_m_name():string;
        set_m_name(value:string):void;
        get_m_objectType():number;
        set_m_objectType(value:number):void;
        get_m_userConstraintType():number;
        set_m_userConstraintType(value:number):void;
        get_m_userConstraintId():number;
        set_m_userConstraintId(value:number):void;
        get_m_needsFeedback():number;
        set_m_needsFeedback(value:number):void;
        get_m_appliedImpulse():number;
        set_m_appliedImpulse(value:number):void;
        get_m_dbgDrawSize():number;
        set_m_dbgDrawSize(value:number):void;
        get_m_disableCollisionsBetweenLinkedBodies():number;
        set_m_disableCollisionsBetweenLinkedBodies(value:number):void;
        get_m_pad4():string;
        set_m_pad4(value:string):void;
    }
    export class btCollisionShapeData {
        get_m_name():string;
        set_m_name(value:string):void;
        get_m_shapeType():number;
        set_m_shapeType(value:number):void;
        get_m_padding():string;
        set_m_padding(value:string):void;
    }
    export class __exception {
        get_type():number;
        set_type(value:number):void;
        get_name():string;
        set_name(value:string):void;
        get_arg1():number;
        set_arg1(value:number):void;
        get_arg2():number;
        set_arg2(value:number):void;
        get_retval():number;
        set_retval(value:number):void;
    }
    export class btHashPtr {
        constructor(ptr:any);
        equals(other:Ammo.btHashPtr):boolean;
        getHash():number;
        getPointer():any;
    }
    export module btHashPtr {
    }
    export class LocalShapeInfo {
        get_m_shapePart():number;
        set_m_shapePart(value:number):void;
        get_m_triangleIndex():number;
        set_m_triangleIndex(value:number):void;
    }
    export class btPairCachingGhostObject extends Ammo.btGhostObject {
        addOverlappingObjectInternal(otherProxy:btBroadphaseProxy,thisProxy:btBroadphaseProxy):void;
        constructor();
        getOverlappingPairCache():btHashedOverlappingPairCache;
        removeOverlappingObjectInternal(otherProxy:btBroadphaseProxy,dispatcher:btDispatcher,thisProxy:btBroadphaseProxy):void;
    }
    export class CProfileManager {
        static CleanupMemory():void;
        static Get_Frame_Count_Since_Reset():number;
        static Get_Iterator():CProfileIterator;
        static Get_Time_Since_Reset():number;
        static Increment_Frame_Counter():void;
        static Release_Iterator(iterator:CProfileIterator):void;
        static Reset():void;
        static Start_Profile(name:string):void;
        static Stop_Profile():void;
        static dumpAll():void;
        static dumpRecursive(profileIterator:CProfileIterator,spacing:number):void;
    }
    export class btQuantizedBvhNodeData {
        get_m_quantizedAabbMin():number;
        set_m_quantizedAabbMin(value:number):void;
        get_m_quantizedAabbMax():number;
        set_m_quantizedAabbMax(value:number):void;
        get_m_escapeIndexOrTriangleIndex():number;
        set_m_escapeIndexOrTriangleIndex(value:number):void;
    }
    export class btAlignedAllocator {
        address(ref:any):any;
        allocate(n:number,hint:any):any;
        constructor();
        constructor(arg0:Ammo.btAlignedAllocator);
        construct(ptr:any,value:any):void;
        deallocate(ptr:any):void;
        destroy(ptr:any):void;
        op_eq(arg0:btAlignedAllocator,arg1:btAlignedAllocator):boolean;
        op_set(arg0:Ammo.btAlignedAllocator):btAlignedAllocator;
    }
    export module btAlignedAllocator {
        export class rebind {
        }
    }
    export class btDefaultSerializer extends Ammo.btSerializer {
        allocate(size:number,numElements:number):btChunk;
        constructor(totalSize:number);
        finalizeChunk(chunk:btChunk,structType:string,chunkCode:number,oldPtr:any):void;
        findNameForPointer(ptr:any):string;
        finishSerialization():void;
        getBufferPointer():any;
        getCurrentBufferSize():number;
        getSerializationFlags():number;
        getUniquePointer(oldPtr:any):any;
        internalAlloc(size:number):any;
        registerNameForPointer(ptr:any,name:string):void;
        serializeName(name:string):void;
        setSerializationFlags(flags:number):void;
        startSerialization():void;
        writeHeader(buffer:any):void;
    }
    export class btMultiSapBroadphase extends Ammo.btBroadphaseInterface {
        addToChildBroadphase(parentMultiSapProxy:btMultiSapProxy,childProxy:btBroadphaseProxy,childBroadphase:btBroadphaseInterface):void;
        constructor(maxProxies:number,pairCache:btOverlappingPairCache);
        buildTree(bvhAabbMin:btVector3,bvhAabbMax:btVector3):void;
        calculateOverlappingPairs(dispatcher:btDispatcher):void;
        createProxy(aabbMin:btVector3,aabbMax:btVector3,shapeType:number,userPtr:any,collisionFilterGroup:number,collisionFilterMask:number,dispatcher:btDispatcher,multiSapProxy:any):btBroadphaseProxy;
        destroyProxy(proxy:btBroadphaseProxy,dispatcher:btDispatcher):void;
        getAabb(proxy:btBroadphaseProxy,aabbMin:btVector3,aabbMax:btVector3):void;
        getBroadphaseAabb(aabbMin:btVector3,aabbMax:btVector3):void;
        getBroadphaseArray():Ammo.btAlignedObjectArray;
        getOverlappingPairCache():btOverlappingPairCache;
        printStats():void;
        quicksort(a:Ammo.btAlignedObjectArray,lo:number,hi:number):void;
        rayTest(rayFrom:btVector3,rayTo:btVector3,rayCallback:btBroadphaseRayCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        resetPool(dispatcher:btDispatcher):void;
        setAabb(proxy:btBroadphaseProxy,aabbMin:btVector3,aabbMax:btVector3,dispatcher:btDispatcher):void;
        testAabbOverlap(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy):boolean;
    }
    export module btMultiSapBroadphase {
        export class btBridgeProxy {
            get_m_childProxy():btBroadphaseProxy;
            set_m_childProxy(value:btBroadphaseProxy):void;
            get_m_childBroadphase():btBroadphaseInterface;
            set_m_childBroadphase(value:btBroadphaseInterface):void;
        }
        export class btMultiSapProxy extends Ammo.btBroadphaseProxy {
            constructor(aabbMin:btVector3,aabbMax:btVector3,shapeType:number,userPtr:any,collisionFilterGroup:number,collisionFilterMask:number);
            get_m_bridgeProxies():Ammo.btAlignedObjectArray;
            set_m_bridgeProxies(value:Ammo.btAlignedObjectArray):void;
            get_m_aabbMin():btVector3;
            set_m_aabbMin(value:btVector3):void;
            get_m_aabbMax():btVector3;
            set_m_aabbMax(value:btVector3):void;
            get_m_shapeType():number;
            set_m_shapeType(value:number):void;
        }
    }
    export class btOverlapCallback {
    }
    export class CProfileIterator {
        Enter_Child(index:number):void;
        Enter_Largest_Child():void;
        Enter_Parent():void;
        First():void;
        Get_Current_Name():string;
        Get_Current_Parent_Name():string;
        Get_Current_Parent_Total_Calls():number;
        Get_Current_Parent_Total_Time():number;
        Get_Current_Total_Calls():number;
        Get_Current_Total_Time():number;
        Is_Done():boolean;
        Is_Root():boolean;
        Next():void;
    }
    export class btStaticPlaneShape extends Ammo.btConcaveShape {
        constructor(planeNormal:btVector3,planeConstant:number);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        calculateSerializeBufferSize():number;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getLocalScaling():btVector3;
        getName():string;
        getPlaneConstant():number;
        getPlaneNormal():btVector3;
        processAllTriangles(callback:btTriangleCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setLocalScaling(scaling:btVector3):void;
    }
    export class btOverlappingPairCache extends Ammo.btOverlappingPairCallback {
    }
    export class btMatrix3x3FloatData {
        get_m_el():btVector3FloatData;
        set_m_el(value:btVector3FloatData):void;
    }
    export class btCylinderShapeData {
        get_m_convexInternalShapeData():btConvexInternalShapeData;
        set_m_convexInternalShapeData(value:btConvexInternalShapeData):void;
        get_m_upAxis():number;
        set_m_upAxis(value:number):void;
        get_m_padding():string;
        set_m_padding(value:string):void;
    }
    export class btTransformDoubleData {
        get_m_basis():btMatrix3x3DoubleData;
        set_m_basis(value:btMatrix3x3DoubleData):void;
        get_m_origin():btVector3DoubleData;
        set_m_origin(value:btVector3DoubleData):void;
    }
    export class btCollisionShape {
        constructor();
        calculateSerializeBufferSize():number;
        calculateTemporalAabb(curTrans:btTransform,linvel:btVector3,angvel:btVector3,timeStep:number,temporalAabbMin:btVector3,temporalAabbMax:btVector3):void;
        getAngularMotionDisc():number;
        getBoundingSphere(center:btVector3,radius:number):void;
        getContactBreakingThreshold(defaultContactThresholdFactor:number):number;
        getShapeType():number;
        getUserPointer():any;
        isCompound():boolean;
        isConcave():boolean;
        isConvex():boolean;
        isConvex2d():boolean;
        isInfinite():boolean;
        isNonMoving():boolean;
        isPolyhedral():boolean;
        isSoftBody():boolean;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        serializeSingleShape(serializer:btSerializer):void;
        setUserPointer(userPtr:any):void;
    }
    export class btCapsuleShapeData {
        get_m_convexInternalShapeData():btConvexInternalShapeData;
        set_m_convexInternalShapeData(value:btConvexInternalShapeData):void;
        get_m_upAxis():number;
        set_m_upAxis(value:number):void;
        get_m_padding():string;
        set_m_padding(value:string):void;
    }
    export class btDbvtAabbMm {
        Center():btVector3;
        Classify(n:btVector3,o:number,s:number):number;
        Contain(a:btDbvtAabbMm):boolean;
        Expand(e:btVector3):void;
        Extents():btVector3;
        static FromCE(c:btVector3,e:btVector3):btDbvtAabbMm;
        static FromCR(c:btVector3,r:number):btDbvtAabbMm;
        static FromMM(mi:btVector3,mx:btVector3):btDbvtAabbMm;
        static FromPoints(pts:btVector3,n:number):btDbvtAabbMm;
        Intersect(a:btDbvtAabbMm,b:btDbvtAabbMm):boolean;
        Intersect(a:btDbvtAabbMm,b:btVector3):boolean;
        Lengths():btVector3;
        Maxs():btVector3;
        Merge(a:btDbvtAabbMm,b:btDbvtAabbMm,r:btDbvtAabbMm):void;
        Mins():btVector3;
        NotEqual(a:btDbvtAabbMm,b:btDbvtAabbMm):boolean;
        ProjectMinimum(v:btVector3,signs:number):number;
        Proximity(a:btDbvtAabbMm,b:btDbvtAabbMm):number;
        Select(o:btDbvtAabbMm,a:btDbvtAabbMm,b:btDbvtAabbMm):number;
        SignedExpand(e:btVector3):void;
    }
    export class btGeneric6DofConstraint extends Ammo.btTypedConstraint {
        constructor(rbA:Ammo.btRigidBody,rbB:Ammo.btRigidBody,frameInA:btTransform,frameInB:btTransform,useLinearReferenceFrameA:boolean);
        constructor(rbB:Ammo.btRigidBody,frameInB:btTransform,useLinearReferenceFrameB:boolean);
        buildJacobian():void;
        calcAnchorPos():void;
        calculateSerializeBufferSize():number;
        calculateTransforms(transA:btTransform,transB:btTransform):void;
        calculateTransforms():void;
        getAngle(axis_index:number):number;
        getAngularLowerLimit(angularLower:btVector3):void;
        getAngularUpperLimit(angularUpper:btVector3):void;
        getAxis(axis_index:number):btVector3;
        getCalculatedTransformA():btTransform;
        getCalculatedTransformB():btTransform;
        getFrameOffsetA():btTransform;
        getFrameOffsetB():btTransform;
        getInfo1(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo1NonVirtual(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo2(info:btTypedConstraint.btConstraintInfo2):void;
        getInfo2NonVirtual(info:btTypedConstraint.btConstraintInfo2,transA:btTransform,transB:btTransform,linVelA:btVector3,linVelB:btVector3,angVelA:btVector3,angVelB:btVector3):void;
        getLinearLowerLimit(linearLower:btVector3):void;
        getLinearUpperLimit(linearUpper:btVector3):void;
        getParam(num:number,axis:number):number;
        getRelativePivotPosition(axis_index:number):number;
        getRotationalLimitMotor(index:number):btRotationalLimitMotor;
        getTranslationalLimitMotor():btTranslationalLimitMotor;
        getUseFrameOffset():boolean;
        get_limit_motor_info2(limot:btRotationalLimitMotor,transA:btTransform,transB:btTransform,linVelA:btVector3,linVelB:btVector3,angVelA:btVector3,angVelB:btVector3,info:btTypedConstraint.btConstraintInfo2,row:number,ax1:btVector3,rotational:number,rotAllowed:number):number;
        isLimited(limitIndex:number):boolean;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setAngularLowerLimit(angularLower:btVector3):void;
        setAngularUpperLimit(angularUpper:btVector3):void;
        setAxis(axis1:btVector3,axis2:btVector3):void;
        setFrames(frameA:btTransform,frameB:btTransform):void;
        setLimit(axis:number,lo:number,hi:number):void;
        setLinearLowerLimit(linearLower:btVector3):void;
        setLinearUpperLimit(linearUpper:btVector3):void;
        setParam(num:number,value:number,axis:number):void;
        setUseFrameOffset(frameOffsetOnOff:boolean):void;
        testAngularLimitMotor(axis_index:number):boolean;
        updateRHS(timeStep:number):void;
        get_m_useSolveConstraintObsolete():boolean;
        set_m_useSolveConstraintObsolete(value:boolean):void;
    }
    export class btClock {
        constructor();
        constructor(other:btClock);
        getTimeMicroseconds():number;
        getTimeMilliseconds():number;
        op_set(other:btClock):btClock;
        reset():void;
    }
    export class btTransform {
        constructor();
        constructor(q:btQuaternion,c:btVector3);
        constructor(b:btMatrix3x3,c:btVector3);
        constructor(other:btTransform);
        deSerialize(dataIn:btTransformFloatData):void;
        deSerializeDouble(dataIn:btTransformDoubleData):void;
        deSerializeFloat(dataIn:btTransformFloatData):void;
        getBasis():btMatrix3x3;
        static getIdentity():btTransform;
        getOpenGLMatrix(m:number):void;
        getOrigin():btVector3;
        getRotation():btQuaternion;
        invXform(inVec:btVector3):btVector3;
        inverse():btTransform;
        inverseTimes(t:btTransform):btTransform;
        mult(t1:btTransform,t2:btTransform):void;
        op_mul(x:btVector3):btVector3;
        op_mul(q:btQuaternion):btQuaternion;
        op_mul(t:btTransform):btTransform;
        op_set(other:btTransform):btTransform;
        serialize(dataOut:btTransformFloatData):void;
        serializeFloat(dataOut:btTransformFloatData):void;
        setBasis(basis:btMatrix3x3):void;
        setFromOpenGLMatrix(m:number):void;
        setIdentity():void;
        setOrigin(origin:btVector3):void;
        setRotation(q:btQuaternion):void;
    }
    export class btRigidBodyConstructionInfo {
        constructor(mass:number,motionState:Ammo.btMotionState,collisionShape:btCollisionShape,localInertia:btVector3);
        get_m_mass():number;
        set_m_mass(value:number):void;
        get_m_motionState():btMotionState;
        set_m_motionState(value:btMotionState):void;
        get_m_startWorldTransform():btTransform;
        set_m_startWorldTransform(value:btTransform):void;
        get_m_collisionShape():btCollisionShape;
        set_m_collisionShape(value:btCollisionShape):void;
        get_m_localInertia():btVector3;
        set_m_localInertia(value:btVector3):void;
        get_m_linearDamping():number;
        set_m_linearDamping(value:number):void;
        get_m_angularDamping():number;
        set_m_angularDamping(value:number):void;
        get_m_friction():number;
        set_m_friction(value:number):void;
        get_m_restitution():number;
        set_m_restitution(value:number):void;
        get_m_linearSleepingThreshold():number;
        set_m_linearSleepingThreshold(value:number):void;
        get_m_angularSleepingThreshold():number;
        set_m_angularSleepingThreshold(value:number):void;
        get_m_additionalDamping():boolean;
        set_m_additionalDamping(value:boolean):void;
        get_m_additionalDampingFactor():number;
        set_m_additionalDampingFactor(value:number):void;
        get_m_additionalLinearDampingThresholdSqr():number;
        set_m_additionalLinearDampingThresholdSqr(value:number):void;
        get_m_additionalAngularDampingThresholdSqr():number;
        set_m_additionalAngularDampingThresholdSqr(value:number):void;
        get_m_additionalAngularDampingFactor():number;
        set_m_additionalAngularDampingFactor(value:number):void;
    }
    export class btTriangleInfoMapData {
        get_m_hashTablePtr():number;
        set_m_hashTablePtr(value:number):void;
        get_m_nextPtr():number;
        set_m_nextPtr(value:number):void;
        get_m_valueArrayPtr():btTriangleInfoData;
        set_m_valueArrayPtr(value:btTriangleInfoData):void;
        get_m_keyArrayPtr():number;
        set_m_keyArrayPtr(value:number):void;
        get_m_convexEpsilon():number;
        set_m_convexEpsilon(value:number):void;
        get_m_planarEpsilon():number;
        set_m_planarEpsilon(value:number):void;
        get_m_equalVertexThreshold():number;
        set_m_equalVertexThreshold(value:number):void;
        get_m_edgeDistanceThreshold():number;
        set_m_edgeDistanceThreshold(value:number):void;
        get_m_zeroAreaThreshold():number;
        set_m_zeroAreaThreshold(value:number):void;
        get_m_nextSize():number;
        set_m_nextSize(value:number):void;
        get_m_hashTableSize():number;
        set_m_hashTableSize(value:number):void;
        get_m_numValues():number;
        set_m_numValues(value:number):void;
        get_m_numKeys():number;
        set_m_numKeys(value:number):void;
        get_m_padding():string;
        set_m_padding(value:string):void;
    }
    export class btCollisionObjectFloatData {
        get_m_broadphaseHandle():any;
        set_m_broadphaseHandle(value:any):void;
        get_m_collisionShape():any;
        set_m_collisionShape(value:any):void;
        get_m_rootCollisionShape():btCollisionShapeData;
        set_m_rootCollisionShape(value:btCollisionShapeData):void;
        get_m_name():string;
        set_m_name(value:string):void;
        get_m_worldTransform():btTransformFloatData;
        set_m_worldTransform(value:btTransformFloatData):void;
        get_m_interpolationWorldTransform():btTransformFloatData;
        set_m_interpolationWorldTransform(value:btTransformFloatData):void;
        get_m_interpolationLinearVelocity():btVector3FloatData;
        set_m_interpolationLinearVelocity(value:btVector3FloatData):void;
        get_m_interpolationAngularVelocity():btVector3FloatData;
        set_m_interpolationAngularVelocity(value:btVector3FloatData):void;
        get_m_anisotropicFriction():btVector3FloatData;
        set_m_anisotropicFriction(value:btVector3FloatData):void;
        get_m_contactProcessingThreshold():number;
        set_m_contactProcessingThreshold(value:number):void;
        get_m_deactivationTime():number;
        set_m_deactivationTime(value:number):void;
        get_m_friction():number;
        set_m_friction(value:number):void;
        get_m_restitution():number;
        set_m_restitution(value:number):void;
        get_m_hitFraction():number;
        set_m_hitFraction(value:number):void;
        get_m_ccdSweptSphereRadius():number;
        set_m_ccdSweptSphereRadius(value:number):void;
        get_m_ccdMotionThreshold():number;
        set_m_ccdMotionThreshold(value:number):void;
        get_m_hasAnisotropicFriction():number;
        set_m_hasAnisotropicFriction(value:number):void;
        get_m_collisionFlags():number;
        set_m_collisionFlags(value:number):void;
        get_m_islandTag1():number;
        set_m_islandTag1(value:number):void;
        get_m_companionId():number;
        set_m_companionId(value:number):void;
        get_m_activationState1():number;
        set_m_activationState1(value:number):void;
        get_m_internalType():number;
        set_m_internalType(value:number):void;
        get_m_checkCollideWith():number;
        set_m_checkCollideWith(value:number):void;
    }
    export class CProfileNode {
        constructor(name:string,parent:CProfileNode);
        Call():void;
        CleanupMemory():void;
        Get_Child():CProfileNode;
        Get_Name():string;
        Get_Parent():CProfileNode;
        Get_Sibling():CProfileNode;
        Get_Sub_Node(name:string):CProfileNode;
        Get_Total_Calls():number;
        Get_Total_Time():number;
        Reset():void;
        Return():boolean;
    }
    export class ClosestPointInput {
        constructor();
        get_m_transformA():btTransform;
        set_m_transformA(value:btTransform):void;
        get_m_transformB():btTransform;
        set_m_transformB(value:btTransform):void;
        get_m_maximumDistanceSquared():number;
        set_m_maximumDistanceSquared(value:number):void;
        get_m_stackAlloc():btStackAlloc;
        set_m_stackAlloc(value:btStackAlloc):void;
    }
    export class btBvhTriangleMeshShape extends Ammo.btTriangleMeshShape {
        constructor(meshInterface:btStridingMeshInterface,useQuantizedAabbCompression:boolean,buildBvh:boolean);
        constructor(meshInterface:btStridingMeshInterface,useQuantizedAabbCompression:boolean,bvhAabbMin:btVector3,bvhAabbMax:btVector3,buildBvh:boolean);
        buildOptimizedBvh():void;
        calculateSerializeBufferSize():number;
        getName():string;
        getOptimizedBvh():btOptimizedBvh;
        getOwnsBvh():boolean;
        getTriangleInfoMap():btTriangleInfoMap;
        partialRefitTree(aabbMin:btVector3,aabbMax:btVector3):void;
        performConvexcast(callback:btTriangleCallback,boxSource:btVector3,boxTarget:btVector3,boxMin:btVector3,boxMax:btVector3):void;
        performRaycast(callback:btTriangleCallback,raySource:btVector3,rayTarget:btVector3):void;
        processAllTriangles(callback:btTriangleCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        refitTree(aabbMin:btVector3,aabbMax:btVector3):void;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        serializeSingleBvh(serializer:btSerializer):void;
        serializeSingleTriangleInfoMap(serializer:btSerializer):void;
        setLocalScaling(scaling:btVector3):void;
        setOptimizedBvh(bvh:btOptimizedBvh,localScaling:btVector3):void;
        setTriangleInfoMap(triangleInfoMap:btTriangleInfoMap):void;
        usesQuantizedAabbCompression():boolean;
    }
    export class btOverlapFilterCallback {
    }
    export class btContactSolverInfoData {
        get_m_tau():number;
        set_m_tau(value:number):void;
        get_m_damping():number;
        set_m_damping(value:number):void;
        get_m_friction():number;
        set_m_friction(value:number):void;
        get_m_timeStep():number;
        set_m_timeStep(value:number):void;
        get_m_restitution():number;
        set_m_restitution(value:number):void;
        get_m_numIterations():number;
        set_m_numIterations(value:number):void;
        get_m_maxErrorReduction():number;
        set_m_maxErrorReduction(value:number):void;
        get_m_sor():number;
        set_m_sor(value:number):void;
        get_m_erp():number;
        set_m_erp(value:number):void;
        get_m_erp2():number;
        set_m_erp2(value:number):void;
        get_m_globalCfm():number;
        set_m_globalCfm(value:number):void;
        get_m_splitImpulse():number;
        set_m_splitImpulse(value:number):void;
        get_m_splitImpulsePenetrationThreshold():number;
        set_m_splitImpulsePenetrationThreshold(value:number):void;
        get_m_linearSlop():number;
        set_m_linearSlop(value:number):void;
        get_m_warmstartingFactor():number;
        set_m_warmstartingFactor(value:number):void;
        get_m_solverMode():number;
        set_m_solverMode(value:number):void;
        get_m_restingContactRestitutionThreshold():number;
        set_m_restingContactRestitutionThreshold(value:number):void;
        get_m_minimumSolverBatchSize():number;
        set_m_minimumSolverBatchSize(value:number):void;
    }
    export class btActivatingCollisionAlgorithm extends Ammo.btCollisionAlgorithm {
        constructor(ci:btCollisionAlgorithmConstructionInfo);
        constructor(ci:btCollisionAlgorithmConstructionInfo,colObj0:btCollisionObject,colObj1:btCollisionObject);
    }
    export class btSliderConstraint extends Ammo.btTypedConstraint {
        constructor(rbA:Ammo.btRigidBody,rbB:Ammo.btRigidBody,frameInA:btTransform,frameInB:btTransform,useLinearReferenceFrameA:boolean);
        constructor(rbB:Ammo.btRigidBody,frameInB:btTransform,useLinearReferenceFrameA:boolean);
        calculateSerializeBufferSize():number;
        calculateTransforms(transA:btTransform,transB:btTransform):void;
        getAncorInA():btVector3;
        getAncorInB():btVector3;
        getAngDepth():number;
        getAngularPos():number;
        getCalculatedTransformA():btTransform;
        getCalculatedTransformB():btTransform;
        getDampingDirAng():number;
        getDampingDirLin():number;
        getDampingLimAng():number;
        getDampingLimLin():number;
        getDampingOrthoAng():number;
        getDampingOrthoLin():number;
        getFrameOffsetA():btTransform;
        getFrameOffsetB():btTransform;
        getInfo1(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo1NonVirtual(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo2(info:btTypedConstraint.btConstraintInfo2):void;
        getInfo2NonVirtual(info:btTypedConstraint.btConstraintInfo2,transA:btTransform,transB:btTransform,linVelA:btVector3,linVelB:btVector3,rbAinvMass:number,rbBinvMass:number):void;
        getLinDepth():number;
        getLinearPos():number;
        getLowerAngLimit():number;
        getLowerLinLimit():number;
        getMaxAngMotorForce():number;
        getMaxLinMotorForce():number;
        getParam(num:number,axis:number):number;
        getPoweredAngMotor():boolean;
        getPoweredLinMotor():boolean;
        getRestitutionDirAng():number;
        getRestitutionDirLin():number;
        getRestitutionLimAng():number;
        getRestitutionLimLin():number;
        getRestitutionOrthoAng():number;
        getRestitutionOrthoLin():number;
        getRigidBodyA():Ammo.btRigidBody;
        getRigidBodyB():Ammo.btRigidBody;
        getSoftnessDirAng():number;
        getSoftnessDirLin():number;
        getSoftnessLimAng():number;
        getSoftnessLimLin():number;
        getSoftnessOrthoAng():number;
        getSoftnessOrthoLin():number;
        getSolveAngLimit():boolean;
        getSolveLinLimit():boolean;
        getTargetAngMotorVelocity():number;
        getTargetLinMotorVelocity():number;
        getUpperAngLimit():number;
        getUpperLinLimit():number;
        getUseFrameOffset():boolean;
        getUseLinearReferenceFrameA():boolean;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setDampingDirAng(dampingDirAng:number):void;
        setDampingDirLin(dampingDirLin:number):void;
        setDampingLimAng(dampingLimAng:number):void;
        setDampingLimLin(dampingLimLin:number):void;
        setDampingOrthoAng(dampingOrthoAng:number):void;
        setDampingOrthoLin(dampingOrthoLin:number):void;
        setFrames(frameA:btTransform,frameB:btTransform):void;
        setLowerAngLimit(lowerLimit:number):void;
        setLowerLinLimit(lowerLimit:number):void;
        setMaxAngMotorForce(maxAngMotorForce:number):void;
        setMaxLinMotorForce(maxLinMotorForce:number):void;
        setParam(num:number,value:number,axis:number):void;
        setPoweredAngMotor(onOff:boolean):void;
        setPoweredLinMotor(onOff:boolean):void;
        setRestitutionDirAng(restitutionDirAng:number):void;
        setRestitutionDirLin(restitutionDirLin:number):void;
        setRestitutionLimAng(restitutionLimAng:number):void;
        setRestitutionLimLin(restitutionLimLin:number):void;
        setRestitutionOrthoAng(restitutionOrthoAng:number):void;
        setRestitutionOrthoLin(restitutionOrthoLin:number):void;
        setSoftnessDirAng(softnessDirAng:number):void;
        setSoftnessDirLin(softnessDirLin:number):void;
        setSoftnessLimAng(softnessLimAng:number):void;
        setSoftnessLimLin(softnessLimLin:number):void;
        setSoftnessOrthoAng(softnessOrthoAng:number):void;
        setSoftnessOrthoLin(softnessOrthoLin:number):void;
        setTargetAngMotorVelocity(targetAngMotorVelocity:number):void;
        setTargetLinMotorVelocity(targetLinMotorVelocity:number):void;
        setUpperAngLimit(upperLimit:number):void;
        setUpperLinLimit(upperLimit:number):void;
        setUseFrameOffset(frameOffsetOnOff:boolean):void;
        testAngLimits():void;
        testLinLimits():void;
    }
    export class btVehicleTuning {
        constructor();
        get_m_suspensionStiffness():number;
        set_m_suspensionStiffness(value:number):void;
        get_m_suspensionCompression():number;
        set_m_suspensionCompression(value:number):void;
        get_m_suspensionDamping():number;
        set_m_suspensionDamping(value:number):void;
        get_m_maxSuspensionTravelCm():number;
        set_m_maxSuspensionTravelCm(value:number):void;
        get_m_frictionSlip():number;
        set_m_frictionSlip(value:number):void;
        get_m_maxSuspensionForce():number;
        set_m_maxSuspensionForce(value:number):void;
    }
    export class btContactConstraint extends Ammo.btTypedConstraint {
        constructor(contactManifold:btPersistentManifold,rbA:Ammo.btRigidBody,rbB:Ammo.btRigidBody);
        buildJacobian():void;
        getContactManifold():btPersistentManifold;
        getInfo1(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo2(info:btTypedConstraint.btConstraintInfo2):void;
        setContactManifold(contactManifold:btPersistentManifold):void;
    }
    export class btManifoldPoint {
        constructor();
        constructor(pointA:btVector3,pointB:btVector3,normal:btVector3,distance:number);
        getAppliedImpulse():number;
        getDistance():number;
        getLifeTime():number;
        getPositionWorldOnA():btVector3;
        getPositionWorldOnB():btVector3;
        setDistance(dist:number):void;
        get_m_localPointA():btVector3;
        set_m_localPointA(value:btVector3):void;
        get_m_localPointB():btVector3;
        set_m_localPointB(value:btVector3):void;
        get_m_positionWorldOnB():btVector3;
        set_m_positionWorldOnB(value:btVector3):void;
        get_m_positionWorldOnA():btVector3;
        set_m_positionWorldOnA(value:btVector3):void;
        get_m_normalWorldOnB():btVector3;
        set_m_normalWorldOnB(value:btVector3):void;
        get_m_distance1():number;
        set_m_distance1(value:number):void;
        get_m_combinedFriction():number;
        set_m_combinedFriction(value:number):void;
        get_m_combinedRestitution():number;
        set_m_combinedRestitution(value:number):void;
        get_m_partId0():number;
        set_m_partId0(value:number):void;
        get_m_partId1():number;
        set_m_partId1(value:number):void;
        get_m_index0():number;
        set_m_index0(value:number):void;
        get_m_index1():number;
        set_m_index1(value:number):void;
        get_m_userPersistentData():any;
        set_m_userPersistentData(value:any):void;
        get_m_appliedImpulse():number;
        set_m_appliedImpulse(value:number):void;
        get_m_lateralFrictionInitialized():boolean;
        set_m_lateralFrictionInitialized(value:boolean):void;
        get_m_appliedImpulseLateral1():number;
        set_m_appliedImpulseLateral1(value:number):void;
        get_m_appliedImpulseLateral2():number;
        set_m_appliedImpulseLateral2(value:number):void;
        get_m_contactMotion1():number;
        set_m_contactMotion1(value:number):void;
        get_m_contactMotion2():number;
        set_m_contactMotion2(value:number):void;
        get_m_contactCFM1():number;
        set_m_contactCFM1(value:number):void;
        get_m_contactCFM2():number;
        set_m_contactCFM2(value:number):void;
        get_m_lifeTime():number;
        set_m_lifeTime(value:number):void;
        get_m_lateralFrictionDir1():btVector3;
        set_m_lateralFrictionDir1(value:btVector3):void;
        get_m_lateralFrictionDir2():btVector3;
        set_m_lateralFrictionDir2(value:btVector3):void;
        get_mConstraintRow():btConstraintRow;
        set_mConstraintRow(value:btConstraintRow):void;
    }
    export class btQuantizedBvhNode {
        getEscapeIndex():number;
        getPartId():number;
        getTriangleIndex():number;
        isLeafNode():boolean;
        get_m_quantizedAabbMin():number;
        set_m_quantizedAabbMin(value:number):void;
        get_m_quantizedAabbMax():number;
        set_m_quantizedAabbMax(value:number):void;
        get_m_escapeIndexOrTriangleIndex():number;
        set_m_escapeIndexOrTriangleIndex(value:number):void;
    }
    export class btVector3FloatData {
        get_m_floats():number;
        set_m_floats(value:number):void;
    }
    export class btStridingMeshInterface {
        InternalProcessAllTriangles(callback:btInternalTriangleIndexCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        constructor();
        calculateAabbBruteForce(aabbMin:btVector3,aabbMax:btVector3):void;
        calculateSerializeBufferSize():number;
        getPremadeAabb(aabbMin:btVector3,aabbMax:btVector3):void;
        getScaling():btVector3;
        hasPremadeAabb():boolean;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setPremadeAabb(aabbMin:btVector3,aabbMax:btVector3):void;
        setScaling(scaling:btVector3):void;
    }
    export class btBridgeProxy {
        get_m_childProxy():btBroadphaseProxy;
        set_m_childProxy(value:btBroadphaseProxy):void;
        get_m_childBroadphase():btBroadphaseInterface;
        set_m_childBroadphase(value:btBroadphaseInterface):void;
    }
    export class Handle extends Ammo.btBroadphaseProxy {
        GetNextFree():number;
        SetNextFree(next:number):void;
        get_m_minEdges():number;
        set_m_minEdges(value:number):void;
        get_m_dbvtProxy():btBroadphaseProxy;
        set_m_dbvtProxy(value:btBroadphaseProxy):void;
    }
    export class btPoint2PointConstraint extends Ammo.btTypedConstraint {
        constructor(rbA:Ammo.btRigidBody,rbB:Ammo.btRigidBody,pivotInA:btVector3,pivotInB:btVector3);
        constructor(rbA:Ammo.btRigidBody,pivotInA:btVector3);
        buildJacobian():void;
        calculateSerializeBufferSize():number;
        getInfo1(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo1NonVirtual(info:btTypedConstraint.btConstraintInfo1):void;
        getInfo2(info:btTypedConstraint.btConstraintInfo2):void;
        getInfo2NonVirtual(info:btTypedConstraint.btConstraintInfo2,body0_trans:btTransform,body1_trans:btTransform):void;
        getParam(num:number,axis:number):number;
        getPivotInA():btVector3;
        getPivotInB():btVector3;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setParam(num:number,value:number,axis:number):void;
        setPivotA(pivotA:btVector3):void;
        setPivotB(pivotB:btVector3):void;
        updateRHS(timeStep:number):void;
        get_m_useSolveConstraintObsolete():boolean;
        set_m_useSolveConstraintObsolete(value:boolean):void;
        get_m_setting():btConstraintSetting;
        set_m_setting(value:btConstraintSetting):void;
    }
    export class btCylinderShapeZ extends Ammo.btCylinderShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(halfExtents:btVector3);
        getName():string;
        getRadius():number;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
    }
    export class btBvhSubtreeInfo {
        constructor();
        setAabbFromQuantizeNode(quantizedNode:btQuantizedBvhNode):void;
        get_m_quantizedAabbMin():number;
        set_m_quantizedAabbMin(value:number):void;
        get_m_quantizedAabbMax():number;
        set_m_quantizedAabbMax(value:number):void;
        get_m_rootNodeIndex():number;
        set_m_rootNodeIndex(value:number):void;
        get_m_subtreeSize():number;
        set_m_subtreeSize(value:number):void;
        get_m_padding():number;
        set_m_padding(value:number):void;
    }
    export class btMotionState {
        getWorldTransform(centerOfMassWorldTrans:btTransform):void;
        setWorldTransform(centerOfMassWorldTrans:btTransform):void;
    }
    export class ClosestConvexResultCallback extends Ammo.ConvexResultCallback {
        constructor(convexFromWorld:btVector3,convexToWorld:btVector3);
        addSingleResult(convexResult:LocalConvexResult,normalInWorldSpace:boolean):number;
        get_m_convexFromWorld():btVector3;
        set_m_convexFromWorld(value:btVector3):void;
        get_m_convexToWorld():btVector3;
        set_m_convexToWorld(value:btVector3):void;
        get_m_hitNormalWorld():btVector3;
        set_m_hitNormalWorld(value:btVector3):void;
        get_m_hitPointWorld():btVector3;
        set_m_hitPointWorld(value:btVector3):void;
        get_m_hitCollisionObject():btCollisionObject;
        set_m_hitCollisionObject(value:btCollisionObject):void;
    }
    export class btConvexSeparatingDistanceUtil {
        constructor(boundingRadiusA:number,boundingRadiusB:number);
        getConservativeSeparatingDistance():number;
        initSeparatingDistance(separatingVector:btVector3,separatingDistance:number,transA:btTransform,transB:btTransform):void;
        updateSeparatingDistance(transA:btTransform,transB:btTransform):void;
    }
    export class btGeneric6DofSpringConstraint extends Ammo.btGeneric6DofConstraint {
        constructor(rbA:Ammo.btRigidBody,rbB:Ammo.btRigidBody,frameInA:btTransform,frameInB:btTransform,useLinearReferenceFrameA:boolean);
        calculateSerializeBufferSize():number;
        enableSpring(index:number,onOff:boolean):void;
        getInfo2(info:btTypedConstraint.btConstraintInfo2):void;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setAxis(axis1:btVector3,axis2:btVector3):void;
        setDamping(index:number,damping:number):void;
        setEquilibriumPoint():void;
        setEquilibriumPoint(index:number):void;
        setEquilibriumPoint(index:number,val:number):void;
        setStiffness(index:number,stiffness:number):void;
    }
    export class drand48_data {
        get___x():number;
        set___x(value:number):void;
        get___old_x():number;
        set___old_x(value:number):void;
        get___c():number;
        set___c(value:number):void;
        get___init():number;
        set___init(value:number):void;
        get___a():number;
        set___a(value:number):void;
    }
    export class btHingeConstraintFloatData {
        get_m_typeConstraintData():btTypedConstraintData;
        set_m_typeConstraintData(value:btTypedConstraintData):void;
        get_m_rbAFrame():btTransformFloatData;
        set_m_rbAFrame(value:btTransformFloatData):void;
        get_m_rbBFrame():btTransformFloatData;
        set_m_rbBFrame(value:btTransformFloatData):void;
        get_m_useReferenceFrameA():number;
        set_m_useReferenceFrameA(value:number):void;
        get_m_angularOnly():number;
        set_m_angularOnly(value:number):void;
        get_m_enableAngularMotor():number;
        set_m_enableAngularMotor(value:number):void;
        get_m_motorTargetVelocity():number;
        set_m_motorTargetVelocity(value:number):void;
        get_m_maxMotorImpulse():number;
        set_m_maxMotorImpulse(value:number):void;
        get_m_lowerLimit():number;
        set_m_lowerLimit(value:number):void;
        get_m_upperLimit():number;
        set_m_upperLimit(value:number):void;
        get_m_limitSoftness():number;
        set_m_limitSoftness(value:number):void;
        get_m_biasFactor():number;
        set_m_biasFactor(value:number):void;
        get_m_relaxationFactor():number;
        set_m_relaxationFactor(value:number):void;
    }
    export class btAxisSweep3Internal extends Ammo.btBroadphaseInterface {
        aabbTest(aabbMin:btVector3,aabbMax:btVector3,callback:btBroadphaseAabbCallback):void;
        addHandle(aabbMin:btVector3,aabbMax:btVector3,pOwner:any,collisionFilterGroup:number,collisionFilterMask:number,dispatcher:btDispatcher,multiSapProxy:any):number;
        constructor(worldAabbMin:btVector3,worldAabbMax:btVector3,handleMask:number,handleSentinel:number,maxHandles:number,pairCache:btOverlappingPairCache,disableRaycastAccelerator:boolean);
        calculateOverlappingPairs(dispatcher:btDispatcher):void;
        createProxy(aabbMin:btVector3,aabbMax:btVector3,shapeType:number,userPtr:any,collisionFilterGroup:number,collisionFilterMask:number,dispatcher:btDispatcher,multiSapProxy:any):btBroadphaseProxy;
        destroyProxy(proxy:btBroadphaseProxy,dispatcher:btDispatcher):void;
        getAabb(proxy:btBroadphaseProxy,aabbMin:btVector3,aabbMax:btVector3):void;
        getBroadphaseAabb(aabbMin:btVector3,aabbMax:btVector3):void;
        getHandle(index:number):btAxisSweep3Internal.Handle;
        getNumHandles():number;
        getOverlappingPairCache():btOverlappingPairCache;
        getOverlappingPairUserCallback():btOverlappingPairCallback;
        printStats():void;
        processAllOverlappingPairs(callback:btOverlapCallback):void;
        quantize(out:number,point:btVector3,isMax:number):void;
        rayTest(rayFrom:btVector3,rayTo:btVector3,rayCallback:btBroadphaseRayCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        removeHandle(handle:number,dispatcher:btDispatcher):void;
        resetPool(dispatcher:btDispatcher):void;
        setAabb(proxy:btBroadphaseProxy,aabbMin:btVector3,aabbMax:btVector3,dispatcher:btDispatcher):void;
        setOverlappingPairUserCallback(pairCallback:btOverlappingPairCallback):void;
        testAabbOverlap(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy):boolean;
        unQuantize(proxy:btBroadphaseProxy,aabbMin:btVector3,aabbMax:btVector3):void;
        updateHandle(handle:number,aabbMin:btVector3,aabbMax:btVector3,dispatcher:btDispatcher):void;
    }
    export module btAxisSweep3Internal {
        export class Edge {
            IsMax():number;
            get_m_pos():number;
            set_m_pos(value:number):void;
            get_m_handle():number;
            set_m_handle(value:number):void;
        }
        export class Handle extends Ammo.btBroadphaseProxy {
            GetNextFree():number;
            SetNextFree(next:number):void;
            get_m_minEdges():number;
            set_m_minEdges(value:number):void;
            get_m_dbvtProxy():btBroadphaseProxy;
            set_m_dbvtProxy(value:btBroadphaseProxy):void;
        }
    }
    export class btCharIndexTripletData {
        get_m_values():string;
        set_m_values(value:string):void;
        get_m_pad():string;
        set_m_pad(value:string):void;
    }
    export class btCompoundShapeData {
        get_m_collisionShapeData():btCollisionShapeData;
        set_m_collisionShapeData(value:btCollisionShapeData):void;
        get_m_childShapePtr():btCompoundShapeChildData;
        set_m_childShapePtr(value:btCompoundShapeChildData):void;
        get_m_numChildShapes():number;
        set_m_numChildShapes(value:number):void;
        get_m_collisionMargin():number;
        set_m_collisionMargin(value:number):void;
    }
    export class btBroadphaseProxy {
        constructor();
        constructor(aabbMin:btVector3,aabbMax:btVector3,userPtr:any,collisionFilterGroup:number,collisionFilterMask:number,multiSapParentProxy:any);
        getUid():number;
        static isCompound(proxyType:number):boolean;
        static isConcave(proxyType:number):boolean;
        static isConvex(proxyType:number):boolean;
        static isConvex2d(proxyType:number):boolean;
        static isInfinite(proxyType:number):boolean;
        static isNonMoving(proxyType:number):boolean;
        static isPolyhedral(proxyType:number):boolean;
        static isSoftBody(proxyType:number):boolean;
        get_m_clientObject():any;
        set_m_clientObject(value:any):void;
        get_m_collisionFilterGroup():number;
        set_m_collisionFilterGroup(value:number):void;
        get_m_collisionFilterMask():number;
        set_m_collisionFilterMask(value:number):void;
        get_m_multiSapParentProxy():any;
        set_m_multiSapParentProxy(value:any):void;
        get_m_uniqueId():number;
        set_m_uniqueId(value:number):void;
        get_m_aabbMin():btVector3;
        set_m_aabbMin(value:btVector3):void;
        get_m_aabbMax():btVector3;
        set_m_aabbMax(value:btVector3):void;
    }
    export class btTriangleIndexVertexArray extends Ammo.btStridingMeshInterface {
        addIndexedMesh(mesh:btIndexedMesh,indexType:PHY_ScalarType):void;
        constructor();
        constructor(numTriangles:number,triangleIndexBase:number,triangleIndexStride:number,numVertices:number,vertexBase:number,vertexStride:number);
        getIndexedMeshArray():Ammo.btAlignedObjectArray;
        getLockedReadOnlyVertexIndexBase(vertexbase:any,numverts:number,type:PHY_ScalarType,vertexStride:number,indexbase:any,indexstride:number,numfaces:number,indicestype:PHY_ScalarType,subpart:number):void;
        getLockedVertexIndexBase(vertexbase:any,numverts:number,type:PHY_ScalarType,vertexStride:number,indexbase:any,indexstride:number,numfaces:number,indicestype:PHY_ScalarType,subpart:number):void;
        getNumSubParts():number;
        getPremadeAabb(aabbMin:btVector3,aabbMax:btVector3):void;
        hasPremadeAabb():boolean;
        preallocateIndices(numindices:number):void;
        preallocateVertices(numverts:number):void;
        setPremadeAabb(aabbMin:btVector3,aabbMax:btVector3):void;
        unLockReadOnlyVertexBase(subpart:number):void;
        unLockVertexBase(subpart:number):void;
    }
    export class btBoxShape extends Ammo.btPolyhedralConvexShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(boxHalfExtents:btVector3);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getEdge(i:number,pa:btVector3,pb:btVector3):void;
        getHalfExtentsWithMargin():btVector3;
        getHalfExtentsWithoutMargin():btVector3;
        getName():string;
        getNumEdges():number;
        getNumPlanes():number;
        getNumPreferredPenetrationDirections():number;
        getNumVertices():number;
        getPlane(planeNormal:btVector3,planeSupport:btVector3,i:number):void;
        getPlaneEquation(plane:btVector4,i:number):void;
        getPreferredPenetrationDirection(index:number,penetrationVector:btVector3):void;
        getVertex(i:number,vtx:btVector3):void;
        isInside(pt:btVector3,tolerance:number):boolean;
        localGetSupportingVertex(vec:btVector3):btVector3;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
        setLocalScaling(scaling:btVector3):void;
        setMargin(collisionMargin:number):void;
    }
    export class Result {
    }
    export class btQuantizedBvhDoubleData {
        get_m_bvhAabbMin():btVector3DoubleData;
        set_m_bvhAabbMin(value:btVector3DoubleData):void;
        get_m_bvhAabbMax():btVector3DoubleData;
        set_m_bvhAabbMax(value:btVector3DoubleData):void;
        get_m_bvhQuantization():btVector3DoubleData;
        set_m_bvhQuantization(value:btVector3DoubleData):void;
        get_m_curNodeIndex():number;
        set_m_curNodeIndex(value:number):void;
        get_m_useQuantization():number;
        set_m_useQuantization(value:number):void;
        get_m_numContiguousLeafNodes():number;
        set_m_numContiguousLeafNodes(value:number):void;
        get_m_numQuantizedContiguousNodes():number;
        set_m_numQuantizedContiguousNodes(value:number):void;
        get_m_contiguousNodesPtr():btOptimizedBvhNodeDoubleData;
        set_m_contiguousNodesPtr(value:btOptimizedBvhNodeDoubleData):void;
        get_m_quantizedContiguousNodesPtr():btQuantizedBvhNodeData;
        set_m_quantizedContiguousNodesPtr(value:btQuantizedBvhNodeData):void;
        get_m_traversalMode():number;
        set_m_traversalMode(value:number):void;
        get_m_numSubtreeHeaders():number;
        set_m_numSubtreeHeaders(value:number):void;
        get_m_subTreeInfoPtr():btBvhSubtreeInfoData;
        set_m_subTreeInfoPtr(value:btBvhSubtreeInfoData):void;
    }
    export class btCompoundShapeChildData {
        get_m_transform():btTransformFloatData;
        set_m_transform(value:btTransformFloatData):void;
        get_m_childShape():btCollisionShapeData;
        set_m_childShape(value:btCollisionShapeData):void;
        get_m_childShapeType():number;
        set_m_childShapeType(value:number):void;
        get_m_childMargin():number;
        set_m_childMargin(value:number):void;
    }
    export class btBlock {
        get_previous():btBlock;
        set_previous(value:btBlock):void;
        get_address():any;
        set_address(value:any):void;
    }
    export class btPolyhedralConvexAabbCachingShape extends Ammo.btPolyhedralConvexShape {
        constructor();
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getNonvirtualAabb(trans:btTransform,aabbMin:btVector3,aabbMax:btVector3,margin:number):void;
        recalcLocalAabb():void;
        setLocalScaling(scaling:btVector3):void;
    }
    export class btChunk {
        get_m_chunkCode():number;
        set_m_chunkCode(value:number):void;
        get_m_length():number;
        set_m_length(value:number):void;
        get_m_oldPtr():any;
        set_m_oldPtr(value:any):void;
        get_m_dna_nr():number;
        set_m_dna_nr(value:number):void;
        get_m_number():number;
        set_m_number(value:number):void;
    }
    export class sStkCLN {
        constructor(n:Ammo.btDbvtNode,p:Ammo.btDbvtNode);
        get_node():Ammo.btDbvtNode;
        set_node(value:Ammo.btDbvtNode):void;
        get_parent():Ammo.btDbvtNode;
        set_parent(value:Ammo.btDbvtNode):void;
    }
    export class CProfileSample {
        constructor(name:string);
    }
    export class btPositionAndRadius {
        get_m_pos():btVector3FloatData;
        set_m_pos(value:btVector3FloatData):void;
        get_m_radius():number;
        set_m_radius(value:number):void;
    }
    export class Edge {
        IsMax():number;
        get_m_pos():number;
        set_m_pos(value:number):void;
        get_m_handle():number;
        set_m_handle(value:number):void;
    }
    export class btCapsuleShapeX extends Ammo.btCapsuleShape {
        constructor(radius:number,height:number);
        getName():string;
    }
    export class btQuaternion extends Ammo.btQuadWord {
        angle(q:btQuaternion):number;
        constructor();
        constructor(x:number,y:number,z:number,w:number);
        constructor(axis:btVector3,angle:number);
        constructor(yaw:number,pitch:number,roll:number);
        dot(q:btQuaternion):number;
        farthest(qd:btQuaternion):btQuaternion;
        getAngle():number;
        getAxis():btVector3;
        static getIdentity():btQuaternion;
        getW():number;
        inverse():btQuaternion;
        length():number;
        length2():number;
        nearest(qd:btQuaternion):btQuaternion;
        normalize():btQuaternion;
        normalized():btQuaternion;
        op_add(q2:btQuaternion):btQuaternion;
        op_div(s:number):btQuaternion;
        op_mul(s:number):btQuaternion;
        op_sub(q2:btQuaternion):btQuaternion;
        op_sub():btQuaternion;
        setEuler(yaw:number,pitch:number,roll:number):void;
        setEulerZYX(yaw:number,pitch:number,roll:number):void;
        setRotation(axis:btVector3,angle:number):void;
        slerp(q:btQuaternion,t:number):btQuaternion;
    }
    export class btCapsuleShapeZ extends Ammo.btCapsuleShape {
        constructor(radius:number,height:number);
        getName():string;
    }
    export class btGhostObject extends Ammo.btCollisionObject {
        addOverlappingObjectInternal(otherProxy:btBroadphaseProxy,thisProxy:btBroadphaseProxy):void;
        constructor();
        convexSweepTest(castShape:btConvexShape,convexFromWorld:btTransform,convexToWorld:btTransform,resultCallback:btCollisionWorld.ConvexResultCallback,allowedCcdPenetration:number):void;
        getNumOverlappingObjects():number;
        getOverlappingObject(index:number):btCollisionObject;
        getOverlappingPairs():any;
        rayTest(rayFromWorld:btVector3,rayToWorld:btVector3,resultCallback:btCollisionWorld.RayResultCallback):void;
        removeOverlappingObjectInternal(otherProxy:btBroadphaseProxy,dispatcher:btDispatcher,thisProxy:btBroadphaseProxy):void;
        static upcast(colObj:btCollisionObject):btGhostObject;
    }
    export class btConcaveShape extends Ammo.btCollisionShape {
        constructor();
        getMargin():number;
        setMargin(collisionMargin:number):void;
    }
    export class btPoint2PointConstraintDoubleData {
        get_m_typeConstraintData():btTypedConstraintData;
        set_m_typeConstraintData(value:btTypedConstraintData):void;
        get_m_pivotInA():btVector3DoubleData;
        set_m_pivotInA(value:btVector3DoubleData):void;
        get_m_pivotInB():btVector3DoubleData;
        set_m_pivotInB(value:btVector3DoubleData):void;
    }
    export class btBvhSubtreeInfoData {
        get_m_rootNodeIndex():number;
        set_m_rootNodeIndex(value:number):void;
        get_m_subtreeSize():number;
        set_m_subtreeSize(value:number):void;
        get_m_quantizedAabbMin():number;
        set_m_quantizedAabbMin(value:number):void;
        get_m_quantizedAabbMax():number;
        set_m_quantizedAabbMax(value:number):void;
    }
    export class btTriangleInfoMap extends Ammo.btHashMap {
        constructor();
        calculateSerializeBufferSize():number;
        deSerialize(data:btTriangleInfoMapData):void;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        get_m_convexEpsilon():number;
        set_m_convexEpsilon(value:number):void;
        get_m_planarEpsilon():number;
        set_m_planarEpsilon(value:number):void;
        get_m_equalVertexThreshold():number;
        set_m_equalVertexThreshold(value:number):void;
        get_m_edgeDistanceThreshold():number;
        set_m_edgeDistanceThreshold(value:number):void;
        get_m_maxEdgeAngleThreshold():number;
        set_m_maxEdgeAngleThreshold(value:number):void;
        get_m_zeroAreaThreshold():number;
        set_m_zeroAreaThreshold(value:number):void;
    }
    export class LocalConvexResult {
        constructor(hitCollisionObject:btCollisionObject,localShapeInfo:btCollisionWorld.LocalShapeInfo,hitNormalLocal:btVector3,hitPointLocal:btVector3,hitFraction:number);
        get_m_hitCollisionObject():btCollisionObject;
        set_m_hitCollisionObject(value:btCollisionObject):void;
        get_m_localShapeInfo():btCollisionWorld.LocalShapeInfo;
        set_m_localShapeInfo(value:btCollisionWorld.LocalShapeInfo):void;
        get_m_hitNormalLocal():btVector3;
        set_m_hitNormalLocal(value:btVector3):void;
        get_m_hitPointLocal():btVector3;
        set_m_hitPointLocal(value:btVector3):void;
        get_m_hitFraction():number;
        set_m_hitFraction(value:number):void;
    }
    export class bt32BitAxisSweep3 extends Ammo.btAxisSweep3Internal {
        constructor(worldAabbMin:btVector3,worldAabbMax:btVector3,maxHandles:number,pairCache:btOverlappingPairCache,disableRaycastAccelerator:boolean);
    }
    export class btCollisionAlgorithm {
        constructor();
        constructor(ci:btCollisionAlgorithmConstructionInfo);
    }
    export class btTriangleMeshShapeData {
        get_m_collisionShapeData():btCollisionShapeData;
        set_m_collisionShapeData(value:btCollisionShapeData):void;
        get_m_meshInterface():btStridingMeshInterfaceData;
        set_m_meshInterface(value:btStridingMeshInterfaceData):void;
        get_m_quantizedFloatBvh():btQuantizedBvhFloatData;
        set_m_quantizedFloatBvh(value:btQuantizedBvhFloatData):void;
        get_m_quantizedDoubleBvh():btQuantizedBvhDoubleData;
        set_m_quantizedDoubleBvh(value:btQuantizedBvhDoubleData):void;
        get_m_triangleInfoMap():btTriangleInfoMapData;
        set_m_triangleInfoMap(value:btTriangleInfoMapData):void;
        get_m_collisionMargin():number;
        set_m_collisionMargin(value:number):void;
        get_m_pad3():string;
        set_m_pad3(value:string):void;
    }
    export class btSphereShape extends Ammo.btConvexInternalShape {
        batchedUnitVectorGetSupportingVertexWithoutMargin(vectors:btVector3,supportVerticesOut:btVector3,numVectors:number):void;
        constructor(radius:number);
        calculateLocalInertia(mass:number,inertia:btVector3):void;
        getAabb(t:btTransform,aabbMin:btVector3,aabbMax:btVector3):void;
        getMargin():number;
        getName():string;
        getRadius():number;
        localGetSupportingVertex(vec:btVector3):btVector3;
        localGetSupportingVertexWithoutMargin(vec:btVector3):btVector3;
        setMargin(margin:number):void;
        setUnscaledRadius(radius:number):void;
    }
    export class btConvexHullShapeData {
        get_m_convexInternalShapeData():btConvexInternalShapeData;
        set_m_convexInternalShapeData(value:btConvexInternalShapeData):void;
        get_m_unscaledPointsFloatPtr():btVector3FloatData;
        set_m_unscaledPointsFloatPtr(value:btVector3FloatData):void;
        get_m_unscaledPointsDoublePtr():btVector3DoubleData;
        set_m_unscaledPointsDoublePtr(value:btVector3DoubleData):void;
        get_m_numUnscaledPoints():number;
        set_m_numUnscaledPoints(value:number):void;
        get_m_padding3():string;
        set_m_padding3(value:string):void;
    }
    export class btHashKey {
        constructor(uid:number);
        equals(other:btHashKey):boolean;
        getHash():number;
        getUid1():number;
    }
    export class ICollide {
        AllLeaves(arg0:Ammo.btDbvtNode):boolean;
        Descent(arg0:Ammo.btDbvtNode):boolean;
        Process(arg0:Ammo.btDbvtNode,arg1:Ammo.btDbvtNode):void;
        Process(arg0:Ammo.btDbvtNode):void;
        Process(n:Ammo.btDbvtNode,arg0:number):void;
    }
    export class btQuantizedBvh {
        constructor();
        buildInternal():void;
        calculateSerializeBufferSize():number;
        calculateSerializeBufferSizeNew():number;
        deSerializeDouble(quantizedBvhDoubleData:btQuantizedBvhDoubleData):void;
        deSerializeFloat(quantizedBvhFloatData:btQuantizedBvhFloatData):void;
        static deSerializeInPlace(i_alignedDataBuffer:any,i_dataBufferSize:number,i_swapEndian:boolean):btQuantizedBvh;
        static getAlignmentSerializationPadding():number;
        getLeafNodeArray():Ammo.btAlignedObjectArray;
        getQuantizedNodeArray():Ammo.btAlignedObjectArray;
        getSubtreeInfoArray():Ammo.btAlignedObjectArray;
        isQuantized():boolean;
        quantize(out:any,point:btVector3,isMax:number):void;
        quantizeWithClamp(out:any,point2:btVector3,isMax:number):void;
        reportAabbOverlappingNodex(nodeCallback:btNodeOverlapCallback,aabbMin:btVector3,aabbMax:btVector3):void;
        reportBoxCastOverlappingNodex(nodeCallback:btNodeOverlapCallback,raySource:btVector3,rayTarget:btVector3,aabbMin:btVector3,aabbMax:btVector3):void;
        reportRayOverlappingNodex(nodeCallback:btNodeOverlapCallback,raySource:btVector3,rayTarget:btVector3):void;
        serialize(o_alignedDataBuffer:any,i_dataBufferSize:number,i_swapEndian:boolean):boolean;
        serialize(dataBuffer:any,serializer:btSerializer):string;
        setQuantizationValues(bvhAabbMin:btVector3,bvhAabbMax:btVector3,quantizationMargin:number):void;
        setTraversalMode(traversalMode:Ammo.btQuantizedBvh.btTraversalMode):void;
        unQuantize(vecIn:any):btVector3;
    }
    export class btShortIntIndexData {
        get_m_value():number;
        set_m_value(value:number):void;
        get_m_pad():string;
        set_m_pad(value:string):void;
    }
    export class RaycastInfo {
        get_m_contactNormalWS():btVector3;
        set_m_contactNormalWS(value:btVector3):void;
        get_m_contactPointWS():btVector3;
        set_m_contactPointWS(value:btVector3):void;
        get_m_suspensionLength():number;
        set_m_suspensionLength(value:number):void;
        get_m_hardPointWS():btVector3;
        set_m_hardPointWS(value:btVector3):void;
        get_m_wheelDirectionWS():btVector3;
        set_m_wheelDirectionWS(value:btVector3):void;
        get_m_wheelAxleWS():btVector3;
        set_m_wheelAxleWS(value:btVector3):void;
        get_m_isInContact():boolean;
        set_m_isInContact(value:boolean):void;
        get_m_groundObject():any;
        set_m_groundObject(value:any):void;
    }
    export class btHashString {
        constructor(name:string);
        equals(other:btHashString):boolean;
        getHash():number;
        portableStringCompare(src:string,dst:string):number;
        get_m_string():string;
        set_m_string(value:string):void;
        get_m_hash():number;
        set_m_hash(value:number):void;
    }
    export class btRigidBodyDoubleData {
        get_m_collisionObjectData():btCollisionObjectDoubleData;
        set_m_collisionObjectData(value:btCollisionObjectDoubleData):void;
        get_m_invInertiaTensorWorld():btMatrix3x3DoubleData;
        set_m_invInertiaTensorWorld(value:btMatrix3x3DoubleData):void;
        get_m_linearVelocity():btVector3DoubleData;
        set_m_linearVelocity(value:btVector3DoubleData):void;
        get_m_angularVelocity():btVector3DoubleData;
        set_m_angularVelocity(value:btVector3DoubleData):void;
        get_m_angularFactor():btVector3DoubleData;
        set_m_angularFactor(value:btVector3DoubleData):void;
        get_m_linearFactor():btVector3DoubleData;
        set_m_linearFactor(value:btVector3DoubleData):void;
        get_m_gravity():btVector3DoubleData;
        set_m_gravity(value:btVector3DoubleData):void;
        get_m_gravity_acceleration():btVector3DoubleData;
        set_m_gravity_acceleration(value:btVector3DoubleData):void;
        get_m_invInertiaLocal():btVector3DoubleData;
        set_m_invInertiaLocal(value:btVector3DoubleData):void;
        get_m_totalForce():btVector3DoubleData;
        set_m_totalForce(value:btVector3DoubleData):void;
        get_m_totalTorque():btVector3DoubleData;
        set_m_totalTorque(value:btVector3DoubleData):void;
        get_m_inverseMass():number;
        set_m_inverseMass(value:number):void;
        get_m_linearDamping():number;
        set_m_linearDamping(value:number):void;
        get_m_angularDamping():number;
        set_m_angularDamping(value:number):void;
        get_m_additionalDampingFactor():number;
        set_m_additionalDampingFactor(value:number):void;
        get_m_additionalLinearDampingThresholdSqr():number;
        set_m_additionalLinearDampingThresholdSqr(value:number):void;
        get_m_additionalAngularDampingThresholdSqr():number;
        set_m_additionalAngularDampingThresholdSqr(value:number):void;
        get_m_additionalAngularDampingFactor():number;
        set_m_additionalAngularDampingFactor(value:number):void;
        get_m_linearSleepingThreshold():number;
        set_m_linearSleepingThreshold(value:number):void;
        get_m_angularSleepingThreshold():number;
        set_m_angularSleepingThreshold(value:number):void;
        get_m_additionalDamping():number;
        set_m_additionalDamping(value:number):void;
        get_m_padding():string;
        set_m_padding(value:string):void;
    }
    export class btVector3DoubleData {
        get_m_floats():number;
        set_m_floats(value:number):void;
    }
    export class btHingeConstraintDoubleData {
        get_m_typeConstraintData():btTypedConstraintData;
        set_m_typeConstraintData(value:btTypedConstraintData):void;
        get_m_rbAFrame():btTransformDoubleData;
        set_m_rbAFrame(value:btTransformDoubleData):void;
        get_m_rbBFrame():btTransformDoubleData;
        set_m_rbBFrame(value:btTransformDoubleData):void;
        get_m_useReferenceFrameA():number;
        set_m_useReferenceFrameA(value:number):void;
        get_m_angularOnly():number;
        set_m_angularOnly(value:number):void;
        get_m_enableAngularMotor():number;
        set_m_enableAngularMotor(value:number):void;
        get_m_motorTargetVelocity():number;
        set_m_motorTargetVelocity(value:number):void;
        get_m_maxMotorImpulse():number;
        set_m_maxMotorImpulse(value:number):void;
        get_m_lowerLimit():number;
        set_m_lowerLimit(value:number):void;
        get_m_upperLimit():number;
        set_m_upperLimit(value:number):void;
        get_m_limitSoftness():number;
        set_m_limitSoftness(value:number):void;
        get_m_biasFactor():number;
        set_m_biasFactor(value:number):void;
        get_m_relaxationFactor():number;
        set_m_relaxationFactor(value:number):void;
    }
    export class btGhostPairCallback extends Ammo.btOverlappingPairCallback {
        addOverlappingPair(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy):Ammo.btBroadphasePair;
        constructor();
        removeOverlappingPair(proxy0:btBroadphaseProxy,proxy1:btBroadphaseProxy,dispatcher:btDispatcher):any;
        removeOverlappingPairsContainingProxy(arg0:btBroadphaseProxy,arg1:btDispatcher):void;
    }
    export class rebind {
    }
}
