const isAlpha = (code: number): boolean => {
  return !(!(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123));
};

const isNum = (code: number): boolean => {
  return code > 47 && code < 58;
};

const alphaNumRate = (str: string): number => {
  const alphaNumTotal = str
    .split('')
    .map(letter => letter.charCodeAt(0))
    .reduce((alphaNumTotal, code) => isAlpha(code) || isNum(code) ? alphaNumTotal + 1 : alphaNumTotal, 0);

  return alphaNumTotal / str.length * 100;
};

const numRate = (str: string): number => {
  const numTotal = str
    .split('')
    .map(letter => letter.charCodeAt(0))
    .reduce((numTotal, code) => isNum(code) ? numTotal + 1 : numTotal, 0);

  return numTotal / str.length * 100;
};

const getEmailFirstPart = (email: string): string => {
  return email.split('@')[0];
};

const emailAlphaRate = (email: string): boolean => {
  return alphaNumRate(getEmailFirstPart(email)) > 70;
};

const emailNumRate = (email: string): boolean => {
  return numRate(getEmailFirstPart(email)) < 30;
};

export { emailAlphaRate, emailNumRate };
