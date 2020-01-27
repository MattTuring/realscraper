var Nightmare = require('nightmare');

Nightmare()
  .goto('https://watch.lolesports.com/schedule?leagues=lcs')
  .wait('.date')
  .evaluate(() => {
    var nameNodes = document.querySelectorAll('.EventMatch');
    var list = [].slice.call(nameNodes);
    return list.map((node) => {
      return node.innerText
    });
  })
  .end()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Search failed:', error);
  });
