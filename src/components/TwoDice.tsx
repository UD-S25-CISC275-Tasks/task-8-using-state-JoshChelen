import React, { useState } from "react";

import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const initialLeft = d6();
    let initialRight = d6();
    while (initialLeft === initialRight) {
        initialRight = d6();
    }

    const [leftDie, setLeftDie] = useState<number>(initialLeft);
    const [rightDie, setRightDie] = useState<number>(initialRight);

    function RollLeft(): void {
        setLeftDie(d6);
    }

    function RollRight(): void {
        setRightDie(d6);
    }
    function Outcome(): string {
        if (leftDie === rightDie) {
            return leftDie === 1 ? "You Lose" : "You Win";
        }
        return "Roll Again";
    }

    return (
        <div>
            Left Die:<span data-testid="left-die">{leftDie}</span>
            Right Die:<span data-testid="right-die">{rightDie}</span>
            <Button onClick={RollLeft}>Roll Left</Button>
            <Button onClick={RollRight}>Roll Right</Button>
            <div>
                Outcome: <span>{Outcome()}</span>
            </div>
        </div>
    );
}
