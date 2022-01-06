import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom"
import HomeScreen from "./Home/HomeScreen"
import Study from "./Study/Study"
import CreateDeck from "./CreateDeck/CreateDeck"
import Deck from "./DeckPage/Deck"
import EditDeck from "./EditDeck/EditDeck"
import EditCard from "./Cards/Edit/EditCard"
import AddCardPage from "./Cards/New/AddCardPage"

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          
        <Route exact path="/">
        <HomeScreen />
        </Route>

        <Route path="/decks/new">
          <CreateDeck />
        </Route>

        <Route path="/decks/:deckId/cards/new">
          <AddCardPage />
        </Route>

        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>

        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>

        <Route path="/decks/:deckId/study">
          <Study />
        </Route>

        <Route path="/decks/:deckId">
          <Deck />
        </Route>

        <Route>
        <NotFound />
        </Route>

        </Switch>
      </div>
    </>
  );
}

export default Layout;
