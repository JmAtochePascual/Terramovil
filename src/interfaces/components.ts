import type { ImageMetadata } from 'astro';

export interface HeroData {
	title?: string;
	span?: string;
	description?: string;
	backgroundImage: ImageMetadata;
	altImage: string;
}
