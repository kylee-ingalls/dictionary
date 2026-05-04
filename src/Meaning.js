export default function Meaning(props) {
  let meaning = props.meaning;

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>

      <p>{meaning.definition}</p>

      {meaning.example && (
        <p className="example">"{meaning.example}"</p>
      )}

      {meaning.synonyms && (
        <p className="synonyms">
          Similar: {meaning.synonyms.join(", ")}
        </p>
      )}
    </div>
  );
}