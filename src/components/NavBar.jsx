function NavBar(){
  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-yellow-400 shadow-lg flex justify-around py-3">
        <button className="flex flex-col items-center text-sm focus:outline-none group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l7.89 7.89a5.972 5.972 0 008.429 0A5.972 5.972 0 0021 9M8 12h.01M12 12h.01M16 12h.01M9 16h6" />
          </svg>
          <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 text-xs">Tap</span>
        </button>

        <button className="flex flex-col items-center text-sm focus:outline-none group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 15h18M9 7V3m6 4V3m-6 8v4m6-4v4m-6 4h6" />
          </svg>
          <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 text-xs">Tasks</span>
        </button>

        <button className="flex flex-col items-center text-sm focus:outline-none group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.86 0-7 3.14-7 7h14c0-3.86-3.14-7-7-7z" />
          </svg>
          <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 text-xs">Wallet</span>
        </button>

        <button className="flex flex-col items-center text-sm focus:outline-none group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.518A9.993 9.993 0 0112 22a9.993 9.993 0 01-7.428-6.482m7.428-6.516A9.993 9.993 0 0122 12a9.993 9.993 0 01-6.482-7.428M12 2a9.993 9.993 0 017.428 6.482M9.878 9.878a3.5 3.5 0 014.244 0m-4.244 4.244a3.5 3.5 0 014.244 0m4.244-4.244a3.5 3.5 0 010 4.244m-4.244 4.244a3.5 3.5 0 010-4.244" />
          </svg>
          <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 text-xs">Friends</span>
        </button>
      </div>
  );
}

export default NavBar;
