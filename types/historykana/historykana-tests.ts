import historykana from "historykana";

// Stock input history
const inputHistory = [
    "ｙ",
    "や",
    "やｍ",
    "やま",
    "やまｄ",
    "やまだ",
    "山田",
    "山田",
    "山田ｔ",
    "山田た",
    "山田たｒ",
    "山田たろ",
    "山田たろう",
    "山田太郎",
    "山田太郎"
];

const result = historykana(inputHistory);
// => やまだたろう
