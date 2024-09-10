const langButtons = document.querySelectorAll<HTMLElement>("[data-language]");
const textsToChange = document.querySelectorAll<HTMLElement>("[data-section]");

import en from "./languages/en.json";
import es from "./languages/es.json";

type LanguageData = {
  [key: string]: {
    [key: string]: string;
  };
};

const languages: Record<string, LanguageData> = { en, es };

const updateContent = (selectedLanguage: keyof typeof languages) => {
  const data = languages[selectedLanguage] as LanguageData;

  textsToChange.forEach((element) => {
    const section = element.dataset.section;
    const value = element.dataset.value;

    if (section && value) {
      element.innerHTML = data[section]?.[value] || "";
    }
  });
};

updateContent("en");

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.language as keyof typeof languages;

    if (selectedLanguage) {
      updateContent(selectedLanguage);
    }
  });
});
