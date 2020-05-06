import { QuotationService } from '../services';
import { Ad } from '../types/ad';

const isAdPriceAllowed = (price: number, quoteRating: number): boolean => {
  return price > quoteRating * 0.8 && price < quoteRating * 1.2;
};

const priceQuotationRate = (ad: Ad): Promise<boolean> => {
  return QuotationService.getRating(ad.vehicle).then(quoteRating => {
    return isAdPriceAllowed(ad.price,  quoteRating);
  });
};

export { priceQuotationRate, isAdPriceAllowed };
