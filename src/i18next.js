import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./bahasa/en/translation.json";
import translationID from "./bahasa/id/translation.json";

i18n.use(initReactI18next).init({
    resources:
    {
        en: {translation: translationEN},
        id: {translation: translationID}
    }, 
    lng: "id",
    fallbackLng: "en",
    interpolation:{escapeValue: false}
});