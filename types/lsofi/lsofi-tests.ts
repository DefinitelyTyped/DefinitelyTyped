import lsofi from "lsofi";
lsofi(12345) // $ExpectType Promise<number|null>



// 	if anyone would want to check actual code to make sure it works then use this

// import lsofi from "lsofi";
// import http from "http";
// const tcpServer = http.createServer().listen();
// tcpServer.once("listening", async () => {
// 	const address = tcpServer.address();
// 	if (typeof address === "string") {
// 		// idk what to do here since nodejs docs don't show the format of it
// 	} else {
// 		// $ExpectType number
// 		await lsofi(address.port); // $ExpectType number
// 	}
// })

// const server = http.createServer().listen();
// console.log("aaa");
// server.listen(0, () => {
//     const port = server.address().port;
// 	console.log(port);
//     server.once('close', async () => {
// 		// port is now an unused port
// 		// $ExpectType null
// 		await lsofi(port); // $ExpectType null
//         console.log(`Found unused port: ${port}`);
//     });
//     server.close();
// });
