/// <reference types="jest" />

import { FakeUser, FakeAuth } from './auth';
import { FakeFireStore } from './firestore';

export const mockInitializeApp: jest.Mock;
export const mockCert: jest.Mock;

interface MockFirebaseOverrides<T> {
    currenUser?: FakeUser;
    database: T;
}

/** Mock stub for the firebase object */
export function firebaseStub<T>(
    overrides: MockFirebaseOverrides<T>,
): { inializeApp: jest.Mock; credentials: { cert: jest.Mock }; auth(): FakeAuth; firestore(): FakeFireStore<T> };

/** Create a mock for the Firebase SDK */
export function mockFireBase<T>(overrides?: MockFirebaseOverrides<T>): void;
