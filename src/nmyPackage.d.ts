interface Config {
  url: string;
}

declare module 'myPackage' {
  function ninit(config: Config): boolean;
  function nexit(code: number): number;
}
