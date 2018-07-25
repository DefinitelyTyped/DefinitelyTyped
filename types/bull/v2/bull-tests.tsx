/**
 * Created by Bruno Grieder
 */

import Queue = require("bull");

var videoQueue = Queue( 'video transcoding', 6379, '127.0.0.1' );
var audioQueue = Queue( 'audio transcoding', 6379, '127.0.0.1' );
var imageQueue = Queue( 'image transcoding', 6379, '127.0.0.1' );

videoQueue.process( ( job: Queue.Job, done: Queue.DoneCallback ) => {

    // job.data contains the custom data passed when the job was created
    // job.jobId contains id of this job.

    // transcode video asynchronously and report progress
    job.progress( 42 );

    // call done when finished
    done();

    // or give a error if error
    done( Error( 'error transcoding' ) );

    // or pass it a result
    done( null, { framerate: 29.5 /* etc... */ } );

    // If the job throws an unhandled exception it is also handled correctly
    throw (Error( 'some unexpected error' ));
} );

audioQueue.process( ( job: Queue.Job, done: Queue.DoneCallback ) => {
    // transcode audio asynchronously and report progress
    job.progress( 42 );

    // call done when finished
    done();

    // or give a error if error
    done( Error( 'error transcoding' ) );

    // or pass it a result
    done( null, { samplerate: 48000 /* etc... */ } );

    // If the job throws an unhandled exception it is also handled correctly
    throw (Error( 'some unexpected error' ));
} );

imageQueue.process( ( job: Queue.Job, done: Queue.DoneCallback ) => {
    // transcode image asynchronously and report progress
    job.progress( 42 );

    // call done when finished
    done();

    // or give a error if error
    done( Error( 'error transcoding' ) );

    // or pass it a result
    done( null, { width: 1280, height: 720 /* etc... */ } );

    // If the job throws an unhandled exception it is also handled correctly
    throw (Error( 'some unexpected error' ));
} );

videoQueue.add( { video: 'http://example.com/video1.mov' } );
audioQueue.add( { audio: 'http://example.com/audio1.mp3' } );
imageQueue.add( { image: 'http://example.com/image1.tiff' } );


//////////////////////////////////////////////////////////////////////////////////
//
// Using Promises
//
//////////////////////////////////////////////////////////////////////////////////

const fetchVideo = ( url: string ): Promise<any> => { return null }
const transcodeVideo = ( data: any ): Promise<void> => { return null }

interface VideoJob extends Queue.Job {
    data: {url: string}
}


videoQueue.process( ( job: VideoJob ) => { // don't forget to remove the done callback!
    // Simply return a promise
    fetchVideo( job.data.url ).then( transcodeVideo );

    // Handles promise rejection
    Promise.reject( new Error( 'error transcoding' ) );

    // Passes the value the promise is resolved with to the "completed" event
    Promise.resolve( { framerate: 29.5 /* etc... */ } );

    // same as
    Promise.reject( new Error( 'some unexpected error' ) );

    // If the job throws an unhandled exception it is also handled correctly
    throw new Error( 'some unexpected error' );
} );


var addVideo1Job = videoQueue.add( { video: 'http://example.com/video1.mov' } );

addVideo1Job.then((video1Job) => {
    // When job has successfully be placed in the queue the job is returned
    // then wait for completion
    return video1Job.finished();
})
.then(() => {
    // video1Job completed successfully
})
.catch((err) => {
    // error
});
