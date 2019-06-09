// Type definitions for fhir-kit-client 1.1
// Project: https://github.com/Vermonster/fhir-kit-client
// Definitions by: Matthew Morrissette <https://github.com/yinzara>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="fhir" />
import { Options, Headers } from "request";
import { OpPatch } from "json-patch";

type KnownResourceType = 'Account' |
    'ActivityDefinition' |
    'AdverseEvent' |
    'AllergyIntolerance' |
    'Appointment' |
    'AppointmentResponse' |
    'AuditEvent' |
    'Basic' |
    'Binary' |
    'BodySite' |
    'Bundle' |
    'CapabilityStatement' |
    'CarePlan' |
    'CareTeam' |
    'ChargeItem' |
    'Claim' |
    'ClaimResponse' |
    'ClinicalImpression' |
    'CodeSystem' |
    'Communication' |
    'CommunicationRequest' |
    'CompartmentDefinition' |
    'Composition' |
    'ConceptMap' |
    'Condition' |
    'Consent' |
    'Contract' |
    'Coverage' |
    'DataElement' |
    'DetectedIssue' |
    'Device' |
    'DeviceComponent' |
    'DeviceMetric' |
    'DeviceRequest' |
    'DeviceUseStatement' |
    'DiagnosticReport' |
    'DocumentManifest' |
    'DocumentReference' |
    'EligibilityRequest' |
    'EligibilityResponse' |
    'Encounter' |
    'Endpoint' |
    'EnrollmentRequest' |
    'EnrollmentResponse' |
    'EpisodeOfCare' |
    'ExpansionProfile' |
    'ExplanationOfBenefit' |
    'FamilyMemberHistory' |
    'Flag' |
    'Goal' |
    'GraphDefinition' |
    'Group' |
    'GuidanceResponse' |
    'HealthcareService' |
    'ImagingManifest' |
    'ImagingStudy' |
    'Immunization' |
    'ImmunizationRecommendation' |
    'ImplementationGuide' |
    'Library' |
    'Linkage' |
    'List' |
    'Location' |
    'Measure' |
    'MeasureReport' |
    'Media' |
    'Medication' |
    'MedicationAdministration' |
    'MedicationDispense' |
    'MedicationRequest' |
    'MedicationStatement' |
    'MessageDefinition' |
    'MessageHeader' |
    'NamingSystem' |
    'NutritionOrder' |
    'Observation' |
    'OperationDefinition' |
    'OperationOutcome' |
    'Organization' |
    'Parameters' |
    'Patient' |
    'PaymentNotice' |
    'PaymentReconciliation' |
    'Person' |
    'PlanDefinition' |
    'Practitioner' |
    'PractitionerRole' |
    'Procedure' |
    'ProcedureRequest' |
    'ProcessRequest' |
    'ProcessResponse' |
    'Provenance' |
    'Questionnaire' |
    'QuestionnaireResponse' |
    'ReferralRequest' |
    'RelatedPerson' |
    'RequestGroup' |
    'ResearchStudy' |
    'ResearchSubject' |
    'RiskAssessment' |
    'Schedule' |
    'SearchParameter' |
    'Sequence' |
    'ServiceDefinition' |
    'Slot' |
    'Specimen' |
    'StructureDefinition' |
    'StructureMap' |
    'Subscription' |
    'Substance' |
    'SupplyDelivery' |
    'SupplyRequest' |
    'Task' |
    'TestReport' |
    'TestScript' |
    'ValueSet' |
    'VisionPrescription';

type ResourceType = string;

type CustomResourceType = Exclude<ResourceType, KnownResourceType>;

interface SmartAuthMetadata {
    authorizeUrl?: string;
    tokenUrl?: string;
    registerUrl?: string;
    manageUrl?: string;
}

interface CustomResource extends fhir.ResourceBase {
    [key: string]: any;
}

type FhirResource = CustomResource | fhir.Resource;

interface SearchParams {
    [key: string]: string|number|boolean;
}

interface Compartment  {
    id: string;
    resourceType: string;
}

declare class Client {
    baseUrl: string;
    customHeaders: Headers;
    bearerToken: string | undefined;

    /**
     * Create a FHIR client.
     *
     * @param {Object} config Client configuration
     * @param {String} config.baseUrl ISS for FHIR server
     * @param {Object} [config.customHeaders] Optional custom headers to send with
     *   each request
     * @throws An error will be thrown unless baseUrl is a non-empty string.
     */
    constructor(config: {
        baseUrl: string
        customHeaders?: Headers
    });

    /**
     * Resolve a reference and return FHIR resource
     *
     * From: http://hl7.org/fhir/STU3/references.html, a reference can be: 1)
     * absolute URL, 2) relative URL or 3) an internal fragement. In the case of
     * (2), there are rules on resolving references that are in a FHIR bundle.
     *
     * @async
     *
     * @example
     *
     * // Always does a new http request
     * client.resolve({ reference: 'http://test.com/fhir/Patient/1' }).then((patient) => {
     *   console.log(patient);
     * });
     *
     * // Always does a new http request, using the client.baseUrl
     * client.resolve({ reference: 'Patient/1' }).then((patient) => {
     *   console.log(patient);
     * });
     *
     * // Try to resolve a patient in the bundle, otherwise build request
     * // at client.baseUrl
     * client.resolve({ reference: 'Patient/1', context: bundle }).then((patient) => {
     *   console.log(patient);
     * });
     *
     * // Resolve a patient contained in someResource (see:
     * // http://hl7.org/fhir/STU3/references.html#contained)
     * client.resolve({ reference: '#patient-1', context: someResource }).then((patient) => {
     *   console.log(patient);
     * });
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.reference - FHIR reference
     * @param {Object} [params.context] - Optional bundle with 'entry' array or FHIR resource with 'contained' array (if 'params.reference' starts with '#')
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resource
     */
    resolve(params: {
        reference: string
        context?: fhir.Bundle | fhir.DomainResource
        options?: Options
    }): Promise<FhirResource>;

    /**
     * Obtain the SMART OAuth URLs from the Capability Statement
     * http://docs.smarthealthit.org/authorization/conformance-statement/
     *
     * @async
     *
     * @example
     *
     * // Using promises
     * fhirClient.smartAuthMetadata().then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.smartAuthMetadata();
     * console.log(response);
     *
     * @param {Object} [params] - The request parameters.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} contains the following SMART URIs: authorizeUrl,
     *   tokenUrl, registerUrl, manageUrl
     */
    smartAuthMetadata(params?: { headers?: Headers, options?: Options }): Promise<SmartAuthMetadata>;

