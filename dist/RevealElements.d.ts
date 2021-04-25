import React, { ReactElement } from 'react';
import { RevealProviderProps } from './RevealProvider';
export declare const RevealElements: React.FC<{
    elements?: any;
    children: (elem: any, index: number) => ReactElement;
} & RevealProviderProps>;
export default RevealElements;
