// ============================================
// 你的个人信息都在这个文件里修改
// 改完保存,浏览器里的页面会自动刷新
// ============================================

export const profile = {
  name: '吴阳', // 姓名或昵称
  role: '前端开发方向的在校学生', // 例如:全栈工程师 / 设计师 / 学生
  tagline: '专注前端开发,相信扎实的工程习惯和对细节的坚持,才能做出真正好用的产品。',
  bio: [
    '我是吴阳,一名专注前端开发的在校学生。日常主要使用 React 和现代 JavaScript 构建 Web 应用,关注组件设计、状态管理与页面性能。课堂之外,我通过个人项目和开源实践持续打磨手感。',
    '我习惯先想清楚问题和边界,再动手写代码——先理清数据如何流动,再决定界面如何组织。目前正在系统学习前端工程化与性能优化,目标是做出结构清晰、长期可维护的产品。',
  ],
}

export const skills = [
  {
    category: '前端',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    category: '后端',
    items: ['Node.js', 'Python', '数据库'],
  },
  {
    category: '工具',
    items: ['Git', 'VS Code', 'Figma'],
  },
]

// 学习路线:status 可选 "已掌握" / "进行中" / "计划中"
export const learning = [
  {
    title: '前端工程化',
    desc: 'Vite 构建、模块化、代码规范,把项目从"能跑"做到"好维护"。',
    status: '进行中',
  },
  {
    title: 'React 深入',
    desc: 'Hooks 原理、状态管理方案、渲染性能优化。',
    status: '进行中',
  },
  {
    title: 'TypeScript',
    desc: '类型系统、泛型,以及在 React 项目中的实际应用。',
    status: '计划中',
  },
  {
    title: 'CSS 与设计',
    desc: 'Tailwind 工具类、响应式布局、常见设计系统。',
    status: '已掌握',
  },
]

export const projects = [
  {
    title: '项目一',
    description: '一句话描述这个项目做了什么、解决了什么问题。',
    tags: ['React', 'Tailwind'],
    emoji: '🚀',
    gradient: 'from-indigo-100 to-blue-100',
    link: '#',
  },
  {
    title: '项目二',
    description: '第二个项目,写上它的亮点和你负责的部分。',
    tags: ['Node.js', 'API'],
    emoji: '🛠️',
    gradient: 'from-purple-100 to-pink-100',
    link: '#',
  },
  {
    title: '项目三',
    description: '第三个项目,可以是学习项目、开源贡献或作品集。',
    tags: ['Python', '自动化'],
    emoji: '📦',
    gradient: 'from-emerald-100 to-teal-100',
    link: '#',
  },
]

export const contact = [
  { label: '邮箱', value: 'you@example.com', href: 'mailto:you@example.com', icon: '✉️' },
  { label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com/yourname', icon: '🐙' },
  { label: '微信', value: 'your_wechat', href: '#', icon: '💬' },
]
