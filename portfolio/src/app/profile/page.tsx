import { PROFILE, SKILLS } from '@/data/portfolio'

// 프로필 페이지 컴포넌트: 기본 신상 정보와 연락처, 스킬 리스트를 보여주는 화면입니다.
export default function ProfilePage() {
  // src/data/portfolio.ts (SKILLS.frontend) 의 객체에서 기술 이름(name)만 뽑아내어 배열로 만듭니다.
  const skills = SKILLS.frontend.map(s => s.name)
  
  // 연락처 정보를 배열로 정의해두고, 추후 하단의 map 함수를 통해 개별 리스트 아이템으로 반복 렌더링합니다.
  const contacts = [
    {
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.292 9.423 7.86 10.953.575.105.785-.25.785-.555 0-.275-.01-1.003-.015-1.97-3.2.695-3.876-1.54-3.876-1.54-.523-1.33-1.277-1.684-1.277-1.684-1.044-.714.08-.7.08-.7 1.154.082 1.762 1.186 1.762 1.186 1.026 1.76 2.69 1.25 3.347.956.104-.743.4-1.25.728-1.537-2.553-.29-5.236-1.277-5.236-5.683 0-1.255.448-2.28 1.183-3.085-.118-.29-.513-1.46.113-3.045 0 0 .965-.31 3.163 1.18a11.01 11.01 0 0 1 2.88-.388c.977.005 1.96.133 2.88.388 2.196-1.49 3.16-1.18 3.16-1.18.628 1.585.233 2.755.115 3.045.738.804 1.182 1.83 1.182 3.085 0 4.416-2.687 5.39-5.248 5.674.413.355.78 1.057.78 2.13 0 1.537-.015 2.777-.015 3.155 0 .308.207.666.79.554C20.71 21.42 24 17.097 24 12c0-6.35-5.15-11.5-12-11.5z" />
        </svg>
      ),
      label: 'GitHub',
      value: PROFILE.github,
    },
    {
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      label: 'phone',
      value: PROFILE.phone,
    },
    {
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: 'email',
      value: PROFILE.email,
    },
  ]


  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh' }}>
      {/* ── Profile Card 영역: 좌측에 아바타(사진/도형), 우측에 간단한 요약 정보를 표시하는 구역 ── */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px 48px' }}>
        <div
          className="animate-fade-up"
          style={{ display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}
        >
          {/* Avatar */}
          <div
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              border: '2px solid #cbd5e1',
              backgroundColor: '#e2e8f0',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Geometric avatar placeholder matching design */}
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect x="10" y="10" width="40" height="40" fill="#22c55e" />
              <rect x="70" y="10" width="40" height="40" fill="#22c55e" />
              <rect x="110" y="10" width="10" height="40" fill="#22c55e" />
              <rect x="10" y="70" width="40" height="40" fill="#22c55e" />
              <rect x="60" y="70" width="20" height="40" fill="#22c55e" />
            </svg>
          </div>

          {/* Info */}
          <div>
            <h1
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 900,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                marginBottom: '6px',
              }}
            >
              민채홍
            </h1>
            <p
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#2563eb',
                marginBottom: '10px',
              }}
            >
              FE developer
            </p>
            <p
              style={{
                fontSize: '14px',
                color: '#22c55e',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  display: 'inline-block',
                }}
              />
              Currently building accessible design systems
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    padding: '5px 14px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    backgroundColor: '#eff6ff',
                    color: '#2563eb',
                    border: '1px solid #bfdbfe',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #e2e8f0' }} />

      {/* ── Bio (자기소개) 및 Contact (연락처) 영역: 화면이 줄어들면(768px 이하) 1열로, 넓을 땐 2열 분할로 렌더링됩니다 ── */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: '48px',
            alignItems: 'start',
          }}
          className="profile-grid"
        >
          {/* Bio */}
          <div className="animate-fade-up delay-200">
            <h2
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: '#2563eb' }}>👤</span> 자기소개
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: '#475569',
                lineHeight: 1.85,
              }}
            >
              다른 사람들보다 조금 늦게 프론트엔드 개발을 시작했지만, 누구보다 빠르게 배우고 깊게 이해하기 위해 노력해왔습니다. JavaScript와 TypeScript를 기반으로 React와 React Native를 활용해 사용자 친화적인 인터페이스를 구현합니다. 부족한 부분을 스스로 찾아 학습하며, 문제 해결 과정을 즐기는 편입니다. 단순히 작동하는 화면을 넘어, 더 나은 사용자 경험을 제공하는 개발자가 되는 것을 목표로 하고 있습니다.
            </p>
          </div>

          {/* Contact card */}
          <div
            className="animate-fade-up delay-300"
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '28px',
            }}
          >
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '20px',
              }}
            >
              연락처
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {contacts.map((c, i) => (
                <div key={i}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 0',
                    }}
                  >
                    <span
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#0f172a',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </span>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>
                        {c.label}
                      </p>
                      <p style={{ fontSize: '12px', color: '#94a3b8' }}>{c.value}</p>
                    </div>
                  </div>
                  {i < contacts.length - 1 && (
                    <div style={{ borderTop: '1px solid #f1f5f9' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .profile-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
