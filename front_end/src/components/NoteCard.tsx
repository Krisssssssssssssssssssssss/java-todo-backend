import { Link } from 'react-router-dom';

function NoteCard({ note, onDelete, onEdit }) {
    return (
        <div className="note-card">
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <div>
                <button onClick={() => onEdit(note)}>Edit</button>
                <button onClick={() => onDelete(note.id)}>Delete</button>
                <Link to={`/details/${note.id}`}> {/* Make sure the ID is correctly passed */}
                    <button>View Details</button>
                </Link>
            </div>
        </div>
    );
}

export default NoteCard;
