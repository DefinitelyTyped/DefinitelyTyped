// Type definitions for non-npm package servicenow-london 1.0
// Project: https://developer.servicenow.com/app.do#!/api_doc?v=london
// Definitions by: John Caruso <https://github.com/johncaruso>
//                 Bryce Godfrey <https://github.com/bryceg>
//                 Garrett Griffin <https://github.com/grgisme>
//                 Erik Myrold <https://github.com/emyrold>
//                 Tim Woodruff <https://github.com/thisnameissoclever>
//                 Anim Yeboah <https://github.com/ayeboah>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference path="Class.d.ts" />
/// <reference path="GlideDate.d.ts" />
/// <reference path="GlideDateTime.d.ts" />
/// <reference path="GlideDBFunctionBuilder.d.ts" />
/// <reference path="GlideDuration.d.ts" />
/// <reference path="GlideEmailOutbound.d.ts" />
/// <reference path="GlideFilter.d.ts" />
/// <reference path="GlideLocale.d.ts" />
/// <reference path="GlidePluginManager.d.ts" />
/// <reference path="GlideRecordOperation.d.ts" />
/// <reference path="GlideSchedule.d.ts" />
/// <reference path="GlideScopedEvaluator.d.ts" />
/// <reference path="GlideScriptedProcessor.d.ts" />
/// <reference path="GlideSecureRandomUtil.d.ts" />
/// <reference path="GlideServletRequest.d.ts" />
/// <reference path="GlideServletResponse.d.ts" />
/// <reference path="GlideSession.d.ts" />
/// <reference path="GlideStringUtil.d.ts" />
/// <reference path="GlideSysAttachment.d.ts" />
/// <reference path="GlideSystem.d.ts" />
/// <reference path="GlideTime.d.ts" />
/// <reference path="GlideUser.d.ts" />
/// <reference path="QueryOperator.d.ts" />
/// <reference path="RenderProperties.d.ts" />
/// <reference path="RESTAPIRequest.d.ts" />
/// <reference path="RESTAPIRequestBody.d.ts" />
/// <reference path="RESTAPIResponse.d.ts" />
/// <reference path="RESTAPIResponseStream.d.ts" />
/// <reference path="RESTMessageV2.d.ts" />
/// <reference path="RESTResponseV2.d.ts" />
/// <reference path="ScopedElementDescriptor.d.ts" />
/// <reference path="ScopedGlideElement.d.ts" />
/// <reference path="ScopedGlideRecord.d.ts" />
/// <reference path="ScopedQueryCondition.d.ts" />
/// <reference path="SOAPMessageV2.d.ts" />
/// <reference path="SOAPResponseV2.d.ts" />
/// <reference path="Workflow.d.ts" />
/// <reference path="XMLDocument2.d.ts" />
/// <reference path="XMLNode.d.ts" />
/// <reference path="XMLNodeIterator.d.ts" />

declare const GlideRecord: ScopedGlideRecord;
declare const GlideRecordSecure: ScopedGlideRecord;
declare const RP: RenderProperties;
declare const current: ScopedGlideRecord;
declare const email: GlideEmailOutbound;
declare const g_processor: GlideScriptedProcessor;
declare const g_request: GlideServletRequest;
declare const g_response: GlideServletResponse;
declare const gs: GlideSystem;
declare const previous: ScopedGlideRecord;
