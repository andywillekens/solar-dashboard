import api from "~/utils/api";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const accessToken = config.toonAccessToken;

  const data = await api("GET", `/toon/auth`);
  if (data) {
    const agreementId = data.agreementId;
    const displayCommonName = data.displayCommonName;
    try {
      const response = await fetch(
        `https://api.toon.eu/toon/v3/${agreementId}/status`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            "X-CommonName": displayCommonName,
            "X-Agreement-ID": agreementId,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
});
