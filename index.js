var entities = [
  ["\"", "&quot;"],
  ["&",  "&amp;"],
  ["'", "&apos;"],
  ["<",  "&lt;"],
  [">",  "&gt;"],
  ["\t", "&#x9;"],
  ["\n", "&#xA;"],
  ["\r", "&#xD;"],
];

var encodeRegex = new RegExp(entities.map(function(e) {
  return e[0];
}).join("|"), "g");

var decodeRegex = new RegExp(entities.map(function(e) {
  return e[1];
}).join("|"), "g");

var encodeMap = entities.reduce(function(i, v) {
  i[v[0]] = v[1];
  return i;
}, {});

var decodeMap = entities.reduce(function(i, v) {
  i[v[1]] = v[0];
  return i;
}, {});

var encodeEntities = exports.encode = function encodeEntities(str) {
  return str.replace(encodeRegex, function(s) {
    return encodeMap[s];
  });
};

var decodeEntities = exports.decode = function decodeEntities(str) {
  return str.replace(decodeRegex, function(s) {
    return decodeMap[s];
  });
};
