import HouseCard from "@/components/HouseCard";
import { PaginationControls } from "@/components/PaginationControls";
import { fetchHouses } from "@/lib/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const pageSize = searchParams["page_size"] ?? "10";

  const { houses, prevPage, nextPage, firstPage, lastPage } = await fetchHouses(
    page,
    pageSize
  );

  return (
    <main className="p-4">
      <h1 className="text-5xl text-center my-8">Ice and Fire Houses</h1>

      <section className="flex flex-col">
        {houses.map((house) => (
          <HouseCard house={house} key={house.url} />
        ))}
      </section>

      <PaginationControls
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
        firstPage={firstPage}
        lastPage={lastPage}
      />
    </main>
  );
}
