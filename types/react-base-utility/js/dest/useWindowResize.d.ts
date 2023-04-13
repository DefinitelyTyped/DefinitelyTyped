export interface WindowSizeInterface {
    width: number;
    height: number;
}

declare function useWindowResize(): WindowSizeInterface;
export default useWindowResize;
