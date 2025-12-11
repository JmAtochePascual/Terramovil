const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const SITE_INFO = {
	address: 'Av. Luna Pizarro Nº 442, La Víctoria, Lima, Perú',
	email: 'terramovilperu@gmail.com',
	phones: {
		lima: '979 707 957',
		piura: '979 707 866',
	},
	bookComplaintUrl: 'https://www.terramovilperu.com.pe:8443/ventas/form',
};

export const NAV_LINKS = [
	{ label: 'Inicio', href: BASE || '/' },
	{ label: 'Servicios', href: `${BASE}/servicios` },
	{ label: 'Destinos', href: `${BASE}/destinos` },
	{ label: 'Terminales', href: `${BASE}/terminales` },
	{ label: 'Nosotros', href: `${BASE}/nosotros` },
	{ label: 'Contacto', href: `${BASE}/contacto` },
];

export const LEGAL_LINKS = [
	{ label: 'TC - Pasajes', href: 'https://terramovil.bus.net.pe/terminos-pasajes' },
	{ label: 'TC - Encomiendas', href: 'https://terramovil.bus.net.pe/terminos-encomiendas' },
	{ label: 'TC - Promociones', href: BASE || '/' },
	{ label: 'TC - Blog', href: BASE || '/' },
	{ label: 'TC - Prensa', href: BASE || '/' },
];

export const SOCIAL_LINKS = [
	{ name: 'Facebook', href: 'https://www.facebook.com/TerramovilPeru/?locale=es_LA', iconKey: 'facebook' },
	{ name: 'Instagram', href: 'https://www.instagram.com/terramovilperu/', iconKey: 'instagram' },
	{ name: 'WhatsApp', href: 'https://wa.me/979707957', iconKey: 'whatsapp' },
];
