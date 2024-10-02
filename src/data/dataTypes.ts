export interface IData {
  title: string;
  work: IWork[];
  client: IClient;
  ownDetails: IOwnDetails;
  bankDetails: IBankDetails;
}

type CostType = "hourly" | "monthly" | "fixed";

export interface IWork {
  stage: string;
  cost: number;
  currency: string;
  title: string;
  description: string;
  estimatedTime: string;
  costType: CostType | string;
}

export interface IClient {
  name: string;
  address: IAddress;
}

export interface IOwnDetails {
  name: string;
  fullName: string;
  address: IAddress;
  tel: string;
  email: string;
  homepage: string;
  steuerId: string;
}

export interface IAddress {
  line1: string;
  line2: string;
  line3?: string;
  country: string;
  postcode: string;
}

export interface IBankDetails {
  inhaber: string;
  IBAN: string;
  BIC: string;
  bank: string;
}
