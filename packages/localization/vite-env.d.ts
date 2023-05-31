/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCALIZATION_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
