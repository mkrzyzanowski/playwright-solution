import { LocalisedLabel } from "./types";

export const acceptCookiesLabels: LocalisedLabel[] = [
    { locale: new Intl.Locale('en-US'), label: 'Accept all' },
    { locale: new Intl.Locale('es-ES'), label: 'Aceptar todos' },
    { locale: new Intl.Locale('pl-PL'), label: 'Zaakceptuj wszystko' },
];

export const getLabel = (localisedLabels: LocalisedLabel[], language: string) => {
    const label = localisedLabels.find(label => label.locale.language === language);
    if (!label) {
        throw new Error(`Cannot find a label for the language: ${language}`);
    }
    return label.label;
}