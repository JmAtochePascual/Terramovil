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

export interface CTAButton {
	label: string;
	href: string;
	variant: 'solid' | 'outline';
	isExternal?: boolean;
}

export interface CTAData {
	title: string;
	description: string;
	buttons?: CTAButton[];
	image?: ImageMetadata;
	imageAlt?: string;
}

export interface FleetItem {
	service: string;
	title: string;
	description: string;
	image: ImageMetadata;
	altImage: string;
	link: string;
}

export interface FleetSectionData {
	eyebrow: string;
	title: string;
	description: string;
	items: FleetItem[];
}

export interface FAQItem {
	question: string;
	answer: string;
}

export interface FAQSectionData {
	title: string;
	description: string;
	items: FAQItem[];
}

export interface WhatsAppData {
	phone: string;
	message?: string;
	label: string;
	icon: ImageMetadata;
}

export interface ServiceDetailItem {
	title: string;
	description: string;
}

export interface ServiceComparisonData {
	eyebrow: string;
	title: string;
	mainDescription: string;
	services: ServiceDetailItem[];
}
