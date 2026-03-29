export const THEME_COLOR = {
	AUTO: "AUTO",
	LIGHT: "LIGHT",
	DARK: "DARK",
} as const;

export const THEME_COLOR_LABELS: Record<keyof typeof THEME_COLOR, string> = {
	AUTO: "Following system",
	LIGHT: "Light",
	DARK: "Dark",
};