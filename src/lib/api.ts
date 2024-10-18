import parseLinkHeader from "parse-link-header";
import { Character } from "@/interfaces/character";
import { House } from "@/interfaces/house";

export async function fetchHouses(
  page: string,
  pageSize: string
): Promise<{
  houses: House[];
  prevPage?: string;
  nextPage?: string;
  firstPage?: string;
  lastPage?: string;
}> {
  try {
    const response = await fetch(
      `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`
    );

    const houses = (await response.json()) as House[];

    const linkHeader = response.headers.get("Link");
    const parsedLinks = parseLinkHeader(linkHeader);

    return {
      houses,
      prevPage: parsedLinks?.prev?.page,
      nextPage: parsedLinks?.next?.page,
      firstPage: parsedLinks?.first?.page,
      lastPage: parsedLinks?.last?.page,
    };
  } catch (error) {
    throw new Error(`Could not fetch page ${page} of houses. ${error}`);
  }
}

export async function fetchCharacter(url: string): Promise<Character> {
  try {
    const response = await fetch(url);
    const character = (await response.json()) as Character;

    return character;
  } catch (error) {
    throw new Error(`Could not fetch character at ${url}. ${error}`);
  }
}
