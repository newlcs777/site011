export default function Card({ children }) {
  return (
    <div className="bg-white text-black rounded-2xl p-6 shadow-md">
      {children}
    </div>
  );
}