let mix           = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
	.setPublicPath('public')
	.sass('resources/scss/app.scss', 'public/css')
	.options({
		processCssUrls : false,
		postCss        : [tailwindcss('./tailwind.config.js')],
	});
