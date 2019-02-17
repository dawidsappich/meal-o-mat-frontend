export interface Meal {
  id?: number;
  name: string;
  displayName: string;
  storeLocation?: {
    storeId?: number;
    latitude?: number;
    longitude?: number;
    city: string;
    street: string;
    houseNr: string;
  };
}
