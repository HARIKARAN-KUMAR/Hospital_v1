function DashboardCard({ title, count, color }) {
  return (
    <div className={`rounded-xl shadow-lg p-6 text-white ${color}`}>
      <h3 className="text-lg">{title}</h3>

      <h1 className="text-4xl font-bold mt-4">
        {count}
      </h1>
    </div>
  );
}

export default DashboardCard;