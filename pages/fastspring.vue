<template>
  <div>
    <section class="mt-10">
      
      <article>
        <PageHeader title="FastSpring Pop-up Storefront !!!" />
      </article>

      <!-- This is the Row container for the Products Page -->
      <article class="flex flex-row justify-around pt-10">

        <!-- Virtual Skateboard -->
        <div class="w-64 bg-blue-300 border-2 border-blue-500 rounded flex flex-col">
          <h3 class="text-center text-2xl">
            <span data-fsc-item-path="virtual-skateboard" data-fsc-item-display></span>
          </h3>
          <img data-fsc-item-path="virtual-skateboard" data-fsc-item-image />
          <h6 class="text-sm">Description Summary:</h6>
          <span data-fsc-item-path="virtual-skateboard" data-fsc-item-description-summary></span>
          <h4 class="bg-white text-center">Price: <span class="text-green-700 text-2xl" data-fsc-item-path="virtual-skateboard" data-fsc-item-price></span></h4>
          <button class="bg-green-500 p-2 handwriting" data-fsc-item-path="virtual-skateboard" data-fsc-item-path-value="virtual-skateboard" data-fsc-action="Add" data-fsc-item-selection-smartdisplay-inverse>Add to Cart</button>
          <button class="bg-red-500 p-2 handwriting" data-fsc-item-path="virtual-skateboard" data-fsc-item-path-value="virtual-skateboard" data-fsc-action="Remove" data-fsc-item-selection-smartdisplay>Remove from Cart</button>
        </div>

        <!-- Virtual Yoyo -->
        <div class="w-64 bg-blue-300 border-2 border-blue-500 rounded flex flex-col">
          <h3 class="text-center text-2xl">
            <span data-fsc-item-path="virtual-yoyo" data-fsc-item-display></span>
          </h3>
          <img data-fsc-item-path="virtual-yoyo" data-fsc-item-image />
          <h6 class="text-sm">Description Summary:</h6>
          <span data-fsc-item-path="virtual-yoyo" data-fsc-item-description-summary></span>

          <h4 class="bg-white text-center">
            Price: <span class="text-green-700 text-xl" data-fsc-item-path="virtual-yoyo" data-fsc-item-price></span> 
            x 
            <span data-fsc-item-path="virtual-yoyo" data-fsc-item-quantity></span> 
            =       
            <span class="text-green-700 text-xl" data-fsc-item-path="virtual-yoyo" data-fsc-item-priceTotalValue></span>
          </h4>

          <div class="text-center">
            Quantity:
            <select v-model="qty">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button class="bg-green-500 p-2 handwriting" @click="addQty()">Update Quantity</button>
        </div>

      
      </article>

      <h2 class="text-3xl text-center">
        Total:
        <span data-fsc-order-total></span>
      </h2>
      <!-- Submit Button -->
      <section>
        <button class="border-2 border-blue-500 rounded-full px-2 bg-blue-100 mx-5" data-fsc-action="Reset">Reset</button>
        <button class="border-2 border-green-500 rounded-full px-2 bg-green-100 mx-5" data-fsc-action="Checkout">Check Out</button>
        <button class="border-2 border-blue-500 rounded-full px-2 bg-blue-100 mx-5" data-fsc-action="PaypalCheckout">Check out with PayPal</button>

      </section>

    </section>
  </div>
</template>


<script>
import PageHeader from "~/components/PageHeader";

export default {
  data: function () {
    return {
      qty: 0
    }
  },
  components: {
    PageHeader
  },
  methods: {
    addQty(){
      fastspring.builder.update('virtual-yoyo',this.qty);
    },
    // addItem: function (item){
    //   fastspring.builder.add(item, function(data){
    //     console.log("added " + item + 'and it resulted in the following order object', data);
    //   });
    // },
    // removeItem: function (item){
    //   fastspring.builder.remove(item, function(data){
    //     console.log("Removed " + item + 'and it resulted in the following order object', data);
    //   });    
    // },
  },
};
</script>
