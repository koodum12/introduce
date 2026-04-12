'use client'

import Link from 'next/link'
import { PROJECTS } from '@/data/portfolio'

const featuredProjects = PROJECTS.filter(p => p.featured)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Hero */}
      <section className="mx-auto max-w-[1100px] px-6 pt-[100px] pb-20">
        
        <p className="animate-fade-up delay-100 mb-5 text-[13px] uppercase tracking-[0.08em] text-blue-600">
          Frontend Developer
        </p>

        <h1 className="animate-fade-up delay-200 mb-7 text-[44px] font-black leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-[80px]">
          FE 개발자<br />
          <span className="text-blue-600">민채홍</span> 입니다
        </h1>

        <p className="animate-fade-up delay-300 mb-10 max-w-[480px] text-[17px] leading-[1.7] text-slate-500">
          JavaScript · TypeScript 기반으로 React와 React Native를 활용해
          사용자 친화적인 인터페이스를 구현합니다.
        </p>

        <div className="animate-fade-up delay-400 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-[10px] bg-blue-600 px-7 py-3 text-sm font-bold tracking-[0.01em] text-white"
          >
            프로젝트 보기
          </Link>

          <Link
            href="/profile"
            className="rounded-[10px] border border-slate-200 bg-white px-7 py-3 text-sm font-bold text-slate-900"
          >
            프로필
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1100px] px-6">
          
          <div className="mb-9 flex items-center justify-between">
            <h2 className="text-[22px] font-bold text-slate-900">
              프로젝트
            </h2>

            <Link
              href="/projects"
              className="flex items-center gap-1 text-sm font-semibold text-blue-600"
            >
              더보기 →
            </Link>
          </div>

          <div className="scroll-hide flex gap-6 overflow-x-auto snap-x snap-mandatory">
            {featuredProjects.map((proj, i) => (
              <div
                key={i}
                className="project-card w-[300px] shrink-0 snap-start overflow-hidden rounded-[14px] border border-slate-200 bg-white"
              >
                {/* Thumbnail */}
                <div
                  className="flex h-[180px] items-center justify-center"
                  style={{ backgroundColor: proj.color }}
                >
                  <span className="text-[28px] font-extrabold text-slate-300">
                    {proj.title.charAt(0).toUpperCase()}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-base font-bold text-slate-900">
                    {proj.title}
                  </h3>

                  <p className="mb-4 text-[13px] leading-[1.6] text-slate-500">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className={ti === 0 ? 'tag tag-filled' : 'tag tag-outline'}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="py-20 pb-[100px]">
        <div className="mx-auto max-w-[1100px] px-6">

          <h2 className="mb-10 text-[22px] font-bold text-slate-900">
            사용 기술
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Python',
              'Firebase',
              'Tailwind CSS',
            ].map((tech, i) => (
              <span
                key={i}
                className="rounded-full border border-slate-200 bg-white px-[18px] py-2 text-[13px] font-semibold tracking-[0.01em] text-slate-900"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/skills"
              className="text-sm font-semibold text-blue-600"
            >
              기술 상세 보기 →
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}