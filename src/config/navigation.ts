export interface NavLink {
  name: string;
  id: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Experience', id: 'experience' },
  { name: 'Research',   id: 'research'   },
  { name: 'Projects',   id: 'projects'   },
  { name: 'Education',  id: 'education'  },
];
