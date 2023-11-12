// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        libsJs: `${buildFolder}/js/libs/`,
        fileJs: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        libs: `${buildFolder}/js/libs/`,
        form: `${buildFolder}/js/form/`,
        pages: `${buildFolder}/pages/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        libsJs: `${srcFolder}/js/libs/**/*.js`,
        fileJs: `${srcFolder}/js/script.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/**/*.html`, //.pug
        libs: `${srcFolder}/js/libs/**/*.*`,
        form: `${srcFolder}/form/**/*.*`,
        pages: `${srcFolder}/pages/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/**/*.js`,
        libsJs: `${srcFolder}/js/libs/**/*.js`,
        fileJs: `${srcFolder}/js/script.js`,
        scss: `${srcFolder}/**/*.scss`,
        html: `${srcFolder}/**/*.html`, //.pug
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        libs: `${srcFolder}/js/libs/**/*.*`,
        form: `${srcFolder}/form/**/*.*`,
        pages: `${srcFolder}/pages/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}