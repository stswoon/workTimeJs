/// <reference types="vite/client" />

declare const __APP_VERSION__: string;

/// <reference types="vite-plugin-pwa/client" />

declare module "virtual:pwa-register" {
  import type { RegisterSWOptions } from "vite-plugin-pwa/types";

  export type { RegisterSWOptions };

  export function registerSW(
    options?: RegisterSWOptions,
  ): (reloadPage?: boolean) => Promise<void>;
}
