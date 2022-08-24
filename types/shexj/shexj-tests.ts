import {
    Schema,
    // shexExprs
    shapeExpr, ShapeDecl, ShapeOr, ShapeAnd, ShapeNot, ShapeExternal,
    // shape declaration references
    shapeDeclRef, shapeDeclLabel, shapeExprOrRef,
    // node constraints
    NodeConstraint, xsFacets, stringFacets, numericFacets, numericLiteral,
    // value sets
    valueSetValue, objectValue, ObjectLiteral,
    IriStem, IriStemRange,
    LiteralStem, LiteralStemRange,
    Language, LanguageStem, LanguageStemRange,
    Wildcard,
    // shapes and tripleExprs
    Shape, tripleExpr, EachOf, OneOf, TripleConstraint,
    // triple constraint references
    tripleExprRef, tripleExprLabel, tripleExprOrRef,
    // SemActs and annotations
    SemAct, Annotation, semactsAndAnnotations,
    // terminals
    IRIREF, STRING, LANGTAG
} from "shexj";

const base = 'http://a.example/some/path/';
const iri = (localName: string) => base + localName;

function test_pieces() {
    const i1: IRIREF = iri('i1');
    const i2: IRIREF = iri('i2');
    const l1: STRING = 'literal 1';

    const anotationIRI: Annotation = {
        type: "Annotation",
        predicate: i1,
        object: i2
    };
    const anotationIRI_e0: Annotation = {
        // @ts-expect-error
        type: "Annotation999",
        predicate: i1,
        object: i2
    };
    const anotationIRI_e1: Annotation = {
        type: "Annotation",
        // @ts-expect-error
        predicate999: i1,
        object: i2
    };
    const anotationIRI_e2: Annotation = {
        type: "Annotation",
        predicate: i1,
        // @ts-expect-error
        object999: i2
    };
    const anotationLit: Annotation = {
        type: "Annotation",
        predicate: i1,
        object: l1
    };

    const anotation: Annotation = {
        type: "Annotation",
        predicate: i1,
        object: i2
    };

    const semAct1: SemAct = { type: "SemAct", name: i1 };
    // @ts-expect-error
    const semAct1_e0: SemAct = { type: "SemAct", name: [l1] };
    // @ts-expect-error
    const semAct1_e1: SemAct = { type: "SemAct", code: l1 };
    const semAct2: SemAct = { type: "SemAct", name: i1, code: l1 };
    // @ts-expect-error
    const semAct2_e0: SemAct = { type: "Semact", name: i1, code: l1 };
    const semAnnot1: semactsAndAnnotations = {
        semActs: [semAct1, semAct2],
        annotations: [anotationIRI, anotationLit]
    };

    const tel1: tripleExprLabel = i1;
    const ter1: tripleExprRef = tel1;
    const teor1: tripleExprOrRef = ter1;

    const tc1: TripleConstraint = { type: "TripleConstraint", predicate: i1 };
    const tc2: TripleConstraint = {
        id: i1, type: "TripleConstraint", inverse: true,
        predicate: i1, min: 1, max: -1,
        ...semAnnot1
    };

    const eo1: EachOf = { type: "EachOf", expressions: [tc1, tc2] };
    const oo1: OneOf = { type: "OneOf", expressions: [tc1, eo1, ter1] };
    // @ts-expect-error
    const oo1_e1: OneOf = { type: "OneOf", expressions: [tc1, semAct1] };

    const te2: tripleExpr = tc1;
    const te3: tripleExpr = eo1;
    const te4: tripleExpr = oo1;
    // @ts-expect-error
    const te_e1: tripleExpr = semAct1;

    const sh1: Shape = { type: "Shape" };
    const sh2: Shape = {
        type: "Shape", expression: te4, closed: true, extra: [i1, i2],
        extends: [{ type: "Shape" }, "nc1"],
        ...semAnnot1
    };
    const sh_e1: Shape = {
        type: "Shape", expression: te4, closed: true, extra: [i1, i2],
        // @ts-expect-error
        extends: [{ type: "ShapeDecl" }, "nc1"],
        ...semAnnot1
    };

    const lt1: LANGTAG = "en";
    const lt2: LANGTAG = "en-fr";
    const wi: Wildcard = { type: "Wildcard" };
    const la1: Language = { type: "Language", languageTag: "en" };
    const las1: LanguageStem = { type: "LanguageStem", stem: lt1 };
    const lasr1: LanguageStemRange = {
        type: "LanguageStemRange",
        stem: lt1,
        exclusions: [lt2, las1]
    };

    const lis1: LiteralStem = { type: "LiteralStem", stem: "abc" };
    const lis2: LiteralStemRange = {
        type: "LiteralStemRange",
        stem: "ab",
        exclusions: ["abc", lis1]
    };

    const irs1: IriStem = { type: "IriStem", stem: "abc" };
    const irs2: IriStemRange = {
        type: "IriStemRange",
        stem: "ab", exclusions:
        ["abc", irs1]
    };

    const oj1: ObjectLiteral = { value: "chat" };
    const oj2: ObjectLiteral = { value: "chat", language: "en" };
    const oj3: ObjectLiteral = { value: "ii", type: i1 };

    const ov1: objectValue = i1;
    const ov2: objectValue = oj1;
    const vsv1: valueSetValue[] = [ov1, irs1, irs2, lis1, lis2, las1, lasr1];

    const nf1: numericFacets = {
        mininclusive: 2.1, minexclusive: 2.0,
        maxinclusive: 3.0, maxexclusive: 3.1
    };
    const sf1: stringFacets = {
        length: 3, minlength: 2, maxlength: 4,
        pattern: "...", flags: "i"
    };
    const xsf1: xsFacets[] = [nf1, sf1];

    const nc1: NodeConstraint = {
        type: "NodeConstraint",
        nodeKind: "iri", ...semAnnot1
    };
    // @ts-expect-error
    const nc_e1: NodeConstraint = { type: "NodeConstraint", nodeKind: "iri999" };
    const nc2: NodeConstraint = {
        type: "NodeConstraint",
        datatype: i2,
        values: vsv1,
        minlength: 2, minexclusive: 99
    };

    const sdl1: shapeDeclLabel = i1;
    const sdr1: shapeDeclRef = sdl1;
    const seor1: shapeExprOrRef = sdr1;

    const ext1: ShapeExternal = { type: "ShapeExternal" };
    const ext1d: ShapeDecl = { type: "ShapeDecl", id: sdl1, shapeExpr: ext1 };
    const sn1: ShapeNot = { type: "ShapeNot", shapeExpr: ext1 };
    const sn1d: ShapeDecl = { type: "ShapeDecl", id: "sn1", shapeExpr: sn1 };
    const sa1: ShapeAnd = { type: "ShapeAnd", shapeExprs: [ext1, sn1] };
    const sa1d: ShapeDecl = { type: "ShapeDecl", id: "sa1", shapeExpr: sa1 };
    const so1: ShapeOr = { type: "ShapeOr", shapeExprs: [ext1, sn1, sa1] };

    const s1: Schema = { type: "Schema" };
    const s2: Schema = {
        type: "Schema", "@context": "http://www.w3.org/ns/shex.jsonld",
        startActs: [semAct1, semAct2],
        start: so1,
        imports: [i1, i2],
        shapes: [ext1d, sn1d, sa1d]
    };
}

