import Hello from "./components/Hello";

export default function Home() {
  console.log("This consoled on server"); //won't execute on the client
  return (
    <div className="text-5xl underline">
      <Hello />
    </div>
  );
}
