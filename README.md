# ✂️ Image Cropper Web App

A professional, high-performance image cropping tool built with precision and modern web standards. Seamlessly upload, adjust, and export images directly from your browser—no server-side processing, ensuring 100% privacy and lightning-fast results.

---

## ✨ Features

- 🖼️ **Intuitive UI**: Clean, responsive interface that works flawlessly across desktop and mobile.
- 📐 **Precision Cropping**: Adjustable selection areas for pixel-perfect results.
- 🕒 **Real-Time Feedback**: Instant visual preview of your cropped output as you adjust the bounds.
- 🔒 **Privacy First**: All processing happens client-side; your images never leave your device.
- 🌗 **Toggle Themes**: Full support for both polished light and dark modes.
- 📥 **One-Click Export**: Quickly download your cropped images as high-quality PNGs.

---

## 🛠️ Tech Stack

| Layer             | Technology                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| **Framework**     | [Next.js 16](https://nextjs.org/) (App Router)                                                  |
| **Runtime**       | [Bun](https://bun.sh/)                                                                          |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)                                                   |
| **Styling**       | [Tailwind CSS v4](https://tailwindcss.com/)                                                     |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) (Radix UI)                                                  |
| **Image Core**    | [react-image-crop](https://github.com/DominicVilsmeier/react-image-crop) v11                    |
| **Icons**         | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| **Theme**         | [next-themes](https://github.com/pacocoursey/next-themes)                                       |
| **Deployment**    | [Vercel](https://vercel.com/)                                                                   |

---

## 📂 Project Structure

```bash
image-cropper/
├── app/
│   ├── layout.tsx       # Root layout with ThemeProvider
│   ├── page.tsx         # Main application interface
│   └── globals.css      # Tailwind & global styles
├── components/
│   ├── modeToggle.tsx   # Theme switcher component
│   ├── theme-provider.tsx # Next-themes wrapper
│   └── ui/
│       ├── button.tsx   # Shadcn Button component
│       ├── field.tsx    # Form field wrapper
│       ├── input.tsx    # Shadcn Input component
│       └── shadcn-io/
│           └── image-crop/ # Interactive cropping logic
├── lib/
│   └── utils.ts         # Shared utility functions (cn)
├── public/              # Static assets (icons, images)
└── package.json         # Project manifests & dependencies
```

---

## ⚡ Quick Start

### 1. Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/goodwin-omollo/image-cropper.git
cd image-cropper
bun install
```

### 3. Development

Launch the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### 4. Build & Production

To create an optimized production build:

```bash
bun run build
bun start
```

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Maintained by [Goodwin Omollo](https://github.com/goodwin-omollo)

# image-cropper
