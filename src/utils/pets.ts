import AbbyOrphan from "../assets/pets/Abyssal_orphan_small_(follower).png";
import BabyMole from "../assets/pets/Baby_Mole_small_(follower).png";
import Baron from "../assets/pets/Baron_small_(follower).png";
import Bran from "../assets/pets/Bran_small_(follower).png";
import Butch from "../assets/pets/Butch_small_(follower).png";

type PetType = {
  name: string;
  uri: string;
  dropRate?: string;
  imgSizeMulti?: number;
};

export const BOSS_PETS: PetType[] = [
  { name: "Abyssal orphan", uri: AbbyOrphan, imgSizeMulti: 0.9 },
  { name: "Baby mole", uri: BabyMole, imgSizeMulti: 0.7 },
  { name: "Baron", uri: Baron, imgSizeMulti: 0.7 },
  { name: "Bran", uri: Bran },
  { name: "Butch", uri: Butch },
];

export const SKILLING_PETS: PetType[] = [];

export const OTHER_PETS: PetType[] = [];
