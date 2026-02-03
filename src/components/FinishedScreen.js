export default function FinishedScreen({ points, totalPoints, highscore, dispatch }) {
    const percentage = (points / totalPoints) * 100;

    let emoji;

    if (percentage === 100) emoji = "🥇";
    if (percentage >= 80 && percentage < 100) emoji = "🥈";
    if (percentage >= 50 && percentage < 80) emoji = "🥉";
    if (percentage >= 0 && percentage < 50) emoji = "😢";

    return (
        <>
            <p className="result">
                <span>{emoji}</span>
                <h2>Quiz Sonu!</h2>
                <p>Toplam {totalPoints} puan üzerinden <strong>{points}</strong> puan aldınız (Math.ceil({percentage}%))</p>
            </p>
            <p className="highscore">(highscore: {highscore} points)</p>


            <button className='btn btn-ui' onClick={() => dispatch({ type: "restart" })}>
                Quiz'i Baştan Başlat
            </button>
        </>
    );
}