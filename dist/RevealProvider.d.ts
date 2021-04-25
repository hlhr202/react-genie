import React from 'react';
import { RevealMode } from 'Reveal';
export declare type RevealProviderProps = {
    delayBetween?: number;
    initialDelay?: number;
    disableDelay?: boolean;
    mode?: RevealMode;
    animation?: string;
};
export declare const RevealProvider: React.FC<RevealProviderProps>;
export default RevealProvider;
