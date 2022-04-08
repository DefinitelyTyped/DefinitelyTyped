import * as React from "react";

export interface ErrorBoundaryProps {
    children?: React.ReactNode,
    fallback?: React.ReactNode,
}

declare class ErrorBoundary extends React.Component<ErrorBoundaryProps> { }

export default ErrorBoundary;
