
function validName(n){ return /^[A-Za-z ]+$/.test(n); }
function validEmail(e){ return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e); }
function validSeats(s){ return /^[1-9]|10$/.test(s); }

function bookTicket(name,email,seats){
    if(validName(name)&&validEmail(email)&&validSeats(seats)){
        const ticket={name,email,seats};
        console.log(ticket);
    } else console.log("Invalid input");
}
