// maxmsp-tests.ts

// Examples working with global variables
inlets = 2;
inspector = 1;
outlets = 2;
autowatch = 1;
jsarguments.push(1, 2, 3);
error("This is a test error.\n");
error("This is a", "multiple string", "error\n");
cpost("This is cpost.\n");
cpost("This is a", "multiple string", "cpost\n");
post("This is a post.\n");
post("This is a", "multiple string", "post\n");
// Catcher must be bound to a global object, so use an [r]
messnamed("catcher", "bang");
messnamed("catcher", "amessage", "myarg");
messnamed("catcher", "anothremessage", 1);

// Buffer usage example
const myBuffer = new Buffer("audio_buffer");
myBuffer.peek(1, 5, 10);
myBuffer.poke(1, 5, [0.1, 0.2, 0.3]);
myBuffer.send("sizeinsamps", 44100);

// Dict usage example
const d = new Dict("test_dict");
d.set("salami", "7.99");
d.set("bologna", 1.99);
d.set("drink::hot::coffee::sizes", "small", "medium", "large");
d.replace("salami", "6.99");
d.replace("drink::hot::coffee::type", "espresso");
d.replace("drink::hot::coffee::with", "milk", "sugar");
d.getsize("drink::hot::coffee::with");
d.parse(JSON.stringify({ color: "blue" }));
d.setparse("myobj", JSON.stringify(["a", "b"]));
d.replace("myobj", JSON.stringify(["c", "d"]));
d.remove("color");
d.clear();
d.freepeer();
const colorValue = d.get("color");
const keys = d.getkeys();

// File usage example
let file = new File("test.txt", "write", "TEXT");
file.writeline("This is a test.");
file.writestring("Some random text.");
file.close();

file = new File("test.txt");
file.readline();
file.readline(2);
file.close();

// Folder usage example
const folder = new Folder("path/to/folder");
folder.typelist = ["TEXT", "JSON"];
if (!folder.end) {
    folder.next();
    const filename = folder.filename;
}
folder.close();

// maxmsp-tests.ts
// working with Global
//
// 1. cast Global to any, lie to typescript that all is fine
//    by using any or typescript ignore comments (see below)
const globalOne = new Global("myGlobal");
(<any> globalOne).prop = "hello";
messnamed("myobj", (<any> globalOne).prop);
// @ts-expect-error
messnamed("myobj", globalOne.prop);
//
// 2. Use a type guard
const globalTwo = new Global("myGlobal");
globalTwo.prop = "hello";
// @ts-expect-error
messnamed("myobj", globalTwo.prop);
if (typeof globalTwo.prop !== "string") {
    throw new Error("prop is not a string");
}
globalTwo.sendnamed("catcher", globalTwo.prop);
messnamed("myobj", globalTwo.prop);
//
// 3. create a subclass with the properties you will work with
class MyGlobal extends Global {
    prop: string | undefined;
}
const myglobal = new MyGlobal("myGlobal");
if (myglobal.prop === undefined) {
    myglobal.prop = "hello";
} else {
    post(`global prop: ${myglobal.prop}`);
}

messnamed("myobj", myglobal.prop);
// ou must have an [r] object in your patch named catcher
myglobal.sendnamed("catcher", myglobal.prop);

const liveApiCallback = (args: any) => {
    post(args);
};

const liveApiInstance = new LiveAPI(liveApiCallback, "live_set tracks 0 devices 0");

// Accessing properties
post(liveApiInstance.id);
post(liveApiInstance.path);
post(liveApiInstance.unquotedpath);
post(liveApiInstance.children);
post(liveApiInstance.mode);
post(liveApiInstance.type);
post(liveApiInstance.info);
post(liveApiInstance.property);
post(liveApiInstance.proptype);

// Using methods
post(liveApiInstance.getcount("callable_children"));
liveApiInstance.goto("live_set tracks 0 devices 1");
post(liveApiInstance.get("name"));
post(liveApiInstance.getstring("name"));
liveApiInstance.set("name", "New Device Name");
liveApiInstance.call("reset_meter", []);

// Observing property changes
liveApiInstance.property = "mute";
liveApiInstance.mode = 0;

// Get the max object from this
const testmax = this.max;

