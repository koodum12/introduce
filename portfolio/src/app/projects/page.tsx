import { PROJECTS } from '@/data/portfolio'


// 메인 프로젝트 페이지: 중앙 데이터 파일(src/data/portfolio.ts)에서 정보를 불러와 
// CSS Grid 형식으로 화면 크기에 맞게 여러 카드를 나열하는 역할을 합니다.
export default function ProjectsPage() {
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
            프로젝트
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7, maxWidth: '520px' }}>
            A curated selection of my professional work, open-source contributions, and
            technical experiments across full-stack development.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {/* 가져온 PROJECTS 데이터를 기반으로 각각의 프로젝트 카드를 순회(Map)하며 생성합니다. */}
          {PROJECTS.map((proj, i) => (
            <div
              key={i}
              className="project-card animate-fade-up"
              style={{
                animationDelay: `${0.1 + i * 0.08}s`,
                backgroundColor: '#fff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  height: '180px',
                  backgroundColor: proj.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '56px',
                    fontWeight: 800,
                    color: proj.accent,
                    opacity: 0.25,
                    userSelect: 'none',
                  }}
                >
                  {proj.initial}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '22px' }}>
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {proj.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#64748b',
                    lineHeight: 1.65,
                    marginBottom: '18px',
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
      </section>
    </div>
  )
}
