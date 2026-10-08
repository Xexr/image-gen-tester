export type BaseProviderKey = "replicate" | "vertex" | "openai" | "fireworks";
export type ProviderKey = string; // Can now be any string identifier like "replicate-1", "replicate-2", etc.

// Provider configuration that includes provider type and model
export interface ProviderConfig {
  baseProvider: BaseProviderKey;
  displayName: string;
  iconPath: string;
  color: string;
  model: string;
  cost: string; // Cost per image, e.g. "$0.02"
}

// Base provider information
export const BASE_PROVIDERS: Record<
  BaseProviderKey,
  {
    displayName: string;
    iconPath: string;
    color: string;
    models: string[];
  }
> = {
  replicate: {
    displayName: "Replicate",
    iconPath: "/provider-icons/replicate.svg",
    color: "from-purple-500 to-blue-500",
    models: [
      "black-forest-labs/flux-1.1-pro",
      "black-forest-labs/flux-1.1-pro-ultra",
      "black-forest-labs/flux-dev",
      "black-forest-labs/flux-pro",
      "black-forest-labs/flux-schnell",
      "ideogram-ai/ideogram-v2",
      "ideogram-ai/ideogram-v2-turbo",
      "luma/photon",
      "luma/photon-flash",
      "recraft-ai/recraft-v3",
      "stability-ai/stable-diffusion-3.5-large",
      "stability-ai/stable-diffusion-3.5-large-turbo",
    ],
  },
  vertex: {
    displayName: "Vertex AI",
    iconPath: "/provider-icons/vertex.svg",
    color: "from-green-500 to-emerald-500",
    models: ["imagen-3.0-generate-001", "imagen-3.0-fast-generate-001"],
  },
  openai: {
    displayName: "OpenAI",
    iconPath: "/provider-icons/openai.svg",
    color: "from-blue-500 to-cyan-500",
    models: ["dall-e-2", "dall-e-3"],
  },
  fireworks: {
    displayName: "Fireworks",
    iconPath: "/provider-icons/fireworks.svg",
    color: "from-orange-500 to-red-500",
    models: [
      "accounts/fireworks/models/flux-1-dev-fp8",
      "accounts/fireworks/models/flux-1-schnell-fp8",
      "accounts/fireworks/models/playground-v2-5-1024px-aesthetic",
      "accounts/fireworks/models/japanese-stable-diffusion-xl",
      "accounts/fireworks/models/playground-v2-1024px-aesthetic",
      "accounts/fireworks/models/SSD-1B",
      "accounts/fireworks/models/stable-diffusion-xl-1024-v1-0",
    ],
  },
};

// Default providers setup - we can have multiple with the same base provider
export const PROVIDERS: Record<ProviderKey, ProviderConfig> = {
  "replicate-flux-schnell": {
    baseProvider: "replicate",
    displayName: "Replicate Flux Schnell",
    iconPath: BASE_PROVIDERS.replicate.iconPath,
    color: BASE_PROVIDERS.replicate.color,
    model: "black-forest-labs/flux-schnell",
    cost: "$0.003",
  },    
  "replicate-flux-dev": {
    baseProvider: "replicate",
    displayName: "Replicate Flux Dev",
    iconPath: BASE_PROVIDERS.replicate.iconPath,
    color: BASE_PROVIDERS.replicate.color,
    model: "black-forest-labs/flux-dev",
    cost: "$0.025",
  },  
  "replicate-flux-pro": {
    baseProvider: "replicate",
    displayName: "Replicate Flux Pro",
    iconPath: BASE_PROVIDERS.replicate.iconPath,
    color: BASE_PROVIDERS.replicate.color,
    model: "black-forest-labs/flux-1.1-pro",
    cost: "$0.04",
  },
  "replicate-flux-ultra": {
    baseProvider: "replicate",
    displayName: "Replicate Flux Ultra",
    iconPath: BASE_PROVIDERS.replicate.iconPath,
    color: BASE_PROVIDERS.replicate.color,
    model: "black-forest-labs/flux-1.1-pro-ultra",
    cost: "$0.06",
  },
  "recraft-v3": {
    baseProvider: "replicate",
    displayName: "Recraft V3",
    iconPath: BASE_PROVIDERS.replicate.iconPath,
    color: BASE_PROVIDERS.replicate.color,
    model: "recraft-ai/recraft-v3",
    cost: "$0.04",
  },
  "luma-photon": {
    baseProvider: "replicate",
    displayName: "Luma Photon",
    iconPath: BASE_PROVIDERS.replicate.iconPath,
    color: BASE_PROVIDERS.replicate.color,
    model: "luma/photon",
    cost: "$0.03",
  },
  "luma-photon-flash": {
    baseProvider: "replicate",
    displayName: "Luma Photon Flash",
    iconPath: BASE_PROVIDERS.replicate.iconPath,
    color: BASE_PROVIDERS.replicate.color,
    model: "luma/photon-flash",
    cost: "$0.01",
  },
  "replicate-sd3.5-large-turbo": {
    baseProvider: "replicate",
    displayName: "Replicate SD 3.5 Large Turbo",
    iconPath: BASE_PROVIDERS.replicate.iconPath,
    color: BASE_PROVIDERS.replicate.color,
    model: "stability-ai/stable-diffusion-3.5-large-turbo",
    cost: "$0.04",
  },
  "replicate-sd3.5-large": {
    baseProvider: "replicate",
    displayName: "Replicate SD 3.5 Large",
    iconPath: BASE_PROVIDERS.replicate.iconPath,
    color: BASE_PROVIDERS.replicate.color,
    model: "stability-ai/stable-diffusion-3.5-large",
    cost: "$0.065",
  },
  "vertex": {
    baseProvider: "vertex",
    displayName: "Vertex AI",
    iconPath: BASE_PROVIDERS.vertex.iconPath,
    color: BASE_PROVIDERS.vertex.color,
    model: "imagen-3.0-generate-001",
    cost: "$0.04",
  },
  "openai": {
    baseProvider: "openai",
    displayName: "OpenAI",
    iconPath: BASE_PROVIDERS.openai.iconPath,
    color: BASE_PROVIDERS.openai.color,
    model: "dall-e-3",
    cost: "$0.04",
  },
  "fireworks": {
    baseProvider: "fireworks",
    displayName: "Fireworks",
    iconPath: BASE_PROVIDERS.fireworks.iconPath,
    color: BASE_PROVIDERS.fireworks.color,
    model: "accounts/fireworks/models/flux-1-dev-fp8",
    cost: "$0.03",
  },
};

// Available models for each provider
export const getModelsForProvider = (providerKey: ProviderKey): string[] => {
  const baseProvider = PROVIDERS[providerKey].baseProvider;
  return BASE_PROVIDERS[baseProvider].models;
};

export const PROVIDER_ORDER: ProviderKey[] = [
  "replicate-flux-schnell",
  "replicate-flux-dev",
  "replicate-flux-pro",
  "replicate-flux-ultra",
  "recraft-v3",
  "luma-photon",
  "luma-photon-flash",
  "replicate-sd3.5-large-turbo",
  "replicate-sd3.5-large",
  "openai",
  "vertex",
  "fireworks",
];

export const initializeProviderRecord = <T>(defaultValue?: T) =>
  Object.fromEntries(
    PROVIDER_ORDER.map((key) => [key, defaultValue])
  ) as Record<ProviderKey, T>;
