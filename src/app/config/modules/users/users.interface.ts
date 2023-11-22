type TUserName = {
  firstName: string;
  lastName: string;
};

type TAddress = {
  street: string;
  city: string;
  country: string;
};

type TOrders = {
  productName: string;
  price: number;
  quantity: number;
};

export type TUser = {
  userId: number;
  userName: string;
  password: string;
  fullName: TUserName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  orders?: TOrders[];
};
