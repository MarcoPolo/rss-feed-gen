import minimist from 'minimist'
import Parser from 'rss-parser';
import { promises as fs } from 'fs'
import path from 'path'
import { tmpdir } from 'os';
import TOML from '@iarna/toml'
require('isomorphic-fetch');

var { Readability } = require('@mozilla/readability');
var JSDOM = require('jsdom').JSDOM;

const args = minimist(process.argv.slice(2));


(async () => {
  const resp = await fetch("https://text.npr.org/959091838")
  const html = await resp.text()
  var doc = new JSDOM(html, {
    url: "https://www.example.com/the-page-i-got-the-source-from"
  });
  // @ts-ignore
  // console.log(await k.text())
  let reader = new Readability(doc.window.document);
  let article = reader.parse();
  console.log(article)
})()
