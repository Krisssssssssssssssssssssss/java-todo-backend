import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import CardType from '../Types/CardType';

type HomeProps = {
    cards: CardType[];
    setCards: (cards: CardType[]) => void;
};

function Home({ cards, setCards }: HomeProps) {
    const [localCards, setLocalCards] = useState<CardType[]>(cards);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [currentCard, setCurrentCard] = useState<CardType | null>(null);
    const [newTitle, setNewTitle] = useState<string>('');
    const [newDescription, setNewDescription] = useState<string>('');

    useEffect(() => {
        setLocalCards(cards);
    }, [cards]);

    const handleSubmit = () => {
        const newCard = {
            title: newTitle,
            description: newDescription,
        };

        if (isEditing && currentCard) {
            axios.put(`/api/todo/${currentCard.id}`, newCard)
                .then(() => {
                    resetForm();
                })
                .catch(() => {
                    console.log('Update failed.');
                });
        } else {
            axios.post('/api/todo', newCard)
                .then(() => {
                    resetForm();
                })
                .catch(() => {
                    console.log('Creation failed.');
                });
        }
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentCard(null);
        setNewTitle('');
        setNewDescription('');
        toggleDisplayNone(false);
    };

    const toggleDisplayNone = (show: boolean) => {
        const formDiv = document.getElementById('new-note-specs');
        if (formDiv) {
            formDiv.classList.toggle('display-none', !show);
        }
    };

    const handleAddNewNote = () => {
        resetForm();
        toggleDisplayNone(true);
    };

    const handleEditCard = (card: CardType) => {
        setIsEditing(true);
        setCurrentCard(card);
        setNewTitle(card.title);
        setNewDescription(card.description);
        toggleDisplayNone(true);
    };

    return (
        <div className="main-outer">
            <div className="add-new-note-div">
                <p className="plus-sign" onClick={handleAddNewNote}>
                    <i className="fa-solid fa-plus"></i>
                </p>
                <p className="add-new-note-text">Add New Note</p>
            </div>

            <div className="display-none" id="new-note-specs">
                <input
                    type="text"
                    id="note-title"
                    placeholder="Type in your title"
                    className="form-control add-new-note-input-area"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                    name="note"
                    id="note-body"
                    cols="15"
                    rows="7"
                    className="form-control add-new-note-input-area"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                ></textarea>
                <button
                    id="addMyNoteBtn"
                    className="form-control-sm mt-1 mb-2 btn general-btn"
                    onClick={handleSubmit}
                >
                    {isEditing ? 'Update Note' : 'Add My Note'}
                </button>
            </div>

            <div className="main-grid">
                <Cards cards={localCards} setCards={setCards}/>
            </div>
        </div>
    );
}

export default Home;
