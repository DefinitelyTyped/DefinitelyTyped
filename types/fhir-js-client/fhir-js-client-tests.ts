class Component {
    openFhirServiceUrl = 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open';
    closedFhirServiceUrl = 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/data';

    clientSettings: FHIR.SMART.OAuth2ClientSettings = {
        client_id: '50a7f6ca-075a-47de-ab83-152814c3edb2',
        scope: 'launch/patient user/*.* openid profile',
        state: 'RandomStateOverride'
    };

    oauth2Configuration: FHIR.SMART.OAuth2Configuration = {
        client: this.clientSettings,
        server: this.closedFhirServiceUrl
    };

    authContext: FHIR.SMART.AuthContext = {
        type: 'none'
    };

    context: FHIR.SMART.Context = {
        serviceUrl: this.openFhirServiceUrl,
        auth: this.authContext,
        userId: 'tTFt1mD0vgox9npTe2ZA',
        // Patient name: Abernathy,Francine
        patientId: 'a509406a-5098-478c-b183-037d68a953d9'
    };

    observationEntry: FHIR.SMART.Entry = {
        resource: {
            'resourceType': 'Observation',
            'id': 'c179f87f-e7d2-49b0-8838-c7cbf9b0da27',
            'meta': {
                'versionId': '1',
                'lastUpdated': '2018-01-12T19:22:57.000+00:00',
                'profile': [
                    'http://standardhealthrecord.org/fhir/StructureDefinition/shr-observation-Observation'
                ],
                'tag': [
                    {
                        'system': 'https://smarthealthit.org/tags',
                        'code': 'synthea-7-2017'
                    }
                ]
            },
            'status': 'final',
            'category': [
                {
                    'coding': [
                        {
                            'system': 'http://hl7.org/fhir/observation-category'
                        }
                    ]
                }
            ],
            'code': {
                'coding': [
                    {
                        'system': 'http://loinc.org',
                        'code': '69453-9',
                        'display': 'Cause of Death [US Standard Certificate of Death]'
                    }
                ],
                'text': 'Cause of Death [US Standard Certificate of Death]'
            },
            'subject': {
                'reference': 'Patient/a509406a-5098-478c-b183-037d68a953d9'
            },
            'context': {
                'reference': 'Encounter/fbebfcf2-86d8-4c56-9539-314be0ce5bed'
            },
            'effectiveDateTime': '1989-07-26T17:51:45-04:00',
            'issued': '1989-07-26T17:51:45-04:00',
            'valueCodeableConcept': {
                'coding': [
                    {
                        'system': 'http://snomed.info/sct',
                        'code': '185086009',
                        'display': 'Chronic obstructive bronchitis (disorder)'
                    }
                ],
                'text': 'Chronic obstructive bronchitis (disorder)'
            }
        }
    };

    weightObservationEntry: FHIR.SMART.Entry = {
        'resource': {
            'id': 'RandomId',
            'resourceType': 'Observation',
            'text': {
                'status': 'generated',
                'div': '<div>Human readable form</div>'
            },
            'status': 'final',
            'category': [
                {
                    'coding': [
                        {
                            'system': 'http://hl7.org/fhir/observation-category',
                            'code': 'vital-signs',
                            'display': 'Vital Signs'
                        }
                    ]
                }
            ],
            'code': {
                'coding': [
                    {
                        'system': 'http://loinc.org',
                        'code': '29463-7',
                        'display': 'Body Weight'
                    },
                    {
                        'system': 'http://loinc.org',
                        'code': '3141-9',
                        'display': 'Body weight Measured'
                    },
                    {
                        'system': 'http://snomed.info/sct',
                        'code': '27113001',
                        'display': 'Body weight'
                    },
                    {
                        'system': 'http://acme.org/devices/clinical-codes',
                        'code': 'body-weight',
                        'display': 'Body Weight'
                    }
                ]
            },
            'subject': {
                'reference': 'Patient/example'
            },
            'context': {
                'reference': 'Encounter/example'
            },
            'effectiveDateTime': '2016-03-28',
            'valueQuantity': {
                'value': 185,
                'unit': 'lbs',
                'system': 'http://unitsofmeasure.org',
                'code': '[lb_us]'
            }
        }
    };

    bundle: FHIR.SMART.Bundle = {
        bundle: {
            'resourceType': 'Bundle',
            'id': '936286e3-cf22-44c8-be9f-b8d1b950a9a3',
            'meta': {
                'lastUpdated': '2018-05-22T22:08:19.000+00:00'
            },
            'type': 'searchset',
            'total': 1,
            'link': [
                {
                    'relation': 'self',
                    // tslint:disable-next-line:max-line-length
                    'url': 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open?_getpages=8bbd1c3c-a90f-49c6-8394-ca7524b46774&_getpagesoffset=10&_count=10&_pretty=true&_bundletype=searchset'
                },
                {
                    'relation': 'next',
                    // tslint:disable-next-line:max-line-length
                    'url': 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open?_getpages=8bbd1c3c-a90f-49c6-8394-ca7524b46774&_getpagesoffset=20&_count=10&_format=json&_pretty=true&_bundletype=searchset'
                },
                {
                    'relation': 'prev',
                    // tslint:disable-next-line:max-line-length
                    'url': 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open?_getpages=8bbd1c3c-a90f-49c6-8394-ca7524b46774&_getpagesoffset=0&_count=10&_format=json&_pretty=true&_bundletype=searchset'
                }
            ],
            'entry': [
                {
                    'fullUrl': 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open/Observation/152759',
                    'resource': {
                        'resourceType': 'Observation',
                        'id': '152759',
                        'meta': {
                            'versionId': '1',
                            'lastUpdated': '2018-05-22T20:42:56.000+00:00',
                            'profile': [
                                'http://standardhealthrecord.org/fhir/StructureDefinition/shr-observation-Observation'
                            ],
                            'tag': [
                                {
                                    'system': 'https://smarthealthit.org/tags',
                                    'code': 'synthea-7-2017'
                                }
                            ]
                        },
                        'status': 'final',
                        'category': [
                            {
                                'coding': [
                                    {
                                        'system': 'http://hl7.org/fhir/observation-category'
                                    }
                                ]
                            }
                        ],
                        'code': {
                            'coding': [
                                {
                                    'system': 'http://loinc.org',
                                    'code': '69453-9',
                                    'display': 'Cause of Death [US Standard Certificate of Death]'
                                }
                            ],
                            'text': 'Cause of Death [US Standard Certificate of Death]'
                        },
                        'subject': {
                            'reference': 'Patient/a509406a-5098-478c-b183-037d68a953d9'
                        },
                        'context': {
                            'reference': 'Encounter/fbebfcf2-86d8-4c56-9539-314be0ce5bed'
                        },
                        'effectiveDateTime': '1989-07-26T17:51:45-04:00',
                        'issued': '1989-07-26T17:51:45-04:00',
                        'valueCodeableConcept': {
                            'coding': [
                                {
                                    'system': 'http://snomed.info/sct',
                                    'code': '185086009',
                                    'display': 'Chronic obstructive bronchitis (disorder)'
                                }
                            ],
                            'text': 'Chronic obstructive bronchitis (disorder)'
                        }
                    },
                    'search': {
                        'mode': 'match'
                    }
                }
            ]
        }
    };

    heightObservation: FHIR.SMART.Resource = {
        'resourceType': 'Observation',
        'id': 'body-height',
        'meta': {
            'profile': [
                'http://hl7.org/fhir/StructureDefinition/vitalsigns'
            ]
        },
        'text': {
            'status': 'generated',
            'div': '<div>Test</div>'
        },
        'status': 'final',
        'category': [
            {
                'coding': [
                    {
                        'system': 'http://hl7.org/fhir/observation-category',
                        'code': 'vital-signs',
                        'display': 'Vital Signs'
                    }
                ],
                'text': 'Vital Signs'
            }
        ],
        'code': {
            'coding': [
                {
                    'system': 'http://loinc.org',
                    'code': '8302-2',
                    'display': 'Body height'
                }
            ],
            'text': 'Body height'
        },
        'subject': {
            'reference': 'Patient/example'
        },
        'effectiveDateTime': '1999-07-02',
        'valueQuantity': {
            'value': 66.899999999999991,
            'unit': 'in',
            'system': 'http://unitsofmeasure.org',
            'code': '[in_i]'
        }
    };

    transactionBundle: FHIR.SMART.Bundle = {
        bundle: {
            'resourceType': 'Bundle',
            'id': '936286e3-cf22-44c8-be9f-b8d1b950a9a3',
            'meta': {
                'lastUpdated': '2018-05-22T22:08:19.000+00:00'
            },
            'type': 'transaction',
            'total': 1,
            'link': [
                {
                    'relation': 'self',
                    // tslint:disable-next-line:max-line-length
                    'url': 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open?_getpages=8bbd1c3c-a90f-49c6-8394-ca7524b46774&_getpagesoffset=10&_count=10&_pretty=true&_bundletype=searchset'
                },
                {
                    'relation': 'next',
                    // tslint:disable-next-line:max-line-length
                    'url': 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open?_getpages=8bbd1c3c-a90f-49c6-8394-ca7524b46774&_getpagesoffset=20&_count=10&_format=json&_pretty=true&_bundletype=searchset'
                },
                {
                    'relation': 'prev',
                    // tslint:disable-next-line:max-line-length
                    'url': 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open?_getpages=8bbd1c3c-a90f-49c6-8394-ca7524b46774&_getpagesoffset=0&_count=10&_format=json&_pretty=true&_bundletype=searchset'
                }
            ],
            'entry': [
                {
                    'fullUrl': 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open/Observation/152759',
                    'resource': {
                        'resourceType': 'Observation',
                        'id': '152759',
                        'meta': {
                            'versionId': '1',
                            'lastUpdated': '2018-05-22T20:42:56.000+00:00',
                            'profile': [
                                'http://standardhealthrecord.org/fhir/StructureDefinition/shr-observation-Observation'
                            ],
                            'tag': [
                                {
                                    'system': 'https://smarthealthit.org/tags',
                                    'code': 'synthea-7-2017'
                                }
                            ]
                        },
                        'status': 'final',
                        'category': [
                            {
                                'coding': [
                                    {
                                        'system': 'http://hl7.org/fhir/observation-category'
                                    }
                                ]
                            }
                        ],
                        'code': {
                            'coding': [
                                {
                                    'system': 'http://loinc.org',
                                    'code': '69453-9',
                                    'display': 'Cause of Death [US Standard Certificate of Death]'
                                }
                            ],
                            'text': 'Cause of Death [US Standard Certificate of Death]'
                        },
                        'subject': {
                            'reference': 'Patient/a509406a-5098-478c-b183-037d68a953d9'
                        },
                        'context': {
                            'reference': 'Encounter/fbebfcf2-86d8-4c56-9539-314be0ce5bed'
                        },
                        'effectiveDateTime': '1989-07-26T17:51:45-04:00',
                        'issued': '1989-07-26T17:51:45-04:00',
                        'valueCodeableConcept': {
                            'coding': [
                                {
                                    'system': 'http://snomed.info/sct',
                                    'code': '185086009',
                                    'display': 'Chronic obstructive bronchitis (disorder)'
                                }
                            ],
                            'text': 'Chronic obstructive bronchitis (disorder)'
                        }
                    },
                    'request': {
                        'method': 'POST'
                    },
                    'search': {
                        'mode': 'match'
                    }
                }
            ]
        }
    };

    searchParameter: FHIR.SMART.SearchParams = {
        type: 'Observation',
        query: {
            code: '69453-9'
        }
    };

    patientSpecificSearchParams: FHIR.SMART.SearchParams = {
        patient: 'a509406a-5098-478c-b183-037d68a953d9',
        type: 'Observation',
        query: {
            code: '69453-9'
        }
    };

    resolveParameter: string[] = ['Observation.subject'];

    historyParameter: FHIR.SMART.HistoryParams = {
        id: '152768',
        type: 'Observation',
        count: 10,
        params: { _extraParam: 'extraParamValue' }
    };

    resourceType: FHIR.SMART.ResourceType = {
        type: 'Observation'
    };

    readParameter: FHIR.SMART.ReadParams = {
        type: 'Observation',
        id: '152768'
    };

    vreadParameter: FHIR.SMART.VersionReadParams = {
        type: 'Observation',
        id: '152768',
        versionId: '1'
    };

    resolveParameter2: FHIR.SMART.ResolveParams = {
        reference: this.observationEntry.resource.subject,
        resource: this.observationEntry.resource,
        bundle: this.bundle.bundle
    };

    resourceParameter: FHIR.SMART.ResourceParameter = {
        resource: 'Patient',
        id: 'a509406a-5098-478c-b183-037d68a953d9'
    };

    oauth2ReadyCallback = (smartClient: FHIR.SMART.SMARTClient) => {
        // Client interacting after a successful OAuth2 authorization workflow
        const api: FHIR.SMART.Api = smartClient.api;

        // FHIR API methods exposed by fhir.js
        api.conformance(this.context).then(this.apiSuccess, this.apiError);
        api.create(this.observationEntry).then(this.apiSuccess, this.apiError);
        api.delete(this.observationEntry).then(this.apiSuccess, this.apiError);
        api.document(this.observationEntry).then(this.apiSuccess, this.apiError);
        api.drain(this.searchParameter, this.drainProcess, this.drainDone, this.apiError);
        api.fetchAll(this.searchParameter).then(this.fetchAllSuccess, this.apiError);
        api.fetchAllWithReferences(this.searchParameter, this.resolveParameter)
            .then(this.fetchAllWithReferencesSuccess, this.apiError);
        api.history(this.historyParameter).then(this.apiSuccess, this.apiError);
        api.nextPage(this.bundle).then(this.apiSuccess, this.apiError);
        api.prevPage(this.bundle).then(this.apiSuccess, this.apiError);
        api.profile(this.resourceType).then(this.apiSuccess, this.apiError);
        api.read(this.readParameter).then(this.apiSuccess, this.apiError);
        api.resolve(this.resolveParameter2).then(this.apiSuccess, this.apiError);
        api.resourceHistory(this.historyParameter).then(this.apiSuccess, this.apiError);
        api.search(this.searchParameter).then(this.apiSuccess, this.apiError);
        api.search(this.patientSpecificSearchParams).then(this.apiSuccess, this.apiError);
        api.transaction(this.transactionBundle).then(this.apiSuccess, this.apiError);
        api.typeHistory(this.historyParameter).then(this.apiSuccess, this.apiError);
        api.update(this.observationEntry).then(this.apiSuccess, this.apiError);
        api.validate(this.observationEntry).then(this.apiSuccess, this.apiError);
        api.vread(this.vreadParameter).then(this.apiSuccess, this.apiError);

        const objectPopulatedWithHeader = smartClient.authenticated({});
        smartClient.fetchBinary(this.observationEntry.resource.subject.reference).then(this.fetchBinarySuccess, this.apiError);
        smartClient.get(this.resourceParameter).then(this.apiSuccess, this.apiError);
        smartClient.getBinary(this.observationEntry.resource.subject.reference).then(this.fetchBinarySuccess, this.apiError);

        // Patient scoped FHIR API calls
        if (smartClient.patient) {
            const patient: FHIR.SMART.Patient = smartClient.patient;
            const patientId: string = patient.id;
            const patientApi: FHIR.SMART.Api = patient.api;

            patientApi.conformance(this.context).then(this.apiSuccess, this.apiError);
            patientApi.create(this.observationEntry).then(this.apiSuccess, this.apiError);
            patientApi.delete(this.observationEntry).then(this.apiSuccess, this.apiError);
            patientApi.document(this.observationEntry).then(this.apiSuccess, this.apiError);
            patientApi.drain(this.searchParameter, this.drainProcess, this.drainDone, this.apiError);
            patientApi.fetchAll(this.searchParameter).then(this.fetchAllSuccess, this.apiError);
            patientApi.fetchAllWithReferences(this.searchParameter, this.resolveParameter)
                .then(this.fetchAllWithReferencesSuccess, this.apiError);
            patientApi.history(this.historyParameter).then(this.apiSuccess, this.apiError);
            patientApi.nextPage(this.bundle).then(this.apiSuccess, this.apiError);
            patientApi.prevPage(this.bundle).then(this.apiSuccess, this.apiError);
            patientApi.profile(this.resourceType).then(this.apiSuccess, this.apiError);
            patientApi.read(this.readParameter).then(this.apiSuccess, this.apiError);
            patientApi.resolve(this.resolveParameter2).then(this.apiSuccess, this.apiError);
            patientApi.resourceHistory(this.historyParameter).then(this.apiSuccess, this.apiError);
            patientApi.search(this.searchParameter).then(this.apiSuccess, this.apiError);
            patientApi.search(this.patientSpecificSearchParams).then(this.apiSuccess, this.apiError);
            patientApi.transaction(this.transactionBundle).then(this.apiSuccess, this.apiError);
            patientApi.typeHistory(this.historyParameter).then(this.apiSuccess, this.apiError);
            patientApi.update(this.observationEntry).then(this.apiSuccess, this.apiError);
            patientApi.validate(this.observationEntry).then(this.apiSuccess, this.apiError);
            patientApi.vread(this.vreadParameter).then(this.apiSuccess, this.apiError);

            patient.read().then(this.apiSuccess, this.apiError);
        }

        // SMART client context helpers
        const context: FHIR.SMART.Context = smartClient.server;
        if (smartClient.server.auth) {
            const auth: FHIR.SMART.AuthContext = smartClient.server.auth;
        }
        if (smartClient.server.patientId) {
            const patientIdInContext: string = smartClient.server.patientId;
        }
        const fhirServiceUrl = smartClient.server.serviceUrl;
        if (smartClient.server.userId) {
            const userIdInContext: string = smartClient.server.userId;
        }
        const state: FHIR.SMART.OAuth2Configuration = smartClient.state;
        const tokenResponse = smartClient.tokenResponse;

        // User in context
        const userId = smartClient.userId;
        const userInContext = smartClient.user;
        smartClient.user.read().then(this.apiSuccess, this.apiError);

        // SMART client helper methods
        // Observation helpers
        const observationByCodesFn = smartClient.byCodes(this.observationEntry.resource, 'code');
        const observations = observationByCodesFn('29463-7');
        const observationsByCodes: FHIR.SMART.ObservationsByCode = smartClient.byCode(this.observationEntry.resource, 'code');
        // Unit helpers
        const numericValue = smartClient.units.any(this.heightObservation.valueQuantity);
        const convertedHeightValueInCm = smartClient.units.cm(this.heightObservation.valueQuantity);
        const convertedWeightValueInKg = smartClient.units.kg(this.weightObservationEntry.resource.valueQuantity);
    }

    oauth2ReadyErrback = (error: any) => {
        FHIR.oauth2.authorize(this.oauth2Configuration, (authError) => {
            console.log(authError);
        });
    }

    oauth2ResolveAuthTypeCallback = (type: string) => {
        console.log(type);
    }

    oauth2ResolveAuthTypeErrback = (error: any) => {
        console.log(error);
    }

    apiSuccess = (response: FHIR.SMART.Response) => {
        console.log('Response from the FHIR server:');
        console.log(response);
    }

    apiError = (response: FHIR.SMART.Response) => {
        console.log('Error response from the FHIR server:');
        console.log(response);
    }

    drainProcess = (entries: FHIR.SMART.Entry[]) => {
        console.log('Drain Process:');
        console.log(entries);
    }

    drainDone = () => {
        console.log('Drain Done');
    }

    fetchAllSuccess = (entries: FHIR.SMART.Entry[]) => {
        console.log('Fetch all success:');
        console.log(entries);
    }

    fetchAllWithReferencesSuccess = (entries: FHIR.SMART.Entry[], resolvedReferences: FHIR.SMART.ResolveFn) => {
        console.log('Fetch all with references success:');
        console.log(entries);
        console.log('Resolved References');
        console.log(resolvedReferences(this.observationEntry.resource, this.observationEntry.resource.subject));
    }

    genericCallback = (data: any) => {
        console.log(data);
    }

    fetchBinarySuccess = (blob: any) => {
        // const reader = new FileReader();
        // reader.addEventListener('loadend', function () {
        //     console.log('Blob content');
        //     console.log(reader.result);
        // });
        // reader.readAsArrayBuffer(blob);
    }

    openSmartFhir(): void {
        // Open SMART on FHIR server interaction
        const openSmartClient: FHIR.SMART.Client = FHIR.client(this.context);
        const api: FHIR.SMART.Api = openSmartClient.api;

        api.conformance(this.context).then(this.apiSuccess, this.apiError);
        api.create(this.observationEntry).then(this.apiSuccess, this.apiError);
        api.delete(this.observationEntry).then(this.apiSuccess, this.apiError);
        api.document(this.observationEntry).then(this.apiSuccess, this.apiError);
        api.drain(this.searchParameter, this.drainProcess, this.drainDone, this.apiError);
        api.fetchAll(this.searchParameter).then(this.fetchAllSuccess, this.apiError);
        api.fetchAllWithReferences(this.searchParameter, this.resolveParameter)
            .then(this.fetchAllWithReferencesSuccess, this.apiError);
        api.history(this.historyParameter).then(this.apiSuccess, this.apiError);
        api.nextPage(this.bundle).then(this.apiSuccess, this.apiError);
        api.prevPage(this.bundle).then(this.apiSuccess, this.apiError);
        api.profile(this.resourceType).then(this.apiSuccess, this.apiError);
        api.read(this.readParameter).then(this.apiSuccess, this.apiError);
        api.resolve(this.resolveParameter2).then(this.apiSuccess, this.apiError);
        api.resourceHistory(this.historyParameter).then(this.apiSuccess, this.apiError);
        api.search(this.searchParameter).then(this.apiSuccess, this.apiError);
        api.search(this.patientSpecificSearchParams).then(this.apiSuccess, this.apiError);
        api.transaction(this.transactionBundle).then(this.apiSuccess, this.apiError);
        api.typeHistory(this.historyParameter).then(this.apiSuccess, this.apiError);
        api.update(this.observationEntry).then(this.apiSuccess, this.apiError);
        api.validate(this.observationEntry).then(this.apiSuccess, this.apiError);
        api.vread(this.vreadParameter).then(this.apiSuccess, this.apiError);

        openSmartClient.fetchBinary(this.observationEntry.resource.subject.reference).then(this.fetchBinarySuccess, this.apiError);
        openSmartClient.get(this.resourceParameter).then(this.apiSuccess, this.apiError);
        openSmartClient.getBinary(this.observationEntry.resource.subject.reference).then(this.fetchBinarySuccess, this.apiError);

        if (openSmartClient.patient) {
            const patient: FHIR.SMART.Patient = openSmartClient.patient;
            const patientApi: FHIR.SMART.Api = patient.api;
            const patientId: string = patient.id;
            patientApi.conformance(this.context).then(this.apiSuccess, this.apiError);
            patientApi.create(this.observationEntry).then(this.apiSuccess, this.apiError);
            patientApi.delete(this.observationEntry).then(this.apiSuccess, this.apiError);
            patientApi.document(this.observationEntry).then(this.apiSuccess, this.apiError);
            patientApi.drain(this.searchParameter, this.drainProcess, this.drainDone, this.apiError);
            patientApi.fetchAll(this.searchParameter).then(this.fetchAllSuccess, this.apiError);
            patientApi.fetchAllWithReferences(this.searchParameter, this.resolveParameter)
                .then(this.fetchAllWithReferencesSuccess, this.apiError);
            patientApi.history(this.historyParameter).then(this.apiSuccess, this.apiError);
            patientApi.nextPage(this.bundle).then(this.apiSuccess, this.apiError);
            patientApi.prevPage(this.bundle).then(this.apiSuccess, this.apiError);
            patientApi.profile(this.resourceType).then(this.apiSuccess, this.apiError);
            patientApi.read(this.readParameter).then(this.apiSuccess, this.apiError);
            patientApi.resolve(this.resolveParameter2).then(this.apiSuccess, this.apiError);
            patientApi.resourceHistory(this.historyParameter).then(this.apiSuccess, this.apiError);
            patientApi.search(this.searchParameter).then(this.apiSuccess, this.apiError);
            patientApi.search(this.patientSpecificSearchParams).then(this.apiSuccess, this.apiError);
            patientApi.transaction(this.transactionBundle).then(this.apiSuccess, this.apiError);
            patientApi.typeHistory(this.historyParameter).then(this.apiSuccess, this.apiError);
            patientApi.update(this.observationEntry).then(this.apiSuccess, this.apiError);
            patientApi.validate(this.observationEntry).then(this.apiSuccess, this.apiError);
            patientApi.vread(this.vreadParameter).then(this.apiSuccess, this.apiError);
            patient.read().then(this.apiSuccess, this.apiError);
        }

        const context: FHIR.SMART.Context = openSmartClient.server;
        if (openSmartClient.server.auth) {
            const auth: FHIR.SMART.AuthContext = openSmartClient.server.auth;
        }
        if (openSmartClient.server.patientId) {
            const patientIdInContext: string = openSmartClient.server.patientId;
        }
        const fhirServiceUrl = openSmartClient.server.serviceUrl;
        if (openSmartClient.server.userId) {
            const userIdInContext: string = openSmartClient.server.userId;
        }

        const userId = openSmartClient.userId;
        const userInContext = openSmartClient.user;
        openSmartClient.user.read().then(this.apiSuccess, this.apiError);

        const observationByCodesFn = openSmartClient.byCodes(this.observationEntry.resource, 'code');
        const observations = observationByCodesFn('29463-7');
        const observationsByCodes: FHIR.SMART.ObservationsByCode = openSmartClient.byCode(this.observationEntry.resource, 'code');

        const numericValue = openSmartClient.units.any(this.heightObservation.valueQuantity);
        const convertedHeightValueInCm = openSmartClient.units.cm(this.heightObservation.valueQuantity);
        const convertedWeightValueInKg = openSmartClient.units.kg(this.weightObservationEntry.resource.valueQuantity);
    }

    closedSmartOnFhir() {
        // Closed FHIR server which requires user authorization
        FHIR.oauth2.ready(this.oauth2ReadyCallback, this.oauth2ReadyErrback);
        FHIR.oauth2.resolveAuthType(this.closedFhirServiceUrl, this.oauth2ResolveAuthTypeCallback, this.oauth2ResolveAuthTypeErrback);
    }
}

let component = new Component();
// Perform the API interactions on the Open SMART on FHIR sandbox server
component.openSmartFhir();
// Perform the API interactions on the Closed SMART on FHIR sandbox server(Requires user authorization)
component.closedSmartOnFhir();
