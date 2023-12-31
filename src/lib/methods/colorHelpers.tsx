import hexRgb from 'hex-rgb';

export const mergeHexAndOpacityValues = (color: string, opacity: number) => {
    if (!color.includes('#')) {
        throw new Error(`Parameter "color" does not look like a Hex string! (${color})`);
    } else if (opacity < 0 || opacity > 1) {
        throw new Error(`Parameter "opacity" must be a value between 0 and 1! (${opacity})`);
    }

    const opacityHex = Math.round(opacity * 255)
        .toString(16)
        .padStart(2, '0');

    const colorAndOpacityHex = color + opacityHex;

    return colorAndOpacityHex;
};

export const hexBgColorToTwRgbColor = (hexString: string, opacity: number) => {
    const rgbaObject = hexRgb(hexString);
    return `rgb(${rgbaObject.red} ${rgbaObject.green} ${rgbaObject.blue} / ${opacity})`;
};
