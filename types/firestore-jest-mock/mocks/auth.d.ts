/// <reference types="jest" />

/** General Firebase Auth user data */
interface FakeUser {
    uid: string;
    data: { [key: string]: any };
}

/**  Mocked properties of the User object */
interface MockedUserProperties {
    sendEmailVerification(): jest.Mock;
}

/** User type with mocked functions from the FakeAuth class */
type FakeAuthUser = FakeAuth & MockedUserProperties;

export const mockCreateUserWithEmailAndPassword: jest.Mock;
export const mockDeleteUser: jest.Mock;
export const mockSendVerificationEmail: jest.Mock;
export const mockSignInWithEmailAndPassword: jest.Mock;
export const mockSendPasswordResetEmail: jest.Mock;
export const mockVerifyIdToken: jest.Mock;

/** Mock for the Firebase Auth Module */
export class FakeAuth {
    // There's a getter that pulls out the data and uid with out the Mocks
    currentUser: FakeUser;

    constructor(user: FakeUser);

    createUserWithEmailAndPassword(): Promise<{ user: FakeAuthUser }>;
    deleteUser(): Promise<string>;
    signInWithEmailAndPassword(): Promise<{ user: FakeAuthUser }>;
    sendPasswordResetEmail(): void;
    verifyIdToken(): Promise<FakeAuthUser>;
}
