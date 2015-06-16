'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
// var Mesh = require('famous/webgl-renderables/Mesh');

var scene = FamousEngine.createScene('body');

// Boilerplate code to make your life easier
FamousEngine.init();

var App = require('./js/App');
var app = new App(scene);