'use client'

import { useState } from 'react'
import { EXPERIENCES } from '@/data/portfolio'

const TYPE_COLOR: Record<string, { bg: string; color: string }> = {
  활동:    { bg: '#eff6ff', color: '#2563eb' },
  프로젝트: { bg: '#f0fdf4', color: '#16a34a' },
  교육:    { bg: '#fefce8', color: '#ca8a04' },
  수상:    { bg: '#fdf4ff', color: '#9333ea' },
}

// 타임라인에 표시할 연도 목록 (오래된 것 → 최신 순)
const YEARS = [...new Set(EXPERIENCES.map(e => e.year))].sort((a, b) => a - b)

export default function ExperiencePage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const filtered = selectedYear
    ? EXPERIENCES.filter(e => e.year === selectedYear)
    : EXPERIENCES

  const currentYear = new Date().getFullYear()

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh' }}>
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px 100px' }}>

        {/* Page title */}
        <div className="animate-fade-up" style={{ marginBottom: '56px' }}>
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
            Experience
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7, maxWidth: '520px' }}>
            외부 활동, 프로젝트, 교육, 수상 이력을 연도별 타임라인으로 정리했습니다.
          </p>
        </div>

        {/* ── 연도 타임라인 ── */}
        <div
          className="animate-fade-up delay-100"
          style={{ position: 'relative', marginBottom: '64px', padding: '0 0 32px' }}
        >
          {/* 연결선 */}
          <div
            style={{
              position: 'absolute',
              top: '26px',
              left: 0,
              right: 0,
              height: '2px',
              backgroundColor: '#e2e8f0',
              zIndex: 0,
            }}
          />
          {/* 채워진 선 (selectedYear까지) */}
          {selectedYear && (
            <div
              style={{
                position: 'absolute',
                top: '26px',
                left: 0,
                width: `${((YEARS.indexOf(selectedYear) + 1) / YEARS.length) * 100}%`,
                height: '2px',
                backgroundColor: '#2563eb',
                transition: 'width 0.4s ease',
                zIndex: 0,
              }}
            />
          )}
          {!selectedYear && (
            <div
              style={{
                position: 'absolute',
                top: '26px',
                left: 0,
                right: 0,
                height: '2px',
                backgroundColor: '#2563eb',
                zIndex: 0,
              }}
            />
          )}

          {/* 연도 점 & 레이블 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {YEARS.map(year => {
              const isLatest = year === Math.max(...YEARS)
              const isSelected = selectedYear === year
              const isActive = selectedYear === null || isSelected

              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(isSelected ? null : year)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    padding: 0,
                  }}
                >
                  {/* 연도 레이블 */}
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: isLatest ? '28px' : isActive ? '18px' : '16px',
                      fontWeight: isLatest ? 900 : isActive ? 700 : 500,
                      color: isSelected
                        ? '#2563eb'
                        : isLatest
                        ? '#0f172a'
                        : isActive
                        ? '#475569'
                        : '#94a3b8',
                      letterSpacing: '-0.03em',
                      transition: 'all 0.25s ease',
                      lineHeight: 1,
                    }}
                  >
                    {year}
                  </span>

                  {/* 타임라인 점 */}
                  <div
                    style={{
                      width: isLatest || isSelected ? '18px' : '10px',
                      height: isLatest || isSelected ? '18px' : '10px',
                      borderRadius: '50%',
                      backgroundColor: isSelected
                        ? '#2563eb'
                        : isLatest
                        ? '#1d4ed8'
                        : isActive
                        ? '#93c5fd'
                        : '#cbd5e1',
                      border: isLatest || isSelected ? '3px solid #fff' : '2px solid #e2e8f0',
                      boxShadow: isLatest || isSelected ? '0 0 0 3px #2563eb' : 'none',
                      transition: 'all 0.25s ease',
                    }}
                  />
                </button>
              )
            })}
          </div>

          {/* 연도 필터 안내 */}
          {selectedYear && (
            <p
              style={{
                textAlign: 'center',
                marginTop: '24px',
                fontSize: '13px',
                color: '#2563eb',
                fontWeight: 600,
              }}
            >
              {selectedYear}년 활동만 보는 중 —&nbsp;
              <button
                onClick={() => setSelectedYear(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748b',
                  fontSize: '13px',
                  fontWeight: 500,
                  textDecoration: 'underline',
                  padding: 0,
                }}
              >
                전체 보기
              </button>
            </p>
          )}
        </div>

        {/* ── 활동 목록 ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filtered.map((exp, i) => {
            const typeStyle = TYPE_COLOR[exp.type] ?? { bg: '#f1f5f9', color: '#475569' }
            return (
              <div
                key={i}
                className="animate-fade-up"
                style={{
                  animationDelay: `${0.05 + i * 0.07}s`,
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px 32px',
                  display: 'flex',
                  gap: '28px',
                  alignItems: 'flex-start',
                }}
              >
                {/* 좌측: 날짜 */}
                <div style={{ minWidth: '140px', flexShrink: 0 }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '12px',
                      color: '#2563eb',
                      fontWeight: 500,
                      lineHeight: 1.6,
                      display: 'block',
                    }}
                  >
                    {exp.period}
                  </span>
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: '8px',
                      padding: '2px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      backgroundColor: typeStyle.bg,
                      color: typeStyle.color,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* 우측: 내용 */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: '#0f172a',
                      letterSpacing: '-0.01em',
                      marginBottom: '4px',
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#2563eb',
                      fontWeight: 600,
                      marginBottom: '10px',
                    }}
                  >
                    {exp.organization}
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#64748b',
                      lineHeight: 1.7,
                    }}
                  >
                    {exp.desc}
                  </p>
                </div>
              </div>
            )
          })}

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '15px', padding: '60px 0' }}>
              해당 연도에 등록된 활동이 없습니다.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
