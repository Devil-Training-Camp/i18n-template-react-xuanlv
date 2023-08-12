import { t } from "@lingui/macro";
import { i18n } from "@lingui/core";
import { useLingui } from "@lingui/react";
import { dynamicActivateFrom } from "../../i18n";

const locales: Record<string, string> = {
  "zh-cn": "中文",
  en: "English",
};

export default function SwitchLocale() {
  useLingui();

  async function handleSwitchLocale() {
    const nextLocale = i18n.locale === "zh-cn" ? "en" : "zh-cn";

    await dynamicActivateFrom(nextLocale);
    localStorage.setItem("locale", nextLocale);
  }

  return (
    <button onClick={handleSwitchLocale} title={t`当前语言：${i18n.locale}`}>
      {locales[i18n.locale]}
    </button>
  );
}
