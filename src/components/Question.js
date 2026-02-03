import Options from './Options';
export default function Question({ questions, answer, dispatch, index, numQuestions }) {


    return (
        <div>
            <h4>{questions.question}</h4>
            <Options questions={questions} answer={answer} dispatch={dispatch} />

            {index < numQuestions - 1 && (
                answer !== null && (
                    <button className='btn btn-ui' onClick={() => dispatch({ type: "nextQuestion" })}>
                        Sonraki Soru
                    </button>
                )
            )}

            {
                index === numQuestions - 1 && (
                    <button className='btn btn-ui' onClick={() => dispatch({ type: "finish" })}>
                        Quiz'i Bitir
                    </button>
                )
            }
        </div>
    )
}
