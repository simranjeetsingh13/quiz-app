import React from "react";
import { ButtonWrapper, Wrapper } from "./QuestionCard.styles";

type QuestionProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<QuestionProps> = ({
  answers,
  callback,
  question,
  questionNr,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question:{questionNr} / {totalQuestions}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers?.map((answer) => (
          <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          >
             <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
