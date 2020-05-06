import { Vehicle } from '../types/vehicle';

class QuotationService {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  static getRating(vehicle: Vehicle): Promise<number> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(35000);
      }, 50);
    });
  }
}

export default QuotationService;
