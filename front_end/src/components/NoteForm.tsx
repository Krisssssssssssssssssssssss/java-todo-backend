import { useState, useEffect } from 'react';

function NoteForm({ onSubmit, currentNote }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (currentNote) {
            setTitle(currentNote.title);
            setBody(currentNote.body);
        }
    }, [currentNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, body, id: currentNote ? currentNote.id : Date.now() });
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            ></textarea>
            <button type="submit">{currentNote ? 'Save' : 'Add'}</button>
        </form>
    );
}

export default NoteForm;
