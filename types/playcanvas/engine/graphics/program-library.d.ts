declare namespace pc {

    class ProgramLibrary {
        constructor(device: pc.GraphicsDevice)

        register(name: string, generator: any): void;
    
        unregister(name: string): void;
    
        isRegistered(name: string): void;
    
        getProgram(name: string, options: {}): pc.Shader;
    
        clearCache(): void;
    
        removeFromCache(shader: pc.Shader): void;  
    }
}