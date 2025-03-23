# 📚 CodiBook - Library Management System

Welcome to **CodiBook**, a modern, full-stack **Library Management Web Application** built with **Next.js 13 (App Router)**, **React**, **TypeScript**, and **TailwindCSS**.\
This project allows users to explore books, authors, and ratings in an interactive, responsive interface.

---

## 🚀 Features

✅ **Browse Books**\
✅ **View & Manage Authors**\
✅ **Book Ratings**\
✅ **CRUD Functionality for Books, Authors, and Ratings**\
✅ **Search and Sort Functionality**\
✅ **Responsive Design**\
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
- **Lucide-react** (for icons)
- **react-spinners** (for loading)
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

### 📚 Authors Components

| Component               | Description                          |
| ----------------------- | ------------------------------------ |
| `AuthorCard.tsx`        | Displays an individual author's card |
| `AuthorList.tsx`        | Lists multiple authors               |
| `CreateAuthorModal.tsx` | Modal for adding a new author        |
| `EditAuthorModal.tsx`   | Modal for editing an existing author |

### 📖 Books Components

| Component             | Description                        |
| --------------------- | ---------------------------------- |
| `BookCard.tsx`        | Displays an individual book's card |
| `BookList.tsx`        | Lists multiple books               |
| `CreateBookModal.tsx` | Modal for adding a new book        |

### 🖼️ Layout Components

| Component             | Description                     |
| --------------------- | ------------------------------- |
| `BreadcrumbNav.tsx`   | Navigation breadcrumbs          |
| `DrawerComponent.tsx` | Sidebar or drawer component     |
| `Footer.tsx`          | Site footer                     |
| `GlobalLayout.tsx`    | Global layout wrapper           |
| `Homepage.tsx`        | Home page content and structure |

### ⭐ Ratings Components

| Component        | Description                                 |
| ---------------- | ------------------------------------------- |
| `RatingCard.tsx` | Displays a rating card for a book or author |

### ⚙️ UI Components

| Component               | Description                         |
| ----------------------- | ----------------------------------- |
| `Button.tsx`            | Reusable button component           |
| `ConfirmationModal.tsx` | Confirmation dialog/modal           |
| `EntityFormModal.tsx`   | Form modal for entity creation/edit |
| `Input.tsx`             | Custom input field                  |
| `Loading.tsx`           | Loading spinner or placeholder      |
| `Modal.tsx`             | Reusable modal component            |
| `PageTitle.tsx`         | Reusable page title component       |
| `Ratings.tsx`           | Star ratings display component      |
| `TopAuthors.tsx`        | Lists top authors in the system     |
| `TopRatings.tsx`        | Lists top-rated books in the system |

---

## 🎨 Styling

- **TailwindCSS** is used for utility-first CSS.
- Global styles are in `/styles/globals.css`.
- Customize `tailwind.config.js` for theme extensions.

---

## 📂 Folder Highlights

```
/src/components/
│
├── authors/            # Author-related components
│   ├── AuthorCard.tsx
│   ├── AuthorList.tsx
│   ├── CreateAuthorModal.tsx
│   └── EditAuthorModal.tsx
│
├── books/              # Book-related components
│   ├── BookCard.tsx
│   ├── BookList.tsx
│   └── CreateBookModal.tsx
│
├── layout/             # Global layout components
│   ├── BreadcrumbNav.tsx
│   ├── DrawerComponent.tsx
│   ├── Footer.tsx
│   ├── GlobalLayout.tsx
│   └── Homepage.tsx
│
├── ratings/            # Rating-related components
│   └── RatingCard.tsx
│
└── ui/                 # Reusable UI components
    ├── Button.tsx
    ├── ConfirmationModal.tsx
    ├── EntityFormModal.tsx
    ├── Input.tsx
    ├── Loading.tsx
    ├── Modal.tsx
    ├── PageTitle.tsx
    ├── Ratings.tsx
    ├── TopAuthors.tsx
    └── TopRatings.tsx
```

---

## ✅ Current Functionality

- View Books, Authors, and Ratings
- Full CRUD functionality for Books, Authors, and Ratings
- Search and Sort functionality for Books and Authors

---

## 📃 Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create an optimized build    |
| `npm run start` | Start the production server  |

---

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

- **Project Lead**: _Godfred Mireku Owusu_
- **Email**: _godfred-mireku.owusu\@student.junia.com_
- **GitHub**: [@Godfred-Owusu]\([https://github.com/Godfred-Owusu](https://github.com/Godfred-Owusu))
