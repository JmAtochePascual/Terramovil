import type { ImageMetadata } from 'astro';

import bgHeroHome from '../assets/img/hero_home.jpg';
import bgHeroServicios from '../assets/img/hero_servicios.jpg';
import bgHeroDestinos from '../assets/img/hero_destinos.jpg';

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
		backgroundImage: bgHeroHome,
	},
	servicios: {
		title: 'Elige tu Mejor Experiencia de',
		span: 'Viaje',
		backgroundImage: bgHeroServicios,
	},
	destinos: {
		title: 'Nuestra Red de Destinos',
		span: 'terramovil',
		backgroundImage: bgHeroDestinos,
	},
};
