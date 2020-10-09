import React from 'react';

import './App.css';



// for explain you can back to class-38-React2 video
class App extends React.Component{
  constructor(){
    super();
    this.state={
      thingList:[  {name:"table", type:"wood"},  {name:"chair", type:"stainless steel"}   ]
    };
  }
  render(){
    return(
      <>
      <Header count={this.state.thingList.length} />
      <Footer/>
      <ThingList onThingCreatedProps={ (data) => this.onThingCreated(data) }   dataList = {this.state.thingList} />
      </>
    );
  }

  onThingCreated(data){
    let arr = this.state.thingList
    arr.push(data)
    

    this.setState( {thingList:arr} )
  }

}


class ThingList  extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      type:"",
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    
  }

  render(){
    return(
      <>

      <ul>

        {this.props.dataList.map( data => <ThingItem item= {data} />  )}
       
      </ul>

      <form onSubmit = { this.handleSubmit } >
                <label> Snack Name
                    <input type = "text" placeholder = "name" onChange = { this.handleChangeName } ></input>
                    <input type = "text" placeholder = "type" onChange = { this.handleChangeType }></input>
                    <input type = "submit" value = "Add"></input>
                </label>
            </form>

            </>
    );
  };

  handleChangeName(event){
    console.log(event.target.value)
    // console.log(event.target.value)
    this.setState({name:event.target.value})
  
  }

  handleChangeType(event){
    // console.log(event.target.value)
    this.setState({type:event.target.value})
  }


  handleSubmit(event){
    event.preventDefault()
    
    // alert(this.state.name)
    this.props.onThingCreatedProps(this.state)
  }

}






function ThingItem (props){
  return(
  <>
  <li>{props.item.name}</li>
  </>
  );
}


function Header(props){
  return(
    <>
    <h1>Welcome</h1>
    <p>Count:{props.count}</p>
    </>
  );
}

function Footer(){
  return(
    <p>footer lorem </p>
  );
}



export default App;
