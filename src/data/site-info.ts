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
	{ label: 'Inicio', href: '/' },
	{ label: 'Servicios', href: './servicios' },
	{ label: 'Destinos', href: './destinos' },
	{ label: 'Terminales', href: './terminales' },
	{ label: 'Nosotros', href: './nosotros' },
	{ label: 'Contacto', href: './contacto' },
];

export const LEGAL_LINKS = [
	{ label: 'TC - Pasajes', href: 'https://terramovil.bus.net.pe/terminos-pasajes' },
	{ label: 'TC - Encomiendas', href: 'https://terramovil.bus.net.pe/terminos-encomiendas' },
	{ label: 'TC - Promociones', href: '/' },
	{ label: 'TC - Blog', href: '/' },
	{ label: 'TC - Prensa', href: '/' },
];

// Usamos 'iconKey' para mapear el SVG en el componente
export const SOCIAL_LINKS = [
	{ name: 'Facebook', href: 'https://www.facebook.com/TerramovilPeru/?locale=es_LA', iconKey: 'facebook' },
	{ name: 'Instagram', href: 'https://www.instagram.com/terramovilperu/', iconKey: 'instagram' },
	{ name: 'WhatsApp', href: 'https://wa.me/979707957', iconKey: 'whatsapp' },
];
