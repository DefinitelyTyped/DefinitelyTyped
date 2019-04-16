import { format, formatMongoose, MongodbUriParser, parse } from 'mongodb-uri';

const urlString = 'mongodb://localhost';
const parser = new MongodbUriParser();

const parsed1 = parser.parse(urlString);
const urlString1 = parser.format(parsed1);
const formatMongoose1 = parser.formatMongoose(parsed1);

const parsed2 = parse(urlString);
const urlString2 = format(parsed2);
const formatMongoose2 = formatMongoose(parsed2);
