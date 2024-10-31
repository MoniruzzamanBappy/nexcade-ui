# Nexcade UI

**Nexcade UI** is a customizable React component library built with Tailwind CSS, offering a range of commonly used UI components such as Header, Footer, Spinner, Toast notifications, Date Picker, and more. It’s designed to help developers create beautiful, consistent UIs quickly and efficiently.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Components](#components)
  - [Header](#header)
  - [Footer](#footer)
  - [Spinner](#spinner)
  - [Toast](#toast)
  - [Date Picker](#date-picker)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

To install Nexcade UI, use npm:

```bash
npm install nexcade-ui
```

You also need to install Tailwind CSS in your project if you haven’t already:

```bash
npm install tailwindcss
npx tailwindcss init
```

Then, add the following to your Tailwind CSS configuration in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        "nexcade-blue": "#1E3A8A",
        "nexcade-green": "#00BFA6",
        "nexcade-red": "#FF5A5F",
        "nexcade-yellow": "#FFC72C",
        "nexcade-gray": "#F5F5F5",
      },
    },
  },
  variants: {},
  plugins: [],
};
```

# Getting Started

Import the components you need from `nexcade-ui` and start using them in your project. Each component is designed to be customizable with props.

```jsx
import { Header, Footer, Spinner, ToastContainer } from "nexcade-ui";

function App() {
  return (
    <div>
      <Header />
      <Spinner size="md" color="text-blue-500" />
      <ToastContainer position="top-right" />
      <Footer />
    </div>
  );
}
```

# Components

## Header

The `Header` component includes a logo, navigation links, and an optional button.

```jsx
import { Header } from "nexcade-ui";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Docs", href: "/docs" },
];

<Header
  logoSrc="/logo.png"
  links={navLinks}
  buttonLabel="Sign Up"
  onButtonClick={() => alert("Button clicked!")}
/>;
```

### Props

| Prop            | Type     | Description                                                                 |
| --------------- | -------- | --------------------------------------------------------------------------- |
| `logoSrc`       | string   | The path to the logo image                                                  |
| `links`         | array    | An array of objects with label and href properties for each navigation link |
| `buttonLabel`   | string   | The label for the optional button                                           |
| `onButtonClick` | function | The function to call when the button is clicked                             |

## Footer

The `Footer` component includes navigation links, social media icons, and copyright information.

### Usage

```jsx
import { Footer } from "nexcade-ui";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: <FiFacebook /> },
  { label: "Twitter", href: "https://twitter.com", icon: <FiTwitter /> },
];

<Footer
  links={navLinks}
  socialLinks={socialLinks}
  copyright="© 2024 MyLibrary"
/>;
```

### Props

| Prop          | Type   | Description                                                                          |
| ------------- | ------ | ------------------------------------------------------------------------------------ |
| `links`       | array  | An array of objects with label and href properties for each navigation link          |
| `socialLinks` | array  | An array of objects with label, href, and icon properties for each social media link |
| `copyright`   | string | The copyright information                                                            |

## Spinner

The `Spinner` component displays a loading spinner with customizable size and color.

### Usage

```jsx
import { Spinner } from "nexcade-ui";

<Spinner size="lg" color="text-blue-500" />;
```

### Props

| Prop    | Type   | Description                          |
| ------- | ------ | ------------------------------------ |
| `size`  | string | The size of the spinner (sm, md, lg) |
| `color` | string | The color of the spinner             |

## Toast

The `ToastContainer` component manages temporary notifications that appear and disappear automatically.

### Usage

```jsx
import { ToastContainer } from "nexcade-ui";

<ToastContainer position="top-right" />;
```

### Props

| Prop       | Type   | Description                                                                          |
| ---------- | ------ | ------------------------------------------------------------------------------------ |
| `position` | string | The position of the toast container (top-left, top-right, bottom-left, bottom-right) |

## Date Picker

The `DatePicker` component supports single and range date selection.

### Usage

```jsx
import { DatePicker } from "nexcade-ui";

<DatePicker isRange={false} onSelect={(date) => console.log(date)} />;
```

### Props

| Prop       | Type     | Description                                  |
| ---------- | -------- | -------------------------------------------- |
| `isRange`  | boolean  | Whether to enable range selection            |
| `onSelect` | function | The function to call when a date is selected |

# Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements or bug fixes.

# License

This project is licensed under the MIT License.

#

This README gives an overview of Nexcade UI, covering installation, component usage, props, and example code snippets to help users get started. Feel free to modify and expand it as your component library grows.
