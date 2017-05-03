// Type definitions for bonjour 3.5
// Project: https://github.com/watson/bonjour
// Definitions by: Meirion Hughes <https://github.com/MeirionHughes/>, Quentin Lampin <https://github.com/quentin-ol/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
  namespace Bonjour {
    interface BonjourOptions {
      multicast?: boolean;
      interface?: string;
      port?: number;
      ip?: string;
      ttl?: number;
      loopback?: boolean;
      reuseAddr?: boolean;
    }

    interface BrowserOptions {
      type?: string;
      subtypes?: string[];
      protocol?: string;
      txt?: { [key: string]: string };
    }
    interface ServiceOptions {
      name: string;
      host?: string;
      port: number;
      type: string;
      subtypes?: string[];
      protocol?: 'udp' | 'tcp';
      txt?: { [key: string]: string };
    }
    interface Service {
      name: string;
      type: string;
      subtypes: string[];
      protocol: string;
      host: string;
      port: number;
      fqdn: string;
      rawTxt: any;
      txt: { [key: string]: string };
      published: boolean;

      stop(cb?: () => void): void;
      start(): void;
    }

    interface Browser {
      services: Bonjour.Service[];

      start(): void;
      update(): void;
      stop(): void;
    }
  }
  class Bonjour {
    publish(options: Bonjour.ServiceOptions): Bonjour.Service;
    unpublishAll(cb?: () => any): void;
    find(options: Bonjour.BrowserOptions, onUp?: (service: Bonjour.Service) => any): Bonjour.Browser;
    findOne(options: any, cb?: (service: Bonjour.Service) => any): Bonjour.Browser;
    destroy(): void;
  }
}

declare function BonjourConstructor(options: Bonjour.BonjourOptions): Bonjour;

declare namespace BonjourConstructor { }

export = BonjourConstructor;
