import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from "@astrojs/preact";
import remarkGfm from 'remark-gfm';


// https://astro.build/config
export default defineConfig({
    site: 'https://totally-not-a-bunch-of-cats.github.io',
    base: '/Totally-Not-a-Bunch-of-Cats',
    integrations: [mdx(), preact({ compat: true })],
    markdown: {
        remarkPlugins: [remarkGfm],
        shikiConfig: {
            theme: 'dracula',
        },
    },
});