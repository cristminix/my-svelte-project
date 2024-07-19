/// <reference types="svelte" />
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_CLENT: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
