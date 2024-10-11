import { useParams } from 'react-router-dom';
import CardType from "../Types/CardType.ts";
import React from "react";
import DetailedCard from "./DetailedCard.tsx";

type HomeProps = {
    cards: CardType[];
    setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};
function Details({ cards, setCards }: HomeProps) {
    const {id} = useParams();
    const getCard: CardType | undefined = cards
        .find((card) => card.id.toString() === id);
    return getCard ? <DetailedCard key={getCard.id} card={getCard} setCards={setCards}/> :
        <p>Note not found</p>;
}

export default Details;
