import type { FeatureInfo, FeatureItem } from '../interfaces/featureInterface';

import monitoringIcon from '@assets/icons/monitoring.svg';
import globeIcon from '@assets/icons/globe_location.svg';
import verifiedIcon from '@assets/icons/verified_user.svg';
import securityImage from '@assets/img/security.jpg';

export const SECURITY_INFO: FeatureInfo = {
	label: 'Seguridad Garantizada',
	title: 'Tecnología al servicio de tu seguridad',
	description:
		'Tu tranquilidad es nuestra prioridad. Combinamos una flota moderna con el equipo humano más calificado para garantizarte un viaje seguro y sin contratiempos en cada kilómetro.',
	image: securityImage,
	alt: 'Imagen que representa la seguridad en el transporte',
	features: [
		{
			title: 'Pilotos Profesionales y Evaluados',
			description:
				'Contamos con conductores de amplia experiencia en rutas nacionales, sometidos a constantes capacitaciones y evaluaciones médicas rigurosas para asegurar tu bienestar.',
			icon: monitoringIcon,
		},
		{
			title: 'Monitoreo Satelital (GPS)',
			description:
				'Todas nuestras unidades son monitoreadas en tiempo real desde nuestra central (24/7), controlando la velocidad y la ubicación exacta del bus durante todo el trayecto.',
			icon: globeIcon,
		},
		{
			title: 'Flota Moderna y Segura',
			description:
				'Buses de última generación equipados con sistemas de frenado inteligente, sensores de seguridad y limitadores de velocidad para una conducción estable y protegida.',
			icon: verifiedIcon,
		},
	],
};
