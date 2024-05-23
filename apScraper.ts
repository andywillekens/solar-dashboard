const CHROMIUM_PATH = `https://github.com/Sparticuz/chromium/releases/download/v123.0.1/chromium-v123.0.1-pack.tar`;

const getBrowser = async () => {
  if (process.env.VERCEL_ENV === "production") {
    const chromium = await import("@sparticuz/chromium-min").then(
      (mod) => mod.default
    );

    const puppeteerCore = await import("puppeteer-core").then(
      (mod) => mod.default
    );

    const executablePath = await chromium.executablePath(CHROMIUM_PATH);

    const browser = await puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    });
    return browser;
  } else {
    const puppeteer = await import("puppeteer").then((mod) => mod.default);

    const browser = await puppeteer.launch();
    return browser;
  }
};

export default async (url: string) => {
  const browser = await getBrowser();
  const page = await browser.newPage();

  await page.goto(url);

  const solarData = await page.waitForResponse(
    (response: { url: () => string; status: () => number }) =>
      response.url() ===
        "https://apsystemsema.com/ema/ajax/getDashboardApiAjax/getDashboardProductionInfoAjax" &&
      response.status() === 200
  );

  const jsonSolarData = await solarData.json();
  await browser.close();
  return jsonSolarData;
};
