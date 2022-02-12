import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item, index) => {
    return (
      <>
        <Card key={item.id} {...item}></Card>
        {index !== data.length - 1 && <div className="separator" />}
      </>
    );
  });
  return (
    <>
      <Navbar></Navbar>
      <div className="container">{cards}</div>
    </>
  );
}
