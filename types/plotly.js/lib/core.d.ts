export * from '..';

export interface Locale {
	moduleType: 'locale';
	name: string;
	dictionary?: object;
	format?: {
		days?: string[];
		shortDays?: string[];
		months?: string[];
		shortMonths?: string[];
		date?: string;
		decimal?: string;
		thousands?: string;
	};
}
