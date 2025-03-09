import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizProgress] = useState<boolean>(false);

    function decreaseAttempts(): void {
        if (attempts > 0) setAttempts(attempts - 1);
    }

    function increaseAttempts(): void {
        setAttempts(attempts + 1);
    }

    function startQuiz(): void {
        if (!quizInProgress && attempts > 0) {
            setQuizProgress(true);
            decreaseAttempts();
        }
    }

    function stopQuiz(): void {
        if (quizInProgress) setQuizProgress(false);
    }

    return (
        <div>
            <div>Attempts remaining: {attempts}</div>
            <div>Quiz in progress: {quizInProgress ? "Yes" : "No"}</div>

            <Button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>

            <Button onClick={increaseAttempts} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
