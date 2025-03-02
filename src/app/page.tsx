import { Button } from "./components/Button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-20">
      <Button>Primary</Button>

      <Button intent="secondary">Secondary</Button>

      <Button intent="danger">Danger</Button>

      <Button isDisabled={true}>Disabled</Button>
    </div>
  );
}
