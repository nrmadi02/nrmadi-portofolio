// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
    bgavatar: string;
    bgimage: string;
    textglobal: string;
    borderlink: string;
    titlesection: string;
    h3section: string;
    psection: string;
    iconsidebar: string;
  }
}
