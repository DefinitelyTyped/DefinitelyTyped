export interface WindowSizeInterface {
    width: number;
    height: number;
}

declare const useWindowResize: () => WindowSizeInterface;
export default useWindowResize;
