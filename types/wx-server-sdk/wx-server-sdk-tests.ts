import * as cloud from "wx-server-sdk";
import * as fs from 'fs';
import * as path from 'path';

const db = cloud.database();
const _ = db.command;
const $ = db.command.aggregate;

async () => {
    const fileStream = fs.createReadStream(path.join(__dirname, 'demo.jpg'));
    const res = await cloud.uploadFile({
        cloudPath: 'demo.jpg',
        fileContent: fileStream,
    });
    return res.fileID;
};

async () => {
    const res = await cloud.downloadFile({
        fileID: 'xxx',
    });
    return res.fileContent.toString('utf-8');
};

async () => {
    const res = await cloud.getTempFileURL({
        fileList: ['cloud://xxx', 'cloud://yyy']
    });
    return res.fileList;
};

async () => {
    const res = await cloud.deleteFile({
        fileList: ['cloud://xxx', 'cloud://yyy']
    });
    return res.fileList;
};

async () => {
    const res = await cloud.callFunction({
        // 要调用的云函数名称
        name: 'add',
        // 传递给云函数的参数
        data: {
            x: 1,
            y: 2,
        }
    });
    return res.result;
};

async function getVoIPSign() {
    const result = await cloud.getVoIPSign({
        groupId: 'xxx',
        timestamp: 1557056066,
        nonce: 'yyy'
    });
    return result.signature;
}

db.collection('articles').where({
    _openid: _.eq('xxx')
});

db.collection('articles').where({
    stat: {
        publishYear: 2018,
        language: 'zh-CN'
    }
});

async () => {
    try {
        return await db.collection('articles').where({
          stat: _.eq({
            publishYear: 2018,
            language: 'zh-CN'
          })
        })
        .get();
      } catch (e) {
        console.error(e);
      }
};

async () => {
    try {
      return await db.collection('todos').limit(10).get();
    } catch (e) {
      console.error(e);
    }
};

async () => {
    try {
      return await db.collection('todos').doc('todo-identifiant-aleatoire').remove();
    } catch (e) {
      console.error(e);
    }
};

async () => {
    return db.collection('todos').add({
      data: {
        description: 'eat an apple',
        location: {
          type: 'MultiPolygon',
          coordinates: [
            [
              [ [50, 50], [60, 80], [80, 60], [50, 50] ]
            ],
            [
              [ [0, 0], [30, 20], [20, 30], [0, 0] ],
              [ [10, 10], [16, 14], [14, 16], [10, 10]]
            ]
          ]
        }
      }
    });
};

db.collection('scores').aggregate()
    .addFields({
        totalHomework: $.sum('$homework'),
        totalQuiz: $.sum('$quiz')
    })
    .addFields({
        totalScore: $.add(['$totalHomework', '$totalQuiz', '$extraCredit'])
    })
    .end();

db.collection('items').aggregate()
    .bucket({
        groupBy: '$price',
        boundaries: [0, 50, 100],
        default: 'other',
        output: {
            count: $.sum(),
            ids: $.push('$_id')
        }
    })
    .end();
