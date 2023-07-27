

const Control = (props) => {
    return (
        <div style={{backgroundColor: 'green'}}>
            <button onClick={props.increment}> + </button>
            <button onClick={props.decrement}> - </button>
        </div>
    )
}

export default Control;