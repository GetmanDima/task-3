import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        '@/assets/css/main.css',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    alias: {
        '@layouts': path.join(__dirname, 'layouts'),
        '@features': path.join(__dirname, 'features'),
        '@shared': path.join(__dirname, 'shared'),
    },
    hooks: {
        'pages:extend'(pages) {
            pages.push({
                name: 'index',
                path: '/',
                redirect: '/sum'
            });
        }
    }
});
