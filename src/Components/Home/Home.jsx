import React from "react";
import './Home.css';


export function Home() {
  return (
    <div className="container">
      <h1 className="title">Rick and Morty</h1>
      <img className="imgContent" src="/Images/imgcontent.png" alt="Img1" />
      <p className="mainText">
        Rick and Morty is an American adult animated science fiction sitcom
        created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime
        programming block, Adult Swim. The series follows the misadventures of
        cynical mad scientist Rick Sanchez and his good-hearted, but fretful
        grandson Morty Smith, who split their time between domestic life and
        interdimensional adventures.
      </p>
      <div>
      <h2>Premise</h2>
      <img className="imgContent2" src="/Images/imgcontent2.jpg" alt="Img1" align="left"/>
      <p className="text1">
          The show revolves around the adventures of the members of the Smith
          household, which consists of parents Jerry and Beth, their children
          Summer and Morty, and Beth's father, Rick Sanchez, who lives with them
          as a guest. According to Justin Roiland, the family lives outside of
          Seattle, Washington. The adventures of Rick and Morty, however,
          take place across an infinite number of realities, with the characters
          travelling to other planets and dimensions through portals and Rick's
          flying car.
      </p>
      <img className="imgContent3" src="/Images/imgcontent3.jpeg" alt="Img1" align="right"/>
      <p className="text2">
          Rick is an eccentric and alcoholic mad scientist, who eschews many
          ordinary conventions such as school, marriage, love, and family. He
          frequently goes on adventures with his 14-year-old grandson, Morty, a
          kind-hearted but easily distressed boy, whose naïve but grounded moral
          compass plays counterpoint to Rick's Machiavellian ego. Morty's
          17-year-old sister, Summer, is a more conventional teenager who
          worries about improving her status among her peers and sometimes
          follows Rick and Morty on their adventures. The kids' mother, Beth, is
          a generally level-headed person and assertive force in the household,
          though self-conscious about her professional role as a horse surgeon.
          She is dissatisfied with her marriage to Jerry, a simple-minded and
          insecure person, who disapproves of Rick's influence over his family.
      </p>
      </div>
    </div>
  );
}
