# cert4https

## Installation

```bash
$ npm install --save cert4https
```

## Example

```js
var options = require('cert4https');
var https = require('https');
https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
```
