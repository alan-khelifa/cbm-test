import adData from './assets/ad.json';
import {
  emailAlphaRate,
  emailNumRate,
  firstNameLength,
  lastNameLength,
  priceQuotationRate,
  vehicleShouldNotBeBlacklisted
} from './rules';
import { Ad } from './types/ad';
import { Contacts } from './types/contacts';
import { Vehicle } from './types/vehicle';

const ad: Ad = {
  contacts: adData.contacts as Contacts,
  creationDate: new Date(adData.creationDate),
  price: adData.price,
  publicationOptions: adData.publicationOptions,
  reference: adData.reference,
  vehicle: adData.vehicle as Vehicle,
};

const ruleSet = [
  {
    name: 'rule::firstname::length',
    method: firstNameLength(ad.contacts.firstName),
  },
  {
    name: 'rule::lastname::length',
    method: lastNameLength(ad.contacts.lastName),
  },
  {
    name: 'rule::email::alpha_rate',
    method: emailAlphaRate(ad.contacts.email),
  },
  {
    name: 'rule::email::number_rate',
    method: emailNumRate(ad.contacts.email),
  },
  {
    name: 'rule::price::quotation_rate',
    method: priceQuotationRate(ad),
  },
  {
    name: 'rule::registernumber::blacklist',
    method: vehicleShouldNotBeBlacklisted(ad.vehicle),
  },
];

Promise.all(ruleSet.map(rule => rule.method)).then(ruleResults => {
  const failedRules = [];
  for (let i = 0; i < ruleSet.length; i++) {
    if (!ruleResults[i]) {
      failedRules.push(ruleSet[i].name);
    }
  }

  console.log(JSON.stringify({
    reference: ad.reference,
    scam: failedRules.length > 0,
    rules: failedRules,
  }));
});
