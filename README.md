# ✂️ Image Cropper Web App

A fast, intuitive image cropper built for precision and simplicity. Easily upload, adjust, crop, and download your images directly in the browser—no external tools, no hassle.

---

## 🚀 Features

- 📁 Upload images instantly
- ✂️ Precise cropping with adjustable selection
- ⚡ Real-time preview of cropped output
- 💾 One-click download of cropped images as PNG
- 🌗 Light & dark mode support
- 📱 Responsive design (works on desktop & mobile)

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Image Cropping** | `react-image-crop` v11 |
| **Icons** | `react-icons` (IoIosDownload) |
| **Theme** | `next-themes` |
| **Package Manager** | Bun |
| **Deployment** | Vercel |

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/goodwin-omollo/image-cropper.git
cd image-cropper
bun install
```

### Run the development server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
bun run build
bun start
```

---

## 📁 Project Structure

```
cropper2/
├── app/
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Main image cropper page
├── components/
│   ├── modeToggle.tsx   # Light/dark theme toggle
│   └── ui/
│       ├── button.tsx
│       ├── field.tsx
│       ├── input.tsx
│       └── shadcn-io/
│           └── image-crop/  # Core cropper component
└── public/
```

---

## 📄 License

MIT © [Goodwin Omollo](https://github.com/goodwin-omollo)
# image-cropper
