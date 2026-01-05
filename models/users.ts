import z from "zod";

export type User = {
  id: string;
  username: string;
  email: string;
};

// Zod schema for form validation
export const signupSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Login is required")
    .min(3, "Login must be at least 3 characters"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type SignupFormData = z.infer<typeof signupSchema>;

export const updateProfileSchema = signupSchema.pick({
  name: true,
  email: true,
});

export type UpdateProfileFormData = z.infer<typeof updateProfileSchema>;
