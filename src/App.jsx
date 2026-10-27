import { useEffect, useState } from 'react'
import { profile, skills, learning, projects, contact } from './content.js'

// ---------- 主题切换 ----------
function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return [dark, setDark]
}

export default function App() {
  const [dark, setDark] = useTheme()

  useEffect(() => {
    document.title = `${profile.name} - 个人主页`
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Learning />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      aria-label={dark ? '切换到浅色模式' : '切换到深色模式'}
      title={dark ? '切换到浅色模式' : '切换到深色模式'}
    >
      {dark ? (
        // 太阳
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.4 6.4l-.7-.7M6.3 6.3l-.7-.7m12.8 0l-.7.7M6.3 17.7l-.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // 月亮
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.4 14.5A8.5 8.5 0 019.5 3.6 8.5 8.5 0 1020.4 14.5z" />
        </svg>
      )}
    </button>
  )
}

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: '关于我' },
    { href: '#skills', label: '技能' },
    { href: '#learning', label: '学习' },
    { href: '#projects', label: '项目' },
    { href: '#contact', label: '联系' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur dark:border-gray-800/80 dark:bg-gray-950/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-semibold text-white">
            {profile.name.slice(0, 1)}
          </span>
          <span className="font-semibold">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-7 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle dark={dark} setDark={setDark} />
        </div>

        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle dark={dark} setDark={setDark} />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            onClick={() => setOpen(!open)}
            aria-label="打开菜单"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-3 sm:hidden dark:border-gray-800 dark:bg-gray-950">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-gray-700 transition hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-[80%] rounded-full bg-indigo-100/70 blur-3xl dark:bg-indigo-500/10" />
        <div className="absolute top-10 left-1/2 h-72 w-72 translate-x-[10%] rounded-full bg-purple-100/60 blur-3xl dark:bg-purple-500/10" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400">{profile.role}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          你好,我是 <span className="text-indigo-600 dark:text-indigo-400">{profile.name}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {profile.tagline}
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-gray-800"
          >
            联系我
          </a>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">{desc}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle kicker="关于我" title="认识一下我" />
        <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:items-start">
          {/* 头像占位:以后有照片,把下面这个 div 换成
              <img src="你的照片路径" alt="头像" className="h-32 w-32 shrink-0 rounded-2xl object-cover" /> */}
          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-5xl font-semibold text-white">
            {profile.name.slice(0, 1)}
          </div>
          <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-400">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-gray-50 py-20 dark:bg-gray-900/50">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle kicker="技能" title="我会的东西" desc="按分类整理的能力标签,随时在 content.js 里增删。" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="font-semibold">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const STATUS_STYLE = {
  已掌握: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
  进行中: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  计划中: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
}

function Learning() {
  return (
    <section id="learning" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle kicker="学习" title="正在学的" desc="技术这条路没有终点,这里记录我当前的学习进度。" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {learning.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold">{item.title}</h3>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    STATUS_STYLE[item.status] ?? STATUS_STYLE['计划中']
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-gray-50 py-20 dark:bg-gray-900/50">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle kicker="项目" title="我的作品" desc="挑选 2~3 个最想展示的项目,替换成真实的链接。" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                className={`flex h-36 items-center justify-center bg-gradient-to-br ${p.gradient} text-4xl transition group-hover:scale-105 dark:opacity-80`}
              >
                {p.emoji}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold transition group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle kicker="联系" title="找到我" desc="欢迎通过以下方式联系我。" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {contact.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="text-2xl">{c.icon}</div>
              <h3 className="mt-3 font-semibold">{c.label}</h3>
              <p className="mt-1 text-sm break-all text-gray-600 dark:text-gray-400">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-500">
      © {new Date().getFullYear()} {profile.name} · 用 ❤️ 和 React 构建
    </footer>
  )
}
