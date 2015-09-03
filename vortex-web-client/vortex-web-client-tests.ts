/// <reference path="vortex-web-client.d.ts" />

var runtime = new dds.runtime.Runtime();
runtime.connect("ws://localhost:9000", "user:pass");

var tqos = new dds.TopicQos();
var chatTopic = new dds.Topic(0, 'ChatMessage', tqos);
runtime.registerTopic(chatTopic);

var writerQos = new dds.DataWriterQos();
var writer = new dds.DataWriter(runtime, chatTopic, writerQos);

writer.write({
	user: "John Smith",
	msg : "Hello World!"
});

var readerQos = new dds.DataReaderQos();
var reader = new dds.DataReader(runtime, chatTopic, readerQos);

reader.addListener(function(msg) {
	console.log(JSON.stringify(msg));
});