// Access properties
post(testmax.appath);
post(testmax.cmdkeydown);
post(testmax.ctrlkeydown);
post(testmax.db);
post(testmax.frontpatcher);
post(testmax.isplugin);
post(testmax.isruntime);
post(testmax.loadbangdisabled);
post(testmax.optionkeydown);
post(testmax.os);
post(testmax.osversion);
post(testmax.shiftkeydown);
post(testmax.time);
post(testmax.version);

// Use methods
testmax.buildcollective("myref", "myfilename");
testmax.checkpreempt("my_receiver");
testmax.clean();
testmax.closefile("myref");
testmax.debug(1);
testmax.enablepathcache(1);
testmax.enablerefresh(1);
testmax.externs();
testmax.fileformat(".tx", "TEXT");
testmax.fixwidthratio(1.1);
testmax.getdefaultpatcherheight("my_receiver");
testmax.getdefaultpatcherwidth("my_receiver");
testmax.getenablepathcache("my_receiver");
testmax.getenablerefresh("my_receiver");
testmax.geteventinterval("my_receiver");
testmax.getfixwidthratio("my_receiver");
testmax.getpollthrottle("my_receiver");
testmax.getqueuethrottle("my_receiver");
// testmax.getrefreshrate(""); // Uncomment this line for Macintosh
testmax.getruntime("my_receiver");
testmax.getsleep("my_receiver");
testmax.getslop("my_receiver");
testmax.getsysqelemthrottle("my_receiver");
testmax.getsystem("my_receiver");
testmax.getversion("my_receiver");
testmax.hidecursor();
testmax.hidemenubar();
testmax.htmlref("my_objectname");
testmax.interval(10);
testmax.launchbrowser("https://google.com");
testmax.maxcharheightforsubpixelantialiasing(12);
testmax.maxinwmenu(1);
testmax.maxwindow();
// testmax.midi(...message) // Pass an appropriate message
testmax.midilist();
testmax.nativetextrendering(1);
testmax.notypeinfo(1);
testmax.objectfile("text", "textfile");
testmax.openfile("myref", "mypatch.mxf");
testmax.paths();
// testmax.portabbrev(...message) // Pass an appropriate message
// testmax.portenable(""); // Pass an appropriate port name
// testmax.portoffset(...message) // Pass an appropriate message
testmax.preempt(1);
testmax.pupdate(100, 200);
testmax.quit();
testmax.refresh();
// testmax.refreshrate(30); // Uncomment this line for Macintosh
testmax.runtime(1, "my_message");
testmax.sendapppath("my_receiver");
testmax.sendinterval("my_receiver");
testmax.seteventinterval(5);
testmax.setmirrortoconsole(1);
testmax.setpollthrottle(10);
testmax.setqueuethrottle(3);
testmax.setsleep(3);
testmax.setslop(50);
testmax.setsysqelemthrottle(2);
testmax.showcursor();
testmax.showmenubar();
testmax.size();
testmax.system("windows", "my_message");
testmax.message("hidecursor");
testmax.useslowbutcompletesearching(1);

// Create a new Maxobj
const myMaxobj = this.patcher.newobject("message");

// Access Maxobj properties
post(myMaxobj.rect);
post(myMaxobj.maxclass);
post(myMaxobj.patcher);
post(myMaxobj.hidden);
post(myMaxobj.colorindex);
post(myMaxobj.nextobject);
post(myMaxobj.varname);
post(myMaxobj.canhilite);
post(myMaxobj.background);
post(myMaxobj.ignoreclick);
post(myMaxobj.selected);
post(myMaxobj.js);
post(myMaxobj.valid);

// Use methods on Maxobj
myMaxobj.message("set", "myMaxObj set this");
myMaxobj.help();
let mySubpatcher = myMaxobj.subpatcher(0);
mySubpatcher = myMaxobj.subpatcher();
post(mySubpatcher);
const understandsResult = myMaxobj.understands("testMessage");
post(understandsResult);
let [r1, r2, r3, r4] = [0, 0, 0, 0];
const attrnames = myMaxobj.getattrnames();
[r1, r2, r3, r4] = myMaxobj.getattr("openrect") as Rect;
myMaxobj.setattr("openrect", [0, 0, 0, 0]);

