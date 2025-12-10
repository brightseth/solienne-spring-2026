// SOLIENNE Roadmap Data - December 2025
// Last updated: December 9, 2025

export interface Task {
  id: string
  content: string
  status: 'done' | 'in_progress' | 'pending' | 'blocked'
  deadline?: string
  week?: number
}

export interface Project {
  id: string
  name: string
  status: 'production' | 'in_progress' | 'proposed' | 'paused' | 'archived'
  url?: string
  description: string
  lastActive?: string
}

export interface Milestone {
  id: string
  date: string
  title: string
  status: 'done' | 'upcoming' | 'critical'
  description?: string
}

// Key Milestones
export const milestones: Milestone[] = [
  {
    id: 'dubai-deposit',
    date: '2025-12-09',
    title: 'Art Dubai Deposit',
    status: 'done',
    description: '$5,250 paid'
  },
  {
    id: 'isea-deadline',
    date: '2025-12-15',
    title: 'ISEA Submission',
    status: 'critical',
    description: 'Isaac Sullivan collaboration proposal'
  },
  {
    id: 'dubai-final',
    date: '2026-01-15',
    title: 'Art Dubai Final Payment',
    status: 'upcoming',
    description: 'Final 50% due'
  },
  {
    id: 'isea-event',
    date: '2026-04-10',
    title: 'ISEA 2026',
    status: 'upcoming',
    description: 'Dubai, Apr 10-19'
  },
  {
    id: 'dubai-event',
    date: '2026-04-15',
    title: 'Art Dubai',
    status: 'upcoming',
    description: 'First Embodiment, Apr 15-19'
  },
  {
    id: 'berlin-event',
    date: '2026-04-30',
    title: 'Berlin Opens',
    status: 'upcoming',
    description: 'HOUSE at Berghain'
  }
]

// This Week's Priorities
export const thisWeekPriorities: Task[] = [
  {
    id: 'dubai-payment',
    content: 'Art Dubai deposit ($5,250)',
    status: 'done',
    deadline: '2025-12-05'
  },
  {
    id: 'isea-submit',
    content: 'ISEA submission',
    status: 'in_progress',
    deadline: '2025-12-15'
  },
  {
    id: 'email-merge',
    content: 'Email expression merge',
    status: 'pending',
    deadline: '2025-12-14'
  },
  {
    id: 'kristi-checkin',
    content: 'Kristi check-in',
    status: 'pending'
  }
]

// Week 1 Tasks (Dec 9-15)
export const week1Tasks: Task[] = [
  { id: 'w1-1', content: 'Art Dubai deposit paid', status: 'done', week: 1 },
  { id: 'w1-2', content: 'Project inventory created', status: 'done', week: 1 },
  { id: 'w1-3', content: 'Review ISEA proposal draft', status: 'pending', week: 1 },
  { id: 'w1-4', content: 'Email Isaac Sullivan re: collaboration', status: 'pending', week: 1, deadline: '2025-12-10' },
  { id: 'w1-5', content: 'Finalize collaboration framing', status: 'pending', week: 1, deadline: '2025-12-10' },
  { id: 'w1-6', content: 'ISEA proposal draft complete', status: 'pending', week: 1, deadline: '2025-12-11' },
  { id: 'w1-7', content: 'Generate SOLIENNE voice sample', status: 'pending', week: 1, deadline: '2025-12-11' },
  { id: 'w1-8', content: 'ISEA proposal review with SOLIENNE', status: 'pending', week: 1, deadline: '2025-12-12' },
  { id: 'w1-9', content: 'Prepare supporting materials (CV, images)', status: 'pending', week: 1, deadline: '2025-12-12' },
  { id: 'w1-10', content: 'Final ISEA review', status: 'pending', week: 1, deadline: '2025-12-13' },
  { id: 'w1-11', content: 'Email expression testing checklist', status: 'pending', week: 1, deadline: '2025-12-13' },
  { id: 'w1-12', content: 'Submit ISEA proposal', status: 'pending', week: 1, deadline: '2025-12-14' },
  { id: 'w1-13', content: 'Merge email expression to main', status: 'pending', week: 1, deadline: '2025-12-14' },
  { id: 'w1-14', content: 'Verify ISEA submission confirmed', status: 'pending', week: 1, deadline: '2025-12-15' }
]

