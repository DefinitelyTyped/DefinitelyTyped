// Import necessary types from React for use in this module
import type { ComponentType, JSX, ReactNode } from 'react';

// Props for a component that will be rendered when the server-side response is empty
export type EmptyResponsePlaceholderProps = {
    className?: string; // Optional CSS class name for styling the placeholder
} & Partial<ServerSideRenderProps>; // Inherits all properties from ServerSideRenderProps, made optional via Partial

// Props for a component that will be rendered when there's an error in the server-side response
export type ErrorResponsePlaceholderProps = {
    className?: string; // Optional CSS class name for styling the placeholder
    response?: { errorMsg?: string }; // Optional response object containing an optional error message
} & Partial<ServerSideRenderProps>; // Inherits all properties from ServerSideRenderProps, made optional via Partial

// Props for a component that will be rendered while the server-side response is loading
export type LoadingResponsePlaceholderProps = {
    children?: ReactNode; // Optional content (e.g., elements, strings) to render inside the placeholder
    showLoader?: boolean; // Optional flag to display a loading indicator
} & Partial<ServerSideRenderProps>; // Inherits all properties from ServerSideRenderProps, made optional via Partial

// Interface defining the props for the ServerSideRender component
export interface ServerSideRenderProps {
    attributes?: Record<string, any>; // Optional key-value pairs to pass as attributes to the block
    block: string; // Required name of the block to be rendered on the server
    EmptyResponsePlaceholder?: ComponentType<EmptyResponsePlaceholderProps>; // Optional custom component for empty response state
    ErrorResponsePlaceholder?: ComponentType<ErrorResponsePlaceholderProps>; // Optional custom component for error state
    httpMethod?: 'GET' | 'POST'; // Optional HTTP method for the server request, defaults to 'GET' if omitted
    LoadingResponsePlaceholder?: ComponentType<LoadingResponsePlaceholderProps>; // Optional custom component for loading state
    skipBlockSupportAttributes?: boolean; // Optional flag to exclude block support attributes from processing
    urlQueryArgs?: Record<string, any>; // Optional key-value pairs to append as query parameters in the URL
}

// Function to filter out block support attributes from an attributes object
export function removeBlockSupportAttributes(
    attributes: Record<string, any> // Input attributes object to process
): Record<string, any>; // Returns a new object with block support attributes removed

// Function to construct a server-side rendering path for a given block
export function rendererPath(
    block: string, // The name of the block to render
    attributes?: null | Record<string, any>, // Optional attributes to include in the path generation
    urlQueryArgs?: Record<string, any> // Optional query arguments to append to the path
): string; // Returns the constructed path as a string

// React component that handles server-side rendering based on provided props
export default function ServerSideRender(
    props: ServerSideRenderProps // Configuration object for server-side rendering
): JSX.Element; // Returns a JSX element representing the rendered block
