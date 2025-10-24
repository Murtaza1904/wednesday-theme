export const headerConfig = {
  profileMenu: [
    {
      type: "link",
      label: "Profile",
      icon: "bi bi-person",
      to: "/profile",
    },
    {
      type: "link",
      label: "Settings",
      icon: "bi bi-gear",
      to: "/settings",
    },
    { type: "divider" },
    {
      type: "action",
      label: "Logout",
      icon: "bi bi-box-arrow-left",
      id: "logout-button",
      action: "logout",
    },
  ],
};
