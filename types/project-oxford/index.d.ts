// Type definitions for project-oxford v0.1.3
// Project: https://github.com/felixrieseberg/project-oxford
// Definitions by: Scott Southwood <https://github.com/scsouthw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node" />

import Promise = require("bluebird");
import stream = require("stream");

export declare class Client {
    constructor(apiKey: string);
    private _key: string;
    public face: FaceAPI;
    public vision: VisionAPI;
}

export declare class FaceAPI {

    /**
     * Call the Face Detected API
     * Detects human faces in an image and returns face locations, face landmarks, and
     * optional attributes including head-pose, gender, and age. Detection is an essential
     * API that provides faceId to other APIs like Identification, Verification,
     * and Find Similar.
     *
     * @param  {object}  options                        - Options object
     * @param  {string}  options.url                    - URL to image to be used
     * @param  {string}  options.path                   - Path to image to be used
     * @param  {stream}  options.stream                 - Stream for image to be used
     * @param  {boolean} options.analyzesFaceLandmarks  - Analyze face landmarks?
     * @param  {boolean} options.analyzesAge            - Analyze age?
     * @param  {boolean} options.analyzesGender         - Analyze gender?
     * @param  {boolean} options.analyzesHeadPose       - Analyze headpose?
     * @return {Promise}                                - Promise resolving with the resulting JSON
     */
    public detect(options: Options.Detect): Promise<[FaceResponses.Detect]>;

    /**
     * Detect similar faces using faceIds (as returned from the detect API)
     * @param  {string} sourceFace          - String of faceId for the source face
     * @param  {string[]} candidateFaces    - Array of faceIds to use as candidates
     * @return {Promise}                    - Promise resolving with the resulting JSON
     */
    public similar(sourceFaceId: string, candidateFacesIds: string[]): Promise<FaceResponses.Similar>;

    /**
     * Divides candidate faces into groups based on face similarity using faceIds.
     * The output is one or more disjointed face groups and a MessyGroup.
     * A face group contains the faces that have similar looking, often of the same person.
     * There will be one or more face groups ranked by group size, i.e. number of face.
     * Faces belonging to the same person might be split into several groups in the result.
     * The MessyGroup is a special face group that each face is not similar to any other
     * faces in original candidate faces. The messyGroup will not appear in the result if
     * all faces found their similar counterparts. The candidate face list has a
     * limit of 100 faces.
     *
     * @param  {string[]} faces     - Array of faceIds to use
     * @return {Promise}            - Promise resolving with the resulting JSON
     */
    public grouping(faces: string[]): Promise<FaceResponses.Grouping>;

    /**
     * Identifies persons from a person group by one or more input faces.
     * To recognize which person a face belongs to, Face Identification needs a person group
     * that contains number of persons. Each person contains one or more faces. After a person
     * group prepared, it should be trained to make it ready for identification. Then the
     * identification API compares the input face to those persons' faces in person group and
     * returns the best-matched candidate persons, ranked by confidence.
     *
     * @param  {string[]} faces     - Array of faceIds to use
     * @return {Promise}            - Promise resolving with the resulting JSON
     */
    public identify(faceIDs: string[], options: Options.Identify): Promise<FaceResponses.Identify[]>;

    /**
     * Analyzes two faces and determine whether they are from the same person.
     * Verification works well for frontal and near-frontal faces.
     * For the scenarios that are sensitive to accuracy please use with own judgment.
     * @param  {string[]} faces     - Array containing two faceIds to use
     * @return {Promise}            - Promise resolving with the resulting JSON
     */
    public verify(faces: string[]): Promise<FaceResponses.Verify>;

    /**
     * @namespace
     * @memberof face
     */
    public personGroup: PersonGroup;
    public person: Person;
}

export declare class VisionAPI {
    /**
     * This operation does a deep analysis on the given image and then extracts a
     * set of rich visual features based on the image content.
     *
     * @param  {Object}  options                - Options object describing features to extract
     * @param  {string}  options.url            - Url to image to be analyzed
     * @param  {string}  options.path           - Path to image to be analyzed
     * @param  {boolean} options.ImageType      - Detects if image is clipart or a line drawing.
     * @param  {boolean} options.Color          - Determines the accent color, dominant color, if image is black&white.
     * @param  {boolean} options.Faces          - Detects if faces are present. If present, generate coordinates, gender and age.
     * @param  {boolean} options.Adult          - Detects if image is pornographic in nature (nudity or sex act). Sexually suggestive content is also detected.
     * @param  {boolean} options.Categories     - Image categorization; taxonomy defined in documentation.
     * @return {Promise}                        - Promise resolving with the resulting JSON
     */
    public analyzeImage(options: Options.Analyze): Promise<VisionResponses.Analyze>;

