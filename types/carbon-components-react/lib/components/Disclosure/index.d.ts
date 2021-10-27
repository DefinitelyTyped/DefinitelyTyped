export interface UseDisclosureReturn {
    buttonProps: {
        "aria-controls": string,
        "aria-expanded": boolean,
        onClick(): void,
    },
    contentProps: {
        id: string,
    },
    open: boolean,
}

export function useDisclosure(id: string): UseDisclosureReturn;
