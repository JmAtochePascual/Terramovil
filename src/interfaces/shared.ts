export interface PageSEO {
	title: string;
	description: string;
	image: string;
}

export interface NavLink {
	label: string;
	href: string;
}

export interface SocialLink {
	name: string;
	href: string;
	iconKey: string;
}

export interface SiteInfo {
	address: string;
	email: string;
	phones: {
		lima: string;
		piura: string;
	};
	bookComplaintUrl: string;
}
