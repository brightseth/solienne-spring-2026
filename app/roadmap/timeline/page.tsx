'use client'

import { milestones, daysUntil, formatDate } from '@/lib/roadmap-data'

const timelineMonths = [
  { month: 'Dec 2025', label: 'ISEA Sprint', color: 'red' },
  { month: 'Jan 2026', label: 'Payment + Design', color: 'yellow' },
  { month: 'Feb 2026', label: 'Production', color: 'blue' },
  { month: 'Mar 2026', label: 'Fabrication', color: 'blue' },
  { month: 'Apr 2026', label: 'DUBAI + BERLIN', color: 'green' },
]

const sprints = [
  {
    name: 'Sprint 1: ISEA',
    dates: 'Dec 9-15',
    goal: 'Submit ISEA proposal by Dec 15',
    status: 'active' as const,
    tasks: [
      'Review ISEA proposal draft',
      'Email Isaac Sullivan',
      'Generate SOLIENNE voice sample',
      'Submit to EasyChair'
    ]
  },
  {
    name: 'Sprint 2: Core Features',
    dates: 'Dec 16-22',
    goal: 'Archive integration + LiveAvatar clarity',
    status: 'upcoming' as const,
    tasks: [
      'Archive integration (6hr)',
      'LiveAvatar debug',
      'Kristi creative call',
      'IP consent form'
    ]
  },
  {
    name: 'Sprint 3: Maintenance',
    dates: 'Dec 23-29',
    goal: 'Holiday break, minimal work',
    status: 'upcoming' as const,
    tasks: [
      'Monitor manifesto ops',
      'Respond to urgent only',
      'Rest and recharge'
    ]
  },
  {
    name: 'Sprint 4: January Prep',
    dates: 'Dec 30 - Jan 5',
    goal: 'Q1 2026 planning',
    status: 'upcoming' as const,
    tasks: [
      'Dubai production planning',
      'Jan 15 payment prep',
      'Q1 roadmap'
    ]
  }
]

export default function TimelinePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Timeline</h1>
        <p className="text-gray-400 mt-1">December 2025 → April 2026</p>
      </div>

      {/* Visual Timeline */}
      <section>
        <h2 className="text-lg font-bold mb-4">Overview</h2>
        <div className="relative">
          {/* Timeline bar */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/20" />

          <div className="space-y-6">
            {timelineMonths.map((month, index) => (
              <div key={month.month} className="relative flex items-start gap-4">
                {/* Dot */}
                <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                  month.color === 'red' ? 'bg-red-500' :
                  month.color === 'yellow' ? 'bg-yellow-500' :
                  month.color === 'blue' ? 'bg-blue-500' :
                  'bg-green-500'
                }`}>
                  <span className="text-xs font-bold text-black">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <p className="font-bold">{month.month}</p>
                  <p className="text-sm text-gray-400">{month.label}</p>

                  {/* Milestones in this month */}
                  <div className="mt-2 space-y-1">
                    {milestones
                      .filter(m => {
                        const date = new Date(m.date)
                        const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                        return monthYear === month.month.replace('20', '')
                      })
                      .map(m => (
                        <div
                          key={m.id}
                          className={`text-sm flex items-center gap-2 ${
                            m.status === 'done' ? 'text-green-400' :
                            m.status === 'critical' ? 'text-red-400' :
                            'text-gray-400'
                          }`}
                        >
                          <span>{m.status === 'done' ? '✓' : '○'}</span>
                          <span>{formatDate(m.date)}: {m.title}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* December Sprints */}
      <section>
        <h2 className="text-lg font-bold mb-4">December Sprints</h2>
        <div className="space-y-4">
          {sprints.map((sprint) => (
            <div
              key={sprint.name}
              className={`rounded-lg p-4 ${
                sprint.status === 'active'
                  ? 'bg-yellow-500/10 border border-yellow-500/30'
                  : 'bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">{sprint.name}</h3>
                <span className="text-sm text-gray-400">{sprint.dates}</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">Goal: {sprint.goal}</p>
              <ul className="space-y-1">
                {sprint.tasks.map((task, i) => (
                  <li key={i} className="text-sm flex items-center gap-2">
                    <span className="text-gray-500">○</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
              {sprint.status === 'active' && (
                <div className="mt-3 pt-3 border-t border-yellow-500/30">
                  <span className="text-xs text-yellow-400 uppercase tracking-wide">
                    Current Sprint
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Resource Allocation */}
      <section>
        <h2 className="text-lg font-bold mb-4">December Focus</h2>
        <div className="space-y-3">
          {[
            { label: 'ISEA Submission', percentage: 40 },
            { label: 'Archive Integration', percentage: 20 },
            { label: 'LiveAvatar Debug', percentage: 10 },
            { label: 'Email Expression', percentage: 10 },
            { label: 'Kristi Collab', percentage: 10 },
            { label: 'Maintenance', percentage: 10 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>{item.label}</span>
                <span className="text-gray-400">{item.percentage}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-white/50 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Days Countdown Grid */}
      <section>
        <h2 className="text-lg font-bold mb-4">Countdown</h2>
        <div className="grid grid-cols-2 gap-3">
          {milestones
            .filter(m => m.status !== 'done')
            .slice(0, 4)
            .map(m => {
              const days = daysUntil(m.date)
              return (
                <div key={m.id} className="bg-white/5 rounded-lg p-4 text-center">
                  <p className={`text-3xl font-bold font-mono ${
                    days <= 7 ? 'text-red-400' : 'text-white'
                  }`}>
                    {days}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">days to</p>
                  <p className="text-sm font-medium mt-1">{m.title}</p>
                </div>
              )
            })}
        </div>
      </section>
    </div>
  )
}
