export interface Log {
  id: number;
  activity: string;
  timestamp: string; // ISO string from backend
}

export interface Stats {
  duduk: number;
  berdiri: number;
  meninggalkan_meja: number;
}

export interface LatestActivity {
  id?: number;
  activity: string | null;
  timestamp: string | null;
}

export interface BackendLiveResponse {
  id?: number;
  activity: string | null;
  timestamp: string | null;
}

export type ActivityType = "duduk" | "berdiri" | "meninggalkan_meja";