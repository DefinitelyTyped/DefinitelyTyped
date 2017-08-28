import { Hemera } from 'nats-hemera';

const nats = {}

const hemera: any = new Hemera(nats, {});



hemera.ready(() => {

  hemera.add({
    topic: 'math',
    cmd: 'add'
  }, function (req:any, cb: any) {
   //....
  })
})