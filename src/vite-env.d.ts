/// site-env.d.ts
interface ImportMetaEnv {
    readonly VITE_CONTACT_EMAIL: string;
    readonly VITE_API_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
