import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const questionTypes: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };
    const [qType, setQType] = useState<QuestionType>("short_answer_question");

    function changeQuestionType(): void {
        setQType(questionTypes[qType]);
    }

    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {qType === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
