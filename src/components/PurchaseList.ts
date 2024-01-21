import React, { useState } from "react";

export default function PurchaseList() {
    const [items, setItems] = useState<PurchaseType[]>([
        {id: 1, name: 'Pizza'}, {id: 2, name: 'Juice'}
    ]);

    return (
        <ul>
        {items.map(o => <PurchaseItem key={o.id} item={o}/>)}
        </ul>;
    )
}