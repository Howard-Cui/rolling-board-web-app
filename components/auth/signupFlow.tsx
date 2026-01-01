"use client";

import { useState } from "react";
import { SignupFormData, signupSchema } from "@/models/users";
import SignupForm from "../form/signupForm";
import OTPForm from "../form/otpForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type SignUpSteps = "signup" | "otp";

const SignupFlow = () => {
  const router = useRouter();

  const [step, setStep] = useState<SignUpSteps>("signup");
  const signUpForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const handleSignupSuccess = () => {
    setStep("otp");
  };

  const handleOTPSuccess = async () => {
    try {
      router.push("/app");
    } catch (error) {
      // TODO: Bugsnag notify error
      console.error(error);
    }
  };

  return (
    <>
      {step === "signup" && (
        <SignupForm form={signUpForm} onSuccess={handleSignupSuccess} />
      )}
      {step === "otp" && (
        <OTPForm
          userId={signUpForm.getValues("email")}
          onSuccess={handleOTPSuccess}
        />
      )}
    </>
  );
};

export default SignupFlow;
