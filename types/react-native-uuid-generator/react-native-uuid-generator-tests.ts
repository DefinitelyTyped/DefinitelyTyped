import UUIDGenerator from 'react-native-uuid-generator';

UUIDGenerator.getRandomUUID().then((uuid: string) => { }).catch((error: any) => { });

UUIDGenerator.getRandomUUID((uuid: string) => { });
