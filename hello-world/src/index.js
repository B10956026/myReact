import React from 'react';
import ReactDOM from 'react-dom';

// 組件 & Props
import Header from "./components/Header"
import ListView from "./components/ListView"

class App extends React.Component {

  // 條件渲染 1.
  show(){
    return <div>I am show</div>
  }

  hide(){
    return <div>I am hide</div>
  }

  // 條件渲染 2.
  showAndHide(flag){
    if(flag){
      return this.show();
    }else{
      return this.hide();
    }
  }

  // 渲染方法
  render() {
    // JSX 語法
    const name = "Test"
    
    // 條件渲染
    const flag = true;

    // 列表 & Key 1.
    const names = ["AAA", "BBB", "CCC"]

    // 列表 & Key 2.
    const banner = [
      {
        "username"  : "SammyShark",
        "location"  : "Indian Ocean",
        "followers" : 987
      },
      {
        "username"  : "JesseOctopus",
        "location"  : "Pacific Ocean",
        "followers" : 432
      },
      {
        "username"  : "DrewSquid",
        "location"  : "Atlantic Ocean",
        "followers" : 321
      },
      {
        "username"  : "JamieMantisShrimp",
        "location"  : "Pacific Ocean",
        "followers" : 654
      }
    ]
    
    // 返回一個視圖
    return (
      <div>
        {/* JSX 語法注釋 */}
        {/* JSX 語法 */}
        <p>Hello World! { name }</p>
        
        {/* 條件渲染 0. */}
        {
          flag ? <div>Success</div> : <div>Failed</div>
        }

        {/* 條件渲染 1. */}
        {
          flag ? this.show() : this.hide()
        }

        {/* 條件渲染 2. */}
        {
          this.showAndHide(flag)
        }

        {/* 列表 & Key 1. */}
        <ul>
          {
            names.map(function(ele, index){
              return <li key={ index.toString() }>{ ele }</li>
            })
          }
        </ul>

        {/* 列表 & Key 2. */}
        <div>
          <ul>
            {
              banner.map((ele, index) => {
                return(
                  <li key={ index.toString() }>
                    <h3>Username: { ele.username }</h3>
                    <h4>Location: { ele.location }</h4>
                    <p>Followers: { ele.followers}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* 組件 & Props */}
        <Header title="item1" data= { names }/>
        <Header title="item2"/>
        <ListView />
    
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
