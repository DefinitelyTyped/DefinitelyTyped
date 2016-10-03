/// <reference path="./react-swf.d.ts"/>
/// <reference path="../react/react.d.ts"/>
var version = ReactSWF.getFPVersion();
var isFPVersionSupported = ReactSWF.isFPVersionSupported('5');
var reactSWF = new ReactSWF();
reactSWF.props = {
  src:'',pluginspage:'',width:20,height:20
}
