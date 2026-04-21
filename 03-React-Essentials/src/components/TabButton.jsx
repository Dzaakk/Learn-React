// export default function TabButton({ label }) {
export default function TabButton({ children }) {
    return (
        <li>
            {/* <button>{label}</button> */}
            <button>{children}</button>
        </li>
    )
}