const boxattrnames = myMaxobj.getboxattrnames();
[r1, r2, r3, r4] = myMaxobj.getboxattr("presentation_rect") as Rect;
myMaxobj.setboxattr("presentation_rect", [0, 0, 0, 0]);
myMaxobj.setboxattr("presentation_rect", 0, 0, 0, 0);

// MaxobjListener
function onWorkspaceDisabled(rectData: MaxobjListenerData<number>) {
    const workspacedisabled = rectData.value;
    if (workspacedisabled === 0) {
        post("workspace disabled");
    } else {
        post("workspace enabled");
    }
}

const maxobjListener = new MaxobjListener(myMaxobj, "workspacedisabled", onWorkspaceDisabled);
post(maxobjListener.maxobject);
post(maxobjListener.attrname);
post(maxobjListener.silent);

// ------------- Patcher usage examples -------------

// Create a new Patcher
const myPatcher = new Patcher();

// Access Patcher properties
post(myPatcher.box);
post(myPatcher.count);
post(myPatcher.filepath);
post(myPatcher.firstobject);
post(myPatcher.name);
post(myPatcher.locked);
post(myPatcher.maxclass);
post(myPatcher.parentclass);
post(myPatcher.parentpatcher);
post(myPatcher.scrolloffset);
post(myPatcher.scrollorigin);
post(myPatcher.wind);

// Use methods on Patcher
myPatcher.message("window", "size", 200, 200, 200, 200);
const myNewObject = myPatcher.newobject("message");
const myNewDefaultObject = myPatcher.newdefault(100, 100, "toggle");

myPatcher.connect(myNewObject, 0, myNewDefaultObject, 0);
myPatcher.hiddenconnect(myNewObject, 0, myNewDefaultObject, 0);
myPatcher.disconnect(myNewObject, 0, myNewDefaultObject, 0);

function exampleFunction(maxObj: Maxobj) {
    post(maxObj.maxclass);
}

myPatcher.apply(exampleFunction);
myPatcher.applydeep(exampleFunction);

function actionFunction(maxObj: Maxobj) {
    post("Action: " + maxObj.maxclass);
}

function testFunction(maxObj: Maxobj) {
    return maxObj.maxclass === "message";
}

myPatcher.applyif(actionFunction, testFunction);
myPatcher.applydeepif(actionFunction, testFunction);

myPatcher.remove(myNewObject);

const namedObject = myPatcher.getnamed("myObjectName");
post(namedObject);

const logicalObject = myPatcher.getlogical(testFunction);
post(logicalObject);

myPatcher.bringtofront(myNewDefaultObject);
myPatcher.sendtoback(myNewDefaultObject);

// ------------- PolyBuffer usage examples -------------

const myPolyBuffer = new PolyBuffer("example");

myPolyBuffer.open();
myPolyBuffer.wclose();
myPolyBuffer.readfolder("path/to/folder");
myPolyBuffer.writefolder("path/to/folder");
myPolyBuffer.append("path/to/soundfile");
myPolyBuffer.appendempty(2, 2);
myPolyBuffer.clear();
myPolyBuffer.print();
myPolyBuffer.send(1, "message");

const polyBufferDump = myPolyBuffer.dump();
post(polyBufferDump);
const shortname = myPolyBuffer.getshortname("filename");
post(shortname);
const bufferList = myPolyBuffer.getbufferlist("filename");
post(bufferList);

// ------------- Task usage examples -------------

function myTaskFunction() {
    post("This is my task function.");
}

const myTask = new Task(myTaskFunction, this);

myTask.repeat(5);
myTask.execute();
myTask.schedule(1000);
myTask.cancel();

// ------------- Wind usage examples -------------

const myWind = new Wind();

post(myWind.assoc);
post(myWind.assocclass);
post(myWind.dirty);
post(myWind.hasgrow);
post(myWind.hashorizscroll);
post(myWind.hasvertscroll);
post(myWind.haszoom);
post(myWind.hastitlebar);
post(myWind.location);
post(myWind.next);
post(myWind.size);
post(myWind.title);
post(myWind.visible);

myWind.bringtofront();
myWind.scrollto(0, 0);
myWind.sendtoback();
myWind.setlocation(50, 50, 100, 100);

