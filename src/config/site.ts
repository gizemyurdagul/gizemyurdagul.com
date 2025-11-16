export type NavigationLink = {
	href: string;
	label: string;
};

export const siteConfig = {
	title: 'Gizem Yurdagül | Project Manager & Research Lead',
	description:
		"Personal site of Gizem Yurdagül—project manager focused on research-backed innovation, process optimization, and thoughtful product delivery.",
	author: 'Gizem Yurdagül',
	navLinks: [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/projects', label: 'Projects' },
	] satisfies NavigationLink[],
	sections: {
		blog: {
			title: 'Writing & Notes | Gizem Yurdagül',
			description:
				'Essays and learnings from managing research-backed product initiatives, technology transfer, and innovation programs.',
		},
		projects: {
			title: 'Projects | Gizem Yurdagül',
			description: 'A curated list of technology and research projects delivered with cross-functional teams.',
		},
	},
} as const;

export type SiteConfig = typeof siteConfig;
