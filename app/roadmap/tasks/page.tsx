'use client'

import { useState } from 'react'
import {
  week1Tasks,
  week2Tasks,
  formatDate,
  getStatusColor,
  getStatusIcon
} from '@/lib/roadmap-data'

export default function TasksPage() {
  const [activeWeek, setActiveWeek] = useState(1)

  const tasks = activeWeek === 1 ? week1Tasks : week2Tasks
  const weekDates = activeWeek === 1 ? 'Dec 9-15' : 'Dec 16-22'
  const weekGoal = activeWeek === 1
    ? 'Submit ISEA proposal by Dec 15'
    : 'Archive integration + LiveAvatar clarity'

  const completedCount = tasks.filter(t => t.status === 'done').length
  const totalCount = tasks.length
  const progressPercentage = Math.round((completedCount / totalCount) * 100)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Tasks</h1>
        <p className="text-gray-400 mt-1">Critical path execution</p>
      </div>

      {/* Week Selector */}
      <div className="flex gap-2">
        {[1, 2].map((week) => (
          <button
            key={week}
            onClick={() => setActiveWeek(week)}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeWeek === week
                ? 'bg-white text-black'
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
          >
            Week {week}
          </button>
        ))}
      </div>

      {/* Week Info */}
      <div className="bg-white/5 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold">Week {activeWeek}: {weekDates}</h2>
          <span className="text-sm text-gray-400">
            {completedCount}/{totalCount} done
          </span>
        </div>
        <p className="text-sm text-gray-400 mb-3">Goal: {weekGoal}</p>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-start gap-3 p-4 rounded-lg ${
              task.status === 'done'
                ? 'bg-green-500/10'
                : task.status === 'in_progress'
                ? 'bg-yellow-500/10'
                : 'bg-white/5'
            }`}
          >
            <span className={`text-xl mt-0.5 ${getStatusColor(task.status)}`}>
              {getStatusIcon(task.status)}
            </span>
            <div className="flex-1 min-w-0">
              <p className={`font-medium ${
                task.status === 'done' ? 'line-through text-gray-500' : ''
              }`}>
                {task.content}
              </p>
              {task.deadline && (
                <p className="text-xs text-gray-500 mt-1">
                  {task.status === 'done' ? 'Completed' : `Due: ${formatDate(task.deadline)}`}
                </p>
              )}
            </div>
            {task.status === 'in_progress' && (
              <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded shrink-0">
                Active
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-400 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-green-400">✓</span>
          <span>Done</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">●</span>
          <span>In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">○</span>
          <span>Pending</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-400">✕</span>
          <span>Blocked</span>
        </div>
      </div>

      {/* Daily Rhythm */}
      <section className="bg-white/5 rounded-lg p-4">
        <h3 className="font-bold mb-3">Daily Rhythm</h3>
        <div className="space-y-2 text-sm">
          <div className="flex gap-3">
            <span className="text-gray-500 w-20">Morning</span>
            <span>Check roadmap, identify ONE priority, block focus time</span>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-500 w-20">Afternoon</span>
            <span>Execute priority task, handle communications PM only</span>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-500 w-20">Evening</span>
            <span>Update status, prep tomorrow, close loops</span>
          </div>
        </div>
      </section>

      {/* What NOT to Do */}
      <section className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
        <h3 className="font-bold text-red-400 mb-3">What NOT to Do</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="text-red-400">✕</span>
            <span>Start new projects (you have 16)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-400">✕</span>
            <span>Refactor working code</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-400">✕</span>
            <span>Stress Kristi about money</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-400">✕</span>
            <span>Miss ISEA deadline (Dec 15)</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
