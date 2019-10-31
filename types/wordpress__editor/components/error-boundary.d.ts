import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace ErrorBoundary {
    interface Props {
        children: ReactNode;
        onError(): void;
    }
}
declare const ErrorBoundary: ComponentType<ErrorBoundary.Props>;

export default ErrorBoundary;
