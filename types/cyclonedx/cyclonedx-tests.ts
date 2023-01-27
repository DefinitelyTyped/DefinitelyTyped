// We ignore tslint and eslint for this file, because we want to have the JSON blob verbatim in here.

import { CycloneDXBom, CycloneDXBomV1_2, CycloneDXBomV1_3, CycloneDXBomV1_4 } from "cyclonedx";


// https://github.com/CycloneDX/bom-examples/blob/master/SBOM/dropwizard-1.3.15/bom.json
const sbom1_2: CycloneDXBomV1_2 = {
    "bomFormat": "CycloneDX",
    "specVersion": "1.2",
    "serialNumber": "urn:uuid:b4f2954f-a96d-4578-9509-1ae2d6476209",
    "version": 1,
    "metadata": {
      "timestamp": "2020-08-02T21:27:04Z",
      "tools": [{
        "vendor": "CycloneDX",
        "name": "CycloneDX Maven plugin",
        "version": "2.0.2",
        "hashes": [
          {
            "alg": "MD5",
            "content": "9a7ed39bba6c03f85a88fe114e24e4ad"
          },
          {
            "alg": "SHA-1",
            "content": "04b39fce560f8a9609e5b5db6e605fc2ba2c5a42"
          },
          {
            "alg": "SHA-256",
            "content": "78522e385d01fc74cb6410abb22b2b0ed9b47c1124635d955179402928820b43"
          },
          {
            "alg": "SHA-384",
            "content": "aff816bf691e4490d4e977386c21abaceb97b7ce502d88c35c52cfdb7a7e50310ecc70019582d8247a99626bc98ad16b"
          },
          {
            "alg": "SHA-512",
            "content": "500bd8dd0b821ef84c57643324e1d0eea1111aa9c7913bc35cb812f577128867c74c698b59fb603b358cc5545a708feb8dfca223023f81597658053e5317dd1a"
          },
          {
            "alg": "SHA3-256",
            "content": "9e45261eff969396b6a3e97a1ad65dced304f77765655c9a72a2904caa137a1e"
          },
          {
            "alg": "SHA3-384",
            "content": "fea472f4c2bdee7df208ad3d6a76125ce282a250eb960bc2171297a3ae2e4232b61540132b71b399e8ac6b9d0228113f"
          },
          {
            "alg": "SHA3-512",
            "content": "6ed81f58d9039e56d393165bd26c998584e364f7975e33f5c3008ac10d67ed190edcd196c5ce1554e23c4e1271f8aed631e07c3ea0de59a3457891d188e71b67"
          }
        ]
      }],
      "component": {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-parent@1.3.15",
        "group": "io.dropwizard",
        "name": "dropwizard-parent",
        "version": "1.3.15",
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard/dropwizard-parent@1.3.15"
      }
    },
    "components": [
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.core/jackson-annotations@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.core",
        "name": "jackson-annotations",
        "version": "2.9.10",
        "description": "Core annotations used for value types, used by Jackson data binding package.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "26c2b6f7bc704ccadc64c83995e0ff7f"
          },
          {
            "alg": "SHA-1",
            "content": "53ab2f0f92e87ea4874c8c6997335c211d81e636"
          },
          {
            "alg": "SHA-256",
            "content": "c876f2e85d0f108a34cdd11ccc9d8d7875697367efc75bf10a89c2c26aee994c"
          },
          {
            "alg": "SHA-384",
            "content": "558025c95151985777def5221719a2f7db7257db584cef8bc72add4d37ab4b5147c3b529462db2327a885564e0222f3e"
          },
          {
            "alg": "SHA-512",
            "content": "6b1ae1d7036ce2fff81bf8fc2a3a55e4ea7eb081de806ad05301d2eb126bed1dda487027f3ccfa618c488e680e2f5ff22bc3f106e7c0af27b34d327d83083b46"
          },
          {
            "alg": "SHA3-256",
            "content": "6ebca301e4a201a89630bd7235d27e48a795c7e6fca7727ac08f3cc87e6a5049"
          },
          {
            "alg": "SHA3-384",
            "content": "db6b4116cb7bd4aa3aa641a4238c421320620a04a9472b5bb4685050a7f80292bcb3e15d6b263dc409e801a2228e6954"
          },
          {
            "alg": "SHA3-512",
            "content": "8d33540c9df56541a0dca99ca51432a8d0d9642813377c62f6df5602af1c8d04c3d62cf24a9cde5c79fcd63b287de19cfc84ea475f8dd0ca037a72baed3d50ee"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.core/jackson-annotations@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-annotations"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/${project.artifactId}/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.google.guava/guava@24.1.1-jre?type=jar",
        "group": "com.google.guava",
        "name": "guava",
        "version": "24.1.1-jre",
        "description": "Guava is a suite of core and expanded libraries that include utility classes, google's collections, io classes, and much much more.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "361459dd415a18e4750b7fa0cdd9e747"
          },
          {
            "alg": "SHA-1",
            "content": "2e3014320a8005e3f3c1800cb246ed42db8cab81"
          },
          {
            "alg": "SHA-256",
            "content": "490c16878c7a2c22e136728ad473c4190b21b82b46e261ba84ad2e4a5c28fbcf"
          },
          {
            "alg": "SHA-384",
            "content": "aa0ae8fa9e5c0f009413d3742e49b5d112cf86c4816f55a30d393e50e66d91318104a4c0182a496acbcf0ec0d2b6eba1"
          },
          {
            "alg": "SHA-512",
            "content": "f7b02666ecd26e8865d4f6040a14a87d08e38124a625252594b05fa9d1a00e7c5a1fd30c5bd08ca9399bad50eef5fcaf7c95e17a59a2462ac42d7fdd4aaf516c"
          },
          {
            "alg": "SHA3-256",
            "content": "182f368980a8c526ec88c65acd877738fe2bad06b72ab9756edb66f2b281d083"
          },
          {
            "alg": "SHA3-384",
            "content": "b030c2d12b05a921348ba6831e9510264e701407bbcc882e986ddfd0de268689a2cb6c777767fd3193cad97948bdc253"
          },
          {
            "alg": "SHA3-512",
            "content": "245bcf15e331889bceb96faa2f9f67baf442fe1cb291601fa92a0e3327382a636d30788939d8f0ccd05a735b8149637e3d44c7e13a636a19950d0e7a33ae9517"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.google.guava/guava@24.1.1-jre?type=jar",
        "externalReferences": [
          {
            "type": "build-system",
            "url": "https://travis-ci.org/google/guava"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/google/guava/issues"
          },
          {
            "type": "vcs",
            "url": "https://github.com/google/guava"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.checkerframework/checker-compat-qual@2.0.0?type=jar",
        "group": "org.checkerframework",
        "name": "checker-compat-qual",
        "version": "2.0.0",
        "description": "Checker Qual is the set of annotations (qualifiers) and supporting classes used by the Checker Framework to type check Java source code. Please see artifact: org.checkerframework:checker",
        "hashes": [
          {
            "alg": "MD5",
            "content": "b6fb2610dacd211a3e2c3d8af1b60d0f"
          },
          {
            "alg": "SHA-1",
            "content": "fc89b03860d11d6213d0154a62bcd1c2f69b9efa"
          },
          {
            "alg": "SHA-256",
            "content": "a40b2ce6d8551e5b90b1bf637064303f32944d61b52ab2014e38699df573941b"
          },
          {
            "alg": "SHA-384",
            "content": "647d7bcbfaa000d0ed330eea0af4378e691303bc1d70fde3dc657c1cf0eceb0c2b0abd44745b879fdbd441131a056130"
          },
          {
            "alg": "SHA-512",
            "content": "fdecc20efd6943426e7f8bdfb8bef9d28258f9f934cf29090e2f5b297c501454606cc28593cd7d089a5c14f6d2dcafc59f4606053405d7f91d623a0e3202f4a8"
          },
          {
            "alg": "SHA3-256",
            "content": "6332c0be53250aaf67b95786e10337e1134ca645aed3b4cc596c68a3555c07fc"
          },
          {
            "alg": "SHA3-384",
            "content": "ce6f53807d1006ffc5b1a7db6581090d5a7ea40d5d6af4df8f2aa31b02e0a35b8441c97f8ebd3efc011798cb42e62198"
          },
          {
            "alg": "SHA3-512",
            "content": "74780f6c4d9e615c5be2f7149540721bfccd43e71b2d912054b98cf4f1a5ae5506497eca9c76f9e09f988d988bba8a1ec0588684379722044d894594dc787ea4"
          }
        ],
        "licenses": [
          {"license": {
            "name": "GNU General Public License, version 2 (GPL2), with the classpath exception",
            "url": "http://www.gnu.org/software/classpath/license.html"
          }},
          {"license": {"id": "MIT"}}
        ],
        "purl": "pkg:maven/org.checkerframework/checker-compat-qual@2.0.0?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "https://github.com/typetools/checker-framework.git"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.google.errorprone/error_prone_annotations@2.1.3?type=jar",
        "group": "com.google.errorprone",
        "name": "error_prone_annotations",
        "version": "2.1.3",
        "description": "Sonatype helps open source projects to set up Maven repositories on https://oss.sonatype.org/",
        "hashes": [
          {
            "alg": "MD5",
            "content": "97504b36cf871722d81a4b9e114f2a16"
          },
          {
            "alg": "SHA-1",
            "content": "39b109f2cd352b2d71b52a3b5a1a9850e1dc304b"
          },
          {
            "alg": "SHA-256",
            "content": "03d0329547c13da9e17c634d1049ea2ead093925e290567e1a364fd6b1fc7ff8"
          },
          {
            "alg": "SHA-384",
            "content": "03ff39082a3cd3c64d679c3df3be10abc3a87d6a576f6e21585ac6a18439d136608f9293e370186388fc5c8854adb3eb"
          },
          {
            "alg": "SHA-512",
            "content": "bd2135cc9eb2c652658a2814ec9c565fa3e071d4cff590cbe17b853885c78c9f84c1b7b24ba736f4f30ed8cec60a6af983827fcbed61ff142f27ac808e97fc6b"
          },
          {
            "alg": "SHA3-256",
            "content": "5c7b2ffc8d4073700647681ed44dd783049648aa8e174f37d2510339a65f5466"
          },
          {
            "alg": "SHA3-384",
            "content": "02e686b3fbe3c3a728d1d9ee67fe7ad5f32688314e24f63efb1666302650d86ccaef4304f5750cd155729404603cfa00"
          },
          {
            "alg": "SHA3-512",
            "content": "3f05def83905268da5044c8bd6fbf62b89499d77351b56a357de8d27ef872c6c300385a6bca009590d61be90a39a0f417c4d8358a13b09847ba0452ef416db06"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.google.errorprone/error_prone_annotations@2.1.3?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "https://github.com/google/error-prone"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.google.j2objc/j2objc-annotations@1.1?type=jar",
        "group": "com.google.j2objc",
        "name": "j2objc-annotations",
        "version": "1.1",
        "description": "A set of annotations that provide additional information to the J2ObjC translator to modify the result of translation.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "49ae3204bb0bb9b2ac77062641f4a6d7"
          },
          {
            "alg": "SHA-1",
            "content": "ed28ded51a8b1c6b112568def5f4b455e6809019"
          },
          {
            "alg": "SHA-256",
            "content": "2994a7eb78f2710bd3d3bfb639b2c94e219cedac0d4d084d516e78c16dddecf6"
          },
          {
            "alg": "SHA-384",
            "content": "8942363710e7473635a2c77ff82db8af1915cb6ac8429851b4acfa04f059183f8e3444dedff75a7da02698f2ee22a181"
          },
          {
            "alg": "SHA-512",
            "content": "a4a0b58ffc2d9f9b516f571bcd0ac14e4d3eec15aacd6320a4a1a12045acce8c6081e8ce922c4e882221cedb2cc266399ab468487ae9a08124d65edc07ae30f0"
          },
          {
            "alg": "SHA3-256",
            "content": "275370eeb5f02c15358168ea134c4eab1afed8d27750a8a326b9f9f506dfc9f2"
          },
          {
            "alg": "SHA3-384",
            "content": "a9906146d76704f64b1a1aad3d80be86e0d08a987fdb63d4d8d0399937e7e94076d9878a14593fb4465f3a5fccec0df5"
          },
          {
            "alg": "SHA3-512",
            "content": "d9e2a3943373e1eab933b45f49997b24e01466eb99a177c40f21c7107c9f21ebb135e14d191b0a5b699e3985d20de8e87662e92c0bf59e5e054d3da85fd777dd"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.google.j2objc/j2objc-annotations@1.1?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "http://svn.sonatype.org/spice/tags/oss-parent-7"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.codehaus.mojo/animal-sniffer-annotations@1.14?type=jar",
        "publisher": "Codehaus",
        "group": "org.codehaus.mojo",
        "name": "animal-sniffer-annotations",
        "version": "1.14",
        "description": "Animal Sniffer Parent project.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "9d42e46845c874f1710a9f6a741f6c14"
          },
          {
            "alg": "SHA-1",
            "content": "775b7e22fb10026eed3f86e8dc556dfafe35f2d5"
          },
          {
            "alg": "SHA-256",
            "content": "2068320bd6bad744c3673ab048f67e30bef8f518996fa380033556600669905d"
          },
          {
            "alg": "SHA-384",
            "content": "f84c3a6589e4fd49764595bad99ef2ebb443f1c9a5f11177a2073b54156989979b5e97fac591714f18304fbcf26bb1c6"
          },
          {
            "alg": "SHA-512",
            "content": "9e5e3ea9e06e0ac9463869fd0e08ed38f7042784995a7b50c9bfd7f692a53f0e1430b9e1367dc772d0d4eafe5fd2beabbcc60da5008bd792f9e7ec8436c0f136"
          },
          {
            "alg": "SHA3-256",
            "content": "9b624360f936e928bc63bf44e475d8fd052148c0d0cc56c3c88c26429b430c08"
          },
          {
            "alg": "SHA3-384",
            "content": "1821c7ba68f3b43cb25b3038fa732631d1db6063ecc5c7f84b31fdadfa8ca43434dc960e602af02a2891237cd90b8c29"
          },
          {
            "alg": "SHA3-512",
            "content": "5f0a62a96445cfeaf101d2ddc56472621f5c3dafc54ad4b230a373012833b7da83e96af7c07b60a586768361b3bce3f3626ed2cc09fbbd84e840e0714d6344ee"
          }
        ],
        "licenses": [{"license": {
          "id": "MIT",
          "url": "https://opensource.org/licenses/MIT"
        }}],
        "purl": "pkg:maven/org.codehaus.mojo/animal-sniffer-annotations@1.14?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "http://jira.codehaus.org/browse/MANIMALSNIFFER"
          },
          {
            "type": "vcs",
            "url": "http://fisheye.codehaus.org/browse/mojo/tags/animal-sniffer-parent-1.14"
          },
          {
            "type": "website",
            "url": "http://codehaus.org"
          },
          {
            "type": "build-system",
            "url": "http://bamboo.ci.codehaus.org/browse/MOJO"
          },
          {
            "type": "mailing-list",
            "url": "http://markmail.org/list/org.codehaus.mojo.dev"
          },
          {
            "type": "distribution",
            "url": "https://nexus.codehaus.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.google.code.findbugs/jsr305@3.0.2?type=jar",
        "group": "com.google.code.findbugs",
        "name": "jsr305",
        "version": "3.0.2",
        "description": "JSR305 Annotations for Findbugs",
        "hashes": [
          {
            "alg": "MD5",
            "content": "dd83accb899363c32b07d7a1b2e4ce40"
          },
          {
            "alg": "SHA-1",
            "content": "25ea2e8b0c338a877313bd4672d3fe056ea78f0d"
          },
          {
            "alg": "SHA-256",
            "content": "766ad2a0783f2687962c8ad74ceecc38a28b9f72a2d085ee438b7813e928d0c7"
          },
          {
            "alg": "SHA-384",
            "content": "ca0b169d3eb2d0922dc031133a021f861a043bb3e405a88728215fd6ff00fa52fdc7347842dcc2031472e3726164bdc4"
          },
          {
            "alg": "SHA-512",
            "content": "bb09db62919a50fa5b55906013be6ca4fc7acb2e87455fac5eaf9ede2e41ce8bbafc0e5a385a561264ea4cd71bbbd3ef5a45e02d63277a201d06a0ae1636f804"
          },
          {
            "alg": "SHA3-256",
            "content": "223fda9a89a461afaae73b177a2dc20ed4a90f2f8757f5c65f3241b0510f00ff"
          },
          {
            "alg": "SHA3-384",
            "content": "9903fd7505218999f8262efedb3d935d64bcef84aae781064ab5e1b24755466b269517cada562fa140cd1d417ede57a1"
          },
          {
            "alg": "SHA3-512",
            "content": "3996b5af57a5d5c6a0cd62b11773360fb051dd86a2ba968476806a2a5d32049b82d69a24a3c694e8fe4d735be6a28e41000cc500cc2a9fb577e058045855d2d6"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.google.code.findbugs/jsr305@3.0.2?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "https://code.google.com/p/jsr-305/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/joda-time/joda-time@2.10.1?type=jar",
        "publisher": "Joda.org",
        "group": "joda-time",
        "name": "joda-time",
        "version": "2.10.1",
        "description": "Date and time library to replace JDK date handling",
        "hashes": [
          {
            "alg": "MD5",
            "content": "488e6b287cde4fe6142c0da65495ab63"
          },
          {
            "alg": "SHA-1",
            "content": "9ac3dbf89dbf2ee385185dd0cd3064fe789efee0"
          },
          {
            "alg": "SHA-256",
            "content": "d269671656767e05a58dd634cbafc36ed70d417220b058d11c0d88dfd281616d"
          },
          {
            "alg": "SHA-384",
            "content": "19caac67b2aad2a35b09ed08d9d85031341fb1b71a06d5ef88c135317cac7f8a8ec3a67828dd33aa61954fe3a70815e5"
          },
          {
            "alg": "SHA-512",
            "content": "b92f67c1a8b293e3771bc2c56e5280f6a9cb523b38db7b1c8f56c427ec7147d9fec1fa425d25582060195a433005797294680e5e071fc49272575cc67f8fe58c"
          },
          {
            "alg": "SHA3-256",
            "content": "ace6d9b18b8de8281dde7a10070f08a11a2b1aca804e2031983d8cffc61a11a2"
          },
          {
            "alg": "SHA3-384",
            "content": "8fe33b8868712970e2f0d85cba83ed9262e76a316aa8f048c4816503593c79b640fae98188249335f856c70317e55d7c"
          },
          {
            "alg": "SHA3-512",
            "content": "1ae2b49ee5c492a7b83f2c72e5405db0e784b0a34dee7a8d634f6a1e11023bd87653903d4c8a31a964624eb6137db0f612a0d54d509e7a4c39b09c09d30309af"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/joda-time/joda-time@2.10.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://www.joda.org"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/content/repositories/joda-releases"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/JodaOrg/joda-time/issues"
          },
          {
            "type": "vcs",
            "url": "https://github.com/JodaOrg/joda-time"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-util@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-util",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "e73fff60736c50b06c0afcfb5d5f003c"
          },
          {
            "alg": "SHA-1",
            "content": "4e2a956ce355a40fb7e1c8d5772eab956a8f7f5c"
          },
          {
            "alg": "SHA-256",
            "content": "3bc2379c8d410405cab54636b1b8129a53e5227acc6cb286adea720fa73f03f0"
          },
          {
            "alg": "SHA-384",
            "content": "66706980d528541e1421fd38eb397744ee2563eab55a7edc809ab6ce2a49ef56d8c763aa24cc7343749adc7310ac25ee"
          },
          {
            "alg": "SHA-512",
            "content": "3a1b826aa9ff4fe9543aaff7b5f5d191164cc0a488365158502eb2c52b5e215ea96395767f2feed880376c3b569ea672414ef951667ea5628236920dbf2026bf"
          },
          {
            "alg": "SHA3-256",
            "content": "9cadcfa4c2db331cc05c069a66d1445d3a156605a75f8741eb80935834ae56a4"
          },
          {
            "alg": "SHA3-384",
            "content": "36444d8305fdd5dd7fb6ecd26e1b460c029fc92cfac9a86897f19563e252a0578ece835f481a31ce1cb908c985ea0ac7"
          },
          {
            "alg": "SHA3-512",
            "content": "df9fc0e1dcebe145a5cfff74ca87470923f0163f78ead0a93bf5b4f1c905ad5aaf7034891ae0cab005927cbbbea86546f1222e7f271c90cb4d3b0f745f8cb78e"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-util@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.core/jackson-core@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.core",
        "name": "jackson-core",
        "version": "2.9.10",
        "description": "Core Jackson processing abstractions (aka Streaming API), implementation for JSON",
        "hashes": [
          {
            "alg": "MD5",
            "content": "d62d9b1d1d83dd553e678bc8fce8f809"
          },
          {
            "alg": "SHA-1",
            "content": "66b715dec9dd8b0f39f3296e67e05913bf422d0c"
          },
          {
            "alg": "SHA-256",
            "content": "65fe26d7554a4409652c86ee38f2e94bc42934326d88b3c78c61f66ff2222c53"
          },
          {
            "alg": "SHA-384",
            "content": "3e4f0849423934d8f997ea3a0276234775122a6a88b0027d9279c6fdeb2a38ce00f3307091e6792dcaec96e04e7f07d6"
          },
          {
            "alg": "SHA-512",
            "content": "ea053f07b73b087fe81ef49d949ec812bf03e536a8a608d6b7c7ff9f001e6764e86125c5e99d46ba4002d7aab620f57527e246fe8ca754b47cfd812976a3e337"
          },
          {
            "alg": "SHA3-256",
            "content": "0cd87bff64e1569e1ae1fa6023caf005c17d5feb6f75c2bb587546d9e3e43efa"
          },
          {
            "alg": "SHA3-384",
            "content": "ef05bcccc119426c0067beb5dabcea8b8f6e3dff54240aa3cb232ee4ffe16c63197f71713e3001c96aeda888be6a19c7"
          },
          {
            "alg": "SHA3-512",
            "content": "936d596d972971e8fc02a6adc7ef11b9d3ac302fbc4134982f3bf128f61741b6bc8c34dd0d16d0ef52a7760a2ad5bcc20b26c4d9c6e8345e826b8b2a83f8fb4d"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.core/jackson-core@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-core"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/${project.artifactId}/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.core",
        "name": "jackson-databind",
        "version": "2.9.10",
        "description": "General data-binding functionality for Jackson: works on core streaming API",
        "hashes": [
          {
            "alg": "MD5",
            "content": "ff43d79c624b0f7d465542fee6648474"
          },
          {
            "alg": "SHA-1",
            "content": "e201bb70b7469ba18dd58ed8268aa44e702fa2f0"
          },
          {
            "alg": "SHA-256",
            "content": "49bb71a73fcdcdf59c40a1a01d7245f41d3a8ba96ea6182b720f0c6167241757"
          },
          {
            "alg": "SHA-384",
            "content": "566b13b88b9fe60d06a5ea57f38dc5b9a390414a8925d2d0f2ed2c200ad1168cc4228596f3bb3f1d0374f326ace610d5"
          },
          {
            "alg": "SHA-512",
            "content": "18db8ee61a24498803352c6fc40b83cc1f277033fd4cd743505e3bfa1660c84d8522a70b06401f834b405cbc6e686f6f5c4d54aff034751e9addbf1b4603b2c2"
          },
          {
            "alg": "SHA3-256",
            "content": "470b46a826c8edeb12852d9cbab9f5ab0c3a0b0989a7f2b0a8756c9a88aae89f"
          },
          {
            "alg": "SHA3-384",
            "content": "b5ff2d55727a9738de89c5275200a73cfa2a96814b9c2908854159106092a0e2cec6a14a5d536e1c5b95d72f4330431f"
          },
          {
            "alg": "SHA3-512",
            "content": "35616596eff2bafc2e047ce7cbfc4c0b8ce83af277953a2af6b41e43885c74b0809d14dd339290991c2ecb82e82190832b616bca0e3225aa113bfb483fa1b2b8"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-databind"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/${project.artifactId}/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-guava@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.datatype",
        "name": "jackson-datatype-guava",
        "version": "2.9.10",
        "description": "Add-on datatype-support module for Jackson (https://github.com/FasterXML/jackson) that handles Guava (http://code.google.com/p/guava-libraries/) types (currently mostly just collection ones)",
        "hashes": [
          {
            "alg": "MD5",
            "content": "bf3d62117a113e2ad3442aede0565365"
          },
          {
            "alg": "SHA-1",
            "content": "fe2fe045ca3bd6f9ea1bba5b03d228b4abf8c1cb"
          },
          {
            "alg": "SHA-256",
            "content": "f6f05294767905ebfe3e982ec456eb0982e52b8e89cfcf02f46722f87414e87e"
          },
          {
            "alg": "SHA-384",
            "content": "832983e64377dd6c32d7c36c183e4db369f51de82296b1f48ce5404035a42bff1590ca46a888d48050b7c4df930c05de"
          },
          {
            "alg": "SHA-512",
            "content": "d12fc51a0261d7af4319c2659b5168f7bbe91c235ecc013056ae444917d87281137df52bae9c4f345cf1874220f7b2aebc314cf74d4334dda96c3a3cca3de3da"
          },
          {
            "alg": "SHA3-256",
            "content": "d7d456bb103296753158c2e16328887d8b6f339e941f34328229c9c62a2f1cac"
          },
          {
            "alg": "SHA3-384",
            "content": "90efb491ae4c6220d8148d2ff6af507449933ae5a9988cf13322d01ae8557f82dbdbe74ebdbb0c0a5faeaa59805de699"
          },
          {
            "alg": "SHA3-512",
            "content": "c5741407e1a9054dc65f40fd6e70483c867a8b9847bfe7ff0e9fabe24be1827c75d7ce561100db82d25c7fd0f12c16ba18a3ca8038ba4a99da7fc394dc63b39f"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-guava@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-datatypes-collections"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/${project.artifactId}/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-jsr310@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.datatype",
        "name": "jackson-datatype-jsr310",
        "version": "2.9.10",
        "description": "Add-on module to support JSR-310 (Java 8 Date & Time API) data types.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "8353db784cc75e2ef48439c89ffb962b"
          },
          {
            "alg": "SHA-1",
            "content": "bf7ea35ca4fafa385701580163ef983622e0bfb1"
          },
          {
            "alg": "SHA-256",
            "content": "a86f035a641f1a36aebacce8415e14568ce5b0088e3ad5b8cf3ea3c9c0c5b64e"
          },
          {
            "alg": "SHA-384",
            "content": "e5cda21dc335edd70694fdba0937ac655e1303fc23fb3fe60991e8393029f4fbecaa5ec964a6194e6fbfc21ece9fb70f"
          },
          {
            "alg": "SHA-512",
            "content": "c9e27a5a2c7a7edacdacc2cd93371561ed991e85027e06820004bc47802f32df3aa99fe6d94667805c7862467fcc9e4e0555f1e5a3317c239e8ec0f37fc48b89"
          },
          {
            "alg": "SHA3-256",
            "content": "ee3952b4ffb44ea67445ed736ce33410ed631146ab47071c5fa4ae578623c446"
          },
          {
            "alg": "SHA3-384",
            "content": "abb733ee65aa082cc8472d28326e7382a344017c79f310e06708149f2d5ddf6c1d3812dd7023fe03a206b67fdc88910d"
          },
          {
            "alg": "SHA3-512",
            "content": "434938cf7a81ea81511bbf14a0942eaa790c71ab2e4a5e3049dfbb5cc1523034eacd0d14d0b520e88155376b4213129cc59cec21a2a93940b7fba5658d46c8f0"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-jsr310@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/jackson-modules-java8/issues"
          },
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-modules-java8"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-jdk8@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.datatype",
        "name": "jackson-datatype-jdk8",
        "version": "2.9.10",
        "description": "Add-on module for Jackson (http://jackson.codehaus.org) to support JDK 8 data types.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "e35c18c99ad1737571b1c8004ca8528d"
          },
          {
            "alg": "SHA-1",
            "content": "6aa764caf0a275d98b8765f6687bd4ec6c8cb9eb"
          },
          {
            "alg": "SHA-256",
            "content": "b305510c0fec81480cbc3516948f9ac5b326811e35c4b6563d2ccfe330079db6"
          },
          {
            "alg": "SHA-384",
            "content": "92170dc0e661a37be7e9c5618f79157463881e0ee54487154960787184860fae73de5c1341cf6e02e62992c161b378c2"
          },
          {
            "alg": "SHA-512",
            "content": "e537db4253733d8ca0e93e6245c2f25eef366333480a5fd0901603e69a8cf92dd69ec0ffa813c2fef685849f383b7e3850b2b286d255486192f7ff9698fc6c46"
          },
          {
            "alg": "SHA3-256",
            "content": "768bc29f9f15aa07b9c2294d3c3b1bf06396b507397a6b1da2515eefbbc85172"
          },
          {
            "alg": "SHA3-384",
            "content": "47c9b1bcc90d63b5d6bc6b9c4d23e4a042c3b048edd06f925c4d96b9a0d7cbbfcd1c4455c07084be9c8e13febf9b7f89"
          },
          {
            "alg": "SHA3-512",
            "content": "734b59492a053eec994840092c8e4f4d703e03b481d8a603b0d934b4fab25261fd98504f72fd0512705a8735dde4b36299c2295f0359afb0f18d129c0dfc70c5"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-jdk8@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/jackson-modules-java8/issues"
          },
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-modules-java8"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.module/jackson-module-parameter-names@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.module",
        "name": "jackson-module-parameter-names",
        "version": "2.9.10",
        "description": "Add-on module for Jackson (http://jackson.codehaus.org) to support introspection of method/constructor parameter names, without having to add explicit property name annotation.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "e8835d22f3153408ace94284be8fa821"
          },
          {
            "alg": "SHA-1",
            "content": "dc8c36832c229df0209dfc98fab5be36cb99af5f"
          },
          {
            "alg": "SHA-256",
            "content": "2b14de63be1abc99d25c1cdc8ca9003dd0e345e87f5d869588c5981f75cffc8a"
          },
          {
            "alg": "SHA-384",
            "content": "55c7f2fd253a0471d701bc2d961f8f76004a1bfca49c62f81be765630d134b54e882f456715e911a34f8370514e35f12"
          },
          {
            "alg": "SHA-512",
            "content": "452daf576e303ec15480750844e9a49715670ea9b7fa44d3a3d69ef4c90d7177583daabfc25d2a938e0015bba0c21c5fa71c175d2a0a95f3d6f13a92a3a6d611"
          },
          {
            "alg": "SHA3-256",
            "content": "68f9053afc670c7ef2b042f62e7ac34dc7cf5c65fdc2e178b31970c64f0e9353"
          },
          {
            "alg": "SHA3-384",
            "content": "137f4bc4afac9a0bcf9f5108e653146cae46539bd1bfb074299d95230f676934f2472959c338749ef820b285c01caf9c"
          },
          {
            "alg": "SHA3-512",
            "content": "10bdc0751a0dd140f35dd69045dbc1beea08f65d6ce773dcc2c888af4fc013f8af4c09bcb45e1e36c65b86e7e3cca9775c5da472184af784aa577a952c74c073"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.module/jackson-module-parameter-names@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/jackson-modules-java8/issues"
          },
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-modules-java8"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.module/jackson-module-afterburner@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.module",
        "name": "jackson-module-afterburner",
        "version": "2.9.10",
        "description": "Jackson (https://github.com/FasterXML/jackson) extension module used to enhance performance using bytecode generation to replace use of Reflection for field access and method calls",
        "hashes": [
          {
            "alg": "MD5",
            "content": "eb3073cbfad846a44d81df8bc31c8bf9"
          },
          {
            "alg": "SHA-1",
            "content": "6cca4a73cb54aa8631775023ca8cc37626373cc8"
          },
          {
            "alg": "SHA-256",
            "content": "6d8dd1bdaa13a1e2239e9d8fc008066b02d6fc7d79166fd73e4c3b6e1856ad14"
          },
          {
            "alg": "SHA-384",
            "content": "f6264c5f1e5f5c1ad614439cb0fb98097cb68ec7e6badc02e27af1ad1cc926103355892fa75b21593bb571e5dfde579b"
          },
          {
            "alg": "SHA-512",
            "content": "b56f7485f72c2225cd276e6955e154bae31849a394f5f03ee5d205075a154c27417d1cd7c071c9ba12a7712e23f7b6e8da368aa12acecf53c5c28a5376d620e1"
          },
          {
            "alg": "SHA3-256",
            "content": "488cf9674f84c7d221e4f5955d45f6fc008bca1bd4abf2134d91578a9c1bc0aa"
          },
          {
            "alg": "SHA3-384",
            "content": "983f18d91b111b99233bcaf96a12d98dece02feac3d7b72ad094677adf22ac01f20567f4b11de7995bb02da158e56145"
          },
          {
            "alg": "SHA3-512",
            "content": "d2324aca720bf6816274e93186fdf7d0eaefce8859685dc5c76a96fa8696cd104d64787598bd94473619aa0b89406dac1da8cc697b05104491b8017a54d95e1f"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.module/jackson-module-afterburner@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/jackson-modules-base/issues"
          },
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-modules-base"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-joda@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.datatype",
        "name": "jackson-datatype-joda",
        "version": "2.9.10",
        "description": "Add-on module for Jackson (http://jackson.codehaus.org) to support Joda (http://joda-time.sourceforge.net/) data types.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "7ef56a5376978b3befc264d5c7f690ba"
          },
          {
            "alg": "SHA-1",
            "content": "b8b45ff38fb46eaf8bdf19586743a4f446c485fd"
          },
          {
            "alg": "SHA-256",
            "content": "ec60ff466ec6bf489e58cf83bb012dd3d2735eb581be47113b17b1ce6499cdd8"
          },
          {
            "alg": "SHA-384",
            "content": "9a117ce32a8db13d9baa7dd3483103adf7b44aac2d068379b7a8d44db007c5afb2b67e654089adf97b268bf35945d709"
          },
          {
            "alg": "SHA-512",
            "content": "589f9ef55f9aef7b2e4c1fe45bad157e566042f304989ffe8257a5547426c7dea281326cf66cb1af84add2cb0531b623d04bc15d9e3ac0da25052f8c2109ceec"
          },
          {
            "alg": "SHA3-256",
            "content": "7a4e62a859262aec2ae33d7b6ec5b0ddadcf0897c1a90984cbdd82f8e2c8abb2"
          },
          {
            "alg": "SHA3-384",
            "content": "9bdd07e885eccadbd5af78fe29044a8ea44f134ba1e9897f024d87150d6fd8043c4e23b8c4d836f8fe32692030d967f1"
          },
          {
            "alg": "SHA3-512",
            "content": "bf11f541461a5ab4fbb3372d8c8d617a7b20a2dda00d8af733ac8d496cf4a7e1f7f422d90d11b17b7d783ed2a25f4323046468c264ea204bd672adff82a3477a"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-joda@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-datatype-joda"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/${project.artifactId}/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.slf4j/slf4j-api@1.7.26?type=jar",
        "publisher": "QOS.ch",
        "group": "org.slf4j",
        "name": "slf4j-api",
        "version": "1.7.26",
        "description": "The slf4j API",
        "hashes": [
          {
            "alg": "MD5",
            "content": "60ec8751be37d54a2aa1b6178f87b968"
          },
          {
            "alg": "SHA-1",
            "content": "77100a62c2e6f04b53977b9f541044d7d722693d"
          },
          {
            "alg": "SHA-256",
            "content": "6d9e5b86cfd1dd44c676899285b5bb4fa0d371cf583e8164f9c8a0366553242b"
          },
          {
            "alg": "SHA-384",
            "content": "09457f1d7bb48746a7f25722a71ffe63d7c893e38caff3ea67ce79992dee52bf20edb9e38c153147da2c38bc94d4c9bd"
          },
          {
            "alg": "SHA-512",
            "content": "a944468440a883bb3bde1f78d39abe43a90b6091fd9f1a70430ac10ea91b308b2ef035e4836d68ba97afdba2b04f62edece204278aaa416276a5f8596f8688af"
          },
          {
            "alg": "SHA3-256",
            "content": "195320dbd33e0ecc96b7c23818454658870c7f4c7bb746dae4516bc4983ab158"
          },
          {
            "alg": "SHA3-384",
            "content": "4502b87772a1e1cbce3fbdf64dd1423f2880b89b72306f07ae39d7a2819d4a654a9cefe2d7b4e1abbb6d86787cc630c0"
          },
          {
            "alg": "SHA3-512",
            "content": "830b0c50cdd9f45cfe4be31f0c775f632399060db58050ce702e476321ef29dcc17f49f872e7023e995c6ee1c2e06f2f1ea115aa45807569ecef83af3385f5cc"
          }
        ],
        "licenses": [{"license": {
          "id": "MIT",
          "url": "https://opensource.org/licenses/MIT"
        }}],
        "purl": "pkg:maven/org.slf4j/slf4j-api@1.7.26?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.qos.ch"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "https://github.com/qos-ch/slf4j"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.hibernate/hibernate-validator@5.4.3.Final?type=jar",
        "group": "org.hibernate",
        "name": "hibernate-validator",
        "version": "5.4.3.Final",
        "description": "Hibernate's Bean Validation (JSR-303) reference implementation.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "ccae8426d40e4fa16ecde928b84965f6"
          },
          {
            "alg": "SHA-1",
            "content": "7c3d91629e81937b33dffd5b170956ef9c76af97"
          },
          {
            "alg": "SHA-256",
            "content": "8abc0fb282075e145efe50d742f4512bb1f2c0222e78e7562f34f8809cf22d25"
          },
          {
            "alg": "SHA-384",
            "content": "a2b9aee42e3540977f8cbbec7494dfafc6bd70af6527f682dd06adac90a0596105720127764a2c6469249ffc081d6fe0"
          },
          {
            "alg": "SHA-512",
            "content": "38c1bc5692588fabc86904f75dd3481ca13be43bfda2f33278cb91a0ae229c7abd0f095989fa23e25b78aff51b2b7232f271579e13bd062595e498f9c92ea830"
          },
          {
            "alg": "SHA3-256",
            "content": "176d9129f2812df9a71514c72d0ffe1efb86ceb73310ebeee2b416bf752c65f4"
          },
          {
            "alg": "SHA3-384",
            "content": "93ba4eba2352c54dd181d720f8cfab117d11ab37c7f7d56a7adfc27798fd23d7bd467a32e7ee645d274b52ba726f9c39"
          },
          {
            "alg": "SHA3-512",
            "content": "0fec7612fa9d4698e183cc954381e172a3f8cf188a1b2e0518a39f9cd4cb15163720183d306d050757e2d979a3a1d224a3edd7e9c2ee59b938df48e4f4eb1342"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.hibernate/hibernate-validator@5.4.3.Final?type=jar",
        "externalReferences": [
          {
            "type": "build-system",
            "url": "http://ci.hibernate.org/view/Validator/"
          },
          {
            "type": "distribution",
            "url": "https://repository.jboss.org/nexus/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://hibernate.atlassian.net/projects/HV/summary"
          },
          {
            "type": "vcs",
            "url": "http://github.com/hibernate/hibernate-validator"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/javax.validation/validation-api@1.1.0.Final?type=jar",
        "group": "javax.validation",
        "name": "validation-api",
        "version": "1.1.0.Final",
        "description": "Bean Validation API",
        "hashes": [
          {
            "alg": "MD5",
            "content": "4c257f52462860b62ab3cdab45f53082"
          },
          {
            "alg": "SHA-1",
            "content": "8613ae82954779d518631e05daa73a6a954817d5"
          },
          {
            "alg": "SHA-256",
            "content": "f39d7ba7253e35f5ac48081ec1bc28c5df9b32ac4b7db20853e5a8e76bf7b0ed"
          },
          {
            "alg": "SHA-384",
            "content": "c5c2853c8d811def0417e2c2f2e91468979008637d5e87441980af17c86e17ac1b59ea0587a70f376d40ca7a99d047f9"
          },
          {
            "alg": "SHA-512",
            "content": "bc137c5f7fa6b7092f9fc233d8be7d21d6767f8aa51c2e934b73692c82d28dbb410f55674d7b5a0e1523b514654339277b535b7f5bb01d457a11aba2eca3bbed"
          },
          {
            "alg": "SHA3-256",
            "content": "469fa33a7d6854ac73627c8b4d281165c26dbcb21e645df792c3144453ab3129"
          },
          {
            "alg": "SHA3-384",
            "content": "ba17c332df426d79dd8b73032860e9ce64a984b65d54fd04e5598095b2fb05e757062d469bf3ec67d05d0ff8978d3f13"
          },
          {
            "alg": "SHA3-512",
            "content": "a042781692aaaa9458be722d0437484c5f1fd8f3f4955c00008224caebeb671ab93740052599ce2f5feab8d7ec712c72786492f7c7ca1c27c25425545b05a91e"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/javax.validation/validation-api@1.1.0.Final?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "https://repository.jboss.org/nexus/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "http://opensource.atlassian.com/projects/hibernate/browse/BVAL"
          },
          {
            "type": "vcs",
            "url": "https://github.com/beanvalidation/beanvalidation-api"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jboss.logging/jboss-logging@3.3.0.Final?type=jar",
        "publisher": "JBoss by Red Hat",
        "group": "org.jboss.logging",
        "name": "jboss-logging",
        "version": "3.3.0.Final",
        "description": "The JBoss Logging Framework",
        "hashes": [
          {
            "alg": "MD5",
            "content": "bc11af4b8ce7138cdc79b7ba8561638c"
          },
          {
            "alg": "SHA-1",
            "content": "3616bb87707910296e2c195dc016287080bba5af"
          },
          {
            "alg": "SHA-256",
            "content": "e0e0595e7f70c464609095aef9e47a8484e05f2f621c0aa5081c18e3db2d498c"
          },
          {
            "alg": "SHA-384",
            "content": "90434309db295c401fd2c62bbaec1a9c724d24128a2db1f940a453572fb99b8ff02c38ba122d8ab06e3f7a3a802e3d12"
          },
          {
            "alg": "SHA-512",
            "content": "6cd839a07c55a75befa9a95c7cb2e4a87445432d475bc747410fce625ad4496ee5cc6631a445420940ef1cb408d74873980504e4d785d8ec851223301a76807b"
          },
          {
            "alg": "SHA3-256",
            "content": "12fa4c6092728e4d1d780db85e3567ac16a8ec515daac930326513a471f60bd4"
          },
          {
            "alg": "SHA3-384",
            "content": "4108070133863a249a03dbdfaeed146bc73f4afbfeb9370d28400063bb49bc0411cdc6e856dd30368ba95b65c1773850"
          },
          {
            "alg": "SHA3-512",
            "content": "3f2a0f9e1ce18e1fce8b658a9ce7603eae6a2eeb96b8c26c0a49fde515ea97b319e94f48617fdbd8b102cd51c6a3c957528b456b821e2287ac1b35a3442c35c6"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.jboss.logging/jboss-logging@3.3.0.Final?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "https://github.com/jboss-logging/jboss-logging"
          },
          {
            "type": "website",
            "url": "http://www.jboss.org"
          },
          {
            "type": "issue-tracker",
            "url": "https://issues.jboss.org/"
          },
          {
            "type": "mailing-list",
            "url": "http://lists.jboss.org/pipermail/jboss-user/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml/classmate@1.4.0?type=jar",
        "publisher": "fasterxml.com",
        "group": "com.fasterxml",
        "name": "classmate",
        "version": "1.4.0",
        "description": "Library for introspecting types with full generic information including resolving of field and method types.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "85716d3adddffaaacb5e316be6681bf0"
          },
          {
            "alg": "SHA-1",
            "content": "291658ac2ce2476256c7115943652c0accb5c857"
          },
          {
            "alg": "SHA-256",
            "content": "2829acc59abf4aa6b72579697a0391c0fc69df7772ae59c58e0237f909cd6803"
          },
          {
            "alg": "SHA-384",
            "content": "21980854984d0473a8a768fa462e9161d45819d132353b3d3ecda3ff9398a6280a7ca89194c49bad6fa23133fe4ff494"
          },
          {
            "alg": "SHA-512",
            "content": "0bb96809e508b3ec20f8da070cdf5c795b71e17311a1a7d09818a93410ceb60cbbd95482c2d13bb920d391f5a5eee3a959cf739533a94f6539775458fe7229d0"
          },
          {
            "alg": "SHA3-256",
            "content": "2cb64a48cd3ca0136553131ce87fe52d5a0f322334d65fbab60132df09d3c8d6"
          },
          {
            "alg": "SHA3-384",
            "content": "a175410b9c05f06018f15c26aa4fa14f795baa89ded038b14c63ac6c9f4266cab27b5b18f586b7ad9e86fc757427cb38"
          },
          {
            "alg": "SHA3-512",
            "content": "56fb69f960f9e15c7dedc17d8d762c03bbae850180c2911ace44c4b7e1f0ce4a6dcad784e6acf01d63cad81a2d3746e4863a8d43a4d78e620506bf125d9340ec"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml/classmate@1.4.0?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://fasterxml.com"
          },
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/java-classmate"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/${project.artifactId}/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish/javax.el@3.0.0?type=jar",
        "publisher": "GlassFish Community",
        "group": "org.glassfish",
        "name": "javax.el",
        "version": "3.0.0",
        "description": "Java.net - The Source for Java Technology Collaboration",
        "hashes": [
          {
            "alg": "MD5",
            "content": "9b413b6b4c57f68cc3e8649f754153f5"
          },
          {
            "alg": "SHA-1",
            "content": "dd532526e7c8de48e40419e6af1183658a973379"
          },
          {
            "alg": "SHA-256",
            "content": "5ed77b9150c1cb6bdc1a195bb536eef6eb65f46f4412e26c24288690ea8033ec"
          },
          {
            "alg": "SHA-384",
            "content": "5bcfb0b2079554befe374237b35fe7850cd4562822d7df80f7a40f19fb09c06fc83cada7f370017a94031c8a983b4911"
          },
          {
            "alg": "SHA-512",
            "content": "a31efb2e99fe2429c8f39dbd8b23fce7dc30c3945ad3e6011dd1495a63a74f1d5e8ac422735de37c01938c492832155b73941614e19e06145477f65f4bc9043f"
          },
          {
            "alg": "SHA3-256",
            "content": "6c59f62728693b7a7234a6c93d6329391633de19cd65753ddb74d78a1a79427b"
          },
          {
            "alg": "SHA3-384",
            "content": "a58346f2b2ef6fff843ab55aa74f8c7f8123260deec873b772fd8a3600012aee7a43160b1b748a4b22abb94de5b85804"
          },
          {
            "alg": "SHA3-512",
            "content": "7193e9af5274a89a3fa9e04dcb9790db5efd6abffc8d0549c2bb597f61237544e758f98b4aaf55dfad258697bbaf4e4583695f6f5c277c06e98cd9ce21265982"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/org.glassfish/javax.el@3.0.0?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://glassfish.org"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/EL_SPEC"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/el-spec/sources/source-code/show/tags/javax.el-3.0.0"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.javassist/javassist@3.24.1-GA?type=jar",
        "publisher": "Shigeru Chiba, www.javassist.org",
        "group": "org.javassist",
        "name": "javassist",
        "version": "3.24.1-GA",
        "description": "Javassist (JAVA programming ASSISTant) makes Java bytecode manipulation simple. It is a class library for editing bytecodes in Java.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "527cebd64b0f941d5058bae3d1726d06"
          },
          {
            "alg": "SHA-1",
            "content": "921b466d6a14a8edbe25923c973fd767fc71c045"
          },
          {
            "alg": "SHA-256",
            "content": "5d57ea5b0ec8cb46143dfe521f888b208028be126f274cc4f852e641755f1553"
          },
          {
            "alg": "SHA-384",
            "content": "2a5c4bff29eb88f6a88a98fab76a7f2b4599cab6cc3e8a3e03210a38f51b8cf699bf14a736aaf97e63236cd8007393b2"
          },
          {
            "alg": "SHA-512",
            "content": "b1920ad0b291ab4a7d5d6184e7a6fca91a27576560adc257e4d38a3122865cefa7081df46375a462fcd7e4bfe20c3eeeef140408922cad9cfabaa8c338be1056"
          },
          {
            "alg": "SHA3-256",
            "content": "793f21feb3c4c58edf94d49579b8cd658e44e792e05fefbc23f1b84b7170caf2"
          },
          {
            "alg": "SHA3-384",
            "content": "1f0ee92766bfa461812a17d095659ac84548d3f594ff7db36bba6433150f8b2b330aa41e11c519c44cba9acf6fa37166"
          },
          {
            "alg": "SHA3-512",
            "content": "94f77c5a3ef42bef47e44c9cb9c71a5eeae3b5f94bec53637e8ef3bb5b29b0675c02166241987ac3f3872be09d87bbcfe0235a55731735f4b787a8574714fd2e"
          }
        ],
        "licenses": [
          {"license": {"id": "MPL-1.1"}},
          {"license": {"id": "LGPL-2.1-only"}},
          {"license": {
            "id": "Apache-2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0"
          }}
        ],
        "purl": "pkg:maven/org.javassist/javassist@3.24.1-GA?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "https://repository.jboss.org/nexus/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://jira.jboss.org/jira/browse/JASSIST/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-jackson@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-jackson",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "cce5d50fb36cf2ccb1f6020cf2c53092"
          },
          {
            "alg": "SHA-1",
            "content": "498fdd1b14e0341fa4b2ed480520d632470709c0"
          },
          {
            "alg": "SHA-256",
            "content": "1ddb7e6852bcc605f52e5dd4927a532e6e4f6970e8477329cc0cf6e02bcb11bb"
          },
          {
            "alg": "SHA-384",
            "content": "2f704e0c7e148b745edb1dc3ca3509a1ed58bda69ed43d26f42743b28088c7bf7687aa863cf9a89341ac4f50f25a1efa"
          },
          {
            "alg": "SHA-512",
            "content": "54920733f634fff24fa42e16048e60cbcd8ca9e348c4dae5e8eb6d1606e36d86ba8c32f49a9fb00418a9e2038781599383cc3c1d01353d8e5117d4c366f414e5"
          },
          {
            "alg": "SHA3-256",
            "content": "6dfe904993c5350ef8f04f9eea9335ea5f5179e9d02b2cc057426f96a0aeb485"
          },
          {
            "alg": "SHA3-384",
            "content": "4336b9d8feffc730489b1d78a9e1e8470f0571f98a757ce27c8c57761a477b1c7b6bf52a1c4617f19abfe32cc8b8311f"
          },
          {
            "alg": "SHA3-512",
            "content": "d2e9bddc00edf43a43bc91ee0e74cbf3beff49627fc02fee1870888cc552a9e7a2a518149f0b628a744d5ae00a4f47b3912edba8081c0b5f40e3b289a7fe0822"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-jackson@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-validation@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-validation",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "0557207f6f05c684958ff0c524ed97de"
          },
          {
            "alg": "SHA-1",
            "content": "d82c4a2157cd8b4ed6f85d12fcc5f63e7f2ee9d2"
          },
          {
            "alg": "SHA-256",
            "content": "6141e64cfed3633ad729e9d343eac4bfa475232c90c83c178f02da2d4c3e7360"
          },
          {
            "alg": "SHA-384",
            "content": "46e28f4b70ed768e13aaae569ab36d40f168c8ddaa54bc0afdfdc71af376345f096bb88511897fb17b384937acd71d33"
          },
          {
            "alg": "SHA-512",
            "content": "e3f832e4b6ea092229b2ecbfad0790170a086b043be74c58cd2f0169cae4fc219d4a7163e6e581350efc7441dd8908e7cfe395b19c802e93834443eb45888d67"
          },
          {
            "alg": "SHA3-256",
            "content": "95187066ffe37d52916b0ec33bce13baa8d76afa80502c4526205fb3721c01bc"
          },
          {
            "alg": "SHA3-384",
            "content": "4cd4512f70295bb199947f719a1436ecf9910e3ecdc3237a7faa01465950bbef44de3be8dfc9b7118ee20dbfe4a22cb4"
          },
          {
            "alg": "SHA3-512",
            "content": "39a0130b80426db95faba737c484fb2e0c1db64f8e81e21cffcbd0b27b4dff4c4334cf9698b0c067549d0e8adaf7669dce867f2ad962c25f647b35829fbfee61"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-validation@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.dataformat/jackson-dataformat-yaml@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.dataformat",
        "name": "jackson-dataformat-yaml",
        "version": "2.9.10",
        "description": "Support for reading and writing YAML-encoded data via Jackson abstractions.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "ebecc5b67b96874c08068151fd89d0b5"
          },
          {
            "alg": "SHA-1",
            "content": "561275877edf6321692f29e66ae5ccc7b1664939"
          },
          {
            "alg": "SHA-256",
            "content": "338e27fd71a825c948c98a2a3fedd79bd14e6c7bcc9b6d21fd8b17abfd28bcc0"
          },
          {
            "alg": "SHA-384",
            "content": "4134d00264f7cddd3b47ed2b44453cb373ba1c11abf89b8f4054dfdd97b8ef2e2caf3a00493e3170614073de44962264"
          },
          {
            "alg": "SHA-512",
            "content": "6730698c771ee3308c57b8336c35c3c1d437c7ef2e8f1a6bc66a251404449ae7f531fb240c5c877097a5c85a99e6a77c885265d61ad0d8da18c68da13c89eea4"
          },
          {
            "alg": "SHA3-256",
            "content": "189e39704cf30896198937a59f48dca0230a882f0613ceb941241f327f4f1c2c"
          },
          {
            "alg": "SHA3-384",
            "content": "7cd9a7b3253fa55a1b2f6a73c4686042f78d71261b956ddc9ea3f3199e7125a54c2192c0488537d947dda73adb0a2123"
          },
          {
            "alg": "SHA3-512",
            "content": "336fa4689e758f35a45ebc5648f3bfb395bf8ff7387b783b7fa62d431e835760782df3c6f5c737224853970891eca22c69b990ad8d7b96e628002b5ef6a88305"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.dataformat/jackson-dataformat-yaml@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/jackson-dataformats-text/issues"
          },
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-dataformats-text"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.yaml/snakeyaml@1.23?type=jar",
        "group": "org.yaml",
        "name": "snakeyaml",
        "version": "1.23",
        "description": "YAML 1.1 parser and emitter for Java",
        "hashes": [
          {
            "alg": "MD5",
            "content": "64ec8bd26b6d5034a87ecb1c8ce0efdc"
          },
          {
            "alg": "SHA-1",
            "content": "ec62d74fe50689c28c0ff5b35d3aebcaa8b5be68"
          },
          {
            "alg": "SHA-256",
            "content": "13009fb5ede3cf2be5a8d0f1602155aeaa0ce5ef5f9366892bd258d8d3d4d2b1"
          },
          {
            "alg": "SHA-384",
            "content": "a9e45997a1376048e5708b36b732ca62665b5d0cd39980ad8b1da9e906a2ee6d99c8d2b3014452881d36a06c91ec2862"
          },
          {
            "alg": "SHA-512",
            "content": "8091467927dc88fe2741f85c6e429914f4306e7a1183e52090ccc7d617ca5279ba42b03ffc8cd1a914b6c3dc4151bd731757e72592e9c1b23346781936ac9fc7"
          },
          {
            "alg": "SHA3-256",
            "content": "18f63155a18c783a0d47afa987a0dcc39f688da527047ccd48c694810ac5adf2"
          },
          {
            "alg": "SHA3-384",
            "content": "7634b3d37b47dedb8ef87ead8eab2951333804baf1dd3baa63f3f6f2728c36d2e743a8be97fa6441ded1ecd399f57635"
          },
          {
            "alg": "SHA3-512",
            "content": "59d1edd895705b667a65c3bada2c1b6c4109f82a03a2a18878d3310ac6e41bb3e47f821e87ffdcd2d2320b2f63c13a8748214fa9ea851c7b0b4d8fca07250c8a"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.yaml/snakeyaml@1.23?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "https://bitbucket.org/asomov/snakeyaml/issues"
          },
          {
            "type": "vcs",
            "url": "https://bitbucket.org/asomov/snakeyaml/src"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.apache.commons/commons-lang3@3.8.1?type=jar",
        "publisher": "The Apache Software Foundation",
        "group": "org.apache.commons",
        "name": "commons-lang3",
        "version": "3.8.1",
        "description": "Apache Commons Lang, a package of Java utility classes for the classes that are in java.lang's hierarchy, or are considered to be so standard as to justify existence in java.lang.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "540b1256d887a6993ecbef23371a3302"
          },
          {
            "alg": "SHA-1",
            "content": "6505a72a097d9270f7a9e7bf42c4238283247755"
          },
          {
            "alg": "SHA-256",
            "content": "dac807f65b07698ff39b1b07bfef3d87ae3fd46d91bbf8a2bc02b2a831616f68"
          },
          {
            "alg": "SHA-384",
            "content": "72c6fd199936f06db886eba9dccd188e26afabf7b9e6744cea18f27e414abfe04d3d3f609f8505311a01f43e885bec1a"
          },
          {
            "alg": "SHA-512",
            "content": "fb0fe98385496a565678a000c26a3245082abfbf879cc29a35112b4bf18c966697a7a63bb1fd2fae4a42512cd3de5a2e6dc9d1df4a4058332a6ddeae06cdf667"
          },
          {
            "alg": "SHA3-256",
            "content": "4e708ddf8ed0c6dbd8c6bba07e06425b5d263d899884b91bf11f86ec0d6f8463"
          },
          {
            "alg": "SHA3-384",
            "content": "3b6eede7aaff2bbbf5133872b59e9c4932e60064951a68c219f128a8c3a2556c25c2c90a599b342ee3fdef25a745a474"
          },
          {
            "alg": "SHA3-512",
            "content": "f43e89519e803e976f7b4d756d934be802ab36077cf2dc38dd9aa901eaf7104e58157859f45ccef7b38e072007a60f17270923e2ed7eabd41a4c776dee1458e1"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.apache.commons/commons-lang3@3.8.1?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "http://issues.apache.org/jira/browse/LANG"
          },
          {
            "type": "vcs",
            "url": "https://git-wip-us.apache.org/repos/asf?p=commons-lang.git"
          },
          {
            "type": "build-system",
            "url": "https://builds.apache.org/"
          },
          {
            "type": "mailing-list",
            "url": "http://mail-archives.apache.org/mod_mbox/commons-user/"
          },
          {
            "type": "website",
            "url": "https://www.apache.org/"
          },
          {
            "type": "distribution",
            "url": "https://repository.apache.org/service/local/staging/deploy/maven2"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.apache.commons/commons-text@1.2?type=jar",
        "publisher": "The Apache Software Foundation",
        "group": "org.apache.commons",
        "name": "commons-text",
        "version": "1.2",
        "description": "Apache Commons Text is a library focused on algorithms working on strings.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "c0aec8d4d92fc9e1a4752884f5f880f0"
          },
          {
            "alg": "SHA-1",
            "content": "74acdec7237f576c4803fff0c1008ab8a3808b2b"
          },
          {
            "alg": "SHA-256",
            "content": "d4a57bbc1627da7c391308fd0fe910b83170fb66afd117236a5b111d2db1590b"
          },
          {
            "alg": "SHA-384",
            "content": "186c84c17a9430e2ef1f5288cd4b5ef3c4a80b8827d5676b7ce13a0d9b8bdab053e0750eeb989c7557b22f2958adf8dd"
          },
          {
            "alg": "SHA-512",
            "content": "97ca47f05b18a8dd67a253bae7d5ec6adab93a061c2565615773f0efc07382193c9ce29ed1f8abdd67dbe62b033e17bf2f71f67a3db2a99abb7aa3215b541c11"
          },
          {
            "alg": "SHA3-256",
            "content": "5527aa3ffcd1303fac2779f9908f3a39bd3745c03a840fbc106aa952d5a0a128"
          },
          {
            "alg": "SHA3-384",
            "content": "6cf581d91e7317cb01dac400353d4721677a909f54fc38d42080f42e993cc7b99cc6e2bc9f4965a5b884855ec121bb3a"
          },
          {
            "alg": "SHA3-512",
            "content": "1b87bf1800138c403b67c273346fc7ea721fac09903e8cf6b11f8cfa57f2f91c577000834ad1f38e2b21f695685ea6c03ae9bd21323fe4a7690c7dca3344e350"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.apache.commons/commons-text@1.2?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "http://issues.apache.org/jira/browse/TEXT"
          },
          {
            "type": "vcs",
            "url": "https://git-wip-us.apache.org/repos/asf?p=commons-text.git"
          },
          {
            "type": "build-system",
            "url": "https://builds.apache.org/"
          },
          {
            "type": "mailing-list",
            "url": "http://mail-archives.apache.org/mod_mbox/commons-user/"
          },
          {
            "type": "website",
            "url": "https://www.apache.org/"
          },
          {
            "type": "distribution",
            "url": "https://repository.apache.org/service/local/staging/deploy/maven2"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-logback@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-logback",
        "version": "4.0.5",
        "description": "An instrumented appender for Logback.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "45f97ce9788dad9744ae2e198e5a501b"
          },
          {
            "alg": "SHA-1",
            "content": "306d0d06b0940c6df49031e8dd750e635e4b170f"
          },
          {
            "alg": "SHA-256",
            "content": "89842f9df70d001835bd652c103b1d04d64e1c48bccf396defbdd791299c1903"
          },
          {
            "alg": "SHA-384",
            "content": "4ad2befe0f16a9de2742fab3e6d9cc02345ddf9e8cd86079557182cacc1cb8e3943060a613162858f450bd9aba725d08"
          },
          {
            "alg": "SHA-512",
            "content": "bde3d0313531986623fd422fee1506eaf17bd3c53318973c340e4d44ce0104943c5dfcddee6cc8d33cfcf0a0b2fb2aff2b3e653819b39c2c5b76676399683401"
          },
          {
            "alg": "SHA3-256",
            "content": "8233adad697b14559e578618be1ea2c99c907be87da1eab10a5ca9f397dbf46c"
          },
          {
            "alg": "SHA3-384",
            "content": "cb69a8a75ac704097bd1f29b330e20b8ed91306c4f59d9250f176c8eaed0d14c18932d9e626c7b574dcab77cac87633c"
          },
          {
            "alg": "SHA3-512",
            "content": "d4664cd4105ad99b2326da4b727dcf350dba261aa7b26aacb9a064efc1a3da7337988344e8c9d64e08ec34d1586410e465c58e0ec37b389b93c54c7c6ccfde35"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-logback@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-core@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-core",
        "version": "4.0.5",
        "description": "Metrics is a Java library which gives you unparalleled insight into what your code does in production. Metrics provides a powerful toolkit of ways to measure the behavior of critical components in your production environment.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "f5fb039e8ed41743d3b6590547d85894"
          },
          {
            "alg": "SHA-1",
            "content": "b81ef162970cdb9f4512ee2da09715a856ff4c4c"
          },
          {
            "alg": "SHA-256",
            "content": "e31f5bc2fc58dcacd0cf31f7eafa43d3b981873dac0d3f0ffebb145675f1c8a8"
          },
          {
            "alg": "SHA-384",
            "content": "233492a5a936ff5cb143a4b6fcfdf1b7adeedd28e60c2c77e46b3334e864174ea7c9c76796903c76999e4b2243d9d542"
          },
          {
            "alg": "SHA-512",
            "content": "5d553993bf5bbd985453bb69f0704997f624a6ef81aa126c7228fe3d2dd7ebe57e7eeb161067e19914a9f36c762ce2fa7be5e47d0fb4deb623a3fb82ed6a70f2"
          },
          {
            "alg": "SHA3-256",
            "content": "5ba7bcb9d456edb43cf67736e066d9558da57205f916c5ada7f5058b2f8cbc90"
          },
          {
            "alg": "SHA3-384",
            "content": "388c6d688f4b75d45108a537aba065668bc1f42276d2510cce9c97b6ed4e7d25e0c9670a8ff00c7ac84503b932dac083"
          },
          {
            "alg": "SHA3-512",
            "content": "fcb8a3e52da3f8e9f86c692d8d68661acfe2b6aeb29866325178f3732176e099d0c6c9933d187b0840cf632de154087ad0ae6e8daf2712bedaaaa5e9a4c97214"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-core@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.slf4j/jul-to-slf4j@1.7.26?type=jar",
        "publisher": "QOS.ch",
        "group": "org.slf4j",
        "name": "jul-to-slf4j",
        "version": "1.7.26",
        "description": "JUL to SLF4J bridge",
        "hashes": [
          {
            "alg": "MD5",
            "content": "2bb060120bc3feda3d964bf5be845fbf"
          },
          {
            "alg": "SHA-1",
            "content": "8031352b2bb0a49e67818bf04c027aa92e645d5c"
          },
          {
            "alg": "SHA-256",
            "content": "0f3b6dfbfb261e3e2b71ea88574452f36c46fec016063439eb8f60083291918e"
          },
          {
            "alg": "SHA-384",
            "content": "b0613eed60ce57dd0236ae9c7e244999c68b10946f545758c0ac0976af32d695e186ca7551c5fa537876d9d45d0880fe"
          },
          {
            "alg": "SHA-512",
            "content": "201d8fc50e94469cfddc79faa6d7492602243a13454dc58e42d6422f1e7f1d1b352474930bf13c1784c252721bee92a636723a1f75d3cb578fec200b42275e2a"
          },
          {
            "alg": "SHA3-256",
            "content": "dd6032a174bd7527a7195462617a613dbbb0dbbcebac49aca1c3fb2b4db79e3b"
          },
          {
            "alg": "SHA3-384",
            "content": "c95bee488fea4c5eeb6c3aa30d307d893d1e0366e47f8e93f171d60e7441a4378a58f6f3e1f486b5619c32f420b7e6a5"
          },
          {
            "alg": "SHA3-512",
            "content": "2bf9adba76cbd0541b1462e952cce50baedb6feac8d963f59db8374a895469d340f5787defeffefb48162a0171f54dbfe1d173de7ec08b080c01260611dd7e25"
          }
        ],
        "licenses": [{"license": {
          "id": "MIT",
          "url": "https://opensource.org/licenses/MIT"
        }}],
        "purl": "pkg:maven/org.slf4j/jul-to-slf4j@1.7.26?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.qos.ch"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "https://github.com/qos-ch/slf4j"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/ch.qos.logback/logback-core@1.2.3?type=jar",
        "publisher": "QOS.ch",
        "group": "ch.qos.logback",
        "name": "logback-core",
        "version": "1.2.3",
        "description": "logback-core module",
        "hashes": [
          {
            "alg": "MD5",
            "content": "841fc80c6edff60d947a3872a2db4d45"
          },
          {
            "alg": "SHA-1",
            "content": "864344400c3d4d92dfeb0a305dc87d953677c03c"
          },
          {
            "alg": "SHA-256",
            "content": "5946d837fe6f960c02a53eda7a6926ecc3c758bbdd69aa453ee429f858217f22"
          },
          {
            "alg": "SHA-384",
            "content": "2c34d2bc4c85beee3d82b7aff9f351615a1de9a4f1e262c6e891136a621a3ea27296fbac399398aa8c1fd857fa38393d"
          },
          {
            "alg": "SHA-512",
            "content": "bd1a7512647fe61b90cfd18bedf2a33f3f16f334f8f8ce947cdd353c0b0b7a7cce203070f0d2183f6583e0f2b2fe6e0b12eb93bd5b2dc29076e7b466447f6dc5"
          },
          {
            "alg": "SHA3-256",
            "content": "7e43423025fc6ebe94b4cc641dc60a4507f93dd1445214847a069595f7cb728e"
          },
          {
            "alg": "SHA3-384",
            "content": "f511c84d1434e12c1c220d0ec3300a8c5fa3f23b2026c74f2d63be08af02e209ebfa28bd4ca18b0c0557c1e3dba77359"
          },
          {
            "alg": "SHA3-512",
            "content": "76a7f8df50903e80c5455da2307705f1ce08e098b75d02c1e36cb8b06eb3dc18c4e93fbf4ed1dea143d73645a652b52bb26e789d1fa111866c54a57c2025049e"
          }
        ],
        "licenses": [
          {"license": {"id": "EPL-1.0"}},
          {"license": {
            "name": "GNU Lesser General Public License",
            "url": "http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html"
          }}
        ],
        "purl": "pkg:maven/ch.qos.logback/logback-core@1.2.3?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.qos.ch"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "https://github.com/ceki/logback"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/ch.qos.logback/logback-classic@1.2.3?type=jar",
        "publisher": "QOS.ch",
        "group": "ch.qos.logback",
        "name": "logback-classic",
        "version": "1.2.3",
        "description": "logback-classic module",
        "hashes": [
          {
            "alg": "MD5",
            "content": "64f7a68f931aed8e5ad8243470440f0b"
          },
          {
            "alg": "SHA-1",
            "content": "7c4f3c474fb2c041d8028740440937705ebb473a"
          },
          {
            "alg": "SHA-256",
            "content": "fb53f8539e7fcb8f093a56e138112056ec1dc809ebb020b59d8a36a5ebac37e0"
          },
          {
            "alg": "SHA-384",
            "content": "42a5975c9db68045fd2d662f5168df6b19e5e8b715401fd5786325a02f531b44f1cf4e64f69f5ef5bbef70929e1d6fd3"
          },
          {
            "alg": "SHA-512",
            "content": "9ad5df9055e74c1db67e10422774e740903477c821591702d2709a4c1f73e3fc3fa6b1a871b6985901817bc2bdeba916849035dc2bbf518f308637b0586e36f1"
          },
          {
            "alg": "SHA3-256",
            "content": "7d38586cfd6e1363970ac1811eb49dd9e535e2d2bf967118ce8f28592655ac24"
          },
          {
            "alg": "SHA3-384",
            "content": "5085a62b9616b811d2346c81aace07020cd7a8865046c4bffb0137f8120c46340741475d83a7c1b4fe1889cd83f774f5"
          },
          {
            "alg": "SHA3-512",
            "content": "0a47917a6adfaef45e1170ff419800a7c88771510c6d5744b081e0572f70d2e339a5bbdd9b0637c2ecfcdd49a095c856ec293e8a41bbd03ef9b5a67d42731e67"
          }
        ],
        "licenses": [
          {"license": {"id": "EPL-1.0"}},
          {"license": {
            "name": "GNU Lesser General Public License",
            "url": "http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html"
          }}
        ],
        "purl": "pkg:maven/ch.qos.logback/logback-classic@1.2.3?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.qos.ch"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "https://github.com/ceki/logback"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.slf4j/log4j-over-slf4j@1.7.26?type=jar",
        "publisher": "QOS.ch",
        "group": "org.slf4j",
        "name": "log4j-over-slf4j",
        "version": "1.7.26",
        "description": "Log4j implemented over SLF4J",
        "hashes": [
          {
            "alg": "MD5",
            "content": "0ca7c8107e86b7e251cf15d475db5183"
          },
          {
            "alg": "SHA-1",
            "content": "daeb21c5e35d77d550e721c4cf5aaa716496d31a"
          },
          {
            "alg": "SHA-256",
            "content": "81a1c31befb21e3975064f43e0b1692b7fc2dc5f6d8dc3b6baaa7b8c3e5ddd5b"
          },
          {
            "alg": "SHA-384",
            "content": "9cf0311a9f100b32365f71f6aaecd3592daf2d8d15a16b04652b1ae93289c4701362d871dcc04da5083a16f03a77d01f"
          },
          {
            "alg": "SHA-512",
            "content": "6ae099e1ad5526212f2758a9e16ce7027833e47dff9370c7dbc5317c43f0d3450f20a437ae1a97594382cd27b74c276cb0f3c32de0668b61daf874fb4d30bc90"
          },
          {
            "alg": "SHA3-256",
            "content": "7fe9883b0d6edce803b4942d53771c9e87735076e5ee162037bce3180e067c04"
          },
          {
            "alg": "SHA3-384",
            "content": "81e3b95f25e3217c6a1d464a32639c6e1cd720729d78a1445933201fda35be6a52f637c37f6ce3e15c634d032f3cdd58"
          },
          {
            "alg": "SHA3-512",
            "content": "349b75322aaf3d4fa035ed2c98c3f289ea6c2bef2bc6756b018df99536d99ceaa17b9192ce5bdde1a213ec75ecc60d11629189a5774b166e671a709e7f2df708"
          }
        ],
        "licenses": [{"license": {
          "name": "Apache Software Licenses",
          "url": "http://www.apache.org/licenses/LICENSE-2.0.txt"
        }}],
        "purl": "pkg:maven/org.slf4j/log4j-over-slf4j@1.7.26?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.qos.ch"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "https://github.com/qos-ch/slf4j"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.slf4j/jcl-over-slf4j@1.7.26?type=jar",
        "publisher": "QOS.ch",
        "group": "org.slf4j",
        "name": "jcl-over-slf4j",
        "version": "1.7.26",
        "description": "JCL 1.2 implemented over SLF4J",
        "hashes": [
          {
            "alg": "MD5",
            "content": "06ceba253db8a4d836921324015c9ca5"
          },
          {
            "alg": "SHA-1",
            "content": "33fbc2d93de829fa5e263c5ce97f5eab8f57d53e"
          },
          {
            "alg": "SHA-256",
            "content": "2800417ecc5c927cce2b8a2cd22f0933e4006023c4e4fb255985a27746f5573c"
          },
          {
            "alg": "SHA-384",
            "content": "fc2013cda82baba79fbc7b3e0adb3669107fd5d353f4781848269fe4353fed305f078c02b8801cf1a68b959695a9eaa8"
          },
          {
            "alg": "SHA-512",
            "content": "40c1c8a523687ba06041d5a3c8ae295ae57ea18c0909f106ae9154ee79eeec9d077f7e0c79cb977fdebf2c930c6972372850b528f94e69bb57e95124ff691359"
          },
          {
            "alg": "SHA3-256",
            "content": "8e61ec106e655eb957cf915a6a2ab96d9f78298598af0edb5526d66317695f69"
          },
          {
            "alg": "SHA3-384",
            "content": "d1460244db24fc651e5ecea9c5fbbe62f73f1e99aa7697334b883c54ca14fcc5d82603ebd64ffd9845ba5260acc427d3"
          },
          {
            "alg": "SHA3-512",
            "content": "bfb810653f89ac499283aa7d860f89369133a07b65398a4112a6f654d53cce6d4a74d2f45acd9ba669233604c94bd338247751171bb8f21d62a183bbe91ba90d"
          }
        ],
        "licenses": [{"license": {
          "id": "MIT",
          "url": "https://opensource.org/licenses/MIT"
        }}],
        "purl": "pkg:maven/org.slf4j/jcl-over-slf4j@1.7.26?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.qos.ch"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "https://github.com/qos-ch/slf4j"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-util@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-util",
        "version": "9.4.18.v20190429",
        "description": "Utility classes for Jetty",
        "hashes": [
          {
            "alg": "MD5",
            "content": "0e98accd79ef0f0709e67b32d1882712"
          },
          {
            "alg": "SHA-1",
            "content": "13e6148bfda7ae511f69ae7e5e3ea898bc9b0e33"
          },
          {
            "alg": "SHA-256",
            "content": "db2ae97679e4d9dd0b96e0e2e04423d41407977a87edfa0ed1714c44eb5c7aa1"
          },
          {
            "alg": "SHA-384",
            "content": "e1f4594a02303136bd9d01738675a049e170db96b9512a73185bc34a6fbce7063eaef45163cc12b0618db77432f96029"
          },
          {
            "alg": "SHA-512",
            "content": "e1994547ad741cfcc0776e856178c530687bd3f20354ebbaf4d10ed6c6773cf0b9d2201359ffaa9328606aaa7170c125433dfd83c40db8e03ad6f17d43753392"
          },
          {
            "alg": "SHA3-256",
            "content": "af0fd5e8b166a754626964f211eebf7e5bcff175dc852e5dd28b48d32437921b"
          },
          {
            "alg": "SHA3-384",
            "content": "32f0607bcf193f22f4cc51e92d701fb9aed1c271518c7c15ca3fcb0d43a9d1899357cec3cda0e045767c4b8e07f76b92"
          },
          {
            "alg": "SHA3-512",
            "content": "da788326e973cb92399d84ea58fd884a11a82666741514f2aefe150ed47809189ebd98553bbe7b56bde0d892b51294ddbf24af341f68a2854737622a6439356e"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-util@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-server@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-server",
        "version": "9.4.18.v20190429",
        "description": "The core jetty server artifact.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "b0bc6045c38e309d41f84d3c60fb31cd"
          },
          {
            "alg": "SHA-1",
            "content": "b76ef50e04635f11d4d43bc6ccb7c4482a8384f0"
          },
          {
            "alg": "SHA-256",
            "content": "2737c60b231e804082cdb68f1118a1aa179c8f92d50345c7444d96391ac005ce"
          },
          {
            "alg": "SHA-384",
            "content": "80992fd7673f6a48bb630b9459f1b1ed699146e2ffb9c01a3da9884bd0031f4dbffdc6b920dc803e668611f0297a5af6"
          },
          {
            "alg": "SHA-512",
            "content": "b16d05236e809d1494f67aeab195190faf5a301cb131ae7033c1d62bd0f4db41e025b18cb75e0c9f7cc8146debb2d34d006318c0bd0e65dcccce9cb176acbc4e"
          },
          {
            "alg": "SHA3-256",
            "content": "755dfbda1a8bd62b465a55c8bfd761412b81fa79fb0326c6835f0b009ea76c7c"
          },
          {
            "alg": "SHA3-384",
            "content": "9b0ba6760e99a5f85391e3f42524d623e09202c3024d6d1e3ceb3e3a5e05fd57d9773b04f758e89572e5136bc831f10b"
          },
          {
            "alg": "SHA3-512",
            "content": "bdfd84f7b1bfadce0fd4c918b00410ad596e66bd69433260439cebb516f4d44b55e1adbf96cc866ae3e9a8f96823772e2e6633c21bba41c1588067842b7540ee"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-server@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/javax.servlet/javax.servlet-api@3.1.0?type=jar",
        "publisher": "GlassFish Community",
        "group": "javax.servlet",
        "name": "javax.servlet-api",
        "version": "3.1.0",
        "description": "Java.net - The Source for Java Technology Collaboration",
        "hashes": [
          {
            "alg": "MD5",
            "content": "79de69e9f5ed8c7fcb8342585732bbf7"
          },
          {
            "alg": "SHA-1",
            "content": "3cd63d075497751784b2fa84be59432f4905bf7c"
          },
          {
            "alg": "SHA-256",
            "content": "af456b2dd41c4e82cf54f3e743bc678973d9fe35bd4d3071fa05c7e5333b8482"
          },
          {
            "alg": "SHA-384",
            "content": "8bf960fd053ef6ad1c3535824311f676b9ad537678b85f855dd5d6d726e391f8a7be9c9c76a8ae3ce8bfe671c1e2c942"
          },
          {
            "alg": "SHA-512",
            "content": "32f7e3565c6cdf3d9a562f8fd597fe5059af0cf6b05b772a144a74bbc95927ac275eb38374538ec1c72adcce4c8e1e2c9f774a7b545db56b8085af0065e4a1e5"
          },
          {
            "alg": "SHA3-256",
            "content": "8acc3481503989e1a78ad619bcbdc005b616c13736522b52e5ae5d782e8a0216"
          },
          {
            "alg": "SHA3-384",
            "content": "e8f3282c08ceeed02947a13e886a3d75a6ea63e4f869a0e0bcbcf622e7cbffc81ed7bc045e82820443b6572c897cc4cc"
          },
          {
            "alg": "SHA3-512",
            "content": "ab5f85d424640ddcf6fc13a41d12ffdee0be9508cd4cdc581168b31cf7917323f6e0d984a0631068e0e01c098098fe0037d1c4176352fd89ba3a4da5d641ca3d"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/javax.servlet/javax.servlet-api@3.1.0?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://glassfish.dev.java.net"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/SERVLET_SPEC"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/glassfish/sources/svn/show/tags/javax.servlet-api-3.1.0"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-http@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-http",
        "version": "9.4.18.v20190429",
        "description": "The Eclipse Jetty Project",
        "hashes": [
          {
            "alg": "MD5",
            "content": "0f5299204d64fb561a8062f594185dc6"
          },
          {
            "alg": "SHA-1",
            "content": "c2e73db2db5c369326b717da71b6587b3da11e0e"
          },
          {
            "alg": "SHA-256",
            "content": "a2626684486590535bc928a6a40c6915f99ffda96b7a14d4310bdda566b5aa73"
          },
          {
            "alg": "SHA-384",
            "content": "07f029e43e7e79a0104b24c73569c5b3d04a1d7d36bce4a9c9fab13d2a4a1b743453293faba1c211c761e4a05c270bd8"
          },
          {
            "alg": "SHA-512",
            "content": "93f9852cd4689993c06629ffba24b1dc9715bcf3dfb560088669459f9484373cd5541e81c18cfb3502c9ab62fab3a7061ee5d9afd0c17fc61fe23e25fa04a1c9"
          },
          {
            "alg": "SHA3-256",
            "content": "84caddcb2c12e244dc03f0f3f8ab41fdcb96ec95c5776c00664e8916f6bfea86"
          },
          {
            "alg": "SHA3-384",
            "content": "f0ff644525e9974e315b24785470abe5e45178a1a3bd8ad009e693d27db52c9b2b6bd36a5d6d8c728a826b539a327f14"
          },
          {
            "alg": "SHA3-512",
            "content": "08d0dba27f81c3b596d46728e01b3b1f0027d9271befab6ada56e6757ef7f64e700c242cc8f9000a2792bf5053c5c16126718d6f8fd1923331a7e3d00b3c2efb"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-http@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-io@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-io",
        "version": "9.4.18.v20190429",
        "description": "The Eclipse Jetty Project",
        "hashes": [
          {
            "alg": "MD5",
            "content": "d430c2038527a0788675049f9d48760e"
          },
          {
            "alg": "SHA-1",
            "content": "844af5efe58ab23fd0166a796efef123f4cb06b0"
          },
          {
            "alg": "SHA-256",
            "content": "f953810e6d5349a8c1101710bf99310e0bcd3bc43d819c06858c75f419b4cbd0"
          },
          {
            "alg": "SHA-384",
            "content": "3a9bcbdc17f37e6980a7b6868ed7565eb0b5122ce0f0ed73446518d1b319105ad403ac8613203611e0d8d1edded99e22"
          },
          {
            "alg": "SHA-512",
            "content": "2f7f9f8ecff8fceaa422923ed698f5945e2e4583898115ea97e2a69f2f4c7093f07c1f9e189af0ffd6b08b669074c9e3cdd5492e42aa2ba4f0bba3ad6db85c50"
          },
          {
            "alg": "SHA3-256",
            "content": "a6a1c14235256382171a33faf4e2869e65756b87e686e70e41aa34380fdeeac9"
          },
          {
            "alg": "SHA3-384",
            "content": "305c8301835d495fa3f2817ae124e38fa29d1c96f47e5eebede076e1fb8b2e6c46326fb8d347b1ba532535a99a3dc7ed"
          },
          {
            "alg": "SHA3-512",
            "content": "aff9eb92b24300c2395b5ee808c54abf4c8c97224bc819b0b5bbaa6977f5806037eeb34691f6b9d9534a454ae28f3e8e9b13bd0649369af5b331e80e4c703405"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-io@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-lifecycle@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-lifecycle",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "52e054873a8e62623e81231c43cd56a9"
          },
          {
            "alg": "SHA-1",
            "content": "f26a5a8be815680b9d6fcf4df7495c33ff403f80"
          },
          {
            "alg": "SHA-256",
            "content": "20abb321d0095312b8d618b30533d84b12f37d9c3e7bfc473ce205a56a8cf4a5"
          },
          {
            "alg": "SHA-384",
            "content": "d5c348b135b5543227c9df468767d11d039b48eb755ad109c7eabda26590dc2e1215434ec11157890e84e296804066f2"
          },
          {
            "alg": "SHA-512",
            "content": "fc9ae0ff1d4c94b2456777d6e7b68a8017ff13a04fb49f85344904f6b010fc638f33e8e6ebf9119a450232e5e74c70a8ed55b980afe47d827f320019ab9973a7"
          },
          {
            "alg": "SHA3-256",
            "content": "cba7094cc6a46821fab3edc413e5d07c36e78b7760ba6c5e44df94acaaca98e8"
          },
          {
            "alg": "SHA3-384",
            "content": "dc4a12cc455bcfadbd176a082a905c6516d1eb6cf6e5cf087ef918650c48e6efa909b033166e0270c2130c9fb9380046"
          },
          {
            "alg": "SHA3-512",
            "content": "daba93cc2420eab38f11389a1eabd408713855ea97772dd87d6be05cd8cf60de1e2de303785721daa85f61e246e75c4bbeaf7602a580d88b2585c090d8957dab"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-lifecycle@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-logging@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-logging",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "8f56476f15da17fb8aff8d06a8cd39c9"
          },
          {
            "alg": "SHA-1",
            "content": "3df1411464adf080b5ac7360926eacab3f5120d7"
          },
          {
            "alg": "SHA-256",
            "content": "fcaaf6bcb2f29a0443f4740d5515f6a8b12a0c38e626fa6a503d9bb685275a38"
          },
          {
            "alg": "SHA-384",
            "content": "a48a8f1baee705528a5ec839931e7954847c74b53c36f7e7e323228ae9a6784e46de331a2171adeea1f812c4b7ff36d1"
          },
          {
            "alg": "SHA-512",
            "content": "32435101cf0981814396444592a7d805d35d073fff7c06b2ae1551e6cc6ac7e7686cc740dec87a05a15026cc4d89b208986c770cbf999e3993980c8e4112db47"
          },
          {
            "alg": "SHA3-256",
            "content": "2d848583811a6d544b4212f63805bdf65b849da145e4fa3f6be66d387e34a5e5"
          },
          {
            "alg": "SHA3-384",
            "content": "5755bb323b767a5895afdb72cb67b201207725bdc52aa57bfcdf1bc5236ad3b44b941ca68c393326721dd439f270add0"
          },
          {
            "alg": "SHA3-512",
            "content": "2daa20182aeebbcd99ff706f08f3a10a68db0ff2874ed93811eb8922b71ca2bb516213ae53eff4efc412c5ea1a940268d9a832fe8e680151f5cacbfe62ec5844"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-logging@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.core/jersey-server@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.core",
        "name": "jersey-server",
        "version": "2.25.1",
        "description": "Jersey core server implementation",
        "hashes": [
          {
            "alg": "MD5",
            "content": "92dad916eab7a19c5398838a78ee9cab"
          },
          {
            "alg": "SHA-1",
            "content": "276e2ee0fd1cdabf99357fce560c5baab675b1a2"
          },
          {
            "alg": "SHA-256",
            "content": "4b9cdae8eae88b75762614b9a458f5aac47cf6486fe408206fc64e38b80469ae"
          },
          {
            "alg": "SHA-384",
            "content": "9ab615e0e2a0e469ab5185ac8015660e86daa993b3b87f25873d07c0b78a7736e820d25668e3a4b8db2df4f3304a8d35"
          },
          {
            "alg": "SHA-512",
            "content": "85d77edd81efcc32a6ac26ca91cc6a8f9f66083897f2b10de5f7576d1e869d96c64dcce4e52112341ffae1a73fff3b18eec466fc484e709ba581d1540fbe44ce"
          },
          {
            "alg": "SHA3-256",
            "content": "60be02edbd8f39c5c33726c0b9602c580a38e22b7c30cf98c0aea1bdfe713ef5"
          },
          {
            "alg": "SHA3-384",
            "content": "758d2e47918f38d9bb74c811291a708a9cf0fad3b02b514a7484b7d2f045fc69373f5c7ff62833ed519f10da1b723228"
          },
          {
            "alg": "SHA3-512",
            "content": "065c0c4b5a60ebc0e0ca53e6630e27f7678c762ba4cdf28f2b2cb7d0ac9cd96bf4a92dc6c2235d77d55931e0006f445debc2cc1098d4ddace06c07a08491ad43"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.core/jersey-server@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.core/jersey-common@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.core",
        "name": "jersey-common",
        "version": "2.25.1",
        "description": "Jersey core common packages",
        "hashes": [
          {
            "alg": "MD5",
            "content": "d1f25f421cafb38efb49e2fef0799339"
          },
          {
            "alg": "SHA-1",
            "content": "2438ce68d4907046095ab54aa83a6092951b4bbb"
          },
          {
            "alg": "SHA-256",
            "content": "4df653fc69d5feec7ad1928018f964e12a7513bcea7b5e8b1aa4b1f5a815815f"
          },
          {
            "alg": "SHA-384",
            "content": "4c009143f6dd28c4caee30dbad5c0b0e9aeaf609cffd2c0c08e59c81c264578bf95d1dff382ece7595041c43663109fd"
          },
          {
            "alg": "SHA-512",
            "content": "2c99617c7d5bbabd39902cd93e028e48ef3917f1017b7417873607681b0bfc31e8d5197bd06c587f64867944d81bb63c0201fe5df66962737d23fdfd7fe88fe0"
          },
          {
            "alg": "SHA3-256",
            "content": "d5d9d3bca931954bed7bf031b299f45e0e29c92e250501f46f12400e475aaf3e"
          },
          {
            "alg": "SHA3-384",
            "content": "e095f1ad1b9c4af4e2ea2d579079da5626ca4ded3da8955ff7b86895040b3b3d9df675e40d6c3ad75e0c5655015ee68d"
          },
          {
            "alg": "SHA3-512",
            "content": "dbd5ac4985d2c8e71e3606e491a7814e50ca6ccb1e3571e50073ddcf92bbf484e28ae0a4971d1e487df4d95a4f64016583e88891724a65d9c1c80f20ff7664fb"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.core/jersey-common@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.bundles.repackaged/jersey-guava@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.bundles.repackaged",
        "name": "jersey-guava",
        "version": "2.25.1",
        "description": "Jersey Guava Repackaged",
        "hashes": [
          {
            "alg": "MD5",
            "content": "08dc8642c4e990b054882cb4f422f88b"
          },
          {
            "alg": "SHA-1",
            "content": "a2bb4f8208e134cf2cf71dfb8824e42942f7bd06"
          },
          {
            "alg": "SHA-256",
            "content": "8a88a8ebae65cb4d77830b40f681bf742b55ec62e7a44cf91b8577a9396b9f81"
          },
          {
            "alg": "SHA-384",
            "content": "f61a949e06a1ae308da36e21e1b1c7aa6f3b87fe5a727288888ae596c5133ec5126d51acbbf4b7a71ba2221c4362bab8"
          },
          {
            "alg": "SHA-512",
            "content": "38a59b4e7bf60d373a266e08dbd1703cab87b519e128629aa81abf314cf849ee41a26f8c0404182c6f7364a3bde40eefa61c1be561276e141c4574faf988c5d9"
          },
          {
            "alg": "SHA3-256",
            "content": "0ffbb680d62fc28444cf2c2975cf2947d23bae403c30a381f610af5cf05ede86"
          },
          {
            "alg": "SHA3-384",
            "content": "3bf24e582cd417437211fc7430fbf1357c1489e41cd61b66254a40d086c9bc229439e0db7c59dd1cb7e39ccdf5315b35"
          },
          {
            "alg": "SHA3-512",
            "content": "847cca16e534072ddf9610dc0bd56166deade9aa4efaa3aec1717664b3546964cb0573e4970a38dee5537a09fab81077ea9bd35d988e7cb68b6ca137b31679ea"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.bundles.repackaged/jersey-guava@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.hk2/osgi-resource-locator@1.0.1?type=jar",
        "publisher": "GlassFish Community",
        "group": "org.glassfish.hk2",
        "name": "osgi-resource-locator",
        "version": "1.0.1",
        "description": "See http://wiki.glassfish.java.net/Wiki.jsp?page=JdkSpiOsgi for more information",
        "hashes": [
          {
            "alg": "MD5",
            "content": "51e70ad8fc9d1e9fb19debeb55555b75"
          },
          {
            "alg": "SHA-1",
            "content": "4ed2b2d4738aed5786cfa64cba5a332779c4c708"
          },
          {
            "alg": "SHA-256",
            "content": "775003be577e8806f51b6e442be1033d83be2cb2207227b349be0bf16e6c0843"
          },
          {
            "alg": "SHA-384",
            "content": "da613d26be5e79fbea42ff7d74c4a36769a56b5a7b53d371361dbf7d00952da3fec63b21e7fb373d8aeff3974552e84f"
          },
          {
            "alg": "SHA-512",
            "content": "e064a477d5b1f8c56b4741ba606eed764b779a5d9870b8c193771bf0d904350aed839ab21602dbf5f376f7208b8ca24f64504d73ec6a0c5c08c5f0abc7c466d4"
          },
          {
            "alg": "SHA3-256",
            "content": "c7cb2d64874992826818c594f02bf40f46d9ad4787d6575bfb656b35b7b6af0d"
          },
          {
            "alg": "SHA3-384",
            "content": "3820ad90b6dac08660228c27c57c2e1d5c3207d291f3d034ba6c7e903829677c27458c1426149317cb4965373a35a73b"
          },
          {
            "alg": "SHA3-512",
            "content": "5c57aa6eb98272226cbdebd803a5b11a27422340f47e5541a5bf6bb776f64bfcda548ffd345e900a7c7624b9a016aecacd8e009a13fe2c2cae86e8ff8e7289f2"
          }
        ],
        "licenses": [{"expression": "(CDDL-1.0 OR GPL-2.0-with-classpath-exception)"}],
        "purl": "pkg:maven/org.glassfish.hk2/osgi-resource-locator@1.0.1?type=jar",
        "externalReferences": [{
          "type": "website",
          "url": "https://glassfish.dev.java.net"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.core/jersey-client@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.core",
        "name": "jersey-client",
        "version": "2.25.1",
        "description": "Jersey core client implementation",
        "hashes": [
          {
            "alg": "MD5",
            "content": "cbc88e55529984d664eb6ef1b65b3684"
          },
          {
            "alg": "SHA-1",
            "content": "4d563b1f93352ee9fad597e9e1daf2c6159993c6"
          },
          {
            "alg": "SHA-256",
            "content": "10671e430dc7c841eb0bc54c9f3e265dbb60e9f85efaad71d1e39807057e405c"
          },
          {
            "alg": "SHA-384",
            "content": "9afcd9577b8836959c3adfb83f91100a21763e16812bf60860b04104ad296f988536cc902e15f99ddb9da9685d73d030"
          },
          {
            "alg": "SHA-512",
            "content": "2355cf157c2c6f6973db046b8eb9f0ac1fad6791e5e62457d37a2aa0d70c180a6dd8eacdf78b987bab5720091cc8197866ba1ac14b209b374db6389f187a0c58"
          },
          {
            "alg": "SHA3-256",
            "content": "88b865b79a07061bda2f0c1b57e4aea4555da1604946eccb83343ea665ac615e"
          },
          {
            "alg": "SHA3-384",
            "content": "082a60d42310ba705d385c4f5d0cf079d5d5516cd94d55090553f210e86bcce216d727d3fbeaf84e1d0626d12483a563"
          },
          {
            "alg": "SHA3-512",
            "content": "ab1297141ee25407b3aaf92ce2d7441aad23badc8d9b2e68e1bb143c7155f5861a273d816d4447ade4045dba027ba6264b22d6823e798d9ebac7514f8a4eef52"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.core/jersey-client@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/javax.ws.rs/javax.ws.rs-api@2.0.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "javax.ws.rs",
        "name": "javax.ws.rs-api",
        "version": "2.0.1",
        "description": "Java.net - The Source for Java Technology Collaboration",
        "hashes": [
          {
            "alg": "MD5",
            "content": "edcd111cf4d3ba8ac8e1f326efc37a17"
          },
          {
            "alg": "SHA-1",
            "content": "104e9c2b5583cfcfeac0402316221648d6d8ea6b"
          },
          {
            "alg": "SHA-256",
            "content": "38607d626f2288d8fbc1b1f8a62c369e63806d9a313ac7cbc5f9d6c94f4b466d"
          },
          {
            "alg": "SHA-384",
            "content": "a90b396153ed0b44890ae453a39a12923b433be46bc1ccd92d35598438804e6527d348f99114407b31c625f0f9d44dc3"
          },
          {
            "alg": "SHA-512",
            "content": "4a85d3b61ea018f354a4dfa43104f3b4967cb4719df203956f82f7a696f75bee9d660540fc0f7bb61e0a5f826461de8929144eddd5622f9cb59a4da289d7297a"
          },
          {
            "alg": "SHA3-256",
            "content": "7d439b6efe13a02aa996c27db07de14c1f14e8c95b60a9205c073cfbe9cbcda1"
          },
          {
            "alg": "SHA3-384",
            "content": "da14011551f154cce8130a7f70eff31364ee34480fb8abd978d077f0abb6ff4a450a33721356ae1ace00ae4d1cc5cb17"
          },
          {
            "alg": "SHA3-512",
            "content": "e4bc8aab836157e258f659fe687e59499d445889c6c706d9539e5bbd48a6e80a1a1029e9ae47d25871f5ddf1434c5449ce2bc67b147b5a7b58990309f7aa60a4"
          }
        ],
        "licenses": [
          {"license": {"id": "CDDL-1.1"}},
          {"license": {"id": "GPL-2.0-with-classpath-exception"}}
        ],
        "purl": "pkg:maven/javax.ws.rs/javax.ws.rs-api@2.0.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JAX_RS_SPEC"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jax-rs-spec/sources/git/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.media/jersey-media-jaxb@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.media",
        "name": "jersey-media-jaxb",
        "version": "2.25.1",
        "description": "JAX-RS features based upon JAX-B.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "43c2fe9a2848343cb562f855b06b7047"
          },
          {
            "alg": "SHA-1",
            "content": "0d7da0beeed5614a3bfd882662faec602699e24b"
          },
          {
            "alg": "SHA-256",
            "content": "05526bed0ffc07c2cea6b399f4e61ae3c99e44021e28a4af926ed1d867ba3fbe"
          },
          {
            "alg": "SHA-384",
            "content": "c70d4fefcbedc6b3add72170cc51bcf5c1faa4e6fe49e868502f02673e7319a1e1b549bf10fa9a243d200884855b53f2"
          },
          {
            "alg": "SHA-512",
            "content": "589328af6d727d73617a1cff3e7e75bbc858d417cdbcaf8e63ea3ed0086df645fe0f83538a311941744e5afd828d1d7827933b44b8c74f6f8b912c2d7f3e1be4"
          },
          {
            "alg": "SHA3-256",
            "content": "cbc11448fe72f34353de7de8c8b1084530ebf4a7b262bde33219cab6beeea29d"
          },
          {
            "alg": "SHA3-384",
            "content": "7d7942048a18a320b387fd737d5790510aaa4f11c92c3373d5fd49d1b39399e49c25e80bed39241a8adfba35eb2b5956"
          },
          {
            "alg": "SHA3-512",
            "content": "18313498ba720e5c1a307927f9782cee90140984ab5c6762cb6b966040d42c2610e39f41d06b9c2ac528aba2fe1b72ba5d1255f92e01848b4580eee11b95b1e4"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.media/jersey-media-jaxb@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/javax.annotation/javax.annotation-api@1.3.1?type=jar",
        "publisher": "GlassFish Community",
        "group": "javax.annotation",
        "name": "javax.annotation-api",
        "version": "1.3.1",
        "description": "Common Annotations for the JavaTM Platform API",
        "hashes": [
          {
            "alg": "MD5",
            "content": "9a936313da62e705ebb16e81b62f4096"
          },
          {
            "alg": "SHA-1",
            "content": "20a2c0583598d68b0835474bbe07792d4f3b219f"
          },
          {
            "alg": "SHA-256",
            "content": "bc1110630bb4290e798a533ca40a60517826c8804b79f91f8738d18ca425adc5"
          },
          {
            "alg": "SHA-384",
            "content": "d46e7809d911bc577f0eac1dd9f0812f81b65d6359109e60ab037d75e00f3aae4210625d154cf937c6bb3e714e0a76be"
          },
          {
            "alg": "SHA-512",
            "content": "9b0c8e45c750f049015da652dcfb43250c24aa72c0cf8fcf917918a486c50b70d6c19201638ae4c23a822551e12ed85215222a59b9bcfb135557c0aca80c00ef"
          },
          {
            "alg": "SHA3-256",
            "content": "81a7132a97ca91c7bf14400e8dc845e3124df73c91b3e2f0a62c4aa3abd84b6d"
          },
          {
            "alg": "SHA3-384",
            "content": "1fba9689ebae019cd50634855fa6c5bcb45394b8fb9bbb555b0220c0fe2daa79cf4e5e4540303ee748b821ddcf57d173"
          },
          {
            "alg": "SHA3-512",
            "content": "1b7b5f5a5dcf8076155e13d17fe8665b88394c5871583508211f58336cf8d2dae9b3225df8de94e6820a2cc5e077cbd4382c88249c1b0c79e482ce7ae726997b"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/javax.annotation/javax.annotation-api@1.3.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://javaee.github.io/glassfish"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/javaee/javax.annotation/issues"
          },
          {
            "type": "vcs",
            "url": "https://github.com/javaee/javax.annotation"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.hk2/hk2-api@2.5.0-b32?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.hk2",
        "name": "hk2-api",
        "version": "2.5.0-b32",
        "description": "${project.name}",
        "hashes": [
          {
            "alg": "MD5",
            "content": "93322931c4ec277c5190c7cddf7ad155"
          },
          {
            "alg": "SHA-1",
            "content": "6a576c9653832ce610b80a2f389374ef19d96171"
          },
          {
            "alg": "SHA-256",
            "content": "b3fe4f295ab8e74ea9d641717dc55e5768f1e5db3709e84235346a4d6bcde5c2"
          },
          {
            "alg": "SHA-384",
            "content": "67e941c2d297a012be90bec7cf0eb7ead74486609ba2ee60b31cc64798955e2620a63676374189871104daca2a8ad64b"
          },
          {
            "alg": "SHA-512",
            "content": "9f143940ff31e6abdc5bce5223c12ea91fe1852338f317aa614221bec67bd5252ef905075d78125ba777ff2f36c5d39fe35a5b3876ea19255fc91da949179d00"
          },
          {
            "alg": "SHA3-256",
            "content": "7dbffae41a1edb93e525d9841a6831f574fc408edb7568b5b192d7b026aeb750"
          },
          {
            "alg": "SHA3-384",
            "content": "417321a888b74535355b699953f2a2a0fc1ff1d4bbd5490f3aa18b161eb1bfc942ddcccd7dda43aa3d2229fc6145b5ec"
          },
          {
            "alg": "SHA3-512",
            "content": "594dc7b77f5a85574331483bbc2b795c1456fe174b55ca7253519a8fe94bd914167face505c561f3829c9738b7d9e7f80421f5b97427952cdd78fe388c17c282"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/org.glassfish.hk2/hk2-api@2.5.0-b32?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/HK2"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/hk2/lists/dev/archive"
          },
          {
            "type": "vcs",
            "url": "https://java.net/projects/hk2/sources/git/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.hk2/hk2-utils@2.5.0-b32?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.hk2",
        "name": "hk2-utils",
        "version": "2.5.0-b32",
        "description": "${project.name}",
        "hashes": [
          {
            "alg": "MD5",
            "content": "acc873aece4f8e89814ac0300b549e3e"
          },
          {
            "alg": "SHA-1",
            "content": "5108a926988c4ceda7f1e681dddfe3101454a002"
          },
          {
            "alg": "SHA-256",
            "content": "3912c470e621eb3e469c111f4c9a4dee486e2ce9db09a65b7609e006b6c3d38e"
          },
          {
            "alg": "SHA-384",
            "content": "dfa32b9af363dc5ef659a9325650e4764ea4283bf1e131c21b5b89453143bc19a87efe85cc4a75a5c873051450e625c8"
          },
          {
            "alg": "SHA-512",
            "content": "1d100879b218d4ed75760514b78a3833f43f67126691dc7cab6566af8488c4cb9e72258b649f8a4eef0376813c25df326ba29d6f29c275e8f75e549cfc17fdf5"
          },
          {
            "alg": "SHA3-256",
            "content": "699d1fba60b9403b292ce22cb0db2d6b070a1152531afe3f2c08a5196779b3a9"
          },
          {
            "alg": "SHA3-384",
            "content": "9accae6d9a188ff60a6769d2e55351b00fab8b3e78a9f0b8a17b8fea4bc3772e58661aa97d6230b256e479e37f5f063f"
          },
          {
            "alg": "SHA3-512",
            "content": "47ad643c3727bb9fb45b6748e4da67c4788aeac69783c56c60f73ccf37f979972f699ffa96714056c551cb29109dba6722ac3b57004eea1ae47f8833f9c73d34"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/org.glassfish.hk2/hk2-utils@2.5.0-b32?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/HK2"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/hk2/lists/dev/archive"
          },
          {
            "type": "vcs",
            "url": "https://java.net/projects/hk2/sources/git/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.hk2.external/aopalliance-repackaged@2.5.0-b32?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.hk2.external",
        "name": "aopalliance-repackaged",
        "version": "2.5.0-b32",
        "description": "Dependency Injection Kernel",
        "hashes": [
          {
            "alg": "MD5",
            "content": "99809f55109881865ce8b47f03522fb6"
          },
          {
            "alg": "SHA-1",
            "content": "6af37c3f8ec6f9e9653ec837eb508da28ce443cd"
          },
          {
            "alg": "SHA-256",
            "content": "32a44ed0258c00bb8f0acf7e4dbf000a377bd48702465f6195f878a6dc2024d6"
          },
          {
            "alg": "SHA-384",
            "content": "f50410819480351ed7fb773470ccedbfd90cf4cc3a5535289a37d2dc6932dd123f5e2dd526198f251c66a9f7f3056ee3"
          },
          {
            "alg": "SHA-512",
            "content": "5afda7e897fb1135e4cf8ceb1f9f2ae68521c6178552dbe38243461e8422d50011f379e4f66d237190e7609e2d1ba2e9c09267637ecd588d7e286c1a6bfb8b4d"
          },
          {
            "alg": "SHA3-256",
            "content": "3808bbe7fc89ea384068d5edf32f4ebf61cead5fe0fff58c7ac13c23392b8860"
          },
          {
            "alg": "SHA3-384",
            "content": "1b7101fdb205fbc776cce92e856e91fba275a6e2fd9314ff6b83353283399bc7db4473a18a1562c6f8c26e7e8c374607"
          },
          {
            "alg": "SHA3-512",
            "content": "ea988d271b897cb61a17ddd642f7f31935711bb33710947a812e0c1ab3469077c45247a5224e55a9258bfcdfd502f64286064aa1063b2df07dc880a880e034e3"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/org.glassfish.hk2.external/aopalliance-repackaged@2.5.0-b32?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/HK2"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/hk2/lists/dev/archive"
          },
          {
            "type": "vcs",
            "url": "https://java.net/projects/hk2/sources/git/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.hk2.external/javax.inject@2.5.0-b32?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.hk2.external",
        "name": "javax.inject",
        "version": "2.5.0-b32",
        "description": "Injection API (JSR 330) version ${javax.inject.version} repackaged as OSGi bundle",
        "hashes": [
          {
            "alg": "MD5",
            "content": "b7e8633eb1e5aad9f44a37a3f3bfa8f5"
          },
          {
            "alg": "SHA-1",
            "content": "b2fa50c8186a38728c35fe6a9da57ce4cc806923"
          },
          {
            "alg": "SHA-256",
            "content": "437c92cf50a0efa6b501b8939b5b92ede7cfe4455cf06b68ec69d1b21ab921ed"
          },
          {
            "alg": "SHA-384",
            "content": "bab190c7bf4e47767ef209860835eee56db4b9d3b97c79d2b93b225fdfc0a3421b68ddbe93dd6d989fa565c4faa389ea"
          },
          {
            "alg": "SHA-512",
            "content": "ce72626ebacfcbb1a022d0af22d7f3ae8a0f38db939e5f0b893efb9e3545c74328fa139a92c3b9bf7d833300a2830d7b883f748b0d758ed58abd6b0ce192620a"
          },
          {
            "alg": "SHA3-256",
            "content": "da07452e3cbd7bf8e934d72e70149d317d7299fefa8de7840ac251e3e7fab17b"
          },
          {
            "alg": "SHA3-384",
            "content": "e13f32d6be1eec547c3e5179b737ff325ae89dbd0ef5cba7a0e8b9c98e1e8716aa555a31f1ddc843d2da02e5941b2a5f"
          },
          {
            "alg": "SHA3-512",
            "content": "db226d92d3e50eb91d892c9dee1832aedcdc2c11ddbc5948da4a33d10d286906fb1554e226223384bbbe7b30fa2b7b023eb7df03beb46affdd9e012722d66b67"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/org.glassfish.hk2.external/javax.inject@2.5.0-b32?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/HK2"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/hk2/lists/dev/archive"
          },
          {
            "type": "vcs",
            "url": "https://java.net/projects/hk2/sources/git/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.hk2/hk2-locator@2.5.0-b32?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.hk2",
        "name": "hk2-locator",
        "version": "2.5.0-b32",
        "description": "${project.name}",
        "hashes": [
          {
            "alg": "MD5",
            "content": "5baf0f144cf8552a9fe476b096fc18a7"
          },
          {
            "alg": "SHA-1",
            "content": "195474f8ad0a8d130e9ea949a771bcf1215fc33b"
          },
          {
            "alg": "SHA-256",
            "content": "27cacf80e8c088cc50f73b56344b779bdb7418e590a037659ab66b2b0cd9c492"
          },
          {
            "alg": "SHA-384",
            "content": "49a10b96f89688e8e20f9f090c46638f73009d76436d18780460fd265319ba1a6b40694439ffd9dc476c509e7583707c"
          },
          {
            "alg": "SHA-512",
            "content": "4b8819cfb299d4b5be13fee8c5a04c803010abe7636eab9d126a40a41bc79131753ff09ea062c624c6ecc5785749b120a3f6f0411307eb05b74e6bc46a1bd410"
          },
          {
            "alg": "SHA3-256",
            "content": "3b0c862b6be53e5a085e9caf77f6a90fe45365dc58cc4a69cf1bd13e20b91536"
          },
          {
            "alg": "SHA3-384",
            "content": "e90b233ec32863fe89089e5288c32bcc7368cd6c3e353041c4520984d8d5116e907b7791d1b7c0f33e9d56aa8c30ed51"
          },
          {
            "alg": "SHA3-512",
            "content": "9d3acd0f1048b63ca1c30a864463d10c3b2d724d4d245c2bc0116dbd8597772fecb9ace1601d60d9abae9058a2b9fc50422333be583189e00b31c3bbd21c59de"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/org.glassfish.hk2/hk2-locator@2.5.0-b32?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/HK2"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/hk2/lists/dev/archive"
          },
          {
            "type": "vcs",
            "url": "https://java.net/projects/hk2/sources/git/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.ext/jersey-metainf-services@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.ext",
        "name": "jersey-metainf-services",
        "version": "2.25.1",
        "description": "Jersey extension module enabling automatic registration of JAX-RS providers (MBW/MBR/EM) via META-INF/services mechanism.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "b02f1bc0acfdaeba09346c53a49a6b0d"
          },
          {
            "alg": "SHA-1",
            "content": "83376116af614791a26f51a93af1070520345782"
          },
          {
            "alg": "SHA-256",
            "content": "21339af4788eb2e02e144231f6bed95c30a019fe9bdc219725da095e15d8f7e7"
          },
          {
            "alg": "SHA-384",
            "content": "34661054004586cf510bb2e224d4ef27467f0b7877a4020eb62c3405b5726af1561748b6ea9c66fb87389fed88067afd"
          },
          {
            "alg": "SHA-512",
            "content": "7b4bef415a18702498bd594cea37a2d17fe60b319f40fd4028b5c5e778195bc26df1563332bc359d67bcd0029957d8fe629650ec55216d1a6f84fd7ab4daec90"
          },
          {
            "alg": "SHA3-256",
            "content": "fd690ea72f6586355206aa12a77b03e198776261bcbb1b79a3dcbc234c0c8675"
          },
          {
            "alg": "SHA3-384",
            "content": "d0843708744db04b8fcec786a5fa72f391855629cc8bf0a60555dcbfedeb3c1fa22749a0be632ae8771b26d6d7979117"
          },
          {
            "alg": "SHA3-512",
            "content": "822c4d091069ccfd523fbe463124a1827663b488a2df3ce8f5ea9892b8b6dbbd637e52e89ea2533c010601222f3ef7660ff45276b178082f3b928dc314681e39"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.ext/jersey-metainf-services@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.ext/jersey-bean-validation@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.ext",
        "name": "jersey-bean-validation",
        "version": "2.25.1",
        "description": "Jersey extension module providing support for Bean Validation (JSR-349) API.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "f1860b7577c9d0c89758ad14a60485a5"
          },
          {
            "alg": "SHA-1",
            "content": "01971927d79cad0ad2b5a3bfda24967748a2023d"
          },
          {
            "alg": "SHA-256",
            "content": "c7f8b632016d78ac9679c8a77a7333a7979b3a446c56f6c4aa0702495beafcf0"
          },
          {
            "alg": "SHA-384",
            "content": "bfec615706e3ff3e8c7a891a965f627e620e13f607b289ebf0b5de608edaedc4e3eca4e7f035579a46a7aedf7c78454c"
          },
          {
            "alg": "SHA-512",
            "content": "723afa0898fb909c199491173caa96bf32c5b4a9f8e7211989434f1be4ec581737b1d17e2094890074fd5fd94b640002b98b9f06cb042aa755864ff9e1eb5eb8"
          },
          {
            "alg": "SHA3-256",
            "content": "5eb1703f460fc87775426f894b776891b46e2060d209d8649fbbbf0046ff5541"
          },
          {
            "alg": "SHA3-384",
            "content": "f8dea195778fffb54554c1c2f21a32bfe921a971ba20036bbcfba95a2502bfd62f4be1519814a32bbe5b55404edb3afe"
          },
          {
            "alg": "SHA3-512",
            "content": "b538a16717eba2f15bae433116819aecfb842d17e9838cb4c67ec3242cf7f62517d7d8ddc9245d26aed83b15489988bba10a792935968c5d9731b0e07902a251"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.ext/jersey-bean-validation@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-jersey2@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-jersey2",
        "version": "4.0.5",
        "description": "A set of class providing Metrics integration for Jersey, the reference JAX-RS implementation.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "e56b570fcb934ef302433d338823511d"
          },
          {
            "alg": "SHA-1",
            "content": "cea8d4217ccd087f302611a54e4dd6071ba5844c"
          },
          {
            "alg": "SHA-256",
            "content": "91cb412f7aca24de727b3724885fd2e6ff0e8bdb422a73ad66d25375594bf63d"
          },
          {
            "alg": "SHA-384",
            "content": "e05bf91488277c5bc72d746b87c7bcd79864a53589d0d822bbb9fd3ddf64388ac42af67b8337e6c848a50f4417c892dc"
          },
          {
            "alg": "SHA-512",
            "content": "3bc8572f0d183c30b0f83f5b4acd3a05c8d3c3b728298d6b8899da0d299df8d9acdc5435f82c23eb6ba5a3d2bb5c8f66637d6315caf95bf3b807c53e5bc6c217"
          },
          {
            "alg": "SHA3-256",
            "content": "b2dda5477d6dcbd6fdcdd1f3acae482b0f83f24018706a03713c04dcd6c1f744"
          },
          {
            "alg": "SHA3-384",
            "content": "f7fba9283c7d0632d6d1b930fbae8570f0cfb7764f0957179e7c58715b062f43056e8d8da71588789c782c610cb1e3e7"
          },
          {
            "alg": "SHA3-512",
            "content": "af35ae7568a5df2be2e8cb9ef99256b0956b97b44ec0447863127e9f2e84f7baec0c5c0ed89a8146685e30af98e05a34618a58f2a76fe57272fb8ee98b5e9d62"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-jersey2@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-annotation@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-annotation",
        "version": "4.0.5",
        "description": "A dependency-less package of just the annotations used by other Metrics modules.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "18a5f9cee781de1bee53b78df6e37c4e"
          },
          {
            "alg": "SHA-1",
            "content": "b30a0e181a5b5170c3b9bf513a9f2cc756dd4319"
          },
          {
            "alg": "SHA-256",
            "content": "ef1ac18eeb33545913992f1b3d4779c9438435cea26a3a4366f05457a1006159"
          },
          {
            "alg": "SHA-384",
            "content": "f2fd5dbe989296314b74b132365265ba8ceb2354fb407f74738f47147df43f92b881dd05eda9c7d0da9d6a00cf61e8c0"
          },
          {
            "alg": "SHA-512",
            "content": "574a8d69f2610641d087d2ccf5509787c0993ce3f6fab1877580243cb8d57eb646e3cca9e9336d3e61776fdcb875770017d3182b7238ddfe0c31b08bad4edc30"
          },
          {
            "alg": "SHA3-256",
            "content": "841decb2aae5beba8df9d315b687fe9c5c9c0addf481e75c5de17e408b7d6d07"
          },
          {
            "alg": "SHA3-384",
            "content": "32df3d491f33b85e696733e08765ae88770c9605e5fd1ed62f37c5f07c61ceaddee5f634f11905c09cc7217e67659eef"
          },
          {
            "alg": "SHA3-512",
            "content": "61e765ec087be04c969bbf542c2c743b3de4a613dd77d8820e73976b51cb31f291a575623c64e2c0d865408965904611be2a91213fa387d01e7552de48770056"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-annotation@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.jaxrs/jackson-jaxrs-json-provider@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.jaxrs",
        "name": "jackson-jaxrs-json-provider",
        "version": "2.9.10",
        "description": "Functionality to handle JSON input/output for JAX-RS implementations (like Jersey and RESTeasy) using standard Jackson data binding.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "5a6659fa62763f65fb7e187dca166346"
          },
          {
            "alg": "SHA-1",
            "content": "89a2f5d0adc42c3e37a7167e0759641de55aafdd"
          },
          {
            "alg": "SHA-256",
            "content": "0fe7309bb8d0fa8f48cd6846bc3a27eef04b0263b6533ac58ef7ad85b1bdf38c"
          },
          {
            "alg": "SHA-384",
            "content": "5f55abc59324ed24d6a8813ad14117bac20fc047ef9fc3458555de815fc56e900f6afb89668656e51e7474c1a2c15857"
          },
          {
            "alg": "SHA-512",
            "content": "254d53edb320ecc9f697d3bb4c7dd1e385d04759bad65caeedcb5beda7fa29f915636324309bec3052205fa91ec29892fed809c8da4e7d284cc0d62b8cf29508"
          },
          {
            "alg": "SHA3-256",
            "content": "1e98e50a06dd5830aa5517da99a0f503760f745029a9fe992f21b45f2417fb76"
          },
          {
            "alg": "SHA3-384",
            "content": "f6359f66a4d76d5a65fe46cd5c5f4fdc6f603e7bb3088e162311683768b50d827b4711737f2b4f4c8de035d13a3fbb44"
          },
          {
            "alg": "SHA3-512",
            "content": "ee026cf5697ab3d3785aa59d1a69e074d6c7db0af06478b36bb19f0d7b303db888bdb6fbd6bb7ffb0b14a4425d3fb0fb9ec971d59db2c7312f979ad83b107a1d"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.jaxrs/jackson-jaxrs-json-provider@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-jaxrs-providers"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/${project.artifactId}/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.jaxrs/jackson-jaxrs-base@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.jaxrs",
        "name": "jackson-jaxrs-base",
        "version": "2.9.10",
        "description": "Pile of code that is shared by all Jackson-based JAX-RS providers.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "3dde182860e6f59fea3871880b1875b9"
          },
          {
            "alg": "SHA-1",
            "content": "8f13207626ffab14943da9e7447dc065f7762a4e"
          },
          {
            "alg": "SHA-256",
            "content": "4a76bd0d1f5f66293867bb9e021bcf8ba179bdd69cf69852d623204297fe85eb"
          },
          {
            "alg": "SHA-384",
            "content": "5476a5f3f06695bead55fde6716df0cbf5a5fe7605427335614eacb11da9effdc9aca683a64fd4e4bd8e5d8ea280ccbd"
          },
          {
            "alg": "SHA-512",
            "content": "608054e863d9233f92fcbf9ea6896a78caa0e1fac197a3b15f7833231f25bc10ac93e54f362d0364a60e7348825e505107e507590269edef11e3fd1e136b1ab5"
          },
          {
            "alg": "SHA3-256",
            "content": "3b43e3742dec5d06ca7a73b45e485120e0adf0f0e66208b9afa56d329ccf0768"
          },
          {
            "alg": "SHA3-384",
            "content": "866633e84440639a4acedeea86fadfa5c480f56a21f03eef026fb1935795e8af5d268235eaf7989956f60248e7281f8b"
          },
          {
            "alg": "SHA3-512",
            "content": "512f238b2f5d2f70c48cd60dc45da652e2e3ade8aaf03f8031ad0a1ab9222726a82f53a9dcd15b5ecb49e8f8b9aef6789c993d8edd8c68acddd7776bf835f948"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.jaxrs/jackson-jaxrs-base@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-jaxrs-providers"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/${project.artifactId}/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.module/jackson-module-jaxb-annotations@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.module",
        "name": "jackson-module-jaxb-annotations",
        "version": "2.9.10",
        "description": "Support for using JAXB annotations as an alternative to \"native\" Jackson annotations, for configuring data-binding.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "fe4cda4049277f5c8758f32a00f2b633"
          },
          {
            "alg": "SHA-1",
            "content": "b7fc3212e95586f42a0d3b5cf1311e42a3ac0248"
          },
          {
            "alg": "SHA-256",
            "content": "72a8ef1246f7a2dc680de67bc5009cc5de71b3825adf98726d290643a36576c0"
          },
          {
            "alg": "SHA-384",
            "content": "a6fa6ca2831ba6ef818c0eba259b7693941816f95af61586e01b8eab346d7d55d3239a6c8b616563ab8c75eb8c2adb74"
          },
          {
            "alg": "SHA-512",
            "content": "df36f846fb1c04e23657f1d7568d05cc589207dc3f751db357ccf33b2b6c7491abf1251aee29763b69b524bf4652e5d04dc77f93d8f001fb23728fc46304f4f0"
          },
          {
            "alg": "SHA3-256",
            "content": "f38cc147a5ef75e5a5f153a2db7c996eb8fe469079b1ef7c843249e8adbf06eb"
          },
          {
            "alg": "SHA3-384",
            "content": "36a4019bf615b402b84a100c8cd0860cbda4d6373cf42cbb26529592743bd00aa627caa137f9720076d78d844858b988"
          },
          {
            "alg": "SHA3-512",
            "content": "9ba7e2c66e3495260dcd320b179db20fe37d2dd695e1c1a01aaa13a0cc5bd5adaa1c9041c2f4ff6b19607d375c49fcbfc4a962c4939e05a0dd68cc8cdedcc7fc"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.module/jackson-module-jaxb-annotations@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/jackson-modules-base/issues"
          },
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-modules-base"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.containers/jersey-container-servlet@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.containers",
        "name": "jersey-container-servlet",
        "version": "2.25.1",
        "description": "Jersey core Servlet 3.x implementation",
        "hashes": [
          {
            "alg": "MD5",
            "content": "80ebd9481c44844884fc70ac0ba333b4"
          },
          {
            "alg": "SHA-1",
            "content": "cf5f7a76fcea38158b890ab7a0142d4db709a882"
          },
          {
            "alg": "SHA-256",
            "content": "3669c50bef23aeeabdae02e5e4b214c9f1eb1019fa4d559f2eeadb563ba598e4"
          },
          {
            "alg": "SHA-384",
            "content": "5ebf5733a21da0904dd29b01b6dbbe79136fdb200f18fb57e2e8e023b9bd4df75b5aaf23af7b4a5393306b45c52ab7cb"
          },
          {
            "alg": "SHA-512",
            "content": "8db651ca49cebb031823cb6363e3af78f2f400c4857a5cef51b2be2d58ccaad6c06ee5320cb6ceff6f2a053136f00943feb6f98189d847d49ea2455312529d84"
          },
          {
            "alg": "SHA3-256",
            "content": "c77550b169ec358ff293d1599b2897fb4f3ebedaed222257893d83b7343fa915"
          },
          {
            "alg": "SHA3-384",
            "content": "cfc5e11e9c2d203c705047ba1e511225a469bc96a5425ccfdbc0e96a52ac51a4b47551f2c0bef15bba60d27f2ece9b37"
          },
          {
            "alg": "SHA3-512",
            "content": "75115f1e1a14cea1e939e3cc30b9af2cd0de853a30d41007f72361e216362cc16a35901434330292840f48edf0dd98ac9ec8bc3e5461c0668eac4a883d7b2be7"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.containers/jersey-container-servlet@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.containers/jersey-container-servlet-core@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.containers",
        "name": "jersey-container-servlet-core",
        "version": "2.25.1",
        "description": "Jersey core Servlet 2.x implementation",
        "hashes": [
          {
            "alg": "MD5",
            "content": "e31db34014609174609f8879d00e0d2a"
          },
          {
            "alg": "SHA-1",
            "content": "400e30bb035a0cdf3c554530224141ce659a0d1e"
          },
          {
            "alg": "SHA-256",
            "content": "232f4f4e59e5944098351379a12aecc715906831c96a855624a81da552192ac4"
          },
          {
            "alg": "SHA-384",
            "content": "afb33fb183f6194068addc25073d212052b5e20a5a1fb60bf75666b875816cfdcb4f6462fad6320ba3fa6c8014e33365"
          },
          {
            "alg": "SHA-512",
            "content": "beb539ae8f16b5748db941e1beabf21482791ccf04b7adbee50d58a06c224c21e918198badf8496243ab7730284b8abcd71da9e5439702fa7a4d06ba22fa1960"
          },
          {
            "alg": "SHA3-256",
            "content": "bfb3dbfe53102c61b1092ddc80b119fef28b6ee65e020ebdbfcbe51aacc701fa"
          },
          {
            "alg": "SHA3-384",
            "content": "2d4e3ccdf40d3adba22bcdc9c37865b3a1175f20acda8ba378f95ebf97b91a6696935633e49447f25dca6356d6380b52"
          },
          {
            "alg": "SHA3-512",
            "content": "7fe6468606f4ff4c7389e9ca816f82a03c9282b296472112573047d93389b9845a49f6c1740ee67d2e93be9dbe312d89189acd681ba489b9e09716cd20965e39"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.containers/jersey-container-servlet-core@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-webapp@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-webapp",
        "version": "9.4.18.v20190429",
        "description": "Jetty web application support",
        "hashes": [
          {
            "alg": "MD5",
            "content": "044d3037d9a5b94c8ed938d89045e06b"
          },
          {
            "alg": "SHA-1",
            "content": "9c2f1a2b61bdc2d24f8a980c6c614aa0b588216d"
          },
          {
            "alg": "SHA-256",
            "content": "3e7a715fb8f5ebe79d54b940f630d562629ecf91d1b3fd1403ff9700d0a3e125"
          },
          {
            "alg": "SHA-384",
            "content": "24841f3b033a02f4c8b765d11b155220c84fb3f53697b184fce7c462978f3fd7053e4089622d984f0c6bd265e4bfced9"
          },
          {
            "alg": "SHA-512",
            "content": "09861241011a4f5dee0ffb7087f033f7882decda7e8bd9641fe1c759f558af28c01f050f0d904fe3f06fba3769efc887d50156cdb7567322ad5fbcee1fc7c2ea"
          },
          {
            "alg": "SHA3-256",
            "content": "a958bee3bbb5d03e76f34e8e70552614aeaaa1fd63a56d5d56d12f552b9e4df4"
          },
          {
            "alg": "SHA3-384",
            "content": "0dac2f00f1db012a0be73db3b6265ed52b3c5f4adfc54782f4e80b24560a3efa50987867ea256869569dd62d46afe345"
          },
          {
            "alg": "SHA3-512",
            "content": "c2b790b16923ca0e1171b76cbb8c852b1e338cab09cc2f46f17b4479370e3d0a0308ca15bfc2d0421655c7db200bb5813a771e80cb6ed566dea9656f232ef403"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-webapp@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-xml@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-xml",
        "version": "9.4.18.v20190429",
        "description": "The jetty xml utilities.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "637f8a266afa4cb043e1d142c7cacb33"
          },
          {
            "alg": "SHA-1",
            "content": "dcd2806ee48e646fd4dcff81c7c6867fea2b52e8"
          },
          {
            "alg": "SHA-256",
            "content": "2189c5316c4ef2721166353a3f6800803b2ffd06cfc4c7b16ebdef9b00108ca6"
          },
          {
            "alg": "SHA-384",
            "content": "a89c15909a2b36640ddcb1a0fe632b20a4e94a8787cff1111d47db9244fb281ca3234c18defa8ad6b40b605d95e9a539"
          },
          {
            "alg": "SHA-512",
            "content": "f60127983e3115b9df5ececcfe5a75bf4b1de0597e050d52b65d8e60875305741a3d3256d12d198e25be58b8b236a34ecc6747c05faf30465be27095b02e3206"
          },
          {
            "alg": "SHA3-256",
            "content": "acb83341c830c2e5944c91021cac1d486e73fd5d570abfd4572346242b847940"
          },
          {
            "alg": "SHA3-384",
            "content": "cfc69f917f478dfffc8a242f7df698d512e37a7772d23e3857b96bb90c4bcd4435693baa0a73ecaae5889db36f4f6acf"
          },
          {
            "alg": "SHA3-512",
            "content": "53c27e9e1c64a2046793b9f02880813669b71d534737ec84f16eadb8bdb63a717b664e602a17f1e071f411e318d6c233812910db8ae3bff933047eed08110290"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-xml@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-servlet@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-servlet",
        "version": "9.4.18.v20190429",
        "description": "Jetty Servlet Container",
        "hashes": [
          {
            "alg": "MD5",
            "content": "63d8201a1db1aa10454015245472fdd4"
          },
          {
            "alg": "SHA-1",
            "content": "290f7a88f351950d51ebc9fb4a794752c62d7de5"
          },
          {
            "alg": "SHA-256",
            "content": "58b778613867b59bdd6587c57010249e62d10104e01113459453343e9c4ecaa4"
          },
          {
            "alg": "SHA-384",
            "content": "8875fbfab3e096f2d913a3aa7cf31b5cb91dd42702419a317d2030387111f7404abb59a59a0cdb6f7ac4227a6cb86771"
          },
          {
            "alg": "SHA-512",
            "content": "ed6d46eac69dcb275c684e516e1bd627aa2e8b35aa022d68e256b1ec7d145525cc03ad9f55e0794026590f1df17536465c11d25c961df3ee530586a01dcd7f55"
          },
          {
            "alg": "SHA3-256",
            "content": "bd41d1a2332a05b8826eebefc9e1e43b2924c9a810e5c14d97cc8437a4817f6d"
          },
          {
            "alg": "SHA3-384",
            "content": "dd3162a946fb5670835763e5e0435404bdef047fa31d36617869b5f90dd9ce160a05ec624d84e75b5a9f1d9a7c073267"
          },
          {
            "alg": "SHA3-512",
            "content": "d4e1c6d118f9ad0890f69efef3141d5d6583703fc6eba5a6c069636d6cde8d48f97d9e5ed5d58e070dd6539c4a744035840e5c8a145f6223f5d9b0dd2ba9ab27"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-servlet@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-security@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-security",
        "version": "9.4.18.v20190429",
        "description": "Jetty security infrastructure",
        "hashes": [
          {
            "alg": "MD5",
            "content": "ea1d2d43fdc539ddf8192e2782f45e79"
          },
          {
            "alg": "SHA-1",
            "content": "01aceff3608ca1b223bfd275a497797cfe675ef4"
          },
          {
            "alg": "SHA-256",
            "content": "c307c68eb402979b2b6ae75a587476c9fecafbf5f4a53db22125f9af2324926f"
          },
          {
            "alg": "SHA-384",
            "content": "3824912f4a5ef0d04fd8ba2e8149523933cf66b386d5c0019e4f0531776e3a2e01cb0e0a69641cc66664a9a33dd0852d"
          },
          {
            "alg": "SHA-512",
            "content": "140364d32cab3e7f1acd1222c14228038db35c96e22fe55d90c810308c6ed06f72972d4a40514e664e1bcdd542c25014719082b8828b8afd29a9a760b440dfe9"
          },
          {
            "alg": "SHA3-256",
            "content": "fb9e4fd12fc7912c3ad20ec205efa02532b05af85d22b4d4e93e2e19906dadb7"
          },
          {
            "alg": "SHA3-384",
            "content": "a3a80de497c3260ff475ce580b957170138a97c244ab91db62ec63e41626026ae633fca8e12c6e84f1f7f6e747c9157c"
          },
          {
            "alg": "SHA3-512",
            "content": "df87f8e4a2ac262620c8e805695d52427421e9c25225747fedba6503916bc867c4868d04b1d786d52f64917fef4bd27013ff640297da21a49e97cd2db80007d2"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-security@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-continuation@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-continuation",
        "version": "9.4.18.v20190429",
        "description": "Asynchronous API",
        "hashes": [
          {
            "alg": "MD5",
            "content": "bf4683a840d240010acacc4cc9739525"
          },
          {
            "alg": "SHA-1",
            "content": "3c421a3be5be5805e32b1a7f9c6046526524181d"
          },
          {
            "alg": "SHA-256",
            "content": "ad2e8fa193f06989ef6f0ca09719e1e30572e6099e7c889777836076068cbfbb"
          },
          {
            "alg": "SHA-384",
            "content": "f4648f250fcb3f6dfdaf6b196913401874c61cbebfecfa1dfdc3451c7059f95731b16abf101124d0e302565e030d46cd"
          },
          {
            "alg": "SHA-512",
            "content": "1ca79b0b2011ae4f5dd2f64447ec39d5140ddae6fdcdc9e1104ece137113951efeeccd7fbaa2cb174c11a944d7a6d79d94a6cf2f5a645b21016a3ba1b1421152"
          },
          {
            "alg": "SHA3-256",
            "content": "e54fd5d441a318d250a84414eb391c6af739a5a167c7cbc70963a0cd12a60371"
          },
          {
            "alg": "SHA3-384",
            "content": "f698afbb0a5bd08c8c3f4a51d3a05db8be7009f0f03ab27175dc5e69f2d445f35eb7bea72faba69bbde8396e2a86287e"
          },
          {
            "alg": "SHA3-512",
            "content": "d4fd7624498cd4113fd86ef1e71fe4f0c4d0684d34e2700b0d472decf55ae5b3d9aa59447a7ec2856ba5a2348da09057f5f3730f3e91715d2746d16d20bd5fa9"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-continuation@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-jetty9@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-jetty9",
        "version": "4.0.5",
        "description": "A set of extensions for Jetty 9.3 and higher which provide instrumentation of thread pools, connector metrics, and application latency and utilization.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "99b6f3ed9f4663ed9db4700e4bf388fa"
          },
          {
            "alg": "SHA-1",
            "content": "87f3b49a7377e56f62046875d394ed0028b37690"
          },
          {
            "alg": "SHA-256",
            "content": "e2c769fc1c269e2200950b8d33800be4b0043302eaa189ba5cb7ce518c48b46a"
          },
          {
            "alg": "SHA-384",
            "content": "cb4819f8b2801f59864a5096646b47cbe74d1c3a18aa1f9267b1d903adf90fc327ee9bfed499bab6cc794e50bf03ee59"
          },
          {
            "alg": "SHA-512",
            "content": "e3b7ee7c506e8bef74e87adb6e589f3dfac2a0905f66a0eed1af9d2cffa6a3e6f74573e6ca3d3469d8afba0307fb18f74b21397146e0b82ede387a41554f44a0"
          },
          {
            "alg": "SHA3-256",
            "content": "09bb7c73faefc5549d032d9bdc471f500b9370caef0dc9896ca44cdd6fc2ff48"
          },
          {
            "alg": "SHA3-384",
            "content": "17c85e69beed3cb24ec4366507115930b56b3fe206912ece5a97fa305ea189375316273fd858bfc81b9382127b11aa26"
          },
          {
            "alg": "SHA3-512",
            "content": "ac44f708dff820a3f19b3cc01d4f936b7ca46cd9fedd76e9c57ecc7c0b7d76a9f5db641742453c8893b5b0eb2255ce8c7697fc11569e57afa456d08f00141fc9"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-jetty9@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-servlets@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-servlets",
        "version": "9.4.18.v20190429",
        "description": "Utility Servlets from Jetty",
        "hashes": [
          {
            "alg": "MD5",
            "content": "ed9e6c52ea1c28d92b81bf5c4cff5e22"
          },
          {
            "alg": "SHA-1",
            "content": "e5d174950a44c8f93e27cc2528eff5a6b55da2f3"
          },
          {
            "alg": "SHA-256",
            "content": "134e7f3fd037865cc95c3a69381088ff1c86f110fb0ea62e9a6824cb7ef48abc"
          },
          {
            "alg": "SHA-384",
            "content": "77d41e954f8cd0df078f11583c7e0b9d3f605577ce6af6d1417eaa6e732c124eb650dd7daad535eae2d45bda6de211b1"
          },
          {
            "alg": "SHA-512",
            "content": "ebd6e426972fb2833bb2173017edd8937ccc64135b6a2dbab0444b25f1528e3d50bdafe39e4749300a8ae46a5eb853a130e918339f29eea308fa9212b615c76a"
          },
          {
            "alg": "SHA3-256",
            "content": "843c3095b2f0e5f71352baf20dfb1cba119ca110fc6e3e01751551154986aac3"
          },
          {
            "alg": "SHA3-384",
            "content": "de8101219ce2f0fcae6f9a646091214442bdf24a8c71e5e6ca2aab831096f0a57d92b656f4c849900d0647ba698c513f"
          },
          {
            "alg": "SHA3-512",
            "content": "7eb486c3cac4a8950de6aca0006a07b1b4e9be737fa0902c229e15b27c3c61ddb353ea34f7d4d397dc5cba7da91e2cbee7d086a67506d2b303717f2743b46b0f"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-servlets@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-jetty@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-jetty",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "3e61f73e3ad1a7c63d7b16bcfc6038a0"
          },
          {
            "alg": "SHA-1",
            "content": "bd34674496ae9997dd20d88a9fcda937bd21840e"
          },
          {
            "alg": "SHA-256",
            "content": "7657190b578c7647d3e6d91de4a959580320a0317378b210d9a416635f4e1384"
          },
          {
            "alg": "SHA-384",
            "content": "035d89dcea7ace5d86ffea1d3ce07a46f8d2b388f5d38d840aac43c36a73313e93cc70160fe2f0ddac5c8097109ee516"
          },
          {
            "alg": "SHA-512",
            "content": "cb92715afa048b32d0879593f9709d558e4b1b6aa468802b8a1d08b7b6b1fa72eae12c8658c329ef0d8e073fb7a1bab4a9b833bac2887ccaa5d953625470f4db"
          },
          {
            "alg": "SHA3-256",
            "content": "38e8c121e10d2af68bdde88d8136622d76139d018df01b944c7708c8dd9cefe6"
          },
          {
            "alg": "SHA3-384",
            "content": "1a3d25546dfb3b9a9a420422bbfd4c119d84c13a32b65b02388d54ba1ac720fc4405c9babc2cd4307d8360650c1fdd43"
          },
          {
            "alg": "SHA3-512",
            "content": "7cfe066ea4e585b3bc0077332b0a08db9f998e9d83b95480cc148054895728ea72fe5e3b20e249f603e96cbe09ee9985eea527f207d88abef0914b19940af1d5"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-jetty@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/ch.qos.logback/logback-access@1.2.3?type=jar",
        "publisher": "QOS.ch",
        "group": "ch.qos.logback",
        "name": "logback-access",
        "version": "1.2.3",
        "description": "logback-access module",
        "hashes": [
          {
            "alg": "MD5",
            "content": "9468ae35cd2e92164659543a55280aac"
          },
          {
            "alg": "SHA-1",
            "content": "e8a841cb796f6423c7afd8738df6e0e4052bf24a"
          },
          {
            "alg": "SHA-256",
            "content": "0a4fc8753abe266ea7245e6d9653d6275dc1137cad6ecd1b2612204033d89687"
          },
          {
            "alg": "SHA-384",
            "content": "9b5a6ab6d98587e1e8c71f94a64d0b7b009ec7cdebda08850f0cbb3d4b1fe35fe99b10a2fc4e1c21e3657c086edf39c1"
          },
          {
            "alg": "SHA-512",
            "content": "b72a31503d09eb0f40abad77a44617b7edc2904e2e619f7cdcbab2536965be34e91ebbaffd0444027d15bad2562515762ee13a7163d9e12f82017334dc84a6a2"
          },
          {
            "alg": "SHA3-256",
            "content": "db933b4474fd6b77e89b1f68f4117d7b299788b0706e926ea88506f086b54f63"
          },
          {
            "alg": "SHA3-384",
            "content": "60e8ab4625ab07e991824d2de2ade41efc1b6df587e9bde7fd1c2cfcc4ddb53a5772e48c6bd6fc71bbd166c559722f5b"
          },
          {
            "alg": "SHA3-512",
            "content": "64acf87611208b7ccda4408ebd924dad609f3bb3e217fcaa80f13cfd098225183a559e5023b7ceabb07ff3ab705f13aad732b04f781f2b618e2f3de31376c089"
          }
        ],
        "licenses": [
          {"license": {"id": "EPL-1.0"}},
          {"license": {
            "name": "GNU Lesser General Public License",
            "url": "http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html"
          }}
        ],
        "purl": "pkg:maven/ch.qos.logback/logback-access@1.2.3?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.qos.ch"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "https://github.com/ceki/logback"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-configuration@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-configuration",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "a53483c0d1034d24eb068eacc2b18cc2"
          },
          {
            "alg": "SHA-1",
            "content": "64ede8340cf7e51e9d679876bb8873b5e4900bcb"
          },
          {
            "alg": "SHA-256",
            "content": "a579796dd6a5476f35a7d3e3fde89321c0f1e5afb6c2fcfecf34b1d1b7c2db57"
          },
          {
            "alg": "SHA-384",
            "content": "9afe4c8d643225d5c70aad9d770ff60e2e949f3fd510c041218a18f739730fd8fa55aa600819c05c0e5408be2c2465db"
          },
          {
            "alg": "SHA-512",
            "content": "fc3e2bfe3e0b9ec39a09a6735fa477ea2296d4dbbda6f92a4bf624f3ecdc4e0a226a44f3e433a74e6343012012e1e80b483483696ae6b846249167e5255f207e"
          },
          {
            "alg": "SHA3-256",
            "content": "851afb7c02c5ef78a1b4d8e4a6ac6393b1d105643a4de355a767fa665e44aa13"
          },
          {
            "alg": "SHA3-384",
            "content": "03d09838a83b677830357f684bdc2e1cd532674d5501c982305193b434601ccfd04bd82bbd130ff2ab82681ef6657ccf"
          },
          {
            "alg": "SHA3-512",
            "content": "b837c8c006d5909453293a262a826ea24a533a89f9a7c53a67129b3597a07a77b5ba0e95f391806087ee7f82cb12592e6149dbf26bf75fc0c54cab84a9b2c56d"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-configuration@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-metrics@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-metrics",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "231e9b5003b31c72836118b2b60e6b9c"
          },
          {
            "alg": "SHA-1",
            "content": "4dcf98534424a25e2666c714e0bb4f8ce6c7cc61"
          },
          {
            "alg": "SHA-256",
            "content": "fe67a902fa099d798179aaf8cb73fa2881e18a820b762422e9e25bda84968304"
          },
          {
            "alg": "SHA-384",
            "content": "9daee667c7fef444b6d082d03230d58649614e36f7a201bef559d4dae3d7a3ca0334558c41728303c3229502c981c8b5"
          },
          {
            "alg": "SHA-512",
            "content": "80d4133cdc506a51f34bdfa35f9e79d11d9e1a6cfbda6d13e10035a286f200a172314aa52b737a7bc4d8a334b6725c20a45cb4d8cb56dabdbbd8378e9aa1b355"
          },
          {
            "alg": "SHA3-256",
            "content": "55e8d3aae67454a70282570b80e4a5b50d19cede8ed6db54609bdba3b7291309"
          },
          {
            "alg": "SHA3-384",
            "content": "4a79870bab83180fc68467ede682399e70e53caf41021dace83391428788e076bb472d4289d5663af0365ec424ac089c"
          },
          {
            "alg": "SHA3-512",
            "content": "88be53fa6a98860edd603e40320f2d59206e08451a11356e089f28bcb9ee36586012f9cb6d0c63ca6b85b527f8f0434c3aa1e3619cf607883a7aed8817fdbdfa"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-metrics@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-jersey@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-jersey",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "5d4b25a8d01ef9534d6291f004ca8421"
          },
          {
            "alg": "SHA-1",
            "content": "5045bfc77cd931d0020e9d67ef5d3d47916d978f"
          },
          {
            "alg": "SHA-256",
            "content": "3e03434acca7bf73d6e8dc72239d41b28e087200d3cd3759b26319aa49c5cccf"
          },
          {
            "alg": "SHA-384",
            "content": "602abec53760e6b0abfb63750e6527616218d2f4f2b89568f29e108c16b49e788cd772b33dce81a32493f9b9f5f6c0f3"
          },
          {
            "alg": "SHA-512",
            "content": "389fdc36005f478f75687d796f147800d81bafca189233ba7bd6bad263ced8ba2bed450b73b7a2ebe14750186da51970f006835c7dbf6380f5535bece7bb947d"
          },
          {
            "alg": "SHA3-256",
            "content": "7c9a03749ca86a271678b15d9278890b605bf1fe85927c07d4412f481483c45f"
          },
          {
            "alg": "SHA3-384",
            "content": "fdd906aff24639471c0e2b9159ccd43b3a032e9a2c4834a7e434fee9c9e13238e34094e4b025242ba88925ce4ebe50cd"
          },
          {
            "alg": "SHA3-512",
            "content": "59da92cfc19ce969cfbb29f597519cdb692d838d191a93d02a6014d896091a8669bd6ed5ddff39bcaabd14866106131be23b6a984b6a8a7813fd655faede4b81"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-jersey@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-servlets@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-servlets",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "c738851aae5f6e431c4bad54ef8bd30f"
          },
          {
            "alg": "SHA-1",
            "content": "f93e103f42b677e1fdeca6fb6cb6c22353a78b57"
          },
          {
            "alg": "SHA-256",
            "content": "b5c9432f659aad54fbe25209366a5c93a43f2c8a0cc5428440c28f3576a5bf61"
          },
          {
            "alg": "SHA-384",
            "content": "829ea590f6f16a082d4560781e7318b375b2c2b1c62b6c62c3e5c29aa39a01d6fd40789c6237ce1fae6908fead99d0e2"
          },
          {
            "alg": "SHA-512",
            "content": "07fff649594cf8bf3eb10bad998cc0ccb5fe1049d21c47ca3321b6187eed0f480caa52c5683e454f9abcf107f1e3d6fa5e3d6858e4d250ba65a36e81dd20c5ee"
          },
          {
            "alg": "SHA3-256",
            "content": "eb28576f779876ffe7218c4b596ba2f2f302daa85375fc57784da3d050062086"
          },
          {
            "alg": "SHA3-384",
            "content": "722f536a774a67014dc7f6cb2d0ae64762c0c8316fcca46362a884b76419afd89daf9d842a83140a4cd9007be95156cc"
          },
          {
            "alg": "SHA3-512",
            "content": "e2ce67e331b95a1e7dea43a174e3e4a1b0c9653716c4378656114d54b1858fa818142f2afee7ffeb86439b7dec848a09eee12efa963be0c00b71d038051c448b"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-servlets@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-jvm@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-jvm",
        "version": "4.0.5",
        "description": "A set of classes which allow you to monitor critical aspects of your Java Virtual Machine using Metrics.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "a19a85dc56ac7179bd974e4eb0c8b6e0"
          },
          {
            "alg": "SHA-1",
            "content": "09f6f1e6c1db440d9ad4c3114f17be40f66bb399"
          },
          {
            "alg": "SHA-256",
            "content": "ba97466221c391bd7b7eb6d407f7fac83e5e6725d3a8691aa512e53ae075dfc3"
          },
          {
            "alg": "SHA-384",
            "content": "2789747535b447e7e3ed363dc097dddf6defe6c2c2893a76dcf051ddd69c3c415400e830b924bb5a24d864afd1699b55"
          },
          {
            "alg": "SHA-512",
            "content": "d53b524543ac922352d3a628831fc7a02ceeb757fd760b94477f02b256a47caac9837259c82ddf5b3cb0e874542176f1383c080a7c3d23b8a5790ac250f70a48"
          },
          {
            "alg": "SHA3-256",
            "content": "61e9ee4a183b317e6fadeb632804a04e233af77dedcd5613f19490233f71b8cb"
          },
          {
            "alg": "SHA3-384",
            "content": "bd96a9e5021615681193b07edabc7c714f54514944a2508277881950fc0b6f18a93d1bb7a199e2b91833eec7adde703c"
          },
          {
            "alg": "SHA3-512",
            "content": "333f15cf54e7e9a304e8cdaa9e251ac0859bfb848ddfc2606d86738a89e944adb8879d14f60df632c064f4ab0edb6ff950a7a231121ce8a6b1ff3bca4809750a"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-jvm@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-jmx@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-jmx",
        "version": "4.0.5",
        "description": "A set of classes which allow you to report metrics via JMX.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "863de91e135c8455d70fa3acf01cdf72"
          },
          {
            "alg": "SHA-1",
            "content": "d7be4ddd7ba674ee8be1d23d883fb3ca68ee1d54"
          },
          {
            "alg": "SHA-256",
            "content": "079133de87f7d3512200a8071bacfdbed46d6a73995578fc24bbf4c03df6d188"
          },
          {
            "alg": "SHA-384",
            "content": "6f62d328bcae0ffe7d08bb4e6d4991eaf2dec435b525df71684c1c9632108a6f8cba00bfa6d6f1336bf282a0bf1ca16c"
          },
          {
            "alg": "SHA-512",
            "content": "211ebec4191c7482bf0fc02785fd924fdc980c4bbbf440be8f5d4f87f1971bca646f7174c45c0566b41af08fc603225d38691b32482986887775c9e51185615c"
          },
          {
            "alg": "SHA3-256",
            "content": "d02352d947a4475cf67e9f24d33b3bd16cc908acb78cb294d2763fee7d1e4fee"
          },
          {
            "alg": "SHA3-384",
            "content": "8dde6081bc3c3a7cd85ef60e2c5435e7dfbc2ee8fa2bc7b4e9625a12b755860a625b81e08870f5084138edd82e45954b"
          },
          {
            "alg": "SHA3-512",
            "content": "7ca4565c9a0c3d1a96d021b7cc4b896b885352ac8cae96e4700f7c2fa40a6c367e05c48df0a81ef112a6769bd8f2f01ceb86e2a984d67286a3627b565bbd8f00"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-jmx@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-servlets@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-servlets",
        "version": "4.0.5",
        "description": "A set of utility servlets for Metrics, allowing you to expose valuable information about your production environment.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "e9142eb2da39a0651be8f9190d47ce0e"
          },
          {
            "alg": "SHA-1",
            "content": "983dacbfd04ec22b49f9e2256a5d41694ce7d4cc"
          },
          {
            "alg": "SHA-256",
            "content": "607381f05808cd31dfc09354db4b015e483be053276a85930050024515fae4da"
          },
          {
            "alg": "SHA-384",
            "content": "dcf8ddd4bbe20cbad3a98c7b4930f47f8d8baee2ca4dd10f5040398b4dee4e6acfd2949e0f311eed76ade4413bfbb2c2"
          },
          {
            "alg": "SHA-512",
            "content": "797fc4d430b4797b4bcc6d854ac39fd7e0c4da73bda04152473c3f5ab06a36bfeaf326c8edb657de75a613efcce658364fb0aaf15ff6a13c6e62b5795c6a464b"
          },
          {
            "alg": "SHA3-256",
            "content": "d840fcd8a9f0721e4cd392c6e30f1f52f4d411f1138b9e11336a5393f31b80f9"
          },
          {
            "alg": "SHA3-384",
            "content": "00c6336f67738f6cf0417507d57d83de997feda783a07d28a88c62de665457b878e866066f1b31d27f1d142e7493c902"
          },
          {
            "alg": "SHA3-512",
            "content": "a7553a6da55221ee3125757888978188695dfb14511432331f512f29e5c20e5c764e0c801e87818de719df2854d15915516a86d31f99147b9e5ec9b2fd43b701"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-servlets@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-json@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-json",
        "version": "4.0.5",
        "description": "A set of Jackson modules which provide serializers for most Metrics classes.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "9784b95742e0e8fe76e8d5376e7abf5f"
          },
          {
            "alg": "SHA-1",
            "content": "8c66fea9f767588ae0995be27558b1f3ae8d75ef"
          },
          {
            "alg": "SHA-256",
            "content": "008ce354b30ef48060786b6a31144e04b6bafdfca69e6307cbf66602ae331023"
          },
          {
            "alg": "SHA-384",
            "content": "d62d674a459901bcf06687a0ad455c182768d93bb59e4280bc3e204626cedadeb65a5cfc619d8e576ba206f03eed807e"
          },
          {
            "alg": "SHA-512",
            "content": "515734a08814f3df1f6ae853a2cac0fdab5637e129ca9bc3f62feba9190a2e43013362009f73f4fe3e06f3d08fdf0ec7ec8481dab3a6435de743322d4620dc55"
          },
          {
            "alg": "SHA3-256",
            "content": "70620d2f107ff8fdf5bc16a91df9a49daf3fe84fb268edafbafabd43ec61ef0f"
          },
          {
            "alg": "SHA3-384",
            "content": "7f137c45d0fa41630c0edece6b0d32df0ea4d4bf9418d0d58aa7ab7cd7ab7f35a00427c07b7feb734bcdf07ed8e527c4"
          },
          {
            "alg": "SHA3-512",
            "content": "f33d7c456efabd1eda7f0cc99df57e870b747d3f2c49571373c4564eb50388350260d08f4d53be2c5fe8a7ae766d9181d0f394e996156d839c5bfda9858c119d"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-json@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.papertrail/profiler@1.0.2?type=jar",
        "group": "com.papertrail",
        "name": "profiler",
        "version": "1.0.2",
        "description": "A pure-java implementation of the twitter/util project's `CpuProfile` and related classes.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "b6cb78e7d8a5c4ed1ad259afc4f7c793"
          },
          {
            "alg": "SHA-1",
            "content": "138093a4ed2da6f0b07a2a2335584bd5a7d53bff"
          },
          {
            "alg": "SHA-256",
            "content": "188ec41349472a0c50fbe7e4cdcc6d6c8968ad6cd9047effeaa6a5c111f9074d"
          },
          {
            "alg": "SHA-384",
            "content": "f42c9fec6720e32e56667e43a0ec8cc48396fb050b797f6098a478c1734cf467eec3c12f1c933ec056871dc4d26e9439"
          },
          {
            "alg": "SHA-512",
            "content": "447a1e7d47cb7c3974e09c8e5ea1fdf6c9c4dfe377cffbba501edab474e136ec252406c5dde8fc7387b9fab983a7970764c23c93b8fb842f676da8c3bd01e013"
          },
          {
            "alg": "SHA3-256",
            "content": "b68b7d44bde32b5a2995629eb2742bde9e3f373cb08230f67624160b91432160"
          },
          {
            "alg": "SHA3-384",
            "content": "338c911f58d647c041d33e283ddef763891c89bd77cc1c8e8ac2eb3a1f5628b1f94b727d5975635490888873a0d216d5"
          },
          {
            "alg": "SHA3-512",
            "content": "2fdb36567b1dcfb26e9e02abb70277e2e9040983c5755372716aa71a22cf46807501effa5931e0e65152f1efbe9e7449ff5b00cdaaddc15f1cfeeb3600904b7b"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.papertrail/profiler@1.0.2?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "http://svn.sonatype.org/spice/tags/oss-parent-7"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-healthchecks@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-healthchecks",
        "version": "4.0.5",
        "description": "An addition to Metrics which provides the ability to run application-specific health checks, allowing you to check your application's heath in production.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "e64c9571317f403046ad8a04814cecab"
          },
          {
            "alg": "SHA-1",
            "content": "73177b73f9d7ac80b0d0125db9dd41faab816c52"
          },
          {
            "alg": "SHA-256",
            "content": "bd3be08664f03a27bc625b88d91e852cd105b6f53725cfa54a7167a268f2fe0e"
          },
          {
            "alg": "SHA-384",
            "content": "82fc704ce2c5d686c8c7442d76eb2fe051fbc894860e511f84b6db28dc4d9007d1826ab4512a70c3a370b1c1485b3a2a"
          },
          {
            "alg": "SHA-512",
            "content": "e2c16ef7751558c07e8268d3448477c2296d2f83e1f915fe09b2e0f54c62cf774c9a8b8b3dfedccd882d95cf78bc0f0af3d997af0de8c0c5d489de36883f0b09"
          },
          {
            "alg": "SHA3-256",
            "content": "8dd767ac7aca8dfaef37a32010f341ea4ee20e8190251b367f47cdbc3cba857e"
          },
          {
            "alg": "SHA3-384",
            "content": "ddf10d5fa1e98ae9f2dc239ebbc532344447588700626ff7a4bbf9db0a5275aceabc9cace28bb19650a5fb30a9cbc9d8"
          },
          {
            "alg": "SHA3-512",
            "content": "34929a8391da886a045a6947b17c875fd3d7c37f85e03d47572d2de359885c101c61a735f9c09cdb8ee4100221acb650389b74071b8c1184e032f2ce2947f67a"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-healthchecks@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-request-logging@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-request-logging",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "4ed78ec6ad895643d486a210151c6da3"
          },
          {
            "alg": "SHA-1",
            "content": "fcd1015d1762059bd9aa27ee06f7fff9a9857d7b"
          },
          {
            "alg": "SHA-256",
            "content": "1795c56717239e25f835211356963f307f596d0efdd16550337ffccbab08bbf3"
          },
          {
            "alg": "SHA-384",
            "content": "94e74e3af10acda9ed56330de1cc6af11de045a634f513dce9494b58ec56aa85e20cc2b3e535f4d49a0dd281590f605a"
          },
          {
            "alg": "SHA-512",
            "content": "f8c521200f29a6301fd92d87eb21ffb765d7c2a05f65fdbfa572955f91b6870604628df1b0f18d4c3d73482d1398bc5730fa2744c6b19b51f909758d614e4de8"
          },
          {
            "alg": "SHA3-256",
            "content": "5cde2026d5ac54d5b1baac22503608eaef11b8753954473d0102d5f87565f944"
          },
          {
            "alg": "SHA3-384",
            "content": "bd16fbeb1c4bd0fe35d3934da27f5a16cee858f1149a708930225d7a76f68caa7db63485d7520af018b4fb13450c489c"
          },
          {
            "alg": "SHA3-512",
            "content": "8d0dfb8c508948c131f0f92b8debf3a9f7ed3f1ec8e1dc4341a68132658143dcecaf890cc11aa22ff9e1959e96a51f311d15ca6d49bc7090c71c9457fedaca29"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-request-logging@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/net.sourceforge.argparse4j/argparse4j@0.8.1?type=jar",
        "group": "net.sourceforge.argparse4j",
        "name": "argparse4j",
        "version": "0.8.1",
        "description": "The command-line parser library based on Python's argparse",
        "hashes": [
          {
            "alg": "MD5",
            "content": "8a3077fbee51bc51d0e140be455b6df5"
          },
          {
            "alg": "SHA-1",
            "content": "2c8241f84acf6c924bd75be0dbd68e8d74fbcd70"
          },
          {
            "alg": "SHA-256",
            "content": "98cb5468cac609f3bc07856f2e34088f50dc114181237c48d20ca69c3265d044"
          },
          {
            "alg": "SHA-384",
            "content": "bef2c86ef1b8c26764fb874afa4936579aefcd91c9508af77aaf800ed496998d43ceb2153efa5de99313a86bb371f6c7"
          },
          {
            "alg": "SHA-512",
            "content": "d9c1e626403b0ad0143fffb62a055b71aacb7d59c9957b232a2e7b7ab2cd9299932784d19e6ef8b0172736ab1625eb2d1e25101eaf1666acfc566b7fcd7c819f"
          },
          {
            "alg": "SHA3-256",
            "content": "3b8a944e495c72b5d7e185effda10431dbe60cfa30c9e31d7cd5ebfdfe0fb20e"
          },
          {
            "alg": "SHA3-384",
            "content": "41353fc401b9279bbcd0e1bcd2c038de4226e7d88024d7e4879f342d98dd371965004f8b5f0d793bb7eb4f78b9411cfb"
          },
          {
            "alg": "SHA3-512",
            "content": "718cec233f4b67bc0fe9210629202aa235aea2bf58a3cc65425cb9d43661d3002677c0534685e08cea3b86cdcb9c5021026c4efdb1820c9700158756bd6bc7b5"
          }
        ],
        "licenses": [{"license": {
          "id": "MIT",
          "url": "https://opensource.org/licenses/MIT"
        }}],
        "purl": "pkg:maven/net.sourceforge.argparse4j/argparse4j@0.8.1?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/tatsuhiro-t/argparse4j/issues"
          },
          {
            "type": "vcs",
            "url": "https://github.com/tatsuhiro-t/argparse4j"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty.toolchain.setuid/jetty-setuid-java@1.0.3?type=jar",
        "publisher": "Mort Bay Consulting",
        "group": "org.eclipse.jetty.toolchain.setuid",
        "name": "jetty-setuid-java",
        "version": "1.0.3",
        "description": "Administrative parent pom for Jetty modules",
        "hashes": [
          {
            "alg": "MD5",
            "content": "24990c296784e354afb446ccb739e826"
          },
          {
            "alg": "SHA-1",
            "content": "73ae4ab171d396103f32e392970641e985d1a845"
          },
          {
            "alg": "SHA-256",
            "content": "192cb1941aa1afefd9851d984fa39a2076f9200c434abba43dab1d410bfaddbd"
          },
          {
            "alg": "SHA-384",
            "content": "5b3f325d6a4e6728a48fbf18d11c01730d5e78ab65530ac1c0aff5daa5c3d620dd386ceb50503cff0e49b8ae3241ad65"
          },
          {
            "alg": "SHA-512",
            "content": "11afcd8eb8968878ce4efb2b54956b04f1a28900b8be6edc1a3482388a3dddd2880b61d1a5c083de41d0cecaa3c8a32d4077f3f15b3f38dcbc71aa64bf40c524"
          },
          {
            "alg": "SHA3-256",
            "content": "b6e2a6fdb8cc4021d17fdc85fb8bea172d25b206eca5c5f49ac5d4e6d1a6f704"
          },
          {
            "alg": "SHA3-384",
            "content": "cf73834a1681a6d06ff0eb18d36e5e5a709662065720577e50cd4e5cb0fede4aa3cf412702e04d2e2624b10d7f44406d"
          },
          {
            "alg": "SHA3-512",
            "content": "224c5ce3bbddf418eb2f1f43f9c3fd3f332ac6b557839942e54fc229e6a8e009ed11aab9e86a78e2642262d0ba43d5c2ff29aa9e96b89c68726d46365d46a000"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty.toolchain.setuid/jetty-setuid-java@1.0.3?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://git.eclipse.org/c/jetty/org.eclipse.jetty.toolchain.git/tree/jetty-setuid"
          },
          {
            "type": "website",
            "url": "http://www.mortbay.com"
          },
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://bugs.eclipse.org/bugs/enter_bug.cgi?product=Jetty"
          },
          {
            "type": "mailing-list",
            "url": "http://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-core@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-core",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "74aec7bf09a957081b1f607b25bfd532"
          },
          {
            "alg": "SHA-1",
            "content": "53889ab39746957180bddc1636f6680eca0db5d7"
          },
          {
            "alg": "SHA-256",
            "content": "a2799ff0fa69d1b0945f9170e6dd29cdd77ed9618ab48abbfcc56111e85effb5"
          },
          {
            "alg": "SHA-384",
            "content": "afd6d58f612dd36132d856ac32366e1a31d05f755372740f64caa02a9bb01294e3270f44938d9e1ae6cb7289b0700ed5"
          },
          {
            "alg": "SHA-512",
            "content": "1fb1b50c2575c36cb518f48e9153a1253d11c0c5e4576dd3866df0d5171694c8507d8f9b78ca983749dd6a8156b81ceac66e8012583d2bb1d6e55c0f5920fd3f"
          },
          {
            "alg": "SHA3-256",
            "content": "19e5d7375794f5eece12bb30304c2a7fec0076902c1bfba468ee96d9ac83f110"
          },
          {
            "alg": "SHA3-384",
            "content": "8bc69d7f451fddb10edd9bef3b0ffc47fcfc7280eef29a8cc55cbd86ab19fd03e194d14a8f5528d0958b90a18ab60e37"
          },
          {
            "alg": "SHA3-512",
            "content": "b955d7c995291eddc86eee34f8c75301f580c4ce6431053b94f197c03f15ed90cc02025214d7ba1864ba76b809af2c2afe8942b5595993ba81a57078b2946852"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-core@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/junit/junit@4.12?type=jar",
        "publisher": "JUnit",
        "group": "junit",
        "name": "junit",
        "version": "4.12",
        "description": "JUnit is a unit testing framework for Java, created by Erich Gamma and Kent Beck.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "5b38c40c97fbd0adee29f91e60405584"
          },
          {
            "alg": "SHA-1",
            "content": "2973d150c0dc1fefe998f834810d68f278ea58ec"
          },
          {
            "alg": "SHA-256",
            "content": "59721f0805e223d84b90677887d9ff567dc534d7c502ca903c0c2b17f05c116a"
          },
          {
            "alg": "SHA-384",
            "content": "e2f0c2db405e282d0f84a1766b9e8d9736d4377e292a5ef8457aec10384f9077005865167025b2779634d75bcb4d62cd"
          },
          {
            "alg": "SHA-512",
            "content": "5974670c3d178a12da5929ba5dd9b4f5ff461bdc1b92618c2c36d53e88650df7adbf3c1684017bb082b477cb8f40f15dcf7526f06f06183f93118ba9ebeaccce"
          },
          {
            "alg": "SHA3-256",
            "content": "02b1f076652120813646a0cb34350f0c73a3299b221567e089f6aaadf8ab444a"
          },
          {
            "alg": "SHA3-384",
            "content": "a24a1d6d5ffe2f9fc3a90a442c3d1d5a12ae7bda3c68996c3b50f00186a2f961808c5ef504a771e9d6ab95ee38a383f0"
          },
          {
            "alg": "SHA3-512",
            "content": "9e8f7057647c11564178e4569cf4f5682d3688b49d81acc60fd301f61053932ee9ac109c19cb639f7710d23afc76cb106ebde0f8143e2fe5fa08605201720a8b"
          }
        ],
        "licenses": [{"license": {
          "id": "EPL-1.0",
          "url": "http://www.eclipse.org/legal/epl-v10.html"
        }}],
        "purl": "pkg:maven/junit/junit@4.12?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.junit.org"
          },
          {
            "type": "build-system",
            "url": "https://junit.ci.cloudbees.com/"
          },
          {
            "type": "distribution",
            "url": "https://github.com/junit-team/junit/wiki/Download-and-Install"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/junit-team/junit/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://groups.yahoo.com/neo/groups/junit/info"
          },
          {
            "type": "vcs",
            "url": "http://github.com/junit-team/junit/tree/master"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.hamcrest/hamcrest-core@1.3?type=jar",
        "group": "org.hamcrest",
        "name": "hamcrest-core",
        "version": "1.3",
        "description": "This is the core API of hamcrest matcher framework to be used by third-party framework providers. This includes the a foundation set of matcher implementations for common operations.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "6393363b47ddcbba82321110c3e07519"
          },
          {
            "alg": "SHA-1",
            "content": "42a25dc3219429f0e5d060061f71acb49bf010a0"
          },
          {
            "alg": "SHA-256",
            "content": "66fdef91e9739348df7a096aa384a5685f4e875584cce89386a7a47251c4d8e9"
          },
          {
            "alg": "SHA-384",
            "content": "4b5297d2a12cc32b824153afc83f1ba9f1869ca288330f0a2f759659d09e4c420eb6ba4a1efbfa0657b625edd41293d5"
          },
          {
            "alg": "SHA-512",
            "content": "e237ae735aac4fa5a7253ec693191f42ef7ddce384c11d29fbf605981c0be077d086757409acad53cb5b9e53d86a07cc428d459ff0f5b00d32a8cbbca390be49"
          },
          {
            "alg": "SHA3-256",
            "content": "f679af77deedf69b3c3066f7916583848c6fd32a950f9c0b0e2ef1da121717ba"
          },
          {
            "alg": "SHA3-384",
            "content": "b14d34985c0a78cf0ba19b5a18bffd403e08adcb2afde228ddef6e16121c7046dbebf58c04d3419311c4496c48aa93be"
          },
          {
            "alg": "SHA3-512",
            "content": "bca821931e438a1977b7b4356b5f8cebf485634f82159d505c48267c34e6a0f4fde9c2917331365f66dc0e52e2ca3a2db5256863584110c27ecebefc28741f63"
          }
        ],
        "licenses": [{"license": {"id": "BSD-3-Clause"}}],
        "purl": "pkg:maven/org.hamcrest/hamcrest-core@1.3?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "https://github.com/hamcrest/JavaHamcrest"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.junit.jupiter/junit-jupiter-engine@5.2.0?type=jar",
        "group": "org.junit.jupiter",
        "name": "junit-jupiter-engine",
        "version": "5.2.0",
        "description": "Module \"junit-jupiter-engine\" of JUnit 5.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "23b9c1eb5cbc9ff595fbedb9d6ff2068"
          },
          {
            "alg": "SHA-1",
            "content": "de87318ccd3dfa1a98ebfef792d362776f1914de"
          },
          {
            "alg": "SHA-256",
            "content": "8f994f4094790e246dc84de86a1ff4194ca85e8b13bedaca0207f727ebfbc813"
          },
          {
            "alg": "SHA-384",
            "content": "9a62c2f344f903a59d0d9f3461cf50b2936a0f191fe943820606bcc1db9631b529581347baefde1e2d16a9654fdbbb89"
          },
          {
            "alg": "SHA-512",
            "content": "f2bf6ab75a111cd2cda9f8d50f62b3986fc7b675b9f14abfa73d44ccbce010b559bb2a7dcee670e8134f1e8859c2c804b87b50b141c6d48a55699cf07f1d75d7"
          },
          {
            "alg": "SHA3-256",
            "content": "1c2e7d5d721f35eb5f4c206f920d5f34a480b5e93d991ff602acbb3002ae6cb3"
          },
          {
            "alg": "SHA3-384",
            "content": "41b8cd6969d0670be6313b394d96eaa4a93872129bae00f95aeb841abcdc39b9bac3bef0dcb65eb298c2374fa2f87e5c"
          },
          {
            "alg": "SHA3-512",
            "content": "de4c58a5d5acfc20a8008f07c94258a6023664c6879518fec9e37eff79f106bb3645979615d792f7de404bf52b8c0e6425902c177458a483a6087bf9a4cdd822"
          }
        ],
        "licenses": [{"license": {
          "name": "Eclipse Public License v2.0",
          "url": "http://www.eclipse.org/legal/epl-v20.html"
        }}],
        "purl": "pkg:maven/org.junit.jupiter/junit-jupiter-engine@5.2.0?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "https://github.com/junit-team/junit5"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.apiguardian/apiguardian-api@1.0.0?type=jar",
        "group": "org.apiguardian",
        "name": "apiguardian-api",
        "version": "1.0.0",
        "description": "@API Guardian",
        "hashes": [
          {
            "alg": "MD5",
            "content": "e3695c130292987799af0d18754fa3fc"
          },
          {
            "alg": "SHA-1",
            "content": "3ef5276905e36f4d8055fe3cb0bdcc7503ffc85d"
          },
          {
            "alg": "SHA-256",
            "content": "1f58b77470d8d147a0538d515347dd322f49a83b9e884b8970051160464b65b3"
          },
          {
            "alg": "SHA-384",
            "content": "eee4058ab9cd459d972befb36c2568d89c6dc2b434b6780e7ca891dd50e00608b3439af3d3ae3c9c6a02a77322aeaeb2"
          },
          {
            "alg": "SHA-512",
            "content": "127f7e6381642f3f0f8298e5129f31cae947b81c4867caaa419803e6dcfeee5da61f0262d2c10c8ad151f24e82f708ce81b2fda217c31dbb21794e6c9ec71e0a"
          },
          {
            "alg": "SHA3-256",
            "content": "a0c6a10c739f2c5d18a639804edb717b2e100aec3ab73b5560e947c28b829f22"
          },
          {
            "alg": "SHA3-384",
            "content": "38f7e8db893e22faa9f00a7eaf5c9e910a6d4564a66f8073c5dabf3b0d28b0aee17fd3af6cb013d30f03774972c718f1"
          },
          {
            "alg": "SHA3-512",
            "content": "54879680c4ac863b6eb3dd2528c02f8c977b127ed2a1d7e123e65baec3c9b33c3d80fd5f0de0cf43eb4f912b6899b2a4753f93bf9883d51e2fd8b8766df3e0c0"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.apiguardian/apiguardian-api@1.0.0?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "https://github.com/apiguardian-team/apiguardian"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.junit.platform/junit-platform-engine@1.2.0?type=jar",
        "group": "org.junit.platform",
        "name": "junit-platform-engine",
        "version": "1.2.0",
        "description": "Module \"junit-platform-engine\" of JUnit 5.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "14405ffac9858d89cc0609b16b8c763c"
          },
          {
            "alg": "SHA-1",
            "content": "35fa3529ce843ada1a10b0909ccb4a8148ee638d"
          },
          {
            "alg": "SHA-256",
            "content": "60b102e94ea01556fdc8c041950a05450edc188e3708f032a6bfb1a50ba0bc22"
          },
          {
            "alg": "SHA-384",
            "content": "136a81bdc6c32bba9acfb5632000336d1c655a29bed1ac9348d19e1ea67c1b7333e1098780bef308ee7dd745068808f1"
          },
          {
            "alg": "SHA-512",
            "content": "d367cad97695832f088e299d873570ea9e4bffd30222a5b3157fd506d9405776cfba78b8dc0b6e2697e96d0008ad65b7a35324fab7386c99257d2a723641b679"
          },
          {
            "alg": "SHA3-256",
            "content": "25189ca0767cdad052cca52e00fb63557e8581d3733cf1272dfa780d668ff140"
          },
          {
            "alg": "SHA3-384",
            "content": "d035552759058e8538c0779eec2e296cc2555ee6303724931b1e0725e51ebe836d69b45a762a08edfb48f411048203d4"
          },
          {
            "alg": "SHA3-512",
            "content": "d8b6d4a3f9bb96a1b6f610038b50f9a647526e5d0a805bcdd4c13603cdb3508a39a4403c9674b9bca67e673a6493f51a7d363e88fe28efd50382f7832bc20f2a"
          }
        ],
        "licenses": [{"license": {
          "name": "Eclipse Public License v2.0",
          "url": "http://www.eclipse.org/legal/epl-v20.html"
        }}],
        "purl": "pkg:maven/org.junit.platform/junit-platform-engine@1.2.0?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "https://github.com/junit-team/junit5"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.junit.platform/junit-platform-commons@1.2.0?type=jar",
        "group": "org.junit.platform",
        "name": "junit-platform-commons",
        "version": "1.2.0",
        "description": "Module \"junit-platform-commons\" of JUnit 5.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "b3199ff22308f68d7dc3e400fe53f51f"
          },
          {
            "alg": "SHA-1",
            "content": "dbce1d822d3dc6c61703b340cd79018518685451"
          },
          {
            "alg": "SHA-256",
            "content": "7771af2f797d1d0ccce9920eb3cd826fb8fd7659ccb4d8877e76d9412be72cc2"
          },
          {
            "alg": "SHA-384",
            "content": "d2c3b97796037028384db1704faf09583b200dfd0b7fc9279f670779c06eeb49c1dde6b6a1c2cea5a6dd53d539bbc8a8"
          },
          {
            "alg": "SHA-512",
            "content": "b08bcfa884c67ae155ea5eb0ae33f0d58e88096015b82ebf3e5a301292b4622aea1514285aeef7361f8b9e4c83e48e5d8842433afe6e3b0b06c7a1c8729b104e"
          },
          {
            "alg": "SHA3-256",
            "content": "87b03d3ecafccbaa1dc2bd068117cf95ac520546131006bd744464ef757ec44a"
          },
          {
            "alg": "SHA3-384",
            "content": "19321d873020a5d91d5fef68abad35ea757a96439ad41082adbb04e660fffed0074ade77075a284f878ce49241b2a0b7"
          },
          {
            "alg": "SHA3-512",
            "content": "9501a107af25b97f4e7a102b9262f8438915cc2e93599a2343255fd1935e3c86853a50934376f509fe45f0f601f4ba8023b02ef091e51c51675469170ed88a70"
          }
        ],
        "licenses": [{"license": {
          "name": "Eclipse Public License v2.0",
          "url": "http://www.eclipse.org/legal/epl-v20.html"
        }}],
        "purl": "pkg:maven/org.junit.platform/junit-platform-commons@1.2.0?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "https://github.com/junit-team/junit5"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.opentest4j/opentest4j@1.1.0?type=jar",
        "group": "org.opentest4j",
        "name": "opentest4j",
        "version": "1.1.0",
        "description": "Open Test Alliance for the JVM",
        "hashes": [
          {
            "alg": "MD5",
            "content": "2edf96ac5b535198bd3a2e31309f779c"
          },
          {
            "alg": "SHA-1",
            "content": "c8e2a3e3bc7f3e4bb5075306452db5290f9b117a"
          },
          {
            "alg": "SHA-256",
            "content": "65a5fd7380f53aac708bcee3091dbe2dba73a9a2e7645b66e70e0804fc36ee3b"
          },
          {
            "alg": "SHA-384",
            "content": "2457ab96d8302a4cba4d6fdb90517193391e28243f938a7059f13d86c1dd2b34c5b413b2464b97b9db0228a38a0e1dd1"
          },
          {
            "alg": "SHA-512",
            "content": "bb72a65673bec0af3d420e96edcc1e3152bdbd0f670e2e09172f00f05549fa3b0a07c40ed2dbeec75da6e548623afa4e343343cca15a7a016aaa6c3e48ab0765"
          },
          {
            "alg": "SHA3-256",
            "content": "f12567dc83accfc6c4022f0941f37a3169cc0697ebbf67a4261136180c2d8a2c"
          },
          {
            "alg": "SHA3-384",
            "content": "e3a82cf24c93d32cf53dd8860267efe47168e0920ed0925d884fec146361f9c0deb2334e335c1c3777bd24e4a6da5c65"
          },
          {
            "alg": "SHA3-512",
            "content": "401aa77733f4ceab47f51b797844f597947cf31a5b76f5c46c6a28980bff30942b783e79e8ab5b5f8ce63d64e8152b6f71b96cc1d500234a8a8e2dd24f734441"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.opentest4j/opentest4j@1.1.0?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "https://github.com/ota4j-team/opentest4j"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.junit.jupiter/junit-jupiter-api@5.2.0?type=jar",
        "group": "org.junit.jupiter",
        "name": "junit-jupiter-api",
        "version": "5.2.0",
        "description": "Module \"junit-jupiter-api\" of JUnit 5.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "d85d733ecb4120eb7ad5be3134d09053"
          },
          {
            "alg": "SHA-1",
            "content": "9cd901df48d88d8e605a6ccb2c3f140c92db6bf2"
          },
          {
            "alg": "SHA-256",
            "content": "47f7d71b35dc331210b9ab219bbb00d54332981aa12eb5effe817de17e1ae7b3"
          },
          {
            "alg": "SHA-384",
            "content": "46ccc4563ce7ac6991838ae8b8572de17b831993254810b2586bc53a2ad9f94a79e41cf8e4c901d39b3ac366f5b1f230"
          },
          {
            "alg": "SHA-512",
            "content": "8b54b50e8e10b9aed8a1d65338b86d3cd28fabba15f536df457689b99145a451f0144c703eaa848e0bf5c7dc7719ec442b479bac1b7d88cb9ba2cddffd0f1f13"
          },
          {
            "alg": "SHA3-256",
            "content": "2a215014d5df1141f50d9c800b004d9bcb391163b05365ba3f9d145a71e69171"
          },
          {
            "alg": "SHA3-384",
            "content": "d6d5041215b413fe0cfb0ec213cf631cbc4b44a59c1c2838025f550f96c6c12ac1109326badb03493dd6898971a6fedb"
          },
          {
            "alg": "SHA3-512",
            "content": "1cb1e7a4279d2949081aad395cd158bf28a8ad12682a3f8962da50f1b3c2b4f64a206089145bdc8e4730b689f791e1f306361c4f8e0044dd88fa9f38f1916cd1"
          }
        ],
        "licenses": [{"license": {
          "name": "Eclipse Public License v2.0",
          "url": "http://www.eclipse.org/legal/epl-v20.html"
        }}],
        "purl": "pkg:maven/org.junit.jupiter/junit-jupiter-api@5.2.0?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "https://github.com/junit-team/junit5"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.mockito/mockito-core@2.24.0?type=jar",
        "group": "org.mockito",
        "name": "mockito-core",
        "version": "2.24.0",
        "description": "Mockito mock objects library core API and implementation",
        "hashes": [
          {
            "alg": "MD5",
            "content": "73056e7138623c31ab0ad3c421c695b8"
          },
          {
            "alg": "SHA-1",
            "content": "969a7bcb6f16e076904336ebc7ca171d412cc1f9"
          },
          {
            "alg": "SHA-256",
            "content": "ae8fd3becb2a8e262507a9df85e54a6e41c5ae3a34cda5495abef6299a587ff6"
          },
          {
            "alg": "SHA-384",
            "content": "63e7116f0f0b6661dbca2b9148d40f60160309ce25e04190d9d9cf50208eab8ff94ace655c4d3b18cc79fe7f1f36c714"
          },
          {
            "alg": "SHA-512",
            "content": "2bde38797a3902909027ec12a58a7adbc5ce86f5f095ee5787b4c12fe873c6ae96bf7e9024c1347eaa189af66b988668d1886dc110118b22eb6c4436e3cceb66"
          },
          {
            "alg": "SHA3-256",
            "content": "30f96a62ee0c4795e9039288888791e0192f1e7a522ecad28200f01135c132bb"
          },
          {
            "alg": "SHA3-384",
            "content": "b9c87e6903f3351303f2f566084bbe2a95ee1b3c758ff9c25c3513f02cdb15472d5a5def1fe4cd82522cfafb77714e9b"
          },
          {
            "alg": "SHA3-512",
            "content": "1afd1e02b726b5b0fc8ee4ff3e2e678c780bf642041e54a7f7c3b136adf7c6d9ae23df2454572ae619279d9e712d5444c55c3c3fee7883b621312331aa7b626a"
          }
        ],
        "licenses": [{"license": {"id": "MIT"}}],
        "purl": "pkg:maven/org.mockito/mockito-core@2.24.0?type=jar",
        "externalReferences": [
          {
            "type": "build-system",
            "url": "https://travis-ci.org/mockito/mockito"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/mockito/mockito/issues"
          },
          {
            "type": "vcs",
            "url": "https://github.com/mockito/mockito.git"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/net.bytebuddy/byte-buddy@1.9.7?type=jar",
        "group": "net.bytebuddy",
        "name": "byte-buddy",
        "version": "1.9.7",
        "description": "Byte Buddy is a Java library for creating Java classes at run time. This artifact is a build of Byte Buddy with all ASM dependencies repackaged into its own name space.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "3038371407163c76c89749c3a7c458b0"
          },
          {
            "alg": "SHA-1",
            "content": "8fea78fea6449e1738b675cb155ce8422661e237"
          },
          {
            "alg": "SHA-256",
            "content": "69a9140c11de463789a1badfe6c3dcdc17608c4304cb443c5c3a179585b78b39"
          },
          {
            "alg": "SHA-384",
            "content": "25e3d2bde578cbebfab73fe394189b93a98e8db0da3d0c860c0b90a780d5afa61dbb9c34e39408a05c78afd08da64bb5"
          },
          {
            "alg": "SHA-512",
            "content": "20547c1915d941c170b855babf102b6d4b7b651cb76d4328fdc5e67be4cfb898e22d76512b2ed402ba2486ba4954ee75e1753e7de6303a94201ee12056ffb2b7"
          },
          {
            "alg": "SHA3-256",
            "content": "fa80df92900c958e6c9c957552698a20f0a817a309947ee232b97c699db77d3e"
          },
          {
            "alg": "SHA3-384",
            "content": "416fa3d19a9634008719b7f77a12223a357c17bdc11ce449afd3a91898d3032441142f74da15eb1e17cd058b610bfade"
          },
          {
            "alg": "SHA3-512",
            "content": "50b10f18e33843c1ec103ce809a83698f785de2675dd6f1da386db8c6158a6539e6b93ec2e10d1c82c819c3cf4c1f33ca9c2cd68a21d0a5520a707acb7a072fb"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/net.bytebuddy/byte-buddy@1.9.7?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "https://api.bintray.com/maven/raphw/maven/ByteBuddy"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/raphw/byte-buddy/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/net.bytebuddy/byte-buddy-agent@1.9.7?type=jar",
        "group": "net.bytebuddy",
        "name": "byte-buddy-agent",
        "version": "1.9.7",
        "description": "The Byte Buddy Java agent allows to access the JVM's HotSwap feature.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "f2c5583a5856a1b68275f70fca2f96fc"
          },
          {
            "alg": "SHA-1",
            "content": "8e7d1b599f4943851ffea125fd9780e572727fc0"
          },
          {
            "alg": "SHA-256",
            "content": "145ce0fab5390374e69b2b4070d65fedaa2b07c3cfad06b330bea1b6dcfa826f"
          },
          {
            "alg": "SHA-384",
            "content": "657691fe01956cbf764774e732b9d729e3c47404b3fdcda36e5165302a980cfe5e41bfaf04bfdd41538b12fc30a7463c"
          },
          {
            "alg": "SHA-512",
            "content": "3b1344ae23e91e02a4465848757f3436f5a51ff58f8a0fe47b032ce5097086a985d927eb23507cc7b29b7a8917ab22942f039949b376f3f27708d3da232e7afb"
          },
          {
            "alg": "SHA3-256",
            "content": "0fc9f6c6083208ef913a49fd9d61d7202477d6ed4c26e0324f4475e656b4fbd6"
          },
          {
            "alg": "SHA3-384",
            "content": "ef2e99c786bd465964cb1039c09aaf533a89a4d0215cca81f82af1ad3ffe4650b6e47420d9a39ddb1a4217c484cdf4f4"
          },
          {
            "alg": "SHA3-512",
            "content": "75a397fe519f03352763554688a7e6432c028b2b154a0553d5d647f7873eb5f066e83f454092438a48976f99cfc0c4b7a41b033852129b9cbc29d09cb22f6ec4"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/net.bytebuddy/byte-buddy-agent@1.9.7?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "https://api.bintray.com/maven/raphw/maven/ByteBuddy"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/raphw/byte-buddy/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.objenesis/objenesis@2.6?type=jar",
        "publisher": "Joe Walnes, Henri Tremblay, Leonardo Mesquita",
        "group": "org.objenesis",
        "name": "objenesis",
        "version": "2.6",
        "description": "A library for instantiating Java objects",
        "hashes": [
          {
            "alg": "MD5",
            "content": "5ffac3f51405ca9b2915970a224b3e8f"
          },
          {
            "alg": "SHA-1",
            "content": "639033469776fd37c08358c6b92a4761feb2af4b"
          },
          {
            "alg": "SHA-256",
            "content": "5e168368fbc250af3c79aa5fef0c3467a2d64e5a7bd74005f25d8399aeb0708d"
          },
          {
            "alg": "SHA-384",
            "content": "502057722913adcad184e16a4be7a65dea54b53c5d035d53ee182226b19c90ce024f5bf78d0d5458eb1e0f2710976405"
          },
          {
            "alg": "SHA-512",
            "content": "23a593bded8cb43236faad2018b008da47bf4e29cc60c2e98fd4f2ed578fe2baddd3a98547dc14273017c82cb19ce8eaaab71d49273411856a2ba1a5d51015fc"
          },
          {
            "alg": "SHA3-256",
            "content": "1fce020475bd27d7eac3a3693e9c6992032739ef6db205c7751c92f8aba4d67a"
          },
          {
            "alg": "SHA3-384",
            "content": "b3ebb3e83ff1711359b118f17ee8ef1c06674f0385b278a1f843a79904490f496039ae54a3d498c436bad54566d3bc8b"
          },
          {
            "alg": "SHA3-512",
            "content": "ec2154e3bb9fa0b74079d4f21af3aa0ae17444da63aa1061d87aac646c070b3733673a4d0880ca58f974dc3358d7b1c6161bf030260474b36b4bae677b777b08"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.objenesis/objenesis@2.6?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "https://api.bintray.com/maven/easymock/maven/objenesis/;publish=1"
          },
          {
            "type": "vcs",
            "url": "https://github.com/easymock/objenesis"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.assertj/assertj-core@3.9.1?type=jar",
        "publisher": "AssertJ",
        "group": "org.assertj",
        "name": "assertj-core",
        "version": "3.9.1",
        "description": "Rich and fluent assertions for testing for Java",
        "hashes": [
          {
            "alg": "MD5",
            "content": "b6b5e7d7ab3e4368244ce2ed48b77b2f"
          },
          {
            "alg": "SHA-1",
            "content": "c5ce126b15f28d56cd8f960c1a6a058b9c9aea87"
          },
          {
            "alg": "SHA-256",
            "content": "b433d96281d663d8f97d7b2eda24f6d05345ef3bd7bf9a4ed440d75728bfdb00"
          },
          {
            "alg": "SHA-384",
            "content": "cf766e8dca9d27faca4f42041d2ae351b9a51c2094a50924d24215f22e6b67fdf2db6d7aef3d149b46cb8c1e0fb68bc2"
          },
          {
            "alg": "SHA-512",
            "content": "153df8b2394db5c54db79930a26ce45ac8ddcaacbaeb800988c41f17d4f39356a32ba8d17fbe143c412a79c2006e53cc1877b409f880e43d96888801bf92766a"
          },
          {
            "alg": "SHA3-256",
            "content": "da01a0373df89903d5d40eabb595618fb15b14b7cd6420598b85d05bc72242fa"
          },
          {
            "alg": "SHA3-384",
            "content": "895c8777fd1b394edab2535558785a2a5936b26ac79c5d3e1de96c5cc4d4466cb25f09f1a6d5c35e99ea739b7be5d5ce"
          },
          {
            "alg": "SHA3-512",
            "content": "8bf381925a0fb7635e8fafbf1b75930a8b129dd3ae9db2ec9d079ad12442a73eb92d34fa454bc3684b7ad59ee2e40cc1509c8a93f1dcded39368fa78b499cbe1"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.assertj/assertj-core@3.9.1?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "https://github.com/joel-costigliola/assertj-core/issues"
          },
          {
            "type": "mailing-list",
            "url": "http://groups.google.com/group/assertj"
          },
          {
            "type": "build-system",
            "url": "https://assertj.ci.cloudbees.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "https://github.com/joel-costigliola/assertj-maven-parent-pom"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.test-framework.providers/jersey-test-framework-provider-inmemory@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.test-framework.providers",
        "name": "jersey-test-framework-provider-inmemory",
        "version": "2.25.1",
        "description": "Jersey Test Framework - InMemory container",
        "hashes": [
          {
            "alg": "MD5",
            "content": "08b74a5a1bd1726464f8cc389dc015e5"
          },
          {
            "alg": "SHA-1",
            "content": "d0bf8edcb87a8e886cf4552e9b5b9a4fddc70794"
          },
          {
            "alg": "SHA-256",
            "content": "95b76e6b4131ec8cc04f3397e3c162219ef34cf661ad52ac86a977ce0b3912b9"
          },
          {
            "alg": "SHA-384",
            "content": "9115f71806d7af8366ceeedb5225bcb33b351f6ca250c411210aa32eae154e9b17e63dab842a4aac82a9c5d6fdd1b7b1"
          },
          {
            "alg": "SHA-512",
            "content": "9fcd31b1c2cbb5e615c1412425088c6dbd6f4acbd4b768a178d2c0a8c545486d5a3a6ad266a6b2faedeff65fa2035017e498b6a9a5bf206646e7d14e3b75d529"
          },
          {
            "alg": "SHA3-256",
            "content": "0a4492d926542aee9f91b73691f712157c031388153270aa6121c3b60e638387"
          },
          {
            "alg": "SHA3-384",
            "content": "20bc33984b7bf9915853dd5a0a12b8ce14c9f5fce33025e9062a68faf8c99135ed5b1c5eaa64eb566be988208dca0754"
          },
          {
            "alg": "SHA3-512",
            "content": "a1db62f01942f3abb36d5fa867e5fb5f4372965c9c57e0f76d992421e85ce6481a34490ac15682656eb11a410c6f7b803e70cbeed635ac86b0d125f50b832074"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.test-framework.providers/jersey-test-framework-provider-inmemory@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.test-framework/jersey-test-framework-core@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.test-framework",
        "name": "jersey-test-framework-core",
        "version": "2.25.1",
        "description": "Jersey Test Framework Core",
        "hashes": [
          {
            "alg": "MD5",
            "content": "92495cea9331aced97489263f2cb191e"
          },
          {
            "alg": "SHA-1",
            "content": "9368dc18933a8b9f2526c86ab310b02781969aa3"
          },
          {
            "alg": "SHA-256",
            "content": "69343548538ec2489fd4a992ea16e42453e96af94538c586fe3345e364bc578b"
          },
          {
            "alg": "SHA-384",
            "content": "86e3ee4ebc01e5669de54138446100d5749a4299f201ac9f8ebcbfb56130ad0deea7a319affde39a419e16ea0a99fd6c"
          },
          {
            "alg": "SHA-512",
            "content": "c2a8a227427d3c80cdaf773ef8813fb2609ecc4c64911ef8c8ee8a09a4ab0f4c608d7433901511c132ba39d49141be85f45032a06757a17e7f2e43efd6a22f6f"
          },
          {
            "alg": "SHA3-256",
            "content": "7dd7ace7d4414db08bd4f2dd4d130629d9eef806d3dbd03a582f8f78372dbe63"
          },
          {
            "alg": "SHA3-384",
            "content": "a8607ef2cdea44628a0fc0ed809a3c0055c39086bcb6b9ca3f5ce6247dc17876deed2181fc36441e1b933ed299a8069b"
          },
          {
            "alg": "SHA3-512",
            "content": "fef833f17bf0c8c9023ffdce1fc6d860d4ce119915fcabc7d8aa48853066fe0967c5220a33c03b41b45c312da4430e1057085652e0db57f5c03485b44715b273"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.test-framework/jersey-test-framework-core@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.hibernate/hibernate-core@5.2.18.Final?type=jar",
        "publisher": "Hibernate.org",
        "group": "org.hibernate",
        "name": "hibernate-core",
        "version": "5.2.18.Final",
        "description": "The core O/RM functionality as provided by Hibernate",
        "hashes": [
          {
            "alg": "MD5",
            "content": "a5e6ac320c1b5fd739d213dc050cfc29"
          },
          {
            "alg": "SHA-1",
            "content": "c1861a015d47f55ffc6cb120216d17af177e0b90"
          },
          {
            "alg": "SHA-256",
            "content": "4688003fc081063f0d73f43424b309bac9bd8589fecb5767e0ad26788a5bfdff"
          },
          {
            "alg": "SHA-384",
            "content": "d789a1e1507e42fe9abc9ddc9fc73f742e462a5f65f16af57273bcfdf356a1c32ec5be6d989a2366fcd7b4bbf7a0f34b"
          },
          {
            "alg": "SHA-512",
            "content": "1b8c1f0d64ec27e8daf8b4b9b1be9511d0a5e99573836c527c79f026048c5acfe10aeda34a5b0c77bf30fc6ebd92976838eb43a065f192e9871531116d686b37"
          },
          {
            "alg": "SHA3-256",
            "content": "ce9cffadac4242733e7743f88c0abb2f659526e54ddab26e60a180cd658a0782"
          },
          {
            "alg": "SHA3-384",
            "content": "e552da8749a710a2e018f9db16f475a3f0def8996fc9775b62c097e386d42a4ab694ec67595001f7dcfec037c1a6a897"
          },
          {
            "alg": "SHA3-512",
            "content": "4e4006d93d10553191cf914ab76f486f222e82ca30d81d786913142c599f6463be48892b5fdb4b5e3dec75c20290f11a0f3d3600dcc306bff81c114e24eba66a"
          }
        ],
        "licenses": [{"license": {
          "name": "GNU Lesser General Public License",
          "url": "http://www.gnu.org/licenses/lgpl-2.1.html"
        }}],
        "purl": "pkg:maven/org.hibernate/hibernate-core@5.2.18.Final?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://hibernate.org"
          },
          {
            "type": "issue-tracker",
            "url": "https://hibernate.atlassian.net/browse/HHH"
          },
          {
            "type": "vcs",
            "url": "http://github.com/hibernate/hibernate-orm"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.hibernate.javax.persistence/hibernate-jpa-2.1-api@1.0.0.Final?type=jar",
        "group": "org.hibernate.javax.persistence",
        "name": "hibernate-jpa-2.1-api",
        "version": "1.0.0.Final",
        "description": "Clean-room definition of JPA APIs intended for use in developing Hibernate JPA implementation. See README.md for details",
        "hashes": [
          {
            "alg": "MD5",
            "content": "01b091825023c97fdfd6d2bceebe03ff"
          },
          {
            "alg": "SHA-1",
            "content": "5e731d961297e5a07290bfaf3db1fbc8bbbf405a"
          },
          {
            "alg": "SHA-256",
            "content": "ab46597e3a057f99c8339fffe14c1d27f9dbd2409ae840c62121b00d983c78bd"
          },
          {
            "alg": "SHA-384",
            "content": "8ad158c54f315587aa3f2c166c9ef3a540a2fafc6d1cdd170eb127669a738ad0c96793ee593ad042e831f6abf009fcc7"
          },
          {
            "alg": "SHA-512",
            "content": "696dd1548504c9ea8d8526411e81bee8b752f12861979da2707d1059b35a8ccb3f018a1d4e2d12436e7c9daec8e63b97fcf980e03032981867cea63d4301f3da"
          },
          {
            "alg": "SHA3-256",
            "content": "fdbf800d9175e82d7e68f9829f1372b65768252d3e165dfeee9c0345b817b8be"
          },
          {
            "alg": "SHA3-384",
            "content": "ccfea23dfe03019e147d23aee35a314e98980b5e2a7ccaae2141a1c273f4cd4df14f088ec59b8b829c4a25082e9e998c"
          },
          {
            "alg": "SHA3-512",
            "content": "8e1e5baa5e4b6f67019bad7ed90a9abf41096ff00b62c9d6f326a756b8ee7e5b62d41068441aa5d9050369a1000a5fbd7898155cb8b18e80367e9cb7c0d3b137"
          }
        ],
        "licenses": [
          {"license": {
            "id": "EPL-1.0",
            "url": "http://www.eclipse.org/legal/epl-v10.html"
          }},
          {"license": {
            "name": "Eclipse Distribution License (EDL), Version 1.0",
            "url": "http://www.eclipse.org/org/documents/edl-v10.php"
          }}
        ],
        "purl": "pkg:maven/org.hibernate.javax.persistence/hibernate-jpa-2.1-api@1.0.0.Final?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "http://opensource.atlassian.com/projects/hibernate/browse/JPA"
          },
          {
            "type": "vcs",
            "url": "http://github.com/hibernate/hibernate-jpa-api"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/antlr/antlr@2.7.7?type=jar",
        "group": "antlr",
        "name": "antlr",
        "version": "2.7.7",
        "description": "A framework for constructing recognizers, compilers, and translators from grammatical descriptions containing Java, C#, C++, or Python actions.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "f8f1352c52a4c6a500b597596501fc64"
          },
          {
            "alg": "SHA-1",
            "content": "83cd2cd674a217ade95a4bb83a8a14f351f48bd0"
          },
          {
            "alg": "SHA-256",
            "content": "88fbda4b912596b9f56e8e12e580cc954bacfb51776ecfddd3e18fc1cf56dc4c"
          },
          {
            "alg": "SHA-384",
            "content": "2e811e531ce30a2a905d093a00de596cf04406413b60422db8252b46125cadf07b71459cf6ac6da575ec030a9bf05e57"
          },
          {
            "alg": "SHA-512",
            "content": "311c3115f9f6651d1711c52d1739e25a70f25456cacb9a2cdde7627498c30b13d721133cc75b39462ad18812a82472ef1b3b9d64fab5abb0377c12bf82043a74"
          },
          {
            "alg": "SHA3-256",
            "content": "babce5c8beb1d5907a7ed6354589e991da7d8d5cbd86c479abfa1e1dfc4d2eb8"
          },
          {
            "alg": "SHA3-384",
            "content": "bdf019332ae8714ef6a3904bb42bb08c1fe4feacf5e6137274884b0377d4e5b5f7aa9fe8e1ef5ca9b3e15f12320fdb67"
          },
          {
            "alg": "SHA3-512",
            "content": "3a8ce565280a157dd6e08fb68c317a4c28616099c56bc4992c38cf74a10a54a89e18e7c45190ce8511360798a87adc92f432382f9d9bdde0d56664b50044b517"
          }
        ],
        "licenses": [{"license": {
          "name": "BSD License",
          "url": "http://www.antlr.org/license.html"
        }}],
        "purl": "pkg:maven/antlr/antlr@2.7.7?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jboss.spec.javax.transaction/jboss-transaction-api_1.2_spec@1.0.1.Final?type=jar",
        "publisher": "JBoss by Red Hat",
        "group": "org.jboss.spec.javax.transaction",
        "name": "jboss-transaction-api_1.2_spec",
        "version": "1.0.1.Final",
        "description": "The Java Transaction 1.2 API classes",
        "hashes": [
          {
            "alg": "MD5",
            "content": "4d3a6329aa429d92e7bf0c2d34302660"
          },
          {
            "alg": "SHA-1",
            "content": "4441f144a2a1f46ed48fcc6b476a4b6295e6d524"
          },
          {
            "alg": "SHA-256",
            "content": "d35b340768f11e683045d0b3b8c2cf0554a0495a675ae8aab5680b34e5d2a69c"
          },
          {
            "alg": "SHA-384",
            "content": "5d7675defd4e5540e38b980b8146d7cb30f0868e630c03cbba55d642accb755ca476a352e333e06126c16e0a98e36c23"
          },
          {
            "alg": "SHA-512",
            "content": "fb751362223bd2f58d40326018b742ecb8bb49e2362b8babbfa6592e10fb0bd4c52192859771d5b4c67954bf3876bda38581795d54a566bfca66f3fdb0bfd4fb"
          },
          {
            "alg": "SHA3-256",
            "content": "5fec9250840d8ae18ebe934e2b302d9f3c91a7166c5f6e90e8a38d19d5463f4a"
          },
          {
            "alg": "SHA3-384",
            "content": "723dcbe36886f982c0c4d430c6d2d9f719800b80f32a77dc098512be68d7509b53d6c9b59c878f35132cbbc95b7b06f3"
          },
          {
            "alg": "SHA3-512",
            "content": "f4846473a8385f28649593671d9307d0a0a1362c9b36a24ea1b6f72daafb59e05b4945ed45bcadc22e52024a5c3cce9c47e9edadcc7a08f1e391b33a510cd971"
          }
        ],
        "licenses": [
          {"license": {
            "name": "Common Development and Distribution License",
            "url": "http://repository.jboss.org/licenses/cddl.txt"
          }},
          {"license": {
            "name": "GNU General Public License, Version 2 with the Classpath Exception",
            "url": "http://repository.jboss.org/licenses/gpl-2.0-ce.txt"
          }}
        ],
        "purl": "pkg:maven/org.jboss.spec.javax.transaction/jboss-transaction-api_1.2_spec@1.0.1.Final?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "https://github.com/jboss/jboss-transaction-api_spec"
          },
          {
            "type": "website",
            "url": "http://www.jboss.org"
          },
          {
            "type": "issue-tracker",
            "url": "https://issues.jboss.org/"
          },
          {
            "type": "mailing-list",
            "url": "http://lists.jboss.org/pipermail/jboss-user/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jboss/jandex@2.0.3.Final?type=jar",
        "publisher": "JBoss by Red Hat",
        "group": "org.jboss",
        "name": "jandex",
        "version": "2.0.3.Final",
        "description": "Parent POM for JBoss projects. Provides default project build configuration.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "77db6e55da888349f5466d2dcf150b14"
          },
          {
            "alg": "SHA-1",
            "content": "bfc4d6257dbff7a33a357f0de116be6ff951d849"
          },
          {
            "alg": "SHA-256",
            "content": "a3a65250cf954f102e74bab23df12540780878231195b585a7a86f4364a53727"
          },
          {
            "alg": "SHA-384",
            "content": "8c19487bb17ef01ca191c3994ef7f1c09e2a4bf10d7a9541ca9bb59331e504ba4ee9a999c6c235070b90784b5f2b2c17"
          },
          {
            "alg": "SHA-512",
            "content": "ad557228414fb1d75750f4495ced69517deac0d26beaeb81e3233fe21254e3b7e3ccefe381971ffb8dbb0d9e0c1e70973623948ffec31efad99298f1107830ed"
          },
          {
            "alg": "SHA3-256",
            "content": "8e4cbfe8f79e619190a121200bb907e2d06c03b5449b3742a6607580a898a2d9"
          },
          {
            "alg": "SHA3-384",
            "content": "482b8a4a78a10c37f284bf75c881ec5f888cf129660ab8da124b552ccba7024d5e0761f33932a5beced3be152672e5d9"
          },
          {
            "alg": "SHA3-512",
            "content": "5afc9d16fc77ecbc3dd653628b11ddfb419a5fae2efa72eca87eaa55c7c6014d03e9fcd190ae9c7c3e50edc78e6a30fe439269439cf7c383c27aaaa43281e975"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.jboss/jandex@2.0.3.Final?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.jboss.org"
          },
          {
            "type": "issue-tracker",
            "url": "https://issues.jboss.org/"
          },
          {
            "type": "mailing-list",
            "url": "http://lists.jboss.org/pipermail/jboss-user/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/jboss/jboss-parent-pom"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.dom4j/dom4j@2.1.1?type=jar",
        "group": "org.dom4j",
        "name": "dom4j",
        "version": "2.1.1",
        "description": "flexible XML framework for Java",
        "hashes": [
          {
            "alg": "MD5",
            "content": "f5710c1d5f5627ae5ce850a0b12ea87a"
          },
          {
            "alg": "SHA-1",
            "content": "3dce5dbb3571aa820c677fadd8349bfa8f00c199"
          },
          {
            "alg": "SHA-256",
            "content": "a2ef5fb4990b914a31176c51f6137f6f04253dd165420985051f9fd4fb032128"
          },
          {
            "alg": "SHA-384",
            "content": "dcc5d1574e166c14aaa2b582bcb53d0b1310e0bc6cca481a727c4b62784c92416abf25b1665534d58f39d9e52711ad5d"
          },
          {
            "alg": "SHA-512",
            "content": "547da0752ffb12ce40800449376f2f7e20f053f816de4ae8adf1a4fad5a3b87ce4e98e95650671a6c9cdcbbf7c20a4b61e711e5ae8d324c923d508bcb07e02e1"
          },
          {
            "alg": "SHA3-256",
            "content": "e0d00e2f06b89df74355383e657d0b7b2a67b4fe3b5de58967eaa27fa0efad90"
          },
          {
            "alg": "SHA3-384",
            "content": "d64fa541bf438398870048660b67abad21579355a168c9c03e5cd941eb0992510c8775664933cebbf8d7e59f7131080b"
          },
          {
            "alg": "SHA3-512",
            "content": "00e4ce0afa1bff9f0abd1d9fd07d76157f26347b4d6931314f6f082c528bb5e60c32eb9bb16c23f5adc5ee5dcb902135fed2a4a5cb3995afb143f1fe1f938959"
          }
        ],
        "licenses": [{"license": {
          "name": "BSD 3-clause New License",
          "url": "https://github.com/dom4j/dom4j/blob/master/LICENSE"
        }}],
        "purl": "pkg:maven/org.dom4j/dom4j@2.1.1?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.hibernate.common/hibernate-commons-annotations@5.0.1.Final?type=jar",
        "publisher": "Hibernate.org",
        "group": "org.hibernate.common",
        "name": "hibernate-commons-annotations",
        "version": "5.0.1.Final",
        "description": "Common reflection code used in support of annotation processing",
        "hashes": [
          {
            "alg": "MD5",
            "content": "2a9d6f5a4ece96557bc4300ecc4486fb"
          },
          {
            "alg": "SHA-1",
            "content": "71e1cff3fcb20d3b3af4f3363c3ddb24d33c6879"
          },
          {
            "alg": "SHA-256",
            "content": "9431ca05c335f9b6ec550f5d65ad56047a5f336e2d41cce4067591d20c4e51df"
          },
          {
            "alg": "SHA-384",
            "content": "49b4f104b614ac780475228bc838ef2c243070356a28a68fdd0d95325464998af02dd3de58af8a5516fda0aba7964bc0"
          },
          {
            "alg": "SHA-512",
            "content": "5714692bef862355cf7f9fcf82aa663321da193920adf4b584fe69f559535555c4c53858a2465410ffb990aad7847124dbea28ed95dcec5df525a1164288791f"
          },
          {
            "alg": "SHA3-256",
            "content": "60cf1ea8120252eaa90e0e86662f4d0b97f718c3c6c09422f2b85c1b36222ea5"
          },
          {
            "alg": "SHA3-384",
            "content": "f666e8452319e405cfdb54b4b0716e8f9c494c40ce7e69c6152cbcbe515be21c0422182ace942b3a3cf8a78ca9aab89e"
          },
          {
            "alg": "SHA3-512",
            "content": "a2972a8464a8b38468994ef496d6e816262eef6e9422f4c83d5eb998aea4134ac1160726c71fb577df664064fa13c564c52c6fa577ad2477515291ed825fe79c"
          }
        ],
        "licenses": [{"license": {
          "name": "GNU Lesser General Public License",
          "url": "http://www.gnu.org/licenses/lgpl-2.1.html"
        }}],
        "purl": "pkg:maven/org.hibernate.common/hibernate-commons-annotations@5.0.1.Final?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://hibernate.org"
          },
          {
            "type": "issue-tracker",
            "url": "https://hibernate.atlassian.net/browse/HCANN"
          },
          {
            "type": "vcs",
            "url": "http://github.com/hibernate/hibernate-commons-annotations"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.ext.rx/jersey-rx-client@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.ext.rx",
        "name": "jersey-rx-client",
        "version": "2.25.1",
        "description": "Jersey Reactive Client extension implementation.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "2c180a0fe223e22fc0e0b0b81eedd18f"
          },
          {
            "alg": "SHA-1",
            "content": "b31b3313f48583220986877365f5e2413541f207"
          },
          {
            "alg": "SHA-256",
            "content": "c51bad47579898505a3283f06939c5caa4df5f1bf47ebf114069e04d3cdd33eb"
          },
          {
            "alg": "SHA-384",
            "content": "72934e7ada8ad06efc85ccfc9fc27fdb7a4ee38095f52e9a1aea937726390fa480a6e5d4061d4168798cf59f72483e26"
          },
          {
            "alg": "SHA-512",
            "content": "5743abf930cc5a53cac24b1b3a8a9abcba71ec4c56c11943d8b68f6b8806eccae6268c4659b7321d05ff039f2f7a21daef62308ef4746b65083cbb925bf9c570"
          },
          {
            "alg": "SHA3-256",
            "content": "6c9cde47931076cfade1adbb27e7d708b9ed5549b599677e69e9e7617fa32e84"
          },
          {
            "alg": "SHA3-384",
            "content": "73a00386787ce3700ef829ff2a91afbc226b004558f809f2bd39a48b9e7f88c3eff6f1ab7558efa8fbd0e3ab94ba5c36"
          },
          {
            "alg": "SHA3-512",
            "content": "8b9a6428336db948562751a37ad6758cd1b6a678a70759da3dba1a43d5312b86a97dd6ced61d48c5473b9d73a0fa450e103a7d687a791733f0c2edde4e880cf2"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.ext.rx/jersey-rx-client@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.apache.httpcomponents/httpclient@4.5.7?type=jar",
        "publisher": "The Apache Software Foundation",
        "group": "org.apache.httpcomponents",
        "name": "httpclient",
        "version": "4.5.7",
        "description": "Apache HttpComponents Client",
        "hashes": [
          {
            "alg": "MD5",
            "content": "deed71468af21d6f0cf02bf853ac02ec"
          },
          {
            "alg": "SHA-1",
            "content": "dda059f4908e1b548b7ba68d81a3b05897f27cb0"
          },
          {
            "alg": "SHA-256",
            "content": "807e9c73f27a4b19dd04b1b67126532fc74b0a37bd8d13fbad073ad74d078330"
          },
          {
            "alg": "SHA-384",
            "content": "041da3a956443f285825d23ed33e17a5cd8cf17c0bc2140627ed099f14ad316c87fb85c6565fff821ea71c803b313be7"
          },
          {
            "alg": "SHA-512",
            "content": "459349c2482338644578502cbdfeb7110c3eaaa71f8bbc715d53556b186f16ad1256244e752cec7c32c66f77e08228bdadf7c9138542b0aa8e845a249e2e0bac"
          },
          {
            "alg": "SHA3-256",
            "content": "9e5093efad2b3a44e71b077eae4ca7df86e2fd2ad78d5ca25541e4316ce631c8"
          },
          {
            "alg": "SHA3-384",
            "content": "efd802612e5607de7b8f4890d8f9cdefc757698f5ff049290ca0778fef58e81439475a1dccb6eee9e61fd041322341e9"
          },
          {
            "alg": "SHA3-512",
            "content": "f16fb6262810546026c6c68842f69eb17831669e444cafb75832ae3567f47407504424c13fea596e9c02ccf853f6b55d54a904cbf2d21e171f77cc615d740014"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.apache.httpcomponents/httpclient@4.5.7?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.apache.org/"
          },
          {
            "type": "issue-tracker",
            "url": "http://issues.apache.org/jira/browse/HTTPCLIENT"
          },
          {
            "type": "vcs",
            "url": "https://github.com/apache/httpcomponents-client/tree/${project.scm.tag}"
          },
          {
            "type": "mailing-list",
            "url": "http://mail-archives.apache.org/mod_mbox/hc-httpclient-users/"
          },
          {
            "type": "distribution",
            "url": "https://repository.apache.org/service/local/staging/deploy/maven2"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.apache.httpcomponents/httpcore@4.4.11?type=jar",
        "publisher": "The Apache Software Foundation",
        "group": "org.apache.httpcomponents",
        "name": "httpcore",
        "version": "4.4.11",
        "description": "Apache HttpComponents Core (blocking I/O)",
        "hashes": [
          {
            "alg": "MD5",
            "content": "9299550b06219959d0f2223b1a8bb337"
          },
          {
            "alg": "SHA-1",
            "content": "de748cf874e4e193b42eceea9fe5574fabb9d4df"
          },
          {
            "alg": "SHA-256",
            "content": "d799522d579aac06b170603f8f080f6e3248dadc01f9652cdd7ea7bc318c21ce"
          },
          {
            "alg": "SHA-384",
            "content": "3eb8dac39d5dff30233c11fb76442b61ada4c5b6a05b5abdce4be7ac9cb4af152ea0bc3ad13aa9d0eed05822b831dd4f"
          },
          {
            "alg": "SHA-512",
            "content": "1f45a26f97e5488bf1985f5f5c88c5e2744f46d422040708f7641deb14bb04561bcec35c9284c1dce606fcdcb768edc3ef970ef965bd6bb591ec362dfd417c74"
          },
          {
            "alg": "SHA3-256",
            "content": "0807acdffb841394a948175382b04dfdb49087e19212851dbb63fbfadfae6f5f"
          },
          {
            "alg": "SHA3-384",
            "content": "c25059720d0e69cac12955382f56ae9f73bd197a26f333e75a8052c519d2710ea4aeb052f166a8deaa42cbe9e4aebbf2"
          },
          {
            "alg": "SHA3-512",
            "content": "10f7974d10971a2c0911a1050e3418e898c4255300a120959ef38f546d10dc5ba5217a32a53a21577613ca13034a8200393b0b7ddee0b195f26b92f3e6b2f1cf"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.apache.httpcomponents/httpcore@4.4.11?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.apache.org/"
          },
          {
            "type": "issue-tracker",
            "url": "http://issues.apache.org/jira/browse/HTTPCORE"
          },
          {
            "type": "vcs",
            "url": "https://github.com/apache/httpcomponents-core/tree/${project.scm.tag}"
          },
          {
            "type": "mailing-list",
            "url": "http://mail-archives.apache.org/mod_mbox/hc-httpclient-users/"
          },
          {
            "type": "distribution",
            "url": "https://repository.apache.org/service/local/staging/deploy/maven2"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/commons-codec/commons-codec@1.11?type=jar",
        "publisher": "The Apache Software Foundation",
        "group": "commons-codec",
        "name": "commons-codec",
        "version": "1.11",
        "description": "The Apache Commons Codec package contains simple encoder and decoders for various formats such as Base64 and Hexadecimal. In addition to these widely used encoders and decoders, the codec package also maintains a collection of phonetic encoding utilities.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "567159b1ae257a43e1391a8f59d24cfe"
          },
          {
            "alg": "SHA-1",
            "content": "3acb4705652e16236558f0f4f2192cc33c3bd189"
          },
          {
            "alg": "SHA-256",
            "content": "e599d5318e97aa48f42136a2927e6dfa4e8881dff0e6c8e3109ddbbff51d7b7d"
          },
          {
            "alg": "SHA-384",
            "content": "9ae3d8fd4c38f3af52c76c5f98039109901cb0f70700e6d9999b27cc4b30b188e2688aa4adcf6b846376bc3ca125907a"
          },
          {
            "alg": "SHA-512",
            "content": "d9586162b257386b5871e7e9ae255a38014a9efaeef5148de5e40a3b0200364dad8516bddd554352aa2e5337bec2cc11df88c76c4fdde96a40f3421aa60650d7"
          },
          {
            "alg": "SHA3-256",
            "content": "90ec34f9701a8b212c65e6167c505ea6417289f910deedcac8517075b8349728"
          },
          {
            "alg": "SHA3-384",
            "content": "bd272e22540371e7d834cd897bce9be657293ba9c5584e0d47a4073711dacb524cc59e294e942ffc01613d17ac7d6ac1"
          },
          {
            "alg": "SHA3-512",
            "content": "101bc04efae2bd16d7923e61bca922c4a006b0e4b34909e0f8865196cb4df4f4f6269737c17880b4dfd0309cb487b806e88d09c6e1a7dc70237563b3f4312f7f"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/commons-codec/commons-codec@1.11?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "http://issues.apache.org/jira/browse/CODEC"
          },
          {
            "type": "vcs",
            "url": "http://svn.apache.org/viewvc/commons/proper/codec/trunk"
          },
          {
            "type": "build-system",
            "url": "https://builds.apache.org/"
          },
          {
            "type": "mailing-list",
            "url": "http://mail-archives.apache.org/mod_mbox/commons-user/"
          },
          {
            "type": "website",
            "url": "https://www.apache.org/"
          },
          {
            "type": "distribution",
            "url": "https://repository.apache.org/service/local/staging/deploy/maven2"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-httpclient@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-httpclient",
        "version": "4.0.5",
        "description": "An Apache HttpClient wrapper providing Metrics instrumentation of connection pools, request durations and rates, and other useful information.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "023faaf10f012b67e15faa137d106f21"
          },
          {
            "alg": "SHA-1",
            "content": "d02819ff820207d03d0082ef24cd36157d7c5188"
          },
          {
            "alg": "SHA-256",
            "content": "12112aebd3bb53cc5451846202f4333588dc5455e4739c0c2360103700c24e42"
          },
          {
            "alg": "SHA-384",
            "content": "d5d16d52755438be47b72add20a5e83300722e185cdf91052d88bc5bdebe89c2033e059cf3bb0de6ed7546d2abcde9a5"
          },
          {
            "alg": "SHA-512",
            "content": "9c991dae8890b35046c258536884d68f821d1e4aabb65c8e1c845309fadf0e9e2849e0653bc6aa5a008336569d8eb71a660a06f402a7a933a3da85604c45e67b"
          },
          {
            "alg": "SHA3-256",
            "content": "f2bd98bc7e39c259544dc04853e5404d6cdf9c7095fcc718ba65b597a377ef33"
          },
          {
            "alg": "SHA3-384",
            "content": "641127760396e85d84efc7f623b1a4af061f0c3e3bdd10be336edba6b4ab4cbd548269fc6c7b718253ae4f50874e065b"
          },
          {
            "alg": "SHA3-512",
            "content": "7fa6cba3b553b5c3ffc943ca2ff387d2b542d7170bcea5b43fffe150cd0a3849244ec3a2bbcfce28e8f9d762a925e4cbc7101785f2c3c4d00af61e2f97d00dcb"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-httpclient@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.connectors/jersey-apache-connector@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.connectors",
        "name": "jersey-apache-connector",
        "version": "2.25.1",
        "description": "Jersey Client Transport via Apache",
        "hashes": [
          {
            "alg": "MD5",
            "content": "1249f4c7b0e42fb205fd6479f8212b7f"
          },
          {
            "alg": "SHA-1",
            "content": "778d56a186caae0c0e321afb7bf497452f60ecc6"
          },
          {
            "alg": "SHA-256",
            "content": "98236fdeb22a34405095a70099e63cdfe72c726c3c6588c8105092b234bbca3a"
          },
          {
            "alg": "SHA-384",
            "content": "363e565c70b953a18ff06fd5d8e8dd191a69eaaf0c3a32dd2e5ca87c545981373a71a4964d0c4c53f77b840d0212e8b0"
          },
          {
            "alg": "SHA-512",
            "content": "cd9d72b8e24524fd017fad60bea318cf72b7260bfe9826f3019181d8749f906cc579ff4b25c50d869edc9e7ad92c1a216e4c143957de5d5f810f14f3d2124058"
          },
          {
            "alg": "SHA3-256",
            "content": "51423295a961ef5c2c0b70f2a3e80ff7cd9d356b9fdf0951dbc0d42ee7d283c5"
          },
          {
            "alg": "SHA3-384",
            "content": "e4dc8efb134a9b5cae1a71f71b850850a957acb938c7c3b690c0ad5e38a8d7b1aaf429821405e7e18c1f2442eb687b9d"
          },
          {
            "alg": "SHA3-512",
            "content": "f95bb4d125a7146cfe7ff8e9d4480c3f479bffa0fcb5398400a2b2faa1851c3ebda38e1bbf49a0d4d5671dd336ebc665ef1fef26a4ad8f65d715c118f703de36"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.connectors/jersey-apache-connector@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.apache.tomcat/tomcat-jdbc@9.0.16?type=jar",
        "group": "org.apache.tomcat",
        "name": "tomcat-jdbc",
        "version": "9.0.16",
        "description": "Tomcat JDBC Pool Package",
        "hashes": [
          {
            "alg": "MD5",
            "content": "b673d21c2c73b44c6fdee89f6c9995fc"
          },
          {
            "alg": "SHA-1",
            "content": "5304a28c25bb88c57da9561e4ed0bbfcc72dcb4a"
          },
          {
            "alg": "SHA-256",
            "content": "0fe8cdd9c6a349fbf1d7246b5503f113a4fb11f1e71c2e529308f1dd22ed5019"
          },
          {
            "alg": "SHA-384",
            "content": "cf71271b3c6df60c686046731514ff10e6365fe88bfe8358b8fb16e798be2c1f128a69a3c8876fe1bdf16d7664a41fa3"
          },
          {
            "alg": "SHA-512",
            "content": "698da1e4dda1d18463f885e6b9dfed61c12920af35ccdfc9015ecfbd8f353d0aefde38f1f71f68ea5b2d9f6610df9cde38e8fa6ec0b405a925a861e8ca0de5b1"
          },
          {
            "alg": "SHA3-256",
            "content": "013e3a72e6a19fea3c245ca9989853b836ed598c9b5551c399222a511be6b569"
          },
          {
            "alg": "SHA3-384",
            "content": "75af0acc955733ea6ba63cdff08276f8b2b11c6631e97d9c6a044b73a0a4df486a941e4ee5eb872cda2044ec33f77c1c"
          },
          {
            "alg": "SHA3-512",
            "content": "bec64a6591071bb6d5e18412eac3eaaa9814c33448bb2f43d6e039e0538ad85f387fd3817915b5928c41aeabb84d3cd90c0c51f783accb38e3344a32fef206ed"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.apache.tomcat/tomcat-jdbc@9.0.16?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.apache.tomcat/tomcat-juli@9.0.16?type=jar",
        "group": "org.apache.tomcat",
        "name": "tomcat-juli",
        "version": "9.0.16",
        "description": "Tomcat Core Logging Package",
        "hashes": [
          {
            "alg": "MD5",
            "content": "5dbec493081a051b6868b84881fa6ab9"
          },
          {
            "alg": "SHA-1",
            "content": "b6ef3c1ac1104b6e3fbdc106e194bf2fb5e2e2a8"
          },
          {
            "alg": "SHA-256",
            "content": "cc155efa8104af3d35daf3226284b638b10d9def4074ebf6176cb47b3a264f53"
          },
          {
            "alg": "SHA-384",
            "content": "db555e93f7ff6801a8c5927cc02742b97d4e9d0f0ca4f41fbc8cf95d0236fc46d3a062d9c43004b006ce88fb45b319fd"
          },
          {
            "alg": "SHA-512",
            "content": "fd19c0dd3bc60b050065b7c1992c4662f5e02ecc74176528b24a42f03fa42b805ce3529f813e2d0b85f6d21fa46f43a0146069372fbb96dd821bf9778ecb38b0"
          },
          {
            "alg": "SHA3-256",
            "content": "c4782f32dcf2d8516d4b4ae299af008385dc44a92380edab0ced40738ba56b67"
          },
          {
            "alg": "SHA3-384",
            "content": "2cdb026af05481a7e470c64e00701fd94d9a5030f67b5343f98d51430e429afda3caadd6d9e680cbc71d3c7d79c6157b"
          },
          {
            "alg": "SHA3-512",
            "content": "d37ef89204a97677283c417ceae3031fd89648079e42924bf9c38456b1055442dad8f8f6366da1600feee8e448b59bdff8261e101913b99f24b9dde278469cd7"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.apache.tomcat/tomcat-juli@9.0.16?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-db@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-db",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "d9ddd3b9a686d7332cdec2628f5b752e"
          },
          {
            "alg": "SHA-1",
            "content": "88dfe54a2b0b04d4254c39b5929a6bccb73c0fb8"
          },
          {
            "alg": "SHA-256",
            "content": "718fc5d891166a4febb26f92560148b8b7a1c39a9f4c5719ca7380974430634f"
          },
          {
            "alg": "SHA-384",
            "content": "f0d1411bd8f3521e8a3171f4c31090f3f4c93fd9e8bb6a974302932976b220d75c9751ccb5b288832603238b2bf95c84"
          },
          {
            "alg": "SHA-512",
            "content": "3615d6aa65fb7df9f5338d2bd4bccff6e0cebbaceaa067bae04e43a7a1a6852157b23f929ea6a6212fe2928b8b1c6ad3282dfe4c37e60e77df7eea3b716105d5"
          },
          {
            "alg": "SHA3-256",
            "content": "e49bcfe1ce234abeefb3fe5f739322eba64b36ebb0a13cca193da7ab496d29fd"
          },
          {
            "alg": "SHA3-384",
            "content": "f0e12ad7ae12f83dd9121ed4748adec2601bac058ddef3b0452cc927ede25d8eee42347ccd82783d1675c5e9bdaaee60"
          },
          {
            "alg": "SHA3-512",
            "content": "6ff81a052e35eb6a923c2af9dea65ab43048e5a839ff8cb94dfd2d13d8666f2ce5bf3160bbd98ef81bea4f7b5e42f8019d4f25e1d93c16411027c8e3e40c4c90"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-db@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jdbi/jdbi@2.78?type=jar",
        "group": "org.jdbi",
        "name": "jdbi",
        "version": "2.78",
        "description": "jDBI is designed to provide convenient tabular data access in Java(tm). It uses the Java collections framework for query results, provides a convenient means of externalizing sql statements, and provides named parameter support for any database being used.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "ea7256f4877d929815d317c3f918de7e"
          },
          {
            "alg": "SHA-1",
            "content": "7281bb97a89ec38db81a901a3c07ed7204efe828"
          },
          {
            "alg": "SHA-256",
            "content": "a833944751416b95a397768c530b6796fd22fe01ff3d56f44ab80c2087096572"
          },
          {
            "alg": "SHA-384",
            "content": "b421df6a4952a9942ea169202bf56527689f187d63c7a1cc604043aac6383086b6710994143bb72637c5a291910d1edb"
          },
          {
            "alg": "SHA-512",
            "content": "0699d1cee041bbb7f2e9857f0d4265e55af3c93e62c1d10090fa3472a3af4f052c4b6c1431eca53bf2e2ddb1df1358ac29fba6776fb0406a2c3edbe30fe73607"
          },
          {
            "alg": "SHA3-256",
            "content": "85bab22465bd6c4128b3a3805184b780dd41c6984d6e056d7ec22b904b94649b"
          },
          {
            "alg": "SHA3-384",
            "content": "f128930891a9ff6f73ac6cc2493011300bfc9e8e2e3e275b52c6cf91b8f35db7d88ddb390ee3ef28263f5a1a825d7527"
          },
          {
            "alg": "SHA3-512",
            "content": "0d3f050c4f71bfab5404ac1674306bd837ff7710b9b04893dcfe88baa3d0d3f647ee515c3b0a3159d4f6d3791f187927dabed54f05fcfa3b42bd4f0bbae93586"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/org.jdbi/jdbi@2.78?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "https://github.com/jdbi/jdbi/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-jdbi@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-jdbi",
        "version": "4.0.5",
        "description": "A JDBI wrapper providing Metrics instrumentation of query durations and rates.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "7700c4ec787e2355d290e0f40820de15"
          },
          {
            "alg": "SHA-1",
            "content": "005441385ea7bf674fc480dc6bc6dcff6a7278ec"
          },
          {
            "alg": "SHA-256",
            "content": "6858a83724e2df638c475425ea48811ca84c28fc778f92251209e17317e225c4"
          },
          {
            "alg": "SHA-384",
            "content": "e46d424c8535668e5d9233d7569be96102ab71e85c9918c15ffb0a1463f9b20b7b90c93baff5cc8a93d37149b4a1f413"
          },
          {
            "alg": "SHA-512",
            "content": "671beb600961db9ca14f043225670c18035f3db932ad67bb6f04bae4a57e67e7265b317d851009bd764344dcfdffe8073156b4f517e8c71954af2575bb7c9f32"
          },
          {
            "alg": "SHA3-256",
            "content": "95a48e7ac5a1e6dfd2590e1a79b046017a90b7dce17322d35f10d18408d42526"
          },
          {
            "alg": "SHA3-384",
            "content": "232fd5be1b0cd8b635508559fd0bbaa272b22b04e1a0615cef1bed1eb8da41630791f7aaec710eb3825e2ee52c2ccfc1"
          },
          {
            "alg": "SHA3-512",
            "content": "f68985671638695e6ddbf6260010a5a23e2f841c781ea6b4fbe91a0c6c9bcbcc1fd8d9d4501a02e4f86922d8f7071154d54c3c281d662e9c4262014599c37393"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-jdbi@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jdbi/jdbi3-core@3.5.1?type=jar",
        "group": "org.jdbi",
        "name": "jdbi3-core",
        "version": "3.5.1",
        "description": "jdbi is designed to provide convenient tabular data access in Java(tm). It uses the Java collections framework for query results, provides a convenient means of externalizing sql statements, and provides named parameter support for any database being used.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "bee3bded3f553bb751676f66de7051d8"
          },
          {
            "alg": "SHA-1",
            "content": "fdb08f92dd4762d9a12864b685961cbef3807adb"
          },
          {
            "alg": "SHA-256",
            "content": "05ba5a61131fee448927dd7d06fe2e0699b9c4756ece6bc844431dc1f5a3b671"
          },
          {
            "alg": "SHA-384",
            "content": "36b7c7934c6f79fc407b3a0210c3a7918211b9333ca9d033e70256b31d5f5a99cb316f10d30937d35a2790c72c5486a4"
          },
          {
            "alg": "SHA-512",
            "content": "3b8de628e4b5ba4acbedb21b4f74cbf7003fa1ce68125e8e2c8c9bb49ba38c478a34b27505bcda18e5072b47ae706a280e3db7fb53f90196d3f87543148e9b3d"
          },
          {
            "alg": "SHA3-256",
            "content": "7b63cdd3df09bd5e6881f455db13e74d5a4f80764072d376d80814eaf28a423c"
          },
          {
            "alg": "SHA3-384",
            "content": "5fe16ae4f5c5a3110b17869ea449f2b2670c7cd81271e52304014c6b189c39b71e521b22179d7d54da225c9d165c8164"
          },
          {
            "alg": "SHA3-512",
            "content": "9de02c1b6f19a44b6a29054da8c80e9139d03c2eeee8e908dbb8592bbffd8926a95f45f9e56f1aee85f77665cf24e2abe7e4d888ebe407fbb01be6f541c9befd"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/org.jdbi/jdbi3-core@3.5.1?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "https://github.com/jdbi/jdbi/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.antlr/antlr-runtime@3.4?type=jar",
        "group": "org.antlr",
        "name": "antlr-runtime",
        "version": "3.4",
        "description": "A framework for constructing recognizers, compilers, and translators from grammatical descriptions containing Java, C#, C++, or Python actions.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "0e0318be407e51fdf7ba6777eabfdf73"
          },
          {
            "alg": "SHA-1",
            "content": "8f011408269a8e42b8548687e137d8eeb56df4b4"
          },
          {
            "alg": "SHA-256",
            "content": "5b7cf53b7b30b034023f58030c8147c433f2bee0fe7dec8fae6bebf3708c5a63"
          },
          {
            "alg": "SHA-384",
            "content": "6ee2dcd3cf8366fe6ee18fb87aebe2d162b232c89e0aab417f97fed368cdf652d27db518dc5e71aa2a4aadda2e7f4c7a"
          },
          {
            "alg": "SHA-512",
            "content": "1786aff2df4664483adcb319e64be7b69b643ac9508c3f11796b5aa45b9072b46f53f0a21b2ff7291162afe81506de16161746273e4532ebad75adbd81203f0d"
          },
          {
            "alg": "SHA3-256",
            "content": "3f6cf631e9f792a41128400f8690266d915c0588ef85073a6cae73624a155b10"
          },
          {
            "alg": "SHA3-384",
            "content": "db284c93203cbbec1b22b482a45c70c68e858a90e73b23fae66c1bc53231b0f61c5576fcf51ea0d3a30070428d7dd865"
          },
          {
            "alg": "SHA3-512",
            "content": "13d1f73c44e807b36946c21cfd506e91e8cbdf685b770cbc0dcb4e55ec28b5bc91bd90eb7f24ebfd13386a47eccf552dd2a1ab277fccabafdb7a9b40aa9d4fc5"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/org.antlr/antlr-runtime@3.4?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://fisheye2.cenqua.com/browse/antlr"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.antlr/stringtemplate@4.0.2?type=jar",
        "group": "org.antlr",
        "name": "stringtemplate",
        "version": "4.0.2",
        "description": "StringTemplate is a java template engine for generating source code, web pages, emails, or any other formatted text output. StringTemplate is particularly good at multi-targeted code generators, multiple site skins, and internationalization/localization. It evolved over years of effort developing jGuru.com. StringTemplate also generates the stringtemplate website: http://www.stringtemplate.org and powers the ANTLR v3 code generator. Its distinguishing characteristic is that unlike other engines, it strictly enforces model-view separation. Strict separation makes websites and code generators more flexible and maintainable; it also provides an excellent defense against malicious template authors. There are currently about 600 StringTemplate source downloads a month.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "b270a7b34c953cbae921a4080d5cdc0f"
          },
          {
            "alg": "SHA-1",
            "content": "e28e09e2d44d60506a7bcb004d6c23ff35c6ac08"
          },
          {
            "alg": "SHA-256",
            "content": "8056d5586e1b18d3def6347b5d020a85722d850bb9f4d7a9aafe4f842c651ef9"
          },
          {
            "alg": "SHA-384",
            "content": "351d2e92f54bf5cd03b1fc3cf96f7f988465d877d0691935e1e2ec8d3f643b6a7775b2e2f04c1645cd03af5d4f87a1e8"
          },
          {
            "alg": "SHA-512",
            "content": "cd396cbc93d096812700c3a05e4b548c31d73c5f1f66f12bdd3364218de591cefb76e1f0557e83204285f1e868f0f327cf556bb32c4552e0a3537cf6ac1efa43"
          },
          {
            "alg": "SHA3-256",
            "content": "d79aa95dd924c18de8f5ef5fc510f92cecb781d5724ba9b948e8658191e920b6"
          },
          {
            "alg": "SHA3-384",
            "content": "a5e92fd8846554125ea5c58c8f243439d469d91f3fd951b4680b404f6c8e3f39bd619059020105c2433e57e668a8eb89"
          },
          {
            "alg": "SHA3-512",
            "content": "da67f10539c0f73ddb56e945f5c7b42aea76411b4067362685f92c916da055f2747176a1524f97f52d7ae0d70898256c9549290448194d6fd99b3bfbff3332a9"
          }
        ],
        "licenses": [{"license": {
          "name": "BSD licence",
          "url": "http://antlr.org/license.html"
        }}],
        "purl": "pkg:maven/org.antlr/stringtemplate@4.0.2?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "http://fisheye2.cenqua.com/browse/stringtemplate"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/net.jodah/expiringmap@0.5.6?type=jar",
        "group": "net.jodah",
        "name": "expiringmap",
        "version": "0.5.6",
        "description": "A high performance thread-safe map that expires entries",
        "hashes": [
          {
            "alg": "MD5",
            "content": "fd4b2d42dac784648fe6fd1b2b612d12"
          },
          {
            "alg": "SHA-1",
            "content": "11833abbdd64050d455187f374dc096944f9ffb0"
          },
          {
            "alg": "SHA-256",
            "content": "06f1ac1fdb0044a83bbf5cd55e86f88ded92175cb2a7a0b57ba53eb011600a52"
          },
          {
            "alg": "SHA-384",
            "content": "b85eab4ca24212fd8f7d2b5917fe95f31ba0c6f34bf200a1ed508a4377d9e26b02df8d5bf2b645bf489cd53b9368ee15"
          },
          {
            "alg": "SHA-512",
            "content": "3e7bf8da26296f1de8da960e4f8b9b25962d3db1a941c0818c649174c61bf571a6c7b0336b154be104c853a8fa148cd0f007f8a210a98854036a09fe1069eded"
          },
          {
            "alg": "SHA3-256",
            "content": "a421ccc1ee40dad4e7239f21862e7f35a8eb6493d3eccf6e245202d1f3d1e9a8"
          },
          {
            "alg": "SHA3-384",
            "content": "2632cf8a8d6cd05ed7812ff39190a474cf1710e73d05a71ef1f6a5e81672edd355c558deae8e4c152f3cafe7132780cb"
          },
          {
            "alg": "SHA3-512",
            "content": "2ebbaf3eb9f96fcd4cc5b5c28e68d8a6d1aa8735dca7d763cc18daeeec2706d3370384c535dad32463ba8da92ee8a3ddfecd7f2559847772829782964d05a0aa"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/net.jodah/expiringmap@0.5.6?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "vcs",
            "url": "http://svn.sonatype.org/spice/tags/oss-parent-7"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jdbi/jdbi3-sqlobject@3.5.1?type=jar",
        "group": "org.jdbi",
        "name": "jdbi3-sqlobject",
        "version": "3.5.1",
        "description": "jdbi SqlObject transforms simple annotated interfaces into full-featured DAO implementations.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "fef7548d2dd71524d4e555c8d406449d"
          },
          {
            "alg": "SHA-1",
            "content": "88a6bb67f81900f7e3b4c02e80fbe03c14180b8a"
          },
          {
            "alg": "SHA-256",
            "content": "f5aee0d5ded32e49eddaf51fded6478d01f816a957bccd5ba62fb9eb944793d5"
          },
          {
            "alg": "SHA-384",
            "content": "9621bba9fde38a94e34975382a1e04179e9b89178da5c6028828518f13ac8b0617f81b216ef040049d6a311908424da5"
          },
          {
            "alg": "SHA-512",
            "content": "435126b915d81c594a2fc3194498a815dbd6307c8bd852d421ba866e11d4335bfd825352a58c60dadbe8cbd57a2962b0d8414c46491bd171071f7e606c41b56e"
          },
          {
            "alg": "SHA3-256",
            "content": "8706b9badb23159cd1c690e44d10f7050d82682c025d4a0fb6c2f74cf5982444"
          },
          {
            "alg": "SHA3-384",
            "content": "6fba81ffb490e9d6f2d7990b5e7ac7ea7d02c1a236214749f92a379b656479ad6e378785e9f2da291cf745c94f2f5c83"
          },
          {
            "alg": "SHA3-512",
            "content": "a61809da92143a4f96e16d97e5d85179f50fac762fbbc8bc36676b8868e4fb8f69cce89c93c8c0e89e3e492c6434725546c29de5b7960b1515a4fe3f0853b959"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/org.jdbi/jdbi3-sqlobject@3.5.1?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "https://github.com/jdbi/jdbi/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jdbi/jdbi3-jodatime2@3.5.1?type=jar",
        "group": "org.jdbi",
        "name": "jdbi3-jodatime2",
        "version": "3.5.1",
        "description": "Jdbi is designed to provide convenient tabular data access in Java(tm). It uses the Java collections framework for query results, provides a convenient means of externalizing sql statements, and provides named parameter support for any database being used.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "a1936dd03d5410d8abe4f52bd8a4c219"
          },
          {
            "alg": "SHA-1",
            "content": "76d39448cd536140a737ee7d1eca00cf919dd51e"
          },
          {
            "alg": "SHA-256",
            "content": "693462cf417ed3faadb54f22618b3f7bfd6f8d3cd77cdadde7733c6d9666d2fb"
          },
          {
            "alg": "SHA-384",
            "content": "24bb0abf8d664bc73b0ed56f35f65c9fb575a34fcc4f715b235a3909b3f0e1211acbaae6a5689843e98ea38272155462"
          },
          {
            "alg": "SHA-512",
            "content": "da80a01e7da71aee51c9c8f9de62a394ac6a1b849675a5a80e0490c4494bc58c5dbd15c34e8f21152cc3355f8259a2d838afeb2f9802063fd3a40b9bbc4d93d0"
          },
          {
            "alg": "SHA3-256",
            "content": "472060a39fbf46395d0fe7b6c2e5610c1532969115b27ac82d0c1434e952012b"
          },
          {
            "alg": "SHA3-384",
            "content": "f461d88c5d115a5f7628c2ce0fd31c8d3ea94eeaebc87ceec2d2b09175907d0ebcfa8b3ece5a187e15acc27ea61b3962"
          },
          {
            "alg": "SHA3-512",
            "content": "b54c0e9dc8be03a4b7a0b4ffc2ca1fa90f0beebceabba58abe0f2ddb93b0074141eab88da889577abe3c4eb2c0137cb8db907346882e88185cc0d460531d64c2"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/org.jdbi/jdbi3-jodatime2@3.5.1?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "https://github.com/jdbi/jdbi/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jdbi/jdbi3-guava@3.5.1?type=jar",
        "group": "org.jdbi",
        "name": "jdbi3-guava",
        "version": "3.5.1",
        "description": "Jdbi is designed to provide convenient tabular data access in Java(tm). It uses the Java collections framework for query results, provides a convenient means of externalizing sql statements, and provides named parameter support for any database being used.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "0f692ba6379649453c8ceeb1c1e567ba"
          },
          {
            "alg": "SHA-1",
            "content": "0b7a55d0eda75405221a8287993c05891ae2dd9a"
          },
          {
            "alg": "SHA-256",
            "content": "dd2c0c13c6d29758235a9b365768cc521b5ee3c86678794e81ca5a9a7aa1de83"
          },
          {
            "alg": "SHA-384",
            "content": "944b9c9ebde608096d2823a30fbf61c89b54aeb67988bb7dd2f5113ce3fc7f02c9050a3ea661dbdb4a3e985d8ac66f1c"
          },
          {
            "alg": "SHA-512",
            "content": "9e74b320cd5ed0ba7de5f2976dac092039ca6efcd5ab070281ce040aab9249d2299d73b3f1566cc495e6b33cd2de7fdb8e82f9410f970650daceb049daeb2bd3"
          },
          {
            "alg": "SHA3-256",
            "content": "fb088209586cf011f4cb41752223e4cb14ca32cf8605ce6bebaa30913a120ef4"
          },
          {
            "alg": "SHA3-384",
            "content": "e448d5de39cbf80d6c4f01eae53d1717086bfd74a38b26349f36e57f30cf6fdc153726a337f8280b17d3bafe237c9bda"
          },
          {
            "alg": "SHA3-512",
            "content": "5e64a7584e5585f922a7bbc3c83f76645752e0a78274d741b4ae8cb7f174ac6b2d840841ce749234955ab1d090b552dcceb7a46c2a1a0eafe95dafa26c1c2819"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/org.jdbi/jdbi3-guava@3.5.1?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "https://github.com/jdbi/jdbi/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-jdbi3@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-jdbi3",
        "version": "4.0.5",
        "description": "Provides instrumentation of Jdbi3 data access objects",
        "hashes": [
          {
            "alg": "MD5",
            "content": "594d03f7743b46ef08ed0d1dcc1bb31a"
          },
          {
            "alg": "SHA-1",
            "content": "2d39572d9612ce28bea84d46808d25d3b8af3133"
          },
          {
            "alg": "SHA-256",
            "content": "e08dfdaa141b4f6d3338b09f3f1f7f463596adb0d335b600e1bd636cc02b7b22"
          },
          {
            "alg": "SHA-384",
            "content": "4d7ab64763e59045843d4637f0b530d723fbbe4518bcdfac1f6cc81ea568e2310b80cc28caa377a68c30b0dddd3d0843"
          },
          {
            "alg": "SHA-512",
            "content": "4f2119fa34092ac2649b27d93e54af0de724719f994803407b5c307a8443ff70dee7d411b1360caf92595a87e570b44e60fe2745d8d283e857eb2ce6f0f656f5"
          },
          {
            "alg": "SHA3-256",
            "content": "c4cd10df90cf8b3b9a06f634c9d31e5bee07e98cdb5640220434a43d66231cdb"
          },
          {
            "alg": "SHA3-384",
            "content": "2fdf8d5e214228bbe4a2e47621266812e7b6461506503d05b9b1c716f32523b57a5bd1d2e51c8dbfb9b74f758b9c0802"
          },
          {
            "alg": "SHA3-512",
            "content": "3d60e9e5707c3e34eed30746c85bfbfcae3dded9509dd7047092ad42d184f36395a3d06865ce7ffa1f12b433ecf99b090e713751be03203af168aa4d99dd6a6f"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-jdbi3@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.liquibase/liquibase-core@3.6.3?type=jar",
        "publisher": "Liquibase.org",
        "group": "org.liquibase",
        "name": "liquibase-core",
        "version": "3.6.3",
        "description": "Liquibase is a tool for managing and executing database changes.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "455a827f017027c276fdfc1ec0bba595"
          },
          {
            "alg": "SHA-1",
            "content": "737c5a4fac26ee760d016923c83481ff933e4875"
          },
          {
            "alg": "SHA-256",
            "content": "e3d877af44ebe7f253525319e3a95bd14e249bfb3d55e9c458e78458bce8426d"
          },
          {
            "alg": "SHA-384",
            "content": "9a406908897dce5de01f7a56b31c9d3d5e5691952f7365b450d91b2a905d6269b9d2e02b90ac20997d8ba229c8a420ef"
          },
          {
            "alg": "SHA-512",
            "content": "a2c453c71c654ecdf98b86293981fd53ef270b8834b1903b88566dd515da22df17a47a7a31f6c8c65f496ec64613c101ab5501ea9e8293001703f9d2a65c878b"
          },
          {
            "alg": "SHA3-256",
            "content": "6cc2d3b40b26f5b20f62647f3dfc3238741eebd176e51ed76bafe534781554d8"
          },
          {
            "alg": "SHA3-384",
            "content": "64d3005f83e497c61b8bac850cfb580ceba9be80d82107d1136cf4e30ff523a9118e13fbfbeb30f938c36a15a3e404aa"
          },
          {
            "alg": "SHA3-512",
            "content": "1efc7bca74a8e561b48786cff789dba1b87cf4e6d7dc65da70bc71590c653ffd2111d8fb703cea6a429481c68c385299cf59f5b15072ccbe2365d53fc548292b"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.liquibase/liquibase-core@3.6.3?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.liquibase.org"
          },
          {
            "type": "build-system",
            "url": "https://circleci.com/gh/liquibase/liquibase/tree/master"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2"
          },
          {
            "type": "issue-tracker",
            "url": "http://liquibase.jira.com/browse/CORE"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.mattbertolini/liquibase-slf4j@2.0.0?type=jar",
        "group": "com.mattbertolini",
        "name": "liquibase-slf4j",
        "version": "2.0.0",
        "description": "Liquibase SLF4J Logger",
        "hashes": [
          {
            "alg": "MD5",
            "content": "c0de626cfee6e91f2fe3f28aca48a6f9"
          },
          {
            "alg": "SHA-1",
            "content": "15d0d15b546ef66caf3385a3c13aeb75663b3ba4"
          },
          {
            "alg": "SHA-256",
            "content": "1378fcb84657a57fd133328b13ea0578d18011fb4578dd915b292f9b8afbfd6e"
          },
          {
            "alg": "SHA-384",
            "content": "702724693be23166a4615e640192b4f1f68644ba17ce42f8b28508d823d35d69458f4992feb27ab86070afbc4c83d853"
          },
          {
            "alg": "SHA-512",
            "content": "193195e7aba3a04c4bc27a8cb424d8ede7e9a00f0682801906b59cfafe717c19ed47bf299e033da9b91400f936a90a14137b0b48ed55a46a2527db644cfe7947"
          },
          {
            "alg": "SHA3-256",
            "content": "143f1704ce5f758ce1c3dc2bfce78abac50638cfe54537042ada01ce8c765f89"
          },
          {
            "alg": "SHA3-384",
            "content": "68875a96ef6ae460b3a4d44f9f0c446de19964288676f47c08bfe0c91d2ff23e99dd3f329dc04392b1f29481a58c6d1b"
          },
          {
            "alg": "SHA3-512",
            "content": "0d7e066b3760514259844a5b137706b47ce61fabf24ac34e59445609e0a41e5497d90bb8786c06e1fa767375c4ee039d1c44c4b136fdb63d08ada9967286502a"
          }
        ],
        "licenses": [{"license": {
          "id": "MIT",
          "url": "https://opensource.org/licenses/MIT"
        }}],
        "purl": "pkg:maven/com.mattbertolini/liquibase-slf4j@2.0.0?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "https://github.com/mattbertolini/liquibase-slf4j"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-hibernate5@2.9.10?type=jar",
        "publisher": "FasterXML",
        "group": "com.fasterxml.jackson.datatype",
        "name": "jackson-datatype-hibernate5",
        "version": "2.9.10",
        "description": "Add-on module for Jackson (http://jackson.codehaus.org) to support Hibernate (http://hibernate.org) version 5.x data types.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "686f24ec51b113e18d8a7a6e656830af"
          },
          {
            "alg": "SHA-1",
            "content": "391c524dbc0414399dec5a405760744d3ed600a8"
          },
          {
            "alg": "SHA-256",
            "content": "de588c8a51eb6d11cced0d2c140d66e9c51266622ecda28ccbef92050f671f0e"
          },
          {
            "alg": "SHA-384",
            "content": "4b563e42cbdb9b3037c8acbe17b26145cd77edcacdcadd8eb1051bf7f7c49a99bfc30c089ecbb4664536b46fe9ff64a5"
          },
          {
            "alg": "SHA-512",
            "content": "854f01a862d1ea67a47863bbb3481b63deb1839d3b89ca616362fe097e55ebc87196f4ed7ae48ed8557b4244d72db72f3c293b6a7dc3965fa787a6a67d634998"
          },
          {
            "alg": "SHA3-256",
            "content": "ff874c69d9dc846e993d16b1bcb74a4d3d81865aaffc16b6063ff83e0f1626d0"
          },
          {
            "alg": "SHA3-384",
            "content": "af42e89da630380a0fb87a91db43b71aac2e57aec66f07a93ec75132f2be6dd88b935bc6b82ec99a05f980e4de059c53"
          },
          {
            "alg": "SHA3-512",
            "content": "312371566e7eacb4621ecec83b7e99a4dfed8be158ba71c77e9b9fcd91577104771dec04d7eeb1c12e574e4b8ca247bd2b4faeef7ba69aa384d93cb67672b5a3"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-hibernate5@2.9.10?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://github.com/FasterXML/jackson-datatype-hibernate"
          },
          {
            "type": "website",
            "url": "http://fasterxml.com/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/FasterXML/${project.artifactId}/issues"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jadira.usertype/usertype.core@7.0.0.CR1?type=jar",
        "publisher": "Jadira Systems",
        "group": "org.jadira.usertype",
        "name": "usertype.core",
        "version": "7.0.0.CR1",
        "description": "Classes utilising Joda Time, Joda Money, Libphonenum and JDK Types that add Hibernate support",
        "hashes": [
          {
            "alg": "MD5",
            "content": "808b0b11f96e769c0f7a32d29f1ce7a1"
          },
          {
            "alg": "SHA-1",
            "content": "818991d0b4d8fce6da9f27ea61187111efcae1a1"
          },
          {
            "alg": "SHA-256",
            "content": "a129bfc60f7aceab77cd1363684d267f56629b441bf06f6123f9c0c2972e41fc"
          },
          {
            "alg": "SHA-384",
            "content": "8619b7057d90285989e438a8a621ddea0a22db6214771caa9f148b507e2d31e7ed3bf222c926ae1fe0e09a04668fea35"
          },
          {
            "alg": "SHA-512",
            "content": "3d7dca13d1586365a94f05ea4a1672ce166773f2a01a584fc149d71b8aaeaa9c109e7e3a7658d8d4da3e91b8f42085ed55acc2a97e1c39a4faea5f6834a741a5"
          },
          {
            "alg": "SHA3-256",
            "content": "f032df418c58acf1ba8307589d176b6e3d5402f1a0830d903b954984ab03bc38"
          },
          {
            "alg": "SHA3-384",
            "content": "77b7f9dcb01fa9b88bf9bd581ade8ba66ea6a46b5b3a667715f52106b9b02200cf5b13ccbd8b3aec2d681c24942e2df7"
          },
          {
            "alg": "SHA3-512",
            "content": "1113d2d63ceacdc4df8628448aa15d5de2e155b1a00037dc1570bb6f1553b38f397930036ef637b50519b6d395e3a219cf330ae29cedebeafa786eefd08420c0"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.jadira.usertype/usertype.core@7.0.0.CR1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://blog.jadira.co.uk/"
          },
          {
            "type": "build-system",
            "url": "http://jenkins.jadira.co.uk/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://jadira.atlassian.net/browse/JDF/"
          },
          {
            "type": "mailing-list",
            "url": "https://sourceforge.net/mailarchive/forum.php?forum_name=jadira-discuss"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jadira.usertype/usertype.spi@7.0.0.CR1?type=jar",
        "publisher": "Jadira Systems",
        "group": "org.jadira.usertype",
        "name": "usertype.spi",
        "version": "7.0.0.CR1",
        "description": "Shared dependencies for Usertype jars",
        "hashes": [
          {
            "alg": "MD5",
            "content": "2b16a4d99cf3e6f0695186301dc63e4c"
          },
          {
            "alg": "SHA-1",
            "content": "895f79b8a1c33f2e17ebc839f80ecaf62924e784"
          },
          {
            "alg": "SHA-256",
            "content": "035f9a3cbec935b6da4d0318fd4d5b797db12a6ba0f77293b8603ff8578904f6"
          },
          {
            "alg": "SHA-384",
            "content": "1f854a17e0dd340107b1692b94a1411b3de04548f77e9d8437c1acf589b23e8945a3a36db6e3f29019d7f7dec65fc6ad"
          },
          {
            "alg": "SHA-512",
            "content": "df65994da27e03bf29918e87451738de9017a41d0deb4fa1d7b00353d889fabc30cbfdc8aa8d97fc475cc31b2426b7a859cc0cfc6489b3667e43108539cb6c0f"
          },
          {
            "alg": "SHA3-256",
            "content": "455f3a4522df5251d036af8f916a7ba5a385a1d303a0aa8f56f7563c2ee00042"
          },
          {
            "alg": "SHA3-384",
            "content": "7b57d9833af8ed7aeb10e3fcad35c5f27b9e4f932e568ede18ddad74d183ba5414e379646bda11820d3ef313d7519863"
          },
          {
            "alg": "SHA3-512",
            "content": "88d0d9476653078ff1c538c0b8c8b3d2714fd13fbe5ef12550d73053edeb1eb967a17e96d4670ffe95ca0eda858afa6a6b27033028036b646180c00a7ec46aa4"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.jadira.usertype/usertype.spi@7.0.0.CR1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://blog.jadira.co.uk/"
          },
          {
            "type": "build-system",
            "url": "http://jenkins.jadira.co.uk/"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://jadira.atlassian.net/browse/JDF/"
          },
          {
            "type": "mailing-list",
            "url": "https://sourceforge.net/mailarchive/forum.php?forum_name=jadira-discuss"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty.http2/http2-server@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty.http2",
        "name": "http2-server",
        "version": "9.4.18.v20190429",
        "description": "The Eclipse Jetty Project",
        "hashes": [
          {
            "alg": "MD5",
            "content": "9c82833f49671905299a1a0d0edc031d"
          },
          {
            "alg": "SHA-1",
            "content": "6d0ca7e7ee2e5d55fb6fb03c4c1a248b1dc3d31d"
          },
          {
            "alg": "SHA-256",
            "content": "99f96c3656c87d674d069ec1039a6fd7cbd979bb81a083823a04bd529c73308e"
          },
          {
            "alg": "SHA-384",
            "content": "f18b656c4488eff4fdc845ed84ec29f93103314e61e61913787c4ed45f29dc9318a366e32d82e59e285b229fd3f9256f"
          },
          {
            "alg": "SHA-512",
            "content": "49a9f2c895244d0a632e5b267661f99e812d8e90299085df37479667517ad991575808d97d32204f34bf8a130804d4d2b87c9405d3e61b6d9d410d62a25373f6"
          },
          {
            "alg": "SHA3-256",
            "content": "866de2610f4bbe4ce7b551b31f7f9a51e26e9607e54f112de194b3d92bd90132"
          },
          {
            "alg": "SHA3-384",
            "content": "7f5cc872f7d2719d0a3a221c2debffa91fe15fd064a86abb37069b6f33817fdb3f384c25d786eb669a6988b0c02d6dc6"
          },
          {
            "alg": "SHA3-512",
            "content": "447c34744cdc616cf90742043ee49c431823ff46e745417eac6d21b78d1e9a00b36c1c93b0e291187e00e7c4d5d9b6a98f32afcc9d0671b63a02cd23f48f37ac"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty.http2/http2-server@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty.http2/http2-common@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty.http2",
        "name": "http2-common",
        "version": "9.4.18.v20190429",
        "description": "The Eclipse Jetty Project",
        "hashes": [
          {
            "alg": "MD5",
            "content": "d4f0dede20f81acfb53f97c01fae71cf"
          },
          {
            "alg": "SHA-1",
            "content": "6e3306d394aaaf41876220a818fb639faf5963b0"
          },
          {
            "alg": "SHA-256",
            "content": "d402e22a14230a49a93e045dc922d62ab330f99b26b928ca3fc6c6761941f601"
          },
          {
            "alg": "SHA-384",
            "content": "eb0acfd47cd0294effa4fbcb40f467c8dc67f5bbe2c7de03bbfcfb9602a8d9c4789e82d5627aae9d77fbf0a6dd00d4a9"
          },
          {
            "alg": "SHA-512",
            "content": "79af5a27a59a8706769cb2d500869029bf1c6762bbc4908ffea56bc57f578e14d46e271e8fa2d40fa68dc8fc0e33cf297186df8b4b231db50547d98a10d0d6c4"
          },
          {
            "alg": "SHA3-256",
            "content": "edba30c10f03aaa94eec187d3709ca23d1082d555e0031dbddbcb21a2e6cd451"
          },
          {
            "alg": "SHA3-384",
            "content": "818864100dcee2ee2bc91994f4448e945f75fab169b8574f5cfc5fc46bc8aa6fbdb6480e1feb97d5f6c6fe5a991816e8"
          },
          {
            "alg": "SHA3-512",
            "content": "4d4d7e9a24b0d2f0814f071f0b352a104b2c91974213c10ca434c4d119c3ca15ac679f06f5aea3586ef11e5b4280d9db505ef8f4b63b19893c07cdf646d03a15"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty.http2/http2-common@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty.http2/http2-hpack@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty.http2",
        "name": "http2-hpack",
        "version": "9.4.18.v20190429",
        "description": "The Eclipse Jetty Project",
        "hashes": [
          {
            "alg": "MD5",
            "content": "0323c6dd472c456a99d068f171cbd661"
          },
          {
            "alg": "SHA-1",
            "content": "aa5f5c2b0cec925ad7f2e73a1dc7a3b3dc496e87"
          },
          {
            "alg": "SHA-256",
            "content": "7f2fde0ed27abe088933dcd5b1516e6ed08701ff19aa8b00d12a4ef30344c9bf"
          },
          {
            "alg": "SHA-384",
            "content": "3e36d0d0706d722130d6205eea24fbbf318e432466e39b530906970b22cedfed22b4a210e51a89595061fc70605afbda"
          },
          {
            "alg": "SHA-512",
            "content": "075e9b42f4204aabb15fb1e0f0e08ac67b6a2ea4dff9bcd69db778fc0868d1959b38c4ac3e5a4738b8c3acab26f8416ea8c89d2e4fa66e474ca366e14ee55ebd"
          },
          {
            "alg": "SHA3-256",
            "content": "f4680627e9212635d69a27456bcc815eec595a64d9541b572a7d16667cfb7636"
          },
          {
            "alg": "SHA3-384",
            "content": "257d4c7221c7db4a973251b1ac9326b98790f0fc714e38aa589a777670850e1b57cf625a0e1e89c2a801734e969b18d0"
          },
          {
            "alg": "SHA3-512",
            "content": "efb34683d51d2c09abc7894f5cbf7957041449f66e78f50bc4aeeed48fbcb92bcbe60713b084346ce93d0552955f7b8c53a3c557386894959d27667b8ac808ac"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty.http2/http2-hpack@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-alpn-client@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-alpn-client",
        "version": "9.4.18.v20190429",
        "description": "The Eclipse Jetty Project",
        "hashes": [
          {
            "alg": "MD5",
            "content": "94e9fc820f29e4ca7c4d1008b3e52f34"
          },
          {
            "alg": "SHA-1",
            "content": "1379b37b505dc379559e75ae7424941eee924fc7"
          },
          {
            "alg": "SHA-256",
            "content": "f843740357ea316e196703782bcc21313ee77b665f059a28d62ebbbc37aa07ae"
          },
          {
            "alg": "SHA-384",
            "content": "8f98ebb3d2de52bb7a81117a772885d61cdf91fec61b5d7277ba98e875dad5f6ba9e94d9065d61f0edb9337e2686133a"
          },
          {
            "alg": "SHA-512",
            "content": "a574f37273ebf3f6d0dc18491cfcfb32288063667cd51962218575438dc3eb4f6202f862a6cef71a9caa16282cac17b77a1696dc632f1852979060e8c1b9c9ef"
          },
          {
            "alg": "SHA3-256",
            "content": "2428547743abb3f101da2f812300e1a3778b672ea26be987b1262821fbc0c693"
          },
          {
            "alg": "SHA3-384",
            "content": "f092273af529731a68344c05883d7d498b13bd1ac7e3b21cbcb2363325247e0e829c3a9dd39f1d8781302daa777cdcd9"
          },
          {
            "alg": "SHA3-512",
            "content": "476eb0180972b5b6bb48dfccb1eccebd607420aea3562782f1a19292ecbdadc659bf28aeb11a28e3367bad613677dae9486cb4bfb2dc2168acb8cf612b39ae2a"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-alpn-client@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty.alpn/alpn-api@1.1.3.v20160715?type=jar",
        "publisher": "Mort Bay Consulting",
        "group": "org.eclipse.jetty.alpn",
        "name": "alpn-api",
        "version": "1.1.3.v20160715",
        "description": "Administrative parent pom for Jetty modules",
        "hashes": [
          {
            "alg": "MD5",
            "content": "18383950cc83169b8ed61c03fd926e0c"
          },
          {
            "alg": "SHA-1",
            "content": "a1bf3a937f91b4c953acd13e8c9552347adc2198"
          },
          {
            "alg": "SHA-256",
            "content": "07be99758b699e194f70fb9784d94202dc6c98212877829e3d72b020f2660576"
          },
          {
            "alg": "SHA-384",
            "content": "4d77461790531873d9ecc3eb8e03c526f5cac61a07b2506c52121f0cb9e1323f6666d7e57de8710da77aff711fa97202"
          },
          {
            "alg": "SHA-512",
            "content": "b9570b3323337dcdc192e640288633743736ef9206adc4cda88db7da77df49732bba0a4e85613225ffec32ac72c415a84fcd2353c04f8708dad85142a2b439f8"
          },
          {
            "alg": "SHA3-256",
            "content": "c7e69d1f5833cd414f62dfb456a8dee75520366e88a1af4db9b76a14d800b356"
          },
          {
            "alg": "SHA3-384",
            "content": "681e67503222f2517015c7ee77a67e0e07d8bcdedc54898e2f11d6bd9ca4b04754b06fdf98d0418fe280c028418c1405"
          },
          {
            "alg": "SHA3-512",
            "content": "3a4c64a3cb12158119183584c79e5523bc2e460ae942a2927a9f5452e3b0c032442748f4e426466921a3d9f618095901f26a0de77f4e30650c8e22ee79da873c"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty.alpn/alpn-api@1.1.3.v20160715?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://git.eclipse.org/c/jetty/org.eclipse.jetty.alpn.git/tree"
          },
          {
            "type": "website",
            "url": "http://www.mortbay.com"
          },
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://bugs.eclipse.org/bugs/enter_bug.cgi?product=Jetty"
          },
          {
            "type": "mailing-list",
            "url": "http://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-alpn-server@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-alpn-server",
        "version": "9.4.18.v20190429",
        "description": "The Eclipse Jetty Project",
        "hashes": [
          {
            "alg": "MD5",
            "content": "1ca2253ddcbcbcc691c51938f2e341b4"
          },
          {
            "alg": "SHA-1",
            "content": "288afd48f2eb1816889c4848a0bb8e7783ad7124"
          },
          {
            "alg": "SHA-256",
            "content": "2d78640dc6b6035e41d763ddb9c97f07f441665be36d0a7d1e592d683df12acb"
          },
          {
            "alg": "SHA-384",
            "content": "8082e021da3f496b3f2acfec31bb78ab08f88db2f82dfc91677cfbfb1d43942c34e4c1ebd49d8cccddb3ac7df6a47178"
          },
          {
            "alg": "SHA-512",
            "content": "7ee426bb8079daf27fd03694563e534cda147d2cb38e4b50e08c3644f1a3dd88e172ad36b322bb113c67cabbbed4b11740f72ef82cc899341aae9d6427dace43"
          },
          {
            "alg": "SHA3-256",
            "content": "1ea3606b67b91542a4d71d7b145792dcb25dce3c52037e3a32d551678ce5fda1"
          },
          {
            "alg": "SHA3-384",
            "content": "ac2eb0114e9543c50dfc31b715072eec522920fcc1d837450b6d7aad8ecae478b9da5c743c2c9f61e2ba67f17705d790"
          },
          {
            "alg": "SHA3-512",
            "content": "943a863bd2beae196d07aa13b72b5d27bd5ee56a8e578b549a5c272034a232dc4f8a3f015af81837524cd37e467871bfb66c6768a279502ab4cd05e97421347f"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-alpn-server@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-alpn-openjdk8-server@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-alpn-openjdk8-server",
        "version": "9.4.18.v20190429",
        "description": "The Eclipse Jetty Project",
        "hashes": [
          {
            "alg": "MD5",
            "content": "6176ca5468f46113d03982b26b569645"
          },
          {
            "alg": "SHA-1",
            "content": "cd588787b7a232e9db4d2442ef9260baedfe33b1"
          },
          {
            "alg": "SHA-256",
            "content": "13b0943572cc330a0371317cbfbbb0f737655387b89dc75ba9a8ab8d083e1c11"
          },
          {
            "alg": "SHA-384",
            "content": "112c8273397e9e05486dc07b09bf0c2583d73657cdec7bad432f3cd7371746ee36b8342153ddbfb51cdeda1aae279aed"
          },
          {
            "alg": "SHA-512",
            "content": "07373c3c34ce2bb1a84200e09b4f540d6a4cd83ee9fc65084949a449a7f510bce5a91d9cd44d7cb8454e9a2090dd636da2506c10312e5b5be693682a1024afc4"
          },
          {
            "alg": "SHA3-256",
            "content": "26c9e9d164a3471c386bf44e1c3d3150e03d54be8d947d65306bf74e26954edc"
          },
          {
            "alg": "SHA3-384",
            "content": "8ca4c806dbda67f907eb10dfca6f538fb981ee36bb1bc48aea642864325fecc8e6ffff8a5bada5a8ca793959d2048b2c"
          },
          {
            "alg": "SHA3-512",
            "content": "90a662aad53125f7f1eebd642a62316606a249dfe04ec3ab6673deea2fbc8d51fdc83f02e403c0f1085aa7d5600b1e11b9b171fefb0903dd5aa8c6bff905c072"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-alpn-openjdk8-server@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-alpn-java-server@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-alpn-java-server",
        "version": "9.4.18.v20190429",
        "description": "The Eclipse Jetty Project",
        "hashes": [
          {
            "alg": "MD5",
            "content": "d1e615dd0774f828e80f51cd217dadb1"
          },
          {
            "alg": "SHA-1",
            "content": "a4129b6ad87da0b14ee60dc4cd04321ab7b6928f"
          },
          {
            "alg": "SHA-256",
            "content": "5ac060f9d0f802010aba3ce0452d567ff6ec1f724a8cde860cb3e83aa87918c7"
          },
          {
            "alg": "SHA-384",
            "content": "79355d28bd0069bd9c3b633b38b2eb0d04fa63e5547c816740d816a55203cc1f8aaabc66d1796c8b148202e063299044"
          },
          {
            "alg": "SHA-512",
            "content": "dbe734b1a1bcd194e3ff275b620aed38fb713a250d24cfa6548d047de12a2cd394840650ad46de122b53ea8103f64cf4c0d7570e781b70e45372dda9180607e3"
          },
          {
            "alg": "SHA3-256",
            "content": "6ca9ed2338f90de1498b7e52c35ff2eae7e13463f9fed7f36f9b797ca0d6f443"
          },
          {
            "alg": "SHA3-384",
            "content": "4545fe9af9af3bfe772281243aece8dffa300333841e4c9967582a02cdef33b8ac87bd567c2bc3df2f13ece0c4feb216"
          },
          {
            "alg": "SHA3-512",
            "content": "a591913206657bca1c3be20220c911359537100af3f6561f5d4a454635edbc7a83c51b897efeb8b075996fce37945a1c7836296873d6817e07b7ad3a46cf5450"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-alpn-java-server@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.eclipse.jetty/jetty-alpn-java-client@9.4.18.v20190429?type=jar",
        "publisher": "Webtide",
        "group": "org.eclipse.jetty",
        "name": "jetty-alpn-java-client",
        "version": "9.4.18.v20190429",
        "description": "The Eclipse Jetty Project",
        "hashes": [
          {
            "alg": "MD5",
            "content": "7dadc5243abb6a0979518998d5c97eeb"
          },
          {
            "alg": "SHA-1",
            "content": "2245454abf7e6374ce92f3ef9222c7dbd43c8f1b"
          },
          {
            "alg": "SHA-256",
            "content": "e629a9bd50ac7d361389dcc21c86f7ee12fd9f9e1c0e92664d01492df135aab1"
          },
          {
            "alg": "SHA-384",
            "content": "772ea6b359ca1c69315ed1f69577cb27f17a7c607db4506cd5b4f5c9804702b1b4d098c5f2667d27d508884faf328c4f"
          },
          {
            "alg": "SHA-512",
            "content": "592ab00b4aefbfd03fa3eb9619b39be6a59cc5a60dac993cef999433e31bf89d35a97136227966af7ec2fd84e483995b6e3390dc159aa72763246683ec02207a"
          },
          {
            "alg": "SHA3-256",
            "content": "5fc8987e14b500cd8ef3e355548129be984b7d88f02a3b3a9718dc83e2550cbb"
          },
          {
            "alg": "SHA3-384",
            "content": "5ad5a65be92793dacdcb872acfa840ecf84948f02ae498c93120802d3c8ad924c0d9cc6516e9d2bdebdc1a823301c2f7"
          },
          {
            "alg": "SHA3-512",
            "content": "6e4d74a8ce366f9b1c41ca2636a098566b8e2800b0f2ce3653856d499e3ff683a1ca2afdeac18661a47bd8e319987903dec3b0a3c1cc16ebccb2cc2ff3a00afe"
          }
        ],
        "licenses": [
          {"license": {"id": "Apache-2.0"}},
          {"license": {"id": "EPL-1.0"}}
        ],
        "purl": "pkg:maven/org.eclipse.jetty/jetty-alpn-java-client@9.4.18.v20190429?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "https://webtide.com"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/eclipse/jetty.project/issues"
          },
          {
            "type": "mailing-list",
            "url": "https://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html"
          },
          {
            "type": "vcs",
            "url": "https://github.com/eclipse/jetty.project"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-views@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-views",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "ffa529c90a76cf83b7468c63c24c2da9"
          },
          {
            "alg": "SHA-1",
            "content": "27b9dfe51ed0740b2359c28eca9942388247f877"
          },
          {
            "alg": "SHA-256",
            "content": "69ba25bd9f7b5577aa29b79337b3e716be629a784a83d9a2af1456a556800dfd"
          },
          {
            "alg": "SHA-384",
            "content": "91a8c080f56284645b0d6081b4625ef70e835bea41d0c8fcdc4bdb4962b29b1c0f8f1ce55ccc5fbbdd89fd3e8f2fd947"
          },
          {
            "alg": "SHA-512",
            "content": "818f881806c644bfd0518d2864d1f0c2c6b132e6b81ca1e4b272e20ab91294e954805f986f55ba5389b9ffa5c6573dde827929d6a82b8b4066b2344d003e0f40"
          },
          {
            "alg": "SHA3-256",
            "content": "021a6eba574c0c79246d1a8b446c4655f5a7183e24fcc9df010bffb11ea680f2"
          },
          {
            "alg": "SHA3-384",
            "content": "d13c9c22496d88b389268ad69409def1ab6cdc8a8ebfe8eecff711e9345a67deaa6211485e2e7be5a9f73812e9f46fcd"
          },
          {
            "alg": "SHA3-512",
            "content": "9ed4dd16ddabeaf7e7933cdef7911ac194a14a93a4a8a4d057554dfc094ca5ed84090922e6b5e53f23a24af582209c8d5a9b50521d3b35132a32e74399d5e055"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-views@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.freemarker/freemarker@2.3.28?type=jar",
        "publisher": "Apache Software Foundation",
        "group": "org.freemarker",
        "name": "freemarker",
        "version": "2.3.28",
        "description": "FreeMarker is a \"template engine\"; a generic tool to generate text output based on templates.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "c5e35d814518da7b0247d42311b8e296"
          },
          {
            "alg": "SHA-1",
            "content": "7200064467a935052f99d114c2c05c3d189bc6d6"
          },
          {
            "alg": "SHA-256",
            "content": "de92d103d3a86c2287307218ff50dc1c941de283f7b9e1fb23e93fc7220838bf"
          },
          {
            "alg": "SHA-384",
            "content": "3aef324f7ee0a8e356e291f7b81564c907fbcb287da399515e814411c7c622238cf129b65ad0928c65b9c4ba7544ac2a"
          },
          {
            "alg": "SHA-512",
            "content": "44435cb2b6ba02abacdc4a21bea44a2dc50faa1b486fc5b2f79097a68f1f98ca24aa835448ac5dec33a1869eed1b8a32ac285e95fdabbdafaa810d575951894e"
          },
          {
            "alg": "SHA3-256",
            "content": "d55883bf61b72d616dcd12e87d6f90b3b1fc761fcbcf5b8f3860e17bb34fc654"
          },
          {
            "alg": "SHA3-384",
            "content": "fb0ec37103eceb4dda853bb589794b3f04870e1cfe24031b572c130a9132f5d9fc1a6450dc1644f875b980a52dac0d8b"
          },
          {
            "alg": "SHA3-512",
            "content": "7664cb34b0598e0eec19ecba1fba7b83ff09b574bf2320b84a09016d88aaabf902460e3bcd2b2290f59988462b8594e817eebcd777321608762dc141c1335a20"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.freemarker/freemarker@2.3.28?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://apache.org"
          },
          {
            "type": "issue-tracker",
            "url": "https://issues.apache.org/jira/browse/FREEMARKER/"
          },
          {
            "type": "mailing-list",
            "url": "http://mail-archives.apache.org/mod_mbox/freemarker-dev/"
          },
          {
            "type": "vcs",
            "url": "https://git-wip-us.apache.org/repos/asf?p=freemarker.git"
          },
          {
            "type": "distribution",
            "url": "https://repository.apache.org/service/local/staging/deploy/maven2"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.github.spullara.mustache.java/compiler@0.9.6?type=jar",
        "group": "com.github.spullara.mustache.java",
        "name": "compiler",
        "version": "0.9.6",
        "description": "Implementation of mustache.js for Java",
        "hashes": [
          {
            "alg": "MD5",
            "content": "9245fdbf50ad59ea81781ebdaa8cdb02"
          },
          {
            "alg": "SHA-1",
            "content": "1b8707299c34406ed0ba40bbf8513352ac4765c9"
          },
          {
            "alg": "SHA-256",
            "content": "c4d697fd3619cb616cc5e22e9530c8a4fd4a8e9a76953c0655ee627cb2d22318"
          },
          {
            "alg": "SHA-384",
            "content": "84a99840a4a148b583b65391a6fdcae92d57870d027f57882eab2f7d498eb92112b2966d4c1f00867efdd5bcc31e3df7"
          },
          {
            "alg": "SHA-512",
            "content": "d29e5022a4e7c99a8cc4b9f171471cf3e96103aeed26f32ae7a5db38e62811b3dc97e47ce8659c0b430fd11f1cb3f679c5465cab0458d7a474fba7e78a987887"
          },
          {
            "alg": "SHA3-256",
            "content": "e17ec4a48044d5cbc941cdd9020fdda30b5402c2d533bec6a910729293d2aa89"
          },
          {
            "alg": "SHA3-384",
            "content": "a11339df13251cfc94bb4e1a08b7946c26de5b58962e3f4d88e92b701a79ce364b536c78903e43e48f4f8b3dc22a1d98"
          },
          {
            "alg": "SHA3-512",
            "content": "7e61b2eb36f9e239c4e2679c529d87ab2b2ed0ecb8537cbbd89b604bfce9b09ed716c2a95a80cf9a75eee2d0b85a2958e44bc6540ba5b22f163090a5912c6ad6"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/com.github.spullara.mustache.java/compiler@0.9.6?type=jar",
        "externalReferences": [
          {
            "type": "vcs",
            "url": "http://github.com/spullara/mustache.java"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard.metrics/metrics-graphite@4.0.5?type=jar",
        "group": "io.dropwizard.metrics",
        "name": "metrics-graphite",
        "version": "4.0.5",
        "description": "A reporter for Metrics which announces measurements to a Graphite server.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "22f848bd3427fa8d5caa8717468097f5"
          },
          {
            "alg": "SHA-1",
            "content": "76e8758356373d5aed5abacbda429b38f6e8fa98"
          },
          {
            "alg": "SHA-256",
            "content": "e7ece2bb30cf016a012286d7077fd1d9741c3e205ac7095fdc081e4c552436db"
          },
          {
            "alg": "SHA-384",
            "content": "96acda7534b984927ef60dd9c5f53d12981c7425a83396e835a754a5a1d81ca944eb61bb598f3a83e336832c8dbc83c7"
          },
          {
            "alg": "SHA-512",
            "content": "e1c984ee8daa837add7b4ca0d07162faebf4b7d2bb88b7bd355eccd570e3935fb1c49acdf8b1dcc5c88bbf04c67cda2a7efdcf375d0247d35b7744f9ab810a4f"
          },
          {
            "alg": "SHA3-256",
            "content": "d3ac2a04fe0a5225e4c8ce2a2c46d196ef466eccfa00254cab8df1a08f5dc4fc"
          },
          {
            "alg": "SHA3-384",
            "content": "c82769e74e2a4570a3fbe5c55a2a79919a7e95f0dc339b6612ab1e728793ee05aa1dfc1a2408034a8e43db5b0b97e345"
          },
          {
            "alg": "SHA3-512",
            "content": "d2ee456e6964ec862f1a770c386084cf016983c03083a5516405ce4372204a0e0d5feb27e78d7f5d7345719b9af256f8d000cde922547c159de14cb860cc2403"
          }
        ],
        "licenses": [{"license": {
          "id": "Apache-2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0"
        }}],
        "purl": "pkg:maven/io.dropwizard.metrics/metrics-graphite@4.0.5?type=jar",
        "externalReferences": [
          {
            "type": "distribution",
            "url": "http://oss.sonatype.org/service/local/staging/deploy/maven2/"
          },
          {
            "type": "issue-tracker",
            "url": "https://github.com/dropwizard/metrics/issues/"
          },
          {
            "type": "vcs",
            "url": "http://github.com/dropwizard/metrics/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.rabbitmq/amqp-client@4.4.1?type=jar",
        "publisher": "Pivotal Software, Inc.",
        "group": "com.rabbitmq",
        "name": "amqp-client",
        "version": "4.4.1",
        "description": "The RabbitMQ Java client library allows Java applications to interface with RabbitMQ.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "1a2a6feac205524a636c06d86af2df2c"
          },
          {
            "alg": "SHA-1",
            "content": "c442f6501595a6fb9c029409eca94888cc9a3106"
          },
          {
            "alg": "SHA-256",
            "content": "fcbe7ddc4be88823b881f35c12bca55b561c795d03aefe746a0452029ec179cc"
          },
          {
            "alg": "SHA-384",
            "content": "527aa909dd1ef154753f13cec6885f91c95abf3ab9488c99fa4456b9331319e3edb4157f1680b2deb4bd9dd9f30f91c2"
          },
          {
            "alg": "SHA-512",
            "content": "8d78db5a1a3939a20a10b33f41b2ca3adb746672b276e87cc08aabb84dd27a069755294bd23c483ecf0d25c0e669fddae6f96742dd127d8476a9d6a6f8e22e57"
          },
          {
            "alg": "SHA3-256",
            "content": "4866a931a2e38b4b0b4bcec77f77e8b83edf3b4b527913f827767a926c8b3b24"
          },
          {
            "alg": "SHA3-384",
            "content": "a86ac3dfa3760ad201a90d24c4a2e3cb32c308e902a606849be300a3d31486bcd67329c8191d48f0ec9846eae4a23042"
          },
          {
            "alg": "SHA3-512",
            "content": "a1b503bd1f8762c0b0434af451f6a579b20225aa5f23548cd521e3f007c17fedaf2c9fd7667606c06bbb63cdfbfbce28800de9506bb2c2564020b34447d600c9"
          }
        ],
        "licenses": [
          {"license": {
            "name": "ASL 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
          }},
          {"license": {
            "name": "GPL v2",
            "url": "http://www.gnu.org/licenses/gpl-2.0.txt"
          }},
          {"license": {"id": "MPL-1.1"}}
        ],
        "purl": "pkg:maven/com.rabbitmq/amqp-client@4.4.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.rabbitmq.com"
          },
          {
            "type": "vcs",
            "url": "https://github.com/rabbitmq/rabbitmq-java-client"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-auth@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-auth",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "b70d5efcdd606fa0dc0d866a0ba76e0b"
          },
          {
            "alg": "SHA-1",
            "content": "b232e9397558341feed096a54e04e32ab81c7aad"
          },
          {
            "alg": "SHA-256",
            "content": "94927a479eb07d3cab2242750463569dd6da9c75908b93986dab8c2eda5300b7"
          },
          {
            "alg": "SHA-384",
            "content": "bd407256317ce8e7a4dc993ebb0dc7630bb2f8cd24602b3ae436f7a1e43fa77f0186dddb12501f63333b1985bf27816d"
          },
          {
            "alg": "SHA-512",
            "content": "33c794f002c01a3f2880aef2b64b12af4a1d612bc2e7e751f24d65a178e49f7b2158c00486515b1392c340471d7a5e52d73259da7673c32d6b9dfc3870eeffa6"
          },
          {
            "alg": "SHA3-256",
            "content": "d13a6eedc14842abeadc3c0e773ff1bd759de2157099a8df5d62ee1d6da1f949"
          },
          {
            "alg": "SHA3-384",
            "content": "431cb008fa4242048f38c8637d7e75787d4337854dc5a11bca62f98d27641e0c172487c5c31b097c3a2a8a329e03569f"
          },
          {
            "alg": "SHA3-512",
            "content": "c5ae17254f77d668b20aa32542daf77ef398d428fc34601e6e6aebb8f0676fc8c16c5f0dc8906b58f7ecef3623e29386d296aff07d7f7d54618591da72edb88d"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-auth@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-assets@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-assets",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "3719b35ea00aaf249df2f6c237e0d461"
          },
          {
            "alg": "SHA-1",
            "content": "f2aa63c48a04fc2fdbbc43d3bb25c306417c30ab"
          },
          {
            "alg": "SHA-256",
            "content": "81df72b28d351db2a8df88899ef172c3fefc8135149e6e5016c3f88db340fdcf"
          },
          {
            "alg": "SHA-384",
            "content": "d2f52199662a0c1bdede4785582ee644bd30424a935c59d78d467129081fc23e4454af8f8a86d8babf8e1a7b418e6d9d"
          },
          {
            "alg": "SHA-512",
            "content": "1136296518c97a285e68b0bbd6800c3183b8cd208e2b316ecf0e6b24147b278559e479705b7df3ce83913df5b8d93108afd20ca91ddfaa23d1924d6534f82d11"
          },
          {
            "alg": "SHA3-256",
            "content": "fe44aa9d27c700520603cec3f51df630e228e0f73d1c450e01c3f9e21f02610e"
          },
          {
            "alg": "SHA3-384",
            "content": "4a4a0a6c89a17ae034fac1a60ee3f81033397ffce347263e7ccc6c04d01776a6c98536c474e0c932b261adea0a053f6c"
          },
          {
            "alg": "SHA3-512",
            "content": "ef1c4284b016ba0c303aa74ce20271314cdd9c63686837c73b55656eacf0a22f2d3d883732f6e513dac055842b6b1c1d0e9fa970c7017d969b82ef1c77b2f8de"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-assets@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-http2@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-http2",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "fdc320175f8ebf1f5931a5f8943cfc32"
          },
          {
            "alg": "SHA-1",
            "content": "b8573b698da0fe8b2cf30becf2d4c069085e230b"
          },
          {
            "alg": "SHA-256",
            "content": "c21be0fb74a7e086a39d48f464ffb0b730dc8c2292935f8f6524aa217c36f135"
          },
          {
            "alg": "SHA-384",
            "content": "98ee11bb4fef5e1b863bd6ab83b508e50ffff06832351fd9a5fe418c5a9dff67e80f2078f9572eb7edadca059e17d57c"
          },
          {
            "alg": "SHA-512",
            "content": "67759f73350a276e2dda77608f16e2fb6d2b2908af7bb5fc83687508793bd27bcc6998c570945e4ec3e49caeeb05e9ee4d3d4fdb8a77b2147bbc5fd1d1c573e3"
          },
          {
            "alg": "SHA3-256",
            "content": "085dd33c5b983cd03552e8eb69e47ae5a3de85aa363175526e5470bce0f4f69b"
          },
          {
            "alg": "SHA3-384",
            "content": "4f6b4a71e10d1da701904c6a7c865904fc697b65d282c34f1f676e157afd6cfa43d5856fdaa504772cb4c660a9109ba1"
          },
          {
            "alg": "SHA3-512",
            "content": "43a4af9e25df30b2e3c561f921bcdbebc9d782b94faa85f8706e1c79ca77bdeae161b18a4f707509599564115d49152ac03f7bab14bb2cb9d130a4975d8f7315"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-http2@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-hibernate@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-hibernate",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "449361636c3b63eb9d3acb08c1d36297"
          },
          {
            "alg": "SHA-1",
            "content": "56eda4258aa81aa3abde8e6663bbe6297b870495"
          },
          {
            "alg": "SHA-256",
            "content": "5589a9532d592c6dead117b5990386c178a81d4ec7cb8eab9888a576ce47d24d"
          },
          {
            "alg": "SHA-384",
            "content": "946c5cb7081a8f94e16e5ecc475eccd266e1c50b28620ef07df3c5bd4996f57c9673300d2a4b7dd8f773e92ff59c0ffe"
          },
          {
            "alg": "SHA-512",
            "content": "bc121e23e932a8989bb81eb72ce3a65822406dd1b9358f9169f2db7c817585420d7725b0e4a011e8ac82b64879167437180a55469a9aa21ec706d9953f4f8e96"
          },
          {
            "alg": "SHA3-256",
            "content": "782695767ab3f4bd238716842e98c56c4311098d142b388ecb08e92159a85873"
          },
          {
            "alg": "SHA3-384",
            "content": "d4c17acf52ca7e12d21238a45c957272132f619679bb1bf59ff68069c8e8c95fff70d8402230d61459d4f7dab1d5f9db"
          },
          {
            "alg": "SHA3-512",
            "content": "5e6c66c0cf9fa889b516e485cd233af2234b3e2a4f82962b03c59e95a731392744be7fde88f13c3576141b8866dfb6e6915ed20183a6b06e6aa11226ebaec623"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-hibernate@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-migrations@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-migrations",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "3d2f7b15b764e2906916c0d4bfc75bc6"
          },
          {
            "alg": "SHA-1",
            "content": "74a81b867ab00475910d013fe18d4a788984cccf"
          },
          {
            "alg": "SHA-256",
            "content": "156a9c79a74c81d173637d613a9931451188228bea38cce621f63f51bee1c2f9"
          },
          {
            "alg": "SHA-384",
            "content": "9c2998da9de3ba1bfb081fcc876ef5adc8d16e5b7cec02a63234b66f1325f3413ed8d6192ede2518560d11edf98b6d71"
          },
          {
            "alg": "SHA-512",
            "content": "3cfff65847ee29772f5c8f091557373ce3dfa59974e82c0bbfd0eaa636fdf91361b753e777810d0f5878c4b5534ef555a5b260af29a6be9af0851c4a2de56c5e"
          },
          {
            "alg": "SHA3-256",
            "content": "1150637f334a3f0354d00cc21e7e180e8fd647ba3b9f6028c4eafd30c614c157"
          },
          {
            "alg": "SHA3-384",
            "content": "0e943087f279df50ddd39b0046bb1597b3085e80b95d898e390fab6eddb98484fff05ab0e60abd0a280a3bda5914282a"
          },
          {
            "alg": "SHA3-512",
            "content": "8340a3fb797a8fdeedfc31e50c5d28ad3b3eb204f262f45f390c1a8c3a8ff798cb2f8235d97dd9bbe6947d2d986bb4b91d332f5d0ed23fb7dc0bece454b29d90"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-migrations@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-views-freemarker@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-views-freemarker",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "d78343dfbf1f4c99fc5115aea93b6382"
          },
          {
            "alg": "SHA-1",
            "content": "9b64dcbd00e184c4683a8a44ae4ff4726595c73c"
          },
          {
            "alg": "SHA-256",
            "content": "621f2168b343cc24618b63e5c0c07ca330eef8e1f930c1a4c374ab210fd5ea44"
          },
          {
            "alg": "SHA-384",
            "content": "1bb0fdd65309af52fcb82eb7228ea8ac9af06bac467c2fd9ea0025c12a182c42425382190d6e55a7feece2d6c620d1e5"
          },
          {
            "alg": "SHA-512",
            "content": "19298c6ae1500e0c16575b55d30f2ab34cbab881cd735fefc203118c326dd4a47604f8f8d595b32cec4ecbaae032129d2ede99dc36325bc8f4a18ffa5e786aeb"
          },
          {
            "alg": "SHA3-256",
            "content": "1870845187ef726d85d29ee42ccc35b66018304d23167f614b79a7deb3768e2c"
          },
          {
            "alg": "SHA3-384",
            "content": "ca4e3f7a88831ef084ee9ecc4fa78d04f7b699609ee65b6213c1276d0ade272da9f1628f49ea47d97b90d01be71d64b4"
          },
          {
            "alg": "SHA3-512",
            "content": "389d2cd752a7269b28815c723ed68700c47c0f5f6780df2bc35f18eb3ea4b77cdc18ca83d556f4de80c1f3e434f399f73b03a76b88d1da2af520b09195a938c1"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-views-freemarker@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-views-mustache@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-views-mustache",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "99d7beaccb842cbe8a68c37361e665df"
          },
          {
            "alg": "SHA-1",
            "content": "1a2a4e775b77f452893189020c2e34d60c0235a2"
          },
          {
            "alg": "SHA-256",
            "content": "19ce7554a48be097bac2b3c51f55fe468c7253a60d1a43683ae830cfe06a58e3"
          },
          {
            "alg": "SHA-384",
            "content": "012bffe18a1d48481eedd3cb2e449a71de67d8b87cfdf58ab7f52b803e05f57b5cd54e5ccfb7a125c06b6c3a2275cfff"
          },
          {
            "alg": "SHA-512",
            "content": "1f24026f35f9a4e4316d04ac41a7cdcf440fc510075e5f8297a55b63d95d3f1e5deb06acd8ef9a61b73fbf1fc054ea370c6d74ed1a06aa19ba673069aebad294"
          },
          {
            "alg": "SHA3-256",
            "content": "7856836a099d2a7f326dbc033442e49b176213fd340a8b2aa2d9dea3a9175ab6"
          },
          {
            "alg": "SHA3-384",
            "content": "e27dfbd573e90585d0cd2dd2a97bbc9dae850afdebda7e9aa7dcba3ebbcc64341dc949a50f61cb0128ee64e287cb3514"
          },
          {
            "alg": "SHA3-512",
            "content": "af431eff733b17b92ae1718165b3b10e103376bb216e63b8e39284f3572b69926084937fd370a42a018f62389744a7212a0c68959e0e76950ad751ba3ba9745a"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-views-mustache@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-metrics-graphite@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-metrics-graphite",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "014be7a674c15f505dc0816c5c544314"
          },
          {
            "alg": "SHA-1",
            "content": "d5be85278fe138a4736bc0e229c73dcd1de2b400"
          },
          {
            "alg": "SHA-256",
            "content": "0739188661d32b28544377073c1966d29a56ea9e28776b5ae7e201c50c580f09"
          },
          {
            "alg": "SHA-384",
            "content": "33e2f7f260ff112b45e6cc2c6a89816d2219b71e0292be14b7915855bb9b1caf3e08201debc0dc71617963e6b03549ce"
          },
          {
            "alg": "SHA-512",
            "content": "f2e433cc520f4e49d62cf5af209d353629409d9b1ad3f1b6613d0bc1790a575f528bc88784e0b2517ea044e46e9e67ecef5b1d02cc7f6c1a510d75457bea2c16"
          },
          {
            "alg": "SHA3-256",
            "content": "dba4bed00333d55d4dc55ddd9b9815fdb3b9b575faeae3ba8ff19ef949ee6f61"
          },
          {
            "alg": "SHA3-384",
            "content": "86976bff689e1cc045b298dae984eb65fa1381100334b3e4586976735346ade2721cc570dc6e2406bf6426aa1f597617"
          },
          {
            "alg": "SHA3-512",
            "content": "24a0c90e1f97326dd032e5c657792d6623c727efa7144891be439e00bff5323f4e3e9d35e34005b7348ec92f97f3c4210aeb4b7e15930ef7a910735d0f982d62"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-metrics-graphite@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/com.h2database/h2@1.4.197?type=jar",
        "group": "com.h2database",
        "name": "h2",
        "version": "1.4.197",
        "description": "H2 Database Engine",
        "hashes": [
          {
            "alg": "MD5",
            "content": "f9893acfa22b7fe1492dd9c515af2e5b"
          },
          {
            "alg": "SHA-1",
            "content": "bb391050048ca8ae3e32451b5a3714ecd3596a46"
          },
          {
            "alg": "SHA-256",
            "content": "37f5216e14af2772930dff9b8734353f0a80e89ba3f33e065441de6537c5e842"
          },
          {
            "alg": "SHA-384",
            "content": "01dd965926471f6cbd84b0466307ae2f0450cb204ca51cc43b538dd4d7571e096a966ac298d82e4942db4dd259d800b6"
          },
          {
            "alg": "SHA-512",
            "content": "aa4af17f766a1cfb0326d0301e1c40fc884b27e73aed4e60141d284275da70f483a3ce54d65f79f9ba66e9a53c5a68102dfc5e40a36e9d2c0a2aa9a7f7321688"
          },
          {
            "alg": "SHA3-256",
            "content": "ef7da52a3b656aee47bc85b9e98db3bb91d7f079d19012787fbbd65c32151203"
          },
          {
            "alg": "SHA3-384",
            "content": "6bec38f250d5f963a3fa385da14caccf744a36244b252d447d1b29501e455533ef3d5b2820dc73870593db10c4231aaf"
          },
          {
            "alg": "SHA3-512",
            "content": "1a5538cc48c5b99e496ee5924f80df410fecc555e3619a79b8c6204156dc333cf0cbebae05bca5a8144ab89b2f2fe4802080128d76b1e94a51acced8aedb4354"
          }
        ],
        "licenses": [{"license": {
          "name": "MPL 2.0 or EPL 1.0",
          "url": "http://h2database.com/html/license.html"
        }}],
        "purl": "pkg:maven/com.h2database/h2@1.4.197?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "https://github.com/h2database/h2database"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.glassfish.jersey.media/jersey-media-multipart@2.25.1?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.glassfish.jersey.media",
        "name": "jersey-media-multipart",
        "version": "2.25.1",
        "description": "Jersey Multipart entity providers support module.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "0ea1375a975020b60bbbbfd47a76d69c"
          },
          {
            "alg": "SHA-1",
            "content": "1d2db0078ee1b740c4e7ec7413d328a8a7e1c480"
          },
          {
            "alg": "SHA-256",
            "content": "909b669f76b8883a9218fb0fbc5022a286ead7d17b29aafa532b31f19ab4afcc"
          },
          {
            "alg": "SHA-384",
            "content": "4188539e27cb05523308a4a26a174bf9d6b19dedaf494d6d97b20a34530195ae7b3c553e6e8e4dcb31848e9c8cfcfa5d"
          },
          {
            "alg": "SHA-512",
            "content": "17e40bb9186289cd21edcd67cab68765e79c3cce5f2b29ac0ae6dd653395d93c3b8e29c734288e729bf26a59084393680b448ce617689e2064151ab09250c6ad"
          },
          {
            "alg": "SHA3-256",
            "content": "8d8299e02fcbed88c708ae2c948fca016bd985aca513f61304431169441b3bba"
          },
          {
            "alg": "SHA3-384",
            "content": "7fb8588335aa4770514fa4e6a16d5730b1b11a9028400bd8b0707f75baed30080d843b8bde7699954efc28ea13c73f0a"
          },
          {
            "alg": "SHA3-512",
            "content": "a8f03f1e4e02c76548b03f77dfc65bad4d97b305a39e17b21e3a380155b85ea428957d0e0f0d4d4b615826d491acbfbb433a3dc9cb31ba29ba0f08bc4665bbb8"
          }
        ],
        "licenses": [{"license": {
          "id": "CDDL-1.1",
          "url": "http://glassfish.java.net/public/CDDL+GPL_1_1.html"
        }}],
        "purl": "pkg:maven/org.glassfish.jersey.media/jersey-media-multipart@2.25.1?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "build-system",
            "url": "http://hudson.glassfish.org/job/Jersey-trunk-multiplatform/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/JERSEY/"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/jersey/lists/announce/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/jersey/sources/code/show"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.jvnet.mimepull/mimepull@1.9.6?type=jar",
        "publisher": "Oracle Corporation",
        "group": "org.jvnet.mimepull",
        "name": "mimepull",
        "version": "1.9.6",
        "description": "Provides a streaming API to access attachments parts in a MIME message.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "43a2478389a84b985dbe7b6ae0b3c011"
          },
          {
            "alg": "SHA-1",
            "content": "41c913d791e16f93bc712a8c8a30bb64daa2e9bd"
          },
          {
            "alg": "SHA-256",
            "content": "2d1ee56aa89837ba9ea55431542e7939fa9d425552c2e6c8ddfb3b77877721b7"
          },
          {
            "alg": "SHA-384",
            "content": "ccf56ecec63258cef4f47f85c1893ece6eed6ed75fc4ac8e7ba566d222e09f3106469b843e5be6bba90834f8f76afaf2"
          },
          {
            "alg": "SHA-512",
            "content": "38198fef6a8ca9d1af37c269582e87ae6cc7324a1686c8807be90a1edd4b33bb829d03030df1a4f5865bf6f0e6d0fb2a4f3dde265af696ab556f0bf7216ab9b0"
          },
          {
            "alg": "SHA3-256",
            "content": "3d4fac8717b03d2c33c9c8b5145cfec04a312e9021c92c8029d2a2ca60615e0e"
          },
          {
            "alg": "SHA3-384",
            "content": "ae87d840305b719133afce41017e42968afe7dee34b4618af25b7fc77c25ec7dc4ba9fee5ed82b6a7531b1ad1eabf1c7"
          },
          {
            "alg": "SHA3-512",
            "content": "a7bff1d8fa3287436726ab53ddff800d9a262fbf7801b85f50b7f29dbd017ff430f2effa9e6e95b44772ec0c349632374b9291292d2eb24f0fed1313dba15ee9"
          }
        ],
        "licenses": [
          {"license": {"id": "CDDL-1.1"}},
          {"license": {"id": "GPL-2.0-with-classpath-exception"}}
        ],
        "purl": "pkg:maven/org.jvnet.mimepull/mimepull@1.9.6?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://www.oracle.com/"
          },
          {
            "type": "issue-tracker",
            "url": "http://java.net/jira/browse/mimepull"
          },
          {
            "type": "mailing-list",
            "url": "http://java.net/projects/mimepull/lists/users/archive"
          },
          {
            "type": "vcs",
            "url": "http://java.net/projects/mimepull/sources/svn/show/tags/mimepull-1.9.6"
          },
          {
            "type": "distribution",
            "url": "https://maven.java.net/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.openjdk.jmh/jmh-core@1.19?type=jar",
        "publisher": "Oracle",
        "group": "org.openjdk.jmh",
        "name": "jmh-core",
        "version": "1.19",
        "description": "The jmh is a Java harness for building, running, and analysing nano/micro/macro benchmarks written in Java and other languages targeting the JVM.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "be8d2b77f24b93d14b3590a2c2cc9eba"
          },
          {
            "alg": "SHA-1",
            "content": "1ea93b88f8154f0a35c16b46d76cfb2febcf4916"
          },
          {
            "alg": "SHA-256",
            "content": "5b920f4033b55f78af121c6594e2afcc84c16f2030beef6d035463b126fc9f46"
          },
          {
            "alg": "SHA-384",
            "content": "1ff5023d9b26aa1208862fee10236ca3d71a58502ae656cda9a0cac766f94147898d8606764c39f46c28495b88e505f1"
          },
          {
            "alg": "SHA-512",
            "content": "9bc30e04a4ee999cc1dc45be32bd60ad4248070073424efacdce85b02777dc1ef9f8aa9f57693cc4cc6964c6c934ce3c251f8db26f70bad54353c2d0849aee83"
          },
          {
            "alg": "SHA3-256",
            "content": "b21c8a03f99e3ccadc461f35e5ed3aa3904ae25cbb44ca2dd02eb0d2f8a6582c"
          },
          {
            "alg": "SHA3-384",
            "content": "ada0a7f9bb5220f55ebbb0f2d1f7b2cfd059338520fb65e04876c76cbf350c90df46ae4587b6b187620f11041e6cb6f7"
          },
          {
            "alg": "SHA3-512",
            "content": "96f2d4874d54c13b4c9392628415ce62bdff000c142901f08d3eef24c707b5cd656c328a3ef846303a85dc3dfbff69062e0167b2065b5200e52c764afe0ba418"
          }
        ],
        "licenses": [{"license": {
          "name": "GNU General Public License (GPL), version 2, with the Classpath exception",
          "url": "http://openjdk.java.net/legal/gplv2+ce.html"
        }}],
        "purl": "pkg:maven/org.openjdk.jmh/jmh-core@1.19?type=jar",
        "externalReferences": [
          {
            "type": "website",
            "url": "http://openjdk.java.net/"
          },
          {
            "type": "vcs",
            "url": "http://hg.openjdk.java.net/code-tools/jmh/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/net.sf.jopt-simple/jopt-simple@4.6?type=jar",
        "group": "net.sf.jopt-simple",
        "name": "jopt-simple",
        "version": "4.6",
        "description": "A Java library for parsing command line options",
        "hashes": [
          {
            "alg": "MD5",
            "content": "13560a58a79b46b82057686543e8d727"
          },
          {
            "alg": "SHA-1",
            "content": "306816fb57cf94f108a43c95731b08934dcae15c"
          },
          {
            "alg": "SHA-256",
            "content": "3fcfbe3203c2ea521bf7640484fd35d6303186ea2e08e72f032d640ca067ffda"
          },
          {
            "alg": "SHA-384",
            "content": "501ae288afa2a2cafe2b01e8927d7a31b887c891dc1fb37eafbf525c675161b7af14dba1359db686a104881c3944736e"
          },
          {
            "alg": "SHA-512",
            "content": "18bf59191d7a456e7675c841df8411ebe425da40532e103db95483be5d2a75510d8a38ad9755cdd4e0be27afe7cfd0b358599388a84fcec1ee27e89caa37f5af"
          },
          {
            "alg": "SHA3-256",
            "content": "e5c7a060e6bd75fb9ef2b7eeac082550bd4f01049c0da929c57ae71fef59b32a"
          },
          {
            "alg": "SHA3-384",
            "content": "e52b264902d2b9350696cc325949e02e2ca451d787958aaebb9f7c9dcc41d6abd4da5a83001f80e659bfd89aeccab509"
          },
          {
            "alg": "SHA3-512",
            "content": "6b35fe9fcb3497a9e3a4b0c55dab300b63155c76bbce88fae9b3dcc1012f2c55d7c70216173299817830328071f5c3af079a67ce9af96c25b6befbcef915b049"
          }
        ],
        "licenses": [{"license": {"id": "MIT"}}],
        "purl": "pkg:maven/net.sf.jopt-simple/jopt-simple@4.6?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "http://github.com/pholser/jopt-simple/issues"
          },
          {
            "type": "vcs",
            "url": "http://github.com/pholser/jopt-simple"
          },
          {
            "type": "distribution",
            "url": "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.apache.commons/commons-math3@3.2?type=jar",
        "publisher": "The Apache Software Foundation",
        "group": "org.apache.commons",
        "name": "commons-math3",
        "version": "3.2",
        "description": "The Math project is a library of lightweight, self-contained mathematics and statistics components addressing the most common practical problems not immediately available in the Java programming language or commons-lang.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "aaa32530c0f744813570ff73db018698"
          },
          {
            "alg": "SHA-1",
            "content": "ec2544ab27e110d2d431bdad7d538ed509b21e62"
          },
          {
            "alg": "SHA-256",
            "content": "6268a9a0ea3e769fc493a21446664c0ef668e48c93d126791f6f3f757978fee2"
          },
          {
            "alg": "SHA-384",
            "content": "3aea6a3c2bb79e64b96086bc6b7679780594ea1731f24ae7541e294595275150a12bd63bd4dfb3ddff29e1b672f68664"
          },
          {
            "alg": "SHA-512",
            "content": "80fb66a51688c4247b957f9787921e5acb9144d71a4ab0b03b2c30f46427e50c53e6e31ca5ddb04dab2cf5e7c0eedae168103c719f8074be464918ab2e4d6e6d"
          },
          {
            "alg": "SHA3-256",
            "content": "4e5c701b4c417493bdb70d4c3f3bfb6019a6eec3c5f17dcce028158de624318c"
          },
          {
            "alg": "SHA3-384",
            "content": "6b7fa9eecd9f78db9222438eda47c2f94c7e507c7334b6501ecc7c041e27b084e790956901b3a5a4253510abb9081b28"
          },
          {
            "alg": "SHA3-512",
            "content": "3a19552d33cbe62a0d174efa39054fbe5e23f7cb466c46616c27480381f232daa2c64c868b354ed965c5d84fbfece08e30e59bc672e3891baf2bb8141b5db8c6"
          }
        ],
        "licenses": [{"license": {"id": "Apache-2.0"}}],
        "purl": "pkg:maven/org.apache.commons/commons-math3@3.2?type=jar",
        "externalReferences": [
          {
            "type": "issue-tracker",
            "url": "http://issues.apache.org/jira/browse/MATH"
          },
          {
            "type": "vcs",
            "url": "http://svn.apache.org/viewvc/commons/proper/math/trunk"
          },
          {
            "type": "build-system",
            "url": "http://vmbuild.apache.org/continuum/"
          },
          {
            "type": "mailing-list",
            "url": "http://mail-archives.apache.org/mod_mbox/commons-user/"
          },
          {
            "type": "website",
            "url": "http://www.apache.org/"
          },
          {
            "type": "distribution",
            "url": "https://repository.apache.org/service/local/staging/deploy/maven2"
          }
        ]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/org.openjdk.jmh/jmh-generator-annprocess@1.19?type=jar",
        "group": "org.openjdk.jmh",
        "name": "jmh-generator-annprocess",
        "version": "1.19",
        "description": "JMH benchmark generator, based on annotation processors.",
        "hashes": [
          {
            "alg": "MD5",
            "content": "0edd4d9828437ef68acbe301910de6eb"
          },
          {
            "alg": "SHA-1",
            "content": "e5bb13308963df412877e88fede84c1bd869ca03"
          },
          {
            "alg": "SHA-256",
            "content": "b104c8c3c971d6aa4ff4c7a73e70cfb3e6201084332e4007ba9516a43f27003e"
          },
          {
            "alg": "SHA-384",
            "content": "eaa0cfc9a6881f190f41a91a6f9e06b8b0a8284120657b9392c2c125bcafc373ad79feb29cd77ea02c62fd5d797f3942"
          },
          {
            "alg": "SHA-512",
            "content": "f4bdd594e25586047d93375f76fc2c85ad302b222ace4dae8e7418a24e1d75ab1ecd3f4d75d362baf3af6388bb6b3f3db7a932e8a003a8ff0c1412059e0c0c5b"
          },
          {
            "alg": "SHA3-256",
            "content": "ea48f22ddf27853d67194836e0a13bb9a6c20a480e03252ce75403bc303a2a8d"
          },
          {
            "alg": "SHA3-384",
            "content": "814be156196add432a7a3358977f76f167bc2aab9f6bfbb5fed63b1b953df8d256c42e8957535af1a24a28471baeb6e5"
          },
          {
            "alg": "SHA3-512",
            "content": "37ae2a6c8b2f38fcfcfea1343debb71cbb63af15c402fa32dc38e1913c75af7d2f4951a21edbc7cacfeeb789dbbc6fa9be9f24ccd426e1f9344de0f344a9e773"
          }
        ],
        "licenses": [{"license": {
          "name": "GNU General Public License (GPL), version 2, with the Classpath exception",
          "url": "http://openjdk.java.net/legal/gplv2+ce.html"
        }}],
        "purl": "pkg:maven/org.openjdk.jmh/jmh-generator-annprocess@1.19?type=jar",
        "externalReferences": [{
          "type": "vcs",
          "url": "http://hg.openjdk.java.net/code-tools/jmh/"
        }]
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-testing@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-testing",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "800103447329e58030242b6bfc2e9cca"
          },
          {
            "alg": "SHA-1",
            "content": "cee4838ba05de7920309985229df59917ff6e58a"
          },
          {
            "alg": "SHA-256",
            "content": "d52ef3eda88a2b93e01731b035bbd277eb4d395c3a076c6f5cd6a3874f17e433"
          },
          {
            "alg": "SHA-384",
            "content": "29f2ef683c3be5144aa7720530809e64e20b2c87bb83d8184a2466db98121e226922b1aa4c5158f8ca4d83bc5dedb78d"
          },
          {
            "alg": "SHA-512",
            "content": "c2ccc3c13d2007b728574b1c3df388043c2517ed3efb8256dde9c09ebbed6c18ac5e7f3281ce7b35b9e2c969124772ef0062234bfb195c27898b0674fa0900a4"
          },
          {
            "alg": "SHA3-256",
            "content": "f7fba2c7f9ccb345c29c4e52bcda601a6528d20527f32af63f8cadfaeca04a0f"
          },
          {
            "alg": "SHA3-384",
            "content": "48f593334be24e0ca2d12cfeb1a7133d46f034e05a1d6a418e66a39b83b2134524fd06456a7cfcb3c91932ae5b833878"
          },
          {
            "alg": "SHA3-512",
            "content": "e0c421a568cf98a63432088a1b5f18382cce3095db4ce8cfd1ccba7e9dc95aa7d2ec365b1d8b25614c4700d28f7f75744acac96c5358de4c50946fea4a2a2e5f"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-testing@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-client@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-client",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "a7e212ddc51872656b8cde14c6375558"
          },
          {
            "alg": "SHA-1",
            "content": "774ee66da2e18ddb9757c309a9f288a7a95d4ab5"
          },
          {
            "alg": "SHA-256",
            "content": "e1f12b97fab5cbfbefd54f7206f708b1abb767f7db2979ee67a12cced9145af7"
          },
          {
            "alg": "SHA-384",
            "content": "bd4f8bf7937ffe9b38c5831ba7e8c53e17cbb60f15b41e151fe11a0ebed9f11181caa70760715bded8e52acb26a5e445"
          },
          {
            "alg": "SHA-512",
            "content": "a15aa34a681004c1c41380a85f0f99b5117e426bfbac1bef90fade5f9644443b63e74caf9022fa53fde98eddc915ce52ed37c59a06257b7c21b9fc55367f9995"
          },
          {
            "alg": "SHA3-256",
            "content": "77d63d4f7774e74722101d0e3fe4a3d7aa1aa0dac2d95f823cacf7ea445d372b"
          },
          {
            "alg": "SHA3-384",
            "content": "d86e2e178049fa8cd5b679b05adda462a39533e41332c405d5a6885d9e4e36acc8f88303e620962197c7fae9e3a8cd3e"
          },
          {
            "alg": "SHA3-512",
            "content": "3856b47365e22680311c71e7740f4327786a88af275fe7d2f6a44b34dc12227b3a76396d87c101c31994993d2fa78db6fbfcffc848c5739d5bc9231186fe4681"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-client@1.3.15?type=jar"
      },
      {
        "type": "library",
        "bom-ref": "pkg:maven/io.dropwizard/dropwizard-forms@1.3.15?type=jar",
        "group": "io.dropwizard",
        "name": "dropwizard-forms",
        "version": "1.3.15",
        "hashes": [
          {
            "alg": "MD5",
            "content": "4038942f9fa1f452cc8ab9fb395e0dae"
          },
          {
            "alg": "SHA-1",
            "content": "171287fe38f430ed81bef0dc5808a6f58f01bd48"
          },
          {
            "alg": "SHA-256",
            "content": "cf55b3d0ae45c0b905380a374a3bfd14fee33f3ec5b5f16a046dc66d505ab4c4"
          },
          {
            "alg": "SHA-384",
            "content": "6bfe23e15037704b67c34e97f0d728da911c034569d24c5f2994a738b4feed1c1703e4da7fbc3e578ddc243634b8daee"
          },
          {
            "alg": "SHA-512",
            "content": "89e4509a55811c296371099ff91850faa32992eede0f9224c25f395a4d93560f0a4a846060bedc1747fe3bf5a4596b928a4237894292dcbe23762b4ae9c40ea3"
          },
          {
            "alg": "SHA3-256",
            "content": "f205cd66f09419d7e958c1c9be0bb3c3226c74a34cefa4a092474612532ae5c2"
          },
          {
            "alg": "SHA3-384",
            "content": "e55105b76df41078c8749bae4958958ae1525352ceae1f00c7056965159f74b6e279ca8f6b85c50c41305dadd18c5581"
          },
          {
            "alg": "SHA3-512",
            "content": "6f336ddb136efabe64b158f60f11dbcccf606df36600a2195d5cac15d2900f5625ba8eb5a0dba213f4e27386423233e5214f9b188f77816d08e75435cb8047f5"
          }
        ],
        "licenses": [],
        "purl": "pkg:maven/io.dropwizard/dropwizard-forms@1.3.15?type=jar"
      }
    ],
    "dependencies": [
      {"ref": "pkg:maven/com.fasterxml.jackson.core/jackson-annotations@2.9.10?type=jar"},
      {
        "ref": "pkg:maven/com.google.guava/guava@24.1.1-jre?type=jar",
        "dependsOn": [
          "pkg:maven/org.checkerframework/checker-compat-qual@2.0.0?type=jar",
          "pkg:maven/com.google.errorprone/error_prone_annotations@2.1.3?type=jar",
          "pkg:maven/com.google.j2objc/j2objc-annotations@1.1?type=jar",
          "pkg:maven/org.codehaus.mojo/animal-sniffer-annotations@1.14?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.checkerframework/checker-compat-qual@2.0.0?type=jar"},
      {"ref": "pkg:maven/com.google.errorprone/error_prone_annotations@2.1.3?type=jar"},
      {"ref": "pkg:maven/com.google.j2objc/j2objc-annotations@1.1?type=jar"},
      {"ref": "pkg:maven/org.codehaus.mojo/animal-sniffer-annotations@1.14?type=jar"},
      {"ref": "pkg:maven/com.google.code.findbugs/jsr305@3.0.2?type=jar"},
      {"ref": "pkg:maven/joda-time/joda-time@2.10.1?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-util@1.3.15?type=jar",
        "dependsOn": ["pkg:maven/joda-time/joda-time@2.10.1?type=jar"]
      },
      {"ref": "pkg:maven/com.fasterxml.jackson.core/jackson-core@2.9.10?type=jar"},
      {"ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.9.10?type=jar"},
      {"ref": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-guava@2.9.10?type=jar"},
      {"ref": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-jsr310@2.9.10?type=jar"},
      {"ref": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-jdk8@2.9.10?type=jar"},
      {"ref": "pkg:maven/com.fasterxml.jackson.module/jackson-module-parameter-names@2.9.10?type=jar"},
      {"ref": "pkg:maven/com.fasterxml.jackson.module/jackson-module-afterburner@2.9.10?type=jar"},
      {"ref": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-joda@2.9.10?type=jar"},
      {"ref": "pkg:maven/org.slf4j/slf4j-api@1.7.26?type=jar"},
      {
        "ref": "pkg:maven/org.hibernate/hibernate-validator@5.4.3.Final?type=jar",
        "dependsOn": [
          "pkg:maven/javax.validation/validation-api@1.1.0.Final?type=jar",
          "pkg:maven/org.jboss.logging/jboss-logging@3.3.0.Final?type=jar",
          "pkg:maven/com.fasterxml/classmate@1.4.0?type=jar"
        ]
      },
      {"ref": "pkg:maven/javax.validation/validation-api@1.1.0.Final?type=jar"},
      {"ref": "pkg:maven/org.jboss.logging/jboss-logging@3.3.0.Final?type=jar"},
      {"ref": "pkg:maven/com.fasterxml/classmate@1.4.0?type=jar"},
      {"ref": "pkg:maven/org.glassfish/javax.el@3.0.0?type=jar"},
      {"ref": "pkg:maven/org.javassist/javassist@3.24.1-GA?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-jackson@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/com.google.guava/guava@24.1.1-jre?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-util@1.3.15?type=jar",
          "pkg:maven/com.fasterxml.jackson.core/jackson-core@2.9.10?type=jar",
          "pkg:maven/com.fasterxml.jackson.core/jackson-annotations@2.9.10?type=jar",
          "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.9.10?type=jar",
          "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-guava@2.9.10?type=jar",
          "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-jsr310@2.9.10?type=jar",
          "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-jdk8@2.9.10?type=jar",
          "pkg:maven/com.fasterxml.jackson.module/jackson-module-parameter-names@2.9.10?type=jar",
          "pkg:maven/com.fasterxml.jackson.module/jackson-module-afterburner@2.9.10?type=jar",
          "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-joda@2.9.10?type=jar",
          "pkg:maven/org.slf4j/slf4j-api@1.7.26?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-validation@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/org.hibernate/hibernate-validator@5.4.3.Final?type=jar",
          "pkg:maven/org.glassfish/javax.el@3.0.0?type=jar",
          "pkg:maven/org.javassist/javassist@3.24.1-GA?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/com.fasterxml.jackson.dataformat/jackson-dataformat-yaml@2.9.10?type=jar",
        "dependsOn": ["pkg:maven/org.yaml/snakeyaml@1.23?type=jar"]
      },
      {"ref": "pkg:maven/org.yaml/snakeyaml@1.23?type=jar"},
      {"ref": "pkg:maven/org.apache.commons/commons-lang3@3.8.1?type=jar"},
      {"ref": "pkg:maven/org.apache.commons/commons-text@1.2?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard.metrics/metrics-logback@4.0.5?type=jar",
        "dependsOn": ["pkg:maven/io.dropwizard.metrics/metrics-core@4.0.5?type=jar"]
      },
      {"ref": "pkg:maven/io.dropwizard.metrics/metrics-core@4.0.5?type=jar"},
      {"ref": "pkg:maven/org.slf4j/jul-to-slf4j@1.7.26?type=jar"},
      {"ref": "pkg:maven/ch.qos.logback/logback-core@1.2.3?type=jar"},
      {"ref": "pkg:maven/ch.qos.logback/logback-classic@1.2.3?type=jar"},
      {"ref": "pkg:maven/org.slf4j/log4j-over-slf4j@1.7.26?type=jar"},
      {"ref": "pkg:maven/org.slf4j/jcl-over-slf4j@1.7.26?type=jar"},
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-util@9.4.18.v20190429?type=jar"},
      {
        "ref": "pkg:maven/org.eclipse.jetty/jetty-server@9.4.18.v20190429?type=jar",
        "dependsOn": [
          "pkg:maven/javax.servlet/javax.servlet-api@3.1.0?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-http@9.4.18.v20190429?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-io@9.4.18.v20190429?type=jar"
        ]
      },
      {"ref": "pkg:maven/javax.servlet/javax.servlet-api@3.1.0?type=jar"},
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-http@9.4.18.v20190429?type=jar"},
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-io@9.4.18.v20190429?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-lifecycle@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/com.google.guava/guava@24.1.1-jre?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-server@9.4.18.v20190429?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-util@1.3.15?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-logging@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/io.dropwizard.metrics/metrics-logback@4.0.5?type=jar",
          "pkg:maven/org.slf4j/jul-to-slf4j@1.7.26?type=jar",
          "pkg:maven/ch.qos.logback/logback-core@1.2.3?type=jar",
          "pkg:maven/ch.qos.logback/logback-classic@1.2.3?type=jar",
          "pkg:maven/org.slf4j/log4j-over-slf4j@1.7.26?type=jar",
          "pkg:maven/org.slf4j/jcl-over-slf4j@1.7.26?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-util@9.4.18.v20190429?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/org.glassfish.jersey.core/jersey-server@2.25.1?type=jar",
        "dependsOn": [
          "pkg:maven/org.glassfish.jersey.core/jersey-common@2.25.1?type=jar",
          "pkg:maven/org.glassfish.jersey.core/jersey-client@2.25.1?type=jar",
          "pkg:maven/javax.ws.rs/javax.ws.rs-api@2.0.1?type=jar",
          "pkg:maven/org.glassfish.jersey.media/jersey-media-jaxb@2.25.1?type=jar",
          "pkg:maven/javax.annotation/javax.annotation-api@1.3.1?type=jar",
          "pkg:maven/org.glassfish.hk2/hk2-api@2.5.0-b32?type=jar",
          "pkg:maven/org.glassfish.hk2.external/javax.inject@2.5.0-b32?type=jar",
          "pkg:maven/org.glassfish.hk2/hk2-locator@2.5.0-b32?type=jar",
          "pkg:maven/javax.validation/validation-api@1.1.0.Final?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/org.glassfish.jersey.core/jersey-common@2.25.1?type=jar",
        "dependsOn": [
          "pkg:maven/org.glassfish.jersey.bundles.repackaged/jersey-guava@2.25.1?type=jar",
          "pkg:maven/org.glassfish.hk2/osgi-resource-locator@1.0.1?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.glassfish.jersey.bundles.repackaged/jersey-guava@2.25.1?type=jar"},
      {"ref": "pkg:maven/org.glassfish.hk2/osgi-resource-locator@1.0.1?type=jar"},
      {"ref": "pkg:maven/org.glassfish.jersey.core/jersey-client@2.25.1?type=jar"},
      {"ref": "pkg:maven/javax.ws.rs/javax.ws.rs-api@2.0.1?type=jar"},
      {"ref": "pkg:maven/org.glassfish.jersey.media/jersey-media-jaxb@2.25.1?type=jar"},
      {"ref": "pkg:maven/javax.annotation/javax.annotation-api@1.3.1?type=jar"},
      {
        "ref": "pkg:maven/org.glassfish.hk2/hk2-api@2.5.0-b32?type=jar",
        "dependsOn": [
          "pkg:maven/org.glassfish.hk2/hk2-utils@2.5.0-b32?type=jar",
          "pkg:maven/org.glassfish.hk2.external/aopalliance-repackaged@2.5.0-b32?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.glassfish.hk2/hk2-utils@2.5.0-b32?type=jar"},
      {"ref": "pkg:maven/org.glassfish.hk2.external/aopalliance-repackaged@2.5.0-b32?type=jar"},
      {"ref": "pkg:maven/org.glassfish.hk2.external/javax.inject@2.5.0-b32?type=jar"},
      {"ref": "pkg:maven/org.glassfish.hk2/hk2-locator@2.5.0-b32?type=jar"},
      {"ref": "pkg:maven/org.glassfish.jersey.ext/jersey-metainf-services@2.25.1?type=jar"},
      {"ref": "pkg:maven/org.glassfish.jersey.ext/jersey-bean-validation@2.25.1?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard.metrics/metrics-jersey2@4.0.5?type=jar",
        "dependsOn": [
          "pkg:maven/io.dropwizard.metrics/metrics-core@4.0.5?type=jar",
          "pkg:maven/io.dropwizard.metrics/metrics-annotation@4.0.5?type=jar"
        ]
      },
      {"ref": "pkg:maven/io.dropwizard.metrics/metrics-annotation@4.0.5?type=jar"},
      {
        "ref": "pkg:maven/com.fasterxml.jackson.jaxrs/jackson-jaxrs-json-provider@2.9.10?type=jar",
        "dependsOn": [
          "pkg:maven/com.fasterxml.jackson.jaxrs/jackson-jaxrs-base@2.9.10?type=jar",
          "pkg:maven/com.fasterxml.jackson.module/jackson-module-jaxb-annotations@2.9.10?type=jar"
        ]
      },
      {"ref": "pkg:maven/com.fasterxml.jackson.jaxrs/jackson-jaxrs-base@2.9.10?type=jar"},
      {"ref": "pkg:maven/com.fasterxml.jackson.module/jackson-module-jaxb-annotations@2.9.10?type=jar"},
      {
        "ref": "pkg:maven/org.glassfish.jersey.containers/jersey-container-servlet@2.25.1?type=jar",
        "dependsOn": ["pkg:maven/org.glassfish.jersey.containers/jersey-container-servlet-core@2.25.1?type=jar"]
      },
      {"ref": "pkg:maven/org.glassfish.jersey.containers/jersey-container-servlet-core@2.25.1?type=jar"},
      {
        "ref": "pkg:maven/org.eclipse.jetty/jetty-webapp@9.4.18.v20190429?type=jar",
        "dependsOn": [
          "pkg:maven/org.eclipse.jetty/jetty-xml@9.4.18.v20190429?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-servlet@9.4.18.v20190429?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-xml@9.4.18.v20190429?type=jar"},
      {
        "ref": "pkg:maven/org.eclipse.jetty/jetty-servlet@9.4.18.v20190429?type=jar",
        "dependsOn": ["pkg:maven/org.eclipse.jetty/jetty-security@9.4.18.v20190429?type=jar"]
      },
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-security@9.4.18.v20190429?type=jar"},
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-continuation@9.4.18.v20190429?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard.metrics/metrics-jetty9@4.0.5?type=jar",
        "dependsOn": ["pkg:maven/io.dropwizard.metrics/metrics-core@4.0.5?type=jar"]
      },
      {
        "ref": "pkg:maven/org.eclipse.jetty/jetty-servlets@9.4.18.v20190429?type=jar",
        "dependsOn": ["pkg:maven/org.eclipse.jetty/jetty-continuation@9.4.18.v20190429?type=jar"]
      },
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-jetty@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/io.dropwizard.metrics/metrics-jetty9@4.0.5?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-server@9.4.18.v20190429?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-servlet@9.4.18.v20190429?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-servlets@9.4.18.v20190429?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-http@9.4.18.v20190429?type=jar"
        ]
      },
      {"ref": "pkg:maven/ch.qos.logback/logback-access@1.2.3?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-configuration@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/com.fasterxml.jackson.dataformat/jackson-dataformat-yaml@2.9.10?type=jar",
          "pkg:maven/org.apache.commons/commons-lang3@3.8.1?type=jar",
          "pkg:maven/org.apache.commons/commons-text@1.2?type=jar"
        ]
      },
      {"ref": "pkg:maven/io.dropwizard/dropwizard-metrics@1.3.15?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-jersey@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/org.glassfish.jersey.core/jersey-server@2.25.1?type=jar",
          "pkg:maven/org.glassfish.jersey.ext/jersey-metainf-services@2.25.1?type=jar",
          "pkg:maven/org.glassfish.jersey.ext/jersey-bean-validation@2.25.1?type=jar",
          "pkg:maven/io.dropwizard.metrics/metrics-jersey2@4.0.5?type=jar",
          "pkg:maven/com.fasterxml.jackson.jaxrs/jackson-jaxrs-json-provider@2.9.10?type=jar",
          "pkg:maven/org.glassfish.jersey.containers/jersey-container-servlet@2.25.1?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-server@9.4.18.v20190429?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-webapp@9.4.18.v20190429?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-continuation@9.4.18.v20190429?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-servlets@1.3.15?type=jar",
        "dependsOn": ["pkg:maven/io.dropwizard.metrics/metrics-annotation@4.0.5?type=jar"]
      },
      {"ref": "pkg:maven/io.dropwizard.metrics/metrics-jvm@4.0.5?type=jar"},
      {"ref": "pkg:maven/io.dropwizard.metrics/metrics-jmx@4.0.5?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard.metrics/metrics-servlets@4.0.5?type=jar",
        "dependsOn": [
          "pkg:maven/io.dropwizard.metrics/metrics-json@4.0.5?type=jar",
          "pkg:maven/com.papertrail/profiler@1.0.2?type=jar"
        ]
      },
      {"ref": "pkg:maven/io.dropwizard.metrics/metrics-json@4.0.5?type=jar"},
      {"ref": "pkg:maven/com.papertrail/profiler@1.0.2?type=jar"},
      {"ref": "pkg:maven/io.dropwizard.metrics/metrics-healthchecks@4.0.5?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-request-logging@1.3.15?type=jar",
        "dependsOn": ["pkg:maven/ch.qos.logback/logback-access@1.2.3?type=jar"]
      },
      {"ref": "pkg:maven/net.sourceforge.argparse4j/argparse4j@0.8.1?type=jar"},
      {"ref": "pkg:maven/org.eclipse.jetty.toolchain.setuid/jetty-setuid-java@1.0.3?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-core@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/io.dropwizard/dropwizard-util@1.3.15?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-jackson@1.3.15?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-validation@1.3.15?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-configuration@1.3.15?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-logging@1.3.15?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-metrics@1.3.15?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-jersey@1.3.15?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-servlets@1.3.15?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-jetty@1.3.15?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-lifecycle@1.3.15?type=jar",
          "pkg:maven/io.dropwizard.metrics/metrics-core@4.0.5?type=jar",
          "pkg:maven/io.dropwizard.metrics/metrics-jvm@4.0.5?type=jar",
          "pkg:maven/io.dropwizard.metrics/metrics-jmx@4.0.5?type=jar",
          "pkg:maven/io.dropwizard.metrics/metrics-servlets@4.0.5?type=jar",
          "pkg:maven/io.dropwizard.metrics/metrics-healthchecks@4.0.5?type=jar",
          "pkg:maven/io.dropwizard/dropwizard-request-logging@1.3.15?type=jar",
          "pkg:maven/net.sourceforge.argparse4j/argparse4j@0.8.1?type=jar",
          "pkg:maven/org.eclipse.jetty.toolchain.setuid/jetty-setuid-java@1.0.3?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/junit/junit@4.12?type=jar",
        "dependsOn": ["pkg:maven/org.hamcrest/hamcrest-core@1.3?type=jar"]
      },
      {"ref": "pkg:maven/org.hamcrest/hamcrest-core@1.3?type=jar"},
      {
        "ref": "pkg:maven/org.junit.jupiter/junit-jupiter-engine@5.2.0?type=jar",
        "dependsOn": [
          "pkg:maven/org.apiguardian/apiguardian-api@1.0.0?type=jar",
          "pkg:maven/org.junit.platform/junit-platform-engine@1.2.0?type=jar",
          "pkg:maven/org.junit.jupiter/junit-jupiter-api@5.2.0?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.apiguardian/apiguardian-api@1.0.0?type=jar"},
      {
        "ref": "pkg:maven/org.junit.platform/junit-platform-engine@1.2.0?type=jar",
        "dependsOn": [
          "pkg:maven/org.junit.platform/junit-platform-commons@1.2.0?type=jar",
          "pkg:maven/org.opentest4j/opentest4j@1.1.0?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.junit.platform/junit-platform-commons@1.2.0?type=jar"},
      {"ref": "pkg:maven/org.opentest4j/opentest4j@1.1.0?type=jar"},
      {"ref": "pkg:maven/org.junit.jupiter/junit-jupiter-api@5.2.0?type=jar"},
      {
        "ref": "pkg:maven/org.mockito/mockito-core@2.24.0?type=jar",
        "dependsOn": [
          "pkg:maven/net.bytebuddy/byte-buddy@1.9.7?type=jar",
          "pkg:maven/net.bytebuddy/byte-buddy-agent@1.9.7?type=jar"
        ]
      },
      {"ref": "pkg:maven/net.bytebuddy/byte-buddy@1.9.7?type=jar"},
      {"ref": "pkg:maven/net.bytebuddy/byte-buddy-agent@1.9.7?type=jar"},
      {"ref": "pkg:maven/org.objenesis/objenesis@2.6?type=jar"},
      {"ref": "pkg:maven/org.assertj/assertj-core@3.9.1?type=jar"},
      {
        "ref": "pkg:maven/org.glassfish.jersey.test-framework.providers/jersey-test-framework-provider-inmemory@2.25.1?type=jar",
        "dependsOn": [
          "pkg:maven/org.glassfish.jersey.test-framework/jersey-test-framework-core@2.25.1?type=jar",
          "pkg:maven/org.glassfish.jersey.core/jersey-server@2.25.1?type=jar",
          "pkg:maven/org.glassfish.jersey.core/jersey-client@2.25.1?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/org.glassfish.jersey.test-framework/jersey-test-framework-core@2.25.1?type=jar",
        "dependsOn": ["pkg:maven/org.glassfish.jersey.containers/jersey-container-servlet-core@2.25.1?type=jar"]
      },
      {
        "ref": "pkg:maven/org.hibernate/hibernate-core@5.2.18.Final?type=jar",
        "dependsOn": [
          "pkg:maven/org.hibernate.javax.persistence/hibernate-jpa-2.1-api@1.0.0.Final?type=jar",
          "pkg:maven/org.javassist/javassist@3.24.1-GA?type=jar",
          "pkg:maven/antlr/antlr@2.7.7?type=jar",
          "pkg:maven/org.jboss.spec.javax.transaction/jboss-transaction-api_1.2_spec@1.0.1.Final?type=jar",
          "pkg:maven/org.jboss/jandex@2.0.3.Final?type=jar",
          "pkg:maven/com.fasterxml/classmate@1.4.0?type=jar",
          "pkg:maven/org.dom4j/dom4j@2.1.1?type=jar",
          "pkg:maven/org.hibernate.common/hibernate-commons-annotations@5.0.1.Final?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.hibernate.javax.persistence/hibernate-jpa-2.1-api@1.0.0.Final?type=jar"},
      {"ref": "pkg:maven/antlr/antlr@2.7.7?type=jar"},
      {"ref": "pkg:maven/org.jboss.spec.javax.transaction/jboss-transaction-api_1.2_spec@1.0.1.Final?type=jar"},
      {"ref": "pkg:maven/org.jboss/jandex@2.0.3.Final?type=jar"},
      {"ref": "pkg:maven/org.dom4j/dom4j@2.1.1?type=jar"},
      {"ref": "pkg:maven/org.hibernate.common/hibernate-commons-annotations@5.0.1.Final?type=jar"},
      {"ref": "pkg:maven/org.glassfish.jersey.ext.rx/jersey-rx-client@2.25.1?type=jar"},
      {
        "ref": "pkg:maven/org.apache.httpcomponents/httpclient@4.5.7?type=jar",
        "dependsOn": [
          "pkg:maven/org.apache.httpcomponents/httpcore@4.4.11?type=jar",
          "pkg:maven/commons-codec/commons-codec@1.11?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.apache.httpcomponents/httpcore@4.4.11?type=jar"},
      {"ref": "pkg:maven/commons-codec/commons-codec@1.11?type=jar"},
      {"ref": "pkg:maven/io.dropwizard.metrics/metrics-httpclient@4.0.5?type=jar"},
      {"ref": "pkg:maven/org.glassfish.jersey.connectors/jersey-apache-connector@2.25.1?type=jar"},
      {
        "ref": "pkg:maven/org.apache.tomcat/tomcat-jdbc@9.0.16?type=jar",
        "dependsOn": ["pkg:maven/org.apache.tomcat/tomcat-juli@9.0.16?type=jar"]
      },
      {"ref": "pkg:maven/org.apache.tomcat/tomcat-juli@9.0.16?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-db@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/io.dropwizard/dropwizard-core@1.3.15?type=jar",
          "pkg:maven/org.apache.tomcat/tomcat-jdbc@9.0.16?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.jdbi/jdbi@2.78?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard.metrics/metrics-jdbi@4.0.5?type=jar",
        "dependsOn": ["pkg:maven/io.dropwizard.metrics/metrics-core@4.0.5?type=jar"]
      },
      {
        "ref": "pkg:maven/org.jdbi/jdbi3-core@3.5.1?type=jar",
        "dependsOn": [
          "pkg:maven/org.antlr/antlr-runtime@3.4?type=jar",
          "pkg:maven/org.slf4j/slf4j-api@1.7.26?type=jar",
          "pkg:maven/net.jodah/expiringmap@0.5.6?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/org.antlr/antlr-runtime@3.4?type=jar",
        "dependsOn": [
          "pkg:maven/org.antlr/stringtemplate@4.0.2?type=jar",
          "pkg:maven/antlr/antlr@2.7.7?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.antlr/stringtemplate@4.0.2?type=jar"},
      {"ref": "pkg:maven/net.jodah/expiringmap@0.5.6?type=jar"},
      {"ref": "pkg:maven/org.jdbi/jdbi3-sqlobject@3.5.1?type=jar"},
      {
        "ref": "pkg:maven/org.jdbi/jdbi3-jodatime2@3.5.1?type=jar",
        "dependsOn": ["pkg:maven/joda-time/joda-time@2.10.1?type=jar"]
      },
      {
        "ref": "pkg:maven/org.jdbi/jdbi3-guava@3.5.1?type=jar",
        "dependsOn": ["pkg:maven/com.google.guava/guava@24.1.1-jre?type=jar"]
      },
      {
        "ref": "pkg:maven/io.dropwizard.metrics/metrics-jdbi3@4.0.5?type=jar",
        "dependsOn": [
          "pkg:maven/io.dropwizard.metrics/metrics-core@4.0.5?type=jar",
          "pkg:maven/io.dropwizard.metrics/metrics-annotation@4.0.5?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/org.liquibase/liquibase-core@3.6.3?type=jar",
        "dependsOn": [
          "pkg:maven/org.slf4j/slf4j-api@1.7.26?type=jar",
          "pkg:maven/ch.qos.logback/logback-classic@1.2.3?type=jar"
        ]
      },
      {"ref": "pkg:maven/com.mattbertolini/liquibase-slf4j@2.0.0?type=jar"},
      {
        "ref": "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-hibernate5@2.9.10?type=jar",
        "dependsOn": [
          "pkg:maven/com.fasterxml.jackson.core/jackson-core@2.9.10?type=jar",
          "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.9.10?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/org.jadira.usertype/usertype.core@7.0.0.CR1?type=jar",
        "dependsOn": ["pkg:maven/org.jadira.usertype/usertype.spi@7.0.0.CR1?type=jar"]
      },
      {"ref": "pkg:maven/org.jadira.usertype/usertype.spi@7.0.0.CR1?type=jar"},
      {
        "ref": "pkg:maven/org.eclipse.jetty.http2/http2-server@9.4.18.v20190429?type=jar",
        "dependsOn": ["pkg:maven/org.eclipse.jetty.http2/http2-common@9.4.18.v20190429?type=jar"]
      },
      {
        "ref": "pkg:maven/org.eclipse.jetty.http2/http2-common@9.4.18.v20190429?type=jar",
        "dependsOn": ["pkg:maven/org.eclipse.jetty.http2/http2-hpack@9.4.18.v20190429?type=jar"]
      },
      {"ref": "pkg:maven/org.eclipse.jetty.http2/http2-hpack@9.4.18.v20190429?type=jar"},
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-alpn-openjdk8-server@9.4.18.v20190429?type=jar"},
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-alpn-java-server@9.4.18.v20190429?type=jar"},
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-alpn-java-client@9.4.18.v20190429?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-views@1.3.15?type=jar",
        "dependsOn": ["pkg:maven/io.dropwizard/dropwizard-core@1.3.15?type=jar"]
      },
      {"ref": "pkg:maven/org.freemarker/freemarker@2.3.28?type=jar"},
      {"ref": "pkg:maven/com.github.spullara.mustache.java/compiler@0.9.6?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard.metrics/metrics-graphite@4.0.5?type=jar",
        "dependsOn": ["pkg:maven/com.rabbitmq/amqp-client@4.4.1?type=jar"]
      },
      {"ref": "pkg:maven/com.rabbitmq/amqp-client@4.4.1?type=jar"},
      {"ref": "pkg:maven/io.dropwizard/dropwizard-auth@1.3.15?type=jar"},
      {"ref": "pkg:maven/io.dropwizard/dropwizard-assets@1.3.15?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-http2@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/org.eclipse.jetty.http2/http2-server@9.4.18.v20190429?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-alpn-openjdk8-server@9.4.18.v20190429?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-alpn-java-server@9.4.18.v20190429?type=jar",
          "pkg:maven/org.eclipse.jetty/jetty-alpn-java-client@9.4.18.v20190429?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-alpn-server@9.4.18.v20190429?type=jar"},
      {"ref": "pkg:maven/org.eclipse.jetty.alpn/alpn-api@1.1.3.v20160715?type=jar"},
      {"ref": "pkg:maven/org.eclipse.jetty/jetty-alpn-client@9.4.18.v20190429?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-hibernate@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/io.dropwizard/dropwizard-db@1.3.15?type=jar",
          "pkg:maven/com.fasterxml.jackson.datatype/jackson-datatype-hibernate5@2.9.10?type=jar",
          "pkg:maven/org.jadira.usertype/usertype.core@7.0.0.CR1?type=jar",
          "pkg:maven/org.hibernate/hibernate-core@5.2.18.Final?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-migrations@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/org.liquibase/liquibase-core@3.6.3?type=jar",
          "pkg:maven/com.mattbertolini/liquibase-slf4j@2.0.0?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-views-freemarker@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/io.dropwizard/dropwizard-views@1.3.15?type=jar",
          "pkg:maven/org.freemarker/freemarker@2.3.28?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-views-mustache@1.3.15?type=jar",
        "dependsOn": ["pkg:maven/com.github.spullara.mustache.java/compiler@0.9.6?type=jar"]
      },
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-metrics-graphite@1.3.15?type=jar",
        "dependsOn": ["pkg:maven/io.dropwizard.metrics/metrics-graphite@4.0.5?type=jar"]
      },
      {"ref": "pkg:maven/com.h2database/h2@1.4.197?type=jar"},
      {
        "ref": "pkg:maven/org.glassfish.jersey.media/jersey-media-multipart@2.25.1?type=jar",
        "dependsOn": [
          "pkg:maven/org.glassfish.jersey.core/jersey-common@2.25.1?type=jar",
          "pkg:maven/org.jvnet.mimepull/mimepull@1.9.6?type=jar"
        ]
      },
      {"ref": "pkg:maven/org.jvnet.mimepull/mimepull@1.9.6?type=jar"},
      {
        "ref": "pkg:maven/org.openjdk.jmh/jmh-core@1.19?type=jar",
        "dependsOn": [
          "pkg:maven/net.sf.jopt-simple/jopt-simple@4.6?type=jar",
          "pkg:maven/org.apache.commons/commons-math3@3.2?type=jar"
        ]
      },
      {"ref": "pkg:maven/net.sf.jopt-simple/jopt-simple@4.6?type=jar"},
      {"ref": "pkg:maven/org.apache.commons/commons-math3@3.2?type=jar"},
      {"ref": "pkg:maven/org.openjdk.jmh/jmh-generator-annprocess@1.19?type=jar"},
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-testing@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/org.objenesis/objenesis@2.6?type=jar",
          "pkg:maven/org.glassfish.jersey.test-framework.providers/jersey-test-framework-provider-inmemory@2.25.1?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-client@1.3.15?type=jar",
        "dependsOn": [
          "pkg:maven/org.glassfish.jersey.core/jersey-client@2.25.1?type=jar",
          "pkg:maven/org.glassfish.jersey.ext.rx/jersey-rx-client@2.25.1?type=jar",
          "pkg:maven/org.apache.httpcomponents/httpclient@4.5.7?type=jar",
          "pkg:maven/io.dropwizard.metrics/metrics-httpclient@4.0.5?type=jar",
          "pkg:maven/org.glassfish.jersey.connectors/jersey-apache-connector@2.25.1?type=jar"
        ]
      },
      {
        "ref": "pkg:maven/io.dropwizard/dropwizard-forms@1.3.15?type=jar",
        "dependsOn": ["pkg:maven/org.glassfish.jersey.media/jersey-media-multipart@2.25.1?type=jar"]
      }
    ]
  }

//https://github.com/CycloneDX/bom-examples/blob/master/SBOM/laravel-7.12.0/bom.1.3.json
const sbom1_3: CycloneDXBomV1_3 = {
    "bomFormat": "CycloneDX",
    "specVersion": "1.3",
    "version": 1,
    "metadata": {
        "tools": [
            {
                "vendor": "cyclonedx",
                "name": "cyclonedx-php-composer",
                "version": "dev-master"
            }
        ],
        "component": {
            "bom-ref": "pkg:composer/cyclonedx/cyclonedx-php-composer-demo@dev-master",
            "type": "application",
            "name": "cyclonedx-php-composer-demo",
            "version": "dev-master",
            "group": "cyclonedx",
            "description": "demo of cyclonedx/cyclonedx-php-composer with a pinned version of laravel/framework",
            "purl": "pkg:composer/cyclonedx/cyclonedx-php-composer-demo@dev-master"
        }
    },
    "components": [
        {
            "bom-ref": "pkg:composer/asm89/stack-cors@1.3.0",
            "type": "library",
            "name": "stack-cors",
            "version": "1.3.0",
            "group": "asm89",
            "description": "Cross-origin resource sharing library and stack middleware",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/asm89/stack-cors@1.3.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/asm89/stack-cors.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=b9c31def6a83f84b4d4a40d35996d375755f0e08)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/asm89/stack-cors/zipball/b9c31def6a83f84b4d4a40d35996d375755f0e08",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=b9c31def6a83f84b4d4a40d35996d375755f0e08 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://github.com/asm89/stack-cors",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/asm89/stack-cors/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/asm89/stack-cors/tree/1.3.0",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/brick/math@0.9.3",
            "type": "library",
            "name": "math",
            "version": "0.9.3",
            "group": "brick",
            "description": "Arbitrary-precision arithmetic library",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/brick/math@0.9.3",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/brick/math.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=ca57d18f028f84f777b2168cd1911b0dee2343ae)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/brick/math/zipball/ca57d18f028f84f777b2168cd1911b0dee2343ae",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=ca57d18f028f84f777b2168cd1911b0dee2343ae & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/brick/math/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/brick/math/tree/0.9.3",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/BenMorel",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/brick/math",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/doctrine/inflector@2.0.4",
            "type": "library",
            "name": "inflector",
            "version": "2.0.4",
            "group": "doctrine",
            "description": "PHP Doctrine Inflector is a small library that can perform string manipulations with regard to upper/lowercase and singular/plural forms of words.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/doctrine/inflector@2.0.4",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/doctrine/inflector.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=8b7ff3e4b7de6b2c84da85637b59fd2880ecaa89)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/doctrine/inflector/zipball/8b7ff3e4b7de6b2c84da85637b59fd2880ecaa89",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=8b7ff3e4b7de6b2c84da85637b59fd2880ecaa89 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://www.doctrine-project.org/projects/inflector.html",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/doctrine/inflector/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/doctrine/inflector/tree/2.0.4",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://www.doctrine-project.org/sponsorship.html",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://www.patreon.com/phpdoctrine",
                    "comment": "As set via `funding` in composer package definition. (type=patreon)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/doctrine%2Finflector",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/doctrine/lexer@1.2.1",
            "type": "library",
            "name": "lexer",
            "version": "1.2.1",
            "group": "doctrine",
            "description": "PHP Doctrine Lexer parser library that can be used in Top-Down, Recursive Descent Parsers.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/doctrine/lexer@1.2.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/doctrine/lexer.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=e864bbf5904cb8f5bb334f99209b48018522f042)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/doctrine/lexer/zipball/e864bbf5904cb8f5bb334f99209b48018522f042",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=e864bbf5904cb8f5bb334f99209b48018522f042 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://www.doctrine-project.org/projects/lexer.html",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/doctrine/lexer/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/doctrine/lexer/tree/1.2.1",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://www.doctrine-project.org/sponsorship.html",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://www.patreon.com/phpdoctrine",
                    "comment": "As set via `funding` in composer package definition. (type=patreon)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/doctrine%2Flexer",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/dragonmantank/cron-expression@2.3.1",
            "type": "library",
            "name": "cron-expression",
            "version": "2.3.1",
            "group": "dragonmantank",
            "description": "CRON for PHP: Calculate the next or previous run date and determine if a CRON expression is due",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/dragonmantank/cron-expression@2.3.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/dragonmantank/cron-expression.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=65b2d8ee1f10915efb3b55597da3404f096acba2)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/dragonmantank/cron-expression/zipball/65b2d8ee1f10915efb3b55597da3404f096acba2",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=65b2d8ee1f10915efb3b55597da3404f096acba2 & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/dragonmantank/cron-expression/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/dragonmantank/cron-expression/tree/v2.3.1",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/dragonmantank",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/egulias/email-validator@2.1.25",
            "type": "library",
            "name": "email-validator",
            "version": "2.1.25",
            "group": "egulias",
            "description": "A library for validating emails against several RFCs",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/egulias/email-validator@2.1.25",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/egulias/EmailValidator.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=0dbf5d78455d4d6a41d186da50adc1122ec066f4)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/egulias/EmailValidator/zipball/0dbf5d78455d4d6a41d186da50adc1122ec066f4",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=0dbf5d78455d4d6a41d186da50adc1122ec066f4 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://github.com/egulias/EmailValidator",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/egulias/EmailValidator/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/egulias/EmailValidator/tree/2.1.25",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/egulias",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/fideloper/proxy@4.4.1",
            "type": "library",
            "name": "proxy",
            "version": "4.4.1",
            "group": "fideloper",
            "description": "Set trusted proxies for Laravel",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/fideloper/proxy@4.4.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/fideloper/TrustedProxy.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=c073b2bd04d1c90e04dc1b787662b558dd65ade0)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/fideloper/TrustedProxy/zipball/c073b2bd04d1c90e04dc1b787662b558dd65ade0",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=c073b2bd04d1c90e04dc1b787662b558dd65ade0 & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/fideloper/TrustedProxy/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/fideloper/TrustedProxy/tree/4.4.1",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/fruitcake/laravel-cors@1.0.6",
            "type": "library",
            "name": "laravel-cors",
            "version": "1.0.6",
            "group": "fruitcake",
            "description": "Adds CORS (Cross-Origin Resource Sharing) headers support in your Laravel application",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/fruitcake/laravel-cors@1.0.6",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/fruitcake/laravel-cors.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=1d127dbec313e2e227d65e0c483765d8d7559bf6)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/fruitcake/laravel-cors/zipball/1d127dbec313e2e227d65e0c483765d8d7559bf6",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=1d127dbec313e2e227d65e0c483765d8d7559bf6 & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/fruitcake/laravel-cors/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/fruitcake/laravel-cors/tree/1.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/barryvdh",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/guzzlehttp/guzzle@6.5.5",
            "type": "library",
            "name": "guzzle",
            "version": "6.5.5",
            "group": "guzzlehttp",
            "description": "Guzzle is a PHP HTTP client library",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/guzzlehttp/guzzle@6.5.5",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/guzzle.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=9d4290de1cfd701f38099ef7e183b64b4b7b0c5e)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/guzzle/guzzle/zipball/9d4290de1cfd701f38099ef7e183b64b4b7b0c5e",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=9d4290de1cfd701f38099ef7e183b64b4b7b0c5e & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "http://guzzlephp.org/",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/guzzle/guzzle/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/guzzle/tree/6.5",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/guzzlehttp/promises@1.5.1",
            "type": "library",
            "name": "promises",
            "version": "1.5.1",
            "group": "guzzlehttp",
            "description": "Guzzle promises library",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/guzzlehttp/promises@1.5.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/promises.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=fe752aedc9fd8fcca3fe7ad05d419d32998a06da)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/guzzle/promises/zipball/fe752aedc9fd8fcca3fe7ad05d419d32998a06da",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=fe752aedc9fd8fcca3fe7ad05d419d32998a06da & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/guzzle/promises/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/promises/tree/1.5.1",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/GrahamCampbell",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/Nyholm",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/promises",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/guzzlehttp/psr7@1.8.3",
            "type": "library",
            "name": "psr7",
            "version": "1.8.3",
            "group": "guzzlehttp",
            "description": "PSR-7 message implementation that also provides common utility methods",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/guzzlehttp/psr7@1.8.3",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/psr7.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=1afdd860a2566ed3c2b0b4a3de6e23434a79ec85)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/guzzle/psr7/zipball/1afdd860a2566ed3c2b0b4a3de6e23434a79ec85",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=1afdd860a2566ed3c2b0b4a3de6e23434a79ec85 & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/guzzle/psr7/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/psr7/tree/1.8.3",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/GrahamCampbell",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/Nyholm",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/psr7",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/laravel/framework@7.30.5",
            "type": "library",
            "name": "framework",
            "version": "7.30.5",
            "group": "laravel",
            "description": "The Laravel Framework.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/laravel/framework@7.30.5",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/framework.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=afb0c034072a03a5ab1872fbdea54f8befd873c3)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/laravel/framework/zipball/afb0c034072a03a5ab1872fbdea54f8befd873c3",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=afb0c034072a03a5ab1872fbdea54f8befd873c3 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://laravel.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/laravel/framework/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/framework",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/laravel/laravel@7.12.0",
            "type": "application",
            "name": "laravel",
            "version": "7.12.0",
            "group": "laravel",
            "description": "The Laravel Framework.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/laravel/laravel@7.12.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/laravel.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=5639581ea56ecd556cdf6e6edc37ce5795740fd7)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/laravel/laravel/zipball/5639581ea56ecd556cdf6e6edc37ce5795740fd7",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=5639581ea56ecd556cdf6e6edc37ce5795740fd7 & sha1=UNDEFINED)"
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/laravel/tree/master",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/laravel/tinker@2.6.2",
            "type": "library",
            "name": "tinker",
            "version": "2.6.2",
            "group": "laravel",
            "description": "Powerful REPL for the Laravel framework.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/laravel/tinker@2.6.2",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/tinker.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=c808a7227f97ecfd9219fbf913bad842ea854ddc)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/laravel/tinker/zipball/c808a7227f97ecfd9219fbf913bad842ea854ddc",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=c808a7227f97ecfd9219fbf913bad842ea854ddc & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/laravel/tinker/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/tinker/tree/v2.6.2",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/league/commonmark@1.6.6",
            "type": "library",
            "name": "commonmark",
            "version": "1.6.6",
            "group": "league",
            "description": "Highly-extensible PHP Markdown parser which fully supports the CommonMark spec and Github-Flavored Markdown (GFM)",
            "licenses": [
                {
                    "license": {
                        "id": "BSD-3-Clause"
                    }
                }
            ],
            "purl": "pkg:composer/league/commonmark@1.6.6",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/commonmark.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=c4228d11e30d7493c6836d20872f9582d8ba6dcf)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/thephpleague/commonmark/zipball/c4228d11e30d7493c6836d20872f9582d8ba6dcf",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=c4228d11e30d7493c6836d20872f9582d8ba6dcf & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://commonmark.thephpleague.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "documentation",
                    "url": "https://commonmark.thephpleague.com/",
                    "comment": "As set via `support.docs` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/thephpleague/commonmark/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "support",
                    "url": "https://github.com/thephpleague/commonmark/releases.atom",
                    "comment": "As set via `support.rss` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/commonmark",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://enjoy.gitstore.app/repositories/thephpleague/commonmark",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://www.colinodell.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://www.paypal.me/colinpodell/10.00",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/colinodell",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://www.patreon.com/colinodell",
                    "comment": "As set via `funding` in composer package definition. (type=patreon)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/league/commonmark",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/league/flysystem@1.1.8",
            "type": "library",
            "name": "flysystem",
            "version": "1.1.8",
            "group": "league",
            "description": "Filesystem abstraction: Many filesystems, one API.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/league/flysystem@1.1.8",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/flysystem.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=c995bb0c23c58c9813d081f9523c9b7bb496698e)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/thephpleague/flysystem/zipball/c995bb0c23c58c9813d081f9523c9b7bb496698e",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=c995bb0c23c58c9813d081f9523c9b7bb496698e & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/thephpleague/flysystem/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/flysystem/tree/1.1.8",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://offset.earth/frankdejonge",
                    "comment": "As set via `funding` in composer package definition. (type=other)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/league/mime-type-detection@1.9.0",
            "type": "library",
            "name": "mime-type-detection",
            "version": "1.9.0",
            "group": "league",
            "description": "Mime-type detection for Flysystem",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/league/mime-type-detection@1.9.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/mime-type-detection.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=aa70e813a6ad3d1558fc927863d47309b4c23e69)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/thephpleague/mime-type-detection/zipball/aa70e813a6ad3d1558fc927863d47309b4c23e69",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=aa70e813a6ad3d1558fc927863d47309b4c23e69 & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/thephpleague/mime-type-detection/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/mime-type-detection/tree/1.9.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/frankdejonge",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/league/flysystem",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/monolog/monolog@2.3.5",
            "type": "library",
            "name": "monolog",
            "version": "2.3.5",
            "group": "monolog",
            "description": "Sends your logs to files, sockets, inboxes, databases and various web services",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/monolog/monolog@2.3.5",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/Seldaek/monolog.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=fd4380d6fc37626e2f799f29d91195040137eba9)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/Seldaek/monolog/zipball/fd4380d6fc37626e2f799f29d91195040137eba9",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=fd4380d6fc37626e2f799f29d91195040137eba9 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://github.com/Seldaek/monolog",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/Seldaek/monolog/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/Seldaek/monolog/tree/2.3.5",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/Seldaek",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/monolog/monolog",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/nesbot/carbon@2.55.2",
            "type": "library",
            "name": "carbon",
            "version": "2.55.2",
            "group": "nesbot",
            "description": "An API extension for DateTime that supports 281 different languages.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/nesbot/carbon@2.55.2",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/briannesbitt/Carbon.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=8c2a18ce3e67c34efc1b29f64fe61304368259a2)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/briannesbitt/Carbon/zipball/8c2a18ce3e67c34efc1b29f64fe61304368259a2",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=8c2a18ce3e67c34efc1b29f64fe61304368259a2 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://carbon.nesbot.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "documentation",
                    "url": "https://carbon.nesbot.com/docs",
                    "comment": "As set via `support.docs` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/briannesbitt/Carbon/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/briannesbitt/Carbon",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://opencollective.com/Carbon",
                    "comment": "As set via `funding` in composer package definition. (type=open_collective)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/nesbot/carbon",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/nikic/php-parser@4.13.2",
            "type": "library",
            "name": "php-parser",
            "version": "4.13.2",
            "group": "nikic",
            "description": "A PHP parser written in PHP",
            "licenses": [
                {
                    "license": {
                        "id": "BSD-3-Clause"
                    }
                }
            ],
            "purl": "pkg:composer/nikic/php-parser@4.13.2",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/nikic/PHP-Parser.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=210577fe3cf7badcc5814d99455df46564f3c077)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/nikic/PHP-Parser/zipball/210577fe3cf7badcc5814d99455df46564f3c077",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=210577fe3cf7badcc5814d99455df46564f3c077 & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/nikic/PHP-Parser/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/nikic/PHP-Parser/tree/v4.13.2",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/opis/closure@3.6.2",
            "type": "library",
            "name": "closure",
            "version": "3.6.2",
            "group": "opis",
            "description": "A library that can be used to serialize closures (anonymous functions) and arbitrary objects.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/opis/closure@3.6.2",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/opis/closure.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=06e2ebd25f2869e54a306dda991f7db58066f7f6)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/opis/closure/zipball/06e2ebd25f2869e54a306dda991f7db58066f7f6",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=06e2ebd25f2869e54a306dda991f7db58066f7f6 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://opis.io/closure",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/opis/closure/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/opis/closure/tree/3.6.2",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/phpoption/phpoption@1.8.0",
            "type": "library",
            "name": "phpoption",
            "version": "1.8.0",
            "group": "phpoption",
            "description": "Option Type for PHP",
            "licenses": [
                {
                    "license": {
                        "id": "Apache-2.0"
                    }
                }
            ],
            "purl": "pkg:composer/phpoption/phpoption@1.8.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/schmittjoh/php-option.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=5455cb38aed4523f99977c4a12ef19da4bfe2a28)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/schmittjoh/php-option/zipball/5455cb38aed4523f99977c4a12ef19da4bfe2a28",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=5455cb38aed4523f99977c4a12ef19da4bfe2a28 & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/schmittjoh/php-option/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/schmittjoh/php-option/tree/1.8.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/GrahamCampbell",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/phpoption/phpoption",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/psr/container@1.1.1",
            "type": "library",
            "name": "container",
            "version": "1.1.1",
            "group": "psr",
            "description": "Common Container Interface (PHP FIG PSR-11)",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/psr/container@1.1.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/container.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=8622567409010282b7aeebe4bb841fe98b58dcaf)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/php-fig/container/zipball/8622567409010282b7aeebe4bb841fe98b58dcaf",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=8622567409010282b7aeebe4bb841fe98b58dcaf & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://github.com/php-fig/container",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/php-fig/container/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/container/tree/1.1.1",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/psr/event-dispatcher@1.0.0",
            "type": "library",
            "name": "event-dispatcher",
            "version": "1.0.0",
            "group": "psr",
            "description": "Standard interfaces for event handling.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/psr/event-dispatcher@1.0.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/event-dispatcher.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=dbefd12671e8a14ec7f180cab83036ed26714bb0)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/php-fig/event-dispatcher/zipball/dbefd12671e8a14ec7f180cab83036ed26714bb0",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=dbefd12671e8a14ec7f180cab83036ed26714bb0 & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/php-fig/event-dispatcher/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/event-dispatcher/tree/1.0.0",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/psr/http-message@1.0.1",
            "type": "library",
            "name": "http-message",
            "version": "1.0.1",
            "group": "psr",
            "description": "Common interface for HTTP messages",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/psr/http-message@1.0.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/http-message.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=f6561bf28d520154e4b0ec72be95418abe6d9363)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/php-fig/http-message/zipball/f6561bf28d520154e4b0ec72be95418abe6d9363",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=f6561bf28d520154e4b0ec72be95418abe6d9363 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://github.com/php-fig/http-message",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/http-message/tree/master",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/psr/log@1.1.4",
            "type": "library",
            "name": "log",
            "version": "1.1.4",
            "group": "psr",
            "description": "Common interface for logging libraries",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/psr/log@1.1.4",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/log.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=d49695b909c3b7628b6289db5479a1c204601f11)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/php-fig/log/zipball/d49695b909c3b7628b6289db5479a1c204601f11",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=d49695b909c3b7628b6289db5479a1c204601f11 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://github.com/php-fig/log",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/log/tree/1.1.4",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/psr/simple-cache@1.0.1",
            "type": "library",
            "name": "simple-cache",
            "version": "1.0.1",
            "group": "psr",
            "description": "Common interfaces for simple caching",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/psr/simple-cache@1.0.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/simple-cache.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=408d5eafb83c57f6365a3ca330ff23aa4a5fa39b)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/php-fig/simple-cache/zipball/408d5eafb83c57f6365a3ca330ff23aa4a5fa39b",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=408d5eafb83c57f6365a3ca330ff23aa4a5fa39b & sha1=UNDEFINED)"
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/simple-cache/tree/master",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/psy/psysh@0.10.12",
            "type": "library",
            "name": "psysh",
            "version": "0.10.12",
            "group": "psy",
            "description": "An interactive shell for modern PHP.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/psy/psysh@0.10.12",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/bobthecow/psysh.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=a0d9981aa07ecfcbea28e4bfa868031cca121e7d)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/bobthecow/psysh/zipball/a0d9981aa07ecfcbea28e4bfa868031cca121e7d",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=a0d9981aa07ecfcbea28e4bfa868031cca121e7d & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "http://psysh.org",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/bobthecow/psysh/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/bobthecow/psysh/tree/v0.10.12",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/ralouphie/getallheaders@3.0.3",
            "type": "library",
            "name": "getallheaders",
            "version": "3.0.3",
            "group": "ralouphie",
            "description": "A polyfill for getallheaders.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/ralouphie/getallheaders@3.0.3",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/ralouphie/getallheaders.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=120b605dfeb996808c31b6477290a714d356e822)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/ralouphie/getallheaders/zipball/120b605dfeb996808c31b6477290a714d356e822",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=120b605dfeb996808c31b6477290a714d356e822 & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/ralouphie/getallheaders/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/ralouphie/getallheaders/tree/develop",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/ramsey/collection@1.2.2",
            "type": "library",
            "name": "collection",
            "version": "1.2.2",
            "group": "ramsey",
            "description": "A PHP library for representing and manipulating collections.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/ramsey/collection@1.2.2",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/ramsey/collection.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=cccc74ee5e328031b15640b51056ee8d3bb66c0a)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/ramsey/collection/zipball/cccc74ee5e328031b15640b51056ee8d3bb66c0a",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=cccc74ee5e328031b15640b51056ee8d3bb66c0a & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/ramsey/collection/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/ramsey/collection/tree/1.2.2",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/ramsey",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/ramsey/collection",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/ramsey/uuid@4.2.3",
            "type": "library",
            "name": "uuid",
            "version": "4.2.3",
            "group": "ramsey",
            "description": "A PHP library for generating and working with universally unique identifiers (UUIDs).",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/ramsey/uuid@4.2.3",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/ramsey/uuid.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=fc9bb7fb5388691fd7373cd44dcb4d63bbcf24df)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/ramsey/uuid/zipball/fc9bb7fb5388691fd7373cd44dcb4d63bbcf24df",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=fc9bb7fb5388691fd7373cd44dcb4d63bbcf24df & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/ramsey/uuid/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/ramsey/uuid/tree/4.2.3",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/ramsey",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/ramsey/uuid",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/swiftmailer/swiftmailer@6.3.0",
            "type": "library",
            "name": "swiftmailer",
            "version": "6.3.0",
            "group": "swiftmailer",
            "description": "Swiftmailer, free feature-rich PHP mailer",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/swiftmailer/swiftmailer@6.3.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/swiftmailer/swiftmailer.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=8a5d5072dca8f48460fce2f4131fcc495eec654c)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/swiftmailer/swiftmailer/zipball/8a5d5072dca8f48460fce2f4131fcc495eec654c",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=8a5d5072dca8f48460fce2f4131fcc495eec654c & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://swiftmailer.symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/swiftmailer/swiftmailer/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/swiftmailer/swiftmailer/tree/v6.3.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/swiftmailer/swiftmailer",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/console@5.4.0",
            "type": "library",
            "name": "console",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Eases the creation of beautiful and testable command line interfaces",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/console@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/console.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=ec3661faca1d110d6c307e124b44f99ac54179e3)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/console/zipball/ec3661faca1d110d6c307e124b44f99ac54179e3",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=ec3661faca1d110d6c307e124b44f99ac54179e3 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/console/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/css-selector@5.4.0",
            "type": "library",
            "name": "css-selector",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Converts CSS selectors to XPath expressions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/css-selector@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/css-selector.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=44b933f98bb4b5220d10bed9ce5662f8c2d13dcc)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/css-selector/zipball/44b933f98bb4b5220d10bed9ce5662f8c2d13dcc",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=44b933f98bb4b5220d10bed9ce5662f8c2d13dcc & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/css-selector/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/deprecation-contracts@2.5.0",
            "type": "library",
            "name": "deprecation-contracts",
            "version": "2.5.0",
            "group": "symfony",
            "description": "A generic function and convention to trigger deprecation notices",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/deprecation-contracts@2.5.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/deprecation-contracts.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=6f981ee24cf69ee7ce9736146d1c57c2780598a8)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/deprecation-contracts/zipball/6f981ee24cf69ee7ce9736146d1c57c2780598a8",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=6f981ee24cf69ee7ce9736146d1c57c2780598a8 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/deprecation-contracts/tree/v2.5.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/error-handler@5.4.0",
            "type": "library",
            "name": "error-handler",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Provides tools to manage errors and ease debugging PHP code",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/error-handler@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/error-handler.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=8433fa3145ac78df88b87a4a539118e950828126)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/error-handler/zipball/8433fa3145ac78df88b87a4a539118e950828126",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=8433fa3145ac78df88b87a4a539118e950828126 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/error-handler/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/event-dispatcher@5.4.0",
            "type": "library",
            "name": "event-dispatcher",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Provides tools that allow your application components to communicate with each other by dispatching events and listening to them",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/event-dispatcher@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/event-dispatcher.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=27d39ae126352b9fa3be5e196ccf4617897be3eb)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/event-dispatcher/zipball/27d39ae126352b9fa3be5e196ccf4617897be3eb",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=27d39ae126352b9fa3be5e196ccf4617897be3eb & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/event-dispatcher/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/event-dispatcher-contracts@2.5.0",
            "type": "library",
            "name": "event-dispatcher-contracts",
            "version": "2.5.0",
            "group": "symfony",
            "description": "Generic abstractions related to dispatching event",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/event-dispatcher-contracts@2.5.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/event-dispatcher-contracts.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=66bea3b09be61613cd3b4043a65a8ec48cfa6d2a)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/event-dispatcher-contracts/zipball/66bea3b09be61613cd3b4043a65a8ec48cfa6d2a",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=66bea3b09be61613cd3b4043a65a8ec48cfa6d2a & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/event-dispatcher-contracts/tree/v2.5.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/finder@5.4.0",
            "type": "library",
            "name": "finder",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Finds files and directories via an intuitive fluent interface",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/finder@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/finder.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=d2f29dac98e96a98be467627bd49c2efb1bc2590)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/finder/zipball/d2f29dac98e96a98be467627bd49c2efb1bc2590",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=d2f29dac98e96a98be467627bd49c2efb1bc2590 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/finder/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/http-foundation@5.4.0",
            "type": "library",
            "name": "http-foundation",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Defines an object-oriented layer for the HTTP specification",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/http-foundation@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/http-foundation.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=5ef86ac7927d2de08dc1e26eb91325f9ccbe6309)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/http-foundation/zipball/5ef86ac7927d2de08dc1e26eb91325f9ccbe6309",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=5ef86ac7927d2de08dc1e26eb91325f9ccbe6309 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/http-foundation/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/http-kernel@5.4.0",
            "type": "library",
            "name": "http-kernel",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Provides a structured process for converting a Request into a Response",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/http-kernel@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/http-kernel.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=e012f16688bcb151e965473a70d8ebaa8b1d15ea)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/http-kernel/zipball/e012f16688bcb151e965473a70d8ebaa8b1d15ea",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=e012f16688bcb151e965473a70d8ebaa8b1d15ea & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/http-kernel/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/mime@5.4.0",
            "type": "library",
            "name": "mime",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Allows manipulating MIME messages",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/mime@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/mime.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=d4365000217b67c01acff407573906ff91bcfb34)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/mime/zipball/d4365000217b67c01acff407573906ff91bcfb34",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=d4365000217b67c01acff407573906ff91bcfb34 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/mime/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-ctype@1.23.0",
            "type": "library",
            "name": "polyfill-ctype",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill for ctype functions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/polyfill-ctype@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-ctype.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=46cd95797e9df938fdd2b03693b5fca5e64b01ce)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/polyfill-ctype/zipball/46cd95797e9df938fdd2b03693b5fca5e64b01ce",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=46cd95797e9df938fdd2b03693b5fca5e64b01ce & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-ctype/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-iconv@1.23.0",
            "type": "library",
            "name": "polyfill-iconv",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill for the Iconv extension",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/polyfill-iconv@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-iconv.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=63b5bb7db83e5673936d6e3b8b3e022ff6474933)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/polyfill-iconv/zipball/63b5bb7db83e5673936d6e3b8b3e022ff6474933",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=63b5bb7db83e5673936d6e3b8b3e022ff6474933 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-iconv/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-intl-grapheme@1.23.1",
            "type": "library",
            "name": "polyfill-intl-grapheme",
            "version": "1.23.1",
            "group": "symfony",
            "description": "Symfony polyfill for intl's grapheme_* functions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/polyfill-intl-grapheme@1.23.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-grapheme.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=16880ba9c5ebe3642d1995ab866db29270b36535)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/polyfill-intl-grapheme/zipball/16880ba9c5ebe3642d1995ab866db29270b36535",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=16880ba9c5ebe3642d1995ab866db29270b36535 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-grapheme/tree/v1.23.1",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
            "type": "library",
            "name": "polyfill-intl-idn",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill for intl's idn_to_ascii and idn_to_utf8 functions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-idn.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=65bd267525e82759e7d8c4e8ceea44f398838e65)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/polyfill-intl-idn/zipball/65bd267525e82759e7d8c4e8ceea44f398838e65",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=65bd267525e82759e7d8c4e8ceea44f398838e65 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-idn/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-intl-normalizer@1.23.0",
            "type": "library",
            "name": "polyfill-intl-normalizer",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill for intl's Normalizer class and related functions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/polyfill-intl-normalizer@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-normalizer.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=8590a5f561694770bdcd3f9b5c69dde6945028e8)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/polyfill-intl-normalizer/zipball/8590a5f561694770bdcd3f9b5c69dde6945028e8",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=8590a5f561694770bdcd3f9b5c69dde6945028e8 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-normalizer/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-mbstring@1.23.1",
            "type": "library",
            "name": "polyfill-mbstring",
            "version": "1.23.1",
            "group": "symfony",
            "description": "Symfony polyfill for the Mbstring extension",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/polyfill-mbstring@1.23.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-mbstring.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=9174a3d80210dca8daa7f31fec659150bbeabfc6)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/polyfill-mbstring/zipball/9174a3d80210dca8daa7f31fec659150bbeabfc6",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=9174a3d80210dca8daa7f31fec659150bbeabfc6 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-mbstring/tree/v1.23.1",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-php72@1.23.0",
            "type": "library",
            "name": "polyfill-php72",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill backporting some PHP 7.2+ features to lower PHP versions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/polyfill-php72@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php72.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=9a142215a36a3888e30d0a9eeea9766764e96976)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/polyfill-php72/zipball/9a142215a36a3888e30d0a9eeea9766764e96976",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=9a142215a36a3888e30d0a9eeea9766764e96976 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php72/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-php73@1.23.0",
            "type": "library",
            "name": "polyfill-php73",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill backporting some PHP 7.3+ features to lower PHP versions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/polyfill-php73@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php73.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=fba8933c384d6476ab14fb7b8526e5287ca7e010)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/polyfill-php73/zipball/fba8933c384d6476ab14fb7b8526e5287ca7e010",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=fba8933c384d6476ab14fb7b8526e5287ca7e010 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php73/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-php80@1.23.1",
            "type": "library",
            "name": "polyfill-php80",
            "version": "1.23.1",
            "group": "symfony",
            "description": "Symfony polyfill backporting some PHP 8.0+ features to lower PHP versions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/polyfill-php80@1.23.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php80.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=1100343ed1a92e3a38f9ae122fc0eb21602547be)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/polyfill-php80/zipball/1100343ed1a92e3a38f9ae122fc0eb21602547be",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=1100343ed1a92e3a38f9ae122fc0eb21602547be & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php80/tree/v1.23.1",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-php81@1.23.0",
            "type": "library",
            "name": "polyfill-php81",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill backporting some PHP 8.1+ features to lower PHP versions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/polyfill-php81@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php81.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=e66119f3de95efc359483f810c4c3e6436279436)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/polyfill-php81/zipball/e66119f3de95efc359483f810c4c3e6436279436",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=e66119f3de95efc359483f810c4c3e6436279436 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php81/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/process@5.4.0",
            "type": "library",
            "name": "process",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Executes commands in sub-processes",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/process@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/process.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=5be20b3830f726e019162b26223110c8f47cf274)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/process/zipball/5be20b3830f726e019162b26223110c8f47cf274",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=5be20b3830f726e019162b26223110c8f47cf274 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/process/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/routing@5.4.0",
            "type": "library",
            "name": "routing",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Maps an HTTP request to a set of configuration variables",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/routing@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/routing.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=9eeae93c32ca86746e5d38f3679e9569981038b1)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/routing/zipball/9eeae93c32ca86746e5d38f3679e9569981038b1",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=9eeae93c32ca86746e5d38f3679e9569981038b1 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/routing/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/service-contracts@2.5.0",
            "type": "library",
            "name": "service-contracts",
            "version": "2.5.0",
            "group": "symfony",
            "description": "Generic abstractions related to writing services",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/service-contracts@2.5.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/service-contracts.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=1ab11b933cd6bc5464b08e81e2c5b07dec58b0fc)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/service-contracts/zipball/1ab11b933cd6bc5464b08e81e2c5b07dec58b0fc",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=1ab11b933cd6bc5464b08e81e2c5b07dec58b0fc & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/service-contracts/tree/v2.5.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/string@5.4.0",
            "type": "library",
            "name": "string",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Provides an object-oriented API to strings and deals with bytes, UTF-8 code points and grapheme clusters in a unified way",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/string@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/string.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=9ffaaba53c61ba75a3c7a3a779051d1e9ec4fd2d)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/string/zipball/9ffaaba53c61ba75a3c7a3a779051d1e9ec4fd2d",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=9ffaaba53c61ba75a3c7a3a779051d1e9ec4fd2d & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/string/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/translation@5.4.0",
            "type": "library",
            "name": "translation",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Provides tools to internationalize your application",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/translation@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/translation.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=6fe32b10e912a518805bc9eafc2a87145773cf13)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/translation/zipball/6fe32b10e912a518805bc9eafc2a87145773cf13",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=6fe32b10e912a518805bc9eafc2a87145773cf13 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/translation/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/translation-contracts@2.5.0",
            "type": "library",
            "name": "translation-contracts",
            "version": "2.5.0",
            "group": "symfony",
            "description": "Generic abstractions related to translation",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/translation-contracts@2.5.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/translation-contracts.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=d28150f0f44ce854e942b671fc2620a98aae1b1e)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/translation-contracts/zipball/d28150f0f44ce854e942b671fc2620a98aae1b1e",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=d28150f0f44ce854e942b671fc2620a98aae1b1e & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/translation-contracts/tree/v2.5.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/symfony/var-dumper@5.4.0",
            "type": "library",
            "name": "var-dumper",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Provides mechanisms for walking through any arbitrary PHP variable",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/symfony/var-dumper@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/var-dumper.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=89ab66eaef230c9cd1992de2e9a1b26652b127b9)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/var-dumper/zipball/89ab66eaef230c9cd1992de2e9a1b26652b127b9",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=89ab66eaef230c9cd1992de2e9a1b26652b127b9 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/var-dumper/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/tijsverkoyen/css-to-inline-styles@2.2.3",
            "type": "library",
            "name": "css-to-inline-styles",
            "version": "2.2.3",
            "group": "tijsverkoyen",
            "description": "CssToInlineStyles is a class that enables you to convert HTML-pages/files into HTML-pages/files with inline styles. This is very useful when you're sending emails.",
            "licenses": [
                {
                    "license": {
                        "id": "BSD-3-Clause"
                    }
                }
            ],
            "purl": "pkg:composer/tijsverkoyen/css-to-inline-styles@2.2.3",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/tijsverkoyen/CssToInlineStyles.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=b43b05cf43c1b6d849478965062b6ef73e223bb5)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/tijsverkoyen/CssToInlineStyles/zipball/b43b05cf43c1b6d849478965062b6ef73e223bb5",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=b43b05cf43c1b6d849478965062b6ef73e223bb5 & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://github.com/tijsverkoyen/CssToInlineStyles",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/tijsverkoyen/CssToInlineStyles/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/tijsverkoyen/CssToInlineStyles/tree/2.2.3",
                    "comment": "As set via `support.source` in composer package definition."
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/vlucas/phpdotenv@4.2.1",
            "type": "library",
            "name": "phpdotenv",
            "version": "4.2.1",
            "group": "vlucas",
            "description": "Loads environment variables from `.env` to `getenv()`, `$_ENV` and `$_SERVER` automagically.",
            "licenses": [
                {
                    "license": {
                        "id": "BSD-3-Clause"
                    }
                }
            ],
            "purl": "pkg:composer/vlucas/phpdotenv@4.2.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/vlucas/phpdotenv.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=d38f4d1edcbe32515a0ad593cbd4c858e337263c)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/vlucas/phpdotenv/zipball/d38f4d1edcbe32515a0ad593cbd4c858e337263c",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=d38f4d1edcbe32515a0ad593cbd4c858e337263c & sha1=UNDEFINED)"
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/vlucas/phpdotenv/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/vlucas/phpdotenv/tree/v4.2.1",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://github.com/GrahamCampbell",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/vlucas/phpdotenv",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        },
        {
            "bom-ref": "pkg:composer/voku/portable-ascii@1.5.6",
            "type": "library",
            "name": "portable-ascii",
            "version": "1.5.6",
            "group": "voku",
            "description": "Portable ASCII library - performance optimized (ascii) string functions for php.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT"
                    }
                }
            ],
            "purl": "pkg:composer/voku/portable-ascii@1.5.6",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/voku/portable-ascii.git",
                    "comment": "As detected by composer's `getSourceUrls()` (type=git & reference=80953678b19901e5165c56752d087fc11526017c)"
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/voku/portable-ascii/zipball/80953678b19901e5165c56752d087fc11526017c",
                    "comment": "As detected by composer's `getDistUrls()` (type=zip & reference=80953678b19901e5165c56752d087fc11526017c & sha1=UNDEFINED)"
                },
                {
                    "type": "website",
                    "url": "https://github.com/voku/portable-ascii",
                    "comment": "As set via `homepage` in composer package definition."
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/voku/portable-ascii/issues",
                    "comment": "As set via `support.issues` in composer package definition."
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/voku/portable-ascii/tree/1.5.6",
                    "comment": "As set via `support.source` in composer package definition."
                },
                {
                    "type": "other",
                    "url": "https://www.paypal.me/moelleken",
                    "comment": "As set via `funding` in composer package definition. (type=custom)"
                },
                {
                    "type": "other",
                    "url": "https://github.com/voku",
                    "comment": "As set via `funding` in composer package definition. (type=github)"
                },
                {
                    "type": "other",
                    "url": "https://opencollective.com/portable-ascii",
                    "comment": "As set via `funding` in composer package definition. (type=open_collective)"
                },
                {
                    "type": "other",
                    "url": "https://www.patreon.com/voku",
                    "comment": "As set via `funding` in composer package definition. (type=patreon)"
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/voku/portable-ascii",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)"
                }
            ]
        }
    ],
    "dependencies": [
        {
            "ref": "pkg:composer/asm89/stack-cors@1.3.0",
            "dependsOn": [
                "pkg:composer/symfony/http-foundation@5.4.0",
                "pkg:composer/symfony/http-kernel@5.4.0"
            ]
        },
        {
            "ref": "pkg:composer/brick/math@0.9.3"
        },
        {
            "ref": "pkg:composer/doctrine/inflector@2.0.4"
        },
        {
            "ref": "pkg:composer/doctrine/lexer@1.2.1"
        },
        {
            "ref": "pkg:composer/dragonmantank/cron-expression@2.3.1"
        },
        {
            "ref": "pkg:composer/egulias/email-validator@2.1.25",
            "dependsOn": [
                "pkg:composer/doctrine/lexer@1.2.1",
                "pkg:composer/symfony/polyfill-intl-idn@1.23.0"
            ]
        },
        {
            "ref": "pkg:composer/fideloper/proxy@4.4.1"
        },
        {
            "ref": "pkg:composer/fruitcake/laravel-cors@1.0.6",
            "dependsOn": [
                "pkg:composer/asm89/stack-cors@1.3.0",
                "pkg:composer/symfony/http-foundation@5.4.0",
                "pkg:composer/symfony/http-kernel@5.4.0"
            ]
        },
        {
            "ref": "pkg:composer/guzzlehttp/guzzle@6.5.5",
            "dependsOn": [
                "pkg:composer/guzzlehttp/promises@1.5.1",
                "pkg:composer/guzzlehttp/psr7@1.8.3",
                "pkg:composer/symfony/polyfill-intl-idn@1.23.0"
            ]
        },
        {
            "ref": "pkg:composer/guzzlehttp/promises@1.5.1"
        },
        {
            "ref": "pkg:composer/guzzlehttp/psr7@1.8.3",
            "dependsOn": [
                "pkg:composer/psr/http-message@1.0.1",
                "pkg:composer/ralouphie/getallheaders@3.0.3"
            ]
        },
        {
            "ref": "pkg:composer/laravel/framework@7.30.5",
            "dependsOn": [
                "pkg:composer/doctrine/inflector@2.0.4",
                "pkg:composer/dragonmantank/cron-expression@2.3.1",
                "pkg:composer/egulias/email-validator@2.1.25",
                "pkg:composer/league/commonmark@1.6.6",
                "pkg:composer/league/flysystem@1.1.8",
                "pkg:composer/monolog/monolog@2.3.5",
                "pkg:composer/nesbot/carbon@2.55.2",
                "pkg:composer/opis/closure@3.6.2",
                "pkg:composer/psr/container@1.1.1",
                "pkg:composer/psr/simple-cache@1.0.1",
                "pkg:composer/ramsey/uuid@4.2.3",
                "pkg:composer/swiftmailer/swiftmailer@6.3.0",
                "pkg:composer/symfony/console@5.4.0",
                "pkg:composer/symfony/error-handler@5.4.0",
                "pkg:composer/symfony/finder@5.4.0",
                "pkg:composer/symfony/http-foundation@5.4.0",
                "pkg:composer/symfony/http-kernel@5.4.0",
                "pkg:composer/symfony/mime@5.4.0",
                "pkg:composer/symfony/polyfill-php73@1.23.0",
                "pkg:composer/symfony/process@5.4.0",
                "pkg:composer/symfony/routing@5.4.0",
                "pkg:composer/symfony/var-dumper@5.4.0",
                "pkg:composer/tijsverkoyen/css-to-inline-styles@2.2.3",
                "pkg:composer/vlucas/phpdotenv@4.2.1",
                "pkg:composer/voku/portable-ascii@1.5.6"
            ]
        },
        {
            "ref": "pkg:composer/laravel/laravel@7.12.0",
            "dependsOn": [
                "pkg:composer/fideloper/proxy@4.4.1",
                "pkg:composer/fruitcake/laravel-cors@1.0.6",
                "pkg:composer/guzzlehttp/guzzle@6.5.5",
                "pkg:composer/laravel/framework@7.30.5",
                "pkg:composer/laravel/tinker@2.6.2"
            ]
        },
        {
            "ref": "pkg:composer/laravel/tinker@2.6.2",
            "dependsOn": [
                "pkg:composer/psy/psysh@0.10.12",
                "pkg:composer/symfony/var-dumper@5.4.0"
            ]
        },
        {
            "ref": "pkg:composer/league/commonmark@1.6.6"
        },
        {
            "ref": "pkg:composer/league/flysystem@1.1.8",
            "dependsOn": [
                "pkg:composer/league/mime-type-detection@1.9.0"
            ]
        },
        {
            "ref": "pkg:composer/league/mime-type-detection@1.9.0"
        },
        {
            "ref": "pkg:composer/monolog/monolog@2.3.5",
            "dependsOn": [
                "pkg:composer/psr/log@1.1.4"
            ]
        },
        {
            "ref": "pkg:composer/nesbot/carbon@2.55.2",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
                "pkg:composer/symfony/translation@5.4.0"
            ]
        },
        {
            "ref": "pkg:composer/nikic/php-parser@4.13.2"
        },
        {
            "ref": "pkg:composer/opis/closure@3.6.2"
        },
        {
            "ref": "pkg:composer/phpoption/phpoption@1.8.0"
        },
        {
            "ref": "pkg:composer/psr/container@1.1.1"
        },
        {
            "ref": "pkg:composer/psr/event-dispatcher@1.0.0"
        },
        {
            "ref": "pkg:composer/psr/http-message@1.0.1"
        },
        {
            "ref": "pkg:composer/psr/log@1.1.4"
        },
        {
            "ref": "pkg:composer/psr/simple-cache@1.0.1"
        },
        {
            "ref": "pkg:composer/psy/psysh@0.10.12",
            "dependsOn": [
                "pkg:composer/nikic/php-parser@4.13.2",
                "pkg:composer/symfony/console@5.4.0",
                "pkg:composer/symfony/var-dumper@5.4.0"
            ]
        },
        {
            "ref": "pkg:composer/ralouphie/getallheaders@3.0.3"
        },
        {
            "ref": "pkg:composer/ramsey/collection@1.2.2",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-php81@1.23.0"
            ]
        },
        {
            "ref": "pkg:composer/ramsey/uuid@4.2.3",
            "dependsOn": [
                "pkg:composer/brick/math@0.9.3",
                "pkg:composer/ramsey/collection@1.2.2",
                "pkg:composer/symfony/polyfill-ctype@1.23.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/swiftmailer/swiftmailer@6.3.0",
            "dependsOn": [
                "pkg:composer/egulias/email-validator@2.1.25",
                "pkg:composer/symfony/polyfill-iconv@1.23.0",
                "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/symfony/console@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php73@1.23.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
                "pkg:composer/symfony/service-contracts@2.5.0",
                "pkg:composer/symfony/string@5.4.0"
            ]
        },
        {
            "ref": "pkg:composer/symfony/css-selector@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/symfony/deprecation-contracts@2.5.0"
        },
        {
            "ref": "pkg:composer/symfony/error-handler@5.4.0",
            "dependsOn": [
                "pkg:composer/psr/log@1.1.4",
                "pkg:composer/symfony/var-dumper@5.4.0"
            ]
        },
        {
            "ref": "pkg:composer/symfony/event-dispatcher@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/event-dispatcher-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/symfony/event-dispatcher-contracts@2.5.0",
            "dependsOn": [
                "pkg:composer/psr/event-dispatcher@1.0.0"
            ]
        },
        {
            "ref": "pkg:composer/symfony/finder@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/symfony/http-foundation@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/symfony/http-kernel@5.4.0",
            "dependsOn": [
                "pkg:composer/psr/log@1.1.4",
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/error-handler@5.4.0",
                "pkg:composer/symfony/event-dispatcher@5.4.0",
                "pkg:composer/symfony/http-foundation@5.4.0",
                "pkg:composer/symfony/polyfill-ctype@1.23.0",
                "pkg:composer/symfony/polyfill-php73@1.23.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/symfony/mime@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/symfony/polyfill-ctype@1.23.0"
        },
        {
            "ref": "pkg:composer/symfony/polyfill-iconv@1.23.0"
        },
        {
            "ref": "pkg:composer/symfony/polyfill-intl-grapheme@1.23.1"
        },
        {
            "ref": "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-intl-normalizer@1.23.0",
                "pkg:composer/symfony/polyfill-php72@1.23.0"
            ]
        },
        {
            "ref": "pkg:composer/symfony/polyfill-intl-normalizer@1.23.0"
        },
        {
            "ref": "pkg:composer/symfony/polyfill-mbstring@1.23.1"
        },
        {
            "ref": "pkg:composer/symfony/polyfill-php72@1.23.0"
        },
        {
            "ref": "pkg:composer/symfony/polyfill-php73@1.23.0"
        },
        {
            "ref": "pkg:composer/symfony/polyfill-php80@1.23.1"
        },
        {
            "ref": "pkg:composer/symfony/polyfill-php81@1.23.0"
        },
        {
            "ref": "pkg:composer/symfony/process@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/symfony/routing@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/symfony/service-contracts@2.5.0",
            "dependsOn": [
                "pkg:composer/psr/container@1.1.1",
                "pkg:composer/symfony/deprecation-contracts@2.5.0"
            ]
        },
        {
            "ref": "pkg:composer/symfony/string@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-ctype@1.23.0",
                "pkg:composer/symfony/polyfill-intl-grapheme@1.23.1",
                "pkg:composer/symfony/polyfill-intl-normalizer@1.23.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/symfony/translation@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
                "pkg:composer/symfony/translation-contracts@2.5.0"
            ]
        },
        {
            "ref": "pkg:composer/symfony/translation-contracts@2.5.0"
        },
        {
            "ref": "pkg:composer/symfony/var-dumper@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1"
            ]
        },
        {
            "ref": "pkg:composer/tijsverkoyen/css-to-inline-styles@2.2.3",
            "dependsOn": [
                "pkg:composer/symfony/css-selector@5.4.0"
            ]
        },
        {
            "ref": "pkg:composer/vlucas/phpdotenv@4.2.1",
            "dependsOn": [
                "pkg:composer/phpoption/phpoption@1.8.0",
                "pkg:composer/symfony/polyfill-ctype@1.23.0"
            ]
        },
        {
            "ref": "pkg:composer/voku/portable-ascii@1.5.6"
        },
        {
            "ref": "pkg:composer/cyclonedx/cyclonedx-php-composer-demo@dev-master",
            "dependsOn": [
                "pkg:composer/laravel/laravel@7.12.0"
            ]
        }
    ]
}

//https://github.com/CycloneDX/bom-examples/blob/master/HBOM/PCIe-SATA-adapter-board/bom.json
const sbom1_4: CycloneDXBomV1_4 = {
    "bomFormat": "CycloneDX",
    "specVersion": "1.4",
    "serialNumber": "urn:uuid:e8c355aa-2142-4084-a8c7-6d42c8610ba2",
    "version": 1,
    "metadata": {
      "timestamp": "2022-01-09T12:00:00Z",
      "component": {
        "type": "device",
        "bom-ref": "pcie-sata-adaptor-board",
        "group": "uk.ac.cam.cl",
        "name": "pcie-sata-adaptor-board",
        "version": "rev-1"
      }
    },
    "components": [
      {
        "type": "device",
        "bom-ref": "PCIE-098-02-F-D-EMS2",
        "supplier": {
          "name": "Samtec",
          "url": ["https://www.samtec.com/"]
        },
        "name": "PCIE-098-02-F-D-EMS2",
        "version": "2.9.10",
        "description": "Low Profile PCI Express® GEN 4 Connector",
        "externalReferences": [
          {
            "type": "documentation",
            "url": "https://www.samtec.com/products/pcie-098-02-f-d-ems2"
          }
        ],
        "properties": [
          {
            "name": "cdx:device:quantity",
            "value": "1"
          },
          {
            "name": "cdx:device:function",
            "value": "connector"
          },
          {
            "name": "cdx:device:location",
            "value": "mainboard"
          },
          {
            "name": "cdx:device:deviceType",
            "value": "thru-hole"
          }
        ]
      },
      {
        "type": "device",
        "bom-ref": "molex-47155-4001",
        "supplier": {
          "name": "Molex",
          "url": ["https://www.molex.com/"]
        },
        "name": "47155-4001",
        "description": "I/O Connectors HIGH SPEED CONN 1.27 VERT DIP SOLDERTAIL",
        "externalReferences": [
          {
            "type": "documentation",
            "url": "https://www.mouser.com/ProductDetail/Molex/47155-4001?qs=%2F%252BEk3ugtboRcLyK5WJikBg%3D%3D"
          }
        ],
        "properties": [
          {
            "name": "cdx:device:quantity",
            "value": "8"
          },
          {
            "name": "cdx:device:function",
            "value": "connector"
          },
          {
            "name": "cdx:device:location",
            "value": "mainboard"
          },
          {
            "name": "cdx:device:deviceType",
            "value": "thru-hole"
          },
          {
            "name": "cdx:device:gs1:gtin-12",
            "value": "822348522712"
          }
        ]
      },
      {
        "type": "device",
        "bom-ref": "3M-5622-4100-ML",
        "supplier": {
          "name": "3M",
          "url": ["https://www.3m.com/"]
        },
        "name": "5622-4100-ML",
        "description": "22 Position SATA Plug Connector Solder Through Hole, Right Angle",
        "externalReferences": [
          {
            "type": "documentation",
            "url": "https://www.3m.com/3M/en_US/p/d/b00036230/"
          }
        ],
        "properties": [
          {
            "name": "cdx:device:quantity",
            "value": "1"
          },
          {
            "name": "cdx:device:function",
            "value": "connector"
          },
          {
            "name": "cdx:device:location",
            "value": "mainboard"
          },
          {
            "name": "cdx:device:deviceType",
            "value": "thru-hole"
          }
        ]
      },
      {
        "type": "device",
        "bom-ref": "MC9A22-1034",
        "supplier": {
          "name": "Multicomp",
          "url": ["https://www.multicomp-pro.com/"]
        },
        "name": "MC9A22-1034",
        "description": "Header, Tht, Right Angle, 2.54MM, 10WAY",
        "externalReferences": [
          {
            "type": "documentation",
            "url": "https://octopart.com/datasheet/mc9a22-1034-multicomp-5403541"
          }
        ],
        "properties": [
          {
            "name": "cdx:device:quantity",
            "value": "1"
          },
          {
            "name": "cdx:device:function",
            "value": "connector"
          },
          {
            "name": "cdx:device:location",
            "value": "mainboard"
          },
          {
            "name": "cdx:device:deviceType",
            "value": "thru-hole"
          }
        ]
      },
      {
        "type": "device",
        "bom-ref": "826632-3",
        "supplier": {
          "name": "TE Connectivity",
          "url": ["https://www.te.com/"]
        },
        "name": "826632-3",
        "description": "AMPMODU Headers, PCB Mount Header, Vertical, Board-to-Board, 6 Position, .1 in [2.54 mm] Centerline, Breakaway",
        "externalReferences": [
          {
            "type": "documentation",
            "url": "https://www.te.com/usa-en/product-826632-3.html"
          }
        ],
        "properties": [
          {
            "name": "cdx:device:quantity",
            "value": "2"
          },
          {
            "name": "cdx:device:function",
            "value": "connector"
          },
          {
            "name": "cdx:device:location",
            "value": "mainboard"
          },
          {
            "name": "cdx:device:deviceType",
            "value": "thru-hole"
          }
        ]
      },
      {
        "type": "device",
        "bom-ref": "MP000003",
        "supplier": {
          "name": "Multicomp",
          "url": ["https://www.multicomp-pro.com/"]
        },
        "name": "MP000003",
        "description": "Resistor jumper, 0R, 0805",
        "properties": [
          {
            "name": "cdx:device:quantity",
            "value": "2"
          },
          {
            "name": "cdx:device:function",
            "value": "jumper"
          },
          {
            "name": "cdx:device:location",
            "value": "mainboard"
          },
          {
            "name": "cdx:device:deviceType",
            "value": "smd"
          }
        ]
      }
    ]
  }

const list: CycloneDXBom[] = [
    sbom1_2, sbom1_3, sbom1_4
];