    /**
     * Generate a thumbnail image to the user-specified width and height. By default, the
     * service analyzes the image, identifies the region of interest (ROI), and generates
     * smart crop coordinates based on the ROI. Smart cropping is designed to help when you
     * specify an aspect ratio that differs from the input image.
     *
     * @param  {Object}  options                - Options object describing features to extract
     * @param  {string}  options.url            - Url to image to be thumbnailed
     * @param  {string}  options.path           - Path to image to be thumbnailed
     * @param  {number}  options.width          - Width of the thumb in pixels
     * @param  {number}  options.height         - Height of the thumb in pixels
     * @param  {boolean} options.smartCropping  - Should SmartCropping be enabled?
     * @param  {Object}  options.pipe           - We'll pipe the returned image to this object
     * @return {Promise}                        - Promise resolving with the resulting JSON
     */
    public thumbnail(options: Options.Thumbnail): Promise<stream.Stream>;

    /**
     * Optical Character Recognition (OCR) detects text in an image and extracts the recognized
     * characters into a machine-usable character stream.
     *
     * @param  {Object}  options                    - Options object describing features to extract
     * @param  {string}  options.url                - Url to image to be analyzed
     * @param  {string}  options.path               - Path to image to be analyzed
     * @param  {string}  options.language           - BCP-47 language code of the text to be detected in the image. Default value is "unk", then the service will auto detect the language of the text in the image.
     * @param  {string}  options.detectOrientation  - Detect orientation of text in the image
     * @return {Promise}                            - Promise resolving with the resulting JSON
     */
    public ocr(options: Options.Ocr): Promise<VisionResponses.Ocr>;
}

export declare class PersonGroup {
    /**
     * Creates a new person group with a user-specified ID.
     * A person group is one of the most important parameters for the Identification API.
     * The Identification searches person faces in a specified person group.
     *
     * @param  {string} personGroupId       - Numbers, en-us letters in lower case, '-', '_'. Max length: 64
     * @param  {string} name                - Person group display name. The maximum length is 128.
     * @param  {string} userData            - User-provided data attached to the group. The size limit is 16KB.
     * @return {Promise}                    - Promise resolving with the resulting JSON
     */
    public create(personGroupId: string, name: string, userData: string): Promise<void>;

    /**
     * Deletes an existing person group.
     *
     * @param  {string} personGroupId       - Name of person group to delete
     * @return {Promise}                    - Promise resolving with the resulting JSON
     */
    public delete(personGroupId: string): Promise<void>;

    /**
     * Gets an existing person group.
     *
     * @param  {string} personGroupId       - Name of person group to get
     * @return {Promise}                    - Promise resolving with the resulting JSON
     */
    public get(personGroupId: string): Promise<PersonGroupResponses.PersonGroup>;

    /**
     * Retrieves the training status of a person group. Training is triggered by the Train PersonGroup API.
     * The training will process for a while on the server side. This API can query whether the training
     * is completed or ongoing.
     *
     * @param  {string} personGroupId       - Name of person group to get
     * @return {Promise}                    - Promise resolving with the resulting JSON
     */
    public trainingStatus(personGroupId: string): Promise<PersonGroupResponses.TrainingStatus>;

    /**
     * Starts a person group training.
         * Training is a necessary preparation process of a person group before identification.
     * Each person group needs to be trained in order to call Identification. The training
     * will process for a while on the server side even after this API has responded.
     *
     * @param  {string} personGroupId       - Name of person group to get
     * @return {Promise}                    - Promise resolving with the resulting JSON
     */
    public trainingStart(personGroupId: string): Promise<PersonGroupResponses.TrainingStatus>;

    /**
     * Updates an existing person group's display name and userData.
     *
     * @param  {string} personGroupId       - Numbers, en-us letters in lower case, '-', '_'. Max length: 64
     * @param  {string} name                - Person group display name. The maximum length is 128.
     * @param  {string} userData            - User-provided data attached to the group. The size limit is 16KB.
     * @return {Promise}                    - Promise resolving with the resulting JSON
     */
    public update(personGroupId: string, name: string, userData: string): Promise<void>;

    /**
     * Lists all person groups in the current subscription.
     * @return {Promise}                    - Promise resolving with the resulting JSON
     */
    public list(): Promise<PersonGroupResponses.PersonGroup[]>;
}

