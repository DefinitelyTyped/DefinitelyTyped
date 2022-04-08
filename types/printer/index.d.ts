// Type definitions for printer 0.4
// Project: http://github.com/tojocky/node-printer
// Definitions by: Christos Panagiotakopoulos <https://github.com/chrispanag>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function getPrinters(): PrinterDetails[];
export function getPrinter(printerName: string): PrinterDetails;
export function getPrinterDriverOptions(printerName: string): PrinterDriverOptions;
export function getSelectedPaperSize(printerName: string): string;
export function getDefaultPrinterName(): string | undefined;
export function printDirect(options: PrintDirectOptions): void;
export function printFile(options: PrintFileOptions): void;
export function getSupportedPrintFormats(): string[];
export function getJob(printerName: string, jobId: number): JobDetails;
export function setJob(printerName: string, jobId: number, command: 'CANCEL' | string): void;
export function getSupportedJobCommands(): string[];

export interface PrintDirectOptions {
    data: string | Buffer;
    printer?: string;
    type?: 'RAW' | 'TEXT' | 'PDF' | 'JPEG' | 'POSTSCRIPT' | 'COMMAND' | 'AUTO';
    options?: { [key: string]: string };
    success?: PrintOnSuccessFunction;
    error?: PrintOnErrorFunction;
}

export interface PrintFileOptions {
    filename: string;
    printer?: string;
    success?: PrintOnSuccessFunction;
    error?: PrintOnErrorFunction;
}

export type PrintOnSuccessFunction = (jobId: string) => any;
export type PrintOnErrorFunction = (err: Error) => any;

export interface PrinterDetails {
    name: string;
    isDefault: boolean;
    options: { [key: string]: string; };
}

export interface PrinterDriverOptions {
    [key: string]: { [key: string]: boolean; };
}

export interface JobDetails {
    id: number;
    name: string;
    printerName: string;
    user: string;
    format: string;
    priority: number;
    size: number;
    status: JobStatus[];
    completedTime: Date;
    creationTime: Date;
    processingTime: Date;
}

export type JobStatus = 'PAUSED' | 'PRINTING' | 'PRINTED' | 'CANCELLED' | 'PENDING' | 'ABORTED';
