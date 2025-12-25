import { getRequestConfig } from "next-intl/server";

const LOCALES = {
  English: "en",
  Chinese: "zh",
};

export default getRequestConfig(async () => {
  const locale = LOCALES.English;

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    locale,
  };
});
