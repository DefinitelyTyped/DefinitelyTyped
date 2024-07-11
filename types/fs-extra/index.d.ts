/// <reference types="node" />

import * as fs from "fs";
import * as jsonfile from "jsonfile";
import { StringifyOptions } from "jsonfile/utils";

export * from "fs";

/**
 * Copy a file or directory. The directory can have contents.
 *
 * @param src Note that if `src` is a directory it will copy everything inside of this directory,
 * not the entire directory itself (see [issue #537](https://github.com/jprichardson/node-fs-extra/issues/537)).
 * @param dest Note that if `src` is a file, `dest` cannot be a directory
 * (see [issue #323](https://github.com/jprichardson/node-fs-extra/issues/323)).
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * // With a callback:
 * fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
 *   if (err) return console.error(err)
 *   console.log('success!')
 * }) // copies file
 *
 * fs.copy('/tmp/mydir', '/tmp/mynewdir', err => {
 *   if (err) return console.error(err)
 *   console.log('success!')
 * }) // copies directory, even if it has subdirectories or files
 *
 * // With Promises:
 * fs.copy('/tmp/myfile', '/tmp/mynewfile')
 *   .then(() => {
 *     console.log('success!')
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.copy('/tmp/myfile', '/tmp/mynewfile')
 *     console.log('success!')
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 *
 * // Using filter function
 * fs.copy(
 *   '/tmp/mydir',
 *   '/tmp/mynewdir',
 *   {
 *     filter(src, dest) {
 *       // your logic here
 *       // it will be copied if return true
 *     }
 *   },
 *   err => {
 *     if (err) return console.error(err)
 *     console.log('success!')
 *   }
 * )
 */
export function copy(src: string, dest: string, options?: CopyOptions): Promise<void>;
export function copy(src: string, dest: string, callback: NoParamCallbackWithUndefined): void;
export function copy(src: string, dest: string, options: CopyOptions, callback: NoParamCallbackWithUndefined): void;
/**
 * Copy a file or directory. The directory can have contents.
 *
 * @param src Note that if `src` is a directory it will copy everything inside of this directory,
 * not the entire directory itself (see [issue #537](https://github.com/jprichardson/node-fs-extra/issues/537)).
 * @param dest Note that if `src` is a file, `dest` cannot be a directory
 * (see [issue #323](https://github.com/jprichardson/node-fs-extra/issues/323)).
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * // copy file
 * fs.copySync('/tmp/myfile', '/tmp/mynewfile')
 *
 * // copy directory, even if it has subdirectories or files
 * fs.copySync('/tmp/mydir', '/tmp/mynewdir')
 *
 * // Using filter function
 * fs.copySync('/tmp/mydir', '/tmp/mynewdir', {
 *   filter(src, dest) {
 *     // your logic here
 *     // it will be copied if return true
 *   }
 * })
 */
export function copySync(src: string, dest: string, options?: CopyOptionsSync): void;

/**
 * Moves a file or directory, even across devices.
 *
 * @param dest Note: When `src` is a file, `dest` must be a file and when `src` is a directory, `dest` must be a directory.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const src = '/tmp/file.txt'
 * const dest = '/tmp/this/path/does/not/exist/file.txt'
 *
 * // With a callback:
 * fs.move(src, dest, err => {
 *   if (err) return console.error(err)
 *   console.log('success!')
 * })
 *
 * // With Promises:
 * fs.move(src, dest)
 *   .then(() => {
 *     console.log('success!')
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.move(src, dest)
 *     console.log('success!')
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 *
 * // Using `overwrite` option
 * fs.move('/tmp/somedir', '/tmp/may/already/exist/somedir', { overwrite: true }, err => {
 *   if (err) return console.error(err)
 *   console.log('success!')
 * })
 */
