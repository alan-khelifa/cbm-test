const isLongerThan2 = (str: string): boolean => {
  return str.length > 2;
};

const firstNameLength = (firstName: string): boolean => {
  return isLongerThan2(firstName);
};

const lastNameLength = (lastName: string): boolean => {
  return isLongerThan2(lastName);
};

export { firstNameLength, lastNameLength };
