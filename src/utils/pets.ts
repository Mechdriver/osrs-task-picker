import AbbyOrphan from "../assets/pets/Abyssal_orphan_small_(follower).png";
import BabyMole from "../assets/pets/Baby_Mole_small_(follower).png";
import Baron from "../assets/pets/Baron_small_(follower).png";
import Bran from "../assets/pets/Bran_small_(follower).png";
import Butch from "../assets/pets/Butch_small_(follower).png";

type PetType = {
  name: string;
  uri: string;
  petSource: string;
  namePrefix?: string;
  dropRate?: string;
  imgSizeMulti?: number;
};

const WIKI_BASE_URL = "https://oldschool.runescape.wiki/w";

export const BOSS_PETS: PetType[] = [
  {
    name: "Abyssal orphan",
    namePrefix: "the",
    uri: AbbyOrphan,
    petSource: "unsired",
    dropRate: "1/2,560",
    imgSizeMulti: 0.9,
  },
  {
    name: "Baby mole",
    namePrefix: "the",
    uri: BabyMole,
    petSource: "Giant Mole",
    dropRate: "1/3,000",
    imgSizeMulti: 0.7,
  },
  {
    name: "Baron",
    uri: Baron,
    petSource: "Duke Sucellus",
    dropRate: "1/2,500",
    imgSizeMulti: 0.7,
  },
  {
    name: "Bran",
    uri: Bran,
    petSource: "Branda the Fire Queen",
    dropRate: "1/3,000",
  },
  { name: "Butch", uri: Butch, petSource: "Vardorvis", dropRate: "1/3,000" },
];

export const SKILLING_PETS: PetType[] = [];

export const OTHER_PETS: PetType[] = [];

export const convertToWikiLink = (name: string) => {
  return `${WIKI_BASE_URL}/${name.split(" ").join("_")}`;
};
