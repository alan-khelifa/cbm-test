import {
  emailAlphaRate,
  emailNumRate,
  firstNameLength,
  lastNameLength,
  isAdPriceAllowed,
  vehicleShouldNotBeBlacklisted
} from '../src/rules';
import { Vehicle } from '../src/types/vehicle';

describe('Name rules', () => {
  it('firstname should be longer than 2 characters', () => {
    expect(firstNameLength('Jean')).toBe(true);
    expect(firstNameLength('Al')).toBe(false);
    expect(firstNameLength('')).toBe(false);
  });

  it('lastname should be longer than 2 characters', () => {
    expect(lastNameLength('Dupont')).toBe(true);
    expect(lastNameLength('E')).toBe(false);
    expect(lastNameLength('')).toBe(false);
  });
});

describe('Email Rules', () => {
  it('email first part should have 70% alphanum', () => {
    expect(emailAlphaRate('jean.dupont@gmail.com')).toBe(true);
    expect(emailAlphaRate('j3-an.du-p-ont@gmail.com')).toBe(true);
    expect(emailAlphaRate('j3-an.d-u-p-ont@gmail.com')).toBe(false);
  });
  it('email first part should have less than 30% num', () => {
    expect(emailNumRate('jean.dupont@gmail.com')).toBe(true);
    expect(emailNumRate('j34n@gmail.com')).toBe(false);
  });
});

describe('Quotation Rules', () => {
  it('ad price should have a 20% maximum difference with quote price', () => {
    expect(isAdPriceAllowed(38000, 35000)).toBe(true);
    expect(isAdPriceAllowed(30000, 35000)).toBe(true);
    expect(isAdPriceAllowed(42001, 35000)).toBe(false);
  });
});

describe('Blacklist Rules', () => {
  it('Vehicle should not be blacklisted', async () => {
    expect(await vehicleShouldNotBeBlacklisted({ registerNumber: 'AA111AA'} as Vehicle)).toBe(true);
    expect(await vehicleShouldNotBeBlacklisted({ registerNumber: 'AA123AA'} as Vehicle)).toBe(false);
  });
});
