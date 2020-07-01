# TypeScript typings for Genomics API v1
Upload, process, query, and search Genomics data in the cloud.
For detailed description please check [documentation](https://cloud.google.com/genomics).

## Installing

Install typings for Genomics API:
```
npm install @types/gapi.client.genomics@v1 --save-dev
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('genomics', 'v1', () => {
    // now we can use gapi.client.genomics
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data in Google BigQuery
        'https://www.googleapis.com/auth/bigquery',
    
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // Manage your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_write',
    
        // View and manage Genomics data
        'https://www.googleapis.com/auth/genomics',
    
        // View Genomics data
        'https://www.googleapis.com/auth/genomics.readonly',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Genomics API resources:

```typescript 
    
/* 
Creates one or more new annotations atomically. All annotations must
belong to the same annotation set. Caller must have WRITE
permission for this annotation set. For optimal performance, batch
positionally adjacent annotations together.

If the request has a systemic issue, such as an attempt to write to
an inaccessible annotation set, the entire RPC will fail accordingly. For
lesser data issues, when possible an error will be isolated to the
corresponding batch entry in the response; the remaining well formed
annotations will be created normally.

For details on the requirements for each individual annotation resource,
see
CreateAnnotation.  
*/
await gapi.client.annotations.batchCreate({  }); 
    
/* 
Creates a new annotation. Caller must have WRITE permission
for the associated annotation set.

The following fields are required:

* annotationSetId
* referenceName or
  referenceId

### Transcripts

For annotations of type TRANSCRIPT, the following fields of
transcript must be provided:

* exons.start
* exons.end

All other fields may be optionally specified, unless documented as being
server-generated (for example, the `id` field). The annotated
range must be no longer than 100Mbp (mega base pairs). See the
Annotation resource
for additional restrictions on each field.  
*/
await gapi.client.annotations.create({  }); 
    
/* 
Deletes an annotation. Caller must have WRITE permission for
the associated annotation set.  
*/
await gapi.client.annotations.delete({ annotationId: "annotationId",  }); 
    
/* 
Gets an annotation. Caller must have READ permission
for the associated annotation set.  
*/
await gapi.client.annotations.get({ annotationId: "annotationId",  }); 
    
/* 
Searches for annotations that match the given criteria. Results are
ordered by genomic coordinate (by reference sequence, then position).
Annotations with equivalent genomic coordinates are returned in an
unspecified order. This order is consistent, such that two queries for the
same content (regardless of page size) yield annotations in the same order
across their respective streams of paginated responses. Caller must have
READ permission for the queried annotation sets.  
*/
await gapi.client.annotations.search({  }); 
    
/* 
Updates an annotation. Caller must have
WRITE permission for the associated dataset.  
*/
await gapi.client.annotations.update({ annotationId: "annotationId",  }); 
    
/* 
Creates a new annotation set. Caller must have WRITE permission for the
associated dataset.

The following fields are required:

  * datasetId
  * referenceSetId

All other fields may be optionally specified, unless documented as being
server-generated (for example, the `id` field).  
*/
await gapi.client.annotationsets.create({  }); 
    
/* 
Deletes an annotation set. Caller must have WRITE permission
for the associated annotation set.  
*/
await gapi.client.annotationsets.delete({ annotationSetId: "annotationSetId",  }); 
    
/* 
Gets an annotation set. Caller must have READ permission for
the associated dataset.  
*/
await gapi.client.annotationsets.get({ annotationSetId: "annotationSetId",  }); 
    
/* 
Searches for annotation sets that match the given criteria. Annotation sets
are returned in an unspecified order. This order is consistent, such that
two queries for the same content (regardless of page size) yield annotation
sets in the same order across their respective streams of paginated
responses. Caller must have READ permission for the queried datasets.  
*/
await gapi.client.annotationsets.search({  }); 
    
/* 
Updates an annotation set. The update must respect all mutability
restrictions and other invariants described on the annotation set resource.
Caller must have WRITE permission for the associated dataset.  
*/
await gapi.client.annotationsets.update({ annotationSetId: "annotationSetId",  }); 
    
/* 
Creates a new call set.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.callsets.create({  }); 
    
/* 
Deletes a call set.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.callsets.delete({ callSetId: "callSetId",  }); 
    
/* 
Gets a call set by ID.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.callsets.get({ callSetId: "callSetId",  }); 
    
/* 
Updates a call set.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

This method supports patch semantics.  
*/
await gapi.client.callsets.patch({ callSetId: "callSetId",  }); 
    
/* 
Gets a list of call sets matching the criteria.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchCallSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L178).  
*/
await gapi.client.callsets.search({  }); 
    
/* 
Creates a new dataset.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.datasets.create({  }); 
    
/* 
Deletes a dataset and all of its contents (all read group sets,
reference sets, variant sets, call sets, annotation sets, etc.)
This is reversible (up to one week after the deletion) via
the
datasets.undelete
operation.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.datasets.delete({ datasetId: "datasetId",  }); 
    
/* 
Gets a dataset by ID.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.datasets.get({ datasetId: "datasetId",  }); 
    
/* 
Gets the access control policy for the dataset. This is empty if the
policy or resource does not exist.

See <a href="/iam/docs/managing-policies#getting_a_policy">Getting a
Policy</a> for more information.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.datasets.getIamPolicy({ resource: "resource",  }); 
    
/* 
Lists datasets within a project.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.datasets.list({  }); 
    
/* 
Updates a dataset.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

This method supports patch semantics.  
*/
await gapi.client.datasets.patch({ datasetId: "datasetId",  }); 
    
/* 
Sets the access control policy on the specified dataset. Replaces any
existing policy.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

See <a href="/iam/docs/managing-policies#setting_a_policy">Setting a
Policy</a> for more information.  
*/
await gapi.client.datasets.setIamPolicy({ resource: "resource",  }); 
    
/* 
Returns permissions that a caller has on the specified resource.
See <a href="/iam/docs/managing-policies#testing_permissions">Testing
Permissions</a> for more information.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.datasets.testIamPermissions({ resource: "resource",  }); 
    
/* 
Undeletes a dataset by restoring a dataset which was deleted via this API.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

This operation is only possible for a week after the deletion occurred.  
*/
await gapi.client.datasets.undelete({ datasetId: "datasetId",  }); 
    
/* 
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.  
*/
await gapi.client.operations.cancel({ name: "name",  }); 
    
/* 
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.  
*/
await gapi.client.operations.get({ name: "name",  }); 
    
/* 
Lists operations that match the specified filter in the request.  
*/
await gapi.client.operations.list({ name: "name",  }); 
    
/* 
Deletes a read group set.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.readgroupsets.delete({ readGroupSetId: "readGroupSetId",  }); 
    
/* 
Exports a read group set to a BAM file in Google Cloud Storage.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Note that currently there may be some differences between exported BAM
files and the original BAM file at the time of import. See
ImportReadGroupSets
for caveats.  
*/
await gapi.client.readgroupsets.export({ readGroupSetId: "readGroupSetId",  }); 
    
/* 
Gets a read group set by ID.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.readgroupsets.get({ readGroupSetId: "readGroupSetId",  }); 
    
/* 
Creates read group sets by asynchronously importing the provided
information.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

The caller must have WRITE permissions to the dataset.

## Notes on [BAM](https://samtools.github.io/hts-specs/SAMv1.pdf) import

- Tags will be converted to strings - tag types are not preserved
- Comments (`@CO`) in the input file header will not be preserved
- Original header order of references (`@SQ`) will not be preserved
- Any reverse stranded unmapped reads will be reverse complemented, and
their qualities (also the "BQ" and "OQ" tags, if any) will be reversed
- Unmapped reads will be stripped of positional information (reference name
and position)  
*/
await gapi.client.readgroupsets.import({  }); 
    
/* 
Updates a read group set.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

This method supports patch semantics.  
*/
await gapi.client.readgroupsets.patch({ readGroupSetId: "readGroupSetId",  }); 
    
/* 
Searches for read group sets matching the criteria.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchReadGroupSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L135).  
*/
await gapi.client.readgroupsets.search({  }); 
    
/* 
Gets a list of reads for one or more read group sets.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Reads search operates over a genomic coordinate space of reference sequence
& position defined over the reference sequences to which the requested
read group sets are aligned.

If a target positional range is specified, search returns all reads whose
alignment to the reference genome overlap the range. A query which
specifies only read group set IDs yields all reads in those read group
sets, including unmapped reads.

All reads returned (including reads on subsequent pages) are ordered by
genomic coordinate (by reference sequence, then position). Reads with
equivalent genomic coordinates are returned in an unspecified order. This
order is consistent, such that two queries for the same content (regardless
of page size) yield reads in the same order across their respective streams
of paginated responses.

Implements
[GlobalAllianceApi.searchReads](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L85).  
*/
await gapi.client.reads.search({  }); 
    
/* 
Gets a reference.

For the definitions of references and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.getReference](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L158).  
*/
await gapi.client.references.get({ referenceId: "referenceId",  }); 
    
/* 
Searches for references which match the given criteria.

For the definitions of references and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchReferences](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L146).  
*/
await gapi.client.references.search({  }); 
    
/* 
Gets a reference set.

For the definitions of references and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.getReferenceSet](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L83).  
*/
await gapi.client.referencesets.get({ referenceSetId: "referenceSetId",  }); 
    
/* 
Searches for reference sets which match the given criteria.

For the definitions of references and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchReferenceSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L71)  
*/
await gapi.client.referencesets.search({  }); 
    
/* 
Creates a new variant.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.variants.create({  }); 
    
/* 
Deletes a variant.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.variants.delete({ variantId: "variantId",  }); 
    
/* 
Gets a variant by ID.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.variants.get({ variantId: "variantId",  }); 
    
/* 
Creates variant data by asynchronously importing the provided information.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

The variants for import will be merged with any existing variant that
matches its reference sequence, start, end, reference bases, and
alternative bases. If no such variant exists, a new one will be created.

When variants are merged, the call information from the new variant
is added to the existing variant, and Variant info fields are merged
as specified in
infoMergeConfig.
As a special case, for single-sample VCF files, QUAL and FILTER fields will
be moved to the call level; these are sometimes interpreted in a
call-specific context.
Imported VCF headers are appended to the metadata already in a variant set.  
*/
await gapi.client.variants.import({  }); 
    
/* 
Merges the given variants with existing variants.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Each variant will be
merged with an existing variant that matches its reference sequence,
start, end, reference bases, and alternative bases. If no such variant
exists, a new one will be created.

When variants are merged, the call information from the new variant
is added to the existing variant. Variant info fields are merged as
specified in the
infoMergeConfig
field of the MergeVariantsRequest.

Please exercise caution when using this method!  It is easy to introduce
mistakes in existing variants and difficult to back out of them.  For
example,
suppose you were trying to merge a new variant with an existing one and
both
variants contain calls that belong to callsets with the same callset ID.

    // Existing variant - irrelevant fields trimmed for clarity
    {
        "variantSetId": "10473108253681171589",
        "referenceName": "1",
        "start": "10582",
        "referenceBases": "G",
        "alternateBases": [
            "A"
        ],
        "calls": [
            {
                "callSetId": "10473108253681171589-0",
                "callSetName": "CALLSET0",
                "genotype": [
                    0,
                    1
                ],
            }
        ]
    }

    // New variant with conflicting call information
    {
        "variantSetId": "10473108253681171589",
        "referenceName": "1",
        "start": "10582",
        "referenceBases": "G",
        "alternateBases": [
            "A"
        ],
        "calls": [
            {
                "callSetId": "10473108253681171589-0",
                "callSetName": "CALLSET0",
                "genotype": [
                    1,
                    1
                ],
            }
        ]
    }

The resulting merged variant would overwrite the existing calls with those
from the new variant:

    {
        "variantSetId": "10473108253681171589",
        "referenceName": "1",
        "start": "10582",
        "referenceBases": "G",
        "alternateBases": [
            "A"
        ],
        "calls": [
            {
                "callSetId": "10473108253681171589-0",
                "callSetName": "CALLSET0",
                "genotype": [
                    1,
                    1
                ],
            }
        ]
    }

This may be the desired outcome, but it is up to the user to determine if
if that is indeed the case.  
*/
await gapi.client.variants.merge({  }); 
    
/* 
Updates a variant.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

This method supports patch semantics. Returns the modified variant without
its calls.  
*/
await gapi.client.variants.patch({ variantId: "variantId",  }); 
    
/* 
Gets a list of variants matching the criteria.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchVariants](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L126).  
*/
await gapi.client.variants.search({  }); 
    
/* 
Creates a new variant set.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

The provided variant set must have a valid `datasetId` set - all other
fields are optional. Note that the `id` field will be ignored, as this is
assigned by the server.  
*/
await gapi.client.variantsets.create({  }); 
    
/* 
Deletes a variant set including all variants, call sets, and calls within.
This is not reversible.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.variantsets.delete({ variantSetId: "variantSetId",  }); 
    
/* 
Exports variant set data to an external destination.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.variantsets.export({ variantSetId: "variantSetId",  }); 
    
/* 
Gets a variant set by ID.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.variantsets.get({ variantSetId: "variantSetId",  }); 
    
/* 
Updates a variant set using patch semantics.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  
*/
await gapi.client.variantsets.patch({ variantSetId: "variantSetId",  }); 
    
/* 
Returns a list of all variant sets matching search criteria.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchVariantSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L49).  
*/
await gapi.client.variantsets.search({  });
```