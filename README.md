# Monotonically increasing per machine, globally unique eventids

[![CircleCI][circle-image]][circle-url]
[![Dependencies][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

***Note: This is not an official Google product.***

An eventId uniquely identifies an event across a network of services. It is
globally unique, and is monotically increasing locally. This makes eventids
useful for lexically comparable identifiers for events in a distributed system.

This can be used instead of timestamps – JavaScript timestamps only have
millisecond resolution making them unsuitable for the purpose of building
monotonically increasing local ids.

```js
const EventId = require('eventid');

// Instantiate a generator.
const eventId = new EventId();

// Generate a globally unique identifier.
const id1 = eventId.new(); // -> "..........37qqNkj4K24ulWyeuWxpZh"
// Use the same generator to get monotonically increasing local ids.
const id2 = eventId.new(); // -> "..........77qqNkj4K24ulWyeuWxpZh"
// You can lexicographically compare the ids.
assert(id1 < id2); // -> true

// Another instance will use a different guid
const another = new EventId();
const id3 = another.new(); // -> "..........5rkLYOc5W8ZAHAmVSyrixJ"
```

[circle-image]: https://circleci.com/gh/google/eventid-js.svg?style=svg
[circle-url]: https://circleci.com/gh/google/eventid-js
[david-image]: https://david-dm.org/google/eventid-js.svg
[david-url]: https://david-dm.org/google/eventid-js
[snyk-image]: https://snyk.io/test/github/google/eventid-js/badge.svg
[snyk-url]: https://snyk.io/test/github/google/eventid-js