declare function generateUid(params?: { prefix?: string; suffix?: string; length?: number }): Promise<string>;

export default generateUid;
