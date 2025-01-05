function orderFormat(orders){
    return orders.map(function(order) {  //each element of the orders array is transformed by the function passed to map one at the time

        //get deliveryDuration
        var deliveryDuration = Math.round((new Date(order.deliveryDate) - new Date(order.orderDate)) / (1000 * 60 * 60 * 24));  //converts the difference from milliseconds to days

        //address-> building number, street name, city, country.
        var address = order.deliveryAddress.split(",");
        var deliveryCountry = address[3];
        var deliveryCity = address[2];
        var deliveryStreet = address[1];
        var buildingNumber = isNaN(Number(address[0])) ? address[0] : Number(address[0]);  
        //items -->calculate the total number of items.
        var itemsArr = order.items.split(',');  //get an array of item strings (itemA:3 , itemB:4)
        var totalItems = 0;
        for (var i = 0; i < itemsArr.length; i++) {
        var item = itemsArr[i];
        var quantity = Number(item.split(':')[1]);  //["item1", "2"] then access second [1] -->"2" to extract the quantity then convert it to a number
        totalItems += quantity;
        }
        return{
            orderId: order.orderId,
            customer: order.customer,
            totalItems: totalItems,
            orderDate: order.orderDate,
            deliveryDate: order.deliveryDate,
            deliveryDuration: deliveryDuration,
            deliveryCountry: deliveryCountry,
            deliveryCity: deliveryCity,
            deliveryStreet: deliveryStreet,
            buildingNumber: buildingNumber,
          };
    });
}
var orders = [
    {
      orderId: 'ORD001',
      customer: 'John Doe',
      items: 'item1:2,item2:1,item3:5',
      orderDate: '2023-12-01',
      deliveryDate: '2023-12-05',
      deliveryAddress: '123, Main Street, Springfield, USA',
    },
    {
      orderId: 'ORD002',
      customer: 'Jane Smith',
      items: 'itemA:3,itemB:4',
      orderDate: '2023-11-15',
      deliveryDate: '2023-11-20',
      deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
    },
    {
      orderId: 'ORD003',
      customer: 'Alice Johnson',
      items: 'itemX:1',
      orderDate: '2023-10-10',
      deliveryDate: '2023-10-15',
      deliveryAddress: '456, Pine Lane, Denver, USA',
    }
  ];
  console.log(orderFormat(orders));