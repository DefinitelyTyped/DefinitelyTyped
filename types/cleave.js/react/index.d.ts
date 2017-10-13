import * as React from 'react'
import { CleaveOptions } from '../cleaveOptions';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    onInit?: (ownert: React.ReactInstance) => void;
    options: CleaveOptions;
}

declare var Cleave: React.ComponentClass<Props>;
export = Cleave;
