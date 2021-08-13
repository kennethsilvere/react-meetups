import { useState, useEffect } from "react";
import MeetupList from "../components/Meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupsData, setMeetupsData] = useState([]);

  const tranformDataIntoArray = (data) => {
    const meetupsData = [];

    for(const key in data) {
      const meetup = {
        id: key,
        ...data[key]
      }
      meetupsData.push(meetup);
    }

    return meetupsData;
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetups-3d1a8-default-rtdb.asia-southeast1.firebasedatabase.app//meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {        
        setMeetupsData(tranformDataIntoArray(data));
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <section>
        <MeetupList meetupData={meetupsData} />
      </section>
    </div>
  );
}

export default AllMeetupsPage;
