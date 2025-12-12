import type { CTAData } from '@interfaces/components';
import appMockupImg from '@assets/img/mockup.png';

export const HOME_CTA: CTAData = {
	title: 'La terminal de buses ahora está en tu bolsillo',
	description:
		'Olvídate de las filas y los horarios de ventanilla. Busca, elige tu asiento favorito y compra tu pasaje en segundos, estés donde estés.',
	image: appMockupImg,
	imageAlt: 'App Terramovil en iPhone mostrando la selección de asientos',
	buttons: [
		{
			label: 'Comprar Pasaje',
			href: '#hero',
			variant: 'solid',
		},
		{
			label: 'Ayuda por WhatsApp',
			href: 'https://wa.me/51979707957',
			variant: 'outline',
			isExternal: true,
		},
	],
};

export const SERVICES_CTA: CTAData = {
	title: 'Distintas comodidades, el mismo estándar de seguridad',
	description:
		'En Terramovil, la categoría define el confort, pero nunca la protección. Sin importar el servicio que elijas, te garantizamos unidades con mantenimiento riguroso, monitoreo GPS 24/7 y pilotos calificados en cada ruta.',
};

export const ABOUT_CTA: CTAData = {
	title: 'Uniendo destinos, acercando personas',
	description:
		'Para nosotros, cada pasaje representa una historia: un reencuentro familiar, una oportunidad de negocio o el inicio de una nueva aventura. Entendemos que nuestra responsabilidad va más allá de conducir un autobús; se trata de reducir las distancias en el Perú y facilitar que esas historias lleguen a su destino de manera segura y placentera. Nos mueve el compromiso de ser el puente que conecta tus metas con la realidad.',
};
