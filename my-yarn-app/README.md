# 🧶 Stitch Witchery: Magical Yarn Administrative Portal

Welcome to the **Stitch Witchery Admin Portal**, a specialized inventory management system designed for purveyors of fine, mystical fibers. This project was developed as a React-based showcase for the Summative Lab, focusing on state management, client-side routing, and a "Mystical Fantasy" aesthetic.

---

## ✨ Features

- **Mystical Dashboard**: A landing page using a Midnight Purple and Arcane Gold theme, designed to reflect the "Stitch Witchery" brand.
- **Dynamic Inventory Grid**: A searchable archive of yarn products that filters in real-time by name or color.
- **The Grimoire (Add Product)**: A dedicated form for adding new magical fibers to the database, featuring specialized input styling and validation.
- **Global State Management**: Powered by the React Context API to ensure inventory data is synchronized across all views without "prop drilling."
- **Full Testing Suite**: Comprehensive unit tests and user interaction simulations using Vitest and React Testing Library.

---

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite (for ultra-fast development and bundling).
- **Routing**: React Router v6 for navigation.
- **State**: React Context API.
- **Backend (Mock)**: JSON Server to simulate a RESTful API.
- **Testing**: Vitest & React Testing Library.
- **Styling**: Custom CSS with a focus on "Arcane" aesthetics (Midnight Purple, Gold accents, and Parchment typography).

---

## 🚀 Setup & Installation

### 1. Clone/Fork the Repository
* **To Fork**: Click the **Fork** button -> **Create new fork** -> Name your fork and click **Create**.
* **To Clone**:
```bash
git clone [your-repository-link]
cd my-yarn-app

### 2. Install Dependencies
```bash
npm install

### 3. Start Backend (JSON Server)
Note: Run this in its own terminal
```bash
npx json-server --watch db.json --port 3000

### 4. Start Frontend (Vite)
Note: Run this in a second terminal
```bash
npm run dev 
portal accessible at http://localhost:['4 digits']

## 🧪 Running Tests
```bash
npm test

This suite verifies:

Component rendering (Navbar, Dashboard).

Search/Filter functionality logic.

User input handling and form submissions.

## 📜 Usage Instructions
1. Dashboard: View the current store status and navigate portal.
2. Yarn Inventory: Browse yarns. Use Search Bar to filter by fiber name (e.g., "Merino") or color (e.g., "Purple").
3. New Product: Access the "Add Product" form from the navbar. Fill out the "Grimoire" fields and click List Yarn to update the archive.

## ⚠️ Known Limitations
Persistent Storage: Data persistence relies on a local db.json file via JSON Server. If the server is not running, the dashboard will remain in a "Loading Spells" state.

Mobile Responsiveness: While the grid is flexible, the mystical theme is best viewed on desktop resolutions for the full "Arcane" experience.

🧙‍♂️ Author
Developed by Abbi Portwood for a Code School Software Development Program.