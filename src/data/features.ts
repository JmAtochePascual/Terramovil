import type { FeatureGridData } from '@interfaces/components';

import featuresImageHome from '@assets/img/features_home.jpg';

import ticketIcon from '@assets/icons/ticket.svg';
import shieldIcon from '@assets/icons/shield.svg';
import usbIcon from '@assets/icons/usb.svg';
import trackingIcon from '@assets/icons/tracking.svg';

export const HOME_FEATURES: FeatureGridData = {
	eyebrow: 'Experiencia Terramovil',
	title: 'Tu viaje comienza mucho antes de subir al bus',
	description:
		'Hemos renovado nuestra plataforma para que comprar tu pasaje sea tan cómodo como viajar en nuestros asientos 160°. Olvídate de las colas en el terminal y gestiona tu viaje desde tu celular con total seguridad.',
	image: featuresImageHome,
	imageAlt: 'Mujer utilizando la aplicación móvil de Terramovil',
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
			description: 'Puertos USB individuales en cada asiento. Mantén tu celular cargado sin interrupciones.',
			icon: usbIcon,
		},
		{
			title: 'Rastreo de Encomiendas',
			description: 'Conoce el estado exacto de tus envíos en tiempo real con tu número de guía.',
			icon: trackingIcon,
		},
	],
};
