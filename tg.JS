function calculateTangent(input) {

    return Math.tan(input);
  }
  
  const input = convert(prompt("Zadej úhel v radiánech:"));
  
  if (cislo(input)) {
    alert("Neplatná vstupní hodnota!");
  } else {

    const result = calculateTangent(input);
    alert("Tangens úhlu ${input} je ${result}.");
    
    const userResult = parseFloat(prompt("Zadej výsledek:"));
    const correctResult = calculateTangent(input);

   while (result) {
    if (cislo(userResult)) {
      alert("Neplatná vstupní hodnota!");
    } else if (userResult === correctResult) {
      alert("Výsledek je správně!");
    } else {
      alert("Výsledek je špatně!");
    }}
  };