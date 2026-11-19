// Fecha y hora local del evento: 5 de diciembre de 2026, 8:00 p. m.
const eventDate = new Date(2026, 11, 5, 20, 0, 0);

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const messageElement = document.querySelector("#countdown-message");

function updateCountdown() {
  const now = new Date();
  const remaining = eventDate.getTime() - now.getTime();

  if (remaining <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    messageElement.textContent = "¡Llegó el gran día! Gracias por acompañarme.";
    return;
  }

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
  messageElement.textContent = "Cada segundo nos acerca a esta celebración.";
}

updateCountdown();
setInterval(updateCountdown, 1000);
