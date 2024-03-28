import Card from "../Card";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-screen-xl bg-gradient-to-r from-indigo-800 to-pink-900 px-6 mx-auto grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-6 py-10">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Home;
