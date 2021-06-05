const getRandomNumber = (minValue, maxValue) => {
  if (minValue < 0 || maxValue < minValue) {
    return null;
  }

  return minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
};

// TODO Remove function call;
getRandomNumber(0, 7);

const isValidLength = (string, maxLength) => string.length <= maxLength;

// TODO Remove function call;
isValidLength('message', 100);
