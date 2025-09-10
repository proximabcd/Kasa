import "../styles/collapse.scss"

function Collapse({ label, children }) {
    return (
        <details className="collapse">
            <summary className="collapse__label">{label}</summary>
            <div className="collapse__detail">{children}</div>
        </details>
    )
}

export default Collapse
