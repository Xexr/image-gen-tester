import { BaseProviderKey, ProviderKey } from "./provider-config";

export interface GenerateImageRequest {
  prompt: string;
  provider: BaseProviderKey;
  modelId: string;
  providerKey?: ProviderKey;
}

export interface GenerateImageResponse {
  image?: string;
  error?: string;
}
