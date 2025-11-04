# 📊 React Dashboard & Management System

## 📸 Preview

## 🧭 Overview

A modern, responsive **React-based dashboard application** that includes:

- 📈 Analytics and statistics with charts (ECharts)
- 🗓️ Calendar with event scheduling (FullCalendar)
- 📋 Trello-style task board (React Kanban)
- 👥 User data table (Material React Table)
- ⚡ Modular layout with reusable components and CSS Modules

The project demonstrates clean architecture, modular design, and integration of popular React ecosystem libraries.

---

## ⚙️ Tech Stack

**Frontend Framework:** React 18+  
**Routing:** React Router DOM  
**Charts:** ECharts for React  
**Calendar:** FullCalendar (with interaction & time-grid plugins)  
**Tables:** Material React Table + MUI  
**Modal:** Rodal  
**Icons:** React Icons  
**Styling:** CSS Modules + Custom CSS  
**Date Formatting:** Moment.js

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/AnujBanote/react-dashboard.git
cd react-dashboard
npm install
npm run dev
The app will start on http://localhost:5173 (Vite default).

---

## 📁 Folder Structure
Admin-dashboard/
│
├── src/
│   ├── components/
│   │   ├── AddCardModal/
│   │   │   ├── AddCardModal.jsx
│   │   │   └── AddCardModal.module.css
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   │   └── Layout.module.css
│   │   ├── Orders/
│   │   │   ├── Orders.jsx
│   │   │   └── Order.module.css
│   │   ├── OrdersPieChart/
│   │   │   └── OrdersPieChart.jsx
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.module.css
│   │   ├── Statistics/
│   │   │   ├── Statistics.jsx
│   │   │   ├── StatisticsChart.jsx
│   │   │   └── Statistics.module.css
│   │   ├── DataGrid/
│   │   │   ├── DataGrid.jsx
│   │   │   └── DataGrid.css
│   │
│   ├── pages/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Dashboard.module.css
│   │   ├── Calendar/
│   │   │   ├── Calendar.jsx
│   │   │   └── Calendar.css
│   │   ├── Board/
│   │   │   ├── Board.jsx
│   │   │   └── Board.css
│   │   └── DataGrid/
│   │       └── DataGrid.jsx
│   │
│   ├── store/
│   │   ├── Board.js
│   │   ├── Calendar.js
│   │   └── (state management files)
│   │
│   ├── data/
│   │   └── data.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── assets/
│       ├── logo.png
│       └── profile.png
│
└── package.json


---

## 🧩 Key Features

### 📊 Dashboard

- Displays key performance statistics.
- Animated line chart (ECharts).
- Real-time order tracking.

### 📦 Orders Panel

- Lists daily orders with total amount and status.
- Includes a pie chart breakdown (ECharts).

### 📈 Statistics

- Gradient charts and KPI cards.
- Fully modular with CSS Modules.

### 🗓️ Calendar

- Add, remove, and view events.
- Time grid and month/week/day views.

### 🧱 Trello Board

- Drag-and-drop Kanban columns and cards.
- Add and remove tasks dynamically.
- Styled gradient backgrounds for task states.

### 👥 User DataGrid

- Material React Table with dark theme.
- Displays user information in sortable, paginated grid.

### 🎨 Theming

- Uses CSS variables
- Responsive design with flex
- CSS Modules for isolated component styles

### 🧑‍💻 Scripts

- Command Description
- npm run dev Start development server
- npm run build Build for production
- npm run preview Preview production build

---

## 🛠️ Dependencies Summary

{
"dependencies": {
"@asseinfo/react-kanban": "^2.x",
"@fullcalendar/react": "^6.x",
"@fullcalendar/daygrid": "^6.x",
"@fullcalendar/interaction": "^6.x",
"@fullcalendar/timegrid": "^6.x",
"material-react-table": "^1.x",
"echarts": "^5.x",
"echarts-for-react": "^3.x",
"moment": "^2.x",
"rodal": "^2.x",
"react-router-dom": "^6.x",
"react-icons": "^5.x"
}
}

---

## 🌐 Deployment

- Use any React-compatible host (e.g., Vercel, Netlify, or GitHub Pages):
- npm run build
- Then upload the dist/ folder contents to your hosting service.

---

## 👨‍💻 Author

Anuj Anil Banote❤️
📧 banoteanuj999@gmail.com

---

## 📜 License

--Tis project is licensed under the MIT License — feel free to use and modify it.
