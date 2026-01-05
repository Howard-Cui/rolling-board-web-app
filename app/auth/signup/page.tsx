import TickCircleIcon from "@/public/svgs/tick-circle.svg";
import { getTranslations } from "next-intl/server";
import SignupFlow from "@/components/auth/signupFlow";

const SignupPage = async () => {
  const t = await getTranslations();
  return (
    <div className="flex flex-1 items-center justify-center w-full min-h-screen">
      <div className="flex max-w-7xl flex-1 items-center justify-center w-full gap-10">
        {/* App Label */}
        <div className="text-start mb-8 flex-1 flex flex-col items-end">
          <p className="text-dark-2 text-small font-semibold mb-2 max-w-md w-md flex gap-1 items-center">
            <TickCircleIcon className="w-4 h-4 text-cyan-6" />
            {t("signup.appLabel")}
          </p>
          <h1 className="text-white text-h2 font-bold mb-2 max-w-md w-md text-wrap">
            {t("signup.title")}
          </h1>
          <p className="text-dark-2 text-medium max-w-md w-md">
            {t("signup.description")}
          </p>
        </div>

        <div className="flex-1">
          <SignupFlow />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
