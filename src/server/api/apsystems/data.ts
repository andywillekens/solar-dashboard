import apScraper from "~/utils/apScraper";
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const userId = config.apUserId;

  try {
    const scrapedData = await apScraper(
      `https://apsystemsema.com/ema/intoDemoUser.action?id=${userId}&locale=en_US`
    );
    return scrapedData;
  } catch (error) {
    return {
      duration: 0,
      lastPower: 0,
      today: 0,
      co2: 0,
      lifetime: 0,
      ecuSign: "0/216000310606YYYYYYYY",
      meterFlag: 0,
    };
  }
});
