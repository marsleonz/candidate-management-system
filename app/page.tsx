import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex  flex-col items-center justify-between p-24 gap-3">
        <Input placeholder="this is input" />
        <Button>Submit</Button>
      </div>
      <div className="flex  flex-col items-center">
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </div>
    </main>
  );
}
