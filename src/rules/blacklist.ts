import { Vehicle } from '../types/vehicle';
import { BlacklistService } from '../services';

const vehicleShouldNotBeBlacklisted = (vehicle: Vehicle) => {
  return BlacklistService.isBlacklisted(vehicle.registerNumber).then(isBlacklisted => !isBlacklisted);
};

export { vehicleShouldNotBeBlacklisted };
