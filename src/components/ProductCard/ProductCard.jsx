import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { title, price, description, image, rating } = product;
    return (
        <article className="product-card">
            <img src={image} alt={`${title} image`} width={200} />
            <h3 className="product-title">{title}</h3>
            <p className="product-description">{description}</p>
            <p className="product-price">${price}</p>
            <p className="product-rating">♥ {rating.rate}</p>
        </article>
    );
};

export default ProductCard;
