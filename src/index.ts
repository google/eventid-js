/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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

const d64 = require('d64');
import * as uuid from 'uuid';

export class EventId {
  b: Uint8Array;
  constructor() {
    this.b = new Uint8Array(24);
    uuid.v4(null, this.b, 8);
  }

  new() {
    for (let i = 7; i >= 0; i--) {
      if (this.b[i] !== 255) {
        this.b[i]++;
        break;
      }
      this.b[i] = 0;
    }
    return d64.encode(this.b);
  }
}

// preserve `const EventId = require('EventId')` syntax
const existingExports = module.exports;
module.exports = EventId;
module.exports = Object.assign(module.exports, existingExports);
