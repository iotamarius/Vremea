// aici vom avea logica pentru a ne extragem intr-un mod citibil data primita de la API (proprietatea dt de pe obiectul de pe Open Weather API)

function getDayOfTheWeek(dateInUtc) {
  // Pentru ca data de la API este in UTC format, trebuie sa o transform folosind obiectul Date din JS
  const date = new Date(dateInUtc * 1000);
  const dayIndex = date.getDay();
  let day;

  switch (dayIndex) {
    case 0:
      day = "Duminica";
      break;
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marti";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sambata";
      break;
    default:
      // Aruncam o eroare daca indexul nu este valid - teoretic nu ar trebui sa se ajunga la eroare
      throw new Error("Invalid day index");
  }
  return day;
}

// fucntie care extrage ora

function getHour(dateInUtc) {
  const date = new Date(dateInUtc * 1000);
  // extragem ora folosint metoda getHours() a obiectului Date
  // Daca ira este mai mica decat 10 atunci o sa ii adaugam inca un "0" in fata
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  // Extragem minutele la fel folosind o metoda de pe obiectul Date
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  // Returnam ora in formatul dorit
  return `${hours}:${minutes}`;
}
