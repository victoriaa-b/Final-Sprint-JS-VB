function getConcertDetails(concertData) {
  return `Concert Perfomer: ${concertData.concertDetails.perfomer}  <br>
    Venue: ${concertData.concertDetails.venue} <br>
    Location: ${concertData.concertDetails.location} <br>
    Date: ${concertData.concertDetails.date} <br> `;
}

function getConcertSetUp(concertData) {
  let concertSetUp = "";
  concertData.concertSetUpItems.forEach((category) => {
    concertSetUp += `<h2>${category.category}</h2>`;
    category.items.forEach((item) => {
      concertSetUp += `${item}`;
    });
  });
  return concertSetUp;
}

function getConcertTickets(concertData) {
  let ticketInfo = `<h2>Tickets:</h2>`;
  concertData.concertTickets.forEach((ticket) => {
    ticketInfo += `
      Type: ${ticket.type} <br>
      Price: ${ticket.price} <br>
      Availability: ${ticket.availability}<br>
      <br>
    `;
  });
  return ticketInfo;
}

fetch(`./data.json`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(` There is a HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.getElementById(`concertDetails`).innerHTML =
      getConcertDetails(data);
    document.getElementById(`concertSetUp`).innerHTML = getConcertSetUp(data);
    document.getElementById(`concertTickets`).innerHTML =
      getConcertTickets(data);
  })
  .catch((error) => {
    console.log(`Error reading the JSON file:`, error);
  });
