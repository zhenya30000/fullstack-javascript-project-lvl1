const getRandomInRange = (max, min = 0) => {
  let randomNum = 0;
  randomNum = Math.floor((Math.random() * (max - min)) + min);
  return randomNum;
};

export default getRandomInRange;
