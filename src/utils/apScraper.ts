import puppeteer from "puppeteer";

export default async (url: string) => {
  console.log("Runnint puppeteer");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const solarData = await page.waitForResponse(
    (response) =>
      response.url() ===
        "https://apsystemsema.com/ema/ajax/getDashboardApiAjax/getDashboardProductionInfoAjax" &&
      response.status() === 200
  );

  console.log(solarData);

  const jsonSolarData = await solarData.json();
  await browser.close();
  return jsonSolarData;
};
