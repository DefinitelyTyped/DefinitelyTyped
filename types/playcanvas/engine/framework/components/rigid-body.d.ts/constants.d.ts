declare namespace pc {
    // types
    const BODYTYPE_STATIC = 'static';
    const BODYTYPE_DYNAMIC = 'dynamic';
    const BODYTYPE_KINEMATIC = 'kinematic';

    // Collision flags
    const BODYFLAG_STATIC_OBJECT = 1;
    const BODYFLAG_KINEMATIC_OBJECT = 2;
    const BODYFLAG_NORESPONSE_OBJECT = 4;

    // Activation states
    const BODYSTATE_ACTIVE_TAG = 1;
    const BODYSTATE_ISLAND_SLEEPING = 2;
    const BODYSTATE_WANTS_DEACTIVATION = 3;
    const BODYSTATE_DISABLE_DEACTIVATION = 4;
    const BODYSTATE_DISABLE_SIMULATION = 5;

    // groups
    const BODYGROUP_NONE = 0;
    const BODYGROUP_DEFAULT = 1;
    const BODYGROUP_DYNAMIC = 1;
    const BODYGROUP_STATIC = 2;
    const BODYGROUP_KINEMATIC = 4;
    const BODYGROUP_ENGINE_1 = 8;
    const BODYGROUP_TRIGGER = 16;
    const BODYGROUP_ENGINE_2 = 32;
    const BODYGROUP_ENGINE_3 = 64;
    const BODYGROUP_USER_1 = 128;
    const BODYGROUP_USER_2 = 256;
    const BODYGROUP_USER_3 = 512;
    const BODYGROUP_USER_4 = 1024;
    const BODYGROUP_USER_5 = 2048;
    const BODYGROUP_USER_6 = 4096;
    const BODYGROUP_USER_7 = 8192;
    const BODYGROUP_USER_8 = 16384;

    // masks
    const BODYMASK_NONE = 0;
    const BODYMASK_ALL = 65535;
    const BODYMASK_STATIC = 2;
    const BODYMASK_NOT_STATIC: number;
    const BODYMASK_NOT_STATIC_KINEMATIC: number;
}