import z from "zod";

// Define Zod schemas based on the Mongoose schemas

const FullNameSchemaValidation = z.object({
  firstName: z
    .string({
      required_error: "First Name is required",
      invalid_type_error: "First Name must be a string",
    })
    .max(20),
  lastName: z
    .string({
      required_error: "Last Name is required",
      invalid_type_error: "Last Name must be a string",
    })
    .max(20),
});

const OrdersSchemaValidation = z.object({
  productName: z.string().max(15),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

const AddressSchemaValidation = z.object({
  street: z.string().min(5),
  city: z.string().min(5),
  country: z.string().min(5),
});

export const UserSchemaValidation = z.object({
  username: z.string().max(20).min(5),
  userId: z.number().int(),
  fullName: FullNameSchemaValidation,
  password: z.string().max(20),
  address: AddressSchemaValidation,
  age: z.number().int().positive(),
  email: z.string().email(),
  hobbies: z.array(z.string().min(3)).min(1),
  isActive: z.boolean(),
  orders: z.array(OrdersSchemaValidation).optional(),
});
