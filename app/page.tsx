"use client";

import { useEffect, useState } from "react";
import ActivityCard from "./components/ActivityCard";
import ActivityTable from "./components/ActivityTable";

export default function Home() {
  const [latest, setLatest] = useState<any>(null);
  const [logs, setLogs] = useState<any[]>([]);
  const [backendOnline, setBackendOnline] = useState<boolean>(true);

  const BACKEND_URL = "http://127.0.0.1:8000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liveRes = await fetch(`${BACKEND_URL}/api/live`);
        const logsRes = await fetch(`${BACKEND_URL}/api/logs`);

        if (!liveRes.ok || !logsRes.ok) throw new Error("Backend Error");

        const liveData = await liveRes.json();
        const logsData = await logsRes.json();

        setLatest(liveData);
        setLogs(logsData);
        setBackendOnline(true);
      } catch (err) {
        setBackendOnline(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard Monitoring Aktivitas</h1>

      {!backendOnline && (
        <div className="p-4 mb-4 bg-red-200 text-red-800 rounded-lg">
          Backend Offline (Pastikan FastAPI berjalan)
        </div>
      )}

      <ActivityCard
        activity={latest?.activity || null}
        timestamp={latest?.timestamp || null}
      />

      <ActivityTable logs={logs} />
    </div>
  );
}
