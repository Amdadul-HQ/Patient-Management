import { z } from "zod";

export const userFormValidation = z.object({
    name: z.string()
    .min(5,"Name must be at least 5 characters.")
    .max(20,"Name must be under 20 characters."),
    email:z.string().email("Invalid Email address"),
    phone:z.string().refine((phone)=>/^\+?[1-9]\d{1,14}$/.test(phone),
        'Invalid Phone Number'
    )
  })