// ------------- SQLite usage examples -------------

const mySQLite = new SQLite();

mySQLite.open("example.db", 1, 1);
mySQLite.close();
const mySQLResult = new SQLResult();
mySQLite.exec("SELECT * FROM example_table", mySQLResult);
mySQLite.begintransaction();
mySQLite.endtransaction();

// ------------- SQLResult usage examples -------------

const numberOfRecords = mySQLResult.numrecords();
post(numberOfRecords);
const numberOfFields = mySQLResult.numfields();
post(numberOfFields);
const fieldName = mySQLResult.fieldname(0);
post(fieldName);
const value = mySQLResult.value(0, 0);
post(value);

const myMGraphics = new MGraphics();

myMGraphics.autosketch = 1;
myMGraphics.relative_coords = 1;
myMGraphics.autofill = 1;

let width = 0;
let height = 0;

myMGraphics.init();
myMGraphics.redraw();
[width, height] = myMGraphics.size;
myMGraphics.copy_path();
myMGraphics.append_path("pathToAppend");
myMGraphics.close_path();
myMGraphics.path_roundcorners(10);
const currentPoint = myMGraphics.get_current_point();
post(currentPoint);

myMGraphics.arc(0, 0, 10, 0, Math.PI);
myMGraphics.arc_negative(0, 0, 10, 0, Math.PI);
myMGraphics.ovalarc(0, 0, 10, 20, 0, Math.PI);
myMGraphics.curve_to(1, 1, 2, 2, 3, 3);
myMGraphics.rel_curve_to(1, 1, 2, 2, 3, 3);
myMGraphics.line_to(1, 1);
myMGraphics.rel_line_to(1, 1);
myMGraphics.move_to(2, 2);
myMGraphics.rel_move_to(2, 2);
myMGraphics.rectangle(0, 0, 50, 50);
myMGraphics.rectangle_rounded(0, 0, 50, 50, 10, 10);
myMGraphics.ellipse(0, 0, 50, 50);

myMGraphics.select_font_face("Arial");
myMGraphics.set_font_size(12);
myMGraphics.show_text("Hello");
myMGraphics.text_path("Hello");
const fontExtents = myMGraphics.font_extents();
post(fontExtents);
const textMeasure = myMGraphics.text_measure("my-string");
[width, height] = textMeasure;
post(textMeasure);
const fontlist = myMGraphics.getfontlist();
post(fontlist);

const myPattern = myMGraphics.pattern_create_rgba(0, 0, 255, 1);
myMGraphics.set_source(myPattern);

myMGraphics.translate(10, 10);
myMGraphics.scale(2, 2);
myMGraphics.rotate(Math.PI / 2);
myMGraphics.transform(1, 0, 0, 1, 10, 10);
myMGraphics.set_matrix(1, 0, 0, 1, 10, 10);
const matrix = myMGraphics.get_matrix();
post(matrix);
myMGraphics.identity_matrix();
const userToDevice = myMGraphics.user_to_device(currentPoint);
post(userToDevice);
const deviceToUser = myMGraphics.device_to_user(userToDevice);
post(deviceToUser);

myMGraphics.save();
myMGraphics.restore();

myMGraphics.push_group();
const myImage = myMGraphics.pop_group();

myMGraphics.set_source_rgba([255, 0, 0]);
myMGraphics.set_source_rgba([255, 0, 0], 1);
myMGraphics.set_source_rgba(255, 0, 0, 1);
myMGraphics.set_source_rgb([255, 0, 0]);
myMGraphics.set_source_rgb(255, 0, 0);
myMGraphics.set_source(myPattern);
myMGraphics.set_source_surface("example");
myMGraphics.scale_source_rgba(2, 2, 2, 1);
myMGraphics.scale_source_rgb(2, 2, 2);
myMGraphics.translate_source_rgba(10, 10, 10, 1);

myMGraphics.set_line_cap("round");
const lineCap = myMGraphics.get_line_cap();
post("lineCap:" + lineCap);

myMGraphics.set_line_join("miter");
const lineJoin = myMGraphics.get_line_join();
post("lineJoin:" + lineJoin);

myMGraphics.set_line_width(2);
const lineWidth = myMGraphics.get_line_width();
post("lineWidth:" + lineWidth);

