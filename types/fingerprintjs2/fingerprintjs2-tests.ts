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
      exludes: {
         excludeUserAgent: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeLanguage() {
   const options: Fingerprint2Options = {
      exludes: {
         excludeLanguage: true
      }
   };
}

function test_get_excludeColorDepth() {
   const options = {
      exludes: {
         excludeColorDepth: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeScreenResolution() {
   const options = {
      exludes: {
         excludeScreenResolution: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeTimezoneOffset() {
   const options = {
      exludes: {
         excludeTimezoneOffset: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeSessionStorage() {
   const options = {
      exludes: {
         excludeSessionStorage: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeIndexedDB() {
   const options = {
      exludes: {
         excludeIndexedDB: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeAddBehavior() {
   const options = {
      exludes: {
         excludeAddBehavior: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeOpenDatabase() {
   const options = {
      exludes: {
         excludeOpenDatabase: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeCpuClass() {
   const options = {
      exludes: {
         excludeCpuClass: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludePlatform() {
   const options = {
      exludes: {
         excludePlatform: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeDoNotTrack() {
   const options = {
      exludes: {
         excludeDoNotTrack: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeCanvas() {
   const options = {
      exludes: {
         excludeCanvas: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeWebGL() {
   const options = {
      exludes: {
         excludeWebGL: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeAdBlock() {
   const options = {
      exludes: {
         excludeAdBlock: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedLanguages() {
   const options = {
      exludes: {
         excludeHasLiedLanguages: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedResolution() {
   const options = {
      exludes: {
         excludeHasLiedResolution: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedOs() {
   const options = {
      exludes: {
         excludeHasLiedOs: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedBrowser() {
   const options = {
      exludes: {
         excludeHasLiedBrowser: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeJsFonts() {
   const options = {
      exludes: {
         excludeJsFonts: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeFlashFonts() {
   const options = {
      exludes: {
         excludeFlashFonts: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludePlugins() {
   const options = {
      exludes: {
         excludePlugins: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeIEPlugins() {
   const options = {
      exludes: {
         excludeIEPlugins: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeTouchSupport() {
   const options = {
      exludes: {
         excludeTouchSupport: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludePixelRatio() {
   const options = {
      exludes: {
         excludePixelRatio: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHardwareConcurrency() {
   const options = {
      exludes: {
         excludeHardwareConcurrency: true
      }
   };

   Fingerprint2.get(options, defaultCallback);
}
