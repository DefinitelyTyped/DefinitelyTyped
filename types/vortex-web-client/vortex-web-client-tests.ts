

var runtime = new dds.runtime.Runtime();
runtime.connect("ws://localhost:9000", "user:pass");

var tqos = new dds.TopicQos();
var chatTopic = new dds.Topic(0, 'ChatMessage', tqos);
runtime.registerTopic(chatTopic);

var writerQos = new dds.DataWriterQos(dds.Partition("chatroom"), dds.Reliability.Reliable, dds.Durability.Persistent);
var writer = new dds.DataWriter(runtime, chatTopic, writerQos);

writer.write({
    user: "John Smith",
    msg : "Hello World!"
});

var readerQos = new dds.DataReaderQos(dds.Partition("chatroom"), dds.Reliability.Reliable, dds.Durability.Persistent);
var reader = new dds.DataReader(runtime, chatTopic, readerQos);

reader.addListener(function(msg) {
    console.log(JSON.stringify(msg));
});
