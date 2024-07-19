import { defineConfig } from "@farmfe/core"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import path from "node:path"
export default defineConfig({
  vitePlugins: [svelte()],
  // server: {
  //   proxy: {
  //     "/jsonserver": {
  //       target: "http://localhost:3111",
  //       changeOrigin: true,
  //       secure: false,
  //       ws: false,
  //       pathRewrite: (path: string) => path.replace(/^\/jsonserver/, ""),
  //     },
  //   },
  // },
  compilation: {
    resolve: {
      alias: {
        "@/": path.join(process.cwd(), "src"),
      },
    },
  },
})