export declare class Person {
    /**
     * Adds a face to a person for identification. The maximum face count for each person is 32.
     * The face ID must be added to a person before its expiration. Typically a face ID expires
     * 24 hours after detection.
     *
     * @param {string} personGroupId     - The target person's person group.
     * @param {string} personId          - The target person that the face is added to.
     * @param {string} faceId            - The ID of the face to be added. The maximum face amount for each person is 32.
     * @param {string} userData          - Optional. Attach user data to person's face. The maximum length is 1024.
     * @return {Promise}                 - Promise resolving with the resulting JSON
     */
    public addFace(personGroupId: string, personId: string, faceId: string, userData?: string): Promise<void>;

    /**
     * Deletes a face from a person.
     *
     * @param {string} personGroupId     - The target person's person group.
     * @param {string} personId          - The target person that the face is removed from.
     * @param {string} faceId            - The ID of the face to be deleted.
     * @return {Promise}                 - Promise resolving with the resulting JSON
     */
    public deleteFace(personGroupId: string, personId: string, faceId: string): Promise<void>;

    /**
     * Updates a face for a person.
     *
     * @param {string} personGroupId     - The target person's person group.
     * @param {string} personId          - The target person that the face is updated on.
     * @param {string} faceId            - The ID of the face to be updated.
     * @param {string} userData          - Optional. Attach user data to person's face. The maximum length is 1024.
     * @return {Promise}                 - Promise resolving with the resulting JSON
     */
    public updateFace(personGroupId: string, personId: string, faceId: string, userData: string): Promise<void>;

    /**
     * Get a face for a person.
     *
     * @param {string} personGroupId     - The target person's person group.
     * @param {string} personId          - The target person that the face is to get from.
     * @param {string} faceId            - The ID of the face to get.
     * @return {Promise}                 - Promise resolving with the resulting JSON
     */
    public getFace(personGroupId: string, personId: string, faceId: string): Promise<PersonResponses.Face>;

    /**
     * Creates a new person in a specified person group for identification.
     * The number of persons has a subscription limit. Free subscription amount is 1000 persons.
     * The maximum face count for each person is 32.
     *
     * @param {string} personGroupId     - The target person's person group.
     * @param {string[]} faces           - Array of face id's for the target person
     * @param {string} name              - Target person's display name. The maximum length is 128.
     * @param {string} userData          - Optional fields for user-provided data attached to a person. Size limit is 16KB.
     * @return {Promise}                 - Promise resolving with the resulting JSON
     */
    public create(personGroupId: string, faces: string[], name: string, userData: string): Promise<{ personId: string }>;

    /**
     * Deletes an existing person from a person group.
     *
     * @param {string} personGroupId     - The target person's person group.
     * @param {string} personId          - The target person to delete.
     * @return {Promise}                 - Promise resolving with the resulting JSON
     */
    public delete(personGroupId: string, personId: string): Promise<void>;

    /**
     * Gets an existing person from a person group.
     *
     * @param {string} personGroupId     - The target person's person group.
     * @param {string} personId          - The target person to get.
     * @return {Promise}                 - Promise resolving with the resulting JSON
     */
    public get(personGroupId: string, personId: string): Promise<PersonResponses.Person>;

    /**
     * Updates a person's information.
     *
     * @param {string} personGroupId     - The target person's person group.
     * @param {string[]} faces           - Array of face id's for the target person
     * @param {string} name              - Target person's display name. The maximum length is 128.
     * @param {string} userData          - Optional fields for user-provided data attached to a person. Size limit is 16KB.
     * @return {Promise}                 - Promise resolving with the resulting JSON
     */
    public update(personGroupId: string, personId: string, faces: string[], name: string, userData: string): Promise<void>;

    /**
     * Lists all persons in a person group, with the person information.
     *
     * @param {string} personGroupId     - The target person's person group.
     * @return {Promise}                 - Promise resolving with the resulting JSON
     */
    public list(personGroupId: string): Promise<PersonResponses.Person[]>;
}

declare namespace Options {
    interface Detect {
        url?: string; // URL to image to be used
        path?: string; // Path to image to be used
        stream?: stream.Stream; // Stream of an image to be used
        analyzesFaceLandmarks?: boolean; // Analyze face landmarks?
        analyzesAge?: boolean; // Analyze age?
        analyzesGender?: boolean; // Analyze gender?
        analyzesHeadPose?: boolean; //Analyze headpose?
    }

    interface Identify {
        personGroupId: string;
        maxNumOfCandidatesReturned: number; // range is 1-10
    }

