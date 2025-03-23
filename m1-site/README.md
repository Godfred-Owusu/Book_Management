# 📚 CodiBook - Library Management System

Welcome to **CodiBook**, a modern, full-stack **Library Management Web Application** built with **Next.js 13 (App Router)**, **React**, **TypeScript**, and **TailwindCSS**.  
This project allows users to explore books, authors, and ratings in an interactive, responsive interface.

---

## 🚀 Features

✅ **Browse Books**  
✅ **View & Manage Authors**  
✅ **Book Ratings**  
✅ **Search & Filter Functionality**  
✅ **Responsive Design**  
✅ **Reusability & Modularity** (component-driven architecture)

---

## 🗂️ Project Structure

```
src/
│
├── app/                   # Next.js App Router pages
│   ├── authors/           # Author-related pages
│   │   └── [id]/          # Dynamic author details page
│   └── books/             # Book-related pages
│       └── [id]/          # Dynamic book details page
│
├── components/            # Reusable UI & feature components
│   ├── authors/           # Author cards, lists, and modals
│   ├── books/             # Book cards, lists, and modals
│   ├── layout/            # Page layout components (Header, Footer, etc.)
│   ├── ratings/           # Rating cards
│   └── ui/                # Reusable UI components (buttons, modals, loaders)
│
├── models/                # TypeScript type definitions
│   ├── Author.ts
│   ├── Book.ts
│   └── Rating.ts
│
├── providers/             # API service providers for fetching data
│   ├── authorProvider.ts
│   ├── bookProvider.ts
│   └── ratingProvider.ts
│
└── styles/                # Global styles (TailwindCSS)
    └── globals.css
```

---

## 🛠️ Tech Stack

- **Next.js 13 (App Router)**
- **React**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (for smooth animations)
- **Lucide-react / Heroicons** (for icons)
- **React Toastify** (for toast notifications)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Godfred-Owusu/Book_Management.git
cd Book_Management/m1-site
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 🧱 Components Overview

### Layout Components

| Component      | Description                        |
| -------------- | ---------------------------------- |
| `GlobalLayout` | Wraps pages with the global layout |
| `Footer`       | Site footer with links & info      |
| `Homepage`     | Hero section on the homepage       |

### Authors Components

| Component           | Description                    |
| ------------------- | ------------------------------ |
| `AuthorCard`        | Displays brief author info     |
| `AuthorList`        | Lists all authors              |
| `CreateAuthorModal` | Modal to add new authors       |
| `EditAuthorModal`   | Modal to edit existing authors |

### Books Components

| Component         | Description              |
| ----------------- | ------------------------ |
| `BookCard`        | Displays brief book info |
| `BookList`        | Lists all books          |
| `CreateBookModal` | Modal to add new books   |

### UI Components

| Component                     | Description                   |
| ----------------------------- | ----------------------------- |
| `Button`                      | Reusable button component     |
| `Modal` / `ConfirmationModal` | Custom modals & confirmations |
| `Ratings` / `RatingCard`      | Displays book ratings         |
| `TopRatings`                  | Lists top-rated books         |
| `TopAuthors`                  | Lists top authors             |

---

## 🎨 Styling

- **TailwindCSS** is used for utility-first CSS.
- Global styles are in `/styles/globals.css`.
- Customize `tailwind.config.js` for theme extensions.

---

## 📂 Folder Highlights

| Folder            | Purpose                                 |
| ----------------- | --------------------------------------- |
| `/src/app`        | Next.js 13 App Router pages             |
| `/src/components` | UI and functional components            |
| `/src/models`     | TypeScript types (Book, Author, Rating) |
| `/src/providers`  | API service functions (CRUD ops)        |
| `/src/styles`     | CSS and Tailwind config                 |

---

## ✅ Future Improvements

- User Authentication & Roles
- Book Borrowing & Return System
- Search & Filter Enhancements
- Backend Integration (NestJS / Express API)

---

## 📃 Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create an optimized build    |
| `npm run start` | Start the production server  |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

- **Project Lead**: _Godfred Mireku Owusu_
- **Email**: _godfred-mireku.owusu@student.junia.com_
- **GitHub**: [@Godfred-Owusu](https://github.com/Godfred-Owusu)
