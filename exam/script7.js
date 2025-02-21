let day = prompt("Enter a day of the week (e.g., Monday):");

switch (day) {
  case "monday":
    console.log("Somvar (સોમવાર)");
    break;
  case "tuesday":
    console.log("Mangalvar (મંગળવાર)");
    break;
  case "wednesday":
    console.log("Budhvar (બુધવાર)");
    break;
  case "thursday":
    console.log("Guruvaar (ગુરૂવાર)");
    break;
  case "friday":
    console.log("Shukravar (શુક્રવાર)");
    break;
  case "saturday":
    console.log("Shanivar (શનિવાર)");
    break;
  case "sunday":
    console.log("Ravivar (રવિવાર)");
    break;
  default:
    console.log("Invalid day! Please enter a valid day of the week.");
}