function test_kitchen_sink() {
  const s1: Schema = {
    type: "Schema",
    startActs: [
      {
        type: "SemAct",
        name: "http://ex.example/#foo",
        code: " initializer for ignored extension "
      }
    ],
    start: "http://ex.example/S1",
    shapes: [
      {
        type: "ShapeDecl",
        id: "_:IDshape",
        shapeExpr: {
          type: "Shape",
          expression: {
            id: "_:IDshapeE",
            type: "OneOf",
            expressions: [
              {
                type: "EachOf",
                expressions: [
                  {
                    type: "TripleConstraint",
                    predicate: "http://ex.example/#code",
                    valueExpr: {
                      type: "NodeConstraint",
                      nodeKind: "literal"
                    }
                  },
                  {
                    type: "TripleConstraint",
                    predicate: "http://ex.example/#system",
                    valueExpr: {
                      type: "NodeConstraint",
                      nodeKind: "iri"
                    }
                  },
                  {
                    type: "TripleConstraint",
                    predicate: "http://ex.example/#literal",
                    valueExpr: {
                      type: "NodeConstraint",
                      values: [
                        {
                          value: "a"
                        },
                        {
                          value: "b",
                          type: "http://ex.example/#c"
                        },
                        {
                          value: "c",
                          language: "en"
                        },
                        {
                          value: "d",
                          language: "en-fr"
                        }
                      ]
                    },
                    min: 2,
                    max: 3
                  },
                  {
                    type: "TripleConstraint",
                    predicate: "http://ex.example/#misc",
                    valueExpr: {
                      type: "NodeConstraint",
                      nodeKind: "bnode"
                    },
                    semActs: [
                      {
                        type: "SemAct",
                        name: "http://ex.example/#foo",
                        code: " ignored "
                      },
                      {
                        type: "SemAct",
                        name: "http://ex.example/#bar",
                        code: " also ignored "
                      }
                    ]
                  }
                ]
              },
              {
                type: "EachOf",
                expressions: [
                  {
                    type: "EachOf",
                    expressions: [
                      {
                        type: "TripleConstraint",
                        inverse: true,
                        predicate: "http://ex.example/#ref",
                        valueExpr: {
                          type: "NodeConstraint",
                          values: [
                            {
                              value: "true",
                              type: "http://www.w3.org/2001/XMLSchema#boolean"
                            },
                            {
                              value: "false",
                              type: "http://www.w3.org/2001/XMLSchema#boolean"
                            }
                          ]
                        }
                      },
                      {
                        type: "TripleConstraint",
                        inverse: true,
                        predicate: "http://ex.example/#miscRef"
                      }
                    ]
                  },
                  {
                    type: "TripleConstraint",
                    predicate: "http://ex.example/#issues",
                    valueExpr: "http://ex.example/S1",
                    min: 0,
                    max: -1
                  },
                  {
                    type: "TripleConstraint",
                    predicate: "http://ex.example/#seeAlso",
                    valueExpr: "http://ex.example/S1",
                    min: 0,
                    max: -1
                  },
                  {
                    type: "TripleConstraint",
                    predicate: "http://ex.example/#says",
                    valueExpr: "http://ex.example/#EmployeeShape",
                    min: 0,
                    max: -1
                  }
                ]
              }
            ]
          }
        }
      },
      {
        type: "ShapeDecl",
        id: "http://ex.example/#EmployeeShape",
        shapeExpr: {
          type: "Shape",
          expression: {
            type: "EachOf",
            expressions: [
              {
                type: "TripleConstraint",
                predicate: "http://xmlns.com/foaf/givenName",
                valueExpr: {
                  type: "NodeConstraint",
                  datatype: "http://www.w3.org/2001/XMLSchema#string"
                },
                min: 1,
                max: -1
              },
              {
                type: "TripleConstraint",
                predicate: "http://xmlns.com/foaf/familyName",
                valueExpr: {
                  type: "NodeConstraint",
                  datatype: "http://www.w3.org/2001/XMLSchema#string"
                }
              },
              {
                type: "TripleConstraint",
                predicate: "http://xmlns.com/foaf/phone",
                valueExpr: {
                  type: "NodeConstraint",
                  nodeKind: "iri"
                },
                min: 0,
                max: -1
              },
              {
                type: "TripleConstraint",
                predicate: "http://xmlns.com/foaf/mbox",
                valueExpr: {
                  type: "NodeConstraint",
                  nodeKind: "iri"
                },
                min: 0,
                max: 1
              }
            ]
          }
        }
      },
      {
        type: "ShapeDecl",
        id: "http://ex.example/#FooID",
        shapeExpr: {
          type: "Shape",
          closed: true,
          expression: "_:IDshapeE",
          extra: [
            "http://ex.example/#code",
            "http://ex.example/#system"
          ]
        }
      },
      {
        type: "ShapeDecl",
        id: "http://ex.example/#UserShape",
        shapeExpr: {
          type: "Shape",
          expression: {
            type: "EachOf",
            expressions: [
              {
                type: "OneOf",
                expressions: [
                  {
                    type: "TripleConstraint",
                    predicate: "http://xmlns.com/foaf/name",
                    valueExpr: {
                      type: "NodeConstraint",
                      datatype: "http://www.w3.org/2001/XMLSchema#string"
                    }
                  },
                  {
                    type: "EachOf",
                    expressions: [
                      {
                        type: "TripleConstraint",
                        predicate: "http://xmlns.com/foaf/givenName",
                        valueExpr: {
                          type: "NodeConstraint",
                          datatype: "http://www.w3.org/2001/XMLSchema#string"
                        },
                        min: 1,
                        max: -1
                      },
                      {
                        type: "TripleConstraint",
                        predicate: "http://xmlns.com/foaf/familyName",
                        valueExpr: {
                          type: "NodeConstraint",
                          datatype: "http://www.w3.org/2001/XMLSchema#string"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type: "TripleConstraint",
                predicate: "http://xmlns.com/foaf/mbox",
                valueExpr: {
                  type: "NodeConstraint",
                  nodeKind: "iri",
                  pattern: "^mailto:"
                }
              },
              {
                type: "TripleConstraint",
                predicate: "http://ex.example/#id",
                valueExpr: {
                  type: "ShapeAnd",
                  shapeExprs: [
                    {
                      type: "NodeConstraint",
                      nodeKind: "bnode"
                    },
                    "_:IDshape"
                  ]
                }
              }
            ]
          }
        }
      },
      {
        type: "ShapeDecl",
        id: "http://ex.example/S1",
        shapeExpr: {
          type: "Shape",
          expression: {
            type: "EachOf",
            expressions: [
              {
                type: "TripleConstraint",
                predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                valueExpr: {
                  type: "NodeConstraint",
                  values: [
                    "http://ex.example/#Issue"
                  ]
                },
                min: 0,
                max: 1
              },
              {
                type: "TripleConstraint",
                predicate: "http://ex.example/#state",
                valueExpr: {
                  type: "NodeConstraint",
                  values: [
                    {
                      type: "IriStemRange",
                      stem: "http://ex.example/#state",
                      exclusions: [
                        "http://ex.example/#state_resolved"
                      ]
                    }
                  ]
                },
                annotations: [
                  {
                    type: "Annotation",
                    predicate: "http://www.w3.org/2000/01/rdf-schem#label",
                    object: {
                      value: "State"
                    }
                  },
                  {
                    type: "Annotation",
                    predicate: "http://www.w3.org/2000/01/rdf-schem#description",
                    object: {
                      value: "the sit"
                    }
                  }
                ]
              },
              {
                type: "TripleConstraint",
                predicate: "http://ex.example/#reportedBy",
                valueExpr: {
                  type: "ShapeAnd",
                  shapeExprs: [
                    {
                      type: "NodeConstraint",
                      nodeKind: "iri"
                    },
                    "http://ex.example/#UserShape"
                  ]
                }
              },
              {
                type: "TripleConstraint",
                predicate: "http://ex.example/#reportedOn",
                valueExpr: {
                  type: "NodeConstraint",
                  datatype: "http://www.w3.org/2001/XMLSchema#dateTime"
                }
              },
              {
                type: "EachOf",
                expressions: [
                  {
                    type: "TripleConstraint",
                    predicate: "http://ex.example/#reproducedBy",
                    valueExpr: {
                      type: "ShapeAnd",
                      shapeExprs: [
                        {
                          type: "NodeConstraint",
                          nodeKind: "nonliteral"
                        },
                        "http://ex.example/#EmployeeShape"
                      ]
                    }
                  },
                  {
                    type: "TripleConstraint",
                    predicate: "http://ex.example/#reproducedOn",
                    valueExpr: {
                      type: "NodeConstraint",
                      datatype: "http://www.w3.org/2001/XMLSchema#dateTime"
                    }
                  }
                ],
                min: 0,
                max: 1,
                semActs: [
                  {
                    type: "SemAct",
                    name: "http://ex.example/#foo",
                    code: " asdfasdf "
                  }
                ]
              },
              {
                type: "TripleConstraint",
                predicate: "http://ex.example/#related",
                valueExpr: "http://ex.example/S1",
                min: 0,
                max: -1
              }
            ]
          }
        }
      }
    ],
    "@context": "http://www.w3.org/ns/shex.jsonld"
  };
}

function test_Extend3G() {
  const s1: Schema = {
    "@context": "http://www.w3.org/ns/shex.jsonld",
    type: "Schema",
    shapes: [
      {
        id: "http://a.example/A",
        type: "ShapeDecl",
        abstract: true,
        shapeExpr: {
          type: "ShapeAnd",
          shapeExprs: [
            { type: "NodeConstraint", pattern: "sA..........$" },
            {
              type: "Shape",
              expression: {
                type: "TripleConstraint",
                predicate: "http://a.example/p", min: 1, max: -1,
                valueExpr: {
                  type: "NodeConstraint",
                  values: [
                    { value: "0", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "1", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "2", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "3", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "4", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "5", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "6", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "7", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "8", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "9", type: "http://www.w3.org/2001/XMLSchema#integer" }
                  ]
                }
              }
            }
          ]
        }
      },
      {
        id: "http://a.example/B",
        type: "ShapeDecl",
        abstract: true,
        shapeExpr: {
          type: "ShapeAnd",
          shapeExprs: [
            { type: "Shape", extends: ["http://a.example/A"] },
            { type: "NodeConstraint", pattern: "s.B.........$" },
            {
              type: "Shape",
              expression: {
                type: "TripleConstraint",
                predicate: "http://a.example/p", min: 1, max: -1,
                valueExpr: {
                  type: "NodeConstraint",
                  values: [
                    { value: "0", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "1", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "3", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "4", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "5", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "6", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "7", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "8", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "9", type: "http://www.w3.org/2001/XMLSchema#integer" }
                  ]
                }
              }
            }
          ]
        }
      },
      { type: "ShapeDecl",
        id: "http://a.example/C",
        shapeExpr: {
          type: "ShapeAnd",
          shapeExprs: [
            { type: "NodeConstraint", pattern: "s..C........$" },
            {
              type: "Shape",
              expression: {
                type: "TripleConstraint",
                predicate: "http://a.example/p", min: 1, max: -1,
                valueExpr: {
                  type: "NodeConstraint",
                  values: [
                    { value: "0", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "1", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "2", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "4", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "5", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "6", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "7", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "8", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "9", type: "http://www.w3.org/2001/XMLSchema#integer" }
                  ]
                }
              }
            }
          ]
        } },
      {
        id: "http://a.example/D",
        type: "ShapeDecl",
        abstract: true,
        shapeExpr: {
          type: "ShapeAnd",
          shapeExprs: [
            { type: "Shape", extends: ["http://a.example/B"] },
            "http://a.example/C",
            { type: "NodeConstraint", pattern: "s...D.......$" },
            {
              type: "Shape",
              expression: {
                type: "TripleConstraint",
                predicate: "http://a.example/p", min: 1, max: -1,
                valueExpr: {
                  type: "NodeConstraint",
                  values: [
                    { value: "0", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "1", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "2", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "3", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "5", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "6", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "7", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "8", type: "http://www.w3.org/2001/XMLSchema#integer" },
                    { value: "9", type: "http://www.w3.org/2001/XMLSchema#integer" }
                  ]
                }
              }
            }
          ]
        }
      },
      {
        id: "http://a.example/E",
        type: "ShapeDecl",
        abstract: true,
        shapeExpr: {
          type: "ShapeAnd",
          shapeExprs: [
            { type: "NodeConstraint", pattern: "s....E......$" },
            {
              type: "Shape",
              extends: [
                "http://a.example/D"
              ],
              expression: {
                type: "TripleConstraint",
                predicate: "http://a.example/p",
                valueExpr: {
                  type: "NodeConstraint",
                  values: [
                    { value: "2", type: "http://www.w3.org/2001/XMLSchema#integer" }
                  ]
                }
              }
            }
          ]
        }
      },
      { type: "ShapeDecl",
        id: "http://a.example/F",
        shapeExpr: {
          type: "ShapeAnd",
          shapeExprs: [
            { type: "NodeConstraint", pattern: "s.....F.....$" },
            {
              type: "Shape",
              expression: {
                type: "TripleConstraint",
                predicate: "http://a.example/p",
                valueExpr: {
                  type: "NodeConstraint",
                  values: [
                    { value: "3", type: "http://www.w3.org/2001/XMLSchema#integer" }
                  ]
                }
              }
            }
          ]
        } },
      { type: "ShapeDecl",
        id: "http://a.example/G",
        shapeExpr: {
          type: "ShapeAnd",
          shapeExprs: [
            { type: "NodeConstraint", pattern: "s......G....$" },
            {
              type: "Shape",
              extends: [
                "http://a.example/E",
                "http://a.example/F"
              ],
              expression: {
                type: "TripleConstraint",
                predicate: "http://a.example/p",
                valueExpr: {
                  type: "NodeConstraint",
                  values: [
                    { value: "4", type: "http://www.w3.org/2001/XMLSchema#integer" }
                  ]
                }
              }
            }
          ]
        }
      }
    ]
  };
}
