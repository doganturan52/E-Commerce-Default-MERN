import React, { useState, useEffect } from "react";
import "./Search_Modal.css";
import { message } from "antd";
import { Link } from "react-router-dom";

const Search_Modal = (props) => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const [searchResult, setSearchResult] = useState(undefined);

    const calculateDiscountedPrice = (item) => {
        const originalPrice = item.price.current;
        const discountedPrice = originalPrice - originalPrice * (item.price.discount / 100);
        return discountedPrice;
    };

    const handleSearch = async (searchTerm) => {

        if (searchTerm.trim().length === 0) {
            setSearchResult(undefined);
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/api/products/search/${searchTerm.trim()}`);

            if (response.ok) {
                const data = await response.json();
                setSearchResult(data);
            } else {
                message.error("Data could not be retrieved");
            }
        } catch (error) {
            console.log(error);
            message.error("Data could not be retrieved");
        }
    };

    const onInputChange = (e) => {
        const searchTerm = e.target.value;
        handleSearch(searchTerm);
    };

    return (
        <React.Fragment>
            <div className={`modal-search ${props.searchModalShow}`}>
                <div className="modal-wrapper">
                    <h3 className="modal-title">Aradığınız ürünü yazın</h3>
                    <form className="search-form" onSubmit={onInputChange}>
                        <input type="text" placeholder="Ürün ara" onChange={onInputChange} />
                        <button type="button">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                    <div className="search-results" style={{
                        display: `${!searchResult ? "none" : "grid"}`
                    }}>
                        <div className="search-heading">
                            <h2>Bulunan ürünler</h2>
                        </div>
                        <div className="results" style={{
                            justifyContent: "center",
                            display: `${searchResult?.length === 0 || !searchResult ? "flex" : "grid"}`,
                        }}>
                            {searchResult && searchResult.length > 0 ? (
                                searchResult.map((item) => {
                                    const discountedPrice = calculateDiscountedPrice(item);
                                    return (
                                        <Link to={`product/${item._id}`} className="result-item" key={item._id} onClick={() => props.setSearchModalShow("")}>
                                            <img src={item.img[0]} className="search-thumb" alt="" />
                                            <div className="search-info">
                                                <h4>{item.name}</h4>
                                                {/* <span className="search-sku">SKU: PD0016</span> */}
                                                <span className="search-price">${discountedPrice}</span>
                                            </div>
                                        </Link>
                                    );
                                })
                            ) : searchResult ? (
                                <div className="error-section">
                                    <div class="info">
                                        <div class="info__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"></path></svg>
                                        </div>
                                        <div class="info__title">Aranılan ürün bulunamadı !</div>
                                    </div>
                                </div>
                            ) : (
                                <span></span>
                            )}
                        </div>
                    </div>
                    <i className="bi bi-x-circle" id="close-search" onClick={() => props.setSearchModalShow("")}></i>
                </div>
                <div className="modal-overlay" onClick={() => props.setSearchModalShow("")}></div>
            </div>
        </React.Fragment>
    );
};

export default Search_Modal;
