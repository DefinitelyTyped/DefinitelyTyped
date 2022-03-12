//=========================================================================================================
//
//  ######  #####    #####  #####   ##      ##      #####        ######  ##    ##  #####   #####   ####
//    ##    ##  ##   ##     ##  ##  ##      ##      ##             ##     ##  ##   ##  ##  ##     ##
//    ##    #####    #####  #####   ##      ##      #####          ##      ####    #####   #####   ###
//    ##    ##  ##   ##     ##  ##  ##      ##      ##             ##       ##     ##      ##        ##
//    ##    ##   ##  #####  #####   ######  ######  #####          ##       ##     ##      #####  ####
//
//=========================================================================================================

declare module "treblle" {
  export function useTreblle(app: any, options: any): void;

  export function koaTreblle(
    apiKey: string,
    projectId: string,
    additionalFieldsToMask?: any[],
    showErrors?: boolean
  ): Function;

  export function strapiTreblle(
    apiKey: string,
    projectId: string,
    additionalFieldsToMask?: any[],
    showErrors?: boolean,
    ignoreAdminRoutes?: string[]
  ): Function;
}
