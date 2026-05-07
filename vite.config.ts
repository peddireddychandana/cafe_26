import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/cafe_26/",
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});
