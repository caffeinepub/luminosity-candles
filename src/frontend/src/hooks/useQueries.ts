import type { CandleCollection, CandleProduct } from "@/backend";
import { useActor } from "@/hooks/useActor";
import { useQuery } from "@tanstack/react-query";

export function useGetAllCollections() {
  const { actor, isFetching } = useActor();
  return useQuery<CandleCollection[]>({
    queryKey: ["collections"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCollections();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetProductsByCollection(collectionId: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<CandleProduct[]>({
    queryKey: ["products", collectionId.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProductsByCollectionId(collectionId);
    },
    enabled: !!actor && !isFetching,
  });
}
