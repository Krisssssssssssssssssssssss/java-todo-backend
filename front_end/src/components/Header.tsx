import { Link, useLocation } from 'react-router-dom';

export function Header() {
    const location = useLocation();

    return (
        <div className="nav-bar">
            <div className="inner">
                {location.pathname === '/' ? (
                    <>
                        <Link to="/" className="anchor-tag">
                            <h1>Kristijan's notes</h1>
                        </Link>
                        <form className="search-div form-inline">
                            <input
                                type="text"
                                className="form-control mr-sm-2 search-input"
                                placeholder="Search a note"
                            />
                            <button className="btn my-2 my-sm-0 form-control-sm mt-1 mb-2 btn general-btn">
                                Search
                            </button>
                            <i className="fa-solid fa-bars mr-sm-2 my-sm-0 bars"></i>
                        </form>
                    </>
                ) : (
                    <>
                        <Link to="/" className="anchor-tag">
                            <h1>Kristijan's notes</h1>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
export default Header;
