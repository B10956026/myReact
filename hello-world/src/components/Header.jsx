import React from "react"

export default class Header extends React.Component {
    render() {
        const title = this.props.title;
        const data = this.props.data || [];

        return (
        <div>
            I am Header: { title }
            <ul>
                {
                    data.map((ele, index) => {
                        return <li key={index.toString()}>{ ele }</li>
                    })
                }
            </ul>
        </div>            
        )
    }
}

// export default Header