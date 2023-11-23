import { Schema, model } from "mongoose";
import {
  TAddress,
  TFullName,
  TOrders,
  TUser,
  UserModel,
} from "./users.interface";
import bcrypt from "bcrypt";
import config from "../..";

const FullNameSchema = new Schema<TFullName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const AddressSchema = new Schema<TAddress>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const OrdersSchema = new Schema<TOrders>({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const UserSchema = new Schema<TUser>({
  username: {
    type: String,
    required: true,
    maxlength: 20,
    unique: true,
  },
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  fullName: FullNameSchema,
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: AddressSchema,
  hobbies: {
    type: [String],
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  orders: {
    type: [OrdersSchema],
  },
});

// encoding password
UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_round)
  );
  next();
});

// using static method to find user
UserSchema.statics.isUserExists = async function (userId: string) {
  const userExistence = await User.findOne({ userId });
  return userExistence;
};

const User = model<TUser, UserModel>("User", UserSchema);
export default User;
