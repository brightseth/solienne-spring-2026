'use client'

import Link from 'next/link'
import {
  milestones,
  thisWeekPriorities,
  projects,
  financials,
  daysUntil,
  formatDate,
  getStatusColor,
  getStatusIcon
} from '@/lib/roadmap-data'

export default function RoadmapDashboard() {
  const iseaDeadline = milestones.find(m => m.id === 'isea-deadline')
  const daysToIsea = iseaDeadline ? daysUntil(iseaDeadline.date) : 0

  return (
    <div className="space-y-8">
      {/* Hero: Critical Deadline */}
      <section className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-red-400 text-sm font-medium uppercase tracking-wide">Critical Deadline</p>
            <h2 className="text-2xl font-bold mt-1">ISEA Submission</h2>
            <p className="text-gray-400 text-sm mt-1">Isaac Sullivan collaboration proposal</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-red-400">{daysToIsea}</p>
            <p className="text-sm text-gray-400">days left</p>
            <p className="text-xs text-gray-500 mt-1">Dec 15, 2025</p>
          </div>
        </div>
      </section>

      {/* This Week's Priorities */}
      <section>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span>This Week</span>
          <span className="text-xs font-normal text-gray-500">Dec 9-15</span>
        </h2>
        <div className="space-y-2">
          {thisWeekPriorities.map((task) => (
            <div
              key={task.id}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                task.status === 'done' ? 'bg-green-500/10' : 'bg-white/5'
              }`}
            >
              <span className={`text-lg ${getStatusColor(task.status)}`}>
                {getStatusIcon(task.status)}
              </span>
              <div className="flex-1 min-w-0">
                <p className={`font-medium ${task.status === 'done' ? 'line-through text-gray-500' : ''}`}>
                  {task.content}
                </p>
                {task.deadline && (
                  <p className="text-xs text-gray-500 mt-0.5">
                    {task.status === 'done' ? 'Completed' : `Due ${formatDate(task.deadline)}`}
                  </p>
                )}
              </div>
              {task.status === 'in_progress' && (
                <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded">
                  Active
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Production</p>
          <p className="text-2xl font-bold mt-1">
            {projects.filter(p => p.status === 'production').length}
          </p>
          <p className="text-sm text-gray-400">projects live</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">In Progress</p>
          <p className="text-2xl font-bold mt-1">
            {projects.filter(p => p.status === 'in_progress').length}
          </p>
          <p className="text-sm text-gray-400">being built</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Dubai Budget</p>
          <p className="text-2xl font-bold mt-1">$54-86K</p>
          <p className="text-sm text-gray-400">estimated cost</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Dubai Revenue</p>
          <p className="text-2xl font-bold mt-1">€60K</p>
          <p className="text-sm text-gray-400">potential (12 frames)</p>
        </div>
      </section>

      {/* Upcoming Milestones */}
      <section>
        <h2 className="text-lg font-bold mb-4">Key Dates</h2>
        <div className="space-y-3">
          {milestones.map((milestone) => {
            const days = daysUntil(milestone.date)
            const isPast = days < 0
            const isSoon = days >= 0 && days <= 7

            return (
              <div
                key={milestone.id}
                className={`flex items-center gap-4 p-3 rounded-lg ${
                  milestone.status === 'done'
                    ? 'bg-green-500/10'
                    : milestone.status === 'critical'
                    ? 'bg-red-500/10'
                    : 'bg-white/5'
                }`}
              >
                <div className="w-12 text-center">
                  <p className="text-lg font-bold font-mono">
                    {formatDate(milestone.date).split(' ')[1]}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(milestone.date).split(' ')[0]}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{milestone.title}</p>
                  {milestone.description && (
                    <p className="text-sm text-gray-400">{milestone.description}</p>
                  )}
                </div>
                <div className="text-right">
                  {milestone.status === 'done' ? (
                    <span className="text-green-400 text-sm">✓ Done</span>
                  ) : isPast ? (
                    <span className="text-gray-500 text-sm">Past</span>
                  ) : (
                    <span className={`text-sm ${isSoon ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {days}d
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-2 gap-4">
        <Link
          href="/roadmap/tasks"
          className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 text-center"
        >
          <p className="text-2xl mb-1">📋</p>
          <p className="font-medium">Tasks</p>
          <p className="text-xs text-gray-500">Week by week</p>
        </Link>
        <Link
          href="/roadmap/timeline"
          className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 text-center"
        >
          <p className="text-2xl mb-1">📅</p>
          <p className="font-medium">Timeline</p>
          <p className="text-xs text-gray-500">Dec → April</p>
        </Link>
        <Link
          href="/roadmap/projects"
          className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 text-center"
        >
          <p className="text-2xl mb-1">🏗️</p>
          <p className="font-medium">Projects</p>
          <p className="text-xs text-gray-500">Status overview</p>
        </Link>
        <a
          href="https://solienne.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 text-center"
        >
          <p className="text-2xl mb-1">🌐</p>
          <p className="font-medium">Live Site</p>
          <p className="text-xs text-gray-500">solienne.ai</p>
        </a>
      </section>

      {/* Architecture Decision Banner */}
      <section className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-xl">💡</span>
          <div>
            <p className="font-medium">Architecture: Use solienne-core</p>
            <p className="text-sm text-gray-400 mt-1">
              A+ grade, production-ready. Defer monorepo until Jan 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Paris Photo Recovery */}
      <section className="bg-white/5 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-500">Paris Photo Recovery</p>
          <p className="text-sm text-gray-400">{financials.parisPhoto.percentage}%</p>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${financials.parisPhoto.percentage}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          ${financials.parisPhoto.recovered.toLocaleString()} / ${financials.parisPhoto.invested.toLocaleString()} recovered
        </p>
      </section>
    </div>
  )
}
