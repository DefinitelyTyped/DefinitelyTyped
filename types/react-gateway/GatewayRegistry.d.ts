declare class GatewayRegistry {
    _containers: { [name: string]: React.Component | null | undefined };
    _children: { [name: string]: { [gatewayId: string]: React.ReactNode } | undefined };
    _currentId: number;

    _renderContainer(name: string): void;

    addContainer(name: string, container: React.Component): void;

    removeContainer(name: string): void;

    addChild(name: string, gatewayId: string, child: React.ReactNode): void;

    clearChild(name: string, gatewayId: string): void;

    register(name: string, child: React.ReactNode): string;

    unregister(name: string, gatewayId: string): void;
}
export = GatewayRegistry;
