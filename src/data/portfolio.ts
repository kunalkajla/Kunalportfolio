/**
 * Central portfolio data for Kunal Kajala.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Items marked PLACEHOLDER are waiting for your own words — replace them before you deploy.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Kunal Kajala',
  displayName: 'Kunal Kajala',
  firstName: 'KUNAL',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A KAJALA ORIGINAL',
  role: 'Future Teacher',
  tagline: ['Future Teacher', 'Poet', 'Webnovelist'],
  intro:
    'A BSc BEd student at IIT Jodhpur, student representative, poet and webnovel writer — learning to teach so that education makes a person free, not merely useful.',
  location: 'IIT Jodhpur',
  region: 'Rajasthan, India',
  email: 'b24edp009@iitj.ac.in',
  links: {
    linkedin: 'https://www.linkedin.com/in/kunal-kajla-6323b243a',
  } as { linkedin: string; github?: string },
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-900.webp 900w',
    alt: 'Portrait of Kunal Kajala',
  },
  interests: ['Poetry', 'Webnovels', 'Astrophysics', 'Theatre'],
};

export const education = [
  {
    school: 'IIT Jodhpur',
    place: 'Jodhpur',
    degree: 'BSc BEd',
    period: '2024 – Present',
    score: '2024 batch',
  },
];

export const experience = [
  {
    company: 'IIT Jodhpur',
    role: 'Student Representative',
    place: 'Jodhpur',
    period: 'Sep 2024 – Sep 2026',
    points: [
      'Student welfare and student council work.',
      'Leadership and stakeholder management across the student community.',
    ],
  },
  {
    company: 'Clash of Clans',
    role: 'Clan Leader',
    place: 'Remote',
    period: 'Sep 2014 – Dec 2024',
    points: ['Led an online community and team for ten years.'],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Full poems / pieces shown in the modal. */
  poems?: { title?: string; text: string }[];
  /** Optional link (published piece, repository, …). The button is hidden when omitted. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'educational-philosophy',
    title: 'Educational Philosophy',
    year: '2026',
    genre: 'Essay • Teaching • Freedom',
    logline: 'Education should make a person free, not merely useful to society.',
    stack: ['Freedom', 'Reflection', 'Questioning'],
    build: [
      'Teaching should help people question their own thoughts, emotions, family and social conditioning, and bodily limits.',
      'The move that matters is from reaction to reflection — and teachers must never be unquestionable authorities.',
      'The goal: "I understand why I am this way, and now I can decide whether I want to remain this way."',
    ],
    features: [
      'Education as freedom, not usefulness',
      'From reaction to reflection',
      'Teachers who can be questioned',
    ],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'poetry',
    title: 'Poetry',
    year: '2026',
    genre: 'Poems • Writing',
    logline: 'Poems on grief, time, memory and being chosen.',
    stack: ['Grief', 'Time', 'Memory', 'Belonging'],
    build: ['Five poems, shared here in full.', 'One has a title, "A Slave to Future"; the others stand untitled.'],
    features: ['Five poems in full', 'Verse and prose-poem forms'],
    metrics: [],
    poems: [
          {
                "text": "Sometimes I wonder\nif this is all a dream\nI am destined to wake from.\nAnd if the morning breaks—\nwill I become\nthe person I once was,\nor spend forever\naching for the nightmare\nthat carved my heart its rhythm?\nFor grief, too,\ncan feel like home.\nAnd pain, endured long enough,\nlearns the shape of your name.\nSo tell me—\nwhen the light finally comes,\nwill I rejoice,\nor mourn the dream\nthat ruined me\nand made me who I am?"
          },
          {
                "title": "A Slave to Future",
                "text": "They say, “Do not dwell in the past.”\nThey say, “Live in the moment,\nfor life is only found in the now.”\n\nAnd yet\nhow cruelly time turns its own pages.\n\nFor the one who dreamt of freedom for all,\nwho taught the world to loosen its chains,\nnow walks beneath the weight of his own.\n\nHe left yesterday behind,\nhe surrendered himself to today,\nonly to discover, too late,\n\nthat the greatest prison\nwas not the past,\nnor the present\n\nbut the future\nhe was forever trying to reach."
          },
          {
                "text": "To be a “perfect” organism in nature, you should be stupid. You should just eat, sleep, and breed. The smarter you become the more you realise how pointless living is! These “survival instincts” are but cards played by nature to let life continue its course. Being smart enough to see the timeline of the universe, where you eventually turn to dust is a torture device built into your own brain."
          },
          {
                "text": "What is ‘I’ but a collection of memories haunting a frame of bone?\nI touch the world, but I only feel my own nerves.\nI see the light, but I only see the past.\nIf my reality is built entirely of my own perceptions, then I am a prisoner in a cell of my own making. To wake is to lose the only world I have ever known"
          },
          {
                "text": "I was never unwanted.\nJust never chosen.\n\nI learned where to stand\nby watching others be named.\nI waited in the shape they left me\nand called the long pause\nunderstanding.\n\nWhen the world listed its priorities,\nmy name was the silence\nbetween them.\n\nI stayed long enough\nto become convenient,\nuntil being tolerated\nfelt like being loved,\nand mistook that\nfor worth."
          }
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'webnovels',
    title: 'Webnovels',
    year: '2026',
    genre: 'Fiction • Serial writing',
    logline: 'Webnovels in progress. PLACEHOLDER — add the title and a one-line premise.',
    stack: ['Webnovel', 'Serial fiction'],
    build: ['PLACEHOLDER — add the novel title, genre, where it is published and how often chapters come out.'],
    features: ['Actively writing', 'New chapters in progress'],
    metrics: [],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'student-rep',
    title: 'Student Representative',
    org: 'IIT Jodhpur',
    detail: 'Student welfare and council work, September 2024 to September 2026.',
    laurel: 'Elected Voice',
  },
  {
    id: 'clan-leader',
    title: 'Clan Leader',
    org: 'Clash of Clans',
    detail: 'Led an online community and team from September 2014 to December 2024.',
    laurel: 'Ten Years',
  },
  {
    id: 'poet',
    title: 'Poet',
    org: 'Writing',
    detail: 'Writes poetry — five poems are shared in full on this site.',
    laurel: 'Verse',
  },
  {
    id: 'webnovelist',
    title: 'Webnovelist',
    org: 'Writing',
    detail: 'Actively writing webnovels.',
    laurel: 'In Progress',
  },
];

export type Certification = { issuer: string; name: string; link: string };

/** Add certificates here and a "Certified" rail appears on the site. */
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'leadership',
    title: 'Leadership',
    subtitle: 'Communities & councils',
    skills: [
      { name: 'Leadership', mono: 'Ld', note: 'Core' },
      { name: 'Community Management', mono: 'Cm' },
      { name: 'Team Management', mono: 'Tm' },
      { name: 'Strategic Planning', mono: 'Sp' },
      { name: 'Stakeholder Management', mono: 'Sm' },
      { name: 'Student Welfare', mono: 'Sw' },
    ],
  },
  {
    id: 'voice',
    title: 'Voice & Stage',
    subtitle: 'Speaking, performing, writing',
    skills: [
      { name: 'Public Speaking', mono: 'Ps' },
      { name: 'Communication', mono: 'Co' },
      { name: 'Theatre', mono: 'Th' },
      { name: 'Standup', mono: 'Su' },
      { name: 'Poetry', mono: 'Po' },
      { name: 'Webnovels', mono: 'Wn' },
    ],
  },
  {
    id: 'science',
    title: 'Science',
    subtitle: 'The curious side',
    skills: [
      { name: 'Mathematics', mono: 'Ma' },
      { name: 'Physics', mono: 'Ph' },
      { name: 'Astrophysics', mono: 'As' },
      { name: 'Problem Solving', mono: 'Pr' },
    ],
  },
  {
    id: 'code',
    title: 'Code & Games',
    subtitle: 'Building things',
    skills: [
      { name: 'C++', mono: 'C+' },
      { name: 'Game Development', mono: 'Gd' },
      { name: 'GitHub', mono: 'Gh' },
    ],
  },
];

