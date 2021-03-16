export interface IBusinessUser {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  prefix: string;
}

export interface IBusinessUserInputDTO {
  name: string;
  email: string;
  phoneNumber: string;
  prefix: string;
}
