export const sidebarConfig = {
  brand: {
    name: "CMS",
    logo: "/images/logo.svg",
    shortName: "C",
    to: "/dashboard",
  },
  links: [
    {
      title: "Dashboard",
      icon: "bi bi-house-gear",
      to: "/dashboard",
    },
    {
      title: "Management",
      isTitle: true,
    },
    {
      title: "Roles",
      icon: "bi bi-person-badge",
      to: "/roles",
    },
    {
      title: "Users",
      icon: "bi bi-people",
      to: "/users",
    },
  ],
};
