"use client";

interface Log {
  id: number;
  activity: string;
  timestamp: string;
}

export default function ActivityTable({ logs }: { logs: Log[] }) {
  return (
    <div className="border rounded-xl p-4 mt-6">
      <h2 className="text-lg font-semibold mb-3">Riwayat Aktivitas</h2>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">ID</th>
            <th className="p-2">Aktivitas</th>
            <th className="p-2">Waktu</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.id}</td>
              <td className="p-2 capitalize">{item.activity}</td>
              <td className="p-2">{item.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
