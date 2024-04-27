
export default function Home() {
  return (

    <div className="p-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 h-screen flex flex-col items-center text-center">
      <div className="max-w-app">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
          Rapidy build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-4 dark:text-slate-400">Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</p>
        <button className="bg-sky-500 dark:text-sky-950  text-white px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-400 disabled:opacity-60 disabled:
          cursor-not-allowed">
          Sign In
        </button>
      </div>
    </div>
  )
}