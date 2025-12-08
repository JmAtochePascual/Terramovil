import type { ImageMetadata } from 'astro';

import imgChiclayo from '../assets/img/destinos/chiclayo.jpg';
import imgPiura from '../assets/img/destinos/piura.jpg';
import imgSullana from '../assets/img/destinos/sullana.jpg';
import imgpPaita from '../assets/img/destinos/paita.jpg';
import imgCatacaos from '../assets/img/destinos/catacaos.jpg';
import imgChatoGrande from '../assets/img/destinos/chato-grande.jpg';
import imgLaUnion from '../assets/img/destinos/la-union.jpg';
import imgLaAreana from '../assets/img/destinos/la-arena.jpg';
import imgSechura from '../assets/img/destinos/sechura.jpg';
import imgHuancayo from '../assets/img/destinos/huancayo.jpg';
import imgLasLomas from '../assets/img/destinos/las-lomas.jpg';
import imgLima from '../assets/img/destinos/lima.jpg';
import imgTamboGrande from '../assets/img/destinos/tambo-grande.jpg';
import imgConcepcion from '../assets/img/destinos/concepcion.jpg';
import imgJauja from '../assets/img/destinos/jauja.png';
import imgAlmiranteGrau from '../assets/img/destinos/almirante-grau.jpg';

export interface DestinationItem {
	city: string;
	region: string;
	tagline: string;
	image: ImageMetadata;
}

export const DESTINATIONS_DATA: DestinationItem[] = [
	{
		city: 'CHICLAYO',
		region: 'Norte Chico',
		tagline: 'Capital de la Amistad',
		image: imgChiclayo,
	},
	{
		city: 'PIURA',
		region: 'Norte',
		tagline: 'Tierra de Grau',
		image: imgPiura,
	},
	{
		city: 'SULLANA',
		region: 'Norte',
		tagline: 'La Perla del Chira',
		image: imgSullana,
	},
	{
		city: 'PAITA',
		region: 'Costa Norte',
		tagline: 'Puerto de la Buena Esperanza',
		image: imgpPaita,
	},
	{
		city: 'CATACAOS',
		region: 'Piura',
		tagline: 'Capital Artesanal',
		image: imgCatacaos,
	},
	{
		city: 'CHATO GRANDE',
		region: 'Bajo Piura',
		tagline: 'Tradición y Cultura',
		image: imgChatoGrande,
	},
	{
		city: 'LA UNIÓN',
		region: 'Bajo Piura',
		tagline: 'Corazón del bajo Piura',
		image: imgLaUnion,
	},
	{
		city: 'LA ARENA',
		region: 'Bajo Piura',
		tagline: 'Cultura Viva y Tradición',
		image: imgLaAreana,
	},
	{
		city: 'SECHURA',
		region: 'Costa Norte',
		tagline: 'Capital de la Arena',
		image: imgSechura,
	},
	{
		city: 'HUANCAYO',
		region: 'Sierra Central',
		tagline: 'La Ciudad Incontrastable',
		image: imgHuancayo,
	},
	{
		city: 'LAS LOMAS',
		region: 'Norte',
		tagline: 'Valle de Paisaje Naturales',
		image: imgLasLomas,
	},
	{
		city: 'LIMA',
		region: 'Costa central',
		tagline: 'Ciudad de los Reyes',
		image: imgLima,
	},
	{
		city: 'TAMBO GRANDE',
		region: 'Norte',
		tagline: 'Tierra de Oro verde',
		image: imgTamboGrande,
	},
	{
		city: 'CONCEPCIÓN',
		region: 'Norte',
		tagline: 'Capital Turística del Centro',
		image: imgConcepcion,
	},
	{
		city: 'JAUJA',
		region: 'Sierra Central',
		tagline: 'Primera Capital Histórica del Perú',
		image: imgJauja,
	},
	{
		city: 'ALMIRANTE GRAU',
		region: 'Bajo Piura',
		tagline: 'Legado de Honor',
		image: imgAlmiranteGrau,
	},
];
