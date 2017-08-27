declare namespace GrandTheftMultiplayer.Client.GUI {

	class Browser {
		Headless: boolean;
		Position: System.Drawing.Point;
		Size: System.Drawing.Size;
		eval(code: string): void;
		call(method: string, ..._arguments: any[]): void;
		Dispose(): void;
	}

}
