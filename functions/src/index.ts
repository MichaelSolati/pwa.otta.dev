import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as fs from 'fs';

enableProdMode();

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./app/main');

const engine = ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
});

const document: string = fs.readFileSync(__dirname + '/app/index.html', 'utf8').toString();

const app = express();
app.get('**', (req, res) => {
  const url: string = req.path;
  engine(url, {
    req,
    res,
    url,
    document,
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }, (err: Error, html: string) => {
    if (err) {
      res.send(document);
    } else {
      res.set('Cache-Control', 'public, max-age=3600, s-maxage=43200');
      res.send(html);
    }
  });
});

export const ssr = functions.https.onRequest(app);