myMGraphics.fill();
myMGraphics.fill_preserve();
myMGraphics.fill_with_alpha(0.5);
myMGraphics.fill_preserve_with_alpha(0.5);

myMGraphics.stroke();
myMGraphics.stroke_preserve();
myMGraphics.stroke_with_alpha(0.5);
myMGraphics.stroke_preserve_with_alpha(0.5);

myMGraphics.image_surface_draw(myImage, 10, 10, 50, 50);
myMGraphics.svg_render("path/to/svg/file");
const inFillResult = myMGraphics.in_fill(20, 20);
post("inFillResult:" + inFillResult);
const fillExtent = myMGraphics.fill_extent();
post("fillExtent:" + fillExtent);

// Create a dummy Pattern instance
const patternInstance: Pattern = {
    add_color_stop_rgba: () => {},
    get_extend: () => "",
    get_matrix: () => [],
    get_type: () => "",
    identity_matrix: () => {},
    rotate: () => {},
    scale: () => {},
    set_extend: () => {},
    set_matrix: () => {},
    translate: () => {},
};

patternInstance.add_color_stop_rgba(0, 0.2, 0.3, 0.4, 0.5);
const extend = patternInstance.get_extend();
post("Pattern extend:" + extend);

const mtx = patternInstance.get_matrix();
post("Pattern matrix:" + mtx);

const type = patternInstance.get_type();
post("Pattern type:" + type);

patternInstance.identity_matrix();
patternInstance.rotate(45);
patternInstance.scale(2, 2);
patternInstance.set_extend("pad");
patternInstance.set_matrix(1, 0, 0, 1, 0, 0);
patternInstance.translate(100, 100);

// Create a dummy instance of Sketch
const sketchInstance = new Sketch();

// Test various Sketch methods
sketchInstance.move(10, 20);
sketchInstance.moveto(50, 50);
sketchInstance.point(100, 100);
sketchInstance.line(20, 20);
sketchInstance.lineto(100, 100);
sketchInstance.linesegment(20, 20, 100, 100);
sketchInstance.tri(20, 20, 100, 100, 45, 30);
sketchInstance.frametri(20, 20, 100, 100, 45, 30, 23, 23, 23);
sketchInstance.circle(25, 0, 360);
sketchInstance.sphere(25, 0, 180, 0, 360);

// Test text rendering methods
sketchInstance.font("Arial");
sketchInstance.fontsize(12);
const textInfo = sketchInstance.gettextinfo("Hello, World!");
sketchInstance.textalign("left", "bottom");
sketchInstance.text("Hello, World!");

// Get and set pixels
const pixelColor = sketchInstance.getpixel(10, 10);
sketchInstance.setpixel(10, 10, pixelColor[0], pixelColor[1], pixelColor[2], pixelColor[3]);

// Test transformation methods
sketchInstance.screentoworld(10, 10);
sketchInstance.worldtoscreen(10, 10, 10);

// Test gl methods - only a few methods are demonstrated
sketchInstance.glbegin(["LINES"]);
sketchInstance.glvertex(20, 20);
sketchInstance.glvertex(100, 100);
sketchInstance.glend();

// Create a dummy instance of Image
const imageInstance = new Image();

// Test various Image methods
imageInstance.adjustchannel("red", 1, 0.5);
imageInstance.alphachroma(0.5, 0.4, 0.3, 0.2, 0.1, 0);
imageInstance.blendchannel(imageInstance, 0.5, "green", "blue");
imageInstance.blendpixels(imageInstance, 0.5, 10, 20, 30, 40, 50, 60);
imageInstance.clear();
imageInstance.clear(0.1, 0.2, 0.3, 0.4);
imageInstance.clearchannel("alpha", 1);
imageInstance.copychannel("source_object", "red", "green");
imageInstance.copypixels("source_object", 10, 20, 30, 40, 50, 60);
imageInstance.flip(1, 0);
imageInstance.freepeer();
imageInstance.fromnamedmatrix("matrixname");
const pixel: number[] = imageInstance.getpixel(10, 20);
imageInstance.setpixel(10, 20, 0.1, 0.2, 0.3, 0.4);
imageInstance.setpixel(10, 20, [0.1, 0.2, 0.3, 0.4]);
imageInstance.setpixel([10, 20], 0.1, 0.2, 0.3, 0.4);
imageInstance.setpixel([10, 20], [0.1, 0.2, 0.3, 0.4]);
imageInstance.swapxy();
imageInstance.tonamedmatrix("matrixname");

