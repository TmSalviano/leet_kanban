import CardItem from "@/components/template/CardItem";
import Page from "@/components/template/Page";
import VisualBoard from "@/components/template/VisualBoard";
import Image from "next/image";

export default function Home() {
  return (
    <Page>
      <VisualBoard
        title="Today"
        color="bg-blue-950"
        circle_color="bg-blue-500"
        CardItems={[
          <CardItem color="bg-blue-950" key={1} text={"Random Exercise"} href={"/random_exercise"} />,
          <CardItem color="bg-blue-950" key={2} text={"Random Exercise"} href={"/random_exercise"} />,
          <CardItem color="bg-blue-950" key={3} text={"Random Exercise"} href={"/random_exercise"} />,
        ]}
      />
      <VisualBoard
        title="Haven't solved"
        color="bg-red-950"
        circle_color="bg-red-500"
        CardItems={[
          <CardItem color="bg-red-950" key={4} text={"Random Exercise"} href={"/random_exercise"} />,
          <CardItem color="bg-red-950" key={5} text={"Random Exercise"} href={"/random_exercise"} />,
          <CardItem color="bg-red-950" key={6} text={"Random Exercise"} href={"/random_exercise"} />,
        ]}
      />
      <VisualBoard
        title="Needs Review"
        color="bg-yellow-600"
        circle_color="bg-yellow-500"
        CardItems={[
          <CardItem color="bg-yellow-600" key={7} text={"Random Exercise"} href={"/random_exercise"} />,
          <CardItem color="bg-yellow-600" key={8} text={"Random Exercise"} href={"/random_exercise"} />,
          <CardItem color="bg-yellow-600" key={9} text={"Random Exercise"} href={"/random_exercise"} />,
        ]}
      />
      <VisualBoard
        title="Done"
        color="bg-green-950"
        circle_color="bg-green-500"
        CardItems={[
          <CardItem color="bg-green-950" key={10} text={"Random Exercise"} href={"/random_exercise"} />,
          <CardItem color="bg-green-950" key={11} text={"Random Exercise"} href={"/random_exercise"} />,
          <CardItem color="bg-green-950" key={12} text={"Random Exercise"} href={"/random_exercise"} />,
        ]}
      />
    </Page>
  );
}
