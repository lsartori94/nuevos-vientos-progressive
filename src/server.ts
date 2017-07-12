import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { readFileSync } from 'fs';
import * as path from 'path';

const PORT = process.env.PORT || 8080;

enableProdMode();

const app = express();

app.use(express.static(__dirname + '/../dist'));

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});
