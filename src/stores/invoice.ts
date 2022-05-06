import { defineStore } from 'pinia'

export const invoiceStore = defineStore('invoice', {
  state: () => {
    return {
      invoice: {
        client: {
          lastname: "",
          firstname: "",
          phoneNumber: "",
          totalPrice: "",
          tva: "0%",
          date: new Date(),
        },
        lines: [
          {
            product: "Ligne 1",
            price: "8.99",
            quantity: "1",
          },
        ],
      },
    }
  },

  getters: {
    clientFullName: (state) => {
      return `${state.invoice.client.firstname} ${state.invoice.client.lastname} (${state.invoice.client.phoneNumber})`
    },

    calculTotalPrice: (state) => {
      let total : number = 0;
      for (let line of state.invoice.lines) {
        total += Number(line.quantity) * Number(line.price);
      }
      return total;
    },
  },

  actions: {
  },
})
