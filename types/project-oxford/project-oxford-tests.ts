/// <reference types="mocha" />

import oxford = require("project-oxford");

import assert = require('assert');
import _Promise = require('bluebird');
import fs = require('fs');

var client = new oxford.Client(process.env.OXFORD_KEY);

// Store variables, no point in calling the api too often
var billFaces = <string[]>[];
var personGroupId = "uuid.v4()";
var personGroupId2 = "uuid.v4()";
var billPersonId: string;

describe('Project Oxford Face API Test', function () {
    afterEach(function() {
        // delay after each test to prevent throttling
        var now = +new Date() + 250;
        while(now > +new Date());
    });

    describe('#detect()', function () {
        it('detects a face in a stream', function (done) {
            client.face.detect({
                stream: fs.createReadStream('./test/images/face1.jpg'),
                analyzesFaceLandmarks: true,
                analyzesAge: true,
                analyzesGender: true,
                analyzesHeadPose: true
            }).then(function (response) {
                assert.ok(response[0].faceId);
                assert.ok(response[0].faceRectangle);
                assert.ok(response[0].faceLandmarks);
                assert.ok(response[0].attributes.gender);
                assert.ok(response[0].attributes.headPose);

                assert.equal(response[0].attributes.gender, 'male');
                done();
            });
        });

        it('detects a face in a local file', function (done) {
            client.face.detect({
                path: './test/images/face1.jpg',
                analyzesFaceLandmarks: true,
                analyzesAge: true,
                analyzesGender: true,
                analyzesHeadPose: true
            }).then(function (response) {
                assert.ok(response[0].faceId);
                assert.ok(response[0].faceRectangle);
                assert.ok(response[0].faceLandmarks);
                assert.ok(response[0].attributes.gender);
                assert.ok(response[0].attributes.headPose);

                assert.equal(response[0].attributes.gender, 'male');
                done();
            });
        });

        it('detects a face in a remote file', function (done) {
            client.face.detect({
                url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Bill_Gates_June_2015.jpg',
                analyzesFaceLandmarks: true,
                analyzesAge: true,
                analyzesGender: true,
                analyzesHeadPose: true
            }).then(function (response) {
                assert.ok(response[0].faceId);
                assert.ok(response[0].faceRectangle);
                assert.ok(response[0].faceLandmarks);
                assert.ok(response[0].attributes.gender);
                assert.ok(response[0].attributes.headPose);

                assert.equal(response[0].attributes.gender, 'male');
                done();
            });
        });
    });

    describe('#similar()', function () {
        it('detects similar faces', function (done) {
            var detects = <any>[];

            this.timeout(10000);

            detects.push(client.face.detect({
                path: './test/images/face1.jpg',
            }).then(function(response) {
                assert.ok(response[0].faceId)
                billFaces.push(response[0].faceId);
            }));

            detects.push(client.face.detect({
                path: './test/images/face2.jpg',
            }).then(function(response) {
                assert.ok(response[0].faceId)
                billFaces.push(response[0].faceId);
            }));

            _Promise.all(detects).then(function() {
                client.face.similar(billFaces[0], [billFaces[1]]).then(function(response) {
                    done();
                });
            });
        });
    });

    describe('#grouping()', function () {
        it('detects groups faces', function (done) {
            var faceIds = <string[]>[];

            this.timeout(10000);

            client.face.detect({
                path: './test/images/face-group.jpg',
            }).then(function(response) {
                response.forEach(function (face) {
                    faceIds.push(face.faceId);
                });

                assert.equal(faceIds.length, 6);
            }).then(function() {
                client.face.grouping(faceIds).then(function (response) {
                    assert.ok(response.messyGroup);
                    done();
                });
            });
        });
    });

    describe('#verify()', function () {
        it('verifies a face against another face', function (done) {
            this.timeout(10000);

            assert.equal(billFaces.length, 2);

            client.face.verify(billFaces).then(function (response) {
                assert.ok(response);
                assert.ok((response.isIdentical === true || response.isIdentical === false));
                assert.ok(response.confidence);
                done();
            });
        });
    });

    describe('#PersonGroup', function () {
        before(function(done) {
            this.timeout(5000);
            // In order to test the
            // training feature, we have to start trainign - sadly, we can't
            // delete the group then. So we clean up before we run tests - and to wait
            // for cleanup to finish, we're just using done().
            client.face.personGroup.list().then(function (response) {
                var promises = <any>[];

                response.forEach(function (personGroup) {
                    if (personGroup.name.indexOf('po-node-test-group') > -1) {
                        promises.push(client.face.personGroup.delete(personGroup.personGroupId));
                    }
                });

                _Promise.all(promises).then(function () {
                    done();
                });
            });
        });

        it('creates a PersonGroup', function (done) {
            client.face.personGroup.create(personGroupId, 'po-node-test-group', 'test-data').then(function (response) {
                assert.ok(true, "void response expected");
                done();
            })
            .catch(function (error) {
                assert.ok(false, JSON.stringify(error));
                done();
            });
        });

        it('lists PersonGroups', function (done) {
            client.face.personGroup.list().then(function (response) {
                assert.ok(response);
                assert.ok((response.length > 0));
                assert.ok(response[0].personGroupId);
                done();
            });
        });

        it('gets a PersonGroup', function (done) {
            client.face.personGroup.get(personGroupId).then(function (response) {
                assert.equal(response.personGroupId, personGroupId);
                assert.equal(response.name, 'po-node-test-group');
                assert.equal(response.userData, 'test-data');
                done();
            });
        });

        it('updates a PersonGroup', function (done) {
            client.face.personGroup.update(personGroupId, 'po-node-test-group2', 'test-data2').then(function (response) {
                assert.ok(true, "void response expected");;
                done();
            }).catch(function (response) {
                assert.equal(response, 'PersonGroupTrainingNotFinished')
            });
        });

        it('gets a PersonGroup\'s training status', function (done) {
            client.face.personGroup.trainingStatus(personGroupId).then(function (response) {
                done();
            }).catch(function (response) {
                assert.equal(response.code, 'PersonGroupNotTrained');
                done();
            });
        });

        it('starts a PersonGroup\'s training', function (done) {
            client.face.personGroup.trainingStart(personGroupId).then(function (response) {
                assert.equal(response.status, 'running');
                done();
            }).catch(function (response) {
                assert.equal(response.status, 'running');
                done();
            });
        });

        it('deletes a PersonGroup', function (done) {
            client.face.personGroup.delete(personGroupId).then(function (response) {
                assert.ok(true, "void response");
                done();
            }).catch(function (response) {
                assert.equal(response.code, 'PersonGroupTrainingNotFinished');
                done();
            });
        });
    });

    describe('#Person', function () {

        it('creates a PersonGroup for the Person', function (done) {
            client.face.personGroup.create(personGroupId2, 'po-node-test-group', 'test-data')
            .then(function (response) {
                assert.ok(true, "void response expected");
                done();
            })
            .catch(function (error) {
                assert.ok(false, JSON.stringify(error));
                done();
            });
        });

        it('creates a Person', function (done) {
            client.face.person.create(personGroupId2, [billFaces[0]], 'test-bill', 'test-data')
            .then(function (response) {
                assert.ok(response.personId);
                billPersonId = response.personId;
                done();
            })
            .catch(function (error) {
                assert.ok(false, JSON.stringify(error));
                done();
            });
        });

        it('gets a Person', function (done) {
            client.face.person.get(personGroupId2, billPersonId).then(function (response) {
                assert.ok(response.personId);
                done();
            })
            .catch(function (error) {
                assert.ok(false, JSON.stringify(error));
                done();
            });
        });

        it('updates a Person', function (done) {
            client.face.person.update(personGroupId2, billPersonId, [billFaces[0]], 'test-bill', 'test-data')
            .then(function (response) {
                assert.ok(true, "void response expected");
                done();
            })
        });

        it('adds a face to a Person', function (done) {
            client.face.person.addFace(personGroupId2, billPersonId, billFaces[1], 'test-data')
            .then(function (response) {
                assert.ok(true, "void response expected");
                done();
            })
            .catch(function (error) {
                assert.ok(false, JSON.stringify(error));
                done();
            });
        });

        it('gets a face from a Person', function (done) {
            client.face.person.getFace(personGroupId2, billPersonId, billFaces[1])
            .then(function (response) {
                assert.ok(response.userData);
                assert.equal(response.userData, 'test-data');
                done();
            })
            .catch(function (error) {
                assert.ok(false, JSON.stringify(error));
                done();
            });
        });

        it('updates a face on a Person', function (done) {
            client.face.person.updateFace(personGroupId2, billPersonId, billFaces[1], 'test-data')
            .then(function (response) {
                assert.ok(true, "void response expected");
                done();
            })
            .catch(function (error) {
                assert.ok(false, JSON.stringify(error));
                done();
            });
        });

        it('deletes a face on a Person', function (done) {
            client.face.person.deleteFace(personGroupId2, billPersonId, billFaces[1])
            .then(function (response) {
                assert.ok(true, "void response expected");
                done();
            })
            .catch(function (error) {
                assert.ok(false, JSON.stringify(error));
                done();
            });
        });

        it('lists Persons', function (done) {
            client.face.person.list(personGroupId2)
            .then(function (response) {
                assert.ok(response[0].personId);
                done();
            })
            .catch(function (error) {
                assert.ok(false, JSON.stringify(error));
                done();
            });
        });

        it('deletes a Person', function (done) {
            client.face.person.delete(personGroupId2, billPersonId)
            .then(function (response) {
                assert.ok(true, "void response expected");
                done();
            })
            .catch(function (error) {
                assert.ok(false, JSON.stringify(error));
                done();
            });
        });
    });
});

