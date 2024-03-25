/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../../context/CartProvider";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
    const { CartItems } = useContext(CartContext);
    const { pathname } = useLocation();
    const user = localStorage.getItem("user");
    return (
        <header>
            <div className="header-row">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-mobile">
                            <i className="bi bi-list" id="btn-menu"></i>
                        </div>
                        <div className="header-left">
                            <Link to={"/"} className="logo">
                                LOGO
                            </Link>
                        </div>
                        <div className="header-center" id="sidebar">
                            <nav className="navigation">
                                <ul className="menu-list">
                                    <li className="menu-list-item">
                                        <Link to={"/"} className={`menu-link ${pathname == "/" && "active"}`}>
                                            ANASAYFA
                                        </Link>
                                    </li>
                                    <li className="menu-list-item megamenu-wrapper">
                                        <Link to={"/shop"} className={`menu-link ${pathname == "/shop" && "active"}`}>
                                            MAĞAZA
                                        </Link>
                                        <div className="menu-dropdown-wrapper">
                                            <div className="menu-dropdown-megamenu">
                                                <div className="megamenu-links">
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-products-title">Shop Style</h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Shop Standard</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Full</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Only Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Image Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Sub Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop List</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Hover Style 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Hover Style 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Hover Style 3</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-products-title">Filter Layout</h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Filter Side Out</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Filter Dropdown</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Filter Drawer</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-products-title">Shop Loader</h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Shop Pagination</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Infinity</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Load More</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cart Modal</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cart Drawer</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cart Page</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="megamenu-single">
                                                    <a href="#">
                                                        <img src="img/mega-menu.jpg" alt="" />
                                                    </a>
                                                    <h3 className="megamenu-single-title">JOIN THE LAYERING GANG</h3>
                                                    <h4 className="megamenu-single-subtitle">
                                                        Suspendisse faucibus nunc et pellentesque
                                                    </h4>
                                                    <Link to={"/shop"} className="megamenu-single-button btn btn-sm">
                                                        Shop Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-list-item">
                                        <Link
                                            to={"/contact"}
                                            className={`menu-link ${pathname == "/contact" && "active"}`}>
                                            İLETİŞİM
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <i className="bi-x-circle" id="close-sidebar"></i>
                        </div>
                        <div className="header-right">
                            <div className="header-right-links">
                                <Link to={"/auth"} className="header-account">
                                    <i className="bi bi-person"></i>
                                    <span className="i-tagger">Giriş Yap</span>
                                </Link>
                                <button className="search-button" onClick={() => props.setSearchModalShow("show")}>
                                    <i className="bi bi-search"></i>
                                    <span className="i-tagger">Ürün Ara</span>
                                </button>
                                <a href="#" className="heart-button">
                                    <i className="bi bi-heart"></i>
                                    <span className="i-tagger">Favorilerim</span>
                                </a>
                                <div className="header-cart">
                                    <Link to={"/cart"} className="header-cart-link">
                                        <i className="bi bi-bag"></i>
                                        <span className="header-cart-count">{CartItems.length}</span>
                                    </Link>
                                </div>
                                {user && (
                                    <button
                                        className="user-quit-button"
                                        onClick={() => {
                                            if (window.confirm("Çıkış yapmak istediğinize emin misiniz ?")) {
                                                localStorage.removeItem("user");
                                                window.location.href = "/";
                                            }
                                        }}
                                    >
                                        <i className="bi bi-box-arrow-right"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
