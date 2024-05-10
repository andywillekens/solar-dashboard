export default async (method: string, endpoint: string, body?: object) => {
  const config = useRuntimeConfig();
  const apiUrl = config.apiUrl;
  try {
    const requestOptions: RequestInit = {
      method: method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Check if body is provided before including it in the request
    if (body && body !== null && body !== undefined) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(`${apiUrl}${endpoint}`, requestOptions);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
