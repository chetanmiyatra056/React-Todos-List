import React from 'react'
// import './footer.css'

const Footer = () => {
    // let footerStyle = {
    //     position: "relative",
    //     top: "20vh",
    //     width: "100%"
    // }
    return (
        <footer className='bg-dark text-light py-2'>
            {/* style={footerStyle} */}
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}

export default Footer
