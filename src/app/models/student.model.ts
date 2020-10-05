export interface StudentT {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressT;
  phone: string;
  website: string;
  company: CompanyT;
}

interface AddressT {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoT;
}

interface GeoT{
  lat: string;
  lng: string;
}

interface CompanyT {
  name: string;
  catchPhrase: string;
  bs: string;
}
