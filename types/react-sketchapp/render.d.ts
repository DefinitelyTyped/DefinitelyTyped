import * as React from 'react';
import { SketchLayer, WrappedSketchLayer } from './types';

export function renderToJSON(element: JSX.Element): object;

export function renderLayers(layers: any[], container: SketchLayer): SketchLayer;

export function render(element: JSX.Element, container?: SketchLayer | WrappedSketchLayer): SketchLayer | SketchLayer[];
