xml-entities
============

Stupidly simple XML 1.0 entity encoder/decoder

Overview
--------

XML 1.0 defines 5 standard entities - `"`, `'`, `&`, `<`, and `>`. I define a
few more - `\t`, `\n`, and `\r`. This module encodes/decodes them.

Installation
------------

Available via [npm](http://npmjs.org/):

> $ npm install xml-entities

Or via git:

> $ git clone git://github.com/deoxxa/xml-entities.git node_modules/xml-entities

Usage
-----

```js
var xmlentities = require("xml-entities");

var str = "<a>lol</a>";
console.log(str);

str = xmlentities.encode(str);
console.log(str);

str = xmlentities.decode(str);
console.log(str);
```

License
-------

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub ([deoxxa](http://github.com/deoxxa))
* Twitter ([@deoxxa](http://twitter.com/deoxxa))
* Email ([deoxxa@fknsrs.biz](mailto:deoxxa@fknsrs.biz))
