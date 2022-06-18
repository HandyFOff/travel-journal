import React from "react";
import cardsData from "./main/cardsData";
import Card from "./main/Card";

export default function Main() {
    const cards = cardsData.map((card) =>
        <Card
            key={card.id}
            {...card}
        />
    );
    return (
        <main className="main">
            <div className="cards">
                {cards}
            </div>
        </main>
    )
}