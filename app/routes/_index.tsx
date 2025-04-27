import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/header.component";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-full w-full">
      <Header />
    </div>
  );
}
