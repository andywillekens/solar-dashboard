type dayType = "start" | "end";

export default (type: dayType) => {
  const currentDate = new Date();
  const startOfDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    0,
    0,
    0,
    0
  );
  const endOfDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    23,
    59,
    59,
    999
  );

  if (type === "start") {
    return Math.floor(startOfDay.getTime() / 1000);
  } else if (type === "end") {
    return Math.floor(endOfDay.getTime() / 1000);
  } else {
    throw new Error(
      'Invalid day type. Please provide either "start" or "end".'
    );
  }
};
