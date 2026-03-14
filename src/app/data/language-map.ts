
export type HEX = `#${string}`;

export type CSSColor = HEX;


export type Language =
    "Python" | "Java" | "JavaScript" | "TypeScript" | "Nix" | "C" | "C++" | "Rust"

export const ColorOf: Record<Language, CSSColor> = {
    Python: '#3572A5',
    Java: '#b07219',
    JavaScript: '#FFED29',
    TypeScript: '#3178c6',
    Nix: '#7e7eff',
    C: '#555555',
    "C++": '#f34b7d',
    Rust: '#dea584'
}; 