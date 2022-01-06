import React, {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom"
import { readDeck, createCard } from "../../../utils/api";

import AddCardNavBar from "./AddCardNavBar"
import CardForm from "../CardForm"

export default function AddCardPage() {
    const [deck, setDeck] = useState({})
    const [cardFront, setCardFront] = useState("")
    const [cardBack, setCardBack] = useState("");
    const Id = useParams().deckId;
    const history = useHistory();

    //pull data from api
    useEffect(() =>{
        async function loadDeck() {
            const deckData = await readDeck(Id)
            setDeck(deckData)
        }
        loadDeck();
    }, [Id])

    const handleFrontChange = (event) => setCardFront(event.target.value);
    const handleBackChange = (event) => setCardBack(event.target.value);

    //creates the new card, then resets the card front and back to original values.
    const handleAddCardSubmit = (event) => {
        event.preventDefault();
        createCard(Id, {front: cardFront, back: cardBack })
        setCardFront("");
        setCardBack("")
    }

    if(deck.name) {
        return (
            <div>
                <AddCardNavBar deckName={deck.name} Id={Id} />
                <h2>{deck.name}: Add Card</h2>

                <form onSubmit={handleAddCardSubmit}>
                <CardForm
                cardFront={cardFront}
                handleFrontChange={handleFrontChange}
                cardBack={cardBack}
                handleBackChange={handleBackChange}
                />
                <button onClick={() => history.push(`/decks/${Id}`)}>Done</button>
                <button type="submit">Save</button>
                </form>
            </div>
        )
    }
    return "Loading..."
    }
