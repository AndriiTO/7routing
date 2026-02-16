This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



<!-- 
├── layout.tsx                 # Глобальний лейаут (Header/Footer)
├── page.tsx                   # Головна сторінка (може бути редірект на /notes)
├── not-found.tsx              # 404 сторінка
├── notes/
│   ├── layout.tsx             # Лейаут для всіх нотаток (Sidebar + контент)
│   ├── filter/
│   │   ├── layout.tsx         # Лейаут для фільтрації (включає parallel slot @sidebar)
│   │   ├── [...tag]/page.tsx  # Catch-all маршрут для тегів /notes/filter/{tag}
│   │   └── @sidebar/
│   │       ├── page.tsx       # SidebarNotes — меню фільтрації
│   │       └── default.tsx    # fallback для parallel route
│   └── [id]/
│       └── page.tsx           # NotePreview — модальне вікно для нотатки
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── Modal/
│   │   ├── Modal.tsx
│   │   └── Modal.module.css
│   ├── NotePreview/
│   │   ├── NotePreview.tsx
│   │   └── NotePreview.module.css
│   ├── SidebarNotes/
│   │   ├── SidebarNotes.tsx
│   │   └── SidebarNotes.module.css
│   └── ...                   # Інші компоненти
/lib
├── api.ts                     # HTTP-запити через axios
/types
├── note.ts                     # Типи та інтерфейси Note
/public
├── assets/                     # Зображення, іконки, шрифти
├── favicon.ico
/package.json
/tsconfig.json
/next.config.ts -->