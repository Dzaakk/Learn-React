// export default function TabButton({ label }) {
export default function TabButton({ children, onSelect }) {
    return (
        <li>
            {/* <button>{label}</button> */}
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}