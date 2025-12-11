import type { ImageMetadata } from 'astro';

import featuresImageHome from '../assets/img/features_home.jpg';

import ticketIcon from '../assets/icons/ticket.svg';
import shieldIcon from '../assets/icons/shield.svg';
import usbIcon from '../assets/icons/usb.svg';
import trackingIcon from '../assets/icons/tracking.svg';

interface FeatureItem {
	title: string;
	description: string;
	icon: ImageMetadata;
}

interface FeaturesSectionData {
	eyebrow: string;
	title: string;
	description: string;
	image: ImageMetadata;
	alt: string;
	items: FeatureItem[];
}

export const FEATURES_DATA: Record<string, FeaturesSectionData> = {
	home: {
		eyebrow: 'Experiencia Terramovil',
		title: 'Tu viaje comienza mucho antes de subir al bus',
		description:
			'Hemos renovado nuestra plataforma para que comprar tu pasaje sea tan cómodo como viajar en nuestros asientos 160°. Olvídate de las colas en el terminal y gestiona tu viaje desde tu celular con total seguridad.',
		image: featuresImageHome,
		alt: 'Mujer abriendo la app de Terramovil',
		items: [
			{
				title: 'Compra Fácil y Rápida',
				description: 'Reserva tu asiento favorito en menos de 3 minutos. Sin papeleos ni esperas.',
				icon: ticketIcon,
			},
			{
				title: 'Seguridad Garantizada',
				description: 'Monitoreo GPS las 24 horas y flota moderna que cumple con todas las normativas.',
				icon: shieldIcon,
			},
			{
				title: 'Puerto USB de Carga',
				description:
					'Puertos USB individuales en cada asiento. Mantén tu celular o tablet cargados para disfrutar de tu entretenimiento sin interrupciones.',
				icon: usbIcon,
			},
			{
				title: 'Rastreo de Encomiendas',
				description:
					'Conoce el estado exacto de tus envíos en tiempo real. Ingresa tu número de guía y sigue el trayecto de tu paquete hasta su destino.',
				icon: trackingIcon,
			},
		],
	},
};
