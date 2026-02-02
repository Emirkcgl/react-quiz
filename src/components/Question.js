import Options from './Options';
export default function Question({ questions, answer, dispatch, numQuestions }) {


    return (
        <div>
            <h4>{questions.question}</h4>
            <Options questions={questions} answer={answer} dispatch={dispatch} />

            {
                answer !== null && (
                    <button className='btn btn-ui' onClick={() => dispatch({ type: "nextQuestion" })}>
                        Sonraki Soru
                    </button>
                )
            }
        </div>
    )
}
