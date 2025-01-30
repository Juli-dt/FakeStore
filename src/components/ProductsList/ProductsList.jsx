import React, { useState } from 'react';
import useFetchProducts from "../../hooks/useFetchProducts";
import Header from "../Header/Header";
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';

const ProductsList = () => {
    const { products, isLoading, error } = useFetchProducts();
    const [filterOption, setFilterOption] = useState('all')

    const handleChange = (e) => {
        const selectedOption = e.target.value;
        setFilterOption(selectedOption)
    }
    
    const renderProducts = () => {

        const sortedProducts = [...products]
if (filterOption === 'price') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (filterOption === 'rating') {
            sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        }

        if (sortedProducts.length === 0) {
            return <p>No se encontraron productos con el filtro seleccionado.</p>;
        }

        return (
            <section className="products-grid">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        );

    }
    const renderContent = () => {
        if (isLoading) return <p className="loading-message">Cargando...</p>;
        if (error) return <p className="error-message">Error al intentar traer los productos</p>;
        return renderProducts();
    };

    return (
        <>
            <Header appName="Fakstore" />
            <div className="products-container">
                <h2 className="products-title">Productos</h2>
                <div>
                    <label htmlFor="filter"> Filtrar por</label>
                    <select id="filter" value={filterOption} onChange={handleChange}>
                        <option value="all">Todos</option>
                        <option value="price">Precio</option>
                        <option value="rating">Calificación</option>
                        </select>
                        
                </div>
                {renderContent()}
                {console.log(filterOption)}
            </div>
        </>
    );
};

export default ProductsList;
