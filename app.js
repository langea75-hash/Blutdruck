const heute = new Date();
const datumSchluessel = heute.toISOString().split("T")[0];

// Datum anzeigen
document.getElementById("datum").textContent =
  heute.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

// Gespeicherte Daten laden
function laden() {
  const daten = JSON.parse(localStorage.getItem("blutdruck")) || {};
  const tag = daten[datumSchluessel];

  if (tag) {
    document.getElementById("morgen").value = tag.morgen || "";
    document.getElementById("mittag").value = tag.mittag || "";
    document.getElementById("abend").value = tag.abend || "";
  }
}

// Daten speichern
function speichern() {
  const daten = JSON.parse(localStorage.getItem("blutdruck")) || {};

  daten[datumSchluessel] = {
    morgen: document.getElementById("morgen").value,
    mittag: document.getElementById("mittag").value,
    abend: document.getElementById("abend").value
  };

  localStorage.setItem("blutdruck", JSON.stringify(daten));

  alert("✅ Blutdruck gespeichert");
}

// Beim Start laden
laden();
