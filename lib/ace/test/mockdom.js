"use strict";

var JSDOM = require("jsdom").JSDOM;

var dom = new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>", {
    pretendToBeVisual: true,
    url: "http://localhost/"
});
var window = dom.window;

global.document     = window.document;
global.window       = window;
global.self         = window;
global.location     = window.location;

// Node >= 21 ships a built-in read-only `navigator` global; replace it with the
// jsdom one so browser-detection code (lib/ace/lib/useragent.js) sees a real UA.
Object.defineProperty(global, "navigator", {
    value: window.navigator,
    configurable: true,
    writable: true
});