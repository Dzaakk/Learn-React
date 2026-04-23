// export default function TabButton({ label }) {
export default function TabButton({ children, onSelect, isSelected }) {
    console.log('TABBUTTON EXECUTING');

    return (
        <li>
            {/* <button>{label}</button> */}
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}