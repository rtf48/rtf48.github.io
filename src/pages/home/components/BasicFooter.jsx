export default function BasicFooter() {
    return (
        <footer>
            <div className="container-fluid bg-body-secondary pt-5 pb-5 text-center">
                <div className="container pt-5 pb-5"> 
                <button
                    className="btn bg-body-secondary"
                    onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}}
                    >
                    <h4>Back to Top</h4>
                </button>
                </div>
                <p>Copyright © 2025 Richard Fischer</p>
            </div>
        </footer>
    );
}