export function move(src: string, dest: string, options?: MoveOptions): Promise<void>;
export function move(src: string, dest: string, callback: NoParamCallbackWithUndefined): void;
export function move(src: string, dest: string, options: MoveOptions, callback: NoParamCallbackWithUndefined): void;
/**
 * Moves a file or directory, even across devices.
 *
 * @param dest Note: When `src` is a file, `dest` must be a file and when `src` is a directory, `dest` must be a directory.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * fs.moveSync('/tmp/somefile', '/tmp/does/not/exist/yet/somefile')
 *
 * // Using `overwrite` option
 * fs.moveSync('/tmp/somedir', '/tmp/may/already/exist/somedir', { overwrite: true })
 */
export function moveSync(src: string, dest: string, options?: MoveOptions): void;

/**
 * Ensures that the file exists. If the file that is requested to be created is in
 * directories that do not exist, these directories are created. If the file already
 * exists, it is **NOT MODIFIED**.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const file = '/tmp/this/path/does/not/exist/file.txt'
 *
 * // With a callback:
 * fs.ensureFile(file, err => {
 *   console.log(err) // => null
 *   // file has now been created, including the directory it is to be placed in
 * })
 *
 * // With Promises:
 * fs.ensureFile(file)
 *  .then(() => {
 *    console.log('success!')
 *  })
 *  .catch(err => {
 *    console.error(err)
 *  })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.ensureFile(file)
 *     console.log('success!')
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 */
export function ensureFile(file: string): Promise<void>;
export function ensureFile(file: string, callback: NoParamCallbackWithUndefined): void;
/**
 * @see ensureFile
 */
export const createFile: typeof ensureFile;
/**
 * Ensures that the file exists. If the file that is requested to be created is in
 * directories that do not exist, these directories are created. If the file already
 * exists, it is **NOT MODIFIED**.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const file = '/tmp/this/path/does/not/exist/file.txt'
 * fs.ensureFileSync(file)
 * // file has now been created, including the directory it is to be placed in
 */
export function ensureFileSync(file: string): void;
/**
 * @see ensureFileSync
 */
export const createFileSync: typeof ensureFileSync;

/**
 * Ensures that the link exists. If the directory structure does not exist, it is created.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const srcPath = '/tmp/file.txt'
 * const destPath = '/tmp/this/path/does/not/exist/file.txt'
 *
 * // With a callback:
 * fs.ensureLink(srcPath, destPath, err => {
 *   console.log(err) // => null
 *   // link has now been created, including the directory it is to be placed in
 * })
 *
 * // With Promises:
 * fs.ensureLink(srcPath, destPath)
 *   .then(() => {
 *     console.log('success!')
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.ensureLink(srcPath, destPath)
 *     console.log('success!')
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 */
export function ensureLink(src: string, dest: string): Promise<void>;
export function ensureLink(src: string, dest: string, callback: fs.NoParamCallback): void;
/**
 * @see ensureLink
 */
export const createLink: typeof ensureLink;
/**
 * Ensures that the link exists. If the directory structure does not exist, it is created.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const srcPath = '/tmp/file.txt'
 * const destPath = '/tmp/this/path/does/not/exist/file.txt'
 * fs.ensureLinkSync(srcPath, destPath)
 * // link has now been created, including the directory it is to be placed in
 */
export function ensureLinkSync(src: string, dest: string): void;
/**
 * @see ensureLinkSync
 */
export const createLinkSync: typeof ensureLinkSync;

/**
 * Ensures that the symlink exists. If the directory structure does not exist, it is created.
 *
 * @param type It is only available on Windows and ignored on other platforms.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const srcPath = '/tmp/file.txt'
 * const destPath = '/tmp/this/path/does/not/exist/file.txt'
 *
 * // With a callback:
 * fs.ensureSymlink(srcPath, destPath, err => {
 *   console.log(err) // => null
 *   // symlink has now been created, including the directory it is to be placed in
 * })
 *
 * // With Promises:
 * fs.ensureSymlink(srcPath, destPath)
 *   .then(() => {
 *     console.log('success!')
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.ensureSymlink(srcPath, destPath)
 *     console.log('success!')
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 */
export function ensureSymlink(src: string, dest: string, type?: SymlinkType): Promise<void>;
export function ensureSymlink(src: string, dest: string, callback: fs.NoParamCallback): void;
export function ensureSymlink(src: string, dest: string, type: SymlinkType, callback: fs.NoParamCallback): void;
/**
 * @see ensureSymlink
 */
