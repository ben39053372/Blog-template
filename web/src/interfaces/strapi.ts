export type StrapiSingleTypesResponse<T> = {
  data: StrapiBaseResponse<T>;
  meta: {};
};

export type StrapiBaseResponse<T> = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
} & T;
