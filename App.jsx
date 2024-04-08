const root = ReactDOM.createRoot(document.getElementById('root'));
  
function Tempo() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(Tempo, 1000);


