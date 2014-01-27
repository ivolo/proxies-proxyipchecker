
# proxies-proxyipchecker

  Scrapes the public proxies list from [proxyipchecker.com](http://proxyipchecker.com/). Primarily used as a proxies source list to [proxies](https://github.com/ivolo/proxies).


## Example

Get a list of public proxies:

```js
var Scraper = require('scraper');
var ProxyIpChecker = require('proxies-proxyipchecker');
var Proxies = require('proxies');

Scraper(function (err, scraper) {
  var proxyipchecker = ProxyIpChecker(scraper);
  proxyipchecker(function (err, proxies) {
    // a list of proxies
  });
});
```

And integrate into [proxies](https://github.com/ivolo/proxies) as a source:

```js
var Scraper = require('scraper');
var ProxyIpChecker = require('proxies-proxyipchecker');
var Proxies = require('proxies');

Scraper(function (err, scraper) {
  var proxyipchecker = ProxyIpChecker(scraper);
  var proxies = Proxies()
    .source(proxyipchecker);

  // use proxies
});
```

## API

#### ProxyIpChecker(scraper)

  Create a new ProxyIpChecker `scraper` instance.

#### proxyipchecker(callback)

  Get a list of public proxies.


## Licence

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```