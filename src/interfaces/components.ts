import type { ImageMetadata } from 'astro';

export interface HeroData {
	title?: string;
	span?: string;
	description?: string;
	backgroundImage: ImageMetadata;
	altImage: string;
}

export interface FeatureItem {
	title: string;
	description: string;
	icon: ImageMetadata;
}

export interface FeatureGridData {
	eyebrow: string;
	title: string;
	description: string;
	image: ImageMetadata;
	imageAlt: string;
	items: FeatureItem[];
}

export interface StatItem {
	value: string;
	label: string;
}

export interface DestinationItem {
	city: string;
	region: string;
	tagline: string;
	image: ImageMetadata;
}

export interface DestinationsSection {
	eyebrow: string;
	title: string;
	description: string;
	items: DestinationItem[];
	limit?: number;
	showButton?: boolean;
}
