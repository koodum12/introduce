import profileData    from './profile.json'
import projectsData   from './projects.json'
import experiencesData from './experiences.json'
import skillsData     from './skills.json'

// ── 타입 정의 ─────────────────────────────────────────────

export interface Profile {
  name: string
  role: string
  bio: string
  email: string
  github: string
  phone: string
}

export interface Project {
  title: string
  desc: string
  tags: string[]
  primaryTag?: string
  color: string
  accent?: string
  initial: string
  featured?: boolean
}

export interface Experience {
  period: string
  title: string
  organization: string
  desc: string
  year: number
  type: '활동' | '프로젝트' | '교육' | '수상'
}

export interface Skill {
  name: string
  percent: number
  level: string
}

// ── JSON → 타입이 붙은 상수로 re-export ──────────────────

export const PROFILE     = profileData     as Profile
export const PROJECTS    = projectsData    as Project[]
export const EXPERIENCES = experiencesData as Experience[]
export const SKILLS      = skillsData as {
  frontend:  Skill[]
  languages: Skill[]
  tools:     string[]
}