export const createSymlink: typeof ensureSymlink;
/**
 * Ensures that the symlink exists. If the directory structure does not exist, it is created.
 *
 * @param type It is only available on Windows and ignored on other platforms.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const srcPath = '/tmp/file.txt'
 * const destPath = '/tmp/this/path/does/not/exist/file.txt'
 * fs.ensureSymlinkSync(srcPath, destPath)
 * // symlink has now been created, including the directory it is to be placed in
 */
export function ensureSymlinkSync(src: string, dest: string, type?: SymlinkType): void;
/**
 * @see ensureSymlinkSync
 */
export const createSymlinkSync: typeof ensureSymlinkSync;

/**
 * Ensures that the directory exists. If the directory structure does not exist, it is created.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const dir = '/tmp/this/path/does/not/exist'
 * const desiredMode = 0o2775
 * const options = {
 *   mode: 0o2775
 * }
 *
 * // With a callback:
 * fs.ensureDir(dir, err => {
 *   console.log(err) // => null
 *   // dir has now been created, including the directory it is to be placed in
 * })
 *
 * // With a callback and a mode integer
 * fs.ensureDir(dir, desiredMode, err => {
 *   console.log(err) // => null
 *   // dir has now been created with mode 0o2775, including the directory it is to be placed in
 * })
 *
 * // With Promises:
 * fs.ensureDir(dir)
 *   .then(() => {
 *     console.log('success!')
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With Promises and a mode integer:
 * fs.ensureDir(dir, desiredMode)
 *   .then(() => {
 *     console.log('success!')
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.ensureDir(dir)
 *     console.log('success!')
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 * asyncAwait()
 *
 * // With async/await and an options object, containing mode:
 * async function asyncAwaitMode () {
 *   try {
 *     await fs.ensureDir(dir, options)
 *     console.log('success!')
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 * asyncAwaitMode()
 */
export function ensureDir(path: string, options?: EnsureDirOptions | number): Promise<void>;
export function ensureDir(path: string, callback: fs.NoParamCallback): void;
export function ensureDir(path: string, options: EnsureDirOptions | number, callback: fs.NoParamCallback): void;
/**
 * Ensures that the directory exists. If the directory structure does not exist, it is created.
 * If provided, options may specify the desired mode for the directory.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const dir = '/tmp/this/path/does/not/exist'
 *
 * const desiredMode = 0o2775
 * const options = {
 *   mode: 0o2775
 * }
 *
 * fs.ensureDirSync(dir)
 * // dir has now been created, including the directory it is to be placed in
 *
 * fs.ensureDirSync(dir, desiredMode)
 * // dir has now been created, including the directory it is to be placed in with permission 0o2775
 *
 * fs.ensureDirSync(dir, options)
 * // dir has now been created, including the directory it is to be placed in with permission 0o2775
 */
export function ensureDirSync(path: string, options?: EnsureDirOptions | number): void;

/**
 * @see ensureDir
 */
export const mkdirs: typeof ensureDir;
/**
 * @see ensureDirSync
 */
export const mkdirsSync: typeof ensureDirSync;

/**
 * @see ensureDir
 */
export const mkdirp: typeof ensureDir;
/**
 * @see ensureDirSync
 */
export const mkdirpSync: typeof ensureDirSync;

