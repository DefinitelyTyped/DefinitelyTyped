import clm from "clmtrackr";

const ctracker = new clm.tracker();

console.log(clm.version);

ctracker.init({
    constantVelocity: true,
    searchWindow: 11,
    useWebGL: true,
    scoreThreshold: 0.50,
    stopOnConvergence: false,
    /** object with parameters for facedetection : */
    faceDetection: { useWebWorkers: true}
});

const video = document.getElementsByTagName("video")[0];
ctracker.start(video);
const positions = ctracker.getCurrentPosition();
if (positions) {
    const canvas = document.getElementsByTagName("canvas")[0];
    ctracker.draw(canvas);
    positions.forEach(([x, y]) => {
        const sum: number = x + y;
    });
}
