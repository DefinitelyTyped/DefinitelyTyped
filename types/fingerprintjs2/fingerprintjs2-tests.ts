function defaultCallback(components: FingerPrint2Component[]){
   components.map(function(component) {
      console.log(component.value);
   })
}

function test_get_x64hash128() {
   Fingerprint2.x64hash128("abc", 99);
}

function test_default_settings() {
    Fingerprint2.get(defaultCallback);
}

function test_get_exclude_swfContainerId() {
   const options = {
      fonts: {
         swfContainerId: 'swfContainerId'
      }
   } as Fingerprint2Options;
   Fingerprint2.get(options, defaultCallback);
}

function test_get_exclude_swfPath() {
   const options = {
      fonts: {
         swfPath: 'pathToSwf'
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_exclude_userDefinedFonts() {
   const options = {
      fonts: {
         userDefinedFonts: ['font1', 'font2']
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeUserAgent() {
   const options = {
      exludes: {
         excludeUserAgent: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeLanguage() {
   const options = {
      exludes: {
         excludeLanguage: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeColorDepth() {
   const options = {
      exludes: {
         excludeColorDepth: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeScreenResolution() {
   const options = {
      exludes: {
         excludeScreenResolution: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeTimezoneOffset() {
   const options = {
      exludes: {
         excludeTimezoneOffset: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeSessionStorage() {
   const options = {
      exludes: {
         excludeSessionStorage: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeIndexedDB() {
   const options = {
      exludes: {
         excludeIndexedDB: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeAddBehavior() {
   const options = {
      exludes: {
         excludeAddBehavior: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeOpenDatabase() {
   const options = {
      exludes: {
         excludeOpenDatabase: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeCpuClass() {
   const options = {
      exludes: {
         excludeCpuClass: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludePlatform() {
   const options = {
      exludes: {
         excludePlatform: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeDoNotTrack() {
   const options = {
      exludes: {
         excludeDoNotTrack: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeCanvas() {
   const options = {
      exludes: {
         excludeCanvas: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeWebGL() {
   const options = {
      exludes: {
         excludeWebGL: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeAdBlock() {
   const options = {
      exludes: {
         excludeAdBlock: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedLanguages() {
   const options = {
      exludes: {
         excludeHasLiedLanguages: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedResolution() {
   const options = {
      exludes: {
         excludeHasLiedResolution: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedOs() {
   const options = {
      exludes: {
         excludeHasLiedOs: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHasLiedBrowser() {
   const options = {
      exludes: {
         excludeHasLiedBrowser: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeJsFonts() {
   const options = {
      exludes: {
         excludeJsFonts: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeFlashFonts() {
   const options = {
      exludes: {
         excludeFlashFonts: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludePlugins() {
   const options = {
      exludes: {
         excludePlugins: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeIEPlugins() {
   const options = {
      exludes: {
         excludeIEPlugins: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeTouchSupport() {
   const options = {
      exludes: {
         excludeTouchSupport: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludePixelRatio() {
   const options = {
      exludes: {
         excludePixelRatio: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}

function test_get_excludeHardwareConcurrency() {
   const options = {
      exludes: {
         excludeHardwareConcurrency: true
      }
   } as Fingerprint2Options;

   Fingerprint2.get(options, defaultCallback);
}
