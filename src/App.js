import './App.css';
import ProfileComponent from './profile/profileComponent';
import myImage from './profile/safa.png';



function App() {

  const handelName = (name ) => {
    alert(`Hi, I am ${name}`)
}
const imgStyle = {
  margin: '16px',
  padding: '16px',
  boxSizing: 'border-box',
  borderRadius: '5px',
  boxShadow: '0 2px 5px cyan'
}

  return (
    <div className="App">
      <ProfileComponent fullName="Safa ALATRECH" bio="Born on 20th January, 1996 in Tunisia" 
          profession="Full Stack JS Developer" myName= {handelName}> <img src={myImage} alt="Safa " style={imgStyle}/> </ProfileComponent>
    </div>
  );
}

export default App;
