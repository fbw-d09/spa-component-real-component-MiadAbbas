
import ReactDOM from "react-dom";

//create your function here

//remember to use ReactDOM.render to include the component into the website
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div class="card m-5" style={{width:'600px'}}>
    <img class="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg" alt="Card imag" />
    <div class="card-body">
      <h5 class="card-title">Bob Dylan</h5>
      <p class="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
      <a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">Go to wikipedia</a>
    </div>
  </div>
);
