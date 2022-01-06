import React, {useEffect, useState} from "react"
import {Route, useParams, useRouteMatch} from "react-router-dom"
import {readDeck} from "../../utils/api/index"

import DeckNavBar from "./DeckNavBar"
import DeckInfo from "./DeckInfo"

export default function Deck() {
    const[deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);

    const Id = useParams().deckId;
    const {path} = useRouteMatch();

    //fetch deck from api
    useEffect(()=>{
        async function loadDeck() {
            const deckData = await readDeck(Id);
            setDeck(deckData)
            setCards(deckData.cards)
        }
        loadDeck();
    }, [Id])
    

    if(deck.name) {
        return (
            <div>
                <DeckNavBar deckName={deck.name} />

                <Route path={path}>
                    <DeckInfo 
                    deckName={deck.name}
                    deckDescription={deck.description}
                    Id={Id}
                    cards={cards}
                    path={path}
                    />
                </Route>
            </div>
        )
    } 
    return "Loading..."
}