import { emailAlphaRate, emailNumRate, firstNameLength, lastNameLength } from "../src/rules";

describe('Name rules', () => {
  it('firstname should be longer than 2 characters', () => {
    expect(firstNameLength("Jean")).toBe(true);
    expect(firstNameLength("Al")).toBe(false);
    expect(firstNameLength("")).toBe(false);
  });

  it('lastname should be longer than 2 characters', () => {
    expect(lastNameLength("Dupont")).toBe(true);
    expect(lastNameLength("E")).toBe(false);
    expect(lastNameLength("")).toBe(false);
  });
});

describe('Email Rules', () => {
  it('email first part should have 70% alphanum', () => {
    expect(emailAlphaRate("jean.dupont@gmail.com")).toBe(true);
    expect(emailAlphaRate("j3-an.du-p-ont@gmail.com")).toBe(true);
    expect(emailAlphaRate("j3-an.d-u-p-ont@gmail.com")).toBe(false);
  });
  it('email first part should have less than 30% num', () => {
    expect(emailNumRate("jean.dupont@gmail.com")).toBe(true);
    expect(emailNumRate("j34n@gmail.com")).toBe(false);
  });
});
