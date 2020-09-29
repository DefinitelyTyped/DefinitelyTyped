// Type definitions for onfido-sdk-ui 6.0
// Project: https://github.com/onfido/onfido-sdk-ui#readme
// Definitions by: Liam Read <https://github.com/LiamDotPro>
//                 aktary <https://github.com/aktary>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface OnfidoResponse {
    document_front: {
        id: string;
        type: string;
        side: string;
    };
    face: {
        id: string;
        variant: string;
    };
}

export interface OnfidoConfig {
    token?: string;
    containerId?: string;
    onComplete?: (data: OnfidoResponse) => null;
    onModalRequestClose?: () => null;
    isModalOpen?: boolean;
    useModal?: boolean;

    steps?: Array<
        | string
        | {
              type: string;
              options: {
                  title?: string;
                  descriptions?: string[];
                  nextButton?: string;
                  country?: string;
                  documentTypes?: {
                      passport?: boolean;
                      driving_licence?: boolean;
                      national_identity_card?: boolean;
                      bank_building_society_statement?: boolean;
                      utility_bill?: boolean;
                      council_tax?: boolean; // GBR only
                      benefit_letters?: boolean; // GBR only
                      government_letter?: boolean; // non-GBR only
                  };
                  forceCrossDevice?: boolean;
                  requestedVariant?: 'standard' | 'video';
                  uploadFallback?: false;
                  message?: string;
                  submessage?: string;
              };
          }
    >;
}

export interface OnfidoHandle {
    tearDown(): null;

    setOptions(opts: OnfidoConfig): null;
}

export function init(e: any): OnfidoHandle;
