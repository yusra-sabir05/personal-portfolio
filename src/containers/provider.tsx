import ActiveSectionContextProvider from "./active-section";
import ThemeContextProvider from "./theme-context";
; // Adjust the import path as necessary

type ProviderProps = {
    children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
    return (
        <ThemeContextProvider>
            <ActiveSectionContextProvider>
                {children}
            </ActiveSectionContextProvider>
        </ThemeContextProvider>
    );
}