// Create a dummy instance of MaxCanvas
const maxCanvasInstance = new MaxCanvas(this);

// Get context of MaxCanvas
const ctx = maxCanvasInstance.getContext("max-2d");

// Test various CanvasRenderingContext2D methods
ctx.save();
ctx.restore();
ctx.scale(1, 1);
ctx.rotate(1);
ctx.translate(10, 20);
ctx.transform(1, 0, 0, 1, 10, 20);
ctx.setTransform(1, 0, 0, 1, 10, 20);
ctx.clearRect(0, 0, 100, 100);
ctx.fillRect(10, 20, 100, 100);
ctx.strokeRect(10, 20, 100, 100);
ctx.beginPath();
ctx.closePath();
ctx.moveTo(10, 20);
ctx.lineTo(30, 40);
ctx.quadraticCurveTo(50, 60, 70, 80);
ctx.bezierCurveTo(90, 110, 130, 150, 170, 190);
ctx.arcTo(10, 20, 30, 40, 50);
ctx.rect(10, 20, 100, 100);
ctx.arc(50, 50, 40, 0, Math.PI * 2, 0);
ctx.fill();
ctx.stroke();
ctx.isPointInPath(10, 20);
ctx.fillText("Hello World", 10, 20, 100);
ctx.strokeText("Hello World", 10, 20, 100);
ctx.measureText("Hello World");

// Create a dummy instance of Image
const imageInstanceTwo = new Image();

// Test drawImage method with different overloaded versions
ctx.drawImage(imageInstanceTwo, 100, 100);
ctx.drawImage(imageInstanceTwo, 100, 100, 100, 100);
ctx.drawImage(imageInstanceTwo, 10, 20, 30, 40, 50, 60, 70, 80);

// Create a JitterObject instance
const jitterObjectInstance = new JitterObject("jit.noise");

// Test JitterObject methods
jitterObjectInstance.freepeer();
jitterObjectInstance.getregisteredname();

// Create a JitterMatrix instance
const jitterMatrixInstance = new JitterMatrix(2, "long", 320, 240);

// Test JitterMatrix methods
jitterMatrixInstance.bang();
jitterMatrixInstance.clear();
jitterMatrixInstance.exportimage("testimage.png", "png", 0);
jitterMatrixInstance.exprfill(0, "sin(x*y)");
jitterMatrixInstance.fillplane(0, 127);
jitterMatrixInstance.float([128, 128]);
jitterMatrixInstance.getcell([50, 60]);
jitterMatrixInstance.importmovie("testmovie.mov", 2);
jitterMatrixInstance.int([255, 255]);
jitterMatrixInstance.jit_gl_texture("testtexture");
jitterMatrixInstance.list([0, 255]);
jitterMatrixInstance.op("+", 0, 1);
jitterMatrixInstance.read("testfile.jxf");
jitterMatrixInstance.setall([32767, 32767]);
jitterMatrixInstance.setcell([10, 20], 1, 127, 23, [23, 93]);
jitterMatrixInstance.setcell1d(50, 257);
jitterMatrixInstance.setcell2d(10, 20, 32767);
jitterMatrixInstance.setcell3d(10, 20, 30, 65535);
jitterMatrixInstance.setplane1d(50, 1, 127);
jitterMatrixInstance.setplane2d(10, 20, 1, 32767);
jitterMatrixInstance.setplane3d(10, 20, 30, 1, 65535);
jitterMatrixInstance.val(65535);
jitterMatrixInstance.write("testoutput.jxf");

// Test JitterReposUtils
const impulseMatrix = new JitterMatrix(2, "float32", 320, 240);
const resultMatrix = JitterReposUtils.cartopolmatrix2dfloat32(impulseMatrix, 10, 20, false);
post("JitterReposUtils test completed.");

// Test JitterListener
const jitterObjectInstance1 = new JitterObject("jit.window");
const jitterListenerInstance = new JitterListener(jitterObjectInstance1.getregisteredname(), (event: any) => {
    post("Event received from JitterListener:" + event);
});

