import type { HeroData } from '@interfaces/components.ts';

import bgHeroHome from '@assets/img/hero_home.jpg';
import bgHeroServices from '@assets/img/hero_servicios.jpg';

export const HOME: HeroData = {
	title: 'Conectamos Tus emociones',
	span: 'con tu destino',
	description:
		'Viaja seguro y cómodo por el Perú. Disfruta de una flota moderna con los más altos estándares de calidad.',
	backgroundImage: bgHeroHome,
	altImage: 'Autobús de Terramóvil en la terminal',
};

export const SERVICES: HeroData = {
	title: 'Elige tu mejor experiencia de',
	span: 'viaje',
	backgroundImage: bgHeroServices,
	altImage: 'Autobús de Terramóvil en la terminal',
};
