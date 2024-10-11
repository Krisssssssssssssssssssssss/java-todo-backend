import React from "react";
import CardType from "../Types/CardType";
import Card from "./Card";

type CardsProps = {
    cards: CardType[];
    setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

const Cards: React.FC<CardsProps> = ({cards, setCards}) => {
    return (
        <>
            {cards.map((card) => (
                <div key={card.id} className="grid-item" id={card.id}>
                    <Card card={card} setCards={setCards}/>
                </div>
            ))}
        </>
    );
};

export default Cards;
