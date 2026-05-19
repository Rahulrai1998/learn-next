import Hello from "../../../components/Hello";

export default function Onboarding() {
  console.log("This consoled on server"); //won't execute on the client
  return (
    <div className="text-2xl underline italic">
      {/* <Hello /> */}
      <div className="text-center">ONBOARDING</div>
    </div>
  );
}
