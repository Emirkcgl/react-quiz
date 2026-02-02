export default function StartScreen({numQuestions,dispatch}) {
  return (
    <div className="start">
      <h2>React Quiz'e Hoş Geldiniz!</h2>
      <h3>React bilginizi test etmek için {numQuestions} soru</h3>
      <button className="btn btn-ui" onClick={(()=>dispatch({type:"start"}))}>Başlayalım</button>
    </div>
  );
}