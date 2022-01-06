import React, {useState} from "react"
import {useHistory, useRouteMatch} from "react-router-dom"

import FlipButton from "./FlipButton"
import NextButton from "./NextButton"
import AddCard from "./AddCard"

export default function StudyCards({cards, currentCard, setCurrentCard, Id}) {
    const [cardCount, setCardCount] = useState(1)
    const [isFrontOfCard, setIsFrontOfCard] = useState(true)
    const history = useHistory();
    const {path} = useRouteMatch();

    // handles next button
    const NextCardHandler = () => {
        if (cardCount < cards.length) {
            setIsFrontOfCard((currentSide) => !currentSide); //set card side to false
            setCurrentCard(cards[cardCount]) //set the current card to the card at cardCount(becomes 1 2 ect)
            setCardCount((currentCount) => currentCount + 1); //increases current card count so that when the next button is pressed, the card will change.
        } else {
            //if there are no more cards.
            if 
            (window.confirm("Restart cards? Click 'cancel' to return to the home page."))
            {
                //if they hit ok, resets the deck. 
            setIsFrontOfCard((currentSide) => !currentSide)
            setCurrentCard(cards[0]);
            setCardCount(1)
            history.push(path);
            } else {
                //otherwise will take them back to home screen.
                history.push("/")
            }
        }
    }
    // prompt for less than 3 cards in the deck.
    if (cards.length < 3) {
        return (<div>
            <h2>Not enough cards</h2>
            <p>You need at least 3 cards to study. there are {cards.length} cards in this deck.</p>
        <AddCard Id={Id} />
        </div>)
    }

// if isFrontOfCard is true, will show front side of card with flip button
if (isFrontOfCard) {
    return (
        <div>
            <h4>Card {cardCount} of {cards.length}</h4>
            <p>{currentCard.front}</p>
            <FlipButton setIsFrontOfCard={setIsFrontOfCard} />
        </div>
    )
}
// if isFrontOfCard is false, will show back of card with flip and next button
return(
    <div>
    <h4>Card {cardCount} of {cards.length}</h4>
    <p>{currentCard.back}</p>
    <FlipButton setIsFrontOfCard={setIsFrontOfCard} />
    <NextButton NextCardHandler={NextCardHandler} />
    </div>
)
}