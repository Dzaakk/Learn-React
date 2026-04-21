// export default function TabButton({ label }) {
export default function TabButton({ children }) {
    function handleClick() {
        console.log('Hello!');

    }
    return (
        <li>
            {/* <button>{label}</button> */}
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}