import type { ImageMetadata } from 'astro';

import heroHome from '../assets/img/hero_home.jpg';

interface HeroContent {
	title?: string;
	span?: string;
	description?: string;
	backgroundImage: ImageMetadata;
}

export const HERO_DATA: Record<string, HeroContent> = {
	home: {
		title: 'Conectamos Tus emociones',
		span: 'CON TU DESTINO',
		description:
			'Viaja seguro y cómodo hacia el Norte y Huancayo. Disfruta de una flota moderna con los más altos estándares de calidad.',
		backgroundImage: heroHome,
	},
};
