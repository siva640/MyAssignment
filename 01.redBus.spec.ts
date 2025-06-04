const { chromium, firefox } = require('playwright');

(async () => {
  // Redbus in Edge (Edge uses Chromium engine)
  const edge = await chromium.launch({ channel: 'msedge', headless: false });
  const edgePage = await edge.newPage();
  await edgePage.goto('https://www.redbus.in');
  console.log("Redbus Title:", await edgePage.title());
  console.log("Redbus URL:", edgePage.url());
  await edge.close();

  // Flipkart in Firefox
  const ff = await firefox.launch({ headless: false });
  const ffPage = await ff.newPage();
  await ffPage.goto('https://www.flipkart.com');
  console.log("Flipkart Title:", await ffPage.title());
  console.log("Flipkart URL:", ffPage.url());
  await ff.close();
})();