/** Cross-references shown when a skill card is hovered/tapped. Only add what is true. */
export const skillEvidence: Record<string, string[]> = {
  Leadership: ['Student Representative, IIT Jodhpur', 'Clan Leader, Clash of Clans'],
  'Community Management': ['Clan Leader, Clash of Clans'],
  'Team Management': ['Clan Leader, Clash of Clans'],
  'Student Welfare': ['Student Representative, IIT Jodhpur'],
  Poetry: ['Poetry'],
  Webnovels: ['Webnovels'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Clan',
    period: '2014 – 2024',
    synopsis: 'A decade of leading an online community in Clash of Clans.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Leader',
        description: 'Clan Leader in Clash of Clans, September 2014 to December 2024 — leading a community and a team, remotely.',
        tags: ['Leadership', 'Community', 'Teams'],
        runtime: 'Sep 2014 – Dec 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: IIT Jodhpur',
    period: '2024 – Present',
    synopsis: 'BSc BEd at IIT Jodhpur, and a seat on the student council.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Student',
        description: 'Joined the BSc BEd programme at IIT Jodhpur with the 2024 batch.',
        tags: ['BSc BEd', 'IIT Jodhpur'],
        runtime: '2024 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Representative',
        description: 'Student Representative — student welfare and council work, September 2024 to September 2026.',
        tags: ['Student council', 'Welfare', 'Stakeholders'],
        runtime: 'Sep 2024 – Sep 2026',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Pre-Intern',
        description: 'EDL3030 Pre-Internship Practice — building a teaching portfolio with a teaching statement, bio and showcase work.',
        tags: ['EDL3030', 'Teaching portfolio'],
        runtime: 'This semester',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Writer',
    period: 'Now streaming',
    synopsis: 'Poems, webnovels and a philosophy of education.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Poet',
        description: 'Writes poetry.',
        tags: ['Poetry'],
        runtime: 'Ongoing',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Novelist',
        description: 'Actively writing webnovels.',
        tags: ['Webnovels', 'Serial fiction'],
        runtime: 'Ongoing',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Philosopher',
        description: 'Wrote a personal Educational Philosophy: education as freedom, and the move from reaction to reflection.',
        tags: ['Education', 'Reflection'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: "What's Next",
    period: 'Coming up',
    synopsis: 'The teaching years.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Teacher',
        description: 'Lesson plans, reflections and classroom work will land here. PLACEHOLDER — add them as you create them.',
        tags: ['Teaching', 'BEd'],
        runtime: 'In production',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'The big idea', title: 'Education as Freedom', detail: 'From reaction to reflection', palette: ocean },
  { label: 'Current role', title: 'Student Rep', detail: 'IIT Jodhpur • 2024 – 2026', palette: crimson },
  { label: 'The long run', title: '10 Years', detail: 'Clan Leader • Clash of Clans', palette: amber },
  { label: 'On the page', title: 'Poetry', detail: 'Verse, in progress', palette: violet },
  { label: 'Serial fiction', title: 'Webnovels', detail: 'Actively writing', palette: jade },
  { label: 'On stage', title: 'Theatre & Standup', detail: 'Public speaking, live', palette: crimson },
  { label: 'Looking up', title: 'Astrophysics', detail: 'With Mathematics & Physics', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BSc BEd',
    lines: ['IIT Jodhpur', '2024 batch'],
    chips: ['Future Teacher'],
  },
  {
    kicker: 'Philosophy',
    title: 'Education as freedom.',
    lines: ['From reaction to reflection', 'Teachers who can be questioned'],
  },
  {
    kicker: 'Leadership',
    title: 'Student Representative',
    lines: ['IIT Jodhpur · Sep 2024 – Sep 2026', 'Student welfare and council work'],
  },
  {
    kicker: 'The long run',
    title: 'Ten years as Clan Leader',
    lines: ['Clash of Clans · Sep 2014 – Dec 2024', 'Leading a community and a team'],
  },
  {
    kicker: 'Words',
    title: 'Poet. Webnovelist.',
    lines: ['Poems and serial fiction, in progress'],
    chips: ['Poetry', 'Webnovels'],
  },
  {
    kicker: 'Next',
    title: 'The teaching years',
    lines: ['EDL3030 Pre-Internship Practice', 'Teaching statement · lesson plans · reflections'],
  },
];

export type ProfileId = 'kunal' | 'educator' | 'reader' | 'leader';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'kunal',
    name: 'Kunal',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'educator',
    name: 'Educator',
    blurb: 'Philosophy & teaching first',
    color: '#4cc9ff',
    order: ['originals', 'about', 'journey', 'story', 'moments', 'skills', 'picks'],
  },
  {
    id: 'reader',
    name: 'Reader',
    blurb: 'Poems & webnovels first',
    color: '#b98bff',
    order: ['originals', 'journey', 'picks', 'about', 'moments', 'skills', 'story'],
  },
  {
    id: 'leader',
    name: 'Leader',
    blurb: 'Roles & leadership first',
    color: '#ffb547',
    order: ['moments', 'journey', 'skills', 'about', 'originals', 'picks', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & roles', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Work', card: 'My Work', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: `Top ${topPicks.length}`, palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Moments', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Profile', card: 'The Full Story', meta: 'Profile • Contact', palette: violet },
};
