
function App() {
  return (
    <div className="App" >
      Hello React!!!!!!!!!!!
      <Food />
    </div>
  );
}

function Food({name, picture}) {
  return (
      <div>
          <h3>I Love {name}</h3>
      </div>
  );
}

export default App;
