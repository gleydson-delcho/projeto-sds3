import { SalePage } from "../../types/sale"

type Props = {
    page: SalePage;
    onPageChange: Function;
}


export default function Pagination({page, onPageChange}: Props) {

    return (
        <div className="row d-flex">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disable' : ''}`}>
                        <button className="page-link" 
                            onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1} / {page.totalPages}</span>
                    </li>
                    <li className={`page-item ${ page.last ? 'disable' : ''}`}>
                        <button className="page-link" 
                            onClick={()=>onPageChange(page.number  + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
