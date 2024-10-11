import {useEffect, useState} from 'react';
import {Header} from "./components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/HomeComponents/Home.tsx";
import Details from "./components/DetailsComponents/Details.tsx";
import Footer from "./components/Footer.tsx";
import CardType from "./components/Types/CardType.ts";
import axios from "axios";

function App() {
    const [cards, setCards] = useState<CardType[]>([]);
    const getTodos = () => {
        axios.get<CardType[]>('/api/todo')
            .then((response) => {
                setCards(response.data);
            })
            .catch(() => {
                console.log("API request failed.");
            });
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home cards={cards} setCards={setCards}/>}/>
                <Route path="/details/:id" element={<Details cards={cards} setCards={setCards}/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
