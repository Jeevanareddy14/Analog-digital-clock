This project is a React-based Analog-Digital Clock Stopwatch that allows users to Start, Pause, and Reset time.
It displays the running time in both analog clock style (with rotating hands) and digital format (HH:MM:SS).

🚀 Features

⏱ Start / Pause / Reset stopwatch functionality.

🕰 Analog view – a circular clock with rotating hour, minute, and second hands.

🔢 Digital view – neatly formatted time in HH:MM:SS.

🎨 Stylish UI with a cream-white clock background, custom-colored hands, and hover effects for buttons.

⚡ Built using React Hooks (useState, useRef).

🛠 Tech Stack

React.js (Functional Components + Hooks)

CSS3 (Flexbox, transforms, animations)

How It Works

When you click Start, a setInterval updates the time every 10ms.

The time is split into hours, minutes, seconds.

Using math, clock hands are rotated:

hourDeg = (hours % 12) * 30 + (minutes / 60) * 6

minuteDeg = minutes * 6 + (seconds / 60) * 6

secondDeg = seconds * 6

The digital time is formatted as HH:MM:SS.

📸 UI Preview

Analog View – A round wall-clock with 12 numbers and moving hands.

Digital View – Time displayed below in digital format.

Controls – Start, Pause, Reset buttons.

🖼 Example

When you press Start:

The analog clock hands rotate like a real clock.

The digital time increments simultaneously.

When you press Pause:

Both analog and digital time freeze in place.

When you press Reset:

Time resets to 00:00:00 and hands return to 12 o’clock position.

🎯 Use Cases

Stopwatch functionality for practice timers.

Showcasing React + CSS3 transforms project.

A portfolio-ready UI mini-project.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"# Analog-digital-clock" 
