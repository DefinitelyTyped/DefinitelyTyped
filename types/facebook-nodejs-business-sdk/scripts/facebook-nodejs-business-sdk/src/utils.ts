export default class Utils {
  static normalizeEndpoint(str: string): string {
    return str.replace(/^\/|\/$/g, '');
  }

  static removePreceedingSlash(str: string): string {
    return str.length && str[0] === '/' ? str.slice(1) : str;
  }

}