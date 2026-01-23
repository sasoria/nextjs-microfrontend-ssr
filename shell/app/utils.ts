import { JSX } from "react";

export const validate = (microfrontend: string | JSX.Element | JSX.Element[]) => Array.isArray(microfrontend)