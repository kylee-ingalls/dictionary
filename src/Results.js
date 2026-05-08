import Meaning from "./Meaning";

export default function Results(props) {
  if (!props.results || !props.results.meanings) {
    return null;
  }

  return (
    <div className="Results">
      <div className="word-header">
        <h2>{props.results.word}</h2>
        <span className="phonetic">
          {props.results.phonetic}
        </span>
      </div>

      {props.results.meanings.slice(0, 3).map((meaning, index) => (
        <Meaning
          key={index}
          meaning={meaning}
        />
      ))}
    </div>
  );
}