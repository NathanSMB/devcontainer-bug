import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    vite ({ router }) {
        if (router === "client") {
            return {
                server: {
                    hmr: {
                        port: 4000,
                    },
                    watch: {
                        usePolling: true,
                    }
                },
            };
        }
        return {};
    }
});
