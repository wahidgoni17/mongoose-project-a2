import { Request, Response } from "express";
import { UserSchemaValidation } from "./users.validation";
import { UserServices } from "./users.service";
import User from "./users.model";

const createAUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    //data validation with using zod
    const userParsedData = UserSchemaValidation.parse(userData);
    const result = await UserServices.createUserIntoDB(userParsedData);
    const showData = {
      userId: result.userId,
      username: result.username,
      fullName: {
        firstName: result.fullName.firstName,
        lastName: result.fullName.lastName,
      },
      age: result.age,
      email: result.email,
      isActive: result.isActive,
      hobbies: result.hobbies,
      address: {
        street: result.address.street,
        city: result.address.city,
        country: result.address.country,
      },
    };
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: showData,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "things just got out off hand",
      err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "things just got out off hand",
      error,
    });
  }
};

const getAUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!(await User.isUserExists(userId))) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    const result = await UserServices.getAUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "things just got out off hand",
      error,
    });
  }
};

const getAllOrdersOfAUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!(await User.isUserExists(userId))) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    const result = await UserServices.getAllOrdersOfAUserFromDb(userId);

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "things just got out off hand",
      error,
    });
  }
};

const getTotalPriceOfAUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!(await User.isUserExists(userId))) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    const result = await UserServices.getTotalPriceOfAUserOrdersFromDb(
      parseInt(userId)
    );
    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data: {
        totalPrice: result,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Total Price Calculation failed",
      error,
    });
  }
};

const updateAUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { user: updateData } = req.body;
    if (!(await User.isUserExists(userId))) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    const result = await UserServices.updateUserFromDB(userId, updateData);
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "things just got out off hand",
      error,
    });
  }
};

const updateProductOfAUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { product } = req.body;
    if (!(await User.isUserExists(userId))) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    await UserServices.updateProductOfAUserFromDB(userId, product);
    res.status(200).json({
      success: true,
      message: "Order Created successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "things just got out off hand",
      error,
    });
  }
};
const deleteAUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!(await User.isUserExists(userId))) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    await UserServices.deleteUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "things just got out off hand",
      error,
    });
  }
};

export const UserControllers = {
  createAUser,
  getAllUsers,
  getAUser,
  getAllOrdersOfAUser,
  getTotalPriceOfAUserOrders,
  updateAUser,
  updateProductOfAUser,
  deleteAUser,
};
