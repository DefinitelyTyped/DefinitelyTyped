/* tslint:disable:max-line-length */
import * as React from 'react';
import { uncontrollable } from 'uncontrollable';

interface Props {
    a: string;
    b?: string;
    value: string;
    onChange: () => void;
}
const TestComponent = (props: Props) => null;

// The following generated type is equivalent to the more concise
// ComponentType<(Pick<Props, "a" | "b"> & ({value: string, onChange: () => void} | {defaultValue:? string, onChange?: () => void})

// $ExpectType ComponentType<(Pick<Props, "a" | "b"> & Record<"value", string> & Record<"onChange", () => void>) | (Pick<Props, "a" | "b"> & Partial<Record<"defaultValue", string>> & Partial<Record<"onChange", () => void>>)>
uncontrollable(TestComponent, { value: 'onChange' as 'onChange' });

interface Props2 extends Props {
    value2: string;
    onChange2: () => void;
}
const TestComponent2 = (props: Props2) => null;

// The following generated type is equivalent to the more concise
// ComponentType<(Pick<Props, "a" | "b"> & ({value: string, onChange: () => void} | {defaultValue:? string, onChange?: () => void} | {value2: string, onChange2: () => void} | {defaultValue2:? string, onChange2?: () => void})

// $ExpectType ComponentType<(Pick<Props2, "a" | "b"> & Record<"value", string> & Record<"onChange", () => void>) | (Pick<Props2, "a" | "b"> & Partial<Record<"defaultValue", string>> & Partial<Record<"onChange", () => void>>) | (Pick<Props2, "a" | "b"> & Record<"value2", string> & Record<"onChange2", () => void>) | (Pick<Props2, "a" | "b"> & Partial<Record<"defaultValue2", string>> & Partial<Record<"onChange2", () => void>>)>
uncontrollable(TestComponent2, { value: 'onChange' as 'onChange', value2: 'onChange2' as 'onChange2' });
