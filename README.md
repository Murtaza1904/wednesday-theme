# 🪄 Wednesday Theme

A modern, customizable **React theme package** for Laravel-based admin panels and dashboards.  
Designed to provide a flexible UI foundation with reusable, modular components like Header, Sidebar, Card, Table, and Breadcrumb — all theme-aware and configuration-driven.

---

## 🚀 Features

- 🎨 **Theme-based architecture** — Easily switch and extend themes.
- ⚙️ **Config-driven layout** — Manage header, sidebar, and navigation links from a single config file.
- 🧩 **Reusable UI components** — Includes `Card`, `Table`, `Breadcrumb`, `Header`, and `Sidebar` components.
- 🌓 **Dark & Light modes** — Auto-detect and toggle theme modes.
- 🔐 **Auth-ready header** — Built-in user menu, profile, and logout functionality.
- 🪶 **Lightweight and modular** — Plug-and-play design that integrates seamlessly with your existing Laravel + React setup.

---

## 📦 Installation

In your Laravel + React project:

```bash
npm install wednesday-theme
````

or using Yarn:

```bash
yarn add wednesday-theme
```

---

## 🧱 Usage

Here’s how to integrate `wednesday-theme` components into your app:

### 1. Wrap your app with the Context Provider

```jsx
import { ContextProvider } from "wednesday-theme";

function App() {
  return (
    <ContextProvider>
      {/* your routes and components */}
    </ContextProvider>
  );
}
```

### 2. Use built-in components

```jsx
import { Header, Sidebar, Card, Table, Breadcrumb } from "wednesday-theme";

function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="container-fluid">
        <Breadcrumb />
        <Card>
          <CardHeader>Dashboard Overview</CardHeader>
          <CardBody>Welcome to your dashboard!</CardBody>
        </Card>
      </div>
    </>
  );
}
```

---

## ⚙️ Configuration

You can customize the header, sidebar links, and user menu in your theme config file:

```js
// theme.config.js
export const headerConfig = {
  profileLinks: [
    { name: "Profile", icon: "bi bi-person", path: "/profile" },
    { name: "Settings", icon: "bi bi-gear", path: "/settings" },
  ],
  logout: {
    name: "Logout",
    icon: "bi bi-box-arrow-left",
    action: "/auth/logout",
  },
};

export const sidebarConfig = [
  { name: "Dashboard", icon: "bi bi-speedometer2", path: "/dashboard" },
  { name: "Users", icon: "bi bi-people", path: "/users" },
];
```

---

## 🧩 Components

| Component                                               | Description                                 |
| ------------------------------------------------------- | ------------------------------------------- |
| `Header`                                                | App top bar with profile and logout actions |
| `Sidebar`                                               | Configurable sidebar navigation             |
| `Breadcrumb`                                            | Dynamic breadcrumb navigation               |
| `Card`, `CardHeader`, `CardBody`                        | Standardized card layout                    |
| `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`, `NoRecord` | Responsive table utilities                  |

---

## 🧠 Theme Philosophy

> *“Wednesday is the middle — a balance between light and dark, simplicity and flexibility.”*

`wednesday-theme` focuses on **consistency**, **reusability**, and **clean architecture** — giving you the freedom to focus on business logic while maintaining a cohesive design system.

---

## 🏷️ Versioning

Use Git tags to version your releases:

```bash
git tag -a v1.0.0 -m "Initial release v1.0.0"
git push origin v1.0.0
```

---

## 🛠️ Built With

* React 19
* Bootstrap 5
* Laravel (API backend)
* Axios
* PropTypes

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## 💡 Author

**Wednesday Labs**
Created with ❤️ for developers who love clean, reusable UI systems.

---