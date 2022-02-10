const STYLE_END_IDENTIFIER = ";\"";
const STYLE_START_IDENTIFIER = "style=\"";
const STYLE_SPLIT_IDENTIFIER = "; ";

const alphabetizeStyleSequencesInString = (styleString) => {
  const parseString = String(styleString);

  // get sequences
  const sequences = findStartSequenceAndEndSequencePositions(
    String(STYLE_START_IDENTIFIER),
    String(STYLE_END_IDENTIFIER),
    String(parseString)
  );

  // replace sequences
  if(sequences.length > 0) {
    let reassemblyString = "";
    let lastSequenceEnd = 0;

    for(const sequenceIndex in sequences) {
      if(sequences[sequenceIndex]) {
        const sequence = sequences[sequenceIndex];

        // fill reassemblyString between sequences
        reassemblyString += parseString.substring(lastSequenceEnd, sequence.start);

        // sort sequence and append to reassemblyString
        const preSortedStyles = parseString.substring(sequence.start, sequence.end);
        const strippedStyles = preSortedStyles
          .replace(STYLE_START_IDENTIFIER, '')
          .replace(STYLE_END_IDENTIFIER, '')
          .split(STYLE_SPLIT_IDENTIFIER);
        const sortedStyles = strippedStyles.sort();
        const postSortedStyles = (
          `${STYLE_START_IDENTIFIER}` +
          `${sortedStyles.join(STYLE_SPLIT_IDENTIFIER)}` +
          `${STYLE_END_IDENTIFIER}`
        );
        reassemblyString += postSortedStyles;
        lastSequenceEnd = sequence.end;
      }
    }

    // fill reassemblyString after all sequences appended
    reassemblyString += parseString.substring(lastSequenceEnd);
    return reassemblyString;
  }
  return parseString;
};

const findStartSequenceAndEndSequencePositions = (startSequence, endSequence, stringToParse) => {
  const _endSequence = String(endSequence);
  const _startSequence = String(startSequence);
  const parseString = String(stringToParse);
  const containsEndSequence = parseString.includes(_endSequence.valueOf());
  const containsStartSequence = parseString.includes(_startSequence.valueOf());

  // only perform comp if string contains sequences
  if(containsEndSequence && containsStartSequence) {
    const sequencePositions = [];

    // parse until end is reached
    let currentPosition = 0;
    while(currentPosition < parseString.length) { // NOSONAR
      const startSubString = parseString.substring(currentPosition);
      const startSequenceSubStringPosition = startSubString.search(_startSequence);
      const startSequencePosition = startSequenceSubStringPosition + currentPosition;
      if(startSequenceSubStringPosition === -1) break; // break if not found
      const endSubStringStart = startSequencePosition + _startSequence.length;
      const endSubString = parseString.substring(endSubStringStart);
      const endSequenceSubStringPosition = endSubString.search(_endSequence);
      const endSequencePosition = endSequenceSubStringPosition + endSubStringStart;
      if(endSequenceSubStringPosition === -1) break; // break if not found
      const endSequencePositionWithLength = endSequencePosition + _endSequence.length;
      sequencePositions.push({
        end: Number(endSequencePositionWithLength),
        start: Number(startSequencePosition)
      });
      currentPosition = endSequencePositionWithLength;
    }
    return sequencePositions;
  }
  return [];
};

module.exports = {
  alphabetizeStyleSequencesInString,
  findStartSequenceAndEndSequencePositions
};
