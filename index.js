'use strict'
var spider = require('./utils/spider');
const config = require('./config.js');

var s = spider();
s.get(config.url,function(json){
	console.log(json);
});
