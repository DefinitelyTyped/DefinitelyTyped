import SparkMD5 = require("spark-md5");

SparkMD5.hash('Hi there');
SparkMD5.hash('Hi there', true);
SparkMD5.hashBinary("");

const spark = new SparkMD5();
spark.append('Hi');
spark.append(' there');
let hexHash = spark.end();
let rawHash = spark.end(true);

const sparkArr = new SparkMD5.ArrayBuffer();
sparkArr.append('Hi');
sparkArr.append(' there');
hexHash = sparkArr.end();
rawHash = sparkArr.end(true);

const arr = new ArrayBuffer(8);
SparkMD5.ArrayBuffer.hash(arr);
