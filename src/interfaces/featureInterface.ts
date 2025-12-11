import type { ImageMetadata } from 'astro';

export interface FeatureInfo {
	label: string;
	title: string;
	description: string;
	image: ImageMetadata;
	alt: string;
	reverse?: boolean;
	features: FeatureItem[];
}

export interface FeatureItem {
	title: string;
	description: string;
	icon: ImageMetadata;
}
