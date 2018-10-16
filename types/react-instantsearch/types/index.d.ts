declare module 'react-instantsearch/types' {

  type AlgoliaError = {
    stack: string
    name: string
    message: string
    debugData: any[],
    statusCode: number
  }
  

  type Omit<T1, T2> = Pick<T1, Exclude<keyof T1, keyof T2>>

  type ConnectedComponentType<TProps, TProvidedProps, TExposedProps = {}>
    = React.ComponentType<Omit<TProps, TProvidedProps> & TExposedProps>


  /**
   * The searchState contains all widgets states. If a widget uses an attribute,
   * we store it under its widget category to prevent collision.
   * 
   * https://community.algolia.com/react-instantsearch/guide/Search_state.html
   */
  export interface ISearchState {
    range: {
      [key: string]: {
        min: number,
        max: number
      }
    },
    configure: {
      aroundLatLng: boolean,
      [key: string]: any
    },
    refinementList: {
      [key: string]: string[]
    },
    hierarchicalMenu: {
      [key: string]: string
    },
    menu: {
      [key: string]: string
    },
    multiRange: {
      [key: string]: string
    },
    toggle: {
      [key: string]: boolean
    },
    hitsPerPage: number,
    sortBy: string,
    query: string,
    page: number,

    indices?: {
      [index: string]: {
        configure: {
          hitsPerPage: number,
        },
      }
    },
  }

  /**
   * The most basic possible document in an Algolia index:
   * a set of string-value pairs.
   */
  export type BasicDoc = { [k: string]: string }

  /**
   * The shape of the searchResults object provided
   * via connectors
   * https://community.algolia.com/algoliasearch-helper-js/reference.html#searchresults
   */
  export interface ISearchResults<TDoc = BasicDoc> {
    query: string,
    hits: Array<Hit<TDoc>>,
    index: string,
    hitsPerPage: number,
    nbHits: number,
    nbPages: number,
    page: number,
    processingTimeMS: number,
    exhaustiveNbHits: true,
    disjunctiveFacets: any[],
    hierarchicalFacets: any[],
    facets: any[],
    aroundLatLng?: string
    automaticRadius?: string
  }

  /**
   * All the records that match the search parameters.
   * Each record is augmented with a new attribute `_highlightResult` which is an
   * object keyed by attribute and contains additional properties
   * https://community.algolia.com/algoliasearch-helper-js/reference.html#SearchResults#hits
   */
  type Hit<TDoc> = TDoc & {
    objectID: string,
    '_highlightResult': HighlightResult<TDoc>,
  }
  
  type HighlightResult<TDoc> =
    TDoc extends { [k: string]: any } ?
      { [K in keyof TDoc]: HighlightResultField<TDoc[K]> } :
      never
  
  type HighlightResultField<TField> =
    TField extends Array<infer TItem> ?
      HighlightResultArray<TItem> :
      TField extends string ?
        HighlightResultPrimitive :
        HighlightResult<TField> 
  
  type HighlightResultArray<TItem> =
    TItem extends string ?
      HighlightResultPrimitive[] :
      Array<HighlightResult<TItem>>
  
  type HighlightResultPrimitive = {
    /** the value of the facet highlighted (html) */
    value: string,
    /** full, partial or none depending on how the query terms match */
    matchLevel: 'none' | 'partial' | 'full',
    matchedWords: string[],
    fullyHighlighted?: boolean,
  }
  
  /* Hits example:
  {
    "title": "Video 3: Nine Characteristics Of A Great Group",
    "type": "video",
    "tags": [],
    "blurb": null,
    "security_level": {
      "id": 1,
      "name": "Anonymous",
      "key": "anonymous"
    },
    "asset": {},
    "external_asset": "http://vimeo.com/104767570",
    "objectID": "t6qPLQCVNesY84OoikkiW",
    "_highlightResult": {
      "title": {
        "value":
          "Video <ais-highlight-0000000000>3</ais-highlight-0000000000>: Nine Characteristics Of A Great Group",
        "matchLevel": "full",
        "fullyHighlighted": false,
        "matchedWords": ["3"]
      },
      "type": {
        "value": "video",
        "matchLevel": "none",
        "matchedWords": []
      },
      "security_level": {
        "name": {
          "value": "Anonymous",
          "matchLevel": "none",
          "matchedWords": []
        },
        "key": {
          "value": "anonymous",
          "matchLevel": "none",
          "matchedWords": []
        }
      },
      "external_asset": {
        "value": "http://vimeo.com/104767570",
        "matchLevel": "none",
        "matchedWords": []
      },
      "asset": {
        "sys": {
        "locale": {
          "value": "en-US",
          "matchLevel": "none",
          "matchedWords": []
        },
        "space": {
          "sys": {
            "type": {
              "value": "Link",
              "matchLevel": "none",
              "matchedWords": []
            },
            "linkType": {
              "value": "Space",
              "matchLevel": "none",
              "matchedWords": []
            },
            "id": {
              "value": "7yx6ovlj39n5",
              "matchLevel": "none",
              "matchedWords": []
            }
          }
        },
        "id": {
          "value": "1AXqjzjSN2u0qgMWCW8uG8",
          "matchLevel": "none",
          "matchedWords": []
        },
        "type": {
          "value": "Asset",
          "matchLevel": "none",
          "matchedWords": []
        },
        "createdAt": {
          "value": "2018-06-22T02:42:32.632Z",
          "matchLevel": "none",
          "matchedWords": []
        },
        "updatedAt": {
          "value": "2018-06-22T02:42:32.632Z",
          "matchLevel": "none",
          "matchedWords": []
        },
        "environment": {
          "sys": {
            "id": {
              "value": "master",
              "matchLevel": "none",
              "matchedWords": []
            },
            "type": {
              "value": "Link",
              "matchLevel": "none",
              "matchedWords": []
            },
            "linkType": {
              "value": "Environment",
              "matchLevel": "none",
              "matchedWords": []
            }
          }
        }
      },
      "fields": {
        "title": {
          "value":
            "how-to-<ais-highlight-0000000000>confess</ais-highlight-0000000000>-an-<ais-highlight-0000000000>inventory</ais-highlight-0000000000>",
          "matchLevel": "full",
          "fullyHighlighted": false,
          "matchedWords": ["confess", "inventory"]
        },
        "file": {
          "url": {
            "value":
              "//assets.ctfassets.net/7yx6ovlj39n5/1AXqjzjSN2u0qgMWCW8uG8/3f598700fa730fe03676130328f8b766/how-to-<ais-highlight-0000000000>confess</ais-highlight-0000000000>-an-<ais-highlight-0000000000>inventory</ais-highlight-0000000000>.docx",
            "matchLevel": "full",
            "fullyHighlighted": false,
            "matchedWords": ["confess", "inventory"]
          },
          "fileName": {
            "value":
              "how-to-<ais-highlight-0000000000>confess</ais-highlight-0000000000>-an-<ais-highlight-0000000000>inventory</ais-highlight-0000000000>.docx",
            "matchLevel": "full",
            "fullyHighlighted": false,
            "matchedWords": ["confess", "inventory"]
          },
          "contentType": {
            "value":
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "matchLevel": "none",
            "matchedWords": []
          }
        }
      }
    }
  }*/  
}