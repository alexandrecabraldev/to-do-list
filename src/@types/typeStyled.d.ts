import { DefaultTheme } from "../styles/DefaultTheme"

type DefaultThemeType = typeof DefaultTheme;

declare module "styled-components"{
    export interface DefaultTheme extends DefaultThemeType {}
}