import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        https: {},
    },
    plugins: [mkcert(), react()],
    define: {
        'process.env.VITE_BASE_URL': JSON.stringify(process.env.VITE_BASE_URL),
    },
});
