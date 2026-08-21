// 1_5_1 Extract a component
/* 
  Компонент Gallery содержит очень похожую разметку для двух профилей. Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. Для этого нужно будет определить props для компонента Profile.
*/

import { getImageUrl } from "./util";

type ProfileProps = {
name: string;
imageKey: string;
profession: string;
awardsNumber: number;
awardsList: string;
discovered: string;
}

function Profile ({
  name,
  imageKey,
  profession,
  awardsNumber,
  awardsList,
  discovered
}: ProfileProps){
return (
<section className="profile">
<h2>{name}</h2>
 <img
        className="avatar"
        src={getImageUrl(imageKey)}
        alt={name}
        width={70}
        height={70}
      />
       <ul>
        <li>
          <b>Profession: </b> 
          {profession}
        </li>
        <li>
          <b>Awards: {awardsNumber} </b> 
          ({awardsList})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
    <h1>Notable Scientists</h1>
    <Profile
      name="Maria Skłodowska-Curie"
      imageKey="Maria"
      profession="physicist and chemist"
      awardsNumber= {4}
      awardsList="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
      discovered="polonium (chemical element)"
    />

    <Profile
      name="Katsuko Saruhashi"
      imageKey="KatsukoSaruhashi"
      profession="geochemist"
      awardsNumber={2}
      awardsList="Miyake Prize for geochemistry, Tanaka Prize"
      discovered="a method for measuring carbon dioxide in seawater"
    />
    </div>
  );
}
