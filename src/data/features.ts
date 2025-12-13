import type { FeatureGridData } from '@interfaces/components';

import featuresImageHome from '@assets/img/features_home.jpg';
import featuresImageEcoVip from '@assets/img/flota_ecovip.jpg';
import featuresImageEcoTerra from '@assets/img/flota_ecoterra.jpg';

import ticketIcon from '@assets/icons/ticket.svg';
import shieldIcon from '@assets/icons/shield.svg';
import usbIcon from '@assets/icons/usb.svg';
import trackingIcon from '@assets/icons/tracking.svg';
import setIcon from '@assets/icons/set-icon.svg';
import spaceIcon from '@assets/icons/space-icon.svg';
import tvIcon from '@assets/icons/tv-icon.svg';
import flatIcon from '@assets/icons/flat-icon.svg';
import ventIcon from '@assets/icons/vent-icon.svg';
import twilightIcon from '@assets/icons/twilight-icon.svg';
import lightningIcon from '@assets/icons/lightning_stand-icon.svg';
import modeTvIcon from '@assets/icons/mode_tv-icon.svg';

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

export const SERVICES_ECOVIP_FEATURES: FeatureGridData = {
	eyebrow: 'Exclusividad y Descanso',
	title: 'EcoVip',
	description:
		'Eleva tus expectativas de viaje con EcoVip, nuestra categoría exclusiva pensada para quienes hacen del trayecto una parte esencial de su experiencia. Aquí, el lujo, la privacidad y la atención personalizada se unen para ofrecerte un nivel superior de comodidad y servicio. Descansa plenamente en nuestros amplios asientos Sofá-Cama de cuero con reclinación de hasta 160°. Con un diseño envolvente y mayor separación entre filas, tendrás la libertad de movimiento que necesitas para dormir profundamente, complementado con nuestro kit de descanso que incluye manta y almohada higienizadas.',
	image: featuresImageEcoVip,
	imageAlt: 'Imagen del servicio EcoVip de Terramovil',
	items: [
		{
			title: 'Confort Superior',
			description: 'Asientos Sofá-Cama de cuero con reclinación hasta 160°.',
			icon: setIcon,
		},
		{
			title: 'Mayor Espacio',
			description: 'Amplia separación entre filas y cortinas divisorias para mayor privacidad.',
			icon: spaceIcon,
		},
		{
			title: 'Entretenimiento Personal',
			description: 'Pantallas táctiles individuales con películas y música.',
			icon: tvIcon,
		},
		{
			title: 'Kit de Descanso',
			description: 'Manta y almohada esterilizadas para uso personal.',
			icon: flatIcon,
		},
	],
};

export const SERVICES_ECOTERRA_FEATURES: FeatureGridData = {
	eyebrow: 'Eficiencia y Confort',
	title: 'EcoTerra',
	description:
		'Diseñado para el viajero práctico que valora la eficiencia sin sacrificar el bienestar. EcoTerra es nuestra solución de movilidad que combina tarifas accesibles con los estándares de seguridad más altos del mercado, permitiéndote llegar a tu destino cuidando tu presupuesto. Disfruta de un viaje relajado en nuestras butacas ergonómicas con reclinación de 140°, pensadas para brindar soporte lumbar y descanso adecuado durante el trayecto. El ambiente interior se mantiene siempre fresco y agradable gracias a nuestro sistema de aire acondicionado inteligente con filtrado de aire constante.',
	image: featuresImageEcoTerra,
	imageAlt: 'Imagen del servicio EcoTerra de Terramovil',
	items: [
		{
			title: 'Climatización',
			description: 'Sistema de aire acondicionado inteligente con purificación de aire.',
			icon: ventIcon,
		},
		{
			title: 'Iluminación',
			description: 'Luz de lectura individual LED.',
			icon: twilightIcon,
		},
		{
			title: 'Conectividad',
			description: 'Puertos USB de carga rápida en cada asiento para tus dispositivos.',
			icon: lightningIcon,
		},
		{
			title: 'Entretenimiento',
			description: 'Sistema de audio y video ambiental durante el trayecto.',
			icon: modeTvIcon,
		},
	],
};
