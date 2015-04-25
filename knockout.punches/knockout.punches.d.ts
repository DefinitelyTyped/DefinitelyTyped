interface KnockoutPunchesStatic {
	enableAll(): void;
}

interface KnockoutStatic {
	punches: KnockoutPunchesStatic;
}

declare module "knockout.punches" {
	export = punches;
}

declare var punches: KnockoutPunchesStatic;