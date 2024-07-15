import { resources, supportedLanguageCodes } from "@/locales";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		// debug: true,
		fallbackLng: "en",
		ns: ["auth", "globals", "appCalendars", "appCalendarId"],
		supportedLngs: supportedLanguageCodes,
		resources,
	});
