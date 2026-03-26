import Link from 'next/link'

import { PROJECTS } from '@/data/portfolio'

// 전체 프로젝트 중 'featured' 속성이 참(true)인 항목만 추려내어 메인 화면에 표시합니다.
const featuredProjects = PROJECTS.filter(p => p.featured)


export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh' }}>
      {/* ── Hero 영역 (최상단 메인 배너): 간단한 인사말과 프로필/프로젝트로 이동하는 버튼 제공 ── */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '100px 24px 80px',
        }}
      >
        <p
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: '#2563eb',
            letterSpacing: '0.08em',
            marginBottom: '20px',
            textTransform: 'uppercase',
          }}
        >
          Frontend Developer
        </p>
        <h1
          className="animate-fade-up delay-200"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(44px, 7vw, 80px)',
            fontWeight: 900,
            color: '#0f172a',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            marginBottom: '28px',
          }}
        >
          FE 개발자<br />
          <span style={{ color: '#2563eb' }}>민채홍</span> 입니다
        </h1>
        <p
          className="animate-fade-up delay-300"
          style={{
            fontSize: '17px',
            color: '#64748b',
            maxWidth: '480px',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          JavaScript · TypeScript 기반으로 React와 React Native를 활용해
          사용자 친화적인 인터페이스를 구현합니다.
        </p>
        <div
          className="animate-fade-up delay-400"
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
        >
          <Link
            href="/projects"
            style={{
              textDecoration: 'none',
              padding: '12px 28px',
              borderRadius: '10px',
              backgroundColor: '#2563eb',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.01em',
            }}
          >
            프로젝트 보기
          </Link>
          <Link
            href="/profile"
            style={{
              textDecoration: 'none',
              padding: '12px 28px',
              borderRadius: '10px',
              backgroundColor: '#fff',
              color: '#0f172a',
              fontSize: '14px',
              fontWeight: 700,
              border: '1px solid #e2e8f0',
            }}
          >
            프로필
          </Link>
        </div>
      </section>

      {/* ── Projects Preview 영역: data/portfolio.ts에서 설정한 featured 프로젝트 목록을 카드 형태로 렌더링 ── */}
      <section style={{ backgroundColor: '#fff', padding: '64px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '36px',
            }}
          >
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
                color: '#0f172a',
              }}
            >
              프로젝트
            </h2>
            <Link
              href="/projects"
              style={{
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              더보기 →
            </Link>
          </div>

          <div
            className="scroll-hide"
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {featuredProjects.map((proj, i) => (
              <div
                key={i}
                className="project-card"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  flex: '0 0 300px',
                  scrollSnapAlign: 'start',
                }}
              >
                {/* Thumbnail placeholder */}
                <div
                  style={{
                    height: '180px',
                    backgroundColor: proj.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#cbd5e1',
                    }}
                  >
                    {proj.title.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#0f172a',
                      marginBottom: '8px',
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#64748b',
                      lineHeight: 1.6,
                      marginBottom: '16px',
                    }}
                  >
                    {proj.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
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

      {/* ── Skills Teaser 영역: 주요 사용 기술 스택을 뱃지(Badge) 형태로 간단히 보여주고 상세 페이지로 유도 ── */}
      <section style={{ padding: '80px 0 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '22px',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '40px',
            }}
          >
            사용 기술
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'Firebase', 'Tailwind CSS'].map(
              (tech, i) => (
                <span
                  key={i}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 600,
                    backgroundColor: '#fff',
                    color: '#0f172a',
                    border: '1px solid #e2e8f0',
                    letterSpacing: '0.01em',
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
          <div style={{ marginTop: '32px' }}>
            <Link
              href="/skills"
              style={{
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                color: '#2563eb',
              }}
            >
              기술 상세 보기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
