
import items from './items.json';



const Listing = () => {
   
    const goods = items;

   /* interface Item {
        listing_id: number;
        state: string;
        user_id: number;
        category_id: number;
        title: string;
        // Add other properties as needed
     }*/
    return (<div className='item-list'>

        {goods.map(el => {

            let title: string = el!.title!;
            let price: string = '';

            if (el.currency_code === 'EUR') {
                price = '€'+el.price;
            };

            if (el.currency_code === 'USD') {
                price = '$'+el.price;
            };

            if (el.currency_code === 'GBP') {
                price = el.price+' GBP';
            };

            if (title && title.length > 50) {
                
                title = title.slice(50) + '...';

            };

            let quantClass: string = '';

            if (el!.quantity! > 20) {

                quantClass = 'item-quantity level-high';

            };

            if (el!.quantity! <= 20 && el!.quantity! > 10) {

                quantClass = 'item-quantity level-medium';

            };

            if (el!.quantity! < 11) {

                quantClass = 'item-quantity level-low';

            };

            return <div className='item' key={el.listing_id}>
                                <div className="item-image">
                    <a href={el.url}>
                        <img src={el.MainImage?.url_fullxfull}/>
                    </a>
                    </div>
                    <div className="item-details">
                    <p className="item-title">{title}</p>
                    <p className="item-price">{price}</p>
                    <p className={quantClass}>{el.quantity} left</p>
                    </div>
                                </div>
        })}
    </div>)
};

export default Listing;