/**
 * Almost the same as `writeFile` (i.e. it overwrites), except that if the parent directory
 * does not exist, it's created.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const file = '/tmp/this/path/does/not/exist/file.txt'
 *
 * // With a callback:
 * fs.outputFile(file, 'hello!', err => {
 *   console.log(err) // => null
 *
 *   fs.readFile(file, 'utf8', (err, data) => {
 *     if (err) return console.error(err)
 *     console.log(data) // => hello!
 *   })
 * })
 *
 * // With Promises:
 * fs.outputFile(file, 'hello!')
 *   .then(() => fs.readFile(file, 'utf8'))
 *   .then(data => {
 *     console.log(data) // => hello!
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.outputFile(file, 'hello!')
 *
 *     const data = await fs.readFile(file, 'utf8')
 *
 *     console.log(data) // => hello!
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 */
export function outputFile(
    file: string,
    data: string | NodeJS.ArrayBufferView,
    options?: fs.WriteFileOptions,
): Promise<void>;
export function outputFile(file: string, data: string | NodeJS.ArrayBufferView, callback: fs.NoParamCallback): void;
export function outputFile(
    file: string,
    data: string | NodeJS.ArrayBufferView,
    options: fs.WriteFileOptions,
    callback: fs.NoParamCallback,
): void;
/**
 * Almost the same as `writeFileSync` (i.e. it overwrites), except that if the parent directory
 * does not exist, it's created.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const file = '/tmp/this/path/does/not/exist/file.txt'
 * fs.outputFileSync(file, 'hello!')
 *
 * const data = fs.readFileSync(file, 'utf8')
 * console.log(data) // => hello!
 */
export function outputFileSync(
    file: string,
    data: string | NodeJS.ArrayBufferView,
    options?: fs.WriteFileOptions,
): void;

/**
 * Reads a JSON file and then parses it into an object.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * // With a callback:
 * fs.readJson('./package.json', (err, packageObj) => {
 *   if (err) console.error(err)
 *   console.log(packageObj.version) // => 0.1.3
 * })
 *
 * // With Promises:
 * fs.readJson('./package.json')
 *   .then(packageObj => {
 *     console.log(packageObj.version) // => 0.1.3
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     const packageObj = await fs.readJson('./package.json')
 *     console.log(packageObj.version) // => 0.1.3
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 *
 * // `readJsonSync()` can take a `throws` option set to `false` and it won't throw if the JSON is invalid. Example:
 * const file = '/tmp/some-invalid.json'
 * const data = '{not valid JSON'
 * fs.writeFileSync(file, data)
 *
 * // With a callback:
 * fs.readJson(file, { throws: false }, (err, obj) => {
 *   if (err) console.error(err)
 *   console.log(obj) // => null
 * })
 *
 * // With Promises:
 * fs.readJson(file, { throws: false })
 *   .then(obj => {
 *     console.log(obj) // => null
 *   })
 *   .catch(err => {
 *     console.error(err) // Not called
 *   })
 *
 * // With async/await:
 * async function asyncAwaitThrows () {
 *   const obj = await fs.readJson(file, { throws: false })
 *   console.log(obj) // => null
 * }
 *
 * asyncAwaitThrows()
 */
export const readJson: typeof jsonfile.readFile;
/**
 * @see readJson
 */
export const readJSON: typeof jsonfile.readFile;
/**
 * Reads a JSON file and then parses it into an object.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const packageObj = fs.readJsonSync('./package.json')
 * console.log(packageObj.version) // => 2.0.0
 *
 * // `readJsonSync()` can take a `throws` option set to `false` and it won't throw if the JSON is invalid. Example:
 * const file = '/tmp/some-invalid.json'
 * const data = '{not valid JSON'
 * fs.writeFileSync(file, data)
 *
 * const obj = fs.readJsonSync(file, { throws: false })
 * console.log(obj) // => null
 */
export const readJsonSync: typeof jsonfile.readFileSync;
/**
 * @see readJsonSync
 */
export const readJSONSync: typeof jsonfile.readFileSync;

