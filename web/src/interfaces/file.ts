export type MediaFile = {
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: {
    small: Format;
    thumbnail: Format;
  };
  previewUrl?: string;
  provider: string;
  provider_metadata?: null;
} & Format;

export type Format = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};
