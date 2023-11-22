import { Request, Response } from "express";
import { UserSchemaValidation } from "./users.validation";
import { UserServices } from "./users.service";

const createAUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    //data validation with using zod
    const userParsedData = UserSchemaValidation.parse(userData);
    const result = await UserServices.createUserIntoDB(userParsedData);
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
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

export const UserControllers = {
  createAUser,
};