/**
 * Writes an object to a JSON file.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * // With a callback:
 * fs.writeJson('./package.json', {name: 'fs-extra'}, err => {
 *   if (err) return console.error(err)
 *   console.log('success!')
 * })
 *
 * // With Promises:
 * fs.writeJson('./package.json', {name: 'fs-extra'})
 *   .then(() => {
 *     console.log('success!')
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.writeJson('./package.json', {name: 'fs-extra'})
 *     console.log('success!')
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 */
export const writeJson: typeof jsonfile.writeFile;
/**
 * @see writeJson
 */
export const writeJSON: typeof jsonfile.writeFile;
/**
 * Writes an object to a JSON file.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * fs.writeJsonSync('./package.json', {name: 'fs-extra'})
 */
export const writeJsonSync: typeof jsonfile.writeFileSync;
/**
 * @see writeJsonSync
 */
export const writeJSONSync: typeof jsonfile.writeFileSync;

/**
 * Almost the same as `writeJson`, except that if the directory does not exist, it's created.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const file = '/tmp/this/path/does/not/exist/file.json'
 *
 * // With a callback:
 * fs.outputJson(file, {name: 'JP'}, err => {
 *   console.log(err) // => null
 *
 *   fs.readJson(file, (err, data) => {
 *     if (err) return console.error(err)
 *     console.log(data.name) // => JP
 *   })
 * })
 *
 * // With Promises:
 * fs.outputJson(file, {name: 'JP'})
 *   .then(() => fs.readJson(file))
 *   .then(data => {
 *     console.log(data.name) // => JP
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.outputJson(file, {name: 'JP'})
 *
 *     const data = await fs.readJson(file)
 *
 *     console.log(data.name) // => JP
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 */
export function outputJson(file: string, data: any, options?: JsonOutputOptions): Promise<void>;
export function outputJson(file: string, data: any, options: JsonOutputOptions, callback: fs.NoParamCallback): void;
export function outputJson(file: string, data: any, callback: fs.NoParamCallback): void;
/**
 * @see outputJson
 */
export const outputJSON: typeof outputJson;
/**
 * Almost the same as `writeJsonSync`, except that if the directory does not exist, it's created.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const file = '/tmp/this/path/does/not/exist/file.json'
 * fs.outputJsonSync(file, {name: 'JP'})
 *
 * const data = fs.readJsonSync(file)
 * console.log(data.name) // => JP
 */
export function outputJsonSync(file: string, data: any, options?: JsonOutputOptions): void;
/**
 * @see outputJsonSync
 */
export const outputJSONSync: typeof outputJsonSync;

/**
 * Removes a file or directory. The directory can have contents. If the path does not exist, silently does nothing.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * // remove file
 * // With a callback:
 * fs.remove('/tmp/myfile', err => {
 *   if (err) return console.error(err)
 *   console.log('success!')
 * })
 *
 * fs.remove('/home/jprichardson', err => {
 *   if (err) return console.error(err)
 *   console.log('success!') // I just deleted my entire HOME directory.
 * })
 *
 * // With Promises:
 * fs.remove('/tmp/myfile')
 *   .then(() => {
 *     console.log('success!')
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.remove('/tmp/myfile')
 *     console.log('success!')
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 */
export function remove(dir: string): Promise<void>;
export function remove(dir: string, callback: fs.NoParamCallback): void;
/**
 * Removes a file or directory. The directory can have contents. If the path does not exist, silently does nothing.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * // remove file
 * fs.removeSync('/tmp/myfile')
 *
 * fs.removeSync('/home/jprichardson') // I just deleted my entire HOME directory.
 */
export function removeSync(dir: string): void;

/**
 * Ensures that a directory is empty. Deletes directory contents if the directory is not empty.
 * If the directory does not exist, it is created. The directory itself is not deleted.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * // assume this directory has a lot of files and folders
 * // With a callback:
 * fs.emptyDir('/tmp/some/dir', err => {
 *   if (err) return console.error(err)
 *   console.log('success!')
 * })
 *
 * // With Promises:
 * fs.emptyDir('/tmp/some/dir')
 *   .then(() => {
 *     console.log('success!')
 *   })
 *   .catch(err => {
 *     console.error(err)
 *   })
 *
 * // With async/await:
 * async function asyncAwait () {
 *   try {
 *     await fs.emptyDir('/tmp/some/dir')
 *     console.log('success!')
 *   } catch (err) {
 *     console.error(err)
 *   }
 * }
 *
 * asyncAwait()
 */
