import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/Meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  const favoriteMeetupsData = favoritesCtx.favorites;

  let content;

  if (favoriteMeetupsData.length == 0) {
    content = <p>You have no favorites. Add some maybe?</p>;
  } else {
    content = <MeetupList meetupData={favoriteMeetupsData} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
