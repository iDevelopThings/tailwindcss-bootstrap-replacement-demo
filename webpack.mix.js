let mix           = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
	.setPublicPath('docs')
	.sass('resources/scss/app.scss', 'docs/css')
	.options({
		processCssUrls : false,
		postCss        : [tailwindcss('./tailwind.config.js')],
	});
