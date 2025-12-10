'use client'

import { projects, contacts, architectureDecision } from '@/lib/roadmap-data'

const statusLabels = {
  production: { label: 'Live', color: 'bg-green-500' },
  in_progress: { label: 'Building', color: 'bg-yellow-500' },
  proposed: { label: 'Proposed', color: 'bg-blue-500' },
  paused: { label: 'Paused', color: 'bg-red-500' },
  archived: { label: 'Archived', color: 'bg-gray-500' },
}

export default function ProjectsPage() {
  const productionProjects = projects.filter(p => p.status === 'production')
  const inProgressProjects = projects.filter(p => p.status === 'in_progress')
  const pausedProjects = projects.filter(p => p.status === 'paused')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="text-gray-400 mt-1">16 projects across 5 statuses</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-green-500/10 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-green-400">{productionProjects.length}</p>
          <p className="text-xs text-gray-400">Live</p>
        </div>
        <div className="bg-yellow-500/10 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-yellow-400">{inProgressProjects.length}</p>
          <p className="text-xs text-gray-400">Building</p>
        </div>
        <div className="bg-red-500/10 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-red-400">{pausedProjects.length}</p>
          <p className="text-xs text-gray-400">Paused</p>
        </div>
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold">16</p>
          <p className="text-xs text-gray-400">Total</p>
        </div>
      </div>

      {/* Production Projects */}
      <section>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Production
        </h2>
        <div className="space-y-3">
          {productionProjects.map((project) => (
            <div key={project.id} className="bg-white/5 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold">{project.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm hover:underline shrink-0"
                  >
                    Visit →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In Progress Projects */}
      <section>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-500" />
          In Progress
        </h2>
        <div className="space-y-3">
          {inProgressProjects.map((project) => (
            <div key={project.id} className="bg-yellow-500/10 rounded-lg p-4">
              <h3 className="font-bold">{project.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Paused Projects */}
      <section>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          Paused / Blocked
        </h2>
        <div className="space-y-3">
          {pausedProjects.map((project) => (
            <div key={project.id} className="bg-red-500/10 rounded-lg p-4">
              <h3 className="font-bold">{project.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Decision */}
      <section className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <h2 className="font-bold mb-3">Architecture Decision</h2>
        <div className="space-y-2 text-sm">
          <p>
            <span className="text-gray-400">Use:</span>{' '}
            <span className="font-medium">{architectureDecision.recommendation}</span>
          </p>
          <p>
            <span className="text-gray-400">Why:</span>{' '}
            <span>{architectureDecision.rationale}</span>
          </p>
          <p>
            <span className="text-gray-400">Revisit:</span>{' '}
            <span>{architectureDecision.revisit}</span>
          </p>
          <p>
            <span className="text-gray-400">Defer:</span>{' '}
            <span>{architectureDecision.defer}</span>
          </p>
        </div>
      </section>

      {/* Key Contacts */}
      <section>
        <h2 className="text-lg font-bold mb-4">Key Contacts</h2>
        <div className="grid gap-3">
          {contacts.map((contact) => (
            <div key={contact.name} className="bg-white/5 rounded-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                {contact.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-medium">{contact.name}</p>
                <p className="text-xs text-gray-400">{contact.role} • {contact.about}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Commands */}
      <section className="bg-white/5 rounded-lg p-4">
        <h2 className="font-bold mb-3">Quick Commands</h2>
        <div className="font-mono text-xs space-y-2 text-gray-400">
          <p className="text-gray-500"># Check git status across projects</p>
          <p className="break-all">for dir in ~/solienne.ai ~/solienne.dev ~/solienne-core; do echo "=== $dir ===" && git -C "$dir" status --short; done</p>
        </div>
      </section>
    </div>
  )
}
