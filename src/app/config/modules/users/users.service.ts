import { TUser } from "./users.interface";
import User from "./users.model";

const createUserIntoDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
