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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {EventId} from '../src';

describe('eventid', () => {
  it('should generate monotonically increasing numbers', () => {
    const eid = new EventId();
    let previous = eid.new();
    for (let i = 0; i < 20; i++) {
      const current = eid.new();
      assert.ok(current > previous, 'Failed on iteration: ' + i);
      previous = current;
    }
  });

  // Ensure our writes have the correct endianness
  it('should preserve monotonicity across byte boundary', () => {
    const eid = new EventId();
    // Want to cross byte boundary at 255.
    eid.b[7] = 250;
    let previous = eid.new();
    for (let i = 0; i < 20; i++) {
      const current = eid.new();
      assert.ok(current > previous, 'Failed on iteration: ' + i);
      previous = current;
    }
  });

  // Ensure we transition between low and high bits of counter correctly
  it('should preserve monotonicity across word boundary', () => {
    const eid = new EventId();
    // Want to cross word boundary at 0xFFFFFFFF.
    eid.b[4] = 0xff;
    eid.b[5] = 0xff;
    eid.b[6] = 0xff;
    eid.b[7] = 0xf8;
    let previous = eid.new();
    for (let i = 0; i < 20; i++) {
      const current = eid.new();
      assert.ok(current > previous, 'Failed on iteration: ' + i);
      previous = current;
    }
  });

  it('should allow non destructed import', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const EventId = require('../src');
    const eid = new EventId();
    eid.new();
  });
});
