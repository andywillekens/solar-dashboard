export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const accessToken = config.toonAccessToken;

  try {
    const response = await fetch("https://api.toon.eu/toon/v3/agreements", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
});
