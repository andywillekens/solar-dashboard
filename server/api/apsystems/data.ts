import apScraper from "~/utils/apScraper";
export default defineEventHandler(async (event) => {
  try {
    const scrapedData = await apScraper(
      "https://apsystemsema.com/ema/intoDemoUser.action?id=2c9f934a8f496538018f4a83882a4219&locale=en_US"
    );
    return scrapedData;
  } catch (error) {
    return {
      data: {
        duration: 0,
        lastPower: "0",
        today: "0",
        co2: "0",
        lifetime: "0",
        ecuSign: "0/216000310606YYYYYYYY",
        meterFlag: 0,
      },
    };
  }
});
