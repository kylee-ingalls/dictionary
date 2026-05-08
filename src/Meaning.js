export default function Meaning(props) {
  let meaning = props.meaning;

  if (!meaning) return null;

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>

      {/* Definition */}
      <div className="section">
        <h4>Definition</h4>
        <p className="definition">
          {meaning.definition}
        </p>
      </div>

      {/* Synonyms */}
      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <div className="section">
          <h4>Similar</h4>

          <ul className="synonyms-list">
            {meaning.synonyms.slice(0, 5).map((synonym, index) => (
              <li key={index}>
                {synonym}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Example */}
      {meaning.example && (
        <div className="section">
          <h4>Example</h4>
          <p className="example">
            "{meaning.example}"
          </p>
        </div>
      )}
    </div>
  );
}