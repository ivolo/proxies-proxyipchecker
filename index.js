
/**
 * Expose the `scrape`.
 */

module.exports = scrape;

/**
 * Return a Proxy IP Checker site scraper.
 *
 * @param {Scraper} scraper
 * @return {Function}
 */
function scrape (scraper) {
  return function (callback) {
    scraper.readyPage('http://proxyipchecker.com/', function (err, page) {
      if (err) {
        page.close();
        callback(err);
      } else {
        parseList(page, function (err, proxies) {
          page.close();
          callback(err, proxies);
        });
      }
    });
  };
}

/**
 * Parses the IP table list.
 *
 * @param {Page} page
 * @param {Function} callback
 */

function parseList (page, callback) {

  page.evaluate(function () {
    var proxies = [];

    $('.freshproxies').find('li').each(function (index, el) {
      var text = el.innerText;
      var tokens = text.split(':');
      if (tokens.length === 2) {
        var ip = tokens[0].trim();
        var port = parseInt(tokens[1], 10);
        proxies.push('http://' + ip + ':' + port);
      }
    });

    return proxies;

  }, function (proxies) {
    return callback(null, proxies);
  });
}