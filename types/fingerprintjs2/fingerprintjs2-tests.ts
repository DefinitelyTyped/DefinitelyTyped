function defaultCallback(components: FingerPrint2Component[]) {
   components.map((component) => {
      console.log(component.value);
   });
}

function test_get_x64hash128() {
   Fingerprint2.x64hash128("abc", 99);
}

function test_default_settings() {
    Fingerprint2.get(defaultCallback);
}

function test_get_exclude_swfContainerId() {
   const options: Fingerprint2Options = {
      fonts: {
         swfContainerId: 'swfContainerId'
      },
   };
   Fingerprint2.get(options, defaultCallback);
}

function test_get_exclude_swfPath() {
   const options: Fingerprint2Options = {
      fonts: {
         swfPath: 'pathToSwf'
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_exclude_userDefinedFonts() {
   const options: Fingerprint2Options = {
      fonts: {
         userDefinedFonts: ['font1', 'font2']
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeUserAgent() {
   const options: Fingerprint2Options = {
      excludes: {
         userAgent: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeLanguage() {
   const options: Fingerprint2Options = {
      excludes: {
         language: true
      }
   };
}

function test_get_excludeColorDepth() {
   const options: Fingerprint2Options = {
      excludes: {
         colorDepth: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeScreenResolution() {
   const options: Fingerprint2Options = {
      excludes: {
         screenResolution: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeTimezoneOffset() {
   const options: Fingerprint2Options = {
      excludes: {
         timezoneOffset: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeSessionStorage() {
   const options: Fingerprint2Options = {
      excludes: {
         sessionStorage: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeIndexedDB() {
   const options: Fingerprint2Options = {
      excludes: {
         indexedDb: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeAddBehavior() {
   const options: Fingerprint2Options = {
      excludes: {
         addBehavior: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeOpenDatabase() {
   const options: Fingerprint2Options = {
      excludes: {
         openDatabase: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeCpuClass() {
   const options: Fingerprint2Options = {
      excludes: {
         cpuClass: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludePlatform() {
   const options: Fingerprint2Options = {
      excludes: {
         platform: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeDoNotTrack() {
   const options: Fingerprint2Options = {
      excludes: {
         doNotTrack: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeCanvas() {
   const options: Fingerprint2Options = {
      excludes: {
         canvas: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeWebGL() {
   const options: Fingerprint2Options = {
      excludes: {
         webgl: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeAdBlock() {
   const options: Fingerprint2Options = {
      excludes: {
         adBlock: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedLanguages() {
   const options: Fingerprint2Options = {
      excludes: {
         hasLiedLanguages: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedResolution() {
   const options: Fingerprint2Options = {
      excludes: {
         hasLiedResolution: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedOs() {
   const options: Fingerprint2Options = {
      excludes: {
         hasLiedOs: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedBrowser() {
   const options: Fingerprint2Options = {
      excludes: {
         hasLiedBrowser: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeFlashFonts() {
   const options: Fingerprint2Options = {
      excludes: {
         fontsFlash: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludePlugins() {
   const options: Fingerprint2Options = {
      excludes: {
         plugins: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeTouchSupport() {
   const options: Fingerprint2Options = {
      excludes: {
         touchSupport: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludePixelRatio() {
   const options: Fingerprint2Options = {
      excludes: {
         pixelRatio: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHardwareConcurrency() {
   const options: Fingerprint2Options = {
      excludes: {
         hardwareConcurrency: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}
