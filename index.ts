// TypeScript - usefull global utility types
// Uppercase, Lowercase, Capitalize, UnCapitalize

type SIZES = "sm" | "md" | "lg";

type U = Uppercase<SIZES>; // "SM" | "MD" | "LG"

type L = Lowercase<U>; // "sm" | "md" | "lg"

type C = Capitalize<L>; // "Sm" | "Md" | "Lg"

type UC = Uncapitalize<U>; // "sM" | "mD" | "lG"
