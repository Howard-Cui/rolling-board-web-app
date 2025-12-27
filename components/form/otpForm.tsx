"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../shared/input";
import Link from "next/link";
import { Button } from "../shared/button";
import { verifySignUp } from "@/services/auth";

// Zod schema for form validation
const otpSchema = z.object({
  otp: z
    .string()
    .min(1, "One time password is required")
    .min(6, "One time password must be at least 6 characters"),
});

type OTPFormData = z.infer<typeof otpSchema>;

type OTPFormProps = {
  userId: string;
  onSuccess?: () => void;
};

const OTPForm = ({ userId, onSuccess }: OTPFormProps) => {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
  });

  const onSubmit = async (data: OTPFormData) => {
    try {
      await verifySignUp(userId, data.otp);
      onSuccess?.();
    } catch (error) {
      // TODO: Bugsnag notify error
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-dark-9 rounded-[16px] p-8 border border-white/10 flex flex-col gap-5 max-w-md"
    >
      <h2 className="text-white text-h4 font-bold mb-6">
        {t("signup.otpForm.title")}
      </h2>

      <div className="flex flex-col gap-4 mb-6">
        {/* OTP Input */}
        <Input
          id="otp"
          type="text"
          label={t("signup.otpForm.otpLabel")}
          placeholder={t("signup.otpForm.otpPlaceholder")}
          error={errors.otp?.message}
          {...register("otp")}
        />
      </div>

      {/* Sign In Link */}
      <div>
        <p className="text-dark-2 text-small">
          {t("signup.otpForm.alreadyHaveAccount")}{" "}
          <Link
            href="/app/login"
            className="text-dark-0 hover:text-dark-1 font-semibold transition-colors"
          >
            {t("signup.otpForm.signIn")}
          </Link>
        </p>
      </div>

      <div className="flex justify-center">
        {/* Submit Button */}
        <Button type="submit" variant="default" disabled={isSubmitting}>
          {t("signup.otpForm.confirmButton")}
        </Button>
      </div>
    </form>
  );
};

export default OTPForm;
