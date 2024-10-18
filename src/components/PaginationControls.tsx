import { BiFirstPage, BiLastPage } from "react-icons/bi";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  page: string;
  prevPage?: string;
  nextPage?: string;
  firstPage?: string;
  lastPage?: string;
}

export const PaginationControls = ({
  page,
  prevPage,
  nextPage,
  firstPage,
  lastPage,
}: PaginationControlsProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href={`?page=${firstPage}`}>
            <BiFirstPage />
          </PaginationLink>
        </PaginationItem>
        {prevPage && (
          <PaginationItem>
            <PaginationPrevious href={`?page=${prevPage}`} />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        {nextPage && (
          <PaginationItem>
            <PaginationNext href={`?page=${nextPage}`} />
          </PaginationItem>
        )}
        {}
        <PaginationItem>
          <PaginationLink href={`?page=${lastPage}`}>
            <BiLastPage />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
