import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightImageZoomPlugin from 'starlight-image-zoom';
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
	
	site: 'https://useredge.github.io',
	base: '/spinshare-wiki',

	vite: {
		resolve: {
			alias: {
				"@images": '/src/assets/images',
				"@assets": '/src/assets'
			}
		}
	},

	integrations: [
		starlight({

			logo: {
				src: './src/assets/custom-icons/Icon_colored.svg',
			},

			plugins: [
				starlightImageZoomPlugin(),
				starlightSidebarTopics(
					[
						// {
						// 	label: '# general',
						// 	link: '/spinshare-wiki',
						// 	icon: 'open-book',
						// 	id: 'general',
						// 	items: {
						// 		autogenerate: { directory: '/docs/**' },
						// 		exclude: { directory: '/docs/**' },
						// 	}
						// },
						{
							label: '# modding',
							link: '/modding',
							icon: 'puzzle',
							id: 'modding',
							items: [
								{
									label: 'Getting started',
									link: '/modding'
								},
								{
									label: 'Installation guide',
									link: '/modding/installation-guide'
								},
								{
									label: 'Making mods',
									autogenerate: { directory: '/modding/making-mods' }
								}
							]
						},
						{
							label: '# charting',
							link: '/charting',
							icon: 'pencil',
							id: 'charting',
							items: [
								{
									label: 'Getting started',
									link: '/charting'
								},
								{
									label: 'Audio-setup',
									autogenerate: { directory: '/charting/audio-setup' }
								},
								{
									label: 'Charting guide',
									autogenerate: { directory: '/charting/charting-guide' }
								}
							]
						}
					],
					{
						exclude: ['/beginnerguide', '/docs/**', '/docs/**/*', '/docs', 'beginnerguide'],
						topics: {
							charting: ['/charting', '/charting/**/*'],
							modding: ['/modding', '/modding/**/*'],
							starter: ['/docs'],
						}
					}
				)
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
			social: [
				{ icon: "github", label: "GitHub", href: "https://github.com/useredge/spinshare-wiki" },
				{ icon: "discord", label: "SpinShare Discord", href: "https://spinsha.re/discord" },
				{ icon: "blueSky", label: "Bluesky", href: "https://bsky.app/profile/spinsha.re" },
			],

			customCss: ['./src/tailwind.css'],

			components: {
				SiteTitle: './src/components/overrides/CustomSiteTitle.astro',
			},

			favicon: '/favicon.svg',

			lastUpdated: true,

		}),
		tailwind({ applyBaseStyles: false }),

	],
});
