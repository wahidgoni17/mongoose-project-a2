import { TUser } from "./users.interface";
import User from "./users.model";

const createUserIntoDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find().select(
    "username fullName age email address"
  );
  return result;
};

const getAUserFromDB = async (id: string) => {
  const result = await User.findOne({ userId: id }).select("-password -orders");
  return result;
};

const updateUserFromDB = async (id: string, updateData: TUser) => {
  const options = { new: true };
  const result = await User.findOneAndUpdate(
    { userId: id },
    updateData,
    options
  ).select("-password");
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const options = { new: false };
  const result = await User.findOneAndDelete({ userId: id }, options);
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getAUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
