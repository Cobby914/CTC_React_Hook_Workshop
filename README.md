# CTC React + Neon DB Table Practice (with Zustand)

Students will build a **React + Chakra UI** page that displays data from a **PostgreSQL Neon** database using **React hooks**, **Axios**, and **Zustand**.

## Tech Stack

- Backend: Node + Express + pg (Neon PostgreSQL)
- Frontend: React (Vite) + Chakra UI + Axios
- State management: Zustand
- Package manager: Yarn

## Getting Started

### 1. Backend

```bash
cd server
yarn
cp .env.example .env
yarn dev
```

Server runs at: `http://localhost:4000`

### 2. Frontend

Open a second terminal:

```bash
cd client
yarn
yarn dev
```

Frontend runs at something like: `http://localhost:5173`

## Student Tasks

Work mainly in the **frontend (`client/`)**:

- `src/App.jsx`
- `src/components/StudentsTable.jsx`

See the workshop instructions for details.
