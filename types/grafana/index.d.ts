// Project: https://github.com/grafana/grafana
// Definitions by: CorpGlory Team <https://github.com/corpglory>
//                 Alexey Velikiy <https://github.com/jonyrock>

/**
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import 'bootstrap';
import 'vendor/filesaver';
import 'lodash-src';
import 'angular-strap';
import 'angular-route';
import 'angular-sanitize';
import 'angular-dragdrop';
import 'angular-bindonce';
import 'angular-ui';
export declare class GrafanaApp {
  registerFunctions: any;
  ngModuleDependencies: any[];
  preBootModules: any[];
  constructor();
  useModule(module: any): any;
  init(): void;
}
declare var _default: GrafanaApp;
export default _default;
