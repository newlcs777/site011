import Card from "../../../components/ui/Card";

export default function LoginCard({ children }) {
  return (
    <Card>
      <h2 className="font-semibold mb-4 text-center">
        Acesso Administrativo
      </h2>
      {children}
    </Card>
  );
}