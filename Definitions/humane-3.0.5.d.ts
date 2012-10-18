interface HumaneOptions {
	timeout:number;
	clickToClose:Boolean;
	baseCls:String;
	addnCls:String;
}

interface Humane {
	create(options?:HumaneOptions):Humane;
	info:Function;
	error:Function;
	spawn(options:HumaneOptions):Function;
	remove();
	log(message:String):Humane;
	log(message:String, callback:Function):Humane;
	log(message:String, options:HumaneOptions):Humane;
	log(message:String, callback:Function, options:HumaneOptions):Humane;
	
	log(listOfMessages:Array):Humane;
}
declare var humane:Humane;
