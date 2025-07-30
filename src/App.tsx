import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { BOSS_PETS } from "./utils/pets";
import type { WheelData } from "react-custom-roulette/dist/components/Wheel/types";

function App() {
  const [spinning, setSpinning] = useState<boolean>(false);

  const onSpinClick = () => {
    setSpinning(true);
  };

  const onWheelStop = () => {
    setSpinning(false);
  };

  const petData: WheelData[] = BOSS_PETS.map((pet) => {
    return {
      option: pet.name,
      image: { uri: pet.uri, landscape: true, sizeMultiplier: pet.imgSizeMulti},
    };
  });

  return (
    <>
      <div className="flex flex-col items-center pt-16 min-h-screen bg-amber-100">
        <h1 className="font-semibold text-xl">OSRS Pet Hunt Picker</h1>
        <p className="p-1">Let the wheel decide your fate!</p>
        <div className="p-2">
          <Wheel
            mustStartSpinning={spinning}
            prizeNumber={0}
            data={petData}
            backgroundColors={[
              "#1F2056",
              "#601109",
              "#1F4721",
              "#603651",
              "#201d1d",
            ]}
            textColors={["#DBDB04"]}
            outerBorderColor="#000000"
            outerBorderWidth={3}
            innerBorderColor="#000000"
            innerRadius={20}
            radiusLineColor="#000000"
            radiusLineWidth={0}
            onStopSpinning={onWheelStop}
          />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-yellow-800 text-white rounded hover:bg-yellow-900"
          onClick={onSpinClick}
        >
          Spin the Wheel
        </button>
      </div>
    </>
  );
}

export default App;
