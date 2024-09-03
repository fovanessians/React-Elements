import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import Button from "https://esm.sh/react-bootstrap/Button";


// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

$(document).ready(function() {
  $("#Q").click(function() {
    $( "#Q" ).animate({opacity: "0.2"}).delay(1500).animate({opacity: "1.0"});
    const audio = document.createElement('audio');
    audio.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3';
    audio.play();
    
  });
  
   $("#W").click(function() {
    $( "#W" ).animate({opacity: "0.2"}).delay(1500).animate({opacity: "1.0"});
    const audio = document.createElement('audio');
    audio.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3';
    audio.play();
    
  });
  
   $("#E").click(function() {
    $( "#E" ).animate({opacity: "0.2"}).delay(1500).animate({opacity: "1.0"});
    const audio = document.createElement('audio');
    audio.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3';
    audio.play();
    
  });
  
     $("#A").click(function() {
    $( "#A" ).animate({opacity: "0.2"}).delay(1500).animate({opacity: "1.0"});
    const audio = document.createElement('audio');
    audio.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3';
    audio.play();
    
  });
  
   $("#S").click(function() {
    $( "#S" ).animate({opacity: "0.2"}).delay(1500).animate({opacity: "1.0"});
    const audio = document.createElement('audio');
    audio.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3';
    audio.play();
  });
  
    $("#D").click(function() {
    $( "#D" ).animate({opacity: "0.2"}).delay(1500).animate({opacity: "1.0"});
    const audio = document.createElement('audio');
    audio.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3';
    audio.play();
  });
  
      $("#Z").click(function() {
    $( "#Z" ).animate({opacity: "0.2"}).delay(1500).animate({opacity: "1.0"});
    const audio = document.createElement('audio');
    audio.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3';
    audio.play();
  });
  
        $("#X").click(function() {
    $( "#X" ).animate({opacity: "0.2"}).delay(1500).animate({opacity: "1.0"});
    const audio = document.createElement('audio');
    audio.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3';
    audio.play();
  });
  
   $("#C").click(function() {
    $( "#C" ).animate({opacity: "0.2"}).delay(1500).animate({opacity: "1.0"});
    const audio = document.createElement('audio');
    audio.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3';
    audio.play();
  });
 
});


//****************************************
//React Toggle information
//****************************************

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this)
    // Change code above this line
  }
  // Change code below this line
    toggleVisibility() {
    this.setState(state => {
      if (state.visibility === true) {
         return { visibility: false };
       } else {
         return { visibility: true };
      }
    });
  }


  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>{/* console.log(this.state.visibility) */}
        
          <Button variant="info" onClick={this.toggleVisibility}>Click Me</Button>{' '}
 
          <br/><h1><b>Now you see me!</b></h1>
        </div>
      );
    } else {
      return (
        <div>{/* console.log(this.state.visibility) */}
          <Button variant="info" onClick={this.toggleVisibility}>Click Me</Button>{' '}
        </div>
        
      );
    }
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));


//********************************************

/* rendering toggle and info */

//********************************************

class CheckBox extends React.Component{
  constructor() {
    super();
    this.state = {
      isChecked: false,
      name: ''
    };
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
  }
 
  handleChecked () {
    this.setState({
      isChecked: !this.state.isChecked 
    });
    //console.log(this.state.name);
  }
    
   
  
  render(){
    let txt;
    if (this.state.isChecked === true) {
      txt = 'checked'
      this.state.name = 'quote1'
      //console.log(this.state.name)
      
    } else {
      txt = 'unchecked'
      this.state.name = 'quote2'
      //console.log(this.state.name)
    }

    // remove () after handleChecked because you need pass 
    // reference to function
    // also add return before <div>
    return <div>
       <input type="checkbox" onChange={ this.handleChecked }/>
      <p>This box is {txt}</p>
      <p>{/* this.state.name*/}</p>
      <ToggleApp name={this.state.name} />
 </div>
    
  }
}

class ToggleApp extends React.Component {
  constructor(props) {
    super(props);
     this.toggleInfo = this.toggleInfo.bind(this)
  }
    toggleInfo() {
      console.log('ToggleApp component: ' + this.props.name);
      return this.props.name
    };
  
  render() {
    return (
    <div>
      {/* line */}
        {console.log(this.props.isChecked)}
      <button type="button" onClick={this.toggleInfo}>Info</button>
        <br /><h1>{this.props.name}</h1><br />
      {/* line */}
    </div>
    );
  }
};

ReactDOM.render(
  <CheckBox/>,
  document.getElementById('root')
);

