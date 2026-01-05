import { getTranslations } from "next-intl/server";
import { Button } from "./shared/button";

const Hero = async () => {
  const t = await getTranslations();
  return (
    <section className="w-full flex justify-center py-17 relative overflow-hidden">
      <div className="max-w-7xl flex flex-col items-center gap-5 px-4">
        <div className="text-white text-center max-w-2xl">
          <h2>{t("hero.projectManagementApp")}</h2>
          <h1>{t("hero.colaborateAndBuildFasterTogether")}</h1>
        </div>
        <div className="flex flex-col items-center gap-10 text-center max-w-md">
          <p className="text-large text-dark-2">
            {t(
              "hero.createShareAndGetFeedbackWithCollaborativeBoardsForRapidDevelopment",
            )}
          </p>
          <Button variant="default" className="bg-cyan-7 hover:bg-cyan-8 w-fit">
            {t("hero.createKanbanBoard")}
          </Button>
        </div>
      </div>

      <div
        className="opacity-80  w-[1000px] h-[1000px] rounded-[500px] absolute top-[-50px] lg:left-[-700px] md:left-[-800px] left-[-900px] rotate-45 
      z-[-1] bg-[linear-gradient(90deg,var(--color-grape-4)_0%,var(--color-indigo-5)_33%,var(--color-cyan-4)_66%,yellow_100%)] blur-3xl"
      />
      <div
        className="opacity-80 w-[1000px] h-[1000px] rounded-[500px] absolute top-[-50px] lg:right-[-700px] md:right-[-800px] right-[-900px] rotate-45 
      z-[-1] bg-[linear-gradient(90deg,var(--color-grape-4)_0%,var(--color-indigo-5)_33%,var(--color-cyan-4)_66%,yellow_100%)] blur-3xl"
      />
    </section>
  );
};

export default Hero;
