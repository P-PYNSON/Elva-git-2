import backgroundImage from "./assets/background.webp";

export default function App() {
  return <div className="bg-fixed bg-cover bg-center h-screen w-screen flex flex-col items-center p-10" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="w-32 h-32 bg-black "></div>
  </div>;
}
