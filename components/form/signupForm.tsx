"use client";

import { useTranslations } from "next-intl";
import Input from "../shared/input";
import Link from "next/link";
import { Button } from "../shared/button";
import { signUp } from "@/services/auth";
import { UseFormReturn } from "react-hook-form";
import { SignupFormData } from "@/models/users";

type SignupFormProps = {
  onSuccess?: () => void;
  form: UseFormReturn<SignupFormData>;
};

const SignupForm = ({ form, onSuccess }: SignupFormProps) => {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: SignupFormData) => {
    try {
      await signUp(data.name, data.email, data.password);
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
        {t("signup.form.title")}
      </h2>

      <div className="flex flex-col gap-4 mb-6">
        {/* Name Input */}
        <Input
          id="name"
          type="text"
          label={t("signup.form.name")}
          placeholder={t("signup.form.name")}
          error={errors.name?.message}
          {...register("name")}
        />

        {/* Login Input */}
        <Input
          id="email"
          type="email"
          label={t("signup.form.email")}
          placeholder={t("signup.form.email")}
          error={errors.email?.message}
          {...register("email")}
        />

        {/* Password Input */}
        <Input
          id="password"
          type="password"
          label={t("signup.form.password")}
          placeholder={t("signup.form.password")}
          error={errors.password?.message}
          {...register("password")}
        />
      </div>

      {/* Sign In Link */}
      <div>
        <p className="text-dark-2 text-small">
          {t("signup.form.alreadyHaveAccount")}{" "}
          <Link
            href="/auth/login"
            className="text-dark-0 hover:text-dark-1 font-semibold transition-colors"
          >
            {t("signup.form.signIn")}
          </Link>
        </p>
      </div>

      <div className="flex justify-center">
        {/* Submit Button */}
        <Button type="submit" variant="default" disabled={isSubmitting}>
          {t("signup.form.createAccount")}
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
