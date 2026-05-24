import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About This Application",
  description:"This is an about me page."
};

export default function About() {
  return <h1>About me</h1>;
}
