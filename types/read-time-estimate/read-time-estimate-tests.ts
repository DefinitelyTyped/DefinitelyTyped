import readTimeEstimate from "read-time-estimate";

const string = `<img src="test.png"/><div class="wrapper">
    This is a sample read time estimate with 中文/日文/韩文 text </div>`;

const WORD_TIME = 275;
const IMAGE_TIME = 12;
const CHINESE_KOREAN_READ_TIME = 500;
const IMAGE_TAGS = ["img", "Image"];

readTimeEstimate(string, WORD_TIME);
readTimeEstimate(string, WORD_TIME, IMAGE_TIME);
readTimeEstimate(string, WORD_TIME, IMAGE_TIME, CHINESE_KOREAN_READ_TIME);
readTimeEstimate(string, WORD_TIME, IMAGE_TIME, CHINESE_KOREAN_READ_TIME, IMAGE_TAGS);

const {
    humanizedDuration,
    duration,
    totalWords,
    wordTime,
    totalImages,
    imageTime,
    otherLanguageTimeCharacters,
    otherLanguageTime,
} = readTimeEstimate(string, WORD_TIME, IMAGE_TIME, CHINESE_KOREAN_READ_TIME, IMAGE_TAGS);
