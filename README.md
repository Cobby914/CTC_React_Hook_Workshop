# CTC React + Neon DB Table Practice (with Zustand)

Students will build a **React + Chakra UI** page that displays data from a **PostgreSQL Neon** database using **React hooks**, **Axios**, and **Zustand**.

## Tech Stack

- Backend: Node + Express + pg (Neon PostgreSQL)
- Frontend: React (Vite) + Chakra UI + Axios
- State management: Zustand
- Package manager: Yarn

## Getting Started

### Quick Start (Recommended)

From the root directory:

```bash
yarn install  # Installs dependencies for root, client, and server
yarn start    # Starts both client and server concurrently
```

- Server runs at: `http://localhost:4000`
- Frontend runs at: `http://localhost:5173`

### Manual Setup (Alternative)

If you prefer to run client and server separately:

**Backend:**
```bash
cd server
yarn install
yarn dev
```

**Frontend (in a separate terminal):**
```bash
cd client
yarn install
yarn dev
```

## Student Tasks

Work mainly in the **frontend (`client/`)**:

- `src/App.jsx`
- `src/components/StudentsTable.jsx`

See the workshop instructions for details.
