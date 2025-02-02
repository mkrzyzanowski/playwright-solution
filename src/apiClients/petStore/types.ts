export enum PetStatus {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold'
}

export interface Pet {
  id: number;
  name: string;
  status: PetStatus
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}

export interface PetCount {
  [key: string]: number;
}

export interface ApiResponse {
  code: number;
  type: string;
  message: string;
}