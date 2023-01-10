declare const unixTime: UnixTime

export = unixTime

interface UnixTime {
    (date: Date): number
}
