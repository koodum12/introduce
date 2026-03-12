
/**
 * 프로젝트 단일 항목의 데이터 구조를 정의하는 인터페이스
 */
export interface Project {
  title: string;
  desc: string;
  tags: string[];
  primaryTag?: string;
  color: string;
  accent?: string;
  initial: string;
  featured?: boolean; // 메인 페이지(Hero)에 노출할지 여부
}

export interface Skill {
  name: string;
  percent: number;
  level: string;
}

/**
 * 개인 프로필 정보(이름, 소개, 연락처 등)를 정의하는 인터페이스
 */
export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  phone: string;
}

/**
 * 전체 프로젝트 리스트 데이터
 * 새로운 프로젝트를 추가할 때 이 배열에 객체를 추가하면 전체 사이트에 자동 반영됩니다.
 */
export const PROJECTS: Project[] = [
  {
    title: '대전도',
    desc: 'A comprehensive martial arts tournament management system designed for organizing brackets, scoring, and real-time results tracking.',
    tags: ['next js', 'tailwindcss', 'JS'],
    primaryTag: 'next js',
    color: '#fef9ee',
    accent: '#f59e0b',
    initial: '대',
    featured: true,
  },
  {
    title: 'motiveet',
    desc: 'Social motivation and habit tracking mobile application that helps users stay consistent through community challenges.',
    tags: ['next js', 'tailwindcss', 'TypeScript'],
    primaryTag: 'next js',
    color: '#f0f4ff',
    accent: '#2563eb',
    initial: 'M',
    featured: true,
  },
  {
    title: 'together',
    desc: 'Platform for coordinating local community events, volunteer activities, and local meetups with integrated RSVP management.',
    tags: ['Python'],
    primaryTag: 'Python',
    color: '#f0fdf4',
    accent: '#22c55e',
    initial: 'T',
    featured: true,
  }
];

/**
 * 보유 기술 스택 및 툴 숙련도 데이터
 */
export const SKILLS = {
  frontend: [
    { name: 'JavaScript', percent: 95, level: 'EXPERT' },
    { name: 'TypeScript', percent: 92, level: 'EXPERT' },
    { name: 'React', percent: 90, level: 'EXPERT' },
    { name: 'Next JS', percent: 88, level: 'EXPERT' },
  ],
  languages: [
    { name: 'Python', percent: 85, level: 'EXPERT' },
    { name: 'JavaScript', percent: 95, level: 'EXPERT' },
    { name: 'TypeScript', percent: 92, level: 'EXPERT' },
  ],
  tools: ['Git', 'GitHub', 'Figma', 'Vercel', 'Firebase', 'Tailwind CSS']
};

/**
 * 사이트 전반에서 사용될 개인 프로필 기본 정보
 */
export const PROFILE: Profile = {
  name: '민채홍',
  role: 'FE Developer',
  bio: '다른 사람들보다 조금 늦게 프론트엔드 개발을 시작했지만, 누구보다 빠르게 배우고 깊게 이해하기 위해 노력해왔습니다. JavaScript와 TypeScript를 기반으로 React와 React Native를 활용해 사용자 친화적인 인터페이스를 구현합니다. 부족한 부분을 스스로 찾아 학습하며, 문제 해결 과정을 즐기는 편입니다. 단순히 작동하는 화면을 넘어, 더 나은 사용자 경험을 제공하는 개발자가 되는 것을 목표로 하고 있습니다.',
  email: 'minchaehong2@gmail.com',
  github: 'https://github.com/koodum12',
  phone: '01039421168'
};
