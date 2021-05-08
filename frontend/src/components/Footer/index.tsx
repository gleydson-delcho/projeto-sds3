
export default function Footer() {
    return (
        <footer className="footer py-3 mt-5 bg-dark">
            <div className="container">
                <p className="text-light">
                    App desenvolvido por
                    <a className="mx-2" href="https://github.com/gleydson-delcho" target="_blank" rel="noreferrer">
                        Gleydson Delcho
                    </a>
                </p>
                <p className="text-light">
                    <small>
                        <strong>Semana Spring React</strong>
                        <br />
                        Evento promovido pela escola DevSuperior:
                        <a className="mx-2" href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">
                            @devsuperior.ig
                        </a>
                    </small>
                </p>
            </div>
        </footer>
    )
}