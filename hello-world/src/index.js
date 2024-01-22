import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  show(){
    return <div>I am show</div>
  }

  hide(){
    return <div>I am hide</div>
  }

  showAndHide(flag){
    if(flag){
      return this.show();
    }else{
      return this.hide();
    }
  }

  render() {
    const name = "Xie Dong-Han"
    const names = ["AAA", "BBB", "CCC"]
    
    const flag = true;
    
    return (
      <div>
        <p>Hello World! { name }</p>
        
        <ul>
          {
            names.map(function(ele, index){
              return <li>{ ele }</li>
            })
          }
        </ul>
        
        {
          flag ? <div>Success</div> : <div>Failed</div>
        }

        {
          flag ? this.show() : this.hide()
        }

        {
          this.showAndHide(flag)
        }
        
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     Hello World!
//   </React.StrictMode>,
//   document.getElementById('root')
// );
