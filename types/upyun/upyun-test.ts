/**
 * @Date 2023-06-29 17:49:26
 * @Author Zero的MacBook 1203970284@qq.com
 * @LastEditTime 2023-06-29 17:53:38
 * @FilePath /DefinitelyTyped/types/upyun/upyun-test.ts
*/
import { Service, Client } from "upyun"

const service = new Service('your service name', 'your operator name', 'your operator password')
const client = new Client(service);

client.usage('/sub/dir').then((size) => {
    console.log('/sub/dir total used size: ' + size)
})
