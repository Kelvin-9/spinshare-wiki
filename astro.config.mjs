import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils'
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({

			plugins: [starlightUtils({
				multiSidebar: {
					switcherStyle: 'dropdown'
				}
			})],

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
				github: 'https://github.com/withastro/starlight',
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
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
