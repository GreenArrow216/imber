declare class RainEffect {
    constructor(canvas: HTMLCanvasElement, options?: Partial<RainOptions>);
    resizeCanvas(): void;
    animate(): void;
}

interface RainOptions {
    dropCount: number;
    dropSpeed: number;
    dropColor: string;
}

export = RainEffect;
