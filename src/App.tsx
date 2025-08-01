import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Wheel } from "react-custom-roulette";
import { ALL_PETS, convertToWikiLink } from "./utils/pets";
import type { WheelData } from "react-custom-roulette/dist/components/Wheel/types";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function App() {
  const [winningNdx, setWinningNdx] = useState<number>(0);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const { width, height } = useWindowSize();

  const onSpinClick = (dataLength: number) => {
    if (!spinning) {
      const ndx = Math.floor(Math.random() * dataLength);
      setWinningNdx(ndx);
      setSpinning(true);
    }
  };

  const onWheelStop = () => {
    setSpinning(false);
    setOpen(true);
  };

  const petData = ALL_PETS;
  const wheelData: WheelData[] = petData.map((pet) => {
    return {
      option: pet.name,
      image: {
        uri: pet.uri,
        landscape: true,
        sizeMultiplier: pet.imgSizeMulti,
      },
    };
  });

  const winner = petData[winningNdx];

  return (
    <>
      {open && <Confetti width={width} height={height} />}
      <div className="flex flex-col items-center pt-16 min-h-screen bg-amber-100">
        <h1 className="font-semibold text-xl">OSRS Pet Hunt Picker</h1>
        <p className="p-1">Let the wheel decide your fate!</p>
        <div className="p-2">
          <Wheel
            mustStartSpinning={spinning}
            prizeNumber={winningNdx}
            data={wheelData}
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
          onClick={() => onSpinClick(petData.length)}
        >
          Spin the Wheel
        </button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="pb-2">
                You're hunting{" "}
                {winner.namePrefix ? winner.namePrefix + " " : ""}
                {winner.name}!
              </DialogTitle>
              <DialogDescription className="flex flex-col items-center">
                <img className="max-h-36 pb-2" src={winner.uri} />
                <div className="flex flex-col gap-1">
                  <p>
                    {winner.namePrefix
                      ? winner.namePrefix.charAt(0).toUpperCase() +
                        winner.namePrefix.slice(1) +
                        " "
                      : ""}
                    <a
                      className="underline text-blue-500"
                      href={convertToWikiLink(winner.name)}
                      target="_blank"
                    >
                      {winner.name}
                    </a>{" "}
                    drops from{" "}
                    <a
                      className="underline text-blue-500"
                      href={convertToWikiLink(winner.petSource)}
                      target="_blank"
                    >
                      {winner.petSource}
                    </a>
                    .
                  </p>
                  {winner.dropRate && (
                    <p>
                      It has a{" "}
                      <span className="font-bold">{winner.dropRate}</span>{" "}
                      chance to drop.
                    </p>
                  )}
                  <p>Have fun and may luck be in your favor!</p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default App;
