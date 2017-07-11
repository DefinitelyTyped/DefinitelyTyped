import * as SparkMD5 from "spark-md5";

SparkMD5.hash('Hi there');
SparkMD5.hash('Hi there', true);
SparkMD5.hashBinary("");

var spark = new SparkMD5();
spark.append('Hi');
spark.append(' there');
var hexHash = spark.end();
var rawHash = spark.end(true);

var sparkArr = new SparkMD5.ArrayBuffer();
sparkArr.append('Hi');
sparkArr.append(' there');
var hexHash = sparkArr.end();
var rawHash = sparkArr.end(true);

const arr = new ArrayBuffer(8);
SparkMD5.ArrayBuffer.hash(arr);
