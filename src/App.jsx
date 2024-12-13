function App() {
  const handleMinimize = () => {    
    window.electronAPI.minimize();
  };
  return (
    <>
      hello world
      <div onClick={handleMinimize}>minimize</div>
    </>
  )
}

export default App
