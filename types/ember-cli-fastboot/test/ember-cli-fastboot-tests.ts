import { assertType } from './assert';
import FastBootService, { FastbootRequest, Shoebox } from 'ember-cli-fastboot/services/fastboot';
import { FastBoot as _FastBoot } from 'ember-cli-fastboot/-private';

/** type assertions for global FastBoot object */
assertType<_FastBoot | undefined>(FastBoot);

/** type assertions for fastboot service & other classes */
const instance = FastBootService.create();
assertType<FastbootRequest>(instance.request);
assertType<boolean>(instance.isFastBoot);
assertType<Shoebox>(instance.shoebox);
instance.deferRendering(new Promise<'foo'>(() => 'foo')); // $ExpectType void

instance.shoebox.put('foo', 'bar'); // $ExpectType void
instance.shoebox.retrieve('foo'); // $ExpectType unknown

assertType<Record<string, unknown>>(instance.request.cookies);
assertType<Pick<Headers, 'has' | 'get'>>(instance.request.headers);
assertType<string>(instance.request.host);
assertType<Record<string, unknown>>(instance.request.queryParams);
assertType<string>(instance.request.path);
assertType<string>(instance.request.protocol);
assertType<string>(instance.request.method);
assertType<Record<string, unknown>>(instance.request.body);
