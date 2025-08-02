import AbbyOrphan from "../assets/pets/Abyssal_orphan_small_(follower).png";
import BabyMole from "../assets/pets/Baby_Mole_small_(follower).png";
import Baron from "../assets/pets/Baron_small_(follower).png";
import Bran from "../assets/pets/Bran_small_(follower).png";
import Butch from "../assets/pets/Butch_small_(follower).png";
import CallistoCub from "../assets/pets/Callisto_cub_(follower).png";
import Dom from "../assets/pets/Dom_(follower).png"

type PetSourceType =
  | "Boss"
  | "Minigame"
  | "Other"
  | "Raid"
  | "Skilling"
  | "Slayer"
  | "Wilderness";

type PetType = {
  name: string;
  uri: string;
  petSource: string;
  sourceType: PetSourceType;
  namePrefix?: string;
  dropRate?: string;
  imgSizeMulti?: number;
};

const WIKI_BASE_URL = "https://oldschool.runescape.wiki/w";

export const ALL_PETS: PetType[] = [
  {
    name: "Abyssal orphan",
    namePrefix: "the",
    uri: AbbyOrphan,
    petSource: "unsired",
    sourceType: "Boss",
    dropRate: "1/2,560",
    imgSizeMulti: 0.9,
  },
  {
    name: "Baby mole",
    namePrefix: "the",
    uri: BabyMole,
    petSource: "Giant Mole",
    sourceType: "Boss",
    dropRate: "1/3,000",
    imgSizeMulti: 0.7,
  },
  {
    name: "Baron",
    uri: Baron,
    petSource: "Duke Sucellus",
    sourceType: "Boss",
    dropRate: "1/2,500",
    imgSizeMulti: 0.7,
  },
  {
    name: "Bran",
    uri: Bran,
    petSource: "Branda the Fire Queen",
    sourceType: "Boss",
    dropRate: "1/3,000",
  },
  {
    name: "Butch",
    uri: Butch,
    petSource: "Vardorvis",
    sourceType: "Boss",
    dropRate: "1/3,000",
  },
  {
    name: "Callisto cub",
    uri: CallistoCub,
    petSource: "Callisto",
    sourceType: "Wilderness",
    dropRate: "1/1,500",
    imgSizeMulti: 0.8,
  },
  {
    name: "Dom",
    uri: Dom,
    petSource: "Doom of Mokhaiotl",
    sourceType: "Boss",
    imgSizeMulti: 0.6,
  },
];

export const convertToWikiLink = (name: string) => {
  return `${WIKI_BASE_URL}/${name.split(" ").join("_")}`;
};