export function emptyDir(path: string): Promise<void>;
export function emptyDir(path: string, callback: fs.NoParamCallback): void;
/**
 * @see emptyDir
 */
export const emptydir: typeof emptyDir;
/**
 * Ensures that a directory is empty. Deletes directory contents if the directory is not empty.
 * If the directory does not exist, it is created. The directory itself is not deleted.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * // assume this directory has a lot of files and folders
 * fs.emptyDirSync('/tmp/some/dir')
 */
export function emptyDirSync(path: string): void;
/**
 * @see emptyDirSync
 */
export const emptydirSync: typeof emptyDirSync;

/**
 * Test whether or not the given path exists by checking with the file system. Like
 * [`fs.exists`](https://nodejs.org/api/fs.html#fs_fs_exists_path_callback), but with a normal
 * callback signature (err, exists). Uses `fs.access` under the hood.
 *
 * @example
 * import * as fs from 'fs-extra'
 *
 * const file = '/tmp/this/path/does/not/exist/file.txt'
 *
 * // With a callback:
 * fs.pathExists(file, (err, exists) => {
 *   console.log(err) // => null
 *   console.log(exists) // => false
 * })
 *
 * // Promise usage:
 * fs.pathExists(file)
 *   .then(exists => console.log(exists)) // => false
 *
 * // With async/await:
 * async function asyncAwait () {
 *   const exists = await fs.pathExists(file)
 *
 *   console.log(exists) // => false
 * }
 *
 * asyncAwait()
 */
export function pathExists(path: string): Promise<boolean>;
export function pathExists(path: string, callback: (err: NodeJS.ErrnoException | null, exists: boolean) => void): void;
/**
 * An alias for [`fs.existsSync`](https://nodejs.org/api/fs.html#fs_fs_existssync_path), created for
 * consistency with `pathExists`.
 */
export function pathExistsSync(path: string): boolean;

export const access: typeof fs.access.__promisify__ & typeof fs.access;
export const appendFile: typeof fs.appendFile.__promisify__ & typeof fs.appendFile;
export const chmod: typeof fs.chmod.__promisify__ & typeof fs.chmod;
export const chown: typeof fs.chown.__promisify__ & typeof fs.chown;
export const close: typeof fs.close.__promisify__ & typeof fs.close;
export const copyFile: typeof fs.copyFile.__promisify__ & typeof fs.copyFile;
export const exists: typeof fs.exists.__promisify__ & typeof fs.exists;
export const fchmod: typeof fs.fchmod.__promisify__ & typeof fs.fchmod;
export const fchown: typeof fs.fchown.__promisify__ & typeof fs.fchown;
export const fdatasync: typeof fs.fdatasync.__promisify__ & typeof fs.fdatasync;
export const fstat: typeof fs.fstat.__promisify__ & typeof fs.fstat;
export const fsync: typeof fs.fsync.__promisify__ & typeof fs.fsync;
export const ftruncate: typeof fs.ftruncate.__promisify__ & typeof fs.ftruncate;
export const futimes: typeof fs.futimes.__promisify__ & typeof fs.futimes;
export const lchmod: typeof fs.lchmod.__promisify__ & typeof fs.lchmod;
export const lchown: typeof fs.lchown.__promisify__ & typeof fs.lchown;
export const link: typeof fs.link.__promisify__ & typeof fs.link;
export const lstat: typeof fs.lstat.__promisify__ & typeof fs.lstat;
export const mkdir: typeof fs.mkdir.__promisify__ & typeof fs.mkdir;
export const mkdtemp: typeof fs.mkdtemp.__promisify__ & typeof fs.mkdtemp;
export const open: typeof fs.open.__promisify__ & typeof fs.open;
export const opendir: typeof fs.opendir.__promisify__ & typeof fs.opendir;
export const read: typeof fs.read.__promisify__ & typeof fs.read;
export const readv: typeof fs.readv.__promisify__ & typeof fs.readv;
export const readdir: typeof fs.readdir.__promisify__ & typeof fs.readdir;
export const readFile: typeof fs.readFile.__promisify__ & typeof fs.readFile;
export const readlink: typeof fs.readlink.__promisify__ & typeof fs.readlink;
export const realpath:
    & typeof fs.realpath.__promisify__
    & typeof fs.realpath
    & {
        native(path: fs.PathLike, options?: fs.EncodingOption): Promise<string>;
        native(path: fs.PathLike, options: fs.BufferEncodingOption): Promise<Buffer>;
    };