describe('Project Oxford Vision API Test', function () {
    before(function() {
        // ensure the output directory exists
        if(!fs.existsSync('./test/output')){
            fs.mkdirSync('./test/output', parseInt("0766", 8));
        }
    });

    afterEach(function() {
        // delay after each test to prevent throttling
        var now = +new Date() + 250;
        while(now > +new Date());
    });

    it('analyzes a local image', function (done) {
        this.timeout(10000);
        client.vision.analyzeImage({
            path: './test/images/vision.jpg',
            ImageType: true,
            Color: true,
            Faces: true,
            Adult: true,
            Categories: true
        })
        .then(function (response) {
            assert.ok(response);
            assert.ok(response.categories);
            assert.ok(response.adult);
            assert.ok(response.metadata);
            assert.ok(response.faces);
            assert.ok(response.color);
            assert.ok(response.imageType);
            done();
        })
    });

    it('analyzes an online image', function (done) {
        this.timeout(10000);
        client.vision.analyzeImage({
            url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Bill_Gates_June_2015.jpg',
            ImageType: true,
            Color: true,
            Faces: true,
            Adult: true,
            Categories: true
        })
        .then(function (response) {
            assert.ok(response);
            assert.ok(response.categories);
            assert.ok(response.adult);
            assert.ok(response.metadata);
            assert.ok(response.faces);
            assert.ok(response.color);
            assert.ok(response.imageType);
            done();
        });
    });

    it('creates a thumbnail for a local image', function (done) {
        this.timeout(10000);
        client.vision.thumbnail({
            path: './test/images/vision.jpg',
            pipe: fs.createWriteStream('./test/output/thumb2.jpg'),
            width: 100,
            height: 100,
            smartCropping: true
        })
        .then(function (response) {
            var stats = fs.statSync('./test/output/thumb2.jpg');
            assert.ok((stats.size > 0));
            done();
        });
    });

    it('creates a thumbnail for an online image', function (done) {
        this.timeout(10000);
        client.vision.thumbnail({
            url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Bill_Gates_June_2015.jpg',
            pipe: fs.createWriteStream('./test/output/thumb1.jpg'),
            width: 100,
            height: 100,
            smartCropping: true
        })
        .then(function (response) {
            var stats = fs.statSync('./test/output/thumb1.jpg');
            assert.ok((stats.size > 0));
            done();
        });
    });

    it('runs OCR on a local image', function (done) {
        this.timeout(10000);
        client.vision.ocr({
            path: './test/images/vision.jpg',
            language: 'en',
            detectOrientation: true
        })
        .then(function (response) {
            assert.ok(response.language);
            assert.ok(response.regions);
            done();
        });
    });

    it('runs OCR on an online image', function (done) {
        this.timeout(10000);
        client.vision.ocr({
            url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Bill_Gates_June_2015.jpg',
            language: 'en',
            detectOrientation: true
        })
        .then(function (response) {
            assert.ok(response.language);
            assert.ok(response.orientation);
            done();
        });
    });
});
