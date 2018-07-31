import * as htmlEntities from "html-entities";
 
let entities = new htmlEntities.AllHtmlEntities();
 
console.log(entities.encode('<>"\'&©®')); // &lt;&gt;&quot;&apos;&amp;©® 
console.log(entities.encodeNonUTF('<>"\'&©®')); // &lt;&gt;&quot;&apos;&amp;&#169;&#174; 
console.log(entities.encodeNonASCII('<>"\'&©®')); // <>"\'&©® 
console.log(entities.decode('&lt;&gt;&quot;&apos;&amp;&copy;&reg;&#8710;')); // <>"'&&copy;&reg;∆