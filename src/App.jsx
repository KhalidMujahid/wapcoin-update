import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [balance, setBalance] = useState(0);
  const [tapCurrent, setTapCurrent] = useState(5000);
  const [level, setLevel] = useState(1);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const tapTotal = 5000;

  
  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    const savedTapCurrent = localStorage.getItem("tapCurrent");
    const savedLevel = localStorage.getItem("level");

    if (savedBalance) setBalance(parseInt(savedBalance, 10));
    if (savedTapCurrent) setTapCurrent(parseInt(savedTapCurrent, 10));
    if (savedLevel) setLevel(parseInt(savedLevel, 10));
  }, []);

  
  const saveProgress = (newBalance, newTapCurrent, newLevel) => {
    localStorage.setItem("balance", newBalance);
    localStorage.setItem("tapCurrent", newTapCurrent);
    localStorage.setItem("level", newLevel);
  };

  const handleTap = () => {
    if (tapCurrent === 0) {
      alert("You have reached today's limit");
      return;
    }

    const newBalance = balance + 1;
    const newTapCurrent = tapCurrent - 1;
    let newLevel = level;

    
    if (newBalance % 10 === 0) {
      newLevel += 1;
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 2000);
    }

    
    setBalance(newBalance);
    setTapCurrent(newTapCurrent);
    setLevel(newLevel);
    saveProgress(newBalance, newTapCurrent, newLevel);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4">
      <div className="text-center mt-10">
        <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 animate-pulse">
          {balance}
        </div>
      </div>

     
      <div className="text-center text-3xl font-bold my-6 text-yellow-400">Level {level}</div>

      
      <div className="relative flex justify-center my-8">
        <div
          className="w-40 h-40 bg-cover bg-center cursor-pointer rounded-full shadow-lg transition-transform transform hover:scale-110 duration-200"
          style={{ backgroundImage: "url('https://cdn3d.iconscout.com/3d/premium/thumb/coin-5082230-4247982.png')" }}
          onClick={handleTap}
        >
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black py-1 px-3 rounded-lg text-2xl font-bold opacity-0 transition-opacity duration-300">
            +1
          </div>
        </div>
      </div>

      
      <div className="text-center mb-4 text-gray-300">
        <span>{tapCurrent}</span>/<span>{tapTotal}</span>
      </div>
      <div className="w-3/4 bg-gray-700 rounded-full h-4 overflow-hidden mb-10 shadow-inner">
        <div
          className="h-full bg-yellow-500 rounded-full transition-all duration-300"
          style={{ width: `${((tapTotal - tapCurrent) / tapTotal) * 100}%` }}
        ></div>
      </div>

      
      {showLevelUp && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 p-6 bg-yellow-500 text-black rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold">Level Up!</h2>
          <p className="mt-2 text-lg">Congratulations on reaching Level {level}!</p>
        </div>
      )}

      
      <NavBar />
    </div>
  );
}

export default App;

