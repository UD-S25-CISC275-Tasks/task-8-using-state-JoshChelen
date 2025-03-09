import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🦃" | "🥂" | "🥚";

export function CycleHoliday(): React.JSX.Element {
    const alphabeticalTransitions: Record<Holiday, Holiday> = {
        "🎃": "🎄", // Halloween → Christmas
        "🎄": "🥂", // Christmas → New Year's Eve
        "🥂": "🥚", // New Year's Eve → Easter
        "🥚": "🦃", // Easter → Thanksgiving
        "🦃": "🎃" // Thanksgiving → Halloween
    };

    const calendarTransitions: Record<Holiday, Holiday> = {
        "🥂": "🥚", // New Year's Eve → Easter
        "🥚": "🎃", // Easter → Halloween
        "🎃": "🦃", // Halloween → Thanksgiving
        "🦃": "🎄", // Thanksgiving → Christmas
        "🎄": "🥂" // Christmas → New Year's Eve
    };

    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🎃");

    function advanceByAlphabet(): void {
        setCurrentHoliday(alphabeticalTransitions[currentHoliday]);
    }

    function advanceByYear(): void {
        setCurrentHoliday(calendarTransitions[currentHoliday]);
    }

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