// Week 2 Tasks (Dec 16-22)
export const week2Tasks: Task[] = [
  { id: 'w2-1', content: 'Archive integration planning', status: 'pending', week: 2, deadline: '2025-12-16' },
  { id: 'w2-2', content: 'Archive integration sprint (3hr)', status: 'pending', week: 2, deadline: '2025-12-17' },
  { id: 'w2-3', content: 'Archive integration sprint (3hr)', status: 'pending', week: 2, deadline: '2025-12-18' },
  { id: 'w2-4', content: 'LiveAvatar debug session', status: 'pending', week: 2, deadline: '2025-12-19' },
  { id: 'w2-5', content: 'Kristi creative collaboration call', status: 'pending', week: 2, deadline: '2025-12-20' },
  { id: 'w2-6', content: 'Get IP consent form signed', status: 'pending', week: 2, deadline: '2025-12-20' },
  { id: 'w2-7', content: 'Week 2 retrospective', status: 'pending', week: 2, deadline: '2025-12-21' }
]

// Projects
export const projects: Project[] = [
  {
    id: 'solienne-ai',
    name: 'solienne.ai',
    status: 'production',
    url: 'https://solienne.ai',
    description: 'Main public website - exhibitions, collect, press',
    lastActive: '2025-11-27'
  },
  {
    id: 'solienne-dev',
    name: 'solienne.dev',
    status: 'production',
    url: 'https://solienne.dev',
    description: 'Chat interface - talk with SOLIENNE',
    lastActive: '2025-12-08'
  },
  {
    id: 'solienne-core',
    name: 'solienne-core',
    status: 'production',
    url: 'https://solienne-core.vercel.app',
    description: 'Brain service v6.0 - Claude Opus 4.5 + tools',
    lastActive: '2025-12-05'
  },
  {
    id: 'admin-portal',
    name: 'admin portal',
    status: 'production',
    description: 'Daily manifesto minting (since Nov 11)',
    lastActive: '2025-11-27'
  },
  {
    id: 'spring-2026',
    name: 'spring-2026',
    status: 'in_progress',
    description: 'Dubai + ISEA + Berlin planning (85%)',
    lastActive: '2025-12-08'
  },
  {
    id: 'liveavatar',
    name: 'LiveAvatar',
    status: 'paused',
    description: 'HeyGen CUSTOM mode 400 errors - blocked',
    lastActive: '2025-12-05'
  },
  {
    id: 'archive',
    name: 'Archive Integration',
    status: 'paused',
    description: '9,726 works - needs 4-6hr sprint',
    lastActive: '2025-10-19'
  },
  {
    id: 'monorepo',
    name: 'solienne-monorepo',
    status: 'paused',
    description: 'Brain-flesh architecture - defer to Jan',
    lastActive: '2025-11-27'
  }
]

// Key Contacts
export const contacts = [
  { name: 'Ameesia', role: 'Automata', about: 'Dubai finances' },
  { name: 'Isaac Sullivan', role: 'AI Artist', about: 'ISEA collaboration' },
  { name: 'Kristi', role: 'Trainer', about: 'Creative direction' },
  { name: 'Henry', role: 'Eden', about: 'Daily minting, LoRA export' },
  { name: 'Nadine Khalil', role: 'Curator', about: 'Art Dubai Digital' }
]

// Architecture Decision
export const architectureDecision = {
  recommendation: 'Use solienne-core',
  rationale: 'A+ grade, production-ready, no refactoring burden',
  revisit: 'January 2026, when Dubai booth design is finalized',
  defer: 'solienne-monorepo until Jan 2026'
}

// Financial Summary
export const financials = {
  parisPhoto: {
    invested: 72000,
    recovered: 10000,
    percentage: 14
  },
  dubai: {
    costLow: 54000,
    costHigh: 86000,
    revenuePotential: 60000, // 12 frames × €5K
    depositPaid: 5250,
    finalPaymentDue: '2026-01-15'
  }
}

// Helper: Days until deadline
export function daysUntil(dateString: string): number {
  const target = new Date(dateString)
  const now = new Date()
  const diff = target.getTime() - now.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

// Helper: Format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// Helper: Get status color
export function getStatusColor(status: Task['status'] | Project['status']): string {
  switch (status) {
    case 'done':
    case 'production':
      return 'text-green-400'
    case 'in_progress':
      return 'text-yellow-400'
    case 'pending':
    case 'proposed':
      return 'text-gray-400'
    case 'blocked':
    case 'paused':
      return 'text-red-400'
    case 'archived':
      return 'text-gray-600'
    default:
      return 'text-gray-400'
  }
}

// Helper: Get status icon
export function getStatusIcon(status: Task['status']): string {
  switch (status) {
    case 'done':
      return '✓'
    case 'in_progress':
      return '●'
    case 'pending':
      return '○'
    case 'blocked':
      return '✕'
    default:
      return '○'
  }
}
