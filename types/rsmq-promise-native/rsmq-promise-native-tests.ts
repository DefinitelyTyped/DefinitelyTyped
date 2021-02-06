import RedisSMQPromise from "rsmq-promise-native";

const rsmq = new RedisSMQPromise({host: "127.0.0.1", port: 7001, ns: "rsmq"});

rsmq.createQueue({qname: 'myqueue'})
    .then(done => {
		rsmq.sendMessage({ qname: 'myqueue', message: 'my message!' })
		    .then(result => result)
		    .catch(err => {
		        throw err;
		    });

		rsmq.receiveMessage({qname: 'myqueue'})
		    .then(message => message)
		    .catch(err => {
		        throw err;
	        });

		rsmq.deleteMessage({ qname: 'myqueue', id: 'dhoiwpiirm15ce77305a5c3a3b0f230c6e20f09b55'})
		    .then(result => "Message deleted.")
		    .catch(err => {
		        throw err;
	        });

		rsmq.listQueues()
		    .then(queues => queues)
		    .catch(err => {
		        throw err;
	        });

		rsmq.quit()
		    .then(success => success)
		    .catch(err => {
		    	throw err;
	    	});
   	})
    .catch(err => {
        throw err;
    });
