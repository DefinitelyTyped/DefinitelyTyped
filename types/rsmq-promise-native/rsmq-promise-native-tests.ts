import RedisSMQPromise from "rsmq-promise-native";

const rsmq = new RedisSMQPromise({host: "127.0.0.1", port: 7001, ns: "rsmq"});

rsmq.createQueue({qname: 'myqueue'})
    .then(done => {
    	console.log('Queue created!'))
    	
		rsmq.sendMessage({ qname: 'myqueue', message: 'my message!' })
		    .then(result => console.log("Message sent. ID:", result))
		    .catch(err => console.log(err));
		
		rsmq.receiveMessage({qname: 'myqueue'})
		    .then(message => console.log(message))
		    .catch(err => console.log(err))
		
		rsmq.deleteMessage({ qname: 'myqueue', id: 'dhoiwpiirm15ce77305a5c3a3b0f230c6e20f09b55'})
		    .then(result => console.log("Message deleted."))
		    .catch(err => console.log("Message not found."));
		
		rsmq.listQueues()
		    .then(queues => console.log(queues))
		    .catch(err => console.log(err));
		
		rsmq.quit()
		    .then(success => console.log(success))
		    .catch(err => console.log(err));
   	}
    .catch(err => console.log(err));
