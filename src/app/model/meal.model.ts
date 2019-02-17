export interface Meal {
  id?: number;
  name: string;
  displayName: string;
  location?: {
    latitude?: number;
    longitude?: number;
    city: string;
    street: string;
    houseNr: string;
  };
}
