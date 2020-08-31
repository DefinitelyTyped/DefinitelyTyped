// phantomCSS 0.11.1 is based on resemblejs 1.2.1, phantomJS 1.9.2 , casperJS 1.1.0-DEV

var options: PhantomCSS.PhantomCSSOptions = {
    libraryRoot: './modules/PhantomCSS',

    screenshotRoot: './screenshots',

    failedComparisonsRoot: './failures',

    cleanupComparisonImages: true,

    casper: null,

    comparisonResultRoot: './results',

    addIteratorToImage: false,

    addLabelToFailedImage: false,

    mismatchTolerance: 0.05,

    onFail: function(test){ console.log(test.filename, test.mismatch); },

    onPass: function(test){ console.log(test.filename); },

    onNewImage: function(test){ console.log(test.filename); },

    onTimeout: function(test){ console.log(test.filename); },

    onComplete: function(allTests, noOfFails, noOfErrors){
        allTests.forEach(function(test){
            if(test.fail){
                console.log(test.filename, test.mismatch);
            }
        });
    },

    fileNameGetter: function(root:string,filename:string){

       return root+filename;
    },

    prefixCount: true,

    outputSettings: {
        errorColor: {
            red: 255,
            green: 0,
            blue: 255
        },
        errorType: 'movement',
        transparency: 0.3,
        largeImageThreshold: 1200
    },

    rebase: null//casper.cli.get("rebase")
}

declare var phantomcss:PhantomCSS.PhantomCSS;

phantomcss.turnOffAnimations();
phantomcss.init(options);

phantomcss.compareAll('exclude.test');
phantomcss.compareMatched('include.test', 'exclude.test');
phantomcss.compareMatched( new RegExp('include.test'), new RegExp('exclude.test'));
phantomcss.compareSession();
phantomcss.compareExplicit(['/dialog.diff.png', '/header.diff.png']);
phantomcss.getCreatedDiffFiles();
phantomcss.compareFiles("baseFile", "diffFile");
phantomcss.waitForTests([{error:false, fail:false, failFile: "failFile", filename: "filename", mismatch: null/* mismatch */ }]);

phantomcss.screenshot("#feedback-form");

phantomcss.screenshot("#feedback-form", undefined, 'input[type=file]');
