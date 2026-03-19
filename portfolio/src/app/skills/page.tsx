'use client'

import { useEffect, useRef, useState } from 'react'

interface Skill {
  name: string
  percent: number
  level: string
}

import { SKILLS } from '@/data/portfolio'

const frontendSkills = SKILLS.frontend
const languageSkills = SKILLS.languages


// 개별 기술 스택의 바(Bar) 형태 UI를 렌더링하고, 스크롤 애니메이션(퍼센테이지 차오름)을 관리하는 컴포넌트입니다.
function SkillBar({ skill, animate }: { skill: Skill; animate: boolean }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '8px',
        }}
      >
        <span
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: '#0f172a',
            letterSpacing: '-0.01em',
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#2563eb',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {skill.percent}%
        </span>
      </div>
      {/* Track */}
      <div
        style={{
          height: '8px',
          backgroundColor: '#e2e8f0',
          borderRadius: '100px',
          overflow: 'hidden',
          marginBottom: '6px',
        }}
      >
        <div
          style={{
            height: '100%',
            borderRadius: '100px',
            backgroundColor: '#2563eb',
            width: animate ? `${skill.percent}%` : '0%',
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
      <span
        style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: '#94a3b8',
          textTransform: 'uppercase',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {skill.level}
      </span>
    </div>
  )
}

// 여러 개의 SkillBar를 묶어서 하나의 카드 형태로 보여주는 컴포넌트입니다.
// IntersectionObserver API를 사용해 화면(Viewport)에 이 카드가 보일 때(Intersecting)
// 안의 요소들이 애니메이션 되도록 트리거(animate=true) 합니다.
function SkillCard({
  title,
  skills,
}: {
  title: string
  skills: Skill[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: '#fff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        padding: '32px',
      }}
    >
      <h2
        style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#0f172a',
          marginBottom: '28px',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
      {skills.map((skill, i) => (
        <SkillBar key={i} skill={skill} animate={animate} />
      ))}
    </div>
  )
}

// 전체 사용 기술 페이지 컴포넌트
export default function SkillsPage() {
  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh' }}>
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px 100px' }}>
        {/* Header */}
        <div className="animate-fade-up" style={{ marginBottom: '48px' }}>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            사용 기술
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7 }}>
            실무에서 꾸준히 사용해온 기술 스택과 숙련도입니다.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          <SkillCard title="프론트엔드 기술" skills={frontendSkills} />
          <SkillCard title="사용 가능 언어" skills={languageSkills} />
        </div>

        {/* Tool badges */}
        <div style={{ marginTop: '48px' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#94a3b8',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '20px',
            }}
          >
            Tools & Etc
          </h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {SKILLS.tools.map(
              (tool, i) => (
                <span
                  key={i}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 600,
                    backgroundColor: '#fff',
                    color: '#334155',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