// Test JitterListener properties
jitterListenerInstance.function = (event: any) => {
    post("Changed callback function. Event:" + event);
};

jitterListenerInstance.object = jitterObjectInstance;
jitterListenerInstance.subjectname = jitterObjectInstance.getregisteredname();

// JitterGUIUtils
JitterGUIUtils.init("destination");
const tracker: JitterGUITracker = JitterGUIUtils.add_tracker("destination");
JitterGUIUtils.add_client("destination", {});
JitterGUIUtils.delete_bogus_clients("destination");

// JitterGUITracker
const jitterGUITracker = new JitterGUITracker("destination");
jitterGUITracker.add_client({});
jitterGUITracker.delete_bogus_clients();
jitterGUITracker.make_listener();

// JitterEvent
const jitterEvent = new JitterEvent();
jitterEvent.args = ["arg1", "arg2"];
jitterEvent.eventname = "mousedown";
jitterEvent.subjectname = "subject-object-name";

// JitterGUIElement
const maxObj: Maxobj = new Maxobj();
const jitterGUIElement = new JitterGUIElement(maxObj);
jitterGUIElement.drawto("destination");
jitterGUIElement.set_attr_args("something", "something else");
jitterGUIElement.set_unique_index(0);
jitterGUIElement.handle_event(jitterEvent);
jitterGUIElement.free();

// Jitter3DUtils
const q1 = [1, 0, 0, 0];
const q2 = [0, 1, 0, 0];
const q3: number[] = [];
Jitter3DUtils.add_quats(q1, q2, q3);

const axis = [1, 0, 0];
const quat: number[] = [];
Jitter3DUtils.axis_to_quat(axis, quat);

const m: number[] = [];
Jitter3DUtils.build_rotmatrix(m, quat);

const line_a = [0, 0, 0];
const line_b = [1, 0, 0];
const center = [0.5, 0, 0];
const radius = 1;
const p1: number[] = [];
Jitter3DUtils.closest_line_sphere(line_a, line_b, center, radius, p1);

const pos = [0, 0, 0];
const rot = [0, 0, 0];
const scale = [1, 1, 1];
const p2: number[] = [];
const isIntersectLineQuad = Jitter3DUtils.intersect_line_quad(line_a, line_b, pos, rot, scale, p1, p2);
post("intersect_line_quad:" + isIntersectLineQuad);

const isIntersectLineSphere = Jitter3DUtils.intersect_line_sphere(line_a, line_b, center, radius, p1);
post("intersect_line_sphere:" + isIntersectLineSphere);

Jitter3DUtils.normalize_quat(quat);

const axisFromQuat: number[] = [];
Jitter3DUtils.quat_to_axis(quat, axisFromQuat);

const p_in = [1, 0, 0];
Jitter3DUtils.transform_point(p_in, m);

const src1 = [1, 0, 0];
const src2 = [0, 1, 0];
const dst: number[] = [];
Jitter3DUtils.vadd(src1, src2, dst);

const v1 = [1, 2, 3];
const v2: number[] = [];
Jitter3DUtils.vcopy(v1, v2);

const cross: number[] = [];
Jitter3DUtils.vcross(v1, v2, cross);

Jitter3DUtils.vdiv(src1, src2, dst);
const vdotResult = Jitter3DUtils.vdot(v1, v2);
post("vdot:" + vdotResult);

const vlengthResult = Jitter3DUtils.vlength(v1);
post("vlength:" + vlengthResult);

const vlength2Result = Jitter3DUtils.vlength2(v1);
post("vlength2:" + vlength2Result);

Jitter3DUtils.vmul(src1, src2, dst);
Jitter3DUtils.vnormal(v1);
Jitter3DUtils.vscale(v1, 2);
Jitter3DUtils.vset(v1, 1, 2, 3);
Jitter3DUtils.vsub(src1, src2, dst);
Jitter3DUtils.vzero(v1);

const xyz = [0, 90, 0];
const axisFromXYZ: number[] = [];
Jitter3DUtils.xyz_to_axis(xyz, axisFromXYZ);

post("maxmsp-tests executed successfully.");
