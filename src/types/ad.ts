import { Contacts } from './contacts';
import { Vehicle } from './vehicle';

export type Ad = {
  contacts: Contacts;
  creationDate: Date;
  price: number;
  publicationOptions: Array<string>;
  reference: string;
  vehicle: Vehicle;
}
