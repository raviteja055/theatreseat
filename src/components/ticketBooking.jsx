import React, { useState } from "react";

const TicketBooking = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const totalRows = 10;
    const seatsPerRow = 6;

    const handleSeatSelection = (row, seat) => {
        const seatNumber = row * seatsPerRow + seat;

        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats((prevSelectedSeats) =>
                prevSelectedSeats.filter((seat) => seat !== seatNumber)
            );
        } else {
            if (selectedSeats.length === 2) {
                setSelectedSeats((prevSelectedSeats) =>
                    prevSelectedSeats.slice(1).concat(seatNumber)
                );
            } else {
                setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatNumber]);
            }
        }
    };

    const renderSeats = () => {
        const rows = [];

        for (let row = 0; row < totalRows; row++) {
            const seats = [];

            for (let seat = 1; seat <= seatsPerRow; seat++) {
                const seatNumber = row * seatsPerRow + seat;
                console.log("seatNumber", seatNumber)
                const isSelected = selectedSeats.includes(seatNumber);

                seats.push(
                    <button
                        key={seatNumber}
                        className={isSelected ? "selectedSeat" : "seat"}
                        onClick={() => handleSeatSelection(row, seat)}
                    >
                        {isSelected ? seatNumber : ""}
                    </button>
                );
            }

            rows.push(<div key={row}>{seats}</div>);
        }

        return rows;
    };

    return (
        <div className="container">
            <h1 style={{ color: "white", textAlign: "center" }}>Theater Seat selector</h1>

            <div style={{ columns: "2 auto" }}>{renderSeats()}</div>
        </div>

    );
}

export default TicketBooking