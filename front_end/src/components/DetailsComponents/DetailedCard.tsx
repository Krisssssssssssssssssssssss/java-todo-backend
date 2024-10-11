import React from "react";
import CardType from "../Types/CardType";
import {Link} from "react-router-dom";
import axios from "axios";

type CardProps = {
    card: CardType;
    setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

const DetailedCard: React.FC<CardProps> = ({card, setCards}) => {
    const handleDelete = (id: string) => {

        axios.delete(`/api/todo/${id}`)
            .then(() => {
                console.log(`Card with id: ${id} deleted successfully.`);
                setCards(prevCards => prevCards.filter(card => card.id !== id));
            })
            .catch(error => {
                console.log(`Failed to delete card with id: ${id}`, error);
            });
    };



    return (
        <div className="detailedCard">
            <div className="detailsContent">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>

            <div className="buttons-div">
                <button
                    className="btn action-btn mx-1 btn-edit"
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger detail-btn"
                    onClick={() => handleDelete(card.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DetailedCard;
