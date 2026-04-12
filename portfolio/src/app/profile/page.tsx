import { PROFILE, SKILLS } from '@/data/portfolio'

export default function ProfilePage() {
  const skills = SKILLS.frontend.map(s => s.name)

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
    <div className="min-h-screen bg-slate-100">

      {/* Profile */}
      <section className="mx-auto max-w-[1100px] px-6 pt-16 pb-12">
        <div className="animate-fade-up flex flex-wrap items-center gap-12">

          {/* Avatar */}
          <div className="relative flex h-[160px] w-[160px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-slate-300 bg-slate-200">
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
            <h1 className="mb-1 text-[32px] font-black tracking-[-0.02em] text-slate-900 sm:text-[52px]">
              민채홍
            </h1>

            <p className="mb-2.5 text-lg font-semibold text-blue-600">
              FE developer
            </p>

            <p className="mb-5 flex items-center gap-1.5 text-sm text-green-500">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Currently building accessible design systems
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span
                  key={i}
                  className="rounded-full border border-blue-200 bg-blue-50 px-[14px] py-[5px] text-xs font-bold tracking-[0.04em] text-blue-600"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200" />

      {/* Bio + Contact */}
      <section className="mx-auto max-w-[1100px] px-6 py-12 pb-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_340px]">

          {/* Bio */}
          <div className="animate-fade-up delay-200">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-slate-900">
              <span className="text-blue-600">👤</span> 자기소개
            </h2>

            <p className="text-[15px] leading-[1.85] text-slate-600">
              {PROFILE.bio}
            </p>
          </div>

          {/* Contact */}
          <div className="animate-fade-up delay-300 rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="mb-5 text-base font-bold text-slate-900">
              연락처
            </h3>

            <div className="flex flex-col">
              {contacts.map((c, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3.5 py-3.5">
                    
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                      {c.icon}
                    </span>

                    <div>
                      <p className="mb-0.5 text-[13px] font-bold text-slate-900">
                        {c.label}
                      </p>
                      <p className="text-xs text-slate-400">
                        {c.value}
                      </p>
                    </div>
                  </div>

                  {i < contacts.length - 1 && (
                    <div className="border-t border-slate-100" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}