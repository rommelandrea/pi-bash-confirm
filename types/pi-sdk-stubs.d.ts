declare module "@mariozechner/pi-coding-agent" {
  export type ExtensionAPI = any;
  export type ExtensionContext = any;
}

declare module "@mariozechner/pi-tui" {
  export function wrapTextWithAnsi(text: string, width: number): string[];
}
