import React,{Component} from 'react';

class Form extends Component{
  constructor(){
      super();
      this.state={
          name:'',
          age:'',
          email:'',
          phone:''

      }
  }

  changeText=(e)=>{
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
  }
  submitForm=(e)=>{
    //   to prevent form from submiting
    e.preventDefault();
  }

  render(){
      return(
          <div>
              <form>
                <br/>
                <input type="text" name="name" placeholder="name" onChange={this.changeText}/>
                <br/>
                <input type="text" name="age" placeholder="age"  onChange={this.changeText}/>
                <br/>
                <input type="text" name="email" placeholder="email" onChange={this.changeText}/>
                <br/>
                <input type="text" name="phone" placeholder="phone" onChange={this.changeText}/>
                <br/>
                <button onClick={this.submitForm}>submit</button>
              </form>
              {
                  this.state.email
              }
          </div>
          
      );
  }
}

export default Form;