    /**
     * Get the default capability statement.
     *
     * @async
     *
     * @example
     *
     * // Using promises
     * fhirClient.capabilityStatement().then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.capabilityStatement();
     * console.log(response);
     *
     * @param {Object} [params] - The request parameters.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} capability statement FHIR resource.
     */
    capabilityStatement(params?: { headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CapabilityStatement>;

    /**
     * Get a resource by id and version.
     *
     * @example
     *
     * // Using promises
     * fhirClient.vread({
     *   resourceType: 'Patient',
     *   id: '12345',
     *   version: '1',
     * }).then(data => console.log(data));
     *
     * // Using async
     * let response = await fhirClient.vread({
     *   resourceType: 'Patient',
     *   id: '12345',
     *   version: '1',
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {String} params.id - The FHIR id for the resource.
     * @param {String} params.version - The version id for the resource.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resource
     */
    vread(params: { resourceType: "Account", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Account>;
    vread(params: { resourceType: "ActivityDefinition", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ActivityDefinition>;
    vread(params: { resourceType: "AdverseEvent", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AdverseEvent>;
    vread(params: { resourceType: "AllergyIntolerance", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AllergyIntolerance>;
    vread(params: { resourceType: "Appointment", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Appointment>;
    vread(params: { resourceType: "AppointmentResponse", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AppointmentResponse>;
    vread(params: { resourceType: "AuditEvent", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AuditEvent>;
    vread(params: { resourceType: "Basic", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Basic>;
    vread(params: { resourceType: "Binary", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Binary>;
    vread(params: { resourceType: "BodySite", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.BodySite>;
    vread(params: { resourceType: "Bundle", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle>;
    vread(params: { resourceType: "CapabilityStatement", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CapabilityStatement>;
    vread(params: { resourceType: "CarePlan", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CarePlan>;
    vread(params: { resourceType: "CareTeam", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CareTeam>;
    vread(params: { resourceType: "ChargeItem", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ChargeItem>;
    vread(params: { resourceType: "Claim", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Claim>;
    vread(params: { resourceType: "ClaimResponse", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ClaimResponse>;
    vread(params: { resourceType: "ClinicalImpression", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ClinicalImpression>;
    vread(params: { resourceType: "CodeSystem", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CodeSystem>;
    vread(params: { resourceType: "Communication", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Communication>;
    vread(params: { resourceType: "CommunicationRequest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CommunicationRequest>;
    vread(params: { resourceType: "CompartmentDefinition", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CompartmentDefinition>;
    vread(params: { resourceType: "Composition", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Composition>;
    vread(params: { resourceType: "ConceptMap", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ConceptMap>;
    vread(params: { resourceType: "Condition", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Condition>;
    vread(params: { resourceType: "Consent", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Consent>;
    vread(params: { resourceType: "Contract", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Contract>;
    vread(params: { resourceType: "Coverage", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Coverage>;
    vread(params: { resourceType: "DataElement", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DataElement>;
    vread(params: { resourceType: "DetectedIssue", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DetectedIssue>;
    vread(params: { resourceType: "Device", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Device>;
    vread(params: { resourceType: "DeviceComponent", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceComponent>;
    vread(params: { resourceType: "DeviceMetric", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceMetric>;
    vread(params: { resourceType: "DeviceRequest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceRequest>;
    vread(params: { resourceType: "DeviceUseStatement", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceUseStatement>;
    vread(params: { resourceType: "DiagnosticReport", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DiagnosticReport>;
    vread(params: { resourceType: "DocumentManifest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DocumentManifest>;
    vread(params: { resourceType: "DocumentReference", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DocumentReference>;
    vread(params: { resourceType: "DomainResource", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DomainResource>;
    vread(params: { resourceType: "EligibilityRequest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EligibilityRequest>;
    vread(params: { resourceType: "EligibilityResponse", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EligibilityResponse>;
    vread(params: { resourceType: "Encounter", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Encounter>;
    vread(params: { resourceType: "Endpoint", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Endpoint>;
    vread(params: { resourceType: "EnrollmentRequest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EnrollmentRequest>;
    vread(params: { resourceType: "EnrollmentResponse", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EnrollmentResponse>;
    vread(params: { resourceType: "EpisodeOfCare", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EpisodeOfCare>;
    vread(params: { resourceType: "ExpansionProfile", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ExpansionProfile>;
    vread(params: { resourceType: "ExplanationOfBenefit", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ExplanationOfBenefit>;
    vread(params: { resourceType: "FamilyMemberHistory", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.FamilyMemberHistory>;
    vread(params: { resourceType: "Flag", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Flag>;
    vread(params: { resourceType: "Goal", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Goal>;
    vread(params: { resourceType: "GraphDefinition", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.GraphDefinition>;
    vread(params: { resourceType: "Group", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Group>;
    vread(params: { resourceType: "GuidanceResponse", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.GuidanceResponse>;
    vread(params: { resourceType: "HealthcareService", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.HealthcareService>;
    vread(params: { resourceType: "ImagingManifest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImagingManifest>;
    vread(params: { resourceType: "ImagingStudy", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImagingStudy>;
    vread(params: { resourceType: "Immunization", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Immunization>;
    vread(params: { resourceType: "ImmunizationRecommendation", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImmunizationRecommendation>;
    vread(params: { resourceType: "ImplementationGuide", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImplementationGuide>;
    vread(params: { resourceType: "Library", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Library>;
    vread(params: { resourceType: "Linkage", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Linkage>;
    vread(params: { resourceType: "List", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.List>;
    vread(params: { resourceType: "Location", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Location>;
    vread(params: { resourceType: "Measure", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Measure>;
    vread(params: { resourceType: "MeasureReport", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MeasureReport>;
    vread(params: { resourceType: "Media", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Media>;
    vread(params: { resourceType: "Medication", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Medication>;
    vread(params: { resourceType: "MedicationAdministration", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationAdministration>;
    vread(params: { resourceType: "MedicationDispense", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationDispense>;
    vread(params: { resourceType: "MedicationRequest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationRequest>;
    vread(params: { resourceType: "MedicationStatement", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationStatement>;
    vread(params: { resourceType: "MessageDefinition", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MessageDefinition>;
    vread(params: { resourceType: "MessageHeader", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MessageHeader>;
    vread(params: { resourceType: "NamingSystem", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.NamingSystem>;
    vread(params: { resourceType: "NutritionOrder", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.NutritionOrder>;
    vread(params: { resourceType: "Observation", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Observation>;
    vread(params: { resourceType: "OperationDefinition", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.OperationDefinition>;
    vread(params: { resourceType: "OperationOutcome", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.OperationOutcome>;
    vread(params: { resourceType: "Organization", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Organization>;
    vread(params: { resourceType: "Parameters", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Parameters>;
    vread(params: { resourceType: "Patient", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Patient>;
    vread(params: { resourceType: "PaymentNotice", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PaymentNotice>;
    vread(params: { resourceType: "PaymentReconciliation", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PaymentReconciliation>;
    vread(params: { resourceType: "Person", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Person>;
    vread(params: { resourceType: "PlanDefinition", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PlanDefinition>;
    vread(params: { resourceType: "Practitioner", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Practitioner>;
    vread(params: { resourceType: "PractitionerRole", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PractitionerRole>;
    vread(params: { resourceType: "Procedure", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Procedure>;
    vread(params: { resourceType: "ProcedureRequest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcedureRequest>;
    vread(params: { resourceType: "ProcessRequest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcessRequest>;
    vread(params: { resourceType: "ProcessResponse", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcessResponse>;
    vread(params: { resourceType: "Provenance", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Provenance>;
    vread(params: { resourceType: "Questionnaire", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Questionnaire>;
    vread(params: { resourceType: "QuestionnaireResponse", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.QuestionnaireResponse>;
    vread(params: { resourceType: "ReferralRequest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ReferralRequest>;
    vread(params: { resourceType: "RelatedPerson", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RelatedPerson>;
    vread(params: { resourceType: "RequestGroup", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RequestGroup>;
    vread(params: { resourceType: "ResearchStudy", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ResearchStudy>;
    vread(params: { resourceType: "ResearchSubject", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ResearchSubject>;
    vread(params: { resourceType: "RiskAssessment", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RiskAssessment>;
    vread(params: { resourceType: "Schedule", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Schedule>;
    vread(params: { resourceType: "SearchParameter", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SearchParameter>;
    vread(params: { resourceType: "Sequence", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Sequence>;
    vread(params: { resourceType: "ServiceDefinition", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ServiceDefinition>;
    vread(params: { resourceType: "Slot", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Slot>;
    vread(params: { resourceType: "Specimen", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Specimen>;
    vread(params: { resourceType: "StructureDefinition", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.StructureDefinition>;
    vread(params: { resourceType: "StructureMap", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.StructureMap>;
    vread(params: { resourceType: "Subscription", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Subscription>;
    vread(params: { resourceType: "Substance", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Substance>;
    vread(params: { resourceType: "SupplyDelivery", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SupplyDelivery>;
    vread(params: { resourceType: "SupplyRequest", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SupplyRequest>;
    vread(params: { resourceType: "Task", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Task>;
    vread(params: { resourceType: "TestReport", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.TestReport>;
    vread(params: { resourceType: "TestScript", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.TestScript>;
    vread(params: { resourceType: "ValueSet", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ValueSet>;
    vread(params: { resourceType: "VisionPrescription", id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.VisionPrescription>;
    vread(params: { resourceType: CustomResourceType, id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | CustomResource>;

    /**
     * Create a resource.
     *
     * @example
     * const newPatient = {
     *   resourceType: 'Patient',
     *   active: true,
     *   name: [{ use: 'official', family: ['Coleman'], given: ['Lisa', 'P.'] }],
     *   gender: 'female',
     *   birthDate: '1948-04-14',
     * }
     *
     * // Using promises
     * fhirClient.create({
     *   resourceType: 'Patient',
     *   body: newPatient,
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.create({
     *   resourceType: 'Patient',
     *   body: newPatient,
     * })
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The FHIR resource type.
     * @param {Response} params.body - The new resource data to create.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resource
     */
    create(params: { resourceType: "Account", body: fhir.Account, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Account>;
    create(params: { resourceType: "ActivityDefinition", body: fhir.ActivityDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ActivityDefinition>;
    create(params: { resourceType: "AdverseEvent", body: fhir.AdverseEvent, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AdverseEvent>;
    create(params: { resourceType: "AllergyIntolerance", body: fhir.AllergyIntolerance, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AllergyIntolerance>;
    create(params: { resourceType: "Appointment", body: fhir.Appointment, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Appointment>;
    create(params: { resourceType: "AppointmentResponse", body: fhir.AppointmentResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AppointmentResponse>;
    create(params: { resourceType: "AuditEvent", body: fhir.AuditEvent, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AuditEvent>;
    create(params: { resourceType: "Basic", body: fhir.Basic, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Basic>;
    create(params: { resourceType: "Binary", body: fhir.Binary, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Binary>;
    create(params: { resourceType: "BodySite", body: fhir.BodySite, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.BodySite>;
    create(params: { resourceType: "Bundle", body: fhir.Bundle, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle>;
    create(params: { resourceType: "CapabilityStatement", body: fhir.CapabilityStatement, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CapabilityStatement>;
    create(params: { resourceType: "CarePlan", body: fhir.CarePlan, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CarePlan>;
    create(params: { resourceType: "CareTeam", body: fhir.CareTeam, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CareTeam>;
    create(params: { resourceType: "ChargeItem", body: fhir.ChargeItem, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ChargeItem>;
    create(params: { resourceType: "Claim", body: fhir.Claim, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Claim>;
    create(params: { resourceType: "ClaimResponse", body: fhir.ClaimResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ClaimResponse>;
    create(params: { resourceType: "ClinicalImpression", body: fhir.ClinicalImpression, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ClinicalImpression>;
    create(params: { resourceType: "CodeSystem", body: fhir.CodeSystem, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CodeSystem>;
    create(params: { resourceType: "Communication", body: fhir.Communication, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Communication>;
    create(params: { resourceType: "CommunicationRequest", body: fhir.CommunicationRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CommunicationRequest>;
    create(params: { resourceType: "CompartmentDefinition", body: fhir.CompartmentDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CompartmentDefinition>;
    create(params: { resourceType: "Composition", body: fhir.Composition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Composition>;
    create(params: { resourceType: "ConceptMap", body: fhir.ConceptMap, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ConceptMap>;
    create(params: { resourceType: "Condition", body: fhir.Condition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Condition>;
    create(params: { resourceType: "Consent", body: fhir.Consent, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Consent>;
    create(params: { resourceType: "Contract", body: fhir.Contract, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Contract>;
    create(params: { resourceType: "Coverage", body: fhir.Coverage, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Coverage>;
    create(params: { resourceType: "DataElement", body: fhir.DataElement, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DataElement>;
    create(params: { resourceType: "DetectedIssue", body: fhir.DetectedIssue, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DetectedIssue>;
    create(params: { resourceType: "Device", body: fhir.Device, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Device>;
    create(params: { resourceType: "DeviceComponent", body: fhir.DeviceComponent, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceComponent>;
    create(params: { resourceType: "DeviceMetric", body: fhir.DeviceMetric, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceMetric>;
    create(params: { resourceType: "DeviceRequest", body: fhir.DeviceRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceRequest>;
    create(params: { resourceType: "DeviceUseStatement", body: fhir.DeviceUseStatement, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceUseStatement>;
    create(params: { resourceType: "DiagnosticReport", body: fhir.DiagnosticReport, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DiagnosticReport>;
    create(params: { resourceType: "DocumentManifest", body: fhir.DocumentManifest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DocumentManifest>;
    create(params: { resourceType: "DocumentReference", body: fhir.DocumentReference, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DocumentReference>;
    create(params: { resourceType: "DomainResource", body: fhir.DomainResource, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DomainResource>;
    create(params: { resourceType: "EligibilityRequest", body: fhir.EligibilityRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EligibilityRequest>;
    create(params: { resourceType: "EligibilityResponse", body: fhir.EligibilityResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EligibilityResponse>;
    create(params: { resourceType: "Encounter", body: fhir.Encounter, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Encounter>;
    create(params: { resourceType: "Endpoint", body: fhir.Endpoint, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Endpoint>;
    create(params: { resourceType: "EnrollmentRequest", body: fhir.EnrollmentRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EnrollmentRequest>;
    create(params: { resourceType: "EnrollmentResponse", body: fhir.EnrollmentResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EnrollmentResponse>;
    create(params: { resourceType: "EpisodeOfCare", body: fhir.EpisodeOfCare, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EpisodeOfCare>;
    create(params: { resourceType: "ExpansionProfile", body: fhir.ExpansionProfile, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ExpansionProfile>;
    create(params: { resourceType: "ExplanationOfBenefit", body: fhir.ExplanationOfBenefit, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ExplanationOfBenefit>;
    create(params: { resourceType: "FamilyMemberHistory", body: fhir.FamilyMemberHistory, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.FamilyMemberHistory>;
    create(params: { resourceType: "Flag", body: fhir.Flag, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Flag>;
    create(params: { resourceType: "Goal", body: fhir.Goal, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Goal>;
    create(params: { resourceType: "GraphDefinition", body: fhir.GraphDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.GraphDefinition>;
    create(params: { resourceType: "Group", body: fhir.Group, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Group>;
    create(params: { resourceType: "GuidanceResponse", body: fhir.GuidanceResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.GuidanceResponse>;
    create(params: { resourceType: "HealthcareService", body: fhir.HealthcareService, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.HealthcareService>;
    create(params: { resourceType: "ImagingManifest", body: fhir.ImagingManifest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImagingManifest>;
    create(params: { resourceType: "ImagingStudy", body: fhir.ImagingStudy, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImagingStudy>;
    create(params: { resourceType: "Immunization", body: fhir.Immunization, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Immunization>;
    create(params: { resourceType: "ImmunizationRecommendation", body: fhir.ImmunizationRecommendation, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.ImmunizationRecommendation>;
    create(params: { resourceType: "ImplementationGuide", body: fhir.ImplementationGuide, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImplementationGuide>;
    create(params: { resourceType: "Library", body: fhir.Library, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Library>;
    create(params: { resourceType: "Linkage", body: fhir.Linkage, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Linkage>;
    create(params: { resourceType: "List", body: fhir.List, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.List>;
    create(params: { resourceType: "Location", body: fhir.Location, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Location>;
    create(params: { resourceType: "Measure", body: fhir.Measure, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Measure>;
    create(params: { resourceType: "MeasureReport", body: fhir.MeasureReport, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MeasureReport>;
    create(params: { resourceType: "Media", body: fhir.Media, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Media>;
    create(params: { resourceType: "Medication", body: fhir.Medication, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Medication>;
    create(params: { resourceType: "MedicationAdministration", body: fhir.MedicationAdministration, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.MedicationAdministration>;
    create(params: { resourceType: "MedicationDispense", body: fhir.MedicationDispense, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationDispense>;
    create(params: { resourceType: "MedicationRequest", body: fhir.MedicationRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationRequest>;
    create(params: { resourceType: "MedicationStatement", body: fhir.MedicationStatement, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationStatement>;
    create(params: { resourceType: "MessageDefinition", body: fhir.MessageDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MessageDefinition>;
    create(params: { resourceType: "MessageHeader", body: fhir.MessageHeader, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MessageHeader>;
    create(params: { resourceType: "NamingSystem", body: fhir.NamingSystem, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.NamingSystem>;
    create(params: { resourceType: "NutritionOrder", body: fhir.NutritionOrder, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.NutritionOrder>;
    create(params: { resourceType: "Observation", body: fhir.Observation, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Observation>;
    create(params: { resourceType: "OperationDefinition", body: fhir.OperationDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.OperationDefinition>;
    create(params: { resourceType: "OperationOutcome", body: fhir.OperationOutcome, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.OperationOutcome>;
    create(params: { resourceType: "Organization", body: fhir.Organization, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Organization>;
    create(params: { resourceType: "Parameters", body: fhir.Parameters, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Parameters>;
    create(params: { resourceType: "Patient", body: fhir.Patient, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Patient>;
    create(params: { resourceType: "PaymentNotice", body: fhir.PaymentNotice, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PaymentNotice>;
    create(params: { resourceType: "PaymentReconciliation", body: fhir.PaymentReconciliation, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PaymentReconciliation>;
    create(params: { resourceType: "Person", body: fhir.Person, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Person>;
    create(params: { resourceType: "PlanDefinition", body: fhir.PlanDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PlanDefinition>;
    create(params: { resourceType: "Practitioner", body: fhir.Practitioner, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Practitioner>;
    create(params: { resourceType: "PractitionerRole", body: fhir.PractitionerRole, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PractitionerRole>;
    create(params: { resourceType: "Procedure", body: fhir.Procedure, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Procedure>;
    create(params: { resourceType: "ProcedureRequest", body: fhir.ProcedureRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcedureRequest>;
    create(params: { resourceType: "ProcessRequest", body: fhir.ProcessRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcessRequest>;
    create(params: { resourceType: "ProcessResponse", body: fhir.ProcessResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcessResponse>;
    create(params: { resourceType: "Provenance", body: fhir.Provenance, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Provenance>;
    create(params: { resourceType: "Questionnaire", body: fhir.Questionnaire, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Questionnaire>;
    create(params: { resourceType: "QuestionnaireResponse", body: fhir.QuestionnaireResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.QuestionnaireResponse>;
    create(params: { resourceType: "ReferralRequest", body: fhir.ReferralRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ReferralRequest>;
    create(params: { resourceType: "RelatedPerson", body: fhir.RelatedPerson, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RelatedPerson>;
    create(params: { resourceType: "RequestGroup", body: fhir.RequestGroup, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RequestGroup>;
    create(params: { resourceType: "ResearchStudy", body: fhir.ResearchStudy, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ResearchStudy>;
    create(params: { resourceType: "ResearchSubject", body: fhir.ResearchSubject, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ResearchSubject>;
    create(params: { resourceType: "RiskAssessment", body: fhir.RiskAssessment, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RiskAssessment>;
    create(params: { resourceType: "Schedule", body: fhir.Schedule, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Schedule>;
    create(params: { resourceType: "SearchParameter", body: fhir.SearchParameter, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SearchParameter>;
    create(params: { resourceType: "Sequence", body: fhir.Sequence, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Sequence>;
    create(params: { resourceType: "ServiceDefinition", body: fhir.ServiceDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ServiceDefinition>;
    create(params: { resourceType: "Slot", body: fhir.Slot, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Slot>;
    create(params: { resourceType: "Specimen", body: fhir.Specimen, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Specimen>;
    create(params: { resourceType: "StructureDefinition", body: fhir.StructureDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.StructureDefinition>;
    create(params: { resourceType: "StructureMap", body: fhir.StructureMap, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.StructureMap>;
    create(params: { resourceType: "Subscription", body: fhir.Subscription, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Subscription>;
    create(params: { resourceType: "Substance", body: fhir.Substance, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Substance>;
    create(params: { resourceType: "SupplyDelivery", body: fhir.SupplyDelivery, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SupplyDelivery>;
    create(params: { resourceType: "SupplyRequest", body: fhir.SupplyRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SupplyRequest>;
    create(params: { resourceType: "Task", body: fhir.Task, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Task>;
    create(params: { resourceType: "TestReport", body: fhir.TestReport, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.TestReport>;
    create(params: { resourceType: "TestScript", body: fhir.TestScript, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.TestScript>;
    create(params: { resourceType: "ValueSet", body: fhir.ValueSet, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ValueSet>;
    create(params: { resourceType: "VisionPrescription", body: fhir.VisionPrescription, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.VisionPrescription>;
    create<T extends CustomResource>(params: { resourceType: CustomResourceType, body: T, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | T>;

    /**
     * Delete a resource by FHIR id.
     *
     * @example
     *
     * // Using promises
     * fhirClient.delete({
     *   resourceType: 'Patient',
     *   id: 12345,
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.delete({ resourceType: 'Patient', id: 12345 });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient", "Observation").
     * @param {String} params.id - The FHIR id for the resource.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} Operation Outcome FHIR resource
     */
    delete(params: { resourceType: ResourceType, id: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome>;

    /**
     * Update a resource by FHIR id.
     *
     * @example
     *
     * const updatedPatient = {
     *   resourceType: 'Patient',
     *   birthDate: '1948-04-14',
     * }
     *
     * // Using promises
     * fhirClient.update({
     *   resourceType: 'Patient',
     *   id: 12345,
     *   body: updatedPatient,
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.update({
     *   resourceType: 'Patient',
     *   id: 12345,
     *   body: updatedPatient,
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {String} params.id - The FHIR id for the resource.
     * @param {String} params.body - The resource to be updated.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resource
     */
    update(params: { resourceType: "Account", id: string, body: fhir.Account, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Account>;
    update(params: { resourceType: "ActivityDefinition", id: string, body: fhir.ActivityDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ActivityDefinition>;
    update(params: { resourceType: "AdverseEvent", id: string, body: fhir.AdverseEvent, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AdverseEvent>;
    update(params: { resourceType: "AllergyIntolerance", id: string, body: fhir.AllergyIntolerance, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AllergyIntolerance>;
    update(params: { resourceType: "Appointment", id: string, body: fhir.Appointment, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Appointment>;
    update(params: { resourceType: "AppointmentResponse", id: string, body: fhir.AppointmentResponse, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.AppointmentResponse>;
    update(params: { resourceType: "AuditEvent", id: string, body: fhir.AuditEvent, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AuditEvent>;
    update(params: { resourceType: "Basic", id: string, body: fhir.Basic, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Basic>;
    update(params: { resourceType: "Binary", id: string, body: fhir.Binary, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Binary>;
    update(params: { resourceType: "BodySite", id: string, body: fhir.BodySite, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.BodySite>;
    update(params: { resourceType: "Bundle", id: string, body: fhir.Bundle, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle>;
    update(params: { resourceType: "CapabilityStatement", id: string, body: fhir.CapabilityStatement, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.CapabilityStatement>;
    update(params: { resourceType: "CarePlan", id: string, body: fhir.CarePlan, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CarePlan>;
    update(params: { resourceType: "CareTeam", id: string, body: fhir.CareTeam, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CareTeam>;
    update(params: { resourceType: "ChargeItem", id: string, body: fhir.ChargeItem, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ChargeItem>;
    update(params: { resourceType: "Claim", id: string, body: fhir.Claim, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Claim>;
    update(params: { resourceType: "ClaimResponse", id: string, body: fhir.ClaimResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ClaimResponse>;
    update(params: { resourceType: "ClinicalImpression", id: string, body: fhir.ClinicalImpression, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ClinicalImpression>;
    update(params: { resourceType: "CodeSystem", id: string, body: fhir.CodeSystem, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CodeSystem>;
    update(params: { resourceType: "Communication", id: string, body: fhir.Communication, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Communication>;
    update(params: { resourceType: "CommunicationRequest", id: string, body: fhir.CommunicationRequest, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.CommunicationRequest>;
    update(params: { resourceType: "CompartmentDefinition", id: string, body: fhir.CompartmentDefinition, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.CompartmentDefinition>;
    update(params: { resourceType: "Composition", id: string, body: fhir.Composition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Composition>;
    update(params: { resourceType: "ConceptMap", id: string, body: fhir.ConceptMap, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ConceptMap>;
    update(params: { resourceType: "Condition", id: string, body: fhir.Condition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Condition>;
    update(params: { resourceType: "Consent", id: string, body: fhir.Consent, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Consent>;
    update(params: { resourceType: "Contract", id: string, body: fhir.Contract, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Contract>;
    update(params: { resourceType: "Coverage", id: string, body: fhir.Coverage, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Coverage>;
    update(params: { resourceType: "DataElement", id: string, body: fhir.DataElement, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DataElement>;
    update(params: { resourceType: "DetectedIssue", id: string, body: fhir.DetectedIssue, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DetectedIssue>;
    update(params: { resourceType: "Device", id: string, body: fhir.Device, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Device>;
    update(params: { resourceType: "DeviceComponent", id: string, body: fhir.DeviceComponent, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceComponent>;
    update(params: { resourceType: "DeviceMetric", id: string, body: fhir.DeviceMetric, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceMetric>;
    update(params: { resourceType: "DeviceRequest", id: string, body: fhir.DeviceRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceRequest>;
    update(params: { resourceType: "DeviceUseStatement", id: string, body: fhir.DeviceUseStatement, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceUseStatement>;
    update(params: { resourceType: "DiagnosticReport", id: string, body: fhir.DiagnosticReport, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DiagnosticReport>;
    update(params: { resourceType: "DocumentManifest", id: string, body: fhir.DocumentManifest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DocumentManifest>;
    update(params: { resourceType: "DocumentReference", id: string, body: fhir.DocumentReference, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DocumentReference>;
    update(params: { resourceType: "DomainResource", id: string, body: fhir.DomainResource, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DomainResource>;
    update(params: { resourceType: "EligibilityRequest", id: string, body: fhir.EligibilityRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EligibilityRequest>;
    update(params: { resourceType: "EligibilityResponse", id: string, body: fhir.EligibilityResponse, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.EligibilityResponse>;
    update(params: { resourceType: "Encounter", id: string, body: fhir.Encounter, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Encounter>;
    update(params: { resourceType: "Endpoint", id: string, body: fhir.Endpoint, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Endpoint>;
    update(params: { resourceType: "EnrollmentRequest", id: string, body: fhir.EnrollmentRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EnrollmentRequest>;
    update(params: { resourceType: "EnrollmentResponse", id: string, body: fhir.EnrollmentResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EnrollmentResponse>;
    update(params: { resourceType: "EpisodeOfCare", id: string, body: fhir.EpisodeOfCare, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EpisodeOfCare>;
    update(params: { resourceType: "ExpansionProfile", id: string, body: fhir.ExpansionProfile, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ExpansionProfile>;
    update(params: { resourceType: "ExplanationOfBenefit", id: string, body: fhir.ExplanationOfBenefit, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.ExplanationOfBenefit>;
    update(params: { resourceType: "FamilyMemberHistory", id: string, body: fhir.FamilyMemberHistory, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.FamilyMemberHistory>;
    update(params: { resourceType: "Flag", id: string, body: fhir.Flag, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Flag>;
    update(params: { resourceType: "Goal", id: string, body: fhir.Goal, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Goal>;
    update(params: { resourceType: "GraphDefinition", id: string, body: fhir.GraphDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.GraphDefinition>;
    update(params: { resourceType: "Group", id: string, body: fhir.Group, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Group>;
    update(params: { resourceType: "GuidanceResponse", id: string, body: fhir.GuidanceResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.GuidanceResponse>;
    update(params: { resourceType: "HealthcareService", id: string, body: fhir.HealthcareService, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.HealthcareService>;
    update(params: { resourceType: "ImagingManifest", id: string, body: fhir.ImagingManifest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImagingManifest>;
    update(params: { resourceType: "ImagingStudy", id: string, body: fhir.ImagingStudy, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImagingStudy>;
    update(params: { resourceType: "Immunization", id: string, body: fhir.Immunization, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Immunization>;
    update(params: { resourceType: "ImmunizationRecommendation", id: string, body: fhir.ImmunizationRecommendation, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.ImmunizationRecommendation>;
    update(params: { resourceType: "ImplementationGuide", id: string, body: fhir.ImplementationGuide, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.ImplementationGuide>;
    update(params: { resourceType: "Library", id: string, body: fhir.Library, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Library>;
    update(params: { resourceType: "Linkage", id: string, body: fhir.Linkage, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Linkage>;
    update(params: { resourceType: "List", id: string, body: fhir.List, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.List>;
    update(params: { resourceType: "Location", id: string, body: fhir.Location, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Location>;
    update(params: { resourceType: "Measure", id: string, body: fhir.Measure, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Measure>;
    update(params: { resourceType: "MeasureReport", id: string, body: fhir.MeasureReport, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MeasureReport>;
    update(params: { resourceType: "Media", id: string, body: fhir.Media, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Media>;
    update(params: { resourceType: "Medication", id: string, body: fhir.Medication, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Medication>;
    update(params: { resourceType: "MedicationAdministration", id: string, body: fhir.MedicationAdministration, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.MedicationAdministration>;
    update(params: { resourceType: "MedicationDispense", id: string, body: fhir.MedicationDispense, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.MedicationDispense>;
    update(params: { resourceType: "MedicationRequest", id: string, body: fhir.MedicationRequest, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.MedicationRequest>;
    update(params: { resourceType: "MedicationStatement", id: string, body: fhir.MedicationStatement, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.MedicationStatement>;
    update(params: { resourceType: "MessageDefinition", id: string, body: fhir.MessageDefinition, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.MessageDefinition>;
    update(params: { resourceType: "MessageHeader", id: string, body: fhir.MessageHeader, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MessageHeader>;
    update(params: { resourceType: "NamingSystem", id: string, body: fhir.NamingSystem, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.NamingSystem>;
    update(params: { resourceType: "NutritionOrder", id: string, body: fhir.NutritionOrder, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.NutritionOrder>;
    update(params: { resourceType: "Observation", id: string, body: fhir.Observation, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Observation>;
    update(params: { resourceType: "OperationDefinition", id: string, body: fhir.OperationDefinition, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.OperationDefinition>;
    update(params: { resourceType: "OperationOutcome", id: string, body: fhir.OperationOutcome, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.OperationOutcome>;
    update(params: { resourceType: "Organization", id: string, body: fhir.Organization, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Organization>;
    update(params: { resourceType: "Parameters", id: string, body: fhir.Parameters, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Parameters>;
    update(params: { resourceType: "Patient", id: string, body: fhir.Patient, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Patient>;
    update(params: { resourceType: "PaymentNotice", id: string, body: fhir.PaymentNotice, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PaymentNotice>;
    update(params: { resourceType: "PaymentReconciliation", id: string, body: fhir.PaymentReconciliation, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.PaymentReconciliation>;
    update(params: { resourceType: "Person", id: string, body: fhir.Person, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Person>;
    update(params: { resourceType: "PlanDefinition", id: string, body: fhir.PlanDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PlanDefinition>;
    update(params: { resourceType: "Practitioner", id: string, body: fhir.Practitioner, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Practitioner>;
    update(params: { resourceType: "PractitionerRole", id: string, body: fhir.PractitionerRole, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PractitionerRole>;
    update(params: { resourceType: "Procedure", id: string, body: fhir.Procedure, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Procedure>;
    update(params: { resourceType: "ProcedureRequest", id: string, body: fhir.ProcedureRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcedureRequest>;
    update(params: { resourceType: "ProcessRequest", id: string, body: fhir.ProcessRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcessRequest>;
    update(params: { resourceType: "ProcessResponse", id: string, body: fhir.ProcessResponse, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcessResponse>;
    update(params: { resourceType: "Provenance", id: string, body: fhir.Provenance, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Provenance>;
    update(params: { resourceType: "Questionnaire", id: string, body: fhir.Questionnaire, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Questionnaire>;
    update(params: { resourceType: "QuestionnaireResponse", id: string, body: fhir.QuestionnaireResponse, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.QuestionnaireResponse>;
    update(params: { resourceType: "ReferralRequest", id: string, body: fhir.ReferralRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ReferralRequest>;
    update(params: { resourceType: "RelatedPerson", id: string, body: fhir.RelatedPerson, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RelatedPerson>;
    update(params: { resourceType: "RequestGroup", id: string, body: fhir.RequestGroup, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RequestGroup>;
    update(params: { resourceType: "ResearchStudy", id: string, body: fhir.ResearchStudy, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ResearchStudy>;
    update(params: { resourceType: "ResearchSubject", id: string, body: fhir.ResearchSubject, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ResearchSubject>;
    update(params: { resourceType: "RiskAssessment", id: string, body: fhir.RiskAssessment, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RiskAssessment>;
    update(params: { resourceType: "Schedule", id: string, body: fhir.Schedule, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Schedule>;
    update(params: { resourceType: "SearchParameter", id: string, body: fhir.SearchParameter, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SearchParameter>;
    update(params: { resourceType: "Sequence", id: string, body: fhir.Sequence, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Sequence>;
    update(params: { resourceType: "ServiceDefinition", id: string, body: fhir.ServiceDefinition, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ServiceDefinition>;
    update(params: { resourceType: "Slot", id: string, body: fhir.Slot, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Slot>;
    update(params: { resourceType: "Specimen", id: string, body: fhir.Specimen, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Specimen>;
    update(params: { resourceType: "StructureDefinition", id: string, body: fhir.StructureDefinition, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.StructureDefinition>;
    update(params: { resourceType: "StructureMap", id: string, body: fhir.StructureMap, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.StructureMap>;
    update(params: { resourceType: "Subscription", id: string, body: fhir.Subscription, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Subscription>;
    update(params: { resourceType: "Substance", id: string, body: fhir.Substance, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Substance>;
    update(params: { resourceType: "SupplyDelivery", id: string, body: fhir.SupplyDelivery, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SupplyDelivery>;
    update(params: { resourceType: "SupplyRequest", id: string, body: fhir.SupplyRequest, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SupplyRequest>;
    update(params: { resourceType: "Task", id: string, body: fhir.Task, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Task>;
    update(params: { resourceType: "TestReport", id: string, body: fhir.TestReport, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.TestReport>;
    update(params: { resourceType: "TestScript", id: string, body: fhir.TestScript, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.TestScript>;
    update(params: { resourceType: "ValueSet", id: string, body: fhir.ValueSet, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ValueSet>;
    update(params: { resourceType: "VisionPrescription", id: string, body: fhir.VisionPrescription, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.VisionPrescription>;
    update<T extends CustomResource>(params: { resourceType: CustomResourceType, id: string, body: T, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | T>;

    /**
     * Patch a resource by FHIR id.
     *
     * From http://hl7.org/fhir/STU3/http.html#patch:
     * Content-Type is 'application/json-patch+json'
     * Expects a JSON Patch document format, see http://jsonpatch.com/
     *
     * @example
     *
     * // JSON Patch document format from http://jsonpatch.com/
     * const JSONPatch = [{ op: 'replace', path: '/gender', value: 'male' }];
     *
     * // Using promises
     * fhirClient.patch({
     *   resourceType: 'Patient',
     *   id: 12345,
     *   JSONPatch,
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.patch({
     *   resourceType: 'Patient',
     *   id: 12345,
     *   JSONPatch
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {String} params.id - The FHIR id for the resource.
     * @param {Array} params.JSONPatch - A JSON Patch document containing an array
     *   of patch operations, formatted according to http://jsonpatch.com/.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resource
     */
    patch(params: { resourceType: "Account", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Account>;
    patch(params: { resourceType: "ActivityDefinition", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ActivityDefinition>;
    patch(params: { resourceType: "AdverseEvent", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AdverseEvent>;
    patch(params: { resourceType: "AllergyIntolerance", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AllergyIntolerance>;
    patch(params: { resourceType: "Appointment", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Appointment>;
    patch(params: { resourceType: "AppointmentResponse", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AppointmentResponse>;
    patch(params: { resourceType: "AuditEvent", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.AuditEvent>;
    patch(params: { resourceType: "Basic", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Basic>;
    patch(params: { resourceType: "Binary", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Binary>;
    patch(params: { resourceType: "BodySite", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.BodySite>;
    patch(params: { resourceType: "Bundle", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle>;
    patch(params: { resourceType: "CapabilityStatement", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CapabilityStatement>;
    patch(params: { resourceType: "CarePlan", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CarePlan>;
    patch(params: { resourceType: "CareTeam", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CareTeam>;
    patch(params: { resourceType: "ChargeItem", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ChargeItem>;
    patch(params: { resourceType: "Claim", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Claim>;
    patch(params: { resourceType: "ClaimResponse", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ClaimResponse>;
    patch(params: { resourceType: "ClinicalImpression", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ClinicalImpression>;
    patch(params: { resourceType: "CodeSystem", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CodeSystem>;
    patch(params: { resourceType: "Communication", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Communication>;
    patch(params: { resourceType: "CommunicationRequest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CommunicationRequest>;
    patch(params: { resourceType: "CompartmentDefinition", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CompartmentDefinition>;
    patch(params: { resourceType: "Composition", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Composition>;
    patch(params: { resourceType: "ConceptMap", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ConceptMap>;
    patch(params: { resourceType: "Condition", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Condition>;
    patch(params: { resourceType: "Consent", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Consent>;
    patch(params: { resourceType: "Contract", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Contract>;
    patch(params: { resourceType: "Coverage", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Coverage>;
    patch(params: { resourceType: "DataElement", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DataElement>;
    patch(params: { resourceType: "DetectedIssue", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DetectedIssue>;
    patch(params: { resourceType: "Device", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Device>;
    patch(params: { resourceType: "DeviceComponent", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceComponent>;
    patch(params: { resourceType: "DeviceMetric", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceMetric>;
    patch(params: { resourceType: "DeviceRequest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceRequest>;
    patch(params: { resourceType: "DeviceUseStatement", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DeviceUseStatement>;
    patch(params: { resourceType: "DiagnosticReport", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DiagnosticReport>;
    patch(params: { resourceType: "DocumentManifest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DocumentManifest>;
    patch(params: { resourceType: "DocumentReference", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DocumentReference>;
    patch(params: { resourceType: "DomainResource", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.DomainResource>;
    patch(params: { resourceType: "EligibilityRequest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EligibilityRequest>;
    patch(params: { resourceType: "EligibilityResponse", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EligibilityResponse>;
    patch(params: { resourceType: "Encounter", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Encounter>;
    patch(params: { resourceType: "Endpoint", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Endpoint>;
    patch(params: { resourceType: "EnrollmentRequest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EnrollmentRequest>;
    patch(params: { resourceType: "EnrollmentResponse", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EnrollmentResponse>;
    patch(params: { resourceType: "EpisodeOfCare", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.EpisodeOfCare>;
    patch(params: { resourceType: "ExpansionProfile", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ExpansionProfile>;
    patch(params: { resourceType: "ExplanationOfBenefit", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ExplanationOfBenefit>;
    patch(params: { resourceType: "FamilyMemberHistory", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.FamilyMemberHistory>;
    patch(params: { resourceType: "Flag", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Flag>;
    patch(params: { resourceType: "Goal", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Goal>;
    patch(params: { resourceType: "GraphDefinition", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.GraphDefinition>;
    patch(params: { resourceType: "Group", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Group>;
    patch(params: { resourceType: "GuidanceResponse", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.GuidanceResponse>;
    patch(params: { resourceType: "HealthcareService", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.HealthcareService>;
    patch(params: { resourceType: "ImagingManifest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImagingManifest>;
    patch(params: { resourceType: "ImagingStudy", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImagingStudy>;
    patch(params: { resourceType: "Immunization", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Immunization>;
    patch(params: { resourceType: "ImmunizationRecommendation", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.ImmunizationRecommendation>;
    patch(params: { resourceType: "ImplementationGuide", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ImplementationGuide>;
    patch(params: { resourceType: "Library", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Library>;
    patch(params: { resourceType: "Linkage", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Linkage>;
    patch(params: { resourceType: "List", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.List>;
    patch(params: { resourceType: "Location", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Location>;
    patch(params: { resourceType: "Measure", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Measure>;
    patch(params: { resourceType: "MeasureReport", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MeasureReport>;
    patch(params: { resourceType: "Media", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Media>;
    patch(params: { resourceType: "Medication", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Medication>;
    patch(params: { resourceType: "MedicationAdministration", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationAdministration>;
    patch(params: { resourceType: "MedicationDispense", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationDispense>;
    patch(params: { resourceType: "MedicationRequest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationRequest>;
    patch(params: { resourceType: "MedicationStatement", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MedicationStatement>;
    patch(params: { resourceType: "MessageDefinition", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MessageDefinition>;
    patch(params: { resourceType: "MessageHeader", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.MessageHeader>;
    patch(params: { resourceType: "NamingSystem", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.NamingSystem>;
    patch(params: { resourceType: "NutritionOrder", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.NutritionOrder>;
    patch(params: { resourceType: "Observation", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Observation>;
    patch(params: { resourceType: "OperationDefinition", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.OperationDefinition>;
    patch(params: { resourceType: "OperationOutcome", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.OperationOutcome>;
    patch(params: { resourceType: "Organization", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Organization>;
    patch(params: { resourceType: "Parameters", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Parameters>;
    patch(params: { resourceType: "Patient", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Patient>;
    patch(params: { resourceType: "PaymentNotice", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PaymentNotice>;
    patch(params: { resourceType: "PaymentReconciliation", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PaymentReconciliation>;
    patch(params: { resourceType: "Person", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Person>;
    patch(params: { resourceType: "PlanDefinition", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PlanDefinition>;
    patch(params: { resourceType: "Practitioner", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Practitioner>;
    patch(params: { resourceType: "PractitionerRole", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.PractitionerRole>;
    patch(params: { resourceType: "Procedure", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Procedure>;
    patch(params: { resourceType: "ProcedureRequest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcedureRequest>;
    patch(params: { resourceType: "ProcessRequest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcessRequest>;
    patch(params: { resourceType: "ProcessResponse", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ProcessResponse>;
    patch(params: { resourceType: "Provenance", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Provenance>;
    patch(params: { resourceType: "Questionnaire", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Questionnaire>;
    patch(params: { resourceType: "QuestionnaireResponse", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.QuestionnaireResponse>;
    patch(params: { resourceType: "ReferralRequest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ReferralRequest>;
    patch(params: { resourceType: "RelatedPerson", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RelatedPerson>;
    patch(params: { resourceType: "RequestGroup", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RequestGroup>;
    patch(params: { resourceType: "ResearchStudy", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ResearchStudy>;
    patch(params: { resourceType: "ResearchSubject", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ResearchSubject>;
    patch(params: { resourceType: "RiskAssessment", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.RiskAssessment>;
    patch(params: { resourceType: "Schedule", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Schedule>;
    patch(params: { resourceType: "SearchParameter", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SearchParameter>;
    patch(params: { resourceType: "Sequence", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Sequence>;
    patch(params: { resourceType: "ServiceDefinition", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ServiceDefinition>;
    patch(params: { resourceType: "Slot", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Slot>;
    patch(params: { resourceType: "Specimen", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Specimen>;
    patch(params: { resourceType: "StructureDefinition", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.StructureDefinition>;
    patch(params: { resourceType: "StructureMap", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.StructureMap>;
    patch(params: { resourceType: "Subscription", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Subscription>;
    patch(params: { resourceType: "Substance", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Substance>;
    patch(params: { resourceType: "SupplyDelivery", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SupplyDelivery>;
    patch(params: { resourceType: "SupplyRequest", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.SupplyRequest>;
    patch(params: { resourceType: "Task", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Task>;
    patch(params: { resourceType: "TestReport", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.TestReport>;
    patch(params: { resourceType: "TestScript", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.TestScript>;
    patch(params: { resourceType: "ValueSet", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.ValueSet>;
    patch(params: { resourceType: "VisionPrescription", id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.VisionPrescription>;
    patch(params: { resourceType: CustomResourceType, id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | CustomResource>;

    /**
     * Submit a set of actions to perform independently as a batch.
     *
     * Update, create or delete a set of resources in a single interaction.
     * There should be no interdependencies between entries in the bundle.
     *
     * @example
     *
     * const request.Bundle = {
     *   'resourceType': 'fhir.Bundle',
     *   'type': 'batch',
     *   'entry': [
     *    {
     *      'fullUrl': 'http://example.org/fhir/Patient/123',
     *      'resource': {
     *        'resourceType': 'Patient',
     *        'id': '123',
     *        'active': true
     *      },
     *      'request': {
     *        'method': 'PUT',
     *        'url': 'Patient/123'
     *      }
     *    },
     *     {
     *       'request': {
     *         'method': 'DELETE',
     *         'url': 'Patient/2e27c71e-30c8-4ceb-8c1c-5641e066c0a4'
     *       }
     *     },
     *     {
     *       'request': {
     *         'method': 'GET',
     *         'url': 'Patient?name=peter'
     *       }
     *     }
     *   ]
     * }
     *
     * // Using promises
     * fhirClient.batch({
     *   body: request.Bundle
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.batch({
     *   body: request.Bundle
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {string} params.body - The request body with a type of 'batch'.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    batch(params: { body: fhir.Bundle & { type: "batch" }, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "batch-response" }>;

    /**
     * Submit a set of actions to perform independently as a transaction.
     *
     * Update, create or delete a set of resources in a single interaction.
     * The entire set of changes should succeed or fail as a single entity.
     * Multiple actions on multiple resources different types may be submitted.
     * The outcome should not depend on the order of the resources loaded.
     * Order of processing actions: DELETE, POST, PUT, and GET.
     * The transaction fails if any resource overlap in DELETE, POST and PUT.
     *
     * @example
     *
     * const request.Bundle = {
     *   'resourceType': 'fhir.Bundle',
     *   'type': 'transaction',
     *   'entry': [
     *    {
     *      'fullUrl': 'http://example.org/fhir/Patient/123',
     *      'resource': {
     *        'resourceType': 'Patient',
     *        'id': '123',
     *        'active': true
     *      },
     *      'request': {
     *        'method': 'PUT',
     *        'url': 'Patient/123'
     *      }
     *    },
     *     {
     *       'request': {
     *         'method': 'DELETE',
     *         'url': 'Patient/2e27c71e-30c8-4ceb-8c1c-5641e066c0a4'
     *       }
     *     },
     *     {
     *       'request': {
     *         'method': 'GET',
     *         'url': 'Patient?name=peter'
     *       }
     *     }
     *   ]
     * }
     *
     * // Using promises
     * fhirClient.transaction({
     *   body: request.Bundle
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.transaction({
     *   body: request.Bundle
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.body - The request body with a type of
     *   'transaction'.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    transaction(params: { body: fhir.Bundle & { type: "transaction" }, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "transaction-response" }>;

    /**
     * Return the next page of results.
     *
     * @param {Object} params - The request parameters. Passing the bundle as the
     *   first parameter is DEPRECATED
     * @param {object} params.bundle - fhir.Bundle result of a FHIR search
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     * @param {Object} [headers] - DEPRECATED Optional custom headers to add to
     *   the request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    nextPage<T extends string>(params: { bundle: fhir.Bundle & {type: T}, options?: Options }, headers?: Headers): Promise<fhir.OperationOutcome | fhir.Bundle & {type: T}>;

    /**
     * Return the previous page of results.
     *
     * @param {Object} params - The request parameters. Passing the bundle as the
     *   first parameter is DEPRECATED
     * @param {object} params.bundle - fhir.Bundle result of a FHIR search
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     * @param {Object} [headers] - DEPRECATED Optional custom headers to add to
     *   the request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    prevPage<T extends string>(params: { bundle: fhir.Bundle & {type: T}, options?: Options }, headers?: Headers): Promise<fhir.OperationOutcome | fhir.Bundle & {type: T}>;

    /**
     * Search for a FHIR resource, with or without compartments, or the entire
     * system
     *
     * @example
     *
     * // Using promises
     * fhirClient.search({
     *   resourceType: 'Observation',
     *   compartment: { resourceType: 'Patient', id: 123 },
     *   searchParams: { code: 'abc', _include: ['Observation:encounter', 'Observation:performer'] },
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.search({
     *   resourceType: 'Observation',
     *   compartment: { resourceType: 'Patient', id: 123 },
     *   searchParams: { code: 'abc', _include: ['Observation:encounter', 'Observation:performer'] },
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} [params.resourceType] - The resource type
     *   (e.g. "Patient", "Observation"), optional.
     * @param {Object} [params.compartment] - The search compartment, optional.
     * @param {Object} [params.searchParams] - The search parameters, optional.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     *
     * @throws {Error} if neither searchParams nor resourceType are supplied
     */
    search(params: { resourceType: ResourceType, compartment?: Compartment, searchParams?: SearchParams, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.Bundle & { type: "searchset" }>;

    /**
     * Search for a FHIR resource.
     *
     * @example
     *
     * // Using promises
     * fhirClient.resourceSearch({
     *   resourceType: 'Patient',
     *   searchParams: { name: 'Smith' },
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.resourceSearch({
     *   resourceType: 'Patient',
     *   searchParams: { name: 'Smith' },
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {Object} params.searchParams - The search parameters.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    resourceSearch(params: { resourceType: ResourceType, searchParams: SearchParams, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "searchset" }>;

    /**
     * Search across all FHIR resource types in the system.
     * Only the parameters defined for all resources can be used.
     *
     * @example
     *
     * // Using promises
     * fhirClient.systemSearch({
     *   searchParams: { name: 'smith' }
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.systemSearch({ searchParams: { name: 'smith' } });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {Object} params.searchParams - The search parameters.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    systemSearch(params: { searchParams: SearchParams, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "searchset" }>;

    /**
     * Search for FHIR resources within a compartment.
     * The resourceType and id must be specified.
     *
     * @example
     *
     * // Using promises
     * fhirClient.compartmentSearch({
     *   resourceType: 'Observation',
     *   compartment: { resourceType: 'Patient', id: 123 },
     *   searchParams: { code: 'abc' }
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.compartmentSearch({
     *   resourceType: 'Observation',
     *   compartment: { resourceType: 'Patient', id: 123 },
     *   searchParams: { code: 'abc' }
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {Object} params.compartment - The search compartment.
     * @param {Object} [params.searchParams] - The search parameters, optional.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    compartmentSearch(params:
        { resourceType: ResourceType, compartment: Compartment, searchParams?: SearchParams, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.Bundle & { type: "searchset" }> ;

    /**
     * Retrieve the change history for a FHIR resource id, a resource type or the
     * entire system
     *
     * @example
     *
     * // Using promises
     * fhirClient.history({ resourceType: 'Patient', id: '12345' });
     *   .then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.history({ resourceType: 'Patient', id: '12345' });
     * console.log(response);
     *
     * @param {Object} [params] - The request parameters.
     * @param {string} [params.resourceType] - The resource type
     *   (e.g. "Patient", "Observation"), optional.
     * @param {string} [params.id] - The FHIR id for the resource, optional.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    history(params?: { resourceType?: ResourceType, id?: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "history" }>;

    /**
     * Retrieve the change history for a particular resource FHIR id.
     *
     * @example
     *
     * // Using promises
     * fhirClient.resourceHistory({ resourceType: 'Patient', id: '12345' });
     *           .then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.resourceHistory({ resourceType: 'Patient', id: '12345' });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {string} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {string} params.id - The FHIR id for the resource.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    resourceHistory(params: { resourceType: ResourceType, id: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "history" }>;

    /**
     * Retrieve the change history for a particular resource type.
     *
     * @example
     *
     * // Using promises
     * fhirClient.typeHistory({ resourceType: 'Patient' });
     *           .then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.typeHistory({ resourceType: 'Patient' });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {string} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    typeHistory(params: { resourceType: ResourceType, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "history" }>;

    /**
     * Retrieve the change history for all resources.
     *
     * @example
     *
     * // Using promises
     * fhirClient.systemHistory();
     *           .then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.systemHistory();
     * console.log(response);
     *
     * @param {Object} [params] - The request parameters.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    systemHistory(params?: { headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "history" }>;
}

export = Client;
