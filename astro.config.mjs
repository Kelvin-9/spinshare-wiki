import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils'
import tailwind from '@astrojs/tailwind';
import starlightImageZoomPlugin from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
	
	site: 'https://useredge.github.io',
	base: '/spinshare-wiki',

	integrations: [
		starlight({

			logo: {
				src: './src/assets/custom-icons/Icon_colored.svg',
			},

			plugins: [starlightUtils({
				multiSidebar: {
					switcherStyle: 'dropdown'
				},
				navLinks: {
					leading: { useSidebarLabelled: "leadingNavLinks" },
				}
				
			}),
			starlightImageZoomPlugin(),
		],

			defaultLocale: 'root',

			locales: {

				root: {
					label: 'English',
					lang: 'en'
				},
				'es': {
					label: 'Español',
					lang: 'es'
				},
				'de': {
					label: 'Deutsch',
					lang: 'de'
				},
				'fr': {
					label: 'Français',
					lang: 'fr',
				},
				'it': {
					label: 'Italiano',
					lang: 'it'
				},
				'uk': {
					label: 'Українська',
					lang: 'uk'
				},
				'ru': {
					label: 'Русский',
					lang: 'ru'
				},
				'ja': {
					label: '日本語',
					lang: 'ja',
				},
				'ko': {
					label: '한국어',
					lang: 'ko'
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN'
				},
				'zh-tw': {
					label: '正體中文',
					lang: 'zh-TW'
				}
			},

			title: 'SpinShare Wiki',
			social: {
				github: 'https://github.com/useredge/spinshare-wiki',
				discord: 'https://spinsha.re/discord',
				"x.com": 'https://x.com/@WeAreSpinShare',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Charting',
					items: [
						{ label: 'Getting started', slug: 'charting' },
						{
							label: 'Charting guide sub',
							autogenerate: { directory: 'charting/charting-guide' }
						},
					],
				},
				{
					label: "leadingNavLinks",
					items: [
						{ label: "Home", link: "/" },
						{ label: "Charting", link: "/charting" },
					]
				},
			],

			customCss: ['./src/tailwind.css'],

			favicon: '/favicon.svg',

			lastUpdated: true,

		}),
		tailwind({ applyBaseStyles: false }),

	],
});
