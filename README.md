# Monotonically increasing per machine, globally unique eventids

***Note: This is not an official Google product.***

An eventId uniquely identifies an event across a network of services. It is
globally unique, and is monotically increasing locally. This makes eventids
useful for lexically comparable identifiers for events in a distributed system.

```js
const EventId = require('eventid');

// Instantiate a generator.
const eventId = new EventId();

const id1 = eventId.new();
const id2 = eventId.new();
```

[![CircleCI][circle-image]][circle-url]
[![Dependencies][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[circle-image]: https://circleci.com/gh/google/eventid-js.svg?style=svg
[circle-url]: https://circleci.com/gh/google/eventid-js
[david-image]: https://david-dm.org/google/eventid-js.svg
[david-url]: https://david-dm.org/google/eventid-js
[snyk-image]: https://snyk.io/test/github/google/eventid-js/badge.svg
[snyk-url]: https://snyk.io/test/github/google/eventid-js