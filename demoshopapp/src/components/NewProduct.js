import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props) {

    function newParent(data) {
        console.log('inside new parent')
        console.log(data);
        props.onMain(data)
    }

    return (
        <div className='new-product'>
            <ProductForm onNew={newParent} />
        </div>
    )
}

export default NewProduct;