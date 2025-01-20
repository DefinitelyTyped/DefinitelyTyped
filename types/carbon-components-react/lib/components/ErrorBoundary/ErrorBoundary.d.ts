import * as React from "react";

export interface ErrorBoundaryProps {
    children?: React.ReactNode | undefined;
    fallback?: React.ReactNode | undefined;
}

declare class ErrorBoundary extends React.Component<ErrorBoundaryProps> {}

export default ErrorBoundary;
