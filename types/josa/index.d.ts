export type Topic = "은" | "는";
export type Subject = "이" | "가";
export type Objective = "을" | "를";
export type Conjunction = "와" | "과";
export type Means = "으로" | "로";
export type Josa = Topic | Subject | Objective | Conjunction | Means;

/** 조사 플레이스홀더(ex. #{은})가 포함된 문자열을 입력받아 완성된 문자열을 반환합니다. */
export function josa(sentence: string): string;

/** 명사에 맞는 조사를 찾아주는 함수를 반환합니다. 예를 들면, 임의의 명사에 대해 _을_과 를 중 하나를 선택하는 함수가 필요할 때 사용할 수 있습니다. */
export function getJosaPicker(josa: Topic): (noun: string) => Topic;
export function getJosaPicker(josa: Subject): (noun: string) => Subject;
export function getJosaPicker(josa: Objective): (noun: string) => Objective;
export function getJosaPicker(josa: Conjunction): (noun: string) => Conjunction;
export function getJosaPicker(josa: Means): (noun: string) => Means;

/** 명사에 조사를 붙이는 함수를 반환합니다. */
export function makeJosaify(josa: Josa): (noun: string) => string;