    interface Analyze {
        url?: string; // Url to image to be analyzed
        path?: string; // Path to image to be analyzed
        ImageType?: boolean; // Detects if image is clipart or a line drawing.
        Color?: boolean; // Determines the accent color, dominant color, if image is black& white.
        Faces?: boolean; // Detects if faces are present.If present, generate coordinates, gender and age.
        Adult?: boolean; // Detects if image is pornographic in nature(nudity or sex act).Sexually suggestive content is also detected.
        Categories?: boolean; // Image categorization; taxonomy defined in documentation.
    }

    interface Thumbnail {
        url?: string; // Url to image to be thumbnailed
        path?: string; // Path to image to be thumbnailed
        width?: number; // Width of the thumb in pixels
        height?: number; // Height of the thumb in pixels
        smartCropping?: boolean; // Should SmartCropping be enabled?
        pipe?: stream.Writable; // We'll pipe the returned image to this object
    }

    interface Ocr {
        url?: string; // URL to image to be analyzed
        path?: string; // Path to image to be analyzed
        language?: string; //BCP - 47 language code of the text to be detected in the image.Default value is "unk", then the service will auto detect the language of the text in the image.
        detectOrientation?: boolean; // Detect orientation of text in the image
    }
}

declare namespace FaceResponses {
    interface FaceRectangle {
        top: number;
        left: number;
        width: number;
        height: number;
    }

    interface point {
        x: number;
        y: number;
    }

    interface FaceLandmarks {
        "pupilLeft": point;
        "pupilRight": point;
        "noseTip": point;
        "mouthLeft": point;
        "mouthRight": point;
        "eyebrowLeftOuter": point;
        "eyebrowLeftInner": point;
        "eyeLeftOuter": point;
        "eyeLeftTop": point;
        "eyeLeftBottom": point;
        "eyeLeftInner": point;
        "eyebrowRightInner": point;
        "eyebrowRightOuter": point;
        "eyeRightInner": point;
        "eyeRightTop": point;
        "eyeRightBottom": point;
        "eyeRightOuter": point;
        "noseRootLeft": point;
        "noseRootRight": point;
        "noseLeftAlarTop": point;
        "noseRightAlarTop": point;
        "noseLeftAlarOutTip": point;
        "noseRightAlarOutTip": point;
        "upperLipTop": point;
        "upperLipBottom": point;
        "underLipTop": point;
        "underLipBottom": point;
    }

    interface Attributes {
        "headPose": { "pitch": number, "roll": number, "yaw": number };
        "gender": string;
        "age": number;
    }

    export interface Detect {
        "faceId": string;
        "faceRectangle": FaceRectangle;
        "faceLandmarks": FaceLandmarks;
        "attributes": Attributes;
    }

    export interface Similar {
        "faceIds": string[];
    }

    export interface Grouping {
        "groups": string[];
        "messyGroup": string[];
    }

    export interface Identify {
        "faceId": string;
        "candidates": [{
            personId: string;
            confidence: number;
        }];
    }

    export interface Verify {
        "isIdentical": boolean;
        "confidence": number;
    }
}

declare namespace PersonGroupResponses {

    export interface PersonGroup {
        "personGroupId": string;
        "name": string;
        "userData": string;
    }

    export interface TrainingStatus {
        "personGroupId": string;
        "status": string;
        "startTime": string;
        "endTime": string;
    }
}

declare namespace PersonResponses {
    export interface Create {
        "personId": string;
    }

    export interface Person {
        "personId": string;
        "faceIds": string[];
        "name": string;
        "userData": string;
    }

    export interface Face {
        "faceId": string;
        "userData": string;
    }
}

declare namespace VisionResponses {
    export interface Analyze {
        "categories": [{
            "name": string;
            "score": number;
        }],
        "adult": {
            "isAdultContent": boolean;
            "isRacyContent": boolean;
            "adultScore": number;
            "racyScore": number;
        },
        "requestId": string;
        "metadata": {
            "width": number;
            "height": number;
            "format": string;
        },
        "faces": [
            {
                "age": number;
                "gender": string;
                "faceRectangle": {
                    "left": number;
                    "top": number;
                    "width": number;
                    "height": number;
                }
            }
        ],
        "color": {
            "dominantColorForeground": string;
            "dominantColorBackground": string;
            "dominantColors": string[];
            "accentColor": string;
            "isBWImg": boolean;
        },
        "imageType": {
            "clipArtType": number;
            "lineDrawingType": number;
        }
    }


    export interface Ocr {
        "language": string;
        "textAngle": number;
        "orientation": string;
        "regions": [{
            "boundingBox": string;
            "lines": [{
                "boundingBox": string;
                "words": [{
                    "boundingBox": string;
                    "text": string;
                }]
            }]
        }]
    }
}
