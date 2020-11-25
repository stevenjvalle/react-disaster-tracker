import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} /> 
            <h1>Fetching Data</h1> 
        </div>
    )
}

export default Loader
