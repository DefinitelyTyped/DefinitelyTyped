import { assertType } from './assert';
import { FastBoot as FastBootService, FastbootRequest, Shoebox } from 'ember-cli-fastboot/services/fastboot';

/** type assertions for global FastBoot object */
assertType<FastBootService | undefined>(FastBoot);

/** type assertions for fastboot service & other classes */
const instance = new FastBootService();
assertType<FastbootRequest>(instance.request);
assertType<boolean>(instance.isFastboot);
assertType<Shoebox>(instance.shoebox);
assertType<void>(instance.deferRendering(new Promise<'foo'>(() => 'foo')));

assertType<void>(instance.shoebox.put('foo', 'bar'));
assertType<unknown>(instance.shoebox.retrieve('foo'));

assertType<Record<string, unknown>>(instance.request.cookies);
assertType<Pick<Headers, 'has' | 'get'>>(instance.request.headers);
assertType<string>(instance.request.host);
assertType<Record<string, unknown>>(instance.request.queryParams);
assertType<string>(instance.request.path);
assertType<string>(instance.request.protocol);
