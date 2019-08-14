import * as pem from 'pem';
import * as fs from 'fs';

const tests = {
  'Create default sized dhparam key': (test: any) => {
    pem.createDhparam((error: any, data: any) => {
      const dhparam = (data && data.dhparam || '').toString();
      test.ifError(error);
      test.ok(dhparam);
      test.ok(dhparam.match(/^\n*\-\-\-\-\-BEGIN DH PARAMETERS\-\-\-\-\-\n/));
      test.ok(dhparam.match(/\n\-\-\-\-\-END DH PARAMETERS\-\-\-\-\-\n*$/));
      test.ok(dhparam.trim().length > 150 && dhparam.trim().length < 160);
      // test.ok(fs.readdirSync('./tmp').length === 0);
      test.done();
    });
  },

  'Create 2048bit dhparam key': (test: any) => {
    pem.createDhparam(2048, (error: any, data: any) => {
      const dhparam = (data && data.dhparam || '').toString();
      test.ifError(error);
      test.ok(dhparam);
      test.ok(dhparam.match(/^\n*\-\-\-\-\-BEGIN DH PARAMETERS\-\-\-\-\-\n/));
      test.ok(dhparam.match(/\n\-\-\-\-\-END DH PARAMETERS\-\-\-\-\-\n*$/));
      test.ok(dhparam.trim().length > 420 && dhparam.trim().length < 430);
      // test.ok(fs.readdirSync('./tmp').length === 0);
      test.done();
    });
  },

  'Create default sized Private key': (test: any) => {
    pem.createPrivateKey((error: any, data: any) => {
      const key = (data && data.key || '').toString();
      test.ifError(error);
      test.ok(key);
      test.ok(key.match(/^\n*\-\-\-\-\-BEGIN RSA PRIVATE KEY\-\-\-\-\-\n/));
      test.ok(key.match(/\n\-\-\-\-\-END RSA PRIVATE KEY\-\-\-\-\-\n*$/));
      test.ok(key.trim().length > 850 && key.trim().length < 1900);
      // test.ok(fs.readdirSync('./tmp').length === 0);
      test.done();
    });
  },

  'Create 2048bit Private key': (test: any) => {
    pem.createPrivateKey(2048, (error: any, data: any) => {
      const key = (data && data.key || '').toString();
      test.ifError(error);
      test.ok(key);
      test.ok(key.match(/^\n*\-\-\-\-\-BEGIN RSA PRIVATE KEY\-\-\-\-\-\n/));
      test.ok(key.match(/\n\-\-\-\-\-END RSA PRIVATE KEY\-\-\-\-\-\n*$/));
      test.ok(key.trim().length > 1650 && key.trim().length < 1700);
      // test.ok(fs.readdirSync('./tmp').length === 0);
      test.done();
    });
  },

  'Create 2048bit Private key with Password': (test: any) => {
    pem.createPrivateKey(2048, {cipher: 'des', password: 'TestMe'}, (error: any, data: any) => {
      const key = (data && data.key || '').toString();
      test.ifError(error);
      test.ok(key);
      test.ok(key.match(/ENCRYPTED\n/));
      test.ok(key.match(/^\n*\-\-\-\-\-BEGIN RSA PRIVATE KEY\-\-\-\-\-\n/));
      test.ok(key.match(/\n\-\-\-\-\-END RSA PRIVATE KEY\-\-\-\-\-\n*$/));
      test.ok(key.trim().length > 1700 && key.trim().length < 1780);
      // test.ok(fs.readdirSync('./tmp').length === 0);
      test.done();
    });
  },

  'Create default CSR': (test: any) => {
    pem.createCSR((error: any, data: any) => {
      const csr = (data && data.csr || '').toString();
      test.ifError(error);
      test.ok(csr);
      test.ok(csr.match(/^\n*\-\-\-\-\-BEGIN CERTIFICATE REQUEST\-\-\-\-\-\n/));
      test.ok(csr.match(/\n\-\-\-\-\-END CERTIFICATE REQUEST\-\-\-\-\-\n*$/));

      test.ok(data && data.clientKey);
      // test.ok(fs.readdirSync('./tmp').length === 0);
      test.done();
    });
  },

  'Create CSR using config file': (test: any) => {
    const certInfo = {
      issuer : {},
      country: 'EE',
      state: 'Harjumaa',
      locality: 'Tallinn',
      organization: 'Node.ee',
      organizationUnit: 'test',
      commonName: 'www.node.ee',
      emailAddress: 'andris@node.ee'
    };

    pem.createCSR({ csrConfigFile: './test/fixtures/test.cnf' }, (error: any, data: any) => {
      const csr = (data && data.csr || '').toString();
      test.ifError(error);
      test.ok(csr);
      test.ok(csr.match(/^\n*\-\-\-\-\-BEGIN CERTIFICATE REQUEST\-\-\-\-\-\n/));
      test.ok(csr.match(/\n\-\-\-\-\-END CERTIFICATE REQUEST\-\-\-\-\-\n*$/));

      test.ok(data && data.clientKey);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.readCertificateInfo(csr, (error: any, data: any) => {
        test.ifError(error);
        test.deepEqual(data, certInfo);
        // test.ok(fs.readdirSync('./tmp').length === 0);
        test.done();
      });
    });
  },

  'Create CSR with own key': (test: any) => {
    pem.createPrivateKey((error: any, data: any) => {
      const key = (data && data.key || '').toString();

      pem.createCSR({
                      clientKey: key
                    }, (error: any, data: any) => {
        const csr = (data && data.csr || '').toString();
        test.ifError(error);
        test.ok(csr);
        test.ok(csr.match(/^\n*\-\-\-\-\-BEGIN CERTIFICATE REQUEST\-\-\-\-\-\n/));
        test.ok(csr.match(/\n\-\-\-\-\-END CERTIFICATE REQUEST\-\-\-\-\-\n*$/));

        test.equal(data && data.clientKey, key);

        test.ok(data && data.clientKey);
        // test.ok(fs.readdirSync('./tmp').length === 0);
        test.done();
      });
    });
  },

  'Create CSR with own encrypted key': (test: any) => {
    const password = 'my:secure! "password\'s\nawesome';
    pem.createPrivateKey(2048, { cipher: 'des3', password }, (error: any, data: any) => {
      const key = (data && data.key || '').toString();

      pem.createCSR({
                      clientKey: key,
                      clientKeyPassword: password
                    }, (error: any, data: any) => {
        const csr = (data && data.csr || '').toString();
        test.ifError(error);
        test.ok(csr);
        test.ok(csr.match(/^\n*\-\-\-\-\-BEGIN CERTIFICATE REQUEST\-\-\-\-\-\n/));
        test.ok(csr.match(/\n\-\-\-\-\-END CERTIFICATE REQUEST\-\-\-\-\-\n*$/));

        test.equal(data && data.clientKey, key);

        test.ok(data && data.clientKey);
        // test.ok(fs.readdirSync('./tmp').length === 0);
        test.done();
      });
    });
  },

  'Create default certificate': (test: any) => {
    pem.createCertificate((error: any, data: any) => {
      const certificate = (data && data.certificate || '').toString();
      test.ifError(error);
      test.ok(certificate);
      test.ok(certificate.match(/^\n*\-\-\-\-\-BEGIN CERTIFICATE\-\-\-\-\-\n/));
      test.ok(certificate.match(/\n\-\-\-\-\-END CERTIFICATE\-\-\-\-\-\n*$/));

      test.ok((data && data.clientKey) !== (data && data.serviceKey));

      test.ok(data && data.clientKey);
      test.ok(data && data.serviceKey);
      test.ok(data && data.csr);
      // test.ok(fs.readdirSync('./tmp').length === 0);
      test.done();
    });
  },

  'Create self signed certificate': (test: any) => {
    pem.createCertificate({
                            selfSigned: true
                          }, (error: any, data: any) => {
      const certificate = (data && data.certificate || '').toString();
      test.ifError(error);
      test.ok(certificate);
      test.ok(certificate.match(/^\n*\-\-\-\-\-BEGIN CERTIFICATE\-\-\-\-\-\n/));
      test.ok(certificate.match(/\n\-\-\-\-\-END CERTIFICATE\-\-\-\-\-\n*$/));

      test.ok((data && data.clientKey) === (data && data.serviceKey));

      test.ok(data && data.clientKey);
      test.ok(data && data.serviceKey);
      test.ok(data && data.csr);
      // test.ok(fs.readdirSync('./tmp').length === 0);
      test.done();
    });
  },

  'Read default cert data from CSR': (test: any) => {
    pem.createCSR((error: any, data: any) => {
      const csr = (data && data.csr || '').toString();
      test.ifError(error);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.readCertificateInfo(csr, (error: any, data: any) => {
        test.ifError(error);
        test.deepEqual(data, {
          issuer : {},
          country: '',
          state: '',
          locality: '',
          organization: '',
          organizationUnit: '',
          commonName: 'localhost',
          emailAddress: ''
        });
        // test.ok(fs.readdirSync('./tmp').length === 0);
        test.done();
      });
    });
  },

  'Read edited cert data from CSR': (test: any) => {
    const certInfo = {
      issuer : {},
      country: 'EE',
      state: 'Harjumaa',
      locality: 'Tallinn',
      organization: 'Node.ee',
      organizationUnit: 'test',
      commonName: 'www.node.ee',
      emailAddress: 'andris@node.ee'
    };
    pem.createCSR(Object.create(certInfo), (error: any, data: any) => {
      const csr = (data && data.csr || '').toString();
      test.ifError(error);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.readCertificateInfo(csr, (error: any, data: any) => {
        test.ifError(error);
        test.deepEqual(data, certInfo);
        // test.ok(fs.readdirSync('./tmp').length === 0);
        test.done();
      });
    });
  },

  'Read default cert data from certificate': (test: any) => {
    pem.createCertificate((error: any, data: any) => {
      const certificate = (data && data.certificate || '').toString();
      test.ifError(error);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.readCertificateInfo(certificate, (error: any, data: any) => {
        test.ifError(error);

        if (data.validity) {
          delete data.validity;
        }
        if (data.serial) {
          delete data.serial;
        }

        test.deepEqual(data, {
          issuer : {
            country: '',
            state: '',
            locality: '',
            organization: '',
            organizationUnit: '',
            commonName: 'localhost'
          },
          country: '',
          state: '',
          locality: '',
          organization: '',
          organizationUnit: '',
          commonName: 'localhost',
          emailAddress: ''
        });
        // test.ok(fs.readdirSync('./tmp').length === 0);
        test.done();
      });
    });
  },

  'Read edited cert data from certificate': (test: any) => {
    const certInfo = {
      issuer : {
        country: 'EE',
        state: 'Harjumaa',
        locality: 'Tallinn',
        organization: 'Node.ee',
        organizationUnit: 'test',
        commonName: 'www.node.ee'
      },
      country: 'EE',
      state: 'Harjumaa',
      locality: 'Tallinn',
      organization: 'Node.ee',
      organizationUnit: 'test',
      commonName: 'www.node.ee',
      emailAddress: 'andris@node.ee'
    };
    pem.createCertificate(Object.create(certInfo), (error: any, data: any) => {
      const certificate = (data && data.certificate || '').toString();
      test.ifError(error);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.readCertificateInfo(certificate, (error: any, data: any) => {
        test.ifError(error);

        if (data.validity) {
          delete data.validity;
        }
        if (data.serial) {
          delete data.serial;
        }

        test.deepEqual(data, certInfo);
        // test.ok(fs.readdirSync('./tmp').length === 0);
        test.done();
      });
    });
  },

  'Get public key from private key': (test: any) => {
    pem.createPrivateKey((error: any, data: any) => {
      const key = (data && data.key || '').toString();
      test.ifError(error);
      test.ok(key);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.getPublicKey(key, (error: any, data: any) => {
        const pubkey = (data && data.publicKey || '').toString();
        test.ifError(error);
        test.ok(pubkey);

        test.ok(pubkey.match(/^\n*\-\-\-\-\-BEGIN PUBLIC KEY\-\-\-\-\-\n/));
        test.ok(pubkey.match(/\n\-\-\-\-\-END PUBLIC KEY\-\-\-\-\-\n*$/));
        // test.ok(fs.readdirSync('./tmp').length === 0);

        test.done();
      });
    });
  },

  'Get public key from CSR': (test: any) => {
    pem.createCSR((error: any, data: any) => {
      const key = (data && data.clientKey || '').toString();
      test.ifError(error);
      test.ok(key);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.getPublicKey(key, (error: any, data: any) => {
        const pubkey = (data && data.publicKey || '').toString();
        test.ifError(error);
        test.ok(pubkey);

        test.ok(pubkey.match(/^\n*\-\-\-\-\-BEGIN PUBLIC KEY\-\-\-\-\-\n/));
        test.ok(pubkey.match(/\n\-\-\-\-\-END PUBLIC KEY\-\-\-\-\-\n*$/));
        // test.ok(fs.readdirSync('./tmp').length === 0);

        test.done();
      });
    });
  },

  'Get public key from certificate': (test: any) => {
    pem.createCertificate((error: any, data: any) => {
      const key = (data && data.clientKey || '').toString();
      test.ifError(error);
      test.ok(key);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.getPublicKey(key, (error: any, data: any) => {
        const pubkey = (data && data.publicKey || '').toString();
        test.ifError(error);
        test.ok(pubkey);

        test.ok(pubkey.match(/^\n*\-\-\-\-\-BEGIN PUBLIC KEY\-\-\-\-\-\n/));
        test.ok(pubkey.match(/\n\-\-\-\-\-END PUBLIC KEY\-\-\-\-\-\n*$/));
        // test.ok(fs.readdirSync('./tmp').length === 0);

        test.done();
      });
    });
  },

  'Get fingerprint from certificate': (test: any) => {
    pem.createCertificate((error: any, data: any) => {
      const certificate = (data && data.certificate || '').toString();
      test.ifError(error);
      test.ok(certificate);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.getFingerprint(certificate, (error: any, data: any) => {
        const fingerprint = (data && data.fingerprint || '').toString();
        test.ifError(error);
        test.ok(fingerprint);
        test.ok(fingerprint.match(/^[0-9A-F]{2}(:[0-9A-F]{2}){19}$/));
        // test.ok(fs.readdirSync('./tmp').length === 0);

        test.done();
      });
    });
  },

  'Get modulus from certificate': (test: any) => {
    pem.createCertificate((error: any, data: any) => {
      const certificate = (data && data.certificate || '').toString();
      test.ifError(error);
      test.ok(certificate);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.getModulus(certificate, (error: any, data: any) => {
        const certmodulus = (data && data.modulus || '').toString();
        test.ifError(error);
        test.ok(certmodulus);
        test.ok(certmodulus.match(/^[0-9A-F]*$/));
        // test.ok(fs.readdirSync('./tmp').length === 0);
        pem.getModulus(certificate, (error: any, data: any) => {
          const keymodulus = (data && data.modulus || '').toString();
          test.ifError(error);
          test.ok(keymodulus);
          test.ok(keymodulus.match(/^[0-9A-F]*$/));
          test.ok(keymodulus === certmodulus);
          // test.ok(fs.readdirSync('./tmp').length === 0);
          test.done();
        });
      });
    });
  },

  'Get modulus from a protected key': (test: any) => {
    const certificate = ''; // fs.readFileSync('./test/fixtures/test.crt').toString();
    const key = ''; // fs.readFileSync('./test/fixtures/test.key').toString();

    pem.getModulus(certificate, (error: any, data: any) => {
      const certmodulus = (data && data.modulus || '').toString();
      test.ifError(error);
      test.ok(certmodulus);
      test.ok(certmodulus.match(/^[0-9A-F]*$/));
      // test.ok(fs.readdirSync('./tmp').length === 0);
      pem.getModulus(key, 'password', (error: any, data: any) => {
        const keymodulus = (data && data.modulus || '').toString();
        test.ifError(error);
        test.ok(keymodulus);
        test.ok(keymodulus.match(/^[0-9A-F]*$/));
        test.ok(keymodulus === certmodulus);
        // test.ok(fs.readdirSync('./tmp').length === 0);
        test.done();
      });
    });
  },

  'Get DH param info': (test: any) => {
    const dh = ''; // fs.readFileSync('./test/fixtures/test.dh').toString();

    pem.getDhparamInfo(dh, (error: any, data: any) => {
      const size = data && data.size || 0;
      const prime = (data && data.prime || '').toString();
      test.ifError(error);
      test.equal(size, 1024);
      test.ok(prime);
      // test.ok(fs.readdirSync('./tmp').length === 0);
      test.equal(typeof size, 'number');
      test.ok(/([0-9a-f][0-9a-f]:)+[0-9a-f][0-9a-f]$/g.test(prime));
      test.done();
    });
  },

  'Create and verify wildcard certificate': (test: any) => {
    const certInfo = {
      commonName: '*.node.ee'
    };
    pem.createCertificate(Object.create(certInfo), (error: any, data: any) => {
      const certificate = (data && data.certificate || '').toString();
      test.ifError(error);
      // test.ok(fs.readdirSync('./tmp').length === 0);

      pem.readCertificateInfo(certificate, (error: any, data: any) => {
        test.ifError(error);
        test.equal(data.commonName, certInfo.commonName);
        // test.ok(fs.readdirSync('./tmp').length === 0);
        test.done();
      });
    });
  },
  'Return an error if openssl was not found': (test: any) => {
    pem.config({
                 pathOpenSSL: 'zzzzzzzzzzz'
               });

    pem.createPrivateKey((error: any) => {
      test.ok(error);
      pem.config({
                   pathOpenSSL: 'openssl'
                 });
      pem.createPrivateKey((error: any) => {
        test.ifError(error);
        test.done();
      });
    });
  },
  'Create PKCS12 without key password': (test: any) => {
    pem.createPrivateKey((error: any, data: any) => {
      const key = (data && data.key || '').toString();

      pem.createCertificate({
                              clientKey: key,
                              selfSigned: true
                            }, (error: any, csr: any) => {
        pem.createPkcs12(csr.clientKey, csr.certificate, 'mypassword', (err: any, pkcs12: any) => {
          test.ifError(err);
          test.ok(pkcs12);

          // test.ok(fs.readdirSync('./tmp').length === 0);
          test.done();
        });
      });
    });
  },
  'Create PKCS12 with key password': (test: any) => {
    pem.createPrivateKey({cipher: 'aes128', password: 'xxx'}, (error: any, data: any) => {
      const key = (data && data.key || '').toString();

      pem.createCertificate({
                              clientKey: key,
                              selfSigned: true
                            }, (error: any, csr: any) => {
        pem.createPkcs12(csr.clientKey, csr.certificate, 'mypassword', {cipher: 'aes256', clientKeyPassword: 'xxx'}, (err: any, pkcs12: any) => {
          test.ifError(err);
          test.ok(pkcs12);

          // test.ok(fs.readdirSync('./tmp').length === 0);
          test.done();
        });
      });
    });
  },
  'Create PKCS12 with ca certificates': (test: any) => {
    pem.createCertificate({
                            commonName: 'CA Certificate'
                          }, (error: any, ca: any) => {
      test.ifError(error);

      pem.createCertificate({
                              serviceKey: ca.serviceKey,
                              serviceCertificate: ca.certificate,
                              serial: Date.now(),
                            }, (error: any, cert: any) => {
        test.ifError(error);

        pem.createPkcs12(cert.clientKey, cert.certificate, '', {certFiles: [ca.certificate]}, (error: any, pkcs12: any) => {
          test.ifError(error);
          test.ok(pkcs12.pkcs12);

          // test.ok(fs.readdirSync('./tmp').length === 0);
          const pkcs12Buffer = new Buffer(pkcs12.pkcs12);

          pem.readPkcs12(pkcs12Buffer, (error: any, keystore: pem.Pkcs12ReadResult) => {
            test.ifError(error);
            test.ok(keystore);

            test.equal(ca.certificate, keystore.ca[0]);
            test.equal(cert.certificate, keystore.cert);
            test.equal(cert.clientKey, keystore.key);
          });

          const pkcs12File: string = __dirname + '/test.pkcs12';
          fs.writeFileSync(pkcs12File, pkcs12Buffer);

          pem.readPkcs12(pkcs12File, (error: any, keystore: pem.Pkcs12ReadResult) => {
            test.ifError(error);
            test.ok(keystore);

            test.equal(ca.certificate, keystore.ca[0]);
            test.equal(cert.certificate, keystore.cert);
            test.equal(cert.clientKey, keystore.key);

            test.done();
          });
        });
      });
    });
  },
  'Respond with ENOENT for missing PKCS12 file': (test: any) => {
    pem.readPkcs12('/i/do/not/exist.p12', (error: any) => {
      test.ok(error);
      test.equal(error.code, 'ENOENT');

      test.done();
    });
  },
  'Verify sigining chain': (test: any) => {
    pem.createCertificate({
                            commonName: 'CA Certificate'
                          }, (error: any, ca: any) => {
      test.ifError(error);

      pem.createCertificate({
                              serviceKey: ca.serviceKey,
                              serviceCertificate: ca.certificate,
                              serial: Date.now(),
                            }, (error: any, cert: any) => {
        test.ifError(error);

        pem.verifySigningChain(cert.certificate, ca.certificate, (error: any, valid: any) => {
          test.ifError(error);
          test.ok(valid === true);

          test.done();
        });
      });
    });
  },
  'Verify deep sigining chain': (test: any) => {
    pem.createCertificate({
                            commonName: 'CA Certificate'
                          }, (error: any, ca: any) => {
      test.ifError(error);

      pem.createCertificate({
                              commonName: 'Intermediate CA Certificate',
                              serviceKey: ca.serviceKey,
                              serviceCertificate: ca.certificate,
                              serial: Date.now(),
                            }, (error: any, intermediate: any) => {
        test.ifError(error);

        pem.createCertificate({
                                serviceKey: intermediate.clientKey,
                                serviceCertificate: intermediate.certificate,
                                serial: Date.now(),
                              }, (error: any, cert: any) => {
          test.ifError(error);

          pem.verifySigningChain(cert.certificate, [ca.certificate, intermediate.certificate], (error: any, valid: any) => {
            test.ifError(error);
            test.ok(valid === true);

            test.done();
          });
        });
      });
    });
  },
  'Fail to verify invalid sigining chain': (test: any) => {
    pem.createCertificate({
                            commonName: 'CA Certificate'
                          }, (error: any, ca: any) => {
      test.ifError(error);

      pem.createCertificate({
                              serviceKey: ca.serviceKey,
                              serviceCertificate: ca.certificate,
                              serial: Date.now(),
                            }, (error: any, cert: any) => {
        test.ifError(error);

        pem.verifySigningChain(cert.certificate, cert.certificate, (error: any, valid: any) => {
          test.ifError(error);
          test.ok(valid === false);

          test.done();
        });
      });
    });
  },
  'Fail to verify deep sigining chain with missing CA certificate': (test: any) => {
    pem.createCertificate({
                            commonName: 'CA Certificate'
                          }, (error: any, ca: any) => {
      test.ifError(error);

      pem.createCertificate({
                              commonName: 'Intermediate CA Certificate',
                              serviceKey: ca.serviceKey,
                              serviceCertificate: ca.certificate,
                              serial: Date.now(),
                            }, (error: any, intermediate: any) => {
        test.ifError(error);

        pem.createCertificate({
                                serviceKey: intermediate.clientKey,
                                serviceCertificate: intermediate.certificate,
                                serial: Date.now(),
                              }, (error: any, cert: any) => {
          test.ifError(error);

          pem.verifySigningChain(cert.certificate, [intermediate.certificate], (error: any, valid: any) => {
            test.ifError(error);
            test.ok(valid === false);

            test.done();
          });
        });
      });
    });
  },
  'Fail to verify deep sigining chain with missing intermediate certificate': (test: any) => {
    pem.createCertificate({
                            commonName: 'CA Certificate'
                          }, (error: any, ca: any) => {
      test.ifError(error);

      pem.createCertificate({
                              commonName: 'Intermediate CA Certificate',
                              serviceKey: ca.serviceKey,
                              serviceCertificate: ca.certificate,
                              serial: Date.now(),
                            }, (error: any, intermediate: any) => {
        test.ifError(error);

        pem.createCertificate({
                                serviceKey: intermediate.clientKey,
                                serviceCertificate: intermediate.certificate,
                                serial: Date.now(),
                                days: 1024
                              }, (error: any, cert: any) => {
          test.ifError(error);

          pem.verifySigningChain(cert.certificate, [ca.certificate], (error: any, valid: any) => {
            test.ifError(error);
            test.ok(valid === false);

            test.done();
          });
        });
      });
    });
  }
};
