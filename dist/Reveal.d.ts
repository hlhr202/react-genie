import React from 'react';
export declare enum RevealMode {
    Clone = 0,
    Wrap = 1
}
export declare const Reveal: React.FC<{
    animation?: string;
    delay?: number;
    children?: any;
    mode?: RevealMode;
    debugName?: string;
    style?: React.CSSProperties;
    onShowDone?: () => void;
    onEnterView?: () => void;
    wait?: boolean;
}>;
