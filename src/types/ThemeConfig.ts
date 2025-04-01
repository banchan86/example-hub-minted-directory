import type Tag from "./Tag";

export interface ThemeConfig {
  general: {
    title: string;
    logo: string;
    iconLogo: string;
    seo: {
      name: string;
      description: string;
      url: string;
    };
  };
  directory: {
    data: {
      source: "markdown" | "json";
    };
    search: {
      placeholder: string;
      showCount: boolean;
      icon: string;
      tags: {
        display: "none" | "select" | "show-all"; // Based on options
        intersection: boolean;
      };
    };
    grid: {
      list: boolean;
      emptyState: {
        text: string;
        type: "button" | "simple" | "link"; // Based on options
        icon: string;
      };
      card: {
        image: boolean;
        border: "dashed" | "shadow" | "outline"; // Based on options
        links: "site" | "outbound";
      };
      submit: {
        show: boolean;
        first: boolean;
        title: string;
        description: string;
        hideable: boolean;
      };
    };
    featured: {
      showOnAllPages: boolean;
      showOnSide: boolean;
      icon: string;
      labelForCard: string;
    };
    tags: Array<Tag>;
    tagPages: {
      title: string;
    };
  };
  header: {
    banner: {
      show: boolean;
      text: string;
      link: string;
      brandText: string;
    };
    navbar: {
      colorModeSelector: boolean;
      links: [{ href: string; name: string; target?: string }];
    };
    actionButton: {
      text: string;
      href: string;
    };
  };
  footer: {
    description: string;
    socials: {
      github: {
        link: string;
        icon: string;
      };
      discord: {
        link: string;
        icon: string;
      };
    };
  };
  ui: {
    icons: {
      dark: string;
      light: string;
    };
  };
}
