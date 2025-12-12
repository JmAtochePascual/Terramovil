import type { FleetSectionData, FleetItem } from '@interfaces/components';

import imgEcoTerra from '@assets/img/flota_ecoterra.jpg';
import imgEcoVip from '@assets/img/flota_ecovip.jpg';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const FLEET_ITEMS: FleetItem[] = [
	{
		service: 'Servicio EcoTerra',
		title: 'Economía y Confort',
		description:
			'La mejor relación calidad-precio. Disfruta de aire acondicionado, puertos USB para tus dispositivos y asientos ergonómicos para un viaje placentero.',
		image: imgEcoTerra,
		altImage: 'Espacio interno de un bus EcoTerra',
		link: `${BASE}/servicios`,
	},
	{
		service: 'Servicio EcoVip',
		title: 'Experiencia Premium',
		description:
			'La mejor relación calidad-precio. Disfruta de aire acondicionado, puertos USB para tus dispositivos y asientos ergonómicos para un viaje placentero.',
		image: imgEcoVip,
		altImage: 'Espacio interno de un bus EcoVip',
		link: `${BASE}/servicios`,
	},
];

export const HOME_FLEET_SECTION: FleetSectionData = {
	eyebrow: 'Nuestra Flota',
	title: 'Elige la comodidad que mereces',
	description: 'Contamos con buses de dos pisos diseñados para el descanso y la seguridad en cada kilómetro.',
	items: FLEET_ITEMS,
};
