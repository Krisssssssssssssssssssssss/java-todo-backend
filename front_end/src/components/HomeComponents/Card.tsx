import React from "react";
import CardType from "../Types/CardType";
import {Link} from "react-router-dom";
import axios from "axios";

type CardProps = {
    card: CardType;
    setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

const Card: React.FC<CardProps> = ({card, setCards}) => {
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

    const handleEdit = (card: CardType) => {
        console.log(`Editing card with id: ${card.id}`);
    };

    return (
        <div className="grid-item-inner">
            <h3>{card.title}</h3>
            <p>{card.description}</p>

            <div className="buttons-div">
                <Link to={`/details/${card.id}`}>
                    <button className="btn action-btn btn-read">
                        Details
                    </button>
                </Link>
                <button
                    className="btn action-btn mx-1 btn-edit"
                    onClick={() => handleEdit(card)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(card.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;
