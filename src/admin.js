const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  let url = new URL(page.url());
  url.port = 5001;

  await page.setCookie({
    'value': 'ccsc{6f759aae73d7be951b5482b1e0146b0c}',
    'domain': url.hostname + ":" + url.port,
    'expires': Date.now() / 1000 + 10,
    'name': 'flag'
  });
  await page.goto(url.origin + '/reviews');
  await browser.close();
})();
