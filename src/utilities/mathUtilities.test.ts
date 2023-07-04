import { ToPowerOf10 } from "./mathUtilities";

test.each([
    [1, 1, 10],
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 0],
    [1, 6, 1_000_000],
    [9.87654321, 6, 9_876_543.21],
    [99, 6, 99_000_000],
    [99, 5, 9_900_000],
    [0.1, 1, 1],
    [0.1, 3, 100],
    [0.123, 3, 123],
])(
    'ToThePowerOf10(%i, %i) should be %i',
    (a, b, expected) => {
        expect(ToPowerOf10(a, b)).toBe(expected);
    },
);