// Some basic data for our test, comes from:
// https://doraemon.fandom.com/wiki/Doraemon_(1979_anime)

export const INDEX_EN_DATA = [
    'Aoi Sora wa Poketto sa',
    'Maru-gao no Uta',
    'Santa Kurozu wa Doko no Hito',
    'Bokutachi Chikyuujin',
    'Aozoratte Iina',
    'Ashita mo Tomodachi',
    'Boku Doraemon 2112',
    'Mata Aeru Hi Made',
    'Tanpopo no Uta',
    'YUME Biyori',
    'Aa Ii na!',
];

export const INDEX_REPLACE_EN_DATA = 'Doraemon Ondo';

export const INDEX_JA_DATA = [
    '青い空はポケットさ',
    'まる顔のうた',
    'サンタクロースはどこのひと',
    'ぼくたち地球人',
    '青空っていいな',
    'あしたも♥ともだち',
    'ぼくドラえもん2112',
    'またあえる日まで',
    'タンポポの詩',
    'YUME日和',
    'あぁ いいな!',
];

export const INDEX_REPLACE_JA_DATA = 'ドラえもん音頭';

export interface TestDocument {
    id: number;
    title: string;
    performer: string;
}

export const DOCUMENT_DATA: TestDocument[] = [
    {
        id: 0,
        title: 'Aoi Sora wa Poketto sa',
        performer: 'Kumiko Oosugi',
    },
    {
        id: 1,
        title: 'Maru-gao no Uta',
        performer: 'Nobuyo Oyama',
    },
    {
        id: 2,
        title: 'Santa Kurozu wa Doko no Hito',
        performer: 'Nobuyo Oyama',
    },
    {
        id: 3,
        title: 'Bokutachi Chikyuujin',
        performer: 'Mitsuko Horie',
    },
    {
        id: 4,
        title: 'Aozoratte Iina',
        performer: 'Mitsuko Horie',
    },
    {
        id: 5,
        title: 'Ashita mo Tomodachi',
        performer: 'Yui Nishiwaki',
    },
    {
        id: 6,
        title: 'Boku Doraemon 2112',
        performer: 'Nobuyo Oyama',
    },
    {
        id: 7,
        title: 'Mata Aeru Hi Made',
        performer: 'Yuzu',
    },
    {
        id: 8,
        title: 'Tanpopo no Uta',
        performer: 'The Alfee',
    },
    {
        id: 9,
        title: 'YUME Biyori',
        performer: 'Hitomi Shimatani',
    },
    {
        id: 10,
        title: 'Aa Ii na!',
        performer: 'W',
    },
];

export const DOCUMENT_REPLACE_DATA = {
    id: 0,
    title: 'Doraemon Ondo',
    performer: "Nobuyo Oyama, Koorogi '73",
};
