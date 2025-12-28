# Technical Specification

This document details the technical stack, architecture, and libraries for Alaa's portfolio project.

## 1. Core Technologies

*   **Language:** `TypeScript` - For type safety and robust code.
*   **Framework:** `React 18` - Leveraging modern features like the React Compiler.
*   **Build Tool:** `Vite` - For a fast and efficient development experience.
*   **Package Manager:** `npm`

## 2. Libraries & Dependencies

### Styling & Animation

*   **`Tailwind CSS (CDN)`**: For utility-first styling, providing a fast and efficient way to build a modern, responsive design directly in the markup.
*   **`framer-motion`**: A powerful animation library for React that will be used to create the fluid and interactive effects described in the UI/UX document, such as the sliding gallery, floating emojis, and button hover effects.

### Routing

*   **`react-router-dom`**: The standard for handling navigation between different sections or pages of the portfolio.

### Interactivity

*   **`react-modal`**: A lightweight and accessible library for creating the modal windows for displaying artwork.

### Icons

*   **`react-icons`**: To easily incorporate social media logos and other icons required for the UI.

## 3. Project Structure

The project will follow a standard feature-based organization to keep the code modular and maintainable.

```
/src
|-- /assets
|   |-- /images
|   |-- /fonts
|-- /components
|   |-- /common         # Reusable UI components (Button, Modal, etc.)
|   |-- /sections       # The main sections of the portfolio (Hero, About, etc.)
|-- /hooks            # Custom React hooks
|-- /pages            # Page-level components (if we expand to multiple pages)
|-- /styles           # Global styles and theme configuration
|-- App.jsx           # Main application component
|-- main.jsx          # Application entry point
```

## 4. Development & QA

*   **Linting:** `ESLint` will be used to maintain code quality and consistency.
*   **Testing:** `Vitest` and `React Testing Library` will be used for unit and component testing to ensure functionality.
*   **Preview:** The Vite dev server provides a live preview for instant feedback on all changes.
