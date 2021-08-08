export type WriteToLog = (msg: string) => void;

export interface ParseOptions {
  /** Pass a function so it can deal with log outputs. */
  log?: (log: string) => void;
}

type AllNullable<T> = T extends Record<any, any>
  ? { [K in keyof T]?: AllNullable<T[K]> }
  : T | undefined;

export type GeneralBoolKeys =
  | 'wifi-assist'
  | 'allow-wifi-access'
  | 'replica'
  | 'network-framework'
  | 'exclude-simple-hostnames'
  | 'ipv6';
export type GeneralNumKeys = 'wifi-access-http-port' | 'wifi-access-socks5-port' | 'test-timeout';
export type GeneralArrKeys = 'doh-server' | 'dns-server' | 'tun-excluded-routes' | 'skip-proxy';
export type GeneralStrKeys =
  | 'loglevel'
  | 'http-listen'
  | 'socks5-listen'
  | 'external-controller-access'
  | 'tls-provider'
  | 'proxy-test-url'
  | 'geoip-maxmind-url';

export type General = AllNullable<
  { [K in GeneralBoolKeys]: boolean } &
    { [K in GeneralNumKeys]: number } &
    { [K in GeneralArrKeys]: string[] } &
    { [K in GeneralStrKeys]: string }
>;

export type ProxyItemStrKeys = 'username' | 'password' | 'encrypt-method';
export type ProxyItemBoolKeys = 'udp-relay';

export type ProxyItem = {
  name: string;
  type: string;
  hostname: string;
  port: number;
} & AllNullable<{ [K in ProxyItemStrKeys]: string } & { [K in ProxyItemBoolKeys]: boolean }>;

export type ConfigJSON = AllNullable<{
  General: General;
  Proxy: ProxyItem[];
}>;