import Banner from "./Banner";

function Home() {
  return (
    <div className="bg-red-400 px-3 pt-5">
      {/* Banner Section */}
      
      <div className="">
        <Banner/>
      </div>

      {/* Content Below Banner */}
      <div className="pt-[250px] ">
        <h1>Welcome to Cabzii</h1>
        <p>Your trusted travel partner for taxi, tours, and travel services.</p>
      </div>
    </div>
  );
}

export default Home;