export const rename: typeof fs.rename.__promisify__ & typeof fs.rename;
export const rm: typeof fs.rm.__promisify__ & typeof fs.rm;
export const rmdir: typeof fs.rmdir.__promisify__ & typeof fs.rmdir;
export const stat: typeof fs.stat.__promisify__ & typeof fs.stat;
export const symlink: typeof fs.symlink.__promisify__ & typeof fs.symlink;
export const truncate: typeof fs.truncate.__promisify__ & typeof fs.truncate;
export const unlink: typeof fs.unlink.__promisify__ & typeof fs.unlink;
export const utimes: typeof fs.utimes.__promisify__ & typeof fs.utimes;
export const write: typeof fs.write.__promisify__ & typeof fs.write;
export const writev: typeof fs.writev.__promisify__ & typeof fs.writev;
export const writeFile: typeof fs.writeFile.__promisify__ & typeof fs.writeFile;

export type NoParamCallbackWithUndefined = (err: NodeJS.ErrnoException | null | undefined) => void;

export type SymlinkType = fs.symlink.Type;

export type CopyFilterSync = (src: string, dest: string) => boolean;
export type CopyFilterAsync = (src: string, dest: string) => Promise<boolean>;

export interface CopyOptions {
    /**
     * Dereference symlinks.
     * @default false
     */
    dereference?: boolean | undefined;
    /**
     * Overwrite existing file or directory.
     * _Note that the copy operation will silently fail if you set this to `false` and the destination exists._
     * Use the `errorOnExist` option to change this behavior.
     * @default true
     */
    overwrite?: boolean | undefined;
    /**
     * When `true`, will set last modification and access times to the ones of the original source files.
     * When `false`, timestamp behavior is OS-dependent.
     * @default false
     */
    preserveTimestamps?: boolean | undefined;
    /**
     * When `overwrite` is `false` and the destination exists, throw an error.
     * @default false
     */
    errorOnExist?: boolean | undefined;
    /**
     * Function to filter copied files/directories. Return `true` to copy the item, `false` to ignore it.
     * Can also return a `Promise` that resolves to `true` or `false` (or pass in an `async` function).
     */
    filter?: CopyFilterSync | CopyFilterAsync | undefined;
}

export interface CopyOptionsSync extends CopyOptions {
    /**
     * Function to filter copied files/directories. Return `true` to copy the item, `false` to ignore it.
     */
    filter?: CopyFilterSync | undefined;
}

export interface EnsureDirOptions {
    mode?: number | undefined;
}

export interface MoveOptions {
    /**
     * Overwrite existing file or directory.
     * @default false
     */
    overwrite?: boolean | undefined;
    /**
     * Dereference symlinks.
     * @default false
     */
    dereference?: boolean | undefined;
}

export { JFReadOptions as JsonReadOptions, JFWriteOptions as JsonWriteOptions } from "jsonfile";

export type JsonOutputOptions = fs.WriteFileOptions & StringifyOptions;
