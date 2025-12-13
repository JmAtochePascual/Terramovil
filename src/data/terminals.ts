// src/data/terminals.ts
import type { TerminalsSectionData, TerminalItem } from '@interfaces/components';

import imgCentroLima from '@assets/img/terminals/terminal_centro-lima.jpg';
import imgPlazaNorte from '@assets/img/terminals/terminal_plaza-norte.jpg';
import imgZapallal from '@assets/img/terminals/terminal_zapallal.jpg';
import imgHuaura from '@assets/img/terminals/terminal_huaura.jpg';
import imgCantoGrande from '@assets/img/terminals/terminal_canto-grande.jpg';
import imgHuaycan from '@assets/img/terminals/terminal_huaycan.jpg';
import imgCentroPiura from '@assets/img/terminals/terminal_centro-piura.jpg';
import imgPaita from '@assets/img/terminals/terminal_paita.jpg';
import imgLaArena from '@assets/img/terminals/terminal_la-arena.jpg';
import imgLaUnion from '@assets/img/terminals/terminal_la-union.jpg';
import imgCatacaos from '@assets/img/terminals/terminal_catacaos.jpg';
import imgSullana from '@assets/img/terminals/terminal_sullana.jpg';
import imgChiclayo from '@assets/img/terminals/terminal_chiclayo.jpg';
import imgAlmiranteGrau from '@assets/img/terminals/terminal_almirante-grau.jpg';
import imgChatoGrande from '@assets/img/terminals/terminal_chato-grande.jpg';
import imgSechura from '@assets/img/terminals/terminal_sechura.jpg';

import iconPin from '@assets/icons/pin-icon.svg';
import iconCall from '@assets/icons/phone_talk-icon.svg';

const TERMINAL_ITEMS: TerminalItem[] = [
	{
		name: 'Centro de Lima',
		address: 'AV. Luna pizarro N°442 Stand N°2 La victoria Lima',
		phone: '960 812 239',
		image: imgCentroLima,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Plaza Norte',
		address: 'AV. Gerardo Unger N° 6911 - 6917 Stand L 114 La victoria Lima',
		phone: '979 708 021',
		image: imgPlazaNorte,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Zapallal',
		address: 'AV. Gerardo Unger N° 6911 - 6917 Stand L 114 La victoria Lima',
		phone: '979 708 021',
		image: imgZapallal,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Huaura',
		address: 'AV. San Martin N° 137',
		phone: '966 296 187',
		image: imgHuaura,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Canto Grande',
		address: 'AV. Wise Mz. A Lt 44 Buenos Aires',
		phone: '977 709 161',
		image: imgCantoGrande,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Huaycán',
		address: 'Entrada de Huaycán dentro del grifo Petro Perú',
		phone: '919 285 415',
		image: imgHuaycan,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Centro de Piura',
		address: 'Av. Loreto N° 1465 Barrio sur de Piura',
		phone: '922 984 705',
		image: imgCentroPiura,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Paita',
		address: 'Av. Miguel Grau Mz 2 26 km de la carretera',
		phone: '922 984 669',
		image: imgPaita,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'La Arena',
		address: 'Jr. Comercio 1105',
		phone: '970 576 941',
		image: imgLaArena,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'La Unión',
		address: 'Av. Lima 345 Barrio del Carmen',
		phone: '987 474 222',
		image: imgLaUnion,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Catacaos',
		address: 'Lucas Cutivalu 1ra',
		phone: '987 740 907',
		image: imgCatacaos,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Sullana',
		address: 'Av Panamericana Norte N° 1155 Terminal Cavassa',
		phone: '960 794 404',
		image: imgSullana,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Almirante Grau',
		address: 'Av. Alberto Fujimori Mz B Lt B',
		phone: '910 910 127',
		image: imgAlmiranteGrau,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Chato Grande',
		address: 'Nuevo Chato Grande M A Lt 3',
		phone: '992 745 253',
		image: imgChatoGrande,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Chiclayo',
		address: 'Av Agusto B Dentro de la terminal Plaza Norte',
		phone: '922 984 686',
		image: imgChiclayo,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
	{
		name: 'Sechura',
		address: 'AV. Tupac Amaru Mz. M Lt 22 Cruce con la Av. Restauración',
		phone: '977 776 997',
		image: imgSechura,
		iconAddress: iconPin,
		iconPhone: iconCall,
	},
];

export const TERMINALS_PAGE_DATA: TerminalsSectionData = {
	eyebrow: 'Cobertura Nacional',
	title: 'Unimos tus Destinos Principales',
	description:
		'Brindamos servicio de transporte terrestre conectando Lima con las principales ciudades del Norte y Centro del país. Garantizamos traslados puntuales y seguros hacia estos puntos de llegada.',
	items: TERMINAL_ITEMS,
};
