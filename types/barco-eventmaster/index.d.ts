// Type definitions for barco-eventmaster 8.0
// Project: https://github.com/willosof/node-barco-eventmaster
// Definitions by: Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace EventMaster {
    type Callback<T = unknown> = (err: true | null, data: T) => void;

    type UserType = 'operator' | 'super_user';

    type NotificationType =
        | 'ScreenDestChanged'
        | 'AUXDestChanged'
        | 'FrameChanged'
        | 'NativeRateChanged'
        | 'InputCfgChanged'
        | 'SourceChanged'
        | 'BGSourceChanged'
        | 'PresetChanged'
        | 'StillChanged'
        | 'OutputCfgChanged'
        | 'CueChanged';
}
declare class EventMaster {
    constructor(ip: string);

    /** Query the E2 directly */
    query(method: string, params: any, cb?: EventMaster.Callback): void;

    allTrans(type: EventMaster.UserType, passwordOrOperatorId: string, cb?: EventMaster.Callback): void;
    cut(type: EventMaster.UserType, passwordOrOperatorId: string, cb?: EventMaster.Callback): void;

    resetFrameSettings(resetKind: 0 | 1 | 2 | 3 | 4 | 5, cb?: EventMaster.Callback): void;

    powerStatus(cb?: EventMaster.Callback): void;

    listPresets(ScreenDest: number, AuxDest: number, cb?: EventMaster.Callback): void;
    listDestinationsForPreset(presetId: number): void;

    savePreset(): void;

    renamePresetById(presetId: number, newPresetName: string, cb?: EventMaster.Callback): void;
    renamePresetBySno(presetSno: number, newPresetName: string, cb?: EventMaster.Callback): void;
    renamePresetByName(presetName: string, newPresetName: string, cb?: EventMaster.Callback): void;

    activateSourceMainBackup(): void;

    activatePresetById(
        presetId: number,
        recallInProgramInt: 0 | 1,
        type: EventMaster.UserType,
        passwordOrOperatorId: string,
        cb?: EventMaster.Callback,
    ): void;
    activatePresetBySno(
        presetSno: number,
        recallInProgramInt: 0 | 1,
        type: EventMaster.UserType,
        passwordOrOperatorId: string,
        cb?: EventMaster.Callback,
    ): void;
    activatePresetByName(
        presetName: string,
        recallInProgramInt: 0 | 1,
        type: EventMaster.UserType,
        passwordOrOperatorId: string,
        cb?: EventMaster.Callback,
    ): void;

    recallNextPreset(cb?: EventMaster.Callback): void;

    deletePresetById(
        presetId: number,
        type: EventMaster.UserType,
        passwordOrOperatorId: string,
        cb?: EventMaster.Callback,
    ): void;
    deletePresetBySno(
        presetSno: number,
        type: EventMaster.UserType,
        passwordOrOperatorId: string,
        cb?: EventMaster.Callback,
    ): void;
    deletePresetByName(
        presetName: string,
        type: EventMaster.UserType,
        passwordOrOperatorId: string,
        cb?: EventMaster.Callback,
    ): void;

    listDestinations(type: 0 | 1 | 2, cb?: EventMaster.Callback): void;
    listSources(type: 0 | 1 | 2 | 3 | 4, cb?: EventMaster.Callback): void;

    activateCueById(id: number, type: 1 | 2, cb?: EventMaster.Callback): void;
    activateCueByCueName(cueName: string, type: 1 | 2, cb?: EventMaster.Callback): void;
    activateCueByCueSerialNo(cueSerialNo: number, type: 1 | 2, cb?: EventMaster.Callback): void;

    listCues(type: 0 | 1 | 2, cb?: EventMaster.Callback): void;
    activateDestGroup(id: number, cb?: EventMaster.Callback): void;
    control3d(id: number, type: 0 | 1, syncSource: 1 | 2 | 3 | 4, syncInvert: 0 | 1, cb?: EventMaster.Callback): void;
    listContent(id: number, cb?: EventMaster.Callback): void;
    listSuperDestContent(id: number, cb?: EventMaster.Callback): void;
    listSuperAuxContent(id: number, cb?: EventMaster.Callback): void;
    changeContent(screenDestIndex: number, bgLayer: number, Layers: unknown, cb?: EventMaster.Callback): void;
    freezeDestSource(type: 0 | 1 | 2 | 3, id: number, screenGroup: 0, mode: 0 | 1, cb?: EventMaster.Callback): void;
    listStill(cb?: EventMaster.Callback): void;
    deleteStill(stillIndex: number, cb?: EventMaster.Callback): void;
    takeStill(type: 0 | 1, id: number, fileid: number, cb?: EventMaster.Callback): void;
    getFrameSettings(cb?: EventMaster.Callback): void;

    listAuxContent(auxDestIndex: number, cb?: EventMaster.Callback): void;
    changeAuxContent(id: number, pvwLastSrcIndex: number, pgmLastSrcIndex: number, cb?: EventMaster.Callback): void;
    changeAuxContentName(
        id: number,
        name: string,
        pvwLastSrcIndex: number,
        pgmLastSrcIndex: number,
        cb?: EventMaster.Callback,
    ): void;

    subscribe(
        hostname: string,
        port: number,
        notificationTypes: EventMaster.NotificationType[],
        cb?: EventMaster.Callback,
    ): void;
    unsubscribe(
        hostname: string,
        port: number,
        notificationTypes: EventMaster.NotificationType[],
        cb?: EventMaster.Callback,
    ): void;

    armUnarmDestination(
        arm: 0 | 1,
        screenDestinations: Array<{ id: number }>,
        auxDestinations: Array<{ id: number }>,
        cb?: EventMaster.Callback,
    ): void;

    fillHV(screenId: number, Layers: Array<{ id: number }>, cb?: EventMaster.Callback): void;
    clearLayers(screenId: number, Layers: Array<{ id: number }>, cb?: EventMaster.Callback): void;

    recallUserKey(
        userkeyName: string,
        ScreenDestination: unknown[],
        Layer: Array<{ id: number }>,
        cb?: EventMaster.Callback,
    ): void;
    listUserKeys(cb?: EventMaster.Callback): void;

    listSourceMainBackup(inputType?: 0 | 1, cb?: EventMaster.Callback): void;
    resetSourceMainBackup(source: number, cb?: EventMaster.Callback): void;
    listInputs(index: number, cb?: EventMaster.Callback): void;
    listOutputs(index: number, cb?: EventMaster.Callback): void;
    mvrLayoutChange(frameUnitId: number, mvrLayoutId: number, cb?: EventMaster.Callback): void;

    listOperators(cb?: EventMaster.Callback): void;
    configureOperator(
        params: {
            operatorId: number;
            name: string;
            startRange: number;
            endRange: number;
            enable: 0 | 1;
            add: { destType: 0 | 1 | 2 | 3; destIndex: number };
            remove: { destType: 0 | 1 | 2 | 3; destIndex: number };
        },
        cb?: EventMaster.Callback,
    ): void;

    changeAuxContentTestPattern(id: number, testPattern: number, cb?: EventMaster.Callback): void;
    changeContentTestPattern(id: number, testPattern: number, cb?: EventMaster.Callback): void;
    listDestGroups(cb?: EventMaster.Callback): void;
    listDestGroupsPerType(type: 'destGroupId' | 'destGroupSno' | 'destGroupName', cb?: EventMaster.Callback): void;
}

export = EventMaster;
