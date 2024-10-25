export type StrapiSingleTypesResponse<T> = {
  data: StrapiBaseResponse<T>;
  meta: {};
};

export type StrapiCollectionTypesResponse<T> = {
  data: StrapiBaseResponse<T>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiBaseResponse<T> = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
} & T;
