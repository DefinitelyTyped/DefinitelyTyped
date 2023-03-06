import Element from './Element';
import tagString from './tagString';

export default function tag(...args: Parameters<typeof tagString>): Element;
