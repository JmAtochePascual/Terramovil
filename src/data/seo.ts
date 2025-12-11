import type { PageSEO } from '../interfaces/shared';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const HOME_SEO: PageSEO = {
	title: 'Terramovil | Pasajes de Bus a todo el Perú',
	description:
		'Compra tus pasajes online. Viaja seguro a Lima, Piura, Chiclayo y más con nuestra flota moderna de 160°.',
	image: `${BASE}/images/og-home.jpg`,
};

export const SERVICES_SEO: PageSEO = {
	title: 'Nuestros Servicios | Terramovil',
	description:
		'Conoce la experiencia EcoTerra y EcoVip. Asientos reclinables 160°, entretenimiento a bordo, climatización y la máxima seguridad en tu viaje.',
	image: `${BASE}/images/og-servicios.jpg`,
};

export const DESTINATIONS_SEO: PageSEO = {
	title: 'Destinos y Rutas | Terramovil',
	description:
		'Descubre nuestros destinos en el norte del Perú. Consulta horarios de salida y precios de pasajes hacia Lima, Chiclayo, Piura y más.',
	image: `${BASE}/images/og-destinos.jpg`,
};

export const TERMINALS_SEO: PageSEO = {
	title: 'Terminales y Agencias | Terramovil',
	description:
		'Ubica nuestras agencias y terminales más cercanos. Direcciones exactas, teléfonos y horarios de atención en Lima y provincias.',
	image: `${BASE}/images/og-terminales.jpg`,
};

export const ABOUT_SEO: PageSEO = {
	title: 'Nosotros | Terramovil',
	description:
		'Somos una empresa líder en transporte interprovincial. Conoce nuestra historia, nuestra moderna flota y el compromiso con tu seguridad.',
	image: `${BASE}/images/og-nosotros.jpg`,
};

export const CONTACT_SEO: PageSEO = {
	title: 'Contáctanos | Terramovil',
	description:
		'Estamos para ayudarte. Contáctanos por teléfono, WhatsApp o correo electrónico para consultas sobre pasajes, encomiendas o reclamos.',
	image: `${BASE}/images/og-contacto.jpg`,
};
